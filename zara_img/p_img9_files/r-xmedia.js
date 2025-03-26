"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[34648],{55403:(e,t,n)=>{var o=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.XMEDIA_FORMAT_TYPES=void 0,t.buildXmediaUrl=S,t.get3dMedia=function(e){if(!e||e.type!==O.ADVANCED_3D_FORMAT)return null;if(D(e))return{url:e.url,cacheBusting:e.timestamp,poster:u(u({},e),{},{type:O.IMAGE_FORMAT,url:e.posterUrl})};return{url:"".concat(M(O.ADVANCED_3D_FORMAT)).concat(e.path,"/"),cacheBusting:e.timestamp,poster:u(u({},e),{},{type:O.IMAGE_FORMAT})}},t.getBestImageUrl=F,t.getDeviceAllowedScreen=void 0,t.getVideoSource=P,t.getVirtualWidth=U,t.getWatermarkUrl=function(e){if(!e)return null;const t=function(e,t){const n=function(e,t){var n,o;if(null!==c.default&&void 0!==c.default&&null!==(n=c.default.xmediaTransformations)&&void 0!==n&&n.length&&null!=e&&null!==(o=e.transformations)&&void 0!==o&&o.length){var r;const n=c.default.xmediaTransformations.find((n=>e.transformations.includes(n.name)&&n.type===t));return(null==n||null===(r=n.meta)||void 0===r?void 0:r.xmedia)||[]}return[]}(e,t);let o=n.find((t=>t.kind===e.kind));o||(o=n.find((e=>"other"===e.kind)));return o}(e,"watermark"),n=R.find((e=>"svg"===e.codecs));if(t&&n)return S(t,n,null,!0);return null},t.getXmediaBaseUrl=void 0,t.loadVideo=function(e,t,o,r){var a;const c=t.offsetWidth,i=U(c),l=null!==(a=function(e,t){return D(e)&&e.posterUrl?A(e.posterUrl,"image",t):null}(e,c))&&void 0!==a?a:F(u(u({},e),{type:"image"}),c,{forceLegacyUrl:!0});if(e.type!==p)o(l,P(e,i));else{if(!b[p])return o(l);const a=L(b[p],i),c=e.hlsUrl||S(e,a,null,!0);if(function(){const e=window.ManagedMediaSource||window.MediaSource||window.WebKitMediaSource,t=window.SourceBuffer||window.WebKitSourceBuffer,n=e&&"function"==typeof e.isTypeSupported&&function(e){const t=(e,t)=>"".concat(t,'/mp4;codecs="').concat(e,'"'),n=["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some((n=>e.isTypeSupported(t(n,"video")))),o=["mp4a.40.2","fLaC"].some((n=>e.isTypeSupported(t(n,"audio"))));return n||o}(e),o=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!n&&!!o}())n.e(93041).then(n.bind(n,68268)).then((n=>{let{default:a}=n;const u=new a({autoStartLoad:!0,capLevelToPlayerSize:!0,maxBufferLength:y,maxMaxBufferLength:y});u.on(a.Events.MANIFEST_PARSED,(function(e,t){let n=0;for(let e=0;e<t.levels.length&&(n=e,!(t.levels[e].width>i));e++);u.autoLevelCapping=n,o(l,null,u)})),u.on(a.Events.ERROR,((t,n)=>{n.fatal&&(n.type===a.ErrorTypes.MEDIA_ERROR?u.recoverMediaError():(u.destroy(),e.hlsUrl||o(l,function(e,t){if(D(e)&&e.videoFallbackUrl){const n=L(b[s],t);return{url:A(e.videoFallbackUrl,"image",t),type:"video/".concat(n.extension)}}return P(e,t)}(e,i))))})),u.on(a.Events.SUBTITLE_TRACKS_UPDATED,(()=>{const e=x(u.subtitleTracks);if(void 0!==e&&u.subtitleTracks.forEach((t=>{t.default=e===t.id})),r){const e=u.subtitleTracks.reduce(((e,t)=>[...e,...t.forced?[]:[{id:t.id,langCode:t.lang,langName:t.name,active:t.default}]]),[]);r(e,(e=>{u.subtitleTrack=e}))}})),u.loadSource(c),u.attachMedia(t)}));else if("probably"===function(e){const t=document.createElement("video"),n={ogg:'video/ogg; codecs="theora"',h264:'video/mp4; codecs="avc1.42E01E"',webm:'video/webm; codecs="vp8, vorbis"',vp9:'video/webm; codecs="vp9"',hls:'application/x-mpegURL; codecs="avc1.42E01E"'};return t.canPlayType(n[e]||e)}("hls")){const e=e=>{const t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(((e,t)=>({id:t,langCode:e.language,langName:e.label,active:"showing"===e.mode,track:e})))}([...e.target]),n=x(t);if(void 0!==n&&t.forEach((e=>{e.track.mode=n===e.id?"showing":"disabled"})),r){const e=e=>{if(t.forEach((e=>{e.track.mode="disabled"})),null!==e){var n;const o=null===(n=t.find((t=>t.id===e)))||void 0===n?void 0:n.track;o&&(o.mode="showing")}};r(t,e)}};t.textTracks.onaddtrack=e,t.textTracks.onchange=e,o(l,{type:"application/x-mpegURL",url:c})}else o(l,P(e,i))}},t.xmediaFormats=void 0;var r=o(n(59713)),a=n(31012),c=o(n(79901)),i=o(n(18615));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d="image",s="video",f="vector",p="hls",v="png",m="3dadvanced",g="spin360",h={SMALL:135,MEDIUM:560,LARGE:1024,EXTRALARGE:1920},y=5;function A(e,t,n){try{const o=new URL(e);return o.searchParams.has("w")&&o.searchParams.set("w",n),"image"===t&&c.default.requestWebpResources&&o.searchParams.set("f","auto"),o.toString()}catch(e){return""}}function E(e){switch(e){case d:case f:case v:case m:case g:return c.default.imageBaseUrl;case s:case p:return c.default.videoBaseUrl}}const O=t.XMEDIA_FORMAT_TYPES={IMAGE_FORMAT:d,VIDEO_FORMAT:s,VECTOR_FORMAT:f,PNG_FORMAT:v,HLS_FORMAT:p,ADVANCED_3D_FORMAT:m,SPIN_360:g},T="small",_="large";t.getDeviceAllowedScreen=e=>e?T:_;const M=e=>E(e);t.getXmediaBaseUrl=M;const w={[f]:["pdf"]};const R=t.xmediaFormats=c.default.xmediaFormats.sort(((e,t)=>e.width>t.width?1:-1)),b=R.reduce(((e,t)=>{var n;return e[t.type]=e[t.type]||{formats:[],cache:{}},(w[(n=t).type]||[]).includes(n.extension)||e[t.type].formats.push(t),e}),{});function D(e){return e.type===O.HLS_FORMAT||e.type===O.VIDEO_FORMAT?Boolean(i.default.getValue("core.xmedia.use-video-consumer-url",!1)&&e.url):e.type!==O.IMAGE_FORMAT&&e.type?e.type===O.ADVANCED_3D_FORMAT&&(Boolean(e.url)&&Boolean(c.default.useXmedia3dAdvancedConsumerUrl)):Boolean(e.url)}function S(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(function(e){return(null==e?void 0:e.url)&&!(null!=e&&e.name)&&(null==e?void 0:e.type)===O.HLS_FORMAT}(e))return e.url;const a=n||t.width||h.EXTRALARGE;if(!r&&D(e))return A(e.url,e.type,a);const c="."+t.extension;if(null==e||!e.name)return"";const i=/\.\w+$/.test(e.name)?e.name.replace(/\.\w+$/,c):e.name.concat(c);return o?"".concat(E(t.type),"/").concat(e.path,"/").concat(i,"?ts=").concat(e.timestamp):"".concat(E(t.type),"/").concat(e.path,"/w/").concat(a,"/").concat(i,"?ts=").concat(e.timestamp)}function L(e,t){const n=e.formats,o=e.cache[t];let r,a,i;if(o)return o;if(c.default.store.useXmediaRealWidth&&n.length)return e.cache[t]=u(u({},n[0]),{},{width:t}),e.cache[t];for(a=0,i=n.length;a<i;a++)if(r=n[a],r.width>=t)return e.cache[t]=r,e.cache[t];return e.cache[t]=n[n.length-1],n[n.length-1]}function U(e,t){const n=(null==t?void 0:t.forcedDevicePixelRatio)||(a.canUseDOM?Math.min(devicePixelRatio||1,2):1);return Math.ceil(e*n)}function F(e,t,n){var o;if(!e)return"";const r=e.type||d,a=U("string"==typeof t?h[t]||560:t,n),c=L(b[r],a),i=c.type===f;return S(e,c,c.width,i,null!==(o=null==n?void 0:n.forceLegacyUrl)&&void 0!==o&&o)}function P(e,t){const n=L(b[s],t);return{url:S(e,n),type:"video/".concat(n.extension)}}const x=function(){var e;return null===(e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((e=>e.lang===c.default.langCode||e.langCode===c.default.langCode)))||void 0===e?void 0:e.id}}}]);