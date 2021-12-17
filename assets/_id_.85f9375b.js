import{y as $,o as l,c as r,z as P,i as E,m as L,j as C,k as b,t as v,h as u,u as g,F as y,A as B,B as H,g as f,x as V,C as ee,Z as D,D as h,E as te,r as N,p as K,w as _,q as z,f as T,l as Z,T as R,G as Y,U as X,H as ne,s as ie}from"./vendor.47c007f9.js";import{T as ae,s as A,R as F,C as le,c as se,a as oe,m as re}from"./provide.ca98519e.js";import{_ as U}from"./index.42c28a6d.js";class de{constructor(n=new Map){this.currentSteps=n}addContracts(...n){n.forEach(i=>{this.currentSteps.get(i)||this.currentSteps.set(i,i.getAllSteps()[0])})}getCurrentStep(n){return this.currentSteps.get(n)}setCurrentStep(n,i){this.currentSteps.set(n,i)}}const G=$("session",{state:()=>new de});var j={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function ce(e,n,i,s,o,t){return l(),r("input",P({class:["p-inputtext p-component",{"p-filled":t.filled}],value:i.modelValue,onInput:n[1]||(n[1]=(...d)=>t.onInput&&t.onInput(...d))},e.$attrs),null,16,["value"])}j.render=ce;const ue={class:"mb-4"},pe={class:"mb-4"},me=E({props:{step:null},emits:["answerChanged"],setup(e,{emit:n}){const s=L(e.step.answer.toString());return(o,t)=>(l(),C(y,null,[b("div",ue,v(e.step.text),1),b("div",pe,[u(g(j),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),title:e.step.text,class:"w-full",type:"text",onInput:t[1]||(t[1]=d=>n("answerChanged",s.value))},null,8,["modelValue","title"])])],64))}});const ge={class:"font-bold"},he={class:"grid grid-cols-3 col-span-full"},fe=E({props:{contract:null},setup(e){const n=e,i=G(),s=L(i.$state.getCurrentStep(n.contract));i.$subscribe((m,x)=>{s.value=x.getCurrentStep(n.contract)});const o=B(()=>s.value.type===ae.TYPE?me:null),t=B(()=>n.contract.getPreviousStepFor(s.value)!==void 0),d=B(()=>n.contract.getNextStepFor(s.value)!==void 0),a=B(()=>n.contract.getModuleFor(s.value)),c=()=>{const m=n.contract.getPreviousStepFor(s.value);m&&(s.value=m)},p=()=>{const m=n.contract.getNextStepFor(s.value);m&&(s.value=m)};return(m,x)=>{var S,I;return l(),C("section",{key:(S=s.value)==null?void 0:S.id},[b("h3",ge,v((I=g(a))==null?void 0:I.text),1),(l(),r(H(g(o)),{step:s.value,onAnswerChanged:x[0]||(x[0]=M=>{var k;return(k=s.value)==null?void 0:k.setAnswer(M)})},null,8,["step"])),b("div",he,[g(t)?(l(),r(g(A),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:c})):f("",!0),g(d)?(l(),r(g(A),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:p})):f("",!0)])])}}});var be=U(fe,[["__scopeId","data-v-5134fa36"]]);const ve=b("h3",{class:"p-2 font-bold bg-white"},"Vorschau Vertragstext",-1),xe={class:"font-bold"},ye=E({props:{contract:null},setup(e){const i=L(e.contract.modules);return(s,o)=>(l(),C("section",null,[ve,(l(!0),C(y,null,V(i.value,t=>(l(),C("article",{key:t.id,class:"p-2"},[b("h4",xe,v(t.text),1),(l(!0),C(y,null,V(t.steps,d=>(l(),C("div",{key:d.id,class:"mt-2"},v(d.answer.toString()),1))),128))]))),128))]))}});var ke=ee(),W={name:"Menuitem",inheritAttrs:!1,emits:["click"],props:{item:null,template:null,exact:null},methods:{onClick(e,n){this.$emit("click",{originalEvent:e,item:this.item,navigate:n})},linkClass(e,n){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":n&&n.isActive,"router-link-active-exact":this.exact&&n&&n.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{containerClass(){return["p-menuitem",this.item.class]}},directives:{ripple:F}};const we={class:"p-menuitem-text"},Ce={class:"p-menuitem-text"};function Le(e,n,i,s,o,t){const d=N("router-link"),a=K("ripple");return t.visible()?(l(),r("li",{key:0,class:t.containerClass,role:"none",style:i.item.style},[i.template?(l(),r(H(i.template),{key:1,item:i.item},null,8,["item"])):(l(),r(y,{key:0},[i.item.to&&!t.disabled(i.item)?(l(),r(d,{key:0,to:i.item.to,custom:""},{default:_(({navigate:c,href:p,isActive:m,isExactActive:x})=>[z(u("a",{href:p,onClick:S=>t.onClick(S,c),class:t.linkClass(i.item,{isActive:m,isExactActive:x}),role:"menuitem"},[u("span",{class:["p-menuitem-icon",i.item.icon]},null,2),u("span",we,v(t.label()),1)],10,["href","onClick"]),[[a]])]),_:1},8,["to"])):z((l(),r("a",{key:1,href:i.item.url,class:t.linkClass(i.item),onClick:n[1]||(n[1]=(...c)=>t.onClick&&t.onClick(...c)),target:i.item.target,role:"menuitem",tabindex:t.disabled(i.item)?null:"0"},[u("span",{class:["p-menuitem-icon",i.item.icon]},null,2),u("span",Ce,v(t.label()),1)],10,["href","target","tabindex"])),[[a]])],64))],6)):f("",!0)}W.render=Le;var q={name:"Menu",emits:["show","hide"],inheritAttrs:!1,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0}},data(){return{overlayVisible:!1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&D.clear(this.container),this.container=null},methods:{itemClick(e){const n=e.item;n.disabled||(n.command&&n.command(e),n.to&&e.navigate&&e.navigate(e.originalEvent),this.hide())},toggle(e){this.overlayVisible?this.hide():this.show(e)},show(e){this.overlayVisible=!0,this.target=e.currentTarget},hide(){this.overlayVisible=!1,this.target=null},onEnter(e){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&D.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&D.clear(e)},alignOverlay(){h.absolutePosition(this.container,this.target),this.container.style.minWidth=h.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new te(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(){return this.target&&(this.target===event.target||this.target.contains(event.target))},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},label(e){return typeof e.label=="function"?e.label():e.label},containerRef(e){this.container=e},onOverlayClick(e){ke.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-menu p-component",{"p-menu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{Menuitem:W}};const _e={class:"p-menu-list p-reset",role:"menu"},Se={key:0,class:"p-submenu-header"};function Ee(e,n,i,s,o,t){const d=N("Menuitem");return l(),r(Y,{to:i.appendTo,disabled:!i.popup},[u(R,{name:"p-connected-overlay",onEnter:t.onEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},{default:_(()=>[(i.popup?o.overlayVisible:!0)?(l(),r("div",P({key:0,ref:t.containerRef,class:t.containerClass},e.$attrs,{onClick:n[1]||(n[1]=(...a)=>t.onOverlayClick&&t.onOverlayClick(...a))}),[u("ul",_e,[(l(!0),r(y,null,V(i.model,(a,c)=>(l(),r(y,{key:t.label(a)+c.toString()},[a.items&&t.visible(a)&&!a.separator?(l(),r(y,{key:0},[a.items?(l(),r("li",Se,[T(e.$slots,"item",{item:a},()=>[Z(v(t.label(a)),1)])])):f("",!0),(l(!0),r(y,null,V(a.items,(p,m)=>(l(),r(y,{key:p.label+c+m},[t.visible(p)&&!p.separator?(l(),r(d,{key:0,item:p,onClick:t.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"])):t.visible(p)&&p.separator?(l(),r("li",{class:["p-menu-separator",p.class],style:p.style,key:"separator"+c+m,role:"separator"},null,6)):f("",!0)],64))),128))],64)):t.visible(a)&&a.separator?(l(),r("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+c.toString(),role:"separator"},null,6)):(l(),r(d,{key:t.label(a)+c.toString(),item:a,onClick:t.itemClick,template:e.$slots.item,exact:i.exact},null,8,["item","onClick","template","exact"]))],64))),128))])],16)):f("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"])}function De(e,n){n===void 0&&(n={});var i=n.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",i==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var ze=`
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
`;De(ze);q.render=Ee;const Ie=E({props:{modules:null},emits:["save","navigate"],setup(e,{emit:n}){const o=L((t=>[{label:"Startseite",icon:"pi pi-angle-left",to:"/mitra-frontend/"},{label:"Module",items:t.map((d,a)=>({label:`${a+1}. ${d.text}`,command:()=>n("navigate",d.steps[0])}))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>n("save")}])(e.modules));return(t,d)=>(l(),r(g(q),{model:o.value,class:"w-70"},null,8,["model"]))}});var J={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&D.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&D.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&h.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&D.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?h.addClass(document.body,"p-overflow-hidden"):h.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&h.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&h.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let n=h.getFocusableElements(this.container);if(n&&n.length>0)if(!document.activeElement)n[0].focus();else{let i=n.indexOf(document.activeElement);e.shiftKey?i==-1||i===0?n[n.length-1].focus():n[i-1].focus():i==-1||i===n.length-1?n[0].focus():n[i+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const n=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return n?`p-dialog-${n}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let n in this.breakpoints)e+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){h.hasClass(e.target,"p-dialog-header-icon")||h.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",h.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let n=h.getOuterWidth(this.container),i=h.getOuterHeight(this.container),s=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,t=this.container.getBoundingClientRect(),d=t.left+s,a=t.top+o,c=h.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+n<c.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),a>=this.minY&&a+i<c.height&&(this.lastPageY=e.pageY,this.container.style.top=a+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=a+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,h.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return X()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return X()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:F}};const Be={class:"p-dialog-header-icons"},Ve=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Te={key:1,class:"p-dialog-footer"};function Ae(e,n,i,s,o,t){const d=K("ripple");return l(),r(Y,{to:t.appendTarget,disabled:t.appendDisabled},[o.containerVisible?(l(),r("div",{key:0,ref:t.maskRef,class:t.maskClass,onClick:n[4]||(n[4]=(...a)=>t.onMaskClick&&t.onMaskClick(...a))},[u(R,{name:"p-dialog",onBeforeEnter:t.onBeforeEnter,onEnter:t.onEnter,onBeforeLeave:t.onBeforeLeave,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave,appear:""},{default:_(()=>[i.visible?(l(),r("div",P({key:0,ref:t.containerRef,class:t.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":t.ariaLabelledById,"aria-modal":i.modal}),[i.showHeader?(l(),r("div",{key:0,class:"p-dialog-header",onMousedown:n[3]||(n[3]=(...a)=>t.initDrag&&t.initDrag(...a))},[T(e.$slots,"header",{},()=>[i.header?(l(),r("span",{key:0,id:t.ariaLabelledById,class:"p-dialog-title"},v(i.header),9,["id"])):f("",!0)]),u("div",Be,[i.maximizable?z((l(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:n[1]||(n[1]=(...a)=>t.maximize&&t.maximize(...a)),type:"button",tabindex:"-1"},[u("span",{class:t.maximizeIconClass},null,2)],512)),[[d]]):f("",!0),i.closable?z((l(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:n[2]||(n[2]=(...a)=>t.close&&t.close(...a)),"aria-label":i.ariaCloseLabel,type:"button",tabindex:"-1"},[Ve],8,["aria-label"])),[[d]]):f("",!0)])],32)):f("",!0),u("div",{class:t.contentStyleClass,style:i.contentStyle},[T(e.$slots,"default")],6),i.footer||e.$slots.footer?(l(),r("div",Te,[T(e.$slots,"footer",{},()=>[Z(v(i.footer),1)])])):f("",!0)],16,["aria-labelledby","aria-modal"])):f("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):f("",!0)],8,["to","disabled"])}function Me(e,n){n===void 0&&(n={});var i=n.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",i==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Oe=`
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
`;Me(Oe);J.render=Ae;const Pe={class:"flex h-full"},Ke={class:"flex-none"},Re={class:"flex-1 p-8"},je=E({props:{id:null},setup(e){const n=e,i=G(),s=re(),o=oe(),t=n.id==="cloud-contract"?le.fromPlaybook(se().findById("db2a1d38-01fb-4ea2-bc6f-b5213413c809")):o.findById(n.id);i.$state.addContracts(t);const d=t.title||"Unbenannter Vertrag",a=L(d),c=L(d),p=L(!1),m=()=>{c.value=a.value,p.value=!0},x=()=>{p.value=!1,c.value!==d&&(a.value=c.value,t.title=c.value)},S=k=>{const w=k.target;w==null||w.select()},I=()=>{s.save(t)},M=k=>{console.log(k),i.$state.setCurrentStep(t,k)};return ne(()=>{t.title||m()}),(k,w)=>{const Q=K("focus");return l(),C("div",Pe,[b("nav",Ke,[u(Ie,{modules:g(t).modules,onSave:I,onNavigate:M},null,8,["modules"])]),b("main",Re,[u(g(J),{id:"dialog-contract-title",visible:p.value,"onUpdate:visible":w[1]||(w[1]=O=>p.value=O),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:_(()=>[u(g(A),{label:"OK",icon:"pi pi-check",onClick:x})]),default:_(()=>[z(u(g(j),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":w[0]||(w[0]=O=>c.value=O),title:"Titel des Vertrags",type:"text",onFocus:S,onKeyup:ie(x,["enter"])},null,8,["modelValue","onKeyup"]),[[Q]])]),_:1},8,["visible"]),b("header",null,[u(g(A),{class:"p-button-link",onClick:m},{default:_(()=>[b("span",null,v(a.value),1)]),_:1})]),u(R,{name:"fade",mode:"out-in"},{default:_(()=>[u(be,{contract:g(t)},null,8,["contract"])]),_:1})]),u(ye,{contract:g(t),class:"flex-1 bg-slate-100"},null,8,["contract"])])}}});var He=U(je,[["__scopeId","data-v-0a856565"]]);const Xe=E({props:{id:null},setup(e){return(n,i)=>(l(),r(He,{id:e.id},null,8,["id"]))}});export{Xe as default};
