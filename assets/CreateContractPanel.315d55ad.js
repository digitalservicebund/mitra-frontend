import{o as a,c as d,k as l,l as i,i as o,f as m,r as f,g as v,h as c,w as n,u as h,j as p}from"./vendor.cd6d337b.js";var _={name:"Card"};const y={class:"p-card p-component"},$={key:0,class:"p-card-header"},b={class:"p-card-body"},k={key:0,class:"p-card-title"},g={key:1,class:"p-card-subtitle"},C={class:"p-card-content"},V={key:2,class:"p-card-footer"};function N(e,r,u,t,s,z){return a(),d("div",y,[e.$slots.header?(a(),d("div",$,[l(e.$slots,"header")])):i("",!0),o("div",b,[e.$slots.title?(a(),d("div",k,[l(e.$slots,"title")])):i("",!0),e.$slots.subtitle?(a(),d("div",g,[l(e.$slots,"subtitle")])):i("",!0),o("div",C,[l(e.$slots,"content")]),e.$slots.footer?(a(),d("div",V,[l(e.$slots,"footer")])):i("",!0)])])}function B(e,r){r===void 0&&(r={});var u=r.insertAt;if(!(!e||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",u==="top"&&t.firstChild?t.insertBefore(s,t.firstChild):t.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var w=`
.p-card-header img {
    width: 100%;
}
`;B(w);_.render=N;const T=c("h2",{class:"font-black mt-8 mb-2"},"Vertrag erstellen",-1),E={class:"flex flex-row"},j=c("span",{class:"material-icons-outlined hover:bg-gray-50","aria-hidden":"true"},"cloud",-1),S=p(" Neuer EVB-IT Cloud Vertrag "),x=c("span",{class:"material-icons-outlined hover:bg-gray-50","aria-hidden":"true"},"edit",-1),A=p(" Vertrag weiter bearbeiten "),I=c("span",{class:"material-icons-outlined hover:bg-gray-50","aria-hidden":"true"},"add",-1),P=p(" Neuer Vertrag aus lokalem Playbook "),D=m({setup(e){return(r,u)=>{const t=f("router-link");return a(),v("section",null,[T,c("div",E,[o(h(_),null,{content:n(()=>[o(t,{to:"/mitra-frontend/contract/new",class:"block"},{default:n(()=>[j,S]),_:1})]),_:1}),o(h(_),null,{content:n(()=>[o(t,{to:"/mitra-frontend/contract/open",class:"block"},{default:n(()=>[x,A]),_:1})]),_:1}),o(h(_),null,{content:n(()=>[o(t,{to:"/mitra-frontend/contract/open-playbook",class:"block"},{default:n(()=>[I,P]),_:1})]),_:1})])])}}});export{D as _,_ as s};
