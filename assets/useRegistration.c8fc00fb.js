import{j as l,V as y,A as q,u as D,q as c,U as E,S as k,s as R,z as C,I as b,D as g,C as x,E as I}from"./index.c77e1f43.js";import{_ as U}from"./ConfirmDeleteModal.204134a5.js";function H(){const h=D(),s=l(""),d=y(c,"registrations"),t=l(0),v=l([]),r=l([]),i=l([]),o=l([]),f=l(!1),{reveal:w,onConfirm:A}=q(U,{question:"Are you sure you want to delete its item(s)? All data will be permanently deleted. This action cannot be undone."}),S=async e=>{t.value=1,r.value=[];const a=y(c,"registrations"),n=E(a,k("user.userId","==",e));(await R(n).catch(u=>{console.log(u.message),s.value=u.message})).forEach(u=>{let p=u.data();p.id=u.id,r.value.push(p)}),t.value=0},m=async()=>{t.value=1,r.value=[],(await R(d).catch(a=>{s.value=a.message})).forEach(a=>{let n=a.data();n.id=a.id,r.value.push(n),o.value.push({id:n.id,value:!1})}),t.value=0};return{getRegistrationByUser:S,updateRegistration:async e=>{t.value=1,s.value="";const a=g(c,"registrations",e);await I(a,{...v.value}).catch(n=>{s.value=n.message}),t.value=0,h.push({name:"registration.index"})},getRegistration:async e=>{t.value=1;const a=g(c,"registrations",e),n=await x(a);n.exists()?v.value=n.data():s.value="No such document!",t.value=0},registration:v,deleteRegistration:async()=>{i.value.length!=[]&&(w(),A(async()=>{for(const e in i.value)await b(g(c,"registrations",i.value[e])).catch(a=>{s.value=a.message});m()}))},toogleDeleteArray:async e=>{o.value[e].value?i.value.push(o.value[e].id):i.value.splice(e,1)},checkAll:async()=>{if(f.value)for(const e in o.value)o.value[e].value=!0,i.value.push(o.value[e].id);else{for(const e in o.value)o.value[e].value=!1;i.value=[]}},getRegistrations:m,deleteArray:i,chks:o,chkAll:f,registrations:r,loading:t,errors:s,createRegistration:async e=>{t.value=1,s.value="",await C(d,e).catch(a=>{s.value=a.message,t.value=0}),t.value=0,h.push({name:"registration.index"})},cleanErrors:()=>{s.value=""}}}export{H as u};