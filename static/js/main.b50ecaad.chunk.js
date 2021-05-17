(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{19:function(e,t,a){},40:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(20),s=a.n(r),c=(a(40),a(19),a(10)),o=a(3),i=a(13),l=a(15),u=a.n(l),b=(a(59),a(1));var p=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(i.a)(a,2),s=(r[0],r[1]),c=t.params.id;return Object(n.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/breed"}).then((function(e){s(e.data)}))}),[c]),Object(b.jsx)("div",{})},j=a(16),m=a(4),d=a(12),h=a.n(d),f=a(17),O="LOGIN_SUCCESS",g="LOGIN_FAIL",x="LOGOUT",v="REFRESH",k="REFRESH_FAIL";var w=a(26),y=a(35),S=localStorage.getItem("access"),N={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!!S},A=[y.a],I=Object(w.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case O:return localStorage.setItem("access",n.access),localStorage.setItem("refresh",n.refresh),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case g:return alert("Fail"),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case k:return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case x:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case v:return localStorage.removeItem("access"),localStorage.setItem("access",n.access),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,access:n.access});default:return e}}),w.a.apply(void 0,A)),L=u.a.create({baseURL:"http://127.0.0.1:8000/api/"});L.interceptors.request.use((function(e){return e.headers=function(){var e=localStorage.getItem("access");return e?{"Content-Type":"application/json",Authorization:"Bearer "+e}:{}}(),e})),L.interceptors.response.use((function(e){return e}),function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,console.log(a),401!==t.response.status){e.next=10;break}return e.next=5,I.dispatch(P());case 5:return a.headers.Authorization="Bearer ".concat(localStorage.getItem("access")),console.log(a),e.abrupt("return",L(a));case 10:if(404!==t.response.status){e.next=15;break}return alert("Bad request"),e.abrupt("return",Promise.reject(t));case 15:if(403!==t.response.status){e.next=20;break}return alert("Permission denied"),e.abrupt("return",Promise.reject(t));case 20:if(400!==t.response.status){e.next=24;break}return e.abrupt("return",Promise.reject(t));case 24:return alert("Error"),e.abrupt("return",Promise.reject(t));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var C=L,q="http://localhost:8000/api/",P=function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(q+"token/refresh",{refresh:localStorage.getItem("refresh")}).then((function(e){t({type:v,payload:e.data})})).catch((function(e){t({type:k})}));case 2:e.sent,console.log("refresh action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=a(11);var E=function(){var e=Object(F.c)((function(e){return e.isAuthenticated})),t=Object(F.b)(),a=Object(n.useState)({username:"",password:""}),r=Object(i.a)(a,2),s=r[0],l=r[1],u=function(e){e.persist(),l(Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return e?Object(b.jsx)(o.a,{to:{pathname:"/"}}):Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){var a,n;e.preventDefault(),e.preventDefault(),t((a=s.username,n=s.password,function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(q+"token/obtain",{username:a,password:n}).then((function(e){t({type:O,payload:e.data})})).catch((function(e){t({type:g})}));case 2:e.sent,console.log("login action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(b.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(b.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:u})}),Object(b.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:u})}),Object(b.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"500px"},type:"submit",value:"Hello Brotherhood"}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsxs)("p",{children:["Not a member? ",Object(b.jsx)(c.b,{to:{pathname:"/register"},className:"btn btn-link",children:"Sing up"})]}),Object(b.jsx)("p",{children:"or sign up with:"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("a",{className:"btn btn-lg btn-block  btn-light",href:"http://127.0.0.1:8000/api/auth/",children:[Object(b.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png"})," Signup Using Google"]})})})]})]})})};var B=function(e){e.match;var t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),l=Object(i.a)(c,2),p=l[0],d=l[1],h=function(e){e.persist(),s(Object(m.a)(Object(m.a)({},r),{},Object(j.a)({},e.target.name,e.target.value)))};return p?Object(b.jsx)(o.a,{to:{pathname:"/login"}}):Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){var t,a;e.preventDefault(),(t=r.username,a=r.password,u.a.post("http://127.0.0.1:8000/api/register",{username:t,password:a})).then((function(e){d(!0)})).catch((function(e){e.response?alert("Bad request"):e.request&&alert("Error")}))},children:[Object(b.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(b.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:h})}),Object(b.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:h})}),Object(b.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"700px"},type:"submit",value:"Sign up",text:""})]})})};var T=function(){var e=Object(F.c)((function(e){return e.isAuthenticated})),t=Object(F.b)(),a=Object(b.jsx)(c.b,{className:"btn btn-lg btn-lg",onClick:function(e){t((function(e){console.log("logout action creater"),e({type:x})}))},children:"Logout"}),n=Object(b.jsx)(c.b,{className:"btn btn-red btn-lg",to:{pathname:"/login"},children:"Login"});return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(c.b,{className:"nav-link",to:{pathname:"/breeds"},children:" PostDetail"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(c.b,{className:"nav-link",to:{pathname:"/packs"},children:"Volunteers"})})]}),e?a:n]})})};var H=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(c.a,{children:[Object(b.jsx)(T,{}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/breed",exact:!0,component:p}),Object(b.jsx)(o.b,{path:"/login",exact:!0,component:E}),Object(b.jsx)(o.b,{path:"/register",exact:!0,component:B})]})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};s.a.render(Object(b.jsxs)(F.a,{store:I,children:["np",Object(b.jsx)(H,{})]}),document.getElementById("root")),R()}},[[67,1,2]]]);
//# sourceMappingURL=main.b50ecaad.chunk.js.map