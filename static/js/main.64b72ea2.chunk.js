(this.webpackJsonp05tut=this.webpackJsonp05tut||[]).push([[0],{43:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(34),a=c.n(r),i=(c(43),c(11)),o=c(5),l=function(){var e=Object(n.useState)({width:void 0,heigth:void 0}),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var e=function(){s({width:window.innerWidth,heigth:window.innerHeight})};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),c},j=c(0),b=function(e){var t=e.title,c=l().width;return Object(j.jsxs)("header",{className:"Header",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("div",{className:"plateform",children:c<768?Object(j.jsx)(i.c,{style:{fontSize:"23px"}}):c<992?Object(j.jsx)(i.d,{style:{fontSize:"23px"}}):Object(j.jsx)(i.b,{style:{fontSize:"40px"}})})]})},d=c(3),u=c(16),h=c(35),p=c(10),O=c.n(p),x=c(38),f=c(13),m=c(2),v=c(24),g=c(17),y=c.n(g),N=y.a.create({baseURL:"http://localhost:3500"}),w=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(null),i=Object(o.a)(a,2),l=i[0],j=i[1],b=Object(n.useState)(!1),d=Object(o.a)(b,2),u=d[0],h=d[1];return Object(n.useEffect)((function(){var t=!0,c=y.a.CancelToken.source(),n=function(){var e=Object(f.a)(O.a.mark((function e(n){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,y.a.get(n,{cancelToken:c.token});case 4:s=e.sent,t&&(r(s.data),j(null)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t&&(j(e.t0.message),r([]));case 11:return e.prev=11,t&&setTimeout((function(){return h(!1)}),2e3),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();n(e);return function(){console.log("Clean up function"),t=!1,c.cancel()}}),[e]),{data:s,fetchError:l,isLoading:u}},S=Object(n.createContext)({}),T=function(e){var t,c=e.children,s=Object(n.useState)(""),r=Object(o.a)(s,2),a=r[0],i=r[1],l=Object(n.useState)([]),b=Object(o.a)(l,2),d=b[0],p=b[1],g=Object(n.useState)([]),y=Object(o.a)(g,2),T=y[0],E=y[1],k=Object(n.useState)(""),P=Object(o.a)(k,2),C=P[0],B=P[1],F=Object(n.useState)(""),M=Object(o.a)(F,2),A=M[0],D=M[1],L=Object(n.useState)(""),H=Object(o.a)(L,2),z=H[0],R=H[1],q=Object(n.useState)(""),W=Object(o.a)(q,2),J=W[0],V=W[1],I=Object(m.f)(),U=w("http://localhost:3500/posts"),Y=U.data,_=U.fetchError,G=U.isLoading;function K(e){var t=e.getHours(),c=e.getMinutes(),n=t>=12?"PM":"AM";return(t=(t%=12)||12)+":"+(c=c<10?"0"+c:c)+" "+n}Object(n.useEffect)((function(){p(Y)}),[Y]),Object(n.useEffect)((function(){var e=d.filter((function(e){return e.body.toLowerCase().includes(a.toLowerCase())||e.title.toLowerCase().includes(a.toLowerCase())}));E(e.reverse())}),[d,a]);var Q=function(){var e=Object(f.a)(O.a.mark((function e(t){var c,n,s,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=d.length?d[d.length-1].id+1:1,n=Object(v.a)(new Date,"MMMM dd, yyyy ")+K(new Date),s={id:c,title:C,datetime:n,body:A},e.prev=4,e.next=7,N.post("/posts",s);case 7:r=e.sent,a=[].concat(Object(x.a)(d),[r.data]),p(a),B(""),D(""),I.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log("Error ".concat(e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(f.a)(O.a.mark((function e(t){var c,n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(v.a)(new Date,"MMMM dd, yyyy ")+K(new Date),n={id:t,title:z,datetime:c,body:J},e.prev=2,e.next=5,N.put("/posts/".concat(t),n);case 5:s=e.sent,p(d.map((function(e){return e.id===t?Object(h.a)({},s.data):e}))),R(""),V(""),I.push("/post/".concat(t)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("Error: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(f.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.delete("/posts/".concat(t));case 3:c=d.filter((function(e){return e.id!==t})),p(c),I.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error ".concat(e.t0.message,"!"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(S.Provider,{value:(t={search:a,setSearch:i,searchResults:T,fetchError:_,isLoading:G,handleSubmit:Q,postTitle:C,setPostTitle:B,postBody:A,setPostBody:D,posts:d,handleEdit:X,editBody:J,setEditBody:V,editTitle:z,setEditTitle:R},Object(u.a)(t,"posts",d),Object(u.a)(t,"handleDelete",Z),t),children:c})},E=S,k=function(){var e=Object(n.useContext)(E),t=e.search,c=e.setSearch;return Object(j.jsxs)("nav",{className:"Nav",children:[Object(j.jsxs)("form",{className:"searchForm",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("label",{htmlFor:"search",children:"Search Posts"}),Object(j.jsx)("input",{type:"text",id:"search",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(d.b,{to:"/post",children:Object(j.jsx)("li",{children:"Post"})}),Object(j.jsx)(d.b,{to:"/about",children:Object(j.jsx)("li",{children:"About"})})]})]})},P=function(){var e=new Date;return Object(j.jsx)("footer",{className:"Footer",children:Object(j.jsxs)("p",{children:["Copyright \xa9 ",e.getFullYear()]})})},C=function(e){var t=e.post;return Object(j.jsxs)("article",{className:"post",children:[Object(j.jsxs)(d.b,{to:"/post/".concat(t.id),children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{className:"postDate",children:t.datetime})]}),Object(j.jsx)("p",{className:"postBody",children:t.body.length<=50?t.body:"".concat(function(e){for(var t=e.split(" "),c="",n=0;n<10;n++)c=n<9?c+t[n]+" ":c+t[n];return c+="..."}(t.body))})]})},B=function(e){var t=e.posts;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(C,{post:e},e.id)}))})},F=function(){var e=Object(n.useContext)(E),t=e.searchResults,c=e.fetchError,s=e.isLoading;return Object(j.jsxs)("main",{className:"Home",children:[s&&Object(j.jsx)("p",{className:"statusMsg",style:{color:"gray"},children:"Loading..."}),!s&&c&&Object(j.jsx)("p",{className:"statusMsg",style:{color:"red"},children:c}),!s&&!c&&(t.length?Object(j.jsx)(B,{posts:t}):Object(j.jsx)("p",{className:"statusMsg",children:"No post is found"}))]})},M=function(){var e=Object(n.useContext)(E),t=e.handleSubmit,c=e.postTitle,s=e.setPostTitle,r=e.postBody,a=e.setPostBody;return Object(j.jsxs)("main",{className:"NewPost",children:[Object(j.jsx)("h2",{style:{fontSize:"25px"},children:"New Post"}),Object(j.jsxs)("form",{className:"newPostForm",onSubmit:t,children:[Object(j.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(j.jsx)("input",{type:"text",id:"postTitle",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"postBody",children:"Post:"}),Object(j.jsx)("textarea",{id:"postBody",required:!0,value:r,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("div",{className:"post-btn",children:Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("p",{children:"Submit"})})})]})]})},A=function(){var e=Object(n.useContext)(E),t=e.posts,c=e.handleEdit,s=e.editBody,r=e.setEditBody,a=e.editTitle,o=e.setEditTitle,l=Object(m.g)().id,b=t.find((function(e){return e.id.toString()===l}));return Object(n.useEffect)((function(){b&&(o(b.title),r(b.body))}),[b,o,r]),Object(j.jsxs)("main",{className:"NewPost",children:[a&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"back",style:{marginTop:"-12px"},children:Object(j.jsxs)(d.b,{to:"/post/".concat(l),style:{marginLeft:"-2px"},children:[Object(j.jsx)(i.a,{className:"arrowBack"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}),Object(j.jsx)("h2",{style:{fontSize:"25px"},children:"Edit Post"}),Object(j.jsxs)("form",{className:"newPostForm",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(j.jsx)("input",{type:"text",id:"postTitle",required:!0,value:a,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"postBody",children:"Post:"}),Object(j.jsx)("textarea",{id:"postBody",required:!0,value:s,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("div",{className:"post-btn",children:Object(j.jsx)("button",{type:"submit",onClick:function(){return c(b.id)},children:Object(j.jsx)("p",{children:"Save"})})})]})]}),!a&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("h3",{style:{textAlign:"center"},children:"Post Not Found"}),Object(j.jsx)("p",{style:{textAlign:"center"},children:"Well, that's disappointing."}),Object(j.jsx)("p",{style:{textAlign:"center"},children:Object(j.jsx)(d.b,{to:"/",children:"Visit Homepage"})})]})]})},D=function(){var e=Object(n.useContext)(E),t=e.posts,c=e.handleDelete,s=Object(m.g)().id,r=t.find((function(e){return e.id.toString()===s}));return Object(j.jsx)("main",{className:"PostPage",children:Object(j.jsxs)("article",{className:"post",children:[r&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"back",style:{marginTop:"-30px"},children:Object(j.jsxs)(d.b,{to:"/",children:[Object(j.jsx)(i.a,{className:"arrowBack"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}),Object(j.jsxs)("div",{className:"postTitle",children:[Object(j.jsx)("div",{className:"postTitle_head",children:Object(j.jsx)("h2",{children:r.title})}),Object(j.jsxs)("div",{className:"postTool",children:[Object(j.jsx)(d.b,{to:"/edit/".concat(r.id),className:"editButton",children:"Edit"}),Object(j.jsx)("button",{onClick:function(){return c(r.id)},title:"Delete",children:Object(j.jsx)(i.e,{})})]})]}),Object(j.jsx)("p",{className:"postDate",children:r.datetime}),Object(j.jsx)("p",{className:"postBody",children:r.body})]}),!r&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("h3",{style:{textAlign:"center"},children:"Post Not Found"}),Object(j.jsx)("p",{style:{textAlign:"center"},children:"Well, that's disappointing."}),Object(j.jsx)("p",{style:{textAlign:"center"},children:Object(j.jsx)(d.b,{to:"/",children:"Visit Homepage"})})]})]})})},L=function(){return Object(j.jsxs)("main",{className:"About",children:[Object(j.jsx)("h2",{children:"About"}),Object(j.jsx)("p",{style:{marginTop:"1rem"},children:"This blog app is a project in the learn React tutorial series."})]})},H=function(){return Object(j.jsxs)("main",{className:"Missing",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h3",{style:{textAlign:"center",color:"black"},children:"Post Not Found"}),Object(j.jsx)("p",{style:{textAlign:"center",color:"black"},children:"Well, that's disappointing."}),Object(j.jsx)("p",{style:{textAlign:"center"},children:Object(j.jsx)(d.b,{to:"/",children:"Visit Homepage"})})]})};var z=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{title:"React JS Blog"}),Object(j.jsxs)(T,{children:[Object(j.jsx)(k,{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:"/",component:F}),Object(j.jsx)(m.a,{exact:!0,path:"/post",component:M}),Object(j.jsx)(m.a,{path:"/edit/:id",component:A}),Object(j.jsx)(m.a,{path:"/post/:id",component:D}),Object(j.jsx)(m.a,{path:"/about",component:L}),Object(j.jsx)(m.a,{path:"*",component:H})]})]}),Object(j.jsx)(P,{})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(m.a,{path:"/",component:z})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.64b72ea2.chunk.js.map