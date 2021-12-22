var ie=Object.defineProperty,ae=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var Z=(e,t,i)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Y=(e,t)=>{for(var i in t||(t={}))se.call(t,i)&&Z(e,i,t[i]);if(N)for(var i of N(t))oe.call(t,i)&&Z(e,i,t[i]);return e},X=(e,t)=>ae(e,le(t));import{Z as E,D as h,U as F,q as j,o as s,c as o,h as p,w as L,z as H,f as B,s as z,g as f,T as K,A as U,t as b,l as G,B as re,i as D,p as _,j as w,k as v,u as g,F as y,C as V,E as W,y as T,G as de,H as ce,r as q,I as ue,x as pe}from"./vendor.b76442b5.js";import{R as J,s as A}from"./button.esm.7f5aca94.js";import{T as me,a as he,b as ge}from"./provide.6dacb121.js";import{a as Q}from"./index.71a7a003.js";var $={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&E.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&E.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&h.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&E.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?h.addClass(document.body,"p-overflow-hidden"):h.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&h.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&h.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=h.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let i=t.indexOf(document.activeElement);e.shiftKey?i==-1||i===0?t[t.length-1].focus():t[i-1].focus():i==-1||i===t.length-1?t[0].focus():t[i+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){h.hasClass(e.target,"p-dialog-header-icon")||h.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",h.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=h.getOuterWidth(this.container),i=h.getOuterHeight(this.container),l=e.pageX-this.lastPageX,r=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),d=n.left+l,a=n.top+r,c=h.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<c.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),a>=this.minY&&a+i<c.height&&(this.lastPageY=e.pageY,this.container.style.top=a+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=a+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,h.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return F()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return F()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:J}};const fe={class:"p-dialog-header-icons"},be=p("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),ve={key:1,class:"p-dialog-footer"};function xe(e,t,i,l,r,n){const d=j("ripple");return s(),o(U,{to:n.appendTarget,disabled:n.appendDisabled},[r.containerVisible?(s(),o("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...a)=>n.onMaskClick&&n.onMaskClick(...a))},[p(K,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:L(()=>[i.visible?(s(),o("div",H({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":i.modal}),[i.showHeader?(s(),o("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...a)=>n.initDrag&&n.initDrag(...a))},[B(e.$slots,"header",{},()=>[i.header?(s(),o("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},b(i.header),9,["id"])):f("",!0)]),p("div",fe,[i.maximizable?z((s(),o("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...a)=>n.maximize&&n.maximize(...a)),type:"button",tabindex:"-1"},[p("span",{class:n.maximizeIconClass},null,2)],512)),[[d]]):f("",!0),i.closable?z((s(),o("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...a)=>n.close&&n.close(...a)),"aria-label":i.ariaCloseLabel,type:"button",tabindex:"-1"},[be],8,["aria-label"])),[[d]]):f("",!0)])],32)):f("",!0),p("div",{class:n.contentStyleClass,style:i.contentStyle},[B(e.$slots,"default")],6),i.footer||e.$slots.footer?(s(),o("div",ve,[B(e.$slots,"footer",{},()=>[G(b(i.footer),1)])])):f("",!0)],16,["aria-labelledby","aria-modal"])):f("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):f("",!0)],8,["to","disabled"])}function ye(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ke=`
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
`;ye(ke);$.render=xe;var P={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function we(e,t,i,l,r,n){return s(),o("input",H({class:["p-inputtext p-component",{"p-filled":n.filled}],value:i.modelValue,onInput:t[1]||(t[1]=(...d)=>n.onInput&&n.onInput(...d))},e.$attrs),null,16,["value"])}P.render=we;const R=re("session",{state:()=>({cache:new Map}),actions:{rememberCurrentStep(e,t){this.cache.set(e,t)}}}),Ce={class:"mb-4"},Le={class:"mb-4"},_e=D({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const l=_(e.step.answer.toString());return(r,n)=>(s(),w(y,null,[v("div",Ce,b(e.step.text),1),v("div",Le,[p(g(P),{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=d=>l.value=d),title:e.step.text,class:"w-full",type:"text",onInput:n[1]||(n[1]=d=>t("answerChanged",l.value))},null,8,["modelValue","title"])])],64))}});const Se={class:"font-bold"},Ee={class:"grid grid-cols-3 col-span-full"},De=D({props:{contract:null},setup(e){const t=e,i=R(),l=_(i.cache.get(t.contract));i.$subscribe((m,x)=>{l.value=x.cache.get(t.contract)});const r=V(()=>l.value.type===me.TYPE?_e:null),n=V(()=>t.contract.getPreviousStepFor(l.value)!==void 0),d=V(()=>t.contract.getNextStepFor(l.value)!==void 0),a=V(()=>t.contract.getModuleFor(l.value)),c=()=>{const m=t.contract.getPreviousStepFor(l.value);m&&(l.value=m,i.rememberCurrentStep(t.contract,m))},u=()=>{const m=t.contract.getNextStepFor(l.value);m&&(l.value=m,i.rememberCurrentStep(t.contract,m))};return(m,x)=>{var S,I;return s(),w("section",{key:(S=l.value)==null?void 0:S.id},[v("h3",Se,b((I=g(a))==null?void 0:I.text),1),(s(),o(W(g(r)),{step:l.value,onAnswerChanged:x[0]||(x[0]=M=>{var C;return(C=l.value)==null?void 0:C.setAnswer(M)})},null,8,["step"])),v("div",Ee,[g(n)?(s(),o(g(A),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:c})):f("",!0),g(d)?(s(),o(g(A),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:u})):f("",!0)])])}}});var ze=Q(De,[["__scopeId","data-v-79e7748d"]]);const Ie=v("h3",{class:"p-2 font-bold bg-white"},"Vorschau Vertragstext",-1),Be={class:"font-bold"},Ve=D({props:{contract:null},setup(e){const i=_(e.contract.modules);return(l,r)=>(s(),w("section",null,[Ie,(s(!0),w(y,null,T(i.value,n=>(s(),w("article",{key:n.id,class:"p-2"},[v("h4",Be,b(n.text),1),(s(!0),w(y,null,T(n.steps,d=>(s(),w("div",{key:d.id,class:"mt-2"},b(d.answer.toString()),1))),128))]))),128))]))}});var Te=de(),ee={name:"Menuitem",inheritAttrs:!1,emits:["click"],props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.$emit("click",{originalEvent:e,item:this.item,navigate:t})},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{containerClass(){return["p-menuitem",this.item.class]}},directives:{ripple:J}};const Ae={class:"p-menuitem-text"},Me={class:"p-menuitem-text"};function Oe(e,t,i,l,r,n){const d=q("router-link"),a=j("ripple");return n.visible()?(s(),o("li",{key:0,class:n.containerClass,role:"none",style:i.item.style},[i.template?(s(),o(W(i.template),{key:1,item:i.item},null,8,["item"])):(s(),o(y,{key:0},[i.item.to&&!n.disabled(i.item)?(s(),o(d,{key:0,to:i.item.to,custom:""},{default:L(({navigate:c,href:u,isActive:m,isExactActive:x})=>[z(p("a",{href:u,onClick:S=>n.onClick(S,c),class:n.linkClass(i.item,{isActive:m,isExactActive:x}),role:"menuitem"},[p("span",{class:["p-menuitem-icon",i.item.icon]},null,2),p("span",Ae,b(n.label()),1)],10,["href","onClick"]),[[a]])]),_:1},8,["to"])):z((s(),o("a",{key:1,href:i.item.url,class:n.linkClass(i.item),onClick:t[1]||(t[1]=(...c)=>n.onClick&&n.onClick(...c)),target:i.item.target,role:"menuitem",tabindex:n.disabled(i.item)?null:"0"},[p("span",{class:["p-menuitem-icon",i.item.icon]},null,2),p("span",Me,b(n.label()),1)],10,["href","target","tabindex"])),[[a]])],64))],6)):f("",!0)}ee.render=Oe;var te={name:"Menu",emits:["show","hide"],inheritAttrs:!1,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0}},data(){return{overlayVisible:!1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&E.clear(this.container),this.container=null},methods:{itemClick(e){const t=e.item;t.disabled||(t.command&&t.command(e),t.to&&e.navigate&&e.navigate(e.originalEvent),this.hide())},toggle(e){this.overlayVisible?this.hide():this.show(e)},show(e){this.overlayVisible=!0,this.target=e.currentTarget},hide(){this.overlayVisible=!1,this.target=null},onEnter(e){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&E.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&E.clear(e)},alignOverlay(){h.absolutePosition(this.container,this.target),this.container.style.minWidth=h.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ce(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(){return this.target&&(this.target===event.target||this.target.contains(event.target))},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},label(e){return typeof e.label=="function"?e.label():e.label},containerRef(e){this.container=e},onOverlayClick(e){Te.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-menu p-component",{"p-menu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{Menuitem:ee}};const je={class:"p-menu-list p-reset",role:"menu"},He={key:0,class:"p-submenu-header"};function Ke(e,t,i,l,r,n){const d=q("Menuitem");return s(),o(U,{to:i.appendTo,disabled:!i.popup},[p(K,{name:"p-connected-overlay",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},{default:L(()=>[(i.popup?r.overlayVisible:!0)?(s(),o("div",H({key:0,ref:n.containerRef,class:n.containerClass},e.$attrs,{onClick:t[1]||(t[1]=(...a)=>n.onOverlayClick&&n.onOverlayClick(...a))}),[p("ul",je,[(s(!0),o(y,null,T(i.model,(a,c)=>(s(),o(y,{key:n.label(a)+c.toString()},[a.items&&n.visible(a)&&!a.separator?(s(),o(y,{key:0},[a.items?(s(),o("li",He,[B(e.$slots,"item",{item:a},()=>[G(b(n.label(a)),1)])])):f("",!0),(s(!0),o(y,null,T(a.items,(u,m)=>(s(),o(y,{key:u.label+c+m},[n.visible(u)&&!u.separator?(s(),o(d,{key:0,item:u,onClick:n.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"])):n.visible(u)&&u.separator?(s(),o("li",{class:["p-menu-separator",u.class],style:u.style,key:"separator"+c+m,role:"separator"},null,6)):f("",!0)],64))),128))],64)):n.visible(a)&&a.separator?(s(),o("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+c.toString(),role:"separator"},null,6)):(s(),o(d,{key:n.label(a)+c.toString(),item:a,onClick:n.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"]))],64))),128))])],16)):f("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"])}function Pe(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Re=`
.p-menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menu .p-menuitem-link {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menu .p-menuitem-text {
    line-height: 1;
}
`;Pe(Re);te.render=Ke;const Ne=D({props:{contract:null},emits:["save","navigate"],setup(e,{emit:t}){const i=e,l=R(),r=(a,c)=>c.steps.find(u=>u.equals(l.cache.get(i.contract)))?X(Y({},a),{class:"font-bold"}):a,n=a=>[{label:"Startseite",icon:"pi pi-angle-left",to:"/mitra-frontend/"},{label:"Module",items:a.map((c,u)=>r({label:`${u+1}. ${c.text}`,command:()=>t("navigate",c.steps[0])},c))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}];l.$subscribe(()=>{d.value=n(i.contract.modules)});const d=_(n(i.contract.modules));return(a,c)=>(s(),o(g(te),{model:d.value,class:"w-70"},null,8,["model"]))}});const Ze={class:"flex h-full"},Ye={class:"flex-none"},Xe={class:"flex-1 p-8"},Fe=D({props:{id:null},setup(e){const t=e,i=R(),l=ge(),n=he().findById(t.id);i.rememberCurrentStep(n,n.getAllSteps()[0]);const d=n.title||"Unbenannter Vertrag",a=_(d),c=_(d),u=_(!1),m=()=>{c.value=a.value,u.value=!0},x=()=>{u.value=!1,c.value!==d&&(a.value=c.value,n.title=c.value)},S=C=>{const k=C.target;k==null||k.select()},I=()=>{l.save(n)},M=C=>{i.rememberCurrentStep(n,C)};return ue(()=>{n.title||m()}),(C,k)=>{const ne=j("focus");return s(),w("div",Ze,[v("nav",Ye,[p(Ne,{contract:g(n),onSave:I,onNavigate:M},null,8,["contract"])]),v("main",Xe,[p(g($),{id:"dialog-contract-title",visible:u.value,"onUpdate:visible":k[1]||(k[1]=O=>u.value=O),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:L(()=>[p(g(A),{label:"OK",icon:"pi pi-check",onClick:x})]),default:L(()=>[z(p(g(P),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":k[0]||(k[0]=O=>c.value=O),title:"Titel des Vertrags",type:"text",onFocus:S,onKeyup:pe(x,["enter"])},null,8,["modelValue","onKeyup"]),[[ne]])]),_:1},8,["visible"]),v("header",null,[p(g(A),{class:"p-button-link",onClick:m},{default:L(()=>[v("span",null,b(a.value),1)]),_:1})]),p(K,{name:"fade",mode:"out-in"},{default:L(()=>[p(ze,{contract:g(n)},null,8,["contract"])]),_:1})]),p(Ve,{contract:g(n),class:"flex-1 bg-slate-100"},null,8,["contract"])])}}});var Ue=Q(Fe,[["__scopeId","data-v-2f8a8a73"]]);const $e=D({props:{id:null},setup(e){return(t,i)=>(s(),o(Ue,{id:e.id},null,8,["id"]))}});export{$e as default};
