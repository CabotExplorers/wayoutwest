(function(e){function t(t){for(var r,u,c=t[0],s=t[1],o=t[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://camp.cabotscouts.org.uk/_ls/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16c6":function(e,t,n){},"23ec":function(e,t,n){},"30b8":function(e,t,n){"use strict";var r=n("37c6"),a=n.n(r);a.a},"37c6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HeaderBar"),n("Wall"),n("FooterMarquee")],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{attrs:{id:"logo"}},[e._v("Way Out West!")]),n("div",{attrs:{id:"clock"}},[n("time",[e._v(e._s(e.hours)),n("span",{staticClass:"sep"},[e._v(":")]),e._v(e._s(e.minutes))])])])},c=[],s=function(e){return e<10?"0"+e:e},o=function(){return new Date},l=function(){return s(o().getHours())},f=function(){return s(o().getMinutes())},d={name:"HeaderBar",data:function(){return{tick:null,hours:l(),minutes:f()}},created:function(){var e=this;this.tick=setInterval((function(){e.hours=l(),e.minutes=f()}),1e3)},destroyed:function(){clearInterval(this.tick)}},h=d,p=(n("7653"),n("2877")),m=Object(p["a"])(h,u,c,!1,null,null,null),v=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("transition",{attrs:{name:"fade"}},[e.current?n("div",{attrs:{id:"share",data:e.current}},[e.current.file?n("div",{staticClass:"media",class:e.current.type},["image"==e.current.type?n("img",{attrs:{src:e.current.file}}):e._e(),"video"==e.current.type?n("div",{staticClass:"video"},[n("video",{ref:"video",attrs:{src:e.current.file,autoplay:""}})]):e._e()]):e._e(),e.current.caption?n("div",{staticClass:"caption"},[n("p",[e._v(" "+e._s(e.current.caption)+" ")])]):e._e()]):e._e()])],1)},b=[],_=(n("d3b7"),n("96cf"),n("1da1")),y="https://camp.cabotscouts.org.uk/wall/shares/45";function w(e){return new Promise((function(t){return setTimeout(t,e)}))}var x={name:"Wall",data:function(){return{fetchTimer:null,changeTimer:null,media:[],current:{},currentIdx:-1,error:!1}},mounted:function(){var e=this;this.fetchMedia().then((function(){e.currentIdx=-1,e.changeTimer||e.changeMedia(),e.fetchTimer=setInterval((function(){return e.fetchMedia()}),18e4)}))},methods:{fetchMedia:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(y).then((function(e){return e.json()})).then((function(e){t.media.length>0&&e.media[0].file!=t.media[0].file&&(t.currentIdx=-1),t.media=e.media}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),changeMedia:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return clearInterval(this.changeTimer),this.current=!1,e.next=4,w(2e3);case 4:this.currentIdx=this.currentIdx+1>=this.media.length?0:this.currentIdx+1,this.current=this.media[this.currentIdx],t=2e4,"video"==this.current.type&&this.$nextTick((function(){n.$refs.video.addEventListener("loadedmetadata",(function(){t=1e3*n.$refs["video"].duration+5e3,n.$refs["video"].play()}))})),this.media.length>1?this.changeTimer=setInterval((function(){return n.changeMedia()}),t):this.changeTimer=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},O=x,j=(n("30b8"),Object(p["a"])(O,g,b,!1,null,null,null)),M=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.message?n("footer",[n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"marquee"},[n("p",[e._v(e._s(e.message))])])])],1):e._e()},I=[],T="https://camp.cabotscouts.org.uk/wall/message";function P(e){return new Promise((function(t){return setTimeout(t,e)}))}var $={name:"FooterMarquee",data:function(){return{message:"",timer:null}},mounted:function(){var e=this;this.fetchMessage(),this.timer=setInterval((function(){return e.fetchMessage()}),6e4)},methods:{fetchMessage:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(T).then((function(e){return e.json()})).then((function(e){t.message!=e.message&&(t.message=!1,P(1500),t.message=e.message)}));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},R=$,C=(n("e6ad"),Object(p["a"])(R,k,I,!1,null,null,null)),E=C.exports,S={name:"App",components:{HeaderBar:v,Wall:M,FooterMarquee:E}},W=S,q=(n("5c0b"),Object(p["a"])(W,a,i,!1,null,null,null)),H=q.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},7653:function(e,t,n){"use strict";var r=n("16c6"),a=n.n(r);a.a},"9c0c":function(e,t,n){},e6ad:function(e,t,n){"use strict";var r=n("23ec"),a=n.n(r);a.a}});
//# sourceMappingURL=app.dfe63d13.js.map