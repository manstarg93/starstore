(this.webpackJsonpstarstore=this.webpackJsonpstarstore||[]).push([[7],{121:function(e,a,t){"use strict";var n=t(32),r=(t(0),t(122)),c=t.n(r),s=t(1);a.a=function(e){return Object(s.jsx)("div",Object(n.a)(Object(n.a)({className:"".concat(c.a.Form," ").concat(e.className)},e),{},{children:e.children}))}},122:function(e,a,t){e.exports={Form:"Form_Form__1lAKg"}},123:function(e,a,t){"use strict";var n=t(32),r=t(0),c=t(124),s=t.n(c),i=t(1);a.a=function(e){var a="",t="",c="";switch(e.istouched&&(t=JSON.parse(e.istouched)),e.isvalid&&(c=JSON.parse(e.isvalid)),t&&c&&(a=s.a.isValid),e.elementconfig){case"text":return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("label",{htmlFor:e.id,children:e.label}),Object(i.jsx)("input",Object(n.a)(Object(n.a)({},e),{},{className:"".concat(s.a.Input," ").concat(e.className," ").concat(e.border?s.a[e.border]:null)}))]});case"select":return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("label",{htmlFor:e.id,children:e.label}),Object(i.jsx)("select",Object(n.a)(Object(n.a)({},e),{},{className:"".concat(s.a.Select," ").concat(e.className),children:e.children}))]});case"radio":return Object(i.jsxs)("div",{className:s.a.inputGroup,children:[Object(i.jsx)("label",{htmlFor:e.id,children:e.label}),Object(i.jsx)("input",Object(n.a)(Object(n.a)({checked:e.checked},e),{},{className:"".concat(s.a.Radio,"  ").concat(e.className," ").concat(e.border?s.a[e.border]:null)}))]});default:return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("label",{htmlFor:e.id,children:e.label}),Object(i.jsx)("input",Object(n.a)(Object(n.a)({},e),{},{className:"".concat(s.a.Input," ").concat(e.className,"  ").concat(s.a[e.display]," ").concat(!c&&s.a.invalid," ").concat(a)}))]})}}},124:function(e,a,t){e.exports={Select:"Input_Select__JLRNQ",Radio:"Input_Radio__lNqkj",invalid:"Input_invalid__-pKCl",isValid:"Input_isValid__2kmUt",block:"Input_block__hA0V9",gray:"Input_gray__2h8xF",none:"Input_none__2hCxO",inputGroup:"Input_inputGroup__3SBRM"}},125:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(25),r=t(0),c=function(e){var a=Object(r.useState)(""),t=Object(n.a)(a,2),c=t[0],s=t[1],i=Object(r.useState)(!0),o=Object(n.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)(""),b=Object(n.a)(d,2),p=b[0],j=b[1],g=Object(r.useState)(!1),h=Object(n.a)(g,2),O=h[0],m=h[1],x=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return{inputChangeHandler:function(a){switch(m(!0),s(a.target.value),e){case"email":O&&x.test(a.target.value)&&(u(!0),j(""));break;case"username":O&&a.target.value.length>1&&(u(!0),j(""));break;case"password":O&&a.target.value.length>=6&&(u(!0),j(""))}},inputData:c,isValid:l,inputBlurHandler:function(a){switch(e){case"email":x.test(a.target.value)||(u(!1),j("Please enter a valid email"));break;case"username":a.target.value.length<1&&(u(!1),j("Username cannot be Empty"));break;case"password":a.target.value.length<6&&(u(!1),j("Password must be longer than 6 characters"))}},errorMessage:p,touched:O}}},139:function(e,a,t){e.exports={Login:"Login_Login__1Bn12",help:"Login_help__1EGul",registerLogin:"Login_registerLogin__bD7SC",errorMessage:"Login_errorMessage__1qdmZ"}},145:function(e,a,t){"use strict";t.r(a);var n=t(9),r=t.n(n),c=t(19),s=t(25),i=t(0),o=t(121),l=t(123),u=t(139),d=t.n(u),b=t(26),p=t(125),j=t(6),g=t(11),h=t(5),O=t(23),m=t(27),x=t.n(m),k=t(1);a.default=function(){var e,a=Object(j.g)(),t=Object(i.useState)(!0),n=Object(s.a)(t,2),u=n[0],m=n[1],v=Object(h.b)(),_=Object(i.useState)(""),f=Object(s.a)(_,2),S=f[0],w=f[1],N=Object(i.useState)(!1),I=Object(s.a)(N,2),y=I[0],C=I[1],H=Object(p.a)("email"),L=H.inputChangeHandler,F=H.inputBlurHandler,T=H.inputData,D=H.isValid,M=H.errorMessage,A=H.touched,B=Object(p.a)("username"),J=B.inputChangeHandler,P=B.inputBlurHandler,E=B.inputData,V=B.isValid,R=B.errorMessage,Z=B.touched,z=Object(p.a)("password"),G=z.inputChangeHandler,U=z.inputBlurHandler,W=z.inputData,q=z.isValid,K=z.errorMessage,Q=z.touched,$=function(){m((function(e){return!e})),w("")},X=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=7;break}if(!(D&&A&&Q&&q)){e.next=5;break}return C(!0),e.next=5,x.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzZIZNcakxDaNMSHEHJ56wATc9jPh1-n8",{email:T,password:W,returnSecureToken:!0,Headers:{"Content-Type":"application/json"}}).then((function(e){C(!1);var t=new Date((new Date).getTime()+1e3*+e.data.expiresIn);w("");var n={token:e.data.idToken,expirationTime:t.toISOString()};v(O.a.logIn(n)),a.replace({pathname:"/profile"})})).catch((function(e){C(!1),w("Invalid username or password")}));case 5:e.next=15;break;case 7:if("AIzaSyCzZIZNcakxDaNMSHEHJ56wATc9jPh1-n8",!(D&&A&&Z&&V&&Q&&q)){e.next=14;break}return C(!0),e.next=12,x.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyCzZIZNcakxDaNMSHEHJ56wATc9jPh1-n8"),{email:T,username:E,password:W,returnSecureToken:!0,Headers:{"Content-Type":"application/json"}}).then((function(e){C(!1),w(""),console.log(e.data);var t=new Date((new Date).getTime()+1e3*+e.data.expiresIn);w("");var n={token:e.data.idToken,expirationTime:t.toISOString()};v(O.a.logIn(n)),a.replace({pathname:"/profile"})})).catch((function(e){C(!1),w("User already exists, please log in ")}));case 12:e.next=15;break;case 14:console.log("Check register Form Field");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return y&&(e=Object(k.jsx)("p",{style:{textAlign:"start",color:"grey"},children:"Loading..."})),S.length>0&&(e=Object(k.jsx)("p",{style:{textAlign:"start",color:"red"},children:S})),Object(k.jsxs)("div",{className:d.a.Login,children:[Object(k.jsx)("h2",{children:u?"Log In":"Sign up for a free account"}),u?Object(k.jsxs)("p",{children:["Don't have an account? ",Object(k.jsx)("span",{onClick:$,className:d.a.registerLogin,children:" click here to register"})]}):Object(k.jsxs)("p",{children:["Already registered ? ",Object(k.jsx)("span",{onClick:$,className:d.a.registerLogin,children:" click here to login"})]}),Object(k.jsxs)(o.a,{onSubmit:function(e){e.preventDefault()},children:[Object(k.jsx)(l.a,{type:"email",istouched:A.toString(),isvalid:D.toString(),onBlur:F,onChange:L,value:T,display:"block",label:"Email"}),Object(k.jsx)("p",{className:d.a.errorMessage,children:M}),!u&&Object(k.jsx)(l.a,{istouched:Z.toString(),isvalid:V.toString(),onBlur:P,onChange:J,value:E,display:"block",label:"Username"}),Object(k.jsx)("p",{className:d.a.errorMessage,children:R}),Object(k.jsx)(l.a,{type:"password",istouched:Q.toString(),isvalid:q.toString(),onBlur:U,onChange:G,value:W,display:"block",label:"Password"}),Object(k.jsx)("p",{className:d.a.errorMessage,children:K}),u&&Object(k.jsx)(g.b,{to:"/resetPassword",className:d.a.registerLogin,children:" Forgot Password?"}),Object(k.jsx)(b.a,{onClick:X,className:"fullWidth",children:u?"LOGIN":"REGISTER NOW"})]}),e,Object(k.jsx)("p",{className:d.a.help,children:"Trouble logging or registering? Make sure browser cookies and JavaScript are enabled."})]})}}}]);
//# sourceMappingURL=7.fa560847.chunk.js.map