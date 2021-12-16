var $=Object.defineProperty;var O=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var X=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,H=(e,t)=>{for(var a in t||(t={}))ee.call(t,a)&&X(e,a,t[a]);if(O)for(var a of O(t))te.call(t,a)&&X(e,a,t[a]);return e};import{o as i,c as s,y as R,i as L,m as S,j as D,k as y,t as b,h as d,u as f,F as C,z,A as P,g as m,B as ne,x as V,U as M,r as B,w as k,q as E,v as Z,T as K,Z as j,D as h,p as U,f as N,C as ae,l as le,E as ie,s as se}from"./vendor.fc9ea11c.js";import{T as oe,s as T,R as re,C as de,c as ce,a as ue,m as pe}from"./provide.4917d403.js";import{_ as F}from"./index.d164b175.js";var Y={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function me(e,t,a,c,o,n){return i(),s("input",R({class:["p-inputtext p-component",{"p-filled":n.filled}],value:a.modelValue,onInput:t[1]||(t[1]=(...r)=>n.onInput&&n.onInput(...r))},e.$attrs),null,16,["value"])}Y.render=me;const ge={class:"mb-4"},fe={class:"mb-4"},he=L({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const c=S(e.step.answer.toString());return(o,n)=>(i(),D(C,null,[y("div",ge,b(e.step.text),1),y("div",fe,[d(f(Y),{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=r=>c.value=r),title:e.step.text,class:"w-full",type:"text",onInput:n[1]||(n[1]=r=>t("answerChanged",c.value))},null,8,["modelValue","title"])])],64))}});const be={class:"font-bold"},xe={class:"grid grid-cols-3 col-span-full"},ve=L({props:{contract:null},setup(e){const t=e,a=S(t.contract.getSteps()[0]),c=z(()=>a.value.type===oe.TYPE?he:null),o=z(()=>t.contract.getPreviousStepFor(a.value)!==void 0),n=z(()=>t.contract.getNextStepFor(a.value)!==void 0),r=z(()=>t.contract.getModuleFor(a.value)),u=()=>{const p=t.contract.getPreviousStepFor(a.value);p&&(a.value=p)},l=()=>{const p=t.contract.getNextStepFor(a.value);p&&(a.value=p)};return(p,g)=>{var x,w;return i(),D("section",{key:(x=a.value)==null?void 0:x.id},[y("h3",be,b((w=f(r))==null?void 0:w.text),1),(i(),s(P(f(c)),{step:a.value,onAnswerChanged:g[0]||(g[0]=I=>{var v;return(v=a.value)==null?void 0:v.setAnswer(I)})},null,8,["step"])),y("div",xe,[f(o)?(i(),s(f(T),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:u})):m("",!0),f(n)?(i(),s(f(T),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:l})):m("",!0)])])}}});var ye=F(ve,[["__scopeId","data-v-2840cfa2"]]);const ke={},G=ne("session",{state:()=>ke}),we=y("h3",{class:"p-2 font-bold bg-white"},"Vorschau Vertragstext",-1),_e=L({setup(e){const a=G().lastWorkedOnContract;return(c,o)=>{var n;return i(),D("section",null,[we,(i(!0),D(C,null,V((n=f(a))==null?void 0:n.getSteps(),r=>(i(),D("article",{key:r.id,class:"p-2"},b(r.answer.toString()),1))),128))])}}});var W={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Ce={class:"p-submenu-list",role:"tree"},Ie={class:"p-menuitem-text"},Le={class:"p-menuitem-text"},Se={class:"p-toggleable-content"};function De(e,t,a,c,o,n){const r=B("router-link"),u=B("PanelMenuSub",!0);return i(),s("ul",Ce,[(i(!0),s(C,null,V(a.model,(l,p)=>(i(),s(C,{key:n.label(l)+p.toString()},[n.visible(l)&&!l.separator?(i(),s("li",{key:0,role:"none",class:n.getItemClass(l),style:l.style},[a.template?(i(),s(P(a.template),{key:1,item:l},null,8,["item"])):(i(),s(C,{key:0},[l.to&&!n.disabled(l)?(i(),s(r,{key:0,to:l.to,custom:""},{default:k(({navigate:g,href:x,isActive:w,isExactActive:I})=>[d("a",{href:x,class:n.linkClass(l,{isRouterActive:w,isExactActive:I}),onClick:v=>n.onItemClick(v,l,g),role:"treeitem","aria-expanded":n.isActive(l)},[d("span",{class:["p-menuitem-icon",l.icon]},null,2),d("span",Ie,b(n.label(l)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(i(),s("a",{key:1,href:l.url,class:n.linkClass(l),target:l.target,onClick:g=>n.onItemClick(g,l),role:"treeitem","aria-expanded":n.isActive(l),tabindex:n.disabled(l)?null:"0"},[l.items?(i(),s("span",{key:0,class:n.getSubmenuIcon(l)},null,2)):m("",!0),d("span",{class:["p-menuitem-icon",l.icon]},null,2),d("span",Le,b(n.label(l)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),d(K,{name:"p-toggleable-content"},{default:k(()=>[E(d("div",Se,[n.visible(l)&&l.items?(i(),s(u,{model:l.items,key:n.label(l)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=g=>e.$emit("item-toggle",g)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[Z,n.isActive(l)]])]),_:2},1024)],6)):m("",!0),n.visible(l)&&l.separator?(i(),s("li",{class:["p-menu-separator",l.class],style:l.style,key:"separator"+p.toString()},null,6)):m("",!0)],64))),128))])}W.render=De;var q={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=H({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:W},computed:{ariaId(){return M()}}};const Ee={class:"p-panelmenu p-component"},ze={class:"p-menuitem-text"},Be={class:"p-menuitem-text"},Ke={key:0,class:"p-panelmenu-content"};function Te(e,t,a,c,o,n){const r=B("router-link"),u=B("PanelMenuSub");return i(),s("div",Ee,[(i(!0),s(C,null,V(a.model,(l,p)=>(i(),s(C,{key:n.label(l)+"_"+p},[n.visible(l)?(i(),s("div",{key:0,class:n.getPanelClass(l),style:l.style},[d("div",{class:n.getHeaderClass(l),style:l.style},[e.$slots.item?(i(),s(P(e.$slots.item),{key:1,item:l},null,8,["item"])):(i(),s(C,{key:0},[l.to&&!n.disabled(l)?(i(),s(r,{key:0,to:l.to,custom:""},{default:k(({navigate:g,href:x,isActive:w,isExactActive:I})=>[d("a",{href:x,class:n.getHeaderLinkClass(l,{isActive:w,isExactActive:I}),onClick:v=>n.onItemClick(v,l,g),role:"treeitem"},[l.icon?(i(),s("span",{key:0,class:n.getPanelIcon(l)},null,2)):m("",!0),d("span",ze,b(n.label(l)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(i(),s("a",{key:1,href:l.url,class:n.getHeaderLinkClass(l),onClick:g=>n.onItemClick(g,l),tabindex:n.disabled(l)?null:"0","aria-expanded":n.isActive(l),id:n.ariaId+"_header_"+p,"aria-controls":n.ariaId+"_content_"+p},[l.items?(i(),s("span",{key:0,class:n.getPanelToggleIcon(l)},null,2)):m("",!0),l.icon?(i(),s("span",{key:1,class:n.getPanelIcon(l)},null,2)):m("",!0),d("span",Be,b(n.label(l)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),d(K,{name:"p-toggleable-content"},{default:k(()=>[E(d("div",{class:"p-toggleable-content",role:"region",id:n.ariaId+"_content_"+p,"aria-labelledby":n.ariaId+"_header_"+p},[l.items?(i(),s("div",Ke,[d(u,{model:l.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:n.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[Z,n.isActive(l)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Ae(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var c=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&c.firstChild?c.insertBefore(o,c.firstChild):c.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Pe=`
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
`;Ae(Pe);q.render=Te;const Ve=L({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=S((n=>[{label:"Startseite",to:"/mitra-frontend/"},{label:"Module",items:n.map((r,u)=>({label:`${u+1}. ${r.text}`,to:"/mitra-frontend/"}))},{label:"Fragen\xFCbersicht",to:"/mitra-frontend/"},{label:"TO-DOs",to:"/mitra-frontend/"},{label:"Notizen",to:"/mitra-frontend/"},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return(n,r)=>(i(),s(f(q),{model:o.value,class:"w-70"},null,8,["model"]))}});var Me=F(Ve,[["__scopeId","data-v-d1d0f974"]]),J={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&j.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&j.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&h.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&j.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?h.addClass(document.body,"p-overflow-hidden"):h.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&h.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&h.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=h.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let a=t.indexOf(document.activeElement);e.shiftKey?a==-1||a===0?t[t.length-1].focus():t[a-1].focus():a==-1||a===t.length-1?t[0].focus():t[a+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(a=>a===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){h.hasClass(e.target,"p-dialog-header-icon")||h.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",h.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=h.getOuterWidth(this.container),a=h.getOuterHeight(this.container),c=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),r=n.left+c,u=n.top+o,l=h.getViewport();this.container.style.position="fixed",this.keepInViewport?(r>=this.minX&&r+t<l.width&&(this.lastPageX=e.pageX,this.container.style.left=r+"px"),u>=this.minY&&u+a<l.height&&(this.lastPageY=e.pageY,this.container.style.top=u+"px")):(this.lastPageX=e.pageX,this.container.style.left=r+"px",this.lastPageY=e.pageY,this.container.style.top=u+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,h.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return M()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return M()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:re}};const je={class:"p-dialog-header-icons"},Ne=d("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Fe={key:1,class:"p-dialog-footer"};function Ye(e,t,a,c,o,n){const r=U("ripple");return i(),s(ae,{to:n.appendTarget,disabled:n.appendDisabled},[o.containerVisible?(i(),s("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...u)=>n.onMaskClick&&n.onMaskClick(...u))},[d(K,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:k(()=>[a.visible?(i(),s("div",R({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":a.modal}),[a.showHeader?(i(),s("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...u)=>n.initDrag&&n.initDrag(...u))},[N(e.$slots,"header",{},()=>[a.header?(i(),s("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},b(a.header),9,["id"])):m("",!0)]),d("div",je,[a.maximizable?E((i(),s("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...u)=>n.maximize&&n.maximize(...u)),type:"button",tabindex:"-1"},[d("span",{class:n.maximizeIconClass},null,2)],512)),[[r]]):m("",!0),a.closable?E((i(),s("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...u)=>n.close&&n.close(...u)),"aria-label":a.ariaCloseLabel,type:"button",tabindex:"-1"},[Ne],8,["aria-label"])),[[r]]):m("",!0)])],32)):m("",!0),d("div",{class:n.contentStyleClass,style:a.contentStyle},[N(e.$slots,"default")],6),a.footer||e.$slots.footer?(i(),s("div",Fe,[N(e.$slots,"footer",{},()=>[le(b(a.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function Oe(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var c=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&c.firstChild?c.insertBefore(o,c.firstChild):c.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Xe=`
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
`;Oe(Xe);J.render=Ye;const He={class:"flex h-full"},Re={class:"flex-none"},Ze={class:"flex-1 p-8"},Ue=L({props:{id:null},setup(e){const t=e,a=G(),c=pe(),o=ue(),n=t.id==="cloud-contract"?de.fromPlaybook(ce().findById("db2a1d38-01fb-4ea2-bc6f-b5213413c809")):o.findById(t.id);a.lastWorkedOnContract=n;const r=n.title||"Unbenannter Vertrag",u=S(r),l=S(r),p=S(!1),g=()=>{l.value=u.value,p.value=!0},x=()=>{p.value=!1,l.value!==r&&(u.value=l.value,n.title=l.value)},w=v=>{const _=v.target;_==null||_.select()},I=()=>{c.save(n)};return ie(()=>{n.title||g()}),(v,_)=>{const Q=U("focus");return i(),D("div",He,[y("nav",Re,[d(Me,{modules:f(n).modules,onSave:I},null,8,["modules"])]),y("main",Ze,[d(f(J),{id:"dialog-contract-title",visible:p.value,"onUpdate:visible":_[1]||(_[1]=A=>p.value=A),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:k(()=>[d(f(T),{label:"OK",icon:"pi pi-check",onClick:x})]),default:k(()=>[E(d(f(Y),{id:"input-contract-title",modelValue:l.value,"onUpdate:modelValue":_[0]||(_[0]=A=>l.value=A),title:"Titel des Vertrags",type:"text",onFocus:w,onKeyup:se(x,["enter"])},null,8,["modelValue","onKeyup"]),[[Q]])]),_:1},8,["visible"]),y("header",null,[d(f(T),{class:"p-button-link",onClick:g},{default:k(()=>[y("span",null,b(u.value),1)]),_:1})]),d(K,{name:"fade",mode:"out-in"},{default:k(()=>[d(ye,{contract:f(n)},null,8,["contract"])]),_:1})]),d(_e,{class:"flex-1 bg-slate-100"})])}}});var Ge=F(Ue,[["__scopeId","data-v-8eed8116"]]);const $e=L({props:{id:null},setup(e){return(t,a)=>(i(),s(Ge,{id:e.id},null,8,["id"]))}});export{$e as default};
