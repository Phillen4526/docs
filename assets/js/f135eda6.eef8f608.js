"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3132:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>d,default:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905));const i=["components"],p={slug:"/packager/embedding",hide_table_of_contents:!0,sidebar_label:"Embedding"},c="Embedding the packager",l={unversionedId:"packager/embedding",id:"packager/embedding",isDocsHomePage:!1,title:"Embedding the packager",description:"This page only applies to the TurboWarp Packager. If just want an easy way to embed a Scratch project into a website, see the other embedding page.",source:"@site/docs/packager/embedding.md",sourceDirName:"packager",slug:"/packager/embedding",permalink:"/packager/embedding",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/packager/embedding.md",tags:[],version:"current",frontMatter:{slug:"/packager/embedding",hide_table_of_contents:!0,sidebar_label:"Embedding"},sidebar:"packager",previous:{title:"TurboWarp Packager",permalink:"/packager/"},next:{title:"Dynamic stage resize",permalink:"/packager/dynamic-stage-resize"}},d=[],s={toc:d};function m(e){let{components:t}=e,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embedding-the-packager"},"Embedding the packager"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page only applies to the ",(0,o.kt)("a",{parentName:"p",href:"https://turbowarp.org/"},"TurboWarp Packager"),". If just want an easy way to embed a Scratch project into a website, see ",(0,o.kt)("a",{parentName:"p",href:"/embedding"},"the other embedding page"),"."))),(0,o.kt)("p",null,"You can embed the output of the TurboWarp Packager into another website:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="path_to_project.html" width="480" height="360" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>\n')),(0,o.kt)("p",null,"Depending on the environment you used, where you stored the project, and what you named it, the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," attribute will vary."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'If you used "Plain HTML", it\'s just the path to the HTML file.'),(0,o.kt)("li",{parentName:"ul"},'If you used "Zip", it\'s the path to the file ',(0,o.kt)("inlineCode",{parentName:"li"},"index.html")," contained within the extracted zip.")),(0,o.kt)("p",null,"If you have controls enabled, add 48 to the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," to avoid the stage getting shrunk."))}m.isMDXComponent=!0}}]);