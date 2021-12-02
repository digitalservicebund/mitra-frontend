var xe=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var F=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))ve.call(t,n)&&F(e,n,t[n]);if(ee)for(var n of ee(t))ke.call(t,n)&&F(e,n,t[n]);return e};var B=(e,t,n)=>(F(e,typeof t!="symbol"?t+"":t,n),n);import{f as E,o as s,e as T,t as w,c as r,m as ne,g as L,h as C,i as c,u as x,F as I,D as p,j,w as D,k as K,l as m,n as M,p as H,U as O,r as V,q as ie,s as _,v as ae,T as N,x as le,Z as U,y as we,z as Ce,A as _e}from"./vendor.d25256ee.js";import{_ as X}from"./index.2ee6a8f4.js";var R,Se=new Uint8Array(16);function Ie(){if(!R&&(R=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(Se)}var Ee=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Le(e){return typeof e=="string"&&Ee.test(e)}var g=[];for(var Z=0;Z<256;++Z)g.push((Z+256).toString(16).substr(1));function De(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!Le(n))throw TypeError("Stringified UUID is invalid");return n}function Ae(e,t,n){e=e||{};var o=e.random||(e.rng||Ie)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){n=n||0;for(var l=0;l<16;++l)t[n+l]=o[l];return t}return De(o)}const Te=e=>e instanceof z;class z{constructor(){B(this,"id");this.id=Ae()}equals(t){return t==null?!1:this===t?!0:Te(t)?this.id===t.id:!1}}class Y extends z{constructor(t,n){super();this.title=t,this.playbook=n}static fromPlaybook(t){return new Y("",t)}getFirstUnansweredStep(){return this.playbook.modules.flatMap(t=>t.steps).find(t=>t.isUnanswered())}getAllSteps(){return this.playbook.modules.flatMap(t=>t.steps)}getAllModules(){return this.playbook.modules}getModuleFor(t){return this.playbook.modules.find(n=>n.steps.find(o=>o.equals(t)))}}class ze{getAnswer(){return""}setAnswer(){}}class Pe{constructor(t){this.answer=t}getAnswer(){return this.answer}setAnswer(t){this.answer=t}}class se extends z{constructor(t,n){super();this.text=t,this.answer=n}getAnswer(){return this.answer.getAnswer()||""}setAnswer(t){this.answer.setAnswer(t)}isUnanswered(){return!this.answer.getAnswer()}}const J=class extends se{constructor(t){super(t,new ze)}getType(){return J.TYPE}};let q=J;B(q,"TYPE","InformationalStep");const Q=class extends se{constructor(t){super(t,new Pe)}getType(){return Q.TYPE}};let k=Q;B(k,"TYPE","TextAnswerStep");const Be={class:"mb-4"},Ke=E({props:{text:null},setup(e){return(t,n)=>(s(),T("p",Be,w(e.text),1))}});var G={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Me(e,t,n,o,l,i){return s(),r("input",ne({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...d)=>i.onInput&&i.onInput(...d))},e.$attrs),null,16,["value"])}G.render=Me;const Ve={class:"mb-4"},Ne={class:"mb-4"},Re=E({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const o=L(e.step.getAnswer());return(l,i)=>(s(),T(I,null,[C("div",Ve,w(e.step.text),1),C("div",Ne,[c(x(G),{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=d=>o.value=d),title:e.step.text,class:"w-full",type:"text",onInput:i[1]||(i[1]=d=>t("answerChanged",o.value))},null,8,["modelValue","title"])])],64))}});function Ye(e){e.addEventListener("mousedown",oe)}function Fe(e){e.removeEventListener("mousedown",oe)}function je(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",re)}function He(e){let t=de(e);t&&(Fe(e),t.removeEventListener("animationend",re),t.remove())}function oe(e){let t=e.currentTarget,n=de(t);if(!n||getComputedStyle(n,null).display==="none")return;if(p.removeClass(n,"p-ink-active"),!p.getHeight(n)&&!p.getWidth(n)){let d=Math.max(p.getOuterWidth(t),p.getOuterHeight(t));n.style.height=d+"px",n.style.width=d+"px"}let o=p.getOffset(t),l=e.pageX-o.left+document.body.scrollTop-p.getWidth(n)/2,i=e.pageY-o.top+document.body.scrollLeft-p.getHeight(n)/2;n.style.top=i+"px",n.style.left=l+"px",p.addClass(n,"p-ink-active")}function re(e){p.removeClass(e.currentTarget,"p-ink-active")}function de(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const ce={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(je(e),Ye(e))},unmounted(e){He(e)}};var P={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ce}};const Oe={class:"p-button-label"};function Ue(e,t,n,o,l,i){const d=j("ripple");return D((s(),r("button",{class:i.buttonClass,type:"button",disabled:i.disabled},[K(e.$slots,"default",{},()=>[n.loading&&!n.icon?(s(),r("span",{key:0,class:i.iconClass},null,2)):m("",!0),n.icon?(s(),r("span",{key:1,class:i.iconClass},null,2)):m("",!0),c("span",Oe,w(n.label||"\xA0"),1),n.badge?(s(),r("span",{key:2,class:i.badgeStyleClass},w(n.badge),3)):m("",!0)])],10,["disabled"])),[[d]])}P.render=Ue;const Xe={class:"font-bold"},Ze={class:"w-[30vw]"},qe={class:"grid grid-cols-3 col-span-full"},Ge=E({props:{contract:null},setup(e){const t=e,n=L(t.contract.getFirstUnansweredStep()),o=M(()=>{if(n.value===void 0)return null;const b=n.value.getType();return b===k.TYPE?Re:b===q.TYPE?Ke:null}),l=t.contract.getAllSteps(),i=h=>{var b;return h.id===((b=n.value)==null?void 0:b.id)},d=()=>{const h=l.findIndex(i);h>0&&(n.value=l[h-1])},u=()=>{const h=l.findIndex(i);h<l.length-1&&(n.value=l[h+1])},a=M(()=>l.findIndex(i)>0),f=M(()=>l.findIndex(i)<l.length-1),v=M(()=>t.contract.getModuleFor(n.value));return(h,b)=>{var y,S;return s(),T("section",{key:(y=n.value)==null?void 0:y.id},[C("h3",Xe,w((S=x(v))==null?void 0:S.text),1),C("div",Ze,[(s(),r(H(x(o)),{step:n.value,onAnswerChanged:b[0]||(b[0]=A=>{var $;return($=n.value)==null?void 0:$.setAnswer(A)})},null,8,["step"])),C("div",qe,[x(a)?(s(),r(x(P),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:d})):m("",!0),x(f)?(s(),r(x(P),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:u})):m("",!0)])])])}}});var We=X(Ge,[["__scopeId","data-v-6077185c"]]),ue={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Je={class:"p-submenu-list",role:"tree"},Qe={class:"p-menuitem-text"},$e={class:"p-menuitem-text"},et={class:"p-toggleable-content"};function tt(e,t,n,o,l,i){const d=V("router-link"),u=V("PanelMenuSub",!0);return s(),r("ul",Je,[(s(!0),r(I,null,ie(n.model,(a,f)=>(s(),r(I,{key:i.label(a)+f.toString()},[i.visible(a)&&!a.separator?(s(),r("li",{key:0,role:"none",class:i.getItemClass(a),style:a.style},[n.template?(s(),r(H(n.template),{key:1,item:a},null,8,["item"])):(s(),r(I,{key:0},[a.to&&!i.disabled(a)?(s(),r(d,{key:0,to:a.to,custom:""},{default:_(({navigate:v,href:h,isActive:b,isExactActive:y})=>[c("a",{href:h,class:i.linkClass(a,{isRouterActive:b,isExactActive:y}),onClick:S=>i.onItemClick(S,a,v),role:"treeitem","aria-expanded":i.isActive(a)},[c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",Qe,w(i.label(a)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:a.url,class:i.linkClass(a),target:a.target,onClick:v=>i.onItemClick(v,a),role:"treeitem","aria-expanded":i.isActive(a),tabindex:i.disabled(a)?null:"0"},[a.items?(s(),r("span",{key:0,class:i.getSubmenuIcon(a)},null,2)):m("",!0),c("span",{class:["p-menuitem-icon",a.icon]},null,2),c("span",$e,w(i.label(a)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),c(N,{name:"p-toggleable-content"},{default:_(()=>[D(c("div",et,[i.visible(a)&&a.items?(s(),r(u,{model:a.items,key:i.label(a)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=v=>e.$emit("item-toggle",v)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[ae,i.isActive(a)]])]),_:2},1024)],6)):m("",!0),i.visible(a)&&a.separator?(s(),r("li",{class:["p-menu-separator",a.class],style:a.style,key:"separator"+f.toString()},null,6)):m("",!0)],64))),128))])}ue.render=tt;var pe={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=te({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:ue},computed:{ariaId(){return O()}}};const nt={class:"p-panelmenu p-component"},it={class:"p-menuitem-text"},at={class:"p-menuitem-text"},lt={key:0,class:"p-panelmenu-content"};function st(e,t,n,o,l,i){const d=V("router-link"),u=V("PanelMenuSub");return s(),r("div",nt,[(s(!0),r(I,null,ie(n.model,(a,f)=>(s(),r(I,{key:i.label(a)+"_"+f},[i.visible(a)?(s(),r("div",{key:0,class:i.getPanelClass(a),style:a.style},[c("div",{class:i.getHeaderClass(a),style:a.style},[e.$slots.item?(s(),r(H(e.$slots.item),{key:1,item:a},null,8,["item"])):(s(),r(I,{key:0},[a.to&&!i.disabled(a)?(s(),r(d,{key:0,to:a.to,custom:""},{default:_(({navigate:v,href:h,isActive:b,isExactActive:y})=>[c("a",{href:h,class:i.getHeaderLinkClass(a,{isActive:b,isExactActive:y}),onClick:S=>i.onItemClick(S,a,v),role:"treeitem"},[a.icon?(s(),r("span",{key:0,class:i.getPanelIcon(a)},null,2)):m("",!0),c("span",it,w(i.label(a)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),r("a",{key:1,href:a.url,class:i.getHeaderLinkClass(a),onClick:v=>i.onItemClick(v,a),tabindex:i.disabled(a)?null:"0","aria-expanded":i.isActive(a),id:i.ariaId+"_header","aria-controls":i.ariaId+"_content"},[a.items?(s(),r("span",{key:0,class:i.getPanelToggleIcon(a)},null,2)):m("",!0),a.icon?(s(),r("span",{key:1,class:i.getPanelIcon(a)},null,2)):m("",!0),c("span",at,w(i.label(a)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),c(N,{name:"p-toggleable-content"},{default:_(()=>[D(c("div",{class:"p-toggleable-content",role:"region",id:i.ariaId+"_content","aria-labelledby":i.ariaId+"_header"},[a.items?(s(),r("div",lt,[c(u,{model:a.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:i.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[ae,i.isActive(a)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function ot(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var rt=`
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
`;ot(rt);pe.render=st;const dt=E({props:{modules:null},emits:["save"],setup(e,{emit:t}){const l=L((i=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:i.map((d,u)=>({label:`${u+1}. ${d.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return le(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((d,u)=>{const a=d.querySelector(".p-toggleable-content");(a==null?void 0:a.id)&&(a.id+=`_${u+1}`);const f=d.querySelector(".p-panelmenu-header-link");(f==null?void 0:f.id)?(f.id+=`_${u+1}`,a==null||a.setAttribute("aria-labelledby",f.id)):a==null||a.removeAttribute("aria-labelledby")})}),(i,d)=>(s(),T("nav",null,[c(x(pe),{model:l.value,class:"w-70"},null,8,["model"])]))}});var ct=X(dt,[["__scopeId","data-v-1dd91fff"]]);class me extends z{constructor(t=[]){super();this.modules=t}addModules(...t){this.modules.push(...t)}}class W extends z{constructor(t,n=[]){super();this.text=t,this.steps=n}addSteps(...t){this.steps.push(...t)}}const ut=new k("Schritt 1.1"),pt=new k("Schritt 1.2"),mt=new k("Schritt 1.3"),gt=new k("Schritt 2.1"),ft=new k("Schritt 2.2"),ht=new k("Schritt 2.3"),bt=new k("Schritt 3.1"),yt=new k("Schritt 3.2"),xt=new k("Schritt 3.3"),vt=new k("Schritt 3.4"),ge=new W("Rubrum"),fe=new W("Gegenstand und Bestandteile des Vertrags"),he=new W("Gegenstand der Leistungen");ge.addSteps(ut,pt,mt);fe.addSteps(gt,ft,ht);he.addSteps(bt,yt,xt,vt);const be=new me;be.addModules(ge,fe,he);const kt={load(){return be},save(){}};function wt(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function Ct(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const _t={load(){return new Y("",new me)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:wt(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await Ct(t,JSON.stringify(e))}}},St=()=>kt,It=()=>_t;var ye={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&U.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&U.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&U.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),n=p.getOuterHeight(this.container),o=e.pageX-this.lastPageX,l=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),d=i.left+o,u=i.top+l,a=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=d+"px"),u>=this.minY&&u+n<a.height&&(this.lastPageY=e.pageY,this.container.style.top=u+"px")):(this.lastPageX=e.pageX,this.container.style.left=d+"px",this.lastPageY=e.pageY,this.container.style.top=u+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return O()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return O()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ce}};const Et={class:"p-dialog-header-icons"},Lt=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),Dt={key:1,class:"p-dialog-footer"};function At(e,t,n,o,l,i){const d=j("ripple");return s(),r(we,{to:i.appendTarget,disabled:i.appendDisabled},[l.containerVisible?(s(),r("div",{key:0,ref:i.maskRef,class:i.maskClass,onClick:t[4]||(t[4]=(...u)=>i.onMaskClick&&i.onMaskClick(...u))},[c(N,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:_(()=>[n.visible?(s(),r("div",ne({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(s(),r("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...u)=>i.initDrag&&i.initDrag(...u))},[K(e.$slots,"header",{},()=>[n.header?(s(),r("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},w(n.header),9,["id"])):m("",!0)]),c("div",Et,[n.maximizable?D((s(),r("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...u)=>i.maximize&&i.maximize(...u)),type:"button",tabindex:"-1"},[c("span",{class:i.maximizeIconClass},null,2)],512)),[[d]]):m("",!0),n.closable?D((s(),r("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...u)=>i.close&&i.close(...u)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[Lt],8,["aria-label"])),[[d]]):m("",!0)])],32)):m("",!0),c("div",{class:i.contentStyleClass,style:n.contentStyle},[K(e.$slots,"default")],6),n.footer||e.$slots.footer?(s(),r("div",Dt,[K(e.$slots,"footer",{},()=>[Ce(w(n.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function Tt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var zt=`
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
`;Tt(zt);ye.render=At;const Pt={class:"flex"},Bt={class:"flex-col"},Kt={class:"flex-col p-8"},Mt=E({setup(e){const t=St(),n=It(),o=Y.fromPlaybook(t.load()),l="Unbenannter Vertrag",i=L(l),d=L(l),u=L(!1),a=()=>{d.value=i.value,u.value=!0},f=()=>{u.value=!1,i.value=d.value,o.title=d.value},v=b=>{const y=b.target;y==null||y.select()},h=async()=>{await n.save(o)};return le(a),(b,y)=>{const S=j("focus");return s(),T("div",Pt,[C("div",Bt,[c(ct,{modules:x(o).getAllModules(),onSave:h},null,8,["modules"])]),C("div",Kt,[c(x(ye),{id:"dialog-contract-title",visible:u.value,"onUpdate:visible":y[1]||(y[1]=A=>u.value=A),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:_(()=>[c(x(P),{label:"OK",icon:"pi pi-check",onClick:f})]),default:_(()=>[D(c(x(G),{id:"input-contract-title",modelValue:d.value,"onUpdate:modelValue":y[0]||(y[0]=A=>d.value=A),title:"Titel des Vertrags",type:"text",onFocus:v,onKeyup:_e(f,["enter"])},null,8,["modelValue","onKeyup"]),[[S]])]),_:1},8,["visible"]),C("section",null,[c(x(P),{class:"p-button-link",onClick:a},{default:_(()=>[C("span",null,w(i.value),1)]),_:1})]),c(N,{name:"fade",mode:"out-in"},{default:_(()=>[c(We,{contract:x(o)},null,8,["contract"])]),_:1})])])}}});var Vt=X(Mt,[["__scopeId","data-v-00491bde"]]);const Ft=E({setup(e){return(t,n)=>(s(),r(Vt))}});export{Ft as default};
