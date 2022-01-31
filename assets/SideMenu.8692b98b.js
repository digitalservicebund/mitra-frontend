var H=Object.defineProperty,D=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var S=(e,t,l)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,C=(e,t)=>{for(var l in t||(t={}))j.call(t,l)&&S(e,l,t[l]);if(A)for(var l of A(t))q.call(t,l)&&S(e,l,t[l]);return e},K=(e,t)=>D(e,L(t));import{r as y,o as s,c as i,F as h,w as k,i as d,l as u,t as f,M as I,q as w,X as F,L as B,a4 as E,N as T,f as V,z as R,$ as U,u as M}from"./vendor.301f9710.js";import{u as X}from"./session.51340ef0.js";var N={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&t&&t(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const G={key:1,class:"p-menuitem-text"},J={key:1,class:"p-menuitem-text"};function O(e,t,l,r,c,a){const b=y("router-link");return a.visible()?(s(),i("li",{key:0,class:a.containerClass(l.item)},[l.template?(s(),i(I(l.template),{key:1,item:l.item},null,8,["item"])):(s(),i(h,{key:0},[l.item.to?(s(),i(b,{key:0,to:l.item.to,custom:""},{default:k(({navigate:p,href:n,isActive:o,isExactActive:m})=>[d("a",{href:n,class:a.linkClass({isActive:o,isExactActive:m}),onClick:v=>a.onClick(v,p)},[l.item.icon?(s(),i("span",{key:0,class:a.iconClass},null,2)):u("",!0),l.item.label?(s(),i("span",G,f(a.label()),1)):u("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(s(),i("a",{key:1,href:l.item.url||"#",class:a.linkClass(),onClick:t[1]||(t[1]=(...p)=>a.onClick&&a.onClick(...p)),target:l.item.target},[l.item.icon?(s(),i("span",{key:0,class:a.iconClass},null,2)):u("",!0),l.item.label?(s(),i("span",J,f(a.label()),1)):u("",!0)],10,["href","target"]))],64))],2)):u("",!0)}N.render=O;var Q={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:N}};const W={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},Y=d("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function Z(e,t,l,r,c,a){const b=y("BreadcrumbItem");return s(),i("nav",W,[d("ul",null,[l.home?(s(),i(b,{key:0,item:l.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:l.exact},null,8,["item","template","exact"])):u("",!0),(s(!0),i(h,null,w(l.model,p=>(s(),i(h,{key:p.label},[Y,d(b,{item:p,template:e.$slots.item,exact:l.exact},null,8,["item","template","exact"])],64))),128))])])}function $(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var ee=`
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
`;$(ee);Q.render=Z;var P={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,l){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&l&&l(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const te={class:"p-submenu-list",role:"tree"},ne={class:"p-menuitem-text"},le={class:"p-menuitem-text"},ae={class:"p-toggleable-content"};function se(e,t,l,r,c,a){const b=y("router-link"),p=y("PanelMenuSub",!0);return s(),i("ul",te,[(s(!0),i(h,null,w(l.model,(n,o)=>(s(),i(h,{key:a.label(n)+o.toString()},[a.visible(n)&&!n.separator?(s(),i("li",{key:0,role:"none",class:a.getItemClass(n),style:n.style},[l.template?(s(),i(I(l.template),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!a.disabled(n)?(s(),i(b,{key:0,to:n.to,custom:""},{default:k(({navigate:m,href:v,isActive:x,isExactActive:g})=>[d("a",{href:v,class:a.linkClass(n,{isRouterActive:x,isExactActive:g}),onClick:_=>a.onItemClick(_,n,m),role:"treeitem","aria-expanded":a.isActive(n)},[d("span",{class:["p-menuitem-icon",n.icon]},null,2),d("span",ne,f(a.label(n)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:a.linkClass(n),target:n.target,onClick:m=>a.onItemClick(m,n),role:"treeitem","aria-expanded":a.isActive(n),tabindex:a.disabled(n)?null:"0"},[n.items?(s(),i("span",{key:0,class:a.getSubmenuIcon(n)},null,2)):u("",!0),d("span",{class:["p-menuitem-icon",n.icon]},null,2),d("span",le,f(a.label(n)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),d(T,{name:"p-toggleable-content"},{default:k(()=>[B(d("div",ae,[a.visible(n)&&n.items?(s(),i(p,{model:n.items,key:a.label(n)+"_sub_",template:l.template,expandedKeys:l.expandedKeys,onItemToggle:t[1]||(t[1]=m=>e.$emit("item-toggle",m)),exact:l.exact},null,8,["model","template","expandedKeys","exact"])):u("",!0)],512),[[E,a.isActive(n)]])]),_:2},1024)],6)):u("",!0),a.visible(n)&&n.separator?(s(),i("li",{class:["p-menu-separator",n.class],style:n.style,key:"separator"+o.toString()},null,6)):u("",!0)],64))),128))])}P.render=se;var z={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,l){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&l&&l(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,l=C({},this.expandedKeys);e.expanded?l[t.key]=!0:delete l[t.key],this.$emit("update:expandedKeys",l)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:P},computed:{ariaId(){return F()}}};const ie={class:"p-panelmenu p-component"},ce={class:"p-menuitem-text"},re={class:"p-menuitem-text"},de={key:0,class:"p-panelmenu-content"};function ue(e,t,l,r,c,a){const b=y("router-link"),p=y("PanelMenuSub");return s(),i("div",ie,[(s(!0),i(h,null,w(l.model,(n,o)=>(s(),i(h,{key:a.label(n)+"_"+o},[a.visible(n)?(s(),i("div",{key:0,class:a.getPanelClass(n),style:n.style},[d("div",{class:a.getHeaderClass(n),style:n.style},[e.$slots.item?(s(),i(I(e.$slots.item),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!a.disabled(n)?(s(),i(b,{key:0,to:n.to,custom:""},{default:k(({navigate:m,href:v,isActive:x,isExactActive:g})=>[d("a",{href:v,class:a.getHeaderLinkClass(n,{isActive:x,isExactActive:g}),onClick:_=>a.onItemClick(_,n,m),role:"treeitem"},[n.icon?(s(),i("span",{key:0,class:a.getPanelIcon(n)},null,2)):u("",!0),d("span",ce,f(a.label(n)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:a.getHeaderLinkClass(n),onClick:m=>a.onItemClick(m,n),tabindex:a.disabled(n)?null:"0","aria-expanded":a.isActive(n),id:a.ariaId+"_header_"+o,"aria-controls":a.ariaId+"_content_"+o},[n.items?(s(),i("span",{key:0,class:a.getPanelToggleIcon(n)},null,2)):u("",!0),n.icon?(s(),i("span",{key:1,class:a.getPanelIcon(n)},null,2)):u("",!0),d("span",re,f(a.label(n)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),d(T,{name:"p-toggleable-content"},{default:k(()=>[B(d("div",{class:"p-toggleable-content",role:"region",id:a.ariaId+"_content_"+o,"aria-labelledby":a.ariaId+"_header_"+o},[n.items?(s(),i("div",de,[d(p,{model:n.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:l.expandedKeys,onItemToggle:a.updateExpandedKeys,exact:l.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):u("",!0)],8,["id","aria-labelledby"]),[[E,a.isActive(n)]])]),_:2},1024)],6)):u("",!0)],64))),128))])}function oe(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var me=`
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
`;oe(me);z.render=ue;const ye=V({props:{title:null,navigatable:null},emits:["save","navigate"],setup(e,{emit:t}){const l=e,r=X(),c=()=>{const[,n]=location.pathname.match(/\/(playbook|contract)\//)||[];return n},a=(n,o)=>o.path.find(m=>m.equals(r.cache.get(l.navigatable.id)))?K(C({},n),{style:"font-weight:bold"}):n,b=R(l.navigatable.modules),p=U(()=>[{label:"Startseite",icon:"pi pi-angle-left",to:`/mitra-frontend/${r.entryPoint}`},{key:"1",label:l.title,icon:"pi pi-angle-down",to:`/mitra-frontend/${c()}/${l.navigatable.id}`,items:b.value.map(n=>a({label:n.title,command:()=>t("navigate",n)},n))},{label:"Speichern",icon:"pi pi-download",command:()=>t("save")}]);return(n,o)=>(s(),i(M(z),{model:M(p),"expanded-keys":{"1":!0},class:"w-64"},null,8,["model"]))}});export{ye as _,Q as s};
