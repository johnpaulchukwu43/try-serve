module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([3],{217:function(e,t,n){e.exports=n(218)},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),o=n.n(r),s=n(5),a=n.n(s),u=n(73),c=n(101),i=n.n(c),l=n(74),f=n.n(l);var d=function(e){return a.a.createElement(u.a,null,a.a.createElement("h1",null,"Batman TV Shows"),a.a.createElement("ul",null,e.shows.map(function(e){var t=e.show;return a.a.createElement("li",{key:t.id},a.a.createElement(i.a,{as:"/p/".concat(t.id),href:"/post?id=".concat(t.id)},a.a.createElement("a",null,t.name)))})))};d.getInitialProps=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var s=e.apply(t,n);function a(e,t){try{var n=s[e](t),a=n.value}catch(e){return void o(e)}n.done?r(a):Promise.resolve(a).then(u,c)}function u(e){a("next",e)}function c(e){a("throw",e)}u()})}}(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("Show data fetched. Count: ".concat(n.length)),e.abrupt("return",{shows:n});case 8:case"end":return e.stop()}},e,this)})),t.default=d},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var s in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(s,t.headers[s]);function a(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,s,a){t.push(s=s.toLowerCase()),n.push([s,a]),e=r[s],r[s]=e?e+","+a:a}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:a,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(a())},o.onerror=r,o.send(t.body)})};t.default=r},74:function(e,t,n){e.exports=window.fetch||(window.fetch=n(37).default||n(37))}},[217]).default}});