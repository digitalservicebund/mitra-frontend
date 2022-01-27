import{r as u,o as i,c as s,F as p,w as C,i as m,l as o,t as b,M as g,q as B,Y as _,k as h,n as w}from"./vendor.0ac36c96.js";import{s as I}from"./button.esm.392df4ef.js";var f={name:"BreadcrumbItem",props:{item:null,template:null,exact:null},methods:{onClick(e,l){this.item.command&&this.item.command({originalEvent:e,item:this.item}),this.item.to&&l&&l(e)},containerClass(e){return[{"p-disabled":this.disabled(e)},this.item.class]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{iconClass(){return["p-menuitem-icon",this.item.icon]}}};const V={key:1,class:"p-menuitem-text"},A={key:1,class:"p-menuitem-text"};function S(e,l,t,c,a,n){const d=u("router-link");return n.visible()?(i(),s("li",{key:0,class:n.containerClass(t.item)},[t.template?(i(),s(g(t.template),{key:1,item:t.item},null,8,["item"])):(i(),s(p,{key:0},[t.item.to?(i(),s(d,{key:0,to:t.item.to,custom:""},{default:C(({navigate:r,href:y,isActive:v,isExactActive:x})=>[m("a",{href:y,class:n.linkClass({isActive:v,isExactActive:x}),onClick:k=>n.onClick(k,r)},[t.item.icon?(i(),s("span",{key:0,class:n.iconClass},null,2)):o("",!0),t.item.label?(i(),s("span",V,b(n.label()),1)):o("",!0)],10,["href","onClick"])]),_:1},8,["to"])):(i(),s("a",{key:1,href:t.item.url||"#",class:n.linkClass(),onClick:l[1]||(l[1]=(...r)=>n.onClick&&n.onClick(...r)),target:t.item.target},[t.item.icon?(i(),s("span",{key:0,class:n.iconClass},null,2)):o("",!0),t.item.label?(i(),s("span",A,b(n.label()),1)):o("",!0)],10,["href","target"]))],64))],2)):o("",!0)}f.render=S;var T={name:"Breadcrumb",props:{model:{type:Array,default:null},home:{type:null,default:null},exact:{type:Boolean,default:!0}},components:{BreadcrumbItem:f}};const E={class:"p-breadcrumb p-component","aria-label":"Breadcrumb"},N=m("li",{class:"p-breadcrumb-chevron pi pi-chevron-right"},null,-1);function j(e,l,t,c,a,n){const d=u("BreadcrumbItem");return i(),s("nav",E,[m("ul",null,[t.home?(i(),s(d,{key:0,item:t.home,class:"p-breadcrumb-home",template:e.$slots.item,exact:t.exact},null,8,["item","template","exact"])):o("",!0),(i(!0),s(p,null,B(t.model,r=>(i(),s(p,{key:r.label},[N,m(d,{item:r,template:e.$slots.item,exact:t.exact},null,8,["item","template","exact"])],64))),128))])])}function z(e,l){l===void 0&&(l={});var t=l.insertAt;if(!(!e||typeof document=="undefined")){var c=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var D=`
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
`;z(D);T.render=j;var F={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:I}};const K={key:1,class:"p-inplace-content"};function q(e,l,t,c,a,n){const d=u("IPButton");return i(),s("div",{class:n.containerClass},[a.d_active?(i(),s("div",K,[h(e.$slots,"content"),t.closable?(i(),s(d,{key:0,icon:"pi pi-times",onClick:n.close},null,8,["onClick"])):o("",!0)])):(i(),s("div",{key:0,class:n.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:l[1]||(l[1]=(...r)=>n.open&&n.open(...r)),onKeydown:l[2]||(l[2]=_((...r)=>n.open&&n.open(...r),["enter"]))},[h(e.$slots,"display")],42,["tabindex"]))],2)}function L(e,l){l===void 0&&(l={});var t=l.insertAt;if(!(!e||typeof document=="undefined")){var c=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var M=`
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
`;L(M);F.render=q;var P={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function Y(e,l,t,c,a,n){return i(),s("input",w({class:["p-inputtext p-component",{"p-filled":n.filled}],value:t.modelValue,onInput:l[1]||(l[1]=(...d)=>n.onInput&&n.onInput(...d))},e.$attrs),null,16,["value"])}P.render=Y;export{T as a,F as b,P as s};
