import{N as h,s as b}from"./NavigateToHome.f4e1bb36.js";import{e as n,f,u as k,o as r,g as y,h as l,i as o,w as i,j as x,F as N,k as j,c as w}from"./vendor.e8bb2773.js";import{C,m as g,a as B}from"./index.abe5e2ec.js";import"./button.esm.f922e6b4.js";const F={id:"open-playbook"},S=o("h2",{class:"font-bold mb-4"},"Neuen Vertrag erstellen",-1),V={for:"upload-playbook"},v=j("W\xE4hlen Sie ein Playbook von Ihrer Festplatte aus. "),L={class:"mt-4"},P=o("input",{id:"upload-playbook",type:"file"},null,-1),T=o("p",null,"Datei in diesen Bereich ziehen.",-1),E=n({setup(u){const a=f("Computer durchsuchen"),s=g(),p=B(),d=k(),m=async e=>{const c=e==null?void 0:e.files[0],_=await s.load(c),t=C.fromPlaybook(_);p.save(t.id,t),await d.push("/mitra-frontend/contract/"+t.id)};return(e,c)=>(r(),y(N,null,[l(h),o("main",F,[S,o("label",V,[v,o("div",L,[l(x(b),{title:"playbook-hochladen","choose-label":a.value,"show-upload-button":!1,"show-cancel-button":!1,"custom-upload":!0,auto:!0,accept:".json",onUploader:m},{empty:i(()=>[T]),default:i(()=>[P]),_:1},8,["choose-label"])])])])],64))}}),R=n({setup(u){return(a,s)=>(r(),w(E))}});export{R as default};
