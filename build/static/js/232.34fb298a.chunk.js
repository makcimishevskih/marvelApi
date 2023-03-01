"use strict";(self.webpackChunkmarvelpetr=self.webpackChunkmarvelpetr||[]).push([[232],{4829:function(e,t,r){var n=r(5671),a=r(3144),c=r(136),s=r(7277),i=r(2791),o=r(6053),l=r(184),u=function(e){(0,c.Z)(r,e);var t=(0,s.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).state={error:null,errorInfo:null},a}return(0,a.Z)(r,[{key:"componentDidCatch",value:function(e,t){this.setState((function(r){return{error:e,errorInfo:t}}))}},{key:"render",value:function(){var e=this.state,t=(e.error,e.errorInfo),r=this.props.children;return t?(0,l.jsx)(o.Z,{}):r}}]),r}(i.Component);t.Z=u},6053:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r.p+"static/media/error.7d32a0595c46c5bbbb03.gif",a=r(184),c=function(){return(0,a.jsx)("img",{className:"error__img",src:n,alt:"Error"})}},1117:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(885),a=r(2791),c=r(4829),s=r(4164),i=r(6101),o=r(1738),l=r(6053),u=r(3749),d=r(5660),h=r(6983),m=r(184),f=function(e){var t=e.selectedCharId,r=e.updateSelectedChar,c=(0,i.Z)(),f=c.loader,p=c.error,v=c.getAllCharactersData,x=(0,u.A)(),j=x.charList,_=(x.search,x.setCharList,x.updateCharList),b=(x.clearCharList,(0,a.useState)(!1)),g=(0,n.Z)(b,2),N=g[0],Z=g[1],y=(0,a.useState)(!0),k=(0,n.Z)(y,2),w=k[0],C=k[1],S=(0,a.useState)(1559),I=(0,n.Z)(S,2),E=I[0],F=(I[1],(0,a.useState)(+window.localStorage.getItem("offset")||660)),D=(0,n.Z)(F,2),A=D[0],q=D[1];(0,a.useEffect)((function(){window.localStorage.getItem("offset")||window.localStorage.setItem("offset",A),L(!1)}),[]),(0,a.useEffect)((function(){+window.localStorage.getItem("offset")>=1549?window.localStorage.setItem("offset",E-1):window.localStorage.setItem("offset",A-9)}),[A]);var L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Z(!!e),v(A).then((function(e){return _(e)})).then((function(){return O()}))},O=function(){R(),C(!1)},R=function(){A>=E||q(E-A<9?A+(E-A):A+9)},M=function(e){r(e)},W=function(e){if("Enter"===e.key||" "===e.key){e.preventDefault();var t=e.target,r=document.querySelectorAll(".char__item"),n=+t.getAttribute("id");r.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),M(n),t.blur()}},B=function(e){(0,s.flushSync)((function(){return R()})),C(!w),L(e)},J=(0,m.jsx)(d.Z,{className:"char__grid",children:j.map((function(e){var r="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail?{objectFit:"fill"}:{objectFit:"cover"},n=t===e.id?"char__item active":"char__item";return(0,m.jsx)(h.Z,{timeout:700,classNames:"my-char",children:(0,m.jsxs)("li",{onClick:function(){return M(e.id)},onKeyDown:W,id:e.id,tabIndex:"0",className:n,children:[(0,m.jsx)("img",{style:r,src:e.thumbnail,alt:e.name}),(0,m.jsx)("div",{className:"char__name",children:e.title})]})},e.id)}))}),U=f&&0===j.length&&!N&&(0,m.jsx)(o.Z,{}),V=p&&(0,m.jsx)(l.Z,{});return(0,m.jsxs)("div",{className:"char__list",children:[U,V,J,(0,m.jsx)("button",{disabled:w,onClick:function(){return B(A)},className:"button button__main button__long",children:(0,m.jsx)("div",{className:"inner",children:"load more"})})]})},p=function(e){var t,r=e.character,n=r.description,a=r.comics,c=r.name,s=r.thumbnail,i=r.wiki,o=r.homepage,l=0===(t=a).length?"Sorry... We dont have comics with this character...":t.length>10?t.slice(0,10):t,u="string"===typeof l?l:l.map((function(e,t){return(0,m.jsx)("li",{className:"char__comics-item",children:e},"".concat(e,"_").concat(t))}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"char__basics",children:[(0,m.jsx)("img",{src:s,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s?{objectFit:"fill"}:{objectFit:"cover"},alt:c}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"char__info-name",children:c}),(0,m.jsxs)("div",{className:"char__btns",children:[(0,m.jsx)("a",{href:o,className:"button button__main",children:(0,m.jsx)("div",{className:"inner",children:"homepage"})}),(0,m.jsx)("a",{href:i,className:"button button__secondary",children:(0,m.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,m.jsx)("div",{className:"char__descr",children:n}),(0,m.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,m.jsx)("ul",{className:"char__comics-list",children:u})]})},v=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,m.jsxs)("div",{className:"skeleton",children:[(0,m.jsxs)("div",{className:"pulse skeleton__header",children:[(0,m.jsx)("div",{className:"pulse skeleton__circle"}),(0,m.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,m.jsx)("div",{className:"pulse skeleton__block"}),(0,m.jsx)("div",{className:"pulse skeleton__block"}),(0,m.jsx)("div",{className:"pulse skeleton__block"})]})]})},x=function(e){var t=e.selectedCharId,r=(0,i.Z)(),c=r.loader,s=r.error,u=r.getCharacterByIdData,d=r.clearError,f=(0,a.useState)(null),x=(0,n.Z)(f,2),j=x[0],_=x[1],b=(0,a.useState)(!1),g=(0,n.Z)(b,2),N=g[0],Z=g[1];(0,a.useEffect)((function(){y()}),[t]),(0,a.useEffect)((function(){Z(!0)}),[]);var y=function(){t&&(d(),u(t).then((function(e){return function(e){_((function(t){return e}))}(e)})),Z(!0))},k=c&&(0,m.jsx)(o.Z,{}),w=s&&(0,m.jsx)(l.Z,{}),C=!j&&!s&&!c&&(0,m.jsx)(v,{}),S=j&&!c&&!s&&(0,m.jsx)(p,{character:j});return(0,m.jsx)(h.Z,{in:N,mountOnEnter:!0,timeout:1400,classNames:"my-info",children:(0,m.jsxs)("div",{className:"char__info",children:[S,C,k,w]})})},j=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",_=function(){var e=(0,i.Z)(),t=e.error,r=e.loader,c=e.getRandomCharacter,s=e.clearError,u=(0,a.useState)(1e5),d=(0,n.Z)(u,2),h=d[0],f=d[1],p=(0,a.useState)({}),v=(0,n.Z)(p,2),x=v[0],_=v[1];(0,a.useEffect)((function(){b();var e=setInterval((function(){b()}),h);return h||clearInterval(e),function(){return clearInterval(e)}}),[h]);var b=function(){s(),c().then((function(e){return function(e){_(e)}(e)}))},g=x.description,N=x.title,Z=x.homepage,y=x.wiki,k=x.thumbnail,w=t&&(0,m.jsx)(l.Z,{}),C=r&&(0,m.jsx)(o.Z,{}),S="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===k?{objectFit:"fill"}:{objectFit:"cover"};return(0,m.jsxs)("div",{className:"randomchar",children:[r||t?(0,m.jsxs)(m.Fragment,{children:[w,C]}):(0,m.jsxs)("div",{className:"randomchar__block",children:[(0,m.jsx)("img",{style:S,src:k,alt:"Random character",className:"randomchar__img"}),(0,m.jsxs)("div",{className:"randomchar__info",children:[(0,m.jsx)("p",{className:"randomchar__name",children:N}),(0,m.jsx)("p",{className:"randomchar__descr",children:g}),(0,m.jsxs)("div",{className:"randomchar__btns",children:[(0,m.jsx)("a",{href:Z,className:"button button__main",children:(0,m.jsx)("div",{className:"inner",children:"homepage"})}),(0,m.jsx)("a",{href:y,className:"button button__secondary",children:(0,m.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,m.jsxs)("div",{className:"randomchar__static",children:[(0,m.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,m.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,m.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,m.jsx)("button",{onClick:function(){b(),f("")},className:"button button__main",children:(0,m.jsx)("div",{className:"inner",children:"try it"})}),(0,m.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=r.p+"static/media/vision.067d4ae1936d64a577ce.png",g=r(8683),N=r(5987),Z=r(5705),y=r(132),k=r(3504),w=["label","request"],C=function(e){var t=e.label,r=e.request,a=(0,N.Z)(e,w),c=(0,i.Z)(),s=c.loader,o=c.error,l=(0,Z.U$)(a),u=(0,n.Z)(l,2),d=u[0],h=u[1],f=h.error&&h.touched&&!s&&JSON.stringify(r)&&!o?(0,m.jsx)("div",{className:"error",children:h.error}):null,p=d.value&&!s&&!o&&!r&&h.touched&&JSON.stringify(r)?(0,m.jsx)("div",{className:"error",children:"Character not found"}):null,v=r&&r.length>0&&!s&&!o&&(0,m.jsxs)("div",{className:"input__wrapper",children:[(0,m.jsxs)("label",{className:"success",children:["There is! Visit ",r[0].name," page?"]}),(0,m.jsx)(k.rU,{to:"/".concat(r[0].id),className:"button button__secondary",children:(0,m.jsx)("div",{style:{display:"block"},className:"inner",children:"hero page"})})]});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("label",{id:a.id,children:t}),(0,m.jsxs)("div",{className:"input__wrapper",children:[(0,m.jsx)("input",(0,g.Z)((0,g.Z)({},d),a)),(0,m.jsx)("button",{type:"submit",className:"button button__main",children:(0,m.jsx)("div",{className:"inner",children:"Find"})})]}),p,f,v]})},S=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],c=t[1],s=(0,i.Z)(),l=s.loader,u=(s.error,s.getAllChars);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(Z.J9,{initialValues:{name:""},validationSchema:y.Ry({name:y.Z_().required("Must be required")}),onSubmit:function(e,t){var r,n=t.setSubmitting;r=e.name,u(r).then((function(e){return 0!==e.length&&c(e)})),c(null),n(!1)},children:(0,m.jsx)(Z.l0,{className:"form",children:l?(0,m.jsx)(o.Z,{}):(0,m.jsx)(C,{type:"text",request:r,name:"name",id:"name",label:"Or find a character by name:",placeholder:"Enter the name"})})})})},I=r(4270),E=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],s=t[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(I.q,{children:[(0,m.jsx)("meta",{charSet:"utf-8",name:"descrition"}),(0,m.jsx)("title",{children:"Marvel Application"})]}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(_,{})}),(0,m.jsxs)("div",{className:"char__content",children:[(0,m.jsx)(c.Z,{children:(0,m.jsx)(f,{updateSelectedChar:function(e){s((function(t){return e}))},selectedCharId:r})}),(0,m.jsxs)("div",{children:[(0,m.jsx)(c.Z,{children:(0,m.jsx)(x,{selectedCharId:r})}),(0,m.jsx)(S,{})]})]}),(0,m.jsx)("img",{className:"bg-decoration",src:b,alt:"vision"})]})}},6101:function(e,t,r){var n=r(4165),a=r(5861),c=r(3749);t.Z=function(){var e=(0,c.i)(),t=e.loader,r=e.error,s=e.request,i=e.clearError,o="apikey=75aef817f3e41428518bd4e3781b08d1",l="https://gateway.marvel.com:443/v1/public/",u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"characters?name=").concat(t,"&").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(v));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:660,e.next=3,s("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"characters/").concat(t,"?").concat(o));case 2:return r=e.sent,e.abrupt("return",v(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(400*Math.random()+1011e3),e.next=3,s("".concat(l,"characters/").concat(t,"?").concat(o));case 3:return r=e.sent,e.abrupt("return",v(r.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"comics/").concat(t,"?").concat(o));case 2:return r=e.sent,e.abrupt("return",p(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return{title:e.title,description:x(e.description),id:e.id,thumbnail:"".concat(e.images[0].path,".").concat(e.images[0].extension),price:"".concat(e.prices[0].price,"$"),pages:"".concat(e.pageCount,"pages")}},v=function(e){var t=e.comics.items.map((function(e){return e.name}));return{description:x(e.description),id:e.id,title:e.name,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].url,comics:t}},x=function(e){return e?"".concat(e.slice(0,230),"..."):"Sorry...We don't have description for this one..."};return{getAllChars:u,getRandomCharacter:m,getAllCharactersData:d,getCharacterByIdData:h,getAllComicsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;return s("".concat(l,"comics?limit=8&offset=").concat(e,"&").concat(o))},getComicsByIdData:f,clearError:i,loader:t,error:r}}}}]);
//# sourceMappingURL=232.34fb298a.chunk.js.map