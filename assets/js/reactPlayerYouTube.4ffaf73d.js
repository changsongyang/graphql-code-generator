"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[4439],{58883:function(e,t,n){var r=n(30138);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(27378)),i=n(92694),l=n(8423);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="YT",O=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,k=/user\/([a-zA-Z0-9_-]+)\/?/,j=/youtube-nocookie\.com/,S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,n,o,u=b(c);function c(){var e;p(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return P(m(e=u.call.apply(u,[this].concat(n))),"callPlayer",i.callPlayer),P(m(e),"parsePlaylist",(function(t){return t instanceof Array?{listType:"playlist",playlist:t.map(e.getID).join(",")}:O.test(t)?{listType:"playlist",list:f(t.match(O),2)[1].replace(/^UC/,"UU")}:k.test(t)?{listType:"user_uploads",list:f(t.match(k),2)[1]}:{}})),P(m(e),"onStateChange",(function(t){var n=t.data,r=e.props,o=r.onPlay,a=r.onPause,i=r.onBuffer,l=r.onBufferEnd,u=r.onEnded,c=r.onReady,s=r.loop,f=r.config,y=f.playerVars,p=f.onUnstarted,d=window.YT.PlayerState,h=d.UNSTARTED,b=d.PLAYING,v=d.PAUSED,m=d.BUFFERING,g=d.ENDED,P=d.CUED;if(n===h&&p(),n===b&&(o(),l()),n===v&&a(),n===m&&i(),n===g){var w=!!e.callPlayer("getPlaylist");s&&!w&&(y.start?e.seekTo(y.start):e.play()),u()}n===P&&c()})),P(m(e),"mute",(function(){e.callPlayer("mute")})),P(m(e),"unmute",(function(){e.callPlayer("unMute")})),P(m(e),"ref",(function(t){e.container=t})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(e){return!e||e instanceof Array||O.test(e)?null:e.match(l.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(e,t){var n=this,o=this.props,a=o.playing,l=o.muted,u=o.playsinline,c=o.controls,f=o.loop,y=o.config,p=o.onError,d=y.playerVars,h=y.embedOptions,b=this.getID(e);if(t)return O.test(e)||k.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:b,startSeconds:(0,i.parseStartTime)(e)||d.start,endSeconds:(0,i.parseEndTime)(e)||d.end});(0,i.getSDK)("https://www.youtube.com/iframe_api",w,"onYouTubeIframeAPIReady",(function(e){return e.loaded})).then((function(t){n.container&&(n.player=new t.Player(n.container,s({width:"100%",height:"100%",videoId:b,playerVars:s(s({autoplay:a?1:0,mute:l?1:0,controls:c?1:0,start:(0,i.parseStartTime)(e),end:(0,i.parseEndTime)(e),origin:window.location.origin,playsinline:u?1:0},n.parsePlaylist(e)),d),events:{onReady:function(){f&&n.player.setLoop(!0),n.props.onReady()},onStateChange:n.onStateChange,onError:function(e){return p(e.data)}},host:j.test(e)?"https://www.youtube-nocookie.com":void 0},h)))}),p),h.events&&r.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e),this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return a.default.createElement("div",{style:e},a.default.createElement("div",{ref:this.ref}))}}])&&d(t.prototype,n),o&&d(t,o),c}(a.Component);t.default=S,P(S,"displayName","YouTube"),P(S,"canPlay",l.canPlay.youtube)}}]);