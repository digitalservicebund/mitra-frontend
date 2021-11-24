var te=Object.defineProperty;var O=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var A=(e,t,i)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,X=(e,t)=>{for(var i in t||(t={}))ne.call(t,i)&&A(e,i,t[i]);if(O)for(var i of O(t))ie.call(t,i)&&A(e,i,t[i]);return e};var M=(e,t,i)=>(A(e,typeof t!="symbol"?t+"":t,i),i);import{e as S,o as l,f as C,g as E,F as x,h as k,t as f,U as V,r as D,c as s,w as b,i as d,j as m,k as Y,l as _,v as R,T as j,m as z,n as F,u as y,D as u,p as N,q as B,Z as H,s as Z,x as ae,y as le,z as se}from"./vendor.e89264f2.js";import{A as oe}from"./AppHeader.20fd2ba6.js";import"./index.479cc411.js";class K{constructor(t){M(this,"name");M(this,"playbook");this.name="",this.playbook=t}static fromPlaybook(t){return new K(t)}get getModules(){return this.playbook.modules}}const re=S({props:{contract:null},setup(e){return(t,i)=>(l(!0),C(x,null,E(e.contract.playbook.modules,r=>(l(),C("section",{key:r.text},[k("h3",null,[k("strong",null,f(r.text),1)]),(l(!0),C(x,null,E(r.steps,o=>(l(),C("div",{key:o.text},f(o.text),1))),128))]))),128))}});var G={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,i){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&i&&i(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const de={class:"p-submenu-list",role:"tree"},ce={class:"p-menuitem-text"},ue={class:"p-menuitem-text"},pe={class:"p-toggleable-content"};function me(e,t,i,r,o,n){const c=D("router-link"),p=D("PanelMenuSub",!0);return l(),s("ul",de,[(l(!0),s(x,null,E(i.model,(a,v)=>(l(),s(x,{key:n.label(a)+v.toString()},[n.visible(a)&&!a.separator?(l(),s("li",{key:0,role:"none",class:n.getItemClass(a),style:a.style},[i.template?(l(),s(Y(i.template),{key:1,item:a},null,8,["item"])):(l(),s(x,{key:0},[a.to&&!n.disabled(a)?(l(),s(c,{key:0,to:a.to,custom:""},{default:b(({navigate:h,href:I,isActive:w,isExactActive:g})=>[d("a",{href:I,class:n.linkClass(a,{isRouterActive:w,isExactActive:g}),onClick:L=>n.onItemClick(L,a,h),role:"treeitem","aria-expanded":n.isActive(a)},[d("span",{class:["p-menuitem-icon",a.icon]},null,2),d("span",ce,f(n.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:a.url,class:n.linkClass(a),target:a.target,onClick:h=>n.onItemClick(h,a),role:"treeitem","aria-expanded":n.isActive(a),tabindex:n.disabled(a)?null:"0"},[a.items?(l(),s("span",{key:0,class:n.getSubmenuIcon(a)},null,2)):m("",!0),d("span",{class:["p-menuitem-icon",a.icon]},null,2),d("span",ue,f(n.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),d(j,{name:"p-toggleable-content"},{default:b(()=>[_(d("div",pe,[n.visible(a)&&a.items?(l(),s(p,{model:a.items,key:n.label(a)+"_sub_",template:i.template,expandedKeys:i.expandedKeys,onItemToggle:t[1]||(t[1]=h=>e.$emit("item-toggle",h)),exact:i.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[R,n.isActive(a)]])]),_:2},1024)],6)):m("",!0),n.visible(a)&&a.separator?(l(),s("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+v.toString()},null,6)):m("",!0)],64))),128))])}G.render=me;var U={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,i){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&i&&i(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,i=X({},this.expandedKeys);e.expanded?i[t.key]=!0:delete i[t.key],this.$emit("update:expandedKeys",i)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:G},computed:{ariaId(){return V()}}};const ge={class:"p-panelmenu p-component"},he={class:"p-menuitem-text"},fe={class:"p-menuitem-text"},be={key:0,class:"p-panelmenu-content"};function xe(e,t,i,r,o,n){const c=D("router-link"),p=D("PanelMenuSub");return l(),s("div",ge,[(l(!0),s(x,null,E(i.model,(a,v)=>(l(),s(x,{key:n.label(a)+"_"+v},[n.visible(a)?(l(),s("div",{key:0,class:n.getPanelClass(a),style:a.style},[d("div",{class:n.getHeaderClass(a),style:a.style},[e.$slots.item?(l(),s(Y(e.$slots.item),{key:1,item:a},null,8,["item"])):(l(),s(x,{key:0},[a.to&&!n.disabled(a)?(l(),s(c,{key:0,to:a.to,custom:""},{default:b(({navigate:h,href:I,isActive:w,isExactActive:g})=>[d("a",{href:I,class:n.getHeaderLinkClass(a,{isActive:w,isExactActive:g}),onClick:L=>n.onItemClick(L,a,h),role:"treeitem"},[a.icon?(l(),s("span",{key:0,class:n.getPanelIcon(a)},null,2)):m("",!0),d("span",he,f(n.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:a.url,class:n.getHeaderLinkClass(a),onClick:h=>n.onItemClick(h,a),tabindex:n.disabled(a)?null:"0","aria-expanded":n.isActive(a),id:n.ariaId+"_header","aria-controls":n.ariaId+"_content"},[a.items?(l(),s("span",{key:0,class:n.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(l(),s("span",{key:1,class:n.getPanelIcon(a)},null,2)):m("",!0),d("span",fe,f(n.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),d(j,{name:"p-toggleable-content"},{default:b(()=>[_(d("div",{class:"p-toggleable-content",role:"region",id:n.ariaId+"_content","aria-labelledby":n.ariaId+"_header"},[a.items?(l(),s("div",be,[d(p,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:i.expandedKeys,onItemToggle:n.updateExpandedKeys,exact:i.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[R,n.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function ye(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",i==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var ve=`
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
`;ye(ve);U.render=xe;const ke=S({props:{modules:null},setup(e){const r=z((o=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:o.map((n,c)=>({label:`${c+1}. ${n.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",to:{name:"mitra-frontend"},icon:"pi pi-fw pi-download"}])(e.modules));return F(()=>{document.querySelectorAll(".p-toggleable-content").forEach((n,c)=>n.id&&(n.id+=`_${c+1}`))}),(o,n)=>(l(),C("nav",null,[d(y(U),{model:r.value,class:"w-70"},null,8,["model"])]))}}),we={modules:[{text:"Rubrum",steps:[{text:"Schritt 1.1"},{text:"Schritt 1.2"},{text:"Schritt 1.3"}]},{text:"Gegenstand und Bestandteile des Vertrags",steps:[{text:"Schritt 2.1"},{text:"Schritt 2.2"},{text:"Schritt 2.3"}]},{text:"Gegenstand der Leistungen",steps:[{text:"Schritt 3.1"},{text:"Schritt 3.2"},{text:"Schritt 3.3"},{text:"Schritt 3.4"}]}]},Ce={load(){return we},save(){}},_e={load(){return new K({modules:[]})},save(e){console.log(JSON.stringify(e))}},Ie=()=>Ce,Le=()=>_e;function Se(e){e.addEventListener("mousedown",W)}function Ee(e){e.removeEventListener("mousedown",W)}function De(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",q)}function ze(e){let t=J(e);t&&(Ee(e),t.removeEventListener("animationend",q),t.remove())}function W(e){let t=e.currentTarget,i=J(t);if(!i||getComputedStyle(i,null).display==="none")return;if(u.removeClass(i,"p-ink-active"),!u.getHeight(i)&&!u.getWidth(i)){let c=Math.max(u.getOuterWidth(t),u.getOuterHeight(t));i.style.height=c+"px",i.style.width=c+"px"}let r=u.getOffset(t),o=e.pageX-r.left+document.body.scrollTop-u.getWidth(i)/2,n=e.pageY-r.top+document.body.scrollLeft-u.getHeight(i)/2;i.style.top=n+"px",i.style.left=o+"px",u.addClass(i,"p-ink-active")}function q(e){u.removeClass(e.currentTarget,"p-ink-active")}function J(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const Q={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(De(e),Se(e))},unmounted(e){ze(e)}};var T={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:Q}};const Be={class:"p-button-label"};function Ke(e,t,i,r,o,n){const c=N("ripple");return _((l(),s("button",{class:n.buttonClass,type:"button",disabled:n.disabled},[B(e.$slots,"default",{},()=>[i.loading&&!i.icon?(l(),s("span",{key:0,class:n.iconClass},null,2)):m("",!0),i.icon?(l(),s("span",{key:1,class:n.iconClass},null,2)):m("",!0),d("span",Be,f(i.label||"\xA0"),1),i.badge?(l(),s("span",{key:2,class:n.badgeStyleClass},f(i.badge),3)):m("",!0)])],10,["disabled"])),[[c]])}T.render=Ke;var $={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&H.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&H.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&u.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&H.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?u.addClass(document.body,"p-overflow-hidden"):u.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&u.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&u.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=u.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let i=t.indexOf(document.activeElement);e.shiftKey?i==-1||i===0?t[t.length-1].focus():t[i-1].focus():i==-1||i===t.length-1?t[0].focus():t[i+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){u.hasClass(e.target,"p-dialog-header-icon")||u.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",u.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=u.getOuterWidth(this.container),i=u.getOuterHeight(this.container),r=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),c=n.left+r,p=n.top+o,a=u.getViewport();this.container.style.position="fixed",this.keepInViewport?(c>=this.minX&&c+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=c+"px"),p>=this.minY&&p+i<a.height&&(this.lastPageY=e.pageY,this.container.style.top=p+"px")):(this.lastPageX=e.pageX,this.container.style.left=c+"px",this.lastPageY=e.pageY,this.container.style.top=p+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,u.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return V()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return V()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:Q}};const Te={class:"p-dialog-header-icons"},Pe=d("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Ae={key:1,class:"p-dialog-footer"};function Me(e,t,i,r,o,n){const c=N("ripple");return l(),s(le,{to:n.appendTarget,disabled:n.appendDisabled},[o.containerVisible?(l(),s("div",{key:0,ref:n.maskRef,class:n.maskClass,onClick:t[4]||(t[4]=(...p)=>n.onMaskClick&&n.onMaskClick(...p))},[d(j,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:b(()=>[i.visible?(l(),s("div",Z({key:0,ref:n.containerRef,class:n.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":i.modal}),[i.showHeader?(l(),s("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...p)=>n.initDrag&&n.initDrag(...p))},[B(e.$slots,"header",{},()=>[i.header?(l(),s("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},f(i.header),9,["id"])):m("",!0)]),d("div",Te,[i.maximizable?_((l(),s("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...p)=>n.maximize&&n.maximize(...p)),type:"button",tabindex:"-1"},[d("span",{class:n.maximizeIconClass},null,2)],512)),[[c]]):m("",!0),i.closable?_((l(),s("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...p)=>n.close&&n.close(...p)),"aria-label":i.ariaCloseLabel,type:"button",tabindex:"-1"},[Pe],8,["aria-label"])),[[c]]):m("",!0)])],32)):m("",!0),d("div",{class:n.contentStyleClass,style:i.contentStyle},[B(e.$slots,"default")],6),i.footer||e.$slots.footer?(l(),s("div",Ae,[B(e.$slots,"footer",{},()=>[ae(f(i.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function Ve(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",i==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var je=`
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
`;Ve(je);$.render=Me;var ee={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Ne(e,t,i,r,o,n){return l(),s("input",Z({class:["p-inputtext p-component",{"p-filled":n.filled}],value:i.modelValue,onInput:t[1]||(t[1]=(...c)=>n.onInput&&n.onInput(...c))},e.$attrs),null,16,["value"])}ee.render=Ne;const He={class:"flex"},Oe={class:"flex-col"},Xe={class:"flex-col p-8"},Ye=k("span",null,"Speichern",-1),Re=S({setup(e){const t=Ie(),i=Le(),r=K.fromPlaybook(t.load()),o="Unbenannter Vertrag",n=z(o),c=z(o),p=z(!1),a=()=>{c.value=n.value,p.value=!0},v=()=>{p.value=!1,n.value=c.value,r.name=c.value},h=w=>{const g=w.target;g==null||g.select()},I=()=>{i.save(r)};return F(a),(w,g)=>{const L=N("focus");return l(),C("div",He,[k("div",Oe,[d(ke,{modules:y(r).getModules},null,8,["modules"])]),k("div",Xe,[d(oe),d(y($),{id:"dialog-contract-title",visible:p.value,"onUpdate:visible":g[1]||(g[1]=P=>p.value=P),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:b(()=>[d(y(T),{label:"OK",icon:"pi pi-check",onClick:v})]),default:b(()=>[_(d(y(ee),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":g[0]||(g[0]=P=>c.value=P),title:"Titel des Vertrags",type:"text",onFocus:h,onKeyup:se(v,["enter"])},null,8,["modelValue","onKeyup"]),[[L]])]),_:1},8,["visible"]),k("section",null,[d(y(T),{class:"p-button-link",onClick:a},{default:b(()=>[k("span",null,f(n.value),1)]),_:1}),d(y(T),{class:"p-button-link",onClick:I},{default:b(()=>[Ye]),_:1})]),d(re,{contract:y(r)},null,8,["contract"])])])}}}),We=S({setup(e){return(t,i)=>(l(),s(Re))}});export{We as default};
