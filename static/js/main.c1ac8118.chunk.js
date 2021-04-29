(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={wrapper:"Style_wrapper__QNkB7",form:"Style_form__2X6FO",input:"Style_input__1fxob",btn:"Style_btn__3zuRG",filter:"Style_filter__2TnpC",list:"Style_list__2HRwI",item:"Style_item__QpHRD"}},18:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(8),o=n.n(c),s=n(10),i=n(3),u=n(4),l=n(6),b=n(5),m=n(9),d=n(19),h=n(1),j=n.n(h),p=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={id:"",name:"",number:""},t.nameInputId=Object(d.a)(),t.numberInputId=Object(d.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.onSubmitData(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.handleFormSubmit,className:j.a.form,children:[Object(p.jsxs)("label",{htmlFor:this.nameInputId,children:["Name:",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId,className:j.a.input})]}),Object(p.jsxs)("label",{htmlFor:this.numberInputId,children:["Phone:",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId,className:j.a.input})]}),Object(p.jsx)("button",{type:"submit",className:j.a.btn,children:"Add contact"})]})}}]),n}(a.Component),O=function(t){var e=t.contacts,n=t.onDeteleContact;return Object(p.jsx)("ul",{className:j.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(p.jsxs)("li",{className:j.a.item,children:[a,": ",r,";",Object(p.jsx)("button",{onClick:function(){return n(e)},children:"Delete contact"})]},e)}))})},v=function(t){var e=t.value,n=t.onCange;return Object(p.jsxs)("label",{className:j.a.filter,children:["Filter by name:",Object(p.jsx)("input",{type:"text",value:e,onChange:n})]})},C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.dublicateContacts=function(e){var n=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}));n&&(t.deleteContact(n.id),alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 !"))},t.formSubmitData=function(e){var n=e.name,a=e.number,r={id:Object(d.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}})),t.dublicateContacts(n)},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.getFilteredContacts(),e=this.state.filter;return Object(p.jsxs)("div",{className:j.a.wrapper,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onSubmitData:this.formSubmitData}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{value:e,onCange:this.changeFilter}),Object(p.jsx)(O,{contacts:t,onDeteleContact:this.deleteContact})]})}}]),n}(a.Component);n(17);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c1ac8118.chunk.js.map