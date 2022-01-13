var le=Object.defineProperty,ae=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var N=(e,t,i)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Z=(e,t)=>{for(var i in t||(t={}))oe.call(t,i)&&N(e,i,t[i]);if(K)for(var i of K(t))re.call(t,i)&&N(e,i,t[i]);return e},Y=(e,t)=>ae(e,se(t));import{Z as E,D as f,U as X,q as P,o as a,c,h as u,w as L,z as B,f as T,s as D,g,T as j,A as F,t as v,l as U,B as de,O as ce,i as _,p as w,j as x,k as b,F as y,y as z,u as h,C as A,E as G,G as ue,H as pe,r as q,I as me,x as he}from"./vendor.f7297514.js";import{R as W,s as O}from"./button.esm.46268e8a.js";import{T as fe,S as ge,a as be,b as ve}from"./provide.5713e387.js";import{a as J}from"./index.9e52adb8.js";var Q={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&E.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&E.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&f.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&E.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?f.addClass(document.body,"p-overflow-hidden"):f.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&f.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&f.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=f.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let i=t.indexOf(document.activeElement);e.shiftKey?i==-1||i===0?t[t.length-1].focus():t[i-1].focus():i==-1||i===t.length-1?t[0].focus():t[i+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){f.hasClass(e.target,"p-dialog-header-icon")||f.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",f.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=f.getOuterWidth(this.container),i=f.getOuterHeight(this.container),s=e.pageX-this.lastPageX,r=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),o=n.left+s,l=n.top+r,d=f.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+t<d.width&&(this.lastPageX=e.pageX,this.container.style.left=o+"px"),l>=this.minY&&l+i<d.height&&(this.lastPageY=e.pageY,this.container.style.top=l+"px")):(this.lastPageX=e.pageX,this.container.style.left=o+"px",this.lastPageY=e.pageY,this.container.style.top=l+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,f.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return X()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return X()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:W}};const xe={class:"p-dialog-header-icons"},ye=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),ke={key:1,class:"p-dialog-footer"};function we(e,t,i,s,r,n){const o=P("ripple");return a(),c(F,{to:n.appendTarget,disabled:n.appendDisabled},[r.containerVisible?(a(),c("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...l)=>n.onMaskClick&&n.onMaskClick(...l))},[u(j,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:L(()=>[i.visible?(a(),c("div",B({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":i.modal}),[i.showHeader?(a(),c("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...l)=>n.initDrag&&n.initDrag(...l))},[T(e.$slots,"header",{},()=>[i.header?(a(),c("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},v(i.header),9,["id"])):g("",!0)]),u("div",xe,[i.maximizable?D((a(),c("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...l)=>n.maximize&&n.maximize(...l)),type:"button",tabindex:"-1"},[u("span",{class:n.maximizeIconClass},null,2)],512)),[[o]]):g("",!0),i.closable?D((a(),c("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...l)=>n.close&&n.close(...l)),"aria-label":i.ariaCloseLabel,type:"button",tabindex:"-1"},[ye],8,["aria-label"])),[[o]]):g("",!0)])],32)):g("",!0),u("div",{class:n.contentStyleClass,style:i.contentStyle},[T(e.$slots,"default")],6),i.footer||e.$slots.footer?(a(),c("div",ke,[T(e.$slots,"footer",{},()=>[U(v(i.footer),1)])])):g("",!0)],16,["aria-labelledby","aria-modal"])):g("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):g("",!0)],8,["to","disabled"])}function Ce(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Le=`
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
`;Ce(Le);Q.render=we;var R={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function _e(e,t,i,s,r,n){return a(),c("input",B({class:["p-inputtext p-component",{"p-filled":n.filled}],value:i.modelValue,onInput:t[1]||(t[1]=(...o)=>n.onInput&&n.onInput(...o))},e.$attrs),null,16,["value"])}R.render=_e;const H=de("session",{state:()=>({cache:new Map}),actions:{rememberCurrentStep(e,t){this.cache.set(e,t)}}});var $={name:"RadioButton",inheritAttrs:!1,emits:["click","update:modelValue","change"],props:{value:null,modelValue:null,class:null,style:null},data(){return{focused:!1}},methods:{onClick(e){this.$attrs.disabled||(this.$emit("click",e),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",e))},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{checked(){return this.modelValue!=null&&ce.equals(this.modelValue,this.value)},containerClass(){return["p-radiobutton p-component",this.class,{"p-radiobutton-checked":this.checked,"p-radiobutton-disabled":this.$attrs.disabled,"p-radiobutton-focused":this.focused}]}}};const Se={class:"p-hidden-accessible"},Ee=u("div",{class:"p-radiobutton-icon"},null,-1);function De(e,t,i,s,r,n){return a(),c("div",{class:n.containerClass,onClick:t[3]||(t[3]=o=>n.onClick(o)),style:i.style},[u("div",Se,[u("input",B({ref:"input",type:"radio",checked:n.checked,value:i.value},e.$attrs,{onFocus:t[1]||(t[1]=(...o)=>n.onFocus&&n.onFocus(...o)),onBlur:t[2]||(t[2]=(...o)=>n.onBlur&&n.onBlur(...o))}),null,16,["checked","value"])]),u("div",{ref:"box",class:["p-radiobutton-box",{"p-highlight":n.checked,"p-disabled":e.$attrs.disabled,"p-focus":r.focused}],role:"radio","aria-checked":n.checked},[Ee],10,["aria-checked"])],6)}$.render=De;const ze={class:"mb-4"},Ie={class:"mb-4"},Ve=["for"],Be=_({props:{step:null},setup(e){const t=e,i=w(t.step.answer.value),s=t.step.choices.map(n=>n.text),r=()=>t.step.answer.setValue(i.value);return(n,o)=>(a(),x(y,null,[b("div",ze,v(e.step.text),1),b("ul",Ie,[(a(!0),x(y,null,z(h(s),(l,d)=>(a(),x("li",{key:d,class:"p-field-radiobutton flex flex-row items-center pt-1 pb-1"},[u(h($),{id:`choice-${d}`,modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=p=>i.value=p),name:"choice",value:d,onChange:r},null,8,["id","modelValue","value"]),b("label",{class:"pl-2",for:`choice-${d}`},v(l),9,Ve)]))),128))])],64))}}),Te={class:"mb-4"},Ae={class:"mb-4"},Oe=_({props:{step:null},setup(e){const t=e,i=w(t.step.answer.toString()),s=()=>t.step.answer.setValue(i.value);return(r,n)=>(a(),x(y,null,[b("div",Te,v(e.step.text),1),b("div",Ae,[u(h(R),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=o=>i.value=o),title:e.step.text,class:"w-full",type:"text",onInput:s},null,8,["modelValue","title"])])],64))}});const Me={class:"font-bold"},Pe={class:"grid grid-cols-3 col-span-full"},je=_({props:{contract:null},setup(e){const t=e,i=H(),s=w(i.cache.get(t.contract));i.$subscribe((m,C)=>{s.value=C.cache.get(t.contract)});const r=A(()=>{const m=s.value;return m.type===fe.TYPE?Oe:m.type===ge.TYPE?Be:null}),n=A(()=>t.contract.previousStepInPathAt(s.value)!==void 0),o=A(()=>t.contract.nextStepInPathAt(s.value)!==void 0),l=A(()=>t.contract.getModuleFor(s.value)),d=()=>{const m=t.contract.previousStepInPathAt(s.value);m&&(s.value=m,i.rememberCurrentStep(t.contract,m))},p=()=>{const m=t.contract.nextStepInPathAt(s.value);m&&(s.value=m,i.rememberCurrentStep(t.contract,m))};return(m,C)=>{var S,I;return a(),x("section",{key:(S=s.value)==null?void 0:S.id},[b("h3",Me,v((I=h(l))==null?void 0:I.text),1),(a(),c(G(h(r)),{step:s.value},null,8,["step"])),b("div",Pe,[h(n)?(a(),c(h(O),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:d})):g("",!0),h(o)?(a(),c(h(O),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:p})):g("",!0)])])}}});var Re=J(je,[["__scopeId","data-v-e8cd6374"]]);const He=b("h3",{class:"p-2 font-bold bg-white"},"Vorschau Vertragstext",-1),Ke={class:"font-bold"},Ne=_({props:{contract:null},setup(e){const i=w(e.contract.modules);return(s,r)=>(a(),x("section",null,[He,(a(!0),x(y,null,z(i.value,n=>(a(),x("article",{key:n.id,class:"p-2"},[b("h4",Ke,v(n.text),1),(a(!0),x(y,null,z(n.path,o=>(a(),x("div",{key:o.id,class:"mt-2"},v(o.print()),1))),128))]))),128))]))}});var Ze=ue(),ee={name:"Menuitem",inheritAttrs:!1,emits:["click"],props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.$emit("click",{originalEvent:e,item:this.item,navigate:t})},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{containerClass(){return["p-menuitem",this.item.class]}},directives:{ripple:W}};const Ye={class:"p-menuitem-text"},Xe={class:"p-menuitem-text"};function Fe(e,t,i,s,r,n){const o=q("router-link"),l=P("ripple");return n.visible()?(a(),c("li",{key:0,class:n.containerClass,role:"none",style:i.item.style},[i.template?(a(),c(G(i.template),{key:1,item:i.item},null,8,["item"])):(a(),c(y,{key:0},[i.item.to&&!n.disabled(i.item)?(a(),c(o,{key:0,to:i.item.to,custom:""},{default:L(({navigate:d,href:p,isActive:m,isExactActive:C})=>[D(u("a",{href:p,onClick:S=>n.onClick(S,d),class:n.linkClass(i.item,{isActive:m,isExactActive:C}),role:"menuitem"},[u("span",{class:["p-menuitem-icon",i.item.icon]},null,2),u("span",Ye,v(n.label()),1)],10,["href","onClick"]),[[l]])]),_:1},8,["to"])):D((a(),c("a",{key:1,href:i.item.url,class:n.linkClass(i.item),onClick:t[1]||(t[1]=(...d)=>n.onClick&&n.onClick(...d)),target:i.item.target,role:"menuitem",tabindex:n.disabled(i.item)?null:"0"},[u("span",{class:["p-menuitem-icon",i.item.icon]},null,2),u("span",Xe,v(n.label()),1)],10,["href","target","tabindex"])),[[l]])],64))],6)):g("",!0)}ee.render=Fe;var te={name:"Menu",emits:["show","hide"],inheritAttrs:!1,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0}},data(){return{overlayVisible:!1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&E.clear(this.container),this.container=null},methods:{itemClick(e){const t=e.item;t.disabled||(t.command&&t.command(e),t.to&&e.navigate&&e.navigate(e.originalEvent),this.hide())},toggle(e){this.overlayVisible?this.hide():this.show(e)},show(e){this.overlayVisible=!0,this.target=e.currentTarget},hide(){this.overlayVisible=!1,this.target=null},onEnter(e){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&E.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&E.clear(e)},alignOverlay(){f.absolutePosition(this.container,this.target),this.container.style.minWidth=f.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new pe(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(){return this.target&&(this.target===event.target||this.target.contains(event.target))},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},label(e){return typeof e.label=="function"?e.label():e.label},containerRef(e){this.container=e},onOverlayClick(e){Ze.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-menu p-component",{"p-menu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{Menuitem:ee}};const Ue={class:"p-menu-list p-reset",role:"menu"},Ge={key:0,class:"p-submenu-header"};function qe(e,t,i,s,r,n){const o=q("Menuitem");return a(),c(F,{to:i.appendTo,disabled:!i.popup},[u(j,{name:"p-connected-overlay",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},{default:L(()=>[(i.popup?r.overlayVisible:!0)?(a(),c("div",B({key:0,ref:n.containerRef,class:n.containerClass},e.$attrs,{onClick:t[1]||(t[1]=(...l)=>n.onOverlayClick&&n.onOverlayClick(...l))}),[u("ul",Ue,[(a(!0),c(y,null,z(i.model,(l,d)=>(a(),c(y,{key:n.label(l)+d.toString()},[l.items&&n.visible(l)&&!l.separator?(a(),c(y,{key:0},[l.items?(a(),c("li",Ge,[T(e.$slots,"item",{item:l},()=>[U(v(n.label(l)),1)])])):g("",!0),(a(!0),c(y,null,z(l.items,(p,m)=>(a(),c(y,{key:p.label+d+m},[n.visible(p)&&!p.separator?(a(),c(o,{key:0,item:p,onClick:n.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"])):n.visible(p)&&p.separator?(a(),c("li",{class:["p-menu-separator",p.class],style:p.style,key:"separator"+d+m,role:"separator"},null,6)):g("",!0)],64))),128))],64)):n.visible(l)&&l.separator?(a(),c("li",{class:["p-menu-separator",l.class],style:l.style,key:"separator"+d.toString(),role:"separator"},null,6)):(a(),c(o,{key:n.label(l)+d.toString(),item:l,onClick:n.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"]))],64))),128))])],16)):g("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"])}function We(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Je=`
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
`;We(Je);te.render=qe;const Qe=_({props:{contract:null},emits:["save","navigate"],setup(e,{emit:t}){const i=e,s=H(),r=(l,d)=>d.path.find(p=>p.equals(s.cache.get(i.contract)))?Y(Z({},l),{class:"font-bold"}):l,n=l=>[{label:"Startseite",icon:"pi pi-angle-left",to:"/mitra-frontend/"},{label:"Module",items:l.map((d,p)=>r({label:`${p+1}. ${d.text}`,command:()=>t("navigate",d.path[0])},d))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}];s.$subscribe(()=>{o.value=n(i.contract.modules)});const o=w(n(i.contract.modules));return(l,d)=>(a(),c(h(te),{model:o.value,class:"w-70"},null,8,["model"]))}});const $e={class:"flex h-full"},et={class:"flex-none"},tt={class:"flex-1 p-8"},nt=_({props:{id:null},setup(e){const t=e,i=H(),s=ve(),n=be().findById(t.id);i.rememberCurrentStep(n,n.path[0]);const o=n.title||"Unbenannter Vertrag",l=w(o),d=w(o),p=w(!1),m=()=>{d.value=l.value,p.value=!0},C=()=>{p.value=!1,d.value!==o&&(l.value=d.value,n.title=d.value)},S=V=>{const k=V.target;k==null||k.select()},I=()=>{s.save(n)},ne=V=>{i.rememberCurrentStep(n,V)};return me(()=>{n.title||m()}),(V,k)=>{const ie=P("focus");return a(),x("div",$e,[b("nav",et,[u(Qe,{contract:h(n),onSave:I,onNavigate:ne},null,8,["contract"])]),b("main",tt,[u(h(Q),{id:"dialog-contract-title",visible:p.value,"onUpdate:visible":k[1]||(k[1]=M=>p.value=M),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:L(()=>[u(h(O),{label:"OK",icon:"pi pi-check",onClick:C})]),default:L(()=>[D(u(h(R),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":k[0]||(k[0]=M=>d.value=M),title:"Titel des Vertrags",type:"text",onFocus:S,onKeyup:he(C,["enter"])},null,8,["modelValue","onKeyup"]),[[ie]])]),_:1},8,["visible"]),b("header",null,[u(h(O),{class:"p-button-link",onClick:m},{default:L(()=>[b("span",null,v(l.value),1)]),_:1})]),u(j,{name:"fade",mode:"out-in"},{default:L(()=>[u(Re,{contract:h(n)},null,8,["contract"])]),_:1})]),u(Ne,{contract:h(n),class:"flex-1 bg-slate-100"},null,8,["contract"])])}}});var it=J(nt,[["__scopeId","data-v-37204ba7"]]);const dt=_({props:{id:null},setup(e){return(t,i)=>(a(),c(it,{id:e.id},null,8,["id"]))}});export{dt as default};
