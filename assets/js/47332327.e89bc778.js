"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3173],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return y}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),y=a,d=f["".concat(u,".").concat(y)]||f[y]||p[y]||i;return n?t.createElement(d,o(o({ref:r},s),{},{components:n})):t.createElement(d,o({ref:r},s))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3758:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var t=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"isArray"},u=void 0,l={unversionedId:"isArray",id:"isArray",isDocsHomePage:!1,title:"isArray",description:"isArray() function",source:"@site/docs/isArray.md",sourceDirName:".",slug:"/isArray",permalink:"/docs/isArray",tags:[],version:"current",frontMatter:{id:"isArray"},sidebar:"docs",previous:{title:"indexBy",permalink:"/docs/indexBy"},next:{title:"isString",permalink:"/docs/isString"}},s=[{value:"isArray() function",id:"isarray-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:s};function f(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"isarray-function"},"isArray() function"),(0,i.kt)("p",null,"Returns true if ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," is an Array."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function isArray(a: any): a is any[];\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"isArray([1, 2, 3]); // true\nisArray(2); // false\n")))}f.isMDXComponent=!0}}]);