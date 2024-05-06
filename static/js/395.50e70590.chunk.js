"use strict";(self.webpackChunkcamper_van_ua=self.webpackChunkcamper_van_ua||[]).push([[395],{7609:function(e,a,n){n(2791);a.Z=n.p+"static/media/sprite.5686478b85fbe02836d641b9e13f19ce.svg"},9894:function(e,a,n){n.d(a,{Z:function(){return i}});var r="Button_button__wiIYs",s=n(184),i=function(e){var a=e.text,n=e.onClick,i=void 0===n?function(){}:n;return(0,s.jsx)("button",{className:r,onClick:function(){return i()},children:a})}},7312:function(e,a,n){n.d(a,{Z:function(){return U}});var r=n(9439),s=n(4420),i=n(4852),t={containerModal:"CamperFeatures_containerModal__EoNLm",titleContainer:"CamperFeatures_titleContainer__F7uu-",camperTitle:"CamperFeatures_camperTitle__mGZlR",cross:"CamperFeatures_cross__KiTZA",cardContainer:"CamperFeatures_cardContainer__8h14p",cardReviews:"CamperFeatures_cardReviews__2Irl3",cardLocation:"CamperFeatures_cardLocation__N1g1O",camperGallery:"CamperFeatures_camperGallery__1XOxf",imageContainer:"CamperFeatures_imageContainer__J5IHJ",camperImg:"CamperFeatures_camperImg__tmMF8",pagesWrapper:"CamperFeatures_pagesWrapper__Ip7dB",pageButton:"CamperFeatures_pageButton__D58jS",active:"CamperFeatures_active__kvove",pageContentWrapper:"CamperFeatures_pageContentWrapper__ZitRZ"},c=n(2791),o=n(6351),l=n(7609),d=n(862),u=n(1413),m="Features_featuresWrapper__ctQ3Q",_="Features_featuresList__0oPX1",p="Features_featuresItem__1MTRs",h="Features_detailsTitle__r01dV",v="Features_underline__um5Ak",x="Features_detailsList__0KBM2",f="Features_detailsItem__dNV79",j=n(184),C=function(e){var a=e.data,n=a.adults,s=a.engine,i=a.transmission,t=a.details,c=(0,u.Z)({adults:n,engine:s,transmission:i},t),o=Object.entries(c),d={Form:a.form,Length:a.length,Width:a.width,Height:a.height,Tank:a.tank,Consumption:a.consumption},C=Object.entries(d);return(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)("ul",{className:_,children:o.map((function(e,a){var n=(0,r.Z)(e,2),s=n[0],i=n[1];return(0,j.jsxs)("li",{className:p,children:[(0,j.jsx)("svg",{width:20,height:20,children:(0,j.jsx)("use",{href:"".concat(l.Z,"#icon-").concat(s)})}),(0,j.jsx)("span",{children:"number"===typeof i&&1===i?s.charAt(0).toUpperCase()+s.slice(1):"number"===typeof i?"".concat(i," ").concat(s):i.charAt(0).toUpperCase()+i.slice(1)})]},a)}))}),(0,j.jsx)("h3",{className:h,children:"Vehicle details"}),(0,j.jsx)("div",{className:v}),(0,j.jsx)("ul",{className:x,children:C.map((function(e,a){var n=(0,r.Z)(e,2),s=n[0],i=n[1];return(0,j.jsxs)("li",{className:f,children:[(0,j.jsx)("span",{children:s}),(0,j.jsx)("span",{children:i})]},a)}))})]})},g=n(9894),N="Form_form__e1yzW",w="Form_formTitle__b3yEU",y="Form_formText__9HNay",Z="Form_inputWrapper__78KXF",F="Form_formInput__sgOCo",k="Form_formTextarea__b0ONL",b=function(){return(0,j.jsxs)("div",{className:N,children:[(0,j.jsx)("h2",{className:w,children:"Book your campervan now"}),(0,j.jsx)("p",{className:y,children:"Stay connected! We are always ready to help you."}),(0,j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),window.location.reload()},children:[(0,j.jsxs)("div",{className:Z,children:[(0,j.jsx)("input",{className:F,type:"text",id:"name",name:"name",pattern:"^[A-Za-z\\s]+$",title:"Please enter letters and spaces only",required:!0,placeholder:"Name"}),(0,j.jsx)("input",{className:F,type:"email",id:"email",name:"email",required:!0,placeholder:"Email"}),(0,j.jsx)("input",{className:F,type:"date",id:"date",name:"date",required:!0,placeholder:"Booking date"}),(0,j.jsx)("textarea",{className:"".concat(F," ").concat(k),id:"comment",name:"comment",rows:"5",cols:"60",placeholder:"Comment"})]}),(0,j.jsx)(g.Z,{text:"Send",type:"submit"})]})]})},I="Ava_ava__dc7eF",L=function(e){var a=e.name;return(0,j.jsx)("div",{className:I,children:null===a||void 0===a?void 0:a.charAt(0).toUpperCase()})},R="Rating_ratingWrapper__T6-JX",T=function(e){var a=e.rating,n=Array.from({length:5},(function(e,n){return n<Math.floor(a)?(0,j.jsx)("svg",{width:16,height:16,children:(0,j.jsx)("use",{href:"".concat(l.Z,"#icon-rating")})},n):(0,j.jsx)("svg",{width:16,height:16,children:(0,j.jsx)("use",{href:"".concat(l.Z,"#icon-star")})},n)}));return(0,j.jsx)("div",{className:R,children:n})},A="Review_review__uc75h",M="Review_header__GTiie",W="Review_name__5tqT1",S="Review_container__ZkKJ8",O="Review_comment__lcSEe",B=function(e){var a=e.reviewer_name,n=e.reviewer_rating,r=e.comment;return(0,j.jsxs)("li",{className:A,children:[(0,j.jsxs)("div",{className:M,children:[(0,j.jsx)(L,{name:a}),(0,j.jsxs)("div",{className:S,children:[(0,j.jsx)("p",{className:W,children:a}),(0,j.jsx)(T,{rating:n})]})]}),(0,j.jsx)("p",{className:O,children:r})]})},E="ReviewsList_reviewsList__2fDHC",D=function(e){var a=e.data;return(0,j.jsx)("ul",{className:E,children:a.map((function(e,a){return(0,j.jsx)(B,(0,u.Z)({},e),a)}))})},U=function(e){var a=e.id,n=e.onClick,u=(0,s.I0)(),m=(0,c.useState)("features"),_=(0,r.Z)(m,2),p=_[0],h=_[1];(0,c.useEffect)((function(){u((0,i.G)(a))}),[a,u]);var v=(0,s.v9)(o.S),x=function(e){h(e)};return(0,j.jsxs)("div",{className:t.containerModal,children:[(0,j.jsxs)("div",{className:t.titleContainer,children:[(0,j.jsx)("h2",{className:t.camperTitle,children:null===v||void 0===v?void 0:v.name}),(0,j.jsx)("button",{type:"button",onClick:n,className:t.cross,children:(0,j.jsx)("svg",{width:32,height:32,children:(0,j.jsx)("use",{href:l.Z+"#icon-cross"})})})]}),(0,j.jsxs)("div",{className:t.cardContainer,children:[(0,j.jsxs)("div",{className:t.cardReviews,children:[(0,j.jsx)("svg",{width:16,height:16,children:(0,j.jsx)("use",{href:"".concat(l.Z,"#icon-rating")})}),(0,j.jsx)("span",{children:"".concat(null===v||void 0===v?void 0:v.rating,"(").concat(null===v||void 0===v?void 0:v.reviews.length," Reviews)")})]}),(0,j.jsxs)("div",{className:t.cardLocation,children:[(0,j.jsx)("svg",{width:16,height:16,children:(0,j.jsx)("use",{href:"".concat(l.Z,"#icon-pin")})}),(0,j.jsx)("span",{children:null===v||void 0===v?void 0:v.location.split(", ").reverse().join(", ")})]})]}),(0,j.jsx)("div",{className:t.camperTitle,children:(0,d.Z)(null===v||void 0===v?void 0:v.price)}),(0,j.jsx)("ul",{className:t.camperGallery,children:null===v||void 0===v?void 0:v.gallery.map((function(e,a){return(0,j.jsx)("li",{className:t.imageContainer,children:(0,j.jsx)("img",{className:t.camperImg,src:e,alt:null===v||void 0===v?void 0:v.name})},a)}))}),(0,j.jsx)("div",{children:(0,j.jsx)("p",{className:t.cardDescription,children:null===v||void 0===v?void 0:v.description})}),(0,j.jsxs)("div",{className:t.pagesWrapper,children:[(0,j.jsx)("button",{onClick:function(){x("features")},type:"button",className:"".concat(t.pageButton," ").concat("features"===p?t.active:""),children:"Features"}),(0,j.jsx)("button",{onClick:function(){x("reviews")},type:"button",className:"".concat(t.pageButton," ").concat("reviews"===p?t.active:""),children:"Reviews"})]}),(0,j.jsxs)("div",{className:t.pageContentWrapper,children:["features"===p&&v&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(C,{data:v}),(0,j.jsx)(b,{})]}),"reviews"===p&&v&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{data:null===v||void 0===v?void 0:v.reviews}),(0,j.jsx)(b,{})]})]})]})}},9765:function(e,a,n){n.d(a,{Z:function(){return A}});var r=n(1413),s=n(862),i="CamperCard_card__mU4dA",t="CamperCard_cardImgContainer__O0VIw",c="CamperCard_cardImg__gDHse",o="CamperCard_cardData__XWiwy",l="CamperCard_cardHeader__K4OqZ",d="CamperCard_cardTitle__PTg6s",u="CamperCard_priceWrapper__A6v3R",m="CamperCard_price__vil4d",_="CamperCard_favoriteBtn__kQK3w",p="CamperCard_favor__yRm7F",h="CamperCard_cardContainer__sSg9K",v="CamperCard_cardReviews__mvIvX",x="CamperCard_cardLocation__DhyAc",f="CamperCard_cardDescription__OidpZ",j=n(7609),C=n(9439),g="CamperDetails_detailsList__XqK3W",N="CamperDetails_detailsItem__QkTHC",w=n(184),y=["transmission","engine"],Z=["adults","beds"],F=function(e){var a=e.details;return(0,w.jsx)("ul",{className:g,children:Object.entries(a).map((function(e,a){var n,r=(0,C.Z)(e,2),s=r[0],i=r[1];if(y.includes(s))n=i[0].toUpperCase()+i.slice(1);else if(Z.includes(s))n="".concat(i," ").concat(s);else{if(!i)return null;n=s[0].toLocaleUpperCase()+s.slice(1)}return(0,w.jsxs)("li",{className:N,children:[(0,w.jsx)("svg",{width:20,height:20,children:(0,w.jsx)("use",{href:"".concat(j.Z,"#icon-").concat(s)})}),(0,w.jsx)("span",{children:n})]},a)}))})},k=n(9894),b=n(4420),I=n(156),L=n(6351),R=function(e){var a=e._id,n=e.gallery,r=e.name,C=e.price,g=e.rating,N=e.reviews,y=e.location,Z=e.adults,R=e.engine,T=e.transmission,A=e.description,M=e.details,W=M.kitchen,S=M.beds,O=M.airConditioner,B=e.showMoreClick,E=(0,b.I0)(),D=(0,b.v9)(L.Tc).some((function(e){return e._id===a}));return(0,w.jsxs)("li",{className:i,id:a,children:[(0,w.jsx)("div",{className:t,children:(0,w.jsx)("img",{className:c,src:n[0],alt:r})}),(0,w.jsxs)("div",{className:o,children:[(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)("h2",{className:d,children:r}),(0,w.jsxs)("div",{className:u,children:[(0,w.jsx)("div",{className:"".concat(d," ").concat(m),children:(0,s.Z)(C)}),(0,w.jsx)("button",{type:"button",className:"".concat(_),onClick:function(){E(D?(0,I.ku)(a):(0,I.dB)({_id:a,gallery:n,name:r,price:C,rating:g,reviews:N,location:y,adults:Z,engine:R,transmission:T,description:A,details:{kitchen:W,beds:S,airConditioner:O}}))},children:D?(0,w.jsx)("svg",{width:24,height:24,className:p,children:(0,w.jsx)("use",{href:j.Z+"#icon-heart-favor"})}):(0,w.jsx)("svg",{width:24,height:24,children:(0,w.jsx)("use",{href:j.Z+"#icon-heart"})})})]})]}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsxs)("div",{className:v,children:[(0,w.jsx)("svg",{width:16,height:16,children:(0,w.jsx)("use",{href:"".concat(j.Z,"#icon-rating")})}),(0,w.jsx)("span",{children:"".concat(g,"(").concat(N.length," Reviews)")})]}),(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("svg",{width:16,height:16,children:(0,w.jsx)("use",{href:"".concat(j.Z,"#icon-pin")})}),(0,w.jsx)("span",{children:y.split(", ").reverse().join(", ")})]})]}),(0,w.jsx)("div",{children:(0,w.jsx)("p",{className:f,children:A})}),(0,w.jsx)(F,{details:{adults:Z,engine:R,transmission:T,kitchen:W,beds:S,AC:O}}),(0,w.jsx)(k.Z,{text:"Show more",onClick:function(){B(a)}})]})]})},T="CamperList_CardList__ompWw",A=function(e){var a=e.campers,n=e.showMoreClick;return(0,w.jsx)("ul",{className:T,children:a.map((function(e){return(0,w.jsx)(R,(0,r.Z)((0,r.Z)({},e),{},{showMoreClick:n}),e._id)}))})}},9321:function(e,a,n){n.d(a,{Z:function(){return l}});var r=n(2791),s=n(4164),i="Modal_Overlay__yoxbg",t="Modal_Modal__I1UYJ",c="Modal_CloseAnimate__6IZ9F",o=n(184),l=function(e){var a=e.onClose,n=e.children,l=document.querySelector("#modal-root");(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&(d(),a())};return window.addEventListener("keydown",e),document.documentElement.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.documentElement.style.overflow="auto"}}),[a]);var d=function(){var e=document.querySelector("#CloseAnimateOverlay"),a=document.querySelector("#CloseAnimateModal");e.classList.add("".concat(c)),a.classList.add("".concat(c))};return(0,s.createPortal)((0,o.jsx)("div",{id:"CloseAnimateOverlay",className:i,onClick:function(e){e.target===e.currentTarget&&(d(),a())},children:(0,o.jsx)("div",{id:"CloseAnimateModal",className:t,children:n})}),l)}},862:function(e,a){a.Z=function(e){return"number"!==typeof e?"Invalid input":e.toLocaleString("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2})}},6351:function(e,a,n){n.d(a,{Ai:function(){return l},S:function(){return o},Tc:function(){return t},Zp:function(){return c},kX:function(){return s},xU:function(){return i}});var r=n(3553),s=function(e){return e.campers.items},i=function(e){return e.campers.isLoading},t=function(e){return e.favorites.favoriteItems},c=function(e){return e.campers.page},o=function(e){return e.campers.camperById},l=(0,r.P1)((function(e){return e.campers.items.length}),(function(e){return e.campers.page}),(function(e,a){return a<=e/4}))}}]);
//# sourceMappingURL=395.50e70590.chunk.js.map