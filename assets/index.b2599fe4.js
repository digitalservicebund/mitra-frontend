import{o as i,c as a,a as d,d as l,t as f,r as _,u as y,F as u,b as m,e as p,f as h}from"./vendor.7adaaa0c.js";const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};g();var v=(o,t)=>{for(const[s,n]of t)o[s]=n;return o};const k={},L=d("h1",null,"Mitra",-1),b=[L];function x(o,t){return i(),a("header",null,b)}var N=v(k,[["render",x]]);const F=l({props:{repository:null},setup(o){const t=o,{repository:s}=f(t),n=s.value.find("test");return(e,r)=>(i(!0),a(u,null,_(y(n).steps,c=>(i(),a("div",{key:c},m(c),1))),128))}}),O={find:o=>(console.log(`Looking up Playbook with id ${o}`),{steps:["First","Second"]})};const A=l({setup(o){const t=()=>O;return(s,n)=>(i(),a(u,null,[p(N),p(F,{repository:t()},null,8,["repository"])],64))}});h(A).mount("#app");
