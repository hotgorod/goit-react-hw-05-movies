"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[589],{376:function(e,t,r){r.d(t,{Z:function(){return i}});r(791);var n=r(87),a={MovieIMG:"MovieItem_MovieIMG__Fudsl"},c=r(184),i=function(e){var t=e.id,r=e.title,i=e.location,u=e.poster_path;return(0,c.jsx)("li",{className:a.MovieItem,children:(0,c.jsx)(n.rU,{state:{from:i},to:"/movies/".concat(t),children:(0,c.jsx)("img",{className:a.MovieIMG,src:"".concat("https://image.tmdb.org/t/p/w300").concat(u),alt:r})})})}},589:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),c=r(757),i=r.n(c),u=r(376),s=r(791),o=r(87),p=r(689),h=r(894),l="Movie_MovieList__DYNt7",f="Movie_SearchInput__jlwxB",v="Movie_SearchForm__HTlBC",m="Movie_SearchButton__FG0HM",d=r(184),x=function(){var e=(0,o.lr)(),t=(0,a.Z)(e,2),r=t[0],c=t[1],x=(0,p.TH)(),M=(0,s.useState)([]),g=(0,a.Z)(M,2),j=g[0],w=g[1],I=(0,s.useState)(!1),b=(0,a.Z)(I,2),Z=b[0],_=b[1],y=(0,s.useState)(!1),N=(0,a.Z)(y,2),k=N[0],S=N[1],C=(0,s.useState)("Something went wrong! Try again later"),G=(0,a.Z)(C,2),J=G[0],B=G[1],T=r.get("query");(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,h.q)(T);case 4:t=e.sent,w(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),S(!0),B(e.t0.message);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}T&&function(){e.apply(this,arguments)}()}),[T]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchMovie.value;c({query:t})},children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{className:f,name:"searchMovie",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",required:!0})}),(0,d.jsx)("button",{className:m,type:"submit",children:"Search"})]}),(0,d.jsxs)("section",{children:[k&&(0,d.jsx)("div",{children:(0,d.jsx)("p",{children:J})}),Z&&(0,d.jsx)("div",{children:(0,d.jsx)("p",{children:"Loading..."})}),(0,d.jsx)("ul",{className:l,children:0!==j&&j.map((function(e){return(0,d.jsx)(u.Z,{title:e.title,id:e.id,location:x,poster_path:e.poster_path},e.id)}))})]})]})}},894:function(e,t,r){r.d(t,{Df:function(){return u},HI:function(){return s},IQ:function(){return o},Tn:function(){return p},q:function(){return h}});var n=r(861),a=r(757),c=r.n(a),i=r(243).Z.create({headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzBkM2RjMGNmMjJjMDliNGI5NDNmNjgwM2ZmZjczMCIsInN1YiI6IjY1MjMwN2RjYWI1ZTM0MDBmZTMyYzlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b0SYdjTLCVBaZ4ILSq2IP-U1xZgGEb11pX7z428YP2w")}}),u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("https://api.themoviedb.org/3/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,console.log(n),e.abrupt("return",n.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("https://api.themoviedb.org/3/search/movie?query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=589.600e60f0.chunk.js.map