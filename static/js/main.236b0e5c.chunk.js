(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(15),r=c.n(s),i=(c(21),c(22),c(9)),o=c(2),j=(c(23),c(24),c(1));var l=function(){return Object(j.jsx)("nav",{className:"Nav",children:Object(j.jsxs)("ul",{className:"nav-ul",children:[Object(j.jsx)("li",{className:"nav-home",children:Object(j.jsx)(i.b,{className:"NavLink",to:"/shopping-cart",children:"Home"})}),Object(j.jsx)("li",{className:"nav-shop",children:Object(j.jsx)(i.b,{className:"NavLink",to:"/shop",children:"Shop"})})]})})},d=c.p+"static/media/frenchToast.201f8ebd.jpg";var b=function(){return Object(j.jsxs)("main",{className:"Home",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("header",{className:"home-header",children:[Object(j.jsx)("h1",{className:"home-h1",children:"Pain Perdu"}),Object(j.jsx)("img",{className:"home-img",src:d,alt:"French Toast"}),Object(j.jsx)("p",{className:"home-p",children:"An extraordinary creation: from our plate, to you."})]})]})},h=c(10);c(34),c(35);var m=function(e){var t=Object(a.useState)(0),c=Object(h.a)(t,2),n=c[0],s=c[1];return Object(j.jsxs)("div",{className:"Card",id:e.name,children:[Object(j.jsxs)("header",{className:"card-header",children:[Object(j.jsx)("h1",{children:e.name}),e.price,Object(j.jsx)("p",{children:e.description})]}),Object(j.jsxs)("form",{className:"card-form",onSubmit:function(t){t.preventDefault();var c=Number(e.price.replace("$",""))*n;e.addItems(n),e.addPrice(c)},children:[Object(j.jsxs)("label",{className:"card-form-label",htmlFor:"quantity",children:[Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),0!==n&&s(n-1)},children:"-"}),Object(j.jsx)("input",{name:"quantity",type:"number",onChange:function(e){s(Number(e.target.value))},value:n,required:!0}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),s(n+1)},children:"+"})]}),Object(j.jsx)("hr",{className:"form-line"}),Object(j.jsx)("button",{type:"submit",children:"Add to Cart"})]})]})};var u=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),r=Object(h.a)(s,2),i=r[0],o=r[1],d=function(e){n(c+e)},b=function(e){var t=Math.round(100*(i+e))/100;o(t)};return Object(j.jsxs)("main",{className:"Shop",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("section",{className:"shop-container",children:[Object(j.jsxs)("aside",{className:"sticky-cart",children:["Total Items: ",c,Object(j.jsx)("hr",{className:"cart-line"}),"Total Price: $",i,Object(j.jsx)("button",{className:"checkout-button",onClick:function(){n(0),o(0)},children:"Checkout"})]}),Object(j.jsx)(m,{name:"Blueberry",price:"$7.95",description:"~A delicate helping of blue joy french toast.",addItems:d,addPrice:b}),Object(j.jsx)(m,{name:"Strawberry",price:"$6.95",description:"~A simple blessing of strawberry french toast.",addItems:d,addPrice:b}),Object(j.jsx)(m,{name:"Banana",price:"$6.95",description:"~A tasteful serving of banana french toast.",addItems:d,addPrice:b}),Object(j.jsx)(m,{name:"Mixed",price:"+$1.45",description:"~Mix and match your favorites.",addItems:d,addPrice:b})]})]})};var p=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/shopping-cart",component:b}),Object(j.jsx)(o.a,{exact:!0,path:"/shop",component:u})]})})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.236b0e5c.chunk.js.map