var he=Object.defineProperty;var G=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t)=>{for(var n in t||(t={}))fe.call(t,n)&&j(e,n,t[n]);if(G)for(var n of G(t))be.call(t,n)&&j(e,n,t[n]);return e};var w=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{f as E,o as s,e as z,t as x,c as r,m as W,g as C,h as _,i as u,u as v,F as L,D as p,j as H,w as D,k as B,l as m,n as xe,p as ye,q as ve,s as O,U as X,r as T,v as J,x as S,y as Q,T as K,z as $,Z as F,A as ke,B as we,C as Ce}from"./vendor.15bef71b.js";import{_ as ee}from"./index.3f2a18ea.js";var V,_e=new Uint8Array(16);function Se(){if(!V&&(V=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!V))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(_e)}var Ie=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Le(e){return typeof e=="string"&&Ie.test(e)}var g=[];for(var Y=0;Y<256;++Y)g.push((Y+256).toString(16).substr(1));function Ee(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!Le(n))throw TypeError("Stringified UUID is invalid");return n}function De(e,t,n){e=e||{};var l=e.random||(e.rng||Se)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=l[o];return t}return Ee(l)}const Me=e=>e instanceof P;class P{constructor(){w(this,"id");this.id=De()}equals(t){return t==null?!1:this===t?!0:Me(t)?this.id===t.id:!1}}class N extends P{constructor(t,n=0,l=0){super();w(this,"title");w(this,"playbook");w(this,"answers");w(this,"_currentModuleId");w(this,"_currentStepId");this.title="",this.playbook=t,this._currentModuleId=n,this._currentStepId=l,this.answers=new Map}static fromPlaybook(t){return new N(t)}get currentStepId(){return this._currentStepId}get currentModuleId(){return this._currentModuleId}getCurrentStepAnswer(){var t;return this.answers.get((t=this.getCurrentStep())==null?void 0:t.id)}updateCurrentStepAnswer(t){var n,l;t?this.answers.set((n=this.getCurrentStep())==null?void 0:n.id,t):this.answers.set((l=this.getCurrentStep())==null?void 0:l.id,"")}get getModules(){return this.playbook.modules}getCurrentModule(){return this.getModules[this._currentModuleId]}getCurrentStep(){var t;return(t=this.getCurrentModule())==null?void 0:t.steps[this._currentStepId]}hasPrev(){return this.hasPrevStep()||this.hasPrevModule()}hasNext(){return this.hasNextStep()||this.hasNextModule()}nextStep(){this.hasNextStep()?this._currentStepId++:this.hasNextModule()&&(this._currentModuleId++,this._currentStepId=0)}prevStep(){this.hasPrevStep()?this._currentStepId--:this.hasPrevModule()&&(this._currentModuleId--,this._currentStepId=this.getCurrentModule().steps.length-1)}hasPrevModule(){return this._currentModuleId>0}hasPrevStep(){return this._currentStepId>0}hasNextModule(){return this._currentModuleId<this.getModules.length-1}hasNextStep(){var t;return this._currentStepId<((t=this.getCurrentModule())==null?void 0:t.steps.length)-1}}class te extends P{constructor(t,n){super();this.text=t,this.answer=n}getText(){return this.text}getAnswer(){return this.answer}}class ne extends te{constructor(t){super(t,{})}}w(ne,"type","Informational");class y extends te{constructor(t){super(t,{})}}w(y,"type","TextAnswer");const ze={class:"mb-4"},Pe=E({props:{text:null},setup(e){return(t,n)=>(s(),z("p",ze,x(e.text),1))}});var U={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Ae(e,t,n,l,o,a){return s(),r("input",W({class:["p-inputtext p-component",{"p-filled":a.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...d)=>a.onInput&&a.onInput(...d))},e.$attrs),null,16,["value"])}U.render=Ae;const Be={class:"mb-4"},Te={class:"mb-4"},Ke=E({props:{answer:null,text:null},emits:["answerChanged"],setup(e,{emit:t}){const l=C(e.answer);return(o,a)=>(s(),z(L,null,[_("div",Be,x(e.text),1),_("div",Te,[u(v(U),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.value=d),title:e.text,class:"w-full",type:"text",onInput:a[1]||(a[1]=d=>t("answerChanged",l.value))},null,8,["modelValue","title"])])],64))}});function Ve(e){e.addEventListener("mousedown",ae)}function Ne(e){e.removeEventListener("mousedown",ae)}function Re(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",ie)}function je(e){let t=le(e);t&&(Ne(e),t.removeEventListener("animationend",ie),t.remove())}function ae(e){let t=e.currentTarget,n=le(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let d=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=d+"px",n.style.width=d+"px"}let l=p.getOffset(t),o=e.pageX-l.left+document.body.scrollTop-p.getWidth(n)/2,a=e.pageY-l.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=a+"px",n.style.left=o+"px",p.addClass(n,"p-ink-active")}function ie(e){p.removeClass(e.currentTarget,"p-ink-active")}function le(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const se={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(Re(e),Ve(e))},unmounted(e){je(e)}};var A={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:se}};const He={class:"p-button-label"};function Oe(e,t,n,l,o,a){const d=H("ripple");return D((s(),r("button",{class:a.buttonClass,type:"button",disabled:a.disabled},[B(e.$slots,"default",{},()=>[n.loading&&!n.icon?(s(),r("span",{key:0,class:a.iconClass},null,2)):m("",!0),n.icon?(s(),r("span",{key:1,class:a.iconClass},null,2)):m("",!0),u("span",He,x(n.label||"\xA0"),1),n.badge?(s(),r("span",{key:2,class:a.badgeStyleClass},x(n.badge),3)):m("",!0)])],10,["disabled"])),[[d]])}A.render=Oe;const Xe={class:"contract-step"},Fe={class:"step-navigation"},Ye=E({props:{contract:null},setup(e){const t=e,n=C(t.contract.currentStepId),l=C(),o=C(),a=C(""),d=xe(()=>{const f=o.value.constructor.type;return f===y.type?Ke:f===ne.type?Pe:null}),c=()=>{t.contract.updateCurrentStepAnswer(a.value),t.contract.prevStep(),n.value=t.contract.currentStepId,a.value=t.contract.getCurrentStepAnswer()||""},i=()=>{t.contract.updateCurrentStepAnswer(a.value),t.contract.nextStep(),n.value=t.contract.currentStepId,a.value=t.contract.getCurrentStepAnswer()||""},h=()=>{l.value=t.contract.getCurrentModule(),o.value=t.contract.getCurrentStep()};return ye(h),ve(h),(f,I)=>{var k;return s(),z("section",{key:n.value},[_("h3",null,x((k=l.value)==null?void 0:k.text),1),_("div",Xe,[(s(),r(O(v(d)),{answer:a.value,text:o.value.text,onAnswerChanged:I[0]||(I[0]=b=>a.value=b)},null,8,["answer","text"])),_("div",Fe,[t.contract.hasPrev()?(s(),r(v(A),{key:0,label:"Zur\xFCck",class:"p-button-outlined prev-button",onClick:c})):m("",!0),t.contract.hasNext()?(s(),r(v(A),{key:1,label:"Weiter",class:"p-button-outlined next-button",onClick:i})):m("",!0)])])])}}});var Ue=ee(Ye,[["__scopeId","data-v-e32ffa6a"]]),oe={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Ze={class:"p-submenu-list",role:"tree"},Ge={class:"p-menuitem-text"},qe={class:"p-menuitem-text"},We={class:"p-toggleable-content"};function Je(e,t,n,l,o,a){const d=T("router-link"),c=T("PanelMenuSub",!0);return s(),r("ul",Ze,[(s(!0),r(L,null,J(n.model,(i,h)=>(s(),r(L,{key:a.label(i)+h.toString()},[a.visible(i)&&!i.separator?(s(),r("li",{key:0,role:"none",class:a.getItemClass(i),style:i.style},[n.template?(s(),r(O(n.template),{key:1,item:i},null,8,["item"])):(s(),r(L,{key:0},[i.to&&!a.disabled(i)?(s(),r(d,{key:0,to:i.to,custom:""},{default:S(({navigate:f,href:I,isActive:k,isExactActive:b})=>[u("a",{href:I,class:a.linkClass(i,{isRouterActive:k,isExactActive:b}),onClick:M=>a.onItemClick(M,i,f),role:"treeitem","aria-expanded":a.isActive(i)},[u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",Ge,x(a.label(i)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:i.url,class:a.linkClass(i),target:i.target,onClick:f=>a.onItemClick(f,i),role:"treeitem","aria-expanded":a.isActive(i),tabindex:a.disabled(i)?null:"0"},[i.items?(s(),r("span",{key:0,class:a.getSubmenuIcon(i)},null,2)):m("",!0),u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",qe,x(a.label(i)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),u(K,{name:"p-toggleable-content"},{default:S(()=>[D(u("div",We,[a.visible(i)&&i.items?(s(),r(c,{model:i.items,key:a.label(i)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=f=>e.$emit("item-toggle",f)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[Q,a.isActive(i)]])]),_:2},1024)],6)):m("",!0),a.visible(i)&&i.separator?(s(),r("li",{class:["p-menu-separator",i.class],style:i.style,key:"separator"+h.toString()},null,6)):m("",!0)],64))),128))])}oe.render=Je;var re={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=q({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:oe},computed:{ariaId(){return X()}}};const Qe={class:"p-panelmenu p-component"},$e={class:"p-menuitem-text"},et={class:"p-menuitem-text"},tt={key:0,class:"p-panelmenu-content"};function nt(e,t,n,l,o,a){const d=T("router-link"),c=T("PanelMenuSub");return s(),r("div",Qe,[(s(!0),r(L,null,J(n.model,(i,h)=>(s(),r(L,{key:a.label(i)+"_"+h},[a.visible(i)?(s(),r("div",{key:0,class:a.getPanelClass(i),style:i.style},[u("div",{class:a.getHeaderClass(i),style:i.style},[e.$slots.item?(s(),r(O(e.$slots.item),{key:1,item:i},null,8,["item"])):(s(),r(L,{key:0},[i.to&&!a.disabled(i)?(s(),r(d,{key:0,to:i.to,custom:""},{default:S(({navigate:f,href:I,isActive:k,isExactActive:b})=>[u("a",{href:I,class:a.getHeaderLinkClass(i,{isActive:k,isExactActive:b}),onClick:M=>a.onItemClick(M,i,f),role:"treeitem"},[i.icon?(s(),r("span",{key:0,class:a.getPanelIcon(i)},null,2)):m("",!0),u("span",$e,x(a.label(i)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:i.url,class:a.getHeaderLinkClass(i),onClick:f=>a.onItemClick(f,i),tabindex:a.disabled(i)?null:"0","aria-expanded":a.isActive(i),id:a.ariaId+"_header","aria-controls":a.ariaId+"_content"},[i.items?(s(),r("span",{key:0,class:a.getPanelToggleIcon(i)},null,2)):m("",!0),i.icon?(s(),r("span",{key:1,class:a.getPanelIcon(i)},null,2)):m("",!0),u("span",et,x(a.label(i)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),u(K,{name:"p-toggleable-content"},{default:S(()=>[D(u("div",{class:"p-toggleable-content",role:"region",id:a.ariaId+"_content","aria-labelledby":a.ariaId+"_header"},[i.items?(s(),r("div",tt,[u(c,{model:i.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:a.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[Q,a.isActive(i)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function at(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var it=`
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
`;at(it);re.render=nt;const lt=E({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=C((a=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:a.map((d,c)=>({label:`${c+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return $(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,c)=>{const i=d.querySelector(".p-toggleable-content");(i==null?void 0:i.id)&&(i.id+=`_${c+1}`);const h=d.querySelector(".p-panelmenu-header-link");(h==null?void 0:h.id)?(h.id+=`_${c+1}`,i==null||i.setAttribute("aria-labelledby",h.id)):i==null||i.removeAttribute("aria-labelledby")})}),(a,d)=>(s(),z("nav",null,[u(v(re),{model:o.value,class:"w-70"},null,8,["model"])]))}});class de extends P{constructor(t=[]){super();this.modules=t}addModules(...t){this.modules.push(...t)}}class Z extends P{constructor(t,n=[]){super();this.text=t,this.steps=n}addSteps(...t){this.steps.push(...t)}}const st=new y("Schritt 1.1"),ot=new y("Schritt 1.2"),rt=new y("Schritt 1.3"),dt=new y("Schritt 2.1"),ut=new y("Schritt 2.2"),ct=new y("Schritt 2.3"),pt=new y("Schritt 3.1"),mt=new y("Schritt 3.2"),gt=new y("Schritt 3.3"),ht=new y("Schritt 3.4"),ue=new Z("Rubrum"),ce=new Z("Gegenstand und Bestandteile des Vertrags"),pe=new Z("Gegenstand der Leistungen");ue.addSteps(st,ot,rt);ce.addSteps(dt,ut,ct);pe.addSteps(pt,mt,gt,ht);const me=new de;me.addModules(ue,ce,pe);const ft={load(){return me},save(){}};function bt(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function xt(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const yt={load(){return new N(new de)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:bt(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await xt(t,JSON.stringify(e))}}},vt=()=>ft,kt=()=>yt;var ge={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&F.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&F.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&F.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),l=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),d=a.left+l,c=a.top+o,i=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<i.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),c>=this.minY&&c+n<i.height&&(this.lastPageY=e.pageY,this.container.style.top=c+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=c+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return X()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return X()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:se}};const wt={class:"p-dialog-header-icons"},Ct=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),_t={key:1,class:"p-dialog-footer"};function St(e,t,n,l,o,a){const d=H("ripple");return s(),r(ke,{to:a.appendTarget,disabled:a.appendDisabled},[o.containerVisible?(s(),r("div",{key:0,ref:a.maskRef,class:a.maskClass,onClick:t[4]||(t[4]=(...c)=>a.onMaskClick&&a.onMaskClick(...c))},[u(K,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:S(()=>[n.visible?(s(),r("div",W({key:0,ref:a.containerRef,class:a.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(s(),r("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...c)=>a.initDrag&&a.initDrag(...c))},[B(e.$slots,"header",{},()=>[n.header?(s(),r("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},x(n.header),9,["id"])):m("",!0)]),u("div",wt,[n.maximizable?D((s(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...c)=>a.maximize&&a.maximize(...c)),type:"button",tabindex:"-1"},[u("span",{class:a.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),n.closable?D((s(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...c)=>a.close&&a.close(...c)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[Ct],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),u("div",{class:a.contentStyleClass,style:n.contentStyle},[B(e.$slots,"default")],6),n.footer||e.$slots.footer?(s(),r("div",_t,[B(e.$slots,"footer",{},()=>[we(x(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function It(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Lt=`
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
`;It(Lt);ge.render=St;const Et={class:"flex"},Dt={class:"flex-col"},Mt={class:"flex-col p-8"},zt=E({setup(e){const t=vt(),n=kt(),l=N.fromPlaybook(t.load()),o="Unbenannter Vertrag",a=C(o),d=C(o),c=C(!1),i=()=>{d.value=a.value,c.value=!0},h=()=>{c.value=!1,a.value=d.value,l.title=d.value},f=k=>{const b=k.target;b==null||b.select()},I=async()=>{await n.save(l)};return $(i),(k,b)=>{const M=H("focus");return s(),z("div",Et,[_("div",Dt,[u(lt,{modules:v(l).getModules,onSave:I},null,8,["modules"])]),_("div",Mt,[u(v(ge),{id:"dialog-contract-title",visible:c.value,"onUpdate:visible":b[1]||(b[1]=R=>c.value=R),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:S(()=>[u(v(A),{label:"OK",icon:"pi pi-check",onClick:h})]),default:S(()=>[D(u(v(U),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=R=>d.value=R),title:"Titel des Vertrags",type:"text",onFocus:f,onKeyup:Ce(h,["enter"])},null,8,["modelValue","onKeyup"]),[[M]])]),_:1},8,["visible"]),_("section",null,[u(v(A),{class:"p-button-link",onClick:i},{default:S(()=>[_("span",null,x(a.value),1)]),_:1})]),u(K,{name:"fade",mode:"out-in"},{default:S(()=>[u(Ue,{contract:v(l)},null,8,["contract"])]),_:1})])])}}});var Pt=ee(zt,[["__scopeId","data-v-d1ff55bc"]]);const Kt=E({setup(e){return(t,n)=>(s(),r(Pt))}});export{Kt as default};
