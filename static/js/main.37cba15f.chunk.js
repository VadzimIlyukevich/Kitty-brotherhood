(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{18:function(e,t,a){},40:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(19),s=a.n(r),c=(a(40),a(18),a(10)),i=a(3),o=a(14),l=a(4),u=a(17),p=a(12),b=a.n(p),j=a(15),m="LOGIN_SUCCESS",d="LOGIN_FAIL",h="LOGOUT",f="REFRESH",g="REFRESH_FAIL",O=a(21),x=a.n(O);var v=a(26),k=a(35),w=localStorage.getItem("access"),y={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!!w},S=[k.a],N=Object(v.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:return localStorage.setItem("access",n.access),localStorage.setItem("refresh",n.refresh),Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case d:return alert("Fail"),Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case g:return Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case h:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case f:return localStorage.removeItem("access"),localStorage.setItem("access",n.access),Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!0,access:n.access});default:return e}}),v.a.apply(void 0,S)),A=x.a.create({baseURL:"http://127.0.0.1:8000/api/"});A.interceptors.request.use((function(e){return e.headers=function(){var e=localStorage.getItem("access");return e?{"Content-Type":"application/json",Authorization:"Bearer "+e}:{}}(),e})),A.interceptors.response.use((function(e){return e}),function(){var e=Object(j.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,console.log(a),401!==t.response.status){e.next=10;break}return e.next=5,N.dispatch(C());case 5:return a.headers.Authorization="Bearer ".concat(localStorage.getItem("access")),console.log(a),e.abrupt("return",A(a));case 10:if(404!==t.response.status){e.next=15;break}return alert("Bad request"),e.abrupt("return",Promise.reject(t));case 15:if(403!==t.response.status){e.next=20;break}return alert("Permission denied"),e.abrupt("return",Promise.reject(t));case 20:if(400!==t.response.status){e.next=24;break}return e.abrupt("return",Promise.reject(t));case 24:return alert("Error"),e.abrupt("return",Promise.reject(t));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var I=A,L="http://localhost:8000/api/",C=function(){return function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post(L+"token/refresh",{refresh:localStorage.getItem("refresh")}).then((function(e){t({type:f,payload:e.data})})).catch((function(e){t({type:g})}));case 2:e.sent,console.log("refresh action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=a(11),P=a(1);var F=function(){var e=Object(q.c)((function(e){return e.isAuthenticated})),t=Object(q.b)(),a=Object(n.useState)({username:"",password:""}),r=Object(u.a)(a,2),s=r[0],p=r[1],h=function(e){e.persist(),p(Object(l.a)(Object(l.a)({},s),{},Object(o.a)({},e.target.name,e.target.value)))};return e?Object(P.jsx)(i.a,{to:{pathname:"/"}}):Object(P.jsx)("div",{children:Object(P.jsxs)("form",{onSubmit:function(e){var a,n;e.preventDefault(),e.preventDefault(),t((a=s.username,n=s.password,function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post(L+"token/obtain",{username:a,password:n}).then((function(e){t({type:m,payload:e.data})})).catch((function(e){t({type:d})}));case 2:e.sent,console.log("login action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(P.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(P.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"0px"},children:Object(P.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:h})}),Object(P.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(P.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:h})}),Object(P.jsx)("input",{maxLength:"300px",className:"btn btn-outline-dark btn-lg mb-4",style:{"margin-left":"500px"},type:"submit",value:"\u041a \u0440\u0438\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0441\u0447\u0430\u0441\u0442\u044c\u044e!"}),Object(P.jsxs)("div",{className:"text-center",children:[Object(P.jsxs)("p",{children:["Not a member? ",Object(P.jsx)(c.b,{to:{pathname:"/register"},className:"btn btn-link",children:"Sing up"})]}),Object(P.jsx)("p",{children:"or sign up with:"}),Object(P.jsxs)("div",{className:"row",children:[Object(P.jsx)("div",{className:"col-md-12",children:Object(P.jsxs)("a",{className:"btn btn-lg btn-block  btn-light",href:"http://127.0.0.1:8000/auth/",children:[Object(P.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png"})," Signup Using Google"]})}),"-"]})]})]})})};var B=function(e){e.match;var t=Object(n.useState)({username:"",password:""}),a=Object(u.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),p=Object(u.a)(c,2),b=p[0],j=p[1],m=function(e){e.persist(),s(Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},e.target.name,e.target.value)))};return b?Object(P.jsx)(i.a,{to:{pathname:"/login"}}):Object(P.jsx)("div",{children:Object(P.jsxs)("form",{onSubmit:function(e){var t,a;e.preventDefault(),(t=r.username,a=r.password,x.a.post("http://127.0.0.1:8000/api/register",{username:t,password:a})).then((function(e){j(!0)})).catch((function(e){e.response?alert("Bad request"):e.request&&alert("Error")}))},children:[Object(P.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(P.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(P.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:m})}),Object(P.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(P.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:m})}),Object(P.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"700px"},type:"submit",value:"Sign up",text:""})]})})};var E=function(){var e=Object(q.c)((function(e){return e.isAuthenticated})),t=Object(q.b)(),a=Object(P.jsx)(c.b,{className:"btn btn-dark btn-lg",onClick:function(e){t((function(e){console.log("logout action creater"),e({type:h})}))},children:"Logout"}),n=Object(P.jsx)(c.b,{className:"btn btn-dark btn-lg",to:{pathname:"/login"},children:"Login"});return Object(P.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(P.jsxs)("div",{className:"container-fluid",children:[Object(P.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsx)(c.b,{className:"nav-link",to:{pathname:"/coffins"},children:" Coffins"})}),Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsx)(c.b,{className:"nav-link",to:{pathname:"/packs"},children:"Packs"})})]}),e?a:n]})})};var T=function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsxs)(c.a,{children:[Object(P.jsx)(E,{}),Object(P.jsxs)(i.d,{children:[Object(P.jsx)(i.b,{path:"/login",exact:!0,component:F}),Object(P.jsx)(i.b,{path:"/register",exact:!0,component:B})]})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};s.a.render(Object(P.jsxs)(q.a,{store:N,children:["np",Object(P.jsx)(T,{})]}),document.getElementById("root")),R()}},[[66,1,2]]]);
//# sourceMappingURL=main.37cba15f.chunk.js.map