"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8303],{16782:(e,t,r)=>{r.d(t,{f:()=>m});var i=r(30758),n=r(97500),a=r.n(n),s=r(45237),o=r(27046);const c="main-genericButton-button",l="main-genericButton-buttonActive",d="main-genericButton-buttonActiveDot";var u=r(86070);const m=(0,i.forwardRef)(((e,t)=>{const r=e.isActive??!1,i=a()(c,{[l]:r||e.isActiveNoIndicator,[d]:r},e.className);return(0,u.jsx)(o.Zp,{label:e.label,children:(0,u.jsx)(s.H,{ref:t,style:e.style,"aria-label":e.label,size:"small",className:i,disabled:e.disabled,iconOnly:e.icon,onClick:e.onToggle,"data-testid":e.testId,"data-active":r.toString(),"aria-pressed":r,"data-restore-focus-key":e.restoreFocusKey})})}))},70292:(e,t,r)=>{r.d(t,{sY:()=>h,Nh:()=>b,bo:()=>w,r3:()=>g,EX:()=>f,lZ:()=>p});var i=r(39733),n=r(96266);r(61869);const a=new n.l("queryFullscreenMode","query","5aa77fcd9a5b65f829d8dee4000703ff1a7ff68e813c60999c0b2dce754240e2",null);var s=r(19019),o=r(49151),c=r(45339),l=r(45841),d=r(40425),u=r(32415),m=r(37171),y=r(82387),v=r(91753);const p=()=>{const e=(0,i.NC)(s.WYm,{loadingValue:!1});return(0,o.o)(y.A3)||e};function f(e){return(0,u.v)(e)?{uri:e.uri,name:e.name,creatorName:e.artists[0]?.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,d.p)(e)?{uri:e.uri,name:e.name,creatorName:e.show.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,l.d)(e)?{uri:e.uri,name:e.name,creatorName:e.book.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,c.N)(e)?{uri:e.uri,name:e.title??"",creatorName:e.advertiser??"",coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,m.v)(e)||void 0===e?void 0:(0,v.d)(e)}function g(e){const t=f(e);return(0,u.v)(e)||(0,d.p)(e)||(0,l.d)(e)||(0,c.N)(e)?{...t,duration:e.duration.milliseconds,mediaType:(r=e.mediaType,"video"===r||"mixed"===r?"video":"audio")}:(0,m.v)(e)||void 0===e?void 0:(0,v.d)(e);var r}function b(e){const t=e?.context.metadata?.context_description,r=e?.context.uri||void 0,i=e?.positionAsOfTimestamp??void 0,n=e?.timestamp,a=e?.isPaused,s=e?.restrictions.canPause,o=e?.restrictions.canResume;return{contextName:t,contextUri:r,position:i,timestamp:n,isPaused:a,canPause:s,canResume:o}}async function h(e,t){return e(a,{artistUri:t}).then((e=>{if("Artist"===e?.data?.artistUnion.__typename)return e.data.artistUnion.visuals.headerImage?.sources[0]?.url})).catch((()=>{}))}function w(e,t,r){if(e&&r&&r.hasLyrics)return{status:t?"loading":"success",content:{provider:r.provider,syncType:r.syncType,lines:r.lyrics.map((e=>({timestamp:Number(e.start),text:e.text})))}}}},35411:(e,t,r)=>{r.d(t,{H:()=>n,k:()=>i});const i=18e5,n=6e5},90029:(e,t,r)=>{r.d(t,{I:()=>g});var i=r(2569),n=r(39733),a=r(35411),s=r(10423),o=r(49571),c=r(26528),l=r(35904),d=r(10940),u=r(56629);function m(e,t,r){const{startTimeMs:i,words:n}=e,a=r[t+1];return{start:i||0,end:a&&a.startTimeMs?a.startTimeMs:1/0,text:n}}function y(e){return d.Q.fromInt(e).toCSS(u.a.RGB)}var v=r(52037),p=r(4355);const f={hasLyrics:!1},g=(e,t)=>{const r=(0,v.h)(t||void 0,{desiredLabel:"large",desiredSize:600})??t?.[0]?.url??"",d=(0,o.X)(),u=(0,n.NC)(p.Tc,{loadingValue:p.LZ.CONTROL}),g={[p.LZ.CONTROL]:void 0,[p.LZ.SYSTEM_LANGUAGE]:navigator.language,[p.LZ.ALL_LANGUAGES]:"all"}[u],b=["lyrics",{uri:e,image:r,vocalRemoval:d}],{hasLyrics:h,isLoading:w}=(0,s.f)(e),{data:L,isLoading:I,isError:N}=(0,i.I)({queryKey:b,queryFn:async()=>{if(!e||!r)return f;const t=await async function(e,t,r=!1,i){try{const s=await(0,c.S)(e,t,r,i);return{hasLyrics:!0,isTimeSynced:(a=s.lyrics.syncType,"LINE_SYNCED"===a||"SYLLABLE_SYNCED"===a),syncType:s.lyrics.syncType,lyrics:s.lyrics.lines.map(m),colors:(n=s.colors,{text:y(n.text),activeText:y(n.highlightText),background:y(n.background)}),provider:s.lyrics.provider,providerDisplayName:s.lyrics.providerDisplayName,providerLyricsId:s.lyrics.providerLyricsId,hasVocalRemoval:s.hasVocalRemoval??!1,showUpsell:s.lyrics.showUpsell??!1,alternatives:s.lyrics.alternatives}}catch(e){if(e instanceof l.O&&404===e.status)return{hasLyrics:!1};throw e}var n,a}(e,r,d,g);return t},gcTime:a.k,staleTime:a.H,enabled:h}),T=w||I;let S=null;return T||(S=h?L??null:f),{data:S,loading:T,error:N}}},10423:(e,t,r)=>{r.d(t,{f:()=>d});var i=r(2569),n=r(18230),a=r(39733),s=r(59677),o=r(35411),c=r(26528),l=r(19019);const d=e=>{const t=!!e&&(0,s.U_)(e),r=(0,a.NC)(l.s6w)&&t,{data:d,isLoading:u}=(0,i.I)({queryKey:["useLyricsAvailability",e],queryFn:async()=>!!e&&await(0,c.z)(e),gcTime:o.k,staleTime:o.H,enabled:r,placeholderData:n.rX});return{isLoading:u,hasLyrics:!!r&&(d??!1)}}},70923:(e,t,r)=>{r.d(t,{J:()=>a});var i=r(90029),n=r(49151);const a=()=>{const e=(0,n.o)((e=>e?.item),((e,t)=>e?.uri===t?.uri));return(0,i.I)(e?.uri,e?.images)}},49571:(e,t,r)=>{r.d(t,{X:()=>s});var i=r(39733),n=r(19019),a=r(4279);const s=()=>{const e=(0,a.S)(),{isSupported:t}=e.getCapabilities();return(0,i.NC)(n.OBX,{loadingValue:!1})&&t}},26528:(e,t,r)=>{r.d(t,{S:()=>s,z:()=>o});var i=r(59677),n=r(93409),a=r(76629);const s=async(e,t,r,s)=>{const o=(0,i.o_)(e).id,c=n.n.getInstance(),l={format:"json",vocalRemoval:r};s&&(l.clientLanguage=s);return(await c.build().withHost(a.Hj).withPath(`/track/${encodeURIComponent(o)}/image/${encodeURIComponent(t)}`).withQueryParameters(l).withEndpointIdentifier("/track/{trackId}").send()).body},o=async e=>{const t=(0,i.Y8)((0,i.o_)(e)?.id);if(!t)return!1;const r=n.n.getInstance(),s=await r.build().withHost(a.XE).withPath(`/track/${encodeURIComponent(t)}`).withEndpointIdentifier("/track/{trackId}").send();return s.body?.has_lyrics||!1}},80587:(e,t,r)=>{r.d(t,{p:()=>o});var i=r(49151),n=r(45339),a=r(45841),s=r(40425);function o(){const e=(0,i.o)((e=>e?.item??void 0),((e,t)=>e?.uri===t?.uri));return(0,s.p)(e)||(0,a.d)(e)?"audio"===e.mediaType||"mixed"===e.mediaType:!!(0,n.N)(e)&&e.isPodcastAd}},98471:(e,t,r)=>{r.d(t,{SP:()=>n,X8:()=>i,ge:()=>a});const i=e=>{e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},n=()=>{document.fullscreenElement&&document.exitFullscreen?document.exitFullscreen():document.mozFullScreen&&document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitIsFullScreen&&document.webkitExitFullscreen&&document.webkitExitFullscreen()},a=()=>!!(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen)}}]);
//# sourceMappingURL=8303.js.map