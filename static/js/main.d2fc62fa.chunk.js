(this["webpackJsonpgowindy-client"]=this["webpackJsonpgowindy-client"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var i=n(6),c=n(0),r=n.n(c),o=n(7),a=n.n(o),s=(n(64),n(15)),d=n(106),l=n(100),j=n(102),u=n(103),b=(n(65),n(48)),h=n(39),g=n(99),O=n(104),x=n(101),f=function(e){e.text;return Object(i.jsx)(h.b,{size:42,style:{color:"purple",margin:"-42px 0px 0px -21px"}})},v=function(){var e,t=Object(c.useState)(),n=Object(s.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)(),j=Object(s.a)(a,2),u=j[0],v=j[1],y=Object(c.useState)(10),m=Object(s.a)(y,2),w=m[0],W=m[1],S=Object(c.useState)(),A=Object(s.a)(S,2),C=A[0],E=A[1],N=Object(c.useState)(!1),k=Object(s.a)(N,2),F=k[0],T=k[1],z=Object(c.useState)(!1),I=Object(s.a)(z,2),L=I[0],D=I[1];Object(c.useEffect)((function(){2===(null===r||void 0===r?void 0:r.length)&&(D(!1),T(!0),fetch("https://arcane-ravine-24877.herokuapp.com/v1/".concat(r[0],",").concat(r[1],"/").concat(w)).then((function(e){if(400===e.status)throw new Error("your error message here");return e.json()})).then((function(e){E(e),T(!1)})).catch((function(){D(!0),T(!1)})))}),[r,w]);var M=function(){o(),D(!1),T(!1)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(d.a,{open:!!r,onClose:M,fullScreen:!0,children:[Object(i.jsx)(g.a,{onClick:M,style:{position:"absolute",right:0,top:0,zIndex:100},children:Object(i.jsx)(h.a,{size:40,style:{color:"red"}})}),Object(i.jsxs)(l.a,{style:{padding:"2%"},children:[2===(null===r||void 0===r?void 0:r.length)&&Object(i.jsxs)("h4",{children:["Lat: ",r[0].toFixed(4),", Lng: ",r[1].toFixed(4),", Hours:"," ",w]}),Object(i.jsx)(O.a,{name:"hours-input",value:w,fullWidth:!0,type:"number",min:"10",max:"100",step:"10",variant:"outlined",label:"Change Hour Window",onChange:function(e){return W(Number(e.target.value))}}),Object(i.jsxs)("div",{style:{backgroundColor:"#dddbd4",padding:"10px",overflow:"scroll",marginTop:10},children:[L&&Object(i.jsxs)("p",{children:["Sorry, something went wrong! This could happen for a couple reasons. 1. This free server shuts down every 15 mins due to inactivity. 2. NOAA have not updated their hourly yet."," "]}),F&&Object(i.jsx)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:Object(i.jsx)(x.a,{style:{color:"white"}})}),!F&&(null===C||void 0===C?void 0:C.AggregatedWind)&&Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{style:{margin:0},children:["Elevation: ",null===C||void 0===C||null===(e=C.NOAAElevation)||void 0===e?void 0:e.value," m"]}),Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(i.jsx)(p,{info:C.AggregatedWind.N,direction:"N"}),Object(i.jsx)(p,{info:C.AggregatedWind.E,direction:"E"}),Object(i.jsx)(p,{info:C.AggregatedWind.S,direction:"S"}),Object(i.jsx)(p,{info:C.AggregatedWind.W,direction:"W"}),Object(i.jsx)(p,{info:C.AggregatedWind.NE,direction:"NE"}),Object(i.jsx)(p,{info:C.AggregatedWind.NW,direction:"NW"}),Object(i.jsx)(p,{info:C.AggregatedWind.SE,direction:"SE"}),Object(i.jsx)(p,{info:C.AggregatedWind.SW,direction:"SW"})]})]})]})]})]}),Object(i.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(i.jsx)(b.a,{bootstrapURLKeys:{key:"AIzaSyCXrRQzsZ7FWq1zZcKlEWWv-QyNCst3z4g"},defaultCenter:{lat:39.3438,lng:-119.9176},defaultZoom:11,onClick:function(e){o([e.lat,e.lng]),v([e.lat,e.lng])},children:2===(null===u||void 0===u?void 0:u.length)&&Object(i.jsx)(f,{lat:u[0],lng:u[1],text:"My Marker"})})})]})},p=function(e){var t=e.info,n=e.direction;return Object(i.jsxs)("div",{style:{margin:4,overflow:"scroll"},children:[Object(i.jsxs)("p",{style:{margin:0},children:["Direction: ",Object(i.jsx)("b",{children:n})]}),Object.keys(t).map((function(e){return"Raw"!==e&&Object(i.jsxs)("p",{style:{margin:0},children:[e,": ",Object(i.jsx)("b",{children:t[e]})]},e)}))]})};var y=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),a=Object(s.a)(o,2),b=a[0],h=a[1];return Object(c.useEffect)((function(){fetch("https://arcane-ravine-24877.herokuapp.com").then((function(){return h(!0)})).catch((function(){return h(!1)}))}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)(d.a,{open:n,children:[Object(i.jsx)(l.a,{children:b?Object(i.jsxs)("div",{children:["\ud83c\udf89 Server is ready! Click on the map to get wind detail on that location."," ",Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Data is from NOAA forecast, NOT history data"}),Object(i.jsx)("li",{children:"You can change hour window"})]})]}):"This server shut itself down due to inactivity, and it is rebooting now. Give it a few seconds and try it again."}),Object(i.jsx)(j.a,{children:Object(i.jsx)(u.a,{color:"secondary",variant:"contained",onClick:function(){return b?r(!1):window.location.reload()},children:b?"Got it":"Try it again"})})]}),Object(i.jsx)(v,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),m()}},[[69,1,2]]]);
//# sourceMappingURL=main.d2fc62fa.chunk.js.map