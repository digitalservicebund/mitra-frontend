var G=Object.defineProperty,J=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var P=(e,t,a)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,B=(e,t)=>{for(var a in t||(t={}))Q.call(t,a)&&P(e,a,t[a]);if(N)for(var a of N(t))W.call(t,a)&&P(e,a,t[a]);return e},M=(e,t)=>J(e,O(t));import{r as k,o as s,c as i,F as h,w as x,i as o,l as m,t as f,M as K,v as w,X as j,k as z,U as Y,p as H,a2 as V,T as D,f as T,s as A,u as C,g as E,h as y,a3 as Z,a4 as $}from"./vendor.1dfe8916.js";import{s as ee}from"./button.esm.4d26aeea.js";import{u as L,s as te}from"./session.2e900293.js";import{c as ne,d as le}from"./provide.4a930546.js";import{_ as ae}from"./main.810e1292.js";var F={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&t&&t(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const se={key:1,class:"p-menuitem-text"},ie={key:1,class:"p-menuitem-text"};function ce(e,t,a,d,c,l){const u=k("router-link");return l.visible()?(s(),i("li",{key:0,class:l.containerClass(a.item)},[a.template?(s(),i(K(a.template),{key:1,item:a.item},null,8,["item"])):(s(),i(h,{key:0},[a.item.to?(s(),i(u,{key:0,to:a.item.to,custom:""},{default:x(({navigate:r,href:n,isActive:p,isExactActive:b})=>[o("a",{href:n,class:l.linkClass({isActive:p,isExactActive:b}),onClick:v=>l.onClick(v,r)},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):m("",!0),a.item.label?(s(),i("span",se,f(l.label()),1)):m("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(s(),i("a",{key:1,href:a.item.url||"#",class:l.linkClass(),onClick:t[1]||(t[1]=(...r)=>l.onClick&&l.onClick(...r)),target:a.item.target},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):m("",!0),a.item.label?(s(),i("span",ie,f(l.label()),1)):m("",!0)],10,["href","target"]))],64))],2)):m("",!0)}F.render=ce;var R={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:F}};const de={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},re=o("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function oe(e,t,a,d,c,l){const u=k("BreadcrumbItem");return s(),i("nav",de,[o("ul",null,[a.home?(s(),i(u,{key:0,item:a.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])):m("",!0),(s(!0),i(h,null,w(a.model,r=>(s(),i(h,{key:r.label},[re,o(u,{item:r,template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])],64))),128))])])}function ue(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var pe=`
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
`;ue(pe);R.render=oe;var U={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:ee}};const me={key:1,class:"p-inplace-content"};function be(e,t,a,d,c,l){const u=k("IPButton");return s(),i("div",{class:l.containerClass},[c.d_active?(s(),i("div",me,[z(e.$slots,"content"),a.closable?(s(),i(u,{key:0,icon:"pi pi-times",onClick:l.close},null,8,["onClick"])):m("",!0)])):(s(),i("div",{key:0,class:l.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:t[1]||(t[1]=(...r)=>l.open&&l.open(...r)),onKeydown:t[2]||(t[2]=j((...r)=>l.open&&l.open(...r),["enter"]))},[z(e.$slots,"display")],42,["tabindex"]))],2)}function he(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var ye=`
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
`;he(ye);U.render=be;var q={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const fe={class:"p-submenu-list",role:"tree"},ve={class:"p-menuitem-text"},ke={class:"p-menuitem-text"},xe={class:"p-toggleable-content"};function _e(e,t,a,d,c,l){const u=k("router-link"),r=k("PanelMenuSub",!0);return s(),i("ul",fe,[(s(!0),i(h,null,w(a.model,(n,p)=>(s(),i(h,{key:l.label(n)+p.toString()},[l.visible(n)&&!n.separator?(s(),i("li",{key:0,role:"none",class:l.getItemClass(n),style:n.style},[a.template?(s(),i(K(a.template),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!l.disabled(n)?(s(),i(u,{key:0,to:n.to,custom:""},{default:x(({navigate:b,href:v,isActive:I,isExactActive:_})=>[o("a",{href:v,class:l.linkClass(n,{isRouterActive:I,isExactActive:_}),onClick:g=>l.onItemClick(g,n,b),role:"treeitem","aria-expanded":l.isActive(n)},[o("span",{class:["p-menuitem-icon",n.icon]},null,2),o("span",ve,f(l.label(n)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.linkClass(n),target:n.target,onClick:b=>l.onItemClick(b,n),role:"treeitem","aria-expanded":l.isActive(n),tabindex:l.disabled(n)?null:"0"},[n.items?(s(),i("span",{key:0,class:l.getSubmenuIcon(n)},null,2)):m("",!0),o("span",{class:["p-menuitem-icon",n.icon]},null,2),o("span",ke,f(l.label(n)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),o(D,{name:"p-toggleable-content"},{default:x(()=>[H(o("div",xe,[l.visible(n)&&n.items?(s(),i(r,{model:n.items,key:l.label(n)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=b=>e.$emit("item-toggle",b)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):m("",!0)],512),[[V,l.isActive(n)]])]),_:2},1024)],6)):m("",!0),l.visible(n)&&n.separator?(s(),i("li",{class:["p-menu-separator",n.class],style:n.style,key:"separator"+p.toString()},null,6)):m("",!0)],64))),128))])}q.render=_e;var X={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=B({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:q},computed:{ariaId(){return Y()}}};const ge={class:"p-panelmenu p-component"},Ce={class:"p-menuitem-text"},Ie={class:"p-menuitem-text"},Se={key:0,class:"p-panelmenu-content"};function we(e,t,a,d,c,l){const u=k("router-link"),r=k("PanelMenuSub");return s(),i("div",ge,[(s(!0),i(h,null,w(a.model,(n,p)=>(s(),i(h,{key:l.label(n)+"_"+p},[l.visible(n)?(s(),i("div",{key:0,class:l.getPanelClass(n),style:n.style},[o("div",{class:l.getHeaderClass(n),style:n.style},[e.$slots.item?(s(),i(K(e.$slots.item),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!l.disabled(n)?(s(),i(u,{key:0,to:n.to,custom:""},{default:x(({navigate:b,href:v,isActive:I,isExactActive:_})=>[o("a",{href:v,class:l.getHeaderLinkClass(n,{isActive:I,isExactActive:_}),onClick:g=>l.onItemClick(g,n,b),role:"treeitem"},[n.icon?(s(),i("span",{key:0,class:l.getPanelIcon(n)},null,2)):m("",!0),o("span",Ce,f(l.label(n)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.getHeaderLinkClass(n),onClick:b=>l.onItemClick(b,n),tabindex:l.disabled(n)?null:"0","aria-expanded":l.isActive(n),id:l.ariaId+"_header_"+p,"aria-controls":l.ariaId+"_content_"+p},[n.items?(s(),i("span",{key:0,class:l.getPanelToggleIcon(n)},null,2)):m("",!0),n.icon?(s(),i("span",{key:1,class:l.getPanelIcon(n)},null,2)):m("",!0),o("span",Ie,f(l.label(n)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),o(D,{name:"p-toggleable-content"},{default:x(()=>[H(o("div",{class:"p-toggleable-content",role:"region",id:l.ariaId+"_content_"+p,"aria-labelledby":l.ariaId+"_header_"+p},[n.items?(s(),i("div",Se,[o(r,{model:n.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:l.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):m("",!0)],8,["id","aria-labelledby"]),[[V,l.isActive(n)]])]),_:2},1024)],6)):m("",!0)],64))),128))])}function Ae(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var Be=`
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
`;Ae(Be);X.render=we;const Ke=T({props:{playbook:null},emits:["save","navigate"],setup(e,{emit:t}){const a=e,d=L(),c=(r,n)=>n.path.find(p=>p.equals(d.cache.get(a.playbook.id)))?M(B({},r),{class:"font-bold"}):r,l=r=>[{label:"Startseite",icon:"pi pi-angle-left",to:"/mitra-frontend/"},{key:"1",label:a.playbook.title,to:`/mitra-frontend/playbook/${a.playbook.id}`,items:r.map((n,p)=>c({label:`${p+1}. ${n.text}`,command:()=>t("navigate",n.path[0])},n))},{label:"Speichern",icon:"pi pi-fw pi-download",command:()=>t("save")}];d.$subscribe(()=>{u.value=l(a.playbook.modules)});const u=A(l(a.playbook.modules));return(r,n)=>(s(),i(C(X),{model:u.value,"expanded-keys":{"1":!0},class:"w-70"},null,8,["model"]))}});const Te=e=>(Z("data-v-92dad4b4"),e=e(),$(),e),Ee={class:"font-bold text-xl"},Ne={class:"flex h-full"},Pe={class:"flex-none"},Me={class:"flex-1 p-8"},je=Te(()=>y("h2",{class:"font-bold text-lg"},"Module",-1)),ze={open:""},He={class:"text-lg"},Ve=T({props:{id:null},setup(e){const t=e,a=L(),d=le(),l=ne().findById(t.id),u=A(l.title),r=A(),n={to:"/mitra-frontend/",label:"Startseite"},p=A([{label:u.value,disabled:!0}]),b=()=>{l.title=u.value,r.value.close()},v=()=>{d.save(l)},I=_=>{a.rememberCurrentStep(l,_)};return(_,g)=>(s(),E(h,null,[y("header",null,[o(C(R),{home:n,model:p.value},null,8,["model"]),o(C(U),{ref_key:"edittitle",ref:r,closable:!0},{display:x(()=>[y("h1",Ee,f(u.value),1)]),content:x(()=>[o(C(te),{modelValue:u.value,"onUpdate:modelValue":g[0]||(g[0]=S=>u.value=S),onKeyup:j(b,["enter"])},null,8,["modelValue","onKeyup"])]),_:1},512)]),y("div",Ne,[y("nav",Pe,[o(Ke,{playbook:C(l),onSave:v,onNavigate:I},null,8,["playbook"])]),y("main",Me,[y("section",null,[je,y("ol",null,[(s(!0),E(h,null,w(C(l).modules,S=>(s(),E("li",{key:S.id,class:"mt-4 border p-4 shadow-md"},[y("details",ze,[y("summary",He,f(S.text),1),y("p",null,f(S.steps.length)+" Fragen",1)])]))),128))])])])])],64))}});var De=ae(Ve,[["__scopeId","data-v-92dad4b4"]]);const Ge=T({props:{id:null},setup(e){return(t,a)=>(s(),i(De,{id:e.id},null,8,["id"]))}});export{Ge as default};
