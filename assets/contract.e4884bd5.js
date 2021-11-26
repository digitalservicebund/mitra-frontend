var de=Object.defineProperty;var F=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var N=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&N(e,n,t[n]);if(F)for(var n of F(t))ue.call(t,n)&&N(e,n,t[n]);return e};var _=(e,t,n)=>(N(e,typeof t!="symbol"?t+"":t,n),n);import{D as p,e as V,w as S,o as l,c as s,f as M,g as m,h as u,t as b,m as Y,i as z,j as C,k as pe,l as me,n as T,p as v,u as g,U as j,r as B,F as I,q as Z,s as x,v as U,x as q,T as P,y as G,Z as H,z as ge,A as he,B as fe,C as be,E as xe}from"./vendor.4b10158e.js";import{_ as W}from"./index.d19ffefd.js";class K{constructor(t,n=0,d=0){_(this,"title");_(this,"playbook");_(this,"currentModuleId");_(this,"currentStepId");this.title="",this.playbook=t,this.currentModuleId=n,this.currentStepId=d}static fromPlaybook(t){return new K(t)}get getModules(){return this.playbook.modules}getCurrentModule(){return this.getModules[this.currentModuleId]}getCurrentStep(){var t;return(t=this.getCurrentModule())==null?void 0:t.steps[this.currentStepId]}hasPrev(){return this.currentStepId>0||this.currentModuleId>0}hasNext(){return this.hasNextStep()||this.hasNextModule()}nextStep(){this.hasNextStep()?this.currentStepId++:this.hasNextModule()&&(this.currentModuleId++,this.currentStepId=0)}prevStep(){this.currentStepId>0?this.currentStepId--:this.currentModuleId>0&&(this.currentModuleId--,this.currentStepId=this.getCurrentModule().steps.length-1)}hasNextModule(){return this.currentModuleId<this.getModules.length-1}hasNextStep(){var t;return this.currentStepId<((t=this.getCurrentModule())==null?void 0:t.steps.length)-1}}function ye(e){e.addEventListener("mousedown",J)}function ve(e){e.removeEventListener("mousedown",J)}function ke(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",Q)}function we(e){let t=$(e);t&&(ve(e),t.removeEventListener("animationend",Q),t.remove())}function J(e){let t=e.currentTarget,n=$(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let c=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=c+"px",n.style.width=c+"px"}let d=p.getOffset(t),o=e.pageX-d.left+document.body.scrollTop-p.getWidth(n)/2,i=e.pageY-d.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=i+"px",n.style.left=o+"px",p.addClass(n,"p-ink-active")}function Q(e){p.removeClass(e.currentTarget,"p-ink-active")}function $(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const ee={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(ke(e),ye(e))},unmounted(e){we(e)}};var L={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ee}};const _e={class:"p-button-label"};function Ce(e,t,n,d,o,i){const c=V("ripple");return S((l(),s("button",{class:i.buttonClass,type:"button",disabled:i.disabled},[M(e.$slots,"default",{},()=>[n.loading&&!n.icon?(l(),s("span",{key:0,class:i.iconClass},null,2)):m("",!0),n.icon?(l(),s("span",{key:1,class:i.iconClass},null,2)):m("",!0),u("span",_e,b(n.label||"\xA0"),1),n.badge?(l(),s("span",{key:2,class:i.badgeStyleClass},b(n.badge),3)):m("",!0)])],10,["disabled"])),[[c]])}L.render=Ce;var O={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Se(e,t,n,d,o,i){return l(),s("input",Y({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...c)=>i.onInput&&i.onInput(...c))},e.$attrs),null,16,["value"])}O.render=Se;var E;(function(e){e.Text="TEXT"})(E||(E={}));const Ie={class:"contract-step"},Le={class:"question-block"},Ee={key:0,class:"answer-block"},De={class:"step-navigation"},Me=z({props:{contract:null},setup(e){const t=e;let n=C(t.contract.currentStepId),d=C(),o=C();const i=()=>{t.contract.prevStep(),n.value=t.contract.currentStepId},c=()=>{t.contract.nextStep(),n.value=t.contract.currentStepId};function r(){return()=>{d.value=t.contract.getCurrentModule(),o.value=t.contract.getCurrentStep()}}return pe(r()),me(r()),(a,k)=>{var f,w,y,h;return l(),T("section",{key:g(n)},[v("h3",null,b((f=g(d))==null?void 0:f.text),1),v("div",Ie,[v("div",Le,b((w=g(o))==null?void 0:w.text),1),g(E).Text===((y=g(o))==null?void 0:y.type)?(l(),T("div",Ee,[u(g(O),{class:"answer-input-text",title:(h=g(o))==null?void 0:h.text,type:"text"},null,8,["title"])])):m("",!0),v("div",De,[t.contract.hasPrev()?(l(),s(g(L),{key:0,label:"Zur\xFCck",class:"p-button-outlined prev-button",onClick:i})):m("",!0),t.contract.hasNext()?(l(),s(g(L),{key:1,label:"Weiter",class:"p-button-outlined next-button",onClick:c})):m("",!0)])])])}}});var ze=W(Me,[["__scopeId","data-v-fbde58bc"]]),te={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Te={class:"p-submenu-list",role:"tree"},Be={class:"p-menuitem-text"},Pe={class:"p-menuitem-text"},Ke={class:"p-toggleable-content"};function Ae(e,t,n,d,o,i){const c=B("router-link"),r=B("PanelMenuSub",!0);return l(),s("ul",Te,[(l(!0),s(I,null,Z(n.model,(a,k)=>(l(),s(I,{key:i.label(a)+k.toString()},[i.visible(a)&&!a.separator?(l(),s("li",{key:0,role:"none",class:i.getItemClass(a),style:a.style},[n.template?(l(),s(U(n.template),{key:1,item:a},null,8,["item"])):(l(),s(I,{key:0},[a.to&&!i.disabled(a)?(l(),s(c,{key:0,to:a.to,custom:""},{default:x(({navigate:f,href:w,isActive:y,isExactActive:h})=>[u("a",{href:w,class:i.linkClass(a,{isRouterActive:y,isExactActive:h}),onClick:D=>i.onItemClick(D,a,f),role:"treeitem","aria-expanded":i.isActive(a)},[u("span",{class:["p-menuitem-icon",a.icon]},null,2),u("span",Be,b(i.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:a.url,class:i.linkClass(a),target:a.target,onClick:f=>i.onItemClick(f,a),role:"treeitem","aria-expanded":i.isActive(a),tabindex:i.disabled(a)?null:"0"},[a.items?(l(),s("span",{key:0,class:i.getSubmenuIcon(a)},null,2)):m("",!0),u("span",{class:["p-menuitem-icon",a.icon]},null,2),u("span",Pe,b(i.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),u(P,{name:"p-toggleable-content"},{default:x(()=>[S(u("div",Ke,[i.visible(a)&&a.items?(l(),s(r,{model:a.items,key:i.label(a)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=f=>e.$emit("item-toggle",f)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[q,i.isActive(a)]])]),_:2},1024)],6)):m("",!0),i.visible(a)&&a.separator?(l(),s("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+k.toString()},null,6)):m("",!0)],64))),128))])}te.render=Ae;var ne={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=R({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:te},computed:{ariaId(){return j()}}};const Ne={class:"p-panelmenu p-component"},Ve={class:"p-menuitem-text"},je={class:"p-menuitem-text"},He={key:0,class:"p-panelmenu-content"};function Oe(e,t,n,d,o,i){const c=B("router-link"),r=B("PanelMenuSub");return l(),s("div",Ne,[(l(!0),s(I,null,Z(n.model,(a,k)=>(l(),s(I,{key:i.label(a)+"_"+k},[i.visible(a)?(l(),s("div",{key:0,class:i.getPanelClass(a),style:a.style},[u("div",{class:i.getHeaderClass(a),style:a.style},[e.$slots.item?(l(),s(U(e.$slots.item),{key:1,item:a},null,8,["item"])):(l(),s(I,{key:0},[a.to&&!i.disabled(a)?(l(),s(c,{key:0,to:a.to,custom:""},{default:x(({navigate:f,href:w,isActive:y,isExactActive:h})=>[u("a",{href:w,class:i.getHeaderLinkClass(a,{isActive:y,isExactActive:h}),onClick:D=>i.onItemClick(D,a,f),role:"treeitem"},[a.icon?(l(),s("span",{key:0,class:i.getPanelIcon(a)},null,2)):m("",!0),u("span",Ve,b(i.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:a.url,class:i.getHeaderLinkClass(a),onClick:f=>i.onItemClick(f,a),tabindex:i.disabled(a)?null:"0","aria-expanded":i.isActive(a),id:i.ariaId+"_header","aria-controls":i.ariaId+"_content"},[a.items?(l(),s("span",{key:0,class:i.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(l(),s("span",{key:1,class:i.getPanelIcon(a)},null,2)):m("",!0),u("span",je,b(i.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),u(P,{name:"p-toggleable-content"},{default:x(()=>[S(u("div",{class:"p-toggleable-content",role:"region",id:i.ariaId+"_content","aria-labelledby":i.ariaId+"_header"},[a.items?(l(),s("div",He,[u(r,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:i.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[q,i.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Xe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Fe=`
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
`;Xe(Fe);ne.render=Oe;const Re=z({props:{modules:null},setup(e){const d=C((o=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:o.map((i,c)=>({label:`${c+1}. ${i.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>console.log("Saving file... (not really)")}])(e.modules));return G(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((i,c)=>{const r=i.querySelector(".p-toggleable-content");(r==null?void 0:r.id)&&(r.id+=`_${c+1}`);const a=i.querySelector(".p-panelmenu-header-link");(a==null?void 0:a.id)?(a.id+=`_${c+1}`,r==null||r.setAttribute("aria-labelledby",a.id)):r==null||r.removeAttribute("aria-labelledby")})}),(o,i)=>(l(),T("nav",null,[u(g(ne),{model:d.value,class:"w-70"},null,8,["model"])]))}});class ie{constructor(){_(this,"modules");this.modules=[]}addModule(t){this.modules.push(t)}addModules(...t){t.forEach(n=>this.addModule(n))}}class X{constructor(t){_(this,"text");_(this,"steps");this.text=t,this.steps=[]}addStep(t){this.steps.push(t)}addSteps(...t){t.forEach(n=>this.addStep(n))}}const Ye={type:E.Text,text:"Schritt 1.1"},Ze={type:E.Text,text:"Schritt 1.2"},Ue={text:"Schritt 1.3"},qe={type:E.Text,text:"Schritt 2.1"},Ge={text:"Schritt 2.2"},We={text:"Schritt 2.3"},Je={text:"Schritt 3.1"},Qe={text:"Schritt 3.2"},$e={text:"Schritt 3.3"},et={text:"Schritt 3.4"},ae=new X("Rubrum"),le=new X("Gegenstand und Bestandteile des Vertrags"),se=new X("Gegenstand der Leistungen");ae.addSteps(Ye,Ze,Ue);le.addSteps(qe,Ge,We);se.addSteps(Je,Qe,$e,et);const oe=new ie;oe.addModules(ae,le,se);const tt={load(){return oe},save(){}};function nt(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function it(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const at={load(){return new K(new ie)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:nt(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await it(t,JSON.stringify(e))}}},lt=()=>tt,st=()=>at;var re={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&H.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&H.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&H.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),d=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),c=i.left+d,r=i.top+o,a=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(c>=this.minX&&c+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=c+"px"),r>=this.minY&&r+n<a.height&&(this.lastPageY=e.pageY,this.container.style.top=r+"px")):(this.lastPageX=e.pageX,this.container.style.left=c+"px",this.lastPageY=e.pageY,this.container.style.top=r+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return j()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return j()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ee}};const ot={class:"p-dialog-header-icons"},rt=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),dt={key:1,class:"p-dialog-footer"};function ct(e,t,n,d,o,i){const c=V("ripple");return l(),s(he,{to:i.appendTarget,disabled:i.appendDisabled},[o.containerVisible?(l(),s("div",{key:0,ref:i.maskRef,class:i.maskClass,onClick:t[4]||(t[4]=(...r)=>i.onMaskClick&&i.onMaskClick(...r))},[u(P,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:x(()=>[n.visible?(l(),s("div",Y({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(l(),s("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...r)=>i.initDrag&&i.initDrag(...r))},[M(e.$slots,"header",{},()=>[n.header?(l(),s("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},b(n.header),9,["id"])):m("",!0)]),u("div",ot,[n.maximizable?S((l(),s("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...r)=>i.maximize&&i.maximize(...r)),type:"button",tabindex:"-1"},[u("span",{class:i.maximizeIconClass},null,2)],512)),[[c]]):m("",!0),n.closable?S((l(),s("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...r)=>i.close&&i.close(...r)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[rt],8,["aria-label"])),[[c]]):m("",!0)])],32)):m("",!0),u("div",{class:i.contentStyleClass,style:n.contentStyle},[M(e.$slots,"default")],6),n.footer||e.$slots.footer?(l(),s("div",dt,[M(e.$slots,"footer",{},()=>[ge(b(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function ut(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var pt=`
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
`;ut(pt);re.render=ct;const mt=e=>(be("data-v-1ecb12cf"),e=e(),xe(),e),gt={class:"flex"},ht={class:"flex-col"},ft={class:"flex-col p-8"},bt=mt(()=>v("span",null,"Speichern",-1)),xt=z({setup(e){const t=lt(),n=st(),d=K.fromPlaybook(t.load()),o="Unbenannter Vertrag",i=C(o),c=C(o),r=C(!1),a=()=>{c.value=i.value,r.value=!0},k=()=>{r.value=!1,i.value=c.value,d.title=c.value},f=y=>{const h=y.target;h==null||h.select()},w=async()=>{await n.save(d)};return G(a),(y,h)=>{const D=V("focus");return l(),T("div",gt,[v("div",ht,[u(Re,{modules:g(d).getModules},null,8,["modules"])]),v("div",ft,[u(g(re),{id:"dialog-contract-title",visible:r.value,"onUpdate:visible":h[1]||(h[1]=A=>r.value=A),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:x(()=>[u(g(L),{label:"OK",icon:"pi pi-check",onClick:k})]),default:x(()=>[S(u(g(O),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":h[0]||(h[0]=A=>c.value=A),title:"Titel des Vertrags",type:"text",onFocus:f,onKeyup:fe(k,["enter"])},null,8,["modelValue","onKeyup"]),[[D]])]),_:1},8,["visible"]),v("section",null,[u(g(L),{class:"p-button-link",onClick:a},{default:x(()=>[v("span",null,b(i.value),1)]),_:1}),u(g(L),{class:"p-button-link",onClick:w},{default:x(()=>[bt]),_:1})]),u(P,{name:"fade",mode:"out-in"},{default:x(()=>[u(ze,{contract:g(d)},null,8,["contract"])]),_:1})])])}}});var yt=W(xt,[["__scopeId","data-v-1ecb12cf"]]);const _t=z({setup(e){return(t,n)=>(l(),s(yt))}});export{_t as default};
