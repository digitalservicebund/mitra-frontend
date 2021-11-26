var me=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&j(e,n,t[n]);if(Z)for(var n of Z(t))he.call(t,n)&&j(e,n,t[n]);return e};var y=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{D as p,e as H,w as M,o as l,c as r,f as B,g as m,h as c,t as v,m as q,i as A,j as I,k as fe,l as be,n as P,p as L,u as g,q as xe,U as O,r as K,F as z,s as W,v as C,x as J,y as Q,T as V,z as $,Z as X,A as ye,B as ve,C as ke}from"./vendor.da0ccb26.js";import{_ as ee}from"./index.85e35530.js";class N{constructor(t,n=0,s=0){y(this,"title");y(this,"playbook");y(this,"currentModuleId");y(this,"currentStepId");y(this,"answers");this.title="",this.playbook=t,this.currentModuleId=n,this.currentStepId=s,this.answers=new Map}static fromPlaybook(t){return new N(t)}getCurrentStepAnswer(){var t;return this.answers.get((t=this.getCurrentStep())==null?void 0:t.uuid)}updateCurrentStepAnswer(t){var n,s;t?this.answers.set((n=this.getCurrentStep())==null?void 0:n.uuid,t):this.answers.set((s=this.getCurrentStep())==null?void 0:s.uuid,"")}get getModules(){return this.playbook.modules}getCurrentModule(){return this.getModules[this.currentModuleId]}getCurrentStep(){var t;return(t=this.getCurrentModule())==null?void 0:t.steps[this.currentStepId]}hasPrev(){return this.currentStepId>0||this.currentModuleId>0}hasNext(){return this.hasNextStep()||this.hasNextModule()}nextStep(){this.hasNextStep()?this.currentStepId++:this.hasNextModule()&&(this.currentModuleId++,this.currentStepId=0)}prevStep(){this.currentStepId>0?this.currentStepId--:this.currentModuleId>0&&(this.currentModuleId--,this.currentStepId=this.getCurrentModule().steps.length-1)}hasNextModule(){return this.currentModuleId<this.getModules.length-1}hasNextStep(){var t;return this.currentStepId<((t=this.getCurrentModule())==null?void 0:t.steps.length)-1}}function we(e){e.addEventListener("mousedown",te)}function Ce(e){e.removeEventListener("mousedown",te)}function Se(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",ne)}function _e(e){let t=ie(e);t&&(Ce(e),t.removeEventListener("animationend",ne),t.remove())}function te(e){let t=e.currentTarget,n=ie(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let d=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=d+"px",n.style.width=d+"px"}let s=p.getOffset(t),o=e.pageX-s.left+document.body.scrollTop-p.getWidth(n)/2,i=e.pageY-s.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=i+"px",n.style.left=o+"px",p.addClass(n,"p-ink-active")}function ne(e){p.removeClass(e.currentTarget,"p-ink-active")}function ie(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const ae={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(Se(e),we(e))},unmounted(e){_e(e)}};var T={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ae}};const Ie={class:"p-button-label"};function Le(e,t,n,s,o,i){const d=H("ripple");return M((l(),r("button",{class:i.buttonClass,type:"button",disabled:i.disabled},[B(e.$slots,"default",{},()=>[n.loading&&!n.icon?(l(),r("span",{key:0,class:i.iconClass},null,2)):m("",!0),n.icon?(l(),r("span",{key:1,class:i.iconClass},null,2)):m("",!0),c("span",Ie,v(n.label||"\xA0"),1),n.badge?(l(),r("span",{key:2,class:i.badgeStyleClass},v(n.badge),3)):m("",!0)])],10,["disabled"])),[[d]])}T.render=Le;var F={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Ee(e,t,n,s,o,i){return l(),r("input",q({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...d)=>i.onInput&&i.onInput(...d))},e.$attrs),null,16,["value"])}F.render=Ee;var R,De=new Uint8Array(16);function Me(){if(!R&&(R=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(De)}var ze=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Te(e){return typeof e=="string"&&ze.test(e)}var h=[];for(var Y=0;Y<256;++Y)h.push((Y+256).toString(16).substr(1));function Be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase();if(!Te(n))throw TypeError("Stringified UUID is invalid");return n}function Ae(e,t,n){e=e||{};var s=e.random||(e.rng||Me)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=s[o];return t}return Be(s)}var E;(function(e){e.None="NONE",e.Text="TEXT"})(E||(E={}));class k{constructor(t,n=E.None){y(this,"uuid");y(this,"text");y(this,"type");this.text=t,this.type=n,this.uuid=Ae()}}const Pe={class:"contract-step"},Ke={class:"question-block"},Ve={key:0,class:"answer-block"},Ne={class:"step-navigation"},Re=A({props:{contract:null},setup(e){const t=e;let n=I(t.contract.currentStepId),s=I(),o=I(),i=I();const d=()=>{t.contract.updateCurrentStepAnswer(i.value),t.contract.prevStep(),n.value=t.contract.currentStepId,i.value=t.contract.getCurrentStepAnswer()},u=()=>{t.contract.updateCurrentStepAnswer(i.value),t.contract.nextStep(),n.value=t.contract.currentStepId,i.value=t.contract.getCurrentStepAnswer()};function a(){return()=>{s.value=t.contract.getCurrentModule(),o.value=t.contract.getCurrentStep()}}return fe(a()),be(a()),(b,x)=>{var S,w,f,_;return l(),P("section",{key:g(n)},[L("h3",null,v((S=g(s))==null?void 0:S.text),1),L("div",Pe,[L("div",Ke,v((w=g(o))==null?void 0:w.text),1),g(E).Text===((f=g(o))==null?void 0:f.type)?(l(),P("div",Ve,[c(g(F),{modelValue:g(i),"onUpdate:modelValue":x[0]||(x[0]=D=>xe(i)?i.value=D:i=D),class:"answer-input-text",title:(_=g(o))==null?void 0:_.text,type:"text"},null,8,["modelValue","title"])])):m("",!0),L("div",Ne,[t.contract.hasPrev()?(l(),r(g(T),{key:0,label:"Zur\xFCck",class:"p-button-outlined prev-button",onClick:d})):m("",!0),t.contract.hasNext()?(l(),r(g(T),{key:1,label:"Weiter",class:"p-button-outlined next-button",onClick:u})):m("",!0)])])])}}});var je=ee(Re,[["__scopeId","data-v-a591affe"]]),le={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const He={class:"p-submenu-list",role:"tree"},Oe={class:"p-menuitem-text"},Xe={class:"p-menuitem-text"},Fe={class:"p-toggleable-content"};function Ye(e,t,n,s,o,i){const d=K("router-link"),u=K("PanelMenuSub",!0);return l(),r("ul",He,[(l(!0),r(z,null,W(n.model,(a,b)=>(l(),r(z,{key:i.label(a)+b.toString()},[i.visible(a)&&!a.separator?(l(),r("li",{key:0,role:"none",class:i.getItemClass(a),style:a.style},[n.template?(l(),r(J(n.template),{key:1,item:a},null,8,["item"])):(l(),r(z,{key:0},[a.to&&!i.disabled(a)?(l(),r(d,{key:0,to:a.to,custom:""},{default:C(({navigate:x,href:S,isActive:w,isExactActive:f})=>[c("a",{href:S,class:i.linkClass(a,{isRouterActive:w,isExactActive:f}),onClick:_=>i.onItemClick(_,a,x),role:"treeitem","aria-expanded":i.isActive(a)},[c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",Oe,v(i.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(l(),r("a",{key:1,href:a.url,class:i.linkClass(a),target:a.target,onClick:x=>i.onItemClick(x,a),role:"treeitem","aria-expanded":i.isActive(a),tabindex:i.disabled(a)?null:"0"},[a.items?(l(),r("span",{key:0,class:i.getSubmenuIcon(a)},null,2)):m("",!0),c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",Xe,v(i.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),c(V,{name:"p-toggleable-content"},{default:C(()=>[M(c("div",Fe,[i.visible(a)&&a.items?(l(),r(u,{model:a.items,key:i.label(a)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=x=>e.$emit("item-toggle",x)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[Q,i.isActive(a)]])]),_:2},1024)],6)):m("",!0),i.visible(a)&&a.separator?(l(),r("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+b.toString()},null,6)):m("",!0)],64))),128))])}le.render=Ye;var se={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=G({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:le},computed:{ariaId(){return O()}}};const Ue={class:"p-panelmenu p-component"},Ze={class:"p-menuitem-text"},Ge={class:"p-menuitem-text"},qe={key:0,class:"p-panelmenu-content"};function We(e,t,n,s,o,i){const d=K("router-link"),u=K("PanelMenuSub");return l(),r("div",Ue,[(l(!0),r(z,null,W(n.model,(a,b)=>(l(),r(z,{key:i.label(a)+"_"+b},[i.visible(a)?(l(),r("div",{key:0,class:i.getPanelClass(a),style:a.style},[c("div",{class:i.getHeaderClass(a),style:a.style},[e.$slots.item?(l(),r(J(e.$slots.item),{key:1,item:a},null,8,["item"])):(l(),r(z,{key:0},[a.to&&!i.disabled(a)?(l(),r(d,{key:0,to:a.to,custom:""},{default:C(({navigate:x,href:S,isActive:w,isExactActive:f})=>[c("a",{href:S,class:i.getHeaderLinkClass(a,{isActive:w,isExactActive:f}),onClick:_=>i.onItemClick(_,a,x),role:"treeitem"},[a.icon?(l(),r("span",{key:0,class:i.getPanelIcon(a)},null,2)):m("",!0),c("span",Ze,v(i.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(l(),r("a",{key:1,href:a.url,class:i.getHeaderLinkClass(a),onClick:x=>i.onItemClick(x,a),tabindex:i.disabled(a)?null:"0","aria-expanded":i.isActive(a),id:i.ariaId+"_header","aria-controls":i.ariaId+"_content"},[a.items?(l(),r("span",{key:0,class:i.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(l(),r("span",{key:1,class:i.getPanelIcon(a)},null,2)):m("",!0),c("span",Ge,v(i.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),c(V,{name:"p-toggleable-content"},{default:C(()=>[M(c("div",{class:"p-toggleable-content",role:"region",id:i.ariaId+"_content","aria-labelledby":i.ariaId+"_header"},[a.items?(l(),r("div",qe,[c(u,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:i.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[Q,i.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Je(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Qe=`
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
`;Je(Qe);se.render=We;const $e=A({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=I((i=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:i.map((d,u)=>({label:`${u+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return $(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,u)=>{const a=d.querySelector(".p-toggleable-content");(a==null?void 0:a.id)&&(a.id+=`_${u+1}`);const b=d.querySelector(".p-panelmenu-header-link");(b==null?void 0:b.id)?(b.id+=`_${u+1}`,a==null||a.setAttribute("aria-labelledby",b.id)):a==null||a.removeAttribute("aria-labelledby")})}),(i,d)=>(l(),P("nav",null,[c(g(se),{model:o.value,class:"w-70"},null,8,["model"])]))}});class oe{constructor(){y(this,"modules");this.modules=[]}addModule(t){this.modules.push(t)}addModules(...t){t.forEach(n=>this.addModule(n))}}class U{constructor(t){y(this,"text");y(this,"steps");this.text=t,this.steps=[]}addStep(t){this.steps.push(t)}addSteps(...t){t.forEach(n=>this.addStep(n))}}const et=new k("Schritt 1.1",E.Text),tt=new k("Schritt 1.2",E.Text),nt=new k("Schritt 1.3"),it=new k("Schritt 2.1",E.Text),at=new k("Schritt 2.2"),lt=new k("Schritt 2.3"),st=new k("Schritt 3.1"),ot=new k("Schritt 3.2"),rt=new k("Schritt 3.3"),dt=new k("Schritt 3.4"),re=new U("Rubrum"),de=new U("Gegenstand und Bestandteile des Vertrags"),ce=new U("Gegenstand der Leistungen");re.addSteps(et,tt,nt);de.addSteps(it,at,lt);ce.addSteps(st,ot,rt,dt);const ue=new oe;ue.addModules(re,de,ce);const ct={load(){return ue},save(){}};function ut(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function pt(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const mt={load(){return new N(new oe)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:ut(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await pt(t,JSON.stringify(e))}}},gt=()=>ct,ht=()=>mt;var pe={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&X.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&X.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&X.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),s=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),d=i.left+s,u=i.top+o,a=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),u>=this.minY&&u+n<a.height&&(this.lastPageY=e.pageY,this.container.style.top=u+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=u+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return O()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return O()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ae}};const ft={class:"p-dialog-header-icons"},bt=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),xt={key:1,class:"p-dialog-footer"};function yt(e,t,n,s,o,i){const d=H("ripple");return l(),r(ve,{to:i.appendTarget,disabled:i.appendDisabled},[o.containerVisible?(l(),r("div",{key:0,ref:i.maskRef,class:i.maskClass,onClick:t[4]||(t[4]=(...u)=>i.onMaskClick&&i.onMaskClick(...u))},[c(V,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:C(()=>[n.visible?(l(),r("div",q({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(l(),r("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...u)=>i.initDrag&&i.initDrag(...u))},[B(e.$slots,"header",{},()=>[n.header?(l(),r("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},v(n.header),9,["id"])):m("",!0)]),c("div",ft,[n.maximizable?M((l(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...u)=>i.maximize&&i.maximize(...u)),type:"button",tabindex:"-1"},[c("span",{class:i.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),n.closable?M((l(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...u)=>i.close&&i.close(...u)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[bt],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),c("div",{class:i.contentStyleClass,style:n.contentStyle},[B(e.$slots,"default")],6),n.footer||e.$slots.footer?(l(),r("div",xt,[B(e.$slots,"footer",{},()=>[ye(v(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function vt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var kt=`
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
`;vt(kt);pe.render=yt;const wt={class:"flex"},Ct={class:"flex-col"},St={class:"flex-col p-8"},_t=A({setup(e){const t=gt(),n=ht(),s=N.fromPlaybook(t.load()),o="Unbenannter Vertrag",i=I(o),d=I(o),u=I(!1),a=()=>{d.value=i.value,u.value=!0},b=()=>{u.value=!1,i.value=d.value,s.title=d.value},x=w=>{const f=w.target;f==null||f.select()},S=async()=>{await n.save(s)};return $(a),(w,f)=>{const _=H("focus");return l(),P("div",wt,[L("div",Ct,[c($e,{modules:g(s).getModules,onSave:S},null,8,["modules"])]),L("div",St,[c(g(pe),{id:"dialog-contract-title",visible:u.value,"onUpdate:visible":f[1]||(f[1]=D=>u.value=D),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:C(()=>[c(g(T),{label:"OK",icon:"pi pi-check",onClick:b})]),default:C(()=>[M(c(g(F),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":f[0]||(f[0]=D=>d.value=D),title:"Titel des Vertrags",type:"text",onFocus:x,onKeyup:ke(b,["enter"])},null,8,["modelValue","onKeyup"]),[[_]])]),_:1},8,["visible"]),L("section",null,[c(g(T),{class:"p-button-link",onClick:a},{default:C(()=>[L("span",null,v(i.value),1)]),_:1})]),c(V,{name:"fade",mode:"out-in"},{default:C(()=>[c(je,{contract:g(s)},null,8,["contract"])]),_:1})])])}}});var It=ee(_t,[["__scopeId","data-v-d1ff55bc"]]);const Mt=A({setup(e){return(t,n)=>(l(),r(It))}});export{Mt as default};
