import{N as h,s as f}from"./NavigateToHome.6105f04d.js";import{f as n,p as b,n as y,o as r,g as k,i as l,h as o,w as i,u as x,F as g,j,c as w}from"./vendor.267de9a6.js";import{C as N,c as C,a as v}from"./provide.e2a3ce7d.js";import"./button.esm.c5d19d9a.js";import"./index.2598fe5a.js";const B={id:"open-playbook"},P=o("h2",{class:"font-bold mb-4"},"Neuen Vertrag erstellen",-1),V={for:"upload-playbook"},E=j("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),F={class:"mt-4"},R=o("input",{id:"upload-playbook",type:"file"},null,-1),S=o("p",null,"Datei in diesen Bereich ziehen.",-1),T=n({setup(p){const a=C(),s=v(),u=async e=>{const t=e==null?void 0:e.files,m=await a.load(t instanceof Array?t[0]:t),c=N.fromPlaybook(m);s.save(c),await _.push(`/mitra-frontend/contract/${c.id}`)},d=b("Computer durchsuchen"),_=y();return(e,t)=>(r(),k(g,null,[l(h),o("main",B,[P,o("label",V,[E,o("div",F,[l(x(f),{title:"Playbook ausw\xE4hlen","choose-label":d.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:u},{empty:i(()=>[S]),default:i(()=>[R]),_:1},8,["choose-label"])])])])],64))}}),I=n({setup(p){return(a,s)=>(r(),w(T))}});export{I as default};
