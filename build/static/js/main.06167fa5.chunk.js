(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var c=n(18),s=n(19),i=n(20),a=n(25),r=n(0),j=n.n(r),l=n(7),b=n.n(l),o=n(50),u=n(9),d=n(24),h=n(32),O=function(e){var t=Object(r.useState)({}),n=Object(u.a)(t,2),c=n[0],s=n[1];return{handleChange:function(e){e.persist(),console.log("CHANGE",e.target.name),s((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t.preventDefault(),e(c)},values:c}},m=n(1),x=j.a.createContext(),f=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={itemsPerPage:2,sort:"Ascending",show:!0},s}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)(x.Provider,{value:this.state,children:this.props.children})}}]),n}(r.Component),p=n(138),g=n(10);function v(e){var t=Object(r.useContext)(x),n=Object(r.useState)(1),c=Object(u.a)(n,2),s=c[0],i=c[1],a=Object(r.useState)((t.show?e.list:e.incomplete).slice(0,t.itemsPerPage)),j=Object(u.a)(a,2),l=j[0],b=j[1],o=Object(r.useState)(Math.ceil(e.list.length/t.itemsPerPage)),d=Object(u.a)(o,2),h=d[0],O=d[1];Object(r.useEffect)((function(){b((t.show?e.list:e.incomplete).slice(0,t.itemsPerPage)),O(Math.ceil((t.show?e.list:e.incomplete).length/t.itemsPerPage))}),[e.list,e.incomplete]),Object(r.useEffect)((function(){var n=(s-1)*t.itemsPerPage,c=n+t.itemsPerPage;b((t.show?e.list:e.incomplete).slice(n,c))}),[s,t.itemsPerPage]);var f=function(e){e!==s&&i(e)},v=function(){var e=[];s>1&&e.push(Object(m.jsx)(p.a,{class:"@ns-button",type:"button",onClick:function(){f(s-1)},children:"previous"}));for(var t=function(t){e.push(Object(m.jsx)(p.a,{class:"@ns-button",type:"button",onClick:function(){f(t)},children:t},t))},n=1;n<=h;n++)t(n);return s<=h&&e.push(Object(m.jsx)(p.a,{class:".bp3-active",type:"button",onClick:function(){f(s+1)},children:"next"})),Object(m.jsxs)("div",{className:"pages",children:[" ",e," "]})};return Object(m.jsxs)("div",{children:[Object(m.jsxs)(p.b,{className:"mainItem2",children:[Object(m.jsx)("h3",{className:"list",children:"Items List"}),l.map((function(t){return Object(m.jsxs)(p.b,{className:"listCard",interactive:!0,elevation:g.a.THREE,children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:[t.text," "]})}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Assigned to"})," : ",t.assignee]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Difficulty"})," : ",t.difficulty]}),Object(m.jsxs)(p.a,{class:"@ns-button",type:"button",className:t.complete?"bp3-intent-success":"bp3-intent-danger",onClick:function(){return e.toggleComplete(t.id)},children:["Complete : ",t.complete.toString()]})]},t.id)}))]}),Object(m.jsx)(v,{})]})}var C=n(139);function P(e){var t=e.handleSubmit,n=e.handleChange;return Object(m.jsxs)(p.b,{className:"mainItem",interactive:!0,children:[Object(m.jsx)("h3",{class:"list",children:"Add new Task "}),Object(m.jsx)("br",{}),Object(m.jsx)("form",{onSubmit:t,children:Object(m.jsxs)(p.c,{labelFor:"text-input",labelInfo:"(required)",children:[Object(m.jsx)("label",{children:Object(m.jsx)("b",{children:"Task :"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(p.d,{onChange:n,name:"text",id:"text-input",placeholder:"Item Details"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{children:Object(m.jsx)("b",{children:"Assigned To:"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(p.d,{onChange:n,name:"assignee",id:"text-input",placeholder:"Assignee Name"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"diff",children:[Object(m.jsx)("lable",{children:Object(m.jsx)("b",{children:"Difficulty"})}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{onChange:n,defaultValue:2,type:"range",min:1,max:5,name:"difficulty"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(p.a,{className:"button",type:"submit",children:"Add Task"})})]})})]})}var y=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),i=Object(u.a)(s,2),a=i[0],j=i[1],l=O((function(e){e.id=Object(C.a)(),e.complete=!1,c([].concat(Object(o.a)(n),[e]))})),b=l.handleChange,d=l.handleSubmit;return Object(r.useEffect)((function(){var e=n.filter((function(e){return!e.complete}));j(e),document.title="To Do List: ".concat(a.length)}),[n]),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("h3",{id:"h2",children:["Number of Pending Tasks (",a.length,")"]}),Object(m.jsxs)("div",{className:"mainCards",children:[Object(m.jsx)(P,{handleChange:b,handleSubmit:d}),Object(m.jsx)(v,{incomplete:a,list:n,toggleComplete:function(e){var t=n.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));c(t)}})]})]})};function N(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(p.e,{className:"header",children:[Object(m.jsx)("br",{}),Object(m.jsxs)(p.e.Group,{"top-margin":10,children:[Object(m.jsx)(p.e.Heading,{children:Object(m.jsx)("h2",{children:"home"})}),Object(m.jsx)(p.e.Divider,{})]})]})})}var S=function(){return Object(m.jsx)("footer",{children:"\xa9 Shams Alsaraireh"})};n(131);var k=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(f,{children:[Object(m.jsx)(N,{}),Object(m.jsx)(y,{})]}),Object(m.jsx)(S,{})]})},w=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)(k,{})}}]),n}(j.a.Component),A=document.getElementById("root");b.a.render(Object(m.jsx)(w,{}),A)}},[[132,1,2]]]);
//# sourceMappingURL=main.06167fa5.chunk.js.map