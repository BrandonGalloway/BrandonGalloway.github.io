(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/profile.859e3fee.jpg"},17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),i=t.n(l),s=(t(22),t(2)),c=t(3),m=t(5),o=t(4),d=t(6),u=t(16),p=t.n(u),b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),a}(n.Component),g=t(7),h=t(11),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).landingData=e.landingData,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(g.a,{icon:h.c})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(g.a,{icon:h.a})),r.a.createElement("a",{href:this.landingData.gitlab},r.a.createElement(g.a,{icon:h.b})))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).experience=e.experience,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).education=e.education,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),v=t(10),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).skills=e.skills,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:v.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).interests=e.interests,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).awards=e.awards,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(g.a,{icon:v.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))}))))}}]),a}(n.Component),O=t(8),D=t(13),y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={landingData:O.landing,experience:O.experience,education:O.education,skills:O.skills,interests:O.interests,awards:O.awards},D.a.initialize("UA-158818625-1"),D.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(E,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(f,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{awards:this.state.awards})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={landing:{firstName:"Brandon",lastName:"Galloway",phoneNumber:"",bio:"BIO",email:"brandon.w.galloway@gmail.com",linkedin:"https://linkedin.com/in/brandon-galloway",github:"https://github.com/BrandonGalloway",gitlab:"https://gitlab.com/Brandon_Galloway"},experience:[{position:"Software Developer Internship",organization:"COUNTRY Financial",aboutWork:"DESCRIPTION",fromDate:"May 2019",toDate:"Present"},{position:"Student Researcher",organization:"InterLabs Research Institute",aboutWork:"DESCRIPTION",fromDate:"April 2019",toDate:"Present"},{position:"Lead Software Engineer",organization:"We Hear You",aboutWork:"DESCRIPTION",fromDate:"October 2019",toDate:"Present"}],education:[{university:"Bradley University",degree:"Bachelor of Computer Science",gpa:"GPA",fromDate:"August 2016",toDate:"Present"}],skills:[{name:"Skill"},{name:"Skill"},{name:"Skill"},{name:"Skill"},{name:"Skill"},{name:"Skill"}],interests:{paragraphOne:"PARA1",paragraphTwo:"PARA2"},awards:[{awardDetail:"State Farm Coding Competition 2019 Finalist"},{awardDetail:"Bradley University 2019 Best Software Engineering Project Award"},{awardDetail:"Bradley University Social Impact Challenge 2019 1st Place Award"}],certifications:[{awardDetail:"State Farm Coding Competition 2019 Finalist"},{awardDetail:"Bradley University 2019 Best Software Engineering Project Award"},{awardDetail:"Bradley University Social Impact Challenge 2019 1st Place Award"}]}}},[[17,1,2]]]);
//# sourceMappingURL=main.482fe718.chunk.js.map