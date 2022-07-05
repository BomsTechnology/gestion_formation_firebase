import{k as q,j as w,e as i,g as e,a as m,f as o,H as E,J as l,K as n,d as c,o as d}from"./index.c77e1f43.js";import{u as V}from"./useTeacher.0122b320.js";import"./ConfirmDeleteModal.204134a5.js";const T={class:"p-8 h-full"},U=e("h1",{class:"font-bold text-3xl"},"Create Teacher",-1),C={class:"mt-10 lg:p-10 p-4 bg-white"},D={class:"grid lg:grid-cols-2 grid-cols-1 gap-4"},S=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"FirstName",-1),N=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"LastName",-1),B={class:"grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4"},I=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Email",-1),M=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Phone",-1),j={class:"mt-4"},$=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Image",-1),F={class:"grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4"},H=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Enter Date",-1),J=e("label",{for:"question",class:"block mb-2 text-sm font-medium text-gray-900"},"Diploma",-1),K={class:"col-span-2 flex justify-end items-center py-2 px-3 mt-4"},L={type:"submit",class:"inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"},P={key:0},z={key:1},R={__name:"TeacherEdit",props:{id:String},setup(b){const a=b,{loading:p,updateTeacher:f,getTeacher:g,teacher:s,errors:x,cleanErrors:y}=V();q(async()=>{await g(a.id)});const _=async()=>{await f(a.id)},u=w(null),v=()=>{s.value.newImage=u.value.files[0]};return(A,t)=>{const h=c("Error"),k=c("Spin");return d(),i("div",T,[U,e("div",C,[m(h,{errors:o(x),onCleanErrors:o(y)},null,8,["errors","onCleanErrors"]),e("form",{onSubmit:t[7]||(t[7]=E(r=>_(),["prevent"]))},[e("div",D,[e("div",null,[S,l(e("input",{type:"text",id:"question","onUpdate:modelValue":t[0]||(t[0]=r=>o(s).firstname=r),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[n,o(s).firstname]])]),e("div",null,[N,l(e("input",{type:"text",id:"question","onUpdate:modelValue":t[1]||(t[1]=r=>o(s).lastname=r),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[n,o(s).lastname]])])]),e("div",B,[e("div",null,[I,l(e("input",{type:"email",id:"question","onUpdate:modelValue":t[2]||(t[2]=r=>o(s).email=r),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[n,o(s).email]])]),e("div",null,[M,l(e("input",{type:"text",id:"question","onUpdate:modelValue":t[3]||(t[3]=r=>o(s).phone=r),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[n,o(s).phone]])])]),e("div",j,[$,e("input",{ref_key:"file",ref:u,onChange:t[4]||(t[4]=r=>v()),class:"block w-full text-sm text-gray-900 p-2 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none",id:"file_input",type:"file"},null,544)]),e("div",F,[e("div",null,[H,l(e("input",{type:"date",id:"question","onUpdate:modelValue":t[5]||(t[5]=r=>o(s).enterDate=r),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[n,o(s).enterDate]])]),e("div",null,[J,l(e("input",{type:"text",id:"question","onUpdate:modelValue":t[6]||(t[6]=r=>o(s).diploma=r),class:"border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[n,o(s).diploma]])])]),e("div",K,[e("button",L,[o(p)==1?(d(),i("span",P,[m(k)])):(d(),i("span",z,"Save"))])])],32)])])}}};export{R as default};
