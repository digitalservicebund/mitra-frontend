import{_ as m,s as h}from"./NavigateToHome.205748fd.js";import{f as r,p as f,a6 as b,o as n,g,i,h as e,w as l,u as j,F as w,j as x,c as y}from"./vendor.301f9710.js";import{b as V,m as k}from"./provide.e0dbe768.js";import"./button.esm.beac9337.js";import"./session.51340ef0.js";import"./main.bcb8916b.js";const B={id:"open-contract"},C=e("h2",{class:"font-bold mb-4"},"Vertrag bearbeiten",-1),v={for:"upload-contract"},N=x("W\xE4hlen Sie einen Vertrag von Ihrer Festplatte aus. "),E={class:"mt-4"},F=e("input",{id:"upload-contract",type:"file"},null,-1),R=e("p",null,"Datei in diesen Bereich ziehen.",-1),S=r({setup(u){const s=V(),a=k(),p=async t=>{const o=t==null?void 0:t.files,c=await s.load(o instanceof Array?o[0]:o);a.save(c),await _.push(`/mitra-frontend/contract/${c.id}`)},d=f("Computer durchsuchen"),_=b();return(t,o)=>(n(),g(w,null,[i(m),e("section",B,[C,e("label",v,[N,e("div",E,[i(j(h),{title:"Vertrag ausw\xE4hlen","choose-label":d.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:p},{empty:l(()=>[R]),default:l(()=>[F]),_:1},8,["choose-label"])])])])],64))}}),I=r({setup(u){return(s,a)=>(n(),y(S))}});export{I as default};
