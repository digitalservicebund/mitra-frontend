import{r as l,o as m,c as f,a as _,b as h,d as v,P as y}from"./vendor.71713098.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};b();const E="modulepreload",a={},g="/mitra-frontend/",c=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${g}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":E,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((p,d)=>{o.addEventListener("load",p),o.addEventListener("error",d)})})).then(()=>i())},L=[{name:"mitra-frontend-open-playbook",path:"/mitra-frontend/open-playbook",component:()=>c(()=>import("./open-playbook.dbb5a1ab.js"),["assets/open-playbook.dbb5a1ab.js","assets/NavigateToHome.218aa30c.js","assets/provide.ff65ab89.js","assets/vendor.71713098.js"]),props:!0},{name:"mitra-frontend-open-contract",path:"/mitra-frontend/open-contract",component:()=>c(()=>import("./open-contract.8a0b6c1e.js"),["assets/open-contract.8a0b6c1e.js","assets/NavigateToHome.218aa30c.js","assets/provide.ff65ab89.js","assets/vendor.71713098.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>c(()=>import("./index.a1e8716b.js"),["assets/index.a1e8716b.js","assets/index.b7ee586f.css","assets/vendor.71713098.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>c(()=>import("./_id_.a06added.js"),["assets/_id_.a06added.js","assets/_id_.5319c502.css","assets/vendor.71713098.js","assets/provide.ff65ab89.js"]),props:!0}];var P=(s,i)=>{const n=s.__vccOpts||s;for(const[r,e]of i)n[r]=e;return n};const O={};function k(s,i){const n=l("router-view");return m(),f(n)}var A=P(O,[["render",k]]);const R=_({history:h(),routes:L}),u=v(A).use(R).use(y);u.directive("focus",{mounted(s){s.focus()}});u.mount("#app");export{P as _};
