(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(18),i=n.n(r),l=(n(27),n(6)),o=n(3),u=n(4);var d=function(e,t){var n=Object(a.useState)(e),c=Object(u.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){r(e)}),t);return function(){clearTimeout(n)}}),[e,t]),s},j=n(21),b=n(9),m=n.n(b),f=n(19),h=n(20),x=n.n(h),O="http://www.omdbapi.com/?apikey=".concat("7255c803","&type=movie&s="),v=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(O).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(a.useState)("idle"),c=Object(u.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)([]),l=Object(u.a)(i,2),o=l[0],d=l[1],b=Object(a.useCallback)((function(){return r("pending"),v(e).then((function(e){d(Object(j.a)(e.data.Search)),r("success")})).catch((function(e){r("error")}))}),[e]);return Object(a.useEffect)((function(){t&&b()}),[b,t]),{execute:b,status:s,movies:o}},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem(e))?JSON.parse(window.localStorage.getItem(e)):(window.localStorage.setItem(e,JSON.stringify(t)),t)})),c=Object(u.a)(n,2),s=c[0],r=c[1],i=function(t){r(t),window.localStorage.setItem(e,JSON.stringify(t))};return[s,i]},w=function(e){var t=e.movies,n=e.nominateHandler,a=e.nominated;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("section",{className:"text-center row-span-5",children:[Object(c.jsx)("h1",{children:"Results"}),Object(c.jsx)("ul",{className:"flex flex-wrap justify-center",children:t.map((function(e){return Object(c.jsxs)("li",{className:"flex flex-col items-center justify-between rounded-t-lg shadow-lg rounded-lg text-sm w-1/5\tm-4",children:[Object(c.jsx)("h3",{className:"p-2 m-2",children:e.Title}),Object(c.jsxs)("h6",{children:["Released in ",e.Year]}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{rel:"external",href:e.imdbID,className:"underline",children:"IMDB"})}),Object(c.jsx)("button",{disabled:!!a[e.imdbID],onClick:function(t){return n(t,e)},children:"Nominate"})]},e.imdbID)}))})]})})},N=function(e){var t=e.count,n=e.nominated,a=e.deleteHandler;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("section",{className:"text-center flex flex-col p-5 row-span-1",children:[Object(c.jsx)("h1",{children:"Nomination List"}),Object(c.jsxs)("div",{className:"relative pt-1",children:[Object(c.jsx)("div",{className:"flex mb-2 items-center justify-between",children:Object(c.jsx)("div",{className:"text-right",children:Object(c.jsx)("span",{className:"text-s font-semibold inline-block text-yellow-600",children:(t||0)+"/5"})})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"absolute z-10 transition-background-color duration-500 ease-in ease-out overflow-hidden h-2 text-xs flex rounded bg-".concat(5===t?"green":"yellow","-200 ").concat(t<5?"w-".concat(t,"/5"):"w-full")}),Object(c.jsx)("div",{className:"absolute overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200 w-full"})]})]}),Object(c.jsx)("ul",{className:"flex",children:Object.entries(n).map((function(e){return Object(c.jsxs)("li",{className:"flex flex-col items-center justify-between rounded-t-lg shadow-lg rounded-lg text-sm w-1/5\tm-4",children:[Object(c.jsx)("h3",{children:e[1]}),Object(c.jsx)("button",{onClick:function(e){return a(e)},value:e[0],children:"Remove"})]},e[0])}))})]})})},y=function(e){var t=e.query,n=e.changeHandler,a=e.full,s=e.status;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"text-4xl p-5 m-5 font-sans",children:"The Shoppies \ud83c\udfa5\ud83c\udf7f"}),Object(c.jsx)("section",{role:"search",children:Object(c.jsx)("form",{action:"#",method:"get",children:Object(c.jsx)("fieldset",{className:"shadow p-2 m-2 flex",children:Object(c.jsxs)("label",{htmlFor:"search",className:"flex justify-start w-full",children:[Object(c.jsx)("svg",{className:"animate-spin inline-flex items-center h-5 w-5 mt-3 mr-5 ".concat(t&&"success"!==s?" visible":" invisible"),stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 100 100",fill:"none",children:Object(c.jsx)("circle",{cx:"50",cy:"50",r:"48"})}),Object(c.jsx)("input",{className:"w-full rounded p-2",type:"search",id:"search",value:t,placeholder:"Try 'Avengers'",onChange:n,maxLength:"200"})]})})})}),Object(c.jsx)("div",{className:"block text-sm text-red-600 bg-red-300 h-0 flex items-center p-4 rounded-md shadow-float inline-block ".concat(!a&&"invisible h-12"),role:"alert",children:Object(c.jsxs)("span",{children:[Object(c.jsx)("strong",{children:"You've reached 5 nominations!"})," Please remove a movie if you'd like to add a different one"]})})]})};console.log("%c \ud83d\udc9b \ud83d\udc9a \ud83d\udc99 \ud83d\udc9c \ud83e\udde1 Hi Shopify team \ud83e\udde1 \ud83d\udc9c \ud83d\udc99 \ud83d\udc9a \ud83d\udc9b","color: blue; ");var S=function(){var e=g("data",{nominated:{},count:0,full:!1,query:""}),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),i=Object(u.a)(r,2),j=i[0],b=i[1],m=d(n.query,500),f=p(m),h=f.status,x=f.movies;return Object(a.useEffect)((function(){b(x)}),[x]),Object(c.jsxs)("div",{className:"container text-center mx-auto px-4",children:[Object(c.jsx)(y,{changeHandler:function(e){e.preventDefault();var t=e.target.value;s(Object(o.a)(Object(o.a)({},n),{},{query:t}))},query:n.query,status:h,full:n.full}),Object(c.jsxs)("div",{className:"grid grid-rows-6",children:[Object(c.jsx)(N,{nominated:n.nominated,deleteHandler:function(e){e.preventDefault();var t=e.target.value,c=Object(o.a)({},n.nominated);delete c[t],s(Object(o.a)(Object(o.a)({},n),{},{nominated:c,count:n.count-=1,full:!1}))},count:n.count}),Object(c.jsx)(w,{movies:j,nominateHandler:function(e,t){e.preventDefault();var c=t.Title,a=t.imdbID;!n.nominated.hasOwnProperty(a)&&n.count<5?s(Object(o.a)(Object(o.a)({},n),{},{count:n.count+=1,nominated:Object(o.a)(Object(o.a)({},n.nominated),{},Object(l.a)({},a,c))})):5===n.count&&s(Object(o.a)(Object(o.a)({},n),{},{full:!0}))},nominated:n.nominated})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.f6a34327.chunk.js.map