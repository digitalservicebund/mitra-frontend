import{r as u,o as f,c as _,a as l,b as h,d as v,e as y,P as E}from"./vendor.d1ed8eac.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};b();const k="modulepreload",c={},P="/mitra-frontend/",a=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${P}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":k,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((d,m)=>{o.addEventListener("load",d),o.addEventListener("error",m)})})).then(()=>i())},L=[{name:"mitra-frontend-creator",path:"/mitra-frontend/creator",component:()=>a(()=>import("./creator.7ee265d3.js"),["assets/creator.7ee265d3.js","assets/StartScreen.afec5714.js","assets/StartScreen.772e6936.css","assets/CreateContractPanel.a309b00f.js","assets/vendor.d1ed8eac.js","assets/session.89ad4730.js"]),props:!0},{name:"mitra-frontend-einkauf",path:"/mitra-frontend/einkauf",component:()=>a(()=>import("./einkauf.41abb03a.js"),["assets/einkauf.41abb03a.js","assets/session.89ad4730.js","assets/vendor.d1ed8eac.js","assets/CreateContractPanel.a309b00f.js","assets/StartScreen.772e6936.css"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>a(()=>import("./index.f1af280e.js"),["assets/index.f1af280e.js","assets/StartScreen.afec5714.js","assets/StartScreen.772e6936.css","assets/CreateContractPanel.a309b00f.js","assets/vendor.d1ed8eac.js","assets/session.89ad4730.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>a(()=>import("./_id_.836e33fe.js"),["assets/_id_.836e33fe.js","assets/_id_.7f84ac8c.css","assets/vendor.d1ed8eac.js","assets/button.esm.beccdf6b.js","assets/inputtext.esm.5fc0359a.js","assets/provide.07717040.js","assets/session.89ad4730.js"]),props:!0},{name:"mitra-frontend-contract-new",path:"/mitra-frontend/contract/new",component:()=>a(()=>import("./new.81d45d6a.js"),["assets/new.81d45d6a.js","assets/vendor.d1ed8eac.js","assets/provide.07717040.js"]),props:!0},{name:"mitra-frontend-contract-open-playbook",path:"/mitra-frontend/contract/open-playbook",component:()=>a(()=>import("./open-playbook.5dd9fcb9.js"),["assets/open-playbook.5dd9fcb9.js","assets/NavigateToHome.ffa07c63.js","assets/button.esm.beccdf6b.js","assets/vendor.d1ed8eac.js","assets/session.89ad4730.js","assets/provide.07717040.js"]),props:!0},{name:"mitra-frontend-contract-open",path:"/mitra-frontend/contract/open",component:()=>a(()=>import("./open.c8460b93.js"),["assets/open.c8460b93.js","assets/NavigateToHome.ffa07c63.js","assets/button.esm.beccdf6b.js","assets/vendor.d1ed8eac.js","assets/session.89ad4730.js","assets/provide.07717040.js"]),props:!0},{name:"mitra-frontend-playbook-id",path:"/mitra-frontend/playbook/:id",component:()=>a(()=>import("./_id_.4c886311.js"),["assets/_id_.4c886311.js","assets/_id_.bbaa4dda.css","assets/vendor.d1ed8eac.js","assets/button.esm.beccdf6b.js","assets/inputtext.esm.5fc0359a.js","assets/provide.07717040.js","assets/session.89ad4730.js"]),props:!0},{name:"mitra-frontend-playbook-new",path:"/mitra-frontend/playbook/new",component:()=>a(()=>import("./new.140f77dd.js"),["assets/new.140f77dd.js","assets/vendor.d1ed8eac.js","assets/provide.07717040.js"]),props:!0},{name:"mitra-frontend-playbook-open",path:"/mitra-frontend/playbook/open",component:()=>a(()=>import("./open.f2d2e609.js"),["assets/open.f2d2e609.js","assets/NavigateToHome.ffa07c63.js","assets/button.esm.beccdf6b.js","assets/vendor.d1ed8eac.js","assets/session.89ad4730.js","assets/provide.07717040.js"]),props:!0}];var O=(s,i)=>{const n=s.__vccOpts||s;for(const[r,e]of i)n[r]=e;return n};const A={};function R(s,i){const n=u("router-view");return f(),_(n)}var g=O(A,[["render",R]]);const p=l(g).use(h({history:v(),routes:L})).use(y()).use(E);p.directive("focus",{mounted(s){s.focus()}});p.mount("#app");export{O as _,a};
