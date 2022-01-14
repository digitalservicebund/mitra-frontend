var se=Object.defineProperty,oe=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var N=(e,t,i)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Y=(e,t)=>{for(var i in t||(t={}))de.call(t,i)&&N(e,i,t[i]);if(F)for(var i of F(t))ce.call(t,i)&&N(e,i,t[i]);return e},Z=(e,t)=>oe(e,re(t));import{Z as E,D as g,U,q as P,o as a,c,h as u,w as _,z as D,f as T,s as z,g as x,T as j,A as X,t as b,l as $,B as ue,O as R,i as C,p as k,j as v,k as f,F as y,y as V,u as h,C as A,E as q,G as pe,H as me,r as G,I as he,x as fe}from"./vendor.f7297514.js";import{R as W,s as M}from"./button.esm.46268e8a.js";import{T as ge,S as be,M as ve,a as xe,b as ye}from"./provide.b08d122b.js";import{a as J}from"./index.d817a11c.js";var Q={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&E.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&E.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&g.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&E.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?g.addClass(document.body,"p-overflow-hidden"):g.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&g.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&g.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=g.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let i=t.indexOf(document.activeElement);e.shiftKey?i==-1||i===0?t[t.length-1].focus():t[i-1].focus():i==-1||i===t.length-1?t[0].focus():t[i+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){g.hasClass(e.target,"p-dialog-header-icon")||g.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",g.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=g.getOuterWidth(this.container),i=g.getOuterHeight(this.container),o=e.pageX-this.lastPageX,r=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),s=n.left+o,l=n.top+r,d=g.getViewport();this.container.style.position="fixed",this.keepInViewport?(s>=this.minX&&s+t<d.width&&(this.lastPageX=e.pageX,this.container.style.left=s+"px"),l>=this.minY&&l+i<d.height&&(this.lastPageY=e.pageY,this.container.style.top=l+"px")):(this.lastPageX=e.pageX,this.container.style.left=s+"px",this.lastPageY=e.pageY,this.container.style.top=l+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,g.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return U()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return U()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:W}};const ke={class:"p-dialog-header-icons"},we=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Ce={key:1,class:"p-dialog-footer"};function Le(e,t,i,o,r,n){const s=P("ripple");return a(),c(X,{to:n.appendTarget,disabled:n.appendDisabled},[r.containerVisible?(a(),c("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...l)=>n.onMaskClick&&n.onMaskClick(...l))},[u(j,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:_(()=>[i.visible?(a(),c("div",D({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":i.modal}),[i.showHeader?(a(),c("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...l)=>n.initDrag&&n.initDrag(...l))},[T(e.$slots,"header",{},()=>[i.header?(a(),c("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},b(i.header),9,["id"])):x("",!0)]),u("div",ke,[i.maximizable?z((a(),c("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...l)=>n.maximize&&n.maximize(...l)),type:"button",tabindex:"-1"},[u("span",{class:n.maximizeIconClass},null,2)],512)),[[s]]):x("",!0),i.closable?z((a(),c("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...l)=>n.close&&n.close(...l)),"aria-label":i.ariaCloseLabel,type:"button",tabindex:"-1"},[we],8,["aria-label"])),[[s]]):x("",!0)])],32)):x("",!0),u("div",{class:n.contentStyleClass,style:i.contentStyle},[T(e.$slots,"default")],6),i.footer||e.$slots.footer?(a(),c("div",Ce,[T(e.$slots,"footer",{},()=>[$(b(i.footer),1)])])):x("",!0)],16,["aria-labelledby","aria-modal"])):x("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):x("",!0)],8,["to","disabled"])}function _e(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Se=`
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
`;_e(Se);Q.render=Le;var H={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Ee(e,t,i,o,r,n){return a(),c("input",D({class:["p-inputtext p-component",{"p-filled":n.filled}],value:i.modelValue,onInput:t[1]||(t[1]=(...s)=>n.onInput&&n.onInput(...s))},e.$attrs),null,16,["value"])}H.render=Ee;const K=ue("session",{state:()=>({cache:new Map}),actions:{rememberCurrentStep(e,t){this.cache.set(e,t)}}});var ee={name:"Checkbox",inheritAttrs:!1,emits:["click","update:modelValue","change","input"],props:{value:null,modelValue:null,binary:Boolean,class:null,style:null,trueValue:{type:null,default:!0},falseValue:{type:null,default:!1}},data(){return{focused:!1}},methods:{onClick(e){if(!this.$attrs.disabled){let t;this.binary?t=this.checked?this.falseValue:this.trueValue:this.checked?t=this.modelValue.filter(i=>!R.equals(i,this.value)):t=this.modelValue?[...this.modelValue,this.value]:[this.value],this.$emit("click",e),this.$emit("update:modelValue",t),this.$emit("change",e),this.$emit("input",t),this.$refs.input.focus()}},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{checked(){return this.binary?this.modelValue===this.trueValue:R.contains(this.value,this.modelValue)},containerClass(){return["p-checkbox p-component",this.class,{"p-checkbox-checked":this.checked,"p-checkbox-disabled":this.$attrs.disabled,"p-checkbox-focused":this.focused}]}}};const Ve={class:"p-hidden-accessible"};function De(e,t,i,o,r,n){return a(),c("div",{class:n.containerClass,onClick:t[3]||(t[3]=s=>n.onClick(s)),style:i.style},[u("div",Ve,[u("input",D({ref:"input",type:"checkbox",checked:n.checked,value:i.value},e.$attrs,{onFocus:t[1]||(t[1]=(...s)=>n.onFocus&&n.onFocus(...s)),onBlur:t[2]||(t[2]=(...s)=>n.onBlur&&n.onBlur(...s))}),null,16,["checked","value"])]),u("div",{ref:"box",class:["p-checkbox-box",{"p-highlight":n.checked,"p-disabled":e.$attrs.disabled,"p-focus":r.focused}],role:"checkbox","aria-checked":n.checked},[u("span",{class:["p-checkbox-icon",{"pi pi-check":n.checked}]},null,2)],10,["aria-checked"])],6)}ee.render=De;const ze={class:"mb-4"},Be={class:"mb-4"},Ie=["for"],Te=C({props:{step:null},setup(e){const t=e,i=k(t.step.answer.value),o=t.step.choices.map(n=>n.text),r=()=>t.step.answer.setValue(i.value);return(n,s)=>(a(),v(y,null,[f("div",ze,b(e.step.text),1),f("ul",Be,[(a(!0),v(y,null,V(h(o),(l,d)=>(a(),v("li",{key:d,class:"p-field-checkbox flex flex-row items-center pt-1 pb-1"},[u(h(ee),{id:`choice-${d}`,modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=p=>i.value=p),name:"choice",value:d,onChange:r},null,8,["id","modelValue","value"]),f("label",{class:"pl-2",for:`choice-${d}`},b(l),9,Ie)]))),128))])],64))}});var te={name:"RadioButton",inheritAttrs:!1,emits:["click","update:modelValue","change"],props:{value:null,modelValue:null,class:null,style:null},data(){return{focused:!1}},methods:{onClick(e){this.$attrs.disabled||(this.$emit("click",e),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",e))},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{checked(){return this.modelValue!=null&&R.equals(this.modelValue,this.value)},containerClass(){return["p-radiobutton p-component",this.class,{"p-radiobutton-checked":this.checked,"p-radiobutton-disabled":this.$attrs.disabled,"p-radiobutton-focused":this.focused}]}}};const Ae={class:"p-hidden-accessible"},Me=u("div",{class:"p-radiobutton-icon"},null,-1);function Oe(e,t,i,o,r,n){return a(),c("div",{class:n.containerClass,onClick:t[3]||(t[3]=s=>n.onClick(s)),style:i.style},[u("div",Ae,[u("input",D({ref:"input",type:"radio",checked:n.checked,value:i.value},e.$attrs,{onFocus:t[1]||(t[1]=(...s)=>n.onFocus&&n.onFocus(...s)),onBlur:t[2]||(t[2]=(...s)=>n.onBlur&&n.onBlur(...s))}),null,16,["checked","value"])]),u("div",{ref:"box",class:["p-radiobutton-box",{"p-highlight":n.checked,"p-disabled":e.$attrs.disabled,"p-focus":r.focused}],role:"radio","aria-checked":n.checked},[Me],10,["aria-checked"])],6)}te.render=Oe;const Pe={class:"mb-4"},je={class:"mb-4"},Re=["for"],He=C({props:{step:null},setup(e){const t=e,i=k(t.step.answer.value),o=t.step.choices.map(n=>n.text),r=()=>t.step.answer.setValue(i.value);return(n,s)=>(a(),v(y,null,[f("div",Pe,b(e.step.text),1),f("ul",je,[(a(!0),v(y,null,V(h(o),(l,d)=>(a(),v("li",{key:d,class:"p-field-radiobutton flex flex-row items-center pt-1 pb-1"},[u(h(te),{id:`choice-${d}`,modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=p=>i.value=p),name:"choice",value:d,onChange:r},null,8,["id","modelValue","value"]),f("label",{class:"pl-2",for:`choice-${d}`},b(l),9,Re)]))),128))])],64))}}),Ke={class:"mb-4"},Fe={class:"mb-4"},Ne=C({props:{step:null},setup(e){const t=e,i=k(t.step.answer.toString()),o=()=>t.step.answer.setValue(i.value);return(r,n)=>(a(),v(y,null,[f("div",Ke,b(e.step.text),1),f("div",Fe,[u(h(H),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s),title:e.step.text,class:"w-full",type:"text",onInput:o},null,8,["modelValue","title"])])],64))}});const Ye={class:"font-bold"},Ze={class:"grid grid-cols-3 col-span-full"},Ue=C({props:{contract:null},setup(e){const t=e,i=K(),o=k(i.cache.get(t.contract));i.$subscribe((m,L)=>{o.value=L.cache.get(t.contract)});const r=A(()=>{const m=o.value;return m.type===ge.TYPE?Ne:m.type===be.TYPE?He:m.type===ve.TYPE?Te:null}),n=A(()=>t.contract.previousStepInPathAt(o.value)!==void 0),s=A(()=>t.contract.nextStepInPathAt(o.value)!==void 0),l=A(()=>t.contract.getModuleFor(o.value)),d=()=>{const m=t.contract.previousStepInPathAt(o.value);m&&(o.value=m,i.rememberCurrentStep(t.contract,m))},p=()=>{const m=t.contract.nextStepInPathAt(o.value);m&&(o.value=m,i.rememberCurrentStep(t.contract,m))};return(m,L)=>{var S,B;return a(),v("section",{key:(S=o.value)==null?void 0:S.id},[f("h3",Ye,b((B=h(l))==null?void 0:B.text),1),(a(),c(q(h(r)),{step:o.value},null,8,["step"])),f("div",Ze,[h(n)?(a(),c(h(M),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:d})):x("",!0),h(s)?(a(),c(h(M),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:p})):x("",!0)])])}}});var Xe=J(Ue,[["__scopeId","data-v-38990b2e"]]);const $e=f("h3",{class:"p-2 font-bold bg-white"},"Vorschau Vertragstext",-1),qe={class:"font-bold"},Ge=C({props:{contract:null},setup(e){const i=k(e.contract.modules);return(o,r)=>(a(),v("section",null,[$e,(a(!0),v(y,null,V(i.value,n=>(a(),v("article",{key:n.id,class:"p-2"},[f("h4",qe,b(n.text),1),(a(!0),v(y,null,V(n.path,s=>(a(),v("div",{key:s.id,class:"mt-2"},b(s.print()),1))),128))]))),128))]))}});var We=pe(),ne={name:"Menuitem",inheritAttrs:!1,emits:["click"],props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.$emit("click",{originalEvent:e,item:this.item,navigate:t})},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{containerClass(){return["p-menuitem",this.item.class]}},directives:{ripple:W}};const Je={class:"p-menuitem-text"},Qe={class:"p-menuitem-text"};function et(e,t,i,o,r,n){const s=G("router-link"),l=P("ripple");return n.visible()?(a(),c("li",{key:0,class:n.containerClass,role:"none",style:i.item.style},[i.template?(a(),c(q(i.template),{key:1,item:i.item},null,8,["item"])):(a(),c(y,{key:0},[i.item.to&&!n.disabled(i.item)?(a(),c(s,{key:0,to:i.item.to,custom:""},{default:_(({navigate:d,href:p,isActive:m,isExactActive:L})=>[z(u("a",{href:p,onClick:S=>n.onClick(S,d),class:n.linkClass(i.item,{isActive:m,isExactActive:L}),role:"menuitem"},[u("span",{class:["p-menuitem-icon",i.item.icon]},null,2),u("span",Je,b(n.label()),1)],10,["href","onClick"]),[[l]])]),_:1},8,["to"])):z((a(),c("a",{key:1,href:i.item.url,class:n.linkClass(i.item),onClick:t[1]||(t[1]=(...d)=>n.onClick&&n.onClick(...d)),target:i.item.target,role:"menuitem",tabindex:n.disabled(i.item)?null:"0"},[u("span",{class:["p-menuitem-icon",i.item.icon]},null,2),u("span",Qe,b(n.label()),1)],10,["href","target","tabindex"])),[[l]])],64))],6)):x("",!0)}ne.render=et;var ie={name:"Menu",emits:["show","hide"],inheritAttrs:!1,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0}},data(){return{overlayVisible:!1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&E.clear(this.container),this.container=null},methods:{itemClick(e){const t=e.item;t.disabled||(t.command&&t.command(e),t.to&&e.navigate&&e.navigate(e.originalEvent),this.hide())},toggle(e){this.overlayVisible?this.hide():this.show(e)},show(e){this.overlayVisible=!0,this.target=e.currentTarget},hide(){this.overlayVisible=!1,this.target=null},onEnter(e){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&E.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&E.clear(e)},alignOverlay(){g.absolutePosition(this.container,this.target),this.container.style.minWidth=g.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new me(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(){return this.target&&(this.target===event.target||this.target.contains(event.target))},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},label(e){return typeof e.label=="function"?e.label():e.label},containerRef(e){this.container=e},onOverlayClick(e){We.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-menu p-component",{"p-menu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{Menuitem:ne}};const tt={class:"p-menu-list p-reset",role:"menu"},nt={key:0,class:"p-submenu-header"};function it(e,t,i,o,r,n){const s=G("Menuitem");return a(),c(X,{to:i.appendTo,disabled:!i.popup},[u(j,{name:"p-connected-overlay",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},{default:_(()=>[(i.popup?r.overlayVisible:!0)?(a(),c("div",D({key:0,ref:n.containerRef,class:n.containerClass},e.$attrs,{onClick:t[1]||(t[1]=(...l)=>n.onOverlayClick&&n.onOverlayClick(...l))}),[u("ul",tt,[(a(!0),c(y,null,V(i.model,(l,d)=>(a(),c(y,{key:n.label(l)+d.toString()},[l.items&&n.visible(l)&&!l.separator?(a(),c(y,{key:0},[l.items?(a(),c("li",nt,[T(e.$slots,"item",{item:l},()=>[$(b(n.label(l)),1)])])):x("",!0),(a(!0),c(y,null,V(l.items,(p,m)=>(a(),c(y,{key:p.label+d+m},[n.visible(p)&&!p.separator?(a(),c(s,{key:0,item:p,onClick:n.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"])):n.visible(p)&&p.separator?(a(),c("li",{class:["p-menu-separator",p.class],style:p.style,key:"separator"+d+m,role:"separator"},null,6)):x("",!0)],64))),128))],64)):n.visible(l)&&l.separator?(a(),c("li",{class:["p-menu-separator",l.class],style:l.style,key:"separator"+d.toString(),role:"separator"},null,6)):(a(),c(s,{key:n.label(l)+d.toString(),item:l,onClick:n.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"]))],64))),128))])],16)):x("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"])}function lt(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var at=`
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
`;lt(at);ie.render=it;const st=C({props:{contract:null},emits:["save","navigate"],setup(e,{emit:t}){const i=e,o=K(),r=(l,d)=>d.path.find(p=>p.equals(o.cache.get(i.contract)))?Z(Y({},l),{class:"font-bold"}):l,n=l=>[{label:"Startseite",icon:"pi pi-angle-left",to:"/mitra-frontend/"},{label:"Module",items:l.map((d,p)=>r({label:`${p+1}. ${d.text}`,command:()=>t("navigate",d.path[0])},d))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}];o.$subscribe(()=>{s.value=n(i.contract.modules)});const s=k(n(i.contract.modules));return(l,d)=>(a(),c(h(ie),{model:s.value,class:"w-70"},null,8,["model"]))}});const ot={class:"flex h-full"},rt={class:"flex-none"},dt={class:"flex-1 p-8"},ct=C({props:{id:null},setup(e){const t=e,i=K(),o=ye(),n=xe().findById(t.id);i.rememberCurrentStep(n,n.path[0]);const s=n.title||"Unbenannter Vertrag",l=k(s),d=k(s),p=k(!1),m=()=>{d.value=l.value,p.value=!0},L=()=>{p.value=!1,d.value!==s&&(l.value=d.value,n.title=d.value)},S=I=>{const w=I.target;w==null||w.select()},B=()=>{o.save(n)},le=I=>{i.rememberCurrentStep(n,I)};return he(()=>{n.title||m()}),(I,w)=>{const ae=P("focus");return a(),v("div",ot,[f("nav",rt,[u(st,{contract:h(n),onSave:B,onNavigate:le},null,8,["contract"])]),f("main",dt,[u(h(Q),{id:"dialog-contract-title",visible:p.value,"onUpdate:visible":w[1]||(w[1]=O=>p.value=O),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:_(()=>[u(h(M),{label:"OK",icon:"pi pi-check",onClick:L})]),default:_(()=>[z(u(h(H),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=O=>d.value=O),title:"Titel des Vertrags",type:"text",onFocus:S,onKeyup:fe(L,["enter"])},null,8,["modelValue","onKeyup"]),[[ae]])]),_:1},8,["visible"]),f("header",null,[u(h(M),{class:"p-button-link",onClick:m},{default:_(()=>[f("span",null,b(l.value),1)]),_:1})]),u(j,{name:"fade",mode:"out-in"},{default:_(()=>[u(Xe,{contract:h(n)},null,8,["contract"])]),_:1})]),u(Ge,{contract:h(n),class:"flex-1 bg-slate-100"},null,8,["contract"])])}}});var ut=J(ct,[["__scopeId","data-v-37204ba7"]]);const bt=C({props:{id:null},setup(e){return(t,i)=>(a(),c(ut,{id:e.id},null,8,["id"]))}});export{bt as default};
