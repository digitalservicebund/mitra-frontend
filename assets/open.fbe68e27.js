import{_ as m,s as h}from"./NavigateToHome.205748fd.js";import{f as r,p as f,a6 as b,o as c,g as y,i,h as o,w as l,u as k,F as j,j as w,c as x}from"./vendor.301f9710.js";import{d as g,c as B}from"./provide.d3b7ad1a.js";import"./button.esm.beac9337.js";import"./session.51340ef0.js";import"./main.2437d9e7.js";const P={id:"open-playbook"},v=o("h2",{class:"font-bold mb-4"},"Playbook weiter bearbeiten",-1),N={for:"upload-playbook"},C=w("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),E={class:"mt-4"},F=o("input",{id:"upload-playbook",type:"file"},null,-1),S=o("p",null,"Datei in diesen Bereich ziehen.",-1),V=r({setup(p){const a=g(),t=B(),u=async e=>{const s=e==null?void 0:e.files,n=await a.load(s instanceof Array?s[0]:s);t.save(n),await _.push(`/mitra-frontend/playbook/${n.id}`)},d=f("Computer durchsuchen"),_=b();return(e,s)=>(c(),y(j,null,[i(m),o("main",P,[v,o("label",N,[C,o("div",E,[i(k(h),{title:"Playbook ausw\xE4hlen","choose-label":d.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:u},{empty:l(()=>[S]),default:l(()=>[F]),_:1},8,["choose-label"])])])])],64))}}),H=r({setup(p){return(a,t)=>(c(),x(V))}});export{H as default};
