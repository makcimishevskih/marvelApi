"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[232],{4829:function(e,t,r){var n=r(5671),a=r(3144),c=r(136),s=r(7277),i=r(2791),o=r(6053),l=r(184),u=function(e){(0,c.Z)(r,e);var t=(0,s.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).state={error:null,errorInfo:null},a}return(0,a.Z)(r,[{key:"componentDidCatch",value:function(e,t){this.setState((function(r){return{error:e,errorInfo:t}}))}},{key:"render",value:function(){var e=this.state,t=(e.error,e.errorInfo),r=this.props.children;return t?(0,l.jsx)(o.Z,{}):r}}]),r}(i.Component);t.Z=u},6053:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r.p+"static/media/error.7d32a0595c46c5bbbb03.gif",a=r(184),c=function(){return(0,a.jsx)("img",{className:"error__img",src:n,alt:"Error"})}},1117:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(885),a=r.p+"static/media/vision.067d4ae1936d64a577ce.png",c=r(2791),s=r(4270),i=r(4829),o=r(8683),l=r(5987),u=r(5705),d=r(132),h=r(6101),m=r(3504),f=r(1738),p=r(184),v=["label","request"],x=function(e){var t=e.label,r=e.request,a=(0,l.Z)(e,v),c=(0,h.Z)(),s=c.loader,i=c.error,d=(0,u.U$)(a),f=(0,n.Z)(d,2),x=f[0],j=f[1],_=j.error&&j.touched&&!s&&JSON.stringify(r)&&!i?(0,p.jsx)("div",{className:"error",children:j.error}):null,b=x.value&&!s&&!i&&!r&&j.touched&&JSON.stringify(r)?(0,p.jsx)("div",{className:"error",children:"Character not found"}):null,g=r&&r.length>0&&!s&&!i&&(0,p.jsxs)("div",{className:"input__wrapper",children:[(0,p.jsxs)("label",{className:"success",children:["There is! Visit ",r[0].name," page?"]}),(0,p.jsx)(m.rU,{to:"/".concat(r[0].id),className:"button button__secondary",children:(0,p.jsx)("div",{style:{display:"block"},className:"inner",children:"hero page"})})]});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("label",{id:a.id,children:t}),(0,p.jsxs)("div",{className:"input__wrapper",children:[(0,p.jsx)("input",(0,o.Z)((0,o.Z)({},x),a)),(0,p.jsx)("button",{type:"submit",className:"button button__main",children:(0,p.jsx)("div",{className:"inner",children:"Find"})})]}),b,_,g]})},j=function(){var e=(0,c.useState)(null),t=(0,n.Z)(e,2),r=t[0],a=t[1],s=(0,h.Z)(),i=s.loader,o=(s.error,s.getAllChars);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(u.J9,{initialValues:{name:""},validationSchema:d.Ry({name:d.Z_().required("Must be required")}),onSubmit:function(e,t){var r,n=t.setSubmitting;r=e.name,o(r).then((function(e){return 0!==e.length&&a(e)})),a(null),n(!1)},children:(0,p.jsx)(u.l0,{className:"form",children:i?(0,p.jsx)(f.Z,{}):(0,p.jsx)(x,{type:"text",request:r,name:"name",id:"name",label:"Or find a character by name:",placeholder:"Enter the name"})})})})},_=r(3749),b=r(5660),g=r(6983),N=r(6053),Z=function(e){var t=e.selectedCharId,r=e.updateSelectedChar,a=(0,h.Z)(),s=a.loader,i=a.error,o=a.getAllCharactersData,l=(0,_.A)(),u=l.charList,d=(l.search,l.setCharList,l.updateCharList),m=(l.clearCharList,(0,c.useState)(!1)),v=(0,n.Z)(m,2),x=v[0],j=v[1],Z=(0,c.useState)(!0),y=(0,n.Z)(Z,2),k=y[0],w=y[1],C=(0,c.useState)(1559),S=(0,n.Z)(C,2),I=S[0],E=(S[1],(0,c.useState)(+window.localStorage.getItem("offset")||660)),F=(0,n.Z)(E,2),D=F[0],A=F[1];(0,c.useEffect)((function(){window.localStorage.getItem("offset")||window.localStorage.setItem("offset",D),q(!1)}),[]),(0,c.useEffect)((function(){+window.localStorage.getItem("offset")>=1549?window.localStorage.setItem("offset",I-1):window.localStorage.setItem("offset",D-9)}),[D]);var q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];j(!!e),o(D).then((function(e){return d(e)})).then((function(){return L()}))},L=function(){O(),w(!1)},O=function(){D>=I||A(I-D<9?D+(I-D):D+9)},R=function(e){r(e)},M=function(e){if("Enter"===e.key||" "===e.key){e.preventDefault();var t=e.target,r=document.querySelectorAll(".char__item"),n=+t.getAttribute("id");r.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),R(n),t.blur()}},W=(0,p.jsx)(b.Z,{className:"char__flex",children:u.map((function(e){var r="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail?{objectFit:"fill"}:{objectFit:"cover"},n=t===e.id?"char__item active":"char__item";return(0,p.jsx)(g.Z,{timeout:800,classNames:"my-char",children:(0,p.jsxs)("li",{onClick:function(){return R(e.id)},onKeyDown:M,id:e.id,tabIndex:"0",className:n,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{style:r,src:e.thumbnail,alt:e.name})}),(0,p.jsx)("div",{className:"char__name",children:e.title})]})},e.id)}))}),B=s&&0===u.length&&!x&&(0,p.jsx)(f.Z,{}),J=i&&(0,p.jsx)(N.Z,{});return(0,p.jsxs)("div",{className:"char__list",children:[B,J,W,(0,p.jsx)("button",{disabled:k,onClick:function(){return function(e){O(),w(!k),q(e)}(D)},className:"button button__main button__long",children:(0,p.jsx)("div",{className:"inner",children:"load more"})})]})},y=function(e){var t,r=e.character,n=r.description,a=r.comics,c=r.name,s=r.thumbnail,i=r.wiki,o=r.homepage,l=0===(t=a).length?"Sorry... We dont have comics with this character...":t.length>10?t.slice(0,10):t,u="string"===typeof l?l:l.map((function(e,t){return(0,p.jsx)("li",{className:"char__comics-item",children:e},"".concat(e,"_").concat(t))}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"char__basics",children:[(0,p.jsx)("img",{src:s,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s?{objectFit:"fill"}:{objectFit:"cover"},alt:c}),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"char__info-name",children:c}),(0,p.jsxs)("div",{className:"char__btns",children:[(0,p.jsx)("a",{href:o,className:"button button__main",children:(0,p.jsx)("div",{className:"inner",children:"homepage"})}),(0,p.jsx)("a",{href:i,className:"button button__secondary",children:(0,p.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,p.jsx)("div",{className:"char__descr",children:n}),(0,p.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,p.jsx)("ul",{className:"char__comics-list",children:u})]})},k=function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,p.jsxs)("div",{className:"skeleton",children:[(0,p.jsxs)("div",{className:"pulse skeleton__header",children:[(0,p.jsx)("div",{className:"pulse skeleton__circle"}),(0,p.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,p.jsx)("div",{className:"pulse skeleton__block"}),(0,p.jsx)("div",{className:"pulse skeleton__block"}),(0,p.jsx)("div",{className:"pulse skeleton__block"})]})]})},w=function(e){var t=e.selectedCharId,r=(0,h.Z)(),a=r.loader,s=r.error,i=r.getCharacterByIdData,o=r.clearError,l=(0,c.useState)(null),u=(0,n.Z)(l,2),d=u[0],m=u[1],v=(0,c.useState)(!1),x=(0,n.Z)(v,2),j=x[0],_=x[1];(0,c.useEffect)((function(){b()}),[t]),(0,c.useEffect)((function(){_(!0)}),[]);var b=function(){t&&(o(),i(t).then((function(e){return function(e){m((function(){return e}))}(e)})),_(!0))},Z=a&&(0,p.jsx)(f.Z,{}),w=s&&(0,p.jsx)(N.Z,{}),C=!d&&!s&&!a&&(0,p.jsx)(k,{}),S=d&&!a&&!s&&(0,p.jsx)(y,{character:d});return(0,p.jsx)(g.Z,{in:j,mountOnEnter:!0,timeout:1400,classNames:"my-info",children:(0,p.jsxs)("div",{className:"char__info",children:[S,C,Z,w]})})},C=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",S=function(){var e=(0,h.Z)(),t=e.error,r=e.loader,a=e.getRandomCharacter,s=e.clearError,i=(0,c.useState)(1e5),o=(0,n.Z)(i,2),l=o[0],u=o[1],d=(0,c.useState)({}),m=(0,n.Z)(d,2),v=m[0],x=m[1];(0,c.useEffect)((function(){j();var e=setInterval((function(){j()}),l);return l||clearInterval(e),function(){return clearInterval(e)}}),[l]);var j=function(){s(),a().then((function(e){return function(e){x(e)}(e)}))},_=v.description,b=v.title,g=v.homepage,Z=v.wiki,y=v.thumbnail,k=t&&(0,p.jsx)(N.Z,{}),w=r&&(0,p.jsx)(f.Z,{}),S="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===y?{objectFit:"fill"}:{objectFit:"cover"};return(0,p.jsxs)("div",{className:"randomchar",children:[r||t?(0,p.jsxs)(p.Fragment,{children:[k,w]}):(0,p.jsxs)("div",{className:"randomchar__block",children:[(0,p.jsx)("img",{style:S,src:y,alt:"Random character",className:"randomchar__img"}),(0,p.jsxs)("div",{className:"randomchar__info",children:[(0,p.jsx)("p",{className:"randomchar__name",children:b}),(0,p.jsx)("p",{className:"randomchar__descr",children:_}),(0,p.jsxs)("div",{className:"randomchar__btns",children:[(0,p.jsx)("a",{href:g,className:"button button__main",children:(0,p.jsx)("div",{className:"inner",children:"homepage"})}),(0,p.jsx)("a",{href:Z,className:"button button__secondary",children:(0,p.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,p.jsxs)("div",{className:"randomchar__static",children:[(0,p.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,p.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,p.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,p.jsx)("button",{onClick:function(){j(),u("")},className:"button button__main",children:(0,p.jsx)("div",{className:"inner",children:"try it"})}),(0,p.jsx)("img",{src:C,alt:"mjolnir",className:"randomchar__decoration"})]})]})},I=function(){var e=(0,c.useState)(null),t=(0,n.Z)(e,2),r=t[0],o=t[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s.q,{children:[(0,p.jsx)("meta",{charSet:"utf-8",name:"descrition"}),(0,p.jsx)("title",{children:"Marvel Application"})]}),(0,p.jsx)(i.Z,{children:(0,p.jsx)(S,{})}),(0,p.jsxs)("div",{className:"char__content",children:[(0,p.jsx)(i.Z,{children:(0,p.jsx)(Z,{updateSelectedChar:function(e){o((function(){return e}))},selectedCharId:r})}),(0,p.jsxs)("div",{className:"char__info-block",children:[(0,p.jsx)(i.Z,{children:(0,p.jsx)(w,{selectedCharId:r})}),(0,p.jsx)(j,{})]})]}),(0,p.jsx)("img",{className:"bg-decoration",src:a,alt:"vision"})]})}},6101:function(e,t,r){var n=r(4165),a=r(5861),c=r(3749);t.Z=function(){var e=(0,c.i)(),t=e.loader,r=e.error,s=e.request,i=e.clearError,o="apikey=75aef817f3e41428518bd4e3781b08d1",l="https://gateway.marvel.com:443/v1/public/",u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"characters?name=").concat(t,"&").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(v));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:660,e.next=3,s("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"characters/").concat(t,"?").concat(o));case 2:return r=e.sent,e.abrupt("return",v(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(400*Math.random()+1011e3),e.next=3,s("".concat(l,"characters/").concat(t,"?").concat(o));case 3:return r=e.sent,e.abrupt("return",v(r.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"comics/").concat(t,"?").concat(o));case 2:return r=e.sent,e.abrupt("return",p(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return{title:e.title,description:x(e.description),id:e.id,thumbnail:"".concat(e.images[0].path,".").concat(e.images[0].extension),price:"".concat(e.prices[0].price,"$"),pages:"".concat(e.pageCount,"pages")}},v=function(e){var t=e.comics.items.map((function(e){return e.name}));return{description:x(e.description),id:e.id,title:e.name,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].url,comics:t}},x=function(e){return e?"".concat(e.slice(0,230),"..."):"Sorry...We don't have description for this one..."};return{getAllChars:u,getRandomCharacter:m,getAllCharactersData:d,getCharacterByIdData:h,getAllComicsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;return s("".concat(l,"comics?limit=8&offset=").concat(e,"&").concat(o))},getComicsByIdData:f,clearError:i,loader:t,error:r}}}}]);
//# sourceMappingURL=232.2dba3b87.chunk.js.map