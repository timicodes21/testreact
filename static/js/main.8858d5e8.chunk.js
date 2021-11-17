(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),i=c(15),r=c.n(i),s=(c(22),c(7)),o=c(0),j=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{children:"The Blog Blog"}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(s.b,{to:"/",children:"Home"}),Object(o.jsx)(s.b,{to:"/create",children:"New Blog"})]})]})},a=function(e){var t=e.blogs,c=e.title;return Object(o.jsxs)("div",{className:"blog-list",children:[Object(o.jsx)("h2",{children:c}),t.map((function(e){return Object(o.jsx)("div",{className:"blog-preview",children:Object(o.jsxs)(s.b,{to:"/blogs/".concat(e.id),children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),l=c[0],i=c[1],r=Object(n.useState)(!0),s=Object(b.a)(r,2),o=s[0],j=s[1],a=Object(n.useState)(null),d=Object(b.a)(a,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){i(e),j(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(j(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:l,isPending:o,error:h}},h=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.isPending,n=e.error;return Object(o.jsxs)("div",{className:"home",children:[c&&Object(o.jsx)("div",{children:"Loading......."}),n&&Object(o.jsx)("div",{children:n}),t&&Object(o.jsx)(a,{blogs:t,title:"All blogs"})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],l=t[1],i=Object(n.useState)(""),r=Object(b.a)(i,2),s=r[0],j=r[1],a=Object(n.useState)("Timileyin"),d=Object(b.a)(a,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=g[0],v=g[1],p=Object(u.f)();return Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("h2",{children:"Add a new Blog"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:s,author:h};v(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added"),v(!1),p.push("/")}))},children:[Object(o.jsx)("label",{children:"Blog Title:"}),Object(o.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("label",{children:"Blog Body:"}),Object(o.jsx)("textarea",{required:!0,value:s,onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("label",{children:"Blog Author:"}),Object(o.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(o.jsx)("option",{value:"Timileyin",children:"Timileyin"}),Object(o.jsx)("option",{value:"Ademola",children:"Ademola"}),Object(o.jsx)("option",{value:"Olumide",children:"Olumide"}),Object(o.jsx)("option",{value:"Ajibola",children:"Ajibola"})]}),!f&&Object(o.jsx)("button",{children:"Add Blog"}),f&&Object(o.jsx)("button",{disabled:!0,children:"Adding blog..."})]})]})},x=function(){var e=Object(u.g)().id,t=Object(u.f)(),c=d("http://localhost:8000/blogs/"+e),n=c.data,l=c.isPending,i=c.error;return Object(o.jsxs)("div",{className:"blog-details",children:[l&&Object(o.jsx)("div",{children:"Loading......."}),i&&Object(o.jsx)("div",{children:i}),n&&Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:n.title}),Object(o.jsxs)("p",{children:["Written by ",n.author]}),Object(o.jsx)("div",{children:n.body}),Object(o.jsx)("button",{onClick:function(e){fetch("http://localhost:8000/blogs/"+n.id,{method:"DELETE"}).then((function(){t.push("/")}))},children:"delete"})]})]})},g=function(){return Object(o.jsxs)("div",{className:"not-found",children:[Object(o.jsx)("h2",{children:"Sorry"}),Object(o.jsx)("p",{children:"That page Cannot be found"}),Object(o.jsx)(s.b,{to:"/",children:"Back to the Homepage"})]})};var f=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(h,{})}),Object(o.jsx)(u.a,{path:"/create",children:Object(o.jsx)(O,{})}),Object(o.jsx)(u.a,{path:"/blogs/:id",children:Object(o.jsx)(x,{})}),Object(o.jsx)(u.a,{path:"*",children:Object(o.jsx)(g,{})})]})})]})})};r.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8858d5e8.chunk.js.map