"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244],{7911:function(t,e,n){var r=n(7689),u=n(1087),i=n(184);e.Z=function(t){var e=t.results,n=t.parent,s=null,a=(0,r.TH)();switch(n){case"home":default:s="movies/";break;case"movies":s=""}return(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:s+t.id,state:{from:a},children:t.title?t.title:t.name})},t.id)}))})}},5244:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r,u=n(9439),i=n(7911),s=n(2791),a=n(168),c=n(5706).Z.form(r||(r=(0,a.Z)(["\n  & button {\n    margin-left: 20px;\n  }\n"]))),l=n(184),o=function(t){var e=t.submit,n=(t.value,(0,s.useState)("")),r=(0,u.Z)(n,2),i=r[0],a=r[1];return(0,l.jsxs)(c,{onSubmit:function(t){t.preventDefault(),e(i)},children:[(0,l.jsx)("input",{type:"text",name:"query",value:i,onChange:function(t){a(t.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})},f=n(9458),h=n(1087),m=n(3426),v=function(){var t,e=(0,s.useState)([]),n=(0,u.Z)(e,2),r=n[0],a=n[1],c=(0,h.lr)(),v=(0,u.Z)(c,2),d=v[0],p=v[1],x=(0,s.useState)(!0),j=(0,u.Z)(x,2),Z=j[0],b=j[1],g=(0,s.useState)(!1),k=(0,u.Z)(g,2),w=k[0],y=k[1],S=null!==(t=d.get("query"))&&void 0!==t?t:"";return(0,s.useEffect)((function(){""!==S&&(0,f.MK)(S).then((function(t){var e=t.results;a(e)})).catch((function(t){return y(!0)})).finally((function(){return b(!1)}))}),[S]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Movies"}),(0,l.jsx)(o,{submit:function(t){p({query:t}),(0,f.MK)(t).then((function(t){var e=t.results;a(e)})).catch((function(t){return y(!0)})).finally((function(){return b(!1)}))}}),Z&&S&&(0,l.jsx)(m.Z,{}),r.length>0&&(0,l.jsx)(i.Z,{results:r,parent:"movies"}),w&&(0,l.jsx)("p",{children:"Something went wrong..."})]})}}}]);
//# sourceMappingURL=244.1b3d29dd.chunk.js.map