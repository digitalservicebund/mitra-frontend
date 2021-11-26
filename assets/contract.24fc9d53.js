var me=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var R=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&R(e,n,t[n]);if(Z)for(var n of Z(t))he.call(t,n)&&R(e,n,t[n]);return e};var x=(e,t,n)=>(R(e,typeof t!="symbol"?t+"":t,n),n);import{D as p,e as H,w as D,o as l,c as r,f as B,g as m,h as c,t as y,m as q,i as A,j as I,k as fe,l as be,n as P,p as L,u as v,U as O,r as K,F as M,q as W,s as C,v as J,x as Q,T as V,y as $,Z as X,z as xe,A as ye,B as ve}from"./vendor.3a5fdff0.js";import{_ as ee}from"./index.8210559b.js";class N{constructor(t,n=0,s=0){x(this,"title");x(this,"playbook");x(this,"currentModuleId");x(this,"currentStepId");x(this,"answers");this.title="",this.playbook=t,this.currentModuleId=n,this.currentStepId=s,this.answers=new Map}static fromPlaybook(t){return new N(t)}getCurrentStepAnswer(){var t;return this.answers.get((t=this.getCurrentStep())==null?void 0:t.uuid)}updateCurrentStepAnswer(t){var n,s;t?this.answers.set((n=this.getCurrentStep())==null?void 0:n.uuid,t):this.answers.set((s=this.getCurrentStep())==null?void 0:s.uuid,"")}get getModules(){return this.playbook.modules}getCurrentModule(){return this.getModules[this.currentModuleId]}getCurrentStep(){var t;return(t=this.getCurrentModule())==null?void 0:t.steps[this.currentStepId]}hasPrev(){return this.currentStepId>0||this.currentModuleId>0}hasNext(){return this.hasNextStep()||this.hasNextModule()}nextStep(){this.hasNextStep()?this.currentStepId++:this.hasNextModule()&&(this.currentModuleId++,this.currentStepId=0)}prevStep(){this.currentStepId>0?this.currentStepId--:this.currentModuleId>0&&(this.currentModuleId--,this.currentStepId=this.getCurrentModule().steps.length-1)}hasNextModule(){return this.currentModuleId<this.getModules.length-1}hasNextStep(){var t;return this.currentStepId<((t=this.getCurrentModule())==null?void 0:t.steps.length)-1}}function ke(e){e.addEventListener("mousedown",te)}function we(e){e.removeEventListener("mousedown",te)}function Ce(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",ne)}function Se(e){let t=ae(e);t&&(we(e),t.removeEventListener("animationend",ne),t.remove())}function te(e){let t=e.currentTarget,n=ae(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let d=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=d+"px",n.style.width=d+"px"}let s=p.getOffset(t),o=e.pageX-s.left+document.body.scrollTop-p.getWidth(n)/2,a=e.pageY-s.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=a+"px",n.style.left=o+"px",p.addClass(n,"p-ink-active")}function ne(e){p.removeClass(e.currentTarget,"p-ink-active")}function ae(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const ie={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(Ce(e),ke(e))},unmounted(e){Se(e)}};var T={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ie}};const _e={class:"p-button-label"};function Ie(e,t,n,s,o,a){const d=H("ripple");return D((l(),r("button",{class:a.buttonClass,type:"button",disabled:a.disabled},[B(e.$slots,"default",{},()=>[n.loading&&!n.icon?(l(),r("span",{key:0,class:a.iconClass},null,2)):m("",!0),n.icon?(l(),r("span",{key:1,class:a.iconClass},null,2)):m("",!0),c("span",_e,y(n.label||"\xA0"),1),n.badge?(l(),r("span",{key:2,class:a.badgeStyleClass},y(n.badge),3)):m("",!0)])],10,["disabled"])),[[d]])}T.render=Ie;var F={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Le(e,t,n,s,o,a){return l(),r("input",q({class:["p-inputtext p-component",{"p-filled":a.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...d)=>a.onInput&&a.onInput(...d))},e.$attrs),null,16,["value"])}F.render=Le;var j,Ee=new Uint8Array(16);function De(){if(!j&&(j=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!j))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return j(Ee)}var Me=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ze(e){return typeof e=="string"&&Me.test(e)}var g=[];for(var Y=0;Y<256;++Y)g.push((Y+256).toString(16).substr(1));function Te(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!ze(n))throw TypeError("Stringified UUID is invalid");return n}function Be(e,t,n){e=e||{};var s=e.random||(e.rng||De)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=s[o];return t}return Te(s)}var E;(function(e){e.None="NONE",e.Text="TEXT"})(E||(E={}));class k{constructor(t,n=E.None){x(this,"uuid");x(this,"text");x(this,"type");this.text=t,this.type=n,this.uuid=Be()}}const Ae={class:"contract-step"},Pe={class:"question-block"},Ke={key:0,class:"answer-block"},Ve={class:"step-navigation"},Ne=A({props:{contract:null},setup(e){const t=e,n=I(t.contract.currentStepId),s=I(),o=I(),a=I(),d=()=>{t.contract.updateCurrentStepAnswer(a.value),t.contract.prevStep(),n.value=t.contract.currentStepId,a.value=t.contract.getCurrentStepAnswer()},u=()=>{t.contract.updateCurrentStepAnswer(a.value),t.contract.nextStep(),n.value=t.contract.currentStepId,a.value=t.contract.getCurrentStepAnswer()};function i(){return()=>{s.value=t.contract.getCurrentModule(),o.value=t.contract.getCurrentStep()}}return fe(i()),be(i()),(f,b)=>{var S,w,h,_;return l(),P("section",{key:n.value},[L("h3",null,y((S=s.value)==null?void 0:S.text),1),L("div",Ae,[L("div",Pe,y((w=o.value)==null?void 0:w.text),1),v(E).Text===((h=o.value)==null?void 0:h.type)?(l(),P("div",Ke,[c(v(F),{modelValue:a.value,"onUpdate:modelValue":b[0]||(b[0]=z=>a.value=z),class:"answer-input-text",title:(_=o.value)==null?void 0:_.text,type:"text"},null,8,["modelValue","title"])])):m("",!0),L("div",Ve,[t.contract.hasPrev()?(l(),r(v(T),{key:0,label:"Zur\xFCck",class:"p-button-outlined prev-button",onClick:d})):m("",!0),t.contract.hasNext()?(l(),r(v(T),{key:1,label:"Weiter",class:"p-button-outlined next-button",onClick:u})):m("",!0)])])])}}});var je=ee(Ne,[["__scopeId","data-v-0015a221"]]),le={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Re={class:"p-submenu-list",role:"tree"},He={class:"p-menuitem-text"},Oe={class:"p-menuitem-text"},Xe={class:"p-toggleable-content"};function Fe(e,t,n,s,o,a){const d=K("router-link"),u=K("PanelMenuSub",!0);return l(),r("ul",Re,[(l(!0),r(M,null,W(n.model,(i,f)=>(l(),r(M,{key:a.label(i)+f.toString()},[a.visible(i)&&!i.separator?(l(),r("li",{key:0,role:"none",class:a.getItemClass(i),style:i.style},[n.template?(l(),r(J(n.template),{key:1,item:i},null,8,["item"])):(l(),r(M,{key:0},[i.to&&!a.disabled(i)?(l(),r(d,{key:0,to:i.to,custom:""},{default:C(({navigate:b,href:S,isActive:w,isExactActive:h})=>[c("a",{href:S,class:a.linkClass(i,{isRouterActive:w,isExactActive:h}),onClick:_=>a.onItemClick(_,i,b),role:"treeitem","aria-expanded":a.isActive(i)},[c("span",{class:["p-menuitem-icon",i.icon]},null,2),c("span",He,y(a.label(i)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(l(),r("a",{key:1,href:i.url,class:a.linkClass(i),target:i.target,onClick:b=>a.onItemClick(b,i),role:"treeitem","aria-expanded":a.isActive(i),tabindex:a.disabled(i)?null:"0"},[i.items?(l(),r("span",{key:0,class:a.getSubmenuIcon(i)},null,2)):m("",!0),c("span",{class:["p-menuitem-icon",i.icon]},null,2),c("span",Oe,y(a.label(i)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),c(V,{name:"p-toggleable-content"},{default:C(()=>[D(c("div",Xe,[a.visible(i)&&i.items?(l(),r(u,{model:i.items,key:a.label(i)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=b=>e.$emit("item-toggle",b)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[Q,a.isActive(i)]])]),_:2},1024)],6)):m("",!0),a.visible(i)&&i.separator?(l(),r("li",{class:["p-menu-separator",i.class],style:i.style,key:"separator"+f.toString()},null,6)):m("",!0)],64))),128))])}le.render=Fe;var se={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=G({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:le},computed:{ariaId(){return O()}}};const Ye={class:"p-panelmenu p-component"},Ue={class:"p-menuitem-text"},Ze={class:"p-menuitem-text"},Ge={key:0,class:"p-panelmenu-content"};function qe(e,t,n,s,o,a){const d=K("router-link"),u=K("PanelMenuSub");return l(),r("div",Ye,[(l(!0),r(M,null,W(n.model,(i,f)=>(l(),r(M,{key:a.label(i)+"_"+f},[a.visible(i)?(l(),r("div",{key:0,class:a.getPanelClass(i),style:i.style},[c("div",{class:a.getHeaderClass(i),style:i.style},[e.$slots.item?(l(),r(J(e.$slots.item),{key:1,item:i},null,8,["item"])):(l(),r(M,{key:0},[i.to&&!a.disabled(i)?(l(),r(d,{key:0,to:i.to,custom:""},{default:C(({navigate:b,href:S,isActive:w,isExactActive:h})=>[c("a",{href:S,class:a.getHeaderLinkClass(i,{isActive:w,isExactActive:h}),onClick:_=>a.onItemClick(_,i,b),role:"treeitem"},[i.icon?(l(),r("span",{key:0,class:a.getPanelIcon(i)},null,2)):m("",!0),c("span",Ue,y(a.label(i)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(l(),r("a",{key:1,href:i.url,class:a.getHeaderLinkClass(i),onClick:b=>a.onItemClick(b,i),tabindex:a.disabled(i)?null:"0","aria-expanded":a.isActive(i),id:a.ariaId+"_header","aria-controls":a.ariaId+"_content"},[i.items?(l(),r("span",{key:0,class:a.getPanelToggleIcon(i)},null,2)):m("",!0),i.icon?(l(),r("span",{key:1,class:a.getPanelIcon(i)},null,2)):m("",!0),c("span",Ze,y(a.label(i)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),c(V,{name:"p-toggleable-content"},{default:C(()=>[D(c("div",{class:"p-toggleable-content",role:"region",id:a.ariaId+"_content","aria-labelledby":a.ariaId+"_header"},[i.items?(l(),r("div",Ge,[c(u,{model:i.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:a.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[Q,a.isActive(i)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function We(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Je=`
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
`;We(Je);se.render=qe;const Qe=A({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=I((a=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:a.map((d,u)=>({label:`${u+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return $(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,u)=>{const i=d.querySelector(".p-toggleable-content");(i==null?void 0:i.id)&&(i.id+=`_${u+1}`);const f=d.querySelector(".p-panelmenu-header-link");(f==null?void 0:f.id)?(f.id+=`_${u+1}`,i==null||i.setAttribute("aria-labelledby",f.id)):i==null||i.removeAttribute("aria-labelledby")})}),(a,d)=>(l(),P("nav",null,[c(v(se),{model:o.value,class:"w-70"},null,8,["model"])]))}});class oe{constructor(){x(this,"modules");this.modules=[]}addModule(t){this.modules.push(t)}addModules(...t){t.forEach(n=>this.addModule(n))}}class U{constructor(t){x(this,"text");x(this,"steps");this.text=t,this.steps=[]}addStep(t){this.steps.push(t)}addSteps(...t){t.forEach(n=>this.addStep(n))}}const $e=new k("Schritt 1.1",E.Text),et=new k("Schritt 1.2",E.Text),tt=new k("Schritt 1.3"),nt=new k("Schritt 2.1",E.Text),at=new k("Schritt 2.2"),it=new k("Schritt 2.3"),lt=new k("Schritt 3.1"),st=new k("Schritt 3.2"),ot=new k("Schritt 3.3"),rt=new k("Schritt 3.4"),re=new U("Rubrum"),de=new U("Gegenstand und Bestandteile des Vertrags"),ce=new U("Gegenstand der Leistungen");re.addSteps($e,et,tt);de.addSteps(nt,at,it);ce.addSteps(lt,st,ot,rt);const ue=new oe;ue.addModules(re,de,ce);const dt={load(){return ue},save(){}};function ct(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function ut(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const pt={load(){return new N(new oe)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:ct(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await ut(t,JSON.stringify(e))}}},mt=()=>dt,gt=()=>pt;var pe={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&X.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&X.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&X.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),s=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),d=a.left+s,u=a.top+o,i=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<i.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),u>=this.minY&&u+n<i.height&&(this.lastPageY=e.pageY,this.container.style.top=u+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=u+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return O()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return O()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ie}};const ht={class:"p-dialog-header-icons"},ft=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),bt={key:1,class:"p-dialog-footer"};function xt(e,t,n,s,o,a){const d=H("ripple");return l(),r(ye,{to:a.appendTarget,disabled:a.appendDisabled},[o.containerVisible?(l(),r("div",{key:0,ref:a.maskRef,class:a.maskClass,onClick:t[4]||(t[4]=(...u)=>a.onMaskClick&&a.onMaskClick(...u))},[c(V,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:C(()=>[n.visible?(l(),r("div",q({key:0,ref:a.containerRef,class:a.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(l(),r("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...u)=>a.initDrag&&a.initDrag(...u))},[B(e.$slots,"header",{},()=>[n.header?(l(),r("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},y(n.header),9,["id"])):m("",!0)]),c("div",ht,[n.maximizable?D((l(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...u)=>a.maximize&&a.maximize(...u)),type:"button",tabindex:"-1"},[c("span",{class:a.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),n.closable?D((l(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...u)=>a.close&&a.close(...u)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[ft],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),c("div",{class:a.contentStyleClass,style:n.contentStyle},[B(e.$slots,"default")],6),n.footer||e.$slots.footer?(l(),r("div",bt,[B(e.$slots,"footer",{},()=>[xe(y(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function yt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var vt=`
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
`;yt(vt);pe.render=xt;const kt={class:"flex"},wt={class:"flex-col"},Ct={class:"flex-col p-8"},St=A({setup(e){const t=mt(),n=gt(),s=N.fromPlaybook(t.load()),o="Unbenannter Vertrag",a=I(o),d=I(o),u=I(!1),i=()=>{d.value=a.value,u.value=!0},f=()=>{u.value=!1,a.value=d.value,s.title=d.value},b=w=>{const h=w.target;h==null||h.select()},S=async()=>{await n.save(s)};return $(i),(w,h)=>{const _=H("focus");return l(),P("div",kt,[L("div",wt,[c(Qe,{modules:v(s).getModules,onSave:S},null,8,["modules"])]),L("div",Ct,[c(v(pe),{id:"dialog-contract-title",visible:u.value,"onUpdate:visible":h[1]||(h[1]=z=>u.value=z),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:C(()=>[c(v(T),{label:"OK",icon:"pi pi-check",onClick:f})]),default:C(()=>[D(c(v(F),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=z=>d.value=z),title:"Titel des Vertrags",type:"text",onFocus:b,onKeyup:ve(f,["enter"])},null,8,["modelValue","onKeyup"]),[[_]])]),_:1},8,["visible"]),L("section",null,[c(v(T),{class:"p-button-link",onClick:i},{default:C(()=>[L("span",null,y(a.value),1)]),_:1})]),c(V,{name:"fade",mode:"out-in"},{default:C(()=>[c(je,{contract:v(s)},null,8,["contract"])]),_:1})])])}}});var _t=ee(St,[["__scopeId","data-v-d1ff55bc"]]);const Dt=A({setup(e){return(t,n)=>(l(),r(_t))}});export{Dt as default};
