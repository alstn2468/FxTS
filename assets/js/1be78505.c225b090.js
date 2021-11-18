"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,4608],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9784:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var a=n(7294),r=n(3905),l=n(6291),o=n(4814),i=n(6010),c=n(2822),s=n(3783),u=n(5537),d=n(7462),m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(5999),f=n(3366),h=n(9960),b=n(3919),v=n(541),E="menuLinkText_1J2g",g=["items"],y=["item"],k=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],C=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,g);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,d.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,f.Z)(e,y);return"category"===t.type?0===t.items.length?null:a.createElement(_,(0,d.Z)({item:t},n)):a.createElement(S,(0,d.Z)({item:t},n))}function _(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,o=e.level,s=(0,f.Z)(e,k),u=n.items,m=n.label,p=n.collapsible,h=n.className,b=C(n,l),v=(0,c.uR)({initialState:function(){return!!p&&(!b&&n.collapsed)}}),g=v.collapsed,y=v.setCollapsed,Z=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:b,collapsed:g,setCollapsed:y}),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":g},h)},a.createElement("a",(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&b},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),Z()}:void 0,href:p?"#":void 0},s),m),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.createElement(N,{items:u,tabIndex:g?-1:0,onItemClick:r,activePath:l,level:o+1})))}function S(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(0,f.Z)(e,Z),s=t.href,u=t.label,m=t.className,p=C(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(h.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:n},o),(0,b.Z)(s)?u:a.createElement("span",null,u,a.createElement(v.Z,null))))}var O="sidebar_15mo",I="sidebarWithHideableNavbar_267A",w="sidebarHidden_2kNb",P="sidebarLogo_3h0W",M="menu_Bmed",x="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",j="collapseSidebarButtonIcon_3E-R";function L(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(m,{className:j}))}function D(e){var t,n,r=e.path,l=e.sidebar,o=e.onCollapse,s=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(O,(t={},t[I]=p,t[w]=s,t))},p&&a.createElement(u.Z,{tabIndex:-1,className:P}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",M,(n={},n[x]=d,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:l,activePath:r,level:1}))),f&&a.createElement(L,{onClick:o}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function B(e){return a.createElement(c.Cv,{component:F,props:e})}var R=a.memo(D),H=a.memo(B);function W(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(R,e),r&&a.createElement(H,e))}var V=n(2859),z=n(7743),Y=n(9649),J="details_1VDD";function U(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,d.Z)({},t,{className:(0,i.Z)("alert alert--info",J,t.className)}))}var K=["mdxType","originalType"];var X={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,f.Z)(r,K));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(V.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(z.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(h.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(z.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(U,(0,d.Z)({},e,{summary:n}),r)},h1:(0,Y.Z)("h1"),h2:(0,Y.Z)("h2"),h3:(0,Y.Z)("h3"),h4:(0,Y.Z)("h4"),h5:(0,Y.Z)("h5"),h6:(0,Y.Z)("h6")},q=n(4608),G="backToTopButton_35hR",Q="backToTopButtonShow_18ls";function $(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var ee=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=$(),s=o.smoothScrollTop,u=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var o=n<a;if(o||u(),n<300)r(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,G,(e={},e[Q]=n,e)),type:"button",onClick:function(){return s()}})},te=n(6775),ne={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function ae(e){var t,n,l,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,f=u.pluginId,h=u.version,b=s.sidebar,v=b?u.docsSidebars[b]:void 0,E=(0,a.useState)(!1),g=E[0],y=E[1],k=(0,a.useState)(!1),Z=k[0],C=k[1],N=(0,a.useCallback)((function(){Z&&C(!1),y((function(e){return!e}))}),[Z]);return a.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,c.os)(f,h)}},a.createElement("div",{className:ne.docPage},a.createElement(ee,null),v&&a.createElement("aside",{className:(0,i.Z)(ne.docSidebarContainer,(t={},t[ne.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ne.docSidebarContainer)&&g&&C(!0)}},a.createElement(W,{key:b,sidebar:v,path:s.path,onCollapse:N,isHidden:Z}),Z&&a.createElement("div",{className:ne.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:ne.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(ne.docMainContainer,(n={},n[ne.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",ne.docItemWrapper,(l={},l[ne.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:X},d)))))}var re=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,te.LX)(r.pathname,e)}));return o?a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(ae,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):a.createElement(q.default,null)}},9649:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(3366),r=n(7462),l=n(7294),o=n(6010),i=n(5999),c=n(2822),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=["id"],m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,a.Z)(e,d),f=(0,c.LU)().navbar.hideOnScroll;return m?l.createElement(t,(0,r.Z)({},p,{className:(0,o.Z)("anchor",(n={},n[u]=f,n[s]=!f,n)),id:m}),p.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,p)});var t}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(4814),l=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);