import{n as p,s as f}from"./svelte.562d603e.js";import"./main.587c362f.js";const u=i=>{let a=i.toString(),e=a.length,t=0,h;if(e===0)return t;for(let n=0;n<e;n++)h=a.charCodeAt(n),t=(t<<5)-t+h,t|=0;return Math.abs(t).toString()},d={},l=(i,a,...e)=>{let t=u(i),h=(...n)=>{const r=Date.now();d[t]?d[t]+a<r&&(d[t]=r,i(...n)):(d[t]=r,i(...n))};if(e.length===1&&e[0]==="prepare")return h;h(...e)},m=[];function w(i,a=p){let e;const t=new Set;function h(c){if(f(i,c)&&(i=c,e)){const o=!m.length;for(const s of t)s[1](),m.push(s,i);if(o){for(let s=0;s<m.length;s+=2)m[s][0](m[s+1]);m.length=0}}}function n(c){h(c(i))}function r(c,o=p){const s=[c,o];return t.add(s),t.size===1&&(e=a(h,n)||p),c(i),()=>{t.delete(s),t.size===0&&e&&(e(),e=null)}}return{set:h,update:n,subscribe:r}}const x=w({is2xs:matchMedia("(min-width: 380px)").matches,isXs:matchMedia("(min-width: 460px)").matches,isSm:matchMedia("(min-width: 640px)").matches,isMd:matchMedia("(min-width: 768px)").matches,isLg:matchMedia("(min-width: 1024px)").matches,isXl:matchMedia("(min-width: 1280px)").matches});addEventListener("resize",l(()=>{x.set({is2xs:matchMedia("(min-width: 380px)").matches,isXs:matchMedia("(min-width: 460px)").matches,isSm:matchMedia("(min-width: 640px)").matches,isMd:matchMedia("(min-width: 768px)").matches,isLg:matchMedia("(min-width: 1024px)").matches,isXl:matchMedia("(min-width: 1280px)").matches})},1e3/30,"prepare"));export{x as screen};
