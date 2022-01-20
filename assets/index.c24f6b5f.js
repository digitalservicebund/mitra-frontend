import{r as m,o as f,c as l,a as _,b as h,d as v,e as y,P as E}from"./vendor.267de9a6.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};P();const L="modulepreload",s={},O="/mitra-frontend/",c=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${O}${r}`,r in s)return;s[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":L,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",d)})})).then(()=>i())},k=[{name:"mitra-frontend-creator",path:"/mitra-frontend/creator",component:()=>c(()=>import("./creator.98c61970.js"),["assets/creator.98c61970.js","assets/StartScreen.48281e6c.js","assets/StartScreen.772e6936.css","assets/card.esm.d9e60e88.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend-einkauf",path:"/mitra-frontend/einkauf",component:()=>c(()=>import("./einkauf.5081c261.js"),["assets/einkauf.5081c261.js","assets/StartScreen.772e6936.css","assets/card.esm.d9e60e88.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>c(()=>import("./index.55141913.js"),["assets/index.55141913.js","assets/StartScreen.48281e6c.js","assets/StartScreen.772e6936.css","assets/card.esm.d9e60e88.js","assets/vendor.267de9a6.js"]),props:!0},{name:"mitra-frontend-new-contract",path:"/mitra-frontend/new-contract",component:()=>c(()=>import("./new-contract.73e3f58d.js"),["assets/new-contract.73e3f58d.js","assets/vendor.267de9a6.js","assets/provide.520cfca3.js"]),props:!0},{name:"mitra-frontend-open-contract",path:"/mitra-frontend/open-contract",component:()=>c(()=>import("./open-contract.8fbbddd2.js"),["assets/open-contract.8fbbddd2.js","assets/NavigateToHome.669e6969.js","assets/button.esm.c5d19d9a.js","assets/vendor.267de9a6.js","assets/provide.520cfca3.js"]),props:!0},{name:"mitra-frontend-open-playbook",path:"/mitra-frontend/open-playbook",component:()=>c(()=>import("./open-playbook.752daf5c.js"),["assets/open-playbook.752daf5c.js","assets/NavigateToHome.669e6969.js","assets/button.esm.c5d19d9a.js","assets/vendor.267de9a6.js","assets/provide.520cfca3.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>c(()=>import("./_id_.d968ce30.js"),["assets/_id_.d968ce30.js","assets/_id_.d47a396b.css","assets/vendor.267de9a6.js","assets/button.esm.c5d19d9a.js","assets/provide.520cfca3.js"]),props:!0}];var g=(a,i)=>{const n=a.__vccOpts||a;for(const[r,e]of i)n[r]=e;return n};const b={};function A(a,i){const n=m("router-view");return f(),l(n)}var R=g(b,[["render",A]]);const p=_(R).use(h({history:v(),routes:k})).use(y()).use(E);p.directive("focus",{mounted(a){a.focus()}});p.mount("#app");export{c as _,g as a};
