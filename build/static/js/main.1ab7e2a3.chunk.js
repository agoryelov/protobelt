(this["webpackJsonpclient-basic"]=this["webpackJsonpclient-basic"]||[]).push([[0],{215:function(e,t,a){e.exports=a.p+"static/media/Emblem_Diamond.c9018327.png"},216:function(e,t,a){e.exports=a.p+"static/media/Emblem_Platinum.86ac5170.png"},217:function(e,t,a){e.exports=a.p+"static/media/Emblem_Gold.19be519b.png"},218:function(e,t,a){e.exports=a.p+"static/media/Emblem_Silver.3a4aa1a5.png"},219:function(e,t,a){e.exports=a.p+"static/media/Emblem_Bronze.39964f7f.png"},228:function(e,t,a){e.exports=a.p+"static/media/cat.230789f7.png"},250:function(e,t,a){e.exports=a(414)},381:function(e,t,a){},411:function(e,t){},414:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a(12),o=a(33),l=a(469),u=a(455),s=a(452),m=a(457),d=a(456),p=a(458),f=a(232),g=a(474),b=a(17),v=a(23),h=a(52),E=a.n(h),O=E.a.create();O.interceptors.request.use((function(e){var t=localStorage.getItem("PROTONEKOT");return e.headers.Authorization="".concat(t),e}));var j=O;E.a.create().interceptors.request.use((function(e){var t=localStorage.getItem("PROTONEKOT");return e.headers.Authorization="".concat(t),e}));var S={isFetching:!1,isAuthenticated:!!localStorage.getItem("PROTONEKOT"),errorMessage:"",username:localStorage.getItem("PROTONEKOT")?localStorage.getItem("PROTOUSERNAME"):"",worth:localStorage.getItem("PROTONEKOT")?localStorage.getItem("PROTOWORTH"):0};function w(e,t){return{type:"LOGIN_SUCCESS",username:e,worth:t}}function y(e){return{type:"LOGIN_FAILURE",errorMessage:e}}function x(e){return localStorage.PROTOWORTH=e,{type:"UPDATE_WORTH",worth:e}}function T(){return function(e){j.get("/api/bet/worth").then((function(t){e(x(t.data.worth))}))}}var R=a(48),A=a(212),I=a.n(A),C=a(213),P=a.n(C),N=a(79),z=a.n(N),k=a(34),L=a(43),D=a.n(L);function _(){var e=Object(o.a)(["\n    margin-right: 10px;\n    margin-left: 30px;\n    font-size: 50px;\n    cursor: pointer;\n"]);return _=function(){return e},e}function B(){var e=Object(o.a)(["\n    font-size: 2em;\n    cursor: pointer;\n"]);return B=function(){return e},e}function U(){var e=Object(o.a)(["\n    width: 100vw;\n    height: 75px;\n    padding: 10px;\n"]);return U=function(){return e},e}var W=Object(k.a)(s.a)(U()),M=k.a.a(B()),F=Object(k.a)(I.a)(_());var G=Object(b.b)((function(e){var t=e.auth;return{isAuthenticated:t.isAuthenticated,worth:t.worth}}))((function(e){var t=e.worth,a=e.isAuthenticated,c=e.dispatch,o=Object(n.useState)(null),b=Object(i.a)(o,2),v=b[0],h=b[1],E=Boolean(v);Object(n.useEffect)((function(){c(T())}),[]);var O=function(e){e.preventDefault(),Object(R.b)("/login")},j=function(e){e.preventDefault(),Object(R.b)("/")},S=function(e){e.preventDefault(),h(e.currentTarget)};return r.a.createElement(W,{container:!0,alignItems:"center",justify:"space-between",direction:"row",component:p.a,square:!0,elevation:3},r.a.createElement(l.a,{component:s.a,item:!0,container:!0,alignItems:"center",xs:6},r.a.createElement(F,{onClick:j}),r.a.createElement(M,{onClick:j},"Protobelt ")),r.a.createElement(l.a,{component:s.a,pr:3,item:!0,container:!0,alignItems:"center",justify:"flex-end",xs:6},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{fontSize:25,mr:3,fontFamily:"'Lato', sans-serif"},r.a.createElement("img",{alt:"poro",src:D.a,height:"20px"})," ",r.a.createElement(z.a,{duration:1.5,end:parseInt(t),start:0,preserveValue:!0})),r.a.createElement(u.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(l.a,{ml:1},r.a.createElement(d.a,{onClick:S},r.a.createElement(P.a,{fontSize:"large"})))):r.a.createElement(m.a,{size:"large",onClick:O},"Login"),r.a.createElement(f.a,{anchorEl:v,keepMounted:!0,open:E,onClose:function(){h(null)}},r.a.createElement(g.a,{onClick:function(e){e.preventDefault(),Object(R.b)("/me")}},"Profile"),r.a.createElement(g.a,{onClick:function(e){e.preventDefault(),c((delete localStorage.PROTONEKOT,delete localStorage.PROTOUSERNAME,delete localStorage.PROTOWORTH,{type:"LOGOUT"}))}},"Logout"))))})),H=a(214),K=a.n(H);var V={hideControls:!1,muted:!0,quality:{default:720},loop:{active:!0},controls:["play-large","play","progress","volume","fullscreen"]};var q=Object(b.b)((function(e){return{currentReplay:e.bets.videoSrc}}))((function(e){var t=e.currentReplay,a=Object(n.useState)(null),c=Object(i.a)(a,2);return c[0],c[1],Object(n.useEffect)((function(){new K.a(".js-plyr",V)}),[]),r.a.createElement(l.a,{width:1280,height:720,maxHeight:1,maxWidth:1},r.a.createElement("div",{className:"plyr__video-embed js-plyr"},r.a.createElement("iframe",{title:"LoL Replay",src:"https://www.youtube.com/embed/".concat(t,"?origin=http://localhost:3000&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"),allowFullScreen:!0,allow:"autoplay"})))})),Y=a(459),Q=a(467),J=a(473),$=a(470);var X=Object(b.b)((function(e){var t=e.bets;return{isAuthenticated:e.auth.isAuthenticated,isPlaced:t.isPlaced,isBetting:t.isBetting}}))((function(e){var t=e.isPlaced,a=e.isBetting,c=e.isAuthenticated,o=e.dispatch,u=Object(n.useState)(""),s=Object(i.a)(u,2),d=s[0],p=s[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),v=b[0],h=b[1],E=Object(n.useState)(t),O=Object(i.a)(E,2),S=O[0],w=O[1],y=Object(n.useState)(""),R=Object(i.a)(y,2),A=R[0],I=R[1],C=Object(n.useState)(!1),P=Object(i.a)(C,2),N=P[0],z=P[1],k=Object(n.useState)(""),L=Object(i.a)(k,2),_=L[0],B=L[1],U=Object(n.useState)(!1),W=Object(i.a)(U,2),M=W[0],F=W[1];return Object(n.useEffect)((function(){w(!(!t&&a&&c))}),[t,a]),Object(n.useEffect)((function(){o(T())}),[a]),r.a.createElement(l.a,{display:"flex",justifyContent:"center",alignItems:"center",p:3},r.a.createElement(Q.a,{style:{width:"170px"},label:"Bet amount",variant:"outlined",size:"small",value:d,onChange:function(e){return p(e.target.value)},InputProps:{startAdornment:r.a.createElement(Y.a,{position:"start"},r.a.createElement("img",{alt:"poro",src:D.a,height:"15px"}))}}),r.a.createElement(l.a,{mx:2},r.a.createElement(Q.a,{style:{width:"125px"},select:!0,label:"Rank tier",variant:"outlined",size:"small",value:v,onChange:function(e){return h(e.target.value)},SelectProps:{MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},getContentAnchorEl:null}}},r.a.createElement(g.a,{value:"diamond"},"Diamond"),r.a.createElement(g.a,{value:"platinum"},"Platinum"),r.a.createElement(g.a,{value:"gold"},"Gold"),r.a.createElement(g.a,{value:"silver"},"Silver"),r.a.createElement(g.a,{value:"bronze"},"Bronze"))),r.a.createElement(m.a,{variant:"contained",disabled:S,onClick:function(e){return e.preventDefault(),!d||isNaN(d)?(B("Please select valid bet amount"),void F(!0)):v?void j.post("/bet/place",{amount:d,pick:v}).then((function(e){var t;I("You placed $ ".concat(d," on ").concat("string"!==typeof(t=v)?"":t.charAt(0).toUpperCase()+t.slice(1))),z(!0),w(!0),o(x(e.data.newWorth))})).catch((function(){B("Unable to place bet"),F(!0)})).then((function(){p(""),h("")})):(B("Please select rank"),void F(!0))}},"Place"),r.a.createElement(J.a,{open:N,autoHideDuration:6e3,onClose:function(){return z(!1)}},r.a.createElement($.a,{severity:"success"},A)),r.a.createElement(J.a,{open:M,autoHideDuration:6e3,onClose:function(){return F(!1)}},r.a.createElement($.a,{severity:"warning"},_)))})),Z=a(35),ee=a(462),te=a(463),ae=a(460),ne=a(461),re=a(475),ce=a(215),ie=a.n(ce),oe=a(216),le=a.n(oe),ue=a(217),se=a.n(ue),me=a(218),de=a.n(me),pe=a(219),fe=a.n(pe);function ge(){var e=Object(o.a)(["\n    margin: 0 auto;\n    width: 35px;\n    height: 40px;\n"]);return ge=function(){return e},e}function be(){var e=Object(o.a)(["\n    width: 15%;\n    padding: 0;\n    background-color: rgba(0, 0, 0, .1);\n"]);return be=function(){return e},e}function ve(){var e=Object(o.a)(["\n    height: 60px;\n    padding: 0;\n"]);return ve=function(){return e},e}var he=Object(k.a)(ae.a)(ve()),Ee=Object(k.a)(ne.a)(be()),Oe=Object(k.a)(re.a)(ge()),je=[{name:"diamond",oddsColor:"rgba(88,167,255,0.5)",icon:ie.a},{name:"platinum",oddsColor:"rgba(0,153,144,0.75)",icon:le.a},{name:"gold",oddsColor:"rgba(255,202,77,0.75)",icon:se.a},{name:"silver",oddsColor:"rgba(217,217,217,0.75)",icon:de.a},{name:"bronze",oddsColor:"rgba(217,112,0,0.60)",icon:fe.a}],Se={diamond:0,platinum:1,gold:2,silver:3,bronze:4};var we=Object(b.b)((function(e){var t=e.bets;return{amounts:t.totals,revealedAnswer:t.revealedAnswer}}))((function(e){var t=e.amounts,a=e.revealedAnswer,c=Object(n.useState)(Object(Z.a)(t)),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)([0,0,0,0,0]),d=Object(i.a)(m,2),p=d[0],f=d[1],g=Object(n.useState)("rgba(230,229,232,1)"),b=Object(i.a)(g,2),v=b[0],h=b[1];return Object(n.useEffect)((function(){if(""===a){s(Object(Z.a)(t));var e=t[0]+t[1]+t[2]+t[3]+t[4],n=Object(Z.a)(t);for(var r in n)n[r]=n[r]/e*100;f(n)}}),[t,a]),Object(n.useEffect)((function(){var e=Object(Z.a)(t);if(""===a)h("rgba(230,229,232,1)"),s(Object(Z.a)(e));else{var n=t[0]+t[1]+t[2]+t[3]+t[4];e[Se[a]]=n,h("rgba(230,229,232,0.4)"),s(Object(Z.a)(e))}}),[a]),r.a.createElement(l.a,null,r.a.createElement(ee.a,{variant:"outlined"},r.a.createElement(te.a,null,p.map((function(e,t){return r.a.createElement(he,{key:t,hover:!0},r.a.createElement(Ee,{align:"center"},r.a.createElement(Oe,{alt:"Diamond",src:je[t].icon})),r.a.createElement(ne.a,{align:"left"},r.a.createElement(l.a,{color:je[t].oddsColor,fontSize:15,fontFamily:"'Lato', sans-serif"},r.a.createElement(z.a,{duration:1,end:e,start:0,decimals:2,preserveValue:!0}),"%")),r.a.createElement(ne.a,{align:"right"},r.a.createElement(l.a,{fontSize:18,fontFamily:"'Lato', sans-serif",color:a===je[t].name?"#4caf50":v},r.a.createElement("img",{alt:"poro",src:D.a,height:"15px"})," ",r.a.createElement(z.a,{duration:2.5,end:u[t],start:0,preserveValue:!0}))))})))))})),ye=a(220),xe=a.n(ye),Te=a(471),Re=a(466),Ae=new xe.a,Ie={diamond:0,platinum:1,gold:2,silver:3,bronze:4};var Ce=function(e){var t=e[0]+e[1]+e[2]+e[3]+e[4],a=Object(Z.a)(e);for(var n in a){var r=parseInt(a[n]/t*100);isNaN(r)||r<5?a[n]=5:a[n]=r}return a};var Pe=Object(b.b)((function(e){var t=e.bets;return{isBetting:t.isBetting,revealedAnswer:t.revealedAnswer,totals:t.totals,timeStarted:t.timeStarted,bettingInterval:t.bettingInterval}}))((function(e){var t=e.totals,a=e.revealedAnswer,c=e.isBetting,o=e.timeStarted,u=e.bettingInterval,s=Object(n.useState)([5,5,5,5,5]),m=Object(i.a)(s,2),d=m[0],p=m[1];Object(n.useEffect)((function(){if(a){E(u/1e3);var e=[0,0,0,0,0];e[Ie[a]]=100,p([].concat(e))}}),[a]),Object(n.useEffect)((function(){if(""===a){var e=Ce(t);p(Object(Z.a)(e))}}),[t]);var f,g,b=Object(n.useState)(u/1e3),v=Object(i.a)(b,2),h=v[0],E=v[1],O=function(e){var t=e.detail.timer.getTotalTimeValues().seconds;E(t)};return Object(n.useEffect)((function(){return c?(Ae.start({precision:"seconds",startValues:{seconds:(u-(Date.now()-o))/1e3},countdown:!0}),Ae.on("secondsUpdated",O)):E(0),function(){Ae.off("secondsUpdated",O)}}),[c]),r.a.createElement(l.a,{width:1,height:1},r.a.createElement("svg",{viewBox:"0 0 400 400",width:"100%",height:"100%"},r.a.createElement(Re.a,{padAngle:3,cornerRadius:5,standalone:!1,innerRadius:150,radius:200,labels:function(){return null},animate:{duration:1e3},colorScale:["#58a7ff","#00d47f","#ffca4d","#d9d9d9","#d97000"],data:[{y:d[0]},{y:d[1]},{y:d[2]},{y:d[3]},{y:d[4]}]}),r.a.createElement(Re.a,{standalone:!1,radius:125,innerRadius:115,labels:function(){return null},animate:{duration:1e3,easing:"linear"},colorScale:["rgba(200,207,228,.3)","rgba(200,207,228,1)"],data:[{y:u/1e3-h},{y:h}]}),""===a?(g=h,r.a.createElement(Te.a,{textAnchor:"middle",verticalAnchor:"middle",x:200,y:200,text:"".concat(g,"s"),style:{fontSize:45,fill:"#e6e5e8"}})):(f=a,r.a.createElement(Te.a,{textAnchor:"middle",verticalAnchor:"middle",x:200,y:200,text:"".concat(f.toUpperCase()),style:{fontSize:40,fill:"#e6e5e8"}}))))}));var Ne=function(){return r.a.createElement(l.a,{component:s.a,container:!0,justify:"center"},r.a.createElement(l.a,{component:s.a,container:!0,item:!0,md:12,lg:10,xl:9},r.a.createElement(l.a,{component:s.a,item:!0,xs:12,md:6,p:4},r.a.createElement(l.a,{height:400,width:1},r.a.createElement(Pe,null))),r.a.createElement(l.a,{component:s.a,item:!0,xs:12,md:6,p:4},r.a.createElement(l.a,{component:p.a,height:340,width:1},r.a.createElement(q,null)),r.a.createElement(l.a,{component:"div",height:60,width:1},r.a.createElement(X,null))),r.a.createElement(l.a,{component:s.a,item:!0,xs:12,md:6,p:4},r.a.createElement(l.a,{component:p.a,height:300,width:1},r.a.createElement(we,null))),r.a.createElement(l.a,{component:s.a,item:!0,xs:12,md:6,p:4},r.a.createElement(l.a,{component:p.a,height:300,width:1}))))},ze=a(228),ke=a.n(ze);var Le=Object(b.b)((function(e){var t=e.auth;return{username:t.username,worth:t.worth}}))((function(e){var t=e.username,a=e.worth;return r.a.createElement(l.a,{display:"flex",justifyContent:"center",alignItems:"center",height:1,flexDirection:"column"},r.a.createElement("img",{src:ke.a,width:100,height:"auto"}),r.a.createElement(l.a,{component:p.a,p:6,width:450,elevation:3,textAlign:"center",fontSize:"25px"},"Hello, ",r.a.createElement("b",null,t),"! ",r.a.createElement("br",null)," You have ",r.a.createElement("img",{src:D.a,height:"20px"})," ",r.a.createElement("b",null,a)," poros"))})),De=a(416);var _e=Object(b.b)((function(e){return e.auth}))((function(e){var t=e.toggleLogin,a=e.dispatch,c=Object(n.useState)(""),o=Object(i.a)(c,2),u=o[0],d=o[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),g=f[0],b=f[1];return r.a.createElement(l.a,{component:s.a,container:!0,direction:"column",alignItems:"center"},r.a.createElement(De.a,{component:l.a,pb:3,align:"center",variant:"h4",color:"primary"},"Sign in"),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%",pb:4,pt:2},r.a.createElement(Q.a,{fullWidth:!0,label:"Username",variant:"outlined",onChange:function(e){return d(e.target.value)}})),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%",pb:4},r.a.createElement(Q.a,{fullWidth:!0,label:"Password",variant:"outlined",type:"password",onChange:function(e){return b(e.target.value)}})),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%",pb:2},r.a.createElement(m.a,{fullWidth:!0,variant:"contained",color:"primary",size:"large",onClick:function(e){var t;e.preventDefault(),a((t={username:u,password:g},function(e){e({type:"LOGIN_REQUEST"}),E.a.post("/api/user/login",t).then((function(t){var a=t.data,n=a.token,r=a.user;localStorage.PROTONEKOT=n,localStorage.PROTOUSERNAME=r.username,localStorage.PROTOWORTH=r.worth,e(w(r.username,r.worth))})).catch((function(t){e(y(t.message))}))}))}},"Login")),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%"},r.a.createElement(m.a,{fullWidth:!0,variant:"contained",size:"medium",onClick:function(e){e.preventDefault(),t(!1)}},"Sign up")))}));var Be=Object(b.b)()((function(e){var t=e.toggleLogin,a=e.dispatch,c=Object(n.useState)(""),o=Object(i.a)(c,2),u=o[0],d=o[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),g=f[0],b=f[1];return r.a.createElement(l.a,{component:s.a,container:!0,direction:"column",alignItems:"center"},r.a.createElement(De.a,{component:l.a,pb:3,align:"center",variant:"h4",color:"primary"},"Sign up"),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%",pb:4,pt:2},r.a.createElement(Q.a,{fullWidth:!0,label:"Username",variant:"outlined",onChange:function(e){return d(e.target.value)}})),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%",pb:4},r.a.createElement(Q.a,{fullWidth:!0,label:"Password",variant:"outlined",type:"password",onChange:function(e){return b(e.target.value)}})),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%",pb:2},r.a.createElement(m.a,{fullWidth:!0,variant:"contained",color:"primary",size:"large",onClick:function(e){var t;e.preventDefault(),a((t={username:u,password:g},function(e){e({type:"LOGIN_REQUEST"}),E.a.post("/api/user/create",t).then((function(t){var a=t.data,n=a.token,r=a.user;localStorage.PROTONEKOT=n,localStorage.PROTOUSERNAME=r.username,localStorage.PROTOWORTH=r.worth,e(w(r.username,r.worth))})).catch((function(t){e(y(t.message))}))})),console.log("signing up...")}},"Sign up")),r.a.createElement(l.a,{component:s.a,item:!0,width:"100%"},r.a.createElement(m.a,{fullWidth:!0,variant:"contained",size:"medium",onClick:function(e){e.preventDefault(),t(!0)}},"Log in")))}));var Ue=Object(b.b)((function(e){var t=e.auth;return{errorMessage:t.errorMessage,isAuthenticated:t.isAuthenticated}}))((function(e){var t=e.isAuthenticated,a=e.errorMessage,c=e.dispatch,o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(n.useState)(!0),f=Object(i.a)(d,2),g=f[0],b=f[1];return Object(n.useEffect)((function(){t&&Object(R.b)("/")})),Object(n.useEffect)((function(){m(!!a)}),[a]),r.a.createElement(l.a,{display:"flex",justifyContent:"center",alignItems:"center",height:1},r.a.createElement(l.a,{component:p.a,p:6,width:400,elevation:3},g?r.a.createElement(_e,{toggleLogin:b}):r.a.createElement(Be,{toggleLogin:b})),r.a.createElement(J.a,{open:s,autoHideDuration:5e3,onClose:function(){s&&(m(!1),c({type:"DISMISS_ERROR"}))}},r.a.createElement($.a,{severity:"warning"},a)))}));var We=function(){return r.a.createElement("h1",null,"404 Not Found")};function Me(){var e=Object(o.a)(["\n  height: calc(100vh - 75px);\n  overflow-x: hidden;\n  padding: 30px;\n  box-sizing: border-box;\n"]);return Me=function(){return e},e}var Fe=Object(k.a)(R.a)(Me());var Ge=function(){return r.a.createElement(Fe,null,r.a.createElement(Ne,{path:"/"}),r.a.createElement(Le,{path:"/me"}),r.a.createElement(Ue,{path:"/login"}),r.a.createElement(We,{default:!0}))},He=a(465),Ke=a(464),Ve=a(231),qe=Object(Ve.a)({palette:{type:"dark",primary:{main:"#1EB890",dark:"#045D56",contrastText:"#fff"},text:{primary:"#e6e5e8"},background:{default:"#1c2025",paper:"#282C34"}},typography:{testx:{fontFamily:"'Times New Roman', serif",fontSize:"100px"}}});var Ye=function(){return r.a.createElement(Ke.a,{theme:qe},r.a.createElement(He.a,null),r.a.createElement(l.a,{bgcolor:"background.default",color:"text.primary"},r.a.createElement(G,null),r.a.createElement(Ge,null)))},Qe=(a(381),a(51)),Je=a(229),$e={isPlaced:!1,isBetting:!1,totals:[0,0,0,0,0],timeStarted:0,bettingInterval:0,revealedAnswer:"",videoSrc:"bTqVqk7FSmY"};var Xe="PLACE_BET",Ze="UPDATE_BETS",et="START_BETTING",tt="STOP_BETTING",at="REVEAL_ANSWER",nt="HYDRATE";var rt=Object(Qe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return Object(v.a)({},e,{isFetching:!0,isAuthenticated:!1});case"LOGIN_SUCCESS":return Object(v.a)({},e,{isFetching:!1,isAuthenticated:!0,username:t.username,worth:t.worth});case"LOGIN_FAILURE":return Object(v.a)({},e,{isFetching:!1,isAuthenticated:!1,username:"",errorMessage:t.errorMessage});case"DISMISS_ERROR":return Object(v.a)({},e,{errorMessage:""});case"UPDATE_WORTH":return Object(v.a)({},e,{worth:t.worth});case"LOGOUT":return Object(v.a)({},e,{isFetching:!1,isAuthenticated:!1,username:"",worth:0});default:return e}},bets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(v.a)({},e,{isPlaced:!0});case Ze:return Object(v.a)({},e,{totals:t.totals});case et:return Object(v.a)({},e,{isPlaced:!1,isBetting:!0,timeStarted:t.timeStarted,videoSrc:t.videoSrc,bettingInterval:t.bettingInterval,revealedAnswer:""});case tt:return Object(v.a)({},e,{isBetting:!1});case at:return Object(v.a)({},e,{revealedAnswer:t.answer});case nt:return Object(v.a)({},e,{isBetting:!0,timeStarted:t.timeStarted,bettingInterval:t.bettingInterval,videoSrc:t.videoSrc,totals:t.totals,revealAnswer:t.answer});default:return e}}}),ct=a(230),it=a.n(ct);var ot={createEvents:function(e){var t=it()();t.on("hydrate",(function(t){var a,n,r,c,i,o;e((a=t.isBetting,n=t.timeStarted,r=t.bettingInterval,c=t.totals,i=t.revealedAnswer,o=t.videoSrc,{type:nt,isBetting:a,timeStarted:n,bettingInterval:r,totals:c,answer:i,videoSrc:o}))})),t.on("newBet",(function(t){e({type:Ze,totals:t})})),t.on("bettingStarted",(function(t){var a,n,r;e((a=t.timeStarted,n=t.bettingInterval,r=t.videoSrc,t.totals,{type:et,timeStarted:a,bettingInterval:n,videoSrc:r}))})),t.on("bettingStopped",(function(){e({type:tt})})),t.on("answerRevealed",(function(t){e({type:at,answer:t})}))}},lt=Object(Qe.d)(rt,void 0,Object(Qe.a)(Je.a));ot.createEvents(lt.dispatch),Object(c.render)(r.a.createElement(b.a,{store:lt},r.a.createElement(Ye,null)),document.getElementById("root"))},43:function(e,t,a){e.exports=a.p+"static/media/coin.f92b38ab.png"}},[[250,1,2]]]);
//# sourceMappingURL=main.1ab7e2a3.chunk.js.map