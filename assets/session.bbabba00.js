import{n as o}from"./vendor.0137cc33.js";import{C as c,c as i}from"./JSONMapper.44529864.js";class h extends c{constructor(){super("",[])}}const p=o("session",{state:()=>({cache:[new h,"",{createdAt:new Date(0)}],entryPoint:""}),actions:{rememberContract(t,e){this.cache=[t,(e||t.path[0]).id,t.metadata]},rememberEntryPoint(t){this.entryPoint=t}},getters:{contract(){if(Reflect.getPrototypeOf(this.cache[0])===c.prototype)return this.cache[0];const{createdAt:t,savedAt:e}=Object.entries(this.cache[2]||{}).reduce((r,s)=>{const[a,n]=s;return r[a]=new Date(n),r},{});return i({contract:this.cache[0],createdAt:t,savedAt:e})},lastEditedStep(){return this.contract.path.find(t=>t.id===this.cache[1])}},persist:{enabled:!0}});export{p as u};
