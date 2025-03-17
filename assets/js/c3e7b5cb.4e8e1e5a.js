"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8085],{2166:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/hust-272d19e1f2c270fd2f999873cd2b8394.png"},2465:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/zju-df2439c99a68a40c1cf95116874cf7a3.png"},3119:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/whaleops-549b2575ff2428cfa61b19b79aa3b394.png"},3567:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/vs_join_total_time_en-f59afdf2679cbc45b2e11f3588dcb9be.jpg"},4605:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/fu-e2c309be360aaf93d964178ed000dab0.png"},7310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(4848),s=t(8453);const i={},r="Guide",l={id:"guide",title:"Guide",description:"Here is the documentation map to help users quickly learn and use geaflow.",source:"@site/../docs-en/source/1.guide.md",sourceDirName:".",slug:"/guide",permalink:"/tugraph-analytics/en/guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/tugraph-analytics/en/introduction"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Development Manual",id:"development-manual",level:2},{value:"Real-time Capabilities",id:"real-time-capabilities",level:2},{value:"Partners",id:"partners",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"guide",children:"Guide"})}),"\n",(0,a.jsx)(n.p,{children:"Here is the documentation map to help users quickly learn and use geaflow."}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"TuGraph Analytics"})," (alias: GeaFlow) is the ",(0,a.jsx)(n.a,{href:"https://ldbcouncil.org/benchmarks/snb-bi/",children:(0,a.jsx)(n.strong,{children:"fastest"})})," open-source OLAP graph database developed by Ant Group. It supports core capabilities such as trillion-level graph storage, hybrid graph and table processing, real-time graph computation, and interactive graph analysis. Currently, it is widely used in scenarios such as data warehousing acceleration, financial risk control, knowledge graph, and social networks."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about GeaFlow: ",(0,a.jsx)(n.a,{href:"/tugraph-analytics/en/introduction",children:"GeaFlow Introduction"})]}),"\n",(0,a.jsxs)(n.p,{children:["For GeaFlow design paper: ",(0,a.jsx)(n.a,{href:"https://dl.acm.org/doi/abs/10.1145/3589771",children:"GeaFlow: A Graph Extended and Accelerated Dataflow System"})]}),"\n",(0,a.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsx)(n.p,{children:"Step 1: Package the JAR and submit the Quick Start task"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Prepare Git\u3001JDK8\u3001Maven\u3001Docker environment\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["Download Code\uff1a",(0,a.jsx)(n.code,{children:"git clone https://github.com/TuGraph-family/tugraph-analytics"})]}),"\n",(0,a.jsxs)(n.li,{children:["Build Project\uff1a",(0,a.jsx)(n.code,{children:"./build.sh --module=geaflow --output=package"})]}),"\n",(0,a.jsxs)(n.li,{children:["Test Job\uff1a",(0,a.jsx)(n.code,{children:"./bin/gql_submit.sh --gql geaflow/geaflow-examples/gql/loop_detection_file_demo.sql"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Step 2: Launch the console and experience submitting the Quick Start task through the console\n5. Build console JAR and image (requires starting Docker)\uff1a",(0,a.jsx)(n.code,{children:"./build.sh --module=geaflow-console"}),"\n6. Start Console\uff1a",(0,a.jsx)(n.code,{children:"docker run -d --name geaflow-console -p 8888:8888 geaflow-console:0.1"})]}),"\n",(0,a.jsxs)(n.p,{children:["For more details\uff1a",(0,a.jsx)(n.a,{href:"/tugraph-analytics/en/quick_start/quick_start",children:"Quick Start"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"development-manual",children:"Development Manual"}),"\n",(0,a.jsx)(n.p,{children:"GeaFlow supports two sets of programming interfaces: DSL and API. You can develop streaming graph computing jobs using GeaFlow's SQL extension language SQL+ISO/GQL or use GeaFlow's high-level API programming interface to develop applications in Java."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["DSL application development: ",(0,a.jsx)(n.a,{href:"/tugraph-analytics/en/application-development/dsl/overview",children:"DSL Application Development"})]}),"\n",(0,a.jsxs)(n.li,{children:["API application development: ",(0,a.jsx)(n.a,{href:"/tugraph-analytics/en/application-development/api/overview",children:"API Application Development"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"real-time-capabilities",children:"Real-time Capabilities"}),"\n",(0,a.jsx)(n.p,{children:"Compared with traditional stream processing engines such as Flink and Storm, which use tables as their data model for real-time processing, GeaFlow's graph-based data model has significant performance advantages when handling join relationship operations, especially complex multi-hops relationship operations like those involving 3 or more hops of join and complex loop searches."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/tugraph-analytics/en/reference/vs_join",children:(0,a.jsx)(n.img,{alt:"total_time",src:t(3567).A+"",width:"1024",height:"354"})})}),"\n",(0,a.jsx)(n.h2,{id:"partners",children:"Partners"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://github.com/CGCL-codes/YiTu",children:(0,a.jsx)(n.img,{alt:"HUST",src:t(2166).A+"",width:"2967",height:"694"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"http://kw.fudan.edu.cn/",children:(0,a.jsx)(n.img,{alt:"FU",src:t(4605).A+"",width:"1904",height:"362"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.img,{alt:"ZJU",src:t(2465).A+"",width:"564",height:"104"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"http://www.whaleops.com/",children:(0,a.jsx)(n.img,{alt:"WhaleOps",src:t(3119).A+"",width:"2317",height:"448"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://github.com/oceanbase/oceanbase",children:(0,a.jsx)(n.img,{alt:"OceanBase",src:t(9817).A+"",width:"3222",height:"432"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://github.com/secretflow/secretflow",children:(0,a.jsx)(n.img,{alt:"SecretFlow",src:t(9258).A+"",width:"640",height:"193"})})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}},9258:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/secretflow-0dea0a2c6b41554b99c015bbfb7633fb.png"},9817:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/oceanbase-8faf5af37ba2b8fc476d616a5fd325e7.png"}}]);