"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[816],{816:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(861),i=n(439),a=n(757),s=n.n(a),c=n(791),u=n(689),o=n(87),h=n(894),l="MovieDetailsItem_MovieDetailsItem__CICzo",p=n(184),d=function(e){var t=e.poster_path,n=e.title,r=e.overview,i=e.genres;return(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(t),alt:""})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:n}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("ul",{children:i.map((function(e){return(0,p.jsx)("li",{children:e.name},e.name)}))})]})]})},v="MovieDetails_GoBackLink__-bN5P",f="MovieDetails_ButtonBack__B3TPC",x=(0,c.lazy)((function(){return n.e(298).then(n.bind(n,298))})),m=(0,c.lazy)((function(){return n.e(389).then(n.bind(n,389))})),j=function(){var e,t,n=(0,u.UO)().id,a=(0,u.TH)(),l=(0,c.useRef)(null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),j=(0,c.useState)({}),w=(0,i.Z)(j,2),g=w[0],b=w[1],I=(0,c.useState)(!1),Z=(0,i.Z)(I,2),k=Z[0],y=Z[1],M=(0,c.useState)(!1),_=(0,i.Z)(M,2),N=_[0],C=_[1],z=(0,c.useState)("Something went wrong! Try again later"),B=(0,i.Z)(z,2),J=B[0],S=B[1];return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,h.HI)(n);case 4:t=e.sent,b(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),C(!0),S(e.t0.message);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.rU,{className:v,to:l.current,children:(0,p.jsx)("button",{className:f,children:"\u21e6 Go back"})}),N&&(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:J})}),k&&(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:"Loading..."})}),(0,p.jsxs)("section",{children:[g.poster_path&&(0,p.jsx)(d,{id:g.id,poster_path:g.poster_path,title:g.title,genres:g.genres,overview:g.overview}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Additional Information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(o.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(c.Suspense,{fallback:"Loading...",children:(0,p.jsxs)(u.Z5,{children:[(0,p.jsx)(u.AW,{path:"cast",element:(0,p.jsx)(m,{})}),(0,p.jsx)(u.AW,{path:"reviews",element:(0,p.jsx)(x,{})})]})})]})]})}},894:function(e,t,n){n.d(t,{Df:function(){return c},HI:function(){return u},IQ:function(){return o},Tn:function(){return h},q:function(){return l}});var r=n(861),i=n(757),a=n.n(i),s=n(243).Z.create({headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzBkM2RjMGNmMjJjMDliNGI5NDNmNjgwM2ZmZjczMCIsInN1YiI6IjY1MjMwN2RjYWI1ZTM0MDBmZTMyYzlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b0SYdjTLCVBaZ4ILSq2IP-U1xZgGEb11pX7z428YP2w")}}),c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("https://api.themoviedb.org/3/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("https://api.themoviedb.org/3/search/movie?query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=816.751ad745.chunk.js.map