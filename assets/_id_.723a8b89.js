import{s as g}from"./button.esm.fcff9ce8.js";import{f as m,a8 as x,q as $,r as w,o as i,g as d,h as t,j as o,u as s,a1 as N,a2 as S,F as M,s as B,w as u,c as p,t as _,k as C}from"./vendor.0137cc33.js";import{u as P,d as F}from"./session.de0901a5.js";import{b as V}from"./provide.06bfa9c2.js";import{_ as R}from"./Breadcrumb.0d0849d1.js";import{_ as T,b as U}from"./SideMenu.1b445da5.js";import{_ as j}from"./Metadata.d638e377.js";import"./main.fd4decb8.js";const q={class:"flex h-full"},z={class:"flex-none"},D={class:"flex-1 px-8"},E={class:"edit"},L=t("p",null,[t("small",null,"Playbook")],-1),A={class:"mt-16"},G=t("h2",{class:"font-bold text-lg"},"Module",-1),H={class:"mt-4 border p-4 shadow-md"},I={open:""},J={class:"text-lg"},K=t("span",{class:"material-icons-outlined text-base","aria-hidden":"true"}," add ",-1),O=C(" Neues Modul "),Q=m({setup(c){const l=P(),r=x(),f=V(),e=$(l.playbook),h=a=>{e.value.title=a,l.refresh({playbook:e.value})},b=()=>{f.save(e.value)},k=async a=>{await r.push(`/mitra-frontend/playbook/${e.value.id}/module/${a.id}`)},v=async()=>{const a=new F;e.value.addModules(a),l.refresh({playbook:e.value}),await r.push(`/mitra-frontend/playbook/${e.value.id}/module/${a.id}`)};return(a,W)=>{const y=w("router-link");return i(),d("div",q,[t("nav",z,[o(T,{title:s(e).title,navigatable:s(e),onSave:b,onNavigate:k},null,8,["title","navigatable"])]),t("main",D,[t("header",E,[o(R,{"current-title":s(e).title,"parent-items":[]},null,8,["current-title"]),L,o(U,{editable:s(e).title,button:"",h1:"",onUpdate:h},null,8,["editable"]),o(j,N(S(s(e).metadata)),null,16)]),t("section",A,[G,t("ol",null,[(i(!0),d(M,null,B(s(e).modules,n=>(i(),p(y,{key:n.id,to:`/mitra-frontend/playbook/${s(e).id}/module/${n.id}`,class:"block"},{default:u(()=>[t("li",H,[t("details",I,[t("summary",J,_(n.title),1),t("p",null,_(n.steps.length)+" Fragen",1)])])]),_:2},1032,["to"]))),128))]),o(s(g),{type:"button",class:"mt-8",onClick:v},{default:u(()=>[K,O]),_:1})])])])}}}),le=m({props:{id:null},setup(c){return(l,r)=>(i(),p(Q,{key:c.id}))}});export{le as default};
