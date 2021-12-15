var J=Object.defineProperty;var F=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var Y=(e,t,a)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,X=(e,t)=>{for(var a in t||(t={}))Q.call(t,a)&&Y(e,a,t[a]);if(F)for(var a of F(t))$.call(t,a)&&Y(e,a,t[a]);return e};import{o as l,c as s,x as H,h as L,l as I,i as T,j as x,t as v,g as r,u as h,F as C,y as D,z as A,f as m,U as P,r as E,s as R,w as y,p as S,v as O,T as z,Z as V,D as b,n as Z,e as M,A as ee,k as te,B as ne,q as ae}from"./vendor.0e99d301.js";import{T as ie,s as B,R as le,C as se,c as oe,a as re,m as de}from"./provide.df79fc5e.js";import{_ as j}from"./index.e35bd7a4.js";var N={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function ce(e,t,a,d,o,n){return l(),s("input",H({class:["p-inputtext p-component",{"p-filled":n.filled}],value:a.modelValue,onInput:t[1]||(t[1]=(...u)=>n.onInput&&n.onInput(...u))},e.$attrs),null,16,["value"])}N.render=ce;const ue={class:"mb-4"},pe={class:"mb-4"},me=L({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const d=I(e.step.answer.toString());return(o,n)=>(l(),T(C,null,[x("div",ue,v(e.step.text),1),x("div",pe,[r(h(N),{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=u=>d.value=u),title:e.step.text,class:"w-full",type:"text",onInput:n[1]||(n[1]=u=>t("answerChanged",d.value))},null,8,["modelValue","title"])])],64))}});const ge={class:"font-bold"},fe={class:"w-[30vw]"},he={class:"grid grid-cols-3 col-span-full"},be=L({props:{contract:null},setup(e){const t=e,a=I(t.contract.getSteps()[0]),d=D(()=>a.value.type===ie.TYPE?me:null),o=D(()=>t.contract.getPreviousStepFor(a.value)!==void 0),n=D(()=>t.contract.getNextStepFor(a.value)!==void 0),u=D(()=>t.contract.getModuleFor(a.value)),c=()=>{const p=t.contract.getPreviousStepFor(a.value);p&&(a.value=p)},i=()=>{const p=t.contract.getNextStepFor(a.value);p&&(a.value=p)};return(p,g)=>{var k,w;return l(),T("section",{key:(k=a.value)==null?void 0:k.id},[x("h3",ge,v((w=h(u))==null?void 0:w.text),1),x("div",fe,[(l(),s(A(h(d)),{step:a.value,onAnswerChanged:g[0]||(g[0]=_=>{var f;return(f=a.value)==null?void 0:f.setAnswer(_)})},null,8,["step"])),x("div",he,[h(o)?(l(),s(h(B),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:c})):m("",!0),h(n)?(l(),s(h(B),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:i})):m("",!0)])])])}}});var xe=j(be,[["__scopeId","data-v-2b4a9cc7"]]),U={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const ve={class:"p-submenu-list",role:"tree"},ye={class:"p-menuitem-text"},ke={class:"p-menuitem-text"},we={class:"p-toggleable-content"};function _e(e,t,a,d,o,n){const u=E("router-link"),c=E("PanelMenuSub",!0);return l(),s("ul",ve,[(l(!0),s(C,null,R(a.model,(i,p)=>(l(),s(C,{key:n.label(i)+p.toString()},[n.visible(i)&&!i.separator?(l(),s("li",{key:0,role:"none",class:n.getItemClass(i),style:i.style},[a.template?(l(),s(A(a.template),{key:1,item:i},null,8,["item"])):(l(),s(C,{key:0},[i.to&&!n.disabled(i)?(l(),s(u,{key:0,to:i.to,custom:""},{default:y(({navigate:g,href:k,isActive:w,isExactActive:_})=>[r("a",{href:k,class:n.linkClass(i,{isRouterActive:w,isExactActive:_}),onClick:f=>n.onItemClick(f,i,g),role:"treeitem","aria-expanded":n.isActive(i)},[r("span",{class:["p-menuitem-icon",i.icon]},null,2),r("span",ye,v(n.label(i)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:i.url,class:n.linkClass(i),target:i.target,onClick:g=>n.onItemClick(g,i),role:"treeitem","aria-expanded":n.isActive(i),tabindex:n.disabled(i)?null:"0"},[i.items?(l(),s("span",{key:0,class:n.getSubmenuIcon(i)},null,2)):m("",!0),r("span",{class:["p-menuitem-icon",i.icon]},null,2),r("span",ke,v(n.label(i)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),r(z,{name:"p-toggleable-content"},{default:y(()=>[S(r("div",we,[n.visible(i)&&i.items?(l(),s(c,{model:i.items,key:n.label(i)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=g=>e.$emit("item-toggle",g)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[O,n.isActive(i)]])]),_:2},1024)],6)):m("",!0),n.visible(i)&&i.separator?(l(),s("li",{class:["p-menu-separator",i.class],style:i.style,key:"separator"+p.toString()},null,6)):m("",!0)],64))),128))])}U.render=_e;var G={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=X({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:U},computed:{ariaId(){return P()}}};const Ce={class:"p-panelmenu p-component"},Ie={class:"p-menuitem-text"},Le={class:"p-menuitem-text"},Se={key:0,class:"p-panelmenu-content"};function De(e,t,a,d,o,n){const u=E("router-link"),c=E("PanelMenuSub");return l(),s("div",Ce,[(l(!0),s(C,null,R(a.model,(i,p)=>(l(),s(C,{key:n.label(i)+"_"+p},[n.visible(i)?(l(),s("div",{key:0,class:n.getPanelClass(i),style:i.style},[r("div",{class:n.getHeaderClass(i),style:i.style},[e.$slots.item?(l(),s(A(e.$slots.item),{key:1,item:i},null,8,["item"])):(l(),s(C,{key:0},[i.to&&!n.disabled(i)?(l(),s(u,{key:0,to:i.to,custom:""},{default:y(({navigate:g,href:k,isActive:w,isExactActive:_})=>[r("a",{href:k,class:n.getHeaderLinkClass(i,{isActive:w,isExactActive:_}),onClick:f=>n.onItemClick(f,i,g),role:"treeitem"},[i.icon?(l(),s("span",{key:0,class:n.getPanelIcon(i)},null,2)):m("",!0),r("span",Ie,v(n.label(i)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:i.url,class:n.getHeaderLinkClass(i),onClick:g=>n.onItemClick(g,i),tabindex:n.disabled(i)?null:"0","aria-expanded":n.isActive(i),id:n.ariaId+"_header_"+p,"aria-controls":n.ariaId+"_content_"+p},[i.items?(l(),s("span",{key:0,class:n.getPanelToggleIcon(i)},null,2)):m("",!0),i.icon?(l(),s("span",{key:1,class:n.getPanelIcon(i)},null,2)):m("",!0),r("span",Le,v(n.label(i)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),r(z,{name:"p-toggleable-content"},{default:y(()=>[S(r("div",{class:"p-toggleable-content",role:"region",id:n.ariaId+"_content_"+p,"aria-labelledby":n.ariaId+"_header_"+p},[i.items?(l(),s("div",Se,[r(c,{model:i.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:n.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[O,n.isActive(i)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Ee(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var ze=`
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
`;Ee(ze);G.render=De;const Be=L({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=I((n=>[{label:"Startseite",to:"/mitra-frontend/"},{label:"Module",items:n.map((u,c)=>({label:`${c+1}. ${u.text}`,to:"/mitra-frontend/"}))},{label:"Fragen\xFCbersicht",to:"/mitra-frontend/"},{label:"TO-DOs",to:"/mitra-frontend/"},{label:"Notizen",to:"/mitra-frontend/"},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return(n,u)=>(l(),s(h(G),{model:o.value,class:"w-70"},null,8,["model"]))}});var Ke=j(Be,[["__scopeId","data-v-d1d0f974"]]),q={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&V.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&V.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&b.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&V.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?b.addClass(document.body,"p-overflow-hidden"):b.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&b.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&b.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=b.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let a=t.indexOf(document.activeElement);e.shiftKey?a==-1||a===0?t[t.length-1].focus():t[a-1].focus():a==-1||a===t.length-1?t[0].focus():t[a+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(a=>a===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){b.hasClass(e.target,"p-dialog-header-icon")||b.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",b.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=b.getOuterWidth(this.container),a=b.getOuterHeight(this.container),d=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),u=n.left+d,c=n.top+o,i=b.getViewport();this.container.style.position="fixed",this.keepInViewport?(u>=this.minX&&u+t<i.width&&(this.lastPageX=e.pageX,this.container.style.left=u+"px"),c>=this.minY&&c+a<i.height&&(this.lastPageY=e.pageY,this.container.style.top=c+"px")):(this.lastPageX=e.pageX,this.container.style.left=u+"px",this.lastPageY=e.pageY,this.container.style.top=c+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,b.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return P()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return P()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:le}};const Te={class:"p-dialog-header-icons"},Ae=r("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Pe={key:1,class:"p-dialog-footer"};function Ve(e,t,a,d,o,n){const u=Z("ripple");return l(),s(ee,{to:n.appendTarget,disabled:n.appendDisabled},[o.containerVisible?(l(),s("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...c)=>n.onMaskClick&&n.onMaskClick(...c))},[r(z,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:y(()=>[a.visible?(l(),s("div",H({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":a.modal}),[a.showHeader?(l(),s("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...c)=>n.initDrag&&n.initDrag(...c))},[M(e.$slots,"header",{},()=>[a.header?(l(),s("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},v(a.header),9,["id"])):m("",!0)]),r("div",Te,[a.maximizable?S((l(),s("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...c)=>n.maximize&&n.maximize(...c)),type:"button",tabindex:"-1"},[r("span",{class:n.maximizeIconClass},null,2)],512)),[[u]]):m("",!0),a.closable?S((l(),s("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...c)=>n.close&&n.close(...c)),"aria-label":a.ariaCloseLabel,type:"button",tabindex:"-1"},[Ae],8,["aria-label"])),[[u]]):m("",!0)])],32)):m("",!0),r("div",{class:n.contentStyleClass,style:a.contentStyle},[M(e.$slots,"default")],6),a.footer||e.$slots.footer?(l(),s("div",Pe,[M(e.$slots,"footer",{},()=>[te(v(a.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function Me(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var je=`
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
`;Me(je);q.render=Ve;const Ne={class:"flex"},Fe={class:"flex-col"},Ye={class:"flex-col p-8"},Xe=L({props:{id:null},setup(e){const t=e,a=de(),d=re(),o=t.id==="cloud-contract"?se.fromPlaybook(oe().findById("db2a1d38-01fb-4ea2-bc6f-b5213413c809")):d.findById(t.id),n=o.title||"Unbenannter Vertrag",u=I(n),c=I(n),i=I(!1),p=()=>{c.value=u.value,i.value=!0},g=()=>{i.value=!1,u.value=c.value,o.title=c.value},k=_=>{const f=_.target;f==null||f.select()},w=()=>{a.save(o)};return ne(()=>{o.title||p()}),(_,f)=>{const W=Z("focus");return l(),T("div",Ne,[x("nav",Fe,[r(Ke,{modules:h(o).modules,onSave:w},null,8,["modules"])]),x("main",Ye,[r(h(q),{id:"dialog-contract-title",visible:i.value,"onUpdate:visible":f[1]||(f[1]=K=>i.value=K),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:y(()=>[r(h(B),{label:"OK",icon:"pi pi-check",onClick:g})]),default:y(()=>[S(r(h(N),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=K=>c.value=K),title:"Titel des Vertrags",type:"text",onFocus:k,onKeyup:ae(g,["enter"])},null,8,["modelValue","onKeyup"]),[[W]])]),_:1},8,["visible"]),x("section",null,[r(h(B),{class:"p-button-link",onClick:p},{default:y(()=>[x("span",null,v(u.value),1)]),_:1})]),r(z,{name:"fade",mode:"out-in"},{default:y(()=>[r(xe,{contract:h(o)},null,8,["contract"])]),_:1})])])}}});var He=j(Xe,[["__scopeId","data-v-583e7bcf"]]);const Ge=L({props:{id:null},setup(e){return(t,a)=>(l(),s(He,{id:e.id},null,8,["id"]))}});export{Ge as default};
