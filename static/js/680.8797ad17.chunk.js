"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{680:function(t,n,r){r.r(n);var e=r(885),u=r(2791),a=r(9545),c=r(470),s=r(6731),i=r(184);n.default=function(){var t=(0,u.useState)([]),n=(0,e.Z)(t,2),r=n[0],o=n[1],p=(0,c.TH)();return(0,u.useEffect)((function(){(0,a.yn)().then((function(t){var n=t.results;return o(n)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)("ul",{children:r.map((function(t){var n=t.title,r=t.id;return(0,i.jsx)("li",{children:(0,i.jsx)(s.rU,{to:"movies/".concat(r),state:{from:p},children:n})},r)}))}),(0,i.jsx)(c.j3,{})]})}},9545:function(t,n,r){r.d(n,{Hx:function(){return m},Mc:function(){return h},pl:function(){return p},uV:function(){return l},yn:function(){return i}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),s=r.n(c);function i(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return f=(0,e.Z)(a().mark((function t(){var n,r,e=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",t.next=3,s().get("search/movie?query=".concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/",s().defaults.params={api_key:"a853a8d0502c53b63fcd011b60b0bc46"}}}]);
//# sourceMappingURL=680.8797ad17.chunk.js.map