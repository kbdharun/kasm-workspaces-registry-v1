(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4347)}])},4347:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Home}});var a=t(5893),n=t(7294),r=t(9008),o=t.n(r),i=t(1163),components_Workspace=function(e){let{Component:s,pageProps:t,workspace:n}=e,r=(0,i.useRouter)(),viewexample=e=>{r.push({pathname:"/new/[workspace]",query:{workspace:btoa(e.name)}})};return(0,a.jsx)("div",{onClick:()=>viewexample(n),className:"w-[245px] h-[88px] transition-all relative cursor-pointer group flex p-2 items-center justify-center bg-slate-100/90 shadow rounded hover:shadow-xl hover:bg-gradient-to-r hover:from-slate-900 hover:to-cyan-800 hover:text-white",children:(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsxs)("div",{className:"show-grid flex h-full items-center",children:[(0,a.jsx)("div",{className:"kasmcard-img flex h-full mx-4 items-center justify-center",children:(0,a.jsx)("img",{className:"w-[50px] max-h-[66px]",src:"icons/"+n.image_src})}),(0,a.jsxs)("div",{className:"kasmcard-detail settingPad",children:[(0,a.jsx)("h5",{className:"text-base",children:n.friendly_name}),(0,a.jsx)("p",{className:"text-xs opacity-50",children:n.categories&&n.categories[0]||"Unknown"})]})]})})})},l=t(6612),c=t.n(l);function Home(e){let{searchText:s}=e,[t,r]=(0,n.useState)(null),[i,l]=(0,n.useState)(null),[p,d]=(0,n.useState)(null);(0,n.useEffect)(()=>{let e=localStorage.getItem("version")||null;fetch("list.json").then(e=>e.json()).then(s=>{let t=[];s.workspaces.forEach(e=>{e.compatibility&&e.compatibility.forEach(e=>{let s=parseFloat(e);-1===t.indexOf(s)&&t.push(s)})});let a=t.sort((e,s)=>e-s).reverse();l(a),null===e&&(e=a[0],localStorage.setItem("version",e)),d(e),r(s)})},[]);let updateVersion=e=>{localStorage.setItem("version",e),d(e)},x=t&&t.workspaces&&t.workspaces.length>0?[...t.workspaces]:[];x=x.filter(e=>e.compatibility.some(e=>e===p+".x"));let m=s&&s.toLowerCase();return s&&""!==s&&(x=x.filter(e=>{let s=e.categories&&e.categories.length>0?e.categories.filter(e=>e.toLowerCase().includes(m)):[];return e.name.toLowerCase().includes(m)||s.length>0})),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Kasm Workspaces"}),(0,a.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:"p-8 py-10 xl:px-20",children:[(0,a.jsxs)("h1",{className:"flex flex-wrap-reverse uppercase tracking-widest justify-center mb-10 gap-5",children:[(0,a.jsxs)("span",{className:"flex items-center text-lg bg-slate-100/90 rounded overflow-hidden shadow",children:[(0,a.jsx)("span",{className:"flex px-3 text-xs opacity-100",children:"Workspaces"}),(0,a.jsx)("span",{className:"text-white p-3 py-1 flex bg-[#2980b9]",children:t&&t.workspacecount})]}),(0,a.jsxs)("span",{className:"flex items-center text-lg bg-slate-100/90 rounded overflow-hidden shadow",children:[(0,a.jsx)("span",{className:"flex px-3 text-xs opacity-100",children:"Kasm Version"}),(0,a.jsx)("span",{className:"text-white gap-3 p-3 py-1 flex items-center bg-[#2980b9]",children:i&&i.map(e=>(0,a.jsx)("div",{className:"cursor-pointer "+(+e==+p?"text-white":"text-white/50 text-xs"),onClick:()=>updateVersion(e),children:e},e))})]})]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-1 justify-center",children:[x&&x.length>0&&x.map(function(e,s){return(0,a.jsx)(components_Workspace,{workspace:e},e.sha)}),x&&0===x.length&&(0,a.jsxs)("p",{children:["No workspaces found ",""!==s&&'matching "'+s+'"']})]}),(0,a.jsx)("div",{className:c().grid})]})]})}},6612:function(e){e.exports={container:"Home_container__d256j",main:"Home_main__VkIEL",footer:"Home_footer__yFiaX",title:"Home_title__hYX6j",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX"}},9008:function(e,s,t){e.exports=t(9201)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);