var Q=Object.defineProperty,R=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var E=(e,t,a)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,I=(e,t)=>{for(var a in t||(t={}))G.call(t,a)&&E(e,a,t[a]);if(S)for(var a of S(t))J.call(t,a)&&E(e,a,t[a]);return e},T=(e,t)=>R(e,Y(t));import{r as v,o as s,c as i,F as b,w as y,j as r,m as o,t as f,N as B,s as A,_ as P,l as V,p as O,f as z,q as N,L as W,g as w,M as K,u as k,a5 as X,h as Z,k as $,Y as ee,a6 as M,Q as D,A as te,a0 as ne}from"./vendor.0137cc33.js";import{s as H}from"./button.esm.fcff9ce8.js";import{u as le}from"./session.5ad62ff8.js";var L={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&t&&t(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const ae={key:1,class:"p-menuitem-text"},se={key:1,class:"p-menuitem-text"};function ie(e,t,a,d,c,l){const p=v("router-link");return l.visible()?(s(),i("li",{key:0,class:l.containerClass(a.item)},[a.template?(s(),i(B(a.template),{key:1,item:a.item},null,8,["item"])):(s(),i(b,{key:0},[a.item.to?(s(),i(p,{key:0,to:a.item.to,custom:""},{default:y(({navigate:u,href:n,isActive:m,isExactActive:h})=>[r("a",{href:n,class:l.linkClass({isActive:m,isExactActive:h}),onClick:x=>l.onClick(x,u)},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):o("",!0),a.item.label?(s(),i("span",ae,f(l.label()),1)):o("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(s(),i("a",{key:1,href:a.item.url||"#",class:l.linkClass(),onClick:t[1]||(t[1]=(...u)=>l.onClick&&l.onClick(...u)),target:a.item.target},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):o("",!0),a.item.label?(s(),i("span",se,f(l.label()),1)):o("",!0)],10,["href","target"]))],64))],2)):o("",!0)}L.render=ie;var ce={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:L}};const de={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},re=r("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function ue(e,t,a,d,c,l){const p=v("BreadcrumbItem");return s(),i("nav",de,[r("ul",null,[a.home?(s(),i(p,{key:0,item:a.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])):o("",!0),(s(!0),i(b,null,A(a.model,u=>(s(),i(b,{key:u.label},[re,r(p,{item:u,template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])],64))),128))])])}function oe(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var pe=`
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
`;oe(pe);ce.render=ue;var j={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:H}};const me={key:1,class:"p-inplace-content"};function he(e,t,a,d,c,l){const p=v("IPButton");return s(),i("div",{class:l.containerClass},[c.d_active?(s(),i("div",me,[V(e.$slots,"content"),a.closable?(s(),i(p,{key:0,icon:"pi pi-times",onClick:l.close},null,8,["onClick"])):o("",!0)])):(s(),i("div",{key:0,class:l.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:t[1]||(t[1]=(...u)=>l.open&&l.open(...u)),onKeydown:t[2]||(t[2]=P((...u)=>l.open&&l.open(...u),["enter"]))},[V(e.$slots,"display")],42,["tabindex"]))],2)}function be(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var ye=`
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
`;be(ye);j.render=he;var q={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function fe(e,t,a,d,c,l){return s(),i("input",O({class:["p-inputtext p-component",{"p-filled":l.filled}],value:a.modelValue,onInput:t[1]||(t[1]=(...p)=>l.onInput&&l.onInput(...p))},e.$attrs),null,16,["value"])}q.render=fe;const ve={key:0,class:"block mr-1 font-bold text-xl"},xe={key:1,class:"block mr-1"},ke=Z("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," edit ",-1),ge=$(" \xC4ndern "),He=z({props:{editable:null,placeholder:null,button:{type:Boolean},h1:{type:Boolean}},emits:["update"],setup(e,{emit:t}){const d=N(e.editable),c=N(),l=()=>{c.value.close(),t("update",d.value||"")},p=()=>{c.value.open()};return(u,n)=>{const m=W("focus");return s(),w(b,null,[r(k(j),{ref_key:"edit",ref:c,closable:!1,class:X([d.value?"":"text-slate-400"])},{display:y(()=>[e.h1?(s(),w("h1",ve,f(d.value||e.placeholder||"Klicken zum Bearbeiten"),1)):(s(),w("h2",xe,f(d.value||e.placeholder||"Klicken zum Bearbeiten"),1))]),content:y(()=>[K(r(k(q),{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=h=>d.value=h),class:"mr-1","aria-label":"Eigenschaft \xE4ndern",onKeyup:P(l,["enter"]),onBlur:l},null,8,["modelValue","onKeyup"]),[[m]])]),_:1},8,["class"]),e.button?(s(),i(k(H),{key:0,type:"button",class:"mx-2",onClick:p},{default:y(()=>[ke,ge]),_:1})):o("",!0)],64)}}});var F={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const _e={class:"p-submenu-list",role:"tree"},Ce={class:"p-menuitem-text"},Ie={class:"p-menuitem-text"},we={class:"p-toggleable-content"};function Be(e,t,a,d,c,l){const p=v("router-link"),u=v("PanelMenuSub",!0);return s(),i("ul",_e,[(s(!0),i(b,null,A(a.model,(n,m)=>(s(),i(b,{key:l.label(n)+m.toString()},[l.visible(n)&&!n.separator?(s(),i("li",{key:0,role:"none",class:l.getItemClass(n),style:n.style},[a.template?(s(),i(B(a.template),{key:1,item:n},null,8,["item"])):(s(),i(b,{key:0},[n.to&&!l.disabled(n)?(s(),i(p,{key:0,to:n.to,custom:""},{default:y(({navigate:h,href:x,isActive:g,isExactActive:_})=>[r("a",{href:x,class:l.linkClass(n,{isRouterActive:g,isExactActive:_}),onClick:C=>l.onItemClick(C,n,h),role:"treeitem","aria-expanded":l.isActive(n)},[r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",Ce,f(l.label(n)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.linkClass(n),target:n.target,onClick:h=>l.onItemClick(h,n),role:"treeitem","aria-expanded":l.isActive(n),tabindex:l.disabled(n)?null:"0"},[n.items?(s(),i("span",{key:0,class:l.getSubmenuIcon(n)},null,2)):o("",!0),r("span",{class:["p-menuitem-icon",n.icon]},null,2),r("span",Ie,f(l.label(n)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),r(D,{name:"p-toggleable-content"},{default:y(()=>[K(r("div",we,[l.visible(n)&&n.items?(s(),i(u,{model:n.items,key:l.label(n)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=h=>e.$emit("item-toggle",h)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):o("",!0)],512),[[M,l.isActive(n)]])]),_:2},1024)],6)):o("",!0),l.visible(n)&&n.separator?(s(),i("li",{class:["p-menu-separator",n.class],style:n.style,key:"separator"+m.toString()},null,6)):o("",!0)],64))),128))])}F.render=Be;var U={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=I({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:F},computed:{ariaId(){return ee()}}};const Ae={class:"p-panelmenu p-component"},Ke={class:"p-menuitem-text"},Se={class:"p-menuitem-text"},Ee={key:0,class:"p-panelmenu-content"};function Te(e,t,a,d,c,l){const p=v("router-link"),u=v("PanelMenuSub");return s(),i("div",Ae,[(s(!0),i(b,null,A(a.model,(n,m)=>(s(),i(b,{key:l.label(n)+"_"+m},[l.visible(n)?(s(),i("div",{key:0,class:l.getPanelClass(n),style:n.style},[r("div",{class:l.getHeaderClass(n),style:n.style},[e.$slots.item?(s(),i(B(e.$slots.item),{key:1,item:n},null,8,["item"])):(s(),i(b,{key:0},[n.to&&!l.disabled(n)?(s(),i(p,{key:0,to:n.to,custom:""},{default:y(({navigate:h,href:x,isActive:g,isExactActive:_})=>[r("a",{href:x,class:l.getHeaderLinkClass(n,{isActive:g,isExactActive:_}),onClick:C=>l.onItemClick(C,n,h),role:"treeitem"},[n.icon?(s(),i("span",{key:0,class:l.getPanelIcon(n)},null,2)):o("",!0),r("span",Ke,f(l.label(n)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.getHeaderLinkClass(n),onClick:h=>l.onItemClick(h,n),tabindex:l.disabled(n)?null:"0","aria-expanded":l.isActive(n),id:l.ariaId+"_header_"+m,"aria-controls":l.ariaId+"_content_"+m},[n.items?(s(),i("span",{key:0,class:l.getPanelToggleIcon(n)},null,2)):o("",!0),n.icon?(s(),i("span",{key:1,class:l.getPanelIcon(n)},null,2)):o("",!0),r("span",Se,f(l.label(n)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),r(D,{name:"p-toggleable-content"},{default:y(()=>[K(r("div",{class:"p-toggleable-content",role:"region",id:l.ariaId+"_content_"+m,"aria-labelledby":l.ariaId+"_header_"+m},[n.items?(s(),i("div",Ee,[r(u,{model:n.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:l.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):o("",!0)],8,["id","aria-labelledby"]),[[M,l.isActive(n)]])]),_:2},1024)],6)):o("",!0)],64))),128))])}function Ve(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var d=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&d.firstChild?d.insertBefore(c,d.firstChild):d.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var Ne=`
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
`;Ve(Ne);U.render=Te;const Le=z({props:{title:null,navigatable:null},emits:["save","navigate"],setup(e,{emit:t}){const a=e,d=le(),c=()=>{const[,n]=location.pathname.match(/\/(playbook|contract)\//)||[];return n},l=(n,m)=>m.path.find(h=>h.equals(d.lastEditedStep))?T(I({},n),{style:"font-weight:bold"}):n,p=te(a.navigatable.modules),u=ne(()=>[{label:"Startseite",icon:"pi pi-angle-left",to:`/mitra-frontend/${d.entryPoint}`},{key:"1",label:a.title,icon:"pi pi-angle-down",to:`/mitra-frontend/${c()}/${a.navigatable.id}`,items:p.value.map(n=>l({label:n.title,command:()=>t("navigate",n)},n))},{label:"Speichern",icon:"pi pi-download",command:()=>t("save")}]);return(n,m)=>(s(),i(k(U),{model:k(u),"expanded-keys":{"1":!0},class:"w-64"},null,8,["model"]))}});export{Le as _,ce as a,He as b,q as s};
