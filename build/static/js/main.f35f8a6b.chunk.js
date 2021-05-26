(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{28:function(e,t,n){e.exports={link:"Navigation_link__3hogt",active:"Navigation_active__102OZ"}},29:function(e,t,n){e.exports={container:"UserMenu_container__2QpqN",avatar:"UserMenu_avatar__34Evj",name:"UserMenu_name__20J17",exit:"UserMenu_exit__VH_QS"}},30:function(e,t,n){e.exports={link:"AuthNav_link__2d6AI",activeLink:"AuthNav_activeLink__3lg-H"}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(4),c=(Object(r.b)("contacts/fetchContactRequest"),Object(r.b)("contacts/fetchContactSuccess"),Object(r.b)("contacts/fetchContactError"),Object(r.b)("contacts/addContactRequest"),Object(r.b)("contacts/addContactSuccess"),Object(r.b)("contacts/addContactError"),Object(r.b)("contacts/deleteContactRequest"),Object(r.b)("contacts/deleteContactSuccess"),Object(r.b)("contacts/deleteContactError"),Object(r.b)("contacts/filter")),a=Object(r.b)("contacts/uniqName")},43:function(e,t,n){"use strict";var r,c,a,u=n(3),o=n(34),i=n(11),s=n(4),l=n(37),d=n(7),j=Object(s.d)([],(r={},Object(u.a)(r,d.d.fulfilled,(function(e,t){return t.payload})),Object(u.a)(r,d.a.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(o.a)(e),[n])})),Object(u.a)(r,d.c.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(u.a)(r,l.a,(function(e){return e})),r)),b=Object(s.d)("",Object(u.a)({},l.b,(function(e,t){return t.payload}))),f=Object(s.d)(!1,(c={},Object(u.a)(c,d.d.pending,(function(){return!0})),Object(u.a)(c,d.d.fulfilled,(function(){return!1})),Object(u.a)(c,d.d.rejected,(function(){return!1})),Object(u.a)(c,d.a.pending,(function(){return!0})),Object(u.a)(c,d.a.fulfilled,(function(){return!1})),Object(u.a)(c,d.a.rejected,(function(){return!1})),Object(u.a)(c,d.c.fulfilled,(function(){return!1})),Object(u.a)(c,d.c.rejected,(function(){return!1})),c)),O=Object(s.d)(null,(a={},Object(u.a)(a,d.d.pending,(function(){return null})),Object(u.a)(a,d.d.rejected,(function(e,t){return t.payload})),Object(u.a)(a,d.d.rejected,(function(e,t){return t.payload})),Object(u.a)(a,d.a.pending,(function(){return null})),Object(u.a)(a,d.a.rejected,(function(e,t){return t.payload})),Object(u.a)(a,d.c.pending,(function(){return null})),Object(u.a)(a,d.c.rejected,(function(e,t){return t.payload})),a));t.a=Object(i.c)({items:j,filter:b,loading:f,error:O})},54:function(e,t,n){e.exports={header:"AppBar_header__2gnCw"}},67:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n(13),c=n.n(r),a=n(22),u=n(16),o=n.n(u),i=n(4);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s=Object(i.c)("contacts/fetchContacts",Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),l=Object(i.c)("contacts/addContact",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/contacts",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(i.c)("contacts/deleteContact",function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j={fetchContacts:s,addContact:l,deleteContact:d};t.b=j},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return p}));var r=n(13),c=n.n(r),a=n(22),u=n(16),o=n.n(u),i=n(4);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s,l=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){o.a.defaults.headers.common.Authorization=""},j=Object(i.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:return a=e.sent,u=a.data,l(u.token),e.abrupt("return",u);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(i.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:return a=e.sent,u=a.data,console.log("data",u),l(u.token),e.abrupt("return",u);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),f={register:j,logOut:Object(i.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/users/logout");case 4:d(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),logIn:b,fetchCurrentUser:Object(i.c)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=6;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),console.log(n.rejectWithValue()),e.abrupt("return",n.rejectWithValue());case 6:return l(a),e.prev=7,e.next=10,o.a.get("/users/current");case 10:return u=e.sent,i=u.data,console.log("data",i),e.abrupt("return",i);case 16:return e.prev=16,e.t0=e.catch(7),console.log("error",e.t0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t,n){return e.apply(this,arguments)}}())},O={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrentUser:function(e){return e.auth.isFetchingCurrentUser},getAuthError:function(e){return e.auth.error}},h=n(3),p=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1,error:null},extraReducers:(s={},Object(h.a)(s,f.register.pending,(function(e){e.error=null})),Object(h.a)(s,f.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(h.a)(s,f.register.rejected,(function(e,t){e.error=t.payload})),Object(h.a)(s,f.logIn.pending,(function(e){e.error=null})),Object(h.a)(s,f.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(h.a)(s,f.logIn.rejected,(function(e,t){e.error=t.payload})),Object(h.a)(s,f.logOut.pending,(function(e){e.error=null})),Object(h.a)(s,f.logOut.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(h.a)(s,f.logOut.rejected,(function(e,t){e.error=t.payload})),Object(h.a)(s,f.fetchCurrentUser.pending,(function(e){e.error=null,e.isFetchingCurrentUser=!0})),Object(h.a)(s,f.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(h.a)(s,f.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),s)}).reducer},93:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),u=n(21),o=n.n(u),i=n(8),s=n(19),l=n(53),d=(n(67),n(5)),j=n(9),b=n(25),f=n(35);function O(e){var t=e.children,n=e.redirectTo,c=void 0===n?"/":n,a=Object(f.a)(e,["children","redirectTo"]),u=Object(i.c)(j.c.getIsLoggedIn);return Object(r.jsx)(d.b,Object(b.a)(Object(b.a)({},a),{},{children:u?t:Object(r.jsx)(d.a,{to:c})}))}function h(e){var t=e.children,n=e.redirectTo,c=void 0===n?"/contacts":n,a=e.restricted,u=void 0!==a&&a,o=Object(f.a)(e,["children","redirectTo","restricted"]),s=Object(i.c)(j.c.getIsLoggedIn)&&u;return Object(r.jsx)(d.b,Object(b.a)(Object(b.a)({},o),{},{children:s?Object(r.jsx)(d.a,{to:c}):t}))}var p=n(28),g=n.n(p),v=function(){var e=Object(i.c)(j.c.getIsLoggedIn);return Object(r.jsxs)("nav",{children:[Object(r.jsx)(s.b,{to:"/",exact:!0,className:g.a.link,activeClassName:g.a.active,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(r.jsx)(s.b,{to:"/contacts",className:g.a.link,activeClassName:g.a.active,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})},x=n.p+"static/media/default-avatar.e44fc4e2.png",m=n(29),k=n.n(m),C=n(107);function y(){var e=Object(i.b)(),t=Object(i.c)(j.c.getUsername),n=x;return Object(r.jsxs)("div",{className:k.a.container,children:[Object(r.jsx)("img",{src:n,alt:"",width:"32",className:k.a.avatar}),Object(r.jsxs)("span",{className:k.a.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t]}),Object(r.jsx)(C.a,{className:k.a.exit,variant:"contained",color:"primary",onClick:function(){return e(j.a.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var _=n(30),I=n.n(_);function w(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(s.b,{to:"/register",exact:!0,className:I.a.link,activeClassName:I.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(r.jsx)(s.b,{to:"/login",exact:!0,className:I.a.link,activeClassName:I.a.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var U=n(54),N=n.n(U);function L(){var e=Object(i.c)(j.c.getIsLoggedIn);return Object(r.jsxs)("header",{className:N.a.header,children:[Object(r.jsx)(v,{}),e?Object(r.jsx)(y,{}):Object(r.jsx)(w,{})]})}var A=n(41),z=n.n(A),E=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,112))})),F=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,115))})),S=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,116))})),T=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,114))})),V=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,113))}));var R=function(){var e=Object(i.b)(),t=Object(i.c)(j.c.getUsername),n=Object(i.c)(j.c.getIsFetchingCurrentUser),a=Object(i.c)(j.c.getAuthError);return Object(c.useEffect)((function(){e(j.a.fetchCurrentUser())}),[e]),!n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{}),Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:[Object(r.jsx)(z.a,{}),a&&A.notify.show(a,"error",2e3),Object(r.jsxs)(d.d,{children:[Object(r.jsx)(h,{exact:!0,path:"/",children:Object(r.jsx)(E,{name:t||"\u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446"})}),Object(r.jsx)(h,{path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(r.jsx)(F,{})}),Object(r.jsx)(h,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(r.jsx)(S,{})}),Object(r.jsx)(O,{path:"/contacts",redirectTo:"/",children:Object(r.jsx)(T,{})}),Object(r.jsx)(d.b,{component:V})]})]})]})},W=n(34),q=n(4),M=n(55),B=n.n(M),J=n(23),H=n(56),Q=n.n(H),Z=n(43),D=[].concat(Object(W.a)(Object(q.f)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[B.a]),G={key:"auth",storage:Q.a,blacklist:["_persist"],whitelist:["token"]},K=Object(q.a)({reducer:{contacts:Z.a,auth:Object(J.g)(G,j.b)},devTools:!1,middleware:D}),P=Object(J.h)(K);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(i.a,{store:K,children:Object(r.jsx)(l.a,{loading:null,persistor:P,children:Object(r.jsx)(s.a,{children:Object(r.jsx)(R,{})})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.f35f8a6b.chunk.js.map