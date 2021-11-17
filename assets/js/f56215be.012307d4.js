"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9962],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||c;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6613:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],i={id:"concat"},u=void 0,l={unversionedId:"concat",id:"concat",isDocsHomePage:!1,title:"concat",description:"concat() function",source:"@site/docs/concat.md",sourceDirName:".",slug:"/concat",permalink:"/docs/concat",tags:[],version:"current",frontMatter:{id:"concat"},sidebar:"docs",previous:{title:"compact",permalink:"/docs/compact"},next:{title:"concurrent",permalink:"/docs/concurrent"}},p=[{value:"concat() function",id:"concat-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"concat-function"},"concat() function"),(0,c.kt)("p",null,"Returns the result of concatenating the given iterable."),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function concat<A extends Iterable<unknown> | AsyncIterable<unknown>, B extends Iterable<unknown> | AsyncIterable<unknown>>(a: A, b: B): ReturnConcatType<A, B>;\n\ndeclare function concat<A extends Iterable<unknown> | AsyncIterable<unknown>, B extends Iterable<unknown> | AsyncIterable<unknown>>(a: A): (b: B) => ReturnConcatType<A, B>;\n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = concat([1, 2], [3, 4]);\niter.next() // {done:false, value: 1}\niter.next() // {done:false, value: 2}\niter.next() // {done:false, value: 3}\niter.next() // {done:false, value: 4}\niter.next() // {done:true, value: undefined}\n\n// with pipe\npipe(\n [3, 4],\n concat([1, 2]),\n toArray,\n); // [1, 2, 3, 4]\n\nawait pipe(\n Promise.resolve([3, 4]),\n concat([1, 2]),\n toArray,\n); // [1, 2, 3, 4]\n")),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fxts-concat-mhd7d"},"Try It")),(0,c.kt)("p",null,"see ",(0,c.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,c.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,c.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toArray"},"toArray")))}f.isMDXComponent=!0}}]);