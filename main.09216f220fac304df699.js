/*! For license information please see main.09216f220fac304df699.js.LICENSE.txt */
!function(){var e,t,r,n={1490:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";t=function(){return r};var r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function m(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),s=new C(n||[]);return o(i,"_invoke",{value:x(e,r,s)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=m;var f={};function h(){}function p(){}function v(){}var g={};u(g,s,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(L([])));y&&y!==n&&a.call(y,s)&&(g=y);var E=v.prototype=h.prototype=Object.create(g);function N(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,r){function n(o,i,s,c){var l=d(t[o],t,i);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==e(m)&&a.call(m,"__await")?r.resolve(m.__await).then((function(e){n("next",e,s,c)}),(function(e){n("throw",e,s,c)})):r.resolve(m).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,a){n(e,t,r,a)}))}return i=i?i.then(a,a):a()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=d(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,o(E,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},r.awrap=function(e){return{__await:e}},N(k.prototype),u(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var i=new k(m(e,t,n,a),o);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(E),u(E,l,"Generator"),u(E,s,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=L,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},r}function r(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function n(){var e;return e=t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),n=function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))},n.apply(this,arguments)}!function(){n.apply(this,arguments)}()},8610:function(e,t,r){"use strict";r(1490);var n=r(7378),a=r(7634),o=r(5783),i=r(4935);function s(){return n.createElement("div",{"data-aos":"fade-up",className:"cyber-text-container w-11/12 mx-auto"},n.createElement("div",{className:"pt-56 lg:pt-96 md:ml-28 lg:ml-52"},n.createElement("img",{className:"w-full md:w-2/3 lg:w-2/3",src:"./assets/images/logo-text.svg",alt:""}),n.createElement("div",{className:"grid"},n.createElement("span",{"data-text":"Писатель 2.0",className:"cyber-text glitch layers w-11/12 lg:w-2/3 mt-8 tracking-widest font-thin text-xl md:text-2xl lg:text-3xl"},"Писатель 2.0"),n.createElement("span",{"data-text":"Мы создаём непохожую литературу. Мы пишем - вы читаете.",className:"cyber-text glitch layers w-11/12 lg:w-2/3 mt-4 tracking-widest font-thin text-xl md:text-2xl lg:text-3xl"},"Мы создаём непохожую литературу. Мы пишем - вы читаете."))))}function c(){return n.createElement("footer",{className:"footer"},n.createElement("a",{className:"footer__icon",href:"https://t.me/cybervarius"},n.createElement("img",{className:"w-6 inline",src:"./assets/images/tg-clean.png",alt:"telegram"})),n.createElement("p",{className:"footer__copyright"},"© 2024 web-dragon"))}function l(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"home-page"},n.createElement(s,null),n.createElement(c,null)))}var u=function(){return n.createElement(n.Fragment,null,n.createElement("main",{className:"lib-authors-page"},n.createElement("div",{className:"lib-authors"},n.createElement("div",{"data-aos":"fade-up",className:"lib-authors__author cyber-text-container"},n.createElement(o.OL,{to:"/libChernyshev",end:!0},n.createElement("img",{className:"chernyshev-img mx-auto w-32 lg:w-48",src:"./assets/images/chernyshev.png",alt:"..."}),n.createElement("div",null,n.createElement("p",{"data-text":"Герман Чернышёв",className:"lib-authors__title authors-name-chernyshev cyber-text glitch layers"},"Герман Чернышёв"))),n.createElement("div",{className:"mt-6 lg:mt-12"},n.createElement("span",{className:"lib-authors__descr"},"Беспросветный мир, предоставленный самому себе. Людям не на кого надеяться, они привыкли сами улаживать свои дела и не лезть в чужие. Ни добро, ни зло не обязательны. Королевства погрязли в хаосе. И над всем маячат громадные и молчаливые Корни…"))),n.createElement("div",{"data-aos":"fade-up",className:"lib-authors__author cyber-text-container"},n.createElement(o.OL,{to:"/libHolmov",end:!0},n.createElement("div",{className:"w-full author-holmov"},n.createElement("img",{className:"holmov-img mx-auto w-32 lg:w-48",src:"./assets/images/holmov.png",alt:"..."}),n.createElement("div",{className:"w-full"},n.createElement("p",{"data-text":"Александр Холмов",className:"lib-authors__title cyber-text glitch layers mx-auto mb-4"},"Александр Холмов")))),n.createElement("div",{className:"mt-6 lg:mt-12 w-full h-100% items-start"},n.createElement("span",{className:"lib-authors__descr"},"2204 год. К туманным берегам Англии приближается корабль…» «Стоп-стоп. Уже начинается путаница. Откуда вы знаете, что это Англия? Думаете – если туман, то там непременно скалы, вереск, а дальше Темза и овсянка, сэр? А может, там радиоактивная пустыня и злобные роботы бегают?"))))))},m=function(){var e=[{id:1,name:"Авторы",description:"На Кибервариусе мы представляем Германа Чернышёва и Александра Холмова. Это официальный ресурс авторов."},{id:2,name:"Библиотека",description:"Все книги в библиотеке Кибервариуса можно читать свободно и бесплатно. Библиотека регулярно пополняется. Новые произведения по возможности сразу размещаются здесь."},{id:3,name:"Книжная лавка",description:"В книжной лавке Кибервариуса находятся все книги авторов, изданные в электронном виде и доступные к покупке на сегодня. Мы предлагаем их вам по самой низкой цене. Приобретая книги здесь, вы платите напрямую авторам. Мы гарантируем полную безопасность и удобство заказа."},{id:3,name:"Книжная лавка",description:"В книжной лавке Кибервариуса находятся все книги авторов, изданные в электронном виде и доступные к покупке на сегодня. Мы предлагаем их вам по самой низкой цене. Приобретая книги здесь, вы платите напрямую авторам. Мы гарантируем полную безопасность и удобство заказа."}];(0,n.useEffect)((function(){var e=document.querySelectorAll(".about-card__title");function t(t){e.forEach((function(e){e.classList.remove("about-card_active"),e.parentNode.lastChild.classList.add("hide")})),t.target.classList.toggle("about-card_active")}e.forEach((function(e){e.onclick=t}))}));var t=function(e){e.currentTarget.classList.contains("about-card_active")?e.currentTarget.parentNode.lastChild.classList.remove("hide"):e.currentTarget.parentNode.lastChild.classList.add("hide")};function r(r){var a=r.index;return n.createElement("div",{className:"about-card"},n.createElement("div",{onClick:t,className:"about-card__title p-3 text-center text-3xl"},e[a].name),n.createElement("p",{className:"about-card__descr  hide p-6 lg:p-12 my-8 font-thin"},e[a].description))}return n.createElement(n.Fragment,null,n.createElement("main",{"data-aos":"fade-up",className:"about-page"},n.createElement("div",{className:"about"},n.createElement(r,{index:0}),n.createElement(r,{index:1}),n.createElement(r,{index:2})),n.createElement("div",{className:"other"},n.createElement("div",{className:"other__container"},n.createElement("p",{className:"other__title"},"Как купить"),n.createElement("p",{className:"other__descr font-thin"},"Чтобы приобрести книгу, просто напишите на order@cybervarius.ru. Укажите название. Вам придет ответное письмо с номером карты для перевода. После оплаты книга будет выслана на ваш E-mail.")),n.createElement("div",{className:"other__container"},n.createElement("p",{className:"other__title"},"О ценах и скидках"),n.createElement("p",{className:"other__descr font-thin"},"Книги продаются без посредничества издательских платформ. Мы не используем платежных систем. На некоторые книги вы можете назначить свою цену. Возможны индивидуальные скидки.")),n.createElement("div",{className:"other__container"},n.createElement("p",{className:"other__title"},"Форматы электронных книг"),n.createElement("p",{className:"other__descr font-thin"},"Мы высылаем книги в формате PDF, а также по вашему запросу - в любых популярных форматах — EPUB, MOBI, FB2 и др. Если книга не открылась на вашем устройстве, напишите на order@cybervarius.ru или на support@cybervarius.ru, мы поможем.")))))},d=function(){return n.createElement("div",{className:"store-authors-page"},n.createElement("div",{"data-aos":"fade-up",className:"author cyber-text-container"},n.createElement(o.OL,{to:"/booksChernyshev",end:!0},n.createElement("img",{className:"mx-auto w-24 lg:w-32",src:"./assets/images/chernyshev.png",alt:"..."}),n.createElement("p",{"data-text":"Этот свет никогда не был чем-то хорошим.",className:"author__quote p-3 font-thin text-2xl lg:text-3xl"},"Этот свет никогда не был чем-то хорошим."))),n.createElement("div",{"data-aos":"fade-up",className:"author cyber-text-container"},n.createElement(o.OL,{to:"/booksHolmov",end:!0},n.createElement("img",{className:"holmov-img mx-auto w-24 lg:w-32",src:"./assets/images/holmov.png",alt:"..."}),n.createElement("p",{"data-text":"Я - как живая. Просто не отличить.",className:"author__quote p-3 font-thin text-2xl lg:text-3xl"},"Я - как живая. Просто не отличить."))))},f=r(3615),h=r.n(f);function p(e){var t=e.index,r=e.props,a=(0,n.useRef)(null),o=(0,n.useRef)(null);(0,n.useEffect)((function(){var e=document.querySelectorAll(".book-card__body");function t(t){e.forEach((function(e){e.classList.remove("active-scale"),e.parentNode.lastChild.classList.add("hide")})),t.target.classList.toggle("active-scale")}e.forEach((function(e){e.onclick=t}))}));return n.createElement("div",{className:"book-card"},n.createElement("div",{ref:a,onClick:function(e){e.currentTarget.classList.contains("active-scale")?e.currentTarget.parentNode.lastChild.classList.remove("hide"):e.currentTarget.parentNode.lastChild.classList.add("hide")},type:"button",className:"book-card__body sm:block p-3 lg:p-6"},n.createElement("p",{className:"book-card__title"},r.bookCards[t].title),n.createElement("div",{className:"book-card__additional"},n.createElement("span",{className:"book-card__series"},r.bookCards[t].series),n.createElement("span",{className:"book-card__number"},r.bookCards[t].bookNumber))),n.createElement("div",{ref:o,className:"book-card__preview lg:right-8 p-4 lg:p-8 preview".concat(t," hide")},n.createElement("img",{src:r.bookCards[t].image,className:"book-card__image w-40 lg:w-72 mx-auto"}),n.createElement("div",{className:"book-card__btn mt-4 lg:mt-8 p-1 lg:p-2"},"Читать фрагмент"),n.createElement("p",{className:"font-thin mt-4 mx-auto"},n.createElement("span",{className:"book-card__series-header"},"Цикл:"),n.createElement("span",{className:"book-card__series"},r.bookCards[t].series)),n.createElement("p",{className:"book-card__number font-thin mt-4"},r.bookCards[t].bookNumber),n.createElement("p",{className:"book-card__descr mt-6 font-thin"},r.bookCards[t].description),n.createElement("div",{className:"book-card__quote w-full italic font-thin mt-8 mx-auto"},r.bookCards[t].quote)))}function v(e){var t=e.bookCards;return n.createElement("div",{className:"book-list__outer"},n.createElement("div",{className:"book-list"},t.map((function(t,r){return n.createElement(p,{key:r,index:r,props:e})}))))}v.propTypes={bookCards:h().arrayOf(h().object).isRequired};var g=r(6125),b=function(){var e=(0,g.v9)((function(e){return e.library.books.chernyshev}));return n.createElement("main",{className:"store-page"},n.createElement(v,{bookCards:e}))};function y(e){var t=e.bookCards;return n.createElement("div",{className:"book-list__outer"},n.createElement("div",{className:"book-list"},t.map((function(t,r){return n.createElement(p,{key:r,index:r,props:e})}))))}y.propTypes={bookCards:h().arrayOf(h().object).isRequired};var E=function(){var e=(0,g.v9)((function(e){return e.library.stories.chernyshev}));return n.createElement(n.Fragment,null,n.createElement("main",{className:"lib-page"},n.createElement(y,{bookCards:e})))};function N(e){var t=e.bookCards;return n.createElement("div",{className:"book-list__outer"},n.createElement("div",{className:"book-list"},t.map((function(t,r){return n.createElement(p,{key:r,index:r,props:e})}))))}N.propTypes={bookCards:h().arrayOf(h().object).isRequired};var k=function(){var e=(0,g.v9)((function(e){return e.library.stories.holmov}));return n.createElement(n.Fragment,null,n.createElement("main",{className:"lib-page"},n.createElement(N,{bookCards:e})))};function x(e){var t=e.bookCards;return n.createElement("div",{className:"book-list__outer"},n.createElement("div",{className:"book-list"},t.map((function(t,r){return n.createElement(p,{key:r,index:r,props:e})}))))}x.propTypes={bookCards:h().arrayOf(h().object).isRequired};var _=function(){var e=(0,g.v9)((function(e){return e.library.books.holmov}));return n.createElement("main",{className:"store-page"},n.createElement(x,{bookCards:e}))},w=r(5566),O=r.n(w);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,s=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=function(){(0,n.useEffect)((function(){O().init({duration:1e3})}),[]);var e=C((0,n.useState)(!1),2),t=e[0],r=e[1],a=C((0,n.useState)(!1),2),i=a[0],s=a[1],c=C((0,n.useState)(!1),2),l=c[0],u=c[1];function m(){s(!1)}function d(){r((function(e){return!e}))}function f(){u((function(e){return!e}))}return n.createElement("nav",{"data-aos":"fade-down",className:"z-10 h-10 mt-12 text-center fixed top-0 left-0 bottom-0 right-0"},n.createElement("input",{className:"checkbox",type:"checkbox",checked:i,onChange:function(){return s(!i)}}),n.createElement("div",{className:"hamburger-lines"},n.createElement("span",{className:"line line1"}),n.createElement("span",{className:"line line2"}),n.createElement("span",{className:"line line3"})),n.createElement("div",{className:"nav-logo"},n.createElement(o.OL,{to:"/",end:!0},n.createElement("img",{className:"w-32 lg:48 inline-block",src:"./assets/images/logo.svg",alt:""}))),n.createElement("ul",{className:"nav-list text-lg md:text-xl lg:text-2xl"},n.createElement(o.OL,{className:function(e){return e.isActive?"nav-link mx-2 nav-link-shadow active":"nav-link mx-2"},to:"/",end:!0,onClick:m},n.createElement("li",{className:"nav-item"},n.createElement("p",{className:"nav-link-inner"},"Главная"))),n.createElement("div",{onMouseEnter:d,onMouseLeave:d,className:"nav-lib 2xl:h-28 mx-2 inline-block"},n.createElement(o.OL,{className:function(e){return e.isActive?"nav-link nav-link-shadow active w-full":"nav-link w-full"},to:"/libAuthors",onClick:m},n.createElement("li",{className:"nav-item"},n.createElement("p",{className:"nav-link-inner"},"Библиотека"))),n.createElement("div",{className:t?"lib-chapters hidden lg:block":"fade"},n.createElement(o.OL,{to:"/libChernyshev",onClick:m},n.createElement("div",{className:"nav-lib-chernyshev mt-2 p-1 absolute left-0"},n.createElement("img",{className:"w-10",src:"./assets/images/chernyshev.png",alt:""}))),n.createElement(o.OL,{to:"/libHolmov",onClick:m},n.createElement("div",{className:"nav-lib-holmov mt-2 p-1 absolute right-0"},n.createElement("img",{className:"w-10",src:"./assets/images/holmov.png",alt:""}))))),n.createElement("div",{onMouseEnter:f,onMouseLeave:f,className:"nav-books mx-2 2xl:h-28 inline-block"},n.createElement(o.OL,{className:function(e){return e.isActive?"nav-link nav-link-shadow active w-full":"nav-link w-full"},to:"/booksAuthors",onClick:m},n.createElement("li",{className:"nav-item"},n.createElement("p",{className:"nav-link-inner"},"Книжная лавка"))),n.createElement("div",{className:l?"books-chapters hidden lg:block":"fade"},n.createElement(o.OL,{to:"/booksChernyshev",onClick:m},n.createElement("div",{className:"nav-lib-chernyshev mt-2 p-1 absolute left-0"},n.createElement("img",{className:"w-10",src:"./assets/images/chernyshev.png",alt:""}))),n.createElement(o.OL,{to:"/booksHolmov",onClick:m},n.createElement("div",{className:"nav-lib-holmov mt-2 p-1 absolute right-0"},n.createElement("img",{className:"w-10",src:"./assets/images/holmov.png",alt:""}))))),n.createElement(o.OL,{className:function(e){return e.isActive?"nav-link mx-2 nav-link-shadow active":"nav-link mx-2"},to:"/about",onClick:m},n.createElement("li",{className:"nav-item"},n.createElement("p",{className:"nav-link-inner"},"О Кибервариусе")))))};var S=function(){return n.createElement(o.UT,null,n.createElement("div",{className:"app",style:{backgroundImage:'url("./assets/images/bg-city-blur.png")'}},n.createElement(j,null),n.createElement(i.Z5,null,n.createElement(i.AW,{path:"/",exact:!0,Component:l}),n.createElement(i.AW,{path:"/libAuthors",Component:u}),n.createElement(i.AW,{path:"/booksAuthors",Component:d}),n.createElement(i.AW,{path:"/about",Component:m}),n.createElement(i.AW,{path:"/booksChernyshev",exact:!0,Component:b}),n.createElement(i.AW,{path:"/booksHolmov",exact:!0,Component:_}),n.createElement(i.AW,{path:"/libChernyshev",exact:!0,Component:E}),n.createElement(i.AW,{path:"/libHolmov",exact:!0,Component:k}))))},A=r(3788),q=(0,A.oM)({name:"library",initialState:{books:{chernyshev:[{id:1,title:"Рыба на мелководье",series:"Безумие Таргерта",bookNumber:"Книга 1",description:"Королевство Таргерт заполонили выродки, немые создания, приводящие всех в ужас. Жители вынуждены растить детей в страхе перед кровавым светом их глаз, что мерцает в ночи. Может, и Сырость, отвратительная неизлечимая болезнь, и гадкие белые мухи, и исчезновение короля - всё по их вине? Над сапожником Вайтешем тяготеет проклятье детства, связанное с появлением выродков. Он не чувствует себя в безопасности даже в собственной спальне. И не зря. Ведь выродки - далеко не самое страшное, что таится во тьме Таргерта...",image:"./assets/images/fish.jpg",quote:"Кровь, которую не видно на снегу"},{id:2,title:"Шелест сорняков",series:"Безумие Таргерта",bookNumber:"Книга 2",description:"Таргерт ещё не оправился от последствий страшной резни, как возвращается пропавший король. Вдобавок выродки, десятилетиями хранившие молчание, заговорили. Оттого ли, что новая жена короля – одна из них? Но теперь те, кого жители боялись и ненавидели, заняли рядом с ними равноправное место. Недовольство народа растёт, по всему королевству находят истерзанные трупы, неизлечимая Сырость продолжает уносить жизни. Лавочник Хэмри неожиданно узнаёт о своём высоком происхождении. Он получает от погибшего дяди-барона богатое наследство и титул. Странно, что отец Хэмри в своё время порвал все связи со знатной роднёй и ни словом не обмолвился о ней сыну...",image:"./assets/images/rustle.jpg",quote:"Кто расплатится за виновных?"},{id:3,title:"Свет Неутешенных",series:"Глубины ксоотов",bookNumber:"Книга 1",description:"Королевство Коггвот поглотил Корневой Мор, сеющий безумие и разруху. Из гигантских Корней рождаются загадочные уродцы - ксооты. Смертельная болезнь Сырость уносит жизни. К тому же горожане замечают в окрестностях чудовищных Собак. Даже король в ужасе от происходящего бросает трон и государство на произвол судьбы. Шахтёр Креупци болен: его глаза поражены странным недугом, ещё немного и он ослепнет. В поисках исцеления он попадает в святилище, где жрецы молятся таинственной силе - Ясности. Они надеются, что их вера спасёт королевство от Корневого Мора. Но не станет ли Ясность ещё худшим злом?..",image:"./assets/images/light.jpg",quote:"Не бойся темноты. Свет страшнее"}],holmov:[{id:1,title:"Танец со стулом",series:"Точка активации",bookNumber:"Книга 1",description:"Опасен ли прогресс для человечества? Техногенная катастрофа? Бунт машин? Вы серьезно? Мы же только из-за прогресса и живы до сих пор. Давайте не будем. Считайте, мы в океане, выбрали курс — все, надо плыть. Тем более, завтра с утра на работу... В конце 22 века в английской деревушке Мейденс Грин, в обычной семье росли двое мальчишек. Беда положила конец счастливому детству. Братьям предстоит искать свое место в мире, где уже до их рождения все было далеко не в порядке... А в это время Кэрол просто хочет спать.",image:"./assets/images/activation-point1.jpg"},{id:2,title:"Маленький кирпичный дом",series:"Точка активации",bookNumber:"Книга 2",description:'Продолжение истории братьев Барнетов и другой публики мрачного Лондона 2200-х. Что решит Дэвид, лучший андроид-инженер Великобритании? Будет ли Кейси ночевать под мостом? Куда девалась Ада Ройзбах? Какую тайну хранит Великий и Непостижимый Гроссмайер и что замышляет злобный министр Данкрофт? Удастся ли пакерам... Тс-с-с. И Кэрол, оставленная нами у окна в одиночестве и растерянности... Станет ли она "Еленой-X", как мечтала, или пойдет по другому пути? И какое будущее ждет андроидов - а с ними и всю страну?',image:"./assets/images/activation-point2.jpg"}]},stories:{chernyshev:[{id:1,name:"guard",title:"Стражник",series:"Апокрифы Квёлых Земель",description:"Иногда выполнить долг - значит подвергнуть себя смертельной опасности. Неважно, готов ты к ней или нет. Важно - сможешь ли ты выбраться живым. Нерори не был готов к ночному нападению. Стражницкий капюшон ещё не делает его стражником, а меч в руке - воином. И всё же патрульный мёртв, и тварь, убившая его, убьёт опять. Чтобы помешать этому, надо всего лишь пойти за ней в темноту…",image:"./assets/images/guard.jpg",quote:"Должно быть, он тоже боялся. Но по-другому. Более достойно. Более сдержано. Как будто страх – лишь часть работы. Его работы."},{id:2,name:"grinding",title:"Скрежет замков",series:"Апокрифы Квёлых Земель",description:'С приходом ночи в Тэрсву не закрывают двери на ключ и не выходят наружу. "Щёлк-щёлк", - споёт замок, и ты будешь спать в безопасности, запертый в собственном доме… Ключники. Так их называют. Те, кто запирает двери. Хотя плотник Рецени уверен, что это всего лишь городская выдумка. До тех пор, пока к нему не заявляется его соседка со взволнованным заказом. Её дверь выпала из проёма, а сумерки близятся. Но не всё ли равно?..',image:"./assets/images/grinding.jpg",quote:"– Не всё ли одно, кто я такой? Я отпираю засовы там и тут. Этого достаточно."},{id:3,name:"business",title:"Дело, не терпящее отлагательств",series:"Апокрифы Квёлых Земель",description:"Не все болезни поражают тело. И не всякое безумие сказывается на рассудке. Такова сырость. Она бледная, как кровь заражённых, бесчувственная и сырая, как их разум. Она рвёт любовь матери к своему ребёнку, уничтожает всякую привязанность, упраздняет всё, что дорого. Нет исцеления от такой хвори. Или всё же..? Ривлик верит, что есть. Его записи полны невнятных наблюдений, но поможет ли хотя бы одно из них? Садрад в этом сомневается. А может, просто боится, что его друг разделит судьбу сыростных, которые бесследно исчезают?..",image:"./assets/images/business.jpg",quote:"– Но ты не сможешь в одиночку одолеть сырость, Ривлик. Ты просто сам заразишься, если будешь якшаться с умирающими от неё."},{id:4,name:"shirt",title:"Новая сорочка",series:"Апокрифы Квёлых Земель",description:'"Некоторые считали жителей Фаалт Мотефика скопищем сбрендивших полоумцев, роящихся в своём городишке над старинными фолиантами подобно пчёлам в улье. Иные утверждали, что пчёлы не проводят свою жизнь так бездарно".',image:"./assets/images/shirt.jpg",quote:"– Ты позвал меня, чтобы показать мне сорняк, дядюшка?"},{id:5,name:"dragon",title:"Когда дракон покидает логово",description:'"Уилмс и Ко", компания по производству алкогольной продукции, ведёт маркетинговую войну со спиртным магнатом Шоном Риггесом, расстраивающим их планы. И чем дальше, тем меньше эта война походит на простые торговые неурядицы. Риггес неумолимо переманивает на свою сторону союзников компании. Кажется, для Уилмс и Ко настало время сотрудничать… Но разве с драконами ведут переговоры?',image:"./assets/images/dragon.png",quote:"– Знаете, меня всегда забавляло, что люди боятся драконов. В сказках они предстают могучими крылатыми тварями, кошмарящими округу, а в действительности... их башня укрывает вовсе не их золото, а их самих. Они заперты в ней, в каком-то смысле. И, как по мне, так и должно быть. Дракону место в башне. Когда он покидает логово, в своей дальнейшей судьбе, как бы скверно она ни сложилась, он виноват сам."},{id:6,name:"turmoil",title:"Семейные неурядицы",series:"Апокрифы Квёлых Земель",description:"Нора обращается к своей сестре-правительнице за помощью. Она опасается, что её муж Гарнельд тронулся умом — он говорит, что узрел какой-то свет. Может, он, и правда, безумен? Или всё-таки…",image:"./assets/images/turmoil.jpg",quote:"– Я не могу объяснить... Его взгляд меня пугает... он надолго уходит из дома, иногда по ночам. Как-то я проснулась от того, что ветер захлопнул входную дверь... Мы живём в тревожном месте, Квёлые Земли пользуются плохой репутацией даже среди их обитателей, а он... забыл запереть дверь?"},{id:7,name:"insomnia",title:"Беспробудная бессонница",series:"Апокрифы Квёлых Земель",description:"Загадочный проповедник сулит Келли исцеление от жутких кошмаров, но взамен требует одну услугу...",image:"./assets/images/insomnia.jpg",quote:"– Кошмар, в сущности, такой же сон. Но люди боятся кошмаров, не снов."},{id:8,name:"justice",title:"Божественная справедливость",description:"Слабохарактерный Кельвет, унаследовавший от отца ростовщическую лавку, пытается вернуть одолженные им деньги, но каждый заёмщик находит причину не рассчитываться, ставя под угрозу репутацию новоиспечённого ростовщика.",image:"./assets/images/justice.jpg",quote:"– А что, по-вашему, все жрецы сплошь благочестивцы? Бросьте, ростовщик. Нельзя стать по-настоящему честным человеком, не побыв обманщиком."}],holmov:[{id:1,title:"Неторопливый",description:"Хочешь жить – поторапливайся! Ты должен добыть руду и уголь, ты должен запастись едой, сшить одежду и обувь, пока не настали холода. Ты должен убежать от Твари. Так жили гномы Северной стороны тысячу лет. И вот пришел Он...",image:"./assets/images/leisurely.jpg",quote:"– Я думаю. – Незнакомец смотрел на Дара ясным взглядом. – Думаю, что ответить на твой вопрос."},{id:2,title:"Себастьян Ван Рейн",description:"Начало девятнадцатого века, Европа. Молодой человек, потерявший отца, приезжает в Валахию, чтобы разгадать загадку проклятия, тяготеющего над его семьей.",image:"./assets/images/s-van-rein.jpg",quote:"Затих глухой стук босых ног и шарканье ладоней по доскам. Себастьян вцепился в перила так, что ногти вонзились в дерево. Пот тек по его лицу."},{id:3,title:"Бесконечная война",description:"Наверно, каждый мальчишка в детстве бегал с игрушечным ружьем, расставлял по полу солдатиков и танки. Это не значит, что все хотели на войну. Но война не спрашивает человека, когда приходит к нему. И игра может затянуться...",image:"./assets/images/endless-war.jpg",quote:"Выстрела не последовало, зато через несколько секунд на той стороне – совсем не там, где, по его предположению, должен был находиться вражеский стрелок, – из камней насмешливо поднялась почти на метр камуфляжная шапка, демонстративно надетая на палку, и несколько раз качнулась вправо-влево."},{id:4,title:"Голубые Гавайи",description:"Жизнь и игра прорываются друг сквозь друга. Выстрелы, огонь, кровь... Шелест волн... Очередь в супермаркете... Где настоящая память, а где фантомная, где человек, где компьютер, и что записано на твоих дисках, и где от них пароль, кто же это помнит? Может, она?..",image:"./assets/images/hawaii.jpg",quote:"– Могу, – Крис хмуро изучал штанины суперагента. Языки пламени не могли пробраться сквозь них, наверно, каким-то составом пропитаны, вот они, суперагенты, в этом они все. Штаны с пропиткой, а бронежилет не выдают, плати."}]}},reducers:{addStory:function(e){},showStories:function(e){}}}),P=q.actions,T=(P.addStory,P.showStories,q.reducer),F=(0,A.xC)({reducer:{library:T}});a.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(g.zt,{store:F},n.createElement(S,null))))}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e].call(r.exports,r,r.exports,o),r.exports}o.m=n,e=[],o.O=function(t,r,n,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,r({}),r([]),r(r)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},o.d(a,i),a},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var u=c(o)}for(t&&t(r);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),o.O(void 0,[948],(function(){return o(1202)}));var i=o.O(void 0,[948],(function(){return o(8610)}));i=o.O(i)}();