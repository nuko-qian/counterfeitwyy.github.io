(function(e){function n(n){for(var r,u,c=n[0],o=n[1],l=n[2],s=0,f=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&f.push(i[u][0]),i[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==i[c]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},u={app:0},i={app:0},a=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-03148b8e":"659fbe28","chunk-0d0678fc":"7b523936","chunk-0f5bb57b":"cb8b9c6b","chunk-2d0a3e6a":"ca9d30db","chunk-2d0d681b":"48c4f947","chunk-3a736d59":"77d6ba07","chunk-6ab8f0c2":"91b78496","chunk-d431ef2c":"5e8d250c","chunk-e0f710a0":"b9912e7d"}[e]+".js"}function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=[],t={"chunk-03148b8e":1,"chunk-0d0678fc":1,"chunk-0f5bb57b":1,"chunk-3a736d59":1,"chunk-6ab8f0c2":1,"chunk-d431ef2c":1,"chunk-e0f710a0":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-03148b8e":"8bed92f9","chunk-0d0678fc":"e7f405ee","chunk-0f5bb57b":"2638700a","chunk-2d0a3e6a":"31d6cfe0","chunk-2d0d681b":"31d6cfe0","chunk-3a736d59":"bb20fde6","chunk-6ab8f0c2":"a8a39983","chunk-d431ef2c":"3ff8f60b","chunk-e0f710a0":"5bddf2b2"}[e]+".css",i=o.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===i))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===i)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete u[e],d.parentNode.removeChild(d),t(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){u[e]=0})));var r=i[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=i[e]=[n,t]}));n.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=c(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,t[1](f)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"198d":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("6ece"),t("8000"),t("8441"),t("d14b");var r=t("430a"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("top"),t("index")],1)},i=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"top-container"},[t("div",{staticClass:"left-box"},[t("div",{staticClass:"icon-wrapper"},[t("span",{staticClass:"iconfont icon-home",on:{click:function(n){return e.toHomeClick()}}}),t("span",{staticClass:"iconfont icon-full-screen",on:{click:function(n){return e.getFullCreen(e.btnStatus)}}})])]),t("div",{staticClass:"right-box"},[t("div",{staticClass:"el-input el-input--small el-input--prefix"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputVal,expression:"inputVal"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"搜索"},domProps:{value:e.inputVal},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.toResult.apply(null,arguments)},input:function(n){n.target.composing||(e.inputVal=n.target.value)}}}),e._m(0)])])])},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",{staticClass:"el-input__prefix"},[t("i",{staticClass:"el-input__icon el-icon-search"})])}],o={name:"top",data:function(){return{inputVal:"",query:"",n:0,btnStatus:0}},created:function(){},methods:{toResult:function(){""===this.inputVal?this.$message.warning("请输入内容!"):this.$router.push("/result?q=".concat(this.inputVal))},toHomeClick:function(){"/discover"!==this.$route.path&&this.$router.push("/discover")},getFullCreen:function(e){this.btnStatus=0===this.btnStatus?1:0,this.n++,this.n%2==0?this.outFullCreen(document):this.inFullCreen(document.documentElement)},inFullCreen:function(e){var n=e,t=n.requestFullScreen||n.webkitRequestFullScreen||n.mozRequestFullScreen||n.msRequestFullScreen;if("undefined"!=typeof t&&t)t.call(n);else if("undefined"!=typeof window.ActiveXObject){var r=new ActiveXObject("WScript.Shell");null!=r&&r.SendKeys("{F11}")}},outFullCreen:function(e){var n=e,t=n.cancelFullScreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.exitFullScreen;if("undefined"!=typeof t&&t)t.call(n);else if("undefined"!=typeof window.ActiveXObject){var r=new ActiveXObject("WScript.Shell");null!=r&&r.SendKeys("{F11}")}}}},l=o,s=(t("5bd5"),t("4ac2")),f=Object(s["a"])(l,a,c,!1,null,null,null),d=f.exports,p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"index-container"},[t("div",{staticClass:"nav"},[t("ul",[t("li",[t("router-link",{attrs:{to:"/discover"}},[t("span",{staticClass:"iconfont icon-find-music"}),e._v(" 发现音乐 ")])],1),t("li",[t("router-link",{attrs:{to:"/playlists"}},[t("span",{staticClass:"iconfont icon-music-list"}),e._v(" 推荐歌单 ")])],1),t("li",[t("router-link",{attrs:{to:"/songs"}},[t("span",{staticClass:"iconfont icon-music"}),e._v(" 最新音乐 ")])],1),t("li",[t("router-link",{attrs:{to:"/mvs"}},[t("span",{staticClass:"iconfont icon-mv"}),e._v(" 最新MV ")])],1)])]),t("div",{staticClass:"main"},[t("router-view")],1),t("div",{staticClass:"player"},[t("audio",{attrs:{src:e.musicUrl,controls:"",autoplay:""}})])])},h=[],m={name:"index",data:function(){return{musicUrl:""}},created:function(){},methods:{}},b=m,v=(t("5d7a"),Object(s["a"])(b,p,h,!1,null,null,null)),k=v.exports,y={name:"app",components:{top:d,index:k}},g=y,C=(t("5c0b"),Object(s["a"])(g,u,i,!1,null,null,null)),x=C.exports,w=(t("b1fa"),t("2e6f"),t("af21"),t("a5e4"));r["default"].use(w["a"]);var _=[{path:"/",redirect:"/discover"},{path:"/discover",name:"discover",component:function(){return t.e("chunk-03148b8e").then(t.bind(null,"18aa"))}},{path:"/playlists",name:"playlists",component:function(){return t.e("chunk-3a736d59").then(t.bind(null,"a804"))}},{path:"/playlist",name:"playlist",component:function(){return t.e("chunk-0d0678fc").then(t.bind(null,"f7ad"))}},{path:"/songs",name:"songs",component:function(){return t.e("chunk-6ab8f0c2").then(t.bind(null,"2af5"))}},{path:"/mvs",name:"mvs",component:function(){return t.e("chunk-e0f710a0").then(t.bind(null,"e1b1"))}},{path:"/mv",name:"mv",component:function(){return t.e("chunk-d431ef2c").then(t.bind(null,"e81b"))}},{path:"/result",name:"result",component:function(){return t.e("chunk-0f5bb57b").then(t.bind(null,"4638"))}},{path:"/next",name:"next",component:function(){return t.e("chunk-2d0d681b").then(t.bind(null,"739b"))}},{path:"/mixinss",name:"mixinss",component:function(){return t.e("chunk-2d0a3e6a").then(t.bind(null,"03c4"))}}],S=new w["a"]({routes:_}),O=S,F=t("51c0"),j=t.n(F),E=(t("52d1"),t("d940"),t("82ae")),P=t.n(E);r["default"].mixin({data:function(){return{value2:1012}},methods:{overallMixin:function(){console.log(this.value2,"+这是通过全局混入mixin 传递的message")}}}),r["default"].prototype.FFaxios=P.a,r["default"].use(j.a),r["default"].config.productionTip=!1,new r["default"]({router:O,render:function(e){return e(x)}}).$mount("#app")},"5bd5":function(e,n,t){"use strict";t("198d")},"5c0b":function(e,n,t){"use strict";t("d766")},"5d7a":function(e,n,t){"use strict";t("f829")},d766:function(e,n,t){},d940:function(e,n,t){},f829:function(e,n,t){}});
//# sourceMappingURL=app.e2d61e53.js.map