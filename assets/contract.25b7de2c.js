var pe=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var V=(e,t,n)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t)=>{for(var n in t||(t={}))me.call(t,n)&&V(e,n,t[n]);if(Y)for(var n of Y(t))ge.call(t,n)&&V(e,n,t[n]);return e};var x=(e,t,n)=>(V(e,typeof t!="symbol"?t+"":t,n),n);import{D as p,e as N,w as E,o as s,c as r,f as z,g as m,h as c,t as y,m as Z,i as A,j as I,k as he,l as fe,n as j,p as C,u as v,U as R,r as B,F as D,q as G,s as S,v as q,x as W,T as P,y as J,Z as H,z as be,A as xe,B as ye}from"./vendor.3a5fdff0.js";import{_ as Q}from"./index.5c0fd6ec.js";class T{constructor(t,n=0,l=0){x(this,"title");x(this,"playbook");x(this,"currentModuleId");x(this,"currentStepId");x(this,"answers");this.title="",this.playbook=t,this.currentModuleId=n,this.currentStepId=l,this.answers=new Map}static fromPlaybook(t){return new T(t)}getCurrentStepAnswer(){var t;return this.answers.get((t=this.getCurrentStep())==null?void 0:t.uuid)}updateCurrentStepAnswer(t){var n,l;t?this.answers.set((n=this.getCurrentStep())==null?void 0:n.uuid,t):this.answers.set((l=this.getCurrentStep())==null?void 0:l.uuid,"")}get getModules(){return this.playbook.modules}getCurrentModule(){return this.getModules[this.currentModuleId]}getCurrentStep(){var t;return(t=this.getCurrentModule())==null?void 0:t.steps[this.currentStepId]}hasPrev(){return this.currentStepId>0||this.currentModuleId>0}hasNext(){return this.hasNextStep()||this.hasNextModule()}nextStep(){this.hasNextStep()?this.currentStepId++:this.hasNextModule()&&(this.currentModuleId++,this.currentStepId=0)}prevStep(){this.currentStepId>0?this.currentStepId--:this.currentModuleId>0&&(this.currentModuleId--,this.currentStepId=this.getCurrentModule().steps.length-1)}hasNextModule(){return this.currentModuleId<this.getModules.length-1}hasNextStep(){var t;return this.currentStepId<((t=this.getCurrentModule())==null?void 0:t.steps.length)-1}}function ve(e){e.addEventListener("mousedown",$)}function ke(e){e.removeEventListener("mousedown",$)}function we(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",ee)}function Ce(e){let t=te(e);t&&(ke(e),t.removeEventListener("animationend",ee),t.remove())}function $(e){let t=e.currentTarget,n=te(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let d=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=d+"px",n.style.width=d+"px"}let l=p.getOffset(t),o=e.pageX-l.left+document.body.scrollTop-p.getWidth(n)/2,a=e.pageY-l.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=a+"px",n.style.left=o+"px",p.addClass(n,"p-ink-active")}function ee(e){p.removeClass(e.currentTarget,"p-ink-active")}function te(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const ne={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(we(e),ve(e))},unmounted(e){Ce(e)}};var M={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ne}};const Se={class:"p-button-label"};function _e(e,t,n,l,o,a){const d=N("ripple");return E((s(),r("button",{class:a.buttonClass,type:"button",disabled:a.disabled},[z(e.$slots,"default",{},()=>[n.loading&&!n.icon?(s(),r("span",{key:0,class:a.iconClass},null,2)):m("",!0),n.icon?(s(),r("span",{key:1,class:a.iconClass},null,2)):m("",!0),c("span",Se,y(n.label||"\xA0"),1),n.badge?(s(),r("span",{key:2,class:a.badgeStyleClass},y(n.badge),3)):m("",!0)])],10,["disabled"])),[[d]])}M.render=_e;var O={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Ie(e,t,n,l,o,a){return s(),r("input",Z({class:["p-inputtext p-component",{"p-filled":a.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...d)=>a.onInput&&a.onInput(...d))},e.$attrs),null,16,["value"])}O.render=Ie;const Le={class:"contract-step"},Ee={class:"question-block"},De={class:"answer-block"},Me={class:"step-navigation"},ze=A({props:{contract:null},setup(e){const t=e,n=I(t.contract.currentStepId),l=I(),o=I(),a=I(),d=()=>{t.contract.updateCurrentStepAnswer(a.value),t.contract.prevStep(),n.value=t.contract.currentStepId,a.value=t.contract.getCurrentStepAnswer()},u=()=>{t.contract.updateCurrentStepAnswer(a.value),t.contract.nextStep(),n.value=t.contract.currentStepId,a.value=t.contract.getCurrentStepAnswer()};function i(){return()=>{l.value=t.contract.getCurrentModule(),o.value=t.contract.getCurrentStep()}}return he(i()),fe(i()),(h,f)=>{var _,w,b;return s(),j("section",{key:n.value},[C("h3",null,y((_=l.value)==null?void 0:_.text),1),C("div",Le,[C("div",Ee,y((w=o.value)==null?void 0:w.text),1),C("div",De,[c(v(O),{modelValue:a.value,"onUpdate:modelValue":f[0]||(f[0]=L=>a.value=L),class:"answer-input-text",title:(b=o.value)==null?void 0:b.text,type:"text"},null,8,["modelValue","title"])]),C("div",Me,[t.contract.hasPrev()?(s(),r(v(M),{key:0,label:"Zur\xFCck",class:"p-button-outlined prev-button",onClick:d})):m("",!0),t.contract.hasNext()?(s(),r(v(M),{key:1,label:"Weiter",class:"p-button-outlined next-button",onClick:u})):m("",!0)])])])}}});var Ae=Q(ze,[["__scopeId","data-v-2ecef54f"]]),ae={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Be={class:"p-submenu-list",role:"tree"},Pe={class:"p-menuitem-text"},Te={class:"p-menuitem-text"},Ke={class:"p-toggleable-content"};function Ve(e,t,n,l,o,a){const d=B("router-link"),u=B("PanelMenuSub",!0);return s(),r("ul",Be,[(s(!0),r(D,null,G(n.model,(i,h)=>(s(),r(D,{key:a.label(i)+h.toString()},[a.visible(i)&&!i.separator?(s(),r("li",{key:0,role:"none",class:a.getItemClass(i),style:i.style},[n.template?(s(),r(q(n.template),{key:1,item:i},null,8,["item"])):(s(),r(D,{key:0},[i.to&&!a.disabled(i)?(s(),r(d,{key:0,to:i.to,custom:""},{default:S(({navigate:f,href:_,isActive:w,isExactActive:b})=>[c("a",{href:_,class:a.linkClass(i,{isRouterActive:w,isExactActive:b}),onClick:L=>a.onItemClick(L,i,f),role:"treeitem","aria-expanded":a.isActive(i)},[c("span",{class:["p-menuitem-icon",i.icon]},null,2),c("span",Pe,y(a.label(i)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:i.url,class:a.linkClass(i),target:i.target,onClick:f=>a.onItemClick(f,i),role:"treeitem","aria-expanded":a.isActive(i),tabindex:a.disabled(i)?null:"0"},[i.items?(s(),r("span",{key:0,class:a.getSubmenuIcon(i)},null,2)):m("",!0),c("span",{class:["p-menuitem-icon",i.icon]},null,2),c("span",Te,y(a.label(i)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),c(P,{name:"p-toggleable-content"},{default:S(()=>[E(c("div",Ke,[a.visible(i)&&i.items?(s(),r(u,{model:i.items,key:a.label(i)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=f=>e.$emit("item-toggle",f)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[W,a.isActive(i)]])]),_:2},1024)],6)):m("",!0),a.visible(i)&&i.separator?(s(),r("li",{class:["p-menu-separator",i.class],style:i.style,key:"separator"+h.toString()},null,6)):m("",!0)],64))),128))])}ae.render=Ve;var ie={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=U({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:ae},computed:{ariaId(){return R()}}};const Ne={class:"p-panelmenu p-component"},je={class:"p-menuitem-text"},Re={class:"p-menuitem-text"},He={key:0,class:"p-panelmenu-content"};function Oe(e,t,n,l,o,a){const d=B("router-link"),u=B("PanelMenuSub");return s(),r("div",Ne,[(s(!0),r(D,null,G(n.model,(i,h)=>(s(),r(D,{key:a.label(i)+"_"+h},[a.visible(i)?(s(),r("div",{key:0,class:a.getPanelClass(i),style:i.style},[c("div",{class:a.getHeaderClass(i),style:i.style},[e.$slots.item?(s(),r(q(e.$slots.item),{key:1,item:i},null,8,["item"])):(s(),r(D,{key:0},[i.to&&!a.disabled(i)?(s(),r(d,{key:0,to:i.to,custom:""},{default:S(({navigate:f,href:_,isActive:w,isExactActive:b})=>[c("a",{href:_,class:a.getHeaderLinkClass(i,{isActive:w,isExactActive:b}),onClick:L=>a.onItemClick(L,i,f),role:"treeitem"},[i.icon?(s(),r("span",{key:0,class:a.getPanelIcon(i)},null,2)):m("",!0),c("span",je,y(a.label(i)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:i.url,class:a.getHeaderLinkClass(i),onClick:f=>a.onItemClick(f,i),tabindex:a.disabled(i)?null:"0","aria-expanded":a.isActive(i),id:a.ariaId+"_header","aria-controls":a.ariaId+"_content"},[i.items?(s(),r("span",{key:0,class:a.getPanelToggleIcon(i)},null,2)):m("",!0),i.icon?(s(),r("span",{key:1,class:a.getPanelIcon(i)},null,2)):m("",!0),c("span",Re,y(a.label(i)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),c(P,{name:"p-toggleable-content"},{default:S(()=>[E(c("div",{class:"p-toggleable-content",role:"region",id:a.ariaId+"_content","aria-labelledby":a.ariaId+"_header"},[i.items?(s(),r("div",He,[c(u,{model:i.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:a.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[W,a.isActive(i)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Xe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Fe=`
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
`;Xe(Fe);ie.render=Oe;const Ye=A({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=I((a=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:a.map((d,u)=>({label:`${u+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return J(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,u)=>{const i=d.querySelector(".p-toggleable-content");(i==null?void 0:i.id)&&(i.id+=`_${u+1}`);const h=d.querySelector(".p-panelmenu-header-link");(h==null?void 0:h.id)?(h.id+=`_${u+1}`,i==null||i.setAttribute("aria-labelledby",h.id)):i==null||i.removeAttribute("aria-labelledby")})}),(a,d)=>(s(),j("nav",null,[c(v(ie),{model:o.value,class:"w-70"},null,8,["model"])]))}});class le{constructor(){x(this,"modules");this.modules=[]}addModules(...t){this.modules.push(...t)}}class X{constructor(t){x(this,"text");x(this,"steps");this.text=t,this.steps=[]}addSteps(...t){this.steps.push(...t)}}var K,Ue=new Uint8Array(16);function Ze(){if(!K&&(K=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!K))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return K(Ue)}var Ge=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function qe(e){return typeof e=="string"&&Ge.test(e)}var g=[];for(var F=0;F<256;++F)g.push((F+256).toString(16).substr(1));function We(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!qe(n))throw TypeError("Stringified UUID is invalid");return n}function Je(e,t,n){e=e||{};var l=e.random||(e.rng||Ze)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=l[o];return t}return We(l)}class Qe{constructor(t,n){x(this,"uuid");x(this,"text");x(this,"answer");this.uuid=Je(),this.text=t,this.answer=n}getText(){return this.text}getAnswer(){return this.answer}}class k extends Qe{constructor(t){super(t,{})}}const $e=new k("Schritt 1.1"),et=new k("Schritt 1.2"),tt=new k("Schritt 1.3"),nt=new k("Schritt 2.1"),at=new k("Schritt 2.2"),it=new k("Schritt 2.3"),lt=new k("Schritt 3.1"),st=new k("Schritt 3.2"),ot=new k("Schritt 3.3"),rt=new k("Schritt 3.4"),se=new X("Rubrum"),oe=new X("Gegenstand und Bestandteile des Vertrags"),re=new X("Gegenstand der Leistungen");se.addSteps($e,et,tt);oe.addSteps(nt,at,it);re.addSteps(lt,st,ot,rt);const de=new le;de.addModules(se,oe,re);const dt={load(){return de},save(){}};function ct(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function ut(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const pt={load(){return new T(new le)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:ct(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await ut(t,JSON.stringify(e))}}},mt=()=>dt,gt=()=>pt;var ce={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&H.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&H.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&H.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),l=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),d=a.left+l,u=a.top+o,i=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<i.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),u>=this.minY&&u+n<i.height&&(this.lastPageY=e.pageY,this.container.style.top=u+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=u+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return R()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return R()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ne}};const ht={class:"p-dialog-header-icons"},ft=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),bt={key:1,class:"p-dialog-footer"};function xt(e,t,n,l,o,a){const d=N("ripple");return s(),r(xe,{to:a.appendTarget,disabled:a.appendDisabled},[o.containerVisible?(s(),r("div",{key:0,ref:a.maskRef,class:a.maskClass,onClick:t[4]||(t[4]=(...u)=>a.onMaskClick&&a.onMaskClick(...u))},[c(P,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:S(()=>[n.visible?(s(),r("div",Z({key:0,ref:a.containerRef,class:a.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(s(),r("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...u)=>a.initDrag&&a.initDrag(...u))},[z(e.$slots,"header",{},()=>[n.header?(s(),r("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},y(n.header),9,["id"])):m("",!0)]),c("div",ht,[n.maximizable?E((s(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...u)=>a.maximize&&a.maximize(...u)),type:"button",tabindex:"-1"},[c("span",{class:a.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),n.closable?E((s(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...u)=>a.close&&a.close(...u)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[ft],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),c("div",{class:a.contentStyleClass,style:n.contentStyle},[z(e.$slots,"default")],6),n.footer||e.$slots.footer?(s(),r("div",bt,[z(e.$slots,"footer",{},()=>[be(y(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function yt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var vt=`
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
`;yt(vt);ce.render=xt;const kt={class:"flex"},wt={class:"flex-col"},Ct={class:"flex-col p-8"},St=A({setup(e){const t=mt(),n=gt(),l=T.fromPlaybook(t.load()),o="Unbenannter Vertrag",a=I(o),d=I(o),u=I(!1),i=()=>{d.value=a.value,u.value=!0},h=()=>{u.value=!1,a.value=d.value,l.title=d.value},f=w=>{const b=w.target;b==null||b.select()},_=async()=>{await n.save(l)};return J(i),(w,b)=>{const L=N("focus");return s(),j("div",kt,[C("div",wt,[c(Ye,{modules:v(l).getModules,onSave:_},null,8,["modules"])]),C("div",Ct,[c(v(ce),{id:"dialog-contract-title",visible:u.value,modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:S(()=>[c(v(M),{label:"OK",icon:"pi pi-check",onClick:h})]),default:S(()=>[E(c(v(O),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=ue=>d.value=ue),title:"Titel des Vertrags",type:"text",onFocus:f,onKeyup:ye(h,["enter"])},null,8,["modelValue","onKeyup"]),[[L]])]),_:1},8,["visible"]),C("section",null,[c(v(M),{class:"p-button-link",onClick:i},{default:S(()=>[C("span",null,y(a.value),1)]),_:1})]),c(P,{name:"fade",mode:"out-in"},{default:S(()=>[c(Ae,{contract:v(l)},null,8,["contract"])]),_:1})])])}}});var _t=Q(St,[["__scopeId","data-v-7ea534b4"]]);const Dt=A({setup(e){return(t,n)=>(s(),r(_t))}});export{Dt as default};
