(this.webpackJsonporganizfront=this.webpackJsonporganizfront||[]).push([[0],{133:function(e,t,a){e.exports=a(206)},138:function(e,t,a){},200:function(e,t){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(138),a(11)),l=a(19),s=a(33),u=a(88),m=a(113),d=a(25),p={msg:{},status:null,id:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}},g=a(13);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={token:null,isAuthentificated:null,isLoading:!1,user:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return h({},e,{user:t.payload.user,token:t.payload.token,isAuthentificated:!0,isLoading:!1});case"LOGIN_FAIL":case"LOGOUT_SUCCESS":case"REGISTER_FAIL":return h({},e,{token:null,user:null,isAuthentificated:!1,isLoading:!1});default:return e}},v=a(35);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j={socket:null,taskList:{},groupList:[],isLoaded:!1,id_task:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_SOCKET":return y({},e,{socket:t.payload});case"LOAD_GROUP":case"INIT_GROUPS":return y({},e,{groupList:t.payload,isLoaded:!0});case"INIT_TASK":return y({},e,{isLoaded:!0,taskList:t.payload});case"INIT_ID":return y({},e,{id_task:t.payload});case"INIT_TASK_FAIL":return y({},e,{isLoaded:!0});case"CHANGE_LOAD":return y({},e,{isLoaded:!1});case"CREATE_GROUP":return y({},e,{groupList:[].concat(Object(v.a)(e.groupList),[t.payload])});case"CREATE_TASK":return y({},e,{taskList:y({},e.taskList,{team:y({},e.taskList.team,{task:[].concat(Object(v.a)(e.taskList.team.task),[t.payload])})})});case"ADD_TASK":case"UPDATE_TASK":case"DELETE_TASK":return y({},e,{taskList:y({},e.taskList,{task:[].concat(Object(v.a)(e.taskList.task),[t.payload])})});case"LOGOUT_SUCCESS":return{socket:null,taskList:[],groupList:[],isLoaded:!1};case"NO_GROUPS":default:return e}},w=function(e){return Object(s.c)({router:Object(d.b)(e),error:f,auth:O,socket:S})},T=Object(l.a)(),L=[m.a];var N=a(22),C=a(3),I=a.n(C),A=function(e){var t=e.funct,a=e.auth;return r.a.createElement(N.b,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(N.a,{to:{pathname:"/login"}})}})};A.propsTypes={funct:I.a.node.isRequired,auth:I.a.bool.isRequired},A.defaultTypes={auth:!1};var _=A,P=a(12),R=a(232),D=a(7),x=a.n(D),F=a(6),G=a.n(F),U=a(236),z=a(252),K=a(251),B=a(233),H=a(235),V=a(237),M=a(16),q=a(46),Y=a.n(q),J=a(118),X=a.n(J),W=function(){return function(e){e({type:"INIT_SOCKET",payload:X()(":4000")})}},Q=function(){return function(e){e({type:"CHANGE_LOAD"})}},Z={login:{login:"Se connecter",connect:"Vous pouvez vous connecter ici",password:"Mot de passe",button:"Connexion"},register:{register:"S'inscrire",connect:"Vous pouvez vous inscrire ici",first:"Pr\xe9nom",last:"Nom",button:"Inscription",password:"Mot de passe"},dashboard:{hello:"Bonjour",subheader:"Vous trouverez ici les groupes auquels vous appartenez",id:"Voici votre ID: ",groupList:"Liste de vos groupes",groupInfo:"Vous ne faites parti de aucun groupe"},groupForm:{button:"Cr\xe9er un groupe",title:"Cr\xe9ation d' groupe",name:"Nom du groupe",submit:"Cr\xe9er"},taskForm:{button:"Ajouter une t\xe2che",title:"Ajout d'une t\xe2che",content:"Description",name:"Nom de la t\xe2che",submit:"Ajouter",page:"Ajouter un utilisateur"},taskList:{title:"Liste des t\xe2ches",emptyList:"Votre liste de t\xe2che est vide pour le moment"},userForm:{button:"Ajouter un utilisateur",title:"Ajout un utilisateur",id:"Id de l'utilisateur",submit:"Ajouter"},welcome:"Bienvenue sur Organiz",menu_button:{dashboard:"Accueil"},disconnect:"D\xe9connexion"},$={login:{login:"Sign in",connect:"You can sign in here",password:"Password",button:"Sign in"},register:{register:"Sign up",connect:"You can sign up here",first:"First Name",last:"Last Name",password:"Password",button:"Sign up"},dashboard:{hello:"Hello",subheader:"You can find here your group list",id:"Here is your ID: ",groupList:"Your group list",groupInfo:"You are part of any group"},groupForm:{button:"Create a group",title:"Group creation",name:"Group name",submit:"Create"},taskForm:{button:"Add a task",title:"Add a task",content:"Description",name:"Task name",submit:"Add",page:"Add a user"},taskList:{title:"Task list",emptyList:"Your task list is empty for now"},userForm:{button:"Add a user",title:"Add a user",id:"User's ID",submit:"Add"},welcome:"Welcome to Organiz",menu_button:{dashboard:"Dashboard"},disconnect:"Log out"};function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var te=Object(R.a)((function(e){return{h1:{width:"100%",marginBottom:50},container:{display:"flex",alignItems:"center",flexDirection:"column"},card:{width:"50%",float:"center"},formControl:{margin:e.spacing(5)}}}));function ae(e){var t=r.a.useState({firstName:"",lastName:"",email:"",password:""}),a=Object(P.a)(t,2),o=a[0],c=a[1],i=r.a.createElement(G.a,{content:"login.connect"}),l=te();Object(n.useEffect)((function(){e.isAuthentificated&&e.push("/".concat(e.user.firstName,"/").concat(e.user.lastName,"/dashboard"))}));var s=function(e){var t=e.target,a=t.name,n=t.value;c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,Object(g.a)({},a,n)))};return r.a.createElement("div",{className:l.container},r.a.createElement(G.a,{className:l.h1,component:"h1",content:"welcome"}),r.a.createElement(B.a,{className:l.card},r.a.createElement(H.a,{title:i}),r.a.createElement(U.a,{className:l.formControl},r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"register.first"})),r.a.createElement(z.a,{name:"firstName",id:"firstName",value:o.firstName,onChange:s})),r.a.createElement("br",null),r.a.createElement(U.a,{className:l.formControl},r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"register.last"})),r.a.createElement(z.a,{name:"lastName",id:"lastName",value:o.lastName,onChange:s})),r.a.createElement(U.a,{className:l.formControl},r.a.createElement(K.a,{htmlFor:"component-simple"},"Mail"),r.a.createElement(z.a,{name:"email",id:"email",value:o.email,onChange:s})),r.a.createElement(U.a,{className:l.formControl},r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"register.password"})),r.a.createElement(z.a,{name:"password",id:"password",value:o.password,onChange:s})),r.a.createElement(V.a,{variant:"contained",onClick:function(){e.register(o),e.initSocket()}},r.a.createElement(G.a,{content:"register.button"}))))}ae.defaultProps={isAuthentificated:!1,user:null};var ne=Object(i.c)((function(e){return{isAuthentificated:e.auth.isAuthentificated,user:e.auth.user}}),{register:function(e){var t=e.firstName,a=e.lastName,n=e.email,r=e.password;return function(e){var o=JSON.stringify({firstName:t,lastName:a,email:n,password:r});Y.a.post("http://localhost:4000/auth/register",o,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:"REGISTER_SUCCESS",payload:t.data})})).catch((function(){e({type:"REGISTER_FAIL"})}))}},push:M.d,initSocket:W})(ae),re=a(24),oe=a.n(re),ce=a(38);function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var le=Object(R.a)((function(e){return{h1:{width:"100%",marginBottom:50},container:{display:"flex",alignItems:"center",flexDirection:"column"},card:{width:"50%",float:"center"},formControl:{margin:e.spacing(5)}}}));function se(e){var t=r.a.useState({email:"",password:""}),a=Object(P.a)(t,2),o=a[0],c=a[1],i=r.a.createElement(G.a,{content:"login.connect"}),l=le();Object(n.useEffect)((function(){e.isAuthentificated&&null!=e.user&&(e.push("/".concat(e.user.firstName,"/").concat(e.user.lastName,"/dashboard")),e.loadingtoggle())}),[e]);var s=function(e){var t=e.target,a=t.name,n=t.value;c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,Object(g.a)({},a,n)))},u=function(){var t=Object(ce.a)(oe.a.mark((function t(){return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.login(o);case 2:e.initSocket();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:l.container},r.a.createElement(G.a,{className:l.h1,component:"h1",content:"welcome"}),r.a.createElement(B.a,{className:l.card},r.a.createElement(H.a,{title:i}),r.a.createElement("div",null,r.a.createElement(U.a,{className:l.formControl},r.a.createElement(K.a,{htmlFor:"component-simple"},"Mail"),r.a.createElement(z.a,{name:"email",id:"email",value:o.email,onChange:s}))),r.a.createElement("div",null,r.a.createElement(U.a,{className:l.formControl},r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"login.password"})),r.a.createElement(z.a,{name:"password",id:"password",value:o.password,onChange:s}))),r.a.createElement("div",null,r.a.createElement(V.a,{variant:"contained",onClick:function(){return u()}},r.a.createElement(G.a,{content:"login.button"})))))}se.defaultProps={isAuthentificated:null,user:null};var ue=Object(i.c)((function(e){return{isAuthentificated:e.auth.isAuthentificated,user:e.auth.user}}),{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});Y.a.post("http://localhost:4000/auth/local",n,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:"LOGIN_SUCCESS",payload:t.data})})).catch((function(){e({type:"LOGIN_FAIL"})}))}},push:M.d,initSocket:W,loadingtoggle:Q})(se),me=a(250);a(42);function de(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var pe=Object(R.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function fe(e){var t=Object(n.useState)(!1),a=Object(P.a)(t,2),o=a[0],c=a[1],i=pe(),l=r.a.useState(de),s=Object(P.a)(l,1)[0],u=e.socket,m=e.user,d=e.token,p=Object(n.useState)(""),f=Object(P.a)(p,2),g=f[0],E=f[1],h=function(){var t=Object(ce.a)(oe.a.mark((function t(){return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadgroup(d);case 2:c(!1);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(ce.a)(oe.a.mark((function t(){var a;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:g,users:[{id:m.id}]},t.next=3,e.createGroup(a,u);case 3:h();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(V.a,{onClick:function(){return c(!0)}},r.a.createElement(G.a,{content:"groupForm.button"})),r.a.createElement(me.a,{open:o,onClose:function(){return c(!1)}},r.a.createElement("div",{style:s,className:i.paper},r.a.createElement("h2",{id:"simple-modal-title"},r.a.createElement(G.a,{content:"groupForm.title"})),r.a.createElement(U.a,null,r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"groupForm.name"})),r.a.createElement(z.a,{className:"form-control",id:"name",onChange:function(e){return E(e.target.value)},type:"text",name:"name",required:!0})),r.a.createElement(V.a,{variant:"contained",onClick:b},r.a.createElement(G.a,{content:"groupForm.submit"})))))}fe.defaultProps={socket:null,user:null,token:""};var ge=Object(i.c)((function(e){return{socket:e.socket.socket,user:e.auth.user,token:e.auth.token}}),{createGroup:function(e,t){return function(a){e.name.length>3?(t.emit("createTeam",e),a({type:"CREATE_GROUP",payload:e})):a({type:"CREATE_GROUP_FAIL"})}},loadgroup:function(e){return function(t){var a={headers:{authorization:"bearer ".concat(e)}};Y.a.get("http://localhost:4000/user/me",a).then((function(e){console.log(e.data),t({type:"LOAD_GROUP",payload:e.data.teams})})).catch((function(){t({type:"LOAD_ERROR"})}))}}})(fe),Ee=a(28),he=a(238),be=a(239),Oe=a(208),ve=a(241),ke=a(240);x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var ye=Object(R.a)((function(){return{root:{marginTop:5,marginBottom:2,width:"100%",alignItems:"center"},card:{width:"80%",height:"100%",minHeight:800,alignItems:"center"},header:{backgroundColor:"purple"},list:{width:500,backgroundColor:"green",display:"block",marginLeft:"auto",marginRight:"auto",overflow:"auto",maxHeight:200,marginBottom:5},listSection:{backgroundColor:"inherit",position:"center"},ul:{backgroundColor:"green",padding:0,width:"100%"}}}));function je(e){var t=ye(),a=r.a.createElement(G.a,{content:"dashboard.subheader"}),o=Object(n.useState)(""),c=Object(P.a)(o,2),i=c[0],l=c[1],s=e.user,u=e.groupList,m=e.socket,d=e.isLoaded,p=Object(n.useState)(0),f=Object(P.a)(p,2),g=f[0],E=f[1];Object(n.useEffect)((function(){0===g&&(e.loadingtoggle(),0===u.length&&(e.initGroup(s),e.loadingtoggle()),E(1))}),[e,u,s,g]),Object(n.useEffect)((function(){d&&i.length>0&&(e.push("/group/".concat(i)),e.loadingtoggle())}),[e,d,i]);var h=function(){var t=Object(ce.a)(oe.a.mark((function t(a){return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(a),t.next=3,e.initTask(a,u,m);case 3:e.initId(u,a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(B.a,{className:t.card},r.a.createElement(H.a,{title:"".concat(s.firstName," ").concat(s.lastName),subheader:a}),r.a.createElement(he.a,null,r.a.createElement(Ee.a,{variant:"h5",component:"h2"},r.a.createElement(G.a,{content:"dashboard.id"}),s.id),r.a.createElement(be.a,{className:t.list,subheader:r.a.createElement("li",null)},r.a.createElement("ul",{className:t.ul},r.a.createElement(ke.a,{className:t.header},r.a.createElement(G.a,{content:"dashboard.groupList"})),0===u.length?r.a.createElement(Ee.a,null,r.a.createElement(G.a,{content:"dashboard.groupInfo"})):u.map((function(e){var t=e.name,a=e.id;return r.a.createElement(Oe.a,{button:!0,key:a,onClick:function(){return h(t)}},r.a.createElement(ve.a,{primary:t,key:t}))}))))))}je.defaultProps={groupList:[],user:null,socket:null,isLoaded:!1};var Se=Object(i.c)((function(e){return{user:e.auth.user,socket:e.socket.socket,groupList:e.socket.groupList,token:e.auth.token,isLoaded:e.socket.isLoaded}}),{initGroup:function(e){return function(t){Object.keys(e).includes("teams")?t({type:"INIT_GROUPS",payload:e.teams}):t({type:"NO_GROUPS"})}},push:M.d,initTask:function(e,t,a){return function(n){var r=t.find((function(t){return t.name===e}));console.log("id: ",r.id.toString());var o={headers:{authorization:r.id.toString()}};Y()("http://localhost:4000/user/team",o).then((function(e){a.emit("joinRoom",r.id.toString()),n({type:"INIT_TASK",payload:e.data})})).catch((function(){n({type:"INIT_TASK_FAIL"})}))}},loadingtoggle:Q,initId:function(e,t){return function(a){a({type:"INIT_ID",payload:e.find((function(e){return e.name===t})).id})}}})(je);var we=function(){return r.a.createElement("div",null,r.a.createElement(ge,null),r.a.createElement(Se,null))},Te=a(242),Le=a(243),Ne=a(244);x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var Ce=Object(R.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{margin:e.spacing(1)}}}));var Ie=function(){var e=Ce();return Object(n.useEffect)((function(){x.a.setLocale(localStorage.getItem("lang")||"fr")})),r.a.createElement("div",{className:e.root},r.a.createElement(Te.a,{position:"static"},r.a.createElement(Le.a,null,r.a.createElement(Ee.a,{variant:"h6",className:e.title},"Organiz"),r.a.createElement("button",{type:"button",onClick:function(){localStorage.setItem("lang","fr"),x.a.setLocale(localStorage.getItem("lang"))}},"FR"),r.a.createElement("button",{type:"button",onClick:function(){localStorage.setItem("lang","en"),x.a.setLocale(localStorage.getItem("lang"))}},"EN"),r.a.createElement(Ne.a,{href:"/login",color:"inherit",className:e.link},r.a.createElement(G.a,{content:"login.login"})),r.a.createElement(Ne.a,{href:"/register",color:"inherit",className:e.link},r.a.createElement(G.a,{content:"register.register"})))))};function Ae(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var _e=Object(R.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function Pe(e){var t=e.user,a=e.taskList,o=e.socket,c=Object(n.useState)(!1),i=Object(P.a)(c,2),l=i[0],s=i[1],u=_e(),m=r.a.useState(Ae),d=Object(P.a)(m,1)[0],p=Object(n.useState)(""),f=Object(P.a)(p,2),g=f[0],E=f[1],h=Object(n.useState)(""),b=Object(P.a)(h,2),O=b[0],v=b[1],k=function(){s(!l)};return r.a.createElement("div",null,r.a.createElement(V.a,{onClick:k},r.a.createElement(G.a,{content:"taskForm.button"})),r.a.createElement(me.a,{open:l,onClose:function(){return s(!1)}},r.a.createElement("div",{style:d,className:u.paper},r.a.createElement("h2",{id:"simple-modal-title"},r.a.createElement(G.a,{content:"taskForm.title"})),r.a.createElement("div",null,r.a.createElement(U.a,null,r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"taskForm.name"})),r.a.createElement(z.a,{className:"form-control",name:"cardName",id:"cardName",onChange:function(e){return E(e.target.value)},type:"text",required:!0}))),r.a.createElement("div",null,r.a.createElement(U.a,null,r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"taskForm.content"})),r.a.createElement(z.a,{className:"form-control",name:"content",id:"content",onChange:function(e){return v(e.target.value)},type:"text"}))),r.a.createElement("div",null,r.a.createElement(V.a,{variant:"contained",onClick:function(){var n={content:O,cardName:g,team:a.team,users:[{id:t.id}]};console.log("body: ",n),e.createTask(n,o),k()}},r.a.createElement(G.a,{content:"taskForm.submit"}))))))}Pe.defaultProps={taskList:null,user:null,socket:null};var Re=Object(i.c)((function(e){return{taskList:e.socket.taskList,user:e.auth.user,socket:e.socket.socket}}),{addTaskTeam:function(e,t){return function(a){t.on(e.team.id,(function(){t.emit("addTaskToTeam",e)})),a({type:"ADD_TASK",payload:e})}},createTask:function(e,t){return function(a){t.emit("createTask",e),a({type:"CREATE_TASK",payload:e})}}})(Pe),De=a(246),xe=a(245),Fe=a(247),Ge=a(68),Ue=a(119),ze=a.n(Ue),Ke=a(120),Be=a.n(Ke),He=Object(R.a)((function(e){return{card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Ge.a[500]}}}));function Ve(e){var t=e.taskcontent,a=e.tasktitle,n=He();return r.a.createElement(B.a,{className:n.card},r.a.createElement(H.a,{avatar:r.a.createElement(xe.a,{"aria-label":"recipe",className:n.avatar},"TS"),title:a,subheader:"September 14, 2016"}),r.a.createElement(he.a,null,r.a.createElement(Ee.a,{variant:"body2",color:"textSecondary",component:"p"},t)),r.a.createElement(De.a,{disableSpacing:!0},r.a.createElement(Fe.a,{"aria-label":"add to favorites"},r.a.createElement(ze.a,null)),r.a.createElement(Fe.a,{"aria-label":"update"},r.a.createElement(Be.a,null))))}Ve.defaultProps={taskcontent:"",tasktitle:""};var Me=Ve;function qe(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var Ye=Object(R.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function Je(e){var t=Object(n.useState)(!1),a=Object(P.a)(t,2),o=a[0],c=a[1],i=Ye(),l=r.a.useState(qe),s=Object(P.a)(l,1)[0],u=e.socket,m=e.taskList,d=Object(n.useState)(""),p=Object(P.a)(d,2),f=p[0],g=p[1],E=function(){c(!o)};return r.a.createElement("div",null,r.a.createElement(V.a,{onClick:E},r.a.createElement(G.a,{content:"userForm.button"})),r.a.createElement(me.a,{open:o,onClose:function(){return c(!1)}},r.a.createElement("div",{style:s,className:i.paper},r.a.createElement("h2",{id:"simple-modal-title"},r.a.createElement(G.a,{content:"userForm.title"})),r.a.createElement(U.a,null,r.a.createElement(K.a,{htmlFor:"component-simple"},r.a.createElement(G.a,{content:"userForm.id"})),r.a.createElement(z.a,{className:"form-control",id:"id",onChange:function(e){g(e.target)},type:"text",name:"id",required:!0})),r.a.createElement(V.a,{variant:"contained",onClick:function(){e.addUserTeam(m.team.id,parseInt(f,10),u),E()}},r.a.createElement(G.a,{content:"userForm.submit"})))))}Je.defaultProps={socket:null,taskList:null};var Xe=Object(i.c)((function(e){return{socket:e.socket.socket,taskList:e.socket.taskList}}),{addUserTeam:function(e,t,a){return function(n){var r={teamId:e,userId:t};a.emit("addUserToTeam",r),n({type:"ADD_USER_TEAM"})}}})(Je);x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);function We(e){var t=e.tlist;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(G.a,{content:"taskList.title",component:"h1"})),r.a.createElement("div",null,r.a.createElement(Re,null)),r.a.createElement("div",null,r.a.createElement(Xe,null)),r.a.createElement("div",null,console.log("list: ",t),t.team.task.length>0?t.team.task.map((function(e){return r.a.createElement(Me,{key:e.cardName,taskcontent:e.content,tasktitle:e.cardName})})):r.a.createElement(Ee.a,null,r.a.createElement(G.a,{content:"taskList.emptyList"}))))}We.defaultProps={tlist:null};var Qe=Object(i.c)((function(e){return{tlist:e.socket.taskList}}))(We),Ze=a(17),$e=a(249),et=a(248),tt=a(121),at=a.n(tt),nt=a(63);x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var rt=[r.a.createElement(G.a,{content:"menu_button.dashboard"})],ot=["/"],ct=48;function it(e){var t=r.a.useState(null),a=Object(P.a)(t,2),n=a[0],o=a[1],c=Boolean(n),i=function(){e.push("/".concat(e.user.firstName,"/").concat(e.user.lastName,"/dashboard")),o(null)},l=function(e){return ot[rt.indexOf(e)]};return r.a.createElement("div",null,r.a.createElement(Fe.a,{"aria-label":"menu","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(at.a,null)),r.a.createElement($e.a,{id:"long-menu",anchorEl:n,keepMounted:!0,open:c,onClose:i,PaperProps:{style:{maxHeight:4.5*ct,width:200}}},rt.map((function(e){return r.a.createElement(nt.a,{key:e,to:l(e)},r.a.createElement(et.a,{key:e,onClick:i},e))}))))}it.defaultProps={user:null};var lt=Object(i.c)((function(e){return{user:e.auth.user}}),{push:M.d})(it),st=a(122),ut=a.n(st);x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var mt=[r.a.createElement(G.a,{content:"disconnect"})],dt=48;var pt=Object(i.c)(null,{logout:function(){return{type:"LOGOUT_SUCCESS"}},push:M.d})((function(e){var t=r.a.useState(null),a=Object(P.a)(t,2),n=a[0],o=a[1],c=Boolean(n),i=function(){e.logout(),e.push("/login"),o(null)};return r.a.createElement("div",null,r.a.createElement(Fe.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(ut.a,null)),r.a.createElement($e.a,{id:"long-menu",anchorEl:n,keepMounted:!0,open:c,onClose:i,PaperProps:{style:{maxHeight:4.5*dt,width:200}}},mt.map((function(e){return r.a.createElement(et.a,{key:e,onClick:i},e)}))))}));x.a.registerTranslations("fr",Z),x.a.registerTranslations("en",$);var ft=Object(R.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(g.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ze.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ze.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));var gt=function(){var e=ft();return Object(n.useEffect)((function(){x.a.setLocale(localStorage.getItem("lang")||"fr")})),r.a.createElement("div",{className:e.root},r.a.createElement(Te.a,{position:"static"},r.a.createElement(Le.a,null,r.a.createElement(lt,null),r.a.createElement(Ee.a,{className:e.title,variant:"h5",noWrap:!0},"Organiz"),r.a.createElement("button",{type:"button",onClick:function(){localStorage.setItem("lang","fr"),x.a.setLocale(localStorage.getItem("lang"))}},"FR"),r.a.createElement("button",{type:"button",onClick:function(){localStorage.setItem("lang","en"),x.a.setLocale(localStorage.getItem("lang"))}},"EN"),r.a.createElement(pt,null))))},Et=function(e){var t=e.isAuthentificated;return r.a.createElement("div",null,r.a.createElement(d.a,{history:T},t?r.a.createElement(gt,null):r.a.createElement(Ie,null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(N.d,null,r.a.createElement(_,{path:"/group/:name",auth:t,funct:Qe}),r.a.createElement(_,{path:"/:firstname/:lastname/dashboard",auth:t,funct:we}),r.a.createElement(N.b,{exact:!0,path:"/login",component:ue}),r.a.createElement(N.b,{path:"/register",component:ne}),r.a.createElement(N.b,{exact:!0,path:"/",component:ue})))))};Et.defaultProps={isAuthentificated:null};var ht,bt=Object(i.c)((function(e){return{isAuthentificated:e.auth.isAuthentificated}}))(Et),Ot=Object(s.e)(w(T),ht,Object(s.d)(s.a.apply(void 0,[Object(u.a)(T)].concat(L)),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(i.a,{store:Ot},r.a.createElement("div",{className:"App"},r.a.createElement(bt,null))),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.7b500e87.chunk.js.map