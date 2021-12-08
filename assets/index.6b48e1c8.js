var R=Object.defineProperty;var T=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>(T(t,typeof e!="symbol"?e+"":e,s),s),N=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var y=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)};var h=(t,e,s)=>(N(t,e,"access private method"),s);import{r as V,o as C,c as I,v as $,a as M,b as j,d as q,P as B}from"./vendor.d734cd2f.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};D();const J="modulepreload",v={},W="/mitra-frontend/",d=function(e,s){return!s||s.length===0?e():Promise.all(s.map(n=>{if(n=`${W}${n}`,n in v)return;v[n]=!0;const r=n.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":J,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((O,F)=>{a.addEventListener("load",O),a.addEventListener("error",F)})})).then(()=>e())},G=[{name:"mitra-frontend-open-playbook",path:"/mitra-frontend/open-playbook",component:()=>d(()=>import("./open-playbook.3fab5010.js"),["assets/open-playbook.3fab5010.js","assets/button.esm.2195d897.js","assets/vendor.d734cd2f.js"]),props:!0},{name:"mitra-frontend",path:"/mitra-frontend",component:()=>d(()=>import("./index.d5fb32fe.js"),["assets/index.d5fb32fe.js","assets/index.8ed648ad.css","assets/vendor.d734cd2f.js"]),props:!0},{name:"mitra-frontend-contract-id",path:"/mitra-frontend/contract/:id",component:()=>d(()=>import("./[id].ac961847.js"),["assets/[id].ac961847.js","assets/[id].a170f4b4.css","assets/vendor.d734cd2f.js","assets/button.esm.2195d897.js"]),props:!0}];var H=(t,e)=>{const s=t.__vccOpts||t;for(const[n,r]of e)s[n]=r;return s};const Y={};function K(t,e){const s=V("router-view");return C(),I(s)}var z=H(Y,[["render",K]]);const Q=t=>t instanceof u;class u{constructor(){f(this,"id");this.id=$()}equals(e){return e==null?!1:this===e?!0:Q(e)?this.id===e.id:!1}}class U{}class X extends U{constructor(e=""){super();this.value=e}getValue(){return this.value}setValue(e){this.value=e}toString(){return this.value}}class Z extends u{constructor(e,s){super();this.text=e,this.answer=s}getAnswer(){return this.answer}setAnswer(e){this.answer.setValue(e)}}const m=class extends Z{constructor(e,s=new X){super(e,s)}getType(){return m.TYPE}clone(){return new m(this.text,this.answer)}};let i=m;f(i,"TYPE","TextAnswerStep");class c extends u{constructor(e,s=[]){super();this.text=e,this.steps=s}addSteps(...e){this.steps.push(...e)}clone(){return new c(this.text,this.steps.map(e=>e.clone()))}}class S extends u{constructor(e=[]){super();this.modules=e}addModules(...e){this.modules.push(...e)}}const ee=new i("Schritt 1.1"),te=new i("Schritt 1.2"),se=new i("Schritt 1.3"),re=new i("Schritt 2.1"),ne=new i("Schritt 2.2"),oe=new i("Schritt 2.3"),ie=new i("Schritt 3.1"),ae=new i("Schritt 3.2"),ce=new i("Schritt 3.3"),ue=new i("Schritt 3.4"),g=new c("Rubrum"),_=new c("Gegenstand und Bestandteile des Vertrags"),k=new c("Gegenstand der Leistungen");g.addSteps(ee,te,se);_.addSteps(re,ne,oe);k.addSteps(ie,ae,ce,ue);const P=new S;P.addModules(g,_,k);let b;const le={load(){return b||P},save(t){b=t}};var l,x;const w=class extends u{constructor(e,s){super();y(this,l);this.title=e,this.modules=s}static fromPlaybook(e){const s=e.modules.map(n=>n.clone());return new w("",s)}getSteps(){return this.modules.flatMap(e=>e.steps)}getNextStepFor(e){return this.getSteps()[h(this,l,x).call(this,e)+1]}getPreviousStepFor(e){return this.getSteps()[h(this,l,x).call(this,e)-1]}getModules(){return this.modules}getModuleFor(e){return this.modules.find(s=>s.steps.find(n=>n.equals(e)))}};let p=w;l=new WeakSet,x=function(e){return this.getSteps().findIndex(s=>s.equals(e))};function E(t){return t.title.toLowerCase().replace(/\s/g,"-")}async function de(t,e){const s=await t.createWritable();await s.write(e),await s.close()}const pe={load(){return new p("",[])},async save(t){if(window.showSaveFilePicker){const e=await window.showSaveFilePicker({suggestedName:E(t),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await de(e,JSON.stringify(t))}else await d(()=>import("./FileSaver.min.297e5979.js").then(function(e){return e.F}),[]).then(({default:e})=>{const s=new Blob([JSON.stringify(t)],{type:"application/json;charset=utf-8"});e.saveAs(s,`${E(t)}.json`)})}},me={load:async t=>{const e=new FileReader;e.readAsText(t);const s=await new Promise(r=>{e.onload=()=>{r(e.result)}}),n=JSON.parse(s).playbook;return fe(n)}};function fe(t){const e=t.modules.map(he);return new S(e)}function he(t){const e=t.steps.map(we);return new c(t.text,e)}function we(t){return new i(t.text)}const L=new Map,ye={load(t){return L.get(t)||new p("",[])},save(t,e){L.set(t,e)}},ve=()=>le,Ee=()=>pe,Le=()=>me,Se=()=>ye,ge=M({history:j(),routes:G}),A=q(z).use(ge).use(B);A.directive("focus",{mounted(t){t.focus()}});const _e=ve(),ke=p.fromPlaybook(_e.load()),Pe=Se();Pe.save("cloud-contract",ke);A.mount("#app");export{p as C,i as T,H as _,Se as a,Ee as b,Le as m};
