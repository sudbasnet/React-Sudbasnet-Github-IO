(this["webpackJsonpsudbasnet.github.io"]=this["webpackJsonpsudbasnet.github.io"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),r=a(15),o=a.n(r),c=(a(27),a(28),a(7)),l=a(2),d=Object(l.f)((function(e){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("nav",{className:"nav",children:Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)(c.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/",children:"01.Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(c.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/resume",children:"02.Resume"})}),Object(s.jsxs)("li",{className:"wip-tooltip-container",children:[Object(s.jsx)(c.b,{className:"nav-link disabled",exact:!0,to:"/adventures",children:"03.Adventures"}),Object(s.jsx)("span",{className:"wip-tooltip-text",children:Object(s.jsx)("span",{children:"Working On It \ud83d\ude13"})})]})]})})})})),u=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsxs)("ul",{className:"footer-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"footer-link",href:"https://github.com/sudbasnet",children:"Github"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"footer-link",href:"https://www.linkedin.com/in/sudeepbasnet/",children:"LinkedIn"})})]})})},m=a(17),h=a(18),j=a(21),b=a(19),p=function(e){var t={dummy:{tags:"",message:"",questions:[{id:-99,question:"",goto:""}]}};return e.forEach((function(e){var a=e.body.split("\n"),s=/^\[\[.*\]\]$/,n=[{id:-99,question:"",goto:""}];a.forEach((function(e,t){if(s.test(e)){var a=e.replace("[[","").replace("]]","");n.push({id:t,question:a.split("|")[0],goto:a.split("|")[1]})}})),t[e.title]={tags:"",message:a[0],questions:n}})),t}([{title:"Start",tags:"",body:"Hi. I'm Sudeep... Welcome to my website.\n[[Valar Morghulis!|valar]]\n[[Howdy!|conversation]]\n[[Hey!|conversation]]\n",position:{x:-868,y:-337},colorId:2},{title:"conversation",tags:"",body:"hmm..\n[[Tell me about yourself.|intro]]",position:{x:-595,y:-134},colorId:1},{title:"valar",tags:"",body:"Valar Dohaeris!\n[[hmm...|conversation]]\n",position:{x:-593,y:-428},colorId:0},{title:"intro",tags:"",body:"I am currently working as a Technical Consultant in Minnepolis. In 2019, I got my Master's in Computer Science. Before that, I used to work in a hybrid role functioning as a Data Engineer and Software Developer. \n[[Tell me about your current position.|logic]]\n[[Where did you graduate from?|mscs]]\n[[Tell me about your old job.|work]]\n\n",position:{x:-288,y:-130},colorId:0},{title:"mscs",tags:"",body:"I got my M.Sc. degree in Aug-2019 from the University of Nebraska - Lincoln.\n[[Why did you get a Master's degree?|whymasters]]\n[[What was your focus on during your studies?|gradwork]]\n[[And what was your previous work about?|work]]",position:{x:7,y:138},colorId:0},{title:"jobsearch",tags:"",body:"I'm open to new opportunities\n[[What are your interests?|interests]]",position:{x:657,y:-137},colorId:0},{title:"interests",tags:"",body:"I think of myself as a generalist, but I aim to be a Software Engineer, preferably fullstack, or backend. \n[[What kind of skills you got?|skills]]\n[[How do I contact you?|email]]",position:{x:939,y:-136},colorId:0},{title:"skills",tags:"",body:"I'm pretty good with Python, TypeScript, C#, React, Vue, R, and HTML/CSS. I'm also experienced in Academic Research, Data Engineering, Systems Admin.(LINUX), Cloud DataWarehousing.\n[[Lets look at your resume.|resume]]\n[[How can we get in touch?|email]]",position:{x:1227,y:-137},colorId:0},{title:"work",tags:"",body:"I mostly worked on the data side with Oracle PL/SQL and Java to develop ETL tools and data warehouses for large-scale Enterprises, in the Healthcare analytics domain.\n[[So, why do Masters?|whymasters]]\n[[Did you also work during your studies?|gradwork]]\n[[Where can I find more details?|resumepre]]\n",position:{x:9,y:-206},colorId:0},{title:"email",tags:"",body:"You can contact me through email: sudbasnet10@gmail.com\n[[And your resume? |resume]]",position:{x:1061,y:142},colorId:0},{title:"gradwork",tags:"",body:"I think getting a masters degree was one of the best decision of my life. I learned alot, worked on research and development on spatial-data mining and Agent-based Modeling. I used Python, Java, R, JavaScript and SQL.\n[[I'd like to know more.|resumepre]]\n[[Still looking for jobs?|jobsearch]]\n",position:{x:370,y:-126},colorId:0},{title:"whymasters",tags:"",body:"I thought I had some gaps in my knowledge, so I decided to study Computer Science ... It was also for getting better job oppurtunities in Software Engineering. :)\n[[How did it go?|gradwork]]",position:{x:355,y:139},colorId:0},{title:"resumepre",tags:"",body:"Please have a look at my resume.\n[[Are you open to new job opportunities?|jobsearch]]",position:{x:373,y:-392},colorId:0},{title:"resume",tags:"",body:"You can download my resume here:\n[[RESTART!|Start]]",position:{x:1413,y:139},colorId:0},{title:"logic",tags:"",body:"I've been working at Logic since Oct-2019 as a Technical Consultant. My exact role depends on the client I am working with, my main roles have been Software Developer, Data Engineer, and BI Developer.\n[[And the work before that?|work]]\n[[And your masters?|mscs]]",position:{x:-296,y:132},colorId:0}]),g=(a(34),a(20)),y=a.p+"static/media/basnet.e890ba3d.pdf",f=function(){return Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:y,className:"about-link",download:"basnet-resume.pdf",children:"[Download]"})},x=function(e){var t=e.dialog,a=Object(n.useState)(0),i=Object(g.a)(a,2),r=i[0],o=i[1],c=e.waitTimeMs,l=e.attachResume;return Object(n.useEffect)((function(){return o(0)}),[t]),Object(n.useEffect)((function(){if(r!==t.length){var e=setTimeout((function(){o((function(e){return e+1}))}),c);return function(){return clearTimeout(e)}}}),[r,c,t]),l&&r>=t.length-1?Object(s.jsxs)("span",{children:[t," ",Object(s.jsx)(f,{})]}):Object(s.jsx)("span",{children:t.substring(0,r)})},O=function(e){var t=!1;return"resumepre"!==e.dialogKey&&"resume"!==e.dialogKey||(t=!0),Object(s.jsxs)("div",{className:"dialog-box",children:[Object(s.jsx)("span",{className:"dialog-span typed-element"}),Object(s.jsx)(x,{dialog:e.dialog,waitTimeMs:30,attachResume:t})]})},v=function(e){return Object(s.jsxs)("button",{className:"q-button",onClick:function(){return e.updateDialog(e.goto)},children:["* ",e.question,Object(s.jsx)("span",{className:"blinking",children:"_"})]})},k=function(e){return Object(s.jsxs)("div",{className:"terminal-text",children:[Object(s.jsx)(O,{dialogKey:e.dialogKey,dialog:e.dialog}),Object(s.jsx)("span",{className:"static-text",children:"Please select from below to know more."}),Object(s.jsx)("div",{children:Object(s.jsx)("ul",{className:"question-list",children:e.questions.filter((function(e){return e.id>0})).map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)(v,{question:t.question,goto:t.goto,updateDialog:e.updateDialog},t.id)},t.id)}))})})]})},w=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"key email",children:["sudbasnet10@gmail.com ",Object(s.jsx)("br",{})," ---------------------"]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"Name:"})," Sudeep Basnet"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"Interests:"})," Software Development"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"Skills:"})," Python, TypeScript, C#, SQL, NoSQL"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"Other:"})," Node, React, Vue, Database Design, GIT"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"Status:"})," Open to Job Oppurtunities"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"2019/10 - Current:"})," Technical Consultant"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"2016/01 - 2019/09:"})," Grad. Research Assistant"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"2012/07 - 2016/12:"})," Data/Software Engineer"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"Education:"})," M.S. in Computer Science (2019)"]}),Object(s.jsxs)("li",{className:"summary-li",children:[Object(s.jsx)("span",{className:"key",children:"Resume:"})," ",Object(s.jsx)(f,{})]})]})]})},N=function(e){return Object(s.jsxs)("ul",{className:"tab-bar-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:"tab-bar-link "+("default"===e.displayTab?"tab-active":""),onClick:function(){return e.changeTab("default")},children:"ABOUT ME"})}),Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:"tab-bar-link "+("summary"===e.displayTab?"tab-active":""),onClick:function(){return e.changeTab("summary")},children:"SUMMARY"})})]})},S=function(e){var t=Object(s.jsx)(w,{});return"default"===e.displayTab&&(t=Object(s.jsx)(k,{dialogKey:e.dialogKey,dialog:e.dialog,questions:e.questions,updateDialog:e.updateDialog})),Object(s.jsx)("div",{className:"terminal-section",children:Object(s.jsxs)("div",{className:"terminal-content",children:[Object(s.jsx)(N,{displayTab:e.displayTab,changeTab:e.changeTab}),t]})})},I=a.p+"static/media/sbasnet.c271e044.gif",D=function(){return Object(s.jsx)("div",{className:"game",children:Object(s.jsx)("img",{className:"pixi-game",src:I,alt:"placeholder"})})},T="Start",C=p.Start,A=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).state=void 0,s.state={dialogKey:T,dialog:C.message,questions:C.questions,displayTab:"default"},s}return Object(h.a)(a,[{key:"updateDialogHandler",value:function(e){var t=p[e].message,a=p[e].questions;this.setState({dialogKey:e,dialog:t,questions:a})}},{key:"changeTabHandler",value:function(e){var t=this.state.displayTab;if(e!==t){var a="default"===t?"summary":"default";this.setState({displayTab:a})}}},{key:"render",value:function(){var e=this.state.questions,t=this.state.dialog,a=this.state.displayTab,n=this.state.dialogKey;return Object(s.jsxs)("main",{className:"main",children:[Object(s.jsx)(D,{}),Object(s.jsx)(S,{dialog:t,dialogKey:n,questions:e,displayTab:a,changeTab:this.changeTabHandler.bind(this),updateDialog:this.updateDialogHandler.bind(this)})]})}}]),a}(n.Component),M=(a(35),function(){return Object(s.jsxs)("main",{className:"main-resume",children:[Object(s.jsx)("h2",{className:"heading1",children:"Summary"}),Object(s.jsx)("p",{children:"A dedicated problem solver with professional experience in Software Development and Data Engineering. Graduated with a master\u2019s degree in Computer Science from the University of Nebraska - Lincoln (Aug-2019). Has worked in Agile methodology, with large teams, and worked in Python, C#, Java, SQL and JavaScript on Windows and Unix platforms. Interested in Software Development."}),Object(s.jsx)("h3",{className:"heading2",children:"Programming Skills:"}),Object(s.jsx)("p",{children:"Python, C#, Typescript, JavaScript, HTML/CSS, R, SQL, NoSQL"}),Object(s.jsx)("p",{children:"Python might be my favorite programming language at the moment, especially for technical interviews and some personal projects. I have trained and worked with C# and TypeScript for my current job, I focused more on TypeScript and I enjoy it a bit more than any of the other languages I've recently learned, TypeScript is very stable, and there's alot of support for it these days, and you can do the whole MERN MEVN and MEAN stack with TypeScript. If I get more time, I'd like to do more C++, I have done some C++ in the past but only for small projects so I'd like to try building something useful with it. "})," ",Object(s.jsx)("p",{children:" I have also worked extensively with SQL, Databases, and Data Models in my Data Engineering roles. It is where a substantial portion of my experience lie, but my primary interest area is Software Engineering."}),Object(s.jsx)("h3",{className:"heading2",children:"Other Technical Skills:"}),Object(s.jsx)("p",{className:"no-justify",children:"NodeJS, React, Vue, GIT and SVN, Data Analysis, Data Visualization, Database Development, Azure DevOps, JIRA, Snowflake Cloud Data Warehouse, MicroStrategy"}),Object(s.jsx)("h2",{className:"heading1",children:"Work Experience"}),Object(s.jsxs)("h3",{className:"job-title",children:["Technical Consultant",Object(s.jsx)("div",{className:"duration",children:" Oct 2019 \u2013 Current"})]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"resume-link",href:"https://www.logicinfo.com/",children:"Logic Information Systems, Bloomington, MN, USA"})}),Object(s.jsx)("p",{children:" My experience at Logic varies with each client, Logic\u2019s clients range from mid-sized retailers to some of the largest retailers in the world, across nearly every type of retail business model including grocery, hardlines, softlines, fashion, and government. My main roles so far have been as a Software Developer, Data Engineer, and BI Developer. "}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Developed omni-channel e-commerce solutions with C#, TypeScript, and HTML/CSS in .NET and .NET Core."}),Object(s.jsx)("li",{children:"Developed korn shell-script programs for data manipulation and application of business specific logic in Oracle\u2019s enterprise data warehouse."}),Object(s.jsx)("li",{children:"Designed Cloud Data Warehouse in Snowflake along with stored procedures in JavaScript, and automated data loading with Python."}),Object(s.jsx)("li",{children:"Debugged and resolved issues in reporting dashboards in MicroStrategy Developer, MicroStrategy Architect and MicroStrategy Intelligence Server."})]}),Object(s.jsxs)("h3",{className:"job-title",children:["Graduate Research and Teaching Assistant",Object(s.jsx)("div",{className:"duration",children:" Jan 2017 \u2013 Aug 2019"})]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"resume-link",href:"https://cse.unl.edu/",children:"University of Nebraska \u2013 Lincoln (UNL)"})}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Developed Agent-based simulation models to simulate and predict social unrest on a geographic and temporal scale, in Repast Java. ",Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"resume-link",href:"https://github.com/sudbasnet/SocialUnrestMAS",children:"Github Link"})]}),Object(s.jsx)("li",{children:"Developed a scalable clustering algorithm using Python to perform unsupervised learning on GIS data, with performance gain up to 60% compared to state-of-art algorithms. Published and presented Research Paper."}),Object(s.jsx)("li",{children:"Data Mining, Data Analysis and Data Management using Python and R, utilizing parallel computing on Nebraska\u2019s second-fastest High-Performance Computing servers."}),Object(s.jsxs)("li",{children:["Development and management of PHP backed application, and Data Visualization using HTML/CSS, KnockoutJS, Google Maps JavaScript API and MySQL database. ",Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"resume-link",href:"https://cse.unl.edu/~surge/",children:"View"})]})]}),Object(s.jsxs)("h3",{className:"job-title",children:["Data/Software Engineer",Object(s.jsx)("div",{className:"duration",children:"July 2012 \u2013 Dec 2016"})]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"resume-link",href:"http://cotiviti.com.np/",children:"Cotiviti Nepal, Kathmandu, Nepal (Subsidiary of Cotiviti Healthcare, Waltham MA)"})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Data Analysis of US healthcare data (HIPAA protected medical data). Prepared Analytical Reports per client-requirements using OBIEE and BIP."}),Object(s.jsx)("li",{children:"Implemented Oracle PL/SQL procedures, functions, triggers and packages for data management and statistical report generation on US healthcare data."}),Object(s.jsx)("li",{children:"Developed ETL procedures, documented and validated complex business rules for data transformation. Prepared technical specification, reviewed code, and performed unit testing for client-specific change requests."}),Object(s.jsx)("li",{children:"Optimized multiple large ETL processes by 60 \u2013 70% in processing time using parallelization, re-designing back-end jobs, performance tuning, normalization and query optimization."}),Object(s.jsx)("li",{children:"Led multiple teams of Data and Software Engineers through different projects for 2 years. Responsible for Code Quality, Code Reviews, Design Reviews, Code documentation and Design documentation for maintainability."}),Object(s.jsx)("li",{children:"Software Development using Java and Oracle 11g on Windows and UNIX platforms for 1 year. Involved in Integration, Analysis, Design & Development, Testing and Production support phases."})]}),Object(s.jsx)("h2",{className:"heading1",children:"Education"}),Object(s.jsxs)("h3",{className:"job-title",children:["Master of Science, Computer Science",Object(s.jsx)("div",{className:"duration",children:"Jan 2017 \u2013 August 2019"})]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"resume-link",href:"https://cse.unl.edu/",children:"University of Nebraska \u2013 Lincoln"})}),Object(s.jsxs)("p",{className:"no-justify",children:[Object(s.jsx)("strong",{children:"Relevant Courses"}),": ",Object(s.jsx)("br",{}),"Design and Analysis of Algorithms, Data Structures, Machine Learning, Systems Administration"]}),Object(s.jsx)("form",{id:"download",target:"_blank",method:"get",action:y,children:Object(s.jsx)("button",{id:"btn-download",type:"submit",children:"Download Resume"})})]})}),L=function(){return Object(s.jsx)("div",{})},E=function(){return Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/resume",exact:!0,component:M}),Object(s.jsx)(l.a,{path:"/adventures",exact:!0,component:L}),Object(s.jsx)(l.a,{component:A})]})},R=Object(l.f)((function(e){var t=e.location.pathname.substring(1);return 0===t.length&&(t="home"),Object(s.jsxs)("div",{className:"wrapper-"+t,children:[Object(s.jsx)(d,{}),Object(s.jsx)(E,{}),Object(s.jsx)(u,{})]})})),P=function(){return Object(s.jsx)(c.a,{children:Object(s.jsx)(R,{})})};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.28247006.chunk.js.map