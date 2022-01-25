var W=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var j=(e,t,a)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,B=(e,t)=>{for(var a in t||(t={}))$.call(t,a)&&j(e,a,t[a]);if(M)for(var a of M(t))ee.call(t,a)&&j(e,a,t[a]);return e},V=(e,t)=>Y(e,Z(t));import{r as x,o as s,c as i,F as y,w as k,i as r,l as m,t as f,M as K,v as w,X as z,k as D,U as te,p as T,a2 as H,T as L,f as E,s as A,u as _,m as ne,g as N,h,a3 as le,a4 as ae,j as se}from"./vendor.1dfe8916.js";import{s as F}from"./button.esm.4d26aeea.js";import{u as R,s as ie}from"./session.5e0454f4.js";import{c as ce,d as de}from"./provide.f3fd2de6.js";import{_ as oe}from"./main.61597c72.js";var U={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&t&&t(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const re={key:1,class:"p-menuitem-text"},ue={key:1,class:"p-menuitem-text"};function pe(e,t,a,d,c,l){const u=x("router-link");return l.visible()?(s(),i("li",{key:0,class:l.containerClass(a.item)},[a.template?(s(),i(K(a.template),{key:1,item:a.item},null,8,["item"])):(s(),i(y,{key:0},[a.item.to?(s(),i(u,{key:0,to:a.item.to,custom:""},{default:k(({navigate:o,href:n,isActive:p,isExactActive:b})=>[r("a",{href:n,class:l.linkClass({isActive:p,isExactActive:b}),onClick:v=>l.onClick(v,o)},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):m("",!0),a.item.label?(s(),i("span",re,f(l.label()),1)):m("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(s(),i("a",{key:1,href:a.item.url||"#",class:l.linkClass(),onClick:t[1]||(t[1]=(...o)=>l.onClick&&l.onClick(...o)),target:a.item.target},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):m("",!0),a.item.label?(s(),i("span",ue,f(l.label()),1)):m("",!0)],10,["href","target"]))],64))],2)):m("",!0)}U.render=pe;var q={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:U}};const me={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},be=r("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function he(e,t,a,d,c,l){const u=x("BreadcrumbItem");return s(),i("nav",me,[r("ul",null,[a.home?(s(),i(u,{key:0,item:a.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])):m("",!0),(s(!0),i(y,null,w(a.model,o=>(s(),i(y,{key:o.label},[be,r(u,{item:o,template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])],64))),128))])])}function ye(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var fe=`
.p-breadcrumb {
    overflow-x: auto;
}
.p-breadcrumb ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
}
.p-breadcrumb .p-menuitem-text {
    line-height: 1;
}
.p-breadcrumb .p-menuitem-link {
    text-decoration: none;
}
.p-breadcrumb::-webkit-scrollbar {
    display: none;
}
`;ye(fe);q.render=he;var X={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:F}};const ve={key:1,class:"p-inplace-content"};function ke(e,t,a,d,c,l){const u=x("IPButton");return s(),i("div",{class:l.containerClass},[c.d_active?(s(),i("div",ve,[D(e.$slots,"content"),a.closable?(s(),i(u,{key:0,icon:"pi pi-times",onClick:l.close},null,8,["onClick"])):m("",!0)])):(s(),i("div",{key:0,class:l.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:t[1]||(t[1]=(...o)=>l.open&&l.open(...o)),onKeydown:t[2]||(t[2]=z((...o)=>l.open&&l.open(...o),["enter"]))},[D(e.$slots,"display")],42,["tabindex"]))],2)}function xe(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var _e=`
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
}
.p-inplace .p-inplace-content {
    display: inline;
}
.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
}
`;xe(_e);X.render=ke;var G={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const ge={class:"p-submenu-list",role:"tree"},Ce={class:"p-menuitem-text"},Ie={class:"p-menuitem-text"},Se={class:"p-toggleable-content"};function we(e,t,a,d,c,l){const u=x("router-link"),o=x("PanelMenuSub",!0);return s(),i("ul",ge,[(s(!0),i(y,null,w(a.model,(n,p)=>(s(),i(y,{key:l.label(n)+p.toString()},[l.visible(n)&&!n.separator?(s(),i("li",{key:0,role:"none",class:l.getItemClass(n),style:n.style},[a.template?(s(),i(K(a.template),{key:1,item:n},null,8,["item"])):(s(),i(y,{key:0},[n.to&&!l.disabled(n)?(s(),i(u,{key:0,to:n.to,custom:""},{default:k(({navigate:b,href:v,isActive:C,isExactActive:I})=>[r("a",{href:v,class:l.linkClass(n,{isRouterActive:C,isExactActive:I}),onClick:g=>l.onItemClick(g,n,b),role:"treeitem","aria-expanded":l.isActive(n)},[r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",Ce,f(l.label(n)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.linkClass(n),target:n.target,onClick:b=>l.onItemClick(b,n),role:"treeitem","aria-expanded":l.isActive(n),tabindex:l.disabled(n)?null:"0"},[n.items?(s(),i("span",{key:0,class:l.getSubmenuIcon(n)},null,2)):m("",!0),r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",Ie,f(l.label(n)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),r(L,{name:"p-toggleable-content"},{default:k(()=>[T(r("div",Se,[l.visible(n)&&n.items?(s(),i(o,{model:n.items,key:l.label(n)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=b=>e.$emit("item-toggle",b)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[H,l.isActive(n)]])]),_:2},1024)],6)):m("",!0),l.visible(n)&&n.separator?(s(),i("li",{class:["p-menu-separator",n.class],style:n.style,key:"separator"+p.toString()},null,6)):m("",!0)],64))),128))])}G.render=we;var J={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=B({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:G},computed:{ariaId(){return te()}}};const Ae={class:"p-panelmenu p-component"},Be={class:"p-menuitem-text"},Ke={class:"p-menuitem-text"},Te={key:0,class:"p-panelmenu-content"};function Ee(e,t,a,d,c,l){const u=x("router-link"),o=x("PanelMenuSub");return s(),i("div",Ae,[(s(!0),i(y,null,w(a.model,(n,p)=>(s(),i(y,{key:l.label(n)+"_"+p},[l.visible(n)?(s(),i("div",{key:0,class:l.getPanelClass(n),style:n.style},[r("div",{class:l.getHeaderClass(n),style:n.style},[e.$slots.item?(s(),i(K(e.$slots.item),{key:1,item:n},null,8,["item"])):(s(),i(y,{key:0},[n.to&&!l.disabled(n)?(s(),i(u,{key:0,to:n.to,custom:""},{default:k(({navigate:b,href:v,isActive:C,isExactActive:I})=>[r("a",{href:v,class:l.getHeaderLinkClass(n,{isActive:C,isExactActive:I}),onClick:g=>l.onItemClick(g,n,b),role:"treeitem"},[n.icon?(s(),i("span",{key:0,class:l.getPanelIcon(n)},null,2)):m("",!0),r("span",Be,f(l.label(n)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.getHeaderLinkClass(n),onClick:b=>l.onItemClick(b,n),tabindex:l.disabled(n)?null:"0","aria-expanded":l.isActive(n),id:l.ariaId+"_header_"+p,"aria-controls":l.ariaId+"_content_"+p},[n.items?(s(),i("span",{key:0,class:l.getPanelToggleIcon(n)},null,2)):m("",!0),n.icon?(s(),i("span",{key:1,class:l.getPanelIcon(n)},null,2)):m("",!0),r("span",Ke,f(l.label(n)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),r(L,{name:"p-toggleable-content"},{default:k(()=>[T(r("div",{class:"p-toggleable-content",role:"region",id:l.ariaId+"_content_"+p,"aria-labelledby":l.ariaId+"_header_"+p},[n.items?(s(),i("div",Te,[r(o,{model:n.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:l.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[H,l.isActive(n)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Ne(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var Pe=`
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
`;Ne(Pe);J.render=Ee;const Me=E({props:{playbook:null},emits:["save","navigate"],setup(e,{emit:t}){const a=e,d=R(),c=(o,n)=>n.path.find(p=>p.equals(d.cache.get(a.playbook.id)))?V(B({},o),{class:"font-bold"}):o,l=o=>[{label:"Startseite",icon:"pi pi-angle-left",to:"/mitra-frontend/"},{key:"1",label:a.playbook.title,to:`/mitra-frontend/playbook/${a.playbook.id}`,items:o.map((n,p)=>c({label:`${p+1}. ${n.text}`,command:()=>t("navigate",n.path[0])},n))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}];d.$subscribe(()=>{u.value=l(a.playbook.modules)});const u=A(l(a.playbook.modules));return(o,n)=>(s(),i(_(J),{model:u.value,"expanded-keys":{"1":!0},class:"w-70"},null,8,["model"]))}});const O=e=>(le("data-v-65f2f07c"),e=e(),ae(),e),je={class:"font-bold text-xl"},Ve=O(()=>h("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," edit ",-1)),ze=se(" \xC4ndern "),De={class:"flex h-full"},He={class:"flex-none"},Le={class:"flex-1 p-8"},Fe=O(()=>h("h2",{class:"font-bold text-lg"},"Module",-1)),Re={open:""},Ue={class:"text-lg"},qe=E({props:{id:null},setup(e){const t=e,a=R(),d=de(),l=ce().findById(t.id),u=A(l.title),o=A(),n={to:"/mitra-frontend/",label:"Startseite"},p=A([{label:u.value,disabled:!0}]),b=()=>{o.value.open()},v=()=>{l.title=u.value,o.value.close()},C=()=>{d.save(l)},I=g=>{a.rememberCurrentStep(l,g)};return(g,P)=>{const Q=ne("focus");return s(),N(y,null,[h("header",null,[r(_(q),{home:n,model:p.value},null,8,["model"]),r(_(X),{ref_key:"editTitle",ref:o,closable:!1},{display:k(()=>[h("h1",je,f(u.value),1)]),content:k(()=>[T(r(_(ie),{modelValue:u.value,"onUpdate:modelValue":P[0]||(P[0]=S=>u.value=S),onKeyup:z(v,["enter"]),onBlur:v},null,8,["modelValue","onKeyup"]),[[Q]])]),_:1},512),r(_(F),{type:"button",onClick:b},{default:k(()=>[Ve,ze]),_:1})]),h("div",De,[h("nav",He,[r(Me,{playbook:_(l),onSave:C,onNavigate:I},null,8,["playbook"])]),h("main",Le,[h("section",null,[Fe,h("ol",null,[(s(!0),N(y,null,w(_(l).modules,S=>(s(),N("li",{key:S.id,class:"mt-4 border p-4 shadow-md"},[h("details",Re,[h("summary",Ue,f(S.text),1),h("p",null,f(S.steps.length)+" Fragen",1)])]))),128))])])])])],64)}}});var Xe=oe(qe,[["__scopeId","data-v-65f2f07c"]]);const Ze=E({props:{id:null},setup(e){return(t,a)=>(s(),i(Xe,{id:e.id},null,8,["id"]))}});export{Ze as default};
