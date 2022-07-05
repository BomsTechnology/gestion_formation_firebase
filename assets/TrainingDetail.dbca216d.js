import{u as v}from"./useTraining.093199e3.js";import{b as y,j as b,r as k,k as B,d as i,o,e as l,a as g,g as t,f as s,t as a,c as N,w as T,F as j,m as C}from"./index.c77e1f43.js";import"./ConfirmDeleteModal.204134a5.js";const D={class:"lg:px-20 py-8 px-8"},R={key:0,class:"shadow bg-white w-full lg:h-[500px] h-full overflow-y-auto rounded-lg lg:flex"},S={class:"lg:h-full h-96 w-full lg:w-96 overflow-hidden rounded-l-lg"},F=["src"],G={class:"py-4 px-8 space-y-2 bg-gray-50 w-full h-full flex items-start justify-center flex-col"},U={class:"font-semibold text-3xl"},V={class:"py-4 font-light text-justify"},A=C(" Registration "),H={class:"flex items-center space-x-2 text-sm pt-8"},I={class:"h-10 w-10 overflow-hidden rounded-full"},P=["src","alt"],W={key:1,class:"whitespace-nowrap px-6 py-4 text-2xl text-center font-medium text-gray-900"},$={__name:"TrainingDetail",props:{id:String},setup(p){const c=p,u=y(),n=b(!1),r=k({user:null,training:null}),{getTraining:h,training:e,registration:_}=v();B(async()=>{await h(c.id),e.value.id=c.id,r.training=e.value,n.value=!!await u.getCurrentUser(),n.value&&(r.user=u.currentUser)});const f=async()=>{await _({...r})};return(E,d)=>{const m=i("DialogsWrapper"),x=i("GoBack"),w=i("router-link");return o(),l(j,null,[g(m),g(x),t("section",D,[s(e).length!=[]?(o(),l("div",R,[t("div",S,[t("img",{src:s(e).image,class:"w-full h-full object-cover",alt:""},null,8,F)]),t("div",G,[t("h1",U,a(s(e).name),1),t("h2",null,"Price : "+a(s(e).price+" XFA"),1),t("h2",null," Period : "+a(s(e).day+" "+s(e).startHour+" - "+s(e).endHour),1),t("p",V,a(s(e).description),1),n.value?(o(),l("button",{key:0,type:"button",onClick:d[0]||(d[0]=L=>f()),class:"bg-blue-500 px-4 py-3 w-full text-white rounded-md hover:bg-blue-700"}," Registration ")):(o(),N(w,{key:1,to:{name:"login"},class:"bg-blue-500 px-4 py-3 w-full text-center text-white rounded-md hover:bg-blue-700"},{default:T(()=>[A]),_:1})),t("div",H,[t("div",I,[t("img",{src:s(e).teacher.image,alt:s(e).teacher.name},null,8,P)]),t("h1",null,a(s(e).teacher.firstname+" "+s(e).teacher.lastname),1)])])])):(o(),l("div",W," NO TRAINING "))])],64)}}};export{$ as default};
