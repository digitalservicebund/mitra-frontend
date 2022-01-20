import{r as d,o as f,c as l,a as _,b as h,d as v,e as y,P as E}from"./vendor.267de9a6.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};P();const L="modulepreload",s={},b="/mitra-frontend/",c=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${b}${r}`,r in s)return;s[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":L,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",m)})})).then(()=>i())},O=[{name:"mitra-frontend-creator",path:"/mitra-frontend/creator",component:()=>c(()=>import("./creator.4491d0f4.js"),["assets/creator.4491d0f4.js","assets/StartScreen.b330099c.js","assets/CreateContractPanel.068a17e4.css","assets/CreateContractPanel.05d829fb.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend-einkauf",path:"/mitra-frontend/einkauf",component:()=>c(()=>import("./einkauf.1e4e0bf7.js"),["assets/einkauf.1e4e0bf7.js","assets/CreateContractPanel.05d829fb.js","assets/CreateContractPanel.068a17e4.css","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>c(()=>import("./index.b3b4a38b.js"),["assets/index.b3b4a38b.js","assets/StartScreen.b330099c.js","assets/CreateContractPanel.068a17e4.css","assets/CreateContractPanel.05d829fb.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend-new-contract",path:"/mitra-frontend/new-contract",component:()=>c(()=>import("./new-contract.c5291467.js"),["assets/new-contract.c5291467.js","assets/vendor.267de9a6.js","assets/provide.fe20f31f.js"]),props:!0},{name:"mitra-frontend-open-contract",path:"/mitra-frontend/open-contract",component:()=>c(()=>import("./open-contract.779b67ae.js"),["assets/open-contract.779b67ae.js","assets/NavigateToHome.49818b25.js","assets/button.esm.c5d19d9a.js","assets/vendor.267de9a6.js","assets/provide.fe20f31f.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>c(()=>import("./_id_.fe5e0cf7.js"),["assets/_id_.fe5e0cf7.js","assets/_id_.d47a396b.css","assets/vendor.267de9a6.js","assets/button.esm.c5d19d9a.js","assets/provide.fe20f31f.js"]),props:!0},{name:"mitra-frontend-contract-open-playbook",path:"/mitra-frontend/contract/open-playbook",component:()=>c(()=>import("./open-playbook.5dc2877c.js"),["assets/open-playbook.5dc2877c.js","assets/NavigateToHome.49818b25.js","assets/button.esm.c5d19d9a.js","assets/vendor.267de9a6.js","assets/provide.fe20f31f.js"]),props:!0}];var k=(a,i)=>{const n=a.__vccOpts||a;for(const[r,e]of i)n[r]=e;return n};const g={};function A(a,i){const n=d("router-view");return f(),l(n)}var R=k(g,[["render",A]]);const p=_(R).use(h({history:v(),routes:O})).use(y()).use(E);p.directive("focus",{mounted(a){a.focus()}});p.mount("#app");export{c as _,k as a};
