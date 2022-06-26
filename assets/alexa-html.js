/*
 * Copyright Amazon.com, Inc. or its affiliates.  All Rights Reserved.
 *
 * You may not use this file except in compliance with the terms and conditions set forth in the following license agreement:
 *
 * AMAZON PROPRIETARY/CONFIDENTIAL
 * These materials are licensed as "Restricted Program Materials" under the Program Materials License Agreement (the "Agreement") in connection with
 * the Amazon Common Software for Devices Program.  The Agreement is available at https://developer.amazon.com/public/support/pml.html. 
 * See the Agreement for the specific terms and conditions of the Agreement.
 * Capitalized terms not defined in this file have the meanings given to them in the Agreement.
 *
 * In addition to the terms and conditions of the Agreement, the following terms and conditions apply to these materials, with the exception of files
 * identified as a "Modifiable File" within the file header.  If there is a conflict between the terms and conditions of the Agreement and those of
 * this file, the terms and conditions of this file will apply.
 * 
 * 1. You may not modify any source code in any file in this package.
 * 
 * If you do not agree to the above terms and conditions, you may not use any file in this package.
 *
 * YOUR USE OF THE PROGRAM MATERIALS IN OR ASSOCIATED WITH THIS PACKAGE IS AT YOUR SOLE RISK.  IN NO EVENT WILL AMAZON BE LIABLE FOR ANY DAMAGES,
 * INCLUDING WITHOUT LIMITATION ANY DIRECT, INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL, OR PUNITIVE DAMAGES (INCLUDING FOR ANY LOSS OF GOODWILL,
 * BUSINESS INTERRUPTION, LOST PROFITS OR DATA, OR COMPUTER FAILURE OR MALFUNCTION) ARISING FROM OR RELATING TO SUCH PROGRAM MATERIALS, HOWEVER
 * CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, EVEN IF AMAZON HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
 * THESE LIMITATIONS AND DISCLAIMERS APPLY EXCEPT TO THE EXTENT PROHIBITED BY APPLICABLE LAW.
 *
 * THESE MATERIALS ARE PROVIDED ON AN "AS IS" BASIS. AMAZON SPECIFICALLY DISCLAIMS, WITH RESPECT TO THESE MATERIALS, ALL WARRANTIES, EXPRESS,
 * IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
 */
