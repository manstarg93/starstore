(this.webpackJsonpstarstore=this.webpackJsonpstarstore||[]).push([[0],{117:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(20),o=n.n(r),i=(n(84),n(5)),s=(n(90),n(91),n(119)),l=n(120),u=n(8),d=Object(u.c)({name:"ui",initialState:{showModal:!1},reducers:{showModal:function(t,e){t.showModal=!0},hideModal:function(t,e){t.showModal=!1}}}),j=d.actions,b=d.reducer,h=n(48),f=n.n(h),m=n(1),p=function(t){return Object(m.jsx)("div",{onClick:t.onClick,className:"".concat(f.a.BackDrop," ").concat(t.show&&f.a.show)})};document.getElementById("backDrop");var O=p,x=n(52),g=n(32),v=n(66),_=n(67),y=n.n(_),I=function(t){return Object(m.jsx)(v.a,Object(g.a)({className:"".concat(y.a.Icon," ").concat(t.className)},t))},N=n(30),C=n.n(N),w=function(t){var e=Object(i.c)((function(t){return t.ui})).showModal,n=Object(i.b)(),a=function(){n(j.hideModal())};return o.a.createPortal(Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(O,{show:e,onClick:a}),Object(m.jsxs)(x.a,{className:"\n        ".concat(C.a.Modal," \n            ").concat(e&&C.a.show),children:[Object(m.jsxs)("div",{className:C.a.modalHeader,children:[Object(m.jsx)("h5",{className:C.a.title,children:t.title}),Object(m.jsx)("div",{style:{fontSize:"30px"},onClick:a,children:Object(m.jsx)(I,{icon:"window-close"})})]}),Object(m.jsx)("div",{className:C.a.modalBody,children:t.children?t.children:Object(m.jsx)("p",{style:{textAlign:"center"},children:"Nothing to show here"})})]})]}),document.getElementById("modal"))},k=n(22),P=n.n(k),B=n(26),S=n(34),A=function(){var t,e=Object(i.b)(),n=Object(i.c)((function(t){return t.cart})),c=n.cartItems,r=n.totalPrice;return t=c.map((function(t){return Object(m.jsxs)(s.a,{className:P.a.CartItems,children:[Object(m.jsxs)(l.a,{md:"7",children:[Object(m.jsxs)("h5",{children:[t.title," ",Object(m.jsxs)("span",{className:P.a.quantity,children:[" * ",t.quantity]})]}),Object(m.jsxs)("p",{children:["$",t.price.toFixed(2)]})]}),Object(m.jsxs)(l.a,{md:"3",className:P.a.addAndRemove,children:[Object(m.jsx)("div",{onClick:function(){return function(t,n,a,c,r){var o={id:t,title:n,price:a,quantity:1,disabled:r,totalItemPrice:c-a};e(S.a.removeProduct(o))}(t.id,t.title,t.price,t.totalItemPrice,t.disabled)},className:P.a.icons,children:Object(m.jsx)(I,{icon:"minus"})}),Object(m.jsx)("div",{onClick:function(){return function(t,n,a,c){var r={id:t,title:n,price:a,quantity:1,totalItemPrice:c+a};e(S.a.addProduct(r))}(t.id,t.title,t.price,t.totalItemPrice)},className:P.a.icons,children:Object(m.jsx)(I,{icon:"plus"})})]})]},t.id)})),Object(m.jsx)(w,{title:"Order Summary",children:c.length>0&&Object(m.jsxs)(a.Fragment,{children:[t,Object(m.jsxs)("h6",{className:P.a.totalPrice,children:["Total Price: $",r.toFixed(2)]}),Object(m.jsx)("div",{className:P.a.submitSection,children:Object(m.jsx)(B.a,{children:"Check Out"})})]})})},M=n(11),L=n(50),R=n.n(L),T=function(){return Object(m.jsx)("div",{className:R.a.Logo,children:Object(m.jsx)(M.b,{className:R.a.LogoLink,to:"/",children:"STAR STORE"})})},D=n(70),F=n.n(D),U=n(71),q=n.n(U),H=n(6),z=n(23),E=n(39),W=n.n(E),J=function(){var t,e=Object(H.g)(),n=Object(i.c)((function(t){return t.auth})).isAuth,c=Object(i.b)();return n||(t=Object(m.jsx)(M.b,{className:"noDecoration",to:"/login",children:Object(m.jsx)(B.a,{className:W.a.AuthUser,children:"Login / Register"})})),n&&(t=Object(m.jsxs)("div",{className:W.a.loggedInDiv,children:[Object(m.jsx)("p",{children:"Welcome Back"}),Object(m.jsx)(M.b,{className:"noDecoration",to:"/profile",children:Object(m.jsx)(B.a,{className:W.a.AuthUserProfile,children:"Profile"})}),Object(m.jsx)(B.a,{onClick:function(){c(z.a.logOut()),e.replace("/")},className:W.a.AuthUser,children:"Log Out"})]})),Object(m.jsx)(a.Fragment,{children:t})},G=n(44),X=n.n(G),Z=function(t){var e=Object(i.c)((function(t){return t.cart})).amountInCart,n=Object(i.b)();return Object(m.jsxs)("div",{onClick:function(){n(j.showModal())},className:X.a.CartButtonContainer,children:[Object(m.jsx)(I,{className:X.a.CartButton,size:"lg",icon:"cart-plus"}),e>0&&Object(m.jsx)("p",{className:X.a.CartAmount,children:e})]})},$=function(){return Object(m.jsxs)("div",{className:q.a.RightHeader,children:[Object(m.jsx)(J,{}),Object(m.jsx)(Z,{})]})},K=function(){return Object(m.jsxs)("header",{className:F.a.Header,children:[Object(m.jsx)(T,{}),Object(m.jsx)($,{})]})},Q=n(72),V=n.n(Q),Y=n(18),tt=n.n(Y),et=function(){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("li",{className:tt.a.NavigationItem,children:Object(m.jsx)(M.c,{to:"/",activeClassName:tt.a.active,exact:!0,children:"Home"})}),Object(m.jsx)("li",{className:tt.a.NavigationItem,children:Object(m.jsx)(M.c,{to:"/products",activeClassName:tt.a.active,exact:!0,children:"All"})}),Object(m.jsxs)("li",{className:tt.a.NavigationItem,children:[" ",Object(m.jsx)(M.c,{to:"/products/men's clothing",activeClassName:tt.a.active,exact:!0,children:"Men"})]}),Object(m.jsx)("li",{className:tt.a.NavigationItem,children:Object(m.jsx)(M.c,{to:"/products/women's clothing",activeClassName:tt.a.active,exact:!0,children:"Women"})}),Object(m.jsxs)("li",{className:tt.a.NavigationItem,children:[" ",Object(m.jsx)(M.c,{to:"/products/jewelery",activeClassName:tt.a.active,exact:!0,children:"Jewerly"})]})]})},nt=function(){return Object(m.jsx)("ul",{className:V.a.MainNavigation,children:Object(m.jsx)(et,{})})},at=n(73),ct=n.n(at),rt=function(t){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(K,{}),Object(m.jsx)(nt,{}),Object(m.jsx)(A,{}),Object(m.jsx)("main",{className:ct.a.Layout,children:t.children})]})},ot=n(40),it=n(53),st=c.a.lazy((function(){return n.e(6).then(n.bind(null,149))})),lt=c.a.lazy((function(){return n.e(4).then(n.bind(null,142))})),ut=c.a.lazy((function(){return n.e(3).then(n.bind(null,143))})),dt=c.a.lazy((function(){return n.e(5).then(n.bind(null,150))})),jt=c.a.lazy((function(){return n.e(10).then(n.bind(null,144))})),bt=c.a.lazy((function(){return n.e(7).then(n.bind(null,145))})),ht=c.a.lazy((function(){return n.e(9).then(n.bind(null,146))})),ft=c.a.lazy((function(){return n.e(8).then(n.bind(null,147))}));var mt=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.auth})).isAuth;return Object(a.useEffect)((function(){t(Object(ot.b)())}),[t]),Object(a.useEffect)((function(){e&&setTimeout((function(){t(z.a.logOut())}),5e5)}),[t,e]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("token"));if(null!==e){var n={token:e,expirationTime:""};t(z.a.logIn(n))}}),[t,e]),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(rt,{children:Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)(it.a,{}),children:Object(m.jsxs)(H.d,{children:[Object(m.jsx)(H.b,{path:"/home",exact:!0,children:Object(m.jsx)(H.a,{to:"/"})}),Object(m.jsx)(H.b,{path:"/",exact:!0,children:Object(m.jsx)(st,{})}),Object(m.jsx)(H.b,{path:"/resetPassword",children:Object(m.jsx)(ht,{})}),Object(m.jsx)(H.b,{path:"/login",children:e?Object(m.jsx)(H.a,{to:"/profile"}):Object(m.jsx)(bt,{})}),Object(m.jsx)(H.b,{path:"/profile",children:e?Object(m.jsx)(ft,{}):Object(m.jsx)(H.a,{to:"/login"})}),Object(m.jsx)(H.b,{path:"/products",exact:!0,children:Object(m.jsx)(lt,{})}),Object(m.jsx)(H.b,{path:"/products/:productCategory",exact:!0,children:Object(m.jsx)(ut,{})}),Object(m.jsx)(H.b,{path:"/products/:productCategory/:productDetails",exact:!0,children:Object(m.jsx)(dt,{})}),Object(m.jsx)(H.b,{path:"*",children:Object(m.jsx)(jt,{})})]})})})})},pt=n(77),Ot=function(t){t&&t instanceof Function&&n.e(11).then(n.bind(null,148)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))},xt=n(63),gt=n(64),vt=Object(u.a)({reducer:{products:ot.a,productCategory:xt.a,selectedProduct:gt.a,cart:S.b,ui:b,auth:z.b}}),_t=n(24),yt=n(76),It=n(31),Nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ct(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}_t.b.add(yt.a,It.b,It.a,It.d,It.c,It.e),console.log=function(){},console.error=function(){},console.debug=function(){};var wt=(Object(pt.a)({apiKey:"AIzaSyCzZIZNcakxDaNMSHEHJ56wATc9jPh1-n8",authDomain:"starstore-84df.firebaseapp.com",databaseURL:"https://starstore-84df-default-rtdb.europe-west1.firebasedatabase.app",projectId:"starstore-84df",storageBucket:"starstore-84df.appspot.com",messagingSenderId:"911165507837",appId:"1:911165507837:web:ae51c2e3451527007a1694",measurementId:"G-F9DB15JREB"}),Object(m.jsx)(M.a,{children:Object(m.jsx)(i.a,{store:vt,children:Object(m.jsx)(mt,{})})}));o.a.render(Object(m.jsx)(c.a.StrictMode,{children:wt}),document.getElementById("root")),Ot(),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Nt?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):Ct(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ct(e,t)}))}}()},18:function(t,e,n){t.exports={NavigationItem:"NavigationItem_NavigationItem__3QhkO",active:"NavigationItem_active__1gsE9"}},22:function(t,e,n){t.exports={CartItems:"CartItems_CartItems__tp3F8",addAndRemove:"CartItems_addAndRemove__14x_8",icons:"CartItems_icons__1S_7B",totalPrice:"CartItems_totalPrice__2BS8O",submitSection:"CartItems_submitSection__3Owvn",quantity:"CartItems_quantity__3bTi7"}},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(8),c=Object(a.c)({name:"auth",initialState:{isAuth:!1,token:null,isLoggedIn:!1,remainingTime:""},reducers:{logOut:function(t,e){t.token=null,t.isAuth=!1,localStorage.removeItem("token")},logIn:function(t,e){t.token=e.payload.token,t.isAuth=!0,localStorage.setItem("token",JSON.stringify(e.payload.token));var n=function(t){var e=(new Date).getTime();return new Date(t).getTime()-e}(e.payload.expirationTime);t.remainingTime=n}},extraReducers:{}}),r=c.actions;e.b=c.reducer},26:function(t,e,n){"use strict";var a=n(32),c=(n(0),n(68)),r=n.n(c),o=n(1);e.a=function(t){return Object(o.jsx)("button",Object(a.a)(Object(a.a)({disabled:t.disabled},t),{},{className:"".concat(r.a.Button," ").concat(t.className),children:t.children}))}},30:function(t,e,n){t.exports={Modal:"Modal_Modal__2PyOn",title:"Modal_title__sCSQ2",modalHeader:"Modal_modalHeader__1zPT2",show:"Modal_show__1sq68",modalBody:"Modal_modalBody__2FY9B"}},34:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(8),c=Object(a.c)({name:"cart",initialState:{amountInCart:0,cartItems:[],totalPrice:0,disabled:!1},reducers:{addProduct:function(t,e){var n=t.cartItems.findIndex((function(t){return t.id===e.payload.id})),a=t.cartItems[n];a?(a.totalItemPrice=e.payload.totalItemPrice,a.quantity=a.quantity+e.payload.quantity,t.totalPrice=t.totalPrice+e.payload.price):(t.cartItems.unshift(e.payload),t.amountInCart=t.amountInCart+1,t.totalPrice=t.totalPrice+e.payload.totalItemPrice,t.disabled=!0)},removeProduct:function(t,e){var n=t.cartItems.findIndex((function(t){return t.id===e.payload.id})),a=t.cartItems[n];a.quantity>1?(a.quantity=a.quantity-e.payload.quantity,a.totalItemPrice=e.payload.totalItemPrice,t.totalPrice=t.totalPrice-e.payload.price,console.log(a.quantity)):(t.totalPrice=t.totalPrice-a.totalItemPrice,t.disabled=!1,t.cartItems=t.cartItems.filter((function(t){return t.id!==e.payload.id})),t.amountInCart=t.amountInCart<1)}}}),r=c.actions;e.b=c.reducer},39:function(t,e,n){t.exports={AuthUser:"AuthUser_AuthUser__1Tpb8",AuthUserProfile:"AuthUser_AuthUserProfile__2_7lX",loggedInDiv:"AuthUser_loggedInDiv__1iVWN"}},40:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return b}));var a,c=n(2),r=n(9),o=n.n(r),i=n(19),s=n(8),l=n(27),u=n.n(l),d=Object(s.b)("productThunk",function(){var t=Object(i.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("https://fakestoreapi.com/products").then((function(t){return t.data})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),j=Object(s.c)({name:"products",initialState:{specificProduct:"",loading:!1,allProducts:[],errorMessage:null,filteredProducts:[]},reducers:{filterProduct:function(t,e){t.filteredProducts=t.allProducts.filter((function(t){return t.title.toLowerCase().includes(e.payload)}))}},extraReducers:(a={},Object(c.a)(a,d.pending,(function(t){t.pending=!0})),Object(c.a)(a,d.fulfilled,(function(t,e){t.loading=!1,t.allProducts=e.payload})),Object(c.a)(a,d.rejected,(function(t){t.loading=!1,t.errorMessage="Unable to retrieve data, Please try again or check your connection"})),a)}),b=j.actions;e.a=j.reducer},44:function(t,e,n){t.exports={CartButtonContainer:"CartButton_CartButtonContainer__2wIGm",CartButton:"CartButton_CartButton__GXBu8",CartAmount:"CartButton_CartAmount__3ZiI3"}},48:function(t,e,n){t.exports={BackDrop:"BackDrop_BackDrop__3Rl5V",show:"BackDrop_show__2IFHW"}},49:function(t,e,n){t.exports={Card:"Card_Card__3h8H_",center:"Card_center__2UFw1",none:"Card_none__2t7AF"}},50:function(t,e,n){t.exports={Logo:"Logo_Logo__2Lb68",LogoLink:"Logo_LogoLink__3nFwI"}},52:function(t,e,n){"use strict";n(0);var a=n(49),c=n.n(a),r=n(1);e.a=function(t){return Object(r.jsx)("div",{style:{background:"url(".concat(t.background,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"".concat(c.a.Card," ").concat(t.className," ").concat(c.a[t.boxShadow]),children:t.children},t.Key)}},53:function(t,e,n){"use strict";n(0);var a=n(74),c=n.n(a),r=n(1);e.a=function(){return Object(r.jsxs)("div",{className:c.a.idRoller,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}},63:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));var a,c=n(2),r=n(9),o=n.n(r),i=n(19),s=n(8),l=n(27),u=n.n(l),d=Object(s.b)("productCategoryThunk",function(){var t=Object(i.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("https://fakestoreapi.com/products/category/".concat(e)).then((function(t){return t.data})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),j=Object(s.c)({name:"productCategory",initialState:{productCategory:[],loading:!1,errorMessage:null},reducers:{},extraReducers:(a={},Object(c.a)(a,d.pending,(function(t){t.loading=!0})),Object(c.a)(a,d.fulfilled,(function(t,e){t.loading=!1,t.productCategory=e.payload})),Object(c.a)(a,d.rejected,(function(t){t.loading=!1,t.errorMessage="Unable to retrieve products please check your connection or try again "})),a)});j.actions;e.a=j.reducer},64:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));var a,c=n(2),r=n(9),o=n.n(r),i=n(19),s=n(8),l=n(27),u=n.n(l),d=Object(s.b)("selectedProductThunk",function(){var t=Object(i.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("https://fakestoreapi.com/products/".concat(e)).then((function(t){return t.data})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),j=Object(s.c)({name:"selectedProduct",initialState:{selectedProduct:"",loading:!1,errorMessage:null},reducers:{},extraReducers:(a={},Object(c.a)(a,d.pending,(function(t){t.loading=!0})),Object(c.a)(a,d.fulfilled,(function(t,e){t.loading=!1,t.selectedProduct=e.payload})),Object(c.a)(a,d.rejected,(function(t){t.loading=!1,t.errorMessage="Selected Product not found please try again "})),a)});j.actions;e.a=j.reducer},67:function(t,e,n){t.exports={Icon:"Icon_Icon__3Dj8R"}},68:function(t,e,n){t.exports={Button:"Button_Button__2uux3",white:"Button_white__JPmEe"}},70:function(t,e,n){t.exports={Header:"Header_Header__1CTzX"}},71:function(t,e,n){t.exports={RightHeader:"RightHeader_RightHeader__1oODq"}},72:function(t,e,n){t.exports={MainNavigation:"MainNavigation_MainNavigation__22uNN"}},73:function(t,e,n){t.exports={Layout:"Layout_Layout__33TEs"}},74:function(t,e,n){t.exports={idRoller:"Loading_idRoller__1bb4_"}},90:function(t,e,n){},91:function(t,e,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.a548e744.chunk.js.map