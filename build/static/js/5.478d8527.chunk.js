(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{26:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return a})},27:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return c});var a=n(9),r="https://mysterious-inlet-29046.herokuapp.com/api/";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch(Object(a.c)("".concat(r).concat(t),n),{method:"".concat(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){if(200===t.code)return t.data}).catch(function(t){return console.log(t)})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST",n=arguments.length>2?arguments[2]:void 0;return fetch("".concat(r).concat(t),{method:"".concat(e),body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){return 200===t.code}).catch(function(t){return console.log(t)})}function c(t,e,n){return fetch("".concat(r).concat(t,"/").concat(n),{method:"PUT",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){return 200===t.code}).catch(function(t){return console.log(t)})}},28:function(t,e,n){"use strict";var a=n(4),r=n(5),o=n(8),i=n(6),c=n(7),s=n(10),l=n(0),p=n(1),d=n(9),u=n(2);function b(){var t=Object(u.a)(["\n  padding: 2px;\n  background-color: ",";\n  border: 2px solid #fff;\n  color: #fff;\n  font-weight: 800;\n"]);return b=function(){return t},t}var h=function(t){return Object(l.a)(b(),t)},m=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return Object(l.b)("button",{className:this.props.className,css:h(this.props.color),onClick:this.props.clickHandler},this.props.text)}}]),e}(p.Component);function f(){var t=Object(u.a)(["\n  padding: 2px;\n"]);return f=function(){return t},t}var g=Object(l.a)(f()),v=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return Object(l.b)("input",{className:this.props.classname,placeholder:this.props.placeholder,css:g,onKeyUp:this.props.keyUpHandler()})}}]),e}(p.Component),j=n(12);function O(){var t=Object(u.a)(["\n    width: 25%;\n    float: right;\n  "]);return O=function(){return t},t}function y(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #212121;\n  color: #fff;\n  width: 100%;\n  margin-top: 20px;\n  cursor: pointer;\n  border: 2px solid rgba(0, 128, 0, 0.9);\n\n  .table-page {\n    padding: 5px;\n    border-right: 1px solid white;\n    flex-grow: 1;\n    margin-left: 13px;\n\n    &:nth-of-type(7) {\n      border-right: 0px;\n    }\n  }\n\n  ","\n"]);return y=function(){return t},t}var x=Object(l.a)(y(),j.a.tabletUp(Object(l.a)(O()))),w=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return Object(l.b)("div",{className:"table-pagination",css:x},Object(l.b)("div",{className:"table-page"},"Prev"),Object(l.b)("div",{className:"table-page"},"1"),Object(l.b)("div",{className:"table-page"},"2"),Object(l.b)("div",{className:"table-page"},"3"),Object(l.b)("div",{className:"table-page"},"4"),Object(l.b)("div",{className:"table-page"},"5"),Object(l.b)("div",{className:"table-page"},"Next"))}}]),e}(p.Component);function k(){var t=Object(u.a)(["\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: none;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n\n  .modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 45%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n  }\n\n  @-webkit-keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  @keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  .close {\n    color: white;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  .modal-header {\n    padding: 20px 16px;\n    background-color: #5cb85c;\n    color: white;\n\n    h2 {\n      font-weight: 800;\n      text-transform: capitalize;\n    }\n  }\n\n  .modal-body {\n    padding: 20px 16px;\n  }\n\n  .modal-footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 10px 16px;\n    background-color: #5cb85c;\n    color: white;\n  }\n"]);return k=function(){return t},t}var N=Object(l.a)(k());function C(){var t=Object(u.a)(["\n  .form-group {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .form-group label {\n    flex: none;\n    display: block;\n    width: 125px;\n    font-weight: bold;\n    font-size: 1em;\n  }\n  .form-group label.right-inline {\n    text-align: right;\n    padding-right: 8px;\n    padding-left: 10px;\n    width: auto;\n  }\n\n  .form-group .input-control {\n    display: block;\n    margin-bottom: 10px;\n    margin-right: 8px;\n    padding: 4px;\n    margin-top: -4px;\n  }\n\n  .form-group .select-control {\n    display: block;\n    margin-bottom: 10px;\n    margin-right: 8px;\n    margin-left: 0px;\n    padding: 4px;\n    margin-top: -4px;\n    width: 23.5%;\n  }\n\n  .right-inline-select {\n    margin-left: 40px !important;\n  }\n\n  button {\n    padding: 5px 15px;\n    margin: 5px;\n    min-width: 100px;\n  }\n\n  @media (max-width: 768px) {\n    .form-group {\n      flex-direction: column;\n    }\n    .form-group .input-control {\n      margin-top: 2px;\n    }\n    .form-group label.right-inline {\n      text-align: left;\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n"]);return C=function(){return t},t}var D=Object(l.a)(C()),E=function(t){function e(t){var n;return Object(a.a)(this,e),n=Object(o.a)(this,Object(i.a)(e).call(this,t)),Object(d.b)(e.prototype,Object(s.a)(Object(s.a)(n))),n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidUpdate",value:function(t){t.created!==this.props.created&&!0===this.props.created&&this.props.closeModal()}},{key:"render",value:function(){var t=this;return Object(l.b)("div",{className:"modal",role:"dialog","aria-hidden":"true",css:N},Object(l.b)("div",{className:"modal-content"},Object(l.b)("div",{className:"modal-header"},Object(l.b)("span",{className:"close",onClick:function(){return t.props.closeModal()}},"\xd7"),Object(l.b)("h2",null,Object(d.e)(this.props.dataToUpdate)?"Create":"Update"," ",this.props.screen)),Object(l.b)("div",{className:"modal-body",css:D},this.props.formData),Object(l.b)("div",{className:"modal-footer"},Object(l.b)(m,{className:"modal-submit",color:"#212121",text:"Submit",clickHandler:this.props.submitForm}))))}}]),e}(p.Component),S=n(11);function U(){var t=Object(u.a)(["\n       flex-direction: row;\n\n       .table-search {\n         padding-bottom: 0px;\n       }\n\n       .table-name {\n         margin-right: 145px;\n         padding-bottom: 0px;\n       }\n     "]);return U=function(){return t},t}function T(){var t=Object(u.a)(["\n      flex-flow: row;\n     "]);return T=function(){return t},t}function A(){var t=Object(u.a)(["\n  {\n   display: block;\n   margin: 2em auto;\n   width: 94%;\n\n   div {\n     box-sizing: border-box;\n   }\n\n   .flex-table {\n     display: flex;\n     flex-flow: row wrap;\n     border-left: solid 2px #000;\n     transition: 0.5s;\n\n     &.row:nth-of-type(odd) .flex-row {\n       background: ",";\n     }\n     ","\n\n     div:nth-of-type(1) {\n        cursor: pointer;\n     }\n   }\n\n   .header {\n     background: rgba(0, 128, 0, 0.9);\n     color: white;\n     border-color: #000;\n     border-top: solid 2px #000;\n     font-weight: 600;\n     \n     .flex-row{\n      text-transform: capitalize;\n     }\n   }\n\n   .flex-row {\n     width: calc(100% / 4);\n     text-align: center;\n     padding: 0.9em 0.5em;\n     border-right: solid 2px #000;\n     border-bottom: solid 2px #000;\n   }\n\n   .no-data {\n      width: 100%\n   }\n\n   .table-menu {\n     display: flex;\n     flex-direction: column;\n     justify-content: space-between;\n     align-items: center;\n     padding: 10px 40px;\n     background: #212121;\n     color: #fff;\n\n     .table-search {\n       padding-bottom: 5px;\n     }\n\n     .table-name {\n       padding-bottom: 5px;\n       p {\n         font-weight: 800;\n         text-transform: capitalize;\n       }\n     }\n\n     ","\n   }\n }\n"]);return A=function(){return t},t}var M=Object(l.a)(A(),S.b.lightGray3,j.a.tabletUp(Object(l.a)(T())),j.a.tabletUp(Object(l.a)(U()))),I=function(t){function e(t){var n;return Object(a.a)(this,e),n=Object(o.a)(this,Object(i.a)(e).call(this,t)),Object(d.b)(e.prototype,Object(s.a)(Object(s.a)(n))),n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"openModal",value:function(){var t=document.querySelector(".modal");this.props.toggleCreated(),t&&(t.style.display="flex",t.removeAttribute("aria-hidden"))}},{key:"keyUpHandler",value:function(t){13===t.keyCode&&(t.preventDefault(),this.props.searchData(t.target.value))}},{key:"render",value:function(){var t,e,n=this;return 0===this.props.dataArray.length?t=Object(l.b)("div",{className:"flex-table row",role:"rowgroup"},Object(l.b)("div",{className:"flex-row no-data",role:"cell"},"No data found")):this.props.dataArray.length>20&&(e=Object(l.b)(w,null)),Object(l.b)("div",{className:"table-container",role:"table","aria-label":"Destinations",css:M},Object(l.b)("div",{className:"table-menu"},Object(l.b)("div",{className:"table-search"},!this.props.noSearch&&Object(l.b)(v,{classname:"table-search-input",placeholder:"Search",keyUpHandler:function(){return n.keyUpHandler}})),Object(l.b)("div",{className:"table-name"},Object(l.b)("p",null,this.props.screen," List")),Object(l.b)("div",{className:"table-create",onClick:function(){return n.openModal()}},Object(l.b)(m,{className:"create-btn",color:"green",text:"Create"}))),Object(l.b)("div",{className:"flex-table header",role:"rowgroup"},this.props.tableHeaders.map(function(t,e){return Object(l.b)("div",{key:e,className:"flex-row",role:"columnheader"},t)})),this.props.dataArray.map(function(t,e){return Object(l.b)("div",{key:e,className:"flex-table row",role:"rowgroup"},t.map(function(e,a){return 0!==a&&Object(l.b)("div",{key:a,className:"flex-row",role:"cell",onClick:function(){1===a&&n.props.updateData&&(n.props.updateData(t[0]),n.openModal())}},e)}))}),t,e,Object(l.b)(E,{screen:this.props.screen,formData:this.props.formData,submitForm:this.props.submitForm,created:this.props.created,dataToUpdate:this.props.dataToUpdate,closeModal:this.props.closeModal}))}}]),e}(p.Component);e.a=I},29:function(t,e,n){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return a})},39:function(t,e,n){"use strict";n.r(e);var a=n(29),r=n(4),o=n(5),i=n(8),c=n(6),s=n(7),l=n(10),p=n(1),d=n.n(p),u=n(28),b=n(9),h=n(27),m=n(26),f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(c.a)(e).call(this,t))).initialData={username:"",password:"",email:"",phone:"",bus_id:"",status:""},n.state=n.initialData,Object(b.b)(e.prototype,Object(l.a)(Object(l.a)(n))),n}return Object(s.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(t){t.created!==this.props.created&&!0===this.props.created?this.setState(this.initialData):t.data!==this.props.data&&(Object(b.e)(this.props.data)?this.setState(this.initialData):this.setState({username:this.props.data.username,password:"",email:this.props.data.email,phone:this.props.data.phone,bus_id:this.props.data.bus_id,status:this.props.data.status}))}},{key:"handleInputChange",value:function(t){var e=t.target,n=e.name,a=e.value;this.setState(Object(m.a)({},n,a))}},{key:"render",value:function(){return d.a.createElement("form",{id:"".concat(this.props.screen,"_form")},d.a.createElement("div",{className:"form"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Name"),d.a.createElement("input",{name:"username",className:"input-control",value:this.state.username,onChange:this.handleInputChange}),d.a.createElement("label",{className:"right-inline"},"Password"),d.a.createElement("input",{name:"password",type:"password",className:"input-control",value:this.state.password,onChange:this.handleInputChange})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Email"),d.a.createElement("input",{name:"email",className:"input-control",value:this.state.email,onChange:this.handleInputChange}),d.a.createElement("label",{className:"right-inline"},"Phone"),d.a.createElement("input",{name:"phone",className:"input-control",value:this.state.phone,onChange:this.handleInputChange})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Bus"),d.a.createElement("select",{name:"bus_id",className:"select-control",value:this.state.bus_id,onChange:this.handleInputChange},!Object(b.e)(this.props.vehicles)&&this.props.vehicles.map(function(t){return d.a.createElement("option",{key:t.id,value:t.id},"".concat(t.alias))})),d.a.createElement("label",{className:"right-inline"},"Status"),d.a.createElement("select",{name:"status",className:"select-control right-inline-select",value:this.state.status,onChange:this.handleInputChange},d.a.createElement("option",{value:"active"},"Active"),d.a.createElement("option",{value:"inactive"},"Inactive")))))}}]),e}(p.Component),g=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(c.a)(e).call(this))).api="get-parents",t.method="GET",t.state={dataArray:[],created:!1,dataToUpdate:{},vehicles:{}},Object(b.b)(e.prototype,Object(l.a)(Object(l.a)(t))),t}return Object(s.a)(e,t),Object(o.a)(e,[{key:"toggleCreated",value:function(){this.setState({created:!1})}},{key:"submitForm",value:function(){var t=this,e=document.querySelector("form"),n=new FormData(e),r={},o=!0,i=!1,c=void 0;try{for(var s,l=n.entries()[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var p=s.value,d=Object(a.a)(p,2),u=d[0],m=d[1];r[u]=m}}catch(f){i=!0,c=f}finally{try{o||null==l.return||l.return()}finally{if(i)throw c}}Object(b.e)(this.state.dataToUpdate)?Object(h.b)("create-parent","POST",r).then(function(e){e?t.setState({created:!0}):alert("Something went wrong please try again")}):(r.password||(r.password=this.state.dataToUpdate.password),Object(h.c)("update-parent",r,this.state.dataToUpdate.id).then(function(e){e?t.setState({created:!0}):alert("Something went wrong please try again")}))}},{key:"formatData",value:function(t){var e=[];t&&t.map(function(t){return e.push([t.id,t.username,t.email,t.status,t.phone,Object(b.g)(t.updated_at)])}),this.setState({dataArray:e})}},{key:"fetchData",value:function(){var t=this;Object(h.a)(this.api,this.method).then(function(e){return t.formatData(e)})}},{key:"updateData",value:function(t){var e=this,n={id:t};Object(h.a)(this.api,this.method,n).then(function(t){return e.setState({dataToUpdate:t[0]})})}},{key:"searchData",value:function(t){var e=this,n={};t&&(n={username:t}),Object(h.a)(this.api,this.method,n).then(function(t){return e.formatData(t)})}},{key:"closeModal",value:function(){var t=document.querySelector(".modal");t.style.display="none",t.setAttribute("aria-hidden","true"),this.setState({dataToUpdate:{}})}},{key:"getVehicles",value:function(){var t=this;Object(h.a)("get-vehicles",this.method).then(function(e){return t.setState({vehicles:e})})}},{key:"componentDidMount",value:function(){this.fetchData(),this.getVehicles()}},{key:"componentDidUpdate",value:function(t){t.created!==this.state.created&&!0===this.state.created&&(this.fetchData(),this.toggleCreated())}},{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(u.a,{screen:this.props.screen,tableHeaders:["name","email","status","phone","updated at"],dataArray:this.state.dataArray,formData:d.a.createElement(f,{screen:this.props.screen,created:this.state.created,data:this.state.dataToUpdate,vehicles:this.state.vehicles}),submitForm:this.submitForm,created:this.state.created,toggleCreated:this.toggleCreated,updateData:this.updateData,dataToUpdate:this.state.dataToUpdate,closeModal:this.closeModal,searchData:this.searchData}))}}]),e}(p.Component);e.default=g}}]);
//# sourceMappingURL=5.478d8527.chunk.js.map