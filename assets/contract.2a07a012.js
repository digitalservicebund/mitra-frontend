var fe=Object.defineProperty;var $=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&j(e,n,t[n]);if($)for(var n of $(t))be.call(t,n)&&j(e,n,t[n]);return e};var P=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{m as E,o as l,p as A,t as w,c as o,s as te,n as L,q as _,h as u,u as b,F as S,x as B,y as F,g as p,U as N,r as K,l as ne,w as C,j as z,v as ae,T as V,z as ie,Z as U,D as y,i as le,e as H,A as xe,f as ye,k as ve}from"./vendor.c6f07d2e.js";import{s as M,R as ke}from"./button.esm.aade555f.js";import{_ as X}from"./index.a27cd4e0.js";var R,we=new Uint8Array(16);function _e(){if(!R&&(R=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(we)}var Ce=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ie(e){return typeof e=="string"&&Ce.test(e)}var m=[];for(var O=0;O<256;++O)m.push((O+256).toString(16).substr(1));function Se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!Ie(n))throw TypeError("Stringified UUID is invalid");return n}function Ee(e,t,n){e=e||{};var s=e.random||(e.rng||_e)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=s[r];return t}return Se(s)}const Le=e=>e instanceof T;class T{constructor(){P(this,"id");this.id=Ee()}equals(t){return t==null?!1:this===t?!0:Le(t)?this.id===t.id:!1}}class Y extends T{constructor(t,n){super();this.title=t,this.playbook=n}static fromPlaybook(t){return new Y("",t)}getFirstUnansweredStep(){return this.playbook.modules.flatMap(t=>t.steps).find(t=>t.isUnanswered())}getAllSteps(){return this.playbook.modules.flatMap(t=>t.steps)}getAllModules(){return this.playbook.modules}getModuleFor(t){return this.playbook.modules.find(n=>n.steps.find(s=>s.equals(t)))}}class De{getAnswer(){return""}setAnswer(){}}class Ae{constructor(t){this.answer=t}getAnswer(){return this.answer}setAnswer(t){this.answer=t}}class se extends T{constructor(t,n){super();this.text=t,this.answer=n}getAnswer(){return this.answer.getAnswer()||""}setAnswer(t){this.answer.setAnswer(t)}isUnanswered(){return!this.answer.getAnswer()}}const W=class extends se{constructor(t){super(t,new De)}getType(){return W.TYPE}};let q=W;P(q,"TYPE","InformationalStep");const J=class extends se{constructor(t){super(t,new Ae)}getType(){return J.TYPE}};let v=J;P(v,"TYPE","TextAnswerStep");const ze={class:"mb-4"},Te=E({props:{text:null},setup(e){return(t,n)=>(l(),A("p",ze,w(e.text),1))}});var Z={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Pe(e,t,n,s,r,a){return l(),o("input",te({class:["p-inputtext p-component",{"p-filled":a.filled}],value:n.modelValue,onInput:t[1]||(t[1]=(...c)=>a.onInput&&a.onInput(...c))},e.$attrs),null,16,["value"])}Z.render=Pe;const Be={class:"mb-4"},Ke={class:"mb-4"},Ve=E({props:{step:null},emits:["answerChanged"],setup(e,{emit:t}){const s=L(e.step.getAnswer());return(r,a)=>(l(),A(S,null,[_("div",Be,w(e.step.text),1),_("div",Ke,[u(b(Z),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c),title:e.step.text,class:"w-full",type:"text",onInput:a[1]||(a[1]=c=>t("answerChanged",s.value))},null,8,["modelValue","title"])])],64))}});const Me={class:"font-bold"},Re={class:"w-[30vw]"},Ye={class:"grid grid-cols-3 col-span-full"},je=E({props:{contract:null},setup(e){const t=e,n=L(t.contract.getFirstUnansweredStep()),s=B(()=>{if(n.value===void 0)return null;const k=n.value.getType();return k===v.TYPE?Ve:k===q.TYPE?Te:null}),r=B(()=>d.findIndex(i)>0),a=B(()=>d.findIndex(i)<d.length-1),c=B(()=>t.contract.getModuleFor(n.value)),d=t.contract.getAllSteps(),i=f=>f.equals(n.value),g=()=>{const f=d.findIndex(i);f>0&&(n.value=d[f-1])},x=()=>{const f=d.findIndex(i);f<d.length-1&&(n.value=d[f+1])};return(f,k)=>{var h,I;return l(),A("section",{key:(h=n.value)==null?void 0:h.id},[_("h3",Me,w((I=b(c))==null?void 0:I.text),1),_("div",Re,[(l(),o(F(b(s)),{step:n.value,onAnswerChanged:k[0]||(k[0]=D=>{var Q;return(Q=n.value)==null?void 0:Q.setAnswer(D)})},null,8,["step"])),_("div",Ye,[b(r)?(l(),o(b(M),{key:0,label:"Zur\xFCck",class:"p-button-outlined col-start-1",onClick:g})):p("",!0),b(a)?(l(),o(b(M),{key:1,label:"Weiter",class:"p-button-outlined col-start-3",onClick:x})):p("",!0)])])])}}});var Fe=X(je,[["__scopeId","data-v-317e01ee"]]),oe={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Ne={class:"p-submenu-list",role:"tree"},Ue={class:"p-menuitem-text"},He={class:"p-menuitem-text"},Xe={class:"p-toggleable-content"};function Oe(e,t,n,s,r,a){const c=K("router-link"),d=K("PanelMenuSub",!0);return l(),o("ul",Ne,[(l(!0),o(S,null,ne(n.model,(i,g)=>(l(),o(S,{key:a.label(i)+g.toString()},[a.visible(i)&&!i.separator?(l(),o("li",{key:0,role:"none",class:a.getItemClass(i),style:i.style},[n.template?(l(),o(F(n.template),{key:1,item:i},null,8,["item"])):(l(),o(S,{key:0},[i.to&&!a.disabled(i)?(l(),o(c,{key:0,to:i.to,custom:""},{default:C(({navigate:x,href:f,isActive:k,isExactActive:h})=>[u("a",{href:f,class:a.linkClass(i,{isRouterActive:k,isExactActive:h}),onClick:I=>a.onItemClick(I,i,x),role:"treeitem","aria-expanded":a.isActive(i)},[u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",Ue,w(a.label(i)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(l(),o("a",{key:1,href:i.url,class:a.linkClass(i),target:i.target,onClick:x=>a.onItemClick(x,i),role:"treeitem","aria-expanded":a.isActive(i),tabindex:a.disabled(i)?null:"0"},[i.items?(l(),o("span",{key:0,class:a.getSubmenuIcon(i)},null,2)):p("",!0),u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",He,w(a.label(i)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),u(V,{name:"p-toggleable-content"},{default:C(()=>[z(u("div",Xe,[a.visible(i)&&i.items?(l(),o(d,{model:i.items,key:a.label(i)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:t[1]||(t[1]=x=>e.$emit("item-toggle",x)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):p("",!0)],512),[[ae,a.isActive(i)]])]),_:2},1024)],6)):p("",!0),a.visible(i)&&i.separator?(l(),o("li",{class:["p-menu-separator",i.class],style:i.style,key:"separator"+g.toString()},null,6)):p("",!0)],64))),128))])}oe.render=Oe;var re={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,n){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&n&&n(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,n=ee({},this.expandedKeys);e.expanded?n[t.key]=!0:delete n[t.key],this.$emit("update:expandedKeys",n)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:oe},computed:{ariaId(){return N()}}};const qe={class:"p-panelmenu p-component"},Ze={class:"p-menuitem-text"},Ge={class:"p-menuitem-text"},We={key:0,class:"p-panelmenu-content"};function Je(e,t,n,s,r,a){const c=K("router-link"),d=K("PanelMenuSub");return l(),o("div",qe,[(l(!0),o(S,null,ne(n.model,(i,g)=>(l(),o(S,{key:a.label(i)+"_"+g},[a.visible(i)?(l(),o("div",{key:0,class:a.getPanelClass(i),style:i.style},[u("div",{class:a.getHeaderClass(i),style:i.style},[e.$slots.item?(l(),o(F(e.$slots.item),{key:1,item:i},null,8,["item"])):(l(),o(S,{key:0},[i.to&&!a.disabled(i)?(l(),o(c,{key:0,to:i.to,custom:""},{default:C(({navigate:x,href:f,isActive:k,isExactActive:h})=>[u("a",{href:f,class:a.getHeaderLinkClass(i,{isActive:k,isExactActive:h}),onClick:I=>a.onItemClick(I,i,x),role:"treeitem"},[i.icon?(l(),o("span",{key:0,class:a.getPanelIcon(i)},null,2)):p("",!0),u("span",Ze,w(a.label(i)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(l(),o("a",{key:1,href:i.url,class:a.getHeaderLinkClass(i),onClick:x=>a.onItemClick(x,i),tabindex:a.disabled(i)?null:"0","aria-expanded":a.isActive(i),id:a.ariaId+"_header","aria-controls":a.ariaId+"_content"},[i.items?(l(),o("span",{key:0,class:a.getPanelToggleIcon(i)},null,2)):p("",!0),i.icon?(l(),o("span",{key:1,class:a.getPanelIcon(i)},null,2)):p("",!0),u("span",Ge,w(a.label(i)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),u(V,{name:"p-toggleable-content"},{default:C(()=>[z(u("div",{class:"p-toggleable-content",role:"region",id:a.ariaId+"_content","aria-labelledby":a.ariaId+"_header"},[i.items?(l(),o("div",We,[u(d,{model:i.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:a.updateExpandedKeys,exact:n.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):p("",!0)],8,["id","aria-labelledby"]),[[ae,a.isActive(i)]])]),_:2},1024)],6)):p("",!0)],64))),128))])}function Qe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var $e=`
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
`;Qe($e);re.render=Je;const et=E({props:{modules:null},emits:["save"],setup(e,{emit:t}){const r=L((a=>[{label:"Startseite",to:{name:"mitra-frontend"}},{label:"Module",items:a.map((c,d)=>({label:`${d+1}. ${c.text}`,to:{name:"mitra-frontend"}}))},{label:"Fragen\xFCbersicht",to:{name:"mitra-frontend"}},{label:"TO-DOs",to:{name:"mitra-frontend"}},{label:"Notizen",to:{name:"mitra-frontend"}},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}])(e.modules));return ie(()=>{document.querySelectorAll(".p-panelmenu-panel").forEach((c,d)=>{const i=c.querySelector(".p-toggleable-content");(i==null?void 0:i.id)&&(i.id+=`_${d+1}`);const g=c.querySelector(".p-panelmenu-header-link");(g==null?void 0:g.id)?(g.id+=`_${d+1}`,i==null||i.setAttribute("aria-labelledby",g.id)):i==null||i.removeAttribute("aria-labelledby")})}),(a,c)=>(l(),A("nav",null,[u(b(re),{model:r.value,class:"w-70"},null,8,["model"])]))}});var tt=X(et,[["__scopeId","data-v-1dd91fff"]]);class de extends T{constructor(t=[]){super();this.modules=t}addModules(...t){this.modules.push(...t)}}class G extends T{constructor(t,n=[]){super();this.text=t,this.steps=n}addSteps(...t){this.steps.push(...t)}}const nt=new v("Schritt 1.1"),at=new v("Schritt 1.2"),it=new v("Schritt 1.3"),lt=new v("Schritt 2.1"),st=new v("Schritt 2.2"),ot=new v("Schritt 2.3"),rt=new v("Schritt 3.1"),dt=new v("Schritt 3.2"),ct=new v("Schritt 3.3"),ut=new v("Schritt 3.4"),ce=new G("Rubrum"),ue=new G("Gegenstand und Bestandteile des Vertrags"),pe=new G("Gegenstand der Leistungen");ce.addSteps(nt,at,it);ue.addSteps(lt,st,ot);pe.addSteps(rt,dt,ct,ut);const me=new de;me.addModules(ce,ue,pe);const pt={load(){return me},save(){}};function mt(e){return e.title.toLowerCase().replace(/\s/g,"-")}async function gt(e,t){const n=await e.createWritable();await n.write(t),await n.close()}const ft={load(){return new Y("",new de)},async save(e){if(window.showSaveFilePicker){const t=await window.showSaveFilePicker({suggestedName:mt(e),startIn:"desktop",types:[{accept:{"application/json":[".json"]}}]});await gt(t,JSON.stringify(e))}}},ht=()=>pt,bt=()=>ft;var ge={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&U.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){this.autoZIndex&&U.set("modal",e,this.baseZIndex+this.$primevue.config.zIndex.modal),e.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&y.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&U.clear(e),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?y.addClass(document.body,"p-overflow-hidden"):y.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&y.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&y.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=y.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let n=t.indexOf(document.activeElement);e.shiftKey?n==-1||n===0?t[t.length-1].focus():t[n-1].focus():n==-1||n===t.length-1?t[0].focus():t[n+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){y.hasClass(e.target,"p-dialog-header-icon")||y.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",y.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=y.getOuterWidth(this.container),n=y.getOuterHeight(this.container),s=e.pageX-this.lastPageX,r=e.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),c=a.left+s,d=a.top+r,i=y.getViewport();this.container.style.position="fixed",this.keepInViewport?(c>=this.minX&&c+t<i.width&&(this.lastPageX=e.pageX,this.container.style.left=c+"px"),d>=this.minY&&d+n<i.height&&(this.lastPageY=e.pageY,this.container.style.top=d+"px")):(this.lastPageX=e.pageX,this.container.style.left=c+"px",this.lastPageY=e.pageY,this.container.style.top=d+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,y.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return N()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return N()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ke}};const xt={class:"p-dialog-header-icons"},yt=u("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),vt={key:1,class:"p-dialog-footer"};function kt(e,t,n,s,r,a){const c=le("ripple");return l(),o(xe,{to:a.appendTarget,disabled:a.appendDisabled},[r.containerVisible?(l(),o("div",{key:0,ref:a.maskRef,class:a.maskClass,onClick:t[4]||(t[4]=(...d)=>a.onMaskClick&&a.onMaskClick(...d))},[u(V,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:C(()=>[n.visible?(l(),o("div",te({key:0,ref:a.containerRef,class:a.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(l(),o("div",{key:0,class:"p-dialog-header",onMousedown:t[3]||(t[3]=(...d)=>a.initDrag&&a.initDrag(...d))},[H(e.$slots,"header",{},()=>[n.header?(l(),o("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},w(n.header),9,["id"])):p("",!0)]),u("div",xt,[n.maximizable?z((l(),o("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[1]||(t[1]=(...d)=>a.maximize&&a.maximize(...d)),type:"button",tabindex:"-1"},[u("span",{class:a.maximizeIconClass},null,2)],512)),[[c]]):p("",!0),n.closable?z((l(),o("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[2]||(t[2]=(...d)=>a.close&&a.close(...d)),"aria-label":n.ariaCloseLabel,type:"button",tabindex:"-1"},[yt],8,["aria-label"])),[[c]]):p("",!0)])],32)):p("",!0),u("div",{class:a.contentStyleClass,style:n.contentStyle},[H(e.$slots,"default")],6),n.footer||e.$slots.footer?(l(),o("div",vt,[H(e.$slots,"footer",{},()=>[ye(w(n.footer),1)])])):p("",!0)],16,["aria-labelledby","aria-modal"])):p("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):p("",!0)],8,["to","disabled"])}function wt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var _t=`
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
`;wt(_t);ge.render=kt;const Ct={class:"flex"},It={class:"flex-col"},St={class:"flex-col p-8"},Et=E({setup(e){const t=ht(),n=bt(),s=Y.fromPlaybook(t.load()),r="Unbenannter Vertrag",a=L(r),c=L(r),d=L(!1),i=()=>{c.value=a.value,d.value=!0},g=()=>{d.value=!1,a.value=c.value,s.title=c.value},x=k=>{const h=k.target;h==null||h.select()},f=async()=>{await n.save(s)};return ie(i),(k,h)=>{const I=le("focus");return l(),A("div",Ct,[_("div",It,[u(tt,{modules:b(s).getAllModules(),onSave:f},null,8,["modules"])]),_("div",St,[u(b(ge),{id:"dialog-contract-title",visible:d.value,"onUpdate:visible":h[1]||(h[1]=D=>d.value=D),modal:!0,"dismissable-mask":!0,header:"Wie wollen Sie den Vertrag benennen?"},{footer:C(()=>[u(b(M),{label:"OK",icon:"pi pi-check",onClick:g})]),default:C(()=>[z(u(b(Z),{id:"input-contract-title",modelValue:c.value,"onUpdate:modelValue":h[0]||(h[0]=D=>c.value=D),title:"Titel des Vertrags",type:"text",onFocus:x,onKeyup:ve(g,["enter"])},null,8,["modelValue","onKeyup"]),[[I]])]),_:1},8,["visible"]),_("section",null,[u(b(M),{class:"p-button-link",onClick:i},{default:C(()=>[_("span",null,w(a.value),1)]),_:1})]),u(V,{name:"fade",mode:"out-in"},{default:C(()=>[u(Fe,{contract:b(s)},null,8,["contract"])]),_:1})])])}}});var Lt=X(Et,[["__scopeId","data-v-00491bde"]]);const Pt=E({setup(e){return(t,n)=>(l(),o(Lt))}});export{Pt as default};
