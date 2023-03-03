"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[114],{4829:function(t,e,n){var r=n(5671),c=n(3144),a=n(136),o=n(7277),i=n(2791),s=n(6053),u=n(184),l=function(t){(0,a.Z)(n,t);var e=(0,o.Z)(n);function n(t){var c;return(0,r.Z)(this,n),(c=e.call(this,t)).state={error:null,errorInfo:null},c}return(0,c.Z)(n,[{key:"componentDidCatch",value:function(t,e){this.setState((function(n){return{error:t,errorInfo:e}}))}},{key:"render",value:function(){var t=this.state,e=(t.error,t.errorInfo),n=this.props.children;return e?(0,u.jsx)(s.Z,{}):n}}]),n}(i.Component);e.Z=l},6053:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n.p+"static/media/error.7d32a0595c46c5bbbb03.gif",c=n(184),a=function(){return(0,c.jsx)("img",{className:"error__img",src:r,alt:"Error"})}},2735:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(2982),c=n(885),a=n(2791),o=n(6101),i=n(3504),s=n(5660),u=n(6983),l=n(1738),f=n(6053),p=n(184),m=function(t){var e=t.comicsList,n=t.updateComicsList,r=(0,o.Z)(),m=r.loader,d=r.error,h=r.clearError,v=r.getAllComicsData,Z=(0,a.useState)(200),b=(0,c.Z)(Z,2),x=b[0],y=b[1],g=(0,a.useState)(!1),j=(0,c.Z)(g,2),_=j[0],w=j[1],C=(0,a.useState)(!1),k=(0,c.Z)(C,2),N=k[0],O=k[1],S=(0,a.useState)(0),A=(0,c.Z)(S,2),D=A[0],E=A[1];(0,a.useEffect)((function(){P(!0)}),[]);var P=function(t){h(),w(!t),v(x).then((function(t){return n(t.data.results)})).then((function(){return R()}))},R=function(){y(x+8),O(!1),w(!0)},I=m&&!_?(0,p.jsx)(l.Z,{}):null,B=d&&(0,p.jsx)(f.Z,{}),L=(0,a.useState)(!1),M=(0,c.Z)(L,2),T=M[0],q=M[1],$=-1,F=800*D;return(0,p.jsxs)("div",{className:"comics__list",children:[(0,p.jsxs)(s.Z,{className:"comics__grid",children:[e.map((function(t,e){$+=_?1:0;var n=Math.floor(Math.max(0,100*$-F));return(0,p.jsx)(u.Z,{classNames:"my-comics",timeout:1e3+n,children:(0,p.jsx)("li",{className:"comics__item",style:{transitionDelay:"".concat(n,"ms")},children:(0,p.jsxs)(i.rU,{to:"/comics/".concat(t.id),children:[(0,p.jsx)("img",{src:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),alt:t.name,className:"comics__item-img"}),(0,p.jsx)("div",{className:"comics__item-name",children:t.title}),(0,p.jsx)("div",{className:"comics__item-price",children:t.price?"".concat(t.price,"$"):"Not Available"})]})})},t.id)})),B]}),I,_&&(0,p.jsx)("button",{disabled:N,onClick:function(){q(!T),O(!0),E((function(t){return t+1})),P()},className:"button button__main button__long",children:(0,p.jsx)("div",{className:"inner",children:"load more"})})]})},d=n(4829),h=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",v=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",Z=function(){return(0,p.jsxs)("div",{className:"app__banner",children:[(0,p.jsx)("img",{src:h,alt:"Avengers"}),(0,p.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,p.jsx)("br",{}),"Stay tuned!"]}),(0,p.jsx)("img",{src:v,alt:"Avengers logo"})]})},b=n(4270),x=function(){var t=(0,a.useState)([]),e=(0,c.Z)(t,2),n=e[0],o=e[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(b.q,{children:[(0,p.jsx)("meta",{charSet:"utf-8",name:"descrition"}),(0,p.jsx)("title",{children:"Comicses Page"})]}),(0,p.jsx)(d.Z,{children:(0,p.jsx)(Z,{})}),(0,p.jsx)(d.Z,{children:(0,p.jsx)(m,{comicsList:n,updateComicsList:function(t){o((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))}))}})})]})}},6101:function(t,e,n){var r=n(4165),c=n(5861),a=n(3749);e.Z=function(){var t=(0,a.i)(),e=t.loader,n=t.error,o=t.request,i=t.clearError,s="apikey=75aef817f3e41428518bd4e3781b08d1",u="https://gateway.marvel.com:443/v1/public/",l=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"characters?name=").concat(e,"&").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n,c=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:660,t.next=3,o("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(s));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"characters/").concat(e,"?").concat(s));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Math.floor(400*Math.random()+1011e3),t.next=3,o("".concat(u,"characters/").concat(e,"?").concat(s));case 3:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat(u,"comics/").concat(e,"?").concat(s));case 2:return n=t.sent,t.abrupt("return",h(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){return{title:t.title,description:Z(t.description),id:t.id,thumbnail:"".concat(t.images[0].path,".").concat(t.images[0].extension),price:"".concat(t.prices[0].price,"$"),pages:"".concat(t.pageCount,"pages")}},v=function(t){var e=t.comics.items.map((function(t){return t.name}));return{description:Z(t.description),id:t.id,title:t.name,thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),homepage:t.urls[0].url,wiki:t.urls[1].url,comics:e}},Z=function(t){return t?"".concat(t.slice(0,230),"..."):"Sorry...We don't have description for this one..."};return{getAllChars:l,getRandomCharacter:m,getAllCharactersData:f,getCharacterByIdData:p,getAllComicsData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;return o("".concat(u,"comics?limit=8&offset=").concat(t,"&").concat(s))},getComicsByIdData:d,clearError:i,loader:e,error:n}}},5671:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return c}})},7277:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(1120),c=n(8814),a=n(1002),o=n(7326);function i(t,e){if(e&&("object"===(0,a.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}function s(t){var e=(0,c.Z)();return function(){var n,c=(0,r.Z)(t);if(e){var a=(0,r.Z)(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return i(this,n)}}},1120:function(t,e,n){function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},136:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(9611);function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},8814:function(t,e,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=114.6f7fcb23.chunk.js.map