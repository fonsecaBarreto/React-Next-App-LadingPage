_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"0fBD":function(e,t,n){"use strict";n.r(t);var s=n("o0o1"),r=n.n(s),a=n("HaE+"),o=n("rePB"),c=n("nKUr"),i=(n("5dyx"),n("666h")),l=n("BhsO"),d=n("A0I/"),u=n("q1tI"),m=n("2MRG"),h=n("fAou");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(u.useState)({email:"sadasdsad",name:"   "}),t=e[0],n=e[1],s=Object(u.useState)({show:!1,message:"",type:"success"}),o=s[0],b=s[1],f=function(){var e=Object(a.a)(r.a.mark((function e(){var s,a,o,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({show:!0,message:"Enviando ...",type:""}),s=t.email,a=t.name,e.prev=2,e.next=5,m.a.post("/emailsignature/subscribe",{email:s,name:a});case 5:n({email:""}),b({show:!0,message:"Email Cadastrado com sucesso",type:"success"}),setTimeout((function(){b({show:!1,message:"",type:"danger"}),window.location.href="/obrigado"}),1600),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),o=e.t0.response,c=o.data,i=o.status,console.log(c.errors),422===i&&b({show:!0,message:c.errors[0].msg||"Existe algo de Errado com o email informado!",type:"danger"}),setTimeout((function(){b({show:!1,message:"",type:"danger"})}),2e5);case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),j=t.email;return Object(c.jsxs)("div",{id:"assine",className:"pb-5",children:[Object(c.jsx)(i.default,{title:"Quer continuar por dentro das novidades sobre ingl\xeas?",subtitle:"Assine a nossa newsletter e receba dicas, conte\xfados e informa\xe7\xf5es sobre ingl\xeas e cultura em torno da l\xedngua.",children:Object(c.jsxs)("div",{className:"app-container mx756 d-flex flex-column aling-tems-end ",children:[Object(c.jsx)(l.a,{initial:j,label:"email",name:"email",onInputChange:function(e,s){var r=p({},t);r[e]=s,n(r)}}),Object(c.jsx)("div",{className:"mt-4",children:Object(c.jsx)(d.a,{onClick:f,width:"300px",children:"Assine"})})]})}),o.show?Object(c.jsx)(h.a,{type:o.type,onClose:function(){return b(p(p({},o),{},{show:!1,message:""}))},children:o.message}):void 0]})}},"666h":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var s=n("nKUr");n("q1tI"),n("66d2");function r(e){var t=e.title,n=e.subtitle,r=e.children,a=e.fr4,o=e.textShadow;e.wa;return Object(s.jsxs)("section",{className:t||n?"home-section bd-red":"home-section noheader bd-red",children:[Object(s.jsxs)("div",{className:a?"app-container home-section-header fr4":"app-container home-section-header",children:[t?Object(s.jsx)("h1",{className:n?"section-title bd-red":"section-title text-md-center bd-green",children:t}):void 0,n?Object(s.jsx)("span",{className:o?"section-subtitle shadow":"section-subtitle",children:n}):void 0]}),r?Object(s.jsx)("div",{className:" section-content bd-green",children:r}):null]})}},"A0I/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("nKUr");n("q1tI"),n("jDVv");function r(e){var t=e.children,n=e.width,r=e.sm100,a=e.height,o=e.mr,c=e.ml,i=e.onClick;return Object(s.jsx)("button",{onClick:i,className:r?"call-button sm100":"call-button",style:{width:n,height:a,marginLeft:c,marginRight:o},children:t})}},"fW/I":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/components/assine",function(){return n("0fBD")}])}},[["fW/I",0,1,4,6,9,7,3,8,2]]]);