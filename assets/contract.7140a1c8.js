var fe=Object.defineProperty;var $=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&j(e,n,t[n]);if($)for(var n of $(t))be.call(t,n)&&j(e,n,t[n]);return e};var Y=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n),xe=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var te=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};var H=(e,t,n)=>(xe(e,t,"access private method"),n);import{o as s,c as o,s as ne,m as E,n as L,p as P,q as k,t as w,h as u,u as b,F as I,x as B,y as X,g as m,U,r as K,l as ae,w as _,j as D,v as ie,T as V,z as le,Z as O,D as x,i as se,e as q,A as ye,f as ve,k as ke}from"./vendor.c6f07d2e.js";import{s as M,R as we}from"./button.esm.aade555f.js";import{_ as Z}from"./index.2adf7847.js";var F,_e=new Uint8Array(16);function Ce(){if(!F&&(F=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!F))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return F(_e)}var Se=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ie(e){return typeof e=="string"&&Se.test(e)}var g=[];for(var G=0;G<256;++G)g.push((G+256).toString(16).substr(1));function Le(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!Ie(n))throw TypeError("Stringified UUID is invalid");return n}function Ee(e,t,n){e=e||{};var l=e.random||(e.rng||Ce)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=l[r];return t}return Le(l)}const De=e=>e instanceof z;class z{constructor(){Y(this,"id");this.id=Ee()}equals(t){return t==null?!1:this===t?!0:De(t)?this.id===t.id:!1}}var T,oe;const Q=class extends z{constructor(t,n){super();te(this,T);this.title=t,this.modules=n}static fromPlaybook(t){const n=t.modules.map(l=>l.clone());return new Q("",n)}getSteps(){return this.modules.flatMap(t=>t.steps)}getNextStepFor(t){return this.getSteps()[H(this,T,oe).call(this,t)+1]}getPreviousStepFor(t){return this.getSteps()[H(this,T,oe).call(this,t)-1]}getModules(){return this.modules}getModuleFor(t){return this.modules.find(n=>n.steps.find(l=>l.equals(t)))}};let W=Q;T=new WeakSet,oe=function(t){return this.getSteps().findIndex(n=>n.equals(t))};class ze{constructor(t){this.answer=t}getAnswer(){return this.answer}setAnswer(t){this.answer=t}}class Ae extends z{constructor(t,n){super();this.text=t,this.answer=n}getAnswer(){return this.answer.getAnswer()||""}setAnswer(t){this.answer.setAnswer(t)}isUnanswered(){return!this.answer.getAnswer()}}const N=class extends Ae{constructor(t,n=new ze){super(t,n)}getType(){return N.TYPE}clone(){return new N(this.text,this.answer)}};let y=N;Y(y,"TYPE","TextAnswerStep");var J={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Te(e,t,n,l,r,a){return s(),o("input",ne({class:["p-inputtext p-component",{"p-filled":a.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...d)=>a.onInput&&a.onInput(...d))},e.$attrs),null,16,["value"])}J.render=Te;const Pe={class:"mb-4"},Be={class:"mb-4"},Ke=E({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const l=L(e.step.getAnswer());return(r,a)=>(s(),P(I,null,[k("div",Pe,w(e.step.text),1),k("div",Be,[u(b(J),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.value=d),title:e.step.text,class:"w-full",type:"text",onInput:a[1]||(a[1]=d=>t("answerChanged",l.value))},null,8,["modelValue","title"])])],64))}});const Ve={class:"font-bold"},Me={class:"w-[30vw]"},Fe={class:"grid grid-cols-3 col-span-full"},Ne=E({props:{contract:null},setup(e){const t=e,n=L(t.contract.getSteps()[0]),l=B(()=>n.value===void 0?null:n.value.getType()===y.TYPE?Ke:null),r=B(()=>t.contract.getPreviousStepFor(n.value)!==void 0),a=B(()=>t.contract.getNextStepFor(n.value)!==void 0),d=B(()=>t.contract.getModuleFor(n.value)),c=()=>{const p=t.contract.getPreviousStepFor(n.value);p&&(n.value=p)},i=()=>{const p=t.contract.getNextStepFor(n.value);p&&(n.value=p)};return(p,f)=>{var C,v;return s(),P("section",{key:(C=n.value)==null?void 0:C.id},[k("h3",Ve,w((v=b(d))==null?void 0:v.text),1),k("div",Me,[(s(),o(X(b(l)),{step:n.value,onAnswerChanged:f[0]||(f[0]=h=>{var S;return(S=n.value)==null?void 0:S.setAnswer(h)})},null,8,["step"])),k("div",Fe,[b(r)?(s(),o(b(M),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:c})):m("",!0),b(a)?(s(),o(b(M),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:i})):m("",!0)])])])}}});var Re=Z(Ne,[["__scopeId","data-v-274a1f0c"]]),re={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const je={class:"p-submenu-list",role:"tree"},Ye={class:"p-menuitem-text"},He={class:"p-menuitem-text"},Xe={class:"p-toggleable-content"};function Ue(e,t,n,l,r,a){const d=K("router-link"),c=K("PanelMenuSub",!0);return s(),o("ul",je,[(s(!0),o(I,null,ae(n.model,(i,p)=>(s(),o(I,{key:a.label(i)+p.toString()},[a.visible(i)&&!i.separator?(s(),o("li",{key:0,role:"none",class:a.getItemClass(i),style:i.style},[n.template?(s(),o(X(n.template),{key:1,item:i},null,8,["item"])):(s(),o(I,{key:0},[i.to&&!a.disabled(i)?(s(),o(d,{key:0,to:i.to,custom:""},{default:_(({navigate:f,href:C,isActive:v,isExactActive:h})=>[u("a",{href:C,class:a.linkClass(i,{isRouterActive:v,isExactActive:h}),onClick:S=>a.onItemClick(S,i,f),role:"treeitem","aria-expanded":a.isActive(i)},[u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",Ye,w(a.label(i)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),o("a",{key:1,href:i.url,class:a.linkClass(i),target:i.target,onClick:f=>a.onItemClick(f,i),role:"treeitem","aria-expanded":a.isActive(i),tabindex:a.disabled(i)?null:"0"},[i.items?(s(),o("span",{key:0,class:a.getSubmenuIcon(i)},null,2)):m("",!0),u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",He,w(a.label(i)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),u(V,{name:"p-toggleable-content"},{default:_(()=>[D(u("div",Xe,[a.visible(i)&&i.items?(s(),o(c,{model:i.items,key:a.label(i)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=f=>e.$emit("item-toggle",f)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[ie,a.isActive(i)]])]),_:2},1024)],6)):m("",!0),a.visible(i)&&i.separator?(s(),o("li",{class:["p-menu-separator",i.class],style:i.style,key:"separator"+p.toString()},null,6)):m("",!0)],64))),128))])}re.render=Ue;var de={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=ee({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:re},computed:{ariaId(){return U()}}};const Oe={class:"p-panelmenu p-component"},qe={class:"p-menuitem-text"},Ze={class:"p-menuitem-text"},Ge={key:0,class:"p-panelmenu-content"};function We(e,t,n,l,r,a){const d=K("router-link"),c=K("PanelMenuSub");return s(),o("div",Oe,[(s(!0),o(I,null,ae(n.model,(i,p)=>(s(),o(I,{key:a.label(i)+"_"+p},[a.visible(i)?(s(),o("div",{key:0,class:a.getPanelClass(i),style:i.style},[u("div",{class:a.getHeaderClass(i),style:i.style},[e.$slots.item?(s(),o(X(e.$slots.item),{key:1,item:i},null,8,["item"])):(s(),o(I,{key:0},[i.to&&!a.disabled(i)?(s(),o(d,{key:0,to:i.to,custom:""},{default:_(({navigate:f,href:C,isActive:v,isExactActive:h})=>[u("a",{href:C,class:a.getHeaderLinkClass(i,{isActive:v,isExactActive:h}),onClick:S=>a.onItemClick(S,i,f),role:"treeitem"},[i.icon?(s(),o("span",{key:0,class:a.getPanelIcon(i)},null,2)):m("",!0),u("span",qe,w(a.label(i)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),o("a",{key:1,href:i.url,class:a.getHeaderLinkClass(i),onClick:f=>a.onItemClick(f,i),tabindex:a.disabled(i)?null:"0","aria-expanded":a.isActive(i),id:a.ariaId+"_header","aria-controls":a.ariaId+"_content"},[i.items?(s(),o("span",{key:0,class:a.getPanelToggleIcon(i)},null,2)):m("",!0),i.icon?(s(),o("span",{key:1,class:a.getPanelIcon(i)},null,2)):m("",!0),u("span",Ze,w(a.label(i)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),u(V,{name:"p-toggleable-content"},{default:_(()=>[D(u("div",{class:"p-toggleable-content",role:"region",id:a.ariaId+"_content","aria-labelledby":a.ariaId+"_header"},[i.items?(s(),o("div",Ge,[u(c,{model:i.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:a.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[ie,a.isActive(i)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Je(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Qe=`
.p-panelmenu .p-panelmenu-header-link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}
.p-panelmenu .p-panelmenu-header-link:focus {
    z-index: 1;
}
.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-panelmenu .p-menuitem-link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    cursor: pointer;
    text-decoration: none;
}
.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
`;Je(Qe);de.render=We;const $e=E({props:{modules:null},emits:["save"],setup(e,{emit:t}){const r=L((a=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:a.map((d,c)=>({label:`${c+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return le(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,c)=>{const i=d.querySelector(".p-toggleable-content");(i==null?void 0:i.id)&&(i.id+=`_${c+1}`);const p=d.querySelector(".p-panelmenu-header-link");(p==null?void 0:p.id)?(p.id+=`_${c+1}`,i==null||i.setAttribute("aria-labelledby",p.id)):i==null||i.removeAttribute("aria-labelledby")})}),(a,d)=>(s(),P("nav",null,[u(b(de),{model:r.value,class:"w-70"},null,8,["model"])]))}});var et=Z($e,[["__scopeId","data-v-1dd91fff"]]);class tt extends z{constructor(t=[]){super();this.modules=t}addModules(...t){this.modules.push(...t)}}class A extends z{constructor(t,n=[]){super();this.text=t,this.steps=n}addSteps(...t){this.steps.push(...t)}clone(){return new A(this.text,this.steps.map(t=>t.clone()))}}const nt=new y("Schritt 1.1"),at=new y("Schritt 1.2"),it=new y("Schritt 1.3"),lt=new y("Schritt 2.1"),st=new y("Schritt 2.2"),ot=new y("Schritt 2.3"),rt=new y("Schritt 3.1"),dt=new y("Schritt 3.2"),ct=new y("Schritt 3.3"),ut=new y("Schritt 3.4"),ce=new A("Rubrum"),ue=new A("Gegenstand und Bestandteile des Vertrags"),pe=new A("Gegenstand der Leistungen");ce.addSteps(nt,at,it);ue.addSteps(lt,st,ot);pe.addSteps(rt,dt,ct,ut);const me=new tt;me.addModules(ce,ue,pe);const pt={load(){return me},save(){}};function mt(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function gt(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const ft={load(){return new W("",[])},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:mt(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await gt(t,JSON.stringify(e))}}},ht=()=>pt,bt=()=>ft;var ge={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&O.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&O.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&x.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&O.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?x.addClass(document.body,"p-overflow-hidden"):x.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&x.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&x.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=x.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){x.hasClass(e.target,"p-dialog-header-icon")||x.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",x.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=x.getOuterWidth(this.container),n=x.getOuterHeight(this.container),l=e.pageX-this.lastPageX,r=e.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),d=a.left+l,c=a.top+r,i=x.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<i.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),c>=this.minY&&c+n<i.height&&(this.lastPageY=e.pageY,this.container.style.top=c+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=c+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,x.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return U()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return U()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:we}};const xt={class:"p-dialog-header-icons"},yt=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),vt={key:1,class:"p-dialog-footer"};function kt(e,t,n,l,r,a){const d=se("ripple");return s(),o(ye,{to:a.appendTarget,disabled:a.appendDisabled},[r.containerVisible?(s(),o("div",{key:0,ref:a.maskRef,class:a.maskClass,onClick:t[4]||(t[4]=(...c)=>a.onMaskClick&&a.onMaskClick(...c))},[u(V,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:_(()=>[n.visible?(s(),o("div",ne({key:0,ref:a.containerRef,class:a.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(s(),o("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...c)=>a.initDrag&&a.initDrag(...c))},[q(e.$slots,"header",{},()=>[n.header?(s(),o("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},w(n.header),9,["id"])):m("",!0)]),u("div",xt,[n.maximizable?D((s(),o("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...c)=>a.maximize&&a.maximize(...c)),type:"button",tabindex:"-1"},[u("span",{class:a.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),n.closable?D((s(),o("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...c)=>a.close&&a.close(...c)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[yt],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),u("div",{class:a.contentStyleClass,style:n.contentStyle},[q(e.$slots,"default")],6),n.footer||e.$slots.footer?(s(),o("div",vt,[q(e.$slots,"footer",{},()=>[ve(w(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function wt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var _t=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog-footer {
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: .75rem;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, -100%, 0px);
            transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, 100%, 0px);
            transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    -webkit-transform: translate3d(-100%, 0px, 0px);
            transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    -webkit-transform: translate3d(100%, 0px, 0px);
            transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

/* Position */
.p-dialog-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-dialog-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-dialog-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;wt(_t);ge.render=kt;const Ct={class:"flex"},St={class:"flex-col"},It={class:"flex-col p-8"},Lt=E({setup(e){const t=ht(),n=bt(),l=W.fromPlaybook(t.load()),r="Unbenannter Vertrag",a=L(r),d=L(r),c=L(!1),i=()=>{d.value=a.value,c.value=!0},p=()=>{c.value=!1,a.value=d.value,l.title=d.value},f=v=>{const h=v.target;h==null||h.select()},C=async()=>{await n.save(l)};return le(i),(v,h)=>{const S=se("focus");return s(),P("div",Ct,[k("div",St,[u(et,{modules:b(l).getModules(),onSave:C},null,8,["modules"])]),k("div",It,[u(b(ge),{id:"dialog-contract-title",visible:c.value,"onUpdate:visible":h[1]||(h[1]=R=>c.value=R),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:_(()=>[u(b(M),{label:"OK",icon:"pi pi-check",onClick:p})]),default:_(()=>[D(u(b(J),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=R=>d.value=R),title:"Titel des Vertrags",type:"text",onFocus:f,onKeyup:ke(p,["enter"])},null,8,["modelValue","onKeyup"]),[[S]])]),_:1},8,["visible"]),k("section",null,[u(b(M),{class:"p-button-link",onClick:i},{default:_(()=>[k("span",null,w(a.value),1)]),_:1})]),u(V,{name:"fade",mode:"out-in"},{default:_(()=>[u(Re,{contract:b(l)},null,8,["contract"])]),_:1})])])}}});var Et=Z(Lt,[["__scopeId","data-v-209f11a3"]]);const Pt=E({setup(e){return(t,n)=>(s(),o(Et))}});export{Pt as default};
