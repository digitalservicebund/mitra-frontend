var B=Object.defineProperty;var D=(t,e,r)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r);import{_ as G}from"./index.fd30c27c.js";var h,U=new Uint8Array(16);function H(){if(!h&&(h=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(U)}var W=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function X(t){return typeof t=="string"&&W.test(t)}var n=[];for(var A=0;A<256;++A)n.push((A+256).toString(16).substr(1));function K(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase();if(!X(r))throw TypeError("Stringified UUID is invalid");return r}function Q(t,e,r){t=t||{};var s=t.random||(t.rng||H)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){r=r||0;for(var a=0;a<16;++a)e[r+a]=s[a];return e}return K(s)}const Z=t=>t instanceof u;class u{constructor(e=Q()){this.id=e,this.id=e}equals(e){return e==null?!1:this===e?!0:Z(e)?this.id===e.id:!1}}function I(t,e){return t.findIndex(r=>r.equals(e))}class O extends u{constructor(e,r,s){super(s);this.title=e,this.modules=r}static fromPlaybook(e){const r=e.modules.map(s=>s.clone());return new O("",r)}get path(){return Object.freeze(this.modules.flatMap(e=>e.path))}nextStepInPathAt(e){return this.path[I(this.path,e)+1]}previousStepInPathAt(e){return this.path[I(this.path,e)-1]}getModuleFor(e){return this.modules.find(r=>r.path.find(s=>s.equals(e)))}}class _{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(e){return this.storage.save(e)}}class ee{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(){return Promise.reject("Not implemented")}}class k extends u{constructor(e,r=[],s){super(s);this.text=e,this.steps=r}get path(){return Object.freeze(this.steps.flatMap(e=>e.path))}clone(){return new k(this.text,this.steps.map(e=>e.clone()))}}class te extends u{constructor(e=[],r){super(r);this.modules=e}addModules(...e){this.modules.push(...e)}}var $={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.prototype.hasOwnProperty;t.is=function(r,s){return r===s?r!==0||s!==0||1/r==1/s:r!==r&&s!==s},t.shallowEqual=function(r,s,a){if(r===s)return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var c=Object.keys(r),z=Object.keys(s);if(c.length!==z.length)return!1;for(var L=a&&typeof a.customEqual=="function"?a.customEqual:t.is,T=0;T<c.length;T++){var E=c[T];if(!e.call(s,E)||!L(r[E],s[E]))return!1}return!0}})($);class re{equals(e){return e==null?!1:$.shallowEqual(this,e)}}const C=t=>{const e=[t],{selected:r}=t;return[r!=null?r:[]].flat().flatMap(s=>s.path).forEach(s=>e.push(...C(s))),Object.freeze(e)};class p{constructor(e,r){this.text=e,this.path=r}clone(){return new p(this.text,this.path.map(e=>e.clone()))}}class w extends re{constructor(e){super();this.value=e,this.value=e}setValue(e){this.value=e}}class i extends w{constructor(e=""){super(e)}clone(){return new i(this.value)}toString(){return this.value}}class R extends w{constructor(e=""){super(e)}clone(){return new i(this.value)}toString(){return this.value}}class l extends w{constructor(e,r=-1){super(r);this.choices=e}clone(){return new l(this.choices.map(e=>e.clone()),this.value)}get selected(){return this.choices[this.value]}toString(){var e;return`${((e=this.selected)==null?void 0:e.text)||""}`}}class d extends w{constructor(e,r=[]){super(r);this.choices=e,this.value=r}clone(){return new d(this.choices.map(e=>e.clone()),this.value)}get selected(){return this.value.sort().reduce((e,r)=>[...e,this.choices[r]],[])}toString(){return`${this.selected.map(e=>e.text).join(", ")}`}}class f extends u{constructor(e,r,s){super(s);this.text=e,this.answer=r;for(const a of["type"]){const c=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this),a);Object.defineProperty(this,a,Object.assign(c,{enumerable:!0}))}}get path(){return Object.freeze([this])}print(){return this.answer.toString()}}const S=class extends f{constructor(e,r=new i,s="${answer}",a){super(e,r,a);this.produce=s}get type(){return S.TYPE}print(){return this.answer.value?this.produce.replaceAll("${answer}",this.answer.value):""}clone(){return new S(this.text,new i(this.answer.value),this.produce)}};let y=S;o(y,"TYPE","TextAnswerStep");const m=class extends f{constructor(e,r=new R,s="${answer}",a){super(e,r,a);this.produce=s}get type(){return m.TYPE}print(){return this.answer.value?this.produce.replaceAll("${answer}",this.answer.value):""}clone(){return new m(this.text,new R(this.answer.value),this.produce)}};let b=m;o(b,"TYPE","RichTextAnswerStep");const v=class extends f{constructor(e,r=new l([]),s){super(e,r,s)}get type(){return v.TYPE}get path(){return C(this)}get choices(){return this.answer.choices}get selected(){return this.answer.selected}clone(){return new v(this.text,new l(this.choices.map(e=>e.clone()),this.answer.value))}};let x=v;o(x,"TYPE","SingleChoiceAnswerStep");const P=class extends f{constructor(e,r=new d([]),s){super(e,r,s)}get type(){return P.TYPE}get path(){return C(this)}get choices(){return this.answer.choices}get selected(){return this.answer.selected}clone(){return new P(this.text,new d(this.choices.map(e=>e.clone()),this.answer.value))}};let g=P;o(g,"TYPE","MultipleChoiceAnswerStep");function Y(t){if(t.type===y.TYPE){const e=t.answer;return new y(t.text,new i(e.value),t.produce,t.id)}if(t.type===b.TYPE){const e=t.answer;return new b(t.text,new R(e.value),t.produce,t.id)}if(t.type===x.TYPE){const e=t.answer;return new x(t.text,new l(e.choices.map(r=>new p(r.text,r.path.map(Y))),e.value),t.id)}if(t.type===g.TYPE){const e=t.answer;return new g(t.text,new d(e.choices.map(r=>new p(r.text,r.path.map(Y))),e.value),t.id)}throw new Error("Step type unknown")}function q(t){return new k(t.text,t.steps.map(Y),t.id)}function M(t){return new O(t.title,t.modules.map(q),t.id)}function N(t){return new te(t.modules.map(q),t.id)}async function V(t){const e=new FileReader;return e.readAsText(t),await new Promise(r=>{e.onload=()=>{r(e.result)}})}function F(t){return t.title.toLowerCase().replace(/\s/g,"-")}async function se(t,e){const r=await t.createWritable();await r.write(e),await r.close()}const ne={async load(t){const e=await V(t);return M(JSON.parse(e))},async save(t){if(window.showSaveFilePicker){const e=await window.showSaveFilePicker({suggestedName:F(t),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await se(e,JSON.stringify(t))}else await G(()=>import("./FileSaver.min.297e5979.js").then(function(e){return e.F}),[]).then(({default:e})=>{const r=new Blob([JSON.stringify(t)],{type:"application/json;charset=utf-8"});e.saveAs(r,`${F(t)}.json`)})}},ae={id:"db2a1d38-01fb-4ea2-bc6f-b5213413c809",modules:[{id:"0b141639-8718-4ad9-9839-ec89aa8a1ec4",text:"Rubrum",steps:[{id:"06817a49-dd7b-4d8a-9c5b-77702e913a30",text:"Schritt 1.1",type:"TextAnswerStep",answer:{},produce:"Textbaustein: ${answer}"},{id:"c22cb3a2-2f89-47eb-b90c-a11f427ca6c8",text:"Schritt 1.2",type:"TextAnswerStep",answer:{}},{id:"f7e2bb12-ba14-4686-8513-afbdcab276a8",text:"Schritt 1.3",type:"SingleChoiceAnswerStep",answer:{choices:[{text:"Auswahl A",path:[{id:"57c97b0d-4eae-439e-b747-c297b76128e5",text:"Schritt 1.3 A",type:"TextAnswerStep",answer:{}}]},{text:"Auswahl B",path:[{id:"0b79fbb8-18f4-4824-af2a-3f4a95dc8cc6",text:"Schritt 1.3 B",type:"TextAnswerStep",answer:{}}]}]}},{id:"f7e2bb12-ba14-4686-8513-afbdcab276a8",text:"Schritt 1.4",type:"MultipleChoiceAnswerStep",answer:{choices:[{text:"Auswahl 1",path:[{id:"57c97b0d-4eae-439e-b747-c297b76128e5",text:"Schritt 1.4 1",type:"TextAnswerStep",answer:{}}]},{text:"Auswahl 2",path:[{id:"0b79fbb8-18f4-4824-af2a-3f4a95dc8cc6",text:"Schritt 1.4 2",type:"TextAnswerStep",answer:{}}]}]}},{id:"5ee3e9de-5052-49ac-95ed-849df72a7167",text:"Schritt 1.5",type:"RichTextAnswerStep",answer:{}}]},{id:"2407b57d-dfb2-487e-a4b2-d9f6f720cebe",text:"Gegenstand und Bestandteile des Vertrags",steps:[{id:"203e3a8f-e8c7-45b7-86e7-e6390393a348",text:"Schritt 2.1",type:"TextAnswerStep",answer:{}},{id:"0b570aab-fa1b-4d93-aab3-35250b8590dc",text:"Schritt 2.2",type:"TextAnswerStep",answer:{}},{id:"c8a04406-bba5-4968-bf2a-54122f58fbc3",text:"Schritt 2.3",type:"TextAnswerStep",answer:{}}]},{id:"d00fdd08-805a-4c11-8e19-c57ca770f09f",text:"Gegenstand der Leistungen",steps:[{id:"28acb64b-2c87-44c2-a112-10128a1ca546",text:"Schritt 3.1",type:"TextAnswerStep",answer:{}},{id:"3f460bf7-305f-4d53-a01b-074aa148c179",text:"Schritt 3.2",type:"TextAnswerStep",answer:{}},{id:"3cd87b83-60fa-4fd3-953b-fb0ad6d57a46",text:"Schritt 3.3",type:"TextAnswerStep",answer:{}},{id:"253a3dcf-9731-4537-8be3-908ec0e0c887",text:"Schritt 3.4",type:"TextAnswerStep",answer:{}}]}]},j=new Map,J=N(ae);j.set(J.id,J);const ie={findById(t){const e=j.get(t);if(typeof e=="undefined")throw new Error("Contract not found");return e},save(t){j.set(t.id,t)}},ce={findById(t){const e=localStorage.getItem(t);if(e===null)throw new Error("Contract not found");return M(JSON.parse(e))},save(t){localStorage.setItem(t.id,JSON.stringify(t))}},oe={async load(t){const e=await V(t);return N(JSON.parse(e).playbook)},async save(){return Promise.reject("Not implemented")}},de=()=>ce,he=()=>ie,pe=()=>new _(ne),we=()=>new ee(oe);export{O as C,g as M,b as R,x as S,y as T,de as a,pe as b,we as c,he as m};