var __alexa=function(e){"use strict";var t;!function(e){e[e.Ok=200]="Ok",e[e.Forbidden=403]="Forbidden",e[e.TooManyRequests=429]="TooManyRequests",e[e.NotFound=404]="NotFound"}(t||(t={}));var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class r{constructor(e){if(this.apiUrl=new URL(e&&e.apiUrl?e.apiUrl:"https://appassets.androidplatform.net/?d="),this.urlLengthLimit=e&&e.urlLengthLimit?e.urlLengthLimit:1e4,this.urlLengthLimit<0)throw new Error("urlLengthLimit must be a positive number");this.onReceiveCallback=e=>{},this.endpointFunctionName="[__ALEXA]";try{Object.defineProperty(window,this.endpointFunctionName,{value:window[this.endpointFunctionName],writable:!1,configurable:!1})}catch(e){throw new Error("JavaScript apk communication interface not secured "+e.message)}const t=e&&e.dispatchFunc?e.dispatchFunc:"__dispatchMessage",n=e=>this.handleReceive(e);try{Object.defineProperty(window,t,{value:n,writable:!1,configurable:!1})}catch(e){throw new Error("JavaScript runtime communication function not established "+e.message)}if(window[t]!==n)throw new Error("JavaScript runtime communication function not established")}send(e,t){return n(this,void 0,void 0,(function*(){const n=window[this.endpointFunctionName];if(n&&"function"==typeof n.sendMessage){const r="[__TOKEN]";return new Promise(o=>{const s=this.buildJSONPayload(e,t),a=JSON.parse(n.sendMessage(s,r)),{status:i,statusDescription:c,rateLimitResult:{maxRequestsPerSecond:l,requestsRemaining:u,millisecondsUntilNextRequest:d,millisecondsUntilFullReset:h}}=a;o({statusCode:i,reason:c,rateLimit:{maxRequestsPerSecond:l,remainingRequests:u,timeUntilResetMs:d,timeUntilNextRequestMs:h}})})}return this.sendUsingHttp(e,t)}))}receive(e){if("function"!=typeof e)throw new Error("callback supplied must be of type function");this.onReceiveCallback=e}sendUsingHttp(e,t){return n(this,void 0,void 0,(function*(){const n=(e,t)=>({statusCode:t.status?t.status:e?200:500,reason:t.statusText?t.statusText:e?"success":"failed",rateLimit:{maxRequestsPerSecond:this.parseHeader(t,r.HEADER_RATELIMIT_LIMIT,r.DEFAULT_RATELIMIT_MAX_REQUEST_PER_SEC),remainingRequests:this.parseHeader(t,r.HEADER_RATELIMIT_REMAINING,1),timeUntilResetMs:this.parseHeader(t,r.HEADER_RATELIMIT_RESET,0),timeUntilNextRequestMs:this.parseHeader(t,r.HEADER_RATELIMIT_NEXTREQUEST,0)}});return new Promise(r=>{const o=new XMLHttpRequest;o.onload=function(){this.status>=200&&this.status<300?r(n(!0,this)):r(n(!1,this))},o.onerror=function(){r(n(!1,this))};const s=this.buildRoute(e,t);o.open("GET",s,!0),o.send()})}))}buildRoute(e,t){const n=encodeURIComponent(this.buildJSONPayload(e,t)),r=this.apiUrl+n;return r.length>=this.urlLengthLimit&&console.error(`Encoded payload length is ${this.urlLengthLimit}, current limit is ${this.urlLengthLimit}`),r}buildJSONPayload(e,t){const n={action:e,data:t||{}};return JSON.stringify(n)}parseHeader(e,t,n){let r=null;return t.some(t=>(r=e.getResponseHeader(t)||e.getResponseHeader(t.toLowerCase()),null!==r)),null===r||isNaN(Number(r))?n:Number(r)}handleReceive(e){this.onReceiveCallback(e)}}r.DEFAULT_RATELIMIT_MAX_REQUEST_PER_SEC=2,r.HEADER_RATELIMIT_LIMIT=["X-RateLimit-Limit","x-rate-limit-limit"],r.HEADER_RATELIMIT_REMAINING=["X-RateLimit-Remaining","x-rate-limit-remaining"],r.HEADER_RATELIMIT_NEXTREQUEST=["X-RateLimit-NextRequest","x-rate-limit-next-request"],r.HEADER_RATELIMIT_RESET=["X-RateLimit-Reset","x-rate-limit-reset"];var o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function s(e){const n=""+(Date.now()+Math.random());try{Object.defineProperty(window,n,{value:function(e){this.onReceiveCallback&&this.onReceiveCallback(e.data)}.bind(this),writable:!1,configurable:!1})}catch(e){throw new Error("JavaScript runtime communication function not established "+e.message)}return Object.defineProperties(this,{endpointFunctionName:{value:"[__ALEXA]",writable:!1,configurable:!1},receive:{value:function(e){Object.getPrototypeOf(this).receive.call(this,e)},writable:!1,configurable:!1},send:{value:function(r){return o(this,void 0,void 0,(function*(){const o=Object.getPrototypeOf(this);return new Promise((s,a)=>{o.send.call(this,"message-to-extension",{target:e,payload:r,runtime:{name:"Oz",callback:`window['${n}']`}}).then(e=>{e.statusCode!==t.Ok?a(e):s(),a(e)})})}))},writable:!1,configurable:!1}}),Object.setPrototypeOf(this,r.prototype)}var a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};let i;const c={"memory-available":!0};function l(e){const{nullFunction:t}=e;return{canProcess:e=>c[e.action],process(e){u({success:!0,payload:e.data,nullFunction:t})}}}function u(e){const{success:t,payload:n,nullFunction:r}=e;!function(e,t){return e&&t.hasOwnProperty("availableMemoryInMB")}(t,n)?i.errorMemoryInfoPromise(n):i.resolveMemoryInfoPromise(n),i.resolveMemoryInfoPromise=r,i.errorMemoryInfoPromise=r}function d(e){const{messageProvider:t,nullFunction:n}=e;return i={errorMemoryInfoPromise:n,resolveMemoryInfoPromise:n},{getMemoryInfo(){return a(this,void 0,void 0,(function*(){return new Promise(function(e){const{messenger:t,nullFunction:n}=e;return(e,r)=>{void 0===i.resolveMemoryInfoPromise&&void 0===i.errorMemoryInfoPromise||u({success:!1,payload:{message:"FAILED_TO_RETRIEVE_MEMORY_INFO"},nullFunction:n}),i.resolveMemoryInfoPromise=e,i.errorMemoryInfoPromise=r,t.send("alexa-available-memory",{}).then(e=>{(e.statusCode<200||e.statusCode>=300)&&u({success:!1,payload:{message:"FAILED_TO_RETRIEVE_MEMORY_INFO"},nullFunction:n})}).catch(e=>{u({success:!1,payload:{message:"FAILED_TO_RETRIEVE_MEMORY_INFO"},nullFunction:n})})}}({messenger:t,nullFunction:n}))}))}}}let h;const f={"message-to-html":!0};let p;const m="tts-started",b="tts-stopped",g={[m]:!0,[b]:!0};function w(e){const t="function"==typeof e;if(!t)throw new Error("callback supplied must be of type function");return t}let y;const v="mic-event",M="mic-requested-event",k={[v]:!0,[M]:!0};function E(e){const{messageProvider:n,isCallback:r,nullFunction:o}=e;return y={onMicrophoneClosedCallback:o,onMicrophoneOpenedCallback:o,onOpenMicrophoneClosedCallback:o,onOpenMicrophoneErrorCallback:o,onOpenMicrophoneInterruptedCallback:o,onOpenMicrophoneOpenedCallback:o,onOpenMicrophoneTimedOutCallback:o},{onMicrophoneClosed(e){return r(e),y.onMicrophoneClosedCallback=e,this},onMicrophoneOpened(e){return r(e),y.onMicrophoneOpenedCallback=e,this},requestMicrophoneOpen(e){if(e){const{onOpened:t,onClosed:n,onError:o}=e;t&&(r(t),y.onOpenMicrophoneOpenedCallback=t),n&&(r(n),y.onOpenMicrophoneClosedCallback=n),o&&(r(o),y.onOpenMicrophoneErrorCallback=o)}!function(e){const{messenger:n}=e,r=e=>{y.onOpenMicrophoneErrorCallback&&y.onOpenMicrophoneErrorCallback(e)};n.send("alexa-html-open-mic",{}).then(e=>{e.statusCode!==t.Ok&&(console.log("Alexa failed to initialize: "+e.reason),e.statusCode===t.TooManyRequests?r(e.reason.toLowerCase().replace(" ","-")):r("unknown"))}).catch(e=>{console.log("Alexa failed to initialize: "+e),r("unknown")})}({messenger:n})}}}var R=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const C=e=>{},O=["","1.0","1.1"];let P,_,x=[];const T={"alexa-html-ready":!0};function I(e){switch(e){case t.TooManyRequests:return"too-many-requests";case t.Forbidden:return"unauthorized-access";default:return"unknown"}}function S(e,n){_=void 0;const o={};let s="1.1";var a;n&&n.version&&(!function(e){if(-1===O.indexOf(e)){const t=new Error("Unsupported version supplied: "+e);throw Object.defineProperty(t,"code",{value:"no-such-version"}),t}}(n.version),s=n.version),P=n&&n.messageProvider?n.messageProvider:new r,x=[(a=e.onReadyCallback,{canProcess:e=>T[e.action],process(e){const{data:{capabilities:{microphone:{supportsWakeWord:t,supportsPushToTalk:n},extensions:r}}}=e;_||(_={}),_.microphone={supportsWakeWord:t,supportsPushToTalk:n},_.extensions=r,a(e.data.message)}}),{canProcess:e=>f[e.action],process(e){h.onSkillMessageCallback(e.data)}},{canProcess:e=>g[e.action],process(e){switch(e.action){case m:p.onSpeechStartedCallback();break;case b:p.onSpeechStoppedCallback()}}},{canProcess:e=>k[e.action],process(e){switch(e.action){case v:{let{status:t}=e.data;switch(t.toLowerCase()){case"open":y.onMicrophoneOpenedCallback();break;case"closed":y.onMicrophoneClosedCallback();break;default:console.log("Unrecognized Mic event "+JSON.stringify(e.data))}break}case M:{let{status:t,reason:n}=e.data;switch(t.toLowerCase()){case"opened":y.onOpenMicrophoneOpenedCallback();break;case"closed":y.onOpenMicrophoneClosedCallback();break;case"error":y.onOpenMicrophoneErrorCallback(n);break;case"interrupted":y.onOpenMicrophoneInterruptedCallback();break;case"timed-out":y.onOpenMicrophoneTimedOutCallback();break;default:console.log("Unrecognized Mic event "+JSON.stringify(e.data))}break}}}},l({nullFunction:C})],P.receive(e=>{for(const t of x)if(t.canProcess(e))return void t.process(e);console.log("Message command not supported: "+JSON.stringify(e))}),function(e){const n=t=>{console.error(t.code),e(t)};P.send("alexa-html-initialize").then(e=>{e.statusCode===t.Ok||n({code:I(e.statusCode),message:"Alexa failed to initialize: "+e.reason})}).catch(e=>{n({code:"unknown",message:`Alexa failed to initialize: ${e}}`})})}(e.onReadyFailedCallback);const i=function(e){const{messageProvider:t,isCallback:n,nullFunction:r}=e;return h={onSkillMessageCallback:r},{onMessage(e){return n(e),h.onSkillMessageCallback=e,this},sendMessage(e,r){return r&&n(r),t.send("message-to-skill",e).then(e=>{r&&r(e)}).catch(e=>{console.error("sendMessage failed: "+e),r&&r({statusCode:500,reason:"Unknown error for send message: "+e,rateLimit:{maxRequestsPerSecond:2,remainingRequests:1,timeUntilResetMs:100,timeUntilNextRequestMs:0}})}),this}}}({messageProvider:P,isCallback:w,nullFunction:C}),c=function(e){const{isCallback:t,nullFunction:n}=e;return p={onSpeechStartedCallback:n,onSpeechStoppedCallback:n},{onStarted(e){return t(e),p.onSpeechStartedCallback=e,this},onStopped(e){return t(e),p.onSpeechStoppedCallback=e,this}}}({isCallback:w,nullFunction:C}),u=E({messageProvider:P,isCallback:w,nullFunction:C}),R=d({messageProvider:P,nullFunction:C});return Object.defineProperties(o,{capabilities:{get:()=>_},skill:{value:i,writable:!1,configurable:!1},speech:{value:c,writable:!1,configurable:!1},performance:{value:R,writable:!1,configurable:!1},voice:{value:u,writable:!1,configurable:!1},version:{value:s,writable:!1,configurable:!1}}),Object.freeze(o.performance),Object.freeze(o.skill),Object.freeze(o.speech),Object.freeze(o.voice),Object.freeze(o.audio),o}function A(e){return R(this,void 0,void 0,(function*(){return new Promise((t,n)=>{try{const r=S({onReadyCallback:e=>{t({alexa:r,message:e,createExtensionsMessageProvider:s})},onReadyFailedCallback:e=>{n(e)}},e)}catch(e){e.code||(e.code="unknown"),n(e)}})}))}var F=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class L{constructor(e){this.speechMarksBuilder=e.speechMarksBuilder,this.mp3FrameReader=e.mp3FrameReader,this.reader=e.reader}demux(){return F(this,void 0,void 0,(function*(){return new Promise(this.demuxAudioData.bind(this))}))}demuxAudioData(e,t){const n=[this.speechMarksBuilder,this.mp3FrameReader];try{for(const e of this.reader){const{byteArray:t,head:r}=e;let o=0;for(const e of n)if(e.canRead(t,r)){o=e.read(t,r),this.reader.incrementHead(o);break}if(o<=0)throw Error(`Zero length or unreadable tag found at ${r}, cannot proceed with demuxing.)}`)}const r={speechMarks:this.speechMarksBuilder.build(),audioBuffer:this.reader.byteArray.buffer};return this.speechMarksBuilder.hadError()?t({message:"Failed to extract speech marks",data:{audioBuffer:r.audioBuffer}}):e(r)}catch(e){return t({message:"Failed to extract data"})}}}var N=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const U=200,D=2,X=4;function j(e){return N(this,void 0,void 0,(function*(){const{url:t}=e,n=e.request||new XMLHttpRequest;return new Promise((e,r)=>{n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=()=>{n.status===U&&e(n.response)},n.onerror=()=>{r({message:"Failed to retrieve MP3: "+t,statusCode:n.status})},n.ontimeout=()=>{r({message:`Failed to retrieve MP3: ${t} Timed-out after [${n.timeout/1e3}] seconds`})},n.onreadystatechange=()=>{!function(e,t){e.readyState===D&&e.status!==U&&(e.responseType="text");e.readyState===X&&e.status!==U&&t(`Fetch failed with code:${e.status} and response:${e.responseText}`)}(n,r)},n.send()})}))}const q=98,z=157,H=96,B=156,J=212,$=768,G=100,Q=144,W=104,V=216,Y=new Uint8Array([255,243]),K=new Uint8Array([255,251]);class Z{canRead(e,t){return e[t]===Y[0]&&(e[t+1]===Y[1]||e[t+1]===K[1])}read(e,t){const n=e[t+2];switch(n){case q:length=z;break;case H:length=B;break;case G:length=Q;break;case W:length=V;break;case J:length=$;break;default:throw new Error("Input file/stream seems to be corrupted or unknown mp3 format, cannot estimate length of the next mp3 frame. data type = "+n)}return length}}class ee{constructor(e){this.head=0,this.byteArray=e}incrementHead(e){this.head+=e}[Symbol.iterator](){const e=this;return{next:()=>e.head<e.byteArray.length?{value:{byteArray:e.byteArray,head:e.head},done:!1}:{done:!0}}}}function te(e,t){let n=0;for(let r=t;r<t+4;r++)n|=(127&e[r])<<7*(3-(r-t));return n}function ne({first:e,firstOffset:t,second:n,secondOffset:r,length:o}){for(let s=0;s<o;s++)if(e[t+s]!==n[r+s])return!1;return!0}const re=new Uint8Array([84,88,88,88]);var oe;!function(e){e[e.TXXX=0]="TXXX",e[e.UNSUPPORTED=1]="UNSUPPORTED"}(oe||(oe={}));function se(e,t){return ne({first:re,firstOffset:0,second:e,secondOffset:t,length:re.length})?oe.TXXX:oe.UNSUPPORTED}const ae=new Uint8Array([100,97,116,97]);class ie{constructor({bytes:e,head:t}){this.bytes=e,this.head=t,this.length=this.getId3TagLength(e,t)}frames(){let e=[],t=this.head+10;for(;t<this.head+this.length;){const n=te(this.bytes,t+4),r=se(this.bytes,t);if(t+=10,r===oe.TXXX){if(t+n>this.head+this.bytes.length)throw new Error(`ID3 header claims more data length than the remainder of the frame, ${n} > ${this.bytes.length-t}`);const r=this.parseSpeechMarks(this.bytes,t,t+n);e=e.concat(r)}t+=n}return e}deleteDataFromSource(){const e=this.head,t=e+this.length;for(let n=e;n<t;n++)this.bytes[n]=0}parseSpeechMarks(e,t,n){const r=e.indexOf(0,t+1);if(!ne({first:ae,firstOffset:0,second:e,secondOffset:t+1,length:ae.length}))throw Error("DEMUXER TXXX frame found with unrecognized name: "+function(e,t,n){let r;r=[],n=n||e.length;for(let o=t;o<n;o++)r.push(String.fromCharCode(e[o]));return r.join("")}(e,t,6));let o=function(e,t,n){let r;r=[],n=n||e.length;for(let o=t;o<n&&0!==e[o];o++)if(e[o]<128)r.push(String.fromCharCode(e[o]));else if(e[o]<224){const t=(31&e[o])<<6|63&e[o+1];r.push(String.fromCharCode(t)),o+=1}else if(e[o]<240){const t=(15&e[o])<<12|(63&e[o+1])<<6|63&e[o+2];r.push(String.fromCharCode(t)),o+=2}else{const t=(7&e[o])<<18|(63&e[o+1])<<12|(63&e[o+2])<<6|63&e[o+3];r.push(String.fromCodePoint(t)),o+=3}return r.join("")}(e,r+1,n);return o=o.replace("}{","},{"),o=o.replace("\n","\\n"),JSON.parse(o)}getId3TagLength(e,t){return te(e,t+6)+10}}ie.ID3_BEGIN=new Uint8Array([73,68,51]);class ce{constructor(){this.speechMarks=[],this.hadSpeechMarkError=!1}canRead(e,t){return e[t]===ie.ID3_BEGIN[0]&&e[t+1]===ie.ID3_BEGIN[1]&&e[t+2]===ie.ID3_BEGIN[2]}read(e,t){let n=null;try{n=this.createID3Tag(e,t);for(const e of n.frames())this.speechMarks.push(e);n.deleteDataFromSource()}catch(e){this.hadSpeechMarkError=!0}return null===n?0:n.length}build(){return this.speechMarks}hadError(){return this.hadSpeechMarkError}createID3Tag(e,t){return new ie({bytes:e,head:t})}}var le=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function ue(e){const{demuxerClassConstructor:t,speechMarksBuilderConstructor:n,mp3FrameReaderConstructor:r,audioReaderConstructor:o,fetchMP3:s}=e,a={fetchAndDemuxMP3(e){return le(this,void 0,void 0,(function*(){let a;try{a=yield s({url:e})}catch(e){return Promise.reject(e)}try{const e=new t({speechMarksBuilder:new n,mp3FrameReader:new r,reader:new o(new Uint8Array(a))});return yield e.demux()}catch(e){return Promise.reject(e)}}))}};return Object.freeze(a),a}const de=function(){const e={create:A};return Object.freeze(e),e}();Object.freeze(de);const he=function(){const e={speech:ue({demuxerClassConstructor:L,speechMarksBuilderConstructor:ce,mp3FrameReaderConstructor:Z,audioReaderConstructor:ee,fetchMP3:j})};return Object.freeze(e),e}();return Object.freeze(he),e.DefaultMessageProvider=r,e.ExtensionsMessageProvider=s,e.default=de,e.utils=he,e}({});window.Alexa={},Object.assign(window.Alexa,__alexa.default),Object.assign(window.Alexa,__alexa),Object.defineProperty(window,"Alexa",{writable:!1,configurable:!1}),__alexa=void 0,Object.freeze(Alexa);
