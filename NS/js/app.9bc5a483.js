(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bd250a3a"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/NS/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"29da":function(e,t,n){e.exports=n.p+"img/logomedium.77cc0832.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("AppNavigation"),n("v-main",{attrs:{transition:"slide-x-transition"}},[n("router-view")],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("v-app-bar",{staticClass:"green",attrs:{app:"",dark:""}},[o("v-btn",{attrs:{icon:""},on:{click:function(t){e.drawer=!e.drawer}}},[o("v-icon",[e._v("mdi-menu")])],1),e.RouteIsAutoshot?o("v-img",{staticClass:"ml-n9",attrs:{src:n("cc5f"),height:e.ImageHeight,contain:""},on:{click:function(t){e.drawer=!e.drawer}}}):o("v-img",{staticClass:"ml-n9",attrs:{src:n("29da"),height:e.ImageHeight,contain:""},on:{click:function(t){e.drawer=!e.drawer}}})],1),o("v-navigation-drawer",{staticClass:"white",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-list",{attrs:{nav:""}},e._l(e.items,(function(t){return o("v-list-item",{key:t.title,attrs:{link:"",to:t.link}},[o("v-list-item-icon",[o("v-icon",[e._v(e._s(t.icon))])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1)},i=[],c=(n("4160"),n("caad"),n("c975"),n("b0c0"),n("2532"),n("159b"),n("94ed")),l={name:"AppNavigation",data:function(){return{appTitle:"NitroSys Control Application",drawer:!1,items:[{title:"Temperature Control",icon:"mdi-thermometer",link:"/"},{title:"Yield Calculator",icon:"mdi-calculator",link:"/YieldCalc"},{title:"Autoshot",icon:c["a"],link:"/AutoShot"}],prominent:!1,configDone:!1}},computed:{PageTitle:function(){return"AutoShot"===this.$route.name?"Autoshot":"YieldCalc"===this.$route.name?"Yield Calculator":"Spray Foam Systems"},ImageHeight:function(){if(console.log(this.$vuetify.breakpoint.name),"AutoShot"===this.$route.name)switch(this.$vuetify.breakpoint.name){case"xs":return"50px";case"sm":return"50px";case"md":return"60px";case"lg":return"60px";default:return"60px"}else switch(this.$vuetify.breakpoint.name){case"xs":return"55px";case"sm":return"55px";case"md":return"65px";case"lg":return"65px";default:return"65px"}},RouteIsAutoshot:function(){return"AutoShot"===this.$route.name}},methods:{RequestConfiguration:function(){this.$socket.sendObj({WGPG:"Application_Configuration"})},RecieveMessage:function(e){try{if(e.data.includes("SystemConfig",0)&&!this.configDone){var t=e.data,n=t.indexOf("\n");n>0&&(t=t.substring(0,n));var o=JSON.parse(t);switch(o.Values.forEach((function(e){e.MGP.ParamVal})),o.MGP.ParamVal){case 0:this.items=[{title:"Temperature Control",icon:"mdi-thermometer",link:"/"},{title:"Yield Calculator",icon:"mdi-calculator",link:"/YieldCalc"}],"/AutoShot"===this.$route&&this.$router.push({path:"/"});break;case 2:"/AutoShot"!==this.$route&&this.$router.push({path:"/AutoShot"}),this.items=[{title:"Autoshot",icon:"mdi-engineering",link:"/AutoShot"}];default:this.items=[{title:"Temperature Control",icon:"mdi-thermometer",link:"/"},{title:"Yield Calculator",icon:"mdi-calculator",link:"/YieldCalc"},{title:"Autoshot",icon:c["a"],link:"/AutoShot"}];break}this.configDone=!0}}catch(a){console.log(a)}}},beforeMount:function(){var e=this;this.$options.sockets.onopen=function(){e.Connected=!0,e.RequestConfiguration()},this.$options.sockets.onclose=function(){e.Connected=!1},this.$options.sockets.onmessage=function(t){e.RecieveMessage(t)}}},u=l,p=n("2877"),m=Object(p["a"])(u,s,i,!1,null,"4b1b65a9",null),d=m.exports,h={name:"App",data:function(){return{Connected:!1}},components:{AppNavigation:d}},g=h,f=Object(p["a"])(g,a,r,!1,null,null,null),v=f.exports,T=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-divider",{staticClass:"mt-1 green",attrs:{light:""}}),n("Controls",{attrs:{TempData:e.TempData}})],1)},C=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-container",{staticClass:"pt-2"},[n("v-row",{staticClass:"flex-sm-nowrap",attrs:{align:"stretch",justify:"center"}},[n("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12",sm:"4"}},[n("v-card",[n("v-container",{staticClass:"mt-0 pt-0 pb-1"},[n("v-row",{staticClass:"flex-nowrap",attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"flex-nowrap",attrs:{cols:"8",sm:"12"}},[n("TempAdjustWidget",{attrs:{ZoneID:136,ZoneEnableProp:e.TempData.PreheatAEnabled,TempTargetProp:e.TempData.vPreheatTempA_Target,TempFeedbackProp:e.TempData.vPreheatTempA_F,ParameterID:"59",TitleProp:"A",Color:"red"},on:{toggleClicked:e.SendToggleMsg,saveClicked:e.SendSaveMsg}})],1)],1),n("v-row",[n("v-divider",{staticClass:"ml-3"})],1),n("v-row",{attrs:{justify:"center"}},[n("h1",{staticClass:"red--text"},[e._v(e._s(e.InletPressureA)+" PSI")])])],1)],1)],1),n("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12",sm:"4"}},[n("v-card",[n("v-container",{staticClass:"mt-0 pt-0 pb-1"},[n("v-row",{staticClass:"flex-nowrap",attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"flex-nowrap",attrs:{cols:"8",sm:"12"}},[n("TempAdjustWidget",{attrs:{ZoneID:137,ZoneEnableProp:e.TempData.HoseEnabled,TempTargetProp:e.TempData.vHoseTempA_Target,TempFeedbackProp:e.TempData.vHoseTempA_F,ParameterID:"61",TitleProp:"Hose",Color:"green"},on:{toggleClicked:e.SendToggleMsg,saveClicked:e.SendSaveMsg}})],1)],1)],1)],1)],1),n("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12",sm:"4"}},[n("v-card",[n("v-container",{staticClass:"mt-0 pt-0 pb-1"},[n("v-row",{staticClass:"flex-nowrap",attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"8",sm:"12"}},[n("TempAdjustWidget",{attrs:{ZoneID:138,ZoneEnableProp:e.TempData.PreheatBEnabled,TempTargetProp:e.TempData.vPreheatTempB_Target,TempFeedbackProp:e.TempData.vPreheatTempB_F,ParameterID:"60",TitleProp:"B",Color:"blue"},on:{toggleClicked:e.SendToggleMsg,saveClicked:e.SendSaveMsg}})],1)],1),n("v-row",[n("v-divider")],1),n("v-row",{attrs:{justify:"center"}},[n("h1",{staticClass:"blue--text"},[e._v(e._s(e.InletPressureB)+" PSI")])])],1)],1)],1)],1)],1)],1)},S=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-container",{staticClass:"mt-0 pt-0 mb-0 pb-0",attrs:{fluid:""}},[n("v-row",{staticClass:"flex-nowrap",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"mt-0 pa-0",attrs:{justify:"center",align:"center"}},[n("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},[n("h1",{class:e.Color+"--text"},[e._v(e._s(e.TitleProp))])]),n("v-scale-transition",[e.selected?n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("v-slider",{attrs:{min:"70",max:"200","hide-details":""},model:{value:e.TempTarget,callback:function(t){e.TempTarget=t},expression:"TempTarget"}}),n("v-btn",{attrs:{dark:"",color:e.ZoneBtnColor},on:{click:e.ToggleZoneEnable}},[e._v(e._s(e.ZoneEnabled))])],1)],1):e._e()],1),n("v-row",{staticClass:"mt-2 pt-0",attrs:{align:"start",justify:"center"}},[e.selected?n("v-btn",{staticClass:"grey mr-1",attrs:{icon:""},on:{click:e.Decrement}},[n("v-icon",[e._v("mdi-minus")])],1):e._e(),n("v-btn",{staticClass:"grey lighten-2",attrs:{outlined:e.selected},on:{click:e.AdjustBtnClick}},[n("h1",[e._v(e._s(e.UpdateTempTarget)+"°F")])]),e.selected?n("v-btn",{staticClass:"grey ml-1",attrs:{icon:""},on:{click:e.Increment}},[n("v-icon",[e._v("mdi-plus")])],1):e._e()],1),n("v-scale-transition",[e.selected?n("v-row",{staticClass:"mt-1 pt-1",attrs:{align:"top",justify:"center"}},[n("v-btn",{staticClass:"red mr-5",attrs:{icon:""},on:{click:function(t){e.selected=!1}}},[n("v-icon",[e._v("mdi-close")])],1),n("v-btn",{staticClass:"green",attrs:{icon:""},on:{click:e.SaveBtnClick}},[n("v-icon",[e._v("mdi-check")])],1)],1):e._e()],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",[e._v(e._s(e.TempFeedbackProp)+"°F ")]),n("v-badge",{attrs:{inline:"",bordered:"",color:e.SSRActiveColor}})],1)],1)],1)],1)],1)},y=[],w=(n("a9e3"),n("25f0"),{name:"TempAdjustWidget",data:function(){return{selected:!1,TempTarget:0,interval:{},SSRActiveColor:"grey"}},props:{TempTargetProp:Number,TempFeedbackProp:Number,ZoneEnableProp:Boolean,ZoneID:Number,ParameterID:String,TitleProp:String,Color:String},methods:{AdjustBtnClick:function(){this.selected=!this.selected,this.selected&&(this.TempTarget=this.TempTargetProp)},Increment:function(){this.TempTarget++},Decrement:function(){this.TempTarget--},ToggleZoneEnable:function(){var e=1==this.ZoneEnableProp?0:1,t={WSP:{WSPID:this.ZoneID,WSPUnits:1,WSPVal:e.toString()}};this.$emit("toggleClicked",t)},SaveBtnClick:function(){var e={WSP:{WSPID:this.ParameterID,WSPUnits:1,WSPVal:this.TempTarget.toString()}};this.$emit("saveClicked",e),this.selected=!1}},computed:{UpdateTempTarget:function(){return this.selected?this.TempTarget:this.TempTargetProp},ZoneEnabled:function(){return 1==this.ZoneEnableProp?"On":"Off"},ZoneBtnColor:function(){return 1==this.ZoneEnableProp?"green":"red"}},beforeMount:function(){this.TempTargetProp=170,this.TempFeedbackProp=150}}),_=w,j=Object(p["a"])(_,k,y,!1,null,null,null),A=j.exports,D={name:"TemperatureControls",data:function(){return{hoseClass:"mt-0 pt-0 pl-0 pr-0 ml-0 mr-0",adjustInterval:!1,Connected:!1,switchVal:!1,tempChangeReplyReceived:!0,heatToggleReplyReceived:!0,currTempChangeObj:{},currToggleObj:{},TempData:{}}},components:{TempAdjustWidget:A},computed:{InletPressureA:function(){return"NULL"==this.TempData.vInletPressureA_PSI&&(this.TempData.vInletPressureA_PSI=0),this.TempData.vInletPressureA_PSI},InletPressureB:function(){return"NULL"==this.TempData.vInletPressureB_PSI&&(this.TempData.vInletPressureB_PSI=0),this.TempData.vInletPressureB_PSI}},sendTime:0,methods:{GetTempData:function(){this.sendTime=(new Date).getTime(),this.$socket.sendObj({WGPG:"Application_TempControlPage"})},RecieveMessage:function(e){try{if(e.data.length>1&&e.data.includes("Application_TempControlPage")){var t=e.data,n=t.indexOf("\n");n>0&&(t=t.substring(0,n));var o=JSON.parse(t),a={};o.Values.forEach((function(e){a[e.MGP.MGPLabel]=e.MGP.ParamVal})),this.TempData=a}else if(e.data.includes("MSP")){var r=e.data,s=r.indexOf("\n");s>0&&(r=r.substring(0,s));var i=JSON.parse(r);3==i.MSP.status&&(i.MSP.MSPID>=136&&i.MSP.MSPID<=138?(console.log("Heat toggle reply received."),this.heatToggleReplyReceived=!0):this.tempChangeReplyReceived=!0)}}catch(l){console.log(l),console.log(e.data.length),console.log(e.data.indexOf("\n")),console.log(e.data)}this.tempChangeReplyReceived||this.$socket.sendObj(this.currTempChangeObj),this.heatToggleReplyReceived||this.$socket.sendObj(this.currToggleObj);var c=(new Date).getTime()-this.sendTime;c>200&&(c=199),setTimeout(this.GetTempData(),200-c)},SendSaveMsg:function(e){this.currTempChangeObj=e;try{this.$socket.sendObj(e),this.tempChangeReplyReceived=!1}catch(t){console.log(t)}},SendToggleMsg:function(e){this.currToggleObj=e;try{this.$socket.sendObj(e),this.heatToggleReplyReceived=!1}catch(t){console.log(t)}}},beforeMount:function(){var e=this;this.Connected&&this.GetTempData(),this.$options.sockets.onopen=function(){e.GetTempData(),e.Connected=!0},this.$options.sockets.onclose=function(){e.Connected=!1},this.$options.sockets.onmessage=function(t){e.RecieveMessage(t)}}},x=D,I=Object(p["a"])(x,P,S,!1,null,null,null),O=I.exports,$={name:"TempControl",components:{Controls:O}},M=$,R=Object(p["a"])(M,b,C,!1,null,null,null),E=R.exports;o["default"].use(T["a"]);var Z=[{path:"/",name:"TempControl",component:E},{path:"/YieldCalc",name:"YieldCalc",component:function(){return n.e("about").then(n.bind(null,"4333"))}},{path:"/AutoShot",name:"AutoShot",component:function(){return n.e("about").then(n.bind(null,"bd15"))}}],B=new T["a"]({base:"/NS/",routes:Z}),N=B,W=n("2f62");o["default"].use(W["a"]);var G=new W["a"].Store({state:{SystemConfig:0},mutations:{SetNitroSysConfig:function(e){state.SystemConfig=0},SetNitroSysPlusConfig:function(e){state.SystemConfig=1},SetAutoShotConfig:function(e){state.SystemConfig=2}},actions:{},modules:{}}),F=n("ce5b"),Y=n.n(F);n("bf40"),n("5363");o["default"].use(Y.a);var V=new Y.a({icons:{iconfont:"mdi"}}),H=n("b408"),L=n.n(H),U="";U="https:"==window.location.protocol?"wss:":"ws:",U+=window.location.host+"/VPCA",o["default"].use(L.a,U,{format:"json",reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}),o["default"].config.productionTip=!1,new o["default"]({router:N,store:G,vuetify:V,methods:{sendMessage:function(e){this.$socket.send(e)}},render:function(e){return e(v)}}).$mount("#app")},cc5f:function(e,t,n){e.exports=n.p+"img/AutoshotTitleLogo2.70da9441.png"}});
//# sourceMappingURL=app.9bc5a483.js.map