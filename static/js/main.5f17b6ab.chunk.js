(this["webpackJsonpreact-website-portafolio"]=this["webpackJsonpreact-website-portafolio"]||[]).push([[0],{23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(17),i=c.n(a),n=(c(9),c(15)),o=c(4),r=(c(23),c(0)),l=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],b=function(e){var t=e.children,c=e.type,s=e.onClick,a=e.buttonStyle,i=e.buttonSize,n=l.includes(a)?a:l[0],b=j.includes(i)?i:j[0];return Object(r.jsx)(o.b,{to:"/aboutme",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(n," ").concat(b),onclick:s,type:c,children:t})})};c(30);var d=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!0),l=Object(n.a)(i,2),j=l[0],d=l[1],m=function(){return a(!1)},h=function(){window.innerWidth<=950?d(!1):d(!0)};return Object(s.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsx)(o.b,{to:"/",className:"navbar-logo",onClick:m,children:"CARLOS"}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(r.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/",className:"nav-links",onClick:m,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/portafolio",className:"nav-links",onClick:m,children:"Portafolio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/aboutme",className:"nav-links-mobile",onClick:m,children:"about me"})})]}),j&&Object(r.jsx)(b,{buttonStyle:"btn-outline",children:"ABOUT ME"})]})})})},m=c(2),h=(c(31),c.p+"static/media/video-1.59e75226.mp4");var x=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{src:h,autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"CARLOS DAMIAN"}),Object(r.jsx)("p",{children:"Developer"}),Object(r.jsx)("div",{className:"hero-btns",children:Object(r.jsx)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"})})]})};var O=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)(o.b,{className:"cards__item__link",to:e.path,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{src:e.src,alt:"Projects",className:"cards__item__img"})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},u=(c(32),c.p+"static/media/todoList.4e1240cd.JPG"),p=c.p+"static/media/humanresource.b7d1b800.JPG",f=c.p+"static/media/Laura.23e3cc7b.JPG",v=c.p+"static/media/Drone.79aa5850.JPG",N=c.p+"static/media/login.530dcf93.JPG";var g=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Some of my projects!"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsxs)("div",{className:"cards__wrapper",children:[Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(O,{src:u,text:"Shopping list making shopping more fun and simple",label:"TodoList",path:"/portafolio"}),Object(r.jsx)(O,{src:p,text:"Shopping list making shopping more fun and simple",label:"Human Resources System",path:"/portafolio"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(O,{src:f,text:"Gym administrative system",label:"Gyms system",path:"/portafolio"}),Object(r.jsx)(O,{src:v,text:"Drone shooting on Villa de alvarez,Colima",label:"Drone Footage",path:"/portafolio"}),Object(r.jsx)(O,{src:N,text:"Enterprise Administraion system",label:"Register",path:"/portafolio"})]})]})})]})};var _=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(g,{})]})};function k(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"portafolio",children:"Portafolio"}),Object(r.jsx)(g,{})]})}c(33);var y=function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsxs)("section",{className:"footer-subscription",children:[Object(r.jsx)("p",{className:"footer-subscription-heading",children:"Join this Adventure with me"}),Object(r.jsx)("div",{className:"input-areas",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(r.jsx)(b,{buttonStyle:"btn--outline",children:"sent"})]})})]}),Object(r.jsx)("div",{class:"footer-links",children:Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"About me"}),Object(r.jsx)(o.b,{to:"-aboutme",children:"About me"})]}),Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Portafolio"}),Object(r.jsx)(o.b,{to:"/portafolio",children:"Portafolio"})]})]})}),Object(r.jsx)("section",{class:"social-media",children:Object(r.jsxs)("div",{class:"social-media-wrap",children:[Object(r.jsx)("div",{class:"footer-logo",children:Object(r.jsx)(o.b,{to:"/",className:"social-logo",children:"Carlos"})}),Object(r.jsx)("small",{class:"website-rights",children:"\xa92021 Carlos Damian"})]})})]})};function w(){return Object(r.jsxs)("div",{className:"aboutme",children:[Object(r.jsx)("h4",{children:"About me"}),Object(r.jsx)("p",{children:"I am a software engineer based in Guadalajara, Mexico,"}),Object(r.jsxs)("p",{children:["I seek to have fun and create beautiful web applications. I'm funny, I make cool coffee, what are you waiting for to contact me?"," "]})]})}var S=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("head",{children:[Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(r.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),Object(r.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),Object(r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),Object(r.jsxs)(o.a,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/",exact:!0,component:_}),Object(r.jsx)(m.a,{path:"/portafolio",exact:!0,component:k}),Object(r.jsx)(m.a,{path:"/aboutme",exact:!0,component:w})]}),Object(r.jsx)(y,{})]})]})};i.a.render(Object(r.jsx)(S,{}),document.getElementById("root"))},9:function(e,t,c){}},[[34,1,2]]]);
//# sourceMappingURL=main.5f17b6ab.chunk.js.map