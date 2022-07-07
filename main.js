(()=>{"use strict";var e={formSelector:".popup__container",inputSelector:".popup__item",inputSpanError:".popup__item-error",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSpanError=t.inputSpanError,this._inputSelector=t.inputSelector,this._errorClass=t.errorClass,this._inputErrorClass=t.inputErrorClass,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._formItem=n}var n,r;return n=e,(r=[{key:"hideSpan",value:function(){var e=this;this._toggleButtonState();var t=Array.from(this._formItem.querySelectorAll(this._inputSpanError)),n=Array.from(this._formItem.querySelectorAll(this._inputSelector));t.forEach((function(t){t.classList.remove(e._errorClass)})),n.forEach((function(t){t.classList.remove(e._inputErrorClass)}))}},{key:"_showInputError",value:function(e,t){var n=this._formItem.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formItem.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){var e=Array.from(this._formItem.querySelectorAll(this._inputSelector)),t=this._formItem.querySelector(this._submitButtonSelector);this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.setAttribute("disabled","")):(t.classList.remove(this._inactiveButtonClass),t.removeAttribute("disabled",""))}},{key:"_setEventListeners",value:function(){var e=this;this._formItem.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this._formItem.querySelectorAll(this._inputSelector));this._toggleButtonState(),t.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){var o=this,i=t.item,a=t.handleCardClick,c=t.handleDeleteCard,u=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=i.link,this._name=i.name,this._likes=i.likes,this._ownerid=i.owner._id,this._userId=n,this._cardId=i._id,this._templateId=r,this._handleCardClick=a,this._handleDeleteCard=c,this._handleLikeClick=u,this._isLiked=this._likes.some((function(e){return e._id==o._userId}))}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateId).content.querySelector(".elements__element").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".elements__image").src=this._link,this._element.querySelector(".elements__image").alt=this._name,this._element.querySelector(".elements__title").textContent=this._name,this._element.querySelector(".elements__counter").textContent=this._likes.length,this._checkIdcard(),this._checkLike(),this._setEventListeners(),this._element}},{key:"_checkIdcard",value:function(){this._ownerid!==this._userId?this._element.querySelector(".elements__trash").classList.add("elements__trash_hidden"):this._element.querySelector(".elements__trash").classList.remove("elements__trash_hidden")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"isLiked",value:function(){return this._isLiked}},{key:"returnCardId",value:function(){return this._cardId}},{key:"addLike",value:function(){this._element.querySelector(".elements__heart").classList.add("elements__heart_active"),this._element.querySelector(".elements__counter").textContent=this._likes.length,this._isLiked=!0}},{key:"deleteLike",value:function(){this._element.querySelector(".elements__heart").classList.remove("elements__heart_active"),this._element.querySelector(".elements__counter").textContent=this._likes.length,this._isLiked=!1}},{key:"countLike",value:function(e){this._element.querySelector(".elements__counter").textContent=e.length}},{key:"_checkLike",value:function(){this._isLiked?this.addLike():this.deleteLike()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".elements__heart").addEventListener("click",(function(t){e._handleLikeClick(e._cardId)})),this._element.querySelector(".elements__trash").addEventListener("click",(function(){e._handleDeleteCard(e._cardId)})),this._element.querySelector(".elements__button-image").addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._closeMethod=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._closeMethod)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeMethod)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(){return l(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._popupElement.querySelector(".popup__image"),r=this._popupElement.querySelector(".popup__figcaption");n.src=e,n.alt=t,r.textContent=t,p(_(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=r,n._form=t.querySelector(".popup__container"),n._submitButton=n._form.querySelector(".popup__button-save"),n._inputs=Array.from(n._form.querySelectorAll(".popup__item")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.id]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()})),k(E(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){k(E(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.name,r=t.vocation,o=t.avatar;t.userId,function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._vocation=r,this._avatar=o,this._userId=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,vocation:this._vocation.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._vocation.textContent=e.about,this._avatar.src=e.avatar,this._avatar.alt="Фотография ".concat(e.name)}},{key:"getUserId",value:function(e){this._userId=e._id}},{key:"addAvatar",value:function(e){this._avatar.src=e.avatar,this._avatar.alt="Фотография ".concat(e.name)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getInitialCard",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.vocation})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(t){return console.log(e),t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(e){console.log(e)}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function B(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=e.querySelector(".popup__container"),t._submitButton=t._form.querySelector(".popup__button-save"),t}return t=a,(n=[{key:"setFormSubmit",value:function(e){this.callbackForm=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e.callbackForm(),e.close()})),R(U(a.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Да"}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=document.querySelector(".elements"),V=document.querySelector(".popup_edit-profile"),N=V.querySelector(".popup__item_field_name"),M=V.querySelector(".popup__item_field_vocation"),J=document.querySelector(".popup_add-card"),G=document.querySelector(".popup_card-image"),H=document.querySelector(".profile__name"),z=document.querySelector(".profile__vocation"),$=document.querySelector(".profile__image"),K=document.querySelector(".profile__edit-button"),Q=document.querySelector(".profile__add-button"),W=document.querySelector(".profile__image-button"),X=document.querySelector("#Add_Card"),Y=document.querySelector("#Edit_Profile"),Z=document.querySelector("#Edit_Avatar"),ee=document.querySelector(".popup_confirm-message"),te=document.querySelector(".popup_avatar"),ne=new n(e,Y),re=new n(e,X),oe=new n(e,Z);ne.enableValidation(),re.enableValidation(),oe.enableValidation();var ie,ae=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"5da3e556-d369-4c0e-9a2c-e2a83040763e","Content-Type":"application/json"}});Promise.all([ae.getUserInfo(),ae.getInitialCard()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ie=o._id,ce.setUserInfo(o);var c=new a({renderer:function(e){c.addItem(le(e))}},F);c.renderItems(i)})).catch((function(e){console.log("".concat(e))}));var ce=new O({name:H,vocation:z,avatar:$,userId:ie}),ue=new L({handleFormSubmit:function(e){ue.renderLoading(!0),ae.patchUserInfo(e).then((function(e){ce.setUserInfo(e)})).catch((function(e){console.log("Данные пользователя не были обновлены. Ошибка: ".concat(e))})).finally((function(){ue.renderLoading(!1)}))}},V);ue.setEventListeners(),K.addEventListener("click",(function(){var e=ce.getUserInfo();N.value=e.name,M.value=e.vocation,ue.open(),ne.hideSpan()}));var se=new L({handleFormSubmit:function(e){se.renderLoading(!0),ae.editAvatar({avatar:e.link}).then((function(e){ce.addAvatar(e),se.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){se.renderLoading(!1)}))}},te);function le(e){var t=new o({item:e,handleCardClick:function(e,t){fe.open(e,t)},handleDeleteCard:function(e){de.open(),de.setFormSubmit((function(){de.renderLoading(!0),ae.deleteCard(e).then((function(e){de.close(),t.deleteCard(e)})).catch((function(e){console.log("Карточка не была удалена. Ошибка: ".concat(e))})).finally((function(){de.renderLoading(!1)}))}))},handleLikeClick:function(e){t.isLiked()?ae.deleteLike(t.returnCardId()).then((function(e){console.log(e._id),t.deleteLike(e._id),t.countLike(e.likes)})).catch((function(e){console.log("ошибка удаления лайка ".concat(e))})):ae.putLike(t.returnCardId()).then((function(e){console.log(e._id),t.addLike(e._id),t.countLike(e.likes)})).catch((function(e){console.log("ошибка добавления лайка ".concat(e))}))}},ie,"#card");return t.createCard()}se.setEventListeners(),W.addEventListener("click",(function(){Z.reset(),oe.hideSpan(),se.open()}));var fe=new m(G);fe.setEventListeners();var pe=new L({handleFormSubmit:function(e){pe.renderLoading(!0),ae.postNewCard({name:e.name,link:e.link}).then((function(e){he.renderItems([e])})).finally((function(){pe.renderLoading(!1)}))}},J);pe.setEventListeners(),Q.addEventListener("click",(function(){X.reset(),re.hideSpan(),pe.open()}));var he=new a({renderer:function(e){he.addItem(le(e))}},F),de=new x(ee);de.setEventListeners()})();