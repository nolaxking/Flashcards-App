(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(21),s=c.n(a),i=c(6),d=c(24),j=c(4),b=c(8),o=c(5),l=c(2),u=c.n(l),h=c(22),O=["cards"],x=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:8080",p=new Headers;function f(e){e.cards;return Object(h.a)(e,O)}function m(e,t,c){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(u.a.mark((function e(t,c,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:if(204!==n.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(r));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(x,"/decks?_embed=cards"),e.next=3,m(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(u.a.mark((function e(t,c){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/decks"),n={method:"POST",headers:p,body:JSON.stringify(f(t)),signal:c},e.next=4,m(r,n,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(u.a.mark((function e(t,c){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/decks/").concat(t,"?_embed=cards"),e.next=3,m(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(u.a.mark((function e(t,c){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/decks/").concat(t.id,"?_embed=cards"),n={method:"PUT",headers:p,body:JSON.stringify(f(t)),signal:c},e.next=4,m(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(u.a.mark((function e(t,c){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/decks/").concat(t),n={method:"DELETE",signal:c},e.next=4,m(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(j.a)(u.a.mark((function e(t,c,r){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards"),c.deckId=Number(t),a={method:"POST",headers:p,body:JSON.stringify(c),signal:r},e.next=5,m(n,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return A.apply(this,arguments)}function A(){return(A=Object(j.a)(u.a.mark((function e(t,c){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/cards/").concat(t),e.next=3,m(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(j.a)(u.a.mark((function e(t,c){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/cards/").concat(t.id),n={method:"PUT",headers:p,body:JSON.stringify(t)},e.next=4,m(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(j.a)(u.a.mark((function e(t,c){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/cards/").concat(t),n={method:"DELETE",signal:c},e.next=4,m(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.append("Content-Type","application/json");var H=c(0);var P=function(e){var t=e.error;return Object(H.jsx)(H.Fragment,{children:t&&Object(H.jsxs)("div",{className:"alert alert-danger m-2",children:["Error: ",t]})})};var B=function(e){var t=e.deck,c=Object(i.f)(),n=Object(i.g)().pathname,a=Object(r.useState)(),s=Object(o.a)(a,2),l=s[0],h=s[1],O=Object(r.useState)(!0),x=Object(o.a)(O,2),p=x[0],f=x[1],m=Object(r.useState)({name:""}),v=Object(o.a)(m,2),N=v[0],w=v[1],g=Object(r.useState)({description:""}),E=Object(o.a)(g,2),C=E[0],D=E[1];function I(){return I=Object(j.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new AbortController,e.prev=1,""!==N.name){e.next=4;break}throw new Error("Need a name!!");case 4:if(""!==C.description){e.next=6;break}throw new Error("Need a description!!");case 6:return e.next=8,y(Object(b.a)(Object(b.a)({},N),C),t.signal);case 8:return e.next=10,k();case 10:r=e.sent,n=Math.max.apply(Math,Object(d.a)(r.map((function(e){return e.id})))),c.push("/decks/".concat(n)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),e.t0&&h(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),I.apply(this,arguments)}return Object(r.useEffect)((function(){!function(){var e=new AbortController;n.includes("edit")?(w({name:t.name}),D({description:t.description},e.signal)):f(!1)}()}),[t,n]),Object(H.jsx)("div",{children:Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(H.jsx)("input",{type:"text",className:"form-control",id:"name",value:N.name||"",placeholder:p?null:"Deck Name",onChange:function(e){var t=new AbortController;try{w(Object(b.a)(Object(b.a)({},N),{},{name:e.target.value}),t.signal)}catch(c){throw c}}})]}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(H.jsx)("textarea",{className:"form-control",id:"description",rows:"3",value:C.description||"",placeholder:p?null:"Brief Description of Deck",onChange:function(e){var t=new AbortController;try{D(Object(b.a)(Object(b.a)({},C),{},{description:e.target.value}),t.signal)}catch(c){throw c}},children:" "})]}),Object(H.jsx)("div",{children:Object(H.jsx)(P,{error:l})}),Object(H.jsx)("button",{type:"button",className:"btn btn-secondary mr-1",onClick:function(){return c.push(p?"/decks/".concat(t.id):"/")},required:!0,children:"Cancel"}),Object(H.jsx)("button",{type:"button",className:"btn btn-primary",onClick:p?function(){var e=new AbortController;try{if(""===N.name)throw new Error("Need a name");if(""===C.description)throw new Error("Need a description");!function(e,t){S.apply(this,arguments)}(Object(b.a)(Object(b.a)({id:t.id},N),C),e.signal),c.push("/decks/".concat(t.id))}catch(r){r&&h(r.message)}}:function(){return I.apply(this,arguments)},required:!0,children:"Create"})]})})},J=c(3);var L=function(){return Object(H.jsx)("div",{className:"container",children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item active",children:Object(H.jsx)(J.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active",children:"Create Deck"})]})})})};var R=function(){return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)(L,{}),Object(H.jsx)("h2",{children:"Create Deck"}),Object(H.jsx)(B,{})]})};var U=function(e){var t=e.deck;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(J.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:Object(H.jsx)(J.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Deck"})]})})})};var K=function(){var e=Object(i.h)().deckId,t=Object(r.useState)(null),c=Object(o.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){function t(){return(t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),n?Object(H.jsxs)("div",{children:[Object(H.jsx)(U,{deck:n}),Object(H.jsx)("h2",{children:"Edit Deck"}),Object(H.jsx)(B,{deck:n})]}):null};var M=function(e){var t=e.deck;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(J.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:t.name})]})})})};var W=function(e){var t=e.deck,c=Object(r.useState)(null),n=Object(o.a)(c,2),a=n[0],s=n[1],d=Object(i.f)(),b=Object(i.i)().url;if(Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.id);case 2:c=e.sent,s(c.cards);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.id]),!a)return null;var l=a.map((function(e){return Object(H.jsx)("div",{children:Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsxs)("p",{className:"card-text",children:["Side A : ",Object(H.jsx)("span",{children:e.front})]}),Object(H.jsxs)("p",{className:"card-text",children:["Side B : ",Object(H.jsx)("span",{children:e.back})," "]}),Object(H.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(H.jsx)(J.b,{to:"".concat(b,"/cards/").concat(e.id,"/edit"),className:"btn btn-secondary mr-1",children:"Edit"}),Object(H.jsx)("button",{onClick:function(t){window.confirm(" Delete this card ?")?(!function(e,t){_.apply(this,arguments)}(e.id),s((function(t){return t.filter((function(t){return t.id!==e.id}))}))):d.push("".concat(b))},className:"btn btn-danger",children:"Delete"})]})]})})},e.id)}));return Object(H.jsx)("div",{children:l})};var q=function(){var e=Object(i.f)(),t=Object(i.i)().url,c=Object(i.h)().deckId,n=Object(r.useState)(null),a=Object(o.a)(n,2),s=a[0],d=a[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(c);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),s?Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{className:"col-sm-12 p-0",children:Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsx)("h5",{className:"card-title",children:s.name}),Object(H.jsx)("p",{className:"card-text",children:s.description}),Object(H.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(J.b,{to:"".concat(t,"/edit"),className:"btn btn-secondary mr-1",children:"Edit"}),Object(H.jsx)(J.b,{to:"".concat(t,"/study"),className:"btn btn-primary mr-1",children:"Study"}),Object(H.jsx)(J.b,{to:"".concat(t,"/cards/new"),className:"btn btn-primary",children:"Add Cards"})]}),Object(H.jsx)("div",{children:Object(H.jsx)("button",{className:"btn btn-danger",onClick:function(){window.confirm("Are you sure you want to delete this deck?")?(C(s.id),e.push("/")):e.push("".concat(t))},children:"Delete"})})]})]})})}),Object(H.jsx)("div",{className:"container",children:Object(H.jsx)("h1",{children:"Cards"})}),Object(H.jsx)(W,{deck:s})]}):null};var V=function(e){var t=e.deck;return Object(H.jsx)("div",{className:" container",children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item active",children:Object(H.jsx)(J.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item active",children:Object(H.jsx)(J.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active",children:"Study"})]})})})};var Y=function(e){var t=e.allCards,c=void 0===t?[]:t,r=Object(i.h)().deckId;return Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"Not enough cards!"}),Object(H.jsxs)("p",{children:["You need at least 3 cards to study. There are ",c.length," in this deck."]}),Object(H.jsx)(J.b,{to:"/decks/".concat(r,"/cards/new"),type:"button",className:"btn btn-primary",children:"Add Cards"})]})};var z=function(e){var t=e.deck,c=Object(r.useState)(0),n=Object(o.a)(c,2),a=n[0],s=n[1],d=Object(r.useState)(!0),j=Object(o.a)(d,2),b=j[0],l=j[1],u=Object(i.f)(),h=t.cards;return h.length<3?Object(H.jsx)(Y,{allcards:h}):Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsxs)("h2",{className:"card-title",children:["Card ",a+1," of ",h.length]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("p",{children:b?h[a].front:h[a].back}),Object(H.jsx)("button",{className:"btn btn-primary mr-1",onClick:function(){l(!b)},children:"Flip"}),b?null:Object(H.jsx)("button",{className:"btn btn-primary",onClick:function(){if(s((function(e){return e+1})),l(!0),a===h.length-1)return window.confirm("Do you want to reset cars ?")?s(0):u.push("/")},children:"Next"})]})]})})};var G=function(){var e=Object(i.h)().deckId,t=Object(r.useState)(null),c=Object(o.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){function t(){return(t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),n?Object(H.jsxs)("div",{children:[Object(H.jsx)(V,{deck:n}),Object(H.jsx)("h2",{children:"".concat(n.name,": Study")}),Object(H.jsx)(z,{deck:n})]}):null};var Q=function(e){var t=e.deck,c=Object(i.f)(),n=Object(i.h)(),a=n.cardId,s=n.deckId,d=Object(i.g)().pathname,l=Object(r.useState)(null),h=Object(o.a)(l,2),O=h[0],x=h[1],p=Object(r.useState)({front:""}),f=Object(o.a)(p,2),m=f[0],v=f[1],k=Object(r.useState)({back:""}),N=Object(o.a)(k,2),y=N[0],w=N[1],g=Object(r.useState)(),E=Object(o.a)(g,2),S=E[0],C=E[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(a);case 2:t=e.sent,v({front:t.front}),w({back:t.back});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.includes("new")?x(!1):(x(!0),function(){e.apply(this,arguments)}())}),[d,a]),m&&y?Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"front",children:"Front:"}),Object(H.jsx)("textarea",{className:"form-control",id:"front",rows:"4",placeholder:O?null:"Front side of card",value:m.front,onChange:function(e){v(Object(b.a)(Object(b.a)({},m),{},{front:e.target.value}))}})]}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"back",children:"Back:"}),Object(H.jsx)("textarea",{className:"form-control",id:"back",rows:"4",placeholder:O?null:"Back side of card",value:y.back,onChange:function(e){w(Object(b.a)(Object(b.a)({},y),{},{back:e.target.value}))}})]}),Object(H.jsx)("div",{children:Object(H.jsx)(P,{error:S})}),Object(H.jsx)("button",{type:"button",className:"btn btn-secondary mr-1",onClick:function(){c.push("/decks/".concat(s))},children:O?"Cancel":"Done"}),Object(H.jsx)("button",{type:"button",className:"btn btn-primary",onClick:O?function(){try{if(""===m.front)throw new Error("Need a  front card name!!");if(""===y.back)throw new Error("Need a back card name!!");!function(e,t){F.apply(this,arguments)}(Object(b.a)(Object(b.a)({id:a,deckId:t.id},m),y)),c.push("/decks/".concat(t.id))}catch(e){e&&C(e.message)}}:function(){try{if(""===m.front)throw new Error("Need a  front card name!!");if(""===y.back)throw new Error("Need a back card name!!");!function(e,t,c){I.apply(this,arguments)}(parseInt(s),Object(b.a)(Object(b.a)({},m),y)),c.push("/decks/".concat(t.id)),v({front:""}),w({back:""})}catch(e){e&&C(e.message)}},children:"Save"})]})}):null};var X=function(e){var t=e.deck;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(J.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(J.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Add Card"})]})})})};var Z=function(e){var t=e.deck;return Object(H.jsxs)("div",{children:[Object(H.jsx)(X,{deck:t}),Object(H.jsx)("h1",{children:"".concat(t.name,": Add Card")}),Object(H.jsx)(Q,{deck:t})]})};var $=function(e){var t=e.deck,c=Object(i.h)().cardId;return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{"aria-label":"breadcrumb",children:Object(H.jsxs)("ol",{className:"breadcrumb",children:[Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(J.b,{to:"/",children:"Home"})}),Object(H.jsx)("li",{className:"breadcrumb-item",children:Object(H.jsx)(J.b,{to:"/decks/".concat(t.id),children:t.name})}),Object(H.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Card ".concat(c)})]})})})};var ee=function(e){var t=e.deck;return Object(H.jsxs)("div",{children:[Object(H.jsx)($,{deck:t}),Object(H.jsx)("h2",{children:"Edit Card"}),Object(H.jsx)(Q,{deck:t})]})};var te=function(){var e=Object(i.h)().deckId,t=Object(r.useState)(null),c=Object(o.a)(t,2),n=c[0],a=c[1],s=Object(i.i)().path;return Object(r.useEffect)((function(){function t(){return(t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),n?Object(H.jsx)("div",{children:Object(H.jsxs)(i.c,{children:[Object(H.jsx)(i.a,{exact:!0,path:"".concat(s,"/new"),children:Object(H.jsx)(Z,{deck:n})}),Object(H.jsx)(i.a,{path:"".concat(s,"/:cardId/edit"),children:Object(H.jsx)(ee,{deck:n})})]})}):null};var ce=function(){var e=Object(i.h)().deckId,t=Object(r.useState)(null),c=Object(o.a)(t,2),n=c[0],a=c[1],s=Object(i.i)().path;return Object(r.useEffect)((function(){function t(){return(t=Object(j.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,a(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),n?Object(H.jsx)("div",{children:Object(H.jsxs)(i.c,{children:[Object(H.jsxs)(i.a,{exact:!0,path:"".concat(s),children:[Object(H.jsx)(M,{deck:n}),Object(H.jsx)(q,{deck:n})]}),Object(H.jsx)(i.a,{path:"".concat(s,"/study"),children:Object(H.jsx)(G,{})}),Object(H.jsx)(i.a,{path:"".concat(s,"/edit"),children:Object(H.jsx)(K,{})}),Object(H.jsx)(i.a,{path:"".concat(s,"/cards"),children:Object(H.jsx)(te,{})})]})}):null};var re=function(){return Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)(i.c,{children:[Object(H.jsx)(i.a,{path:"/decks/new",children:Object(H.jsx)(R,{})}),Object(H.jsx)(i.a,{path:"/decks/:deckId",children:Object(H.jsx)(ce,{})})]})})};var ne=function(){return Object(H.jsx)("div",{className:"col-sm-5 mb-2",children:Object(H.jsx)(J.b,{to:"/decks/new",className:"btn btn-primary",children:"Create Deck"})})};var ae=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(i.f)();Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=c.map((function(e){return Object(H.jsx)("div",{className:"card",children:Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(H.jsxs)("h4",{className:"card-title",children:[" ",e.name]}),Object(H.jsx)("p",{children:"".concat(e.cards.length," cards")})]}),Object(H.jsxs)("p",{className:"card-text",children:[" ",e.description," "]}),Object(H.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(J.b,{to:"/decks/".concat(e.id),className:"btn btn-primary mr-1",children:"View"}),Object(H.jsx)(J.b,{to:"/decks/".concat(e.id,"/study"),className:"btn btn-success",children:"Study"})]}),Object(H.jsx)("div",{children:Object(H.jsx)("button",{className:"btn btn-danger ",onClick:function(t){window.confirm(" Delete this deck?")&&(C(e.id),n((function(t){return t.filter((function(t){return t.id!==e.id}))})),a.push("/"))},children:"Delete Deck"})})]})]})},e.id)}));return Object(H.jsx)("div",{children:s})};var se=function(){return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)(ne,{}),Object(H.jsx)(ae,{})]})};var ie=function(){return Object(H.jsx)("header",{className:"jumbotron bg-dark",children:Object(H.jsxs)("div",{className:"container text-white",children:[Object(H.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(H.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var de=function(){return Object(H.jsx)("div",{className:"NotFound",children:Object(H.jsx)("h1",{children:"Not Found"})})};var je=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ie,{}),Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)(i.c,{children:[Object(H.jsx)(i.a,{exact:!0,path:"/",children:Object(H.jsx)(se,{})}),Object(H.jsx)(i.a,{path:"/decks",children:Object(H.jsx)(re,{})}),Object(H.jsx)(i.a,{children:Object(H.jsx)(de,{})})]})})]})};var be=function(){return Object(H.jsx)("div",{className:"app-routes",children:Object(H.jsx)(i.c,{children:Object(H.jsx)(i.a,{path:"/",children:Object(H.jsx)(je,{})})})})};s.a.render(Object(H.jsx)(n.a.StrictMode,{children:Object(H.jsx)(J.a,{children:Object(H.jsx)(be,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3db2ca52.chunk.js.map