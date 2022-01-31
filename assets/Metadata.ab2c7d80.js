import{s as f}from"./button.esm.beac9337.js";import{r as h,o as l,c as o,Y as y,k as u,l as v,n as x,f as b,g as d,h as c,t as m}from"./vendor.301f9710.js";var k={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{active(e){this.d_active=e}},data(){return{d_active:this.active}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]}},components:{IPButton:f}};const g={key:1,class:"p-inplace-content"};function C(e,t,s,i,n,a){const p=h("IPButton");return l(),o("div",{class:a.containerClass},[n.d_active?(l(),o("div",g,[u(e.$slots,"content"),s.closable?(l(),o(p,{key:0,icon:"pi pi-times",onClick:a.close},null,8,["onClick"])):v("",!0)])):(l(),o("div",{key:0,class:a.displayClass,tabindex:e.$attrs.tabindex||"0",onClick:t[1]||(t[1]=(...r)=>a.open&&a.open(...r)),onKeydown:t[2]||(t[2]=y((...r)=>a.open&&a.open(...r),["enter"]))},[u(e.$slots,"display")],42,["tabindex"]))],2)}function _(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var B=`
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
`;_(B);k.render=C;var I={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function S(e,t,s,i,n,a){return l(),o("input",x({class:["p-inputtext p-component",{"p-filled":a.filled}],value:s.modelValue,onInput:t[1]||(t[1]=(...p)=>a.onInput&&a.onInput(...p))},e.$attrs),null,16,["value"])}I.render=S;const A={class:"flex flex-col flex-wrap max-h-12 mt-4"},V=c("dt",{class:"text-xs"},"Datei erstellt am",-1),$=["datetime"],w={key:1},D=c("dt",{class:"text-xs"},"Zuletzt gespeichert am",-1),E=["datetime"],N={key:1},j=b({props:{createdAt:null,savedAt:null},setup(e){const t="de-DE",s={day:"2-digit",month:"2-digit",year:"numeric"};return(i,n)=>(l(),d("dl",A,[V,c("dd",null,[e.createdAt?(l(),d("time",{key:0,datetime:e.createdAt.toISOString()},m(e.createdAt.toLocaleDateString(t,s)),9,$)):(l(),d("span",w,"-"))]),D,c("dd",null,[e.savedAt?(l(),d("time",{key:0,datetime:e.savedAt.toISOString()},m(e.savedAt.toLocaleDateString(t,s)),9,E)):(l(),d("span",N,"-"))])]))}});export{j as _,k as a,I as s};
