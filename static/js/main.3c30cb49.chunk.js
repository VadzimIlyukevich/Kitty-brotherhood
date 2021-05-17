(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{19:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(20),c=n.n(r),s=(n(41),n(19),n(10)),o=n(3),i=n(12),l=n(13),u=n.n(l),b=(n(35),n(1));var p=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=(t[0],t[1]);return Object(a.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/breed"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("a",{children:"Hello"})})},j=n(11);var d=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.c)((function(e){return e.isAuthenticated})),Object(a.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/volunteer"}).then((function(e){r(e.data)}))}),[]),Object(b.jsx)("div",{children:n.map((function(e){return Object(b.jsx)("a",{children:e.full_name},e.id)}))})},m=n(16),h=n(4),f=n(14),O=n.n(f),g=n(18),x="LOGIN_SUCCESS",v="LOGIN_FAIL",k="LOGOUT",w="REFRESH",y="REFRESH_FAIL";var S=n(26),N=n(36),A=localStorage.getItem("access"),I={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!!A},L=[N.a],C=Object(S.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case x:return localStorage.setItem("access",a.access),localStorage.setItem("refresh",a.refresh),Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case v:return alert("Fail"),Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case y:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case k:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case w:return localStorage.removeItem("access"),localStorage.setItem("access",a.access),Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,access:a.access});default:return e}}),S.a.apply(void 0,L)),q=u.a.create({baseURL:"http://127.0.0.1:8000/api/"});q.interceptors.request.use((function(e){return e.headers=function(){var e=localStorage.getItem("access");return e?{"Content-Type":"application/json",Authorization:"Bearer "+e}:{}}(),e})),q.interceptors.response.use((function(e){return e}),function(){var e=Object(g.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,console.log(n),401!==t.response.status){e.next=10;break}return e.next=5,C.dispatch(P());case 5:return n.headers.Authorization="Bearer ".concat(localStorage.getItem("access")),console.log(n),e.abrupt("return",q(n));case 10:if(404!==t.response.status){e.next=15;break}return alert("Bad request"),e.abrupt("return",Promise.reject(t));case 15:if(403!==t.response.status){e.next=20;break}return alert("Permission denied"),e.abrupt("return",Promise.reject(t));case 20:if(400!==t.response.status){e.next=24;break}return e.abrupt("return",Promise.reject(t));case 24:return alert("Error"),e.abrupt("return",Promise.reject(t));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var E=q,F="http://localhost:8000/api/",P=function(){return function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post(F+"token/refresh",{refresh:localStorage.getItem("refresh")}).then((function(e){t({type:w,payload:e.data})})).catch((function(e){t({type:y})}));case 2:e.sent,console.log("refresh action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var B=function(){var e=Object(j.c)((function(e){return e.isAuthenticated})),t=Object(j.b)(),n=Object(a.useState)({username:"",password:""}),r=Object(i.a)(n,2),c=r[0],l=r[1],u=function(e){e.persist(),l(Object(h.a)(Object(h.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return e?Object(b.jsx)(o.a,{to:{pathname:"/"}}):Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){var n,a;e.preventDefault(),e.preventDefault(),t((n=c.username,a=c.password,function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post(F+"token/obtain",{username:n,password:a}).then((function(e){t({type:x,payload:e.data})})).catch((function(e){t({type:v})}));case 2:e.sent,console.log("login action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(b.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(b.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:u})}),Object(b.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:u})}),Object(b.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"500px"},type:"submit",value:"Hello Brotherhood"}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsxs)("p",{children:["Not a member? ",Object(b.jsx)(s.b,{to:{pathname:"/register"},className:"btn btn-link",children:"Sing up"})]}),Object(b.jsx)("p",{children:"or sign up with:"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("a",{className:"btn btn-lg btn-block  btn-light",href:"#",children:[Object(b.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png"})," Signup Using Google"]})})})]})]})})};var T=function(e){e.match;var t=Object(a.useState)({username:"",password:""}),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),p=l[0],j=l[1],d=function(e){e.persist(),c(Object(h.a)(Object(h.a)({},r),{},Object(m.a)({},e.target.name,e.target.value)))};return p?Object(b.jsx)(o.a,{to:{pathname:"/login"}}):Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),(t=r.username,n=r.password,u.a.post("http://127.0.0.1:8000/api/register",{username:t,password:n})).then((function(e){j(!0)})).catch((function(e){e.response?alert("Bad request"):e.request&&alert("Error")}))},children:[Object(b.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(b.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:d})}),Object(b.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:d})}),Object(b.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"700px"},type:"submit",value:"Sign up",text:""})]})})};var H=function(){var e=Object(j.c)((function(e){return e.isAuthenticated})),t=Object(j.b)(),n=Object(b.jsx)(s.b,{className:"btn btn-dark btn-lg",onClick:function(e){t((function(e){console.log("logout action creater"),e({type:k})}))},children:"Logout"}),a=Object(b.jsx)(s.b,{className:"btn btn-red btn-lg",to:{pathname:"/login"},children:"Login"});return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(s.b,{className:"nav-link",to:{pathname:"/breeds"},children:" Breeds"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(s.b,{className:"nav-link",to:{pathname:"/volunteer"},children:"Volunteers"})})]}),e?n:a]})})};var R=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(H,{}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/breeds",exact:!0,component:p}),Object(b.jsx)(o.b,{path:"/volunteer",exact:!0,component:d}),Object(b.jsx)(o.b,{path:"/login",exact:!0,component:B}),Object(b.jsx)(o.b,{path:"/register",exact:!0,component:T})]})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};c.a.render(Object(b.jsxs)(j.a,{store:C,children:["np",Object(b.jsx)(R,{})]}),document.getElementById("root")),z()}},[[67,1,2]]]);
//# sourceMappingURL=main.3c30cb49.chunk.js.map