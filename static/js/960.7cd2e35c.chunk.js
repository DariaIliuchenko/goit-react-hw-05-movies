"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[960],{1960:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a,u,c=r(885),i=r(2791),s=r(9545),o=r(470),p=r(168),f=r(6444),d=f.ZP.ul(e||(e=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 30px;\n"]))),h=f.ZP.li(a||(a=(0,p.Z)(["\n  margin: 10px;\n  width: 140px;\n  display: flex;\n  flex-direction: column;\n  align-items: space-around;\n"]))),l=f.ZP.b(u||(u=(0,p.Z)(["\n  margin-bottom: 10px;\n"]))),m=r(184),v=function(){var n=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)(""),r=(0,c.Z)(t,2),e=r[0],a=r[1];return(0,i.useEffect)((function(){(0,s.uV)(n).then(a)}),[n]),e}();return(0,m.jsx)(m.Fragment,{children:n&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d,{children:n.cast.map((function(n){var t=n.id,r=n.name,e=n.character,a=n.profile_path;return(0,m.jsxs)(h,{children:[(0,m.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(a),alt:r}),(0,m.jsx)(l,{children:r}),(0,m.jsx)("p",{children:e})]},t)}))})})})}},9545:function(n,t,r){r.d(t,{Hx:function(){return v},Mc:function(){return d},pl:function(){return p},uV:function(){return l},yn:function(){return s}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c);function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return f=(0,e.Z)(u().mark((function n(){var t,r,e=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,i().get("search/movie?query=".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/",i().defaults.params={api_key:"a853a8d0502c53b63fcd011b60b0bc46"}}}]);
//# sourceMappingURL=960.7cd2e35c.chunk.js.map