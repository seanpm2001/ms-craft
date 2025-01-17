import throttle from './util/throttle';
import { writable } from 'svelte/store';

export const screen = writable({
    is2xs: matchMedia('(min-width: 380px)').matches,
    isXs: matchMedia('(min-width: 460px)').matches,
    isSm: matchMedia('(min-width: 640px)').matches,
    isMd: matchMedia('(min-width: 768px)').matches,
    isLg: matchMedia('(min-width: 1024px)').matches,
    isXl: matchMedia('(min-width: 1280px)').matches
});

addEventListener('resize', throttle(() => {
    screen.set({
        is2xs: matchMedia('(min-width: 380px)').matches,
        isXs: matchMedia('(min-width: 460px)').matches,
        isSm: matchMedia('(min-width: 640px)').matches,
        isMd: matchMedia('(min-width: 768px)').matches,
        isLg: matchMedia('(min-width: 1024px)').matches,
        isXl: matchMedia('(min-width: 1280px)').matches
    });
}, 1000 / 30, 'prepare'));
