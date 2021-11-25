var de=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var V=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&V(e,n,t[n]);if(Y)for(var n of Y(t))ce.call(t,n)&&V(e,n,t[n]);return e};var C=(e,t,n)=>(V(e,typeof t!="symbol"?t+"":t,n),n);import{e as D,o as l,f as _,g as z,F as x,h as k,t as f,U as j,r as T,c as s,w as b,i as r,j as m,k as F,l as I,v as Z,T as N,m as B,n as G,u as y,D as u,p as H,q as K,Z as O,s as U,x as ue,y as pe,z as me}from"./vendor.e89264f2.js";import{A as ge}from"./AppHeader.69ab9d68.js";import"./index.c070be83.js";class P{constructor(t){C(this,"name");C(this,"playbook");this.name="",this.playbook=t}static fromPlaybook(t){return new P(t)}get getModules(){return this.playbook.modules}}const he=D({props:{contract:null},setup(e){return(t,n)=>(l(!0),_(x,null,z(e.contract.playbook.modules,d=>(l(),_("section",{key:d.text},[k("h3",null,[k("strong",null,f(d.text),1)]),(l(!0),_(x,null,z(d.steps,o=>(l(),_("div",{key:o.text},f(o.text),1))),128))]))),128))}});var W={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const fe={class:"p-submenu-list",role:"tree"},be={class:"p-menuitem-text"},xe={class:"p-menuitem-text"},ye={class:"p-toggleable-content"};function ve(e,t,n,d,o,i){const c=T("router-link"),p=T("PanelMenuSub",!0);return l(),s("ul",fe,[(l(!0),s(x,null,z(n.model,(a,v)=>(l(),s(x,{key:i.label(a)+v.toString()},[i.visible(a)&&!a.separator?(l(),s("li",{key:0,role:"none",class:i.getItemClass(a),style:a.style},[n.template?(l(),s(F(n.template),{key:1,item:a},null,8,["item"])):(l(),s(x,{key:0},[a.to&&!i.disabled(a)?(l(),s(c,{key:0,to:a.to,custom:""},{default:b(({navigate:h,href:S,isActive:w,isExactActive:g})=>[r("a",{href:S,class:i.linkClass(a,{isRouterActive:w,isExactActive:g}),onClick:L=>i.onItemClick(L,a,h),role:"treeitem","aria-expanded":i.isActive(a)},[r("span",{class:["p-menuitem-icon",a.icon]},null,2),r("span",be,f(i.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:a.url,class:i.linkClass(a),target:a.target,onClick:h=>i.onItemClick(h,a),role:"treeitem","aria-expanded":i.isActive(a),tabindex:i.disabled(a)?null:"0"},[a.items?(l(),s("span",{key:0,class:i.getSubmenuIcon(a)},null,2)):m("",!0),r("span",{class:["p-menuitem-icon",a.icon]},null,2),r("span",xe,f(i.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),r(N,{name:"p-toggleable-content"},{default:b(()=>[I(r("div",ye,[i.visible(a)&&a.items?(l(),s(p,{model:a.items,key:i.label(a)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=h=>e.$emit("item-toggle",h)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[Z,i.isActive(a)]])]),_:2},1024)],6)):m("",!0),i.visible(a)&&a.separator?(l(),s("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+v.toString()},null,6)):m("",!0)],64))),128))])}W.render=ve;var q={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=R({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:W},computed:{ariaId(){return j()}}};const ke={class:"p-panelmenu p-component"},we={class:"p-menuitem-text"},Ce={class:"p-menuitem-text"},_e={key:0,class:"p-panelmenu-content"};function Ie(e,t,n,d,o,i){const c=T("router-link"),p=T("PanelMenuSub");return l(),s("div",ke,[(l(!0),s(x,null,z(n.model,(a,v)=>(l(),s(x,{key:i.label(a)+"_"+v},[i.visible(a)?(l(),s("div",{key:0,class:i.getPanelClass(a),style:a.style},[r("div",{class:i.getHeaderClass(a),style:a.style},[e.$slots.item?(l(),s(F(e.$slots.item),{key:1,item:a},null,8,["item"])):(l(),s(x,{key:0},[a.to&&!i.disabled(a)?(l(),s(c,{key:0,to:a.to,custom:""},{default:b(({navigate:h,href:S,isActive:w,isExactActive:g})=>[r("a",{href:S,class:i.getHeaderLinkClass(a,{isActive:w,isExactActive:g}),onClick:L=>i.onItemClick(L,a,h),role:"treeitem"},[a.icon?(l(),s("span",{key:0,class:i.getPanelIcon(a)},null,2)):m("",!0),r("span",we,f(i.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(l(),s("a",{key:1,href:a.url,class:i.getHeaderLinkClass(a),onClick:h=>i.onItemClick(h,a),tabindex:i.disabled(a)?null:"0","aria-expanded":i.isActive(a),id:i.ariaId+"_header","aria-controls":i.ariaId+"_content"},[a.items?(l(),s("span",{key:0,class:i.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(l(),s("span",{key:1,class:i.getPanelIcon(a)},null,2)):m("",!0),r("span",Ce,f(i.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),r(N,{name:"p-toggleable-content"},{default:b(()=>[I(r("div",{class:"p-toggleable-content",role:"region",id:i.ariaId+"_content","aria-labelledby":i.ariaId+"_header"},[a.items?(l(),s("div",_e,[r(p,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:i.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[Z,i.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Se(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Le=`
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
`;Se(Le);q.render=Ie;const Ee=D({props:{modules:null},setup(e){const d=B((o=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:o.map((i,c)=>({label:`${c+1}. ${i.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",to:{name:"mitra-frontend"},icon:"pi pi-fw pi-download"}])(e.modules));return G(()=>{document.querySelectorAll(".p-toggleable-content").forEach((i,c)=>i.id&&(i.id+=`_${c+1}`))}),(o,i)=>(l(),_("nav",null,[r(y(q),{model:d.value,class:"w-70"},null,8,["model"])]))}});class J{constructor(){C(this,"modules");this.modules=[]}addModule(t){this.modules.push(t)}addModules(...t){t.forEach(n=>this.addModule(n))}}class X{constructor(t){C(this,"text");C(this,"steps");this.text=t,this.steps=[]}addStep(t){this.steps.push(t)}addSteps(...t){t.forEach(n=>this.addStep(n))}}var E;(function(e){e.Text="TEXT"})(E||(E={}));const De={type:E.Text,text:"Schritt 1.1"},ze={type:E.Text,text:"Schritt 1.2"},Te={text:"Schritt 1.3"},Be={type:E.Text,text:"Schritt 2.1"},Ke={text:"Schritt 2.2"},Pe={text:"Schritt 2.3"},Ae={text:"Schritt 3.1"},Me={text:"Schritt 3.2"},Ve={text:"Schritt 3.3"},je={text:"Schritt 3.4"},Q=new X("Rubrum"),$=new X("Gegenstand und Bestandteile des Vertrags"),ee=new X("Gegenstand der Leistungen");Q.addSteps(De,ze,Te);$.addSteps(Be,Ke,Pe);ee.addSteps(Ae,Me,Ve,je);const te=new J;te.addModules(Q,$,ee);const Ne={load(){return te},save(){}},He={load(){return new P(new J)},save(e){console.log(JSON.stringify(e))}},Oe=()=>Ne,Xe=()=>He;function Ye(e){e.addEventListener("mousedown",ne)}function Re(e){e.removeEventListener("mousedown",ne)}function Fe(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",ie)}function Ze(e){let t=ae(e);t&&(Re(e),t.removeEventListener("animationend",ie),t.remove())}function ne(e){let t=e.currentTarget,n=ae(t);if(!n||getComputedStyle(n,null).display==="none")return;if(u.removeClass(n,"p-ink-active"),!u.getHeight(n)&&!u.getWidth(n)){let c=Math.max(u.getOuterWidth(t),u.getOuterHeight(t));n.style.height=c+"px",n.style.width=c+"px"}let d=u.getOffset(t),o=e.pageX-d.left+document.body.scrollTop-u.getWidth(n)/2,i=e.pageY-d.top+document.body.scrollLeft-u.getHeight(n)/2;n.style.top=i+"px",n.style.left=o+"px",u.addClass(n,"p-ink-active")}function ie(e){u.removeClass(e.currentTarget,"p-ink-active")}function ae(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const le={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(Fe(e),Ye(e))},unmounted(e){Ze(e)}};var A={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:le}};const Ge={class:"p-button-label"};function Ue(e,t,n,d,o,i){const c=H("ripple");return I((l(),s("button",{class:i.buttonClass,type:"button",disabled:i.disabled},[K(e.$slots,"default",{},()=>[n.loading&&!n.icon?(l(),s("span",{key:0,class:i.iconClass},null,2)):m("",!0),n.icon?(l(),s("span",{key:1,class:i.iconClass},null,2)):m("",!0),r("span",Ge,f(n.label||"\xA0"),1),n.badge?(l(),s("span",{key:2,class:i.badgeStyleClass},f(n.badge),3)):m("",!0)])],10,["disabled"])),[[c]])}A.render=Ue;var se={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&O.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&O.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&u.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&O.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?u.addClass(document.body,"p-overflow-hidden"):u.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&u.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&u.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=u.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){u.hasClass(e.target,"p-dialog-header-icon")||u.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",u.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=u.getOuterWidth(this.container),n=u.getOuterHeight(this.container),d=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),c=i.left+d,p=i.top+o,a=u.getViewport();this.container.style.position="fixed",this.keepInViewport?(c>=this.minX&&c+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=c+"px"),p>=this.minY&&p+n<a.height&&(this.lastPageY=e.pageY,this.container.style.top=p+"px")):(this.lastPageX=e.pageX,this.container.style.left=c+"px",this.lastPageY=e.pageY,this.container.style.top=p+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,u.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return j()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return j()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:le}};const We={class:"p-dialog-header-icons"},qe=r("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Je={key:1,class:"p-dialog-footer"};function Qe(e,t,n,d,o,i){const c=H("ripple");return l(),s(pe,{to:i.appendTarget,disabled:i.appendDisabled},[o.containerVisible?(l(),s("div",{key:0,ref:i.maskRef,class:i.maskClass,onClick:t[4]||(t[4]=(...p)=>i.onMaskClick&&i.onMaskClick(...p))},[r(N,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:b(()=>[n.visible?(l(),s("div",U({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(l(),s("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...p)=>i.initDrag&&i.initDrag(...p))},[K(e.$slots,"header",{},()=>[n.header?(l(),s("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},f(n.header),9,["id"])):m("",!0)]),r("div",We,[n.maximizable?I((l(),s("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...p)=>i.maximize&&i.maximize(...p)),type:"button",tabindex:"-1"},[r("span",{class:i.maximizeIconClass},null,2)],512)),[[c]]):m("",!0),n.closable?I((l(),s("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...p)=>i.close&&i.close(...p)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[qe],8,["aria-label"])),[[c]]):m("",!0)])],32)):m("",!0),r("div",{class:i.contentStyleClass,style:n.contentStyle},[K(e.$slots,"default")],6),n.footer||e.$slots.footer?(l(),s("div",Je,[K(e.$slots,"footer",{},()=>[ue(f(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function $e(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var et=`
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
`;$e(et);se.render=Qe;var oe={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function tt(e,t,n,d,o,i){return l(),s("input",U({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...c)=>i.onInput&&i.onInput(...c))},e.$attrs),null,16,["value"])}oe.render=tt;const nt={class:"flex"},it={class:"flex-col"},at={class:"flex-col p-8"},lt=k("span",null,"Speichern",-1),st=D({setup(e){const t=Oe(),n=Xe(),d=P.fromPlaybook(t.load()),o="Unbenannter Vertrag",i=B(o),c=B(o),p=B(!1),a=()=>{c.value=i.value,p.value=!0},v=()=>{p.value=!1,i.value=c.value,d.name=c.value},h=w=>{const g=w.target;g==null||g.select()},S=()=>{n.save(d)};return G(a),(w,g)=>{const L=H("focus");return l(),_("div",nt,[k("div",it,[r(Ee,{modules:y(d).getModules},null,8,["modules"])]),k("div",at,[r(ge),r(y(se),{id:"dialog-contract-title",visible:p.value,"onUpdate:visible":g[1]||(g[1]=M=>p.value=M),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:b(()=>[r(y(A),{label:"OK",icon:"pi pi-check",onClick:v})]),default:b(()=>[I(r(y(oe),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":g[0]||(g[0]=M=>c.value=M),title:"Titel des Vertrags",type:"text",onFocus:h,onKeyup:me(v,["enter"])},null,8,["modelValue","onKeyup"]),[[L]])]),_:1},8,["visible"]),k("section",null,[r(y(A),{class:"p-button-link",onClick:a},{default:b(()=>[k("span",null,f(i.value),1)]),_:1}),r(y(A),{class:"p-button-link",onClick:S},{default:b(()=>[lt]),_:1})]),r(he,{contract:y(d)},null,8,["contract"])])])}}}),ut=D({setup(e){return(t,n)=>(l(),s(st))}});export{ut as default};
