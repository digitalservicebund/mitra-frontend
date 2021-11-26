var me=Object.defineProperty;var G=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&j(e,n,t[n]);if(G)for(var n of G(t))he.call(t,n)&&j(e,n,t[n]);return e};var y=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{D as p,e as H,w as M,o as s,c as r,f as B,g as m,h as u,t as x,m as q,i as A,j as E,k as fe,l as be,n as P,p as C,u as g,q as ye,U as O,r as K,F as z,s as W,v,x as J,y as Q,T as V,z as $,Z as X,A as xe,B as ve,C as ke,E as we,G as Ce}from"./vendor.29546cea.js";import{_ as ee}from"./index.af5d2ad3.js";class N{constructor(t,n=0,l=0){y(this,"title");y(this,"playbook");y(this,"currentModuleId");y(this,"currentStepId");y(this,"answers");this.title="",this.playbook=t,this.currentModuleId=n,this.currentStepId=l,this.answers=new Map}static fromPlaybook(t){return new N(t)}getCurrentStepAnswer(){var t;return this.answers.get((t=this.getCurrentStep())==null?void 0:t.uuid)}updateCurrentStepAnswer(t){var n,l;t?this.answers.set((n=this.getCurrentStep())==null?void 0:n.uuid,t):this.answers.set((l=this.getCurrentStep())==null?void 0:l.uuid,"")}get getModules(){return this.playbook.modules}getCurrentModule(){return this.getModules[this.currentModuleId]}getCurrentStep(){var t;return(t=this.getCurrentModule())==null?void 0:t.steps[this.currentStepId]}hasPrev(){return this.currentStepId>0||this.currentModuleId>0}hasNext(){return this.hasNextStep()||this.hasNextModule()}nextStep(){this.hasNextStep()?this.currentStepId++:this.hasNextModule()&&(this.currentModuleId++,this.currentStepId=0)}prevStep(){this.currentStepId>0?this.currentStepId--:this.currentModuleId>0&&(this.currentModuleId--,this.currentStepId=this.getCurrentModule().steps.length-1)}hasNextModule(){return this.currentModuleId<this.getModules.length-1}hasNextStep(){var t;return this.currentStepId<((t=this.getCurrentModule())==null?void 0:t.steps.length)-1}}function Se(e){e.addEventListener("mousedown",te)}function _e(e){e.removeEventListener("mousedown",te)}function Ie(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",ne)}function Ee(e){let t=ie(e);t&&(_e(e),t.removeEventListener("animationend",ne),t.remove())}function te(e){let t=e.currentTarget,n=ie(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let c=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=c+"px",n.style.width=c+"px"}let l=p.getOffset(t),o=e.pageX-l.left+document.body.scrollTop-p.getWidth(n)/2,i=e.pageY-l.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=i+"px",n.style.left=o+"px",p.addClass(n,"p-ink-active")}function ne(e){p.removeClass(e.currentTarget,"p-ink-active")}function ie(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const ae={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(Ie(e),Se(e))},unmounted(e){Ee(e)}};var T={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ae}};const Le={class:"p-button-label"};function De(e,t,n,l,o,i){const c=H("ripple");return M((s(),r("button",{class:i.buttonClass,type:"button",disabled:i.disabled},[B(e.$slots,"default",{},()=>[n.loading&&!n.icon?(s(),r("span",{key:0,class:i.iconClass},null,2)):m("",!0),n.icon?(s(),r("span",{key:1,class:i.iconClass},null,2)):m("",!0),u("span",Le,x(n.label||"\xA0"),1),n.badge?(s(),r("span",{key:2,class:i.badgeStyleClass},x(n.badge),3)):m("",!0)])],10,["disabled"])),[[c]])}T.render=De;var F={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Me(e,t,n,l,o,i){return s(),r("input",q({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...c)=>i.onInput&&i.onInput(...c))},e.$attrs),null,16,["value"])}F.render=Me;var R,ze=new Uint8Array(16);function Te(){if(!R&&(R=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(ze)}var Be=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ae(e){return typeof e=="string"&&Be.test(e)}var h=[];for(var Y=0;Y<256;++Y)h.push((Y+256).toString(16).substr(1));function Pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase();if(!Ae(n))throw TypeError("Stringified UUID is invalid");return n}function Ke(e,t,n){e=e||{};var l=e.random||(e.rng||Te)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=l[o];return t}return Pe(l)}var L;(function(e){e.None="NONE",e.Text="TEXT"})(L||(L={}));class k{constructor(t,n=L.None){y(this,"uuid");y(this,"text");y(this,"type");this.text=t,this.type=n,this.uuid=Ke()}}const Ve={class:"contract-step"},Ne={class:"question-block"},Re={key:0,class:"answer-block"},je={class:"step-navigation"},He=A({props:{contract:null},setup(e){const t=e;let n=E(t.contract.currentStepId),l=E(),o=E(),i=E();const c=()=>{t.contract.updateCurrentStepAnswer(i.value),t.contract.prevStep(),n.value=t.contract.currentStepId,i.value=t.contract.getCurrentStepAnswer()},d=()=>{t.contract.updateCurrentStepAnswer(i.value),t.contract.nextStep(),n.value=t.contract.currentStepId,i.value=t.contract.getCurrentStepAnswer()};function a(){return()=>{l.value=t.contract.getCurrentModule(),o.value=t.contract.getCurrentStep()}}return fe(a()),be(a()),(S,b)=>{var _,w,f,I;return s(),P("section",{key:g(n)},[C("h3",null,x((_=g(l))==null?void 0:_.text),1),C("div",Ve,[C("div",Ne,x((w=g(o))==null?void 0:w.text),1),g(L).Text===((f=g(o))==null?void 0:f.type)?(s(),P("div",Re,[u(g(F),{modelValue:g(i),"onUpdate:modelValue":b[0]||(b[0]=D=>ye(i)?i.value=D:i=D),class:"answer-input-text",title:(I=g(o))==null?void 0:I.text,type:"text"},null,8,["modelValue","title"])])):m("",!0),C("div",je,[t.contract.hasPrev()?(s(),r(g(T),{key:0,label:"Zur\xFCck",class:"p-button-outlined prev-button",onClick:c})):m("",!0),t.contract.hasNext()?(s(),r(g(T),{key:1,label:"Weiter",class:"p-button-outlined next-button",onClick:d})):m("",!0)])])])}}});var Oe=ee(He,[["__scopeId","data-v-a591affe"]]),le={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Xe={class:"p-submenu-list",role:"tree"},Fe={class:"p-menuitem-text"},Ye={class:"p-menuitem-text"},Ue={class:"p-toggleable-content"};function Ge(e,t,n,l,o,i){const c=K("router-link"),d=K("PanelMenuSub",!0);return s(),r("ul",Xe,[(s(!0),r(z,null,W(n.model,(a,S)=>(s(),r(z,{key:i.label(a)+S.toString()},[i.visible(a)&&!a.separator?(s(),r("li",{key:0,role:"none",class:i.getItemClass(a),style:a.style},[n.template?(s(),r(J(n.template),{key:1,item:a},null,8,["item"])):(s(),r(z,{key:0},[a.to&&!i.disabled(a)?(s(),r(c,{key:0,to:a.to,custom:""},{default:v(({navigate:b,href:_,isActive:w,isExactActive:f})=>[u("a",{href:_,class:i.linkClass(a,{isRouterActive:w,isExactActive:f}),onClick:I=>i.onItemClick(I,a,b),role:"treeitem","aria-expanded":i.isActive(a)},[u("span",{class:["p-menuitem-icon",a.icon]},null,2),u("span",Fe,x(i.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:a.url,class:i.linkClass(a),target:a.target,onClick:b=>i.onItemClick(b,a),role:"treeitem","aria-expanded":i.isActive(a),tabindex:i.disabled(a)?null:"0"},[a.items?(s(),r("span",{key:0,class:i.getSubmenuIcon(a)},null,2)):m("",!0),u("span",{class:["p-menuitem-icon",a.icon]},null,2),u("span",Ye,x(i.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),u(V,{name:"p-toggleable-content"},{default:v(()=>[M(u("div",Ue,[i.visible(a)&&a.items?(s(),r(d,{model:a.items,key:i.label(a)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=b=>e.$emit("item-toggle",b)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[Q,i.isActive(a)]])]),_:2},1024)],6)):m("",!0),i.visible(a)&&a.separator?(s(),r("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+S.toString()},null,6)):m("",!0)],64))),128))])}le.render=Ge;var se={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=Z({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:le},computed:{ariaId(){return O()}}};const Ze={class:"p-panelmenu p-component"},qe={class:"p-menuitem-text"},We={class:"p-menuitem-text"},Je={key:0,class:"p-panelmenu-content"};function Qe(e,t,n,l,o,i){const c=K("router-link"),d=K("PanelMenuSub");return s(),r("div",Ze,[(s(!0),r(z,null,W(n.model,(a,S)=>(s(),r(z,{key:i.label(a)+"_"+S},[i.visible(a)?(s(),r("div",{key:0,class:i.getPanelClass(a),style:a.style},[u("div",{class:i.getHeaderClass(a),style:a.style},[e.$slots.item?(s(),r(J(e.$slots.item),{key:1,item:a},null,8,["item"])):(s(),r(z,{key:0},[a.to&&!i.disabled(a)?(s(),r(c,{key:0,to:a.to,custom:""},{default:v(({navigate:b,href:_,isActive:w,isExactActive:f})=>[u("a",{href:_,class:i.getHeaderLinkClass(a,{isActive:w,isExactActive:f}),onClick:I=>i.onItemClick(I,a,b),role:"treeitem"},[a.icon?(s(),r("span",{key:0,class:i.getPanelIcon(a)},null,2)):m("",!0),u("span",qe,x(i.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:a.url,class:i.getHeaderLinkClass(a),onClick:b=>i.onItemClick(b,a),tabindex:i.disabled(a)?null:"0","aria-expanded":i.isActive(a),id:i.ariaId+"_header","aria-controls":i.ariaId+"_content"},[a.items?(s(),r("span",{key:0,class:i.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(s(),r("span",{key:1,class:i.getPanelIcon(a)},null,2)):m("",!0),u("span",We,x(i.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),u(V,{name:"p-toggleable-content"},{default:v(()=>[M(u("div",{class:"p-toggleable-content",role:"region",id:i.ariaId+"_content","aria-labelledby":i.ariaId+"_header"},[a.items?(s(),r("div",Je,[u(d,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:i.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[Q,i.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function $e(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var et=`
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
`;$e(et);se.render=Qe;const tt=A({props:{modules:null},setup(e){const l=E((o=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:o.map((i,c)=>({label:`${c+1}. ${i.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>console.log("Saving file... (not really)")}])(e.modules));return $(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((i,c)=>{const d=i.querySelector(".p-toggleable-content");(d==null?void 0:d.id)&&(d.id+=`_${c+1}`);const a=i.querySelector(".p-panelmenu-header-link");(a==null?void 0:a.id)?(a.id+=`_${c+1}`,d==null||d.setAttribute("aria-labelledby",a.id)):d==null||d.removeAttribute("aria-labelledby")})}),(o,i)=>(s(),P("nav",null,[u(g(se),{model:l.value,class:"w-70"},null,8,["model"])]))}});class oe{constructor(){y(this,"modules");this.modules=[]}addModule(t){this.modules.push(t)}addModules(...t){t.forEach(n=>this.addModule(n))}}class U{constructor(t){y(this,"text");y(this,"steps");this.text=t,this.steps=[]}addStep(t){this.steps.push(t)}addSteps(...t){t.forEach(n=>this.addStep(n))}}const nt=new k("Schritt 1.1",L.Text),it=new k("Schritt 1.2",L.Text),at=new k("Schritt 1.3"),lt=new k("Schritt 2.1",L.Text),st=new k("Schritt 2.2"),ot=new k("Schritt 2.3"),rt=new k("Schritt 3.1"),dt=new k("Schritt 3.2"),ct=new k("Schritt 3.3"),ut=new k("Schritt 3.4"),re=new U("Rubrum"),de=new U("Gegenstand und Bestandteile des Vertrags"),ce=new U("Gegenstand der Leistungen");re.addSteps(nt,it,at);de.addSteps(lt,st,ot);ce.addSteps(rt,dt,ct,ut);const ue=new oe;ue.addModules(re,de,ce);const pt={load(){return ue},save(){}};function mt(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function gt(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const ht={load(){return new N(new oe)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:mt(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await gt(t,JSON.stringify(e))}}},ft=()=>pt,bt=()=>ht;var pe={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&X.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&X.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&X.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),l=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),c=i.left+l,d=i.top+o,a=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(c>=this.minX&&c+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=c+"px"),d>=this.minY&&d+n<a.height&&(this.lastPageY=e.pageY,this.container.style.top=d+"px")):(this.lastPageX=e.pageX,this.container.style.left=c+"px",this.lastPageY=e.pageY,this.container.style.top=d+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return O()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return O()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ae}};const yt={class:"p-dialog-header-icons"},xt=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),vt={key:1,class:"p-dialog-footer"};function kt(e,t,n,l,o,i){const c=H("ripple");return s(),r(ve,{to:i.appendTarget,disabled:i.appendDisabled},[o.containerVisible?(s(),r("div",{key:0,ref:i.maskRef,class:i.maskClass,onClick:t[4]||(t[4]=(...d)=>i.onMaskClick&&i.onMaskClick(...d))},[u(V,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:v(()=>[n.visible?(s(),r("div",q({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(s(),r("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...d)=>i.initDrag&&i.initDrag(...d))},[B(e.$slots,"header",{},()=>[n.header?(s(),r("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},x(n.header),9,["id"])):m("",!0)]),u("div",yt,[n.maximizable?M((s(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...d)=>i.maximize&&i.maximize(...d)),type:"button",tabindex:"-1"},[u("span",{class:i.maximizeIconClass},null,2)],512)),[[c]]):m("",!0),n.closable?M((s(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...d)=>i.close&&i.close(...d)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[xt],8,["aria-label"])),[[c]]):m("",!0)])],32)):m("",!0),u("div",{class:i.contentStyleClass,style:n.contentStyle},[B(e.$slots,"default")],6),n.footer||e.$slots.footer?(s(),r("div",vt,[B(e.$slots,"footer",{},()=>[xe(x(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function wt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Ct=`
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
`;wt(Ct);pe.render=kt;const St=e=>(we("data-v-1ecb12cf"),e=e(),Ce(),e),_t={class:"flex"},It={class:"flex-col"},Et={class:"flex-col p-8"},Lt=St(()=>C("span",null,"Speichern",-1)),Dt=A({setup(e){const t=ft(),n=bt(),l=N.fromPlaybook(t.load()),o="Unbenannter Vertrag",i=E(o),c=E(o),d=E(!1),a=()=>{c.value=i.value,d.value=!0},S=()=>{d.value=!1,i.value=c.value,l.title=c.value},b=w=>{const f=w.target;f==null||f.select()},_=async()=>{await n.save(l)};return $(a),(w,f)=>{const I=H("focus");return s(),P("div",_t,[C("div",It,[u(tt,{modules:g(l).getModules},null,8,["modules"])]),C("div",Et,[u(g(pe),{id:"dialog-contract-title",visible:d.value,"onUpdate:visible":f[1]||(f[1]=D=>d.value=D),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:v(()=>[u(g(T),{label:"OK",icon:"pi pi-check",onClick:S})]),default:v(()=>[M(u(g(F),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=D=>c.value=D),title:"Titel des Vertrags",type:"text",onFocus:b,onKeyup:ke(S,["enter"])},null,8,["modelValue","onKeyup"]),[[I]])]),_:1},8,["visible"]),C("section",null,[u(g(T),{class:"p-button-link",onClick:a},{default:v(()=>[C("span",null,x(i.value),1)]),_:1}),u(g(T),{class:"p-button-link",onClick:_},{default:v(()=>[Lt]),_:1})]),u(V,{name:"fade",mode:"out-in"},{default:v(()=>[u(Oe,{contract:g(l)},null,8,["contract"])]),_:1})])])}}});var Mt=ee(Dt,[["__scopeId","data-v-1ecb12cf"]]);const At=A({setup(e){return(t,n)=>(s(),r(Mt))}});export{At as default};
