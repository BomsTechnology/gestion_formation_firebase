import{o as e,c as u,a as t,b as k,j as p,k as C,d as L,e as o,g as n,w as r,f as s,h as l,l as j,T as b,m as h}from"./index.c77e1f43.js";import{r as g}from"./UserCircleIcon.c8fb0e4d.js";import{r as w,a as y}from"./LogoutIcon.93a2f8c3.js";function U(f,a){return e(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})])}function B(f,a){return e(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])}const $={class:"w-full bg-blue-500 p-4 flex justify-between px-10 items-center"},M=h(" Just Learn "),N={key:0,type:"button",class:"text-white hover:text-gray-100 focus:text-gray-100 focus:outline-none","aria-label":"toggle menu"},z={key:1,type:"button",class:"text-white hover:text-gray-100 focus:text-gray-100 focus:outline-none","aria-label":"toggle menu"},T={key:0,class:"sm:flex justify-center items-center hidden relative"},V={key:0,class:"w-12 h-12 overflow-hidden rounded-full border"},H=["src"],A={key:0,class:"w-32 rounded-md bg-white absolute top-14 right-0 text-sm shadow-lg"},O=n("span",null,"Account",-1),R=n("span",null,"Logout",-1),S={key:1,class:"space-x-4 sm:block hidden"},E=h(" Login "),G=h(" Register "),J={key:0,class:"bg-white px-8 py-4 w-full space-x-4 flex justify-center items-center border-b"},q=h(" Login "),D=h(" Register "),F={key:2,type:"button",class:"flex justify-center items-center"},I={key:0,class:"w-14 h-14 overflow-hidden rounded-full border"},K=["src"],P=n("span",null,"Account",-1),Q=n("span",null,"Logout",-1),ee={__name:"NavBar",setup(f){const a=k(),c=p(!1);C(async()=>{c.value=!!await a.getCurrentUser()});const d=p(!1),x=p(!1),_=()=>{a.logOut(),location.href="/"};return(W,v)=>{const i=L("router-link");return e(),o("header",null,[n("div",$,[n("div",null,[t(i,{to:{name:"home"},class:"text-white text-4xl font-bold"},{default:r(()=>[M]),_:1})]),n("div",{class:"relative block sm:hidden",onClick:v[0]||(v[0]=m=>d.value=!d.value)},[t(j,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 rotate-45","enter-to-class":"opacity-1 rotate-0 ","leave-active-class":"transition duration-500 absolute","leave-from-class":"opacity-1 rotate-0","leave-to-class":"opacity-0 rotate-45",appear:""},{default:r(()=>[d.value?l("",!0):(e(),o("button",N,[t(s(U),{class:"h-7 w-7 fill-current"})])),d.value?(e(),o("button",z,[t(s(B),{class:"h-7 w-7 fill-current"})])):l("",!0)]),_:1})]),c.value?(e(),o("div",T,[s(a).currentUser?(e(),o("button",{key:0,onClick:v[1]||(v[1]=m=>x.value=!x.value),type:"button",class:"flex justify-center items-center"},[s(a).currentUser.image?(e(),o("div",V,[n("img",{src:s(a).currentUser.image,class:"w-full object-cover",alt:""},null,8,H)])):(e(),u(s(g),{key:1,class:"w-12 h-12 text-white"}))])):l("",!0),t(b,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 scale-75","enter-to-class":"opacity-1 scale-100","leave-active-class":"transition duration-500","leave-from-class":"opacity-1 scale-100","leave-to-class":"opacity-0 scale-75"},{default:r(()=>[x.value?(e(),o("div",A,[t(i,{to:{name:"account"},class:"w-full py-2 text-center flex px-4 items-center space-x-3 rounded-t-md text-gray-700 hover:bg-blue-500 hover:text-white"},{default:r(()=>[t(s(w),{class:"w-5 h-5"}),O]),_:1}),n("button",{onClick:_,class:"w-full px-4 space-x-3 py-2 text-center items-center rounded-b-md flex text-gray-700 hover:bg-blue-500 hover:text-white",type:"button"},[t(s(y),{class:"w-5 h-5"}),R])])):l("",!0)]),_:1})])):(e(),o("nav",S,[t(i,{to:{name:"login"},class:"text-white py-2 px-3 hover:bg-white hover:text-blue-500 rounded border border-white"},{default:r(()=>[E]),_:1}),t(i,{to:{name:"register"},class:"text-white py-2 px-3 hover:bg-white hover:text-blue-500 rounded border border-white"},{default:r(()=>[G]),_:1})]))]),t(b,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 translate-x-full","enter-to-class":"opacity-1 translate-x-0","leave-active-class":"transition duration-500","leave-from-class":"opacity-1 translate-x-0","leave-to-class":"opacity-0 translate-x-full"},{default:r(()=>[d.value?(e(),o("nav",J,[c.value?l("",!0):(e(),u(i,{key:0,to:{name:"login"},class:"text-white py-2 px-3 text-lg hover:bg-white bg-blue-500 hover:text-blue-500 rounded"},{default:r(()=>[q]),_:1})),c.value?l("",!0):(e(),u(i,{key:1,to:{name:"register"},class:"text-white py-2 px-3 text-lg hover:bg-white bg-blue-500 hover:text-blue-500 rounded"},{default:r(()=>[D]),_:1})),c.value&&s(a).currentUser?(e(),o("button",F,[s(a).currentUser.image?(e(),o("div",I,[n("img",{src:s(a).currentUser.image,class:"w-full object-cover",alt:""},null,8,K)])):(e(),u(s(g),{key:1,class:"w-12 h-12 text-white"}))])):l("",!0),c.value?(e(),u(i,{key:3,to:{name:"account"},class:"text-white py-2 flex items-center px-4 space-x-3 text-lg hover:bg-white bg-blue-500 hover:text-blue-500 rounded"},{default:r(()=>[t(s(w),{class:"w-5 h-5"}),P]),_:1})):l("",!0),c.value?(e(),o("button",{key:4,type:"button",onClick:_,class:"text-white py-2 px-4 flex text-lg items-center space-x-3 hover:bg-white bg-blue-500 hover:text-blue-500 rounded"},[t(s(y),{class:"w-5 h-5"}),Q])):l("",!0)])):l("",!0)]),_:1})])}}};export{ee as default};