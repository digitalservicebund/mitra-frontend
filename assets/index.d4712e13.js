import{r as m,o as f,c as l,a as _,b as h,d as v,e as y,P as E}from"./vendor.267de9a6.js";const P=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};P();const L="modulepreload",c={},O="/mitra-frontend/",s=function(a,n){return!n||n.length===0?a():Promise.all(n.map(r=>{if(r=`${O}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":L,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",d)})})).then(()=>a())},b=[{name:"mitra-frontend-creator",path:"/mitra-frontend/creator",component:()=>s(()=>import("./creator.85db9d6d.js"),["assets/creator.85db9d6d.js","assets/CreatorStartScreen.0d24f1d0.js","assets/CreatorStartScreen.92eb6bec.css","assets/card.esm.d9e60e88.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend-einkauf",path:"/mitra-frontend/einkauf",component:()=>s(()=>import("./einkauf.fcb5793f.js"),["assets/einkauf.fcb5793f.js","assets/CreatorStartScreen.92eb6bec.css","assets/card.esm.d9e60e88.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>s(()=>import("./index.a5a1f911.js"),["assets/index.a5a1f911.js","assets/CreatorStartScreen.0d24f1d0.js","assets/CreatorStartScreen.92eb6bec.css","assets/card.esm.d9e60e88.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend-new-contract",path:"/mitra-frontend/new-contract",component:()=>s(()=>import("./new-contract.a59990ba.js"),["assets/new-contract.a59990ba.js","assets/vendor.267de9a6.js","assets/provide.fc215a88.js"]),props:!0},{name:"mitra-frontend-open-contract",path:"/mitra-frontend/open-contract",component:()=>s(()=>import("./open-contract.7f52b16a.js"),["assets/open-contract.7f52b16a.js","assets/NavigateToHome.f1f87308.js","assets/button.esm.c5d19d9a.js","assets/vendor.267de9a6.js","assets/provide.fc215a88.js"]),props:!0},{name:"mitra-frontend-open-playbook",path:"/mitra-frontend/open-playbook",component:()=>s(()=>import("./open-playbook.ef91a4da.js"),["assets/open-playbook.ef91a4da.js","assets/NavigateToHome.f1f87308.js","assets/button.esm.c5d19d9a.js","assets/vendor.267de9a6.js","assets/provide.fc215a88.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>s(()=>import("./_id_.10aad32f.js"),["assets/_id_.10aad32f.js","assets/_id_.1ec0b84b.css","assets/vendor.267de9a6.js","assets/button.esm.c5d19d9a.js","assets/provide.fc215a88.js"]),props:!0}];var k=(i,a)=>{const n=i.__vccOpts||i;for(const[r,e]of a)n[r]=e;return n};const g={};function A(i,a){const n=m("router-view");return f(),l(n)}var R=k(g,[["render",A]]);const p=_(R).use(h({history:v(),routes:b})).use(y()).use(E);p.directive("focus",{mounted(i){i.focus()}});p.mount("#app");export{s as _,k as a};
