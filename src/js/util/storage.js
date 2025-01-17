/**
 * Stores or retrieves a value in the local storage. If a value is provided, the function will store it. Otherwise, it will attempt to retrieve it.
 *
 * @param {string} key - The name of the key in the local storage.
 * @param {*} [value=undefined] - Optional. The value to be stored. If not provided, the function will attempt to retrieve the value associated with the provided key.
 * @param {*} [fallback=null] - Optional. The value to be returned if the key does not exist in the local storage.
 *
 * @returns {*} The stored value or the retrieved value if the key exists in the local storage. If the key does not exist, returns the fallback value.
 */
export function local(key, value = undefined, fallback = null) {
    if (value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));

        return value;
    }

    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }

    return fallback;
};

/**
 * Stores or retrieves a value in the session storage. If a value is provided, the function will store it. Otherwise, it will attempt to retrieve it.
 *
 * @param {string} key - The name of the key in the session storage.
 * @param {*} [value=undefined] - Optional. The value to be stored. If not provided, the function will attempt to retrieve the value associated with the provided key.
 * @param {*} [fallback=null] - Optional. The value to be returned if the key does not exist in the session storage.
 *
 * @returns {*} The stored value or the retrieved value if the key exists in the session storage. If the key does not exist, returns the fallback value.
 */
export function session(key, value = undefined, fallback = null) {
    if (value !== undefined) {
        sessionStorage.setItem(key, JSON.stringify(value));

        return value;
    }

    if (sessionStorage.getItem(key)) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    return fallback;
};

/**
 * Sets a cookie with a certain value and expiry date, or retrieves the value of a cookie.
 *
 * @param {string} key - The name of the cookie.
 * @param {*} [value=undefined] - Optional. The value to be stored in the cookie. If not provided, the function will attempt to retrieve the cookie's value.
 * @param {number} [expires=3.154e+7] - Optional. The expiry date of the cookie in milliseconds since the Unix epoch. By default, the cookie expires after one year.
 *
 * @returns {string} The stored value or the retrieved value if the cookie exists. If the cookie does not exist or no value is provided, returns an empty string.
 */
export function cookie(key, value = undefined, expires = 3.154e+7) {
    if (value === undefined) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }

        return '';
    }

    document.cookie = `${key}=${value};expires=${expiration(expires).toUTCString()};path=/;secure=true`;
}

/**
 * Sets the expiration time for a cookie.
 *
 * @param {number} expires - The expiry date of the cookie in milliseconds since the Unix epoch.
 *
 * @returns {number} The exact expiry date and time of the cookie in milliseconds since the Unix epoch.
 */
function expiration(expires) {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * expires;

    return now.setTime(expireTime);
}
