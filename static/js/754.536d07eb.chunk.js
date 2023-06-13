/*! For license information please see 754.536d07eb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[754],{4146:function(t,r,e){e.d(r,{Z:function(){return m}});var n,o,i,a,c,u=e(1087),l=e(647),s=e(168),h=e(5867),f=h.ZP.ul(n||(n=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n"]))),p=h.ZP.li(o||(o=(0,s.Z)(["\n  display: flex;\n  width: 220px;\n"]))),d=h.ZP.h2(i||(i=(0,s.Z)(["\n  font-size: 18px;\n  padding: 0 6px;\n  text-align: center;\n"]))),v=h.ZP.div(a||(a=(0,s.Z)(["\n  border: 1px solid transparent;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #ffff;\n  width: 200px;\n  height: 300px;\n  transition: all 0.3s ease-in-out;\n\n  :hover {\n    background-color: orange;\n    opacity: 0.7;\n  }\n"]))),g=h.ZP.img(c||(c=(0,s.Z)(["\n  height: 100%;\n  width: 100%;\n"]))),y=e(184),m=function(t){var r=t.films,e=t.location;return(0,y.jsx)(f,{children:r.map((function(t){return(0,y.jsx)(p,{children:(0,y.jsxs)(u.Link,{to:"/movies/".concat(t.id),state:{from:e},children:[(0,y.jsx)(v,{children:(0,y.jsx)(g,{src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):l,alt:t.title})}),(0,y.jsx)(d,{children:t.title})]})},t.id)}))})}},9754:function(t,r,e){e.r(r),e.d(r,{default:function(){return E}});var n,o,i,a,c=e(5861),u=e(9439),l=e(6795),s=e(2791),h=e(168),f=e(5867),p=f.ZP.div(n||(n=(0,h.Z)(["\n  padding: 0 25px;\n"]))),d=f.ZP.form(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  width: 700px;\n  height: 50px;\n  max-width: 100%;\n  margin: 0 auto;\n"]))),v=f.ZP.button(i||(i=(0,h.Z)(["\n  border: 3px solid var(--brown);\n  background-color: var(--brown);\n  color: var(--cream);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  width: 30%;\n  justify-content: center;\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--cream);\n    color: var(--brown);\n  }\n"]))),g=f.ZP.input(a||(a=(0,h.Z)(["\n  width: 70%;\n  padding: 0 20px;\n  border: 3px solid var(--brown);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  background-color: var(--cream);\n\n  font-family: 'IBM Plex Mono';\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 2px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=e(184),m=function(t){var r=t.setSearch,e=(0,s.useState)(""),n=(0,u.Z)(e,2),o=n[0],i=n[1];return(0,y.jsxs)(p,{children:[(0,y.jsxs)(d,{onSubmit:function(t){if(t.preventDefault(),""===o.trim())return l.Am.error("Enter search value!");r({movies:o.trim()}),i("")},children:[(0,y.jsx)(g,{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!1,placeholder:"Search movie",value:o,onChange:function(t){return i(t.target.value)}}),(0,y.jsx)(v,{type:"submit",children:"Search"})]}),(0,y.jsx)(l.Ix,{position:"top-right",autoClose:3e3,theme:"colored"})]})},x=e(1087),w=e(7689),b=e(4005),j=e(4146);function L(){L=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(O){u=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof f?r:f,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:b(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==r&&e.call(y,i)&&(v=y);var m=d.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var E=function(){var t,r=(0,s.useState)([]),e=(0,u.Z)(r,2),n=e[0],o=e[1],i=(0,x.useSearchParams)(),a=(0,u.Z)(i,2),l=a[0],h=a[1],f=null!==(t=l.get("movies"))&&void 0!==t?t:"",p=(0,w.TH)();return(0,s.useEffect)((function(){var t=function(){var t=(0,c.Z)(L().mark((function t(){var r;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,(0,b.gH)(f);case 5:r=t.sent,o(r.results),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(2),new Error("Ooops... I did it again");case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[f]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{setSearch:h}),n.length>0&&(0,y.jsx)(j.Z,{films:n,pathTo:"",location:p}),f&&0===n.length&&(0,y.jsx)("h2",{children:"Notefound"})]})}}}]);
//# sourceMappingURL=754.536d07eb.chunk.js.map