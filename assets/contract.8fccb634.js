import{H as c}from"./Header.2d137917.js";import{e as s,o as t,f as r,g as i,F as a,t as d,h as l,u}from"./vendor.657320d5.js";import"./index.3a1286e8.js";const y=s({props:{playbook:null},setup(e){return(n,p)=>(t(!0),r(a,null,i(e.playbook.steps,o=>(t(),r("div",{key:o},d(o),1))),128))}}),f={findById:e=>(console.log(`Looking up Playbook with id ${e}`),{steps:["First","Second"]})},b=s({setup(e){const n=f.findById("test");return(p,o)=>(t(),r(a,null,[l(c),l(y,{playbook:u(n)},null,8,["playbook"])],64))}});export{b as default};
