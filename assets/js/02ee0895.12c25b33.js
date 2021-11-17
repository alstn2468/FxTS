"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1369],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5509:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],p={id:"peek"},i=void 0,c={unversionedId:"peek",id:"peek",isDocsHomePage:!1,title:"peek",description:"peek() function",source:"@site/docs/peek.md",sourceDirName:".",slug:"/peek",permalink:"/docs/peek",tags:[],version:"current",frontMatter:{id:"peek"},sidebar:"docs",previous:{title:"map",permalink:"/docs/map"},next:{title:"prepend",permalink:"/docs/prepend"}},s=[{value:"peek() function",id:"peek-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"peek-function"},"peek() function"),(0,a.kt)("p",null,"Iterate over an input list, calling a provided ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," for each element in the Iterable/AsyncIterable. Use it when you want to create an effect inside ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function peek<T>(f: (a: T) => unknown, iterable: Iterable<T>): IterableIterator<T>;\n\ndeclare function peek<T>(f: (a: T) => unknown, iterable: AsyncIterable<T>): AsyncIterableIterator<T>;\n\ndeclare function peek<T extends Iterable<unknown> | AsyncIterable<unknown>>(f: (a: IterableInfer<T>) => unknown): (iterable: T) => ReturnIterableIteratorType<T>;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = peek(a => console.log(a), [1, 2, 3, 4]);\niter.next() // {done:false, value: 1} // log 1\niter.next() // {done:false, value: 2} // log 2\niter.next() // {done:false, value: 3} // log 3\niter.next() // {done:false, value: 4} // log 4\n\n// with pipe\npipe(\n [1, 2, 3, 4],\n peek(a => console.log(a)),\n toArray,\n); // [1, 2, 3, 4] // log 1,2,3,4\n\nawait pipe(\n Promise.resolve([1, 2, 3, 4]),\n peek(a => console.log(a)),\n toArray,\n); // [1, 2, 3, 4] // log 1,2,3,4\n\n// with toAsync\nawait pipe(\n [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)],\n toAsync,\n peek(a => console.log(a)),\n toArray,\n); // [1, 2, 3, 4] // log 1,2,3,4\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fxts-peek-xm1jh"},"Try It")),(0,a.kt)("p",null,"see ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toArray"},"toArray")))}f.isMDXComponent=!0}}]);