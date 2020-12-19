(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(16),i=n.n(s),l=n(4),u=n(9),j=n(2),o=n.p+"static/media/logo.5bb78912.png";n(23);var b=function(){return Object(a.jsx)("header",{className:"Header",children:Object(a.jsx)("img",{className:"Header__img",src:o,alt:"Logo"})})};n(24);var d=function(e){var t=e.handlePredefinedSettings,n=function(e){if("3"===e.currentTarget.id){t({minutes:"3",seconds:"2"})}else if("5"===e.currentTarget.id){t({minutes:"5",seconds:"3"})}else if("10"===e.currentTarget.id){t({minutes:"10",seconds:"10"})}};return Object(a.jsxs)("section",{className:"PredefinedSettings",children:[Object(a.jsx)("h3",{className:"PredefinedSettings__title",children:"Predefined options"}),Object(a.jsxs)("div",{className:"PredefinedSettings__wrapper",children:[Object(a.jsx)("button",{className:"PredefinedSettings__button",id:"3",onClick:n,children:"3 + 2"}),Object(a.jsx)("button",{className:"PredefinedSettings__button",id:"5",onClick:n,children:"5 + 3"}),Object(a.jsx)("button",{className:"PredefinedSettings__button",id:"10",onClick:n,children:"10 + 10"})]})]})};var h=function(e){var t=e.totalMinutes,n=e.handleInputChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"SetupForm__label SetupForm__label--short",htmlFor:"totalMinutes",children:"Minutes for each player"}),Object(a.jsx)("input",{className:"SetupForm__input",id:"totalMinutes",type:"number",name:"totalMinutes",value:t,onChange:function(e){var t={name:e.currentTarget.id,value:e.currentTarget.value};n(t)}})]})};var m=function(e){var t=e.incAfterEachPlay,n=e.handleInputChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"SetupForm__label",htmlFor:"incAfterEachPlay",children:"Increment of seconds after each play"}),Object(a.jsx)("input",{className:"SetupForm__input",id:"incAfterEachPlay",type:"number",name:"incAfterEachPlay",value:t,onChange:function(e){var t={name:e.currentTarget.id,value:e.currentTarget.value};n(t)}})]})};var p=function(e){var t=e.playNumber,n=e.handleInputChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"SetupForm__label SetupForm__label--short",htmlFor:"playNumber",children:"Play number"}),Object(a.jsx)("input",{className:"SetupForm__input",id:"playNumber",type:"number",name:"playNumber",value:t,onChange:function(e){var t={name:e.currentTarget.id,value:e.currentTarget.value};n(t)}})]})};var O=function(e){var t=e.incOfMinutes,n=e.handleInputChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"SetupForm__label",htmlFor:"incOfMinutes",children:"Increment of minutes at selected play"}),Object(a.jsx)("input",{className:"SetupForm__input",id:"incOfMinutes",type:"number",name:"incOfMinutes",value:t,onChange:function(e){var t={name:e.currentTarget.id,value:e.currentTarget.value};n(t)}})]})};n(25);var f=function(e){var t=e.totalMinutes,n=e.incAfterEachPlay,c=e.playNumber,r=e.incOfMinutes,s=e.isClicked,i=e.handleInputChange,u=e.handleReset;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"SetupForm__title",children:"Personalized options"}),Object(a.jsxs)("form",{className:"SetupForm",children:[Object(a.jsxs)("div",{className:"SetupForm__wrapper SetupForm__wrapper--up",children:[Object(a.jsx)(h,{totalMinutes:t,handleInputChange:i}),Object(a.jsx)(m,{incAfterEachPlay:n,handleInputChange:i})]}),Object(a.jsxs)("div",{className:"SetupForm__wrapper SetupForm__wrapper--down",children:[Object(a.jsx)(p,{playNumber:c,handleInputChange:i}),Object(a.jsx)(O,{incOfMinutes:r,handleInputChange:i})]}),Object(a.jsxs)("div",{className:"SetupForm__wrapper--button",children:[s?Object(a.jsx)("button",{className:"SetupForm__button",type:"button",children:Object(a.jsx)(l.b,{className:"SetupForm__button--link",to:"/colours",children:"Next"})}):Object(a.jsx)("button",{className:"SetupForm__button SetupForm__button--disabled",type:"button",disabled:!0,children:"Next"}),Object(a.jsx)("button",{className:"SetupForm__button",type:"button",onClick:function(){u()},children:"Reset"})]})]})]})};n(31);var x=function(e){var t=e.totalMinutes,n=e.incAfterEachPlay,c=e.playNumber,r=e.incOfMinutes,s=e.isClicked,i=e.handleInputChange,l=e.handlePredefinedSettings,u=e.handleReset;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"Landing__title",children:"Step 1: configure your game"}),Object(a.jsx)(d,{handlePredefinedSettings:l}),Object(a.jsx)(f,{totalMinutes:t,incAfterEachPlay:n,playNumber:c,incOfMinutes:r,isClicked:s,handleInputChange:i,handleReset:u})]})};var g=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("p",{children:"Who plays with whites?"}),Object(a.jsx)("article",{children:Object(a.jsx)(l.b,{to:"/whites-left",children:"Left player"})}),Object(a.jsx)("article",{children:Object(a.jsx)(l.b,{to:"/whites-right",children:"Right player"})}),Object(a.jsx)(l.b,{to:"/",children:"Go back"})]})};var _=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Whites left"}),Object(a.jsx)(l.b,{to:"/colours",children:"Go back"})]})};var v=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Whites left"}),Object(a.jsx)(l.b,{to:"/colours",children:"Go back"})]})};n(32);var N=function(){return Object(a.jsx)("footer",{className:"Footer",children:Object(a.jsx)("p",{children:"Developed in React by Eva Ferreras"})})};n(33);var y=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)(""),h=Object(u.a)(d,2),m=h[0],p=h[1],O=Object(c.useState)(""),f=Object(u.a)(O,2),y=f[0],S=f[1],F=Object(c.useState)(!1),C=Object(u.a)(F,2),P=C[0],M=C[1];return Object(c.useEffect)((function(){M(!!(n&&l&&m&&y))}),[n,l,m,y]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{}),Object(a.jsx)(j.c,{children:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{className:"App",children:[Object(a.jsx)("h1",{className:"App__title",children:"Chess clock"}),Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(x,{totalMinutes:n,incAfterEachPlay:l,playNumber:m,incOfMinutes:y,isClicked:P,handleInputChange:function(e){"totalMinutes"===e.name?r(e.value):"incAfterEachPlay"===e.name?o(e.value):"playNumber"===e.name?p(e.value):"incOfMinutes"===e.name&&S(e.value)},handlePredefinedSettings:function(e){r(e.minutes),o(e.seconds),p("0"),S("0")},handleReset:function(){r(""),o(""),p(""),S(""),M(!1)}})}),Object(a.jsx)(j.a,{path:"/colours",children:Object(a.jsx)(g,{})}),Object(a.jsx)(j.a,{path:"/whites-left",children:Object(a.jsx)(_,{})}),Object(a.jsx)(j.a,{path:"/whites-right",children:Object(a.jsx)(v,{})})]})})}),Object(a.jsx)(N,{})]})};n(34);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(y,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a66c9441.chunk.js.map