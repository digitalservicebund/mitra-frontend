var j=Object.defineProperty;var R=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>(R(t,typeof e!="symbol"?e+"":e,s),s);import{_ as I}from"./index.d6e5bd4d.js";var o,N=new Uint8Array(16);function F(){if(!o&&(o=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(N)}var V=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function $(t){return typeof t=="string"&&V.test(t)}var n=[];for(var h=0;h<256;++h)n.push((h+256).toString(16).substr(1));function B(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase();if(!$(s))throw TypeError("Stringified UUID is invalid");return s}function z(t,e,s){t=t||{};var r=t.random||(t.rng||F)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){s=s||0;for(var a=0;a<16;++a)e[s+a]=r[a];return e}return B(r)}const J=t=>t instanceof i;class i{constructor(e=z()){this.id=e,this.id=e}equals(e){return e==null?!1:this===e?!0:J(e)?this.id===e.id:!1}}function g(t,e){return t.findIndex(s=>s.equals(e))}class f extends i{constructor(e,s,r){super(r);this.title=e,this.modules=s}static fromPlaybook(e){const s=e.modules.map(r=>r.clone());return new f("",s)}get path(){return Object.freeze(this.modules.flatMap(e=>e.path))}nextStepInPathAt(e){return this.path[g(this.path,e)+1]}previousStepInPathAt(e){return this.path[g(this.path,e)-1]}getModuleFor(e){return this.modules.find(s=>s.path.find(r=>r.equals(e)))}}class M{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(e){return this.storage.save(e)}}class Y{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(){return Promise.reject("Not implemented")}}class w extends i{constructor(e,s=[],r){super(r);this.text=e,this.steps=s}get path(){return Object.freeze(this.steps.flatMap(e=>e.path))}clone(){return new w(this.text,this.steps.map(e=>e.clone()))}}class L extends i{constructor(e=[],s){super(s);this.modules=e}addModules(...e){this.modules.push(...e)}}class S extends i{constructor(e){super();this.value=e,this.value=e}setValue(e){this.value=e}}class y extends S{constructor(e=""){super(e)}toString(){return`${this.value}`}}class b extends S{constructor(e,s=-1){super(s);this.choices=e}toString(){var e;return`${((e=this.choices[this.value])==null?void 0:e.text)||""}`}}class m extends i{constructor(e,s,r){super(r);this.text=e,this.answer=s;for(const a of["type"]){const E=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this),a);Object.defineProperty(this,a,Object.assign(E,{enumerable:!0}))}}get steps(){return[]}get path(){return Object.freeze([this])}print(){return this.answer.toString()}}const d=class extends m{constructor(e,s=new y,r="${answer}",a){super(e,s,a);this.produce=r}get type(){return d.TYPE}print(){return this.answer.value?this.produce.replaceAll("${answer}",this.answer.value.toString()):""}clone(){return new d(this.text,new y(this.answer.value),this.produce)}};let c=d;l(c,"TYPE","TextAnswerStep");const p=class extends m{constructor(e,s=new b([]),r){super(e,s,r)}get type(){return p.TYPE}get path(){return this.answer.value===-1?Object.freeze([this]):Object.freeze([this,...this.answer.choices[this.answer.value].path])}get choices(){return this.answer.choices}clone(){return new p(this.text,new b(this.answer.choices,this.answer.value))}};let u=p;l(u,"TYPE","SingleChoiceAnswerStep");function v(t){if(t.type===c.TYPE){const e=t.answer;return new c(t.text,new y(e.value),t.produce,t.id)}if(t.type===u.TYPE){const e=t.answer;return new u(t.text,new b(e.choices.map(s=>({text:s.text,path:s.path.map(v)})),e.value),t.id)}throw new Error("Step type unknown")}function A(t){return new w(t.text,t.steps.map(v),t.id)}function P(t){return new f(t.title,t.modules.map(A),t.id)}function T(t){return new L(t.modules.map(A),t.id)}async function O(t){const e=new FileReader;return e.readAsText(t),await new Promise(s=>{e.onload=()=>{s(e.result)}})}function k(t){return t.title.toLowerCase().replace(/\s/g,"-")}async function q(t,e){const s=await t.createWritable();await s.write(e),await s.close()}const D={async load(t){const e=await O(t);return P(JSON.parse(e))},async save(t){if(window.showSaveFilePicker){const e=await window.showSaveFilePicker({suggestedName:k(t),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await q(e,JSON.stringify(t))}else await I(()=>import("./FileSaver.min.297e5979.js").then(function(e){return e.F}),[]).then(({default:e})=>{const s=new Blob([JSON.stringify(t)],{type:"application/json;charset=utf-8"});e.saveAs(s,`${k(t)}.json`)})}},G={id:"db2a1d38-01fb-4ea2-bc6f-b5213413c809",modules:[{id:"0b141639-8718-4ad9-9839-ec89aa8a1ec4",text:"Rubrum",steps:[{id:"06817a49-dd7b-4d8a-9c5b-77702e913a30",text:"Schritt 1.1",type:"TextAnswerStep",answer:{},produce:"Textbaustein: ${answer}"},{id:"c22cb3a2-2f89-47eb-b90c-a11f427ca6c8",text:"Schritt 1.2",type:"TextAnswerStep",answer:{}},{id:"f7e2bb12-ba14-4686-8513-afbdcab276a8",text:"Schritt 1.3",type:"SingleChoiceAnswerStep",answer:{choices:[{text:"Auswahl A",path:[{id:"57c97b0d-4eae-439e-b747-c297b76128e5",text:"Schritt 1.3 A",type:"TextAnswerStep",answer:{}}]},{text:"Auswahl B",path:[{id:"0b79fbb8-18f4-4824-af2a-3f4a95dc8cc6",text:"Schritt 1.3 B",type:"TextAnswerStep",answer:{}}]}]}}]},{id:"2407b57d-dfb2-487e-a4b2-d9f6f720cebe",text:"Gegenstand und Bestandteile des Vertrags",steps:[{id:"203e3a8f-e8c7-45b7-86e7-e6390393a348",text:"Schritt 2.1",type:"TextAnswerStep",answer:{}},{id:"0b570aab-fa1b-4d93-aab3-35250b8590dc",text:"Schritt 2.2",type:"TextAnswerStep",answer:{}},{id:"c8a04406-bba5-4968-bf2a-54122f58fbc3",text:"Schritt 2.3",type:"TextAnswerStep",answer:{}}]},{id:"d00fdd08-805a-4c11-8e19-c57ca770f09f",text:"Gegenstand der Leistungen",steps:[{id:"28acb64b-2c87-44c2-a112-10128a1ca546",text:"Schritt 3.1",type:"TextAnswerStep",answer:{}},{id:"3f460bf7-305f-4d53-a01b-074aa148c179",text:"Schritt 3.2",type:"TextAnswerStep",answer:{}},{id:"3cd87b83-60fa-4fd3-953b-fb0ad6d57a46",text:"Schritt 3.3",type:"TextAnswerStep",answer:{}},{id:"253a3dcf-9731-4537-8be3-908ec0e0c887",text:"Schritt 3.4",type:"TextAnswerStep",answer:{}}]}]},x=new Map,C=T(G);x.set(C.id,C);const U={findById(t){const e=x.get(t);if(typeof e=="undefined")throw new Error("Contract not found");return e},save(t){x.set(t.id,t)}},H={findById(t){const e=localStorage.getItem(t);if(e===null)throw new Error("Contract not found");return P(JSON.parse(e))},save(t){localStorage.setItem(t.id,JSON.stringify(t))}},_={async load(t){const e=await O(t);return T(JSON.parse(e).playbook)},async save(){return Promise.reject("Not implemented")}},K=()=>H,Q=()=>U,Z=()=>new M(D),ee=()=>new Y(_);export{f as C,u as S,c as T,K as a,Z as b,ee as c,Q as m};
