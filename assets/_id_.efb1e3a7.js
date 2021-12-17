var ee=Object.defineProperty;var H=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var R=(e,t,a)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Z=(e,t)=>{for(var a in t||(t={}))te.call(t,a)&&R(e,a,t[a]);if(H)for(var a of H(t))ne.call(t,a)&&R(e,a,t[a]);return e};import{y as ae,o as i,c as o,z as O,i as E,m as D,j as S,k as v,t as x,h as c,u as f,F as y,A as B,B as M,g as m,x as K,U as j,r as A,w as k,q as z,v as U,T,Z as N,D as h,p as G,f as Y,C as le,l as ie,E as se,s as oe}from"./vendor.ccbd1fda.js";import{T as re,s as P,R as de,C as ce,c as ue,a as pe,m as me}from"./provide.f0d2bda6.js";import{_ as F}from"./index.d6677168.js";class ge{constructor(t=new Map){this.currentSteps=t}addContracts(...t){t.forEach(a=>{this.currentSteps.get(a)||this.currentSteps.set(a,a.getAllSteps()[0])})}getCurrentStep(t){return this.currentSteps.get(t)}setCurrentStep(t,a){this.currentSteps.set(t,a)}}const q=ae("session",{state:()=>new ge});var X={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function fe(e,t,a,s,r,n){return i(),o("input",O({class:["p-inputtext p-component",{"p-filled":n.filled}],value:a.modelValue,onInput:t[1]||(t[1]=(...d)=>n.onInput&&n.onInput(...d))},e.$attrs),null,16,["value"])}X.render=fe;const he={class:"mb-4"},be={class:"mb-4"},xe=E({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const s=D(e.step.answer.toString());return(r,n)=>(i(),S(y,null,[v("div",he,x(e.step.text),1),v("div",be,[c(f(X),{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=d=>s.value=d),title:e.step.text,class:"w-full",type:"text",onInput:n[1]||(n[1]=d=>t("answerChanged",s.value))},null,8,["modelValue","title"])])],64))}});const ve={class:"font-bold"},ye={class:"grid grid-cols-3 col-span-full"},ke=E({props:{contract:null},setup(e){const t=e,a=q(),s=D(a.$state.getCurrentStep(t.contract));a.$subscribe((p,b)=>{s.value=b.getCurrentStep(t.contract)});const r=B(()=>s.value.type===re.TYPE?xe:null),n=B(()=>t.contract.getPreviousStepFor(s.value)!==void 0),d=B(()=>t.contract.getNextStepFor(s.value)!==void 0),u=B(()=>t.contract.getModuleFor(s.value)),l=()=>{const p=t.contract.getPreviousStepFor(s.value);p&&(s.value=p)},g=()=>{const p=t.contract.getNextStepFor(s.value);p&&(s.value=p)};return(p,b)=>{var w,_;return i(),S("section",{key:(w=s.value)==null?void 0:w.id},[v("h3",ve,x((_=f(u))==null?void 0:_.text),1),(i(),o(M(f(r)),{step:s.value,onAnswerChanged:b[0]||(b[0]=L=>{var C;return(C=s.value)==null?void 0:C.setAnswer(L)})},null,8,["step"])),v("div",ye,[f(n)?(i(),o(f(P),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:l})):m("",!0),f(d)?(i(),o(f(P),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:g})):m("",!0)])])}}});var we=F(ke,[["__scopeId","data-v-5134fa36"]]);const _e=v("h3",{class:"p-2 font-bold bg-white"},"Vorschau Vertragstext",-1),Ce={class:"font-bold"},Ie=E({props:{contract:null},setup(e){const a=D(e.contract.modules);return(s,r)=>(i(),S("section",null,[_e,(i(!0),S(y,null,K(a.value,n=>(i(),S("article",{key:n.id,class:"p-2"},[v("h4",Ce,x(n.text),1),(i(!0),S(y,null,K(n.steps,d=>(i(),S("div",{key:d.id,class:"mt-2"},x(d.answer.toString()),1))),128))]))),128))]))}});var W={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Se={class:"p-submenu-list",role:"tree"},Le={class:"p-menuitem-text"},De={class:"p-menuitem-text"},Ee={class:"p-toggleable-content"};function ze(e,t,a,s,r,n){const d=A("router-link"),u=A("PanelMenuSub",!0);return i(),o("ul",Se,[(i(!0),o(y,null,K(a.model,(l,g)=>(i(),o(y,{key:n.label(l)+g.toString()},[n.visible(l)&&!l.separator?(i(),o("li",{key:0,role:"none",class:n.getItemClass(l),style:l.style},[a.template?(i(),o(M(a.template),{key:1,item:l},null,8,["item"])):(i(),o(y,{key:0},[l.to&&!n.disabled(l)?(i(),o(d,{key:0,to:l.to,custom:""},{default:k(({navigate:p,href:b,isActive:w,isExactActive:_})=>[c("a",{href:b,class:n.linkClass(l,{isRouterActive:w,isExactActive:_}),onClick:L=>n.onItemClick(L,l,p),role:"treeitem","aria-expanded":n.isActive(l)},[c("span",{class:["p-menuitem-icon",l.icon]},null,2),c("span",Le,x(n.label(l)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(i(),o("a",{key:1,href:l.url,class:n.linkClass(l),target:l.target,onClick:p=>n.onItemClick(p,l),role:"treeitem","aria-expanded":n.isActive(l),tabindex:n.disabled(l)?null:"0"},[l.items?(i(),o("span",{key:0,class:n.getSubmenuIcon(l)},null,2)):m("",!0),c("span",{class:["p-menuitem-icon",l.icon]},null,2),c("span",De,x(n.label(l)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),c(T,{name:"p-toggleable-content"},{default:k(()=>[z(c("div",Ee,[n.visible(l)&&l.items?(i(),o(u,{model:l.items,key:n.label(l)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=p=>e.$emit("item-toggle",p)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[U,n.isActive(l)]])]),_:2},1024)],6)):m("",!0),n.visible(l)&&l.separator?(i(),o("li",{class:["p-menu-separator",l.class],style:l.style,key:"separator"+g.toString()},null,6)):m("",!0)],64))),128))])}W.render=ze;var J={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=Z({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:W},computed:{ariaId(){return j()}}};const Be={class:"p-panelmenu p-component"},Ke={class:"p-menuitem-text"},Ae={class:"p-menuitem-text"},Te={key:0,class:"p-panelmenu-content"};function Pe(e,t,a,s,r,n){const d=A("router-link"),u=A("PanelMenuSub");return i(),o("div",Be,[(i(!0),o(y,null,K(a.model,(l,g)=>(i(),o(y,{key:n.label(l)+"_"+g},[n.visible(l)?(i(),o("div",{key:0,class:n.getPanelClass(l),style:l.style},[c("div",{class:n.getHeaderClass(l),style:l.style},[e.$slots.item?(i(),o(M(e.$slots.item),{key:1,item:l},null,8,["item"])):(i(),o(y,{key:0},[l.to&&!n.disabled(l)?(i(),o(d,{key:0,to:l.to,custom:""},{default:k(({navigate:p,href:b,isActive:w,isExactActive:_})=>[c("a",{href:b,class:n.getHeaderLinkClass(l,{isActive:w,isExactActive:_}),onClick:L=>n.onItemClick(L,l,p),role:"treeitem"},[l.icon?(i(),o("span",{key:0,class:n.getPanelIcon(l)},null,2)):m("",!0),c("span",Ke,x(n.label(l)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(i(),o("a",{key:1,href:l.url,class:n.getHeaderLinkClass(l),onClick:p=>n.onItemClick(p,l),tabindex:n.disabled(l)?null:"0","aria-expanded":n.isActive(l),id:n.ariaId+"_header_"+g,"aria-controls":n.ariaId+"_content_"+g},[l.items?(i(),o("span",{key:0,class:n.getPanelToggleIcon(l)},null,2)):m("",!0),l.icon?(i(),o("span",{key:1,class:n.getPanelIcon(l)},null,2)):m("",!0),c("span",Ae,x(n.label(l)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),c(T,{name:"p-toggleable-content"},{default:k(()=>[z(c("div",{class:"p-toggleable-content",role:"region",id:n.ariaId+"_content_"+g,"aria-labelledby":n.ariaId+"_header_"+g},[l.items?(i(),o("div",Te,[c(u,{model:l.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:n.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[U,n.isActive(l)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Ve(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Me=`
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
`;Ve(Me);J.render=Pe;const je=E({props:{modules:null},emits:["save","navigate"],setup(e,{emit:t}){const r=D((n=>[{label:"Startseite",to:"/mitra-frontend/"},{label:"Module",items:n.map((d,u)=>({label:`${u+1}. ${d.text}`,command:()=>t("navigate",d.steps[0])}))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return(n,d)=>(i(),o(f(J),{model:r.value,class:"w-70"},null,8,["model"]))}});var Ne=F(je,[["__scopeId","data-v-786c2522"]]),Q={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&N.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&N.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&h.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&N.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?h.addClass(document.body,"p-overflow-hidden"):h.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&h.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&h.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=h.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let a=t.indexOf(document.activeElement);e.shiftKey?a==-1||a===0?t[t.length-1].focus():t[a-1].focus():a==-1||a===t.length-1?t[0].focus():t[a+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(a=>a===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){h.hasClass(e.target,"p-dialog-header-icon")||h.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",h.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=h.getOuterWidth(this.container),a=h.getOuterHeight(this.container),s=e.pageX-this.lastPageX,r=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),d=n.left+s,u=n.top+r,l=h.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<l.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),u>=this.minY&&u+a<l.height&&(this.lastPageY=e.pageY,this.container.style.top=u+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=u+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,h.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return j()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return j()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:de}};const Ye={class:"p-dialog-header-icons"},Fe=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Xe={key:1,class:"p-dialog-footer"};function He(e,t,a,s,r,n){const d=G("ripple");return i(),o(le,{to:n.appendTarget,disabled:n.appendDisabled},[r.containerVisible?(i(),o("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...u)=>n.onMaskClick&&n.onMaskClick(...u))},[c(T,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:k(()=>[a.visible?(i(),o("div",O({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":a.modal}),[a.showHeader?(i(),o("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...u)=>n.initDrag&&n.initDrag(...u))},[Y(e.$slots,"header",{},()=>[a.header?(i(),o("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},x(a.header),9,["id"])):m("",!0)]),c("div",Ye,[a.maximizable?z((i(),o("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...u)=>n.maximize&&n.maximize(...u)),type:"button",tabindex:"-1"},[c("span",{class:n.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),a.closable?z((i(),o("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...u)=>n.close&&n.close(...u)),"aria-label":a.ariaCloseLabel,type:"button",tabindex:"-1"},[Fe],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),c("div",{class:n.contentStyleClass,style:a.contentStyle},[Y(e.$slots,"default")],6),a.footer||e.$slots.footer?(i(),o("div",Xe,[Y(e.$slots,"footer",{},()=>[ie(x(a.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function Re(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Ze=`
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
`;Re(Ze);Q.render=He;const Oe={class:"flex h-full"},Ue={class:"flex-none"},Ge={class:"flex-1 p-8"},qe=E({props:{id:null},setup(e){const t=e,a=q(),s=me(),r=pe(),n=t.id==="cloud-contract"?ce.fromPlaybook(ue().findById("db2a1d38-01fb-4ea2-bc6f-b5213413c809")):r.findById(t.id);a.$state.addContracts(n);const d=n.title||"Unbenannter Vertrag",u=D(d),l=D(d),g=D(!1),p=()=>{l.value=u.value,g.value=!0},b=()=>{g.value=!1,l.value!==d&&(u.value=l.value,n.title=l.value)},w=C=>{const I=C.target;I==null||I.select()},_=()=>{s.save(n)},L=C=>{console.log(C),a.$state.setCurrentStep(n,C)};return se(()=>{n.title||p()}),(C,I)=>{const $=G("focus");return i(),S("div",Oe,[v("nav",Ue,[c(Ne,{modules:f(n).modules,onSave:_,onNavigate:L},null,8,["modules"])]),v("main",Ge,[c(f(Q),{id:"dialog-contract-title",visible:g.value,"onUpdate:visible":I[1]||(I[1]=V=>g.value=V),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:k(()=>[c(f(P),{label:"OK",icon:"pi pi-check",onClick:b})]),default:k(()=>[z(c(f(X),{id:"input-contract-title",modelValue:l.value,"onUpdate:modelValue":I[0]||(I[0]=V=>l.value=V),title:"Titel des Vertrags",type:"text",onFocus:w,onKeyup:oe(b,["enter"])},null,8,["modelValue","onKeyup"]),[[$]])]),_:1},8,["visible"]),v("header",null,[c(f(P),{class:"p-button-link",onClick:p},{default:k(()=>[v("span",null,x(u.value),1)]),_:1})]),c(T,{name:"fade",mode:"out-in"},{default:k(()=>[c(we,{contract:f(n)},null,8,["contract"])]),_:1})]),c(Ie,{contract:f(n),class:"flex-1 bg-slate-100"},null,8,["contract"])])}}});var We=F(qe,[["__scopeId","data-v-0a856565"]]);const tt=E({props:{id:null},setup(e){return(t,a)=>(i(),o(We,{id:e.id},null,8,["id"]))}});export{tt as default};
