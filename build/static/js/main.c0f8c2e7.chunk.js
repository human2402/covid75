(this.webpackJsonpcovid75=this.webpackJsonpcovid75||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(9),n(1)),l=function(e){var t=Object(a.useState)([!1,[]]),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(),s=Object(i.a)(l,2),u=s[0],d=s[1];Object(a.useEffect)((function(){h()}),[]);var h=function(){fetch("https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true").then((function(e){return e.json()})).then((function(e){c([!0,e.infectedByRegion[50]]),d(e.lastUpdatedAtSource.toString().slice(0,-14))})).catch((function(e){console.error(e)}))},f=null;if(!0===r[0]){var m=new Date(u),v=m.getDate();v<10&&(v="0"+v);var g=m.getMonth()+1;g<10&&(g="0"+g),f="".concat(v,".").concat(g,".").concat(m.getFullYear())}return o.a.createElement("div",{style:{backgroundColor:"#fdfdfd",margin:"10%"}},o.a.createElement("h3",null,"\u0417\u0430\u0431\u043e\u043b\u0435\u0432\u0448\u0438\u0445:"),o.a.createElement("h5",null,r[1].infected),o.a.createElement("h6",null,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e ",f))};var s=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{style:{height:"10vh",margin:"10%",border:"2px gray solid",borderRadius:"25px",display:"flex",justifyContent:"space-around"}},o.a.createElement("h1",{style:{lineHeight:"10vh",margin:0}},"covid75")),o.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.c0f8c2e7.chunk.js.map