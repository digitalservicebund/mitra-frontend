import{e as L,o as s,f as h,g as b,t as g,F as y,h as S,D as a,i as z,w as D,c as p,j as v,k as m,l as c,Z as C,U as B,m as k,n as I,p as X,T as Y,q as M,s as T,u as N,v as x,x as O}from"./vendor.5e61ddfb.js";import{A as H}from"./AppHeader.851a0638.js";import"./index.f60d1b1e.js";const R=L({props:{title:null,playbook:null},setup(e){return(t,n)=>(s(),h(y,null,[b("h2",null,g(e.playbook.name),1),(s(!0),h(y,null,S(e.playbook.modules,o=>(s(),h("section",{key:o.text},[b("h3",null,[b("strong",null,g(o.text),1)]),(s(!0),h(y,null,S(o.steps,l=>(s(),h("div",{key:l.text},g(l.text),1))),128))]))),128))],64))}}),Z={id:"test-playbook",name:"Testvertrag",modules:[{text:"Rubrum",steps:[{text:"Schritt 1.1"},{text:"Schritt 1.2"},{text:"Schritt 1.3"}]},{text:"Gegenstand und Bestandteile des Vertrags",steps:[{text:"Schritt 2.1"},{text:"Schritt 2.2"},{text:"Schritt 2.3"}]},{text:"Gegenstand der Leistungen",steps:[{text:"Schritt 3.1"},{text:"Schritt 3.2"},{text:"Schritt 3.3"},{text:"Schritt 3.4"}]}]},G={findById:e=>(console.log(`Looking up Playbook with id ${e}`),Z)},U=()=>G;function F(e){e.addEventListener("mousedown",P)}function W(e){e.removeEventListener("mousedown",P)}function q(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",V)}function J(e){let t=_(e);t&&(W(e),t.removeEventListener("animationend",V),t.remove())}function P(e){let t=e.currentTarget,n=_(t);if(!n||getComputedStyle(n,null).display==="none")return;if(a.removeClass(n,"p-ink-active"),!a.getHeight(n)&&!a.getWidth(n)){let r=Math.max(a.getOuterWidth(t),a.getOuterHeight(t));n.style.height=r+"px",n.style.width=r+"px"}let o=a.getOffset(t),l=e.pageX-o.left+document.body.scrollTop-a.getWidth(n)/2,i=e.pageY-o.top+document.body.scrollLeft-a.getHeight(n)/2;n.style.top=i+"px",n.style.left=l+"px",a.addClass(n,"p-ink-active")}function V(e){a.removeClass(e.currentTarget,"p-ink-active")}function _(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const K={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(q(e),F(e))},unmounted(e){J(e)}};var E={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:K}};const Q={class:"p-button-label"};function $(e,t,n,o,l,i){const r=z("ripple");return D((s(),p("button",{class:i.buttonClass,type:"button",disabled:i.disabled},[v(e.$slots,"default",{},()=>[n.loading&&!n.icon?(s(),p("span",{key:0,class:i.iconClass},null,2)):m("",!0),n.icon?(s(),p("span",{key:1,class:i.iconClass},null,2)):m("",!0),c("span",Q,g(n.label||"\xA0"),1),n.badge?(s(),p("span",{key:2,class:i.badgeStyleClass},g(n.badge),3)):m("",!0)])],10,["disabled"])),[[r]])}E.render=$;var j={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&C.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&C.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&a.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&C.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?a.addClass(document.body,"p-overflow-hidden"):a.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&a.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&a.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=a.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){a.hasClass(e.target,"p-dialog-header-icon")||a.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",a.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=a.getOuterWidth(this.container),n=a.getOuterHeight(this.container),o=e.pageX-this.lastPageX,l=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),r=i.left+o,d=i.top+l,f=a.getViewport();this.container.style.position="fixed",this.keepInViewport?(r>=this.minX&&r+t<f.width&&(this.lastPageX=e.pageX,this.container.style.left=r+"px"),d>=this.minY&&d+n<f.height&&(this.lastPageY=e.pageY,this.container.style.top=d+"px")):(this.lastPageX=e.pageX,this.container.style.left=r+"px",this.lastPageY=e.pageY,this.container.style.top=d+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,a.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return B()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return B()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:K}};const ee={class:"p-dialog-header-icons"},te=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),ne={key:1,class:"p-dialog-footer"};function ie(e,t,n,o,l,i){const r=z("ripple");return s(),p(M,{to:i.appendTarget,disabled:i.appendDisabled},[l.containerVisible?(s(),p("div",{key:0,ref:i.maskRef,class:i.maskClass,onClick:t[4]||(t[4]=(...d)=>i.onMaskClick&&i.onMaskClick(...d))},[c(Y,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:k(()=>[n.visible?(s(),p("div",I({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(s(),p("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...d)=>i.initDrag&&i.initDrag(...d))},[v(e.$slots,"header",{},()=>[n.header?(s(),p("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},g(n.header),9,["id"])):m("",!0)]),c("div",ee,[n.maximizable?D((s(),p("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...d)=>i.maximize&&i.maximize(...d)),type:"button",tabindex:"-1"},[c("span",{class:i.maximizeIconClass},null,2)],512)),[[r]]):m("",!0),n.closable?D((s(),p("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...d)=>i.close&&i.close(...d)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[te],8,["aria-label"])),[[r]]):m("",!0)])],32)):m("",!0),c("div",{class:i.contentStyleClass,style:n.contentStyle},[v(e.$slots,"default")],6),n.footer||e.$slots.footer?(s(),p("div",ne,[v(e.$slots,"footer",{},()=>[X(g(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function ae(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var le=`
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
`;ae(le);j.render=ie;var A={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function oe(e,t,n,o,l,i){return s(),p("input",I({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...r)=>i.onInput&&i.onInput(...r))},e.$attrs),null,16,["value"])}A.render=oe;const se=L({setup(e){const t=T("Unbenannter Vertrag"),n=T(!1),o=()=>{n.value=!0},l=()=>{n.value=!1},i=f=>{const u=f.target;u==null||u.select()};N(()=>o());const d=U().findById("test-playbook");return(f,u)=>(s(),h(y,null,[c(H),c(x(j),{id:"dialog-contract-title",visible:n.value,"onUpdate:visible":u[1]||(u[1]=w=>n.value=w),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:k(()=>[c(x(E),{label:"OK",icon:"pi pi-check",onClick:l})]),default:k(()=>[c(x(A),{id:"input-contract-title",modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=w=>t.value=w),title:"Titel des Vertrags",type:"text",onFocus:i,onKeyup:O(l,["enter"])},null,8,["modelValue","onKeyup"])]),_:1},8,["visible"]),b("section",null,[c(x(E),{class:"p-button-link",onClick:o},{default:k(()=>[b("span",null,g(t.value),1)]),_:1})]),c(R,{title:t.value,playbook:x(d)},null,8,["title","playbook"])],64))}}),ce=L({setup(e){return(t,n)=>(s(),p(se))}});export{ce as default};
