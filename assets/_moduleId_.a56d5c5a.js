import{f as p,a4 as _,o as s,g as d,h as o,i as f,u as a,t as i,F as k,q as h,c as g}from"./vendor.0ac36c96.js";import{c as v,d as I}from"./provide.cb373c66.js";import{_ as x}from"./SideMenu.4f1ebd4e.js";import"./main.44d70227.js";import"./session.eb1bb6e7.js";const B={class:"flex h-full"},S={class:"flex-none"},j={class:"mt-16"},N=o("h2",{class:"font-bold text-lg"},"Fragen",-1),R={open:""},$={class:"text-lg"},F=p({props:{playbookId:null,moduleId:null},setup(t){const l=t,r=_(),e=v().findById(l.playbookId),m=I(),c=e.findModuleById(l.moduleId),y=()=>{m.save(e)},b=async u=>{await r.push(`/mitra-frontend/playbook/${e.id}/module/${u.id}`)};return(u,M)=>(s(),d("div",B,[o("nav",S,[f(x,{title:a(e).title,navigatable:a(e),onSave:y,onNavigate:b},null,8,["title","navigatable"])]),o("main",null,[o("h1",null,i(a(c).text),1),o("section",j,[N,o("ol",null,[(s(!0),d(k,null,h(a(c).steps,n=>(s(),d("li",{key:n.id,class:"mt-4 border p-4 shadow-md"},[o("details",R,[o("summary",$,i(n.text),1),o("p",null,"Typ: "+i(n.type),1)])]))),128))])])])]))}}),E=p({props:{playbookId:null,moduleId:null},setup(t){return(l,r)=>(s(),g(F,{"playbook-id":t.playbookId,"module-id":t.moduleId},null,8,["playbook-id","module-id"]))}});export{E as default};
