(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={section:"App_section__3quZ1"}},18:function(t,e,n){},19:function(t,e,n){t.exports={btn:"Button_btn__4JJNb","btn-good":"Button_btn-good__W7dMq","btn-neutral":"Button_btn-neutral__1TeUS","btn-bad":"Button_btn-bad__2aMY2"}},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),i=n(4),r=n.n(i),s=(n(18),n(5)),b=n(6),l=n(7),u=n(12),d=n(11),j=(n(19),function(t){var e=t.title,n=t.action,c=t.className;return Object(a.jsx)("button",{type:"button","data-action":n,className:c,children:e})}),h=n(8),O=n.n(h),g=n(9),x=n.n(g),f=[{action:"good",title:"Good",variant:"btn btn-good"},{action:"neutral",title:"Neutral",variant:"btn btn-neutral"},{action:"bad",title:"Bad",variant:"btn btn-bad"}],p=function(t){var e=t.handleClick;return Object(a.jsx)("ul",{className:x.a.buttonSet,onClick:e,children:f.map((function(t){return Object(a.jsx)("li",{children:Object(a.jsx)(j,{title:t.title,action:t.action,className:t.variant})},O.a.generate())}))})},v=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{children:"No feedback given"})})},_=function(t){var e=t.total,n=t.good,c=t.bad,o=t.neutral,i=t.positivePercentage;return Object(a.jsx)(a.Fragment,{children:e?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Good: ",n]}),Object(a.jsxs)("p",{children:["Neutral: ",o]}),Object(a.jsxs)("p",{children:["Bad: ",c]}),Object(a.jsxs)("p",{children:["Total: ",e]}),Object(a.jsxs)("p",{children:["Positive feedback: ",i,"%"]})]}):Object(a.jsx)(v,{})})},k=n(10),m=n.n(k),N=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onClick=function(e){var n=e.target;"BUTTON"===n.nodeName&&t.setState((function(t){return Object(s.a)({},n.dataset.action,t[n.dataset.action]+1)}))},t.countTotal=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return t.countTotal()?Math.round(t.state.good/t.countTotal()*100):0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("section",{className:m.a.section,children:[Object(a.jsx)("h2",{children:"Please leave feedback"}),Object(a.jsx)(p,{handleClick:this.onClick}),Object(a.jsx)("h2",{children:"Statistics"}),Object(a.jsx)(_,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotal(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={buttonSet:"ButtonSet_buttonSet__3qVhb"}}},[[28,1,2]]]);
//# sourceMappingURL=main.4679506d.chunk.js.map