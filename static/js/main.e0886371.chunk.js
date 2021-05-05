(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{19:function(e,t,a){},41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(20),s=a.n(r),c=(a(41),a(19),a(10)),o=a(3),i=a(11),l=a(12),u=a.n(l),b=(a(35),a(1));var p=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(i.a)(a,2),s=(r[0],r[1]),c=Object(n.useState)([]),o=Object(i.a)(c,2),l=(o[0],o[1]),p=t.params.id;return Object(n.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/breed/".concat(p)}).then((function(e){s(e.data),l(e.data.posts)}))}),[p]),Object(b.jsx)("div",{})};var j=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(i.a)(a,2),s=(r[0],r[1]),c=t.params.id;return Object(n.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/form/".concat(c)}).then((function(e){s(e.data)}))}),[c]),Object(b.jsx)("div",{})},m=a(16),d=a(4),h=a(14),f=a.n(h),O=a(17),g="LOGIN_SUCCESS",x="LOGIN_FAIL",v="LOGOUT",k="REFRESH",w="REFRESH_FAIL";var y=a(26),S=a(36),N=localStorage.getItem("access"),A={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!!N},I=[S.a],L=Object(y.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return localStorage.setItem("access",n.access),localStorage.setItem("refresh",n.refresh),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case x:return alert("Fail"),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case w:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case v:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null});case k:return localStorage.removeItem("access"),localStorage.setItem("access",n.access),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,access:n.access});default:return e}}),y.a.apply(void 0,I)),C=u.a.create({baseURL:"http://127.0.0.1:8000/api/"});C.interceptors.request.use((function(e){return e.headers=function(){var e=localStorage.getItem("access");return e?{"Content-Type":"application/json",Authorization:"Bearer "+e}:{}}(),e})),C.interceptors.response.use((function(e){return e}),function(){var e=Object(O.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,console.log(a),401!==t.response.status){e.next=10;break}return e.next=5,L.dispatch(F());case 5:return a.headers.Authorization="Bearer ".concat(localStorage.getItem("access")),console.log(a),e.abrupt("return",C(a));case 10:if(404!==t.response.status){e.next=15;break}return alert("Bad request"),e.abrupt("return",Promise.reject(t));case 15:if(403!==t.response.status){e.next=20;break}return alert("Permission denied"),e.abrupt("return",Promise.reject(t));case 20:if(400!==t.response.status){e.next=24;break}return e.abrupt("return",Promise.reject(t));case 24:return alert("Error"),e.abrupt("return",Promise.reject(t));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var q=C,E="http://localhost:8000/api/",F=function(){return function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.post(E+"token/refresh",{refresh:localStorage.getItem("refresh")}).then((function(e){t({type:k,payload:e.data})})).catch((function(e){t({type:w})}));case 2:e.sent,console.log("refresh action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=a(13);var B=function(){var e=Object(P.c)((function(e){return e.isAuthenticated})),t=Object(P.b)(),a=Object(n.useState)({username:"",password:""}),r=Object(i.a)(a,2),s=r[0],l=r[1],u=function(e){e.persist(),l(Object(d.a)(Object(d.a)({},s),{},Object(m.a)({},e.target.name,e.target.value)))};return e?Object(b.jsx)(o.a,{to:{pathname:"/"}}):Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){var a,n;e.preventDefault(),e.preventDefault(),t((a=s.username,n=s.password,function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.post(E+"token/obtain",{username:a,password:n}).then((function(e){t({type:g,payload:e.data})})).catch((function(e){t({type:x})}));case 2:e.sent,console.log("login action creater");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(b.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(b.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:u})}),Object(b.jsx)("div",{class:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:u})}),Object(b.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"500px"},type:"submit",value:"Hello Brotherhood"}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsxs)("p",{children:["Not a member? ",Object(b.jsx)(c.b,{to:{pathname:"/register"},className:"btn btn-link",children:"Sing up"})]}),Object(b.jsx)("p",{children:"or sign up with:"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("a",{className:"btn btn-lg btn-block  btn-light",href:"#",children:[Object(b.jsx)("img",{src:"https://img.icons8.com/color/16/000000/google-logo.png"})," Signup Using Google"]})})})]})]})})};var T=function(e){e.match;var t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),l=Object(i.a)(c,2),p=l[0],j=l[1],h=function(e){e.persist(),s(Object(d.a)(Object(d.a)({},r),{},Object(m.a)({},e.target.name,e.target.value)))};return p?Object(b.jsx)(o.a,{to:{pathname:"/login"}}):Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){var t,a;e.preventDefault(),(t=r.username,a=r.password,u.a.post("http://127.0.0.1:8000/api/register",{username:t,password:a})).then((function(e){j(!0)})).catch((function(e){e.response?alert("Bad request"):e.request&&alert("Error")}))},children:[Object(b.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:"0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"}),Object(b.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"text",name:"username",className:"input",placeholder:"Username",maxLength:"100",required:!0,id:"id_username",onChange:h})}),Object(b.jsx)("div",{className:"form-outline mb-4",style:{"margin-left":"500px"},children:Object(b.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"Password",maxLength:"100",required:!0,id:"password",onChange:h})}),Object(b.jsx)("input",{className:"btn btn-outline-dark btn-lg btn-block mb-4",style:{"margin-left":"700px"},type:"submit",value:"Sign up",text:""})]})})};var H=function(){var e=Object(P.c)((function(e){return e.isAuthenticated})),t=Object(P.b)(),a=Object(b.jsx)(c.b,{className:"btn btn-dark btn-lg",onClick:function(e){t((function(e){console.log("logout action creater"),e({type:v})}))},children:"Logout"}),n=Object(b.jsx)(c.b,{className:"btn btn-red btn-lg",to:{pathname:"/login"},children:"Login"});return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(c.b,{className:"nav-link",to:{pathname:"/breeds"},children:" Breeds"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(c.b,{className:"nav-link",to:{pathname:"/forms"},children:"Forms"})})]}),e?a:n]})})};var R=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(c.a,{children:[Object(b.jsx)(H,{}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/breed/:id",exact:!0,component:p}),Object(b.jsx)(o.b,{path:"/form/:id",exact:!0,component:j}),Object(b.jsx)(o.b,{path:"/login",exact:!0,component:B}),Object(b.jsx)(o.b,{path:"/register",exact:!0,component:T})]})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};s.a.render(Object(b.jsxs)(P.a,{store:L,children:["np",Object(b.jsx)(R,{})]}),document.getElementById("root")),z()}},[[67,1,2]]]);
//# sourceMappingURL=main.e0886371.chunk.js.map