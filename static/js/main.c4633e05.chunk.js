(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(4),c=n.n(r),i=n(2),o=n(0),l=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around the U.S."})})},u=n.p+"static/media/Logo.50fce9df.svg",p=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{src:u,alt:"Logo of Around the U.S",className:"header__logo"})})},d=function(e){var t=e.name,n=e.isOpen,a=e.card,s=e.onClose;return Object(o.jsx)("section",{className:"popup popup_type_".concat(t," ").concat(n&&"popup_opened"),children:Object(o.jsxs)("div",{className:"popup__container popup__container_".concat(t),children:[Object(o.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_preview","aria-label":"Close button",onClick:s}),Object(o.jsx)("img",{className:"popup__image",src:a.link,alt:"preview"}),Object(o.jsx)("p",{className:"popup__preview-title",children:a.name})]})})},b=n(5),j=n(6),m=new(function(){function e(t){var n=t.baseUrl,a=t.headers,s=t.apiKey;Object(b.a)(this,e),this._baseUrl=n,this._headers=a,this._apiKey=s}return Object(j.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserData(),this.getInitialCards()])}},{key:"addCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._handleResponse(e)}))}},{key:"setUserInfo",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:n,about:a})}).then((function(e){return t._handleResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:n})}).then((function(e){return t._handleResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._handleResponse(e)}))}},{key:"addNewCard",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:this.name,link:this.link})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/".concat("group-10"),headers:{authorization:"6af9648e-23ea-4651-bc48-5ca8b1b3f30e","Content-Type":"application/json"}}),h=function(e){var t=e.card,n=e.onCardClick,a=e.onConfirmDeleteClick;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("li",{className:"element",children:[Object(o.jsx)("button",{className:"element__delete-button","aria-label":"Delete button",type:"button",onClick:function(){return a(t._id)}}),Object(o.jsx)("div",{className:"element__image",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){return n(t)}}),Object(o.jsxs)("div",{className:"element__flex",children:[Object(o.jsx)("h2",{className:"element__text",children:t.name}),Object(o.jsxs)("div",{className:"element__like-wrapper",children:[Object(o.jsx)("button",{type:"button",className:"element__like-button"}),Object(o.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]})]},t._id)})},O=function(e){var t=e.onEditProfileClick,n=e.onAddPlaceClick,s=e.onEditAvatarClick,r=e.onCardClick,c=e.onConfirmDeleteClick,l=Object(a.useState)("Hulya"),u=Object(i.a)(l,2),p=u[0],d=u[1],b=Object(a.useState)("Frontend Developer"),j=Object(i.a)(b,2),O=j[0],f=j[1],x=Object(a.useState)("data:image/png;base64,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"),v=Object(i.a)(x,2),y=v[0],N=v[1],A=Object(a.useState)([]),k=Object(i.a)(A,2),C=k[0],g=k[1];return Object(a.useEffect)((function(){m.getUserData().then((function(e){var t=e.name,n=e.avatar,a=e.about;d(t),f(a),N(n)})),m.getInitialCards().then((function(e){g(e)}))}),[]),Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{className:"profile",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"profile__avatar-overlay",onClick:s}),Object(o.jsx)("img",{src:y,alt:"old person with a red hat smiling to camera",className:"profile__avatar"})]}),Object(o.jsxs)("div",{className:"profile__info",children:[Object(o.jsx)("h1",{className:"profile__name",children:p}),Object(o.jsx)("button",{className:"profile__edit-button","aria-label":"edit button",type:"button",onClick:t}),Object(o.jsx)("p",{className:"profile__job",children:O})]}),Object(o.jsx)("button",{className:"profile__add-button","aria-label":"Add button",type:"button",onClick:n})]}),Object(o.jsx)("section",{className:"elements",children:Object(o.jsx)("ul",{className:"elements__list",children:C.map((function(e){return Object(o.jsx)(h,{card:e,onCardClick:r,onConfirmDeleteClick:c},e._id)}))})})]})},f=function(e){var t=e.title,n=e.name,a=e.buttonText,s=e.isOpen,r=e.children,c=e.onClose;return Object(o.jsx)("section",{className:"popup popup_type_".concat(n," ").concat(s&&"popup_opened"),children:Object(o.jsxs)("div",{className:"popup__container popup__container_".concat(n),children:[Object(o.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_profile","aria-label":"Close button",onClick:c}),Object(o.jsxs)("form",{name:n,className:"popup__form popup__form_type_".concat(n),noValidate:!0,children:[Object(o.jsx)("h2",{className:"popup__title",children:t}),r,Object(o.jsx)("button",{type:"submit",className:"popup__button",children:a})]})]})})};var x=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),c=Object(i.a)(r,2),u=c[0],b=c[1],j=Object(a.useState)(!1),m=Object(i.a)(j,2),h=m[0],x=m[1],v=Object(a.useState)(""),y=Object(i.a)(v,2),N=y[0],A=y[1],k=Object(a.useState)(!1),C=Object(i.a)(k,2),g=C[0],q=C[1],S=Object(a.useState)(""),R=Object(i.a)(S,2),Z=R[0],P=R[1],F=function(){s(!1),b(!1),x(!1),A(!1),q(!1)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{}),Object(o.jsx)(O,{onEditProfileClick:function(){return s(!0)},onAddPlaceClick:function(){return b(!0)},onEditAvatarClick:function(){return x(!0)},onCardClick:function(e){P(e),q(!0)},onConfirmDeleteClick:function(){return A(!0)}}),Object(o.jsx)(f,{isOpen:h,onClose:F,name:"profile-avatar",title:"Change profile picture",buttonText:"Save",children:Object(o.jsxs)("label",{className:"popup__form-field",children:[Object(o.jsx)("input",{type:"url",name:"avatar",className:"popup__input popup__input_type_image-link",placeholder:"Avatar link",id:"avatar-input",required:!0}),Object(o.jsx)("span",{className:"popup__input-error avatar-input-error"})]})}),Object(o.jsxs)(f,{isOpen:u,onClose:F,name:"add-card",title:"New place",buttonText:"Create",children:[Object(o.jsxs)("label",{className:"popup__form-field",children:[Object(o.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_title",placeholder:"Title",required:!0,minLength:"1",maxLength:"30",id:"title-input"}),Object(o.jsx)("span",{className:"popup__input-error title-input-error"})]}),Object(o.jsxs)("label",{className:"popup__form-field",children:[Object(o.jsx)("input",{type:"url",name:"link",className:"popup__input popup__input_type_image-link",placeholder:"Image Link",required:!0,id:"url-input"}),Object(o.jsx)("span",{className:"popup__input-error url-input-error"})]})]}),Object(o.jsxs)(f,{isOpen:n,onClose:F,name:"edit-profile",title:"Edit Profile",buttonText:"Save",children:[Object(o.jsxs)("label",{className:"popup__form-field",children:[Object(o.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_name",placeholder:"Name",minLength:"2",maxLength:"40",id:"name-input",required:!0}),Object(o.jsx)("span",{className:"popup__input-error name-input-error"})]}),Object(o.jsxs)("label",{className:"popup__form-field",children:[Object(o.jsx)("input",{type:"text",name:"about",className:"popup__input popup__input_type_job",placeholder:"Job",minLength:"2",maxLength:"200",id:"job-input",required:!0}),Object(o.jsx)("span",{className:"popup__input-error job-input-error"})]})]}),Object(o.jsx)(f,{name:"confirm",isOpen:N,onClose:F,title:"Are you sure?",buttonText:"Yes"}),Object(o.jsx)(d,{card:Z,onClose:F,isOpen:g,name:"preview"}),Object(o.jsx)(l,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};n(12);c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.c4633e05.chunk.js.map