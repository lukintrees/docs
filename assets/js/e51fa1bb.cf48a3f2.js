"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[2786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,f=d["".concat(o,".").concat(g)]||d[g]||p[g]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3,description:"When things go wrong."},i="Troubleshooting",s={unversionedId:"users/getting-started/troubleshooting",id:"users/getting-started/troubleshooting",title:"Troubleshooting",description:"When things go wrong.",source:"@site/docs/users/getting-started/troubleshooting.md",sourceDirName:"users/getting-started",slug:"/users/getting-started/troubleshooting",permalink:"/users/getting-started/troubleshooting",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"When things go wrong."},sidebar:"usersSidebar",previous:{title:"Configuration",permalink:"/users/getting-started/configuration"},next:{title:"FAQ",permalink:"/users/getting-started/faq"}},o={},u=[{value:"Crashes",id:"crashes",level:2},{value:"Installation",id:"installation",level:2},{value:"General Issues",id:"general-issues",level:3},{value:"Specific Errors",id:"specific-errors",level:3}],c={toc:u};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you need help beyond what these docs provide, please contact us in ",(0,a.kt)("inlineCode",{parentName:"p"},"#support")," on our ",(0,a.kt)("a",{parentName:"p",href:"https://betterdiscord.app/invite"},"discord server"))),(0,a.kt)("h2",{id:"crashes"},"Crashes"),(0,a.kt)("p",null,"Crashing when using BetterDiscord can be frustrating. Here are some helpful tips to solve your issues."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u26a0\ufe0f BetterDiscord seems to have crashed your client."),(0,a.kt)("p",null,"This is a very generic error that could mean any number of things. It also doesn't necessarily mean BetterDiscord was at fault. It could have been a plugin or even Discord itself. It's just difficult for BetterDiscord to tell who is the cause so it catches them all."),(0,a.kt)("p",null,"Fixing issues like this involves the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Switching to Stable from Canary or PTB"),(0,a.kt)("li",{parentName:"ul"},"Manually updating library plugins"),(0,a.kt)("li",{parentName:"ul"},"Removing unofficial plugins"),(0,a.kt)("li",{parentName:"ul"},"Rename the plugin folder"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'"Well, this is awkward" or "You died, looks like you got slaughtered by an Error Level 9000"'),(0,a.kt)("p",null,"This type of error is usually caused by plugins or BetterDiscord being out of date. Ensure your copy of BetterDiscord and your plugins and keys are up to date.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This section goes over common issues and pitfalls when trying to install BetterDiscord."),(0,a.kt)("h3",{id:"general-issues"},"General Issues"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Cannot select stable, or BetterDiscord not installed after installing"),(0,a.kt)("p",null,"This is usually an issue with Discord moving around its installation location on Windows. Sometimes the installer is unable to differentiate what to do. To fix it, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Browse")," in the installer, then enter ",(0,a.kt)("inlineCode",{parentName:"p"},"%localappdata%/discord/app-1.0.9006/resources")," in the address bar at the top. If this has the same issue repeat this but using ",(0,a.kt)("inlineCode",{parentName:"p"},"%programdata%/%username%/Discord/app-1.0.9006/resources")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ProgramData",src:n(2483).Z,width:"740",height:"480"}))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Installer won't open"),(0,a.kt)("p",null,"If you are on Linux try rnning with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-sandbox")),(0,a.kt)("p",null,"If the installer does not seem to open, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and install ",(0,a.kt)("a",{parentName:"li",href:"https://www.7-zip.org/"},"7-Zip")),(0,a.kt)("li",{parentName:"ol"},"Right click and extract the BetterDiscord installer into a folder."),(0,a.kt)("li",{parentName:"ol"},"Run the exe found in the folder.")),(0,a.kt)("p",null,"OR"),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation/#manual-installation"},"manual installation")," instruction.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Installer is all black"),(0,a.kt)("p",null,"Try one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Right click the installer and select run as Administrator."),(0,a.kt)("li",{parentName:"ul"},"Open the command prompt by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"win"),"+",(0,a.kt)("inlineCode",{parentName:"li"},"r")," type ",(0,a.kt)("inlineCode",{parentName:"li"},"cmd")," and press enter. Then type ",(0,a.kt)("inlineCode",{parentName:"li"},"ipconfig /flushdns")," and press enter in the window that appears."),(0,a.kt)("li",{parentName:"ul"},"Disable your anti-virus temporarily.")),(0,a.kt)("p",null,"OR"),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation/#manual-installation"},"manual installation")," instruction.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Cannot click the agreement checkbox"),(0,a.kt)("p",null,"Click the text next to the checkbox instead, they are connected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Checkbox Workaround",src:n(2565).Z,width:"235",height:"36"}))),(0,a.kt)("h3",{id:"specific-errors"},"Specific Errors"),(0,a.kt)("details",null,(0,a.kt)("summary",null,'\u274c Cannot read property "assets" of undefined" OR installer freezing at "downloading asar file..."'),(0,a.kt)("p",null,"Your installer is out of date, please go to the ",(0,a.kt)("a",{parentName:"p",href:"https://betterdiscord.app"},"BetterDiscord website")," and download a new one.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,'\u274c EACCES: permission denied, mkdir", or any error where at "shims" there is a "mkdir" error'),(0,a.kt)("p",null,"The Discord installation has been corrupted. Try to reinstall Discord. If Discord fails to reinstall or you still run into this error then your best bet is ",(0,a.kt)("a",{parentName:"p",href:"https://discordtips.com/how-to-fully-uninstall-discord/"},"cleanly uninstalling Discord")," then installing it again.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,'\u274c Cannot read property "hasOwnProperty" of undefined" error'),(0,a.kt)("p",null,"Fully close Discord. Fully deactivate any VPNs or firewalls. Make sure your installer is up to date. Then try again. If that still doesn't work, see the previous entry about cleanly removing and resinstalling Discord.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,'\u274c getaddrinfo ENOTFOUND api.github.com"'),(0,a.kt)("p",null,"Disable your antivirus or swap your DNS servers. There is a good guide to do the latter found here: ",(0,a.kt)("a",{parentName:"p",href:"https://www.ionos.com/digitalguide/server/configuration/how-to-change-dns-server/"},"https://www.ionos.com/digitalguide/server/configuration/how-to-change-dns-server/"))))}p.isMDXComponent=!0},2565:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},2483:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/programdata-6afe0d7fcc5bf62c270c2d92898c9cb2.gif"}}]);