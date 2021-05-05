(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{19:function(e,t,a){},41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(20),c=a.n(r),s=(a(41),a(19),a(10)),i=a(12),o=a.n(i),l=(a(24),a(1));var u=a(9),b=a(3);var p=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(s.a)(a,2),c=(r[0],r[1]),i=Object(n.useState)([]),u=Object(s.a)(i,2),b=(u[0],u[1]),p=t.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/breed/".concat(p)}).then((function(e){c(e.data),b(e.data.posts)}))}),[p]),Object(l.jsx)("div",{})};var j=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(s.a)(a,2),c=(r[0],r[1]),i=t.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/form/".concat(i)}).then((function(e){c(e.data)}))}),[i]),Object(l.jsx)("div",{})},m=a(16),d=a(4),h=a(14),f=a.n(h),O=a(17),g="LOGIN_SUCCESS",x="LOGIN_FAIL",v="LOGOUT",k="REFRESH",S="REFRESH_FAIL";var y=a(27),w=a(36),N=localStorage.getItem("access"),A={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!!N},I=[w.a],L=Object(y.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return localStorage.setItem("access",n.access),localStorage.setItem("refresh",n.refresh),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case x:return alert("Fail"),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case S:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case v:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case k:return localStorage.removeItem("access"),localStorage.setItem("access",n.access),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,access:n.access});default:return e}}),y.a.apply(void 0,I)),C=o.a.create({baseURL:"http://127.0.0.1:8000/api/"});C.interceptors.request.use((function(e){return e.headers=function(){var e=localStorage.getItem("access");return e?{"Content-Type":"application/json",Authorization:"Bearer "+e}:{}}(),e})),C.interceptors.response.use((function(e){return e}),function(){var e=Object(O.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,console.log(a),401!==t.response.status){e.next=10;break}return e.next=5,L.dispatch(F());case 5:return a.headers.Authorization="Bearer ".concat(localStorage.getItem("access")),console.log(a),e.abrupt("return",C(a));case 10:if(404!==t.response.status){e.next=15;break}return alert("Bad request"),e.abrupt("return",Promise.reject(t));case 15:if(403!==t.response.status){e.next=20;break}return alert("Permission denied"),e.abrupt("return",Promise.reject(t));case 20:if(400!==t.response.status){e.next=24;break}return e.abrupt("return",Promise.reject(t));case 24:return alert("Error"),e.abrupt("return",Promise.reject(t));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var q=C,E="http://localhost:8000/api/",F=function(){return function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.post(E+"token/refresh",{refresh:localStorage.getItem("refresh")}).then((function(e){t({type:k,payload:e.data})})).catch((function(e){t({type:S})}));case 2:e.sent,console.log("refresh action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=a(13);var T=function(){var e=Object(P.c)((function(e){return e.isAuthenticated})),t=Object(P.b)(),a=Object(n.useState)({username:"",password:""}),r=Object(s.a)(a,2),c=r[0],i=r[1],o=function(e){e.persist(),i(Object(d.a)(Object(d.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return e?Object(l.jsx)(b.a,{to:{pathname:"/"}}):Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){var a,n;e.preventDefault(),e.preventDefault(),t((a=c.username,n=c.password,function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.post(E+"token/obtain",{username:a,password:n}).then((function(e){t({type:g,payload:e.data})})).catch((function(e){t({type:x})}));case 2:e.sent,console.log("login action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(l.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(l.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(l.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:o})}),Object(l.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(l.jsx)("input",{type:"text",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:o})}),Object(l.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"700px"},type:"submit",value:"Sign in"}),Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsxs)("p",{children:["Not a member? ",Object(l.jsx)(u.b,{to:{pathname:"/register"},className:"btn btn-link",children:"Sing up"})]}),Object(l.jsx)("p",{children:"or sign up with:"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsxs)("a",{className:"btn btn-lg btn-block  btn-light",href:"#",children:[Object(l.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png"})," Signup Using Google"]})})})]})]})})};var B=function(e){e.match;var t=Object(n.useState)({username:"",password:""}),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),p=u[0],j=u[1],h=function(e){e.persist(),c(Object(d.a)(Object(d.a)({},r),{},Object(m.a)({},e.target.name,e.target.value)))};return p?Object(l.jsx)(b.a,{to:{pathname:"/login"}}):Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){var t,a;e.preventDefault(),(t=r.username,a=r.password,o.a.post("http://127.0.0.1:8000/register",{username:t,password:a})).then((function(e){j(!0)})).catch((function(e){e.response?alert("Bad request"):e.request&&alert("Error")}))},children:[Object(l.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(l.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(l.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:h})}),Object(l.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(l.jsx)("input",{type:"text",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:h})}),Object(l.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"700px"},type:"submit",value:"Sign up"})]})})};var R=function(){var e=Object(P.c)((function(e){return e.isAuthenticated})),t=Object(P.b)(),a=Object(l.jsx)(u.b,{className:"btn btn-dark btn-lg",onClick:function(e){t((function(e){console.log("logout action creater"),e({type:v})}))},children:"Logout"}),n=Object(l.jsx)(u.b,{className:"btn btn-dark btn-lg",to:{pathname:"/login"},children:"Login"});return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(u.b,{className:"nav-link",to:{pathname:"/breeds"},children:" Breeds"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(u.b,{className:"nav-link",to:{pathname:"/forms"},children:"Forms"})})]}),e?a:n]})})};var z=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)(R,{}),Object(l.jsxs)(b.d,{children:[Object(l.jsx)(b.b,{path:"/breed/:id",exact:!0,component:p}),Object(l.jsx)(b.b,{path:"/form/:id",exact:!0,component:j}),Object(l.jsx)(b.b,{path:"/login",exact:!0,component:T}),Object(l.jsx)(b.b,{path:"/register",exact:!0,component:B})]})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};c.a.render(Object(l.jsxs)(P.a,{store:L,children:["np",Object(l.jsx)(z,{})]}),document.getElementById("root")),G()}},[[67,1,2]]]);
//# sourceMappingURL=main.5278ab81.chunk.js.map