(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(21),s=c.n(a),i=c(6),d=c(24),j=c(4),b=c(8),u=c(5),l=c(2),o=c.n(l),h=c(22),O=["cards"],p=Object({NODE_ENV:"production",PUBLIC_URL:"/project-flashcards",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:8080",x=new Headers;function f(e){e.cards;return Object(h.a)(e,O)}function m(e,t,c){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(o.a.mark((function e(t,c,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(n));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p,"/decks?_embed=cards"),e.next=3,m(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks"),r={method:"POST",headers:x,body:JSON.stringify(f(t)),signal:c},e.next=4,m(n,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t,"?_embed=cards"),e.next=3,m(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(j.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:x,body:JSON.stringify(f(t)),signal:c},e.next=4,m(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(j.a)(o.a.mark((function e(t,c,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/cards"),c.deckId=Number(t),a={method:"POST",headers:x,body:JSON.stringify(c),signal:n},e.next=5,m(r,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return F.apply(this,arguments)}function F(){return(F=Object(j.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t),e.next=3,m(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(j.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t.id),r={method:"PUT",headers:x,body:JSON.stringify(t)},e.next=4,m(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(j.a)(o.a.mark((function e(t,c){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t),r={method:"DELETE",signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.append("Content-Type","application/json");var H=c(0);var P=function(e){var t=e.deck,c=Object(i.f)(),r=Object(i.g)().pathname,a=Object(n.useState)(!0),s=Object(u.a)(a,2),l=s[0],h=s[1],O=Object(n.useState)({name:""}),p=Object(u.a)(O,2),x=p[0],f=p[1],m=Object(n.useState)({description:""}),v=Object(u.a)(m,2),N=v[0],w=v[1];function g(){return g=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(Object(b.a)(Object(b.a)({},x),N));case 2:return e.next=4,k();case 4:t=e.sent,n=Math.max.apply(Math,Object(d.a)(t.map((function(e){return e.id})))),c.push("/decks/".concat(n));case 7:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}return Object(n.useEffect)((function(){r.includes("edit")?(f({name:t.name}),w({description:t.description})):h(!1)}),[t,r]),Object(H.jsx)("div",{children:Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(H.jsx)("input",{type:"text",className:"form-control",id:"name",value:x.name||"",placeholder:l?null:"Deck Name",onChange:function(e){f(Object(b.a)(Object(b.a)({},x),{},{name:e.target.value}))}})]}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(H.jsx)("textarea",{className:"form-control",id:"description",rows:"3",value:N.description||"",placeholder:l?null:"Brief Description of Deck",onChange:function(e){w(Object(b.a)(Object(b.a)({},N),{},{description:e.target.value}))},children:" "})]}),Object(H.jsx)("button",{type:"button",className:"btn btn-secondary mr-1",onClick:function(){return c.push(l?"/decks/".concat(t.id):"/")},children:"Cancel"}),Object(H.jsx)("button",{type:"button",className:"btn btn-primary",onClick:l?function(){!function(e,t){C.apply(this,arguments)}(Object(b.a)(Object(b.a)({id:t.id},x),N)),c.push("/decks/".concat(t.id))}:function(){return g.apply(this,arguments)},children:"Submit"})]})})},B=c(3);var J=function(){return Object(H.jsx)("div",{className:"container",children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item active",children:Object(H.jsx)(B.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active",children:"Create Deck"})]})})})};var L=function(){return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)(J,{}),Object(H.jsx)("h2",{children:"Create Deck"}),Object(H.jsx)(P,{})]})};var R=function(e){var t=e.deck;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(B.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:Object(H.jsx)(B.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Deck"})]})})})};var U=function(){var e=Object(i.h)().deckId,t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){function t(){return(t=Object(j.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r?Object(H.jsxs)("div",{children:[Object(H.jsx)(R,{deck:r}),Object(H.jsx)("h2",{children:"Edit Deck"}),Object(H.jsx)(P,{deck:r})]}):null};var K=function(e){var t=e.deck;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(B.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:t.name})]})})})};var M=function(e){var t=e.deck,c=Object(n.useState)(null),r=Object(u.a)(c,2),a=r[0],s=r[1],d=Object(i.f)(),b=Object(i.i)().url;if(Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.id);case 2:c=e.sent,s(c.cards);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.id]),!a)return null;var l=a.map((function(e){return Object(H.jsx)("div",{children:Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsxs)("p",{className:"card-text",children:["Side A : ",Object(H.jsx)("span",{children:e.front})]}),Object(H.jsxs)("p",{className:"card-text",children:["Side B : ",Object(H.jsx)("span",{children:e.back})," "]}),Object(H.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(H.jsx)(B.b,{to:"".concat(b,"/cards/").concat(e.id,"/edit"),className:"btn btn-secondary mr-1",children:"Edit"}),Object(H.jsx)("button",{onClick:function(t){window.confirm(" Delete this card ?")?(!function(e,t){A.apply(this,arguments)}(e.id),s((function(t){return t.filter((function(t){return t.id!==e.id}))}))):d.push("".concat(b))},className:"btn btn-danger",children:"Delete"})]})]})})},e.id)}));return Object(H.jsx)("div",{children:l})};var W=function(){var e=Object(i.f)(),t=Object(i.i)().url,c=Object(i.h)().deckId,r=Object(n.useState)(null),a=Object(u.a)(r,2),s=a[0],d=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(c);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),s?Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{className:"col-sm-12 p-0",children:Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsx)("h5",{className:"card-title",children:s.name}),Object(H.jsx)("p",{className:"card-text",children:s.description}),Object(H.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(B.b,{to:"".concat(t,"/edit"),className:"btn btn-secondary mr-1",children:"Edit"}),Object(H.jsx)(B.b,{to:"".concat(t,"/study"),className:"btn btn-primary mr-1",children:"Study"}),Object(H.jsx)(B.b,{to:"".concat(t,"/cards/new"),className:"btn btn-primary",children:"Add Cards"})]}),Object(H.jsx)("div",{children:Object(H.jsx)("button",{className:"btn btn-danger",onClick:function(){window.confirm("Are you sure you want to delete this deck?")?(E(s.id),e.push("/")):e.push("".concat(t))},children:"Delete"})})]})]})})}),Object(H.jsx)("div",{className:"container",children:Object(H.jsx)("h1",{children:"Cards"})}),Object(H.jsx)(M,{deck:s})]}):null};var V=function(e){var t=e.deck;return Object(H.jsx)("div",{className:" container",children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item active",children:Object(H.jsx)(B.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active",children:Object(H.jsx)(B.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active",children:"Study"})]})})})};var Y=function(e){var t=e.allCards,c=void 0===t?[]:t,n=Object(i.h)().deckId;return Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"Not enough cards!"}),Object(H.jsxs)("p",{children:["You need at least 3 cards to study. There are ",c.length," in this deck."]}),Object(H.jsx)(B.b,{to:"/decks/".concat(n,"/cards/new"),type:"button",className:"btn btn-primary",children:"Add Cards"})]})};var q=function(e){var t=e.deck,c=Object(n.useState)(0),r=Object(u.a)(c,2),a=r[0],s=r[1],d=Object(n.useState)(!0),j=Object(u.a)(d,2),b=j[0],l=j[1],o=Object(i.f)(),h=t.cards;return h.length<3?Object(H.jsx)(Y,{allcards:h}):Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsxs)("h2",{className:"card-title",children:["Card ",a+1," of ",h.length]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("p",{children:b?h[a].front:h[a].back}),Object(H.jsx)("button",{className:"btn btn-primary mr-1",onClick:function(){l(!b)},children:"Flip"}),b?null:Object(H.jsx)("button",{className:"btn btn-primary",onClick:function(){if(s((function(e){return e+1})),l(!0),a===h.length-1)return window.confirm("Do you want to reset cars ?")?s(0):o.push("/")},children:"Next"})]})]})})};var z=function(){var e=Object(i.h)().deckId,t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){function t(){return(t=Object(j.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r?Object(H.jsxs)("div",{children:[Object(H.jsx)(V,{deck:r}),Object(H.jsx)("h2",{children:"".concat(r.name,": Study")}),Object(H.jsx)(q,{deck:r})]}):null};var G=function(e){var t=e.deck,c=Object(i.f)(),r=Object(i.h)(),a=r.cardId,s=r.deckId,d=Object(i.g)().pathname,l=Object(n.useState)(null),h=Object(u.a)(l,2),O=h[0],p=h[1],x=Object(n.useState)({front:""}),f=Object(u.a)(x,2),m=f[0],v=f[1],k=Object(n.useState)({back:""}),N=Object(u.a)(k,2),y=N[0],w=N[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(a);case 2:t=e.sent,v({front:t.front}),w({back:t.back});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.includes("new")?p(!1):(p(!0),function(){e.apply(this,arguments)}())}),[d,a]),m&&y?Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"front",children:"Front:"}),Object(H.jsx)("textarea",{className:"form-control",id:"front",rows:"4",placeholder:O?null:"Front side of card",value:m.front,onChange:function(e){v(Object(b.a)(Object(b.a)({},m),{},{front:e.target.value}))}})]}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"back",children:"Back:"}),Object(H.jsx)("textarea",{className:"form-control",id:"back",rows:"4",placeholder:O?null:"Back side of card",value:y.back,onChange:function(e){w(Object(b.a)(Object(b.a)({},y),{},{back:e.target.value}))}})]}),Object(H.jsx)("button",{type:"button",className:"btn btn-secondary mr-1",onClick:function(){c.push("/decks/".concat(s))},children:O?"Cancel":"Done"}),Object(H.jsx)("button",{type:"button",className:"btn btn-primary",onClick:O?function(){!function(e,t){_.apply(this,arguments)}(Object(b.a)(Object(b.a)({id:a,deckId:t.id},m),y)),c.push("/decks/".concat(t.id))}:function(){!function(e,t,c){I.apply(this,arguments)}(parseInt(s),Object(b.a)(Object(b.a)({},m),y)),c.push("/decks/".concat(t.id)),v({front:""}),w({back:""})},children:"Save"})]})}):null};var Q=function(e){var t=e.deck;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(B.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(B.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Add Card"})]})})})};var X=function(e){var t=e.deck;return Object(H.jsxs)("div",{children:[Object(H.jsx)(Q,{deck:t}),Object(H.jsx)("h1",{children:"".concat(t.name,": Add Card")}),Object(H.jsx)(G,{deck:t})]})};var Z=function(e){var t=e.deck,c=Object(i.h)().cardId;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(B.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(B.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Card ".concat(c)})]})})})};var $=function(e){var t=e.deck;return Object(H.jsxs)("div",{children:[Object(H.jsx)(Z,{deck:t}),Object(H.jsx)("h2",{children:"Edit Card"}),Object(H.jsx)(G,{deck:t})]})};var ee=function(){var e=Object(i.h)().deckId,t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(i.i)().path;return Object(n.useEffect)((function(){function t(){return(t=Object(j.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r?Object(H.jsx)("div",{children:Object(H.jsxs)(i.c,{children:[Object(H.jsx)(i.a,{exact:!0,path:"".concat(s,"/new"),children:Object(H.jsx)(X,{deck:r})}),Object(H.jsx)(i.a,{path:"".concat(s,"/:cardId/edit"),children:Object(H.jsx)($,{deck:r})})]})}):null};var te=function(){var e=Object(i.h)().deckId,t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(i.i)().path;return Object(n.useEffect)((function(){function t(){return(t=Object(j.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r?Object(H.jsx)("div",{children:Object(H.jsxs)(i.c,{children:[Object(H.jsxs)(i.a,{exact:!0,path:"".concat(s),children:[Object(H.jsx)(K,{deck:r}),Object(H.jsx)(W,{deck:r})]}),Object(H.jsx)(i.a,{path:"".concat(s,"/study"),children:Object(H.jsx)(z,{})}),Object(H.jsx)(i.a,{path:"".concat(s,"/edit"),children:Object(H.jsx)(U,{})}),Object(H.jsx)(i.a,{path:"".concat(s,"/cards"),children:Object(H.jsx)(ee,{})})]})}):null};var ce=function(){return Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)(i.c,{children:[Object(H.jsx)(i.a,{path:"/decks/new",children:Object(H.jsx)(L,{})}),Object(H.jsx)(i.a,{path:"/decks/:deckId",children:Object(H.jsx)(te,{})})]})})};var ne=function(){return Object(H.jsx)("div",{className:"col-sm-5 mb-2",children:Object(H.jsx)(B.b,{to:"/decks/new",className:"btn btn-primary",children:"Create Deck"})})};var re=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(i.f)();Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=c.map((function(e){return Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(H.jsxs)("h4",{className:"card-title",children:[" ",e.name]}),Object(H.jsx)("p",{children:"".concat(e.cards.length," cards")})]}),Object(H.jsxs)("p",{className:"card-text",children:[" ",e.description," "]}),Object(H.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(B.b,{to:"/decks/".concat(e.id),className:"btn btn-primary mr-1",children:"View"}),Object(H.jsx)(B.b,{to:"/decks/".concat(e.id,"/study"),className:"btn btn-success",children:"Study"})]}),Object(H.jsx)("div",{children:Object(H.jsx)("button",{className:"btn btn-danger ",onClick:function(t){window.confirm(" Delete this deck?")&&(E(e.id),r((function(t){return t.filter((function(t){return t.id!==e.id}))})),a.push("/"))},children:"Delete Deck"})})]})]})},e.id)}));return Object(H.jsx)("div",{children:s})};var ae=function(){return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)(ne,{}),Object(H.jsx)(re,{})]})};var se=function(){return Object(H.jsx)("header",{className:"jumbotron bg-dark",children:Object(H.jsxs)("div",{className:"container text-white",children:[Object(H.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(H.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var ie=function(){return Object(H.jsx)("div",{className:"NotFound",children:Object(H.jsx)("h1",{children:"Not Found"})})};var de=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(se,{}),Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)(i.c,{children:[Object(H.jsx)(i.a,{exact:!0,path:"/",children:Object(H.jsx)(ae,{})}),Object(H.jsx)(i.a,{path:"/decks",children:Object(H.jsx)(ce,{})}),Object(H.jsx)(i.a,{children:Object(H.jsx)(ie,{})})]})})]})};var je=function(){return Object(H.jsx)("div",{className:"app-routes",children:Object(H.jsx)(i.c,{children:Object(H.jsx)(i.a,{path:"/",children:Object(H.jsx)(de,{})})})})};s.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(B.a,{children:Object(H.jsx)(je,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9df14f47.chunk.js.map