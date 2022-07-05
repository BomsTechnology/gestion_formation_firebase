const Ew=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Ew();function fl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Iw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tw=fl(Iw);function Pf(t){return!!t||t===""}function pl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?xw(r):pl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(je(t))return t;if(De(t))return t}}const kw=/;(?![^(]*\))/g,Sw=/:(.+)/;function xw(t){const e={};return t.split(kw).forEach(n=>{if(n){const r=n.split(Sw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wo(t){let e="";if(je(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=Wo(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Cw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=fi(t[r],e[r]);return n}function fi(t,e){if(t===e)return!0;let n=ah(t),r=ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$s(t),r=$s(e),n||r)return t===e;if(n=K(t),r=K(e),n||r)return n&&r?Cw(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!fi(t[o],e[o]))return!1}}return String(t)===String(e)}function gl(t,e){return t.findIndex(n=>fi(n,e))}const Aw=t=>je(t)?t:t==null?"":K(t)||De(t)&&(t.toString===Uf||!te(t.toString))?JSON.stringify(t,Lf,2):String(t),Lf=(t,e)=>e&&e.__v_isRef?Lf(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Zr(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!K(e)&&!Ff(e)?String(e):e,be={},Dr=[],Nt=()=>{},Rw=()=>!1,Dw=/^on[^a-z]/,Go=t=>Dw.test(t),ml=t=>t.startsWith("onUpdate:"),We=Object.assign,yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nw=Object.prototype.hasOwnProperty,le=(t,e)=>Nw.call(t,e),K=Array.isArray,Nr=t=>pi(t)==="[object Map]",Zr=t=>pi(t)==="[object Set]",ah=t=>pi(t)==="[object Date]",te=t=>typeof t=="function",je=t=>typeof t=="string",$s=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Mf=t=>De(t)&&te(t.then)&&te(t.catch),Uf=Object.prototype.toString,pi=t=>Uf.call(t),Ow=t=>pi(t).slice(8,-1),Ff=t=>pi(t)==="[object Object]",wl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ro=fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pw=/-(\w)/g,Kt=Yo(t=>t.replace(Pw,(e,n)=>n?n.toUpperCase():"")),Lw=/\B([A-Z])/g,es=Yo(t=>t.replace(Lw,"-$1").toLowerCase()),Xo=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=Yo(t=>t?`on${Xo(t)}`:""),js=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ch;const Mw=()=>ch||(ch=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Vt;class Vf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Vt&&(this.parent=Vt,this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Bf(t){return new Vf(t)}function Uw(t,e=Vt){e&&e.active&&e.effects.push(t)}const vl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$f=t=>(t.w&An)>0,jf=t=>(t.n&An)>0,Fw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=An},Vw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];$f(s)&&!jf(s)?s.delete(t):e[n++]=s,s.w&=~An,s.n&=~An}e.length=n}},mc=new WeakMap;let bs=0,An=1;const yc=30;let Rt;const Zn=Symbol(""),wc=Symbol("");class bl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uw(this,r)}run(){if(!this.active)return this.fn();let e=Rt,n=Tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rt,Rt=this,Tn=!0,An=1<<++bs,bs<=yc?Fw(this):lh(this),this.fn()}finally{bs<=yc&&Vw(this),An=1<<--bs,Rt=this.parent,Tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rt===this?this.deferStop=!0:this.active&&(lh(this),this.onStop&&this.onStop(),this.active=!1)}}function lh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tn=!0;const Hf=[];function ts(){Hf.push(Tn),Tn=!1}function ns(){const t=Hf.pop();Tn=t===void 0?!0:t}function vt(t,e,n){if(Tn&&Rt){let r=mc.get(t);r||mc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=vl()),qf(s)}}function qf(t,e){let n=!1;bs<=yc?jf(t)||(t.n|=An,n=!$f(t)):n=!t.has(Rt),n&&(t.add(Rt),Rt.deps.push(t))}function rn(t,e,n,r,s,i){const o=mc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?wl(n)&&a.push(o.get("length")):(a.push(o.get(Zn)),Nr(t)&&a.push(o.get(wc)));break;case"delete":K(t)||(a.push(o.get(Zn)),Nr(t)&&a.push(o.get(wc)));break;case"set":Nr(t)&&a.push(o.get(Zn));break}if(a.length===1)a[0]&&vc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);vc(vl(c))}}function vc(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&uh(r);for(const r of n)r.computed||uh(r)}function uh(t,e){(t!==Rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bw=fl("__proto__,__v_isRef,__isVue"),zf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($s)),$w=_l(),jw=_l(!1,!0),Hw=_l(!0),hh=qw();function qw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=he(this);for(let i=0,o=this.length;i<o;i++)vt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(he)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts();const r=he(this)[e].apply(this,n);return ns(),r}}),t}function _l(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ov:Xf:e?Yf:Gf).get(r))return r;const o=K(r);if(!t&&o&&le(hh,s))return Reflect.get(hh,s,i);const a=Reflect.get(r,s,i);return($s(s)?zf.has(s):Bw(s))||(t||vt(r,"get",s),e)?a:Oe(a)?o&&wl(s)?a:a.value:De(a)?t?Qf(a):gr(a):a}}const zw=Kf(),Kw=Kf(!0);function Kf(t=!1){return function(n,r,s,i){let o=n[r];if(qs(o)&&Oe(o)&&!Oe(s))return!1;if(!t&&!qs(s)&&(bc(s)||(s=he(s),o=he(o)),!K(n)&&Oe(o)&&!Oe(s)))return o.value=s,!0;const a=K(n)&&wl(r)?Number(r)<n.length:le(n,r),c=Reflect.set(n,r,s,i);return n===he(i)&&(a?js(s,o)&&rn(n,"set",r,s):rn(n,"add",r,s)),c}}function Ww(t,e){const n=le(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&rn(t,"delete",e,void 0),r}function Gw(t,e){const n=Reflect.has(t,e);return(!$s(e)||!zf.has(e))&&vt(t,"has",e),n}function Yw(t){return vt(t,"iterate",K(t)?"length":Zn),Reflect.ownKeys(t)}const Wf={get:$w,set:zw,deleteProperty:Ww,has:Gw,ownKeys:Yw},Xw={get:Hw,set(t,e){return!0},deleteProperty(t,e){return!0}},Qw=We({},Wf,{get:jw,set:Kw}),El=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),i=he(e);n||(e!==i&&vt(s,"get",e),vt(s,"get",i));const{has:o}=Qo(s),a=r?El:n?kl:zs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function qi(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(t!==s&&vt(r,"has",t),vt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function zi(t,e=!1){return t=t.__v_raw,!e&&vt(he(t),"iterate",Zn),Reflect.get(t,"size",t)}function dh(t){t=he(t);const e=he(this);return Qo(e).has.call(e,t)||(e.add(t),rn(e,"add",t,t)),this}function fh(t,e){e=he(e);const n=he(this),{has:r,get:s}=Qo(n);let i=r.call(n,t);i||(t=he(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?js(e,o)&&rn(n,"set",t,e):rn(n,"add",t,e),this}function ph(t){const e=he(this),{has:n,get:r}=Qo(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rn(e,"delete",t,void 0),i}function gh(){const t=he(this),e=t.size!==0,n=t.clear();return e&&rn(t,"clear",void 0,void 0),n}function Ki(t,e){return function(r,s){const i=this,o=i.__v_raw,a=he(o),c=e?El:t?kl:zs;return!t&&vt(a,"iterate",Zn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Wi(t,e,n){return function(...r){const s=this.__v_raw,i=he(s),o=Nr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?El:e?kl:zs;return!e&&vt(i,"iterate",c?wc:Zn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function Jw(){const t={get(i){return Hi(this,i)},get size(){return zi(this)},has:qi,add:dh,set:fh,delete:ph,clear:gh,forEach:Ki(!1,!1)},e={get(i){return Hi(this,i,!1,!0)},get size(){return zi(this)},has:qi,add:dh,set:fh,delete:ph,clear:gh,forEach:Ki(!1,!0)},n={get(i){return Hi(this,i,!0)},get size(){return zi(this,!0)},has(i){return qi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Ki(!0,!1)},r={get(i){return Hi(this,i,!0,!0)},get size(){return zi(this,!0)},has(i){return qi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wi(i,!1,!1),n[i]=Wi(i,!0,!1),e[i]=Wi(i,!1,!0),r[i]=Wi(i,!0,!0)}),[t,n,e,r]}const[Zw,ev,tv,nv]=Jw();function Il(t,e){const n=e?t?nv:tv:t?ev:Zw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const rv={get:Il(!1,!1)},sv={get:Il(!1,!0)},iv={get:Il(!0,!1)},Gf=new WeakMap,Yf=new WeakMap,Xf=new WeakMap,ov=new WeakMap;function av(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cv(t){return t.__v_skip||!Object.isExtensible(t)?0:av(Ow(t))}function gr(t){return qs(t)?t:Tl(t,!1,Wf,rv,Gf)}function lv(t){return Tl(t,!1,Qw,sv,Yf)}function Qf(t){return Tl(t,!0,Xw,iv,Xf)}function Tl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=cv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function kn(t){return qs(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function qs(t){return!!(t&&t.__v_isReadonly)}function bc(t){return!!(t&&t.__v_isShallow)}function Jf(t){return kn(t)||qs(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function sr(t){return wo(t,"__v_skip",!0),t}const zs=t=>De(t)?gr(t):t,kl=t=>De(t)?Qf(t):t;function Zf(t){Tn&&Rt&&(t=he(t),qf(t.dep||(t.dep=vl())))}function ep(t,e){t=he(t),t.dep&&vc(t.dep)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function gi(t){return tp(t,!1)}function uv(t){return tp(t,!0)}function tp(t,e){return Oe(t)?t:new hv(t,e)}class hv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:zs(e)}get value(){return Zf(this),this._value}set value(e){e=this.__v_isShallow?e:he(e),js(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:zs(e),ep(this))}}function Or(t){return Oe(t)?t.value:t}const dv={get:(t,e,n)=>Or(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function np(t){return kn(t)?t:new Proxy(t,dv)}function fv(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=gv(t,n);return e}class pv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function gv(t,e,n){const r=t[e];return Oe(r)?r:new pv(t,e,n)}class mv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new bl(e,()=>{this._dirty||(this._dirty=!0,ep(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=he(this);return Zf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yv(t,e,n=!1){let r,s;const i=te(t);return i?(r=t,s=Nt):(r=t.get,s=t.set),new mv(r,s,i||!s,n)}function Sn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Jo(i,e,n)}return s}function St(t,e,n,r){if(te(t)){const i=Sn(t,e,n,r);return i&&Mf(i)&&i.catch(o=>{Jo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(St(t[i],e,n,r));return s}function Jo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Sn(c,null,10,[t,o,a]);return}}wv(t,n,s,r)}function wv(t,e,n,r=!0){console.error(t)}let vo=!1,_c=!1;const yt=[];let Qt=0;const xs=[];let _s=null,Sr=0;const Cs=[];let pn=null,xr=0;const rp=Promise.resolve();let Sl=null,Ec=null;function xl(t){const e=Sl||rp;return t?e.then(this?t.bind(this):t):e}function vv(t){let e=Qt+1,n=yt.length;for(;e<n;){const r=e+n>>>1;Ks(yt[r])<t?e=r+1:n=r}return e}function sp(t){(!yt.length||!yt.includes(t,vo&&t.allowRecurse?Qt+1:Qt))&&t!==Ec&&(t.id==null?yt.push(t):yt.splice(vv(t.id),0,t),ip())}function ip(){!vo&&!_c&&(_c=!0,Sl=rp.then(cp))}function bv(t){const e=yt.indexOf(t);e>Qt&&yt.splice(e,1)}function op(t,e,n,r){K(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ip()}function _v(t){op(t,_s,xs,Sr)}function Ev(t){op(t,pn,Cs,xr)}function Zo(t,e=null){if(xs.length){for(Ec=e,_s=[...new Set(xs)],xs.length=0,Sr=0;Sr<_s.length;Sr++)_s[Sr]();_s=null,Sr=0,Ec=null,Zo(t,e)}}function ap(t){if(Zo(),Cs.length){const e=[...new Set(Cs)];if(Cs.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((n,r)=>Ks(n)-Ks(r)),xr=0;xr<pn.length;xr++)pn[xr]();pn=null,xr=0}}const Ks=t=>t.id==null?1/0:t.id;function cp(t){_c=!1,vo=!0,Zo(t),yt.sort((n,r)=>Ks(n)-Ks(r));const e=Nt;try{for(Qt=0;Qt<yt.length;Qt++){const n=yt[Qt];n&&n.active!==!1&&Sn(n,null,14)}}finally{Qt=0,yt.length=0,ap(),vo=!1,Sl=null,(yt.length||xs.length||Cs.length)&&cp(t)}}function Iv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||be;d&&(s=n.map(p=>p.trim())),h&&(s=n.map(Hs))}let a,c=r[a=$a(e)]||r[a=$a(Kt(e))];!c&&i&&(c=r[a=$a(es(e))]),c&&St(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,s)}}function lp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=lp(l,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):We(o,i),r.set(t,o),o)}function ea(t,e){return!t||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,es(e))||le(t,e))}let kt=null,ta=null;function bo(t){const e=kt;return kt=t,ta=t&&t.type.__scopeId||null,e}function WA(t){ta=t}function GA(){ta=null}function _o(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sh(-1);const i=bo(e),o=t(...s);return bo(i),r._d&&Sh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ja(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:v}=t;let w,T;const D=bo(t);try{if(n.shapeFlag&4){const M=s||r;w=Bt(u.call(M,M,h,i,p,d,m)),T=c}else{const M=e;w=Bt(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),T=e.props?c:Tv(c)}}catch(M){As.length=0,Jo(M,t,1),w=Pe(Ot)}let F=w;if(T&&v!==!1){const M=Object.keys(T),{shapeFlag:W}=F;M.length&&W&7&&(o&&M.some(ml)&&(T=kv(T,o)),F=Rn(F,T))}return n.dirs&&(F=Rn(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),w=F,bo(D),w}const Tv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Go(n))&&((e||(e={}))[n]=t[n]);return e},kv=(t,e)=>{const n={};for(const r in t)(!ml(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ea(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mh(r,o,l):!0:!!o;return!1}function mh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ea(n,i))return!0}return!1}function xv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cv=t=>t.__isSuspense;function Av(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Ev(t)}function io(t,e){if(ze){let n=ze.provides;const r=ze.parent&&ze.parent.provides;r===n&&(n=ze.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=ze||kt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r.proxy):e}}const yh={};function Pr(t,e,n){return up(t,e,n)}function up(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=be){const a=ze;let c,l=!1,u=!1;if(Oe(t)?(c=()=>t.value,l=bc(t)):kn(t)?(c=()=>t,r=!0):K(t)?(u=!0,l=t.some(T=>kn(T)||bc(T)),c=()=>t.map(T=>{if(Oe(T))return T.value;if(kn(T))return Gn(T);if(te(T))return Sn(T,a,2)})):te(t)?e?c=()=>Sn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),St(t,a,3,[d])}:c=Nt,e&&r){const T=c;c=()=>Gn(T())}let h,d=T=>{h=w.onStop=()=>{Sn(T,a,4)}};if(Xs)return d=Nt,e?n&&St(e,a,3,[c(),u?[]:void 0,d]):c(),Nt;let p=u?[]:yh;const m=()=>{if(!!w.active)if(e){const T=w.run();(r||l||(u?T.some((D,F)=>js(D,p[F])):js(T,p)))&&(h&&h(),St(e,a,3,[T,p===yh?void 0:p,d]),p=T)}else w.run()};m.allowRecurse=!!e;let v;s==="sync"?v=m:s==="post"?v=()=>ht(m,a&&a.suspense):v=()=>_v(m);const w=new bl(c,v);return e?n?m():p=w.run():s==="post"?ht(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&yl(a.scope.effects,w)}}function Rv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?hp(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=ze;Br(this);const a=up(s,i.bind(r),n);return o?Br(o):er(),a}function hp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gn(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Gn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(Zr(t)||Nr(t))t.forEach(n=>{Gn(n,e)});else if(Ff(t))for(const n in t)Gn(t[n],e);return t}function dp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mp(()=>{t.isMounted=!0}),wp(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],Dv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},setup(t,{slots:e}){const n=ia(),r=dp();let s;return()=>{const i=e.default&&Cl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Ot){o=v;break}}const a=he(t),{mode:c}=a;if(r.isLeaving)return Ha(o);const l=wh(o);if(!l)return Ha(o);const u=Ws(l,a,r,n);Gs(l,u);const h=n.subTree,d=h&&wh(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();s===void 0?s=v:v!==s&&(s=v,p=!0)}if(d&&d.type!==Ot&&(!Kn(l,d)||p)){const v=Ws(d,a,r,n);if(Gs(d,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},Ha(o);c==="in-out"&&l.type!==Ot&&(v.delayLeave=(w,T,D)=>{const F=pp(r,d);F[String(d.key)]=d,w._leaveCb=()=>{T(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},fp=Dv;function pp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ws(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:w,onAfterAppear:T,onAppearCancelled:D}=e,F=String(t.key),M=pp(n,t),W=(O,Z)=>{O&&St(O,r,9,Z)},oe=(O,Z)=>{const ae=Z[1];W(O,Z),K(O)?O.every(_e=>_e.length<=1)&&ae():O.length<=1&&ae()},G={mode:i,persisted:o,beforeEnter(O){let Z=a;if(!n.isMounted)if(s)Z=v||a;else return;O._leaveCb&&O._leaveCb(!0);const ae=M[F];ae&&Kn(t,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),W(Z,[O])},enter(O){let Z=c,ae=l,_e=u;if(!n.isMounted)if(s)Z=w||c,ae=T||l,_e=D||u;else return;let U=!1;const pe=O._enterCb=Ce=>{U||(U=!0,Ce?W(_e,[O]):W(ae,[O]),G.delayedLeave&&G.delayedLeave(),O._enterCb=void 0)};Z?oe(Z,[O,pe]):pe()},leave(O,Z){const ae=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return Z();W(h,[O]);let _e=!1;const U=O._leaveCb=pe=>{_e||(_e=!0,Z(),pe?W(m,[O]):W(p,[O]),O._leaveCb=void 0,M[ae]===t&&delete M[ae])};M[ae]=t,d?oe(d,[O,U]):U()},clone(O){return Ws(O,e,n,r)}};return G}function Ha(t){if(na(t))return t=Rn(t),t.children=null,t}function wh(t){return na(t)?t.children?t.children[0]:void 0:t}function Gs(t,e){t.shapeFlag&6&&t.component?Gs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===It?(o.patchFlag&128&&s++,r=r.concat(Cl(o.children,e,a))):(e||o.type!==Ot)&&r.push(a!=null?Rn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Al(t){return te(t)?{setup:t,name:t.name}:t}const oo=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function Nv(t,e){gp(t,"a",e)}function Ov(t,e){gp(t,"da",e)}function gp(t,e,n=ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ra(e,r,n),n){let s=n.parent;for(;s&&s.parent;)na(s.parent.vnode)&&Pv(r,e,n,s),s=s.parent}}function Pv(t,e,n,r){const s=ra(e,t,r,!0);Rl(()=>{yl(r[e],s)},n)}function ra(t,e,n=ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts(),Br(n);const a=St(e,n,t,o);return er(),ns(),a});return r?s.unshift(i):s.push(i),i}}const cn=t=>(e,n=ze)=>(!Xs||t==="sp")&&ra(t,e,n),Lv=cn("bm"),mp=cn("m"),Mv=cn("bu"),yp=cn("u"),wp=cn("bum"),Rl=cn("um"),Uv=cn("sp"),Fv=cn("rtg"),Vv=cn("rtc");function Bv(t,e=ze){ra("ec",t,e)}function YA(t,e){const n=kt;if(n===null)return t;const r=oa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=be]=e[i];te(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ts(),St(c,n,8,[t.el,a,t,e]),ns())}}const Dl="components";function $v(t,e){return _p(Dl,t,!0,e)||t}const vp=Symbol();function bp(t){return je(t)?_p(Dl,t,!1)||t:t||vp}function _p(t,e,n=!0,r=!1){const s=kt||ze;if(s){const i=s.type;if(t===Dl){const a=w0(i,!1);if(a&&(a===e||a===Kt(e)||a===Xo(Kt(e))))return i}const o=vh(s[t]||i[t],e)||vh(s.appContext[t],e);return!o&&r?i:o}}function vh(t,e){return t&&(t[e]||t[Kt(e)]||t[Xo(Kt(e))])}function jv(t,e,n,r){let s;const i=n&&n[r];if(K(t)||je(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ic=t=>t?Pp(t)?oa(t)||t.proxy:Ic(t.parent):null,Eo=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ic(t.parent),$root:t=>Ic(t.root),$emit:t=>t.emit,$options:t=>Ip(t),$forceUpdate:t=>t.f||(t.f=()=>sp(t.update)),$nextTick:t=>t.n||(t.n=xl.bind(t.proxy)),$watch:t=>Rv.bind(t)}),Hv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==be&&le(r,e))return o[e]=1,r[e];if(s!==be&&le(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==be&&le(n,e))return o[e]=4,n[e];Tc&&(o[e]=0)}}const u=Eo[e];let h,d;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==be&&le(s,e)?(s[e]=n,!0):r!==be&&le(r,e)?(r[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&le(t,o)||e!==be&&le(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(Eo,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Tc=!0;function qv(t){const e=Ip(t),n=t.proxy,r=t.ctx;Tc=!1,e.beforeCreate&&bh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:v,deactivated:w,beforeDestroy:T,beforeUnmount:D,destroyed:F,unmounted:M,render:W,renderTracked:oe,renderTriggered:G,errorCaptured:O,serverPrefetch:Z,expose:ae,inheritAttrs:_e,components:U,directives:pe,filters:Ce}=e;if(l&&zv(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const ge=o[Ee];te(ge)&&(r[Ee]=ge.bind(n))}if(s){const Ee=s.call(n,n);De(Ee)&&(t.data=gr(Ee))}if(Tc=!0,i)for(const Ee in i){const ge=i[Ee],gt=te(ge)?ge.bind(n,n):te(ge.get)?ge.get.bind(n,n):Nt,br=!te(ge)&&te(ge.set)?ge.set.bind(n):Nt,Gt=Tt({get:gt,set:br});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Mt=>Gt.value=Mt})}if(a)for(const Ee in a)Ep(a[Ee],r,n,Ee);if(c){const Ee=te(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(ge=>{io(ge,Ee[ge])})}u&&bh(u,t,"c");function Re(Ee,ge){K(ge)?ge.forEach(gt=>Ee(gt.bind(n))):ge&&Ee(ge.bind(n))}if(Re(Lv,h),Re(mp,d),Re(Mv,p),Re(yp,m),Re(Nv,v),Re(Ov,w),Re(Bv,O),Re(Vv,oe),Re(Fv,G),Re(wp,D),Re(Rl,M),Re(Uv,Z),K(ae))if(ae.length){const Ee=t.exposed||(t.exposed={});ae.forEach(ge=>{Object.defineProperty(Ee,ge,{get:()=>n[ge],set:gt=>n[ge]=gt})})}else t.exposed||(t.exposed={});W&&t.render===Nt&&(t.render=W),_e!=null&&(t.inheritAttrs=_e),U&&(t.components=U),pe&&(t.directives=pe)}function zv(t,e,n=Nt,r=!1){K(t)&&(t=kc(t));for(const s in t){const i=t[s];let o;De(i)?"default"in i?o=jt(i.from||s,i.default,!0):o=jt(i.from||s):o=jt(i),Oe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function bh(t,e,n){St(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ep(t,e,n,r){const s=r.includes(".")?hp(n,r):()=>n[r];if(je(t)){const i=e[t];te(i)&&Pr(s,i)}else if(te(t))Pr(s,t.bind(n));else if(De(t))if(K(t))t.forEach(i=>Ep(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Pr(s,i,t)}}function Ip(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Io(c,l,o,!0)),Io(c,e,o)),i.set(e,c),c}function Io(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Io(t,i,n,!0),s&&s.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Kv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Kv={data:_h,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:qn,directives:qn,watch:Gv,provide:_h,inject:Wv};function _h(t,e){return e?t?function(){return We(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Wv(t,e){return qn(kc(t),kc(e))}function kc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?We(We(Object.create(null),t),e):e}function Gv(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function Yv(t,e,n,r=!1){const s={},i={};wo(i,sa,1),t.propsDefaults=Object.create(null),Tp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=he(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ea(t.emitsOptions,d))continue;const p=e[d];if(c)if(le(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const m=Kt(d);s[m]=Sc(c,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Tp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=es(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Sc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h)&&!0)&&(delete i[h],l=!0)}l&&rn(t,"set","$attrs")}function Tp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ro(c))continue;const l=e[c];let u;s&&le(s,u=Kt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ea(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=he(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Sc(s,c,h,l[h],t,!le(l,h))}}return o}function Sc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Br(s),r=l[n]=c.call(null,e),er())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===es(n))&&(r=!0))}return r}function kp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[d,p]=kp(h,e,!0);We(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Dr),Dr;if(K(i))for(let u=0;u<i.length;u++){const h=Kt(i[u]);Eh(h)&&(o[h]=be)}else if(i)for(const u in i){const h=Kt(u);if(Eh(h)){const d=i[u],p=o[h]=K(d)||te(d)?{type:d}:d;if(p){const m=kh(Boolean,p.type),v=kh(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||le(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Eh(t){return t[0]!=="$"}function Ih(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Th(t,e){return Ih(t)===Ih(e)}function kh(t,e){return K(e)?e.findIndex(n=>Th(n,t)):te(e)&&Th(e,t)?0:-1}const Sp=t=>t[0]==="_"||t==="$stable",Nl=t=>K(t)?t.map(Bt):[Bt(t)],Qv=(t,e,n)=>{if(e._n)return e;const r=_o((...s)=>Nl(e(...s)),n);return r._c=!1,r},xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sp(s))continue;const i=t[s];if(te(i))e[s]=Qv(s,i,r);else if(i!=null){const o=Nl(i);e[s]=()=>o}}},Cp=(t,e)=>{const n=Nl(e);t.slots.default=()=>n},Jv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),wo(e,"_",n)):xp(e,t.slots={})}else t.slots={},e&&Cp(t,e);wo(t.slots,sa,1)},Zv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(s,e),!n&&a===1&&delete s._):(i=!e.$stable,xp(e,s)),o=e}else e&&(Cp(t,e),o={default:1});if(i)for(const a in s)!Sp(a)&&!(a in o)&&delete s[a]};function Ap(){return{app:null,config:{isNativeTag:Rw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let e0=0;function t0(t,e){return function(r,s=null){te(r)||(r=Object.assign({},r)),s!=null&&!De(s)&&(s=null);const i=Ap(),o=new Set;let a=!1;const c=i.app={_uid:e0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:b0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Pe(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,oa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function xc(t,e,n,r,s=!1){if(K(t)){t.forEach((d,p)=>xc(d,e&&(K(e)?e[p]:e),n,r,s));return}if(oo(r)&&!s)return;const i=r.shapeFlag&4?oa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Oe(l)&&(l.value=null)),te(c))Sn(c,a,12,[o,u]);else{const d=je(c),p=Oe(c);if(d||p){const m=()=>{if(t.f){const v=d?u[c]:c.value;s?K(v)&&yl(v,i):K(v)?v.includes(i)||v.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ht(m,n)):m()}}}const ht=Av;function n0(t){return r0(t)}function r0(t,e){const n=Mw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Nt,cloneNode:m,insertStaticContent:v}=t,w=(f,g,y,I=null,E=null,C=null,N=!1,x=null,A=!!g.dynamicChildren)=>{if(f===g)return;f&&!Kn(f,g)&&(I=j(f),_t(f,E,C,!0),f=null),g.patchFlag===-2&&(A=!1,g.dynamicChildren=null);const{type:k,ref:q,shapeFlag:V}=g;switch(k){case Ol:T(f,g,y,I);break;case Ot:D(f,g,y,I);break;case ao:f==null&&F(g,y,I,N);break;case It:pe(f,g,y,I,E,C,N,x,A);break;default:V&1?oe(f,g,y,I,E,C,N,x,A):V&6?Ce(f,g,y,I,E,C,N,x,A):(V&64||V&128)&&k.process(f,g,y,I,E,C,N,x,A,Ie)}q!=null&&E&&xc(q,f&&f.ref,C,g||f,!g)},T=(f,g,y,I)=>{if(f==null)r(g.el=a(g.children),y,I);else{const E=g.el=f.el;g.children!==f.children&&l(E,g.children)}},D=(f,g,y,I)=>{f==null?r(g.el=c(g.children||""),y,I):g.el=f.el},F=(f,g,y,I)=>{[f.el,f.anchor]=v(f.children,g,y,I,f.el,f.anchor)},M=({el:f,anchor:g},y,I)=>{let E;for(;f&&f!==g;)E=d(f),r(f,y,I),f=E;r(g,y,I)},W=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),s(f),f=y;s(g)},oe=(f,g,y,I,E,C,N,x,A)=>{N=N||g.type==="svg",f==null?G(g,y,I,E,C,N,x,A):ae(f,g,E,C,N,x,A)},G=(f,g,y,I,E,C,N,x)=>{let A,k;const{type:q,props:V,shapeFlag:z,transition:Q,patchFlag:ue,dirs:ye}=f;if(f.el&&m!==void 0&&ue===-1)A=f.el=m(f.el);else{if(A=f.el=o(f.type,C,V&&V.is,V),z&8?u(A,f.children):z&16&&Z(f.children,A,null,I,E,C&&q!=="foreignObject",N,x),ye&&$n(f,null,I,"created"),V){for(const ke in V)ke!=="value"&&!ro(ke)&&i(A,ke,null,V[ke],C,f.children,I,E,R);"value"in V&&i(A,"value",null,V.value),(k=V.onVnodeBeforeMount)&&Ft(k,I,f)}O(A,f,f.scopeId,N,I)}ye&&$n(f,null,I,"beforeMount");const we=(!E||E&&!E.pendingBranch)&&Q&&!Q.persisted;we&&Q.beforeEnter(A),r(A,g,y),((k=V&&V.onVnodeMounted)||we||ye)&&ht(()=>{k&&Ft(k,I,f),we&&Q.enter(A),ye&&$n(f,null,I,"mounted")},E)},O=(f,g,y,I,E)=>{if(y&&p(f,y),I)for(let C=0;C<I.length;C++)p(f,I[C]);if(E){let C=E.subTree;if(g===C){const N=E.vnode;O(f,N,N.scopeId,N.slotScopeIds,E.parent)}}},Z=(f,g,y,I,E,C,N,x,A=0)=>{for(let k=A;k<f.length;k++){const q=f[k]=x?mn(f[k]):Bt(f[k]);w(null,q,g,y,I,E,C,N,x)}},ae=(f,g,y,I,E,C,N)=>{const x=g.el=f.el;let{patchFlag:A,dynamicChildren:k,dirs:q}=g;A|=f.patchFlag&16;const V=f.props||be,z=g.props||be;let Q;y&&jn(y,!1),(Q=z.onVnodeBeforeUpdate)&&Ft(Q,y,g,f),q&&$n(g,f,y,"beforeUpdate"),y&&jn(y,!0);const ue=E&&g.type!=="foreignObject";if(k?_e(f.dynamicChildren,k,x,y,I,ue,C):N||gt(f,g,x,null,y,I,ue,C,!1),A>0){if(A&16)U(x,g,V,z,y,I,E);else if(A&2&&V.class!==z.class&&i(x,"class",null,z.class,E),A&4&&i(x,"style",V.style,z.style,E),A&8){const ye=g.dynamicProps;for(let we=0;we<ye.length;we++){const ke=ye[we],At=V[ke],_r=z[ke];(_r!==At||ke==="value")&&i(x,ke,At,_r,E,f.children,y,I,R)}}A&1&&f.children!==g.children&&u(x,g.children)}else!N&&k==null&&U(x,g,V,z,y,I,E);((Q=z.onVnodeUpdated)||q)&&ht(()=>{Q&&Ft(Q,y,g,f),q&&$n(g,f,y,"updated")},I)},_e=(f,g,y,I,E,C,N)=>{for(let x=0;x<g.length;x++){const A=f[x],k=g[x],q=A.el&&(A.type===It||!Kn(A,k)||A.shapeFlag&70)?h(A.el):y;w(A,k,q,null,I,E,C,N,!0)}},U=(f,g,y,I,E,C,N)=>{if(y!==I){for(const x in I){if(ro(x))continue;const A=I[x],k=y[x];A!==k&&x!=="value"&&i(f,x,k,A,N,g.children,E,C,R)}if(y!==be)for(const x in y)!ro(x)&&!(x in I)&&i(f,x,y[x],null,N,g.children,E,C,R);"value"in I&&i(f,"value",y.value,I.value)}},pe=(f,g,y,I,E,C,N,x,A)=>{const k=g.el=f?f.el:a(""),q=g.anchor=f?f.anchor:a("");let{patchFlag:V,dynamicChildren:z,slotScopeIds:Q}=g;Q&&(x=x?x.concat(Q):Q),f==null?(r(k,y,I),r(q,y,I),Z(g.children,y,q,E,C,N,x,A)):V>0&&V&64&&z&&f.dynamicChildren?(_e(f.dynamicChildren,z,y,E,C,N,x),(g.key!=null||E&&g===E.subTree)&&Rp(f,g,!0)):gt(f,g,y,q,E,C,N,x,A)},Ce=(f,g,y,I,E,C,N,x,A)=>{g.slotScopeIds=x,f==null?g.shapeFlag&512?E.ctx.activate(g,y,I,N,A):Ae(g,y,I,E,C,N,A):Re(f,g,A)},Ae=(f,g,y,I,E,C,N)=>{const x=f.component=f0(f,I,E);if(na(f)&&(x.ctx.renderer=Ie),p0(x),x.asyncDep){if(E&&E.registerDep(x,Ee),!f.el){const A=x.subTree=Pe(Ot);D(null,A,g,y)}return}Ee(x,f,g,y,E,C,N)},Re=(f,g,y)=>{const I=g.component=f.component;if(Sv(f,g,y))if(I.asyncDep&&!I.asyncResolved){ge(I,g,y);return}else I.next=g,bv(I.update),I.update();else g.el=f.el,I.vnode=g},Ee=(f,g,y,I,E,C,N)=>{const x=()=>{if(f.isMounted){let{next:q,bu:V,u:z,parent:Q,vnode:ue}=f,ye=q,we;jn(f,!1),q?(q.el=ue.el,ge(f,q,N)):q=ue,V&&so(V),(we=q.props&&q.props.onVnodeBeforeUpdate)&&Ft(we,Q,q,ue),jn(f,!0);const ke=ja(f),At=f.subTree;f.subTree=ke,w(At,ke,h(At.el),j(At),f,E,C),q.el=ke.el,ye===null&&xv(f,ke.el),z&&ht(z,E),(we=q.props&&q.props.onVnodeUpdated)&&ht(()=>Ft(we,Q,q,ue),E)}else{let q;const{el:V,props:z}=g,{bm:Q,m:ue,parent:ye}=f,we=oo(g);if(jn(f,!1),Q&&so(Q),!we&&(q=z&&z.onVnodeBeforeMount)&&Ft(q,ye,g),jn(f,!0),V&&ne){const ke=()=>{f.subTree=ja(f),ne(V,f.subTree,f,E,null)};we?g.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=ja(f);w(null,ke,y,I,f,E,C),g.el=ke.el}if(ue&&ht(ue,E),!we&&(q=z&&z.onVnodeMounted)){const ke=g;ht(()=>Ft(q,ye,ke),E)}(g.shapeFlag&256||ye&&oo(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&ht(f.a,E),f.isMounted=!0,g=y=I=null}},A=f.effect=new bl(x,()=>sp(k),f.scope),k=f.update=()=>A.run();k.id=f.uid,jn(f,!0),k()},ge=(f,g,y)=>{g.component=f;const I=f.vnode.props;f.vnode=g,f.next=null,Xv(f,g.props,I,y),Zv(f,g.children,y),ts(),Zo(void 0,f.update),ns()},gt=(f,g,y,I,E,C,N,x,A=!1)=>{const k=f&&f.children,q=f?f.shapeFlag:0,V=g.children,{patchFlag:z,shapeFlag:Q}=g;if(z>0){if(z&128){Gt(k,V,y,I,E,C,N,x,A);return}else if(z&256){br(k,V,y,I,E,C,N,x,A);return}}Q&8?(q&16&&R(k,E,C),V!==k&&u(y,V)):q&16?Q&16?Gt(k,V,y,I,E,C,N,x,A):R(k,E,C,!0):(q&8&&u(y,""),Q&16&&Z(V,y,I,E,C,N,x,A))},br=(f,g,y,I,E,C,N,x,A)=>{f=f||Dr,g=g||Dr;const k=f.length,q=g.length,V=Math.min(k,q);let z;for(z=0;z<V;z++){const Q=g[z]=A?mn(g[z]):Bt(g[z]);w(f[z],Q,y,null,E,C,N,x,A)}k>q?R(f,E,C,!0,!1,V):Z(g,y,I,E,C,N,x,A,V)},Gt=(f,g,y,I,E,C,N,x,A)=>{let k=0;const q=g.length;let V=f.length-1,z=q-1;for(;k<=V&&k<=z;){const Q=f[k],ue=g[k]=A?mn(g[k]):Bt(g[k]);if(Kn(Q,ue))w(Q,ue,y,null,E,C,N,x,A);else break;k++}for(;k<=V&&k<=z;){const Q=f[V],ue=g[z]=A?mn(g[z]):Bt(g[z]);if(Kn(Q,ue))w(Q,ue,y,null,E,C,N,x,A);else break;V--,z--}if(k>V){if(k<=z){const Q=z+1,ue=Q<q?g[Q].el:I;for(;k<=z;)w(null,g[k]=A?mn(g[k]):Bt(g[k]),y,ue,E,C,N,x,A),k++}}else if(k>z)for(;k<=V;)_t(f[k],E,C,!0),k++;else{const Q=k,ue=k,ye=new Map;for(k=ue;k<=z;k++){const mt=g[k]=A?mn(g[k]):Bt(g[k]);mt.key!=null&&ye.set(mt.key,k)}let we,ke=0;const At=z-ue+1;let _r=!1,sh=0;const ps=new Array(At);for(k=0;k<At;k++)ps[k]=0;for(k=Q;k<=V;k++){const mt=f[k];if(ke>=At){_t(mt,E,C,!0);continue}let Ut;if(mt.key!=null)Ut=ye.get(mt.key);else for(we=ue;we<=z;we++)if(ps[we-ue]===0&&Kn(mt,g[we])){Ut=we;break}Ut===void 0?_t(mt,E,C,!0):(ps[Ut-ue]=k+1,Ut>=sh?sh=Ut:_r=!0,w(mt,g[Ut],y,null,E,C,N,x,A),ke++)}const ih=_r?s0(ps):Dr;for(we=ih.length-1,k=At-1;k>=0;k--){const mt=ue+k,Ut=g[mt],oh=mt+1<q?g[mt+1].el:I;ps[k]===0?w(null,Ut,y,oh,E,C,N,x,A):_r&&(we<0||k!==ih[we]?Mt(Ut,y,oh,2):we--)}}},Mt=(f,g,y,I,E=null)=>{const{el:C,type:N,transition:x,children:A,shapeFlag:k}=f;if(k&6){Mt(f.component.subTree,g,y,I);return}if(k&128){f.suspense.move(g,y,I);return}if(k&64){N.move(f,g,y,Ie);return}if(N===It){r(C,g,y);for(let V=0;V<A.length;V++)Mt(A[V],g,y,I);r(f.anchor,g,y);return}if(N===ao){M(f,g,y);return}if(I!==2&&k&1&&x)if(I===0)x.beforeEnter(C),r(C,g,y),ht(()=>x.enter(C),E);else{const{leave:V,delayLeave:z,afterLeave:Q}=x,ue=()=>r(C,g,y),ye=()=>{V(C,()=>{ue(),Q&&Q()})};z?z(C,ue,ye):ye()}else r(C,g,y)},_t=(f,g,y,I=!1,E=!1)=>{const{type:C,props:N,ref:x,children:A,dynamicChildren:k,shapeFlag:q,patchFlag:V,dirs:z}=f;if(x!=null&&xc(x,null,y,f,!0),q&256){g.ctx.deactivate(f);return}const Q=q&1&&z,ue=!oo(f);let ye;if(ue&&(ye=N&&N.onVnodeBeforeUnmount)&&Ft(ye,g,f),q&6)B(f.component,y,I);else{if(q&128){f.suspense.unmount(y,I);return}Q&&$n(f,null,g,"beforeUnmount"),q&64?f.type.remove(f,g,y,E,Ie,I):k&&(C!==It||V>0&&V&64)?R(k,g,y,!1,!0):(C===It&&V&384||!E&&q&16)&&R(A,g,y),I&&Ba(f)}(ue&&(ye=N&&N.onVnodeUnmounted)||Q)&&ht(()=>{ye&&Ft(ye,g,f),Q&&$n(f,null,g,"unmounted")},y)},Ba=f=>{const{type:g,el:y,anchor:I,transition:E}=f;if(g===It){b(y,I);return}if(g===ao){W(f);return}const C=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:x}=E,A=()=>N(y,C);x?x(f.el,C,A):A()}else C()},b=(f,g)=>{let y;for(;f!==g;)y=d(f),s(f),f=y;s(g)},B=(f,g,y)=>{const{bum:I,scope:E,update:C,subTree:N,um:x}=f;I&&so(I),E.stop(),C&&(C.active=!1,_t(N,f,g,y)),x&&ht(x,g),ht(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},R=(f,g,y,I=!1,E=!1,C=0)=>{for(let N=C;N<f.length;N++)_t(f[N],g,y,I,E)},j=f=>f.shapeFlag&6?j(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),me=(f,g,y)=>{f==null?g._vnode&&_t(g._vnode,null,null,!0):w(g._vnode||null,f,g,null,null,null,y),ap(),g._vnode=f},Ie={p:w,um:_t,m:Mt,r:Ba,mt:Ae,mc:Z,pc:gt,pbc:_e,n:j,o:t};let se,ne;return e&&([se,ne]=e(Ie)),{render:me,hydrate:se,createApp:t0(me,se)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rp(t,e,n=!1){const r=t.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mn(s[i]),a.el=o.el),n||Rp(o,a))}}function s0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const i0=t=>t.__isTeleport,It=Symbol(void 0),Ol=Symbol(void 0),Ot=Symbol(void 0),ao=Symbol(void 0),As=[];let Dt=null;function Pt(t=!1){As.push(Dt=t?null:[])}function o0(){As.pop(),Dt=As[As.length-1]||null}let Ys=1;function Sh(t){Ys+=t}function Dp(t){return t.dynamicChildren=Ys>0?Dt||Dr:null,o0(),Ys>0&&Dt&&Dt.push(t),t}function Vr(t,e,n,r,s,i){return Dp(Ke(t,e,n,r,s,i,!0))}function mi(t,e,n,r,s){return Dp(Pe(t,e,n,r,s,!0))}function Cc(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const sa="__vInternal",Np=({key:t})=>t!=null?t:null,co=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||Oe(t)||te(t)?{i:kt,r:t,k:e,f:!!n}:t:null;function Ke(t,e=null,n=null,r=0,s=null,i=t===It?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Np(e),ref:e&&co(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Pl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),Ys>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Pe=a0;function a0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vp)&&(t=Ot),Cc(t)){const a=Rn(t,e,!0);return n&&Pl(a,n),Ys>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(v0(t)&&(t=t.__vccOpts),e){e=c0(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=Wo(a)),De(c)&&(Jf(c)&&!K(c)&&(c=We({},c)),e.style=pl(c))}const o=je(t)?1:Cv(t)?128:i0(t)?64:De(t)?4:te(t)?2:0;return Ke(t,e,n,r,s,o,i,!0)}function c0(t){return t?Jf(t)||sa in t?We({},t):t:null}function Rn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Op(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Np(a),ref:e&&e.ref?n&&s?K(s)?s.concat(co(e)):[s,co(e)]:co(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor}}function l0(t=" ",e=0){return Pe(Ol,null,t,e)}function XA(t,e){const n=Pe(ao,null,t);return n.staticCount=e,n}function u0(t="",e=!1){return e?(Pt(),mi(Ot,null,t)):Pe(Ot,null,t)}function Bt(t){return t==null||typeof t=="boolean"?Pe(Ot):K(t)?Pe(It,null,t.slice()):typeof t=="object"?mn(t):Pe(Ol,null,String(t))}function mn(t){return t.el===null||t.memo?t:Rn(t)}function Pl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(sa in e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[l0(e)]):n=8);t.children=e,t.shapeFlag|=n}function Op(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Wo([e.class,r.class]));else if(s==="style")e.style=pl([e.style,r.style]);else if(Go(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){St(t,e,7,[n,r])}const h0=Ap();let d0=0;function f0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||h0,i={uid:d0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(r,s),emitsOptions:lp(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Iv.bind(null,i),t.ce&&t.ce(i),i}let ze=null;const ia=()=>ze||kt,Br=t=>{ze=t,t.scope.on()},er=()=>{ze&&ze.scope.off(),ze=null};function Pp(t){return t.vnode.shapeFlag&4}let Xs=!1;function p0(t,e=!1){Xs=e;const{props:n,children:r}=t.vnode,s=Pp(t);Yv(t,n,s,e),Jv(t,r);const i=s?g0(t,e):void 0;return Xs=!1,i}function g0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sr(new Proxy(t.ctx,Hv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?y0(t):null;Br(t),ts();const i=Sn(r,t,0,[t.props,s]);if(ns(),er(),Mf(i)){if(i.then(er,er),e)return i.then(o=>{xh(t,o,e)}).catch(o=>{Jo(o,t,0)});t.asyncDep=i}else xh(t,i,e)}else Lp(t,e)}function xh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=np(e)),Lp(t,n)}let Ch;function Lp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ch&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=We(We({isCustomElement:i,delimiters:a},o),c);r.render=Ch(s,l)}}t.render=r.render||Nt}Br(t),ts(),qv(t),ns(),er()}function m0(t){return new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}})}function y0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=m0(t))},slots:t.slots,emit:t.emit,expose:e}}function oa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(np(sr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Eo)return Eo[n](t)}}))}function w0(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function v0(t){return te(t)&&"__vccOpts"in t}const Tt=(t,e)=>yv(t,e,Xs);function Ll(t,e,n){const r=arguments.length;return r===2?De(e)&&!K(e)?Cc(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cc(n)&&(n=[n]),Pe(t,e,n))}const b0="3.2.37",_0="http://www.w3.org/2000/svg",Wn=typeof document!="undefined"?document:null,Ah=Wn&&Wn.createElement("template"),E0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wn.createElementNS(_0,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ah.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ah.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function I0(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function T0(t,e,n){const r=t.style,s=je(n);if(n&&!s){for(const i in n)Ac(r,i,n[i]);if(e&&!je(e))for(const i in e)n[i]==null&&Ac(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Rh=/\s*!important$/;function Ac(t,e,n){if(K(n))n.forEach(r=>Ac(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=k0(t,e);Rh.test(n)?t.setProperty(es(r),n.replace(Rh,""),"important"):t[r]=n}}const Dh=["Webkit","Moz","ms"],qa={};function k0(t,e){const n=qa[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return qa[e]=r;r=Xo(r);for(let s=0;s<Dh.length;s++){const i=Dh[s]+r;if(i in t)return qa[e]=i}return e}const Nh="http://www.w3.org/1999/xlink";function S0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Nh,e.slice(6,e.length)):t.setAttributeNS(Nh,e,n);else{const i=Tw(e);n==null||i&&!Pf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function x0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Pf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Mp,C0]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Rc=0;const A0=Promise.resolve(),R0=()=>{Rc=0},D0=()=>Rc||(A0.then(R0),Rc=Mp());function wn(t,e,n,r){t.addEventListener(e,n,r)}function N0(t,e,n,r){t.removeEventListener(e,n,r)}function O0(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=P0(e);if(r){const l=i[e]=L0(r,s);wn(t,a,l,c)}else o&&(N0(t,a,o,c),i[e]=void 0)}}const Oh=/(?:Once|Passive|Capture)$/;function P0(t){let e;if(Oh.test(t)){e={};let n;for(;n=t.match(Oh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[es(t.slice(2)),e]}function L0(t,e){const n=r=>{const s=r.timeStamp||Mp();(C0||s>=n.attached-1)&&St(M0(r,n.value),e,5,[r])};return n.value=t,n.attached=D0(),n}function M0(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ph=/^on[a-z]/,U0=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?I0(t,r,s):e==="style"?T0(t,n,r):Go(e)?ml(e)||O0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F0(t,e,r,s))?x0(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),S0(t,e,r,s))};function F0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ph.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ph.test(e)&&je(n)?!1:e in t}const un="transition",gs="animation",aa=(t,{slots:e})=>Ll(fp,Fp(t),e);aa.displayName="Transition";const Up={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V0=aa.props=We({},fp.props,Up),Hn=(t,e=[])=>{K(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lh=t=>t?K(t)?t.some(e=>e.length>1):t.length>1:!1;function Fp(t){const e={};for(const U in t)U in Up||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=B0(s),v=m&&m[0],w=m&&m[1],{onBeforeEnter:T,onEnter:D,onEnterCancelled:F,onLeave:M,onLeaveCancelled:W,onBeforeAppear:oe=T,onAppear:G=D,onAppearCancelled:O=F}=e,Z=(U,pe,Ce)=>{gn(U,pe?u:a),gn(U,pe?l:o),Ce&&Ce()},ae=(U,pe)=>{U._isLeaving=!1,gn(U,h),gn(U,p),gn(U,d),pe&&pe()},_e=U=>(pe,Ce)=>{const Ae=U?G:D,Re=()=>Z(pe,U,Ce);Hn(Ae,[pe,Re]),Mh(()=>{gn(pe,U?c:i),Yt(pe,U?u:a),Lh(Ae)||Uh(pe,r,v,Re)})};return We(e,{onBeforeEnter(U){Hn(T,[U]),Yt(U,i),Yt(U,o)},onBeforeAppear(U){Hn(oe,[U]),Yt(U,c),Yt(U,l)},onEnter:_e(!1),onAppear:_e(!0),onLeave(U,pe){U._isLeaving=!0;const Ce=()=>ae(U,pe);Yt(U,h),Bp(),Yt(U,d),Mh(()=>{!U._isLeaving||(gn(U,h),Yt(U,p),Lh(M)||Uh(U,r,w,Ce))}),Hn(M,[U,Ce])},onEnterCancelled(U){Z(U,!1),Hn(F,[U])},onAppearCancelled(U){Z(U,!0),Hn(O,[U])},onLeaveCancelled(U){ae(U),Hn(W,[U])}})}function B0(t){if(t==null)return null;if(De(t))return[za(t.enter),za(t.leave)];{const e=za(t);return[e,e]}}function za(t){return Hs(t)}function Yt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function gn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Mh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let $0=0;function Uh(t,e,n,r){const s=t._endId=++$0,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Vp(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function Vp(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),s=r(un+"Delay"),i=r(un+"Duration"),o=Fh(s,i),a=r(gs+"Delay"),c=r(gs+"Duration"),l=Fh(a,c);let u=null,h=0,d=0;e===un?o>0&&(u=un,h=o,d=i.length):e===gs?l>0&&(u=gs,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?un:gs:null,d=u?u===un?i.length:c.length:0);const p=u===un&&/\b(transform|all)(,|$)/.test(n[un+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:p}}function Fh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vh(n)+Vh(t[r])))}function Vh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Bp(){return document.body.offsetHeight}const $p=new WeakMap,jp=new WeakMap,j0={name:"TransitionGroup",props:We({},V0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ia(),r=dp();let s,i;return yp(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!K0(s[0].el,n.vnode.el,o))return;s.forEach(H0),s.forEach(q0);const a=s.filter(z0);Bp(),a.forEach(c=>{const l=c.el,u=l.style;Yt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,gn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=he(t),a=Fp(o);let c=o.tag||It;s=i,i=e.default?Cl(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Gs(u,Ws(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];Gs(u,Ws(u,a,r,n)),$p.set(u,u.el.getBoundingClientRect())}return Pe(c,null,i)}}},QA=j0;function H0(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function q0(t){jp.set(t,t.el.getBoundingClientRect())}function z0(t){const e=$p.get(t),n=jp.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function K0(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Vp(r);return s.removeChild(r),i}const $r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>so(e,n):e};function W0(t){t.target.composing=!0}function Bh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const JA={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=$r(s);const i=r||s.props&&s.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Hs(a)),t._assign(a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",W0),wn(t,"compositionend",Bh),wn(t,"change",Bh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=$r(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Hs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ZA={deep:!0,created(t,e,n){t._assign=$r(n),wn(t,"change",()=>{const r=t._modelValue,s=Qs(t),i=t.checked,o=t._assign;if(K(r)){const a=gl(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Zr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Hp(t,i))})},mounted:$h,beforeUpdate(t,e,n){t._assign=$r(n),$h(t,e,n)}};function $h(t,{value:e,oldValue:n},r){t._modelValue=e,K(e)?t.checked=gl(e,r.props.value)>-1:Zr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=fi(e,Hp(t,!0)))}const eR={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Zr(e);wn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Hs(Qs(o)):Qs(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=$r(r)},mounted(t,{value:e}){jh(t,e)},beforeUpdate(t,e,n){t._assign=$r(n)},updated(t,{value:e}){jh(t,e)}};function jh(t,e){const n=t.multiple;if(!(n&&!K(e)&&!Zr(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Qs(i);if(n)K(e)?i.selected=gl(e,o)>-1:i.selected=e.has(o);else if(fi(Qs(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qs(t){return"_value"in t?t._value:t.value}function Hp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const G0=["ctrl","shift","alt","meta"],Y0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>G0.some(n=>t[`${n}Key`]&&!e.includes(n))},tR=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Y0[e[s]];if(i&&i(n,e))return}return t(n,...r)},X0=We({patchProp:U0},E0);let Hh;function Q0(){return Hh||(Hh=n0(X0))}const J0=(...t)=>{const e=Q0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Z0(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Z0(t){return je(t)?document.querySelector(t):t}var eb=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let qp;const ca=t=>qp=t,zp=Symbol();function Dc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Rs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Rs||(Rs={}));function tb(){const t=Bf(!0),e=t.run(()=>gi({}));let n=[],r=[];const s=sr({install(i){ca(s),s._a=i,i.provide(zp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!eb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Kp=()=>{};function qh(t,e,n,r=Kp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ia()&&Rl(s),s}function Er(t,...e){t.slice().forEach(n=>{n(...e)})}function Nc(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Dc(s)&&Dc(r)&&t.hasOwnProperty(n)&&!Oe(r)&&!kn(r)?t[n]=Nc(s,r):t[n]=r}return t}const nb=Symbol();function rb(t){return!Dc(t)||!t.hasOwnProperty(nb)}const{assign:Xt}=Object;function sb(t){return!!(Oe(t)&&t.effect)}function ib(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=fv(n.state.value[t]);return Xt(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=sr(Tt(()=>{ca(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Wp(t,l,e,n,r,!0),c.$reset=function(){const h=s?s():{};this.$patch(d=>{Xt(d,h)})},c}function Wp(t,e,n={},r,s,i){let o;const a=Xt({actions:{}},n),c={deep:!0};let l,u,h=sr([]),d=sr([]),p;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),gi({});let v;function w(G){let O;l=u=!1,typeof G=="function"?(G(r.state.value[t]),O={type:Rs.patchFunction,storeId:t,events:p}):(Nc(r.state.value[t],G),O={type:Rs.patchObject,payload:G,storeId:t,events:p});const Z=v=Symbol();xl().then(()=>{v===Z&&(l=!0)}),u=!0,Er(h,O,r.state.value[t])}const T=Kp;function D(){o.stop(),h=[],d=[],r._s.delete(t)}function F(G,O){return function(){ca(r);const Z=Array.from(arguments),ae=[],_e=[];function U(Ae){ae.push(Ae)}function pe(Ae){_e.push(Ae)}Er(d,{args:Z,name:G,store:W,after:U,onError:pe});let Ce;try{Ce=O.apply(this&&this.$id===t?this:W,Z)}catch(Ae){throw Er(_e,Ae),Ae}return Ce instanceof Promise?Ce.then(Ae=>(Er(ae,Ae),Ae)).catch(Ae=>(Er(_e,Ae),Promise.reject(Ae))):(Er(ae,Ce),Ce)}}const M={_p:r,$id:t,$onAction:qh.bind(null,d),$patch:w,$reset:T,$subscribe(G,O={}){const Z=qh(h,G,O.detached,()=>ae()),ae=o.run(()=>Pr(()=>r.state.value[t],_e=>{(O.flush==="sync"?u:l)&&G({storeId:t,type:Rs.direct,events:p},_e)},Xt({},c,O)));return Z},$dispose:D},W=gr(Xt({},M));r._s.set(t,W);const oe=r._e.run(()=>(o=Bf(),o.run(()=>e())));for(const G in oe){const O=oe[G];if(Oe(O)&&!sb(O)||kn(O))i||(m&&rb(O)&&(Oe(O)?O.value=m[G]:Nc(O,m[G])),r.state.value[t][G]=O);else if(typeof O=="function"){const Z=F(G,O);oe[G]=Z,a.actions[G]=O}}return Xt(W,oe),Xt(he(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:G=>{w(O=>{Xt(O,G)})}}),r._p.forEach(G=>{Xt(W,o.run(()=>G({store:W,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(W.$state,m),l=!0,u=!0,W}function ob(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ia();return a=a||l&&jt(zp),a&&ca(a),a=qp,a._s.has(r)||(i?Wp(r,e,s,a):ib(r,s,a)),a._s.get(r)}return o.$id=r,o}var ab=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const cb={},lb={class:"flex"},ub={class:"w-full h-screen overflow-auto"},hb={class:"block"},db={class:"h-full"};function fb(t,e){const n=$v("router-view");return Pt(),Vr("section",lb,[Ke("div",null,[Pe(n,{name:"sidebar"})]),Ke("div",ub,[Ke("div",hb,[Pe(n,{name:"navbar"})]),Ke("div",db,[Pe(n,null,{default:_o(({Component:r,route:s})=>[Pe(aa,{"enter-active-class":"transition duration-1000","enter-from-class":"opacity-0 translate-y-10","enter-to-class":"opacity-1 translate-y-0","leave-active-class":"transition duration-500 ","leave-from-class":"opacity-1 translate-y-0","leave-to-class":"opacity-0 -translate-y-10",mode:"out-in"},{default:_o(()=>[(Pt(),Vr("div",{key:s.name,class:"h-full"},[(Pt(),mi(bp(r)))]))]),_:2},1024)]),_:1})])])])}var pb=ab(cb,[["render",fb]]);const gb="modulepreload",zh={},mb="/gestion_formation_firebase/",Ve=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${mb}${r}`,r in zh)return;zh[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":gb,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",rs=t=>Gp?Symbol(t):"_vr_"+t,yb=rs("rvlm"),Kh=rs("rvd"),la=rs("r"),Yp=rs("rl"),Oc=rs("rvl"),Cr=typeof window!="undefined";function wb(t){return t.__esModule||Gp&&t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Ka(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Ds=()=>{},vb=/\/$/,bb=t=>t.replace(vb,"");function Wa(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Tb(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function _b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Eb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&jr(e.matched[r],n.matched[s])&&Xp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ib(t[n],e[n]))return!1;return!0}function Ib(t,e){return Array.isArray(t)?Gh(t,e):Array.isArray(e)?Gh(e,t):t===e}function Gh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Tb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Js;(function(t){t.pop="pop",t.push="push"})(Js||(Js={}));var Ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ns||(Ns={}));function kb(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bb(t)}const Sb=/^[^#]+#/;function xb(t,e){return t.replace(Sb,"#")+e}function Cb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ua=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ab(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Cb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yh(t,e){return(history.state?history.state.position-e:-1)+t}const Pc=new Map;function Rb(t,e){Pc.set(t,e)}function Db(t){const e=Pc.get(t);return Pc.delete(t),e}let Nb=()=>location.protocol+"//"+location.host;function Qp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Wh(c,"")}return Wh(n,t)+r+s}function Ob(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Qp(t,location),m=n.value,v=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}w=v?d.position-v.position:0}else r(p);s.forEach(T=>{T(n.value,m,{delta:w,type:Js.pop,direction:w?w>0?Ns.forward:Ns.back:Ns.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ve({},d.state,{scroll:ua()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Xh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ua():null}}function Pb(t){const{history:e,location:n}=window,r={value:Qp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Nb()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ve({},e.state,Xh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ve({},s.value,e.state,{forward:c,scroll:ua()});i(u.current,u,!0);const h=ve({},Xh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Lb(t){t=kb(t);const e=Pb(t),n=Ob(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ve({location:"",base:t,go:r,createHref:xb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Mb(t){return typeof t=="string"||t&&typeof t=="object"}function Jp(t){return typeof t=="string"||typeof t=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zp=rs("nf");var Qh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qh||(Qh={}));function Hr(t,e){return ve(new Error,{type:t,[Zp]:!0},e)}function dn(t,e){return t instanceof Error&&Zp in t&&(e==null||!!(t.type&e))}const Jh="[^/]+?",Ub={sensitive:!1,strict:!1,start:!0,end:!0},Fb=/[.+*?^${}()[\]/\\]/g;function Vb(t,e){const n=ve({},Ub,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Fb,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:v,optional:w,regexp:T}=d;i.push({name:m,repeatable:v,optional:w});const D=T||Jh;if(D!==Jh){p+=10;try{new RegExp(`(${D})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+M.message)}}let F=v?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(F=w&&l.length<2?`(?:/${F})`:"/"+F),w&&(F+="?"),s+=F,p+=20,w&&(p+=-8),v&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:w}=p,T=m in l?l[m]:"";if(Array.isArray(T)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(T)?T.join("/"):T;if(!D)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Bb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $b(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bb(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const jb={type:0,value:""},Hb=/[a-zA-Z0-9_]/;function qb(t){if(!t)return[[]];if(t==="/")return[[jb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Hb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function zb(t,e,n){const r=Vb(qb(t.path),n),s=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kb(t,e){const n=[],r=new Map;e=ed({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,m=Gb(u);m.aliasOf=d&&d.record;const v=ed(e,u),w=[m];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of F)w.push(ve({},m,{components:d?d.record.components:m.components,path:M,aliasOf:d?d.record:m}))}let T,D;for(const F of w){const{path:M}=F;if(h&&M[0]!=="/"){const W=h.record.path,oe=W[W.length-1]==="/"?"":"/";F.path=h.record.path+(M&&oe+M)}if(T=zb(F,h,v),d?d.alias.push(T):(D=D||T,D!==T&&D.alias.push(T),p&&u.name&&!Zh(T)&&o(u.name)),"children"in m){const W=m.children;for(let oe=0;oe<W.length;oe++)i(W[oe],T,d&&d.children[oe])}d=d||T,c(T)}return D?()=>{o(D)}:Ds}function o(u){if(Jp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&$b(u,n[h])>=0&&(u.record.path!==n[h].record.path||!eg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Zh(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},m,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Hr(1,{location:u});v=d.record.name,p=ve(Wb(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(D=>D.re.test(m)),d&&(p=d.parse(m),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Hr(1,{location:u,currentLocation:h});v=d.record.name,p=ve({},h.params,u.params),m=d.stringify(p)}const w=[];let T=d;for(;T;)w.unshift(T.record),T=T.parent;return{name:v,path:m,params:p,matched:w,meta:Xb(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Wb(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Gb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Yb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Yb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Zh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xb(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function ed(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function eg(t,e){return e.children.some(n=>n===t||eg(t,n))}const tg=/#/g,Qb=/&/g,Jb=/\//g,Zb=/=/g,e_=/\?/g,ng=/\+/g,t_=/%5B/g,n_=/%5D/g,rg=/%5E/g,r_=/%60/g,sg=/%7B/g,s_=/%7C/g,ig=/%7D/g,i_=/%20/g;function Ml(t){return encodeURI(""+t).replace(s_,"|").replace(t_,"[").replace(n_,"]")}function o_(t){return Ml(t).replace(sg,"{").replace(ig,"}").replace(rg,"^")}function Lc(t){return Ml(t).replace(ng,"%2B").replace(i_,"+").replace(tg,"%23").replace(Qb,"%26").replace(r_,"`").replace(sg,"{").replace(ig,"}").replace(rg,"^")}function a_(t){return Lc(t).replace(Zb,"%3D")}function c_(t){return Ml(t).replace(tg,"%23").replace(e_,"%3F")}function l_(t){return t==null?"":c_(t).replace(Jb,"%2F")}function To(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function u_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ng," "),o=i.indexOf("="),a=To(o<0?i:i.slice(0,o)),c=o<0?null:To(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function td(t){let e="";for(let n in t){const r=t[n];if(n=a_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Lc(i)):[r&&Lc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function h_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ms(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Hr(4,{from:n,to:e})):h instanceof Error?a(h):Mb(h)?a(Hr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ga(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(d_(a)){const l=(a.__vccOpts||a)[e];l&&s.push(yn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=wb(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&yn(d,n,r,i,o)()}))}}return s}function d_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nd(t){const e=jt(la),n=jt(Yp),r=Tt(()=>e.resolve(Or(t.to))),s=Tt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(jr.bind(null,u));if(d>-1)return d;const p=rd(c[l-2]);return l>1&&rd(u)===p&&h[h.length-1].path!==p?h.findIndex(jr.bind(null,c[l-2])):d}),i=Tt(()=>s.value>-1&&m_(n.params,r.value.params)),o=Tt(()=>s.value>-1&&s.value===n.matched.length-1&&Xp(n.params,r.value.params));function a(c={}){return g_(c)?e[Or(t.replace)?"replace":"push"](Or(t.to)).catch(Ds):Promise.resolve()}return{route:r,href:Tt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const f_=Al({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nd,setup(t,{slots:e}){const n=gr(nd(t)),{options:r}=jt(la),s=Tt(()=>({[sd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ll("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),p_=f_;function g_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function m_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sd=(t,e,n)=>t!=null?t:e!=null?e:n,y_=Al({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=jt(Oc),s=Tt(()=>t.route||r.value),i=jt(Kh,0),o=Tt(()=>s.value.matched[i]);io(Kh,i+1),io(yb,o),io(Oc,s);const a=gi();return Pr(()=>[a.value,o.value,t.name],([c,l,u],[h,d,p])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!jr(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return id(n.default,{Component:u,route:c});const d=l.props[t.name],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,v=Ll(u,ve({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return id(n.default,{Component:v,route:c})||v}}});function id(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const w_=y_;function v_(t){const e=Kb(t.routes,t),n=t.parseQuery||u_,r=t.stringifyQuery||td,s=t.history,i=ms(),o=ms(),a=ms(),c=uv(hn);let l=hn;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ka.bind(null,b=>""+b),h=Ka.bind(null,l_),d=Ka.bind(null,To);function p(b,B){let R,j;return Jp(b)?(R=e.getRecordMatcher(b),j=B):j=b,e.addRoute(j,R)}function m(b){const B=e.getRecordMatcher(b);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(b=>b.record)}function w(b){return!!e.getRecordMatcher(b)}function T(b,B){if(B=ve({},B||c.value),typeof b=="string"){const ne=Wa(n,b,B.path),f=e.resolve({path:ne.path},B),g=s.createHref(ne.fullPath);return ve(ne,f,{params:d(f.params),hash:To(ne.hash),redirectedFrom:void 0,href:g})}let R;if("path"in b)R=ve({},b,{path:Wa(n,b.path,B.path).path});else{const ne=ve({},b.params);for(const f in ne)ne[f]==null&&delete ne[f];R=ve({},b,{params:h(b.params)}),B.params=h(B.params)}const j=e.resolve(R,B),me=b.hash||"";j.params=u(d(j.params));const Ie=_b(r,ve({},b,{hash:o_(me),path:j.path})),se=s.createHref(Ie);return ve({fullPath:Ie,hash:me,query:r===td?h_(b.query):b.query||{}},j,{redirectedFrom:void 0,href:se})}function D(b){return typeof b=="string"?Wa(n,b,c.value.path):ve({},b)}function F(b,B){if(l!==b)return Hr(8,{from:B,to:b})}function M(b){return G(b)}function W(b){return M(ve(D(b),{replace:!0}))}function oe(b){const B=b.matched[b.matched.length-1];if(B&&B.redirect){const{redirect:R}=B;let j=typeof R=="function"?R(b):R;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=D(j):{path:j},j.params={}),ve({query:b.query,hash:b.hash,params:b.params},j)}}function G(b,B){const R=l=T(b),j=c.value,me=b.state,Ie=b.force,se=b.replace===!0,ne=oe(R);if(ne)return G(ve(D(ne),{state:me,force:Ie,replace:se}),B||R);const f=R;f.redirectedFrom=B;let g;return!Ie&&Eb(r,j,R)&&(g=Hr(16,{to:f,from:j}),br(j,j,!0,!1)),(g?Promise.resolve(g):Z(f,j)).catch(y=>dn(y)?dn(y,2)?y:gt(y):Ee(y,f,j)).then(y=>{if(y){if(dn(y,2))return G(ve(D(y.to),{state:me,force:Ie,replace:se}),B||f)}else y=_e(f,j,!0,se,me);return ae(f,j,y),y})}function O(b,B){const R=F(b,B);return R?Promise.reject(R):Promise.resolve()}function Z(b,B){let R;const[j,me,Ie]=b_(b,B);R=Ga(j.reverse(),"beforeRouteLeave",b,B);for(const ne of j)ne.leaveGuards.forEach(f=>{R.push(yn(f,b,B))});const se=O.bind(null,b,B);return R.push(se),Ir(R).then(()=>{R=[];for(const ne of i.list())R.push(yn(ne,b,B));return R.push(se),Ir(R)}).then(()=>{R=Ga(me,"beforeRouteUpdate",b,B);for(const ne of me)ne.updateGuards.forEach(f=>{R.push(yn(f,b,B))});return R.push(se),Ir(R)}).then(()=>{R=[];for(const ne of b.matched)if(ne.beforeEnter&&!B.matched.includes(ne))if(Array.isArray(ne.beforeEnter))for(const f of ne.beforeEnter)R.push(yn(f,b,B));else R.push(yn(ne.beforeEnter,b,B));return R.push(se),Ir(R)}).then(()=>(b.matched.forEach(ne=>ne.enterCallbacks={}),R=Ga(Ie,"beforeRouteEnter",b,B),R.push(se),Ir(R))).then(()=>{R=[];for(const ne of o.list())R.push(yn(ne,b,B));return R.push(se),Ir(R)}).catch(ne=>dn(ne,8)?ne:Promise.reject(ne))}function ae(b,B,R){for(const j of a.list())j(b,B,R)}function _e(b,B,R,j,me){const Ie=F(b,B);if(Ie)return Ie;const se=B===hn,ne=Cr?history.state:{};R&&(j||se?s.replace(b.fullPath,ve({scroll:se&&ne&&ne.scroll},me)):s.push(b.fullPath,me)),c.value=b,br(b,B,R,se),gt()}let U;function pe(){U=s.listen((b,B,R)=>{const j=T(b),me=oe(j);if(me){G(ve(me,{replace:!0}),j).catch(Ds);return}l=j;const Ie=c.value;Cr&&Rb(Yh(Ie.fullPath,R.delta),ua()),Z(j,Ie).catch(se=>dn(se,12)?se:dn(se,2)?(G(se.to,j).then(ne=>{dn(ne,20)&&!R.delta&&R.type===Js.pop&&s.go(-1,!1)}).catch(Ds),Promise.reject()):(R.delta&&s.go(-R.delta,!1),Ee(se,j,Ie))).then(se=>{se=se||_e(j,Ie,!1),se&&(R.delta?s.go(-R.delta,!1):R.type===Js.pop&&dn(se,20)&&s.go(-1,!1)),ae(j,Ie,se)}).catch(Ds)})}let Ce=ms(),Ae=ms(),Re;function Ee(b,B,R){gt(b);const j=Ae.list();return j.length?j.forEach(me=>me(b,B,R)):console.error(b),Promise.reject(b)}function ge(){return Re&&c.value!==hn?Promise.resolve():new Promise((b,B)=>{Ce.add([b,B])})}function gt(b){return Re||(Re=!b,pe(),Ce.list().forEach(([B,R])=>b?R(b):B()),Ce.reset()),b}function br(b,B,R,j){const{scrollBehavior:me}=t;if(!Cr||!me)return Promise.resolve();const Ie=!R&&Db(Yh(b.fullPath,0))||(j||!R)&&history.state&&history.state.scroll||null;return xl().then(()=>me(b,B,Ie)).then(se=>se&&Ab(se)).catch(se=>Ee(se,b,B))}const Gt=b=>s.go(b);let Mt;const _t=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:w,getRoutes:v,resolve:T,options:t,push:M,replace:W,go:Gt,back:()=>Gt(-1),forward:()=>Gt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ae.add,isReady:ge,install(b){const B=this;b.component("RouterLink",p_),b.component("RouterView",w_),b.config.globalProperties.$router=B,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Or(c)}),Cr&&!Mt&&c.value===hn&&(Mt=!0,M(s.location).catch(me=>{}));const R={};for(const me in hn)R[me]=Tt(()=>c.value[me]);b.provide(la,B),b.provide(Yp,gr(R)),b.provide(Oc,c);const j=b.unmount;_t.add(b),b.unmount=function(){_t.delete(b),_t.size<1&&(l=hn,U&&U(),c.value=hn,Mt=!1,Re=!1),j()}}}}function Ir(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function b_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>jr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>jr(l,c))||s.push(c))}return[n,r,s]}function __(){return jt(la)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},E_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(og(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):E_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},I_=function(t){const e=og(t);return ag.encodeByteArray(e,!0)},cg=function(t){return I_(t).replace(/\./g,"")},T_=function(t){try{return ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function ug(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function S_(){return Ge().indexOf("Electron/")>=0}function dg(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x_(){return Ge().indexOf("MSAppHost/")>=0}function C_(){return typeof indexedDB=="object"}function A_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=R_,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?D_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Un(s,a,r)}}function D_(t,e){return t.replace(N_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const N_=/\{\$([^}]+)}/g;function O_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(od(i)&&od(o)){if(!ko(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function od(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Es(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function P_(t,e){const n=new L_(t,e);return n.subscribe.bind(n)}class L_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");M_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ya),s.error===void 0&&(s.error=Ya),s.complete===void 0&&(s.complete=Ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new k_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V_(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:F_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F_(t){return t===zn?void 0:t}function V_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new U_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const $_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},j_=de.INFO,H_={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},q_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=H_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=j_,this._logHandler=q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const z_=(t,e)=>e.some(n=>t instanceof n);let ad,cd;function K_(){return ad||(ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W_(){return cd||(cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,Mc=new WeakMap,pg=new WeakMap,Xa=new WeakMap,Fl=new WeakMap;function G_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),Fl.set(e,t),e}function Y_(t){if(Mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Mc.set(t,e)}let Uc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X_(t){Uc=t(Uc)}function Q_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qa(this),e,...n);return pg.set(r,e.sort?e.sort():[e]),xn(r)}:W_().includes(t)?function(...e){return t.apply(Qa(this),e),xn(fg.get(this))}:function(...e){return xn(t.apply(Qa(this),e))}}function J_(t){return typeof t=="function"?Q_(t):(t instanceof IDBTransaction&&Y_(t),z_(t,K_())?new Proxy(t,Uc):t)}function xn(t){if(t instanceof IDBRequest)return G_(t);if(Xa.has(t))return Xa.get(t);const e=J_(t);return e!==t&&(Xa.set(t,e),Fl.set(e,t)),e}const Qa=t=>Fl.get(t);function Z_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=xn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xn(o.result),c.oldVersion,c.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const eE=["get","getKey","getAll","getAllKeys","count"],tE=["put","add","delete","clear"],Ja=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ja.set(e,i),i}X_(t=>({...t,get:(e,n,r)=>ld(e,n)||t.get(e,n,r),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fc="@firebase/app",ud="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Ul("@firebase/app"),sE="@firebase/app-compat",iE="@firebase/analytics-compat",oE="@firebase/analytics",aE="@firebase/app-check-compat",cE="@firebase/app-check",lE="@firebase/auth",uE="@firebase/auth-compat",hE="@firebase/database",dE="@firebase/database-compat",fE="@firebase/functions",pE="@firebase/functions-compat",gE="@firebase/installations",mE="@firebase/installations-compat",yE="@firebase/messaging",wE="@firebase/messaging-compat",vE="@firebase/performance",bE="@firebase/performance-compat",_E="@firebase/remote-config",EE="@firebase/remote-config-compat",IE="@firebase/storage",TE="@firebase/storage-compat",kE="@firebase/firestore",SE="@firebase/firestore-compat",xE="firebase",CE="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="[DEFAULT]",AE={[Fc]:"fire-core",[sE]:"fire-core-compat",[oE]:"fire-analytics",[iE]:"fire-analytics-compat",[cE]:"fire-app-check",[aE]:"fire-app-check-compat",[lE]:"fire-auth",[uE]:"fire-auth-compat",[hE]:"fire-rtdb",[dE]:"fire-rtdb-compat",[fE]:"fire-fn",[pE]:"fire-fn-compat",[gE]:"fire-iid",[mE]:"fire-iid-compat",[yE]:"fire-fcm",[wE]:"fire-fcm-compat",[vE]:"fire-perf",[bE]:"fire-perf-compat",[_E]:"fire-rc",[EE]:"fire-rc-compat",[IE]:"fire-gcs",[TE]:"fire-gcs-compat",[kE]:"fire-fst",[SE]:"fire-fst-compat","fire-js":"fire-js",[xE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map,Vc=new Map;function RE(t,e){try{t.container.addComponent(e)}catch(n){Vl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(Vc.has(e))return Vl.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of So.values())RE(n,t);return!0}function ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},or=new yi("app","Firebase",DE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=CE;function OE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:gg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw or.create("bad-app-name",{appName:String(r)});const s=So.get(r);if(s){if(ko(t,s.options)&&ko(n,s.config))return s;throw or.create("duplicate-app",{appName:r})}const i=new B_(r);for(const a of Vc.values())i.addComponent(a);const o=new NE(t,n,i);return So.set(r,o),o}function Bl(t=gg){const e=So.get(t);if(!e)throw or.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=AE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vl.warn(a.join(" "));return}ir(new Dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firebase-heartbeat-database",LE=1,Zs="firebase-heartbeat-store";let Za=null;function mg(){return Za||(Za=Z_(PE,LE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zs)}}}).catch(t=>{throw or.create("storage-open",{originalErrorMessage:t.message})})),Za}async function ME(t){var e;try{return(await mg()).transaction(Zs).objectStore(Zs).get(yg(t))}catch(n){throw or.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function hd(t,e){var n;try{const s=(await mg()).transaction(Zs,"readwrite");return await s.objectStore(Zs).put(e,yg(t)),s.done}catch(r){throw or.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function yg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=1024,FE=30*24*60*60*1e3;class VE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $E(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=FE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dd(),{heartbeatsToSend:n,unsentEntries:r}=BE(this._heartbeatsCache.heartbeats),s=cg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dd(){return new Date().toISOString().substring(0,10)}function BE(t,e=UE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C_()?A_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ME(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fd(t){return cg(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t){ir(new Dn("platform-logger",e=>new nE(e),"PRIVATE")),ir(new Dn("heartbeat",e=>new VE(e),"PRIVATE")),Ht(Fc,ud,t),Ht(Fc,ud,"esm2017"),Ht("fire-js","")}jE("");var HE="firebase",qE="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(HE,qE,"app");var zE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P,$l=$l||{},X=zE||self;function xo(){}function Bc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KE(t){return Object.prototype.hasOwnProperty.call(t,ec)&&t[ec]||(t[ec]=++WE)}var ec="closure_uid_"+(1e9*Math.random()>>>0),WE=0;function GE(t,e,n){return t.call.apply(t.bind,arguments)}function YE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=GE:Ze=YE,Ze.apply(null,arguments)}function Gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Fn(){this.s=this.s,this.o=this.o}var XE=0;Fn.prototype.s=!1;Fn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),XE!=0)&&KE(this)};Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},vg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function QE(t){e:{var e=jI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function pd(t){return Array.prototype.concat.apply([],arguments)}function jl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Co(t){return/^[\s\xa0]*$/.test(t)}var gd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function at(t,e){return t.indexOf(e)!=-1}function tc(t,e){return t<e?-1:t>e?1:0}var ct;e:{var md=X.navigator;if(md){var yd=md.userAgent;if(yd){ct=yd;break e}}ct=""}function Hl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function bg(t){const e={};for(const n in t)e[n]=t[n];return e}var wd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _g(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<wd.length;i++)n=wd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ql(t){return ql[" "](t),t}ql[" "]=xo;function JE(t){var e=tI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ZE=at(ct,"Opera"),qr=at(ct,"Trident")||at(ct,"MSIE"),Eg=at(ct,"Edge"),$c=Eg||qr,Ig=at(ct,"Gecko")&&!(at(ct.toLowerCase(),"webkit")&&!at(ct,"Edge"))&&!(at(ct,"Trident")||at(ct,"MSIE"))&&!at(ct,"Edge"),eI=at(ct.toLowerCase(),"webkit")&&!at(ct,"Edge");function Tg(){var t=X.document;return t?t.documentMode:void 0}var Ao;e:{var nc="",rc=function(){var t=ct;if(Ig)return/rv:([^\);]+)(\)|;)/.exec(t);if(Eg)return/Edge\/([\d\.]+)/.exec(t);if(qr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eI)return/WebKit\/(\S+)/.exec(t);if(ZE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rc&&(nc=rc?rc[1]:""),qr){var sc=Tg();if(sc!=null&&sc>parseFloat(nc)){Ao=String(sc);break e}}Ao=nc}var tI={};function nI(){return JE(function(){let t=0;const e=gd(String(Ao)).split("."),n=gd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=tc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||tc(s[2].length==0,i[2].length==0)||tc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var jc;if(X.document&&qr){var vd=Tg();jc=vd||parseInt(Ao,10)||void 0}else jc=void 0;var rI=jc,sI=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",xo,e),X.removeEventListener("test",xo,e)}catch{}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};function ei(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ig){e:{try{ql(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ei.Z.h.call(this)}}nt(ei,st);var iI={2:"touch",3:"pen",4:"mouse"};ei.prototype.h=function(){ei.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bi="closure_listenable_"+(1e6*Math.random()|0),oI=0;function aI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++oI,this.ca=this.fa=!1}function da(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function fa(t){this.src=t,this.g={},this.h=0}fa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=qc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new aI(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Hc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=wg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(da(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var zl="closure_lm_"+(1e6*Math.random()|0),ic={};function kg(t,e,n,r,s){if(r&&r.once)return xg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)kg(t,e[i],n,r,s);return null}return n=Gl(n),t&&t[bi]?t.N(e,n,vi(r)?!!r.capture:!!r,s):Sg(t,e,n,!1,r,s)}function Sg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=vi(s)?!!s.capture:!!s,a=Wl(t);if(a||(t[zl]=a=new fa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=cI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ag(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cI(){function t(n){return e.call(t.src,t.listener,n)}var e=lI;return t}function xg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)xg(t,e[i],n,r,s);return null}return n=Gl(n),t&&t[bi]?t.O(e,n,vi(r)?!!r.capture:!!r,s):Sg(t,e,n,!0,r,s)}function Cg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Cg(t,e[i],n,r,s);else r=vi(r)?!!r.capture:!!r,n=Gl(n),t&&t[bi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=qc(i,n,r,s),-1<n&&(da(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qc(e,n,r,s)),(n=-1<t?e[t]:null)&&Kl(n))}function Kl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[bi])Hc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ag(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wl(e))?(Hc(n,t),n.h==0&&(n.src=null,e[zl]=null)):da(t)}}}function Ag(t){return t in ic?ic[t]:ic[t]="on"+t}function lI(t,e){if(t.ca)t=!0;else{e=new ei(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Kl(t),t=n.call(r,e)}return t}function Wl(t){return t=t[zl],t instanceof fa?t:null}var oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gl(t){return typeof t=="function"?t:(t[oc]||(t[oc]=function(e){return t.handleEvent(e)}),t[oc])}function Ye(){Fn.call(this),this.i=new fa(this),this.P=this,this.I=null}nt(Ye,Fn);Ye.prototype[bi]=!0;Ye.prototype.removeEventListener=function(t,e,n,r){Cg(this,t,e,n,r)};function et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),_g(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Yi(o,r,!0,e)&&s}if(o=e.g=t,s=Yi(o,r,!0,e)&&s,s=Yi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Yi(o,r,!1,e)&&s}Ye.prototype.M=function(){if(Ye.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)da(n[r]);delete t.g[e],t.h--}}this.I=null};Ye.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ye.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Hc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Yl=X.JSON.stringify;function uI(){var t=Dg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hI{constructor(){this.h=this.g=null}add(e,n){const r=Rg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new dI,t=>t.reset());class dI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fI(t){X.setTimeout(()=>{throw t},0)}function Xl(t,e){zc||pI(),Kc||(zc(),Kc=!0),Dg.add(t,e)}var zc;function pI(){var t=X.Promise.resolve(void 0);zc=function(){t.then(gI)}}var Kc=!1,Dg=new hI;function gI(){for(var t;t=uI();){try{t.h.call(t.g)}catch(n){fI(n)}var e=Rg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kc=!1}function pa(t,e){Ye.call(this),this.h=t||1,this.g=e||X,this.j=Ze(this.kb,this),this.l=Date.now()}nt(pa,Ye);P=pa.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),et(this,"tick"),this.da&&(Ql(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ql(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){pa.Z.M.call(this),Ql(this),delete this.g};function Jl(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Ng(t){t.g=Jl(()=>{t.g=null,t.i&&(t.i=!1,Ng(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mI extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ng(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(t){Fn.call(this),this.h=t,this.g={}}nt(ti,Fn);var bd=[];function Og(t,e,n,r){Array.isArray(n)||(n&&(bd[0]=n.toString()),n=bd);for(var s=0;s<n.length;s++){var i=kg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Pg(t){Hl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kl(e)},t),t.g={}}ti.prototype.M=function(){ti.Z.M.call(this),Pg(this)};ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ga(){this.g=!0}ga.prototype.Aa=function(){this.g=!1};function yI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function wI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ar(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bI(t,n)+(r?" "+r:"")})}function vI(t,e){t.info(function(){return"TIMEOUT: "+e})}ga.prototype.info=function(){};function bI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Yl(n)}catch{return e}}var mr={},_d=null;function ma(){return _d=_d||new Ye}mr.Ma="serverreachability";function Lg(t){st.call(this,mr.Ma,t)}nt(Lg,st);function ni(t){const e=ma();et(e,new Lg(e))}mr.STAT_EVENT="statevent";function Mg(t,e){st.call(this,mr.STAT_EVENT,t),this.stat=e}nt(Mg,st);function lt(t){const e=ma();et(e,new Mg(e,t))}mr.Na="timingevent";function Ug(t,e){st.call(this,mr.Na,t),this.size=e}nt(Ug,st);function _i(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var ya={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Fg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zl(){}Zl.prototype.h=null;function Ed(t){return t.h||(t.h=t.i())}function Vg(){}var Ei={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function eu(){st.call(this,"d")}nt(eu,st);function tu(){st.call(this,"c")}nt(tu,st);var Wc;function wa(){}nt(wa,Zl);wa.prototype.g=function(){return new XMLHttpRequest};wa.prototype.i=function(){return{}};Wc=new wa;function Ii(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ti(this),this.P=_I,t=$c?125:void 0,this.W=new pa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Bg}function Bg(){this.i=null,this.g="",this.h=!1}var _I=45e3,Gc={},Ro={};P=Ii.prototype;P.setTimeout=function(t){this.P=t};function Yc(t,e,n){t.K=1,t.v=ba(sn(e)),t.s=n,t.U=!0,$g(t,null)}function $g(t,e){t.F=Date.now(),Ti(t),t.A=sn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Gg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Bg,t.g=pm(t.l,n?e:null,!t.s),0<t.O&&(t.L=new mI(Ze(t.Ia,t,t.g),t.O)),Og(t.V,t.g,"readystatechange",t.gb),e=t.H?bg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ni(),yI(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&Jt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||$c||this.g&&(this.h.h||this.g.ga()||Sd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ni(3):ni(2)),va(this);var n=this.g.ba();this.N=n;t:if(jg(this)){var r=Sd(this.g);t="";var s=r.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Yn(this),Os(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,wI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Co(a)){var l=a;break t}}l=null}if(n=l)Ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xc(this,n);else{this.i=!1,this.o=3,lt(12),Yn(this),Os(this);break e}}this.U?(Hg(this,u,o),$c&&this.i&&u==3&&(Og(this.V,this.W,"tick",this.fb),this.W.start())):(Ar(this.j,this.m,o,null),Xc(this,o)),u==4&&Yn(this),this.i&&!this.I&&(u==4?um(this.l,this):(this.i=!1,Ti(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Yn(this),Os(this)}}}catch{}finally{}};function jg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Hg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=EI(t,n),s==Ro){e==4&&(t.o=4,lt(14),r=!1),Ar(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Gc){t.o=4,lt(15),Ar(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ar(t.j,t.m,s,null),Xc(t,s);jg(t)&&s!=Ro&&s!=Gc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),uu(e),e.L=!0,lt(11))):(Ar(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),Os(t))}P.fb=function(){if(this.g){var t=Jt(this.g),e=this.g.ga();this.C<e.length&&(va(this),Hg(this,t,e),this.i&&t!=4&&Ti(this))}};function EI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ro:(n=Number(e.substring(n,r)),isNaN(n)?Gc:(r+=1,r+n>e.length?Ro:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,Yn(this)};function Ti(t){t.Y=Date.now()+t.P,qg(t,t.P)}function qg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_i(Ze(t.eb,t),e)}function va(t){t.B&&(X.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(vI(this.j,this.A),this.K!=2&&(ni(),lt(17)),Yn(this),this.o=2,Os(this)):qg(this,this.Y-t)};function Os(t){t.l.G==0||t.I||um(t.l,t)}function Yn(t){va(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ql(t.W),Pg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qc(n.i,t))){if(n.I=t.N,!t.J&&Qc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Po(n),Ia(n);else break e;lu(n),lt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=_i(Ze(n.ab,n),6e3));if(1>=Qg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&Po(n),!Co(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(at(m,"spdy")||at(m,"quic")||at(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(su(i,i.h),i.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,xe(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=fm(r,r.H?r.la:null,r.W),o.J){Jg(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(va(a),Ti(a)),r.g=o}else cm(r);0<n.l.length&&Ta(n)}else l[0]!="stop"&&l[0]!="close"||Xn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Xn(n,7):cu(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ni(4)}catch{}}function II(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bc(t)||typeof t=="string")vg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Bc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=II(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function is(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof is)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=is.prototype;P.R=function(){ru(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return ru(this),this.g.concat()};function ru(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ar(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],ar(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}P.get=function(t,e){return ar(this.h,t)?this.h[t]:e};P.set=function(t,e){ar(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var zg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function TI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function cr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof cr){this.g=e!==void 0?e:t.g,Do(this,t.j),this.s=t.s,No(this,t.i),Oo(this,t.m),this.l=t.l,e=t.h;var n=new ri;n.i=e.i,e.g&&(n.g=new is(e.g),n.h=e.h),Id(this,n),this.o=t.o}else t&&(n=String(t).match(zg))?(this.g=!!e,Do(this,n[1]||"",!0),this.s=Ps(n[2]||""),No(this,n[3]||"",!0),Oo(this,n[4]),this.l=Ps(n[5]||"",!0),Id(this,n[6]||"",!0),this.o=Ps(n[7]||"")):(this.g=!!e,this.h=new ri(null,this.g))}cr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ts(e,Td,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ts(e,Td,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ts(n,n.charAt(0)=="/"?AI:CI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ts(n,DI)),t.join("")};function sn(t){return new cr(t)}function Do(t,e,n){t.j=n?Ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function No(t,e,n){t.i=n?Ps(e,!0):e}function Oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Id(t,e,n){e instanceof ri?(t.h=e,NI(t.h,t.g)):(n||(e=Ts(e,RI)),t.h=new ri(e,t.g))}function xe(t,e,n){t.h.set(e,n)}function ba(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kI(t){return t instanceof cr?sn(t):new cr(t,void 0)}function SI(t,e,n,r){var s=new cr(null,void 0);return t&&Do(s,t),e&&No(s,e),n&&Oo(s,n),r&&(s.l=r),s}function Ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ts(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Td=/[#\/\?@]/g,CI=/[#\?:]/g,AI=/[#\?]/g,RI=/[#\?@]/g,DI=/#/g;function ri(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new is,t.h=0,t.i&&TI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=ri.prototype;P.add=function(t,e){Vn(this),this.i=null,t=os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Kg(t,e){Vn(t),e=os(t,e),ar(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ar(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ru(t)))}function Wg(t,e){return Vn(t),e=os(t,e),ar(t.g.h,e)}P.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){vg(n,function(s){t.call(e,s,r,this)},this)},this)};P.T=function(){Vn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};P.R=function(t){Vn(this);var e=[];if(typeof t=="string")Wg(this,t)&&(e=pd(e,this.g.get(os(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=pd(e,t[n])}return e};P.set=function(t,e){return Vn(this),this.i=null,t=os(this,t),Wg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Gg(t,e,n){Kg(t,e),0<n.length&&(t.i=null,t.g.set(os(t,e),jl(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NI(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Kg(this,r),Gg(this,s,n))},t)),t.j=e}var OI=class{constructor(t,e){this.h=t,this.g=e}};function Yg(t){this.l=t||PI,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ea&&X.g.Ea()&&X.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PI=10;function Xg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qg(t){return t.h?1:t.g?t.g.size:0}function Qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function su(t,e){t.g?t.g.add(e):t.h=e}function Jg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yg.prototype.cancel=function(){if(this.i=Zg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jl(t.i)}function iu(){}iu.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};iu.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function LI(){this.g=new iu}function MI(t,e,n){const r=n||"";try{nu(t,function(s,i){let o=s;vi(s)&&(o=Yl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function UI(t,e){const n=new ga;if(X.Image){const r=new Image;r.onload=Gi(Xi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gi(Xi,n,r,"TestLoadImage: error",!1,e),r.onabort=Gi(Xi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gi(Xi,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ki(t){this.l=t.$b||null,this.j=t.ib||!1}nt(ki,Zl);ki.prototype.g=function(){return new _a(this.l,this.j)};ki.prototype.i=function(t){return function(){return t}}({});function _a(t,e){Ye.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ou,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(_a,Ye);var ou=0;P=_a.prototype;P.open=function(t,e){if(this.readyState!=ou)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,si(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=ou};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof X.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;em(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function em(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Si(this):si(this),this.readyState==3&&em(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,Si(this))};P.Ta=function(t){this.g&&(this.response=t,Si(this))};P.ha=function(){this.g&&Si(this)};function Si(t){t.readyState=4,t.l=null,t.j=null,t.A=null,si(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var FI=X.JSON.parse;function Fe(t){Ye.call(this),this.headers=new is,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tm,this.K=this.L=!1}nt(Fe,Ye);var tm="",VI=/^https?$/i,BI=["POST","PUT"];P=Fe.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wc.g(),this.C=this.u?Ed(this.u):Ed(Wc),this.g.onreadystatechange=Ze(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){kd(this,i);return}t=n||"";const s=new is(this.headers);r&&nu(r,function(i,o){s.set(o,i)}),r=QE(s.T()),n=X.FormData&&t instanceof X.FormData,!(0<=wg(BI,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sm(this),0<this.B&&((this.K=$I(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.pa,this)):this.A=Jl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){kd(this,i)}};function $I(t){return qr&&nI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function jI(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof $l!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function kd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nm(t),Ea(t)}function nm(t){t.D||(t.D=!0,et(t,"complete"),et(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Ea(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ea(this,!0)),Fe.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?rm(this):this.cb())};P.cb=function(){rm(this)};function rm(t){if(t.h&&typeof $l!="undefined"&&(!t.C[1]||Jt(t)!=4||t.ba()!=2)){if(t.v&&Jt(t)==4)Jl(t.Fa,0,t);else if(et(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(zg)[1]||null;if(!s&&X.self&&X.self.location){var i=X.self.location.protocol;s=i.substr(0,i.length-1)}r=!VI.test(s?s.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<Jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",nm(t)}}finally{Ea(t)}}}}function Ea(t,e){if(t.g){sm(t);const n=t.g,r=t.C[0]?xo:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function sm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function Jt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),FI(e)}};function Sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case tm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function HI(t){let e="";return Hl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function au(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=HI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function im(t){this.za=0,this.l=[],this.h=new ga,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ys("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ys("baseRetryDelayMs",5e3,t),this.$a=ys("retryDelaySeedMs",1e4,t),this.Ya=ys("forwardChannelMaxRetries",2,t),this.ra=ys("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Yg(t&&t.concurrentRequestLimit),this.Ca=new LI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=im.prototype;P.ma=8;P.G=1;function cu(t){if(om(t),t.G==3){var e=t.V++,n=sn(t.F);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),xi(t,n),e=new Ii(t,t.h,e,void 0),e.K=2,e.v=ba(sn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=pm(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ti(e)}dm(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ia(t){t.g&&(uu(t),t.g.cancel(),t.g=null)}function om(t){Ia(t),t.u&&(X.clearTimeout(t.u),t.u=null),Po(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function ac(t,e){t.l.push(new OI(t.Za++,e)),t.G==3&&Ta(t)}function Ta(t){Xg(t.i)||t.m||(t.m=!0,Xl(t.Ha,t),t.C=0)}function qI(t,e){return Qg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=_i(Ze(t.Ha,t,e),hm(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ii(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=bg(i),_g(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=am(this,s,e),n=sn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),xi(this,n),this.o&&i&&au(n,this.o,i),su(this.i,s),this.Ra&&xe(n,"TYPE","init"),this.ja?(xe(n,"$req",e),xe(n,"SID","null"),s.$=!0,Yc(s,n,null)):Yc(s,n,e),this.G=2}}else this.G==3&&(t?xd(this,t):this.l.length==0||Xg(this.i)||xd(this))};function xd(t,e){var n;e?n=e.m:n=t.V++;const r=sn(t.F);xe(r,"SID",t.J),xe(r,"RID",n),xe(r,"AID",t.U),xi(t,r),t.o&&t.s&&au(r,t.o,t.s),n=new Ii(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=am(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),su(t.i,n),Yc(n,r,e)}function xi(t,e){t.j&&nu({},function(n,r){xe(e,r,n)})}function am(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ze(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{MI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function cm(t){t.g||t.u||(t.Y=1,Xl(t.Ga,t),t.A=0)}function lu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=_i(Ze(t.Ga,t),hm(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,lm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=_i(Ze(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,lt(10),Ia(this),lm(this))};function uu(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function lm(t){t.g=new Ii(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=sn(t.oa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.N?"0":"1"),xe(e,"AID",t.U),xi(t,e),xe(e,"TYPE","xmlhttp"),t.o&&t.s&&au(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ba(sn(e)),n.s=null,n.U=!0,$g(n,t)}P.ab=function(){this.v!=null&&(this.v=null,Ia(this),lu(this),lt(19))};function Po(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function um(t,e){var n=null;if(t.g==e){Po(t),uu(t),t.g=null;var r=2}else if(Qc(t.i,e))n=e.D,Jg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ma(),et(r,new Ug(r,n)),Ta(t)}else cm(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&qI(t,e)||r==2&&lu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function hm(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Xn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ze(t.jb,t);n||(n=new cr("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Do(n,"https"),ba(n)),UI(n.toString(),r)}else lt(2);t.G=0,t.j&&t.j.va(e),dm(t),om(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),lt(2)):(this.h.info("Failed to ping google.com"),lt(1))};function dm(t){t.G=0,t.I=-1,t.j&&((Zg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,jl(t.l),t.l.length=0),t.j.ua())}function fm(t,e,n){let r=kI(n);if(r.i!="")e&&No(r,e+"."+r.i),Oo(r,r.m);else{const s=X.location;r=SI(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Hl(t.aa,function(s,i){xe(r,i,s)}),e=t.D,n=t.sa,e&&n&&xe(r,e,n),xe(r,"VER",t.ma),xi(t,r),r}function pm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fe(new ki({ib:!0})):new Fe(t.qa),e.L=t.H,e}function gm(){}P=gm.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function Lo(){if(qr&&!(10<=Number(rI)))throw Error("Environmental error: no available transport.")}Lo.prototype.g=function(t,e){return new bt(t,e)};function bt(t,e){Ye.call(this),this.g=new im(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Co(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new as(this)}nt(bt,Ye);bt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Xl(Ze(t.hb,t,e))),lt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=fm(t,null,t.W),Ta(t)};bt.prototype.close=function(){cu(this.g)};bt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ac(this.g,e)}else this.v?(e={},e.__data__=Yl(t),ac(this.g,e)):ac(this.g,t)};bt.prototype.M=function(){this.g.j=null,delete this.j,cu(this.g),delete this.g,bt.Z.M.call(this)};function mm(t){eu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(mm,eu);function ym(){tu.call(this),this.status=1}nt(ym,tu);function as(t){this.g=t}nt(as,gm);as.prototype.xa=function(){et(this.g,"a")};as.prototype.wa=function(t){et(this.g,new mm(t))};as.prototype.va=function(t){et(this.g,new ym)};as.prototype.ua=function(){et(this.g,"b")};Lo.prototype.createWebChannel=Lo.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;ya.NO_ERROR=0;ya.TIMEOUT=8;ya.HTTP_ERROR=6;Fg.COMPLETE="complete";Vg.EventType=Ei;Ei.OPEN="a";Ei.CLOSE="b";Ei.ERROR="c";Ei.MESSAGE="d";Ye.prototype.listen=Ye.prototype.N;Fe.prototype.listenOnce=Fe.prototype.O;Fe.prototype.getLastError=Fe.prototype.La;Fe.prototype.getLastErrorCode=Fe.prototype.Da;Fe.prototype.getStatus=Fe.prototype.ba;Fe.prototype.getResponseJson=Fe.prototype.Qa;Fe.prototype.getResponseText=Fe.prototype.ga;Fe.prototype.send=Fe.prototype.ea;var zI=function(){return new Lo},KI=function(){return ma()},cc=ya,WI=Fg,GI=mr,Cd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},YI=ki,Qi=Vg,XI=Fe;const Ad="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Ul("@firebase/firestore");function Rd(){return lr.logLevel}function $(t,...e){if(lr.logLevel<=de.DEBUG){const n=e.map(hu);lr.debug(`Firestore (${cs}): ${t}`,...n)}}function Nn(t,...e){if(lr.logLevel<=de.ERROR){const n=e.map(hu);lr.error(`Firestore (${cs}): ${t}`,...n)}}function Dd(t,...e){if(lr.logLevel<=de.WARN){const n=e.map(hu);lr.warn(`Firestore (${cs}): ${t}`,...n)}}function hu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function Te(t,e){t||J()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class ZI{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new QI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new dt(e)}}class eT{constructor(e,n,r){this.type="FirstParty",this.user=dt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class tT{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new eT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rT{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.p=n.token,new nT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function zr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Be(0,0))}static max(){return new re(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ii{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const iT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends ii{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return iT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Se.fromString(e))}static fromName(e){return new H(Se.fromString(e).popFirst(5))}static empty(){return new H(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Se(e.slice()))}}function oT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new On(s,H.empty(),e)}function aT(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new On(re.min(),H.empty(),-1)}static max(){return new On(re.max(),H.empty(),-1)}}function cT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==lT)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */du.ot=-1;class He{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Qe.RED,this.left=s!=null?s:Qe.EMPTY,this.right=i!=null?i:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Od(this.data.getIterator())}getIteratorFrom(e){return new Od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new xt([])}unionWith(e){let n=new $e(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new tt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const hT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=hT.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _m(t){const e=t.mapValue.fields.__previous_value__;return bm(e)?_m(e):e}function oi(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function fT(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bm(t)?4:pT(t)?9007199254740991:10:J()}function Wt(t,e){if(t===e)return!0;const n=ur(t);if(n!==ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Pn(r.timestampValue),o=Pn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Kr(r.bytesValue).isEqual(Kr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ue(r.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ue(r.integerValue)===Ue(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ue(r.doubleValue),o=Ue(s.doubleValue);return i===o?Mo(i)===Mo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return zr(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Nd(i)!==Nd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Wt(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function ai(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function Gr(t,e){if(t===e)return 0;const n=ur(t),r=ur(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ue(s.integerValue||s.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pd(t.timestampValue,e.timestampValue);case 4:return Pd(oi(t),oi(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Kr(s),a=Kr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=fe(o[c],a[c]);if(l!==0)return l}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=fe(Ue(s.latitude),Ue(i.latitude));return o!==0?o:fe(Ue(s.longitude),Ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Gr(o[c],a[c]);if(l)return l}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Zi.mapValue&&i===Zi.mapValue)return 0;if(s===Zi.mapValue)return 1;if(i===Zi.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=fe(a[u],l[u]);if(h!==0)return h;const d=Gr(o[a[u]],c[l[u]]);if(d!==0)return d}return fe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function Pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Pn(t),r=Pn(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function Lr(t){return Jc(t)}function Jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Pn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Kr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Jc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Jc(r.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function Ld(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zc(t){return!!t&&"integerValue"in t}function fu(t){return!!t&&"arrayValue"in t}function Md(t){return!!t&&"nullValue"in t}function Ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ls(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ft(Ls(this.value))}}function Em(t){const e=[];return yr(t.fields,(n,r)=>{const s=new rt([n]);if(lo(r)){const i=Em(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Je(e,0,re.min(),re.min(),ft.empty(),0)}static newFoundDocument(e,n,r){return new Je(e,1,n,re.min(),r,0)}static newNoDocument(e,n){return new Je(e,2,n,re.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,re.min(),ft.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Fd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gT(t,e,n,r,s,i,o)}function pu(t){const e=ee(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Lr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Lr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Lr(r)).join(",")),e.ut=n}return e.ut}function mT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Lr(r.value)}`;var r}).join(", ")}]`),ka(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Lr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Lr(n)).join(",")),`Target(${e})`}function gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!TT(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Wt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bd(t.startAt,e.startAt)&&Bd(t.endAt,e.endAt)}function el(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ut extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new yT(e,n,r):n==="array-contains"?new bT(e,r):n==="in"?new _T(e,r):n==="not-in"?new ET(e,r):n==="array-contains-any"?new IT(e,r):new ut(e,n,r)}static ct(e,n,r){return n==="in"?new wT(e,r):new vT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Gr(n,this.value)):n!==null&&ur(this.value)===ur(n)&&this.at(Gr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class yT extends ut{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.at(n)}}class wT extends ut{constructor(e,n){super(e,"in",n),this.keys=Im("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vT extends ut{constructor(e,n){super(e,"not-in",n),this.keys=Im("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Im(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class bT extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fu(n)&&ai(n.arrayValue,this.value)}}class _T extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class ET extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class IT extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ai(this.value.arrayValue,r))}}class Uo{constructor(e,n){this.position=e,this.inclusive=n}}class Ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function TT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Gr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function kT(t,e,n,r,s,i,o,a){return new Ri(t,e,n,r,s,i,o,a)}function mu(t){return new Ri(t)}function ST(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function km(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Sm(t){return t.collectionGroup!==null}function ci(t){const e=ee(t);if(e.lt===null){e.lt=[];const n=km(e),r=Tm(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Ms(n)),e.lt.push(new Ms(rt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ms(rt.keyField(),i))}}}return e.lt}function hr(t){const e=ee(t);if(!e.ft)if(e.limitType==="F")e.ft=Fd(e.path,e.collectionGroup,ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ci(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ms(i.field,o))}const r=e.endAt?new Uo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Uo(e.startAt.position,e.startAt.inclusive):null;e.ft=Fd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function xT(t,e,n){return new Ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sa(t,e){return gu(hr(t),hr(e))&&t.limitType===e.limitType}function xm(t){return`${pu(hr(t))}|lt:${t.limitType}`}function tl(t){return`Query(target=${mT(hr(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):H.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Vd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,ci(n),r)||n.endAt&&!function(s,i,o){const a=Vd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,ci(n),r))}(t,e)}function CT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cm(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=AT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AT(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Gr(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function Rm(t){return{integerValue:""+t}}function RT(t,e){return fT(e)?Rm(e):Am(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this._=void 0}}function DT(t,e,n){return t instanceof Fo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof li?Nm(t,e):t instanceof ui?Om(t,e):function(r,s){const i=Dm(r,s),o=$d(i)+$d(r._t);return Zc(i)&&Zc(r._t)?Rm(o):Am(r.wt,o)}(t,e)}function NT(t,e,n){return t instanceof li?Nm(t,e):t instanceof ui?Om(t,e):n}function Dm(t,e){return t instanceof Vo?Zc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Fo extends xa{}class li extends xa{constructor(e){super(),this.elements=e}}function Nm(t,e){const n=Pm(e);for(const r of t.elements)n.some(s=>Wt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ui extends xa{constructor(e){super(),this.elements=e}}function Om(t,e){let n=Pm(e);for(const r of t.elements)n=n.filter(s=>!Wt(s,r));return{arrayValue:{values:n}}}class Vo extends xa{constructor(e,n){super(),this.wt=e,this._t=n}}function $d(t){return Ue(t.integerValue||t.doubleValue)}function Pm(t){return fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof li&&r instanceof li||n instanceof ui&&r instanceof ui?zr(n.elements,r.elements,Wt):n instanceof Vo&&r instanceof Vo?Wt(n._t,r._t):n instanceof Fo&&r instanceof Fo}(t.transform,e.transform)}class PT{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function Lm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wu(t.key,Lt.none()):new Di(t.key,t.data,Lt.none());{const n=t.data,r=ft.empty();let s=new $e(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Bn(t.key,r,new xt(s.toArray()),Lt.none())}}function LT(t,e,n){t instanceof Di?function(r,s,i){const o=r.value.clone(),a=Hd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Bn?function(r,s,i){if(!uo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Hd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Mm(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Us(t,e,n,r){return t instanceof Di?function(s,i,o,a){if(!uo(s.precondition,i))return o;const c=s.value.clone(),l=qd(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Bn?function(s,i,o,a){if(!uo(s.precondition,i))return o;const c=qd(s.fieldTransforms,a,i),l=i.data;return l.setAll(Mm(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return uo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function MT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Dm(r.transform,s||null);i!=null&&(n===null&&(n=ft.empty()),n.set(r.field,i))}return n||null}function jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&zr(n,r,(s,i)=>OT(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Di extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bn extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hd(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,NT(o,a,n[s]))}return r}function qd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DT(i,o,e))}return r}class wu extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UT extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,ce;function VT(t){switch(t){default:return J();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Um(t){if(t===void 0)return Nn("GRPC error has no .code"),_.UNKNOWN;switch(t){case Me.OK:return _.OK;case Me.CANCELLED:return _.CANCELLED;case Me.UNKNOWN:return _.UNKNOWN;case Me.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Me.INTERNAL:return _.INTERNAL;case Me.UNAVAILABLE:return _.UNAVAILABLE;case Me.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Me.NOT_FOUND:return _.NOT_FOUND;case Me.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Me.ABORTED:return _.ABORTED;case Me.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Me.DATA_LOSS:return _.DATA_LOSS;default:return J()}}(ce=Me||(Me={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new He(H.comparator);function on(){return BT}const Fm=new He(H.comparator);function ks(...t){let e=Fm;for(const n of t)e=e.insert(n.key,n);return e}function Vm(t){let e=Fm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qn(){return Fs()}function Bm(){return Fs()}function Fs(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const $T=new He(H.comparator),jT=new $e(H.comparator);function ie(...t){let e=jT;for(const n of t)e=e.add(n);return e}const HT=new $e(fe);function $m(){return HT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ni.createSynthesizedTargetChangeForCurrentChange(e,n)),new Aa(re.min(),r,$m(),on(),ie())}}class Ni{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ni(tt.EMPTY_BYTE_STRING,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class jm{constructor(e,n){this.targetId=e,this.It=n}}class Hm{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zd{constructor(){this.Tt=0,this.Et=Wd(),this.At=tt.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ie(),n=ie(),r=ie();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Ni(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Wd()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class qT{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=on(),this.Bt=Kd(),this.Lt=new $e(fe)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(el(i))if(r===0){const o=new H(i.path);this.Kt(n,o,Je.newNoDocument(o,re.min()))}else Te(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&el(a.target)){const c=new H(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Je.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=ie();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new Aa(e,n,this.Lt,this.$t,r);return this.$t=on(),this.Bt=Kd(),this.Lt=new $e(fe),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new zd,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new $e(fe),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new zd),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Kd(){return new He(H.comparator)}function Wd(){return new He(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class WT{constructor(e,n){this.databaseId=e,this.dt=n}}function Bo(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qm(t,e){return t.dt?e.toBase64():e.toUint8Array()}function GT(t,e){return Bo(t,e.toTimestamp())}function nn(t){return Te(!!t),re.fromTimestamp(function(e){const n=Pn(e);return new Be(n.seconds,n.nanos)}(t))}function vu(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zm(t){const e=Se.fromString(t);return Te(Gm(e)),e}function nl(t,e){return vu(t.databaseId,e.path)}function lc(t,e){const n=zm(e);if(n.get(1)!==t.databaseId.projectId)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Km(n))}function rl(t,e){return vu(t.databaseId,e)}function YT(t){const e=zm(t);return e.length===4?Se.emptyPath():Km(e)}function sl(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Km(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gd(t,e,n){return{name:nl(t,e),fields:n.value.mapValue.fields}}function XT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(Te(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:Um(c.code);return new L(l,c.message||"")}(o);n=new Hm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lc(t,r.document.name),i=nn(r.document.updateTime),o=new ft({mapValue:{fields:r.document.fields}}),a=Je.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new ho(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lc(t,r.document),i=r.readTime?nn(r.readTime):re.min(),o=Je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lc(t,r.document),i=r.removedTargetIds||[];n=new ho([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new FT(s),o=r.targetId;n=new jm(o,i)}}return n}function QT(t,e){let n;if(e instanceof Di)n={update:Gd(t,e.key,e.value)};else if(e instanceof wu)n={delete:nl(t,e.key)};else if(e instanceof Bn)n={update:Gd(t,e.key,e.data),updateMask:a1(e.fieldMask)};else{if(!(e instanceof UT))return J();n={verify:nl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Fo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof li)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ui)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:GT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function JT(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?nn(r.updateTime):nn(s);return i.isEqual(re.min())&&(i=nn(s)),new PT(i,r.transformResults||[])}(n,e))):[]}function ZT(t,e){return{documents:[rl(t,e.path)]}}function e1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=rl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Ud(h.value))return{unaryFilter:{field:Tr(h.field),op:"IS_NAN"}};if(Md(h.value))return{unaryFilter:{field:Tr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ud(h.value))return{unaryFilter:{field:Tr(h.field),op:"IS_NOT_NAN"}};if(Md(h.value))return{unaryFilter:{field:Tr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(h.field),op:s1(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Tr(u.field),direction:r1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||ka(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function t1(t){let e=YT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Wm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ms(Rr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ka(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Uo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Uo(d,h)}(n.endAt)),kT(e,s,o,i,a,"F",c,l)}function n1(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wm(t){return t?t.unaryFilter!==void 0?[o1(t)]:t.fieldFilter!==void 0?[i1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Wm(e)).reduce((e,n)=>e.concat(n)):J():[]}function r1(t){return zT[t]}function s1(t){return KT[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Rr(t){return rt.fromServerFormat(t.fieldPath)}function i1(t){return ut.create(Rr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(t.fieldFilter.op),t.fieldFilter.value)}function o1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rr(t.unaryFilter.field);return ut.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rr(t.unaryFilter.field);return ut.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Rr(t.unaryFilter.field);return ut.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Rr(t.unaryFilter.field);return ut.create(s,"!=",{nullValue:"NULL_VALUE"});default:return J()}}function a1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Bm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Lm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&zr(this.mutations,e.mutations,(n,r)=>jd(n,r))&&zr(this.baseMutations,e.baseMutations,(n,r)=>jd(n,r))}}class bu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=$T;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,s,i=re.min(),o=re.min(),a=tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.ne=e}}function h1(t){const e=t1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xT(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.ze=new f1}addToCollectionParentIndex(e,n){return this.ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(On.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class f1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Yr(0)}static Rn(){return new Yr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Us(r.mutation,s,xt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=Qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ks();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=on();const o=Fs(),a=Fs();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Bn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Us(u.mutation,l,u.mutation.getFieldMask(),Be.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new g1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Fs();let s=new He((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||xt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Bm();u.forEach(d=>{if(!i.has(d)){const p=Lm(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(Qn());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:Vm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=ks();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=ks();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Ri(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Je.newInvalidDocument(l)))});let o=ks();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Us(l.mutation,c,xt.empty(),Be.now()),yu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(Je.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return S.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:nn(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:h1(r.bundledQuery),readTime:nn(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.overlays=new He(H.comparator),this.Xn=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qn();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=Qn(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Qn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new l1(n,r));let i=this.Xn.get(n);i===void 0&&(i=ie(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.Zn=new $e(qe.ts),this.es=new $e(qe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new qe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new H(new Se([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new H(new Se([])),r=new qe(n,e),s=new qe(n,e+1);let i=ie();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return H.comparator(e.key,n.key)||fe(e.ls,n.ls)}static ns(e,n){return fe(e.ls,n.ls)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new $e(qe.ts)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(fe);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),S.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new qe(new H(i),0);let a=new $e(fe);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),S.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return S.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new qe(n,0),s=this.ds.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.ps=e,this.docs=new He(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=on();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),S.resolve(r)}getAllFromCollection(e,n,r){let s=on();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||cT(aT(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,s){J()}Is(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _1(this)}getSize(e){return S.resolve(this.size)}}class _1 extends p1{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.persistence=e,this.Ts=new ls(n=>pu(n),gu),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Es=0,this.As=new _u,this.targetCount=0,this.Rs=Yr.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),S.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Yr(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.vn(n),S.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n){this.bs={},this.overlays={},this.Ps=new du(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new E1(this),this.indexManager=new d1,this.remoteDocumentCache=function(r){return new b1(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new u1(n),this.Ds=new y1(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new w1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new v1(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new T1(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return S.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class T1 extends uT{constructor(e){super(),this.currentSequenceNumber=e}}class Eu{constructor(e){this.persistence=e,this.ks=new _u,this.Os=null}static Ms(e){return new Eu(e)}get Fs(){if(this.Os)return this.Os;throw J()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),S.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Fs,r=>{const s=H.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return S.or([()=>S.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Iu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){return S.resolve(null)}xi(e,n,r,s){return ST(n)||s.isEqual(re.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,r,s)?this.Ni(e,n):(Rd()<=de.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tl(n)),this.Mi(e,o,n,oT(s,-1)))})}ki(e,n){let r=new $e(Cm(e));return n.forEach((s,i)=>{yu(e,i)&&(r=r.add(i))}),r}Oi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return Rd()<=de.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",tl(n)),this.Di.getDocumentsMatchingQuery(e,n,On.min())}Mi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new He(fe),this.Bi=new ls(i=>pu(i),gu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m1(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function x1(t,e,n,r){return new S1(t,e,n,r)}async function Ym(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ie();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function C1(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);Te(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Xm(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function A1(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(tt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(m,v,w){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Vs.updateTargetData(i,p))});let c=on(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(R1(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(re.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=s,i))}function R1(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=on();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function D1(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function N1(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new tr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function il(t,e,n){const r=ee(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function Yd(t,e,n){const r=ee(t);let s=re.min(),i=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Bi.get(l);return h!==void 0?S.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,hr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:ie())).next(a=>(O1(r,CT(e),a),{documents:a,ji:i})))}function O1(t,e,n){let r=re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class Xd{constructor(){this.activeTargetIds=$m()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P1{constructor(){this.Fr=new Xd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);$("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>($("RestConnection","Received: ",c),c),c=>{throw Dd("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+cs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=M1[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new XI;a.listenOnce(WI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case cc.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case cc.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new L(_.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(h.status);o(new L(d,h.message))}else o(new L(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(_.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=zI(),o=KI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new YI({})),this.uo(a.initMessageHeaders,n,r),lg()||hg()||S_()||dg()||x_()||ug()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");$("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new U1({jr:m=>{h?$("Connection","Not sending because WebChannel is closed:",m):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),p=(m,v,w)=>{m.listen(v,T=>{try{w(T)}catch(D){setTimeout(()=>{throw D},0)}})};return p(l,Qi.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),p(l,Qi.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),d.eo())}),p(l,Qi.EventType.ERROR,m=>{h||(h=!0,Dd("Connection","WebChannel transport errored:",m),d.eo(new L(_.UNAVAILABLE,"The operation could not be completed")))}),p(l,Qi.EventType.MESSAGE,m=>{var v;if(!h){const w=m.data[0];Te(!!w);const T=w,D=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(D){$("Connection","WebChannel received error:",D);const F=D.status;let M=function(oe){const G=Me[oe];if(G!==void 0)return Um(G)}(F),W=D.message;M===void 0&&(M=_.INTERNAL,W="Unknown error status: "+F+" with message "+D.message),h=!0,d.eo(new L(M,W)),l.close()}else $("Connection","WebChannel received:",w),d.no(w)}}),p(o,GI.STAT_EVENT,m=>{m.stat===Cd.PROXY?$("Connection","Detected buffering proxy"):m.stat===Cd.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function uc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){return new WT(t,!0)}class Qm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Qm(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new L(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class V1 extends Jm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=XT(this.wt,e),r=function(s){if(!("targetChange"in s))return re.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?nn(i.readTime):re.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=sl(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=el(a)?{documents:ZT(s,a)}:{query:e1(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qm(s,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=Bo(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=n1(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=sl(this.wt),n.removeTarget=e,this.Mo(n)}}class B1 extends Jm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=JT(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.Jo(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=sl(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QT(this.wt,r))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(_.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(_.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class j1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Nn(n),this.su=!1):$("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{wr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.lu.add(4),await Oi(c),c._u.set("Unknown"),c.lu.delete(4),await Da(c)}(this))})}),this._u=new j1(r,s)}}async function Da(t){if(wr(t))for(const e of t.fu)await e(!0)}async function Oi(t){for(const e of t.fu)await e(!1)}function Zm(t,e){const n=ee(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Su(n)?ku(n):us(n).Co()&&Tu(n,e))}function ey(t,e){const n=ee(t),r=us(n);n.hu.delete(e),r.Co()&&ty(n,e),n.hu.size===0&&(r.Co()?r.ko():wr(n)&&n._u.set("Unknown"))}function Tu(t,e){t.wu.Nt(e.targetId),us(t).Qo(e)}function ty(t,e){t.wu.Nt(e),us(t).jo(e)}function ku(t){t.wu=new qT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),us(t).start(),t._u.iu()}function Su(t){return wr(t)&&!us(t).Do()&&t.hu.size>0}function wr(t){return ee(t).lu.size===0}function ny(t){t.wu=void 0}async function q1(t){t.hu.forEach((e,n)=>{Tu(t,e)})}async function z1(t,e){ny(t),Su(t)?(t._u.uu(e),ku(t)):t._u.set("Unknown")}async function K1(t,e,n){if(t._u.set("Online"),e instanceof Hm&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(t,r)}else if(e instanceof ho?t.wu.Ut(e):e instanceof jm?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(re.min()))try{const r=await Xm(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.hu.get(c);l&&s.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),ty(s,a);const l=new tr(c.target,a,1,c.sequenceNumber);Tu(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await $o(t,r)}}async function $o(t,e,n){if(!Ai(e))throw e;t.lu.add(1),await Oi(t),t._u.set("Offline"),n||(n=()=>Xm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Da(t)})}function ry(t,e){return e().catch(n=>$o(t,n,e))}async function Na(t){const e=ee(t),n=Ln(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;W1(e);)try{const s=await D1(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,G1(e,s)}catch(s){await $o(e,s)}sy(e)&&iy(e)}function W1(t){return wr(t)&&t.au.length<10}function G1(t,e){t.au.push(e);const n=Ln(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function sy(t){return wr(t)&&!Ln(t).Do()&&t.au.length>0}function iy(t){Ln(t).start()}async function Y1(t){Ln(t).Xo()}async function X1(t){const e=Ln(t);for(const n of t.au)e.Ho(n.mutations)}async function Q1(t,e,n){const r=t.au.shift(),s=bu.from(r,e,n);await ry(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Na(t)}async function J1(t,e){e&&Ln(t).zo&&await async function(n,r){if(s=r.code,VT(s)&&s!==_.ABORTED){const i=n.au.shift();Ln(n).No(),await ry(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Na(n)}var s}(t,e),sy(t)&&iy(t)}async function Jd(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=wr(n);n.lu.add(3),await Oi(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Da(n)}async function Z1(t,e){const n=ee(t);e?(n.lu.delete(2),await Da(n)):e||(n.lu.add(2),await Oi(n),n._u.set("Unknown"))}function us(t){return t.mu||(t.mu=function(e,n,r){const s=ee(e);return s.tu(),new V1(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:q1.bind(null,t),Jr:z1.bind(null,t),Go:K1.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Su(t)?ku(t):t._u.set("Unknown")):(await t.mu.stop(),ny(t))})),t.mu}function Ln(t){return t.gu||(t.gu=function(e,n,r){const s=ee(e);return s.tu(),new B1(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:Y1.bind(null,t),Jr:J1.bind(null,t),Yo:X1.bind(null,t),Jo:Q1.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Na(t)):(await t.gu.stop(),t.au.length>0&&($("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new xu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cu(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Ai(t))return new L(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=ks(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.yu=new He(H.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):J():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Xr(e,n,Mr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.Iu=void 0,this.listeners=[]}}class tk{constructor(){this.queries=new ls(e=>xm(e),Sa),this.onlineState="Unknown",this.Tu=new Set}}async function oy(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ek),s)try{i.Iu=await n.onListen(r)}catch(o){const a=Cu(o,`Initialization of query '${tl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Au(n)}async function ay(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function nk(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Au(n)}function rk(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Au(t){t.Tu.forEach(e=>{e.next()})}class cy{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.key=e}}class uy{constructor(e){this.key=e}}class sk{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ie(),this.mutatedKeys=ie(),this.Lu=Cm(e),this.Uu=new Mr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Zd,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=yu(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==v&&(r.track({type:3,doc:p}),w=!0):this.Qu(d,p)||(r.track({type:2,doc:p}),w=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return p(h)-p(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Xr(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Zd,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ie(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new uy(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new ly(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=ie();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Xr.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class ik{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ok{constructor(e){this.key=e,this.Xu=!1}}class ak{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new ls(a=>xm(a),Sa),this.ec=new Map,this.nc=new Set,this.sc=new He(H.comparator),this.ic=new Map,this.rc=new _u,this.oc={},this.uc=new Map,this.cc=Yr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function ck(t,e){const n=wk(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await N1(n.localStore,hr(e));n.isPrimaryClient&&Zm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await lk(n,e,r,a==="current")}return s}async function lk(t,e,n,r){t.hc=(u,h,d)=>async function(p,m,v,w){let T=m.view.Ku(v);T.Oi&&(T=await Yd(p.localStore,m.query,!1).then(({documents:M})=>m.view.Ku(M,T)));const D=w&&w.targetChanges.get(m.targetId),F=m.view.applyChanges(T,p.isPrimaryClient,D);return tf(p,m.targetId,F.zu),F.snapshot}(t,u,h,d);const s=await Yd(t.localStore,e,!0),i=new sk(e,s.ji),o=i.Ku(s.documents),a=Ni.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);tf(t,n,c.zu);const l=new ik(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function uk(t,e){const n=ee(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!Sa(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await il(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ey(n.remoteStore,r.targetId),ol(n,r.targetId)}).catch(Ci)):(ol(n,r.targetId),await il(n.localStore,r.targetId,!0))}async function hk(t,e,n){const r=vk(t);try{const s=await function(i,o){const a=ee(i),c=Be.now(),l=o.reduce((d,p)=>d.add(p.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=on(),m=ie();return a.Ui.getEntries(d,l).next(v=>{p=v,p.forEach((w,T)=>{T.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const w=[];for(const T of o){const D=MT(T,u.get(T.key).overlayedDocument);D!=null&&w.push(new Bn(T.key,D,Em(D.value.mapValue),Lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Vm(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new He(fe)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Pi(r,s.changes),await Na(r.remoteStore)}catch(s){const i=Cu(s,"Failed to persist write");n.reject(i)}}async function hy(t,e){const n=ee(t);try{const r=await A1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?Te(o.Xu):s.removedDocuments.size>0&&(Te(o.Xu),o.Xu=!1))}),await Pi(n,r,e)}catch(r){await Ci(r)}}function ef(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Au(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dk(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new He(H.comparator);o=o.insert(i,Je.newNoDocument(i,re.min()));const a=ie().add(i),c=new Aa(re.min(),new Map,new $e(fe),o,a);await hy(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),Ru(r)}else await il(r.localStore,e,!1).then(()=>ol(r,e,n)).catch(Ci)}async function fk(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await C1(n.localStore,e);fy(n,r,null),dy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(n,s)}catch(s){await Ci(s)}}async function pk(t,e,n){const r=ee(t);try{const s=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);fy(r,e,n),dy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pi(r,s)}catch(s){await Ci(s)}}function dy(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function fy(t,e,n){const r=ee(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||py(t,r)})}function py(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(ey(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ru(t))}function tf(t,e,n){for(const r of n)r instanceof ly?(t.rc.addReference(r.key,e),gk(t,r)):r instanceof uy?($("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||py(t,r.key)):J()}function gk(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||($("SyncEngine","New document in limbo: "+n),t.nc.add(r),Ru(t))}function Ru(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new H(Se.fromString(e)),r=t.cc.next();t.ic.set(r,new ok(n)),t.sc=t.sc.insert(n,r),Zm(t.remoteStore,new tr(hr(mu(n.path)),r,2,du.ot))}}async function Pi(t,e,n){const r=ee(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Iu.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ai(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,m)}}}(r.localStore,i))}async function mk(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Ym(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new L(_.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pi(n,r.Ki)}}function yk(t,e){const n=ee(t),r=n.ic.get(e);if(r&&r.Xu)return ie().add(r.key);{let s=ie();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function wk(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dk.bind(null,e),e.Zu.Go=nk.bind(null,e.eventManager),e.Zu.lc=rk.bind(null,e.eventManager),e}function vk(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pk.bind(null,e),e}class bk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Ra(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return x1(this.persistence,new k1,e.initialUser,this.wt)}_c(e){return new I1(Eu.Ms,this.wt)}dc(e){return new P1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _k{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ef(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mk.bind(null,this.syncEngine),await Z1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tk}createDatastore(e){const n=Ra(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new F1(s));var s;return function(i,o,a,c){return new $1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ef(this.syncEngine,a,0),o=Qd.V()?new Qd:new L1,new H1(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new ak(r,s,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);$("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Oi(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=wm.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ik(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ym(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Tk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kk(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Jd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Jd(e.remoteStore,i)),t.onlineComponents=e}async function kk(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await Ik(t,new bk)),t.offlineComponents}async function my(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await Tk(t,new _k)),t.onlineComponents}function Sk(t){return my(t).then(e=>e.syncEngine)}async function yy(t){const e=await my(t),n=e.eventManager;return n.onListen=ck.bind(null,e.syncEngine),n.onUnlisten=uk.bind(null,e.syncEngine),n}function xk(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new gy({next:h=>{i.enqueueAndForget(()=>ay(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new L(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new L(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cy(mu(o.path),l,{includeMetadataChanges:!0,Du:!0});return oy(s,u)}(await yy(t),t.asyncQueue,e,n,r)),r.promise}function Ck(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new gy({next:h=>{i.enqueueAndForget(()=>ay(s,u)),h.fromCache&&a.source==="server"?c.reject(new L(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cy(o,l,{includeMetadataChanges:!0,Du:!0});return oy(s,u)}(await yy(t),t.asyncQueue,e,n,r)),r.promise}const nf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e,n){if(!n)throw new L(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ak(t,e,n,r){if(e===!0&&r===!0)throw new L(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rf(t){if(!H.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sf(t){if(H.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oa(t);throw new L(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ak("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1,e instanceof Wr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new L(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(s.options.projectId)}(e))}get app(){if(!this._app)throw new L(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new JI;switch(n.type){case"gapi":const r=n.client;return Te(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new tT(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new L(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nf.get(e);n&&($("ComponentProvider","Removing Datastore"),nf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class Li{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Li(this.firestore,e,this._query)}}class Cn extends Li{constructor(e,n,r){super(e,n,mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new H(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function Rk(t,e,...n){if(t=Ne(t),wy("collection","path",e),t instanceof Du){const r=Se.fromString(e,...n);return sf(r),new Cn(t,null,r)}{if(!(t instanceof pt||t instanceof Cn))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return sf(r),new Cn(t.firestore,null,r)}}function Dk(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=wm.I()),wy("doc","path",e),t instanceof Du){const r=Se.fromString(e,...n);return rf(r),new pt(t,null,new H(r))}{if(!(t instanceof pt||t instanceof Cn))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return rf(r),new pt(t.firestore,t instanceof Cn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Qm(this,"async_queue_retry"),this.Kc=()=>{const n=uc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=uc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new tn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Ai(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=xu.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&J()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class hs extends Du{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Nk,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vy(this),this._firestoreClient.terminate()}}function Ok(t=Bl()){return ha(t,"firestore").getImmediate()}function Nu(t){return t._firestoreClient||vy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vy(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new dT(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ek(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qr(tt.fromBase64String(e))}catch(n){throw new L(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qr(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/^__.*__$/;class Lk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Di(e,this.data,n,this.fieldTransforms)}}class by{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Lu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return jo(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(_y(this.Zc)&&Pk.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Mk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||Ra(e)}aa(e,n,r,s=!1){return new Lu({Zc:e,methodName:n,ca:r,path:rt.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Mu(t){const e=t._freezeSettings(),n=Ra(t._databaseId);return new Mk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uk(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Uu("Data must be an object, but it was:",o,r);const a=Ey(r,o);let c,l;if(i.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=al(e,h,n);if(!o.contains(d))throw new L(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ty(u,d)||u.push(d)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Lk(new ft(a),c,l)}class La extends Ou{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof La}}function Fk(t,e,n,r){const s=t.aa(1,e,n);Uu("Data must be an object, but it was:",s,r);const i=[],o=ft.empty();yr(r,(c,l)=>{const u=Fu(e,c,n);l=Ne(l);const h=s.ia(u);if(l instanceof La)i.push(u);else{const d=Mi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new xt(i);return new by(o,a,s.fieldTransforms)}function Vk(t,e,n,r,s,i){const o=t.aa(1,e,n),a=[al(e,r,n)],c=[s];if(i.length%2!=0)throw new L(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(al(e,i[d])),c.push(i[d+1]);const l=[],u=ft.empty();for(let d=a.length-1;d>=0;--d)if(!Ty(l,a[d])){const p=a[d];let m=c[d];m=Ne(m);const v=o.ia(p);if(m instanceof La)l.push(p);else{const w=Mi(m,v);w!=null&&(l.push(p),u.set(p,w))}}const h=new xt(l);return new by(u,h,o.fieldTransforms)}function Bk(t,e,n,r=!1){return Mi(n,t.aa(r?4:3,e))}function Mi(t,e){if(Iy(t=Ne(t)))return Uu("Unsupported field value:",e,t),Ey(t,e);if(t instanceof Ou)return function(n,r){if(!_y(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Mi(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RT(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Be.fromDate(n);return{timestampValue:Bo(r.wt,s)}}if(n instanceof Be){const s=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bo(r.wt,s)}}if(n instanceof Pu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qr)return{bytesValue:qm(r.wt,n._byteString)};if(n instanceof pt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${Oa(n)}`)}(t,e)}function Ey(t,e){const n={};return vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=Mi(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Iy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Pu||t instanceof Qr||t instanceof pt||t instanceof Ou)}function Uu(t,e,n){if(!Iy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Oa(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function al(t,e,n){if((e=Ne(e))instanceof Pa)return e._internalPath;if(typeof e=="string")return Fu(t,e);throw jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const $k=new RegExp("[~\\*/\\[\\]]");function Fu(t,e,n){if(e.search($k)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pa(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(_.INVALID_ARGUMENT,a+t+c)}function Ty(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jk extends ky{data(){return super.data()}}function Vu(t,e){return typeof e=="string"?Fu(t,e):e instanceof Pa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sy extends ky{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fo extends Sy{data(e={}){return super.data(e)}}class Hk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fo(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new fo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new fo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:qk(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kk{}function Wk(t,...e){for(const n of e)t=n._apply(t);return t}class Gk extends Kk{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=Mu(e.firestore),r=function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){cf(u,l);const p=[];for(const m of u)p.push(af(a,s,m));h={arrayValue:{values:p}}}else h=af(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||cf(u,l),h=Bk(o,i,u,l==="in"||l==="not-in");const d=ut.create(c,l,h);return function(p,m){if(m.ht()){const w=km(p);if(w!==null&&!w.isEqual(m.field))throw new L(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${m.field.toString()}'`);const T=Tm(p);T!==null&&Xk(p,m.field,T)}const v=function(w,T){for(const D of w.filters)if(T.indexOf(D.op)>=0)return D.op;return null}(p,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(v!==null)throw v===m.op?new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${v.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Li(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Ri(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Yk(t,e,n){const r=e,s=Vu("where",t);return new Gk(s,r,n)}function af(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new L(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sm(e)&&n.indexOf("/")!==-1)throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!H.isDocumentKey(r))throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ld(t,new H(r))}if(n instanceof pt)return Ld(t,n._key);throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oa(n)}.`)}function cf(t,e){if(!Array.isArray(t)||t.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new L(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Xk(t,e,n){if(!n.isEqual(e))throw new L(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{convertValue(e,n="none"){switch(ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const r={};return yr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Pu(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_m(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Te(Gm(r));const s=new Wr(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){t=Mn(t,pt);const e=Mn(t.firestore,hs);return xk(Nu(e),t._key).then(n=>eS(e,t,n))}class xy extends Qk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Zk(t){t=Mn(t,Li);const e=Mn(t.firestore,hs),n=Nu(e),r=new xy(e);return zk(t._query),Ck(n,t._query).then(s=>new Hk(e,r,t,s))}function rR(t,e,n,...r){t=Mn(t,pt);const s=Mn(t.firestore,hs),i=Mu(s);let o;return o=typeof(e=Ne(e))=="string"||e instanceof Pa?Vk(i,"updateDoc",t._key,e,n,r):Fk(i,"updateDoc",t._key,e),Bu(s,[o.toMutation(t._key,Lt.exists(!0))])}function sR(t){return Bu(Mn(t.firestore,hs),[new wu(t._key,Lt.none())])}function iR(t,e){const n=Mn(t.firestore,hs),r=Dk(t),s=Jk(t.converter,e);return Bu(n,[Uk(Mu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Bu(t,e){return function(n,r){const s=new tn;return n.asyncQueue.enqueueAndForget(async()=>hk(await Sk(n),r,s)),s.promise}(Nu(t),e)}function eS(t,e,n){const r=n.docs.get(e._key),s=new xy(t);return new Sy(t,s,e._key,r,new Ss(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){cs=n})(ss),ir(new Dn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new hs(s,new ZI(n.getProvider("auth-internal")),new rT(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ht(Ad,"3.4.11",t),Ht(Ad,"3.4.11","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="firebasestorage.googleapis.com",Ay="storageBucket",tS=2*60*1e3,nS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Un{constructor(e,n){super(hc(e),`Firebase Storage: ${n} (${hc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}_codeEquals(e){return hc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function hc(t){return"storage/"+t}function $u(){const t="An unknown error occurred, please check the error payload for server response.";return new Le("unknown",t)}function rS(t){return new Le("object-not-found","Object '"+t+"' does not exist.")}function sS(t){return new Le("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function iS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le("unauthenticated",t)}function oS(){return new Le("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function aS(t){return new Le("unauthorized","User does not have permission to access '"+t+"'.")}function cS(){return new Le("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function lS(){return new Le("canceled","User canceled the upload/download.")}function uS(t){return new Le("invalid-url","Invalid URL '"+t+"'.")}function hS(t){return new Le("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function dS(){return new Le("no-default-bucket","No default bucket found. Did you set the '"+Ay+"' property when initializing the app?")}function fS(){return new Le("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function pS(){return new Le("no-download-url","The given file does not have any download URLs.")}function cl(t){return new Le("invalid-argument",t)}function Ry(){return new Le("app-deleted","The Firebase app was deleted.")}function gS(t){return new Le("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vs(t,e){return new Le("invalid-format","String does not match format '"+t+"': "+e)}function ws(t){throw new Le("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(r.path==="")return r;throw hS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},v=n===Cy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",T=new RegExp(`^https?://${v}/${s}/${w}`,"i"),F=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<F.length;M++){const W=F[M],oe=W.regex.exec(e);if(oe){const G=oe[W.indices.bucket];let O=oe[W.indices.path];O||(O=""),r=new wt(G,O),W.postModify(r);break}}if(r==null)throw uS(e);return r}}class mS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(p,c())},w)}function d(){i&&clearTimeout(i)}function p(w,...T){if(l){d();return}if(w){d(),u.call(null,w,...T);return}if(c()||o){d(),u.call(null,w,...T);return}r<64&&(r*=2);let F;a===1?(a=2,F=0):F=(r+Math.random())*1e3,h(F)}let m=!1;function v(w){m||(m=!0,d(),!l&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function wS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){return t!==void 0}function bS(t){return typeof t=="object"&&!Array.isArray(t)}function ju(t){return typeof t=="string"||t instanceof String}function lf(t){return Hu()&&t instanceof Blob}function Hu(){return typeof Blob!="undefined"}function uf(t,e,n,r){if(r<e)throw cl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Dy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nr||(nr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,r,s,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new eo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===nr.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===nr.ABORT;r(!1,new eo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new eo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());vS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=$u();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ry():lS();o(c)}else{const c=cS();o(c)}};this.canceled_?n(!1,new eo(!1,null,!0)):this.backoffId_=yS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class eo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ES(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function TS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function SS(t,e,n,r,s,i){const o=Dy(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return TS(c,e),ES(c,n),IS(c,i),kS(c,r),new _S(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function CS(...t){const e=xS();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Hu())return new Blob(t);throw new Le("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function AS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dc{constructor(e,n){this.data=e,this.contentType=n||null}}function DS(t,e){switch(t){case $t.RAW:return new dc(Ny(e));case $t.BASE64:case $t.BASE64URL:return new dc(Oy(t,e));case $t.DATA_URL:return new dc(OS(e),PS(e))}throw $u()}function Ny(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NS(t){let e;try{e=decodeURIComponent(t)}catch{throw Vs($t.DATA_URL,"Malformed data URL.")}return Ny(e)}function Oy(t,e){switch(t){case $t.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Vs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case $t.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Vs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=RS(e)}catch{throw Vs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Py{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Vs($t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=LS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function OS(t){const e=new Py(t);return e.base64?Oy($t.BASE64,e.rest):NS(e.rest)}function PS(t){return new Py(t).contentType}function LS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){let r=0,s="";lf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(lf(this.data_)){const r=this.data_,s=AS(r,e,n);return s===null?null:new vn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new vn(r,!0)}}static getBlob(...e){if(Hu()){const n=e.map(r=>r instanceof vn?r.data_:r);return new vn(CS.apply(null,n))}else{const n=e.map(o=>ju(o)?DS($t.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new vn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){let e;try{e=JSON.parse(t)}catch{return null}return bS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function US(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function My(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t,e){return e}class it{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||FS}}let to=null;function VS(t){return!ju(t)||t.length<2?t:My(t)}function Uy(){if(to)return to;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(i,o){return VS(o)}const n=new it("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new it("size");return s.xform=r,t.push(s),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),to=t,to}function BS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $S(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return BS(r,t),r}function Fy(t,e,n){const r=Ly(e);return r===null?null:$S(t,r,n)}function jS(t,e,n,r){const s=Ly(e);if(s===null||!ju(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Ma(d,n,r),m=Dy({alt:"media",token:l});return p+m})[0]}function HS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class qu{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){if(!t)throw $u()}function qS(t,e){function n(r,s){const i=Fy(t,s,e);return Vy(i!==null),i}return n}function zS(t,e){function n(r,s){const i=Fy(t,s,e);return Vy(i!==null),jS(i,s,t.host,t._protocol)}return n}function By(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=oS():s=iS():n.getStatus()===402?s=sS(t.bucket):n.getStatus()===403?s=aS(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function $y(t){const e=By(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=rS(t.path)),i.serverResponse=s.serverResponse,i}return n}function KS(t,e,n){const r=e.fullServerUrl(),s=Ma(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new qu(s,i,zS(t,n),o);return a.errorHandler=$y(e),a}function WS(t,e){const n=e.fullServerUrl(),r=Ma(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,l){}const a=new qu(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=$y(e),a}function GS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function YS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=GS(null,e)),r}function XS(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let F="";for(let M=0;M<2;M++)F=F+Math.random().toString().slice(2);return F}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=YS(e,r,s),u=HS(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=vn.getBlob(h,r,d);if(p===null)throw fS();const m={name:l.fullPath},v=Ma(i,t.host,t._protocol),w="POST",T=t.maxUploadRetryTime,D=new qu(v,w,qS(t,n),T);return D.urlParams=m,D.headers=o,D.body=p.uploadData(),D.errorHandler=By(e),D}class QS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class JS extends QS{initXhr(){this.xhr_.responseType="text"}}function zu(){return new JS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dr(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return My(this._location.path)}get storage(){return this._service}get parent(){const e=MS(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new dr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gS(e)}}function ZS(t,e,n){t._throwIfRoot("uploadBytes");const r=XS(t.storage,t._location,Uy(),new vn(e,!0),n);return t.storage.makeRequestWithTokens(r,zu).then(s=>({metadata:s,ref:t}))}function ex(t){t._throwIfRoot("getDownloadURL");const e=KS(t.storage,t._location,Uy());return t.storage.makeRequestWithTokens(e,zu).then(n=>{if(n===null)throw pS();return n})}function tx(t){t._throwIfRoot("deleteObject");const e=WS(t.storage,t._location);return t.storage.makeRequestWithTokens(e,zu)}function nx(t,e){const n=US(t._location.path,e),r=new wt(t._location.bucket,n);return new dr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t){return/^[A-Za-z]+:\/\//.test(t)}function sx(t,e){return new dr(t,e)}function jy(t,e){if(t instanceof Ku){const n=t;if(n._bucket==null)throw dS();const r=new dr(n,n._bucket);return e!=null?jy(r,e):r}else return e!==void 0?nx(t,e):t}function ix(t,e){if(e&&rx(e)){if(t instanceof Ku)return sx(t,e);throw cl("To use ref(service, url), the first argument must be a Storage instance.")}else return jy(t,e)}function hf(t,e){const n=e==null?void 0:e[Ay];return n==null?null:wt.makeFromBucketSpec(n,t)}class Ku{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Cy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tS,this._maxUploadRetryTime=nS,this._requests=new Set,s!=null?this._bucket=wt.makeFromBucketSpec(s,this._host):this._bucket=hf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=hf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dr(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new mS(Ry());{const i=SS(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const df="@firebase/storage",ff="0.9.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="storage";function oR(t,e,n){return t=Ne(t),ZS(t,e,n)}function aR(t){return t=Ne(t),ex(t)}function cR(t){return t=Ne(t),tx(t)}function lR(t,e){return t=Ne(t),ix(t,e)}function ox(t=Bl(),e){return t=Ne(t),ha(t,Hy).getImmediate({identifier:e})}function ax(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ku(n,r,s,e,ss)}function cx(){ir(new Dn(Hy,ax,"PUBLIC").setMultipleInstances(!0)),Ht(df,ff,""),Ht(df,ff,"esm2017")}cx();function Wu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function qy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lx=qy,zy=new yi("auth","Firebase",qy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new Ul("@firebase/auth");function po(t,...e){pf.logLevel<=de.ERROR&&pf.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw Gu(t,...e)}function qt(t,...e){return Gu(t,...e)}function Ky(t,e,n){const r=Object.assign(Object.assign({},lx()),{[e]:n});return new yi("auth","Firebase",r).create(e,{appName:t.name})}function ux(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ct(t,"argument-error"),Ky(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zy.create(t,...e)}function Y(t,e,...n){if(!t)throw Gu(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw po(e),new Error(e)}function an(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function en(t){an(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t,e){const n=ha(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ko(i,e!=null?e:{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function dx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fx(){return mf()==="http:"||mf()==="https:"}function mf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fx()||ug()||"connection"in navigator)?navigator.onLine:!0}function gx(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=lg()||hg()}get(){return px()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new Ui(3e4,6e4);function Fi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ds(t,e,n,r,s={}){return Gy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Wy.fetch()(Yy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Gy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mx),e);try{const s=new wx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ky(t,u,l);Ct(t,u)}}catch(s){if(s instanceof Un)throw s;Ct(t,"network-request-failed")}}async function Vi(t,e,n,r,s={}){const i=await ds(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Yu(t.config,s):`${t.config.apiScheme}://${s}`}class wx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),yx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function bx(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _x(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),s=Xu(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bs(fc(s.auth_time)),issuedAtTime:Bs(fc(s.iat)),expirationTime:Bs(fc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function Xu(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const i=T_(r);return i?JSON.parse(i):(po("Failed to decode base64 JWT payload"),null)}catch(i){return po("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Ex(t){const e=Xu(t);return Y(e,"internal-error"),Y(typeof e.exp!="undefined","internal-error"),Y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&Ix(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ix({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Jr(t,bx(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xx(i.providerUserInfo):[],a=Sx(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Xy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function kx(t){const e=Ne(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xx(t){return t.map(e=>{var{providerId:n}=e,r=Wu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(t,e){const n=await Gy(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Yy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken!="undefined","internal-error"),Y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ex(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Cx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){Y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _x(this,e)}reload(){return kx(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jr(this,vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:M,isAnonymous:W,providerData:oe,stsTokenManager:G}=n;Y(F&&G,e,"internal-error");const O=hi.fromJSON(this.name,G);Y(typeof F=="string",e,"internal-error"),fn(h,e.name),fn(d,e.name),Y(typeof M=="boolean",e,"internal-error"),Y(typeof W=="boolean",e,"internal-error"),fn(p,e.name),fn(m,e.name),fn(v,e.name),fn(w,e.name),fn(T,e.name),fn(D,e.name);const Z=new rr({uid:F,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:W,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:O,createdAt:T,lastLoginAt:D});return oe&&Array.isArray(oe)&&(Z.providerData=oe.map(ae=>Object.assign({},ae))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new rr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qy.type="NONE";const yf=Qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=go(this.userKey,s.apiKey,i),this.fullPersistenceKey=go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(en(yf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||en(yf);const o=go(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ur(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ur(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nw(e))return"Blackberry";if(rw(e))return"Webos";if(Qu(e))return"Safari";if((e.includes("chrome/")||Zy(e))&&!e.includes("edge/"))return"Chrome";if(tw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jy(t=Ge()){return/firefox\//i.test(t)}function Qu(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zy(t=Ge()){return/crios\//i.test(t)}function ew(t=Ge()){return/iemobile/i.test(t)}function tw(t=Ge()){return/android/i.test(t)}function nw(t=Ge()){return/blackberry/i.test(t)}function rw(t=Ge()){return/webos/i.test(t)}function Ua(t=Ge()){return/iphone|ipad|ipod/i.test(t)}function Ax(t=Ge()){var e;return Ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rx(){return dg()&&document.documentMode===10}function sw(t=Ge()){return Ua(t)||tw(t)||rw(t)||nw(t)||/windows phone/i.test(t)||ew(t)}function Dx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e=[]){let n;switch(t){case"Browser":n=wf(Ge());break;case"Worker":n=`${wf(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new Nx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ho(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bi(t){return Ne(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=P_(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function Px(t,e){return ds(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(t,e){return Vi(t,"POST","/v1/accounts:signInWithPassword",Fi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e){return Vi(t,"POST","/v1/accounts:signInWithEmailLink",Fi(t,e))}async function Ux(t,e){return Vi(t,"POST","/v1/accounts:signInWithEmailLink",Fi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Ju{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Lx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mx(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Px(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ux(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e){return Vi(t,"POST","/v1/accounts:signInWithIdp",Fi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx="http://localhost";class fr extends Ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Wu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new fr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:Fx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bx(t){const e=Es(Is(t)).link,n=e?Es(Is(e)).deep_link_id:null,r=Es(Is(t)).deep_link_id;return(r?Es(Is(r)).link:null)||r||n||e||t}class Zu{constructor(e){var n,r,s,i,o,a;const c=Es(Is(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Vx((s=c.mode)!==null&&s!==void 0?s:null);Y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bx(e);try{return new Zu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zu.parseLink(n);return Y(r,"argument-error"),di._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends $i{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends $i{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends $i{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e){return Vi(t,"POST","/v1/accounts:signUp",Fi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rr._fromIdTokenResponse(e,r,s),o=bf(r);return new pr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bf(r);return new pr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qo(e,n,r,s)}}function ow(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,i,e,r):i})}async function jx(t,e,n=!1){const r=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Jr(t,ow(s,i,e,t),n);Y(o.idToken,s,"internal-error");const a=Xu(o.idToken);Y(a,s,"internal-error");const{sub:c}=a;return Y(t.uid===c,s,"user-mismatch"),pr._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e,n=!1){const r="signIn",s=await ow(t,r,e),i=await pr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function qx(t,e){return aw(Bi(t),e)}async function uR(t,e,n){const r=Bi(t),s=await $x(r,{returnSecureToken:!0,email:e,password:n}),i=await pr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function hR(t,e,n){return qx(Ne(t),fs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx(t,e){return ds(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ne(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Jr(r,zx(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Kx(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function Wx(t){return Ne(t).signOut()}const zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(){const t=Ge();return Qu(t)||Ua(t)}const Yx=1e3,Xx=10;class lw extends cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gx()&&Dx(),this.fallbackToPolling=sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Rx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lw.type="LOCAL";const Qx=lw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw extends cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uw.type="SESSION";const hw=uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Jx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=th("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function eC(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){return typeof zt().WorkerGlobalScope!="undefined"&&typeof zt().importScripts=="function"}async function tC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rC(){return dw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firebaseLocalStorageDb",sC=1,Ko="firebaseLocalStorage",pw="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([Ko],e?"readwrite":"readonly").objectStore(Ko)}function iC(){const t=indexedDB.deleteDatabase(fw);return new ji(t).toPromise()}function ul(){const t=indexedDB.open(fw,sC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ko,{keyPath:pw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ko)?e(r):(r.close(),await iC(),e(await ul()))})})}async function _f(t,e,n){const r=Va(t,!0).put({[pw]:e,value:n});return new ji(r).toPromise()}async function oC(t,e){const n=Va(t,!1).get(e),r=await new ji(n).toPromise();return r===void 0?null:r.value}function Ef(t,e){const n=Va(t,!0).delete(e);return new ji(n).toPromise()}const aC=800,cC=3;class gw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tC(),!this.activeServiceWorker)return;this.sender=new Zx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ul();return await _f(e,zo,"1"),await Ef(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_f(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ef(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gw.type="LOCAL";const lC=gw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uC().appendChild(r)})}function dC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t,e){return e?en(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends Ju{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fC(t){return aw(t.auth,new nh(t),t.bypassAuthState)}function pC(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Hx(n,new nh(t),t.bypassAuthState)}async function gC(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),jx(n,new nh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fC;case"linkViaPopup":case"linkViaRedirect":return gC;case"reauthViaPopup":case"reauthViaRedirect":return pC;default:Ct(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Ui(2e3,1e4);async function fR(t,e,n){const r=Bi(t);ux(t,e,eh);const s=mw(r,n);return new Jn(r,"signInViaPopup",e,s).executeNotNull()}class Jn extends yw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mC.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="pendingRedirect",mo=new Map;class wC extends yw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mo.get(this.auth._key());if(!e){try{const r=await vC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mo.set(this.auth._key(),e)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vC(t,e){const n=EC(e),r=_C(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bC(t,e){mo.set(t._key(),e)}function _C(t){return en(t._redirectPersistence)}function EC(t){return go(yC,t.config.apiKey,t.name)}async function IC(t,e,n=!1){const r=Bi(t),s=mw(r,e),o=await new wC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=10*60*1e3;class kC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ww(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TC&&this.cachedEventUids.clear(),this.cachedEventUids.has(If(e))}saveEventToCache(e){this.cachedEventUids.add(If(e)),this.lastProcessedEventTime=Date.now()}}function If(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ww({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ww(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AC=/^https?/;async function RC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xC(t);for(const n of e)try{if(DC(n))return}catch{}Ct(t,"unauthorized-domain")}function DC(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AC.test(n))return!1;if(CC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Ui(3e4,6e4);function Tf(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OC(t){return new Promise((e,n)=>{var r,s,i;function o(){Tf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tf(),n(qt(t,"network-request-failed"))},timeout:NC.get()})}if(!((s=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=dC("iframefcb");return zt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},hC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yo=null,e})}let yo=null;function PC(t){return yo=yo||OC(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=new Ui(5e3,15e3),MC="__/auth/iframe",UC="emulator/auth/iframe",FC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BC(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yu(e,UC):`https://${t.config.authDomain}/${MC}`,r={apiKey:e.apiKey,appName:t.name,v:ss},s=VC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function $C(t){const e=await PC(t),n=zt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:BC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},LC.get());function c(){zt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HC=500,qC=600,zC="_blank",KC="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WC(t,e,n,r=HC,s=qC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ge().toLowerCase();n&&(a=Zy(l)?zC:n),Jy(l)&&(e=e||KC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(Ax(l)&&a!=="_self")return GC(e||"",a),new kf(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new kf(h)}function GC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="__/auth/handler",XC="emulator/auth/handler";function Sf(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:s};if(e instanceof eh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",O_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof $i){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${QC(t)}?${wi(a).slice(1)}`}function QC({config:t}){return t.emulator?Yu(t,XC):`https://${t.authDomain}/${YC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="webStorageSupport";class JC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hw,this._completeRedirectFn=IC,this._overrideRedirectResult=bC}async _openPopup(e,n,r,s){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Sf(e,n,r,ll(),s);return WC(e,o,th())}async _openRedirect(e,n,r,s){return await this._originValidation(e),eC(Sf(e,n,r,ll(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(an(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $C(e),r=new kC(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pc,{type:pc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pc];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sw()||Qu()||Ua()}}const ZC=JC;var xf="@firebase/auth",Cf="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nA(t){ir(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{Y(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),Y(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iw(t)},u=new Ox(a,c,l);return dx(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Dn("auth-internal",e=>{const n=Bi(e.getProvider("auth").getImmediate());return(r=>new eA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(xf,Cf,tA(t)),Ht(xf,Cf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t=Bl()){const e=ha(t,"auth");return e.isInitialized()?e.getImmediate():hx(t,{popupRedirectResolver:ZC,persistence:[lC,Qx,hw]})}nA("Browser");const sA={apiKey:"AIzaSyBUFvGXrEKP5KzfXMb2utcxAmZ3GpDuujc",authDomain:"gestion-formation-c84bd.firebaseapp.com",projectId:"gestion-formation-c84bd",storageBucket:"gestion-formation-c84bd.appspot.com",messagingSenderId:"967205821568",appId:"1:967205821568:web:8b9f699aefe285ce225a65"},vw=OE(sA),iA=Ok(vw),Af=rA(),pR=ox(vw),oA=ob("userStore",{state:()=>({currentUser:null}),actions:{getCurrentUser(){return new Promise((t,e)=>{const n=Kx(Af,async r=>{if(n(),r){const s=Rk(iA,"users"),i=Wk(s,Yk("userId","==",r.uid));(await Zk(i).catch(a=>{console.log(a.message)})).forEach(a=>{this.currentUser=a.data(),this.currentUser.id=a.id})}t(r)},e)})},async logOut(){await Wx(Af).then(()=>{console.log("Sucessful logged out ")})}},getters:{}}),aA=()=>Ve(()=>import("./Sidebar.aa576799.js"),["assets/Sidebar.aa576799.js","assets/Sidebar.42c687fe.css","assets/UserCircleIcon.c8fb0e4d.js","assets/LogoutIcon.93a2f8c3.js","assets/UserIcon.25706863.js","assets/ClipboardListIcon.515f9621.js"]),kr=()=>Ve(()=>import("./NavBar.98f57acf.js"),["assets/NavBar.98f57acf.js","assets/UserCircleIcon.c8fb0e4d.js","assets/LogoutIcon.93a2f8c3.js"]),cA=()=>Ve(()=>import("./DashHome.442adb50.js"),[]),lA=()=>Ve(()=>import("./Home.b27d54b7.js"),["assets/Home.b27d54b7.js","assets/useCategory.a3156acc.js","assets/ConfirmDeleteModal.204134a5.js"]),uA=()=>Ve(()=>import("./Register.e32b8c16.js"),["assets/Register.e32b8c16.js","assets/useUser.302e4d5f.js","assets/ConfirmDeleteModal.204134a5.js"]),hA=()=>Ve(()=>import("./Training.bf983ccf.js"),["assets/Training.bf983ccf.js","assets/useTraining.093199e3.js","assets/ConfirmDeleteModal.204134a5.js","assets/useCategory.a3156acc.js"]),dA=()=>Ve(()=>import("./Account.9e982049.js"),["assets/Account.9e982049.js","assets/useRegistration.c8fc00fb.js","assets/ConfirmDeleteModal.204134a5.js","assets/ClipboardListIcon.515f9621.js"]),fA=()=>Ve(()=>import("./TrainingDetail.dbca216d.js"),["assets/TrainingDetail.dbca216d.js","assets/useTraining.093199e3.js","assets/ConfirmDeleteModal.204134a5.js"]),pA=()=>Ve(()=>import("./Login.7dba670a.js"),["assets/Login.7dba670a.js","assets/useUser.302e4d5f.js","assets/ConfirmDeleteModal.204134a5.js"]),Xe="Just Learn",gA=[{path:"/",name:"home",components:{default:lA,navbar:kr},alias:"/home",meta:{title:Xe+" - Home"}},{path:"/login",name:"login",components:{default:pA,navbar:kr},meta:{title:Xe+" - Login"}},{path:"/account",name:"account",components:{default:dA,navbar:kr},meta:{requiresAuth:!0,title:Xe+" - Account"}},{path:"/register",name:"register",components:{default:uA,navbar:kr},meta:{title:Xe+" - Register"}},{path:"/training/:id",name:"training",props:!0,components:{default:hA,navbar:kr},meta:{title:Xe+" - Training"}},{path:"/training/:id/detail",name:"training.detail",props:!0,components:{default:fA,navbar:kr},meta:{title:Xe+" - Detail Training"}},{path:"/admin",name:"admin",components:{default:cA,sidebar:aA},meta:{title:Xe,requiresAuth:!0,isAdmin:!0},children:[{path:"",name:"admin.dashboard",component:()=>Ve(()=>import("./Dashboard.9693b6e7.js"),["assets/Dashboard.9693b6e7.js","assets/useUser.302e4d5f.js","assets/ConfirmDeleteModal.204134a5.js","assets/useTeacher.0122b320.js","assets/useTraining.093199e3.js","assets/UserIcon.25706863.js","assets/ClipboardListIcon.515f9621.js"]),meta:{title:Xe+" - Dashboard"}},{path:"registration",name:"admin.registration",component:()=>Ve(()=>import("./Registration.91c3deeb.js"),["assets/Registration.91c3deeb.js","assets/useRegistration.c8fc00fb.js","assets/ConfirmDeleteModal.204134a5.js"]),meta:{title:Xe+" - Registration"}},{path:"category",name:"admin.category",component:()=>Ve(()=>import("./Category.446c2daf.js"),["assets/Category.446c2daf.js","assets/useCategory.a3156acc.js","assets/ConfirmDeleteModal.204134a5.js","assets/TrashIcon.6c044b82.js"]),meta:{title:Xe+" - Category"}},{path:"users",name:"admin.user",component:()=>Ve(()=>import("./User.88aa2795.js"),["assets/User.88aa2795.js","assets/useUser.302e4d5f.js","assets/ConfirmDeleteModal.204134a5.js","assets/UserCircleIcon.c8fb0e4d.js"]),meta:{title:Xe+" - Users"}},{path:"training",name:"admin.training.index",component:()=>Ve(()=>import("./TrainingIndex.c605863f.js"),["assets/TrainingIndex.c605863f.js","assets/useTraining.093199e3.js","assets/ConfirmDeleteModal.204134a5.js","assets/TrashIcon.6c044b82.js"]),meta:{title:Xe+" - Training"}},{path:"training/create",name:"admin.training.create",component:()=>Ve(()=>import("./TrainingCreate.a5c52a23.js"),["assets/TrainingCreate.a5c52a23.js","assets/useTraining.093199e3.js","assets/ConfirmDeleteModal.204134a5.js","assets/useTeacher.0122b320.js","assets/useCategory.a3156acc.js"]),meta:{title:Xe+" - Create Training"}},{path:"training/:id/edit",name:"admin.training.edit",props:!0,component:()=>Ve(()=>import("./TrainingEdit.57665a6d.js"),["assets/TrainingEdit.57665a6d.js","assets/useTraining.093199e3.js","assets/ConfirmDeleteModal.204134a5.js","assets/useTeacher.0122b320.js","assets/useCategory.a3156acc.js"]),meta:{title:Xe+" - Edit Training"}},{path:"teacher",name:"admin.teacher.index",component:()=>Ve(()=>import("./TeacherIndex.5d86095b.js"),["assets/TeacherIndex.5d86095b.js","assets/useTeacher.0122b320.js","assets/ConfirmDeleteModal.204134a5.js","assets/TrashIcon.6c044b82.js"]),meta:{title:Xe+" - Training"}},{path:"teacher/create",name:"admin.teacher.create",component:()=>Ve(()=>import("./TeacherCreate.e96dd0ab.js"),["assets/TeacherCreate.e96dd0ab.js","assets/useTeacher.0122b320.js","assets/ConfirmDeleteModal.204134a5.js"]),meta:{title:Xe+" - Create Training"}},{path:"teacher/:id/edit",name:"admin.teacher.edit",props:!0,component:()=>Ve(()=>import("./TeacherEdit.bc217a49.js"),["assets/TeacherEdit.bc217a49.js","assets/useTeacher.0122b320.js","assets/ConfirmDeleteModal.204134a5.js"]),meta:{title:Xe+" - Create Teacher"}}]}],rh=v_({history:Lb(),routes:gA,scrollBehavior(t,e,n){return t.hash?{el:t.hash,behavior:"smooth"}:n||{top:0}}});rh.beforeEach(async(t,e,n)=>{const r=oA();t.meta.requiresAuth?await r.getCurrentUser()?t.meta.isAdmin?r.currentUser.type=="admin"?n():n({name:"home"}):n():n({name:"login"}):n()});rh.afterEach(t=>{document.title=t.meta.title});const vs=gr([]),bw=function(){return{DialogsStore:vs,addDialog:function(r){vs.push(sr(r))},removeDialog:function(r){const s=vs.findIndex(i=>i.id==r);vs.splice(s,1)},removeAll:function(){vs.splice(0)}}};function gc(){const t=[],e=s=>{const i=t.indexOf(s);i!==-1&&t.splice(i,1)};return{on:s=>(t.push(s),{off:()=>e(s)}),off:e,trigger:s=>{t.forEach(i=>i(s))}}}const mA=typeof window!="undefined",yA=()=>{},hl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},dl="__vueuse_ssr_handlers__";hl[dl]=hl[dl]||{};hl[dl];function wA(t=gi(!1)){const e=gc(),n=gc(),r=gc();let s=yA;const i=c=>(r.trigger(c),t.value=!0,new Promise(l=>{s=l})),o=c=>{t.value=!1,e.trigger(c),s({data:c,isCanceled:!1})},a=c=>{t.value=!1,n.trigger(c),s({data:c,isCanceled:!0})};return{isRevealed:Tt(()=>t.value),reveal:i,confirm:o,cancel:a,onReveal:r.on,onConfirm:e.on,onCancel:n.on}}var Rf,Df;mA&&(window==null?void 0:window.navigator)&&((Rf=window==null?void 0:window.navigator)==null?void 0:Rf.platform)&&/iP(ad|hone|od)/.test((Df=window==null?void 0:window.navigator)==null?void 0:Df.platform);var vA=Object.defineProperty,Nf=Object.getOwnPropertySymbols,bA=Object.prototype.hasOwnProperty,_A=Object.prototype.propertyIsEnumerable,Of=(t,e,n)=>e in t?vA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,EA=(t,e)=>{for(var n in e||(e={}))bA.call(e,n)&&Of(t,n,e[n]);if(Nf)for(var n of Nf(e))_A.call(e,n)&&Of(t,n,e[n]);return t};const IA={top:0,left:0,bottom:0,right:0,height:0,width:0};EA({text:""},IA);const TA=function(t,e={}){const n=gi(e),{addDialog:r,removeDialog:s,removeAll:i}=bw(),{reveal:o,isRevealed:a,onConfirm:c,onReveal:l,onCancel:u,confirm:h,cancel:d}=wA(),p=Math.floor(Math.random()*1e9);return l(m=>{for(const v in m)n.value[v]=m[v];r({id:p,dialog:t,isRevealed:a,confirm:h,cancel:d,props:n.value})}),Pr(a,m=>{m||s(p)}),{close:()=>{s(p)},closeAll:()=>{i()},reveal:o,isRevealed:a,onConfirm:c,onCancel:u}};var kA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const SA=Al({name:"DialogsWrapper",setup(){const{DialogsStore:t}=bw();return{DialogsStore:t}}});function xA(t,e,n,r,s,i){return Pt(!0),Vr(It,null,jv(t.DialogsStore,o=>(Pt(),mi(bp(o.dialog),Op(o.props,{onConfirm:o.confirm,onCancel:o.cancel,key:o.id}),null,16,["onConfirm","onCancel"]))),128)}var _w=kA(SA,[["render",xA]]);function CA(t){t.component("DialogsWrapper",_w)}var AA=Object.freeze(Object.defineProperty({__proto__:null,DialogsWrapper:_w,createConfirmDialog:TA,install:CA},Symbol.toStringTag,{value:"Module"}));const RA={key:0,class:"mt-4 w-full bg-red-500 text-white"},DA={class:"container mx-auto flex items-center justify-between px-6 py-4"},NA={class:"flex"},OA=Ke("svg",{viewBox:"0 0 40 40",class:"h-6 w-6 fill-current"},[Ke("path",{d:"M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"})],-1),PA={class:"mx-3 text-sm"},LA=Ke("svg",{class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Ke("path",{d:"M6 18L18 6M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),MA=[LA],UA={__name:"Error",props:{errors:String},emits:["cleanErrors"],setup(t,{emit:e}){const n=t,r=()=>{e("cleanErrors")};return(s,i)=>(Pt(),mi(aa,{name:"toast"},{default:_o(()=>[n.errors!=""?(Pt(),Vr("div",RA,[Ke("div",DA,[Ke("div",NA,[OA,Ke("p",PA,Aw(n.errors),1)]),Ke("button",{onClick:i[0]||(i[0]=o=>r()),class:"transform rounded-md p-1 transition-colors duration-200 hover:bg-gray-600 hover:bg-opacity-25 focus:outline-none"},MA)])])):u0("",!0)]),_:1}))}},FA=Ke("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),VA=Ke("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),BA=[FA,VA],$A={__name:"Spin",props:{color:{type:String,default:"text-white"},width:{type:String,default:"w-5"},height:{type:String,default:"h-5"}},setup(t){const e=t,n=e.color+" animate-spin "+e.width+" "+e.height;return(r,s)=>(Pt(),Vr("svg",{class:Wo(n),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true"},BA))}};function jA(t,e){return Pt(),mi("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Pe("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clip-rule":"evenodd"})])}const HA={class:"m-4"},qA=Ke("span",{class:"hidden text-sm md:block"},"Back",-1),zA={__name:"GoBack",setup(t){const e=__(),n=()=>{e.go(-1)};return(r,s)=>(Pt(),Vr("div",HA,[Ke("button",{onClick:s[0]||(s[0]=i=>n()),class:"flex items-center space-x-1 rounded-full border border-primary-color bg-white px-2 py-1 text-blue-500 shadow transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:bg-primary-color focus:text-white"},[Pe(Or(jA),{class:"h-5 w-5"}),qA])]))}};const KA=tb(),vr=J0(pb);vr.component("Error",UA);vr.component("Spin",$A);vr.component("GoBack",zA);vr.use(rh);vr.use(AA);vr.use(KA);vr.mount("#app");export{TA as A,cR as B,nR as C,Dk as D,rR as E,It as F,aR as G,tR as H,sR as I,YA as J,JA as K,XA as L,rA as M,uR as N,dR as O,hR as P,_n as Q,fR as R,Yk as S,aa as T,Wk as U,Rk as V,Wo as W,ZA as X,Oe as Y,eR as Z,ab as _,Pe as a,oA as b,mi as c,$v as d,Vr as e,Or as f,Ke as g,u0 as h,GA as i,gi as j,mp as k,QA as l,l0 as m,jv as n,Pt as o,WA as p,iA as q,gr as r,Zk as s,Aw as t,__ as u,lR as v,_o as w,pR as x,oR as y,iR as z};
