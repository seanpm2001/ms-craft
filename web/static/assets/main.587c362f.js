const f="modulepreload",E=function(e){return"/static/"+e},u={},d=function(n,o,s){if(!o||o.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(o.map(t=>{if(t=E(t),t in u)return;u[t]=!0;const i=t.endsWith(".css"),_=i?'[rel="stylesheet"]':"";if(!!s)for(let l=a.length-1;l>=0;l--){const c=a[l];if(c.href===t&&(!i||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${_}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":f,i||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),i)return new Promise((l,c)=>{r.addEventListener("load",l),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())},m={".intro":()=>d(()=>import("./intro.bd916a6e.js"),[]),"[data-property]":()=>d(()=>import("./property.70ec5736.js"),[]),"[data-toggle]":()=>d(()=>import("./toggle.143b9501.js"),[]),"x-svelte":()=>d(()=>import("./svelte.562d603e.js").then(e=>e.a),[])},h=e=>{Object.keys(m).forEach(n=>{const o=m[n];(s=>{s&&s.length&&o().then(({default:a})=>a(s))})(e.querySelectorAll(n))}),Array.prototype.forEach.call(e.querySelectorAll("[target=_blank]"),n=>n.setAttribute("rel","noopener"))};(e=>{document.readyState!=="loading"?e():document.addEventListener("DOMContentLoaded",e)})(()=>{h(document),addEventListener("keydown",e=>{e.code==="Tab"&&document.body.classList.add("is-tabbing")}),addEventListener("mousedown",()=>{document.body.classList.remove("is-tabbing")})});export{d as _};