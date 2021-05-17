(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{19:function(e,t,a){},40:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(20),s=a.n(r),c=(a(40),a(19),a(10)),o=a(3),i=a(13),l=a(15),u=a.n(l),p=(a(59),a(1));var b=a(16),j=a(4),m=a(12),d=a.n(m),h=a(17),f="LOGIN_SUCCESS",g="LOGIN_FAIL",O="LOGOUT",x="REFRESH",v="REFRESH_FAIL";var w=a(26),y=a(35),k=localStorage.getItem("access"),S={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!!k},N=[y.a],A=Object(w.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case f:return localStorage.setItem("access",n.access),localStorage.setItem("refresh",n.refresh),Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case g:return alert("Fail"),Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case v:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case O:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case x:return localStorage.removeItem("access"),localStorage.setItem("access",n.access),Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0,access:n.access});default:return e}}),w.a.apply(void 0,N)),I=u.a.create({baseURL:"http://127.0.0.1:8000/api/"});I.interceptors.request.use((function(e){return e.headers=function(){var e=localStorage.getItem("access");return e?{"Content-Type":"application/json",Authorization:"Bearer "+e}:{}}(),e})),I.interceptors.response.use((function(e){return e}),function(){var e=Object(h.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,console.log(a),401!==t.response.status){e.next=10;break}return e.next=5,A.dispatch(q());case 5:return a.headers.Authorization="Bearer ".concat(localStorage.getItem("access")),console.log(a),e.abrupt("return",I(a));case 10:if(404!==t.response.status){e.next=15;break}return alert("Bad request"),e.abrupt("return",Promise.reject(t));case 15:if(403!==t.response.status){e.next=20;break}return alert("Permission denied"),e.abrupt("return",Promise.reject(t));case 20:if(400!==t.response.status){e.next=24;break}return e.abrupt("return",Promise.reject(t));case 24:return alert("Error"),e.abrupt("return",Promise.reject(t));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var L=I,C="http://localhost:8000/api/",q=function(){return function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post(C+"token/refresh",{refresh:localStorage.getItem("refresh")}).then((function(e){t({type:x,payload:e.data})})).catch((function(e){t({type:v})}));case 2:e.sent,console.log("refresh action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=a(11);var P=function(){var e=Object(F.c)((function(e){return e.isAuthenticated})),t=Object(F.b)(),a=Object(n.useState)({username:"",password:""}),r=Object(i.a)(a,2),s=r[0],l=r[1],u=function(e){e.persist(),l(Object(j.a)(Object(j.a)({},s),{},Object(b.a)({},e.target.name,e.target.value)))};return e?Object(p.jsx)(o.a,{to:{pathname:"/"}}):Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){var a,n;e.preventDefault(),e.preventDefault(),t((a=s.username,n=s.password,function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post(C+"token/obtain",{username:a,password:n}).then((function(e){t({type:f,payload:e.data})})).catch((function(e){t({type:g})}));case 2:e.sent,console.log("login action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(p.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(p.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(p.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:u})}),Object(p.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(p.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:u})}),Object(p.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"500px"},type:"submit",value:"Hello Brotherhood"}),Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsxs)("p",{children:["Not a member? ",Object(p.jsx)(c.b,{to:{pathname:"/register"},className:"btn btn-link",children:"Sing up"})]}),Object(p.jsx)("p",{children:"or sign up with:"}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("a",{className:"btn btn-lg btn-block  btn-light",href:"http://127.0.0.1:8000/api/auth/",children:[Object(p.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png"})," Signup Using Google"]})})})]})]})})};var B=function(e){e.match;var t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),l=Object(i.a)(c,2),m=l[0],d=l[1],h=function(e){e.persist(),s(Object(j.a)(Object(j.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))};return m?Object(p.jsx)(o.a,{to:{pathname:"/login"}}):Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){var t,a;e.preventDefault(),(t=r.username,a=r.password,u.a.post("http://127.0.0.1:8000/api/register",{username:t,password:a})).then((function(e){d(!0)})).catch((function(e){e.response?alert("Bad request"):e.request&&alert("Error")}))},children:[Object(p.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(p.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(p.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:h})}),Object(p.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(p.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:h})}),Object(p.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"700px"},type:"submit",value:"Sign up",text:""})]})})};var E=function(){var e=Object(F.c)((function(e){return e.isAuthenticated})),t=Object(F.b)(),a=Object(p.jsx)(c.b,{className:"btn btn-lg btn-lg",onClick:function(e){t((function(e){console.log("logout action creater"),e({type:O})}))},children:"Logout"}),n=Object(p.jsx)(c.b,{className:"btn btn-red btn-lg",to:{pathname:"/login"},children:"Login"});return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(c.b,{className:"nav-link",to:{pathname:"/packs"},children:"Volunteers"})})}),e?a:n]})})};var T=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(E,{}),Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/login",exact:!0,component:P}),Object(p.jsx)(o.b,{path:"/register",exact:!0,component:B})]})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};s.a.render(Object(p.jsxs)(F.a,{store:A,children:["np",Object(p.jsx)(T,{})]}),document.getElementById("root")),H()}},[[67,1,2]]]);
//# sourceMappingURL=main.5bd9b9d7.chunk.js.map