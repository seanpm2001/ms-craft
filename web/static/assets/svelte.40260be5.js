import{_ as a}from"./main.dc611ec1.js";function u(){}function E(o,t){return o!=o?t==t:o!==t||o&&typeof o=="object"||typeof o=="function"}function p(o,t,n){o.insertBefore(t,n||null)}function d(o){o.parentNode.removeChild(o)}Promise.resolve();const _=()=>a(()=>import("./store.f38cf50d.js"),["assets/store.f38cf50d.js","assets/main.dc611ec1.js","assets/main.93622f66.css"]),m={},y=o=>{o.forEach(t=>{const n=t.getAttribute("component"),e=m[n];e&&Promise.all([e(),_()]).then(([{default:c},{default:r}])=>{const s=t.querySelectorAll(":scope > template"),l={};s.forEach(f=>{const i=f.getAttribute("slot");l[i||"default"]=f.content}),t.innerHTML="",new c({target:t,store:r,props:{...t.dataset,$$slots:h(l),$$scope:{}}})})})};function h(o){const t={};for(const e in o)o.hasOwnProperty(e)&&(t[e]=[n(o[e])]);function n(e){const c=[...e.childNodes];return function(){return{c:u,l:u,m:(r,s)=>{Array.prototype.forEach.call(c,l=>{p(r,l,s)})},d:r=>{r&&Array.prototype.forEach.call(c,s=>{d(s)})}}}}return t}const A=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{A as a,u as n,E as s};
