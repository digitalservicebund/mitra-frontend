var U=Object.defineProperty;var G=(t,e,r)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var i=(t,e,r)=>(G(t,typeof e!="symbol"?e+"":e,r),r);import{a as W}from"./main.28be0899.js";class H{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(e){return this.storage.save(e)}}class X{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(){return Promise.reject("Not implemented")}}var w,K=new Uint8Array(16);function Q(){if(!w&&(w=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(K)}var Z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function _(t){return typeof t=="string"&&Z.test(t)}var a=[];for(var C=0;C<256;++C)a.push((C+256).toString(16).substr(1));function ee(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase();if(!_(r))throw TypeError("Stringified UUID is invalid");return r}function te(t,e,r){t=t||{};var s=t.random||(t.rng||Q)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){r=r||0;for(var n=0;n<16;++n)e[r+n]=s[n];return e}return ee(s)}const re=t=>t instanceof u;class u{constructor(e=te()){this.id=e,this.id=e}equals(e){return e==null?!1:this===e?!0:re(e)?this.id===e.id:!1}}function V(t,e){return t.findIndex(r=>r.equals(e))}class R extends u{constructor(e,r,s){super(s);this.title=e,this.modules=r}static fromPlaybook(e){const r=e.modules.map(s=>s.clone());return new R("",r)}get path(){return Object.freeze(this.modules.flatMap(e=>e.path))}nextStepInPathAt(e){return this.path[V(this.path,e)+1]}previousStepInPathAt(e){return this.path[V(this.path,e)-1]}getModuleFor(e){return this.modules.find(r=>r.path.find(s=>s.equals(e)))}}class N extends u{constructor(e,r=[],s){super(s);this.text=e,this.steps=r}get path(){return Object.freeze(this.steps.flatMap(e=>e.path))}clone(){return new N(this.text,this.steps.map(e=>e.clone()))}}class se extends u{constructor(e="Unbenanntes Playbook",r=[],s){super(s);this.title=e,this.modules=r}addModules(...e){this.modules.push(...e)}}var j={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.prototype.hasOwnProperty;t.is=function(r,s){return r===s?r!==0||s!==0||1/r==1/s:r!==r&&s!==s},t.shallowEqual=function(r,s,n){if(r===s)return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),B=Object.keys(s);if(o.length!==B.length)return!1;for(var D=n&&typeof n.customEqual=="function"?n.customEqual:t.is,O=0;O<o.length;O++){var k=o[O];if(!e.call(s,k)||!D(r[k],s[k]))return!1}return!0}})(j);class ne{equals(e){return e==null?!1:j.shallowEqual(this,e)}}const Y=t=>{const e=[t],{selected:r}=t;return[r!=null?r:[]].flat().flatMap(s=>s.path).forEach(s=>e.push(...Y(s))),Object.freeze(e)};class f{constructor(e,r){this.text=e,this.path=r}clone(){return new f(this.text,this.path.map(e=>e.clone()))}}class l extends ne{constructor(e){super();this.value=e,this.value=e}setValue(e){this.value=e}}class c extends l{constructor(e=""){super(e)}clone(){return new c(this.value)}toString(){return this.value}}class I extends l{constructor(e=""){super(e)}clone(){return new c(this.value)}toString(){return this.value}}class d extends l{constructor(e,r=-1){super(r);this.choices=e}clone(){return new d(this.choices.map(e=>e.clone()),this.value)}get selected(){return this.choices[this.value]}toString(){var e;return`${((e=this.selected)==null?void 0:e.text)||""}`}}class h extends l{constructor(e,r=[]){super(r);this.choices=e,this.value=r}clone(){return new h(this.choices.map(e=>e.clone()),this.value)}get selected(){return this.value.sort().reduce((e,r)=>[...e,this.choices[r]],[])}toString(){return`${this.selected.map(e=>e.text).join(", ")}`}}class y extends l{constructor(e){super(e)}clone(){return new y(this.value)}toString(){return JSON.stringify(this.value)}}class p extends u{constructor(e,r,s){super(s);this.text=e,this.answer=r;for(const n of["type"]){const o=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this),n);Object.defineProperty(this,n,Object.assign(o,{enumerable:!0}))}}get path(){return Object.freeze([this])}print(){return this.answer.toString()}}const m=class extends p{constructor(e,r=new c,s="${answer}",n){super(e,r,n);this.produce=s}get type(){return m.TYPE}print(){return this.answer.value?this.produce.replaceAll("${answer}",this.answer.value):""}clone(){return new m(this.text,new c(this.answer.value),this.produce)}};let b=m;i(b,"TYPE","TextAnswerStep");const P=class extends p{constructor(e,r=new I,s="${answer}",n){super(e,r,n);this.produce=s}get type(){return P.TYPE}print(){return this.answer.value?this.produce.replaceAll("${answer}",this.answer.value):""}clone(){return new P(this.text,new I(this.answer.value),this.produce)}};let x=P;i(x,"TYPE","RichTextAnswerStep");const T=class extends p{constructor(e,r=new d([]),s){super(e,r,s)}get type(){return T.TYPE}get path(){return Y(this)}get choices(){return this.answer.choices}get selected(){return this.answer.selected}clone(){return new T(this.text,new d(this.choices.map(e=>e.clone()),this.answer.value))}};let S=T;i(S,"TYPE","SingleChoiceAnswerStep");const E=class extends p{constructor(e,r=new h([]),s){super(e,r,s)}get type(){return E.TYPE}get path(){return Y(this)}get choices(){return this.answer.choices}get selected(){return this.answer.selected}clone(){return new E(this.text,new h(this.choices.map(e=>e.clone()),this.answer.value))}};let g=E;i(g,"TYPE","MultipleChoiceAnswerStep");const A=class extends p{constructor(e,r,s="${answer}",n){super(e,r,n);this.produce=s}get type(){return A.TYPE}clone(){return new A(this.text,new y(this.answer.value))}updateCell(e,r,s){this.answer.value[e][r]=s}};let v=A;i(v,"TYPE","SheetAnswerStep");function $(t){if(t.type===b.TYPE){const e=t.answer;return new b(t.text,new c(e.value),t.produce,t.id)}if(t.type===x.TYPE){const e=t.answer;return new x(t.text,new I(e.value),t.produce,t.id)}if(t.type===S.TYPE){const e=t.answer;return new S(t.text,new d(e.choices.map(r=>new f(r.text,r.path.map($))),e.value),t.id)}if(t.type===g.TYPE){const e=t.answer;return new g(t.text,new h(e.choices.map(r=>new f(r.text,r.path.map($))),e.value),t.id)}if(t.type===v.TYPE){const e=t.answer;return new v(t.text,new y(e.value),t.produce,t.id)}throw console.error("Step type unknown, cannot deserialize JSON",t),new Error("Step type unknown")}function J(t){return new N(t.text,t.steps.map($),t.id)}function q({contract:t}){return new R(t.title,t.modules.map(J),t.id)}function M({playbook:t}){return new se(t.title,t.modules.map(J),t.id)}async function F(t){const e=new FileReader;return e.readAsText(t),await new Promise(r=>{e.onload=()=>{r(e.result)}})}function z(t){return t.title.toLowerCase().replace(/\s/g,"-")}async function ae(t,e){const r=await t.createWritable();await r.write(e),await r.close()}const ie={async load(t){const e=await F(t);return q(JSON.parse(e))},async save(t){if(window.showSaveFilePicker){const e=await window.showSaveFilePicker({suggestedName:z(t),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await ae(e,JSON.stringify({contract:t}))}else await W(()=>import("./FileSaver.min.297e5979.js").then(function(e){return e.F}),[]).then(({default:e})=>{const r=new Blob([JSON.stringify({contract:t})],{type:"application/json;charset=utf-8"});e.saveAs(r,`${z(t)}.json`)})}},ce={findById(t){const e=localStorage.getItem(t);if(e===null)throw new Error("Contract not found");return q(JSON.parse(e))},save(t){localStorage.setItem(t.id,JSON.stringify({contract:t}))}},oe={id:"db2a1d38-01fb-4ea2-bc6f-b5213413c809",title:"EVB-IT Cloud",modules:[{id:"0b141639-8718-4ad9-9839-ec89aa8a1ec4",text:"Rubrum",steps:[{id:"06817a49-dd7b-4d8a-9c5b-77702e913a30",text:"Schritt 1.1",type:"TextAnswerStep",answer:{},produce:"Textbaustein: ${answer}"},{id:"c22cb3a2-2f89-47eb-b90c-a11f427ca6c8",text:"Schritt 1.2",type:"TextAnswerStep",answer:{}},{id:"f7e2bb12-ba14-4686-8513-afbdcab276a8",text:"Schritt 1.3",type:"SingleChoiceAnswerStep",answer:{choices:[{text:"Auswahl A",path:[{id:"57c97b0d-4eae-439e-b747-c297b76128e5",text:"Schritt 1.3 A",type:"TextAnswerStep",answer:{}}]},{text:"Auswahl B",path:[{id:"0b79fbb8-18f4-4824-af2a-3f4a95dc8cc6",text:"Schritt 1.3 B",type:"TextAnswerStep",answer:{}}]}]}},{id:"f7e2bb12-ba14-4686-8513-afbdcab276a8",text:"Schritt 1.4",type:"MultipleChoiceAnswerStep",answer:{choices:[{text:"Auswahl 1",path:[{id:"57c97b0d-4eae-439e-b747-c297b76128e5",text:"Schritt 1.4 1",type:"TextAnswerStep",answer:{}}]},{text:"Auswahl 2",path:[{id:"0b79fbb8-18f4-4824-af2a-3f4a95dc8cc6",text:"Schritt 1.4 2",type:"TextAnswerStep",answer:{}}]}]}},{id:"5ee3e9de-5052-49ac-95ed-849df72a7167",text:"Schritt 1.5",type:"RichTextAnswerStep",answer:{},produce:"Textbaustein: ${answer}"},{id:"5ee3e9de-5052-49ac-95ed-849df72a7167",text:"Schritt 1.6",type:"RichTextAnswerStep",answer:{}},{id:"c22cb3a2-2f89-47eb-b90c-a11f427ca6c8",text:"Schritt 1.7",type:"SheetAnswerStep",answer:{value:[{"Lfd Nr":"1","Produkt/ Leistung":"Amazon Web Services",Menge:"1",MVD:"Juni '22",Beginn:"01.01.22","Monatlicher Preis":"3989,86\u20AC"}]}}]},{id:"2407b57d-dfb2-487e-a4b2-d9f6f720cebe",text:"Gegenstand und Bestandteile des Vertrags",steps:[{id:"203e3a8f-e8c7-45b7-86e7-e6390393a348",text:"Schritt 2.1",type:"TextAnswerStep",answer:{}},{id:"0b570aab-fa1b-4d93-aab3-35250b8590dc",text:"Schritt 2.2",type:"TextAnswerStep",answer:{}},{id:"c8a04406-bba5-4968-bf2a-54122f58fbc3",text:"Schritt 2.3",type:"TextAnswerStep",answer:{}}]},{id:"d00fdd08-805a-4c11-8e19-c57ca770f09f",text:"Gegenstand der Leistungen",steps:[{id:"28acb64b-2c87-44c2-a112-10128a1ca546",text:"Schritt 3.1",type:"TextAnswerStep",answer:{}},{id:"3f460bf7-305f-4d53-a01b-074aa148c179",text:"Schritt 3.2",type:"TextAnswerStep",answer:{}},{id:"3cd87b83-60fa-4fd3-953b-fb0ad6d57a46",text:"Schritt 3.3",type:"TextAnswerStep",answer:{}},{id:"253a3dcf-9731-4537-8be3-908ec0e0c887",text:"Schritt 3.4",type:"TextAnswerStep",answer:{}}]}]};var ue={playbook:oe};const L={findById(t){const e=localStorage.getItem(t);if(e===null)throw new Error("Playbook not found");return M(JSON.parse(e))},save(t){localStorage.setItem(t.id,JSON.stringify({playbook:t}))}},le=M(ue);L.save(le);const de={async load(t){const e=await F(t);return M(JSON.parse(e))},async save(){return Promise.reject("Not implemented")}},we=()=>ce,fe=()=>L,ye=()=>new H(ie),be=()=>new X(de);export{R as C,g as M,se as P,x as R,S,b as T,v as a,ye as b,fe as c,be as d,we as m};
