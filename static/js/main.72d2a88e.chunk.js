(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(t,e,n){t.exports=n(27)},19:function(t,e,n){},20:function(t,e,n){},23:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(12),l=n.n(o),s=(n(19),n(2)),r=n(3),c=n(6),d=n(4),u=n(1),m=n(7),h=n(13),p={shouldComponentUpdate:function(t,e){},componentWillMount:function(){},addToDo:function(t){var e=[].concat(Object(h.a)(this.state.lists),[t]);this.setState({lists:e})},updateToDo:function(t,e){var n=this.state.lists;n.map((function(n){return n.id===t&&(n.content=e,n.id=t),n})),this.setState({lists:n})},onChanged:function(t){t.preventDefault(),""!==t.target.value&&this.setState({content:t.target.value})},deleteHandler:function(t){var e=this.state.lists.filter((function(e){return e.id!==t}));this.setState({lists:e})},clearAll:function(){this.setState({lists:[]})},mapStateToProps:function(t){return{}},mapDispatchToProps:function(t){return{}}},f=(n(20),n(8)),v=n.n(f),b=(n(23),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={editValue:n.props.list.content,editItem:!1},n.onChange=function(t){""!==t.target.value&&n.setState({editValue:t.target.value})},n.inputElement=i.a.createRef(),n.editHandler=function(){n.setState({editItem:!0}),v.a.isUndefined(n.inputElement)||v.a.isNull(n.inputElement)||n.inputElement.current.focus()},n.saveHandler=function(t){t.preventDefault(),""!==n.state.editItem&&(n.props.updateToDo(n.props.id,n.state.editValue),n.setState({editItem:!1}))},n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"list-item",id:this.props.id},i.a.createElement("div",{className:"list-item-inner"},i.a.createElement("input",{type:"text",onChange:this.onChange,value:this.state.editValue,readOnly:!this.state.editItem,ref:this.inputElement})),i.a.createElement("div",{className:"list-item-action"},this.state.editItem?i.a.createElement("button",{onClick:this.saveHandler,className:"saveBtn"},"Save"):i.a.createElement("button",{onClick:this.editHandler,className:"editBtn"},"Edit"),i.a.createElement("button",{onClick:this.props.deleteHandler,className:"deleteBtn"},"Delete")))}}]),e}(a.Component)),E=n(5),g=n.n(E),O={shouldComponentUpdate:function(t,e){},componentWillMount:function(){},onHandleChange:function(t){t.preventDefault(),""!==t.target.value&&this.setState({content:t.target.value})},handleSubmit:function(t){t.preventDefault(),""!==this.state.content&&(this.props.addToDo(this.state),this.setState({content:"",id:g()()}))},mapStateToProps:function(t){return{}},mapDispatchToProps:function(t){return{}}},j=(n(26),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={content:"",id:g()()},n.onHandleChange=O.onHandleChange.bind(Object(u.a)(n)),n.handleSubmit=O.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"form-inner"},i.a.createElement("h3",{className:"heading"},"Add Todo"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form-field"},i.a.createElement("input",{className:"input-field",type:"text",onChange:this.onHandleChange,value:this.state.content}),i.a.createElement("button",{onClick:this.handleSubmit,className:"addBtn"},"Add"))))}}]),e}(a.Component)),C=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={lists:[],id:g()()},n.addToDo=p.addToDo.bind(Object(u.a)(n)),n.updateToDo=p.updateToDo.bind(Object(u.a)(n)),n.deleteHandler=p.deleteHandler.bind(Object(u.a)(n)),n.clearAll=p.clearAll.bind(Object(u.a)(n)),n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"todo"},i.a.createElement(j,{addToDo:this.addToDo}),i.a.createElement("div",{className:"todo-inner"},this.state.lists.length>0?this.state.lists.map((function(e,n){return i.a.createElement(b,{list:e,saveHandler:t.saveHandler,deleteHandler:function(){return t.deleteHandler(e.id)},id:e.id,key:n,updateToDo:t.updateToDo})})):i.a.createElement("p",{className:"noitem"},"No Todos left yay!")),this.state.lists.length>0&&i.a.createElement("button",{onClick:this.clearAll,className:"clear-btn"},"Clear All"))}}]),e}(a.Component);var D=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.72d2a88e.chunk.js.map