var G=Object.defineProperty,J=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var T=(e,t,a)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))Y.call(t,a)&&T(e,a,t[a]);if(E)for(var a of E(t))Z.call(t,a)&&T(e,a,t[a]);return e},P=(e,t)=>J(e,O(t));import{r as v,o as s,c as i,F as h,k as f,j as p,n as b,t as y,N as B,x as A,g as S,$ as z,h as g,a4 as M,u as x,X as D,m as V,p as $,q as N,L as ee,M as K,i as te,l as ne,W as le,a5 as H,Q as L,C as ae}from"./vendor.8502b632.js";import{u as j,P as se,e as ie}from"./main.810f1830.js";import{s as q}from"./button.esm.eee44a83.js";var F={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,t){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&t&&t(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const ce={key:1,class:"p-menuitem-text"},re={key:1,class:"p-menuitem-text"};function de(e,t,a,r,c,l){const d=v("router-link");return l.visible()?(s(),i("li",{key:0,class:l.containerClass(a.item)},[a.template?(s(),i(B(a.template),{key:1,item:a.item},null,8,["item"])):(s(),i(h,{key:0},[a.item.to?(s(),i(d,{key:0,to:a.item.to,custom:""},{default:f(({navigate:o,href:n,isActive:m,isExactActive:u})=>[p("a",{href:n,class:l.linkClass({isActive:m,isExactActive:u}),onClick:k=>l.onClick(k,o)},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):b("",!0),a.item.label?(s(),i("span",ce,y(l.label()),1)):b("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(s(),i("a",{key:1,href:a.item.url||"#",class:l.linkClass(),onClick:t[1]||(t[1]=(...o)=>l.onClick&&l.onClick(...o)),target:a.item.target},[a.item.icon?(s(),i("span",{key:0,class:l.iconClass},null,2)):b("",!0),a.item.label?(s(),i("span",re,y(l.label()),1)):b("",!0)],10,["href","target"]))],64))],2)):b("",!0)}F.render=de;var R={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:F}};const oe={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},ue=p("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function pe(e,t,a,r,c,l){const d=v("BreadcrumbItem");return s(),i("nav",oe,[p("ul",null,[a.home?(s(),i(d,{key:0,item:a.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])):b("",!0),(s(!0),i(h,null,A(a.model,o=>(s(),i(h,{key:o.label},[ue,p(d,{item:o,template:e.$slots.item,exact:a.exact},null,8,["item","template","exact"])],64))),128))])])}function me(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var be=`
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
`;me(be);R.render=pe;const he=["href","onClick"],fe={key:1},Fe=S({props:{currentTitle:null,parentItems:null},setup(e){const t=e,r={to:`/mitra-frontend/${j().entryPoint}`,label:"Startseite"},c=z(()=>{const l=[];let d="/mitra-frontend";const o=(n,m)=>{let u=m;return n instanceof se&&(u+=`/playbook/${n.id}`),n instanceof ie&&(u+=`/module/${n.id}`),u};return t.parentItems.map(n=>{d=o(n,d),l.push({label:n.title,disabled:!1,to:d})}),l.push({label:t.currentTitle,disabled:!0,to:""}),l});return(l,d)=>{const o=v("router-link");return s(),i(x(R),{home:r,model:x(c),class:"mb-4"},{item:f(({item:n})=>[p(o,{to:n.to,custom:""},{default:f(({href:m,navigate:u,isActive:k})=>[n.to?(s(),g("a",{key:0,href:m,class:M({"active-link":k}),onClick:u},y(n.label),11,he)):(s(),g("span",fe,y(n.label),1))]),_:2},1032,["to"])]),_:1},8,["model"])}}});var U={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:q}};const ye={key:1,class:"p-inplace-content"};function ve(e,t,a,r,c,l){const d=v("IPButton");return s(),i("div",{class:l.containerClass},[c.d_active?(s(),i("div",ye,[V(e.$slots,"content"),a.closable?(s(),i(d,{key:0,icon:"pi pi-times",onClick:l.close},null,8,["onClick"])):b("",!0)])):(s(),i("div",{key:0,class:l.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:t[1]||(t[1]=(...o)=>l.open&&l.open(...o)),onKeydown:t[2]||(t[2]=D((...o)=>l.open&&l.open(...o),["enter"]))},[V(e.$slots,"display")],42,["tabindex"]))],2)}function ke(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var xe=`
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
`;ke(xe);U.render=ve;var Q={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function ge(e,t,a,r,c,l){return s(),i("input",$({class:["p-inputtext p-component",{"p-filled":l.filled}],value:a.modelValue,onInput:t[1]||(t[1]=(...d)=>l.onInput&&l.onInput(...d))},e.$attrs),null,16,["value"])}Q.render=ge;const _e={key:0,class:"mr-1 font-bold text-xl"},Ce={key:1,class:"mr-1 inline-flex"},Ie=te("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," edit ",-1),we=ne(" \xC4ndern "),Re=S({props:{editable:null,placeholder:null,button:{type:Boolean},h1:{type:Boolean}},emits:["update"],setup(e,{emit:t}){const r=N(e.editable),c=N(),l=()=>{c.value.close(),t("update",r.value||"")},d=()=>{c.value.open()};return(o,n)=>{const m=ee("focus");return s(),g(h,null,[p(x(U),{ref_key:"edit",ref:c,closable:!1,class:M([r.value?"":"text-slate-400","flex"])},{display:f(()=>[e.h1?(s(),g("h1",_e,y(r.value||e.placeholder||"Klicken zum Bearbeiten"),1)):(s(),g("h2",Ce,y(r.value||e.placeholder||"Klicken zum Bearbeiten"),1))]),content:f(()=>[K(p(x(Q),{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=u=>r.value=u),class:"mr-1 mb-2","aria-label":"Eigenschaft \xE4ndern",onKeyup:D(l,["enter"]),onBlur:l},null,8,["modelValue","onKeyup"]),[[m]])]),_:1},8,["class"]),e.button?(s(),i(x(q),{key:0,type:"button",class:"mx-2 inline-flex align-top",onClick:d},{default:f(()=>[Ie,we]),_:1})):b("",!0)],64)}}});var W={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.$emit("item-toggle",{item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},getItemClass(e){return["p-menuitem",e.className]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getSubmenuIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!t,"pi-angle-down":t}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}}};const Be={class:"p-submenu-list",role:"tree"},Ae={class:"p-menuitem-text"},Se={class:"p-menuitem-text"},Ke={class:"p-toggleable-content"};function Ee(e,t,a,r,c,l){const d=v("router-link"),o=v("PanelMenuSub",!0);return s(),i("ul",Be,[(s(!0),i(h,null,A(a.model,(n,m)=>(s(),i(h,{key:l.label(n)+m.toString()},[l.visible(n)&&!n.separator?(s(),i("li",{key:0,role:"none",class:l.getItemClass(n),style:n.style},[a.template?(s(),i(B(a.template),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!l.disabled(n)?(s(),i(d,{key:0,to:n.to,custom:""},{default:f(({navigate:u,href:k,isActive:_,isExactActive:C})=>[p("a",{href:k,class:l.linkClass(n,{isRouterActive:_,isExactActive:C}),onClick:I=>l.onItemClick(I,n,u),role:"treeitem","aria-expanded":l.isActive(n)},[p("span",{class:["p-menuitem-icon",n.icon]},null,2),p("span",Ae,y(l.label(n)),1)],10,["href","onClick","aria-expanded"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.linkClass(n),target:n.target,onClick:u=>l.onItemClick(u,n),role:"treeitem","aria-expanded":l.isActive(n),tabindex:l.disabled(n)?null:"0"},[n.items?(s(),i("span",{key:0,class:l.getSubmenuIcon(n)},null,2)):b("",!0),p("span",{class:["p-menuitem-icon",n.icon]},null,2),p("span",Se,y(l.label(n)),1)],10,["href","target","onClick","aria-expanded","tabindex"]))],64)),p(L,{name:"p-toggleable-content"},{default:f(()=>[K(p("div",Ke,[l.visible(n)&&n.items?(s(),i(o,{model:n.items,key:l.label(n)+"_sub_",template:a.template,expandedKeys:a.expandedKeys,onItemToggle:t[1]||(t[1]=u=>e.$emit("item-toggle",u)),exact:a.exact},null,8,["model","template","expandedKeys","exact"])):b("",!0)],512),[[H,l.isActive(n)]])]),_:2},1024)],6)):b("",!0),l.visible(n)&&n.separator?(s(),i("li",{class:["p-menu-separator",n.class],style:n.style,key:"separator"+m.toString()},null,6)):b("",!0)],64))),128))])}W.render=Ee;var X={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,t,a){if(this.isActive(t)&&this.activeItem===null&&(this.activeItem=t),this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.activeItem&&this.activeItem===t?this.activeItem=null:this.activeItem=t,this.updateExpandedKeys({item:t,expanded:this.activeItem!=null}),t.to&&a&&a(e)},updateExpandedKeys(e){if(this.expandedKeys){let t=e.item,a=w({},this.expandedKeys);e.expanded?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const t=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!t," pi-chevron-down":t}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,t){return["p-panelmenu-header-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:W},computed:{ariaId(){return le()}}};const Te={class:"p-panelmenu p-component"},Pe={class:"p-menuitem-text"},Ve={class:"p-menuitem-text"},Ne={key:0,class:"p-panelmenu-content"};function ze(e,t,a,r,c,l){const d=v("router-link"),o=v("PanelMenuSub");return s(),i("div",Te,[(s(!0),i(h,null,A(a.model,(n,m)=>(s(),i(h,{key:l.label(n)+"_"+m},[l.visible(n)?(s(),i("div",{key:0,class:l.getPanelClass(n),style:n.style},[p("div",{class:l.getHeaderClass(n),style:n.style},[e.$slots.item?(s(),i(B(e.$slots.item),{key:1,item:n},null,8,["item"])):(s(),i(h,{key:0},[n.to&&!l.disabled(n)?(s(),i(d,{key:0,to:n.to,custom:""},{default:f(({navigate:u,href:k,isActive:_,isExactActive:C})=>[p("a",{href:k,class:l.getHeaderLinkClass(n,{isActive:_,isExactActive:C}),onClick:I=>l.onItemClick(I,n,u),role:"treeitem"},[n.icon?(s(),i("span",{key:0,class:l.getPanelIcon(n)},null,2)):b("",!0),p("span",Pe,y(l.label(n)),1)],10,["href","onClick"])]),_:2},1032,["to"])):(s(),i("a",{key:1,href:n.url,class:l.getHeaderLinkClass(n),onClick:u=>l.onItemClick(u,n),tabindex:l.disabled(n)?null:"0","aria-expanded":l.isActive(n),id:l.ariaId+"_header_"+m,"aria-controls":l.ariaId+"_content_"+m},[n.items?(s(),i("span",{key:0,class:l.getPanelToggleIcon(n)},null,2)):b("",!0),n.icon?(s(),i("span",{key:1,class:l.getPanelIcon(n)},null,2)):b("",!0),p("span",Ve,y(l.label(n)),1)],10,["href","onClick","tabindex","aria-expanded","id","aria-controls"]))],64))],6),p(L,{name:"p-toggleable-content"},{default:f(()=>[K(p("div",{class:"p-toggleable-content",role:"region",id:l.ariaId+"_content_"+m,"aria-labelledby":l.ariaId+"_header_"+m},[n.items?(s(),i("div",Ne,[p(o,{model:n.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:l.updateExpandedKeys,exact:a.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):b("",!0)],8,["id","aria-labelledby"]),[[H,l.isActive(n)]])]),_:2},1024)],6)):b("",!0)],64))),128))])}function Me(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var De=`
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
`;Me(De);X.render=ze;const Ue=S({props:{title:null,navigatable:null},emits:["save","navigate"],setup(e,{emit:t}){const a=e,r=j(),c=()=>{const[,n]=location.pathname.match(/\/(playbook|contract)\//)||[];return n},l=(n,m)=>m.path.find(u=>u.equals(r.lastEditedStep(a.navigatable.id)))?P(w({},n),{style:"font-weight:bold"}):n,d=ae(a.navigatable.modules),o=z(()=>[{label:"Startseite",icon:"pi pi-angle-left",to:`/mitra-frontend/${r.entryPoint}`},{key:"1",label:a.title,icon:"pi pi-angle-down",to:`/mitra-frontend/${c()}/${a.navigatable.id}`,items:d.value.map(n=>l({label:n.title,command:()=>t("navigate",n)},n))},{label:"Speichern",icon:"pi pi-download",command:()=>t("save")}]);return(n,m)=>(s(),i(x(X),{model:x(o),"expanded-keys":{"1":!0},class:"w-64"},null,8,["model"]))}});export{Ue as _,Fe as a,Re as b,Q as s};
