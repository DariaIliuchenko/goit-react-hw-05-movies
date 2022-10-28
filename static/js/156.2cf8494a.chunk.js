"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[156],{3623:function(n,t,r){r.d(t,{Z:function(){return p}});var e,a,i=r(168),c=r(6444),u=c.ZP.div(e||(e=(0,i.Z)(["\n  padding: 0;\n  margin: 0 auto;\n  width: 1280px;\n  \n"]))),o=c.ZP.h2(a||(a=(0,i.Z)(["\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 60px;\n  text-align: center;\n  color: #fff;\n"]))),s=r(184),p=function(n){var t=n.title,r=void 0===t?"":t,e=n.children;return(0,s.jsxs)(u,{children:[r&&(0,s.jsx)(o,{children:r}),e]})}},9677:function(n,t,r){r.d(t,{Z:function(){return u}});var e,a=r(168),i=r(6444).ZP.section(e||(e=(0,a.Z)(["\n  padding-top: 34px;\n  padding-bottom: 34px;\n  min-height: 100vh;\n  \n"]))),c=r(184),u=function(n){var t=n.children;return(0,c.jsx)(i,{children:t})}},156:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,a,i,c,u=r(885),o=r(2791),s=r(9545),p=r(7689),f=r(168),d=r(6444),l=r(1087),h=d.ZP.ul(e||(e=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  list-style: none;\n  padding-left:0;\n  /* padding-top: 20px; */\n  justify-content: center;\n  /* background: rgb(255, 245, 246); */\n  /* background: linear-gradient(\n    180deg,\n    rgba(255, 245, 246, 1) 0%,\n    rgba(32, 51, 54, 1) 19%\n  ); */\n  background: rgba(32,51,54,1);\n/* background: radial-gradient(circle, rgba(255,245,246,1) 23%, rgba(32,51,54,1) 82%); */\n"]))),x=d.ZP.h3(a||(a=(0,f.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  padding: 6px;\n  flex-grow: 1;\n"]))),g=(0,d.ZP)(l.rU)(i||(i=(0,f.Z)(["\n  color: #ffffff;\n  font-size: 18px;\n  width: 100%;\n  height: 100%;\n  transition: text-decoration 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n"]))),v=d.ZP.li(c||(c=(0,f.Z)(["\n  display: flex;\n  width: 300px;\n  text-align: center;\n  border: 1px solid #000;\n  border-radius: 0px 0px 4px 4px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.04);\n    box-shadow: 0px 2px 27px -7px rgba(252,252,252,1);\n    \n  }\n"]))),b=r(3623),m=r(9677),w=r(184),Z=function(){var n=(0,o.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,p.TH)();return(0,o.useEffect)((function(){(0,s.yn)().then((function(n){var t=n.results;return e(t)}))}),[]),(0,w.jsx)(m.Z,{children:(0,w.jsx)(b.Z,{title:"Trending today",children:(0,w.jsx)(h,{children:r.map((function(n){var t=n.title,r=n.id,e=n.poster_path;return(0,w.jsx)(v,{children:(0,w.jsxs)(g,{to:"movies/".concat(r),state:{from:a},children:[e&&(0,w.jsx)("img",{src:s.yA+"w300"+e,alt:t}),(0,w.jsx)(x,{children:t})]})},r)}))})})})}},9545:function(n,t,r){r.d(t,{Hx:function(){return v},Mc:function(){return l},pl:function(){return f},uV:function(){return x},yA:function(){return o},yn:function(){return s}});var e=r(5861),a=r(7757),i=r.n(a),c=r(4569),u=r.n(c);u().defaults.baseURL="https://api.themoviedb.org/3/",u().defaults.params={api_key:"a853a8d0502c53b63fcd011b60b0bc46"};var o="https://image.tmdb.org/t/p/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return d=(0,e.Z)(i().mark((function n(){var t,r,e=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,u().get("search/movie?query=".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=156.2cf8494a.chunk.js.map