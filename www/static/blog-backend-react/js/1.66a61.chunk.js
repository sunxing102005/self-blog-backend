(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1202:function(e,a,t){"use strict";t.r(a);t(86);var n=t(24),r=(t(358),t(80)),l=(t(359),t(163)),c=(t(357),t(10)),o=t(30),i=t(25),s=t(26),m=t(29),u=t(27),p=t(92),b=t(28),d=(t(161),t(93)),f=t(1),h=t.n(f),g=(t(823),t(167)),E=t(73),v=(d.a.Content,function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){var a=Object(p.a)(t);e.preventDefault(),t.props.form.validateFields(function(e,t){a.props.login(Object(o.a)({},t))})},t}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return h.a.createElement("div",{className:"login-container"},h.a.createElement(r.a,{onSubmit:this.handleSubmit,className:"login-form"},h.a.createElement("h3",{className:"title"},"\u4e2a\u4eba\u535a\u5ba2\u540e\u53f0\u7cfb\u7edf"),h.a.createElement(r.a.Item,null,e("username",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]})(h.a.createElement(l.a,{prefix:h.a.createElement(c.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),h.a.createElement(r.a.Item,null,e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(h.a.createElement(l.a,{prefix:h.a.createElement(c.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),h.a.createElement("div",{className:"tips"},h.a.createElement("span",null,"\u8d26\u6237: admin")),h.a.createElement(n.a,{type:"primary",htmlType:"submit",className:"button"},"\u767b\u5f55")))}}]),a}(h.a.Component)),y=r.a.create({name:"normal_login"})(v),j=Object(E.b)(function(e){return{}},function(e){return{login:function(a){console.log("this",void 0),e(Object(g.b)(Object(o.a)({},a)))}}});a.default=j(y)},823:function(e,a,t){}}]);