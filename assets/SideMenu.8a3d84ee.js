var j=Object.defineProperty,H=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var S=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&S(e,a,t[a]);if(A)for(var a of A(t))q.call(t,a)&&S(e,a,t[a]);return e},B=(e,t)=>H(e,D(t));import{r as y,o as s,c as i,F as h,w as x,i as r,l as o,t as f,M as I,q as w,Y as F,k as K,n as R,X as U,L as T,a2 as E,N as P,f as X,z as Y,$ as G,u as N}from"./vendor.0ac36c96.js";import{s as J}from"./button.esm.392df4ef.js";import{u as O}from"./session.eb1bb6e7.js";var M={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&t&&t(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const Q={key:1,class:"p-menuitem-text"},W={key:1,class:"p-menuitem-text"};function Z(e,t,a,d,c,l){const p=y("router-link");return l.visible()?(s(),i("li",{key:0,class:l.containerClass(a.item)},[a.template?(s(),i(I(a.template),{key:1,item:a.item},null,8,["item"])):(s(),i(h,{key:0},[a.item.to?(s(),i(p,{key:0,to:a.item.to,custom:""},{default:x(({navigate:u,href:n,isActive:m,isExactActive:b})=>[r("a",{href:n,class:l.linkClass({isActive:m,isExactActive:b}),onClick:v=>l.onClick(v,u)},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):o("",!0),a.item.label?(s(),i("span",Q,f(l.label()),1)):o("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(s(),i("a",{key:1,href:a.item.url||"#",class:l.linkClass(),onClick:t[1]||(t[1]=(...u)=>l.onClick&&l.onClick(...u)),target:a.item.target},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):o("",!0),a.item.label?(s(),i("span",W,f(l.label()),1)):o("",!0)],10,["href","target"]))],64))],2)):o("",!0)}M.render=Z;var $={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:M}};const ee={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},te=r("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function ne(e,t,a,d,c,l){const p=y("BreadcrumbItem");return s(),i("nav",ee,[r("ul",null,[a.home?(s(),i(p,{key:0,item:a.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])):o("",!0),(s(!0),i(h,null,w(a.model,u=>(s(),i(h,{key:u.label},[te,r(p,{item:u,template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])],64))),128))])])}function le(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var ae=`
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
`;le(ae);$.render=ne;var se={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:J}};const ie={key:1,class:"p-inplace-content"};function ce(e,t,a,d,c,l){const p=y("IPButton");return s(),i("div",{class:l.containerClass},[c.d_active?(s(),i("div",ie,[K(e.$slots,"content"),a.closable?(s(),i(p,{key:0,icon:"pi pi-times",onClick:l.close},null,8,["onClick"])):o("",!0)])):(s(),i("div",{key:0,class:l.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:t[1]||(t[1]=(...u)=>l.open&&l.open(...u)),onKeydown:t[2]||(t[2]=F((...u)=>l.open&&l.open(...u),["enter"]))},[K(e.$slots,"display")],42,["tabindex"]))],2)}function de(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var re=`
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
`;de(re);se.render=ce;var ue={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function oe(e,t,a,d,c,l){return s(),i("input",R({class:["p-inputtext p-component",{"p-filled":l.filled}],value:a.modelValue,onInput:t[1]||(t[1]=(...p)=>l.onInput&&l.onInput(...p))},e.$attrs),null,16,["value"])}ue.render=oe;var V={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const pe={class:"p-submenu-list",role:"tree"},me={class:"p-menuitem-text"},be={class:"p-menuitem-text"},he={class:"p-toggleable-content"};function ye(e,t,a,d,c,l){const p=y("router-link"),u=y("PanelMenuSub",!0);return s(),i("ul",pe,[(s(!0),i(h,null,w(a.model,(n,m)=>(s(),i(h,{key:l.label(n)+m.toString()},[l.visible(n)&&!n.separator?(s(),i("li",{key:0,role:"none",class:l.getItemClass(n),style:n.style},[a.template?(s(),i(I(a.template),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!l.disabled(n)?(s(),i(p,{key:0,to:n.to,custom:""},{default:x(({navigate:b,href:v,isActive:k,isExactActive:g})=>[r("a",{href:v,class:l.linkClass(n,{isRouterActive:k,isExactActive:g}),onClick:C=>l.onItemClick(C,n,b),role:"treeitem","aria-expanded":l.isActive(n)},[r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",me,f(l.label(n)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.linkClass(n),target:n.target,onClick:b=>l.onItemClick(b,n),role:"treeitem","aria-expanded":l.isActive(n),tabindex:l.disabled(n)?null:"0"},[n.items?(s(),i("span",{key:0,class:l.getSubmenuIcon(n)},null,2)):o("",!0),r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",be,f(l.label(n)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),r(P,{name:"p-toggleable-content"},{default:x(()=>[T(r("div",he,[l.visible(n)&&n.items?(s(),i(u,{model:n.items,key:l.label(n)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=b=>e.$emit("item-toggle",b)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):o("",!0)],512),[[E,l.isActive(n)]])]),_:2},1024)],6)):o("",!0),l.visible(n)&&n.separator?(s(),i("li",{class:["p-menu-separator",n.class],style:n.style,key:"separator"+m.toString()},null,6)):o("",!0)],64))),128))])}V.render=ye;var z={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=_({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:V},computed:{ariaId(){return U()}}};const fe={class:"p-panelmenu p-component"},ve={class:"p-menuitem-text"},xe={class:"p-menuitem-text"},ke={key:0,class:"p-panelmenu-content"};function ge(e,t,a,d,c,l){const p=y("router-link"),u=y("PanelMenuSub");return s(),i("div",fe,[(s(!0),i(h,null,w(a.model,(n,m)=>(s(),i(h,{key:l.label(n)+"_"+m},[l.visible(n)?(s(),i("div",{key:0,class:l.getPanelClass(n),style:n.style},[r("div",{class:l.getHeaderClass(n),style:n.style},[e.$slots.item?(s(),i(I(e.$slots.item),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!l.disabled(n)?(s(),i(p,{key:0,to:n.to,custom:""},{default:x(({navigate:b,href:v,isActive:k,isExactActive:g})=>[r("a",{href:v,class:l.getHeaderLinkClass(n,{isActive:k,isExactActive:g}),onClick:C=>l.onItemClick(C,n,b),role:"treeitem"},[n.icon?(s(),i("span",{key:0,class:l.getPanelIcon(n)},null,2)):o("",!0),r("span",ve,f(l.label(n)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.getHeaderLinkClass(n),onClick:b=>l.onItemClick(b,n),tabindex:l.disabled(n)?null:"0","aria-expanded":l.isActive(n),id:l.ariaId+"_header_"+m,"aria-controls":l.ariaId+"_content_"+m},[n.items?(s(),i("span",{key:0,class:l.getPanelToggleIcon(n)},null,2)):o("",!0),n.icon?(s(),i("span",{key:1,class:l.getPanelIcon(n)},null,2)):o("",!0),r("span",xe,f(l.label(n)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),r(P,{name:"p-toggleable-content"},{default:x(()=>[T(r("div",{class:"p-toggleable-content",role:"region",id:l.ariaId+"_content_"+m,"aria-labelledby":l.ariaId+"_header_"+m},[n.items?(s(),i("div",ke,[r(u,{model:n.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:l.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):o("",!0)],8,["id","aria-labelledby"]),[[E,l.isActive(n)]])]),_:2},1024)],6)):o("",!0)],64))),128))])}function Ce(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var _e=`
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
`;Ce(_e);z.render=ge;const Be=X({props:{title:null,navigatable:null},emits:["save","navigate"],setup(e,{emit:t}){const a=e,d=O(),c=()=>{const[,n]=location.pathname.match(/\/(playbook|contract)\//)||[];return n},l=(n,m)=>m.path.find(b=>b.equals(d.cache.get(a.navigatable.id)))?B(_({},n),{style:"font-weight:bold"}):n,p=Y(a.navigatable.modules),u=G(()=>[{label:"Startseite",icon:"pi pi-angle-left",to:`/mitra-frontend/${d.entryPoint}`},{key:"1",label:a.title,icon:"pi pi-angle-down",to:`/mitra-frontend/${c()}/${a.navigatable.id}`,items:p.value.map(n=>l({label:n.text,command:()=>t("navigate",n.path[0])},n))},{label:"Speichern",icon:"pi pi-download",command:()=>t("save")}]);return(n,m)=>(s(),i(N(z),{model:N(u),"expanded-keys":{"1":!0},class:"w-64"},null,8,["model"]))}});export{Be as _,$ as a,se as b,ue as s};
