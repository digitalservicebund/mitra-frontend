import{r as f,o as a,c as s,F as b,w as _,i as u,l as o,t as p,M as B,q as w,Y as I,k as y,n as A,f as S,g as m,h}from"./vendor.080d7534.js";import{s as V}from"./button.esm.a9f2ef5f.js";var x={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,n){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&n&&n(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const E={key:1,class:"p-menuitem-text"},N={key:1,class:"p-menuitem-text"};function T(e,n,t,c,i,l){const r=f("router-link");return l.visible()?(a(),s("li",{key:0,class:l.containerClass(t.item)},[t.template?(a(),s(B(t.template),{key:1,item:t.item},null,8,["item"])):(a(),s(b,{key:0},[t.item.to?(a(),s(r,{key:0,to:t.item.to,custom:""},{default:_(({navigate:d,href:v,isActive:k,isExactActive:C})=>[u("a",{href:v,class:l.linkClass({isActive:k,isExactActive:C}),onClick:g=>l.onClick(g,d)},[t.item.icon?(a(),s("span",{key:0,class:l.iconClass},null,2)):o("",!0),t.item.label?(a(),s("span",E,p(l.label()),1)):o("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(a(),s("a",{key:1,href:t.item.url||"#",class:l.linkClass(),onClick:n[1]||(n[1]=(...d)=>l.onClick&&l.onClick(...d)),target:t.item.target},[t.item.icon?(a(),s("span",{key:0,class:l.iconClass},null,2)):o("",!0),t.item.label?(a(),s("span",N,p(l.label()),1)):o("",!0)],10,["href","target"]))],64))],2)):o("",!0)}x.render=T;var D={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:x}};const j={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},z=u("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function L(e,n,t,c,i,l){const r=f("BreadcrumbItem");return a(),s("nav",j,[u("ul",null,[t.home?(a(),s(r,{key:0,item:t.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:t.exact},null,8,["item","template","exact"])):o("",!0),(a(!0),s(b,null,w(t.model,d=>(a(),s(b,{key:d.label},[z,u(r,{item:d,template:e.$slots.item,exact:t.exact},null,8,["item","template","exact"])],64))),128))])])}function $(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document=="undefined")){var c=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var F=`
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
`;$(F);D.render=L;var K={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:V}};const O={key:1,class:"p-inplace-content"};function q(e,n,t,c,i,l){const r=f("IPButton");return a(),s("div",{class:l.containerClass},[i.d_active?(a(),s("div",O,[y(e.$slots,"content"),t.closable?(a(),s(r,{key:0,icon:"pi pi-times",onClick:l.close},null,8,["onClick"])):o("",!0)])):(a(),s("div",{key:0,class:l.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:n[1]||(n[1]=(...d)=>l.open&&l.open(...d)),onKeydown:n[2]||(n[2]=I((...d)=>l.open&&l.open(...d),["enter"]))},[y(e.$slots,"display")],42,["tabindex"]))],2)}function M(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document=="undefined")){var c=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var P=`
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
`;M(P);K.render=q;var Y={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Z(e,n,t,c,i,l){return a(),s("input",A({class:["p-inputtext p-component",{"p-filled":l.filled}],value:t.modelValue,onInput:n[1]||(n[1]=(...r)=>l.onInput&&l.onInput(...r))},e.$attrs),null,16,["value"])}Y.render=Z;const G={class:"flex flex-col flex-wrap max-h-12 mt-4"},H=h("dt",{class:"text-xs"},"Datei erstellt am",-1),J=["datetime"],Q={key:1},R=h("dt",{class:"text-xs"},"Zuletzt gespeichert am",-1),U=["datetime"],W={key:1},te=S({props:{createdAt:null,savedAt:null},setup(e){const n="de-DE",t={day:"2-digit",month:"2-digit",year:"numeric"};return(c,i)=>(a(),m("dl",G,[H,h("dd",null,[e.createdAt?(a(),m("time",{key:0,datetime:e.createdAt.toISOString()},p(e.createdAt.toLocaleDateString(n,t)),9,J)):(a(),m("span",Q,"-"))]),R,h("dd",null,[e.savedAt?(a(),m("time",{key:0,datetime:e.savedAt.toISOString()},p(e.savedAt.toLocaleDateString(n,t)),9,U)):(a(),m("span",W,"-"))])]))}});export{te as _,D as a,K as b,Y as s};
