import{j as h,r as v,e as n,g as e,a as u,f as i,H as q,J as r,K as l,d as c,o as a}from"./index.c77e1f43.js";import{u as k}from"./useTeacher.0122b320.js";import"./ConfirmDeleteModal.204134a5.js";const w={class:"p-8 h-full"},E=e("h1",{class:"font-bold text-3xl"},"Create Teacher",-1),V={class:"mt-10 lg:p-10 p-4 bg-white"},C={class:"grid lg:grid-cols-2 grid-cols-1 gap-4"},D={class:"col-span-1"},T=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"FirstName",-1),U={class:"col-span-1"},N=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"LastName",-1),S={class:"grid lg:grid-cols-2 mt-4 grid-cols-1 gap-4"},B={class:"col-span-1"},j=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Email",-1),I={class:"col-span-1"},M=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Phone",-1),$={class:"mt-4"},F=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Image",-1),H={class:"grid lg:grid-cols-2 mt-4 grid-cols-1 gap-4"},J={class:"col-span-1"},K=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Enter Date",-1),L={class:"col-span-1"},P=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Diploma",-1),z={class:"flex justify-end items-center py-2 px-3 mt-4"},A={type:"submit",class:"inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"},G={key:0},O={key:1},Z={__name:"TeacherCreate",setup(Q){const{loading:m,createTeacher:b,errors:p,cleanErrors:f}=k(),d=h(null),o=v({firstname:"",lastname:"",phone:"",email:"",image:"",diploma:"",enterDate:""}),g=async()=>{await b({...o})},_=()=>{o.image=d.value.files[0]};return(R,t)=>{const x=c("Error"),y=c("Spin");return a(),n("div",w,[E,e("div",V,[u(x,{errors:i(p),onCleanErrors:i(f)},null,8,["errors","onCleanErrors"]),e("form",{onSubmit:t[7]||(t[7]=q(s=>g(),["prevent"]))},[e("div",C,[e("div",D,[T,r(e("input",{type:"text",id:"question","onUpdate:modelValue":t[0]||(t[0]=s=>o.firstname=s),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[l,o.firstname]])]),e("div",U,[N,r(e("input",{type:"text",id:"question","onUpdate:modelValue":t[1]||(t[1]=s=>o.lastname=s),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[l,o.lastname]])])]),e("div",S,[e("div",B,[j,r(e("input",{type:"email",id:"question","onUpdate:modelValue":t[2]||(t[2]=s=>o.email=s),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[l,o.email]])]),e("div",I,[M,r(e("input",{type:"text",id:"question","onUpdate:modelValue":t[3]||(t[3]=s=>o.phone=s),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[l,o.phone]])])]),e("div",$,[F,e("input",{ref_key:"file",ref:d,onChange:t[4]||(t[4]=s=>_()),required:"",class:"block w-full text-sm text-gray-900 p-2 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none",id:"file_input",type:"file"},null,544)]),e("div",H,[e("div",J,[K,r(e("input",{type:"date",id:"question","onUpdate:modelValue":t[5]||(t[5]=s=>o.enterDate=s),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[l,o.enterDate]])]),e("div",L,[P,r(e("input",{type:"text",id:"question","onUpdate:modelValue":t[6]||(t[6]=s=>o.diploma=s),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[l,o.diploma]])])]),e("div",z,[e("button",A,[i(m)==1?(a(),n("span",G,[u(y)])):(a(),n("span",O,"Save"))])])],32)])])}}};export{Z as default};
