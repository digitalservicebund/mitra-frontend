import{r as m,o as l,c as f,a as _,b as h,d as v,e as y,P as E}from"./vendor.870a853b.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};P();const L="modulepreload",a={},b="/mitra-frontend/",c=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${b}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":L,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((p,d)=>{o.addEventListener("load",p),o.addEventListener("error",d)})})).then(()=>i())},g=[{name:"mitra-frontend",path:"/mitra-frontend",component:()=>c(()=>import("./index.8ac02a6f.js"),["assets/index.8ac02a6f.js","assets/index.d6d15ee6.css","assets/vendor.870a853b.js"]),props:!0},{name:"mitra-frontend-new-contract",path:"/mitra-frontend/new-contract",component:()=>c(()=>import("./new-contract.46b4c0ad.js"),["assets/new-contract.46b4c0ad.js","assets/vendor.870a853b.js","assets/provide.e2b912f5.js"]),props:!0},{name:"mitra-frontend-open-contract",path:"/mitra-frontend/open-contract",component:()=>c(()=>import("./open-contract.60e6c9d4.js"),["assets/open-contract.60e6c9d4.js","assets/NavigateToHome.e109927f.js","assets/button.esm.1537371b.js","assets/vendor.870a853b.js","assets/provide.e2b912f5.js"]),props:!0},{name:"mitra-frontend-open-playbook",path:"/mitra-frontend/open-playbook",component:()=>c(()=>import("./open-playbook.6772aed8.js"),["assets/open-playbook.6772aed8.js","assets/NavigateToHome.e109927f.js","assets/button.esm.1537371b.js","assets/vendor.870a853b.js","assets/provide.e2b912f5.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>c(()=>import("./_id_.9f3b3ed0.js"),["assets/_id_.9f3b3ed0.js","assets/_id_.a9351613.css","assets/vendor.870a853b.js","assets/button.esm.1537371b.js","assets/provide.e2b912f5.js"]),props:!0}];var O=(s,i)=>{const n=s.__vccOpts||s;for(const[r,e]of i)n[r]=e;return n};const k={};function A(s,i){const n=m("router-view");return l(),f(n)}var w=O(k,[["render",A]]);const u=_(w).use(h({history:v(),routes:g})).use(y()).use(E);u.directive("focus",{mounted(s){s.focus()}});u.mount("#app");export{c as _,O as a};
