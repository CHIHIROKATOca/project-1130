(this["webpackJsonpproject-02"]=this["webpackJsonpproject-02"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,function(e,t,a){},,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(35)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),s=a(10),i=(a(12),a(1)),m=["btn--primary","btn--outline"],o=["btn--medium","btn--large"],u=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,s=m.includes(r)?r:m[0],u=o.includes(c)?c:o[0];return l.a.createElement(i.b,{to:"/sign-up",className:"button-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:a},t))};a(30);var p=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),m=Object(s.a)(c,2),o=m[0],p=m[1],E=function(){return r(!1)},d=function(){window.innerWidth<=960?p(!1):p(!0)};return Object(n.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:E},"GoooodVIDEO",l.a.createElement("i",{class:"fas fa-thumbs-up"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},l.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:E},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:E},"Free Download Video")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:E},"Our Works")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:E},"Sign Up"))),o&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))},E=(a(8),["btn--primary","btn--outline"]),d=["btn--medium","btn--large"],b=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,s=E.includes(r)?r:E[0],m=d.includes(c)?c:d[0];return l.a.createElement(i.b,{to:"/services",className:"button-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(m),onClick:n,type:a},t))},g=["btn--primary","btn--outline"],h=["btn--medium","btn--large"],v=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,s=g.includes(r)?r:g[0],m=h.includes(c)?c:h[0];return l.a.createElement(i.b,{to:"/products",className:"button-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(m),onClick:n,type:a},t))};a(31);var f=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"../videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"Do you need ",l.a.createElement("i",{class:"fas fa-thumbs-up"})," VIDEO?"),l.a.createElement("p",null,"Video Creation Company GoooodVIDEO"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Free Download Video"),l.a.createElement(v,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"},"See All Works",l.a.createElement("i",{className:"far fa-play-circle"}))))},y=(a(17),new Set),N=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)((function(){return r(a+1)}),[a]);return y.add(c),console.log(y),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"button-wrapper"},l.a.createElement("div",{className:"button-item"},l.a.createElement("button",{onClick:c,className:"good-icon"},l.a.createElement("i",{class:"fas fa-thumbs-up"})),a),l.a.createElement("br",null)))};var k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(i.b,{className:"cards__item__link"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)),l.a.createElement(N,{className:"goodbtn"}))))};var _=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Our VIDEO Works"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(k,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Nature",path:"/services"}),l.a.createElement(k,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(k,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(k,{src:"images/img-4.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Nature",path:"/products"}),l.a.createElement(k,{src:"images/img-8.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Nature",path:"/sign-up"})))))};a(32);var S=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(b,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/"},"Testimonials"),l.a.createElement(i.b,{to:"/"},"Careers"),l.a.createElement(i.b,{to:"/"},"Investors"),l.a.createElement(i.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Destinations"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(i.b,{to:"/"},"Submit Video"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},"GoooodVIDEO")),l.a.createElement("small",{class:"website-rights"},"GoooodVIDEO\xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};a(33);var w=function(){return l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Concept"),l.a.createElement("div",{className:"intro__container"},l.a.createElement("div",{className:"intro__wrapper"},l.a.createElement("img",{src:"images/img-2.jpg"}),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"))))};var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(w,null),l.a.createElement(_,null),l.a.createElement(S,null))},I=a(2);var j=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(k,{src:"images/img-1.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),l.a.createElement(k,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"}),l.a.createElement(k,{src:"images/img-9.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(k,{src:"images/img-4.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(k,{src:"images/img-5.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),l.a.createElement(k,{src:"images/img-6.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(k,{src:"images/img-7.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(k,{src:"images/img-8.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),l.a.createElement(k,{src:"images/img-9.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(k,{src:"images/img-1.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(k,{src:"images/img-2.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),l.a.createElement(k,{src:"images/img-3.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})))))};a(34);var C=function(){return l.a.createElement("div",{className:"terms"},l.a.createElement("h1",null,"Terms of Service"),l.a.createElement("div",{className:"terms__container"},l.a.createElement("div",{className:"terms__wrapper"},l.a.createElement("section",{className:"terms__section"},l.a.createElement("img",{src:"./images/cc.png",className:"icon"}),l.a.createElement("h2",null,"Copyright"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s")),l.a.createElement("section",{className:"terms__section"},l.a.createElement("img",{src:"./images/pd.png",className:"icon"}),l.a.createElement("h2",null,"Public Domain"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s")),l.a.createElement("section",{className:"terms__section"},l.a.createElement("img",{src:"./images/co.png",className:"icon"}),l.a.createElement("h2",null,"Creative Commons"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s")))))};var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-text"},"Sign up now! You can get free videos."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement("input",{className:"footer-input",name:"password",type:"password",placeholder:"Password"}),l.a.createElement(b,{buttonStyle:"btn--outline"},"Sign Up")),l.a.createElement("p",{className:"signup-text"},"Do you have an account already? ",l.a.createElement(i.b,{to:"/"},"Sign in here")," ")))))};function A(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"services"},"Download free video"),l.a.createElement(O,null),l.a.createElement(C,null),l.a.createElement(j,null))}function D(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"products"},"Our Works"),l.a.createElement(j,null))}function F(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"sign-up"},"Sign Up"),l.a.createElement(O,null))}function L(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(p,null),l.a.createElement(I.c,null,l.a.createElement(I.a,{path:"/",exact:!0,component:x}),l.a.createElement(I.a,{path:"/services",exact:!0,component:A}),l.a.createElement(I.a,{path:"/products",exact:!0,component:D}),l.a.createElement(I.a,{path:"/sign-up",exact:!0,component:F}))))}var T=document.getElementById("root");c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),T)}],[[20,1,2]]]);
//# sourceMappingURL=main.6962101c.chunk.js.map