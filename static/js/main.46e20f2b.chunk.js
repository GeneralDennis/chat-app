(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),c=a(11),r=a.n(c),i=(a(16),a(7)),u=(a(17),a(9));u.a.initializeApp({apiKey:"AIzaSyBLt8azOW8jAl21zcewtd-IZpsTSvZmQD4",authDomain:"test-a204f.firebaseapp.com",databaseURL:"https://test-a204f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"test-a204f",storageBucket:"test-a204f.appspot.com",messagingSenderId:"762800053556",appId:"1:762800053556:web:4fe95a1074e6f855e25961",measurementId:"G-YYZVL9NRVD"});var l=u.a,o=(a(10),a(2));function d(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(i.a)(c,2),u=r[0],d=r[1],j=Object(s.useState)(""),b=Object(i.a)(j,2),m=b[0],f=b[1];return Object(o.jsxs)("form",{className:"message-form",children:[Object(o.jsxs)("div",{className:"text-field",children:[Object(o.jsx)("textarea",{type:"text",value:a,onChange:function(e){return n(e.target.value)}}),m&&m.el.length>0&&"message"===m.el?Object(o.jsx)("div",{className:"error",children:m.text}):""]}),Object(o.jsxs)("div",{className:"text-field",children:[Object(o.jsx)("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)}}),m&&m.el.length>0&&"author"===m.el?Object(o.jsx)("div",{className:"error",children:m.text}):""]}),Object(o.jsx)("div",{className:"text-field",children:Object(o.jsx)("button",{type:"button",onClick:function(e){!function(){var e=l.database().ref("Messages"),t={message:a,author:u};a.length>0?u.length>0?(e.push(t),n(""),d(""),f("")):f({text:"Field Must be not empty",el:"author"}):f({text:"Field Must be not empty",el:"message"})}()},children:"Add"})})]})}function j(e){var t=e.messages;return Object(o.jsx)("div",{className:"messages",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"message",children:[Object(o.jsxs)("div",{className:"message__author",children:["from: ",e.author]}),Object(o.jsx)("div",{className:"message__text",children:e.message})]},t.toString())}))})}var b=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){l.database().ref("Messages").on("value",(function(e){var t=e.val(),a=[];for(var s in t)a.push(t[s]);n(a)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{messages:a}),Object(o.jsx)(d,{})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()}},[[23,1,2]]]);
//# sourceMappingURL=main.46e20f2b.chunk.js.map