import{r as d,o as m,c as f,a as _,b as h,d as v,P as y}from"./vendor.71713098.js";const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};E();const g="modulepreload",a={},L="/mitra-frontend/",c=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${L}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":g,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((p,l)=>{o.addEventListener("load",p),o.addEventListener("error",l)})})).then(()=>i())},P=[{name:"mitra-frontend-open-playbook",path:"/mitra-frontend/open-playbook",component:()=>c(()=>import("./open-playbook.0645c6e7.js"),["assets/open-playbook.0645c6e7.js","assets/NavigateToHome.1a50a240.js","assets/provide.32d92661.js","assets/vendor.71713098.js"]),props:!0},{name:"mitra-frontend-open-contract",path:"/mitra-frontend/open-contract",component:()=>c(()=>import("./open-contract.6f49d6ba.js"),["assets/open-contract.6f49d6ba.js","assets/NavigateToHome.1a50a240.js","assets/provide.32d92661.js","assets/vendor.71713098.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>c(()=>import("./index.64c79909.js"),["assets/index.64c79909.js","assets/index.8ed648ad.css","assets/vendor.71713098.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>c(()=>import("./_id_.9a46d509.js"),["assets/_id_.9a46d509.js","assets/_id_.c5b586b8.css","assets/vendor.71713098.js","assets/provide.32d92661.js"]),props:!0}];var O=(s,i)=>{const n=s.__vccOpts||s;for(const[r,e]of i)n[r]=e;return n};const b={};function k(s,i){const n=d("router-view");return m(),f(n)}var A=O(b,[["render",k]]);const R=_({history:h(),routes:P}),u=v(A).use(R).use(y);u.directive("focus",{mounted(s){s.focus()}});u.mount("#app");export{O as _};
