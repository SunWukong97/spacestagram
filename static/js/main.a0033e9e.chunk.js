(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(9),i=c.n(s),r=(c(16),c(10)),o=c(2),l=(c(17),c(18),c(0));var j=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=c?Object(l.jsx)("i",{className:"fas fa-heart heart-animation"}):"Like",i=c?"red":"white";return Object(l.jsx)("button",{className:"my-like-button",onClick:function(){a(!c)},style:{backgroundColor:i},children:s})},d=c(28),u=c(29),b=c(30),h=c(31);c(20);var O=function(e){return Object(l.jsx)("div",{className:"my-toast my-toast-animation",children:Object(l.jsx)("p",{children:"Link Copied"})})};c(21);var f=function(e){var t,c=e.urlLink,a=e.description,s=e.title,i=Object(n.useState)(!1),r=Object(o.a)(i,2),j=r[0],f=r[1],m=Object(n.useState)(!1),v=Object(o.a)(m,2),x=v[0],p=v[1],g=Object(n.useRef)(null);return Object(n.useEffect)((function(){function e(e){j&&g.current&&!g.current.contains(e.target)&&f(!1)}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}})),j&&(t=Object(l.jsxs)("div",{ref:g,className:"share-options",children:[Object(l.jsx)(d.a,{url:c,quote:a,children:Object(l.jsx)(u.a,{size:50})}),Object(l.jsx)(b.a,{url:c,title:s,children:Object(l.jsx)(h.a,{size:50})}),Object(l.jsx)("i",{className:"fas fa-link",onClick:function(){navigator.clipboard.writeText(c),p(!0)}})]})),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"share-button-container",children:[Object(l.jsx)("button",{className:"my-share-button",onClick:function(){f(!0)},children:"Share"}),t]}),x?Object(l.jsx)(O,{}):""]})};c(22);var m=function(e){var t,c=e.title,n=e.mediaType,a=e.imageUrl,s=e.date,i=e.description;return t="image"===n?Object(l.jsx)("img",{src:a,alt:"an picture taken by NASA of space",className:"card-img-top"}):Object(l.jsx)("iframe",{title:"youtube video of "+c,style:{height:"20em",width:"auto"},controls:!0,src:a,alt:"an picture taken by NASA of space",className:"card-img-top"}),Object(l.jsxs)("div",{className:"card pb-2 shadow-sm",children:[t,Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h2",{className:"card-title",children:c}),Object(l.jsx)("p",{children:s}),Object(l.jsx)("p",{className:"card-text",children:i}),Object(l.jsxs)("div",{className:"my-buttons",children:[Object(l.jsx)(j,{}),Object(l.jsx)(f,{urlLink:a,description:i,title:c})]})]})]})};c(23);var v=function(e){var t=e.display;return Object(l.jsx)("div",{className:"background-overlay",style:{display:t},children:Object(l.jsxs)("div",{className:"loading-icon-wrapper",children:[Object(l.jsx)("div",{className:"loading-icon loading-icon-animation"}),Object(l.jsx)("p",{children:"Loading"})]})})};c(24),c(25);var x=function(e){var t=e.dateSelection,c=[10,20,30,60];return Object(l.jsxs)("div",{className:"date-selector-menu",children:[Object(l.jsx)("label",{htmlFor:"date-selector",children:"Posts from last"}),Object(l.jsxs)("select",{name:"date-selector",id:"date-selector",onChange:function(e){t(e.target.value)},children:[Object(l.jsx)("option",{value:c[0],children:"10 days"}),Object(l.jsx)("option",{value:c[1],children:"20 days"}),Object(l.jsx)("option",{value:c[2],children:"30 days"}),Object(l.jsx)("option",{value:c[3],children:"2 months"})]})]})};var p=function(e){var t=e.dateSelection;return Object(l.jsxs)("nav",{className:"navbar fixed-top",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"navbar-brand h1",href:"#",children:"Spacestagram"}),Object(l.jsx)("p",{children:"Brought to you by NASA's Astronomy Picture of the Day (APOD) API"})]}),Object(l.jsx)(x,{dateSelection:t})]})};var g=function(){var e,t,c=(new Date).toISOString().slice(0,10),s=new Date;s.setDate(s.getDate()-10),s=s.toISOString().slice(0,10);var i,j=Object(n.useState)(!0),d=Object(o.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)(null),O=Object(o.a)(h,2),f=O[0],x=O[1];function g(e){i="https://api.nasa.gov/planetary/apod?api_key=".concat("vn0fMtp6NRQpMEMQlXgvuFttofKGuxcMKFG0cixN","&start_date=").concat(e,"&end_date=").concat(c),fetch(i).then((function(e){if(!e.ok)throw new Error("no reposnse");return e.json()})).then((function(e){x(e.reverse()),b(!1)})).catch((function(e){console.error("problem fetching data")}))}return Object(n.useEffect)((function(){g(s)}),[]),u?t="block":(t="none",e=function(e){var t,c=[],n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;c.push(Object(l.jsx)("div",{className:"row justify-content-center mt-4",children:Object(l.jsx)("div",{className:"col-lg-4 col-md-8 col-sm-auto",children:Object(l.jsx)(m,{title:a.title,mediaType:a.media_type,imageUrl:a.url,date:a.date,description:a.explanation})})},a.title))}}catch(s){n.e(s)}finally{n.f()}return c}(f)),Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(p,{dateSelection:function(e){var t=new Date;t.setDate((new Date).getDate()-e),t=t.toISOString().slice(0,10),b(!0),g(t)}}),Object(l.jsx)(v,{display:t}),Object(l.jsx)("div",{className:"container ",children:e})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),y()}],[[26,1,2]]]);
//# sourceMappingURL=main.a0033e9e.chunk.js.map