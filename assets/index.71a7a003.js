import{r as m,o as l,c as f,a as _,b as h,d as v,e as y,P as E}from"./vendor.b76442b5.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};b();const P="modulepreload",a={},L="/mitra-frontend/",s=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${L}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":P,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((p,d)=>{o.addEventListener("load",p),o.addEventListener("error",d)})})).then(()=>i())},g=[{name:"mitra-frontend",path:"/mitra-frontend",component:()=>s(()=>import("./index.1ac6dc37.js"),["assets/index.1ac6dc37.js","assets/index.d6d15ee6.css","assets/vendor.b76442b5.js"]),props:!0},{name:"mitra-frontend-new-contract",path:"/mitra-frontend/new-contract",component:()=>s(()=>import("./new-contract.f583ab90.js"),["assets/new-contract.f583ab90.js","assets/vendor.b76442b5.js","assets/provide.6dacb121.js"]),props:!0},{name:"mitra-frontend-open-contract",path:"/mitra-frontend/open-contract",component:()=>s(()=>import("./open-contract.bc416d1d.js"),["assets/open-contract.bc416d1d.js","assets/NavigateToHome.c33639bd.js","assets/button.esm.7f5aca94.js","assets/vendor.b76442b5.js","assets/provide.6dacb121.js"]),props:!0},{name:"mitra-frontend-open-playbook",path:"/mitra-frontend/open-playbook",component:()=>s(()=>import("./open-playbook.e1a73a0f.js"),["assets/open-playbook.e1a73a0f.js","assets/NavigateToHome.c33639bd.js","assets/button.esm.7f5aca94.js","assets/vendor.b76442b5.js","assets/provide.6dacb121.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>s(()=>import("./_id_.d0b5ef9c.js"),["assets/_id_.d0b5ef9c.js","assets/_id_.d0c632e6.css","assets/vendor.b76442b5.js","assets/button.esm.7f5aca94.js","assets/provide.6dacb121.js"]),props:!0}];var O=(c,i)=>{const n=c.__vccOpts||c;for(const[r,e]of i)n[r]=e;return n};const k={};function A(c,i){const n=m("router-view");return l(),f(n)}var w=O(k,[["render",A]]);const u=_(w).use(h({history:v(),routes:g})).use(y()).use(E);u.directive("focus",{mounted(c){c.focus()}});u.mount("#app");export{s as _,O as a};
