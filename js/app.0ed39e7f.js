(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="standardresume/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"042c":function(t,e,n){},"22d7":function(t,e,n){"use strict";var i=n("be87"),a=n.n(i);a.a},3058:function(t,e,n){"use strict";var i=n("3c72"),a=n.n(i);a.a},3242:function(t,e,n){t.exports=n.p+"img/emptystar.34a9c2f3.png"},3336:function(t,e,n){"use strict";var i=n("bd66"),a=n.n(i);a.a},"3c72":function(t,e,n){},"50c1":function(t,e,n){t.exports=n.p+"img/Location1.0785d71c.png"},"534d":function(t,e,n){"use strict";var i=n("042c"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"container"}},[n("Navigation",{attrs:{headings:t.sections[0].headings}}),n("Header"),n("About",{staticClass:"content",attrs:{id:"about",about:t.sections[0].about}}),n("Skills",{staticClass:"content",attrs:{id:"skills",skills:t.sections[0].skills}}),n("WorkDone",{staticClass:"content full-width",attrs:{id:"Journey",data:t.sections[0].work}}),n("Education",{staticClass:"content",attrs:{id:"interests",data:t.sections[0].education}}),n("Contact",{staticClass:"content",attrs:{id:"contact"}}),n("Footer")],1)])},s=[],o=n("dd8b"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"navigation"},[t.mobileView?t._e():n("div",{staticClass:"d-view"},[n("div",{staticClass:"favicon"}),n("div",{staticClass:"header-links"},t._l(t.headings,(function(e){return n("a",{key:e.id,staticClass:"nav-links",attrs:{href:"#"}},[t._v(" "+t._s(e)+" ")])})),0)]),t._m(0)]),n("div",{staticClass:"m-navigation",class:{showd:t.showNav}},[t.mobileView?n("a",{staticClass:"navigation-icon",on:{click:function(e){t.showNav=!t.showNav}}},[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]):t._e(),t.mobileView?n("span",{staticClass:"m-view",class:{open:!t.showNav}},t._l(t.headings,(function(e){return n("a",{key:e.id,staticClass:"nav-links",on:{click:function(e){t.showNav=!t.showNav}}},[t._v(" "+t._s(e)+" ")])})),0):t._e()])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-container"},[n("div",{staticClass:"progress-bar",attrs:{id:"myBar"}})])}],c=(n("7db0"),n("ac1f"),n("5319"),n("498a"),n("1157")),d=n.n(c),u={name:"Navigation",props:["headings"],data:function(){return{mobileView:!0,showNav:!1}},methods:{handleView:function(){this.mobileView=window.innerWidth<=425},handleScroll:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=t/e*100;document.getElementById("myBar").style.width=n+"%"}},created:function(){this.handleView(),window.addEventListener("scroll",this.handleScroll)},mounted:function(){var t=0;this.mobileView||(t=85),d()(".nav-links").on("click",(function(){var e=d()(this).text().replace(/\s+/g," ").trim();d()("html, body").animate({scrollTop:d()("#"+e).offset().top-t},1e3)})),d()(".navigation-icon").click((function(){d()(this).find("i").toggleClass("fa-times fa-bars")}))}},m=u,f=(n("b97b"),n("2877")),p=Object(f["a"])(m,r,l,!1,null,"62eb8586",null),g=p.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"img"})])}],b=(n("d577"),{}),w=Object(f["a"])(b,v,h,!1,null,"02550d38",null),_=w.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"about-details"},t._l(t.about,(function(e){return n("div",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h3",[n("p",[t._v("Here's Something about me")])])])}],y={name:"About",props:["about"]},x=y,E=(n("534d"),Object(f["a"])(x,C,k,!1,null,"52958af8",null)),S=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading"},[n("h3",[n("P",[t._v(" Technologie's, I am experienced in ")])],1)]),t._l(t.skills,(function(e){return n("div",{key:e.id},[e.show?n("div",{staticClass:"skills"},[n("span",[n("strong",{staticClass:"skill-name"},[t._v(" "+t._s(e.name)+" ")]),n("span",{staticClass:"skill-content",domProps:{innerHTML:t._s(t.getRating(e.rating))}},[n("span",[t._v(t._s(e.rating)+"/10")])])])]):t._e()])})),n("div",{staticClass:"morelink",on:{click:t.showModal}},[t._v(" 𝙆𝙣𝙤𝙬 𝙈𝙤𝙧𝙚")]),n("SkillModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],attrs:{detail:t.skills},on:{close:t.closeModal}})],2)},N=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[t._v(" Detail Information "),n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(" x ")])])],2),n("section",{staticClass:"modal-body t-center",attrs:{id:"modalDescription"}},[t._t("body",t._l(t.detail,(function(e){return n("div",{key:e.id},[0==e.show?n("div",{attrs:{id:"modal-skill-section"}},[n("span",{attrs:{id:"skill-pop-name"}},[t._v(" "+t._s(e.name))]),n("span",{staticClass:"skill-content",domProps:{innerHTML:t._s(t.getRating(e.rating))}})]):t._e()])})))],2),n("footer",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(" Close ")])])],2)])])])},O=[],T={name:"SkillModal",props:["detail"],methods:{close:function(){this.$emit("close")},getRating:function(t){for(var e=n("9142"),i=e("./emptystar.png"),a=e("./Star.png"),s="",o=1;o<=t;o++)s+="<img style='height: 22px;padding : 2px' alt='img' src= "+a+">";for(var r=5;t<r;r--)s+="<img style='height: 22px;padding : 2px' alt='img' src= "+i+">";return s+="",s}}},A=T,P=(n("6776"),Object(f["a"])(A,j,O,!1,null,null,null)),$=P.exports,V={name:"Skills",props:["skills"],components:{SkillModal:$},data:function(){return{isModalVisible:!1}},methods:{getImgUrl:function(t){var e=n("9142");return e("./"+t+".png")},getRating:function(t){for(var e=n("9142"),i=e("./emptystar.png"),a=e("./Star.png"),s="",o=1;o<=t;o++)s+="<img style='height: 22px;padding : 2px' alt='img' src= "+a+">";for(var r=5;t<r;r--)s+="<img style='height: 22px;padding : 2px' alt='img' src= "+i+">";return s+="",s},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1}}},I=V,D=(n("3058"),Object(f["a"])(I,M,N,!1,null,"0d2bc0aa",null)),W=D.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",[n("ol",t._l(t.data,(function(e){return n("li",{key:e.key,staticClass:"w-done",attrs:{title:"click to know more"}},[n("div",{staticClass:"counter",on:{click:t.showModal}}),n("div",{staticClass:"w-done-year"},[t._v(" "+t._s(e.year))]),n("modal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],staticClass:"modelbtn",attrs:{detail:e.workdone},on:{close:t.closeModal}})],1)})),0)])])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h3",[n("p",[t._v("My digital journey")])])])}],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[t._v(" Detail Information "),n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(" x ")])])],2),n("section",{staticClass:"modal-body a-left",attrs:{id:"modalDescription"}},[t._t("body",[n("ul",t._l(t.detail,(function(e){return n("li",{key:e.id,attrs:{id:"modal-skill-section"}},[t._v(" "+t._s(e)+" ")])})),0)])],2),n("footer",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(" Close ")])])],2)])])])},F=[],R={name:"modal",props:["detail"],methods:{close:function(){this.$emit("close")}}},Q=R,U=(n("22d7"),Object(f["a"])(Q,L,F,!1,null,null,null)),B=U.exports,K={name:"WorkDone",props:{data:Array},components:{Modal:B},data:function(){return{isModalVisible:!1}},mounted:function(){d()(".w-done").width(100/this.data.length+"%")},methods:{showModal:function(){event.path[1].children[2].style.cssText=""},closeModal:function(){event.path[3].style.cssText="display:none"}}},z=K,G=(n("f90d"),Object(f["a"])(z,J,H,!1,null,"79fef74e",null)),q=G.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading"},[n("h3",[n("P",[t._v("Who am I")])],1)]),t._m(0)])},Y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"i-container"},[i("div",{staticClass:"i-content"},[i("img",{staticClass:"i-img",attrs:{src:n("d6de")}}),i("div",{staticClass:"img-content"},[t._v(" A Developer")])]),i("div",{staticClass:"i-content"},[i("img",{staticClass:"i-img",attrs:{src:n("8d89")}}),i("div",{staticClass:"img-content"},[t._v(" A Gym Freak")])]),i("div",{staticClass:"i-content"},[i("img",{staticClass:"i-img",attrs:{src:n("858a")}}),i("div",{staticClass:"img-content"},[t._v(" A Foodie")])])])}],Z={name:"Education",props:["data"]},tt=Z,et=(n("3336"),Object(f["a"])(tt,X,Y,!1,null,"7492d201",null)),nt=et.exports,it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("a",{attrs:{href:"https://www.instagram.com/anmolkesar/",target:"_blank"}},[i("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:n("dd32")}})]),i("a",{attrs:{href:"https://www.linkedin.com/in/anmol-kesar-12872694/",target:"_blank"}},[i("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:n("c7f8")}})]),i("a",{attrs:{href:"https://twitter.com/KesarAnmol",target:"_blank"}},[i("img",{staticClass:"social-media-icon",attrs:{alt:"img",src:n("e4d7")}})])])}],st={name:"Footer"},ot=st,rt=(n("8622"),Object(f["a"])(ot,it,at,!1,null,"4cf205e0",null)),lt=rt.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading"},[n("h3",[n("p",[t._v(" Contact info ")])])]),n("div",{attrs:{id:"f-left"}},[n("a",{attrs:{href:"https://www.google.com/maps/dir/32.6807679,+74.883424//@32.6814176,74.8639303,14z/data=!3m1!4b1!4m7!4m6!1m3!2m2!1d74.883424!2d32.6807679!1m0!3e0",target:"_blank",id:"map",title:"Login"}})]),n("div",{attrs:{id:"f-right"}},[n("div",{staticClass:"r-content"},[n("div",{staticClass:"address d-inline"}),n("span",[t._v(" 1/A , East Extn, "),n("br"),t._v(" Trikuta Nagar Jammu"),n("br"),t._v(" Jammu and Kashmir"),n("br"),t._v(" Pin : 180010"),n("br")])]),n("div",{staticClass:"r-content"},[n("div",{staticClass:"p-number d-inline"}),n("span",[t._v(" +91 9596735336 ")])]),n("div",{staticClass:"r-content"},[n("div",{staticClass:"email d-inline"}),n("span",[n("a",{attrs:{href:"mailto:anmolkesar24@gmail.com"}},[t._v(" Email me ")])])])])])}],ut={},mt=ut,ft=(n("686d"),Object(f["a"])(mt,ct,dt,!1,null,"1b82e49b",null)),pt=ft.exports,gt={name:"App",components:{Navigation:g,Header:_,About:S,Skills:W,WorkDone:q,Education:nt,Footer:lt,Contact:pt},data:function(){return{sections:o}},created:function(){document.title="AK-Info"}},vt=gt,ht=(n("034f"),Object(f["a"])(vt,a,s,!1,null,null,null)),bt=ht.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(bt)}}).$mount("#app")},"5f3c":function(t,e,n){t.exports=n.p+"img/E-Mail.a6fde601.png"},6776:function(t,e,n){"use strict";var i=n("cd01"),a=n.n(i);a.a},"686d":function(t,e,n){"use strict";var i=n("d801"),a=n.n(i);a.a},"718c":function(t,e,n){},"858a":function(t,e,n){t.exports=n.p+"img/foodie.055d8725.jpg"},"85ec":function(t,e,n){},8622:function(t,e,n){"use strict";var i=n("9001"),a=n.n(i);a.a},"8d89":function(t,e,n){t.exports=n.p+"img/gym.163482ea.jpg"},9001:function(t,e,n){},9142:function(t,e,n){var i={"./E-Mail.png":"5f3c","./Location1.png":"50c1","./Phone.png":"98ce","./Star.png":"ade6","./emptystar.png":"3242","./instagram.png":"c7f8","./linkedin.png":"dd32","./location.png":"e6b6","./logo.png":"cf05","./twitter.png":"e4d7"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=s,t.exports=a,a.id="9142"},"929f":function(t,e,n){},"98ce":function(t,e,n){t.exports=n.p+"img/Phone.c3364e77.png"},ade6:function(t,e,n){t.exports=n.p+"img/Star.2b5921ab.png"},b97b:function(t,e,n){"use strict";var i=n("718c"),a=n.n(i);a.a},bd66:function(t,e,n){},be87:function(t,e,n){},c7f8:function(t,e,n){t.exports=n.p+"img/instagram.e41eff52.png"},cd01:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.e2f6918b.png"},d577:function(t,e,n){"use strict";var i=n("929f"),a=n.n(i);a.a},d6de:function(t,e,n){t.exports=n.p+"img/developer.a978bb15.jpg"},d801:function(t,e,n){},dd32:function(t,e,n){t.exports=n.p+"img/linkedin.66fac24b.png"},dd8b:function(t){t.exports=JSON.parse('[{"headings":["about","skills","Journey","interests","contact"],"about":["I am a Asp .Net and Coveo certified preofessional currently working with TADigital from the past 5+ years","I have strong knowledge of development activities and responsible for demonstrating your coding skills on ASP.NET, C#, MVC, Entity Framework, .Net Core, Microservices, vue JS, HTML, REST API, Unit Testing etc","I have solid understanding of building scalable web applications using WebAPI, RESTful API design","I have Written code using the .NET Core / .Net framework and Microservice architecture","I have good working experience on Source Control systems like TFS, Azure DevOps, Git, Docker Containers, Kubernetes etc.","Develop the UI Framework - understand and be familiar human/user centered design, behavior driven development and test driven development"],"work":[{"year":"2014","workdone":["Resource for the development of sites using .Net framework.","Responsible for coding, unit testing, functional testing and regression testing","User interface development using HTML, CSS, jQuery"]},{"year":"2015","workdone":["Single handedly upgraded the site from sharepoint 2007 to 2013","Involved in code reviews and mentoring of Junior team members","Responsible for coding, unit testing, functional testing and regression testing"]},{"year":"2016","workdone":["Contributes as a key resource for the development of sites using .Net core 2 framework","Contributes in implmenting Coveo search in the site ","Worked closely with managers, architects, and the QA team to deliver optimal designs and software to meet and exceed expectations"]},{"year":"2017","workdone":["Contributes as a key resource for the development of sites using .Net core 2 framework","Contributes in implmenting Coveo search in the site ","Worked closely with managers, architects, and the QA team to deliver optimal designs and software to meet and exceed expectations"]},{"year":"2018","workdone":["Contributes as a key resource for the development of sites using .Net core 2 framework","Contributes in implmenting Coveo search in the site ","Worked closely with managers, architects, and the QA team to deliver optimal designs and software to meet and exceed expectations"]},{"year":"2019","workdone":["Contributes as a key resource for the development of sites using .Net core 2 framework","Contributes in implmenting Coveo search in the site ","Worked closely with managers, architects, and the QA team to deliver optimal designs and software to meet and exceed expectations"]},{"year":"2020","workdone":["Contributes as a key resource for the development of sites using .Net core 2 framework","Contributes in implmenting Coveo search in the site ","Worked closely with managers, architects, and the QA team to deliver optimal designs and software to meet and exceed expectations"]}],"skills":[{"name":"ASP .Net MVC","src":"mvcn","rating":4,"show":1},{"name":"Sharepoint","src":"sharepoint1","rating":4,"show":1},{"name":"ASP .Net Core","src":"core1","rating":4,"show":1},{"name":"HTML/CSS","src":"","rating":3,"show":1},{"name":"Kendo UI","src":"vue1","rating":3,"show":1},{"name":"Caml Query Builder","rating":5,"show":0},{"name":"Sharepoint designer","rating":4,"show":0},{"name":"JS/Jquery","rating":3,"show":0},{"name":"Coveo","rating":2,"show":0},{"name":"Sitecore","rating":2,"show":0},{"name":"Vue","rating":2,"show":0}],"education":[{"name":"Bachelor of Engineering(computer Science)","src":"http://www.mietjmu.in/images/img/l5.png","location":"http://www.mietjmu.in/"},{"name":"ASP .Net certified (70-486)","src":"","location":""},{"name":"Coveo certified","src":"","location":""}],"hobbies":["gym","flower","mountain","yoga"]}]')},e4d7:function(t,e,n){t.exports=n.p+"img/twitter.e5ed119f.png"},e6b6:function(t,e,n){t.exports=n.p+"img/location.025845c4.png"},f659:function(t,e,n){},f90d:function(t,e,n){"use strict";var i=n("f659"),a=n.n(i);a.a}});
//# sourceMappingURL=app.0ed39e7f.js.map