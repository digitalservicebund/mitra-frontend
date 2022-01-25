import{r as u,o as _,c as f,a as l,b as h,d as v,e as y,P as E}from"./vendor.4f77a301.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};b();const k="modulepreload",c={},P="/mitra-frontend/",a=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${P}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":k,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((m,d)=>{o.addEventListener("load",m),o.addEventListener("error",d)})})).then(()=>i())},L=[{name:"mitra-frontend-creator",path:"/mitra-frontend/creator",component:()=>a(()=>import("./creator.2fddeb70.js"),["assets/creator.2fddeb70.js","assets/StartScreen.2e18fa8d.js","assets/StartScreen.772e6936.css","assets/CreateContractPanel.8ffa4d22.js","assets/vendor.4f77a301.js"]),props:!0},{name:"mitra-frontend-einkauf",path:"/mitra-frontend/einkauf",component:()=>a(()=>import("./einkauf.6850d110.js"),["assets/einkauf.6850d110.js","assets/CreateContractPanel.8ffa4d22.js","assets/StartScreen.772e6936.css","assets/vendor.4f77a301.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>a(()=>import("./index.2bb93d2a.js"),["assets/index.2bb93d2a.js","assets/StartScreen.2e18fa8d.js","assets/StartScreen.772e6936.css","assets/CreateContractPanel.8ffa4d22.js","assets/vendor.4f77a301.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>a(()=>import("./_id_.7bd5458a.js"),["assets/_id_.7bd5458a.js","assets/_id_.7f84ac8c.css","assets/vendor.4f77a301.js","assets/button.esm.464953b3.js","assets/provide.7f773723.js","assets/session.6c3f5ec6.js"]),props:!0},{name:"mitra-frontend-contract-new",path:"/mitra-frontend/contract/new",component:()=>a(()=>import("./new.b29bae44.js"),["assets/new.b29bae44.js","assets/vendor.4f77a301.js","assets/provide.7f773723.js"]),props:!0},{name:"mitra-frontend-contract-open-playbook",path:"/mitra-frontend/contract/open-playbook",component:()=>a(()=>import("./open-playbook.670cf1e8.js"),["assets/open-playbook.670cf1e8.js","assets/NavigateToHome.5aaf28dc.js","assets/button.esm.464953b3.js","assets/vendor.4f77a301.js","assets/provide.7f773723.js"]),props:!0},{name:"mitra-frontend-contract-open",path:"/mitra-frontend/contract/open",component:()=>a(()=>import("./open.2fcec9ea.js"),["assets/open.2fcec9ea.js","assets/NavigateToHome.5aaf28dc.js","assets/button.esm.464953b3.js","assets/vendor.4f77a301.js","assets/provide.7f773723.js"]),props:!0},{name:"mitra-frontend-playbook-id",path:"/mitra-frontend/playbook/:id",component:()=>a(()=>import("./_id_.ce606ade.js"),["assets/_id_.ce606ade.js","assets/_id_.208263ad.css","assets/provide.7f773723.js","assets/session.6c3f5ec6.js","assets/vendor.4f77a301.js"]),props:!0},{name:"mitra-frontend-playbook-new",path:"/mitra-frontend/playbook/new",component:()=>a(()=>import("./new.28646253.js"),["assets/new.28646253.js","assets/vendor.4f77a301.js","assets/provide.7f773723.js"]),props:!0},{name:"mitra-frontend-playbook-open",path:"/mitra-frontend/playbook/open",component:()=>a(()=>import("./open.f0c02643.js"),["assets/open.f0c02643.js","assets/NavigateToHome.5aaf28dc.js","assets/button.esm.464953b3.js","assets/vendor.4f77a301.js","assets/provide.7f773723.js"]),props:!0}];var O=(s,i)=>{const n=s.__vccOpts||s;for(const[r,e]of i)n[r]=e;return n};const A={};function R(s,i){const n=u("router-view");return _(),f(n)}var g=O(A,[["render",R]]);const p=l(g).use(h({history:v(),routes:L})).use(y()).use(E);p.directive("focus",{mounted(s){s.focus()}});p.mount("#app");export{O as _,a};
