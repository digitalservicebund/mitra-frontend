var Q=Object.defineProperty;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var Y=(e,t,l)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,X=(e,t)=>{for(var l in t||(t={}))$.call(t,l)&&Y(e,l,t[l]);if(F)for(var l of F(t))ee.call(t,l)&&Y(e,l,t[l]);return e};import{o as i,c as s,y as H,e as L,f as I,g as T,i as x,t as v,h as c,j as h,F as C,z as D,A as B,m,U as P,r as E,x as O,w as y,p as S,q as R,T as z,B as Z,Z as V,D as b,n as U,l as M,C as te,k as ne,s as ae}from"./vendor.e8bb2773.js";import{_ as j,T as le,a as ie,c as se}from"./index.e9f17323.js";import{s as A,R as oe}from"./button.esm.f922e6b4.js";var N={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function re(e,t,l,u,o,n){return i(),s("input",H({class:["p-inputtext p-component",{"p-filled":n.filled}],value:l.modelValue,onInput:t[1]||(t[1]=(...d)=>n.onInput&&n.onInput(...d))},e.$attrs),null,16,["value"])}N.render=re;const de={class:"mb-4"},ce={class:"mb-4"},ue=L({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const u=I(e.step.getAnswer().toString());return(o,n)=>(i(),T(C,null,[x("div",de,v(e.step.text),1),x("div",ce,[c(h(N),{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=d=>u.value=d),title:e.step.text,class:"w-full",type:"text",onInput:n[1]||(n[1]=d=>t("answerChanged",u.value))},null,8,["modelValue","title"])])],64))}});const pe={class:"font-bold"},me={class:"w-[30vw]"},ge={class:"grid grid-cols-3 col-span-full"},fe=L({props:{contract:null},setup(e){const t=e,l=I(t.contract.getSteps()[0]),u=D(()=>{const p=l.value;return(p==null?void 0:p.getType())===le.TYPE?ue:null}),o=D(()=>t.contract.getPreviousStepFor(l.value)!==void 0),n=D(()=>t.contract.getNextStepFor(l.value)!==void 0),d=D(()=>t.contract.getModuleFor(l.value)),r=()=>{const p=t.contract.getPreviousStepFor(l.value);p&&(l.value=p)},a=()=>{const p=t.contract.getNextStepFor(l.value);p&&(l.value=p)};return(p,g)=>{var k,w;return i(),T("section",{key:(k=l.value)==null?void 0:k.id},[x("h3",pe,v((w=h(d))==null?void 0:w.text),1),x("div",me,[(i(),s(B(h(u)),{step:l.value,onAnswerChanged:g[0]||(g[0]=_=>{var f;return(f=l.value)==null?void 0:f.setAnswer(_)})},null,8,["step"])),x("div",ge,[h(o)?(i(),s(h(A),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:r})):m("",!0),h(n)?(i(),s(h(A),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:a})):m("",!0)])])])}}});var he=j(fe,[["__scopeId","data-v-041b42a1"]]),q={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,l){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&l&&l(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const be={class:"p-submenu-list",role:"tree"},xe={class:"p-menuitem-text"},ve={class:"p-menuitem-text"},ye={class:"p-toggleable-content"};function ke(e,t,l,u,o,n){const d=E("router-link"),r=E("PanelMenuSub",!0);return i(),s("ul",be,[(i(!0),s(C,null,O(l.model,(a,p)=>(i(),s(C,{key:n.label(a)+p.toString()},[n.visible(a)&&!a.separator?(i(),s("li",{key:0,role:"none",class:n.getItemClass(a),style:a.style},[l.template?(i(),s(B(l.template),{key:1,item:a},null,8,["item"])):(i(),s(C,{key:0},[a.to&&!n.disabled(a)?(i(),s(d,{key:0,to:a.to,custom:""},{default:y(({navigate:g,href:k,isActive:w,isExactActive:_})=>[c("a",{href:k,class:n.linkClass(a,{isRouterActive:w,isExactActive:_}),onClick:f=>n.onItemClick(f,a,g),role:"treeitem","aria-expanded":n.isActive(a)},[c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",xe,v(n.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(i(),s("a",{key:1,href:a.url,class:n.linkClass(a),target:a.target,onClick:g=>n.onItemClick(g,a),role:"treeitem","aria-expanded":n.isActive(a),tabindex:n.disabled(a)?null:"0"},[a.items?(i(),s("span",{key:0,class:n.getSubmenuIcon(a)},null,2)):m("",!0),c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",ve,v(n.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),c(z,{name:"p-toggleable-content"},{default:y(()=>[S(c("div",ye,[n.visible(a)&&a.items?(i(),s(r,{model:a.items,key:n.label(a)+"_sub_",template:l.template,expandedKeys:l.expandedKeys,onItemToggle:t[1]||(t[1]=g=>e.$emit("item-toggle",g)),exact:l.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[R,n.isActive(a)]])]),_:2},1024)],6)):m("",!0),n.visible(a)&&a.separator?(i(),s("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+p.toString()},null,6)):m("",!0)],64))),128))])}q.render=ke;var G={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,l){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&l&&l(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,l=X({},this.expandedKeys);e.expanded?l[t.key]=!0:delete l[t.key],this.$emit("update:expandedKeys",l)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:q},computed:{ariaId(){return P()}}};const we={class:"p-panelmenu p-component"},_e={class:"p-menuitem-text"},Ce={class:"p-menuitem-text"},Ie={key:0,class:"p-panelmenu-content"};function Le(e,t,l,u,o,n){const d=E("router-link"),r=E("PanelMenuSub");return i(),s("div",we,[(i(!0),s(C,null,O(l.model,(a,p)=>(i(),s(C,{key:n.label(a)+"_"+p},[n.visible(a)?(i(),s("div",{key:0,class:n.getPanelClass(a),style:a.style},[c("div",{class:n.getHeaderClass(a),style:a.style},[e.$slots.item?(i(),s(B(e.$slots.item),{key:1,item:a},null,8,["item"])):(i(),s(C,{key:0},[a.to&&!n.disabled(a)?(i(),s(d,{key:0,to:a.to,custom:""},{default:y(({navigate:g,href:k,isActive:w,isExactActive:_})=>[c("a",{href:k,class:n.getHeaderLinkClass(a,{isActive:w,isExactActive:_}),onClick:f=>n.onItemClick(f,a,g),role:"treeitem"},[a.icon?(i(),s("span",{key:0,class:n.getPanelIcon(a)},null,2)):m("",!0),c("span",_e,v(n.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(i(),s("a",{key:1,href:a.url,class:n.getHeaderLinkClass(a),onClick:g=>n.onItemClick(g,a),tabindex:n.disabled(a)?null:"0","aria-expanded":n.isActive(a),id:n.ariaId+"_header","aria-controls":n.ariaId+"_content"},[a.items?(i(),s("span",{key:0,class:n.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(i(),s("span",{key:1,class:n.getPanelIcon(a)},null,2)):m("",!0),c("span",Ce,v(n.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),c(z,{name:"p-toggleable-content"},{default:y(()=>[S(c("div",{class:"p-toggleable-content",role:"region",id:n.ariaId+"_content","aria-labelledby":n.ariaId+"_header"},[a.items?(i(),s("div",Ie,[c(r,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:l.expandedKeys,onItemToggle:n.updateExpandedKeys,exact:l.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[R,n.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Se(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var u=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",l==="top"&&u.firstChild?u.insertBefore(o,u.firstChild):u.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var De=`
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
`;Se(De);G.render=Le;const Ee=L({props:{modules:null},emits:["save"],setup(e,{emit:t}){const o=I((n=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:n.map((d,r)=>({label:`${r+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return Z(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,r)=>{const a=d.querySelector(".p-toggleable-content");(a==null?void 0:a.id)&&(a.id+=`_${r+1}`);const p=d.querySelector(".p-panelmenu-header-link");(p==null?void 0:p.id)?(p.id+=`_${r+1}`,a==null||a.setAttribute("aria-labelledby",p.id)):a==null||a.removeAttribute("aria-labelledby")})}),(n,d)=>(i(),s(h(G),{model:o.value,class:"w-70"},null,8,["model"]))}});var ze=j(Ee,[["__scopeId","data-v-6c559934"]]),W={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&V.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&V.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&b.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&V.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?b.addClass(document.body,"p-overflow-hidden"):b.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&b.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&b.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=b.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let l=t.indexOf(document.activeElement);e.shiftKey?l==-1||l===0?t[t.length-1].focus():t[l-1].focus():l==-1||l===t.length-1?t[0].focus():t[l+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(l=>l===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){b.hasClass(e.target,"p-dialog-header-icon")||b.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",b.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=b.getOuterWidth(this.container),l=b.getOuterHeight(this.container),u=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),d=n.left+u,r=n.top+o,a=b.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),r>=this.minY&&r+l<a.height&&(this.lastPageY=e.pageY,this.container.style.top=r+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=r+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,b.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return P()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return P()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:oe}};const Ae={class:"p-dialog-header-icons"},Ke=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Te={key:1,class:"p-dialog-footer"};function Be(e,t,l,u,o,n){const d=U("ripple");return i(),s(te,{to:n.appendTarget,disabled:n.appendDisabled},[o.containerVisible?(i(),s("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...r)=>n.onMaskClick&&n.onMaskClick(...r))},[c(z,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:y(()=>[l.visible?(i(),s("div",H({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":l.modal}),[l.showHeader?(i(),s("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...r)=>n.initDrag&&n.initDrag(...r))},[M(e.$slots,"header",{},()=>[l.header?(i(),s("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},v(l.header),9,["id"])):m("",!0)]),c("div",Ae,[l.maximizable?S((i(),s("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...r)=>n.maximize&&n.maximize(...r)),type:"button",tabindex:"-1"},[c("span",{class:n.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),l.closable?S((i(),s("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...r)=>n.close&&n.close(...r)),"aria-label":l.ariaCloseLabel,type:"button",tabindex:"-1"},[Ke],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),c("div",{class:n.contentStyleClass,style:l.contentStyle},[M(e.$slots,"default")],6),l.footer||e.$slots.footer?(i(),s("div",Te,[M(e.$slots,"footer",{},()=>[ne(v(l.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function Pe(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var u=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",l==="top"&&u.firstChild?u.insertBefore(o,u.firstChild):u.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Ve=`
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
`;Pe(Ve);W.render=Be;const Me={class:"flex"},je={class:"flex-col"},Ne={class:"flex-col p-8"},Fe=L({props:{id:null},setup(e){const t=e,l=se(),o=ie().load(t.id),n=o.title?o.title:"Unbenannter Vertrag",d=I(n),r=I(n),a=I(!1),p=()=>{r.value=d.value,a.value=!0},g=()=>{a.value=!1,d.value=r.value,o.title=r.value},k=_=>{const f=_.target;f==null||f.select()},w=async()=>{await l.save(o)};return Z(()=>{o.title||p()}),(_,f)=>{const J=U("focus");return i(),T("div",Me,[x("nav",je,[c(ze,{modules:h(o).getModules(),onSave:w},null,8,["modules"])]),x("main",Ne,[c(h(W),{id:"dialog-contract-title",visible:a.value,"onUpdate:visible":f[1]||(f[1]=K=>a.value=K),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:y(()=>[c(h(A),{label:"OK",icon:"pi pi-check",onClick:g})]),default:y(()=>[S(c(h(N),{id:"input-contract-title",modelValue:r.value,"onUpdate:modelValue":f[0]||(f[0]=K=>r.value=K),title:"Titel des Vertrags",type:"text",onFocus:k,onKeyup:ae(g,["enter"])},null,8,["modelValue","onKeyup"]),[[J]])]),_:1},8,["visible"]),x("section",null,[c(h(A),{class:"p-button-link",onClick:p},{default:y(()=>[x("span",null,v(d.value),1)]),_:1})]),c(z,{name:"fade",mode:"out-in"},{default:y(()=>[c(he,{contract:h(o)},null,8,["contract"])]),_:1})])])}}});var Ye=j(Fe,[["__scopeId","data-v-65cd11b1"]]);const Ze=L({props:{id:null},setup(e){return(t,l)=>(i(),s(Ye,{id:e.id},null,8,["id"]))}});export{Ze as default};
