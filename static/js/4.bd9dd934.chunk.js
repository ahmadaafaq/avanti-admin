(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{25:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i});var a=n(9);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch(Object(a.c)("http://localhost:8000/api/".concat(t),n),{method:"".concat(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){if(200===t.code)return t.data}).catch(function(t){return console.log(t)})}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST",n=arguments.length>2?arguments[2]:void 0;return fetch("http://localhost:8000/api/".concat(t),{method:"".concat(e),body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){return 200===t.code}).catch(function(t){return console.log(t)})}function i(t,e,n){return fetch("http://localhost:8000/api/".concat(t,"/").concat(n),{method:"PUT",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){return 200===t.code}).catch(function(t){return console.log(t)})}},26:function(t,e,n){"use strict";n.d(e,"b",function(){return a});var a={blue:"#2E9AD7",blue2:"#639ebc",blue3:"#0097cf",blue4:"#59afdf",blue5:"#70a6b9",blue6:"#52BDEC",blue7:"#005B81",gray:"#9c9c9c",gray2:"#5F5F5F",gray3:"#aaa",gray4:"#bbb",gray5:"#8c8c8c",lightGray:"#ededed",lightGray2:"#ececec",lightGray3:"#ccc",lightGray4:"#ebebeb",lightGray5:"#d5d5d5",lightGray6:"#eee",lightGray7:"#717171",lightGray8:"#A0A0A0",darkGray:"#333",darkGray2:"#444",darkGray3:"#555",darkGray4:"#666",darkGray5:"#808080",darkGray6:"#545454",darkGray7:"#676767",darkGray8:"#4a4a4a",yellow:"#F1C40F",yellow2:"#F0AD4E",white:"#fff",black:"#000",black2:"#0e1112",black3:"#101314",green:"#5CB85C",red:"#ED4B4B",red2:"#a94442",red3:"#BF1313",pink:"#f2dede",pink2:"#ebccd1",orange:"#EC7520"};e.a={backgroundColors:{blue:{transparent:"rgba(46, 154, 215, .1)",solid:"#2E9AD7"},green:{transparent:"rgba(92,184,92,.1)",solid:""},gray:{transparent:"rgba(255,255,255, 0.15)",solid:""},lightGray:{transparent:"hsla(0,0%,80%,.1)",solid:"#ededed"},red:{transparent:"rgba(237, 75, 75, 0.1)",solid:""},transparent:"transparent",white:"#fff"},borderColors:{blue:{transparent:"rgba(46, 154, 215, 0.5)",solid:"#639ebc"},green:{transparent:"rgba(92,184,92,.5)",solid:""},gray:{transparent:"rgba(68, 68, 68, 0.5)",solid:"#9c9c9c"},lightGray:{transparent:"hsla(0,0%,80%,.5)",solid:"#ececec"},red:{transparent:"rgba(237, 75, 75, 0.5)",solid:""},transparent:"transparent",white:"#fff"},fontColors:{black:"#000",black2:"#454545",blue:"#2E9AD7",darkGray:"#333",green:"#5CB85C",gray:"#5F5F5F",lightGray:"#ccc",lighterGray:"#ebebeb",midGray:"#aaa",red:"#ED4B4B",transparent:"transparent",white:"#fff"},hoverColors:{blue:"",green:"",gray:"",red:"",transparent:"transparent",white:"#fff"}}},27:function(t,e,n){"use strict";var a=n(4),r=n(5),o=n(8),i=n(6),c=n(7),s=n(10),l=n(0),d=n(1),p=n(9),u=n(2);function b(){var t=Object(u.a)(["\n  padding: 2px;\n  background-color: ",";\n  border: 2px solid #fff;\n  color: #fff;\n  font-weight: 800;\n"]);return b=function(){return t},t}var h=function(t){return Object(l.a)(b(),t)},f=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return Object(l.b)("button",{className:this.props.className,css:h(this.props.color),onClick:this.props.clickHandler},this.props.text)}}]),e}(d.Component);function m(){var t=Object(u.a)(["\n  padding: 2px;\n"]);return m=function(){return t},t}var g=Object(l.a)(m()),v=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return Object(l.b)("input",{className:this.props.classname,placeholder:this.props.placeholder,css:g,onKeyUp:this.props.keyUpHandler()})}}]),e}(d.Component),y=n(11);function j(){var t=Object(u.a)(["\n    width: 25%;\n    float: right;\n  "]);return j=function(){return t},t}function O(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #212121;\n  color: #fff;\n  width: 100%;\n  margin-top: 20px;\n  cursor: pointer;\n  border: 2px solid rgba(0, 128, 0, 0.9);\n\n  .table-page {\n    padding: 5px;\n    border-right: 1px solid white;\n    flex-grow: 1;\n    margin-left: 13px;\n\n    &:nth-of-type(7) {\n      border-right: 0px;\n    }\n  }\n\n  ","\n"]);return O=function(){return t},t}var x=Object(l.a)(O(),y.a.tabletUp(Object(l.a)(j()))),k=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return Object(l.b)("div",{className:"table-pagination",css:x},Object(l.b)("div",{className:"table-page"},"Prev"),Object(l.b)("div",{className:"table-page"},"1"),Object(l.b)("div",{className:"table-page"},"2"),Object(l.b)("div",{className:"table-page"},"3"),Object(l.b)("div",{className:"table-page"},"4"),Object(l.b)("div",{className:"table-page"},"5"),Object(l.b)("div",{className:"table-page"},"Next"))}}]),e}(d.Component);function w(){var t=Object(u.a)(["\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: none;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n\n  .modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 45%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n  }\n\n  @-webkit-keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  @keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  .close {\n    color: white;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  .modal-header {\n    padding: 20px 16px;\n    background-color: #5cb85c;\n    color: white;\n\n    h2 {\n      font-weight: 800;\n      text-transform: capitalize;\n    }\n  }\n\n  .modal-body {\n    padding: 20px 16px;\n  }\n\n  .modal-footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 10px 16px;\n    background-color: #5cb85c;\n    color: white;\n  }\n"]);return w=function(){return t},t}var C=Object(l.a)(w());function N(){var t=Object(u.a)(["\n  .form-group {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .form-group label {\n    flex: none;\n    display: block;\n    width: 125px;\n    font-weight: bold;\n    font-size: 1em;\n  }\n  .form-group label.right-inline {\n    text-align: right;\n    padding-right: 8px;\n    padding-left: 10px;\n    width: auto;\n  }\n\n  .form-group .input-control {\n    display: block;\n    margin-bottom: 10px;\n    margin-right: 8px;\n    padding: 4px;\n    margin-top: -4px;\n  }\n\n  .form-group .select-control {\n    display: block;\n    margin-bottom: 10px;\n    margin-right: 8px;\n    margin-left: 0px;\n    padding: 4px;\n    margin-top: -4px;\n    width: 23.5%;\n  }\n\n  .right-inline-select {\n    margin-left: 40px !important;\n  }\n\n  button {\n    padding: 5px 15px;\n    margin: 5px;\n    min-width: 100px;\n  }\n\n  @media (max-width: 768px) {\n    .form-group {\n      flex-direction: column;\n    }\n    .form-group .input-control {\n      margin-top: 2px;\n    }\n    .form-group label.right-inline {\n      text-align: left;\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n"]);return N=function(){return t},t}var E=Object(l.a)(N()),D=function(t){function e(t){var n;return Object(a.a)(this,e),n=Object(o.a)(this,Object(i.a)(e).call(this,t)),Object(p.b)(e.prototype,Object(s.a)(Object(s.a)(n))),n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidUpdate",value:function(t){t.created!==this.props.created&&!0===this.props.created&&this.props.closeModal()}},{key:"render",value:function(){var t=this;return Object(l.b)("div",{className:"modal",role:"dialog","aria-hidden":"true",css:C},Object(l.b)("div",{className:"modal-content"},Object(l.b)("div",{className:"modal-header"},Object(l.b)("span",{className:"close",onClick:function(){return t.props.closeModal()}},"\xd7"),Object(l.b)("h2",null,Object(p.e)(this.props.dataToUpdate)?"Create":"Update"," ",this.props.screen)),Object(l.b)("div",{className:"modal-body",css:E},this.props.formData),Object(l.b)("div",{className:"modal-footer"},Object(l.b)(f,{className:"modal-submit",color:"#212121",text:"Submit",clickHandler:this.props.submitForm}))))}}]),e}(d.Component),S=n(26);function G(){var t=Object(u.a)(["\n       flex-direction: row;\n\n       .table-search {\n         padding-bottom: 0px;\n       }\n\n       .table-name {\n         margin-right: 145px;\n         padding-bottom: 0px;\n       }\n     "]);return G=function(){return t},t}function U(){var t=Object(u.a)(["\n      flex-flow: row;\n     "]);return U=function(){return t},t}function A(){var t=Object(u.a)(["\n  {\n   display: block;\n   margin: 2em auto;\n   width: 94%;\n\n   div {\n     box-sizing: border-box;\n   }\n\n   .flex-table {\n     display: flex;\n     flex-flow: row wrap;\n     border-left: solid 2px #000;\n     transition: 0.5s;\n\n     &.row:nth-of-type(odd) .flex-row {\n       background: ",";\n     }\n     ","\n\n     div:nth-of-type(1) {\n        cursor: pointer;\n     }\n   }\n\n   .header {\n     background: rgba(0, 128, 0, 0.9);\n     color: white;\n     border-color: #000;\n     border-top: solid 2px #000;\n     font-weight: 600;\n     \n     .flex-row{\n      text-transform: capitalize;\n     }\n   }\n\n   .flex-row {\n     width: calc(100% / 4);\n     text-align: center;\n     padding: 0.9em 0.5em;\n     border-right: solid 2px #000;\n     border-bottom: solid 2px #000;\n   }\n\n   .no-data {\n      width: 100%\n   }\n\n   .table-menu {\n     display: flex;\n     flex-direction: column;\n     justify-content: space-between;\n     align-items: center;\n     padding: 10px 40px;\n     background: #212121;\n     color: #fff;\n\n     .table-search {\n       padding-bottom: 5px;\n     }\n\n     .table-name {\n       padding-bottom: 5px;\n       p {\n         font-weight: 800;\n         text-transform: capitalize;\n       }\n     }\n\n     ","\n   }\n }\n"]);return A=function(){return t},t}var T=Object(l.a)(A(),S.b.lightGray3,y.a.tabletUp(Object(l.a)(U())),y.a.tabletUp(Object(l.a)(G()))),F=function(t){function e(t){var n;return Object(a.a)(this,e),n=Object(o.a)(this,Object(i.a)(e).call(this,t)),Object(p.b)(e.prototype,Object(s.a)(Object(s.a)(n))),n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"openModal",value:function(){var t=document.querySelector(".modal");this.props.toggleCreated(),t&&(t.style.display="flex",t.removeAttribute("aria-hidden"))}},{key:"keyUpHandler",value:function(t){13===t.keyCode&&(t.preventDefault(),this.props.searchData(t.target.value))}},{key:"render",value:function(){var t,e,n=this;return 0===this.props.dataArray.length?t=Object(l.b)("div",{className:"flex-table row",role:"rowgroup"},Object(l.b)("div",{className:"flex-row no-data",role:"cell"},"No data found")):this.props.dataArray.length>20&&(e=Object(l.b)(k,null)),Object(l.b)("div",{className:"table-container",role:"table","aria-label":"Destinations",css:T},Object(l.b)("div",{className:"table-menu"},Object(l.b)("div",{className:"table-search"},Object(l.b)(v,{classname:"table-search-input",placeholder:"Search",keyUpHandler:function(){return n.keyUpHandler}})),Object(l.b)("div",{className:"table-name"},Object(l.b)("p",null,this.props.screen," List")),Object(l.b)("div",{className:"table-create",onClick:function(){return n.openModal()}},Object(l.b)(f,{className:"create-btn",color:"green",text:"Create"}))),Object(l.b)("div",{className:"flex-table header",role:"rowgroup"},this.props.tableHeaders.map(function(t,e){return Object(l.b)("div",{key:e,className:"flex-row",role:"columnheader"},t)})),this.props.dataArray.map(function(t,e){return Object(l.b)("div",{key:e,className:"flex-table row",role:"rowgroup"},t.map(function(e,a){return 0!==a&&Object(l.b)("div",{key:a,className:"flex-row",role:"cell",onClick:function(){1===a&&(n.props.updateData(t[0]),n.openModal())}},e)}))}),t,e,Object(l.b)(D,{screen:this.props.screen,formData:this.props.formData,submitForm:this.props.submitForm,created:this.props.created,dataToUpdate:this.props.dataToUpdate,closeModal:this.props.closeModal}))}}]),e}(d.Component);e.a=F},28:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return a})},29:function(t,e,n){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return a})},33:function(t,e,n){"use strict";n.r(e);var a=n(29),r=n(4),o=n(5),i=n(8),c=n(6),s=n(7),l=n(10),d=n(1),p=n.n(d),u=n(27),b=n(9),h=n(25),f=n(28),m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(c.a)(e).call(this,t))).initialData={route_id:"",driver_id:"",school_id:"",alias:"",number:"",category:"",status:""},n.state=n.initialData,Object(b.b)(e.prototype,Object(l.a)(Object(l.a)(n))),n}return Object(s.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(t){t.created!==this.props.created&&!0===this.props.created?this.setState(this.initialData):t.data!==this.props.data&&(Object(b.e)(this.props.data)?this.setState(this.initialData):this.setState({route_id:this.props.data.route_id,driver_id:this.props.data.driver_id,school_id:this.props.data.school_id,alias:this.props.data.alias,number:this.props.data.number,category:this.props.data.category,status:this.props.data.status}))}},{key:"handleInputChange",value:function(t){var e=t.target,n=e.name,a=e.value;this.setState(Object(f.a)({},n,a))}},{key:"render",value:function(){return p.a.createElement("form",{id:"".concat(this.props.screen,"_form")},p.a.createElement("div",{className:"form"},p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"School"),p.a.createElement("select",{name:"school_id",className:"select-control",value:this.state.school_id,onChange:this.handleInputChange},!Object(b.e)(this.props.schools)&&this.props.schools.map(function(t){return p.a.createElement("option",{key:t.id,value:t.id},t.name)})),p.a.createElement("label",{className:"right-inline"},"Driver"),p.a.createElement("select",{name:"driver_id",className:"select-control right-inline-select",value:this.state.driver_id,onChange:this.handleInputChange},!Object(b.e)(this.props.drivers)&&this.props.drivers.map(function(t){return p.a.createElement("option",{key:t.id,value:t.id},t.username)}))),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"Route"),p.a.createElement("select",{name:"route_id",className:"select-control",value:this.state.route_id,onChange:this.handleInputChange},!Object(b.e)(this.props.routes)&&this.props.routes.map(function(t){return p.a.createElement("option",{key:t.id,value:t.id},"".concat(t.from," - ").concat(t.to))})),p.a.createElement("label",{className:"right-inline"},"Alias"),p.a.createElement("input",{name:"alias",className:"input-control",value:this.state.alias,onChange:this.handleInputChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"Number"),p.a.createElement("input",{name:"number",className:"input-control",value:this.state.number,onChange:this.handleInputChange}),p.a.createElement("label",{className:"right-inline"},"Category"),p.a.createElement("select",{name:"category",className:"select-control right-inline-select",value:this.state.category,onChange:this.handleInputChange},p.a.createElement("option",{value:"bus"},"Bus"),p.a.createElement("option",{value:"cab"},"Cab"))),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"Status"),p.a.createElement("select",{name:"status",className:"select-control",value:this.state.status,onChange:this.handleInputChange},p.a.createElement("option",{value:"active"},"Active"),p.a.createElement("option",{value:"inactive"},"Inactive")))))}}]),e}(d.Component),g=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(c.a)(e).call(this))).api="get-vehicles",t.method="GET",t.state={dataArray:[],created:!1,dataToUpdate:{},routes:{},schools:{},drivers:{}},Object(b.b)(e.prototype,Object(l.a)(Object(l.a)(t))),t}return Object(s.a)(e,t),Object(o.a)(e,[{key:"toggleCreated",value:function(){this.setState({created:!1})}},{key:"submitForm",value:function(){var t=this,e=document.querySelector("form"),n=new FormData(e),r={},o=!0,i=!1,c=void 0;try{for(var s,l=n.entries()[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var d=s.value,p=Object(a.a)(d,2),u=p[0],f=p[1];r[u]=f}}catch(m){i=!0,c=m}finally{try{o||null==l.return||l.return()}finally{if(i)throw c}}Object(b.e)(this.state.dataToUpdate)?Object(h.b)("create-vehicle","POST",r).then(function(e){e?t.setState({created:!0}):alert("Something went wrong please try again")}):Object(h.c)("update-vehicle",r,this.state.dataToUpdate.id).then(function(e){e?t.setState({created:!0}):alert("Something went wrong please try again")})}},{key:"formatData",value:function(t){var e=[];t&&t.map(function(t){return e.push([t.id,t.alias,t.number,t.category,t.status,Object(b.g)(t.updated_at)])}),this.setState({dataArray:e})}},{key:"fetchData",value:function(){var t=this;Object(h.a)(this.api,this.method).then(function(e){return t.formatData(e)})}},{key:"updateData",value:function(t){var e=this,n={id:t};Object(h.a)(this.api,this.method,n).then(function(t){return e.setState({dataToUpdate:t[0]})})}},{key:"searchData",value:function(t){var e=this,n={};t&&(n={location:t}),Object(h.a)(this.api,this.method,n).then(function(t){return e.formatData(t)})}},{key:"closeModal",value:function(){var t=document.querySelector(".modal");t.style.display="none",t.setAttribute("aria-hidden","true"),this.setState({dataToUpdate:{}})}},{key:"getRoutes",value:function(){var t=this;Object(h.a)("get-routes",this.method).then(function(e){return t.setState({routes:e})})}},{key:"getSchools",value:function(){var t=this;Object(h.a)("get-schools",this.method).then(function(e){return t.setState({schools:e})})}},{key:"getDrivers",value:function(){var t=this;Object(h.a)("get-drivers",this.method).then(function(e){return t.setState({drivers:e})})}},{key:"componentDidMount",value:function(){this.fetchData(),this.getRoutes(),this.getSchools(),this.getDrivers()}},{key:"componentDidUpdate",value:function(t){t.created!==this.state.created&&!0===this.state.created&&(this.fetchData(),this.toggleCreated())}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(u.a,{screen:this.props.screen,tableHeaders:["alias","number","category","status","updated at"],dataArray:this.state.dataArray,formData:p.a.createElement(m,{screen:this.props.screen,created:this.state.created,data:this.state.dataToUpdate,routes:this.state.routes,schools:this.state.schools,drivers:this.state.drivers}),submitForm:this.submitForm,created:this.state.created,toggleCreated:this.toggleCreated,updateData:this.updateData,dataToUpdate:this.state.dataToUpdate,closeModal:this.closeModal,searchData:this.searchData}))}}]),e}(d.Component);e.default=g}}]);
//# sourceMappingURL=4.bd9dd934.chunk.js.map