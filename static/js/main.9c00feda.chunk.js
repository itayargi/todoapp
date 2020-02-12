(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{146:function(e,t,n){e.exports=n(284)},151:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var o,a,r,i=n(0),c=n.n(i),d=n(25),s=n.n(d),l=(n(151),n(152),n(294)),u=n(23),p=n(90),h=n(18),m=n(19),f=n(38),b=(n(154),n(8)),y=n(91),j=n.n(y),O=new(o=function(){function e(){Object(h.a)(this,e),Object(p.a)(this,"notes",a,this),Object(p.a)(this,"todos",r,this)}return Object(m.a)(e,[{key:"getNotes",value:function(){return Object(b.o)(this.notes)}},{key:"importNotes",value:function(e){this.notes=e.splice(0)}},{key:"addNote",value:function(e){e?this.notes.length<10?this.notes.push({name:e,id:j.a.generate(),todoList:[],creationDate:Date.now(),lastModified:Date.now()}):alert("Only 10 notes are allowed"):alert("Please enter a name for the note")}},{key:"addToDo",value:function(e){var t=e.noteId,n=e.todoTitle,o=this.notes.find((function(e){return e.id===t}));o&&n&&(o.lastModified=Date.now(),o.todoList.push({id:j.a.generate(),title:n,done:!1}),localStorage.setItem("notes",JSON.stringify(this.notes)))}},{key:"setTodoStatus",value:function(e,t,n){var o=this.notes.find((function(t){return t.id===e}));if(o){var a=o.todoList.find((function(e){return e.id===t}));a&&(o.lastModified=Date.now(),a.done=n)}}}]),e}(),a=Object(f.a)(o.prototype,"notes",[b.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),r=Object(f.a)(o.prototype,"todos",[b.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(f.a)(o.prototype,"importNotes",[b.d],Object.getOwnPropertyDescriptor(o.prototype,"importNotes"),o.prototype),Object(f.a)(o.prototype,"addNote",[b.d],Object.getOwnPropertyDescriptor(o.prototype,"addNote"),o.prototype),Object(f.a)(o.prototype,"addToDo",[b.d],Object.getOwnPropertyDescriptor(o.prototype,"addToDo"),o.prototype),Object(f.a)(o.prototype,"setTodoStatus",[b.d],Object.getOwnPropertyDescriptor(o.prototype,"setTodoStatus"),o.prototype),o);window.noteStore=O;var g,v,E,w,k=O,C=n(20),D=n(21),S=n(22),T=n(293),L=n(285),N=n(296),M=n(92),x=n.n(M),I=n(295),A=n(292),P=Object(u.b)("noteStore")(g=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).handleChange=function(e,t){n.injected.noteStore.setTodoStatus(n.props.noteId,n.props.todo.id,t.checked)},n}return Object(S.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.createElement(I.a,null,i.createElement(I.a.Content,null,i.createElement(A.a,{label:this.props.todo.title,checked:this.props.todo.done,onChange:this.handleChange})))}},{key:"injected",get:function(){return this.props}}]),t}(i.Component))||g,H=function(e){function t(){return Object(h.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.createElement(I.a.Group,{divided:!0},this.props.todoList.map((function(t,n){return i.createElement(P,{key:n,noteId:e.props.noteId,todo:t})})))}}]),t}(i.Component),Y=Object(u.b)("noteStore")(v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(C.a)(this,Object(D.a)(t).call(this,e))).handleChange=function(e){n.setState({inputField:e.currentTarget.value})},n.addTodo=function(){n.injected.noteStore.addToDo({noteId:n.props.id,todoTitle:n.state.inputField})},n.state={inputField:""},n}return Object(S.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.createElement(N.a,{style:{float:"left",marginLeft:10}},i.createElement(N.a.Content,{header:this.props.name}),i.createElement(N.a.Content,{extra:!0},i.createElement("div",null,"Created at: ",x()(this.props.creationDate).format("D/MM/YY HH:mm:ss")),i.createElement("div",null,"modified at: ",x()(this.props.lastModified).format("D/MM/YY HH:mm:ss"))),i.createElement(N.a.Content,{extra:!0},i.createElement(T.a,{id:"imputAddTodo",style:{width:"100%"},placeholder:"Add todo",onChange:this.handleChange}),i.createElement(L.a,{style:{marginTop:10,width:"100%"},onClick:this.addTodo},"Add todo")),i.createElement(N.a.Content,{extra:!0},i.createElement(H,{noteId:this.props.id,todoList:this.props.todoList})))}},{key:"injected",get:function(){return this.props}}]),t}(i.Component))||v,F=n(297),J=Object(u.b)("noteStore")(E=Object(u.c)(E=function(e){function t(){return Object(h.a)(this,t),Object(C.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Object(b.o)(this.injected.noteStore.notes);return i.createElement(F.a,{style:{marginTop:10},columns:4,divided:!0},i.createElement(F.a.Row,null,e.map((function(e,t){return i.createElement(F.a.Column,{key:t,style:{marginTop:5}},i.createElement(Y,{id:e.id,creationDate:e.creationDate,lastModified:e.lastModified,name:e.name,todoList:e.todoList}))}))))}},{key:"injected",get:function(){return this.props}}]),t}(i.Component))||E)||E,V=Object(u.b)("noteStore")(w=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).state={inputValue:""},n.handleChange=function(e){n.setState({inputValue:e.currentTarget.value})},n.addNoteToStore=function(){n.injected.noteStore.addNote(n.state.inputValue)},n}return Object(S.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.createElement("div",null,i.createElement(T.a,{type:"text",onChange:this.handleChange}),i.createElement(L.a,{style:{marginLeft:5},primary:!0,onClick:this.addNoteToStore},"Add Note"))}},{key:"injected",get:function(){return this.props}}]),t}(i.Component))||w;n(283);var z=function(){return c.a.createElement(u.a,{noteStore:k},c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement("h1",{style:{textDecoration:"underLine"}},"Enter new note:"),c.a.createElement(V,null),c.a.createElement("h2",{style:{backgroundColor:"white",border:"solid",width:"150px",textDecoration:"underLine"}},"List of notes:"),c.a.createElement(J,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.9c00feda.chunk.js.map