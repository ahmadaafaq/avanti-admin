(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{26:function(e,n,a){"use strict";a.d(n,"b",function(){return r});var r={blue:"#2E9AD7",blue2:"#639ebc",blue3:"#0097cf",blue4:"#59afdf",blue5:"#70a6b9",blue6:"#52BDEC",blue7:"#005B81",gray:"#9c9c9c",gray2:"#5F5F5F",gray3:"#aaa",gray4:"#bbb",gray5:"#8c8c8c",lightGray:"#ededed",lightGray2:"#ececec",lightGray3:"#ccc",lightGray4:"#ebebeb",lightGray5:"#d5d5d5",lightGray6:"#eee",lightGray7:"#717171",lightGray8:"#A0A0A0",darkGray:"#333",darkGray2:"#444",darkGray3:"#555",darkGray4:"#666",darkGray5:"#808080",darkGray6:"#545454",darkGray7:"#676767",darkGray8:"#4a4a4a",yellow:"#F1C40F",yellow2:"#F0AD4E",white:"#fff",black:"#000",black2:"#0e1112",black3:"#101314",green:"#5CB85C",red:"#ED4B4B",red2:"#a94442",red3:"#BF1313",pink:"#f2dede",pink2:"#ebccd1",orange:"#EC7520"};n.a={backgroundColors:{blue:{transparent:"rgba(46, 154, 215, .1)",solid:"#2E9AD7"},green:{transparent:"rgba(92,184,92,.1)",solid:""},gray:{transparent:"rgba(255,255,255, 0.15)",solid:""},lightGray:{transparent:"hsla(0,0%,80%,.1)",solid:"#ededed"},red:{transparent:"rgba(237, 75, 75, 0.1)",solid:""},transparent:"transparent",white:"#fff"},borderColors:{blue:{transparent:"rgba(46, 154, 215, 0.5)",solid:"#639ebc"},green:{transparent:"rgba(92,184,92,.5)",solid:""},gray:{transparent:"rgba(68, 68, 68, 0.5)",solid:"#9c9c9c"},lightGray:{transparent:"hsla(0,0%,80%,.5)",solid:"#ececec"},red:{transparent:"rgba(237, 75, 75, 0.5)",solid:""},transparent:"transparent",white:"#fff"},fontColors:{black:"#000",black2:"#454545",blue:"#2E9AD7",darkGray:"#333",green:"#5CB85C",gray:"#5F5F5F",lightGray:"#ccc",lighterGray:"#ebebeb",midGray:"#aaa",red:"#ED4B4B",transparent:"transparent",white:"#fff"},hoverColors:{blue:"",green:"",gray:"",red:"",transparent:"transparent",white:"#fff"}}},31:function(e,n,a){"use strict";a.r(n);var r=a(4),t=a(5),c=a(8),i=a(6),b=a(7),s=a(0),l=a(1),o=a(2),d=a(26);function u(){var e=Object(o.a)(["\n    h1, h2, h3, h4, h5, h6 {\n        ",";\n    }\n    h1 {\n        ","\n        color: ",";\n    }\n    h2 {\n        ","\n    }\n    h3 {\n        ","\n    }\n    h4 {\n        ","\n    }\n    p {\n        ","\n        margin: 0 0 1em;\n    }\n    a {\n        ",";\n        color: ",";\n        font-size: 16px;\n        line-height: 24px;\n        font-size: 0.9375rem;\n        line-height: 1.5rem;\n        text-decoration: none;\n        transition: color 0.15s ease;\n\n        &:hover {\n            color: ",";\n        }\n    }\n"]);return u=function(){return e},e}function f(){var e=Object(o.a)(["\n        margin: 0 0 1em;\n        font-family: ",";\n        font-weight: ",";\n        letter-spacing: .05em;\n        text-transform: uppercase;\n    "]);return f=function(){return e},e}function p(){var e=Object(o.a)(["\n        color: ",";\n        font-family: ",";\n        ","\n    "]);return p=function(){return e},e}function j(){var e=Object(o.a)(["\n        font-size: ","px;\n        line-height: ","px;\n        font-size: ","rem;\n        line-height: ","rem;\n    "]);return j=function(){return e},e}var O=function(e,n){var a=n||1.5*e;return Object(s.a)(j(),16*e,16*a,e,a)},v='"proxima-nova", Arial, sans-serif',g='"brandon-grotesque", Helvetica, sans-serif',h="400",m={body:Object(s.a)(p(),d.a.fontColors.lighterGray,v,O(1,1.25)),headers:Object(s.a)(f(),g,h)};Object(s.a)(u(),m.headers,O(1.6,2),d.b.white,O(1.3,1.6),O(1.1,1.3),O(.9,1),O(.9375,1.5),m.body,d.a.fontColors.blue,d.b.blue4);function y(){var e=Object(o.a)(["{\n  .dashboard-overview {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));\n    grid-auto-rows: 94px;\n    grid-gap: 20px;\n    margin: 20px;\n  }\n  \n  .overviewcard {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: rgba(0,128,0,0.9);\n\n    .card-icon {\n      align-content: center;\n      padding: 5px;\n    }\n\n    .card-info {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n      color: #fff;\n      padding: 5px; \n      ","\n      font-weight: ",";\n      font-family: ",";\n    }\n  }\n"]);return y=function(){return e},e}var w=Object(s.a)(y(),O(1.2),h,g),N=a(3),k=function(e){function n(){return Object(r.a)(this,n),Object(c.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(t.a)(n,[{key:"render",value:function(){return Object(s.b)("div",{className:"dashboard",css:w},Object(s.b)("div",{className:"dashboard-overview"},Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.k,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"User"),Object(s.b)("span",null,"500"))),Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.d,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"Bus"),Object(s.b)("span",null,"500"))),Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.i,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"Driver"),Object(s.b)("span",null,"500"))),Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.c,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"Student"),Object(s.b)("span",null,"500"))),Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.l,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"Parent"),Object(s.b)("span",null,"500"))),Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.a,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"Pickup"),Object(s.b)("span",null,"500"))),Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.g,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"Route"),Object(s.b)("span",null,"500"))),Object(s.b)("div",{className:"overviewcard"},Object(s.b)("div",{className:"card-icon"},Object(s.b)(N.f,{size:"40",color:"white"})),Object(s.b)("div",{className:"card-info"},Object(s.b)("span",null,"Payment"),Object(s.b)("span",null,"500")))))}}]),n}(l.Component);n.default=k}}]);
//# sourceMappingURL=2.a05e6195.chunk.js.map