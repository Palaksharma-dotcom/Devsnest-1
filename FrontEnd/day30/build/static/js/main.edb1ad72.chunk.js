(this.webpackJsonpday30=this.webpackJsonpday30||[]).push([[0],{25:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},35:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var r=c(0),i=c.n(r),n=c(15),s=c.n(n),a=(c(25),c(13)),l=c(8),o=c.n(l),d=c(11),j=c(9),u=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(j.b)("home/fetchProducts",Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),b=Object(j.c)({name:"home",initialState:{status:"idle",data:null},reducers:{},extraReducers:function(e){e.addCase(x.pending,(function(e){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="idle",e.data=t.payload}))}}),f=function(e){return e.home.data},O=b.reducer,m=(c(30),c(31),c(1)),p=function(e){var t=e.id;return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"checkbox",className:"favouriteButton",id:t}),Object(m.jsx)("label",{htmlFor:t,children:Object(m.jsx)("svg",{id:"heart-svg",viewBox:"467 392 58 57",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsxs)("g",{id:"Group",fill:"none",fillRule:"evenodd",transform:"translate(467 392)",children:[Object(m.jsx)("path",{d:"M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z",id:"heart",fill:"#AAB8C2"}),Object(m.jsx)("circle",{id:"main-circ",fill:"#E2264D",opacity:"0",cx:"29.5",cy:"29.5",r:"1.5"}),Object(m.jsxs)("g",{id:"grp7",opacity:"0",transform:"translate(7 6)",children:[Object(m.jsx)("circle",{id:"oval1",fill:"#9CD8C3",cx:"2",cy:"6",r:"2"}),Object(m.jsx)("circle",{id:"oval2",fill:"#8CE8C3",cx:"5",cy:"2",r:"2"})]}),Object(m.jsxs)("g",{id:"grp6",opacity:"0",transform:"translate(0 28)",children:[Object(m.jsx)("circle",{id:"oval1",fill:"#CC8EF5",cx:"2",cy:"7",r:"2"}),Object(m.jsx)("circle",{id:"oval2",fill:"#91D2FA",cx:"3",cy:"2",r:"2"})]}),Object(m.jsxs)("g",{id:"grp3",opacity:"0",transform:"translate(52 28)",children:[Object(m.jsx)("circle",{id:"oval2",fill:"#9CD8C3",cx:"2",cy:"7",r:"2"}),Object(m.jsx)("circle",{id:"oval1",fill:"#8CE8C3",cx:"4",cy:"2",r:"2"})]}),Object(m.jsxs)("g",{id:"grp2",opacity:"0",transform:"translate(44 6)",children:[Object(m.jsx)("circle",{id:"oval2",fill:"#CC8EF5",cx:"5",cy:"6",r:"2"}),Object(m.jsx)("circle",{id:"oval1",fill:"#CC8EF5",cx:"2",cy:"2",r:"2"})]}),Object(m.jsxs)("g",{id:"grp5",opacity:"0",transform:"translate(14 50)",children:[Object(m.jsx)("circle",{id:"oval1",fill:"#91D2FA",cx:"6",cy:"5",r:"2"}),Object(m.jsx)("circle",{id:"oval2",fill:"#91D2FA",cx:"2",cy:"2",r:"2"})]}),Object(m.jsxs)("g",{id:"grp4",opacity:"0",transform:"translate(35 50)",children:[Object(m.jsx)("circle",{id:"oval1",fill:"#F48EA7",cx:"6",cy:"5",r:"2"}),Object(m.jsx)("circle",{id:"oval2",fill:"#F48EA7",cx:"2",cy:"2",r:"2"})]}),Object(m.jsxs)("g",{id:"grp1",opacity:"0",transform:"translate(24)",children:[Object(m.jsx)("circle",{id:"oval1",fill:"#9FC7FA",cx:"2.5",cy:"3",r:"2"}),Object(m.jsx)("circle",{id:"oval2",fill:"#9FC7FA",cx:"7.5",cy:"2",r:"2"})]})]})})})]})},h=function(e){var t=e.title,c=e.imgSrc,r=(e.description,e.price),i=e.id;return Object(m.jsx)("div",{className:"col-12 col-sm-3 mt-4 offset-sm-1 d-flex align-items-stretch item-card",children:Object(m.jsxs)("div",{style:{width:"100%",position:"relative"},children:[Object(m.jsx)("img",{className:"card-img-top rounded",src:c,alt:t,style:{objectFit:"scale-down",height:"250px"}}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("strong",{children:t})}),Object(m.jsxs)("p",{className:"card-text",children:["$",r]}),Object(m.jsx)("div",{style:{position:"absolute",top:"5px",left:"-1px"},children:Object(m.jsx)(p,{id:i})})]})]})})},v=function(){var e=Object(a.b)(),t=Object(a.c)(f);return Object(r.useEffect)((function(){e(x())}),[]),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row p-2",children:t?t.map((function(e){return Object(m.jsx)(h,{title:e.title,imgSrc:e.image,description:e.description,price:e.price,id:e.id},e.id)})):Object(m.jsx)("div",{className:"col-12",children:"LOADING...."})})})},y=(c(33),c(34),c(35),c(14)),g=c(3),C=function(){return Object(m.jsxs)(y.a,{children:[Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row navbar text-decoration-none",children:[Object(m.jsx)("div",{className:"col-sm-2 col-6",children:Object(m.jsx)(y.b,{to:"/",children:"REDUX-STORE"})}),Object(m.jsx)("div",{className:"offset-2 offset-sm-8 col-sm-1 col-2",children:Object(m.jsx)(y.b,{to:"/",children:Object(m.jsx)("i",{style:{fontSize:"1.5rem"},className:"bi bi-heart-fill"})})}),Object(m.jsx)("div",{className:"col-sm-1 col-2",children:Object(m.jsx)(y.b,{to:"/",children:Object(m.jsx)("i",{style:{fontSize:"1.5rem"},className:"bi bi-cart-fill"})})})]})}),Object(m.jsx)(g.c,{children:Object(m.jsx)(g.a,{exact:!0,path:"/",component:v})})]})};var w=function(){return Object(m.jsx)(C,{})};function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var F=Object(j.b)("counter/fetchCount",function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(j.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(F.pending,(function(e){e.status="loading"})).addCase(F.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),E=A.actions,D=(E.increment,E.decrement,E.incrementByAmount,A.reducer),S=Object(j.a)({reducer:{counter:D,home:O}});s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(a.a,{store:S,children:Object(m.jsx)(w,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.edb1ad72.chunk.js.map