(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(e,t,a){"use strict";a.r(t);var r=a(226),n=a(0),i=a.n(n),s=a(214),l=a.n(s),o=a(205),d=a(201),c=a.n(d);t.default=function(e){var t=r.data;return i.a.createElement(o.c,{hideFooter:!0},i.a.createElement(o.f,null),i.a.createElement("div",{className:c.a.hero},i.a.createElement(l.a,{style:{position:"absolute"},className:c.a.backgroundImage,fluid:t.hero.childImageSharp.fluid}),i.a.createElement("div",{className:c.a.overlay},i.a.createElement("h1",{className:"text-center"},"Hi, my name is Game!"),i.a.createElement("p",{className:"text-center"},"Game is my actual last name.",i.a.createElement("br",null),"I'm not too fond of the book or the rapper.",i.a.createElement("br",null),"The film however is pretty good ;)"),i.a.createElement(o.a,null))))}},202:function(e,t,a){"use strict";var r=a(206),n=a(0),i=a.n(n),s=a(209),l=a(205);a(193);t.a=function(e){var t=e.hideFooter,a=e.children,n=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.b.Provider,{value:{className:"icon"}},i.a.createElement(l.b,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("main",null,a),!t&&i.a.createElement("footer",null,i.a.createElement(l.a,null))))}},203:function(e,t,a){"use strict";var r=a(207),n=a(0),i=a.n(n),s=a(212),l=a.n(s),o=function(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,o=r.data.site,d=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,defaultTitle:"Ahmad Game",meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(n)})};o.defaultProps={lang:"en",meta:[],description:""},t.a=o},204:function(e,t,a){var r;e.exports=(r=a(208))&&r.default||r},205:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(192),s=a.n(i),l=function(){return n.a.createElement("header",null,n.a.createElement("nav",null,n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",{className:s.a.bar+" "+s.a.first}),n.a.createElement("span",{className:s.a.bar+" "+s.a.second}),n.a.createElement("span",{className:s.a.bar+" "+s.a.third}),n.a.createElement("ul",{className:s.a.navMenu},n.a.createElement(g,{className:"dark-bg",to:"/"},"Home"),n.a.createElement(g,{className:"dark-bg",to:"/bio/"},"Who I am"),n.a.createElement(g,{className:"dark-bg",to:"/experience/"},"What I do"),n.a.createElement(g,{className:"dark-bg",to:"/blog/"},"What I think"))))},o=a(202),d=a(203),c=(a(29),a(30),a(13),a(49),a(22),a(66)),u=a.n(c);a(204),a(7).default.enqueue,n.a.createContext({});var f=a(213);function m(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var g=function(e){var t=e.to,a=e.children,r=m(e,["to","children"]);return n.a.createElement("li",null,n.a.createElement(p,Object.assign({to:t},r),a))},p=function(e){var t=e.to,a=(e.showButton,e.children),r=m(e,["to","showButton","children"]);return h(t)?n.a.createElement(f.OutboundLink,Object.assign({href:t,target:"_blank",rel:"noreferrer"},r),a):n.a.createElement(u.a,Object.assign({to:t},r),a)},h=function(e){return/^(https?:\/\/)|(mailto:)|(tel:)/i.test(e)},b=a(211),v=a(210),y=function(){return n.a.createElement("div",{style:{width:"15rem",display:"flex",alignItems:"center",justifyContent:"space-between"}},n.a.createElement(p,{className:"dark-bg",to:"https://github.com/a-game"},n.a.createElement(v.b,null)),n.a.createElement(p,{className:"dark-bg",to:"mailto:me@ahmadgame.com"},n.a.createElement(b.b,null)),n.a.createElement(p,{className:"dark-bg",to:"https://www.linkedin.com/in/ahmadgame"},n.a.createElement(v.c,null)))};a.d(t,"b",function(){return l}),a.d(t,"c",function(){return o.a}),a.d(t,"f",function(){return d.a}),a.d(t,"d",function(){return p}),a.d(t,"e",function(){return g}),a.d(t,"a",function(){return y})},206:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Ahmad Game"}}}}')},207:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Ahmad Game","description":"Ahmad Game\'s personal website","author":"@ahmadgame"}}}}')},208:function(e,t,a){"use strict";a.r(t);a(22);var r=a(0),n=a.n(r),i=a(90);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},214:function(e,t,a){"use strict";a(29),a(30),a(13),a(91),a(133),a(215);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(69)),s=r(a(68)),l=r(a(136)),o=r(a(131)),d=r(a(0)),c=r(a(51)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+s+l+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(k,(0,o.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},k=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&b&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,L=e.loading,I=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:x?1:0,transition:R?"opacity "+b+"ms":"none"},l),j="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&z,{},l,{},f),M={title:t,alt:this.state.isVisible?"":a,style:T,className:m};if(g){var C=g,G=C[0];return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),j&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&z)}),G.base64&&d.default.createElement(N,{src:G.base64,spreadProps:M,imageVariants:C,generateSources:w}),G.tracedSVG&&d.default.createElement(N,{src:G.tracedSVG,spreadProps:M,imageVariants:C,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(C),d.default.createElement(k,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},G,{imageVariants:C}))}}))}if(p){var P=p,W=P[0],q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},j&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:j,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&z)}),W.base64&&d.default.createElement(N,{src:W.base64,spreadProps:M,imageVariants:P,generateSources:w}),W.tracedSVG&&d.default.createElement(N,{src:W.tracedSVG,spreadProps:M,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(P),d.default.createElement(k,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},W,{imageVariants:P}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=x;t.default=j},215:function(e,t,a){"use strict";a(216)("fixed",function(e){return function(){return e(this,"tt","","")}})},216:function(e,t,a){var r=a(1),n=a(8),i=a(32),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},226:function(e){e.exports=JSON.parse('{"data":{"hero":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'225\'%3e%3cpath%20d=\'M69%202a52153%2052153%200%200177%2074l5%205-2%203-18%2019-15%2015-3-3A9739%209739%200%20010%209l28%2028a12393%2012393%200%200152%2050l7%206-15%2014-15%2015-5-3c-13-7-35-11-48-9l-4%201v114h241l12-12A20984%2020984%200%2000387%2073l13-13V0H230l-16%2016-30%2031-14%2015-32-31-32-31H67l2%202m324%2075a54115%2054115%200%2001-137%20143l-4%205h148V71l-7%206\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.7777777777777777,"src":"/static/07d676cf68be447bd9aa839a751ca936/b7738/hero.jpg","srcSet":"/static/07d676cf68be447bd9aa839a751ca936/76319/hero.jpg 960w,\\n/static/07d676cf68be447bd9aa839a751ca936/0979f/hero.jpg 1920w,\\n/static/07d676cf68be447bd9aa839a751ca936/b7738/hero.jpg 3840w","sizes":"(max-width: 3840px) 100vw, 3840px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-cc812dc1f7ba592bd304.js.map