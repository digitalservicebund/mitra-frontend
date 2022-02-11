var u=Object.defineProperty,y=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))A.call(e,a)&&d(t,a,e[a]);if(i)for(var a of i(e))g.call(e,a)&&d(t,a,e[a]);return t},p=(t,e)=>y(t,m(e));import{a as w}from"./main.923d6d0f.js";import{c as v,b as c}from"./JSONMapper.44529864.js";class x{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(e){return this.storage.save(e)}}class T{constructor(e){this.storage=e}async load(e){return this.storage.load(e)}async save(e){return this.storage.save(e)}}function n(t){return t.title.toLowerCase().replace(/\s/g,"-")}async function b(t,e){const a=await t.createWritable();await a.write(e),await a.close()}async function l(t){const e=new FileReader;return e.readAsText(t),await new Promise(a=>{e.onload=()=>{a(e.result)}})}const k={async load(t){const e=JSON.parse(await l(t));return v(p(s({},e),{createdAt:new Date(e.createdAt),savedAt:new Date(t.lastModified)}))},async save(t){const e=JSON.stringify(s({contract:t},t.metadata));if(window.showSaveFilePicker){const a=await window.showSaveFilePicker({suggestedName:n(t),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await b(a,e)}else await w(()=>import("./FileSaver.min.297e5979.js").then(function(a){return a.F}),[]).then(({default:a})=>{const r=new Blob([e],{type:"application/json;charset=utf-8"});a.saveAs(r,`${n(t)}.json`)})}},P={id:"db2a1d38-01fb-4ea2-bc6f-b5213413c809",title:"EVB-IT Cloud",modules:[{id:"0b141639-8718-4ad9-9839-ec89aa8a1ec4",title:"Rubrum",steps:[{id:"06817a49-dd7b-4d8a-9c5b-77702e913a30",prompt:"Schritt 1.1",type:"TextAnswerStep",answer:{},produce:"Textbaustein: ${answer}"},{id:"c22cb3a2-2f89-47eb-b90c-a11f427ca6c8",prompt:"Schritt 1.2",type:"TextAnswerStep",answer:{}},{id:"f7e2bb12-ba14-4686-8513-afbdcab276a8",prompt:"Schritt 1.3",type:"SingleChoiceAnswerStep",answer:{choices:[{text:"Auswahl A",path:[{id:"57c97b0d-4eae-439e-b747-c297b76128e5",prompt:"Schritt 1.3 A",type:"TextAnswerStep",answer:{}}]},{text:"Auswahl B",path:[{id:"0b79fbb8-18f4-4824-af2a-3f4a95dc8cc6",prompt:"Schritt 1.3 B",type:"TextAnswerStep",answer:{}}]}]}},{id:"f7e2bb12-ba14-4686-8513-afbdcab276a8",prompt:"Schritt 1.4",type:"MultipleChoiceAnswerStep",answer:{choices:[{text:"Auswahl 1",path:[{id:"57c97b0d-4eae-439e-b747-c297b76128e5",prompt:"Schritt 1.4 1",type:"TextAnswerStep",answer:{}}]},{text:"Auswahl 2",path:[{id:"0b79fbb8-18f4-4824-af2a-3f4a95dc8cc6",prompt:"Schritt 1.4 2",type:"TextAnswerStep",answer:{}}]}]}},{id:"5ee3e9de-5052-49ac-95ed-849df72a7167",prompt:"Schritt 1.5",type:"RichTextAnswerStep",answer:{},produce:"Textbaustein: ${answer}"},{id:"5ee3e9de-5052-49ac-95ed-849df72a7167",prompt:"Schritt 1.6",type:"RichTextAnswerStep",answer:{}},{id:"c22cb3a2-2f89-47eb-b90c-a11f427ca6c8",prompt:"Schritt 1.7",type:"SheetAnswerStep",answer:{value:[{"Lfd Nr":"1","Produkt/ Leistung":"Amazon Web Services",Menge:"1",MVD:"Juni '22",Beginn:"01.01.22","Monatlicher Preis":"3989,86\u20AC"}]}}]},{id:"2407b57d-dfb2-487e-a4b2-d9f6f720cebe",title:"Gegenstand und Bestandteile des Vertrags",steps:[{id:"203e3a8f-e8c7-45b7-86e7-e6390393a348",prompt:"Schritt 2.1",type:"TextAnswerStep",answer:{}},{id:"0b570aab-fa1b-4d93-aab3-35250b8590dc",prompt:"Schritt 2.2",type:"TextAnswerStep",answer:{}},{id:"c8a04406-bba5-4968-bf2a-54122f58fbc3",prompt:"Schritt 2.3",type:"TextAnswerStep",answer:{}}]},{id:"d00fdd08-805a-4c11-8e19-c57ca770f09f",title:"Gegenstand der Leistungen",steps:[{id:"28acb64b-2c87-44c2-a112-10128a1ca546",prompt:"Schritt 3.1",type:"TextAnswerStep",answer:{}},{id:"3f460bf7-305f-4d53-a01b-074aa148c179",prompt:"Schritt 3.2",type:"TextAnswerStep",answer:{}},{id:"3cd87b83-60fa-4fd3-953b-fb0ad6d57a46",prompt:"Schritt 3.3",type:"TextAnswerStep",answer:{}},{id:"253a3dcf-9731-4537-8be3-908ec0e0c887",prompt:"Schritt 3.4",type:"TextAnswerStep",answer:{}}]}]};var _={playbook:P};const f={findById(t){const e=localStorage.getItem(t);if(e===null)throw new Error("Playbook not found");const a=JSON.parse(e,(h,o)=>["createdAt","savedAt"].includes(h)?new Date(o):o),{createdAt:r,savedAt:S}=a;return c(JSON.parse(e)).updateMetadata({createdAt:r,savedAt:S})},save(t){localStorage.setItem(t.id,JSON.stringify(s({playbook:t},t.metadata)))}},j=c(_);f.save(j);const N={async load(t){const e=JSON.parse(await l(t));return c(e).updateMetadata({createdAt:new Date(e.createdAt),savedAt:new Date(t.lastModified)})},async save(t){const e=JSON.stringify(s({playbook:t},t.metadata));if(window.showSaveFilePicker){const a=await window.showSaveFilePicker({suggestedName:n(t),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await b(a,e)}else await w(()=>import("./FileSaver.min.297e5979.js").then(function(a){return a.F}),[]).then(({default:a})=>{const r=new Blob([e],{type:"application/json;charset=utf-8"});a.saveAs(r,`${n(t)}.json`)})}},C=()=>f,D=()=>new x(k),I=()=>new T(N);export{C as a,I as b,D as m};
