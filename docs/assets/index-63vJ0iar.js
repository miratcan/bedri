(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();function mf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ls={exports:{}},Ao={},is={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function lm(){if(_d)return Se;_d=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),p=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),S=Symbol.iterator;function $(v){return v===null||typeof v!="object"?null:(v=S&&v[S]||v["@@iterator"],typeof v=="function"?v:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,M={};function j(v,I,V){this.props=v,this.context=I,this.refs=M,this.updater=V||W}j.prototype.isReactComponent={},j.prototype.setState=function(v,I){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,I,"setState")},j.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Q(){}Q.prototype=j.prototype;function B(v,I,V){this.props=v,this.context=I,this.refs=M,this.updater=V||W}var O=B.prototype=new Q;O.constructor=B,H(O,j.prototype),O.isPureReactComponent=!0;var Z=Array.isArray,ne=Object.prototype.hasOwnProperty,G={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function Ee(v,I,V){var Y,oe={},ee=null,se=null;if(I!=null)for(Y in I.ref!==void 0&&(se=I.ref),I.key!==void 0&&(ee=""+I.key),I)ne.call(I,Y)&&!X.hasOwnProperty(Y)&&(oe[Y]=I[Y]);var ve=arguments.length-2;if(ve===1)oe.children=V;else if(1<ve){for(var R=Array(ve),de=0;de<ve;de++)R[de]=arguments[de+2];oe.children=R}if(v&&v.defaultProps)for(Y in ve=v.defaultProps,ve)oe[Y]===void 0&&(oe[Y]=ve[Y]);return{$$typeof:r,type:v,key:ee,ref:se,props:oe,_owner:G.current}}function q(v,I){return{$$typeof:r,type:v.type,key:I,ref:v.ref,props:v.props,_owner:v._owner}}function me(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function ce(v){var I={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(V){return I[V]})}var fe=/\/+/g;function ae(v,I){return typeof v=="object"&&v!==null&&v.key!=null?ce(""+v.key):I.toString(36)}function ge(v,I,V,Y,oe){var ee=typeof v;(ee==="undefined"||ee==="boolean")&&(v=null);var se=!1;if(v===null)se=!0;else switch(ee){case"string":case"number":se=!0;break;case"object":switch(v.$$typeof){case r:case l:se=!0}}if(se)return se=v,oe=oe(se),v=Y===""?"."+ae(se,0):Y,Z(oe)?(V="",v!=null&&(V=v.replace(fe,"$&/")+"/"),ge(oe,I,V,"",function(de){return de})):oe!=null&&(me(oe)&&(oe=q(oe,V+(!oe.key||se&&se.key===oe.key?"":(""+oe.key).replace(fe,"$&/")+"/")+v)),I.push(oe)),1;if(se=0,Y=Y===""?".":Y+":",Z(v))for(var ve=0;ve<v.length;ve++){ee=v[ve];var R=Y+ae(ee,ve);se+=ge(ee,I,V,R,oe)}else if(R=$(v),typeof R=="function")for(v=R.call(v),ve=0;!(ee=v.next()).done;)ee=ee.value,R=Y+ae(ee,ve++),se+=ge(ee,I,V,R,oe);else if(ee==="object")throw I=String(v),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return se}function be(v,I,V){if(v==null)return v;var Y=[],oe=0;return ge(v,Y,"","",function(ee){return I.call(V,ee,oe++)}),Y}function $e(v){if(v._status===-1){var I=v._result;I=I(),I.then(function(V){(v._status===0||v._status===-1)&&(v._status=1,v._result=V)},function(V){(v._status===0||v._status===-1)&&(v._status=2,v._result=V)}),v._status===-1&&(v._status=0,v._result=I)}if(v._status===1)return v._result.default;throw v._result}var xe={current:null},_={transition:null},K={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:_,ReactCurrentOwner:G};function U(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:be,forEach:function(v,I,V){be(v,function(){I.apply(this,arguments)},V)},count:function(v){var I=0;return be(v,function(){I++}),I},toArray:function(v){return be(v,function(I){return I})||[]},only:function(v){if(!me(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},Se.Component=j,Se.Fragment=s,Se.Profiler=d,Se.PureComponent=B,Se.StrictMode=u,Se.Suspense=x,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Se.act=U,Se.cloneElement=function(v,I,V){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var Y=H({},v.props),oe=v.key,ee=v.ref,se=v._owner;if(I!=null){if(I.ref!==void 0&&(ee=I.ref,se=G.current),I.key!==void 0&&(oe=""+I.key),v.type&&v.type.defaultProps)var ve=v.type.defaultProps;for(R in I)ne.call(I,R)&&!X.hasOwnProperty(R)&&(Y[R]=I[R]===void 0&&ve!==void 0?ve[R]:I[R])}var R=arguments.length-2;if(R===1)Y.children=V;else if(1<R){ve=Array(R);for(var de=0;de<R;de++)ve[de]=arguments[de+2];Y.children=ve}return{$$typeof:r,type:v.type,key:oe,ref:ee,props:Y,_owner:se}},Se.createContext=function(v){return v={$$typeof:p,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:h,_context:v},v.Consumer=v},Se.createElement=Ee,Se.createFactory=function(v){var I=Ee.bind(null,v);return I.type=v,I},Se.createRef=function(){return{current:null}},Se.forwardRef=function(v){return{$$typeof:w,render:v}},Se.isValidElement=me,Se.lazy=function(v){return{$$typeof:D,_payload:{_status:-1,_result:v},_init:$e}},Se.memo=function(v,I){return{$$typeof:C,type:v,compare:I===void 0?null:I}},Se.startTransition=function(v){var I=_.transition;_.transition={};try{v()}finally{_.transition=I}},Se.unstable_act=U,Se.useCallback=function(v,I){return xe.current.useCallback(v,I)},Se.useContext=function(v){return xe.current.useContext(v)},Se.useDebugValue=function(){},Se.useDeferredValue=function(v){return xe.current.useDeferredValue(v)},Se.useEffect=function(v,I){return xe.current.useEffect(v,I)},Se.useId=function(){return xe.current.useId()},Se.useImperativeHandle=function(v,I,V){return xe.current.useImperativeHandle(v,I,V)},Se.useInsertionEffect=function(v,I){return xe.current.useInsertionEffect(v,I)},Se.useLayoutEffect=function(v,I){return xe.current.useLayoutEffect(v,I)},Se.useMemo=function(v,I){return xe.current.useMemo(v,I)},Se.useReducer=function(v,I,V){return xe.current.useReducer(v,I,V)},Se.useRef=function(v){return xe.current.useRef(v)},Se.useState=function(v){return xe.current.useState(v)},Se.useSyncExternalStore=function(v,I,V){return xe.current.useSyncExternalStore(v,I,V)},Se.useTransition=function(){return xe.current.useTransition()},Se.version="18.3.1",Se}var zd;function Is(){return zd||(zd=1,is.exports=lm()),is.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function im(){if(Pd)return Ao;Pd=1;var r=Is(),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function p(w,x,C){var D,S={},$=null,W=null;C!==void 0&&($=""+C),x.key!==void 0&&($=""+x.key),x.ref!==void 0&&(W=x.ref);for(D in x)u.call(x,D)&&!h.hasOwnProperty(D)&&(S[D]=x[D]);if(w&&w.defaultProps)for(D in x=w.defaultProps,x)S[D]===void 0&&(S[D]=x[D]);return{$$typeof:l,type:w,key:$,ref:W,props:S,_owner:d.current}}return Ao.Fragment=s,Ao.jsx=p,Ao.jsxs=p,Ao}var Nd;function am(){return Nd||(Nd=1,ls.exports=im()),ls.exports}var N=am(),Bl={},as={exports:{}},mt={},ss={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function sm(){return Ld||(Ld=1,function(r){function l(_,K){var U=_.length;_.push(K);e:for(;0<U;){var v=U-1>>>1,I=_[v];if(0<d(I,K))_[v]=K,_[U]=I,U=v;else break e}}function s(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var K=_[0],U=_.pop();if(U!==K){_[0]=U;e:for(var v=0,I=_.length,V=I>>>1;v<V;){var Y=2*(v+1)-1,oe=_[Y],ee=Y+1,se=_[ee];if(0>d(oe,U))ee<I&&0>d(se,oe)?(_[v]=se,_[ee]=U,v=ee):(_[v]=oe,_[Y]=U,v=Y);else if(ee<I&&0>d(se,U))_[v]=se,_[ee]=U,v=ee;else break e}}return K}function d(_,K){var U=_.sortIndex-K.sortIndex;return U!==0?U:_.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var p=Date,w=p.now();r.unstable_now=function(){return p.now()-w}}var x=[],C=[],D=1,S=null,$=3,W=!1,H=!1,M=!1,j=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(_){for(var K=s(C);K!==null;){if(K.callback===null)u(C);else if(K.startTime<=_)u(C),K.sortIndex=K.expirationTime,l(x,K);else break;K=s(C)}}function Z(_){if(M=!1,O(_),!H)if(s(x)!==null)H=!0,$e(ne);else{var K=s(C);K!==null&&xe(Z,K.startTime-_)}}function ne(_,K){H=!1,M&&(M=!1,Q(Ee),Ee=-1),W=!0;var U=$;try{for(O(K),S=s(x);S!==null&&(!(S.expirationTime>K)||_&&!ce());){var v=S.callback;if(typeof v=="function"){S.callback=null,$=S.priorityLevel;var I=v(S.expirationTime<=K);K=r.unstable_now(),typeof I=="function"?S.callback=I:S===s(x)&&u(x),O(K)}else u(x);S=s(x)}if(S!==null)var V=!0;else{var Y=s(C);Y!==null&&xe(Z,Y.startTime-K),V=!1}return V}finally{S=null,$=U,W=!1}}var G=!1,X=null,Ee=-1,q=5,me=-1;function ce(){return!(r.unstable_now()-me<q)}function fe(){if(X!==null){var _=r.unstable_now();me=_;var K=!0;try{K=X(!0,_)}finally{K?ae():(G=!1,X=null)}}else G=!1}var ae;if(typeof B=="function")ae=function(){B(fe)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,be=ge.port2;ge.port1.onmessage=fe,ae=function(){be.postMessage(null)}}else ae=function(){j(fe,0)};function $e(_){X=_,G||(G=!0,ae())}function xe(_,K){Ee=j(function(){_(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(_){_.callback=null},r.unstable_continueExecution=function(){H||W||(H=!0,$e(ne))},r.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<_?Math.floor(1e3/_):5},r.unstable_getCurrentPriorityLevel=function(){return $},r.unstable_getFirstCallbackNode=function(){return s(x)},r.unstable_next=function(_){switch($){case 1:case 2:case 3:var K=3;break;default:K=$}var U=$;$=K;try{return _()}finally{$=U}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(_,K){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var U=$;$=_;try{return K()}finally{$=U}},r.unstable_scheduleCallback=function(_,K,U){var v=r.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?v+U:v):U=v,_){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=U+I,_={id:D++,callback:K,priorityLevel:_,startTime:U,expirationTime:I,sortIndex:-1},U>v?(_.sortIndex=U,l(C,_),s(x)===null&&_===s(C)&&(M?(Q(Ee),Ee=-1):M=!0,xe(Z,U-v))):(_.sortIndex=I,l(x,_),H||W||(H=!0,$e(ne))),_},r.unstable_shouldYield=ce,r.unstable_wrapCallback=function(_){var K=$;return function(){var U=$;$=K;try{return _.apply(this,arguments)}finally{$=U}}}}(us)),us}var jd;function um(){return jd||(jd=1,ss.exports=sm()),ss.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function cm(){if(Od)return mt;Od=1;var r=Is(),l=um();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function h(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(d[e]=t,e=0;e<t.length;e++)u.add(t[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D={},S={};function $(e){return x.call(S,e)?!0:x.call(D,e)?!1:C.test(e)?S[e]=!0:(D[e]=!0,!1)}function W(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,n,o){if(t===null||typeof t>"u"||W(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,n,o,i,a,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=c}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){j[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];j[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){j[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){j[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){j[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){j[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){j[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){j[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){j[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,B);j[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,B);j[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,B);j[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){j[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),j.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){j[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,t,n,o){var i=j.hasOwnProperty(t)?j[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,n,i,o)&&(n=null),o||i===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Z=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),G=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),ce=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),_=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,v;function I(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var V=!1;function Y(e,t){if(!e||V)return"";V=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var o=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){o=E}e.call(t.prototype)}else{try{throw Error()}catch(E){o=E}e()}}catch(E){if(E&&o&&typeof E.stack=="string"){for(var i=E.stack.split(`
`),a=o.stack.split(`
`),c=i.length-1,f=a.length-1;1<=c&&0<=f&&i[c]!==a[f];)f--;for(;1<=c&&0<=f;c--,f--)if(i[c]!==a[f]){if(c!==1||f!==1)do if(c--,f--,0>f||i[c]!==a[f]){var m=`
`+i[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=f);break}}}finally{V=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function oe(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case G:return"Portal";case q:return"Profiler";case Ee:return"StrictMode";case ae:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ce:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function R(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function de(e){var t=R(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){o=""+c,a.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function we(e){e._valueTracker||(e._valueTracker=de(e))}function Ae(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=R(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function De(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ue(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fe(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ve(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function at(e,t){t=t.checked,t!=null&&O(e,"checked",t,!1)}function gt(e,t){at(e,t);var n=ve(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?St(e,t.type,n):t.hasOwnProperty("defaultValue")&&St(e,t.type,ve(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function St(e,t,n){(t!=="number"||De(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xt=Array.isArray;function Bt(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ve(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Xt(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ve(n)}}function mi(e,t){var n=ve(t.value),o=ve(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ws(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,Vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},up=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function Gs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function Ks(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Gs(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var cp=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(e,t){if(t){if(cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,or=null,lr=null;function Ys(e){if(e=uo(e)){if(typeof ki!="function")throw Error(s(280));var t=e.stateNode;t&&(t=nl(t),ki(e.stateNode,e.type,t))}}function Xs(e){or?lr?lr.push(e):lr=[e]:or=e}function Zs(){if(or){var e=or,t=lr;if(lr=or=null,Ys(e),t)for(e=0;e<t.length;e++)Ys(t[e])}}function qs(e,t){return e(t)}function Js(){}var Si=!1;function eu(e,t,n){if(Si)return e(t,n);Si=!0;try{return qs(e,t,n)}finally{Si=!1,(or!==null||lr!==null)&&(Js(),Zs())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var o=nl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ei=!1;if(w)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Ei=!1}function dp(e,t,n,o,i,a,c,f,m){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(P){this.onError(P)}}var Qr=!1,Po=null,No=!1,bi=null,fp={onError:function(e){Qr=!0,Po=e}};function pp(e,t,n,o,i,a,c,f,m){Qr=!1,Po=null,dp.apply(fp,arguments)}function hp(e,t,n,o,i,a,c,f,m){if(pp.apply(this,arguments),Qr){if(Qr){var E=Po;Qr=!1,Po=null}else throw Error(s(198));No||(No=!0,bi=E)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(Ln(e)!==e)throw Error(s(188))}function mp(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return nu(i),e;if(a===o)return nu(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==o.return)n=i,o=a;else{for(var c=!1,f=i.child;f;){if(f===n){c=!0,n=i,o=a;break}if(f===o){c=!0,o=i,n=a;break}f=f.sibling}if(!c){for(f=a.child;f;){if(f===n){c=!0,n=a,o=i;break}if(f===o){c=!0,o=a,n=i;break}f=f.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function ru(e){return e=mp(e),e!==null?ou(e):null}function ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ou(e);if(t!==null)return t;e=e.sibling}return null}var lu=l.unstable_scheduleCallback,iu=l.unstable_cancelCallback,gp=l.unstable_shouldYield,vp=l.unstable_requestPaint,He=l.unstable_now,yp=l.unstable_getCurrentPriorityLevel,Ai=l.unstable_ImmediatePriority,au=l.unstable_UserBlockingPriority,Lo=l.unstable_NormalPriority,xp=l.unstable_LowPriority,su=l.unstable_IdlePriority,jo=null,Ut=null;function wp(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Ep,kp=Math.log,Sp=Math.LN2;function Ep(e){return e>>>=0,e===0?32:31-(kp(e)/Sp|0)|0}var Oo=64,Fo=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,c=n&268435455;if(c!==0){var f=c&~i;f!==0?o=Wr(f):(a&=c,a!==0&&(o=Wr(a)))}else c=n&~i,c!==0?o=Wr(c):a!==0&&(o=Wr(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Dt(t),i=1<<n,o|=e[n],t&=~i;return o}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ap(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-Dt(a),f=1<<c,m=i[c];m===-1?((f&n)===0||(f&o)!==0)&&(i[c]=bp(f,t)):m<=t&&(e.expiredLanes|=f),a&=~f}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),e}function $i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function Cp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Dt(n),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~a}}function Ti(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Dt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var Re=0;function cu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var du,Ii,fu,pu,hu,Di=!1,Bo=[],fn=null,pn=null,hn=null,Gr=new Map,Kr=new Map,mn=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function Yr(e,t,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=uo(t),t!==null&&Ii(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,o,i){switch(t){case"focusin":return fn=Yr(fn,e,t,n,o,i),!0;case"dragenter":return pn=Yr(pn,e,t,n,o,i),!0;case"mouseover":return hn=Yr(hn,e,t,n,o,i),!0;case"pointerover":var a=i.pointerId;return Gr.set(a,Yr(Gr.get(a)||null,e,t,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Kr.set(a,Yr(Kr.get(a)||null,e,t,n,o,i)),!0}return!1}function gu(e){var t=jn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=tu(n),t!==null){e.blockedOn=t,hu(e.priority,function(){fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);xi=o,n.target.dispatchEvent(o),xi=null}else return t=uo(n),t!==null&&Ii(t),e.blockedOn=n,!1;t.shift()}return!0}function vu(e,t,n){Uo(e)&&n.delete(t)}function Ip(){Di=!1,fn!==null&&Uo(fn)&&(fn=null),pn!==null&&Uo(pn)&&(pn=null),hn!==null&&Uo(hn)&&(hn=null),Gr.forEach(vu),Kr.forEach(vu)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ip)))}function Zr(e){function t(i){return Xr(i,e)}if(0<Bo.length){Xr(Bo[0],e);for(var n=1;n<Bo.length;n++){var o=Bo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(fn!==null&&Xr(fn,e),pn!==null&&Xr(pn,e),hn!==null&&Xr(hn,e),Gr.forEach(t),Kr.forEach(t),n=0;n<mn.length;n++)o=mn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)gu(n),n.blockedOn===null&&mn.shift()}var ir=Z.ReactCurrentBatchConfig,Ho=!0;function Dp(e,t,n,o){var i=Re,a=ir.transition;ir.transition=null;try{Re=1,Ri(e,t,n,o)}finally{Re=i,ir.transition=a}}function Rp(e,t,n,o){var i=Re,a=ir.transition;ir.transition=null;try{Re=4,Ri(e,t,n,o)}finally{Re=i,ir.transition=a}}function Ri(e,t,n,o){if(Ho){var i=_i(e,t,n,o);if(i===null)Yi(e,t,o,Qo,n),mu(e,o);else if(Tp(i,e,t,n,o))o.stopPropagation();else if(mu(e,o),t&4&&-1<$p.indexOf(e)){for(;i!==null;){var a=uo(i);if(a!==null&&du(a),a=_i(e,t,n,o),a===null&&Yi(e,t,o,Qo,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else Yi(e,t,o,null,n)}}var Qo=null;function _i(e,t,n,o){if(Qo=null,e=wi(o),e=jn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yp()){case Ai:return 1;case au:return 4;case Lo:case xp:return 16;case su:return 536870912;default:return 16}default:return 16}}var gn=null,zi=null,Wo=null;function xu(){if(Wo)return Wo;var e,t=zi,n=t.length,o,i="value"in gn?gn.value:gn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var c=n-e;for(o=1;o<=c&&t[n-o]===i[a-o];o++);return Wo=i.slice(e,1<o?1-o:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function wu(){return!1}function vt(e){function t(n,o,i,a,c){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(a):a[f]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Go:wu,this.isPropagationStopped=wu,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=vt(ar),qr=U({},ar,{view:0,detail:0}),_p=vt(qr),Ni,Li,Jr,Ko=U({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ni=e.screenX-Jr.screenX,Li=e.screenY-Jr.screenY):Li=Ni=0,Jr=e),Ni)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),ku=vt(Ko),zp=U({},Ko,{dataTransfer:0}),Pp=vt(zp),Np=U({},qr,{relatedTarget:0}),ji=vt(Np),Lp=U({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=vt(Lp),Op=U({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fp=vt(Op),Mp=U({},ar,{data:0}),Su=vt(Mp),Bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hp[e])?!!t[e]:!1}function Oi(){return Qp}var Wp=U({},qr,{key:function(e){if(e.key){var t=Bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oi,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=vt(Wp),Gp=U({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eu=vt(Gp),Kp=U({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oi}),Yp=vt(Kp),Xp=U({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=vt(Xp),qp=U({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=vt(qp),eh=[9,13,27,32],Fi=w&&"CompositionEvent"in window,eo=null;w&&"documentMode"in document&&(eo=document.documentMode);var th=w&&"TextEvent"in window&&!eo,bu=w&&(!Fi||eo&&8<eo&&11>=eo),Au=" ",Cu=!1;function $u(e,t){switch(e){case"keyup":return eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function nh(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Cu=!0,Au);case"textInput":return e=t.data,e===Au&&Cu?null:e;default:return null}}function rh(e,t){if(sr)return e==="compositionend"||!Fi&&$u(e,t)?(e=xu(),Wo=zi=gn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bu&&t.locale!=="ko"?null:t.data;default:return null}}var oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oh[e.type]:t==="textarea"}function Du(e,t,n,o){Xs(o),t=Jo(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var to=null,no=null;function lh(e){Ku(e,0)}function Yo(e){var t=pr(e);if(Ae(t))return e}function ih(e,t){if(e==="change")return t}var Ru=!1;if(w){var Mi;if(w){var Bi="oninput"in document;if(!Bi){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),Bi=typeof _u.oninput=="function"}Mi=Bi}else Mi=!1;Ru=Mi&&(!document.documentMode||9<document.documentMode)}function zu(){to&&(to.detachEvent("onpropertychange",Pu),no=to=null)}function Pu(e){if(e.propertyName==="value"&&Yo(no)){var t=[];Du(t,no,e,wi(e)),eu(lh,t)}}function ah(e,t,n){e==="focusin"?(zu(),to=t,no=n,to.attachEvent("onpropertychange",Pu)):e==="focusout"&&zu()}function sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(no)}function uh(e,t){if(e==="click")return Yo(t)}function ch(e,t){if(e==="input"||e==="change")return Yo(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:dh;function ro(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!x.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var n=Nu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nu(n)}}function ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=De();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=De(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fh(e){var t=Ou(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ju(n.ownerDocument.documentElement,n)){if(o!==null&&Ui(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=Lu(n,a);var c=Lu(n,o);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ph=w&&"documentMode"in document&&11>=document.documentMode,ur=null,Hi=null,oo=null,Qi=!1;function Fu(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qi||ur==null||ur!==De(o)||(o=ur,"selectionStart"in o&&Ui(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=Jo(Hi,"onSelect"),0<o.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=ur)))}function Xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Wi={},Mu={};w&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Zo(e){if(Wi[e])return Wi[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mu)return Wi[e]=t[n];return e}var Bu=Zo("animationend"),Uu=Zo("animationiteration"),Hu=Zo("animationstart"),Qu=Zo("transitionend"),Wu=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){Wu.set(e,t),h(t,[e])}for(var Vi=0;Vi<Vu.length;Vi++){var Gi=Vu[Vi],hh=Gi.toLowerCase(),mh=Gi[0].toUpperCase()+Gi.slice(1);vn(hh,"on"+mh)}vn(Bu,"onAnimationEnd"),vn(Uu,"onAnimationIteration"),vn(Hu,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(Qu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Gu(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,hp(o,t,void 0,e),e.currentTarget=null}function Ku(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var c=o.length-1;0<=c;c--){var f=o[c],m=f.instance,E=f.currentTarget;if(f=f.listener,m!==a&&i.isPropagationStopped())break e;Gu(i,f,E),a=m}else for(c=0;c<o.length;c++){if(f=o[c],m=f.instance,E=f.currentTarget,f=f.listener,m!==a&&i.isPropagationStopped())break e;Gu(i,f,E),a=m}}}if(No)throw e=bi,No=!1,bi=null,e}function ze(e,t){var n=t[ta];n===void 0&&(n=t[ta]=new Set);var o=e+"__bubble";n.has(o)||(Yu(t,e,2,!1),n.add(o))}function Ki(e,t,n){var o=0;t&&(o|=4),Yu(n,e,o,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[qo]){e[qo]=!0,u.forEach(function(n){n!=="selectionchange"&&(gh.has(n)||Ki(n,!1,e),Ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,Ki("selectionchange",!1,t))}}function Yu(e,t,n,o){switch(yu(t)){case 1:var i=Dp;break;case 4:i=Rp;break;default:i=Ri}n=i.bind(null,t,n,e),i=void 0,!Ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yi(e,t,n,o,i){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var f=o.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(c===4)for(c=o.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;c=c.return}for(;f!==null;){if(c=jn(f),c===null)return;if(m=c.tag,m===5||m===6){o=a=c;continue e}f=f.parentNode}}o=o.return}eu(function(){var E=a,P=wi(n),L=[];e:{var z=Wu.get(e);if(z!==void 0){var J=Pi,le=e;switch(e){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":J=Vp;break;case"focusin":le="focus",J=ji;break;case"focusout":le="blur",J=ji;break;case"beforeblur":case"afterblur":J=ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Yp;break;case Bu:case Uu:case Hu:J=jp;break;case Qu:J=Zp;break;case"scroll":J=_p;break;case"wheel":J=Jp;break;case"copy":case"cut":case"paste":J=Fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Eu}var ie=(t&4)!==0,Qe=!ie&&e==="scroll",y=ie?z!==null?z+"Capture":null:z;ie=[];for(var g=E,k;g!==null;){k=g;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,y!==null&&(F=Ur(g,y),F!=null&&ie.push(ao(g,F,k)))),Qe)break;g=g.return}0<ie.length&&(z=new J(z,le,null,n,P),L.push({event:z,listeners:ie}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",z&&n!==xi&&(le=n.relatedTarget||n.fromElement)&&(jn(le)||le[qt]))break e;if((J||z)&&(z=P.window===P?P:(z=P.ownerDocument)?z.defaultView||z.parentWindow:window,J?(le=n.relatedTarget||n.toElement,J=E,le=le?jn(le):null,le!==null&&(Qe=Ln(le),le!==Qe||le.tag!==5&&le.tag!==6)&&(le=null)):(J=null,le=E),J!==le)){if(ie=ku,F="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Eu,F="onPointerLeave",y="onPointerEnter",g="pointer"),Qe=J==null?z:pr(J),k=le==null?z:pr(le),z=new ie(F,g+"leave",J,n,P),z.target=Qe,z.relatedTarget=k,F=null,jn(P)===E&&(ie=new ie(y,g+"enter",le,n,P),ie.target=k,ie.relatedTarget=Qe,F=ie),Qe=F,J&&le)t:{for(ie=J,y=le,g=0,k=ie;k;k=dr(k))g++;for(k=0,F=y;F;F=dr(F))k++;for(;0<g-k;)ie=dr(ie),g--;for(;0<k-g;)y=dr(y),k--;for(;g--;){if(ie===y||y!==null&&ie===y.alternate)break t;ie=dr(ie),y=dr(y)}ie=null}else ie=null;J!==null&&Xu(L,z,J,ie,!1),le!==null&&Qe!==null&&Xu(L,Qe,le,ie,!0)}}e:{if(z=E?pr(E):window,J=z.nodeName&&z.nodeName.toLowerCase(),J==="select"||J==="input"&&z.type==="file")var ue=ih;else if(Iu(z))if(Ru)ue=ch;else{ue=sh;var pe=ah}else(J=z.nodeName)&&J.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(ue=uh);if(ue&&(ue=ue(e,E))){Du(L,ue,n,P);break e}pe&&pe(e,z,E),e==="focusout"&&(pe=z._wrapperState)&&pe.controlled&&z.type==="number"&&St(z,"number",z.value)}switch(pe=E?pr(E):window,e){case"focusin":(Iu(pe)||pe.contentEditable==="true")&&(ur=pe,Hi=E,oo=null);break;case"focusout":oo=Hi=ur=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,Fu(L,n,P);break;case"selectionchange":if(ph)break;case"keydown":case"keyup":Fu(L,n,P)}var he;if(Fi)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else sr?$u(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(bu&&n.locale!=="ko"&&(sr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&sr&&(he=xu()):(gn=P,zi="value"in gn?gn.value:gn.textContent,sr=!0)),pe=Jo(E,ye),0<pe.length&&(ye=new Su(ye,e,null,n,P),L.push({event:ye,listeners:pe}),he?ye.data=he:(he=Tu(n),he!==null&&(ye.data=he)))),(he=th?nh(e,n):rh(e,n))&&(E=Jo(E,"onBeforeInput"),0<E.length&&(P=new Su("onBeforeInput","beforeinput",null,n,P),L.push({event:P,listeners:E}),P.data=he))}Ku(L,t)})}function ao(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jo(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ur(e,n),a!=null&&o.unshift(ao(e,a,i)),a=Ur(e,t),a!=null&&o.push(ao(e,a,i))),e=e.return}return o}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,n,o,i){for(var a=t._reactName,c=[];n!==null&&n!==o;){var f=n,m=f.alternate,E=f.stateNode;if(m!==null&&m===o)break;f.tag===5&&E!==null&&(f=E,i?(m=Ur(n,a),m!=null&&c.unshift(ao(n,m,f))):i||(m=Ur(n,a),m!=null&&c.push(ao(n,m,f)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var vh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function Zu(e){return(typeof e=="string"?e:""+e).replace(vh,`
`).replace(yh,"")}function el(e,t,n){if(t=Zu(t),Zu(e)!==t&&n)throw Error(s(425))}function tl(){}var Xi=null,Zi=null;function qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,xh=typeof clearTimeout=="function"?clearTimeout:void 0,qu=typeof Promise=="function"?Promise:void 0,wh=typeof queueMicrotask=="function"?queueMicrotask:typeof qu<"u"?function(e){return qu.resolve(null).then(e).catch(kh)}:Ji;function kh(e){setTimeout(function(){throw e})}function ea(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Zr(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Zr(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+fr,so="__reactProps$"+fr,qt="__reactContainer$"+fr,ta="__reactEvents$"+fr,Sh="__reactListeners$"+fr,Eh="__reactHandles$"+fr;function jn(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[Ht])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function uo(e){return e=e[Ht]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function nl(e){return e[so]||null}var na=[],hr=-1;function xn(e){return{current:e}}function Pe(e){0>hr||(e.current=na[hr],na[hr]=null,hr--)}function _e(e,t){hr++,na[hr]=e.current,e.current=t}var wn={},rt=xn(wn),ct=xn(!1),On=wn;function mr(e,t){var n=e.type.contextTypes;if(!n)return wn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function rl(){Pe(ct),Pe(rt)}function ec(e,t,n){if(rt.current!==wn)throw Error(s(168));_e(rt,t),_e(ct,n)}function tc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(s(108,se(e)||"Unknown",i));return U({},n,o)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,On=rt.current,_e(rt,e),_e(ct,ct.current),!0}function nc(e,t,n){var o=e.stateNode;if(!o)throw Error(s(169));n?(e=tc(e,t,On),o.__reactInternalMemoizedMergedChildContext=e,Pe(ct),Pe(rt),_e(rt,e)):Pe(ct),_e(ct,n)}var Jt=null,ll=!1,ra=!1;function rc(e){Jt===null?Jt=[e]:Jt.push(e)}function bh(e){ll=!0,rc(e)}function kn(){if(!ra&&Jt!==null){ra=!0;var e=0,t=Re;try{var n=Jt;for(Re=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Jt=null,ll=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),lu(Ai,kn),i}finally{Re=t,ra=!1}}return null}var gr=[],vr=0,il=null,al=0,Et=[],bt=0,Fn=null,en=1,tn="";function Mn(e,t){gr[vr++]=al,gr[vr++]=il,il=e,al=t}function oc(e,t,n){Et[bt++]=en,Et[bt++]=tn,Et[bt++]=Fn,Fn=e;var o=en;e=tn;var i=32-Dt(o)-1;o&=~(1<<i),n+=1;var a=32-Dt(t)+i;if(30<a){var c=i-i%5;a=(o&(1<<c)-1).toString(32),o>>=c,i-=c,en=1<<32-Dt(t)+i|n<<i|o,tn=a+e}else en=1<<a|n<<i|o,tn=e}function oa(e){e.return!==null&&(Mn(e,1),oc(e,1,0))}function la(e){for(;e===il;)il=gr[--vr],gr[vr]=null,al=gr[--vr],gr[vr]=null;for(;e===Fn;)Fn=Et[--bt],Et[bt]=null,tn=Et[--bt],Et[bt]=null,en=Et[--bt],Et[bt]=null}var yt=null,xt=null,Le=!1,_t=null;function lc(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,xt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,xt=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(Le){var t=xt;if(t){var n=t;if(!ic(e,t)){if(ia(e))throw Error(s(418));t=yn(n.nextSibling);var o=yt;t&&ic(e,t)?lc(o,n):(e.flags=e.flags&-4097|2,Le=!1,yt=e)}}else{if(ia(e))throw Error(s(418));e.flags=e.flags&-4097|2,Le=!1,yt=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function sl(e){if(e!==yt)return!1;if(!Le)return ac(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qi(e.type,e.memoizedProps)),t&&(t=xt)){if(ia(e))throw sc(),Error(s(418));for(;t;)lc(e,t),t=yn(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=yt?yn(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=xt;e;)e=yn(e.nextSibling)}function yr(){xt=yt=null,Le=!1}function sa(e){_t===null?_t=[e]:_t.push(e)}var Ah=Z.ReactCurrentBatchConfig;function co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var o=n.stateNode}if(!o)throw Error(s(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(c){var f=i.refs;c===null?delete f[a]:f[a]=c},t._stringRef=a,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function ul(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function cc(e){function t(y,g){if(e){var k=y.deletions;k===null?(y.deletions=[g],y.flags|=16):k.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function o(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=In(y,g),y.index=0,y.sibling=null,y}function a(y,g,k){return y.index=k,e?(k=y.alternate,k!==null?(k=k.index,k<g?(y.flags|=2,g):k):(y.flags|=2,g)):(y.flags|=1048576,g)}function c(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,g,k,F){return g===null||g.tag!==6?(g=Ja(k,y.mode,F),g.return=y,g):(g=i(g,k),g.return=y,g)}function m(y,g,k,F){var ue=k.type;return ue===X?P(y,g,k.props.children,F,k.key):g!==null&&(g.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===$e&&uc(ue)===g.type)?(F=i(g,k.props),F.ref=co(y,g,k),F.return=y,F):(F=zl(k.type,k.key,k.props,null,y.mode,F),F.ref=co(y,g,k),F.return=y,F)}function E(y,g,k,F){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=es(k,y.mode,F),g.return=y,g):(g=i(g,k.children||[]),g.return=y,g)}function P(y,g,k,F,ue){return g===null||g.tag!==7?(g=Kn(k,y.mode,F,ue),g.return=y,g):(g=i(g,k),g.return=y,g)}function L(y,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ja(""+g,y.mode,k),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ne:return k=zl(g.type,g.key,g.props,null,y.mode,k),k.ref=co(y,null,g),k.return=y,k;case G:return g=es(g,y.mode,k),g.return=y,g;case $e:var F=g._init;return L(y,F(g._payload),k)}if(Xt(g)||K(g))return g=Kn(g,y.mode,k,null),g.return=y,g;ul(y,g)}return null}function z(y,g,k,F){var ue=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return ue!==null?null:f(y,g,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:return k.key===ue?m(y,g,k,F):null;case G:return k.key===ue?E(y,g,k,F):null;case $e:return ue=k._init,z(y,g,ue(k._payload),F)}if(Xt(k)||K(k))return ue!==null?null:P(y,g,k,F,null);ul(y,k)}return null}function J(y,g,k,F,ue){if(typeof F=="string"&&F!==""||typeof F=="number")return y=y.get(k)||null,f(g,y,""+F,ue);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ne:return y=y.get(F.key===null?k:F.key)||null,m(g,y,F,ue);case G:return y=y.get(F.key===null?k:F.key)||null,E(g,y,F,ue);case $e:var pe=F._init;return J(y,g,k,pe(F._payload),ue)}if(Xt(F)||K(F))return y=y.get(k)||null,P(g,y,F,ue,null);ul(g,F)}return null}function le(y,g,k,F){for(var ue=null,pe=null,he=g,ye=g=0,Ze=null;he!==null&&ye<k.length;ye++){he.index>ye?(Ze=he,he=null):Ze=he.sibling;var Te=z(y,he,k[ye],F);if(Te===null){he===null&&(he=Ze);break}e&&he&&Te.alternate===null&&t(y,he),g=a(Te,g,ye),pe===null?ue=Te:pe.sibling=Te,pe=Te,he=Ze}if(ye===k.length)return n(y,he),Le&&Mn(y,ye),ue;if(he===null){for(;ye<k.length;ye++)he=L(y,k[ye],F),he!==null&&(g=a(he,g,ye),pe===null?ue=he:pe.sibling=he,pe=he);return Le&&Mn(y,ye),ue}for(he=o(y,he);ye<k.length;ye++)Ze=J(he,y,ye,k[ye],F),Ze!==null&&(e&&Ze.alternate!==null&&he.delete(Ze.key===null?ye:Ze.key),g=a(Ze,g,ye),pe===null?ue=Ze:pe.sibling=Ze,pe=Ze);return e&&he.forEach(function(Dn){return t(y,Dn)}),Le&&Mn(y,ye),ue}function ie(y,g,k,F){var ue=K(k);if(typeof ue!="function")throw Error(s(150));if(k=ue.call(k),k==null)throw Error(s(151));for(var pe=ue=null,he=g,ye=g=0,Ze=null,Te=k.next();he!==null&&!Te.done;ye++,Te=k.next()){he.index>ye?(Ze=he,he=null):Ze=he.sibling;var Dn=z(y,he,Te.value,F);if(Dn===null){he===null&&(he=Ze);break}e&&he&&Dn.alternate===null&&t(y,he),g=a(Dn,g,ye),pe===null?ue=Dn:pe.sibling=Dn,pe=Dn,he=Ze}if(Te.done)return n(y,he),Le&&Mn(y,ye),ue;if(he===null){for(;!Te.done;ye++,Te=k.next())Te=L(y,Te.value,F),Te!==null&&(g=a(Te,g,ye),pe===null?ue=Te:pe.sibling=Te,pe=Te);return Le&&Mn(y,ye),ue}for(he=o(y,he);!Te.done;ye++,Te=k.next())Te=J(he,y,ye,Te.value,F),Te!==null&&(e&&Te.alternate!==null&&he.delete(Te.key===null?ye:Te.key),g=a(Te,g,ye),pe===null?ue=Te:pe.sibling=Te,pe=Te);return e&&he.forEach(function(om){return t(y,om)}),Le&&Mn(y,ye),ue}function Qe(y,g,k,F){if(typeof k=="object"&&k!==null&&k.type===X&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:e:{for(var ue=k.key,pe=g;pe!==null;){if(pe.key===ue){if(ue=k.type,ue===X){if(pe.tag===7){n(y,pe.sibling),g=i(pe,k.props.children),g.return=y,y=g;break e}}else if(pe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===$e&&uc(ue)===pe.type){n(y,pe.sibling),g=i(pe,k.props),g.ref=co(y,pe,k),g.return=y,y=g;break e}n(y,pe);break}else t(y,pe);pe=pe.sibling}k.type===X?(g=Kn(k.props.children,y.mode,F,k.key),g.return=y,y=g):(F=zl(k.type,k.key,k.props,null,y.mode,F),F.ref=co(y,g,k),F.return=y,y=F)}return c(y);case G:e:{for(pe=k.key;g!==null;){if(g.key===pe)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(y,g.sibling),g=i(g,k.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=es(k,y.mode,F),g.return=y,y=g}return c(y);case $e:return pe=k._init,Qe(y,g,pe(k._payload),F)}if(Xt(k))return le(y,g,k,F);if(K(k))return ie(y,g,k,F);ul(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,k),g.return=y,y=g):(n(y,g),g=Ja(k,y.mode,F),g.return=y,y=g),c(y)):n(y,g)}return Qe}var xr=cc(!0),dc=cc(!1),cl=xn(null),dl=null,wr=null,ua=null;function ca(){ua=wr=dl=null}function da(e){var t=cl.current;Pe(cl),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){dl=e,ua=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ft=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(ua!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(dl===null)throw Error(s(308));wr=e,dl.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Bn=null;function pa(e){Bn===null?Bn=[e]:Bn.push(e)}function fc(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,pa(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,o)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Sn=!1;function ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,nn(e,n)}return i=o.interleaved,i===null?(t.next=t,pa(o)):(t.next=i.next,i.next=t),o.interleaved=t,nn(e,n)}function fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ti(e,n)}}function hc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=c:a=a.next=c,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pl(e,t,n,o){var i=e.updateQueue;Sn=!1;var a=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,E=m.next;m.next=null,c===null?a=E:c.next=E,c=m;var P=e.alternate;P!==null&&(P=P.updateQueue,f=P.lastBaseUpdate,f!==c&&(f===null?P.firstBaseUpdate=E:f.next=E,P.lastBaseUpdate=m))}if(a!==null){var L=i.baseState;c=0,P=E=m=null,f=a;do{var z=f.lane,J=f.eventTime;if((o&z)===z){P!==null&&(P=P.next={eventTime:J,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var le=e,ie=f;switch(z=t,J=n,ie.tag){case 1:if(le=ie.payload,typeof le=="function"){L=le.call(J,L,z);break e}L=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ie.payload,z=typeof le=="function"?le.call(J,L,z):le,z==null)break e;L=U({},L,z);break e;case 2:Sn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,z=i.effects,z===null?i.effects=[f]:z.push(f))}else J={eventTime:J,lane:z,tag:f.tag,payload:f.payload,callback:f.callback,next:null},P===null?(E=P=J,m=L):P=P.next=J,c|=z;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;z=f,f=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);if(P===null&&(m=L),i.baseState=m,i.firstBaseUpdate=E,i.lastBaseUpdate=P,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Qn|=c,e.lanes=c,e.memoizedState=L}}function mc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(s(191,i));i.call(o)}}}var fo={},Qt=xn(fo),po=xn(fo),ho=xn(fo);function Un(e){if(e===fo)throw Error(s(174));return e}function ma(e,t){switch(_e(ho,t),_e(po,e),_e(Qt,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}Pe(Qt),_e(Qt,t)}function Sr(){Pe(Qt),Pe(po),Pe(ho)}function gc(e){Un(ho.current);var t=Un(Qt.current),n=gi(t,e.type);t!==n&&(_e(po,e),_e(Qt,n))}function ga(e){po.current===e&&(Pe(Qt),Pe(po))}var je=xn(0);function hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function ya(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var ml=Z.ReactCurrentDispatcher,xa=Z.ReactCurrentBatchConfig,Hn=0,Oe=null,Ge=null,Ye=null,gl=!1,mo=!1,go=0,Ch=0;function ot(){throw Error(s(321))}function wa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function ka(e,t,n,o,i,a){if(Hn=a,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ml.current=e===null||e.memoizedState===null?Dh:Rh,e=n(o,i),mo){a=0;do{if(mo=!1,go=0,25<=a)throw Error(s(301));a+=1,Ye=Ge=null,t.updateQueue=null,ml.current=_h,e=n(o,i)}while(mo)}if(ml.current=xl,t=Ge!==null&&Ge.next!==null,Hn=0,Ye=Ge=Oe=null,gl=!1,t)throw Error(s(300));return e}function Sa(){var e=go!==0;return go=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Oe.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ct(){if(Ge===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ye===null?Oe.memoizedState:Ye.next;if(t!==null)Ye=t,Ge=e;else{if(e===null)throw Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ye===null?Oe.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function vo(e,t){return typeof t=="function"?t(e):t}function Ea(e){var t=Ct(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var o=Ge,i=o.baseQueue,a=n.pending;if(a!==null){if(i!==null){var c=i.next;i.next=a.next,a.next=c}o.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,o=o.baseState;var f=c=null,m=null,E=a;do{var P=E.lane;if((Hn&P)===P)m!==null&&(m=m.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),o=E.hasEagerState?E.eagerState:e(o,E.action);else{var L={lane:P,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};m===null?(f=m=L,c=o):m=m.next=L,Oe.lanes|=P,Qn|=P}E=E.next}while(E!==null&&E!==a);m===null?c=o:m.next=f,Rt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseState=c,t.baseQueue=m,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Oe.lanes|=a,Qn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=Ct(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do a=e(a,c.action),c=c.next;while(c!==i);Rt(a,t.memoizedState)||(ft=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function vc(){}function yc(e,t){var n=Oe,o=Ct(),i=t(),a=!Rt(o.memoizedState,i);if(a&&(o.memoizedState=i,ft=!0),o=o.queue,Aa(kc.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,yo(9,wc.bind(null,n,o,i,t),void 0,null),Xe===null)throw Error(s(349));(Hn&30)!==0||xc(n,t,i)}return i}function xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wc(e,t,n,o){t.value=n,t.getSnapshot=o,Sc(t)&&Ec(e)}function kc(e,t,n){return n(function(){Sc(t)&&Ec(e)})}function Sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Ec(e){var t=nn(e,1);t!==null&&Lt(t,e,1,-1)}function bc(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ih.bind(null,Oe,e),[t.memoizedState,e]}function yo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Ac(){return Ct().memoizedState}function vl(e,t,n,o){var i=Wt();Oe.flags|=e,i.memoizedState=yo(1|t,n,void 0,o===void 0?null:o)}function yl(e,t,n,o){var i=Ct();o=o===void 0?null:o;var a=void 0;if(Ge!==null){var c=Ge.memoizedState;if(a=c.destroy,o!==null&&wa(o,c.deps)){i.memoizedState=yo(t,n,a,o);return}}Oe.flags|=e,i.memoizedState=yo(1|t,n,a,o)}function Cc(e,t){return vl(8390656,8,e,t)}function Aa(e,t){return yl(2048,8,e,t)}function $c(e,t){return yl(4,2,e,t)}function Tc(e,t){return yl(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dc(e,t,n){return n=n!=null?n.concat([e]):null,yl(4,4,Ic.bind(null,t,e),n)}function Ca(){}function Rc(e,t){var n=Ct();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&wa(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function _c(e,t){var n=Ct();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&wa(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function zc(e,t,n){return(Hn&21)===0?(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n):(Rt(n,t)||(n=uu(),Oe.lanes|=n,Qn|=n,e.baseState=!0),t)}function $h(e,t){var n=Re;Re=n!==0&&4>n?n:4,e(!0);var o=xa.transition;xa.transition={};try{e(!1),t()}finally{Re=n,xa.transition=o}}function Pc(){return Ct().memoizedState}function Th(e,t,n){var o=$n(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Nc(e))Lc(t,n);else if(n=fc(e,t,n,o),n!==null){var i=ut();Lt(n,e,o,i),jc(n,t,o)}}function Ih(e,t,n){var o=$n(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Lc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var c=t.lastRenderedState,f=a(c,n);if(i.hasEagerState=!0,i.eagerState=f,Rt(f,c)){var m=t.interleaved;m===null?(i.next=i,pa(t)):(i.next=m.next,m.next=i),t.interleaved=i;return}}catch{}finally{}n=fc(e,t,i,o),n!==null&&(i=ut(),Lt(n,e,o,i),jc(n,t,o))}}function Nc(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Lc(e,t){mo=gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ti(e,n)}}var xl={readContext:At,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Dh={readContext:At,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:Cc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vl(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vl(4194308,4,e,t)},useInsertionEffect:function(e,t){return vl(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Wt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Th.bind(null,Oe,e),[o.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:Ca,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=$h.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Oe,i=Wt();if(Le){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Xe===null)throw Error(s(349));(Hn&30)!==0||xc(o,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Cc(kc.bind(null,o,a,e),[e]),o.flags|=2048,yo(9,wc.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=Wt(),t=Xe.identifierPrefix;if(Le){var n=tn,o=en;n=(o&~(1<<32-Dt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ch++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rh={readContext:At,useCallback:Rc,useContext:At,useEffect:Aa,useImperativeHandle:Dc,useInsertionEffect:$c,useLayoutEffect:Tc,useMemo:_c,useReducer:Ea,useRef:Ac,useState:function(){return Ea(vo)},useDebugValue:Ca,useDeferredValue:function(e){var t=Ct();return zc(t,Ge.memoizedState,e)},useTransition:function(){var e=Ea(vo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Pc,unstable_isNewReconciler:!1},_h={readContext:At,useCallback:Rc,useContext:At,useEffect:Aa,useImperativeHandle:Dc,useInsertionEffect:$c,useLayoutEffect:Tc,useMemo:_c,useReducer:ba,useRef:Ac,useState:function(){return ba(vo)},useDebugValue:Ca,useDeferredValue:function(e){var t=Ct();return Ge===null?t.memoizedState=e:zc(t,Ge.memoizedState,e)},useTransition:function(){var e=ba(vo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Pc,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $a(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wl={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=ut(),i=$n(e),a=rn(o,i);a.payload=t,n!=null&&(a.callback=n),t=En(e,a,i),t!==null&&(Lt(t,e,i,o),fl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=ut(),i=$n(e),a=rn(o,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=En(e,a,i),t!==null&&(Lt(t,e,i,o),fl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),o=$n(e),i=rn(n,o);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,o),t!==null&&(Lt(t,e,o,n),fl(t,e,o))}};function Oc(e,t,n,o,i,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,c):t.prototype&&t.prototype.isPureReactComponent?!ro(n,o)||!ro(i,a):!0}function Fc(e,t,n){var o=!1,i=wn,a=t.contextType;return typeof a=="object"&&a!==null?a=At(a):(i=dt(t)?On:rt.current,o=t.contextTypes,a=(o=o!=null)?mr(e,i):wn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Mc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ha(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=At(a):(a=dt(t)?On:rt.current,i.context=mr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&($a(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wl.enqueueReplaceState(i,i.state,null),pl(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t){try{var n="",o=t;do n+=oe(o),o=o.return;while(o);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Da(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zh=typeof WeakMap=="function"?WeakMap:Map;function Bc(e,t,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){$l||($l=!0,Wa=o),Da(e,t)},n}function Uc(e,t,n){n=rn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){Da(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Da(e,t),typeof o!="function"&&(An===null?An=new Set([this]):An.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Hc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new zh;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=Gh.bind(null,e,t,n),t.then(e,e))}function Qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,n,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rn(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ph=Z.ReactCurrentOwner,ft=!1;function st(e,t,n,o){t.child=e===null?dc(t,null,n,o):xr(t,e.child,n,o)}function Vc(e,t,n,o,i){n=n.render;var a=t.ref;return kr(t,i),o=ka(e,t,n,o,a,i),n=Sa(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Le&&n&&oa(t),t.flags|=1,st(e,t,o,i),t.child)}function Gc(e,t,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!qa(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Kc(e,t,a,o,i)):(e=zl(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var c=a.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(c,o)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=In(a,o),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,n,o,i){if(e!==null){var a=e.memoizedProps;if(ro(a,o)&&e.ref===t.ref)if(ft=!1,t.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,on(e,t,i)}return Ra(e,t,n,o,i)}function Yc(e,t,n){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Ar,wt),wt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Ar,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,_e(Ar,wt),wt|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,_e(Ar,wt),wt|=o;return st(e,t,i,n),t.child}function Xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,n,o,i){var a=dt(n)?On:rt.current;return a=mr(t,a),kr(t,i),n=ka(e,t,n,o,a,i),o=Sa(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Le&&o&&oa(t),t.flags|=1,st(e,t,n,i),t.child)}function Zc(e,t,n,o,i){if(dt(n)){var a=!0;ol(t)}else a=!1;if(kr(t,i),t.stateNode===null)Sl(e,t),Fc(t,n,o),Ta(t,n,o,i),o=!0;else if(e===null){var c=t.stateNode,f=t.memoizedProps;c.props=f;var m=c.context,E=n.contextType;typeof E=="object"&&E!==null?E=At(E):(E=dt(n)?On:rt.current,E=mr(t,E));var P=n.getDerivedStateFromProps,L=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function";L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==o||m!==E)&&Mc(t,c,o,E),Sn=!1;var z=t.memoizedState;c.state=z,pl(t,o,c,i),m=t.memoizedState,f!==o||z!==m||ct.current||Sn?(typeof P=="function"&&($a(t,n,P,o),m=t.memoizedState),(f=Sn||Oc(t,n,f,o,z,m,E))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=m),c.props=o,c.state=m,c.context=E,o=f):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{c=t.stateNode,pc(e,t),f=t.memoizedProps,E=t.type===t.elementType?f:zt(t.type,f),c.props=E,L=t.pendingProps,z=c.context,m=n.contextType,typeof m=="object"&&m!==null?m=At(m):(m=dt(n)?On:rt.current,m=mr(t,m));var J=n.getDerivedStateFromProps;(P=typeof J=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==L||z!==m)&&Mc(t,c,o,m),Sn=!1,z=t.memoizedState,c.state=z,pl(t,o,c,i);var le=t.memoizedState;f!==L||z!==le||ct.current||Sn?(typeof J=="function"&&($a(t,n,J,o),le=t.memoizedState),(E=Sn||Oc(t,n,E,o,z,le,m)||!1)?(P||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,le,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,le,m)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=le),c.props=o,c.state=le,c.context=m,o=E):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),o=!1)}return _a(e,t,n,o,a,i)}function _a(e,t,n,o,i,a){Xc(e,t);var c=(t.flags&128)!==0;if(!o&&!c)return i&&nc(t,n,!1),on(e,t,a);o=t.stateNode,Ph.current=t;var f=c&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&c?(t.child=xr(t,e.child,null,a),t.child=xr(t,null,f,a)):st(e,t,f,a),t.memoizedState=o.state,i&&nc(t,n,!0),t.child}function qc(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),ma(e,t.containerInfo)}function Jc(e,t,n,o,i){return yr(),sa(i),t.flags|=256,st(e,t,n,o),t.child}var za={dehydrated:null,treeContext:null,retryLane:0};function Pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,n){var o=t.pendingProps,i=je.current,a=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(je,i&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=o.children,e=o.fallback,a?(o=t.mode,a=t.child,c={mode:"hidden",children:c},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=Pl(c,o,0,null),e=Kn(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Pa(n),t.memoizedState=za,e):Na(t,c));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return Nh(e,t,c,o,f,i,n);if(a){a=o.fallback,c=t.mode,i=e.child,f=i.sibling;var m={mode:"hidden",children:o.children};return(c&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=m,t.deletions=null):(o=In(i,m),o.subtreeFlags=i.subtreeFlags&14680064),f!==null?a=In(f,a):(a=Kn(a,c,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,c=e.child.memoizedState,c=c===null?Pa(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~n,t.memoizedState=za,o}return a=e.child,e=a.sibling,o=In(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Na(e,t){return t=Pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kl(e,t,n,o){return o!==null&&sa(o),xr(t,e.child,null,n),e=Na(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nh(e,t,n,o,i,a,c){if(n)return t.flags&256?(t.flags&=-257,o=Ia(Error(s(422))),kl(e,t,c,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=Pl({mode:"visible",children:o.children},i,0,null),a=Kn(a,i,c,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&xr(t,e.child,null,c),t.child.memoizedState=Pa(c),t.memoizedState=za,a);if((t.mode&1)===0)return kl(e,t,c,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var f=o.dgst;return o=f,a=Error(s(419)),o=Ia(a,o,void 0),kl(e,t,c,o)}if(f=(c&e.childLanes)!==0,ft||f){if(o=Xe,o!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|c))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,nn(e,i),Lt(o,e,i,-1))}return Za(),o=Ia(Error(s(421))),kl(e,t,c,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kh.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,xt=yn(i.nextSibling),yt=t,Le=!0,_t=null,e!==null&&(Et[bt++]=en,Et[bt++]=tn,Et[bt++]=Fn,en=e.id,tn=e.overflow,Fn=t),t=Na(t,o.children),t.flags|=4096,t)}function td(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),fa(e.return,t,n)}function La(e,t,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function nd(e,t,n){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(st(e,t,o.children,n),o=je.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,n,t);else if(e.tag===19)td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(_e(je,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&hl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),La(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&hl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}La(t,!0,n,null,a);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Sl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lh(e,t,n){switch(t.tag){case 3:qc(t),yr();break;case 5:gc(t);break;case 1:dt(t.type)&&ol(t);break;case 4:ma(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;_e(cl,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(_e(je,je.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ed(e,t,n):(_e(je,je.current&1),e=on(e,t,n),e!==null?e.sibling:null);_e(je,je.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return nd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(je,je.current),o)break;return null;case 22:case 23:return t.lanes=0,Yc(e,t,n)}return on(e,t,n)}var rd,ja,od,ld;rd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ja=function(){},od=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Un(Qt.current);var a=null;switch(n){case"input":i=Ue(e,i),o=Ue(e,o),a=[];break;case"select":i=U({},i,{value:void 0}),o=U({},o,{value:void 0}),a=[];break;case"textarea":i=Zt(e,i),o=Zt(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=tl)}vi(n,o);var c;n=null;for(E in i)if(!o.hasOwnProperty(E)&&i.hasOwnProperty(E)&&i[E]!=null)if(E==="style"){var f=i[E];for(c in f)f.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(d.hasOwnProperty(E)?a||(a=[]):(a=a||[]).push(E,null));for(E in o){var m=o[E];if(f=i!=null?i[E]:void 0,o.hasOwnProperty(E)&&m!==f&&(m!=null||f!=null))if(E==="style")if(f){for(c in f)!f.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in m)m.hasOwnProperty(c)&&f[c]!==m[c]&&(n||(n={}),n[c]=m[c])}else n||(a||(a=[]),a.push(E,n)),n=m;else E==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(a=a||[]).push(E,m)):E==="children"?typeof m!="string"&&typeof m!="number"||(a=a||[]).push(E,""+m):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(d.hasOwnProperty(E)?(m!=null&&E==="onScroll"&&ze("scroll",e),a||f===m||(a=[])):(a=a||[]).push(E,m))}n&&(a=a||[]).push("style",n);var E=a;(t.updateQueue=E)&&(t.flags|=4)}},ld=function(e,t,n,o){n!==o&&(t.flags|=4)};function xo(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function jh(e,t,n){var o=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return dt(t.type)&&rl(),lt(t),null;case 3:return o=t.stateNode,Sr(),Pe(ct),Pe(rt),ya(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(Ka(_t),_t=null))),ja(e,t),lt(t),null;case 5:ga(t);var i=Un(ho.current);if(n=t.type,e!==null&&t.stateNode!=null)od(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(s(166));return lt(t),null}if(e=Un(Qt.current),sl(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[Ht]=t,o[so]=a,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",o),ze("close",o);break;case"iframe":case"object":case"embed":ze("load",o);break;case"video":case"audio":for(i=0;i<lo.length;i++)ze(lo[i],o);break;case"source":ze("error",o);break;case"img":case"image":case"link":ze("error",o),ze("load",o);break;case"details":ze("toggle",o);break;case"input":Fe(o,a),ze("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},ze("invalid",o);break;case"textarea":Fr(o,a),ze("invalid",o)}vi(n,a),i=null;for(var c in a)if(a.hasOwnProperty(c)){var f=a[c];c==="children"?typeof f=="string"?o.textContent!==f&&(a.suppressHydrationWarning!==!0&&el(o.textContent,f,e),i=["children",f]):typeof f=="number"&&o.textContent!==""+f&&(a.suppressHydrationWarning!==!0&&el(o.textContent,f,e),i=["children",""+f]):d.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&ze("scroll",o)}switch(n){case"input":we(o),Mt(o,a,!0);break;case"textarea":we(o),Qs(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=tl)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ws(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=c.createElement(n,{is:o.is}):(e=c.createElement(n),n==="select"&&(c=e,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):e=c.createElementNS(e,n),e[Ht]=t,e[so]=o,rd(e,t,!1,!1),t.stateNode=e;e:{switch(c=yi(n,o),n){case"dialog":ze("cancel",e),ze("close",e),i=o;break;case"iframe":case"object":case"embed":ze("load",e),i=o;break;case"video":case"audio":for(i=0;i<lo.length;i++)ze(lo[i],e);i=o;break;case"source":ze("error",e),i=o;break;case"img":case"image":case"link":ze("error",e),ze("load",e),i=o;break;case"details":ze("toggle",e),i=o;break;case"input":Fe(e,o),i=Ue(e,o),ze("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=U({},o,{value:void 0}),ze("invalid",e);break;case"textarea":Fr(e,o),i=Zt(e,o),ze("invalid",e);break;default:i=o}vi(n,i),f=i;for(a in f)if(f.hasOwnProperty(a)){var m=f[a];a==="style"?Ks(e,m):a==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Vs(e,m)):a==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&Mr(e,m):typeof m=="number"&&Mr(e,""+m):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?m!=null&&a==="onScroll"&&ze("scroll",e):m!=null&&O(e,a,m,c))}switch(n){case"input":we(e),Mt(e,o,!1);break;case"textarea":we(e),Qs(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ve(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Bt(e,!!o.multiple,a,!1):o.defaultValue!=null&&Bt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)ld(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(n=Un(ho.current),Un(Qt.current),sl(t)){if(o=t.stateNode,n=t.memoizedProps,o[Ht]=t,(a=o.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:el(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&el(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Ht]=t,t.stateNode=o}return lt(t),null;case 13:if(Pe(je),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)sc(),yr(),t.flags|=98560,a=!1;else if(a=sl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Ht]=t}else yr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),a=!1}else _t!==null&&(Ka(_t),_t=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(je.current&1)!==0?Ke===0&&(Ke=3):Za())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Sr(),ja(e,t),e===null&&io(t.stateNode.containerInfo),lt(t),null;case 10:return da(t.type._context),lt(t),null;case 17:return dt(t.type)&&rl(),lt(t),null;case 19:if(Pe(je),a=t.memoizedState,a===null)return lt(t),null;if(o=(t.flags&128)!==0,c=a.rendering,c===null)if(o)xo(a,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=hl(e),c!==null){for(t.flags|=128,xo(a,!1),o=c.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(je,je.current&1|2),t.child}e=e.sibling}a.tail!==null&&He()>Cr&&(t.flags|=128,o=!0,xo(a,!1),t.lanes=4194304)}else{if(!o)if(e=hl(c),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Le)return lt(t),null}else 2*He()-a.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,o=!0,xo(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(n=a.last,n!==null?n.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=He(),t.sibling=null,n=je.current,_e(je,o?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return Xa(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(wt&1073741824)!==0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Oh(e,t){switch(la(t),t.tag){case 1:return dt(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),Pe(ct),Pe(rt),ya(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(Pe(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(je),null;case 4:return Sr(),null;case 10:return da(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var El=!1,it=!1,Fh=typeof WeakSet=="function"?WeakSet:Set,re=null;function br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Me(e,t,o)}else n.current=null}function Oa(e,t,n){try{n()}catch(o){Me(e,t,o)}}var id=!1;function Mh(e,t){if(Xi=Ho,e=Ou(),Ui(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var c=0,f=-1,m=-1,E=0,P=0,L=e,z=null;t:for(;;){for(var J;L!==n||i!==0&&L.nodeType!==3||(f=c+i),L!==a||o!==0&&L.nodeType!==3||(m=c+o),L.nodeType===3&&(c+=L.nodeValue.length),(J=L.firstChild)!==null;)z=L,L=J;for(;;){if(L===e)break t;if(z===n&&++E===i&&(f=c),z===a&&++P===o&&(m=c),(J=L.nextSibling)!==null)break;L=z,z=L.parentNode}L=J}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},Ho=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var le=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ie=le.memoizedProps,Qe=le.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?ie:zt(t.type,ie),Qe);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(F){Me(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return le=id,id=!1,le}function wo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Oa(t,n,a)}i=i.next}while(i!==o)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ad(e){var t=e.alternate;t!==null&&(e.alternate=null,ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[so],delete t[ta],delete t[Sh],delete t[Eh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sd(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ma(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(o!==4&&(e=e.child,e!==null))for(Ma(e,t,n),e=e.sibling;e!==null;)Ma(e,t,n),e=e.sibling}function Ba(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}var et=null,Pt=!1;function bn(e,t,n){for(n=n.child;n!==null;)cd(e,t,n),n=n.sibling}function cd(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:it||br(n,t);case 6:var o=et,i=Pt;et=null,bn(e,t,n),et=o,Pt=i,et!==null&&(Pt?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Pt?(e=et,n=n.stateNode,e.nodeType===8?ea(e.parentNode,n):e.nodeType===1&&ea(e,n),Zr(e)):ea(et,n.stateNode));break;case 4:o=et,i=Pt,et=n.stateNode.containerInfo,Pt=!0,bn(e,t,n),et=o,Pt=i;break;case 0:case 11:case 14:case 15:if(!it&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Oa(n,t,c),i=i.next}while(i!==o)}bn(e,t,n);break;case 1:if(!it&&(br(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(f){Me(n,t,f)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(it=(o=it)||n.memoizedState!==null,bn(e,t,n),it=o):bn(e,t,n);break;default:bn(e,t,n)}}function dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fh),t.forEach(function(o){var i=Yh.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var a=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 5:et=f.stateNode,Pt=!1;break e;case 3:et=f.stateNode.containerInfo,Pt=!0;break e;case 4:et=f.stateNode.containerInfo,Pt=!0;break e}f=f.return}if(et===null)throw Error(s(160));cd(a,c,i),et=null,Pt=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(E){Me(i,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fd(t,e),t=t.sibling}function fd(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Vt(e),o&4){try{wo(3,e,e.return),bl(3,e)}catch(ie){Me(e,e.return,ie)}try{wo(5,e,e.return)}catch(ie){Me(e,e.return,ie)}}break;case 1:Nt(t,e),Vt(e),o&512&&n!==null&&br(n,n.return);break;case 5:if(Nt(t,e),Vt(e),o&512&&n!==null&&br(n,n.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(ie){Me(e,e.return,ie)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,c=n!==null?n.memoizedProps:a,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&a.type==="radio"&&a.name!=null&&at(i,a),yi(f,c);var E=yi(f,a);for(c=0;c<m.length;c+=2){var P=m[c],L=m[c+1];P==="style"?Ks(i,L):P==="dangerouslySetInnerHTML"?Vs(i,L):P==="children"?Mr(i,L):O(i,P,L,E)}switch(f){case"input":gt(i,a);break;case"textarea":mi(i,a);break;case"select":var z=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var J=a.value;J!=null?Bt(i,!!a.multiple,J,!1):z!==!!a.multiple&&(a.defaultValue!=null?Bt(i,!!a.multiple,a.defaultValue,!0):Bt(i,!!a.multiple,a.multiple?[]:"",!1))}i[so]=a}catch(ie){Me(e,e.return,ie)}}break;case 6:if(Nt(t,e),Vt(e),o&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(ie){Me(e,e.return,ie)}}break;case 3:if(Nt(t,e),Vt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(ie){Me(e,e.return,ie)}break;case 4:Nt(t,e),Vt(e);break;case 13:Nt(t,e),Vt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Qa=He())),o&4&&dd(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(it=(E=it)||P,Nt(t,e),it=E):Nt(t,e),Vt(e),o&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!P&&(e.mode&1)!==0)for(re=e,P=e.child;P!==null;){for(L=re=P;re!==null;){switch(z=re,J=z.child,z.tag){case 0:case 11:case 14:case 15:wo(4,z,z.return);break;case 1:br(z,z.return);var le=z.stateNode;if(typeof le.componentWillUnmount=="function"){o=z,n=z.return;try{t=o,le.props=t.memoizedProps,le.state=t.memoizedState,le.componentWillUnmount()}catch(ie){Me(o,n,ie)}}break;case 5:br(z,z.return);break;case 22:if(z.memoizedState!==null){md(L);continue}}J!==null?(J.return=z,re=J):md(L)}P=P.sibling}e:for(P=null,L=e;;){if(L.tag===5){if(P===null){P=L;try{i=L.stateNode,E?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(f=L.stateNode,m=L.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=Gs("display",c))}catch(ie){Me(e,e.return,ie)}}}else if(L.tag===6){if(P===null)try{L.stateNode.nodeValue=E?"":L.memoizedProps}catch(ie){Me(e,e.return,ie)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;P===L&&(P=null),L=L.return}P===L&&(P=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:Nt(t,e),Vt(e),o&4&&dd(e);break;case 21:break;default:Nt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sd(n)){var o=n;break e}n=n.return}throw Error(s(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Mr(i,""),o.flags&=-33);var a=ud(e);Ba(e,a,i);break;case 3:case 4:var c=o.stateNode.containerInfo,f=ud(e);Ma(e,f,c);break;default:throw Error(s(161))}}catch(m){Me(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bh(e,t,n){re=e,pd(e)}function pd(e,t,n){for(var o=(e.mode&1)!==0;re!==null;){var i=re,a=i.child;if(i.tag===22&&o){var c=i.memoizedState!==null||El;if(!c){var f=i.alternate,m=f!==null&&f.memoizedState!==null||it;f=El;var E=it;if(El=c,(it=m)&&!E)for(re=i;re!==null;)c=re,m=c.child,c.tag===22&&c.memoizedState!==null?gd(i):m!==null?(m.return=c,re=m):gd(i);for(;a!==null;)re=a,pd(a),a=a.sibling;re=i,El=f,it=E}hd(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,re=a):hd(e)}}function hd(e){for(;re!==null;){var t=re;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:it||bl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!it)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&mc(t,a,o);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mc(t,c,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var P=E.memoizedState;if(P!==null){var L=P.dehydrated;L!==null&&Zr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}it||t.flags&512&&Fa(t)}catch(z){Me(t,t.return,z)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function md(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function gd(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bl(4,t)}catch(m){Me(t,n,m)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(m){Me(t,i,m)}}var a=t.return;try{Fa(t)}catch(m){Me(t,a,m)}break;case 5:var c=t.return;try{Fa(t)}catch(m){Me(t,c,m)}}}catch(m){Me(t,t.return,m)}if(t===e){re=null;break}var f=t.sibling;if(f!==null){f.return=t.return,re=f;break}re=t.return}}var Uh=Math.ceil,Al=Z.ReactCurrentDispatcher,Ua=Z.ReactCurrentOwner,$t=Z.ReactCurrentBatchConfig,Ce=0,Xe=null,We=null,tt=0,wt=0,Ar=xn(0),Ke=0,ko=null,Qn=0,Cl=0,Ha=0,So=null,pt=null,Qa=0,Cr=1/0,ln=null,$l=!1,Wa=null,An=null,Tl=!1,Cn=null,Il=0,Eo=0,Va=null,Dl=-1,Rl=0;function ut(){return(Ce&6)!==0?He():Dl!==-1?Dl:Dl=He()}function $n(e){return(e.mode&1)===0?1:(Ce&2)!==0&&tt!==0?tt&-tt:Ah.transition!==null?(Rl===0&&(Rl=uu()),Rl):(e=Re,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e)}function Lt(e,t,n,o){if(50<Eo)throw Eo=0,Va=null,Error(s(185));Vr(e,n,o),((Ce&2)===0||e!==Xe)&&(e===Xe&&((Ce&2)===0&&(Cl|=n),Ke===4&&Tn(e,tt)),ht(e,o),n===1&&Ce===0&&(t.mode&1)===0&&(Cr=He()+500,ll&&kn()))}function ht(e,t){var n=e.callbackNode;Ap(e,t);var o=Mo(e,e===Xe?tt:0);if(o===0)n!==null&&iu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&iu(n),t===1)e.tag===0?bh(yd.bind(null,e)):rc(yd.bind(null,e)),wh(function(){(Ce&6)===0&&kn()}),n=null;else{switch(cu(o)){case 1:n=Ai;break;case 4:n=au;break;case 16:n=Lo;break;case 536870912:n=su;break;default:n=Lo}n=Cd(n,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vd(e,t){if(Dl=-1,Rl=0,(Ce&6)!==0)throw Error(s(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var o=Mo(e,e===Xe?tt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=_l(e,o);else{t=o;var i=Ce;Ce|=2;var a=wd();(Xe!==e||tt!==t)&&(ln=null,Cr=He()+500,Vn(e,t));do try{Wh();break}catch(f){xd(e,f)}while(!0);ca(),Al.current=a,Ce=i,We!==null?t=0:(Xe=null,tt=0,t=Ke)}if(t!==0){if(t===2&&(i=Ci(e),i!==0&&(o=i,t=Ga(e,i))),t===1)throw n=ko,Vn(e,0),Tn(e,o),ht(e,He()),n;if(t===6)Tn(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Hh(i)&&(t=_l(e,o),t===2&&(a=Ci(e),a!==0&&(o=a,t=Ga(e,a))),t===1))throw n=ko,Vn(e,0),Tn(e,o),ht(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(s(345));case 2:Gn(e,pt,ln);break;case 3:if(Tn(e,o),(o&130023424)===o&&(t=Qa+500-He(),10<t)){if(Mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ji(Gn.bind(null,e,pt,ln),t);break}Gn(e,pt,ln);break;case 4:if(Tn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var c=31-Dt(o);a=1<<c,c=t[c],c>i&&(i=c),o&=~a}if(o=i,o=He()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Uh(o/1960))-o,10<o){e.timeoutHandle=Ji(Gn.bind(null,e,pt,ln),o);break}Gn(e,pt,ln);break;case 5:Gn(e,pt,ln);break;default:throw Error(s(329))}}}return ht(e,He()),e.callbackNode===n?vd.bind(null,e):null}function Ga(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=_l(e,t),e!==2&&(t=pt,pt=n,t!==null&&Ka(t)),e}function Ka(e){pt===null?pt=e:pt.push.apply(pt,e)}function Hh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!Rt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~Ha,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),o=1<<n;e[n]=-1,t&=~o}}function yd(e){if((Ce&6)!==0)throw Error(s(327));$r();var t=Mo(e,0);if((t&1)===0)return ht(e,He()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var o=Ci(e);o!==0&&(t=o,n=Ga(e,o))}if(n===1)throw n=ko,Vn(e,0),Tn(e,t),ht(e,He()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,pt,ln),ht(e,He()),null}function Ya(e,t){var n=Ce;Ce|=1;try{return e(t)}finally{Ce=n,Ce===0&&(Cr=He()+500,ll&&kn())}}function Wn(e){Cn!==null&&Cn.tag===0&&(Ce&6)===0&&$r();var t=Ce;Ce|=1;var n=$t.transition,o=Re;try{if($t.transition=null,Re=1,e)return e()}finally{Re=o,$t.transition=n,Ce=t,(Ce&6)===0&&kn()}}function Xa(){wt=Ar.current,Pe(Ar)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xh(n)),We!==null)for(n=We.return;n!==null;){var o=n;switch(la(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&rl();break;case 3:Sr(),Pe(ct),Pe(rt),ya();break;case 5:ga(o);break;case 4:Sr();break;case 13:Pe(je);break;case 19:Pe(je);break;case 10:da(o.type._context);break;case 22:case 23:Xa()}n=n.return}if(Xe=e,We=e=In(e.current,null),tt=wt=t,Ke=0,ko=null,Ha=Cl=Qn=0,pt=So=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,a=n.pending;if(a!==null){var c=a.next;a.next=i,o.next=c}n.pending=o}Bn=null}return e}function xd(e,t){do{var n=We;try{if(ca(),ml.current=xl,gl){for(var o=Oe.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}gl=!1}if(Hn=0,Ye=Ge=Oe=null,mo=!1,go=0,Ua.current=null,n===null||n.return===null){Ke=1,ko=t,We=null;break}e:{var a=e,c=n.return,f=n,m=t;if(t=tt,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var E=m,P=f,L=P.tag;if((P.mode&1)===0&&(L===0||L===11||L===15)){var z=P.alternate;z?(P.updateQueue=z.updateQueue,P.memoizedState=z.memoizedState,P.lanes=z.lanes):(P.updateQueue=null,P.memoizedState=null)}var J=Qc(c);if(J!==null){J.flags&=-257,Wc(J,c,f,a,t),J.mode&1&&Hc(a,E,t),t=J,m=E;var le=t.updateQueue;if(le===null){var ie=new Set;ie.add(m),t.updateQueue=ie}else le.add(m);break e}else{if((t&1)===0){Hc(a,E,t),Za();break e}m=Error(s(426))}}else if(Le&&f.mode&1){var Qe=Qc(c);if(Qe!==null){(Qe.flags&65536)===0&&(Qe.flags|=256),Wc(Qe,c,f,a,t),sa(Er(m,f));break e}}a=m=Er(m,f),Ke!==4&&(Ke=2),So===null?So=[a]:So.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=Bc(a,m,t);hc(a,y);break e;case 1:f=m;var g=a.type,k=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(An===null||!An.has(k)))){a.flags|=65536,t&=-t,a.lanes|=t;var F=Uc(a,f,t);hc(a,F);break e}}a=a.return}while(a!==null)}Sd(n)}catch(ue){t=ue,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function wd(){var e=Al.current;return Al.current=xl,e===null?xl:e}function Za(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Xe===null||(Qn&268435455)===0&&(Cl&268435455)===0||Tn(Xe,tt)}function _l(e,t){var n=Ce;Ce|=2;var o=wd();(Xe!==e||tt!==t)&&(ln=null,Vn(e,t));do try{Qh();break}catch(i){xd(e,i)}while(!0);if(ca(),Ce=n,Al.current=o,We!==null)throw Error(s(261));return Xe=null,tt=0,Ke}function Qh(){for(;We!==null;)kd(We)}function Wh(){for(;We!==null&&!gp();)kd(We)}function kd(e){var t=Ad(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?Sd(e):We=t,Ua.current=null}function Sd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=jh(n,t,wt),n!==null){We=n;return}}else{if(n=Oh(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ke===0&&(Ke=5)}function Gn(e,t,n){var o=Re,i=$t.transition;try{$t.transition=null,Re=1,Vh(e,t,n,o)}finally{$t.transition=i,Re=o}return null}function Vh(e,t,n,o){do $r();while(Cn!==null);if((Ce&6)!==0)throw Error(s(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Cp(e,a),e===Xe&&(We=Xe=null,tt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Tl||(Tl=!0,Cd(Lo,function(){return $r(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=$t.transition,$t.transition=null;var c=Re;Re=1;var f=Ce;Ce|=4,Ua.current=null,Mh(e,n),fd(n,e),fh(Zi),Ho=!!Xi,Zi=Xi=null,e.current=n,Bh(n),vp(),Ce=f,Re=c,$t.transition=a}else e.current=n;if(Tl&&(Tl=!1,Cn=e,Il=i),a=e.pendingLanes,a===0&&(An=null),wp(n.stateNode),ht(e,He()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if($l)throw $l=!1,e=Wa,Wa=null,e;return(Il&1)!==0&&e.tag!==0&&$r(),a=e.pendingLanes,(a&1)!==0?e===Va?Eo++:(Eo=0,Va=e):Eo=0,kn(),null}function $r(){if(Cn!==null){var e=cu(Il),t=$t.transition,n=Re;try{if($t.transition=null,Re=16>e?16:e,Cn===null)var o=!1;else{if(e=Cn,Cn=null,Il=0,(Ce&6)!==0)throw Error(s(331));var i=Ce;for(Ce|=4,re=e.current;re!==null;){var a=re,c=a.child;if((re.flags&16)!==0){var f=a.deletions;if(f!==null){for(var m=0;m<f.length;m++){var E=f[m];for(re=E;re!==null;){var P=re;switch(P.tag){case 0:case 11:case 15:wo(8,P,a)}var L=P.child;if(L!==null)L.return=P,re=L;else for(;re!==null;){P=re;var z=P.sibling,J=P.return;if(ad(P),P===E){re=null;break}if(z!==null){z.return=J,re=z;break}re=J}}}var le=a.alternate;if(le!==null){var ie=le.child;if(ie!==null){le.child=null;do{var Qe=ie.sibling;ie.sibling=null,ie=Qe}while(ie!==null)}}re=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,re=c;else e:for(;re!==null;){if(a=re,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:wo(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,re=y;break e}re=a.return}}var g=e.current;for(re=g;re!==null;){c=re;var k=c.child;if((c.subtreeFlags&2064)!==0&&k!==null)k.return=c,re=k;else e:for(c=g;re!==null;){if(f=re,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:bl(9,f)}}catch(ue){Me(f,f.return,ue)}if(f===c){re=null;break e}var F=f.sibling;if(F!==null){F.return=f.return,re=F;break e}re=f.return}}if(Ce=i,kn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(jo,e)}catch{}o=!0}return o}finally{Re=n,$t.transition=t}}return!1}function Ed(e,t,n){t=Er(n,t),t=Bc(e,t,1),e=En(e,t,1),t=ut(),e!==null&&(Vr(e,1,t),ht(e,t))}function Me(e,t,n){if(e.tag===3)Ed(e,e,n);else for(;t!==null;){if(t.tag===3){Ed(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(An===null||!An.has(o))){e=Er(n,e),e=Uc(t,e,1),t=En(t,e,1),e=ut(),t!==null&&(Vr(t,1,e),ht(t,e));break}}t=t.return}}function Gh(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Ke===4||Ke===3&&(tt&130023424)===tt&&500>He()-Qa?Vn(e,0):Ha|=n),ht(e,t)}function bd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fo,Fo<<=1,(Fo&130023424)===0&&(Fo=4194304)));var n=ut();e=nn(e,t),e!==null&&(Vr(e,t,n),ht(e,n))}function Kh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bd(e,n)}function Yh(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(t),bd(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ft=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ft=!1,Lh(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Le&&(t.flags&1048576)!==0&&oc(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Sl(e,t),e=t.pendingProps;var i=mr(t,rt.current);kr(t,n),i=ka(null,t,o,e,i,n);var a=Sa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(o)?(a=!0,ol(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ha(t),i.updater=wl,t.stateNode=i,i._reactInternals=t,Ta(t,o,e,n),t=_a(null,t,o,!0,a,n)):(t.tag=0,Le&&a&&oa(t),st(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Sl(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=Zh(o),e=zt(o,e),i){case 0:t=Ra(null,t,o,e,n);break e;case 1:t=Zc(null,t,o,e,n);break e;case 11:t=Vc(null,t,o,e,n);break e;case 14:t=Gc(null,t,o,zt(o.type,e),n);break e}throw Error(s(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:zt(o,i),Ra(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:zt(o,i),Zc(e,t,o,i,n);case 3:e:{if(qc(t),e===null)throw Error(s(387));o=t.pendingProps,a=t.memoizedState,i=a.element,pc(e,t),pl(t,o,null,n);var c=t.memoizedState;if(o=c.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Er(Error(s(423)),t),t=Jc(e,t,o,n,i);break e}else if(o!==i){i=Er(Error(s(424)),t),t=Jc(e,t,o,n,i);break e}else for(xt=yn(t.stateNode.containerInfo.firstChild),yt=t,Le=!0,_t=null,n=dc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),o===i){t=on(e,t,n);break e}st(e,t,o,n)}t=t.child}return t;case 5:return gc(t),e===null&&aa(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,c=i.children,qi(o,i)?c=null:a!==null&&qi(o,a)&&(t.flags|=32),Xc(e,t),st(e,t,c,n),t.child;case 6:return e===null&&aa(t),null;case 13:return ed(e,t,n);case 4:return ma(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=xr(t,null,o,n):st(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:zt(o,i),Vc(e,t,o,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,c=i.value,_e(cl,o._currentValue),o._currentValue=c,a!==null)if(Rt(a.value,c)){if(a.children===i.children&&!ct.current){t=on(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var f=a.dependencies;if(f!==null){c=a.child;for(var m=f.firstContext;m!==null;){if(m.context===o){if(a.tag===1){m=rn(-1,n&-n),m.tag=2;var E=a.updateQueue;if(E!==null){E=E.shared;var P=E.pending;P===null?m.next=m:(m.next=P.next,P.next=m),E.pending=m}}a.lanes|=n,m=a.alternate,m!==null&&(m.lanes|=n),fa(a.return,n,t),f.lanes|=n;break}m=m.next}}else if(a.tag===10)c=a.type===t.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(s(341));c.lanes|=n,f=c.alternate,f!==null&&(f.lanes|=n),fa(c,n,t),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,kr(t,n),i=At(i),o=o(i),t.flags|=1,st(e,t,o,n),t.child;case 14:return o=t.type,i=zt(o,t.pendingProps),i=zt(o.type,i),Gc(e,t,o,i,n);case 15:return Kc(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:zt(o,i),Sl(e,t),t.tag=1,dt(o)?(e=!0,ol(t)):e=!1,kr(t,n),Fc(t,o,i),Ta(t,o,i,n),_a(null,t,o,!0,e,n);case 19:return nd(e,t,n);case 22:return Yc(e,t,n)}throw Error(s(156,t.tag))};function Cd(e,t){return lu(e,t)}function Xh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,o){return new Xh(e,t,n,o)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zh(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===be)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zl(e,t,n,o,i,a){var c=2;if(o=e,typeof e=="function")qa(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case X:return Kn(n.children,i,a,t);case Ee:c=8,i|=8;break;case q:return e=Tt(12,n,t,i|2),e.elementType=q,e.lanes=a,e;case ae:return e=Tt(13,n,t,i),e.elementType=ae,e.lanes=a,e;case ge:return e=Tt(19,n,t,i),e.elementType=ge,e.lanes=a,e;case xe:return Pl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:c=10;break e;case ce:c=9;break e;case fe:c=11;break e;case be:c=14;break e;case $e:c=16,o=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Tt(c,n,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function Kn(e,t,n,o){return e=Tt(7,e,o,t),e.lanes=n,e}function Pl(e,t,n,o){return e=Tt(22,e,o,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function Ja(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function es(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qh(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ts(e,t,n,o,i,a,c,f,m){return e=new qh(e,t,n,f,m),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ha(a),e}function Jh(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function $d(e){if(!e)return wn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(dt(n))return tc(e,n,t)}return t}function Td(e,t,n,o,i,a,c,f,m){return e=ts(n,o,!0,e,i,a,c,f,m),e.context=$d(null),n=e.current,o=ut(),i=$n(n),a=rn(o,i),a.callback=t??null,En(n,a,i),e.current.lanes=i,Vr(e,i,o),ht(e,o),e}function Nl(e,t,n,o){var i=t.current,a=ut(),c=$n(i);return n=$d(n),t.context===null?t.context=n:t.pendingContext=n,t=rn(a,c),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=En(i,t,c),e!==null&&(Lt(e,i,c,a),fl(e,i,c)),c}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ns(e,t){Id(e,t),(e=e.alternate)&&Id(e,t)}function em(){return null}var Dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function rs(e){this._internalRoot=e}jl.prototype.render=rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Nl(e,t,null,null)},jl.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){Nl(null,e,null,null)}),t[qt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&gu(e)}};function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function tm(e,t,n,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var E=Ll(c);a.call(E)}}var c=Td(t,o,e,0,null,!1,!1,"",Rd);return e._reactRootContainer=c,e[qt]=c.current,io(e.nodeType===8?e.parentNode:e),Wn(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var f=o;o=function(){var E=Ll(m);f.call(E)}}var m=ts(e,0,!1,null,null,!1,!1,"",Rd);return e._reactRootContainer=m,e[qt]=m.current,io(e.nodeType===8?e.parentNode:e),Wn(function(){Nl(t,m,n,o)}),m}function Fl(e,t,n,o,i){var a=n._reactRootContainer;if(a){var c=a;if(typeof i=="function"){var f=i;i=function(){var m=Ll(c);f.call(m)}}Nl(t,c,e,i)}else c=tm(n,t,e,i,o);return Ll(c)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(Ti(t,n|1),ht(t,He()),(Ce&6)===0&&(Cr=He()+500,kn()))}break;case 13:Wn(function(){var o=nn(e,1);if(o!==null){var i=ut();Lt(o,e,1,i)}}),ns(e,1)}},Ii=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=ut();Lt(t,e,134217728,n)}ns(e,134217728)}},fu=function(e){if(e.tag===13){var t=$n(e),n=nn(e,t);if(n!==null){var o=ut();Lt(n,e,t,o)}ns(e,t)}},pu=function(){return Re},hu=function(e,t){var n=Re;try{return Re=e,t()}finally{Re=n}},ki=function(e,t,n){switch(t){case"input":if(gt(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=nl(o);if(!i)throw Error(s(90));Ae(o),gt(o,i)}}}break;case"textarea":mi(e,n);break;case"select":t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}},qs=Ya,Js=Wn;var nm={usingClientEntryPoint:!1,Events:[uo,pr,nl,Xs,Zs,Ya]},bo={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rm={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{jo=Ml.inject(rm),Ut=Ml}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm,mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!os(t))throw Error(s(200));return Jh(e,t,null,n)},mt.createRoot=function(e,t){if(!os(e))throw Error(s(299));var n=!1,o="",i=Dd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ts(e,1,!1,null,null,n,!1,o,i),e[qt]=t.current,io(e.nodeType===8?e.parentNode:e),new rs(t)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return Wn(e)},mt.hydrate=function(e,t,n){if(!Ol(t))throw Error(s(200));return Fl(null,e,t,!0,n)},mt.hydrateRoot=function(e,t,n){if(!os(e))throw Error(s(405));var o=n!=null&&n.hydratedSources||null,i=!1,a="",c=Dd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Td(t,null,e,1,n??null,i,!1,a,c),e[qt]=t.current,io(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jl(t)},mt.render=function(e,t,n){if(!Ol(t))throw Error(s(200));return Fl(null,e,t,!1,n)},mt.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(s(40));return e._reactRootContainer?(Wn(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1},mt.unstable_batchedUpdates=Ya,mt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ol(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Fl(e,t,n,!1,o)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Fd;function gf(){if(Fd)return as.exports;Fd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),as.exports=cm(),as.exports}var Md;function dm(){if(Md)return Bl;Md=1;var r=gf();return Bl.createRoot=r.createRoot,Bl.hydrateRoot=r.hydrateRoot,Bl}var fm=dm(),b=Is();const A=mf(b);var pm=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,Je=function(){return Je=Object.assign||function(l){for(var s,u=1,d=arguments.length;u<d;u++){s=arguments[u];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(l[h]=s[h])}return l},Je.apply(this,arguments)};function Io(r,l,s){if(s||arguments.length===2)for(var u=0,d=l.length,h;u<d;u++)(h||!(u in l))&&(h||(h=Array.prototype.slice.call(l,0,u)),h[u]=l[u]);return r.concat(h||Array.prototype.slice.call(l))}var Ne="-ms-",To="-moz-",Ie="-webkit-",vf="comm",ii="rule",Ds="decl",hm="@import",yf="@keyframes",mm="@layer",xf=Math.abs,Rs=String.fromCharCode,gs=Object.assign;function gm(r,l){return qe(r,0)^45?(((l<<2^qe(r,0))<<2^qe(r,1))<<2^qe(r,2))<<2^qe(r,3):0}function wf(r){return r.trim()}function sn(r,l){return(r=l.exec(r))?r[0]:r}function ke(r,l,s){return r.replace(l,s)}function Kl(r,l,s){return r.indexOf(l,s)}function qe(r,l){return r.charCodeAt(l)|0}function zr(r,l,s){return r.slice(l,s)}function Gt(r){return r.length}function kf(r){return r.length}function $o(r,l){return l.push(r),r}function vm(r,l){return r.map(l).join("")}function Bd(r,l){return r.filter(function(s){return!sn(s,l)})}var ai=1,Pr=1,Sf=0,It=0,Ve=0,Or="";function si(r,l,s,u,d,h,p,w){return{value:r,root:l,parent:s,type:u,props:d,children:h,line:ai,column:Pr,length:p,return:"",siblings:w}}function _n(r,l){return gs(si("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},l)}function Tr(r){for(;r.root;)r=_n(r.root,{children:[r]});$o(r,r.siblings)}function ym(){return Ve}function xm(){return Ve=It>0?qe(Or,--It):0,Pr--,Ve===10&&(Pr=1,ai--),Ve}function jt(){return Ve=It<Sf?qe(Or,It++):0,Pr++,Ve===10&&(Pr=1,ai++),Ve}function Jn(){return qe(Or,It)}function Yl(){return It}function ui(r,l){return zr(Or,r,l)}function vs(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wm(r){return ai=Pr=1,Sf=Gt(Or=r),It=0,[]}function km(r){return Or="",r}function cs(r){return wf(ui(It-1,ys(r===91?r+2:r===40?r+1:r)))}function Sm(r){for(;(Ve=Jn())&&Ve<33;)jt();return vs(r)>2||vs(Ve)>3?"":" "}function Em(r,l){for(;--l&&jt()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return ui(r,Yl()+(l<6&&Jn()==32&&jt()==32))}function ys(r){for(;jt();)switch(Ve){case r:return It;case 34:case 39:r!==34&&r!==39&&ys(Ve);break;case 40:r===41&&ys(r);break;case 92:jt();break}return It}function bm(r,l){for(;jt()&&r+Ve!==57;)if(r+Ve===84&&Jn()===47)break;return"/*"+ui(l,It-1)+"*"+Rs(r===47?r:jt())}function Am(r){for(;!vs(Jn());)jt();return ui(r,It)}function Cm(r){return km(Xl("",null,null,null,[""],r=wm(r),0,[0],r))}function Xl(r,l,s,u,d,h,p,w,x){for(var C=0,D=0,S=p,$=0,W=0,H=0,M=1,j=1,Q=1,B=0,O="",Z=d,ne=h,G=u,X=O;j;)switch(H=B,B=jt()){case 40:if(H!=108&&qe(X,S-1)==58){Kl(X+=ke(cs(B),"&","&\f"),"&\f",xf(C?w[C-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:X+=cs(B);break;case 9:case 10:case 13:case 32:X+=Sm(H);break;case 92:X+=Em(Yl()-1,7);continue;case 47:switch(Jn()){case 42:case 47:$o($m(bm(jt(),Yl()),l,s,x),x);break;default:X+="/"}break;case 123*M:w[C++]=Gt(X)*Q;case 125*M:case 59:case 0:switch(B){case 0:case 125:j=0;case 59+D:Q==-1&&(X=ke(X,/\f/g,"")),W>0&&Gt(X)-S&&$o(W>32?Hd(X+";",u,s,S-1,x):Hd(ke(X," ","")+";",u,s,S-2,x),x);break;case 59:X+=";";default:if($o(G=Ud(X,l,s,C,D,d,w,O,Z=[],ne=[],S,h),h),B===123)if(D===0)Xl(X,l,G,G,Z,h,S,w,ne);else switch($===99&&qe(X,3)===110?100:$){case 100:case 108:case 109:case 115:Xl(r,G,G,u&&$o(Ud(r,G,G,0,0,d,w,O,d,Z=[],S,ne),ne),d,ne,S,w,u?Z:ne);break;default:Xl(X,G,G,G,[""],ne,0,w,ne)}}C=D=W=0,M=Q=1,O=X="",S=p;break;case 58:S=1+Gt(X),W=H;default:if(M<1){if(B==123)--M;else if(B==125&&M++==0&&xm()==125)continue}switch(X+=Rs(B),B*M){case 38:Q=D>0?1:(X+="\f",-1);break;case 44:w[C++]=(Gt(X)-1)*Q,Q=1;break;case 64:Jn()===45&&(X+=cs(jt())),$=Jn(),D=S=Gt(O=X+=Am(Yl())),B++;break;case 45:H===45&&Gt(X)==2&&(M=0)}}return h}function Ud(r,l,s,u,d,h,p,w,x,C,D,S){for(var $=d-1,W=d===0?h:[""],H=kf(W),M=0,j=0,Q=0;M<u;++M)for(var B=0,O=zr(r,$+1,$=xf(j=p[M])),Z=r;B<H;++B)(Z=wf(j>0?W[B]+" "+O:ke(O,/&\f/g,W[B])))&&(x[Q++]=Z);return si(r,l,s,d===0?ii:w,x,C,D,S)}function $m(r,l,s,u){return si(r,l,s,vf,Rs(ym()),zr(r,2,-2),0,u)}function Hd(r,l,s,u,d){return si(r,l,s,Ds,zr(r,0,u),zr(r,u+1,-1),u,d)}function Ef(r,l,s){switch(gm(r,l)){case 5103:return Ie+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+r+r;case 4789:return To+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+r+To+r+Ne+r+r;case 5936:switch(qe(r,l+11)){case 114:return Ie+r+Ne+ke(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ie+r+Ne+ke(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ie+r+Ne+ke(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ie+r+Ne+r+r;case 6165:return Ie+r+Ne+"flex-"+r+r;case 5187:return Ie+r+ke(r,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+Ne+"flex-$1$2")+r;case 5443:return Ie+r+Ne+"flex-item-"+ke(r,/flex-|-self/g,"")+(sn(r,/flex-|baseline/)?"":Ne+"grid-row-"+ke(r,/flex-|-self/g,""))+r;case 4675:return Ie+r+Ne+"flex-line-pack"+ke(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ie+r+Ne+ke(r,"shrink","negative")+r;case 5292:return Ie+r+Ne+ke(r,"basis","preferred-size")+r;case 6060:return Ie+"box-"+ke(r,"-grow","")+Ie+r+Ne+ke(r,"grow","positive")+r;case 4554:return Ie+ke(r,/([^-])(transform)/g,"$1"+Ie+"$2")+r;case 6187:return ke(ke(ke(r,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),r,"")+r;case 5495:case 3959:return ke(r,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return ke(ke(r,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+r+r;case 4200:if(!sn(r,/flex-|baseline/))return Ne+"grid-column-align"+zr(r,l)+r;break;case 2592:case 3360:return Ne+ke(r,"template-","")+r;case 4384:case 3616:return s&&s.some(function(u,d){return l=d,sn(u.props,/grid-\w+-end/)})?~Kl(r+(s=s[l].value),"span",0)?r:Ne+ke(r,"-start","")+r+Ne+"grid-row-span:"+(~Kl(s,"span",0)?sn(s,/\d+/):+sn(s,/\d+/)-+sn(r,/\d+/))+";":Ne+ke(r,"-start","")+r;case 4896:case 4128:return s&&s.some(function(u){return sn(u.props,/grid-\w+-start/)})?r:Ne+ke(ke(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ke(r,/(.+)-inline(.+)/,Ie+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(r)-1-l>6)switch(qe(r,l+1)){case 109:if(qe(r,l+4)!==45)break;case 102:return ke(r,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+To+(qe(r,l+3)==108?"$3":"$2-$3"))+r;case 115:return~Kl(r,"stretch",0)?Ef(ke(r,"stretch","fill-available"),l,s)+r:r}break;case 5152:case 5920:return ke(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,h,p,w,x,C){return Ne+d+":"+h+C+(p?Ne+d+"-span:"+(w?x:+x-+h)+C:"")+r});case 4949:if(qe(r,l+6)===121)return ke(r,":",":"+Ie)+r;break;case 6444:switch(qe(r,qe(r,14)===45?18:11)){case 120:return ke(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(qe(r,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+Ne+"$2box$3")+r;case 100:return ke(r,":",":"+Ne)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(r,"scroll-","scroll-snap-")+r}return r}function Jl(r,l){for(var s="",u=0;u<r.length;u++)s+=l(r[u],u,r,l)||"";return s}function Tm(r,l,s,u){switch(r.type){case mm:if(r.children.length)break;case hm:case Ds:return r.return=r.return||r.value;case vf:return"";case yf:return r.return=r.value+"{"+Jl(r.children,u)+"}";case ii:if(!Gt(r.value=r.props.join(",")))return""}return Gt(s=Jl(r.children,u))?r.return=r.value+"{"+s+"}":""}function Im(r){var l=kf(r);return function(s,u,d,h){for(var p="",w=0;w<l;w++)p+=r[w](s,u,d,h)||"";return p}}function Dm(r){return function(l){l.root||(l=l.return)&&r(l)}}function Rm(r,l,s,u){if(r.length>-1&&!r.return)switch(r.type){case Ds:r.return=Ef(r.value,r.length,s);return;case yf:return Jl([_n(r,{value:ke(r.value,"@","@"+Ie)})],u);case ii:if(r.length)return vm(s=r.props,function(d){switch(sn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tr(_n(r,{props:[ke(d,/:(read-\w+)/,":"+To+"$1")]})),Tr(_n(r,{props:[d]})),gs(r,{props:Bd(s,u)});break;case"::placeholder":Tr(_n(r,{props:[ke(d,/:(plac\w+)/,":"+Ie+"input-$1")]})),Tr(_n(r,{props:[ke(d,/:(plac\w+)/,":"+To+"$1")]})),Tr(_n(r,{props:[ke(d,/:(plac\w+)/,Ne+"input-$1")]})),Tr(_n(r,{props:[d]})),gs(r,{props:Bd(s,u)});break}return""})}}var _m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kt={},Nr=typeof process<"u"&&kt!==void 0&&(kt.REACT_APP_SC_ATTR||kt.SC_ATTR)||"data-styled",bf="active",Af="data-styled-version",ci="6.1.17",_s=`/*!sc*/
`,ei=typeof window<"u"&&"HTMLElement"in window,zm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==""?kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.SC_DISABLE_SPEEDY!==void 0&&kt.SC_DISABLE_SPEEDY!==""&&kt.SC_DISABLE_SPEEDY!=="false"&&kt.SC_DISABLE_SPEEDY),Pm={},di=Object.freeze([]),Lr=Object.freeze({});function Cf(r,l,s){return s===void 0&&(s=Lr),r.theme!==s.theme&&r.theme||l||s.theme}var $f=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lm=/(^-|-$)/g;function Qd(r){return r.replace(Nm,"-").replace(Lm,"")}var jm=/(a)(d)/gi,Ul=52,Wd=function(r){return String.fromCharCode(r+(r>25?39:97))};function xs(r){var l,s="";for(l=Math.abs(r);l>Ul;l=l/Ul|0)s=Wd(l%Ul)+s;return(Wd(l%Ul)+s).replace(jm,"$1-$2")}var ds,Tf=5381,Rr=function(r,l){for(var s=l.length;s;)r=33*r^l.charCodeAt(--s);return r},If=function(r){return Rr(Tf,r)};function Df(r){return xs(If(r)>>>0)}function Om(r){return r.displayName||r.name||"Component"}function fs(r){return typeof r=="string"&&!0}var Rf=typeof Symbol=="function"&&Symbol.for,_f=Rf?Symbol.for("react.memo"):60115,Fm=Rf?Symbol.for("react.forward_ref"):60112,Mm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Um=((ds={})[Fm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ds[_f]=zf,ds);function Vd(r){return("type"in(l=r)&&l.type.$$typeof)===_f?zf:"$$typeof"in r?Um[r.$$typeof]:Mm;var l}var Hm=Object.defineProperty,Qm=Object.getOwnPropertyNames,Gd=Object.getOwnPropertySymbols,Wm=Object.getOwnPropertyDescriptor,Vm=Object.getPrototypeOf,Kd=Object.prototype;function Pf(r,l,s){if(typeof l!="string"){if(Kd){var u=Vm(l);u&&u!==Kd&&Pf(r,u,s)}var d=Qm(l);Gd&&(d=d.concat(Gd(l)));for(var h=Vd(r),p=Vd(l),w=0;w<d.length;++w){var x=d[w];if(!(x in Bm||s&&s[x]||p&&x in p||h&&x in h)){var C=Wm(l,x);try{Hm(r,x,C)}catch{}}}}return r}function er(r){return typeof r=="function"}function zs(r){return typeof r=="object"&&"styledComponentId"in r}function Zn(r,l){return r&&l?"".concat(r," ").concat(l):r||l||""}function ws(r,l){if(r.length===0)return"";for(var s=r[0],u=1;u<r.length;u++)s+=r[u];return s}function Do(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function ks(r,l,s){if(s===void 0&&(s=!1),!s&&!Do(r)&&!Array.isArray(r))return l;if(Array.isArray(l))for(var u=0;u<l.length;u++)r[u]=ks(r[u],l[u]);else if(Do(l))for(var u in l)r[u]=ks(r[u],l[u]);return r}function Ps(r,l){Object.defineProperty(r,"toString",{value:l})}function tr(r){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var Gm=function(){function r(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return r.prototype.indexOfGroup=function(l){for(var s=0,u=0;u<l;u++)s+=this.groupSizes[u];return s},r.prototype.insertRules=function(l,s){if(l>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,h=d;l>=h;)if((h<<=1)<0)throw tr(16,"".concat(l));this.groupSizes=new Uint32Array(h),this.groupSizes.set(u),this.length=h;for(var p=d;p<h;p++)this.groupSizes[p]=0}for(var w=this.indexOfGroup(l+1),x=(p=0,s.length);p<x;p++)this.tag.insertRule(w,s[p])&&(this.groupSizes[l]++,w++)},r.prototype.clearGroup=function(l){if(l<this.length){var s=this.groupSizes[l],u=this.indexOfGroup(l),d=u+s;this.groupSizes[l]=0;for(var h=u;h<d;h++)this.tag.deleteRule(u)}},r.prototype.getGroup=function(l){var s="";if(l>=this.length||this.groupSizes[l]===0)return s;for(var u=this.groupSizes[l],d=this.indexOfGroup(l),h=d+u,p=d;p<h;p++)s+="".concat(this.tag.getRule(p)).concat(_s);return s},r}(),Zl=new Map,ti=new Map,ql=1,Hl=function(r){if(Zl.has(r))return Zl.get(r);for(;ti.has(ql);)ql++;var l=ql++;return Zl.set(r,l),ti.set(l,r),l},Km=function(r,l){ql=l+1,Zl.set(r,l),ti.set(l,r)},Ym="style[".concat(Nr,"][").concat(Af,'="').concat(ci,'"]'),Xm=new RegExp("^".concat(Nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zm=function(r,l,s){for(var u,d=s.split(","),h=0,p=d.length;h<p;h++)(u=d[h])&&r.registerName(l,u)},qm=function(r,l){for(var s,u=((s=l.textContent)!==null&&s!==void 0?s:"").split(_s),d=[],h=0,p=u.length;h<p;h++){var w=u[h].trim();if(w){var x=w.match(Xm);if(x){var C=0|parseInt(x[1],10),D=x[2];C!==0&&(Km(D,C),Zm(r,D,x[3]),r.getTag().insertRules(C,d)),d.length=0}else d.push(w)}}},Yd=function(r){for(var l=document.querySelectorAll(Ym),s=0,u=l.length;s<u;s++){var d=l[s];d&&d.getAttribute(Nr)!==bf&&(qm(r,d),d.parentNode&&d.parentNode.removeChild(d))}};function Jm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Nf=function(r){var l=document.head,s=r||l,u=document.createElement("style"),d=function(w){var x=Array.from(w.querySelectorAll("style[".concat(Nr,"]")));return x[x.length-1]}(s),h=d!==void 0?d.nextSibling:null;u.setAttribute(Nr,bf),u.setAttribute(Af,ci);var p=Jm();return p&&u.setAttribute("nonce",p),s.insertBefore(u,h),u},e0=function(){function r(l){this.element=Nf(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var u=document.styleSheets,d=0,h=u.length;d<h;d++){var p=u[d];if(p.ownerNode===s)return p}throw tr(17)}(this.element),this.length=0}return r.prototype.insertRule=function(l,s){try{return this.sheet.insertRule(s,l),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},r.prototype.getRule=function(l){var s=this.sheet.cssRules[l];return s&&s.cssText?s.cssText:""},r}(),t0=function(){function r(l){this.element=Nf(l),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(l,s){if(l<=this.length&&l>=0){var u=document.createTextNode(s);return this.element.insertBefore(u,this.nodes[l]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},r.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},r}(),n0=function(){function r(l){this.rules=[],this.length=0}return r.prototype.insertRule=function(l,s){return l<=this.length&&(this.rules.splice(l,0,s),this.length++,!0)},r.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},r.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},r}(),Xd=ei,r0={isServer:!ei,useCSSOMInjection:!zm},ni=function(){function r(l,s,u){l===void 0&&(l=Lr),s===void 0&&(s={});var d=this;this.options=Je(Je({},r0),l),this.gs=s,this.names=new Map(u),this.server=!!l.isServer,!this.server&&ei&&Xd&&(Xd=!1,Yd(this)),Ps(this,function(){return function(h){for(var p=h.getTag(),w=p.length,x="",C=function(S){var $=function(Q){return ti.get(Q)}(S);if($===void 0)return"continue";var W=h.names.get($),H=p.getGroup(S);if(W===void 0||!W.size||H.length===0)return"continue";var M="".concat(Nr,".g").concat(S,'[id="').concat($,'"]'),j="";W!==void 0&&W.forEach(function(Q){Q.length>0&&(j+="".concat(Q,","))}),x+="".concat(H).concat(M,'{content:"').concat(j,'"}').concat(_s)},D=0;D<w;D++)C(D);return x}(d)})}return r.registerId=function(l){return Hl(l)},r.prototype.rehydrate=function(){!this.server&&ei&&Yd(this)},r.prototype.reconstructWithOptions=function(l,s){return s===void 0&&(s=!0),new r(Je(Je({},this.options),l),this.gs,s&&this.names||void 0)},r.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(l=function(s){var u=s.useCSSOMInjection,d=s.target;return s.isServer?new n0(d):u?new e0(d):new t0(d)}(this.options),new Gm(l)));var l},r.prototype.hasNameForId=function(l,s){return this.names.has(l)&&this.names.get(l).has(s)},r.prototype.registerName=function(l,s){if(Hl(l),this.names.has(l))this.names.get(l).add(s);else{var u=new Set;u.add(s),this.names.set(l,u)}},r.prototype.insertRules=function(l,s,u){this.registerName(l,s),this.getTag().insertRules(Hl(l),u)},r.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},r.prototype.clearRules=function(l){this.getTag().clearGroup(Hl(l)),this.clearNames(l)},r.prototype.clearTag=function(){this.tag=void 0},r}(),o0=/&/g,l0=/^\s*\/\/.*$/gm;function Lf(r,l){return r.map(function(s){return s.type==="rule"&&(s.value="".concat(l," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(l," ")),s.props=s.props.map(function(u){return"".concat(l," ").concat(u)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Lf(s.children,l)),s})}function i0(r){var l,s,u,d=Lr,h=d.options,p=h===void 0?Lr:h,w=d.plugins,x=w===void 0?di:w,C=function($,W,H){return H.startsWith(s)&&H.endsWith(s)&&H.replaceAll(s,"").length>0?".".concat(l):$},D=x.slice();D.push(function($){$.type===ii&&$.value.includes("&")&&($.props[0]=$.props[0].replace(o0,s).replace(u,C))}),p.prefix&&D.push(Rm),D.push(Tm);var S=function($,W,H,M){W===void 0&&(W=""),H===void 0&&(H=""),M===void 0&&(M="&"),l=M,s=W,u=new RegExp("\\".concat(s,"\\b"),"g");var j=$.replace(l0,""),Q=Cm(H||W?"".concat(H," ").concat(W," { ").concat(j," }"):j);p.namespace&&(Q=Lf(Q,p.namespace));var B=[];return Jl(Q,Im(D.concat(Dm(function(O){return B.push(O)})))),B};return S.hash=x.length?x.reduce(function($,W){return W.name||tr(15),Rr($,W.name)},Tf).toString():"",S}var a0=new ni,Ss=i0(),jf=A.createContext({shouldForwardProp:void 0,styleSheet:a0,stylis:Ss});jf.Consumer;A.createContext(void 0);function Es(){return b.useContext(jf)}var s0=function(){function r(l,s){var u=this;this.inject=function(d,h){h===void 0&&(h=Ss);var p=u.name+h.hash;d.hasNameForId(u.id,p)||d.insertRules(u.id,p,h(u.rules,p,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=s,Ps(this,function(){throw tr(12,String(u.name))})}return r.prototype.getName=function(l){return l===void 0&&(l=Ss),this.name+l.hash},r}(),u0=function(r){return r>="A"&&r<="Z"};function Zd(r){for(var l="",s=0;s<r.length;s++){var u=r[s];if(s===1&&u==="-"&&r[0]==="-")return r;u0(u)?l+="-"+u.toLowerCase():l+=u}return l.startsWith("ms-")?"-"+l:l}var Of=function(r){return r==null||r===!1||r===""},Ff=function(r){var l,s,u=[];for(var d in r){var h=r[d];r.hasOwnProperty(d)&&!Of(h)&&(Array.isArray(h)&&h.isCss||er(h)?u.push("".concat(Zd(d),":"),h,";"):Do(h)?u.push.apply(u,Io(Io(["".concat(d," {")],Ff(h),!1),["}"],!1)):u.push("".concat(Zd(d),": ").concat((l=d,(s=h)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||l in _m||l.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return u};function zn(r,l,s,u){if(Of(r))return[];if(zs(r))return[".".concat(r.styledComponentId)];if(er(r)){if(!er(h=r)||h.prototype&&h.prototype.isReactComponent||!l)return[r];var d=r(l);return zn(d,l,s,u)}var h;return r instanceof s0?s?(r.inject(s,u),[r.getName(u)]):[r]:Do(r)?Ff(r):Array.isArray(r)?Array.prototype.concat.apply(di,r.map(function(p){return zn(p,l,s,u)})):[r.toString()]}function Mf(r){for(var l=0;l<r.length;l+=1){var s=r[l];if(er(s)&&!zs(s))return!1}return!0}var c0=If(ci),d0=function(){function r(l,s,u){this.rules=l,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Mf(l),this.componentId=s,this.baseHash=Rr(c0,s),this.baseStyle=u,ni.registerId(s)}return r.prototype.generateAndInjectStyles=function(l,s,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,s,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))d=Zn(d,this.staticRulesId);else{var h=ws(zn(this.rules,l,s,u)),p=xs(Rr(this.baseHash,h)>>>0);if(!s.hasNameForId(this.componentId,p)){var w=u(h,".".concat(p),void 0,this.componentId);s.insertRules(this.componentId,p,w)}d=Zn(d,p),this.staticRulesId=p}else{for(var x=Rr(this.baseHash,u.hash),C="",D=0;D<this.rules.length;D++){var S=this.rules[D];if(typeof S=="string")C+=S;else if(S){var $=ws(zn(S,l,s,u));x=Rr(x,$+D),C+=$}}if(C){var W=xs(x>>>0);s.hasNameForId(this.componentId,W)||s.insertRules(this.componentId,W,u(C,".".concat(W),void 0,this.componentId)),d=Zn(d,W)}}return d},r}(),Ro=A.createContext(void 0);Ro.Consumer;function f0(r){var l=A.useContext(Ro),s=b.useMemo(function(){return function(u,d){if(!u)throw tr(14);if(er(u)){var h=u(d);return h}if(Array.isArray(u)||typeof u!="object")throw tr(8);return d?Je(Je({},d),u):u}(r.theme,l)},[r.theme,l]);return r.children?A.createElement(Ro.Provider,{value:s},r.children):null}var ps={};function p0(r,l,s){var u=zs(r),d=r,h=!fs(r),p=l.attrs,w=p===void 0?di:p,x=l.componentId,C=x===void 0?function(Z,ne){var G=typeof Z!="string"?"sc":Qd(Z);ps[G]=(ps[G]||0)+1;var X="".concat(G,"-").concat(Df(ci+G+ps[G]));return ne?"".concat(ne,"-").concat(X):X}(l.displayName,l.parentComponentId):x,D=l.displayName,S=D===void 0?function(Z){return fs(Z)?"styled.".concat(Z):"Styled(".concat(Om(Z),")")}(r):D,$=l.displayName&&l.componentId?"".concat(Qd(l.displayName),"-").concat(l.componentId):l.componentId||C,W=u&&d.attrs?d.attrs.concat(w).filter(Boolean):w,H=l.shouldForwardProp;if(u&&d.shouldForwardProp){var M=d.shouldForwardProp;if(l.shouldForwardProp){var j=l.shouldForwardProp;H=function(Z,ne){return M(Z,ne)&&j(Z,ne)}}else H=M}var Q=new d0(s,$,u?d.componentStyle:void 0);function B(Z,ne){return function(G,X,Ee){var q=G.attrs,me=G.componentStyle,ce=G.defaultProps,fe=G.foldedComponentIds,ae=G.styledComponentId,ge=G.target,be=A.useContext(Ro),$e=Es(),xe=G.shouldForwardProp||$e.shouldForwardProp,_=Cf(X,be,ce)||Lr,K=function(oe,ee,se){for(var ve,R=Je(Je({},ee),{className:void 0,theme:se}),de=0;de<oe.length;de+=1){var we=er(ve=oe[de])?ve(R):ve;for(var Ae in we)R[Ae]=Ae==="className"?Zn(R[Ae],we[Ae]):Ae==="style"?Je(Je({},R[Ae]),we[Ae]):we[Ae]}return ee.className&&(R.className=Zn(R.className,ee.className)),R}(q,X,_),U=K.as||ge,v={};for(var I in K)K[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&K.theme===_||(I==="forwardedAs"?v.as=K.forwardedAs:xe&&!xe(I,U)||(v[I]=K[I]));var V=function(oe,ee){var se=Es(),ve=oe.generateAndInjectStyles(ee,se.styleSheet,se.stylis);return ve}(me,K),Y=Zn(fe,ae);return V&&(Y+=" "+V),K.className&&(Y+=" "+K.className),v[fs(U)&&!$f.has(U)?"class":"className"]=Y,Ee&&(v.ref=Ee),b.createElement(U,v)}(O,Z,ne)}B.displayName=S;var O=A.forwardRef(B);return O.attrs=W,O.componentStyle=Q,O.displayName=S,O.shouldForwardProp=H,O.foldedComponentIds=u?Zn(d.foldedComponentIds,d.styledComponentId):"",O.styledComponentId=$,O.target=u?d.target:r,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=u?function(ne){for(var G=[],X=1;X<arguments.length;X++)G[X-1]=arguments[X];for(var Ee=0,q=G;Ee<q.length;Ee++)ks(ne,q[Ee],!0);return ne}({},d.defaultProps,Z):Z}}),Ps(O,function(){return".".concat(O.styledComponentId)}),h&&Pf(O,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function qd(r,l){for(var s=[r[0]],u=0,d=l.length;u<d;u+=1)s.push(l[u],r[u+1]);return s}var Jd=function(r){return Object.assign(r,{isCss:!0})};function te(r){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];if(er(r)||Do(r))return Jd(zn(qd(di,Io([r],l,!0))));var u=r;return l.length===0&&u.length===1&&typeof u[0]=="string"?zn(u):Jd(zn(qd(u,l)))}function bs(r,l,s){if(s===void 0&&(s=Lr),!l)throw tr(1,l);var u=function(d){for(var h=[],p=1;p<arguments.length;p++)h[p-1]=arguments[p];return r(l,s,te.apply(void 0,Io([d],h,!1)))};return u.attrs=function(d){return bs(r,l,Je(Je({},s),{attrs:Array.prototype.concat(s.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return bs(r,l,Je(Je({},s),d))},u}var Bf=function(r){return bs(p0,r)},T=Bf;$f.forEach(function(r){T[r]=Bf(r)});var h0=function(){function r(l,s){this.rules=l,this.componentId=s,this.isStatic=Mf(l),ni.registerId(this.componentId+1)}return r.prototype.createStyles=function(l,s,u,d){var h=d(ws(zn(this.rules,s,u,d)),""),p=this.componentId+l;u.insertRules(p,p,h)},r.prototype.removeStyles=function(l,s){s.clearRules(this.componentId+l)},r.prototype.renderStyles=function(l,s,u,d){l>2&&ni.registerId(this.componentId+l),this.removeStyles(l,u),this.createStyles(l,s,u,d)},r}();function m0(r){for(var l=[],s=1;s<arguments.length;s++)l[s-1]=arguments[s];var u=te.apply(void 0,Io([r],l,!1)),d="sc-global-".concat(Df(JSON.stringify(u))),h=new h0(u,d),p=function(x){var C=Es(),D=A.useContext(Ro),S=A.useRef(C.styleSheet.allocateGSInstance(d)).current;return C.styleSheet.server&&w(S,x,C.styleSheet,D,C.stylis),A.useLayoutEffect(function(){if(!C.styleSheet.server)return w(S,x,C.styleSheet,D,C.stylis),function(){return h.removeStyles(S,C.styleSheet)}},[S,x,C.styleSheet,D,C.stylis]),null};function w(x,C,D,S,$){if(h.isStatic)h.renderStyles(x,Pm,D,$);else{var W=Je(Je({},C),{theme:Cf(C,S,p.defaultProps)});h.renderStyles(x,W,D,$)}}return A.memo(p)}const Ns="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Ls="inset 2px 2px 3px rgba(0,0,0,0.2)",Ot=()=>te`
  -webkit-text-fill-color: ${({theme:r})=>r.materialTextDisabled};
  color: ${({theme:r})=>r.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:r})=>r.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Ft=({background:r="material",color:l="materialText"}={})=>te`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:s})=>s[r]};
  color: ${({theme:s})=>s[l]};
`,_o=({mainColor:r="black",secondaryColor:l="transparent",pixelSize:s=2})=>te`
  background-image: ${[`linear-gradient(
      45deg,
      ${r} 25%,
      transparent 25%,
      transparent 75%,
      ${r} 75%
    )`,`linear-gradient(
      45deg,
      ${r} 25%,
      transparent 25%,
      transparent 75%,
      ${r} 75%
    )`].join(",")};
  background-color: ${l};
  background-size: ${`${s*2}px ${s*2}px`};
  background-position: 0 0, ${`${s}px ${s}px`};
`,nr=()=>te`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:r})=>r.materialText};
  background: ${({$disabled:r,theme:l})=>r?l.flatLight:l.canvas};
  border: 2px solid ${({theme:r})=>r.canvas};
  outline: 2px solid ${({theme:r})=>r.flatDark};
  outline-offset: -4px;
`,Ir={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},g0=({theme:r,topLeftInner:l,bottomRightInner:s,hasShadow:u=!1,hasInsetShadow:d=!1})=>[u?Ns:!1,d?Ls:!1,l!==null?`inset 1px 1px 0px 1px ${r[l]}`:!1,s!==null?`inset -1px -1px 0 1px ${r[s]}`:!1].filter(Boolean).join(", "),Be=({invert:r=!1,style:l="button"}={})=>{const s={topLeftOuter:r?"bottomRightOuter":"topLeftOuter",topLeftInner:r?"bottomRightInner":"topLeftInner",bottomRightInner:r?"topLeftInner":"bottomRightInner",bottomRightOuter:r?"topLeftOuter":"bottomRightOuter"};return te`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:u})=>u[Ir[l][s.topLeftOuter]]};
    border-top-color: ${({theme:u})=>u[Ir[l][s.topLeftOuter]]};
    border-right-color: ${({theme:u})=>u[Ir[l][s.bottomRightOuter]]};
    border-bottom-color: ${({theme:u})=>u[Ir[l][s.bottomRightOuter]]};
    box-shadow: ${({theme:u,shadow:d})=>g0({theme:u,topLeftInner:Ir[l][s.topLeftInner],bottomRightInner:Ir[l][s.bottomRightInner],hasShadow:d})};
  `},jr=()=>te`
  outline: 2px dotted ${({theme:r})=>r.materialText};
`,v0=r=>Buffer.from(r).toString("base64"),y0=typeof btoa<"u"?btoa:v0,Ql=(r,l=0)=>{const s=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${l} 13 13)">
      <polygon fill="${r}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${y0(s)})`},js=(r="default")=>te`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:l})=>_o({mainColor:r==="flat"?l.flatLight:l.material,secondaryColor:r==="flat"?l.canvas:l.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Ft()}
    ${r==="flat"?nr():Be({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:l})=>l.material};
  }
  ::-webkit-scrollbar-button {
    ${Ft()}
    ${r==="flat"?nr():Be({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${r==="default"?Be({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:l})=>Ql(l.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:l})=>Ql(l.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:l})=>Ql(l.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:l})=>Ql(l.materialText,0)};
  }
`,x0=T.a`
  color: ${({theme:r})=>r.anchor};
  font-size: inherit;
  text-decoration: ${({underline:r})=>r?"underline":"none"};
  &:visited {
    color: ${({theme:r})=>r.anchorVisited};
  }
`,w0=b.forwardRef(({children:r,underline:l=!0,...s},u)=>A.createElement(x0,{ref:u,underline:l,...s},r));w0.displayName="Anchor";const k0=T.header`
  ${Be()};
  ${Ft()};

  position: ${r=>{var l;return(l=r.position)!==null&&l!==void 0?l:r.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,S0=b.forwardRef(({children:r,fixed:l=!0,position:s="fixed",...u},d)=>A.createElement(k0,{fixed:l,position:l!==!1?s:void 0,ref:d,...u},r));S0.displayName="AppBar";const rr=()=>{};function qn(r,l,s){return s!==null&&r>s?s:l!==null&&r<l?l:r}function E0(r){if(Math.abs(r)<1){const s=r.toExponential().split("e-"),u=s[0].split(".")[1];return(u?u.length:0)+parseInt(s[1],10)}const l=r.toString().split(".")[1];return l?l.length:0}function ef(r,l,s){const u=Math.round((r-s)/l)*l+s;return Number(u.toFixed(E0(l)))}function Pn(r){return typeof r=="number"?`${r}px`:r}const b0=T.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:r})=>`
    height: ${r};
    width: ${r};
    `}
  border-radius: ${({square:r})=>r?0:"50%"};
  overflow: hidden;
  ${({noBorder:r,theme:l})=>!r&&`
    border-top: 2px solid ${l.borderDark};
    border-left: 2px solid ${l.borderDark};
    border-bottom: 2px solid ${l.borderLightest};
    border-right: 2px solid ${l.borderLightest};
    background: ${l.material};
  `}
  ${({src:r})=>!r&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,A0=T.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,C0=b.forwardRef(({alt:r="",children:l,noBorder:s=!1,size:u=35,square:d=!1,src:h,...p},w)=>A.createElement(b0,{noBorder:s,ref:w,size:Pn(u),square:d,src:h,...p},h?A.createElement(A0,{src:h,alt:r}):l));C0.displayName="Avatar";const nt={sm:"28px",md:"36px",lg:"44px"},$0=te`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:r="md"})=>nt[r]};
  width: ${({fullWidth:r,size:l="md",square:s})=>r?"100%":s?nt[l]:"auto"};
  padding: ${({square:r})=>r?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:r})=>!r&&"2px"};
  }
  padding-top: ${({active:r,disabled:l})=>r&&!l&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,fi=T.button`
  ${({active:r,disabled:l,primary:s,theme:u,variant:d})=>d==="flat"?te`
          ${nr()}
          ${s?`
          border: 2px solid ${u.checkmark};
            outline: 2px solid ${u.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${u.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!r&&!l&&jr}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?te`
          ${Ft()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!l&&!r&&Be({style:"buttonThin"})}
          }
          &:active {
            ${!l&&Be({style:"buttonThinPressed"})}
          }
          ${r&&Be({style:"buttonThinPressed"})}
          ${l&&Ot()}
        `:te`
          ${Ft()};
          border: none;
          ${l&&Ot()}
          ${r?_o({mainColor:u.material,secondaryColor:u.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${s?te`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${u.borderDarkest};
                `:te`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Be(r?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!l&&Be({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!r&&!l&&jr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${r?"0":"1px"};
          }
        `}
  ${$0}
`,dn=b.forwardRef(({onClick:r,disabled:l=!1,children:s,type:u="button",fullWidth:d=!1,size:h="md",square:p=!1,active:w=!1,onTouchStart:x=rr,primary:C=!1,variant:D="default",...S},$)=>A.createElement(fi,{active:w,disabled:l,$disabled:l,fullWidth:d,onClick:l?void 0:r,onTouchStart:x,primary:C,ref:$,size:h,square:p,type:u,variant:D,...S},s));dn.displayName="Button";function Nn({defaultValue:r,onChange:l,onChangePropName:s="onChange",readOnly:u,value:d,valuePropName:h="value"}){const p=d!==void 0,[w,x]=b.useState(r),C=b.useCallback(D=>{p||x(D)},[p]);if(p&&typeof l!="function"&&!u){const D=`Warning: You provided a \`${h}\` prop to a component without an \`${s}\` handler.${h==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${s}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${s}\` function that updates \`${h}\`.`}`;console.warn(D)}return[p?d:w,C]}const As=T.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${r=>nt[r.size]};
  width: ${r=>r.square?nt[r.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${r=>r.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${r=>nt[r.size]};
  color: ${({theme:r})=>r.materialText};
  pointer-events: ${({$disabled:r})=>r?"none":"auto"};
  font-weight: ${({primary:r})=>r?"bold":"normal"};
  &:hover {
    ${({theme:r,$disabled:l})=>!l&&`
        color: ${r.materialTextInvert};
        background: ${r.hoverBackground};
      `}

    cursor: default;
  }
  ${r=>r.$disabled&&Ot()}
`,T0=b.forwardRef(({size:r="lg",disabled:l,square:s,children:u,onClick:d,primary:h,...p},w)=>A.createElement(As,{$disabled:l,size:r,square:s,onClick:l?void 0:d,primary:h,role:"menuitem",ref:w,"aria-disabled":l,...p},u));T0.displayName="MenuListItem";const I0=T.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${r=>r.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Be({style:"window"})}
  ${Ft()}
  ${r=>r.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;I0.displayName="MenuList";const Kt=20,ri=T.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Kt}px;
  height: ${Kt}px;
  opacity: 0;
  z-index: -1;
`,Os=T.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:r})=>r?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:r})=>r.materialText};
  ${r=>r.$disabled&&Ot()}

  ${As} & {
    margin: 0;
    height: 100%;
  }
  ${As}:hover & {
    ${({$disabled:r,theme:l})=>!r&&te`
        color: ${l.materialTextInvert};
      `};
  }
`,Fs=T.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ri}:focus ~ & {
    ${jr}
  }
  ${ri}:not(:disabled) ~ &:active {
    ${jr}
  }
`,Yt=T.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:r})=>r.borderDark};
  border-top-color: ${({theme:r})=>r.borderDark};
  border-right-color: ${({theme:r})=>r.borderLightest};
  border-bottom-color: ${({theme:r})=>r.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r.borderDarkest};
    border-top-color: ${({theme:r})=>r.borderDarkest};
    border-right-color: ${({theme:r})=>r.borderLight};
    border-bottom-color: ${({theme:r})=>r.borderLight};

    pointer-events: none;
    ${r=>r.shadow&&`box-shadow:${Ls};`}
  }
`,D0=T.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${js()}
`,Uf=b.forwardRef(({children:r,shadow:l=!0,...s},u)=>A.createElement(Yt,{ref:u,shadow:l,...s},A.createElement(D0,null,r)));Uf.displayName="ScrollView";const Hf=te`
  width: ${Kt}px;
  height: ${Kt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,R0=T(Yt)`
  ${Hf}
  width: ${Kt}px;
  height: ${Kt}px;
  background: ${({$disabled:r,theme:l})=>r?l.material:l.canvas};
  &:before {
    box-shadow: none;
  }
`,_0=T.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:r,theme:l})=>r?l.flatLight:l.canvas};
  ${Hf}
  width: ${Kt-4}px;
  height: ${Kt-4}px;
  outline: none;
  border: 2px solid ${({theme:r})=>r.flatDark};
  background: ${({$disabled:r,theme:l})=>r?l.flatLight:l.canvas};
`,z0=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:r,theme:l})=>r?l.checkmarkDisabled:l.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${r=>r.$disabled?r.theme.checkmarkDisabled:r.theme.checkmark};
  }
`,P0=T.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:r,theme:l})=>_o({mainColor:r?l.checkmarkDisabled:l.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,N0={flat:_0,default:R0},Qf=b.forwardRef(({checked:r,className:l="",defaultChecked:s=!1,disabled:u=!1,indeterminate:d=!1,label:h="",onChange:p=rr,style:w={},value:x,variant:C="default",...D},S)=>{var $;const[W,H]=Nn({defaultValue:s,onChange:p,readOnly:($=D.readOnly)!==null&&$!==void 0?$:u,value:r}),M=b.useCallback(B=>{const O=B.target.checked;H(O),p(B)},[p,H]),j=N0[C];let Q=null;return d?Q=P0:W&&(Q=z0),A.createElement(Os,{$disabled:u,className:l,style:w},A.createElement(ri,{disabled:u,onChange:u?void 0:M,readOnly:u,type:"checkbox",value:x,checked:W,"data-indeterminate":d,ref:S,...D}),A.createElement(j,{$disabled:u,role:"presentation"},Q&&A.createElement(Q,{$disabled:u,variant:C})),h&&A.createElement(Fs,null,h))});Qf.displayName="Checkbox";const Wf=T.div`
  ${({orientation:r,theme:l,size:s="100%"})=>r==="vertical"?`
    height: ${Pn(s)};
    border-left: 2px solid ${l.borderDark};
    border-right: 2px solid ${l.borderLightest};
    margin: 0;
    `:`
    width: ${Pn(s)};
    border-bottom: 2px solid ${l.borderLightest};
    border-top: 2px solid ${l.borderDark};
    margin: 0;
    `}
`;Wf.displayName="Separator";const L0=T(fi)`
  padding-left: 8px;
`,j0=T(Wf)`
  height: 21px;
  position: relative;
  top: 0;
`,Vf=T.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,O0=T.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:r})=>r};

  ${({$disabled:r})=>r?te`
          border: 2px solid ${({theme:l})=>l.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:l})=>l.materialTextDisabledShadow}
          );
        `:te`
          border: 2px solid ${({theme:l})=>l.materialText};
        `}
  ${Vf}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${jr}
    outline-offset: -8px;
  }
`,F0=T.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:r})=>r?te`
          border-top: 6px solid ${({theme:l})=>l.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:l})=>l.materialTextDisabledShadow}
          );
        `:te`
          border-top: 6px solid ${({theme:l})=>l.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:r})=>r==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,M0=b.forwardRef(({value:r,defaultValue:l,onChange:s=rr,disabled:u=!1,variant:d="default",...h},p)=>{var w;const[x,C]=Nn({defaultValue:l,onChange:s,readOnly:(w=h.readOnly)!==null&&w!==void 0?w:u,value:r}),D=S=>{const $=S.target.value;C($),s(S)};return A.createElement(L0,{disabled:u,as:"div",variant:d,size:"md"},A.createElement(Vf,{onChange:D,readOnly:u,disabled:u,value:x??"#008080",type:"color",ref:p,...h}),A.createElement(O0,{$disabled:u,color:x??"#008080",role:"presentation"}),d==="default"&&A.createElement(j0,{orientation:"vertical"}),A.createElement(F0,{$disabled:u,variant:d}))});M0.displayName="ColorInput";const B0=T.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:r})=>te`
    width: ${11*r}px;
    height: ${21*r}px;
    margin: ${r}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${_o({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:r})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${r}px;
      border-left: ${r}px solid var(--react95-digit-bg-color);
      border-right: ${r}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${r}px;
      border-left: ${r}px solid var(--react95-digit-primary-color);
      border-right: ${r}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${r}px;
      width: ${9*r}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${r}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${r*2}px);
      top: ${2*r}px;
      left: ${r}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${r}px;
      border-left: ${r}px solid var(--react95-digit-bg-color);
      border-right: ${r}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${r}px solid var(--react95-digit-primary-color);
      border-right: ${r}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${r}px;
      width: ${9*r}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${r}px;
    }
    span.center:after {
      bottom: ${r}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${r}px;
      border-top: ${r}px solid var(--react95-digit-bg-color);
      border-bottom: ${r}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*r}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${r}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${r*2}px);
      top: ${r}px;
      left: ${r*2}px;
    }
  `}
`,tf=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],U0=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function H0({digit:r=0,pixelSize:l=2,...s}){const u=U0[Number(r)].map((d,h)=>d?`${tf[h]} active`:tf[h]);return A.createElement(B0,{pixelSize:l,...s},u.map((d,h)=>A.createElement("span",{className:d,key:h})))}const Q0=T.div`
  ${Be({style:"status"})}
  display: inline-flex;
  background: #000000;
`,W0={sm:1,md:2,lg:3,xl:4},V0=b.forwardRef(({value:r=0,minLength:l=3,size:s="md",...u},d)=>{const h=b.useMemo(()=>r.toString().padStart(l,"0").split(""),[l,r]);return A.createElement(Q0,{ref:d,...u},h.map((p,w)=>A.createElement(H0,{digit:p,pixelSize:W0[s],key:w})))});V0.displayName="Counter";const Gf=te`
  display: flex;
  align-items: center;
  width: ${({fullWidth:r})=>r?"100%":"auto"};
  min-height: ${nt.md};
`,G0=T(Yt).attrs({"data-testid":"variant-default"})`
  ${Gf}
  background: ${({$disabled:r,theme:l})=>r?l.material:l.canvas};
`,K0=T.div.attrs({"data-testid":"variant-flat"})`
  ${nr()}
  ${Gf}
  position: relative;
`,Kf=te`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:r})=>r.canvasText};
  ${({disabled:r,variant:l})=>l!=="flat"&&r&&Ot()}
`,Y0=T.input`
  ${Kf}
  padding: 0 8px;
`,X0=T.textarea`
  ${Kf}
  padding: 8px;
  resize: none;
  ${({variant:r})=>js(r)}
`,Ms=b.forwardRef(({className:r,disabled:l=!1,fullWidth:s,onChange:u=rr,shadow:d=!0,style:h,variant:p="default",...w},x)=>{const C=p==="flat"?K0:G0,D=b.useMemo(()=>{var S;return w.multiline?A.createElement(X0,{disabled:l,onChange:l?void 0:u,readOnly:l,ref:x,variant:p,...w}):A.createElement(Y0,{disabled:l,onChange:l?void 0:u,readOnly:l,ref:x,type:(S=w.type)!==null&&S!==void 0?S:"text",variant:p,...w})},[l,u,w,x,p]);return A.createElement(C,{className:r,fullWidth:s,$disabled:l,shadow:d,style:h},D)});Ms.displayName="TextInput";const Z0=T.div`
  display: inline-flex;
  align-items: center;
`,Cs=T(dn)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:r})=>r==="flat"?te`
          height: calc(50% - 1px);
        `:te`
          height: 50%;
        `}
`,q0=T.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:r})=>r==="flat"?te`
          height: calc(${nt.md} - 4px);
        `:te`
          height: ${nt.md};
          margin-left: 2px;
        `}
`,nf=T.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:r})=>r?te`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:l})=>l.materialText};
        `:te`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:l})=>l.materialText};
        `}
  ${Cs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
    );
    ${({invert:r})=>r?te`
            border-bottom-color: ${({theme:l})=>l.materialTextDisabled};
          `:te`
            border-top-color: ${({theme:l})=>l.materialTextDisabled};
          `}
  }
`,Yf=b.forwardRef(({className:r,defaultValue:l,disabled:s=!1,max:u,min:d,onChange:h,readOnly:p,step:w=1,style:x,value:C,variant:D="default",width:S,...$},W)=>{const[H,M]=Nn({defaultValue:l,onChange:h,readOnly:p,value:C}),j=b.useCallback(G=>{const X=parseFloat(G.target.value);M(X)},[M]),Q=b.useCallback(G=>{const X=qn(parseFloat(((H??0)+G).toFixed(2)),d??null,u??null);M(X),h==null||h(X)},[u,d,h,M,H]),B=b.useCallback(()=>{H!==void 0&&(h==null||h(H))},[h,H]),O=b.useCallback(()=>{Q(w)},[Q,w]),Z=b.useCallback(()=>{Q(-w)},[Q,w]),ne=D==="flat"?"flat":"raised";return A.createElement(Z0,{className:r,style:{...x,width:S!==void 0?Pn(S):"auto"},...$},A.createElement(Ms,{value:H,variant:D,onChange:j,disabled:s,type:"number",readOnly:p,ref:W,fullWidth:!0,onBlur:B}),A.createElement(q0,{variant:D},A.createElement(Cs,{"data-testid":"increment",variant:ne,disabled:s||p,onClick:O},A.createElement(nf,{invert:!0})),A.createElement(Cs,{"data-testid":"decrement",variant:ne,disabled:s||p,onClick:Z},A.createElement(nf,null))))});Yf.displayName="NumberInput";function J0(){const r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let l="";for(let s=0;s<10;s+=1)l+=r[Math.floor(Math.random()*r.length)];return l}const Xf=r=>b.useMemo(()=>J0(),[r]),Zf=te`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,qf=te`
  background: ${({theme:r})=>r.hoverBackground};
  color: ${({theme:r})=>r.canvasTextInvert};
`,Bs=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,eg=T.div`
  ${Zf}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Bs}:focus & {
    ${qf}
    border: 2px dotted ${({theme:r})=>r.focusSecondary};
  }
`,Jf=te`
  height: ${nt.md};
  display: inline-block;
  color: ${({$disabled:r=!1,theme:l})=>r?Ot():l.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:r})=>r?"default":"pointer"};
`,tg=T(Yt)`
  ${Jf}
  background: ${({$disabled:r=!1,theme:l})=>r?l.material:l.canvas};
  &:focus {
    outline: 0;
  }
`,ng=T.div`
  ${nr()}
  ${Jf}
  background: ${({$disabled:r=!1,theme:l})=>r?l.flatLight:l.canvas};
`,rg=T.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Zf}
  cursor: pointer;
  &:disabled {
    ${Ot()};
    background: ${({theme:r})=>r.material};
    cursor: default;
  }
`,ep=T(fi).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:r="default"})=>r==="flat"?te`
          height: 100%;
          margin-right: 0;
        `:te`
          height: 100%;
        `}
  ${({native:r=!1,variant:l="default"})=>r&&(l==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:r=!1,native:l=!1})=>r||l?"none":"auto"}
`,og=T.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:r=!1,theme:l})=>r?l.materialTextDisabled:l.materialText};
  ${({$disabled:r=!1,theme:l})=>r&&`
    filter: drop-shadow(1px 1px 0px ${l.materialTextDisabledShadow});
    border-top-color: ${l.materialTextDisabled};
    `}
  ${ep}:active & {
    margin-top: 2px;
  }
`,lg=T.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:r})=>r.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Ns};
  ${({variant:r="default"})=>r==="flat"?te`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:l})=>l.flatDark};
        `:te`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:l})=>l.borderDarkest};
        `}
  ${({variant:r="default"})=>js(r)}
`,ig=T.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${nt.md} - 4px);
  line-height: calc(${nt.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:r})=>r.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:r})=>r?qf:""}
  user-select: none;
`,ag=[],tp=({className:r,defaultValue:l,disabled:s,native:u,onChange:d,options:h=ag,readOnly:p,style:w,value:x,variant:C,width:D})=>{var S;const $=b.useMemo(()=>h.filter(Boolean),[h]),[W,H]=Nn({defaultValue:l??((S=$==null?void 0:$[0])===null||S===void 0?void 0:S.value),onChange:d,readOnly:p,value:x}),M=!(s||p),j=b.useMemo(()=>({className:r,style:{...w,width:D}}),[r,w,D]),Q=b.useMemo(()=>A.createElement(ep,{as:"div","data-testid":"select-button",$disabled:s,native:u,tabIndex:-1,variant:C==="flat"?"flat":"raised"},A.createElement(og,{"data-testid":"select-icon",$disabled:s})),[s,u,C]),B=b.useMemo(()=>C==="flat"?ng:tg,[C]);return b.useMemo(()=>({isEnabled:M,options:$,value:W,setValue:H,wrapperProps:j,DropdownButton:Q,Wrapper:B}),[Q,B,M,$,H,W,j])},sg={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},ug=1e3,cg=({onBlur:r,onChange:l,onClose:s,onFocus:u,onKeyDown:d,onMouseDown:h,onOpen:p,open:w,options:x,readOnly:C,value:D,selectRef:S,setValue:$,wrapperRef:W})=>{const H=b.useRef(null),M=b.useRef([]),j=b.useRef(0),Q=b.useRef(0),B=b.useRef(),O=b.useRef("search"),Z=b.useRef(""),ne=b.useRef(),[G,X]=Nn({defaultValue:!1,onChange:p,onChangePropName:"onOpen",readOnly:C,value:w,valuePropName:"open"}),Ee=b.useMemo(()=>{const R=x.findIndex(de=>de.value===D);return j.current=qn(R,0,null),x[R]},[x,D]),[q,me]=b.useState(x[0]),ce=b.useCallback(R=>{const de=H.current,we=M.current[R];if(!we||!de){B.current=R;return}B.current=void 0;const Ae=de.clientHeight,De=de.scrollTop,Ue=de.scrollTop+Ae,Fe=we.offsetTop,at=we.offsetHeight,gt=we.offsetTop+we.offsetHeight;Fe<De&&de.scrollTo(0,Fe),gt>Ue&&de.scrollTo(0,Fe-Ae+at),we.focus({preventScroll:!0})},[H]),fe=b.useCallback((R,{scroll:de}={})=>{var we;const Ae=x.length-1;let De;switch(R){case"first":{De=0;break}case"last":{De=Ae;break}case"next":{De=qn(Q.current+1,0,Ae);break}case"previous":{De=qn(Q.current-1,0,Ae);break}case"selected":{De=qn((we=j.current)!==null&&we!==void 0?we:0,0,Ae);break}default:De=R}Q.current=De,me(x[De]),de&&ce(De)},[Q,x,ce]),ae=b.useCallback(({fromEvent:R})=>{X(!0),fe("selected",{scroll:!0}),p==null||p({fromEvent:R})},[fe,p,X]),ge=b.useCallback(()=>{O.current="search",Z.current="",clearTimeout(ne.current)},[]),be=b.useCallback(({focusSelect:R,fromEvent:de})=>{var we;s==null||s({fromEvent:de}),X(!1),me(x[0]),ge(),B.current=void 0,R&&((we=S.current)===null||we===void 0||we.focus())},[ge,s,x,S,X]),$e=b.useCallback(({fromEvent:R})=>{G?be({focusSelect:!1,fromEvent:R}):ae({fromEvent:R})},[be,ae,G]),xe=b.useCallback((R,{fromEvent:de})=>{j.current!==R&&(j.current=R,$(x[R].value),l==null||l(x[R],{fromEvent:de}))},[l,x,$]),_=b.useCallback(({focusSelect:R,fromEvent:de})=>{xe(Q.current,{fromEvent:de}),be({focusSelect:R,fromEvent:de})},[be,xe]),K=b.useCallback((R,{fromEvent:de,select:we})=>{var Ae;switch(O.current==="cycleFirstLetter"&&R!==Z.current&&(O.current="search"),R===Z.current?O.current="cycleFirstLetter":Z.current+=R,O.current){case"search":{let De=x.findIndex(Ue=>{var Fe;return((Fe=Ue.label)===null||Fe===void 0?void 0:Fe.toLocaleUpperCase().indexOf(Z.current))===0});De<0&&(De=x.findIndex(Ue=>{var Fe;return((Fe=Ue.label)===null||Fe===void 0?void 0:Fe.toLocaleUpperCase().indexOf(R))===0}),Z.current=R),De>=0&&(we?xe(De,{fromEvent:de}):fe(De,{scroll:!0}));break}case"cycleFirstLetter":{const De=we?(Ae=j.current)!==null&&Ae!==void 0?Ae:-1:Q.current;let Ue=x.findIndex((Fe,at)=>{var gt;return at>De&&((gt=Fe.label)===null||gt===void 0?void 0:gt.toLocaleUpperCase().indexOf(R))===0});Ue<0&&(Ue=x.findIndex(Fe=>{var at;return((at=Fe.label)===null||at===void 0?void 0:at.toLocaleUpperCase().indexOf(R))===0})),Ue>=0&&(we?xe(Ue,{fromEvent:de}):fe(Ue,{scroll:!0}));break}}clearTimeout(ne.current),ne.current=setTimeout(()=>{O.current==="search"&&(Z.current="")},ug)},[fe,x,xe]),U=b.useCallback(R=>{var de;R.button===0&&(R.preventDefault(),(de=S.current)===null||de===void 0||de.focus(),$e({fromEvent:R}),h==null||h(R))},[h,S,$e]),v=b.useCallback(R=>{_({focusSelect:!0,fromEvent:R})},[_]),I=b.useCallback(R=>{const{altKey:de,code:we,ctrlKey:Ae,metaKey:De,shiftKey:Ue}=R,{ARROW_DOWN:Fe,ARROW_UP:at,END:gt,ENTER:Mt,ESC:St,HOME:Xt,SPACE:Bt,TAB:Zt}=sg,Fr=de||Ae||De||Ue;if(!(we===Zt&&(de||Ae||De)||we!==Zt&&Fr))switch(we){case Fe:{if(R.preventDefault(),!G){ae({fromEvent:R});return}fe("next",{scroll:!0});break}case at:{if(R.preventDefault(),!G){ae({fromEvent:R});return}fe("previous",{scroll:!0});break}case gt:{if(R.preventDefault(),!G){ae({fromEvent:R});return}fe("last",{scroll:!0});break}case Mt:{if(!G)return;R.preventDefault(),_({focusSelect:!0,fromEvent:R});break}case St:{if(!G)return;R.preventDefault(),be({focusSelect:!0,fromEvent:R});break}case Xt:{if(R.preventDefault(),!G){ae({fromEvent:R});return}fe("first",{scroll:!0});break}case Bt:{R.preventDefault(),G?_({focusSelect:!0,fromEvent:R}):ae({fromEvent:R});break}case Zt:{if(!G)return;Ue||R.preventDefault(),_({focusSelect:!Ue,fromEvent:R});break}default:!Fr&&we.match(/^Key/)&&(R.preventDefault(),R.stopPropagation(),K(we.replace(/^Key/,""),{select:!G,fromEvent:R}))}},[fe,be,G,ae,K,_]),V=b.useCallback(R=>{I(R),d==null||d(R)},[I,d]),Y=b.useCallback(R=>{fe(R)},[fe]),oe=b.useCallback(R=>{G||(ge(),r==null||r(R))},[ge,r,G]),ee=b.useCallback(R=>{ge(),u==null||u(R)},[ge,u]),se=b.useCallback(R=>{H.current=R,B.current!==void 0&&ce(B.current)},[ce]),ve=b.useCallback((R,de)=>{M.current[de]=R,B.current===de&&ce(B.current)},[ce]);return b.useEffect(()=>{if(!G)return()=>{};const R=de=>{var we;const Ae=de.target;!((we=W.current)===null||we===void 0)&&we.contains(Ae)||(de.preventDefault(),be({focusSelect:!1,fromEvent:de}))};return document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}},[be,G,W]),b.useMemo(()=>({activeOption:q,handleActivateOptionIndex:Y,handleBlur:oe,handleButtonKeyDown:V,handleDropdownKeyDown:I,handleFocus:ee,handleMouseDown:U,handleOptionClick:v,handleSetDropdownRef:se,handleSetOptionRef:ve,open:G,selectedOption:Ee}),[q,Y,oe,V,ee,I,U,v,se,ve,G,Ee])},dg=b.forwardRef(({className:r,defaultValue:l,disabled:s,onChange:u,options:d,readOnly:h,style:p,value:w,variant:x,width:C,...D},S)=>{const{isEnabled:$,options:W,setValue:H,value:M,DropdownButton:j,Wrapper:Q}=tp({defaultValue:l,disabled:s,native:!0,onChange:u,options:d,readOnly:h,value:w,variant:x}),B=b.useCallback(O=>{const Z=W.find(ne=>ne.value===O.target.value);Z&&(H(Z.value),u==null||u(Z,{fromEvent:O}))},[u,W,H]);return A.createElement(Q,{className:r,style:{...p,width:C}},A.createElement(Bs,null,A.createElement(rg,{...D,disabled:s,onChange:$?B:rr,ref:S,value:M},W.map((O,Z)=>{var ne;return A.createElement("option",{key:`${O.value}-${Z}`,value:O.value},(ne=O.label)!==null&&ne!==void 0?ne:O.value)})),j))});dg.displayName="SelectNative";function fg({activateOptionIndex:r,active:l,index:s,onClick:u,option:d,selected:h,setRef:p}){const w=b.useCallback(()=>{r(s)},[r,s]),x=b.useCallback(D=>{p(D,s)},[s,p]),C=Xf();return A.createElement(ig,{active:l,"aria-selected":h?"true":void 0,"data-value":d.value,id:C,onClick:u,onMouseEnter:w,ref:x,role:"option",tabIndex:0},d.label)}function pg({"aria-label":r,"aria-labelledby":l,className:s,defaultValue:u,disabled:d=!1,formatDisplay:h,inputProps:p,labelId:w,menuMaxHeight:x,name:C,onBlur:D,onChange:S,onClose:$,onFocus:W,onKeyDown:H,onMouseDown:M,onOpen:j,open:Q,options:B,readOnly:O,shadow:Z=!0,style:ne,variant:G="default",value:X,width:Ee="auto",...q},me){const{isEnabled:ce,options:fe,setValue:ae,value:ge,wrapperProps:be,DropdownButton:$e,Wrapper:xe}=tp({className:s,defaultValue:u,disabled:d,native:!1,onChange:S,options:B,style:ne,readOnly:O,value:X,variant:G,width:Ee}),_=b.useRef(null),K=b.useRef(null),U=b.useRef(null),{activeOption:v,handleActivateOptionIndex:I,handleBlur:V,handleButtonKeyDown:Y,handleDropdownKeyDown:oe,handleFocus:ee,handleMouseDown:se,handleOptionClick:ve,handleSetDropdownRef:R,handleSetOptionRef:de,open:we,selectedOption:Ae}=cg({onBlur:D,onChange:S,onClose:$,onFocus:W,onKeyDown:H,onMouseDown:M,onOpen:j,open:Q,options:fe,value:ge,selectRef:K,setValue:ae,wrapperRef:U});b.useImperativeHandle(me,()=>({focus:Mt=>{var St;(St=K.current)===null||St===void 0||St.focus(Mt)},node:_.current,value:String(ge)}),[ge]);const De=b.useMemo(()=>Ae?typeof h=="function"?h(Ae):Ae.label:"",[h,Ae]),Ue=ce?1:void 0,Fe=b.useMemo(()=>x?{overflow:"auto",maxHeight:x}:void 0,[x]),at=Xf(),gt=b.useMemo(()=>fe.map((Mt,St)=>{const Xt=`${ge}-${St}`,Bt=Mt===v,Zt=Mt===Ae;return A.createElement(fg,{activateOptionIndex:I,active:Bt,index:St,key:Xt,onClick:ve,option:Mt,selected:Zt,setRef:de})}),[v,I,ve,de,fe,Ae,ge]);return A.createElement(xe,{...be,$disabled:d,ref:U,shadow:Z,style:{...ne,width:Ee}},A.createElement("input",{name:C,ref:_,type:"hidden",value:String(ge),...p}),A.createElement(Bs,{"aria-disabled":d,"aria-expanded":we,"aria-haspopup":"listbox","aria-label":r,"aria-labelledby":l??w,"aria-owns":ce&&we?at:void 0,onBlur:V,onFocus:ee,onKeyDown:Y,onMouseDown:ce?se:M,ref:K,role:"button",tabIndex:Ue,...q},A.createElement(eg,null,De),$e),ce&&we&&A.createElement(lg,{id:at,onKeyDown:oe,ref:R,role:"listbox",style:Fe,tabIndex:0,variant:G},gt))}const pi=b.forwardRef(pg);pi.displayName="Select";const hg=T.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${r=>r.noPadding?"0":"4px"};
`,oi=b.forwardRef(function({children:l,noPadding:s=!1,...u},d){return A.createElement(hg,{noPadding:s,ref:d,...u},l)});oi.displayName="Toolbar";const mg=T.div`
  padding: 16px;
`,un=b.forwardRef(function({children:l,...s},u){return A.createElement(mg,{ref:u,...s},l)});un.displayName="WindowContent";const gg=T.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:r})=>r.material};
  ${({active:r})=>r===!1?te`
          background: ${({theme:l})=>l.headerNotActiveBackground};
          color: ${({theme:l})=>l.headerNotActiveText};
        `:te`
          background: ${({theme:l})=>l.headerBackground};
          color: ${({theme:l})=>l.headerText};
        `}

  ${fi} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,cn=b.forwardRef(function({active:l=!0,children:s,...u},d){return A.createElement(gg,{active:l,ref:d,...u},s)});cn.displayName="WindowHeader";const vg=T.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Be({style:"window"})}
  ${Ft()}
`,yg=T.span`
  ${({theme:r})=>te`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${r.borderLightest} 16.67%,
      ${r.material} 16.67%,
      ${r.material} 33.33%,
      ${r.borderDark} 33.33%,
      ${r.borderDark} 50%,
      ${r.borderLightest} 50%,
      ${r.borderLightest} 66.67%,
      ${r.material} 66.67%,
      ${r.material} 83.33%,
      ${r.borderDark} 83.33%,
      ${r.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Us=b.forwardRef(({children:r,resizable:l=!1,resizeRef:s,shadow:u=!0,...d},h)=>A.createElement(vg,{ref:h,shadow:u,...d},r,l&&A.createElement(yg,{"data-testid":"resizeHandle",ref:s})));Us.displayName="Window";const xg=T(Uf)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:r})=>r.canvas};
`,wg=T.div`
  display: flex;
  background: ${({theme:r})=>r.materialDark};
  color: #dfe0e3;
`,kg=T.div`
  display: flex;
  flex-wrap: wrap;
`,an=T.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Sg=T.span`
  cursor: pointer;

  background: ${({active:r,theme:l})=>r?l.hoverBackground:"transparent"};
  color: ${({active:r,theme:l})=>r?l.canvasTextInvert:l.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:r,active:l})=>l?"none":r.materialDark};
  }
`,Eg=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function bg(r,l){return new Date(r,l+1,0).getDate()}function Ag(r,l,s){return new Date(r,l,s).getDay()}function Cg(r){const l=new Date(Date.parse(r)),s=l.getUTCDate(),u=l.getUTCMonth(),d=l.getUTCFullYear();return{day:s,month:u,year:d}}const $g=b.forwardRef(({className:r,date:l=new Date().toISOString(),onAccept:s,onCancel:u,shadow:d=!0},h)=>{const[p,w]=b.useState(()=>Cg(l)),{year:x,month:C,day:D}=p,S=b.useCallback(({value:j})=>{w(Q=>({...Q,month:j}))},[]),$=b.useCallback(j=>{w(Q=>({...Q,year:j}))},[]),W=b.useCallback(j=>{w(Q=>({...Q,day:j}))},[]),H=b.useCallback(()=>{const j=[p.year,p.month+1,p.day].map(Q=>String(Q).padStart(2,"0")).join("-");s==null||s(j)},[p.day,p.month,p.year,s]),M=b.useMemo(()=>{const j=Array.from({length:42}),Q=Ag(x,C,1);let B=D;const O=bg(x,C);return B=B<O?B:O,j.forEach((Z,ne)=>{if(ne>=Q&&ne<O+Q){const G=ne-Q+1;j[ne]=A.createElement(an,{key:ne,onClick:()=>{W(G)}},A.createElement(Sg,{active:G===B},G))}else j[ne]=A.createElement(an,{key:ne})}),j},[D,W,C,x]);return A.createElement(Us,{className:r,ref:h,shadow:d,style:{margin:20}},A.createElement(cn,null,A.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),A.createElement(un,null,A.createElement(oi,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(pi,{options:Eg,value:C,onChange:S,width:128,menuMaxHeight:200}),A.createElement(Yf,{value:x,onChange:$,width:100})),A.createElement(xg,null,A.createElement(wg,null,A.createElement(an,null,"S"),A.createElement(an,null,"M"),A.createElement(an,null,"T"),A.createElement(an,null,"W"),A.createElement(an,null,"T"),A.createElement(an,null,"F"),A.createElement(an,null,"S")),A.createElement(kg,null,M)),A.createElement(oi,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(dn,{fullWidth:!0,onClick:u,disabled:!u},"Cancel"),A.createElement(dn,{fullWidth:!0,onClick:s?H:void 0,disabled:!s},"OK"))))});$g.displayName="DatePicker";const Tg=r=>{switch(r){case"status":case"well":return te`
        ${Be({style:"status"})}
      `;case"window":case"outside":return te`
        ${Be({style:"window"})}
      `;case"field":return te`
        ${Be({style:"field"})}
      `;default:return te`
        ${Be()}
      `}},Ig=T.div`
  position: relative;
  font-size: 1rem;
  ${({variant:r})=>Tg(r)}
  ${({variant:r})=>Ft(r==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Dg=b.forwardRef(({children:r,shadow:l=!1,variant:s="window",...u},d)=>A.createElement(Ig,{ref:d,shadow:l,variant:s,...u},r));Dg.displayName="Frame";const Rg=T.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:r,variant:l})=>l==="flat"?r.flatDark:r.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:r})=>r.materialText};
  ${({variant:r})=>r!=="flat"&&te`
      box-shadow: -1px -1px 0 1px ${({theme:l})=>l.borderDark},
        inset -1px -1px 0 1px ${({theme:l})=>l.borderDark};
    `}
  ${r=>r.$disabled&&Ot()}
`,_g=T.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:r,variant:l})=>l==="flat"?r.canvas:r.material};
`,np=b.forwardRef(({label:r,disabled:l=!1,variant:s="default",children:u,...d},h)=>A.createElement(Rg,{"aria-disabled":l,$disabled:l,variant:s,ref:h,...d},r&&A.createElement(_g,{variant:s},r),u));np.displayName="GroupBox";const zg=T.div`
  ${({theme:r,size:l="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Pn(l)};
  width: 5px;
  border-top: 2px solid ${r.borderLightest};
  border-left: 2px solid ${r.borderLightest};
  border-bottom: 2px solid ${r.borderDark};
  border-right: 2px solid ${r.borderDark};
  background: ${r.material};
`}
`;zg.displayName="Handle";const Pg="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ng=T.div`
  display: inline-block;
  height: ${({size:r})=>Pn(r)};
  width: ${({size:r})=>Pn(r)};
`,Lg=T.span`
  display: block;
  background: ${Pg};
  background-size: cover;
  width: 100%;
  height: 100%;
`,jg=b.forwardRef(({size:r=30,...l},s)=>A.createElement(Ng,{size:r,ref:s,...l},A.createElement(Lg,null)));jg.displayName="Hourglass";const Og=T.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Fg=T.div`
  position: relative;
`,Mg=T.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:r})=>r.material};
  border-top: 4px solid ${({theme:r})=>r.borderLightest};
  border-left: 4px solid ${({theme:r})=>r.borderLightest};
  border-bottom: 4px solid ${({theme:r})=>r.borderDark};
  border-right: 4px solid ${({theme:r})=>r.borderDark};

  outline: 1px dotted ${({theme:r})=>r.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:r})=>r.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:r})=>r.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Bg=T(Yt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Ug=T.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:r})=>r.material};
  border-left: 2px solid ${({theme:r})=>r.borderLightest};
  border-bottom: 2px solid ${({theme:r})=>r.borderDarkest};
  border-right: 2px solid ${({theme:r})=>r.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:r})=>r.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:r})=>r.material};
    border-left: 2px solid ${({theme:r})=>r.borderLightest};
    border-right: 2px solid ${({theme:r})=>r.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:r})=>r.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:r})=>r.material};
    border: 2px solid ${({theme:r})=>r.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:r})=>r.borderLightest},
      1px 1px 0 1px ${({theme:r})=>r.borderDarkest};
  }
`,Hg=b.forwardRef(({backgroundStyles:r,children:l,...s},u)=>A.createElement(Og,{ref:u,...s},A.createElement(Fg,null,A.createElement(Mg,null,A.createElement(Bg,{style:r},l)),A.createElement(Ug,null))));Hg.displayName="Monitor";const Qg=T.div`
  display: inline-block;
  height: ${nt.md};
  width: 100%;
`,Wg=T(Yt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,rp=te`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Vg=T.div`
  position: relative;
  top: 4px;
  ${rp}
  background: ${({theme:r})=>r.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:r})=>r.materialText};
`,Gg=T.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${rp}
  color: ${({theme:r})=>r.materialTextInvert};
  background: ${({theme:r})=>r.progress};
  clip-path: polygon(
    0 0,
    ${({value:r=0})=>r}% 0,
    ${({value:r=0})=>r}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Kg=T.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,op=17,Yg=T.span`
  display: inline-block;
  width: ${op}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:r})=>r.progress};
  border-color: ${({theme:r})=>r.material};
  border-width: 0px 1px;
  border-style: solid;
`,Xg=b.forwardRef(({hideValue:r=!1,shadow:l=!0,value:s,variant:u="default",...d},h)=>{const p=r?null:`${s}%`,w=b.useRef(null),[x,C]=b.useState([]),D=b.useCallback(()=>{if(!w.current||s===void 0)return;const S=w.current.getBoundingClientRect().width,$=Math.round(s/100*S/op);C(Array.from({length:$}))},[s]);return b.useEffect(()=>(D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)),[D]),A.createElement(Qg,{"aria-valuenow":s!==void 0?Math.round(s):void 0,ref:h,role:"progressbar",variant:u,...d},A.createElement(Wg,{variant:u,shadow:l},u==="default"?A.createElement(A.Fragment,null,A.createElement(Vg,{"data-testid":"defaultProgress1"},p),A.createElement(Gg,{"data-testid":"defaultProgress2",value:s},p)):A.createElement(Kg,{ref:w,"data-testid":"tileProgress"},x.map((S,$)=>A.createElement(Yg,{key:$})))))});Xg.displayName="ProgressBar";const lp=te`
  width: ${Kt}px;
  height: ${Kt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Zg=T(Yt)`
  ${lp}
  background: ${({$disabled:r,theme:l})=>r?l.material:l.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,qg=T.div`
  ${nr()}
  ${lp}
  outline: none;
  background: ${({$disabled:r,theme:l})=>r?l.flatLight:l.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:r})=>r.flatDark};
    border-radius: 50%;
  }
`,Jg=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${r=>r.$disabled?r.theme.checkmarkDisabled:r.theme.checkmark};
`,ev={flat:qg,default:Zg},tv=b.forwardRef(({checked:r,className:l="",disabled:s=!1,label:u="",onChange:d,style:h={},variant:p="default",...w},x)=>{const C=ev[p];return A.createElement(Os,{$disabled:s,className:l,style:h},A.createElement(C,{$disabled:s,role:"presentation"},r&&A.createElement(Jg,{$disabled:s,variant:p})),A.createElement(ri,{disabled:s,onChange:s?void 0:d,readOnly:s,type:"radio",checked:r,ref:x,...w}),u&&A.createElement(Fs,null,u))});tv.displayName="Radio";const nv=typeof window<"u"?b.useLayoutEffect:b.useEffect;function Yn(r){const l=b.useRef(r);return nv(()=>{l.current=r}),b.useCallback((...s)=>(0,l.current)(...s),[])}function rf(r,l){typeof r=="function"?r(l):r&&(r.current=l)}function of(r,l){return b.useMemo(()=>r==null&&l==null?null:s=>{rf(r,s),rf(l,s)},[r,l])}var rv=gf();let hi=!0,$s=!1,lf;const ov={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function lv(r){if("type"in r){const{type:l,tagName:s}=r;if(s==="INPUT"&&ov[l]&&!r.readOnly||s==="TEXTAREA"&&!r.readOnly)return!0}return!!("isContentEditable"in r&&r.isContentEditable)}function iv(r){r.metaKey||r.altKey||r.ctrlKey||(hi=!0)}function hs(){hi=!1}function av(){this.visibilityState==="hidden"&&$s&&(hi=!0)}function sv(r){r.addEventListener("keydown",iv,!0),r.addEventListener("mousedown",hs,!0),r.addEventListener("pointerdown",hs,!0),r.addEventListener("touchstart",hs,!0),r.addEventListener("visibilitychange",av,!0)}function uv(r){const{target:l}=r;try{return l.matches(":focus-visible")}catch{}return hi||lv(l)}function cv(){$s=!0,window.clearTimeout(lf),lf=window.setTimeout(()=>{$s=!1},100)}function dv(){const r=b.useCallback(l=>{const s=rv.findDOMNode(l);s!=null&&sv(s.ownerDocument)},[]);return{isFocusVisible:uv,onBlurVisible:cv,ref:r}}function fv(r,l,s){return(s-l)*r+l}function Wl(r,l){if(l!==void 0&&"changedTouches"in r){for(let s=0;s<r.changedTouches.length;s+=1){const u=r.changedTouches[s];if(u.identifier===l)return{x:u.clientX,y:u.clientY}}return!1}return"clientX"in r?{x:r.clientX,y:r.clientY}:!1}function Vl(r){return r&&r.ownerDocument||document}function pv(r,l){var s;const{index:u}=(s=r.reduce((d,h,p)=>{const w=Math.abs(l-h);return d===null||w<d.distance||w===d.distance?{distance:w,index:p}:d},null))!==null&&s!==void 0?s:{};return u??-1}const hv=T.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:r})=>r?"41px":"39px"};
    ${({isFocused:r,theme:l})=>r&&`
        outline: 2px dotted ${l.materialText};
        `}
  }

  ${({orientation:r,size:l})=>r==="vertical"?te`
          height: ${l};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:s})=>s?"41px":"39px"};
          }
        `:te`
          width: ${l};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:s})=>s?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:r})=>r?"none":"auto"};
`,ip=()=>te`
  position: absolute;
  ${({orientation:r})=>r==="vertical"?te`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:te`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,mv=T(Yt)`
  ${ip()}
`,gv=T(Yt)`
  ${ip()}

  border-left-color: ${({theme:r})=>r.flatLight};
  border-top-color: ${({theme:r})=>r.flatLight};
  border-right-color: ${({theme:r})=>r.canvas};
  border-bottom-color: ${({theme:r})=>r.canvas};
  &:before {
    border-left-color: ${({theme:r})=>r.flatDark};
    border-top-color: ${({theme:r})=>r.flatDark};
    border-right-color: ${({theme:r})=>r.flatLight};
    border-bottom-color: ${({theme:r})=>r.flatLight};
  }
`,vv=T.span`
  position: relative;
  ${({orientation:r})=>r==="vertical"?te`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:te`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:r})=>r==="flat"?te`
          ${nr()}
          outline: 2px solid ${({theme:l})=>l.flatDark};
          background: ${({theme:l})=>l.flatLight};
        `:te`
          ${Ft()}
          ${Be()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:r,theme:l})=>r&&_o({mainColor:l.material,secondaryColor:l.borderLightest})}
`,li=6,yv=T.span`
  display: inline-block;
  position: absolute;

  ${({orientation:r})=>r==="vertical"?te`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${li}px;
          border-bottom: 2px solid ${({theme:l})=>l.materialText};
        `:te`
          bottom: ${-6}px;
          height: ${li}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:l})=>l.materialText};
          border-right: 1px solid ${({theme:l})=>l.materialText};
        `}

  color:  ${({theme:r})=>r.materialText};
  ${({$disabled:r,theme:l})=>r&&te`
      ${Ot()}
      box-shadow: 1px 1px 0px ${l.materialTextDisabledShadow};
      border-color: ${l.materialTextDisabled};
    `}
`,xv=T.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:r})=>r==="vertical"?te`
          transform: translate(${li+2}px, ${li+1}px);
        `:te`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,wv=b.forwardRef(({defaultValue:r,disabled:l=!1,marks:s=!1,max:u=100,min:d=0,name:h,onChange:p,onChangeCommitted:w,onMouseDown:x,orientation:C="horizontal",size:D="100%",step:S=1,value:$,variant:W="default",...H},M)=>{const j=W==="flat"?gv:mv,Q=C==="vertical",[B=d,O]=Nn({defaultValue:r,onChange:p??w,value:$}),{isFocusVisible:Z,onBlurVisible:ne,ref:G}=dv(),[X,Ee]=b.useState(!1),q=b.useRef(),me=b.useRef(null),ce=of(G,q),fe=of(M,ce),ae=Yn(V=>{Z(V)&&Ee(!0)}),ge=Yn(()=>{X!==!1&&(Ee(!1),ne())}),be=b.useRef(),$e=b.useMemo(()=>s===!0&&Number.isFinite(S)?[...Array(Math.round((u-d)/S)+1)].map((V,Y)=>({label:void 0,value:d+S*Y})):Array.isArray(s)?s:[],[s,u,d,S]),xe=Yn(V=>{const Y=(u-d)/10,oe=$e.map(ve=>ve.value),ee=oe.indexOf(B);let se=0;switch(V.key){case"Home":se=d;break;case"End":se=u;break;case"PageUp":S&&(se=B+Y);break;case"PageDown":S&&(se=B-Y);break;case"ArrowRight":case"ArrowUp":S?se=B+S:se=oe[ee+1]||oe[oe.length-1];break;case"ArrowLeft":case"ArrowDown":S?se=B-S:se=oe[ee-1]||oe[0];break;default:return}V.preventDefault(),S&&(se=ef(se,S,d)),se=qn(se,d,u),O(se),Ee(!0),p==null||p(se),w==null||w(se)}),_=b.useCallback(V=>{if(!q.current)return 0;const Y=q.current.getBoundingClientRect();let oe;Q?oe=(Y.bottom-V.y)/Y.height:oe=(V.x-Y.left)/Y.width;let ee;if(ee=fv(oe,d,u),S)ee=ef(ee,S,d);else{const se=$e.map(R=>R.value),ve=pv(se,ee);ee=se[ve]}return ee=qn(ee,d,u),ee},[$e,u,d,S,Q]),K=Yn(V=>{var Y;const oe=Wl(V,be.current);if(!oe)return;const ee=_(oe);(Y=me.current)===null||Y===void 0||Y.focus(),O(ee),Ee(!0),p==null||p(ee)}),U=Yn(V=>{const Y=Wl(V,be.current);if(!Y)return;const oe=_(Y);w==null||w(oe),be.current=void 0;const ee=Vl(q.current);ee.removeEventListener("mousemove",K),ee.removeEventListener("mouseup",U),ee.removeEventListener("touchmove",K),ee.removeEventListener("touchend",U)}),v=Yn(V=>{var Y;x==null||x(V),V.preventDefault(),(Y=me.current)===null||Y===void 0||Y.focus(),Ee(!0);const oe=Wl(V,be.current);if(oe){const se=_(oe);O(se),p==null||p(se)}const ee=Vl(q.current);ee.addEventListener("mousemove",K),ee.addEventListener("mouseup",U)}),I=Yn(V=>{var Y;V.preventDefault();const oe=V.changedTouches[0];oe!=null&&(be.current=oe.identifier),(Y=me.current)===null||Y===void 0||Y.focus(),Ee(!0);const ee=Wl(V,be.current);if(ee){const ve=_(ee);O(ve),p==null||p(ve)}const se=Vl(q.current);se.addEventListener("touchmove",K),se.addEventListener("touchend",U)});return b.useEffect(()=>{const{current:V}=q;V==null||V.addEventListener("touchstart",I);const Y=Vl(V);return()=>{V==null||V.removeEventListener("touchstart",I),Y.removeEventListener("mousemove",K),Y.removeEventListener("mouseup",U),Y.removeEventListener("touchmove",K),Y.removeEventListener("touchend",U)}},[U,K,I]),A.createElement(hv,{$disabled:l,hasMarks:!!$e.length,isFocused:X,onMouseDown:v,orientation:C,ref:fe,size:Pn(D),...H},A.createElement("input",{disabled:l,name:h,type:"hidden",value:B??0}),$e&&$e.map(V=>A.createElement(yv,{$disabled:l,"data-testid":"tick",key:V.value/(u-d)*100,orientation:C,style:{[Q?"bottom":"left"]:`${(V.value-d)/(u-d)*100}%`}},V.label&&A.createElement(xv,{"aria-hidden":!0,"data-testid":"mark",orientation:C},V.label))),A.createElement(j,{orientation:C,variant:W}),A.createElement(vv,{$disabled:l,"aria-disabled":l?!0:void 0,"aria-orientation":C,"aria-valuemax":u,"aria-valuemin":d,"aria-valuenow":B,onBlur:ge,onFocus:ae,onKeyDown:xe,orientation:C,ref:me,role:"slider",style:{[Q?"bottom":"left"]:`${(Q?-100:0)+100*(B-d)/(u-d)}%`},tabIndex:l?void 0:0,variant:W}))});wv.displayName="Slider";const kv=T.tbody`
  background: ${({theme:r})=>r.canvas};
  display: table-row-group;
  box-shadow: ${Ls};
  overflow-y: auto;
`,Sv=b.forwardRef(function({children:l,...s},u){return A.createElement(kv,{ref:u,...s},l)});Sv.displayName="TableBody";const Ev=T.td`
  padding: 0 8px;
`,bv=b.forwardRef(function({children:l,...s},u){return A.createElement(Ev,{ref:u,...s},l)});bv.displayName="TableDataCell";const Av=T.thead`
  display: table-header-group;
`,Cv=b.forwardRef(function({children:l,...s},u){return A.createElement(Av,{ref:u,...s},l)});Cv.displayName="TableHead";const $v=T.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:r})=>r.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Be()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:r})=>!r&&te`
      &:active {
        &:before {
          ${Be({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:r})=>r.materialText};
  ${({$disabled:r})=>r&&Ot()}
  &:hover {
    color: ${({theme:r})=>r.materialText};
    ${({$disabled:r})=>r&&Ot()}
  }
`,Tv=b.forwardRef(function({disabled:l=!1,children:s,onClick:u,onTouchStart:d=rr,sort:h,...p},w){const x=h==="asc"?"ascending":h==="desc"?"descending":void 0;return A.createElement($v,{$disabled:l,"aria-disabled":l,"aria-sort":x,onClick:l?void 0:u,onTouchStart:l?void 0:d,ref:w,...p},A.createElement("div",null,s))});Tv.displayName="TableHeadCell";const Iv=T.tr`
  color: inherit;
  display: table-row;
  height: calc(${nt.md} - 2px);
  line-height: calc(${nt.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:r})=>r.canvasText};
  &:hover {
    background: ${({theme:r})=>r.hoverBackground};
    color: ${({theme:r})=>r.canvasTextInvert};
  }
`,Dv=b.forwardRef(function({children:l,...s},u){return A.createElement(Iv,{ref:u,...s},l)});Dv.displayName="TableRow";const Rv=T.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,_v=T(Yt)`
  &:before {
    box-shadow: none;
  }
`,zv=b.forwardRef(({children:r,...l},s)=>A.createElement(_v,null,A.createElement(Rv,{ref:s,...l},r)));zv.displayName="Table";const Pv=T.button`
  ${Ft()}
  ${Be()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${nt.md};
  line-height: ${nt.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:r})=>r.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${jr}
    outline-offset: -6px;
  }
  ${r=>r.selected&&`
    z-index: 1;
    height: calc(${nt.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:r})=>r.material};
    bottom: -4px;
    left: 2px;
  }
`,Nv=b.forwardRef(({value:r,onClick:l,selected:s=!1,children:u,...d},h)=>A.createElement(Pv,{"aria-selected":s,selected:s,onClick:p=>l==null?void 0:l(r,p),ref:h,role:"tab",...d},u));Nv.displayName="Tab";const Lv=T.div`
  ${Ft()}
  ${Be()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,jv=b.forwardRef(({children:r,...l},s)=>A.createElement(Lv,{ref:s,...l},r));jv.displayName="TabBody";const Ov=T.div`
  position: relative;
  ${({isMultiRow:r,theme:l})=>r&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${l.borderDark};
  }
  `}
`,Fv=T.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:r})=>r.borderDarkest};
    border-left: 2px solid ${({theme:r})=>r.borderLightest};
  }
`;function Mv(r,l){const s=[];for(let u=l;u>0;u-=1)s.push(r.splice(0,Math.ceil(r.length/u)));return s}const Bv=b.forwardRef(({value:r,onChange:l=rr,children:s,rows:u=1,...d},h)=>{const p=b.useMemo(()=>{var w;const x=(w=A.Children.map(s,S=>{if(!A.isValidElement(S))return null;const $={selected:S.props.value===r,onClick:l};return A.cloneElement(S,$)}))!==null&&w!==void 0?w:[],C=Mv(x,u).map((S,$)=>({key:$,tabs:S})),D=C.findIndex(S=>S.tabs.some($=>$.props.selected));return C.push(C.splice(D,1)[0]),C},[s,l,u,r]);return A.createElement(Ov,{...d,isMultiRow:u>1,role:"tablist",ref:h},p.map(w=>A.createElement(Fv,{key:w.key},w.tabs)))});Bv.displayName="Tabs";const Uv=["blur","focus"],Hv=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function af(r){return"nativeEvent"in r&&Uv.includes(r.type)}function sf(r){return"nativeEvent"in r&&Hv.includes(r.type)}const Qv={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Wv=T.span`
  position: absolute;

  z-index: 1;
  display: ${r=>r.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:r})=>r.borderDarkest};
  background: ${({theme:r})=>r.tooltip};
  box-shadow: ${Ns};
  text-align: center;
  font-size: 1rem;
  ${r=>Qv[r.position]}
`,Vv=T.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Gv=b.forwardRef(({className:r,children:l,disableFocusListener:s=!1,disableMouseListener:u=!1,enterDelay:d=1e3,leaveDelay:h=0,onBlur:p,onClose:w,onFocus:x,onMouseEnter:C,onMouseLeave:D,onOpen:S,style:$,text:W,position:H="top",...M},j)=>{const[Q,B]=b.useState(!1),[O,Z]=b.useState(),[ne,G]=b.useState(),X=!s,Ee=!u,q=_=>{window.clearTimeout(O),window.clearTimeout(ne);const K=window.setTimeout(()=>{B(!0),S==null||S(_)},d);Z(K)},me=_=>{_.persist(),af(_)?x==null||x(_):sf(_)&&(C==null||C(_)),q(_)},ce=_=>{window.clearTimeout(O),window.clearTimeout(ne);const K=window.setTimeout(()=>{B(!1),w==null||w(_)},h);G(K)},fe=_=>{_.persist(),af(_)?p==null||p(_):sf(_)&&(D==null||D(_)),ce(_)},ae=X?fe:void 0,ge=X?me:void 0,be=Ee?me:void 0,$e=Ee?fe:void 0,xe=X?0:void 0;return A.createElement(Vv,{"data-testid":"tooltip-wrapper",onBlur:ae,onFocus:ge,onMouseEnter:be,onMouseLeave:$e,tabIndex:xe},A.createElement(Wv,{className:r,"data-testid":"tooltip",position:H,ref:j,show:Q,style:$,...M},W),l)});Gv.displayName="Tooltip";const Ts=T(Fs)`
  white-space: nowrap;
`,ap=te`
  :focus {
    outline: none;
  }

  ${({$disabled:r})=>r?"cursor: default;":te`
          cursor: pointer;

          :focus {
            ${Ts} {
              background: ${({theme:l})=>l.hoverBackground};
              color: ${({theme:l})=>l.materialTextInvert};
              outline: 2px dotted ${({theme:l})=>l.focusSecondary};
            }
          }
        `}
`,Kv=T.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:r})=>r&&te`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:l})=>l.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:r})=>r.borderDark};
      font-size: 12px;
    }
  }
`,Yv=T.li`
  position: relative;
  padding-left: ${({hasItems:r})=>r?"0":"13px"};

  ${({isRootLevel:r})=>r?te`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:l})=>l.material};
            }
          }
        `:te`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:l})=>l.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:r})=>r.borderDark};
    }
  }
`,Xv=T.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Zv=T.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:r})=>r.materialText};
  user-select: none;
  padding-left: 18px;
  ${ap};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,uf=T(Os)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${ap};
`,qv=T.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function cf(r,l){return r.includes(l)?r.filter(s=>s!==l):[...r,l]}function df(r){r.preventDefault()}function sp({className:r,disabled:l,expanded:s,innerRef:u,level:d,select:h,selected:p,style:w,tree:x=[]}){const C=d===0,D=b.useCallback(S=>{var $,W;const H=!!(S.items&&S.items.length>0),M=s.includes(S.id),j=($=l||S.disabled)!==null&&$!==void 0?$:!1,Q=j?df:ne=>h(ne,S),B=j?df:ne=>h(ne,S),O=p===S.id,Z=A.createElement(qv,{"aria-hidden":!0},S.icon);return A.createElement(Yv,{key:S.label,isRootLevel:C,role:"treeitem","aria-expanded":M,"aria-selected":O,hasItems:H},H?A.createElement(Xv,{open:M},A.createElement(Zv,{onClick:Q,$disabled:j},A.createElement(uf,{$disabled:j},Z,A.createElement(Ts,null,S.label))),M&&A.createElement(sp,{className:r,disabled:j,expanded:s,level:d+1,select:h,selected:p,style:w,tree:(W=S.items)!==null&&W!==void 0?W:[]})):A.createElement(uf,{as:"button",$disabled:j,onClick:B},Z,A.createElement(Ts,null,S.label)))},[r,l,s,C,d,h,p,w]);return A.createElement(Kv,{className:C?r:void 0,style:C?w:void 0,ref:C?u:void 0,role:C?"tree":"group",isRootLevel:C},x.map(D))}function Jv({className:r,defaultExpanded:l=[],defaultSelected:s,disabled:u=!1,expanded:d,onNodeSelect:h,onNodeToggle:p,selected:w,style:x,tree:C=[]},D){const[S,$]=Nn({defaultValue:l,onChange:p,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[W,H]=Nn({defaultValue:s,onChange:h,onChangePropName:"onNodeSelect",value:w,valuePropName:"selected"}),M=b.useCallback((B,O)=>{if(p){const Z=cf(S,O);p(B,Z)}$(Z=>cf(Z,O))},[S,p,$]),j=b.useCallback((B,O)=>{H(O),h&&h(B,O)},[h,H]),Q=b.useCallback((B,O)=>{B.preventDefault(),j(B,O.id),O.items&&O.items.length&&M(B,O.id)},[j,M]);return A.createElement(sp,{className:r,disabled:u,expanded:S,level:0,innerRef:D,select:Q,selected:W,style:x,tree:C})}const ey=b.forwardRef(Jv);ey.displayName="TreeView";const Hs=np,_r=Ms,ty=T.progress`
  width: 100%;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #c0c0c0;
  border: 2px solid #000000;
  border-radius: 0;
  box-shadow: none;

  &::-webkit-progress-bar {
    background: #c0c0c0;
  }

  &::-webkit-progress-value {
    background: #000080;
  }

  &::-moz-progress-bar {
    background: #000080;
  }
`,ny=T.div`
  border: 2px solid #000000;
  padding: 10px;
  margin: 10px 0;
  background: #c0c0c0;
  position: relative;

  &::before {
    content: "${r=>r.label||""}";
    position: absolute;
    top: -20px;
    left: 10px;
    background: #c0c0c0;
    padding: 0 5px;
    font-size: 14px;
  }
`,ry=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,oy=T.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`,ly=T.div`
  font-size: 12px;
  color: #000000;
`;function iy({onStart:r,onStop:l,onReset:s,onDownload:u,totalProcessed:d,linesCount:h}){return N.jsxs(ry,{children:[N.jsxs(oi,{children:[N.jsx(dn,{onClick:r,primary:!0,children:"Start"}),N.jsx(dn,{onClick:l,children:"Stop"}),N.jsx(dn,{onClick:s,children:"Reset"}),N.jsx(dn,{onClick:u,children:"Download"})]}),N.jsxs(oy,{children:[N.jsx(ty,{value:d,max:h}),N.jsxs(ly,{children:["Generation: ",d," / ",h]})]})]})}const ay=1e6,Rn=navigator.hardwareConcurrency||4,sy=["Arial","Times New Roman","Courier New","Georgia","Verdana","Helvetica","Impact","Comic Sans MS"],uy=[{value:"lines",label:"Lines"},{value:"words",label:"Words"}],cy=`
Lorem ipsum dolor sit amet
consectetur adipiscing elit
sed do eiusmod tempor
incididunt ut labore
et dolore magna aliqua
Ut enim ad minim veniam
quis nostrud exercitation
ullamco laboris nisi
ut aliquip ex ea commodo
consequat Duis aute irure
dolor in reprehenderit
in voluptate velit esse
cillum dolore eu fugiat
nulla pariatur Excepteur
sint occaecat cupidatat
non proident sunt in
culpa qui officia deserunt
mollit anim id est laborum
`.trim(),Co=T.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`,Gl=T.label`
  font-size: 12px;
  color: #000000;
`,dy=T.p`
  font-size: 12px;
  color: #000000;
  margin-bottom: 10px;
`;function fy({inputValues:r,onTextInputChange:l,onSelectChange:s}){return N.jsxs(Hs,{label:"Font Settings",children:[N.jsx(dy,{children:"Configure how the text will appear. Adjust the font family, size range, opacity, and whether the text should be bold."}),N.jsxs(Co,{children:[N.jsx(Gl,{htmlFor:"fontFamilyInput",children:"Font Family"}),N.jsx(pi,{name:"font.family",value:r.font.family,onChange:u=>s("font.family",u.value),id:"fontFamilyInput",options:sy.map(u=>({value:u,label:u}))})]}),N.jsxs(Co,{children:[N.jsx(Gl,{htmlFor:"minSizeInput",children:"Min Size"}),N.jsx(_r,{type:"number",name:"font.minSize",value:r.font.minSize,onChange:l,placeholder:"Min Size",id:"minSizeInput"})]}),N.jsxs(Co,{children:[N.jsx(Gl,{htmlFor:"maxSizeInput",children:"Max Size"}),N.jsx(_r,{type:"number",name:"font.maxSize",value:r.font.maxSize,onChange:l,placeholder:"Max Size",id:"maxSizeInput"})]}),N.jsxs(Co,{children:[N.jsx(Gl,{htmlFor:"opacityInput",children:"Opacity"}),N.jsx(_r,{type:"number",name:"font.opacity",value:r.font.opacity,step:"0.1",min:"0",max:"1",onChange:l,placeholder:"Opacity",id:"opacityInput"})]}),N.jsx(Co,{children:N.jsx(Qf,{name:"font.bold",checked:r.font.bold==="true",onChange:u=>s("font.bold",u.target.checked?"true":"false"),label:"Bold"})})]})}const py=(r,l,s)=>{const u=r.getImageData(0,0,l,s).data,d=l*s,h=new Float32Array(d);for(let p=0;p<d;p++){const w=p*4,x=u[w],C=u[w+1],D=u[w+2];h[p]=.299*x+.587*C+.114*D}return h},hy=(r,l,s,u)=>{u.putImageData(r.iData,0,0);const d=s.font.bold?"bold":"normal";u.font=`${d} ${l.size}px ${s.font.family}`,u.fillStyle=l.color,u.textAlign="center",u.textBaseline="middle",u.translate(l.position.x,l.position.y),u.rotate(l.rotation),u.fillText(l.text,0,0),u.rotate(-l.rotation),u.translate(-l.position.x,-l.position.y)},my=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,gy=T.canvas`
  width: 100%;
  height: auto;
  background: white;
`;function vy({selectedCanvasRef:r,selectedImage:l,setSelectedImage:s,setCurrentImage:u}){const d=p=>{const w=document.createElement("canvas");w.width=p.width,w.height=p.height;const x=w.getContext("2d",{willReadFrequently:!0});if(!x)return;x.drawImage(p,0,0);const C=py(x,p.width,p.height),D={size:{width:p.width,height:p.height},bArray:C,iData:x.getImageData(0,0,p.width,p.height)};s(D);const S=document.createElement("canvas");S.width=p.width,S.height=p.height;const $=S.getContext("2d",{willReadFrequently:!0});if(!$)return;$.fillStyle="black",$.fillRect(0,0,p.width,p.height);const W={bArray:new Float32Array(p.width*p.height),iData:$.getImageData(0,0,p.width,p.height),size:{width:p.width,height:p.height}};u(W)},h=p=>{var C;const w=(C=p.target.files)==null?void 0:C[0];if(!w)return;const x=new FileReader;x.onload=D=>{var $;const S=new Image;S.onload=()=>{S.width*S.height>ay&&alert(`Warning: Image dimensions (${S.width}x${S.height}) exceed recommended size. The app will work slow. Number of pixels: ${S.width*S.height}.`),d(S)},S.src=($=D.target)==null?void 0:$.result},x.readAsDataURL(w)};return N.jsxs(my,{children:[N.jsxs(Hs,{label:"Image Upload",children:[N.jsx("input",{type:"file",onChange:h,accept:"image/*",id:"fileInput",style:{display:"none"}}),N.jsx(dn,{onClick:()=>{var p;return(p=document.getElementById("fileInput"))==null?void 0:p.click()},primary:!0,children:l?"Change Image":"Select Image"})]}),N.jsx(gy,{ref:r,id:"selectedCanvas",width:(l==null?void 0:l.size.width)||100,height:(l==null?void 0:l.size.height)||100}),l&&N.jsx("div",{className:"image-info",children:N.jsxs("div",{children:["Dimensions: ",l.size.width,"x",l.size.height,"px"]})})]})}const ff=T.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`,pf=T.label`
  font-size: 12px;
  color: #000000;
`,yy=T.p`
  font-size: 12px;
  color: #000000;
  margin-bottom: 10px;
`;function xy({inputValues:r,onTextInputChange:l}){return N.jsxs(Hs,{label:"Processing Settings",children:[N.jsx(yy,{children:"Control how the genetic algorithm works. More iterations will find better placements for each text block, while more generations will add more text blocks to the final image."}),N.jsxs(ff,{children:[N.jsx(pf,{htmlFor:"iterationsInput",children:"Iterations"}),N.jsx(_r,{type:"number",name:"iterations",value:r.iterations,onChange:l,placeholder:"Iterations",id:"iterationsInput"})]}),N.jsxs(ff,{children:[N.jsx(pf,{htmlFor:"generationsInput",children:"Generations"}),N.jsx(_r,{type:"number",name:"generations",value:r.generations,onChange:l,placeholder:"Number of generations",id:"generationsInput"})]})]})}const wy=T.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`,ky=T.label`
  font-size: 12px;
  color: #000000;
`,Sy=T.p`
  font-size: 12px;
  color: #000000;
  margin-bottom: 10px;
`;function Ey({inputValues:r,onTextInputChange:l,onSelectChange:s}){return N.jsxs(ny,{label:"Text Content",children:[N.jsx(Sy,{children:"Enter the text blocks that will be used to draw the image. Each line will be treated as a separate block that can be placed and rotated independently."}),N.jsxs(wy,{children:[N.jsx(ky,{htmlFor:"useTypeInput",children:"Use"}),N.jsx(pi,{name:"useType",value:r.useType,onChange:u=>s("useType",u.value),id:"useTypeInput",options:uy.map(u=>({value:u.value,label:u.label}))})]}),N.jsx(_r,{name:"blocks",value:r.blocks,onChange:l,multiline:!0,rows:10,fullWidth:!0})]})}const by=T.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #008080;
  min-height: 100vh;
  gap: 20px;
`,Ay=T.div`
  display: flex;
  gap: 20px;
  flex: 1;
`,Cy=T.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,$y=T.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 20px;
  align-self: flex-start;
`,Xn=T(Us)`
  width: 100%;
`,Ty=T.canvas`
  width: 100%;
  height: auto;
  background: white;
`,Iy=T.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Dr=T.li`
  margin-bottom: 12px;
  line-height: 1.4;
  color: #000000;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  a {
    color: #0000FF;
    text-decoration: underline;
    font-weight: bold;
    
    &:hover {
      color: #FF0000;
      text-decoration: none;
    }
    
    &:active {
      color: #FF0000;
      text-decoration: underline;
    }
  }
`;T.progress`
  width: 100%;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #c0c0c0;
  border: 2px solid #000000;
  border-radius: 0;
  box-shadow: none;

  &::-webkit-progress-bar {
    background: #c0c0c0;
  }

  &::-webkit-progress-value {
    background: #000080;
  }

  &::-moz-progress-bar {
    background: #000080;
  }
`;T.div`
  border: 2px solid #000000;
  padding: 10px;
  margin: 10px 0;
  background: #c0c0c0;
  position: relative;

  &::before {
    content: "${r=>r.label||""}";
    position: absolute;
    top: -20px;
    left: 10px;
    background: #c0c0c0;
    padding: 0 5px;
    font-size: 14px;
  }
`;function Dy(){const[r,l]=b.useState({blocks:cy,useType:"lines",font:{family:"Arial",minSize:"10",maxSize:"50",opacity:"0.5",bold:"false",shadow:{color:"#000000",blur:"0",offsetX:"0",offsetY:"0",enabled:"false"}},iterations:80,generations:800}),[s,u]=b.useState(!1),[d,h]=b.useState(0),[p,w]=b.useState({}),[x,C]=b.useState({}),[D,S]=b.useState(null),[$,W]=b.useState(null),H=b.useRef([]),M=b.useRef(null),j=b.useRef(null);b.useEffect(()=>{$&&ne()},[$]),b.useEffect(()=>{if(Object.keys(x).length!==Rn||!j.current||!$||!s)return;if(d+1>=O.generations){u(!1);return}h(ae=>ae+1);const me=Object.values(x).reduce((ae,ge)=>!ae||(ge.score??0)>(ae.score??0)?ge:ae,null);if(!me)return;console.log("Legend for next generation:",JSON.stringify(me));const ce=document.createElement("canvas");ce.width=$.size.width,ce.height=$.size.height;const fe=ce.getContext("2d",{willReadFrequently:!0});fe&&(D?fe.putImageData(D.iData,0,0):(fe.fillStyle="black",fe.fillRect(0,0,ce.width,ce.height)),hy(D||{iData:fe.getImageData(0,0,ce.width,ce.height),size:{width:ce.width,height:ce.height}},me,O,fe),S({iData:fe.getImageData(0,0,ce.width,ce.height),size:{width:ce.width,height:ce.height}}));for(let ae=0;ae<Rn;ae++){const ge=H.current[ae];if(!ge)continue;const be=Math.floor(O.iterations/Rn)+(ae<O.iterations%Rn?1:0);ge.postMessage({action:"enter",workerId:ae,timestamp:Date.now(),legend:me,options:O,nofCandidates:be})}C({})},[x]),b.useEffect(()=>{if(D&&M.current){const q=M.current.getContext("2d",{willReadFrequently:!0});q&&((M.current.width!==D.iData.width||M.current.height!==D.iData.height)&&(M.current.width=D.iData.width,M.current.height=D.iData.height),q.putImageData(D.iData,0,0))}},[D]),b.useEffect(()=>{if($&&j.current){const q=j.current.getContext("2d",{willReadFrequently:!0});if(!q)return;(j.current.width!==$.size.width||j.current.height!==$.size.height)&&(j.current.width=$.size.width,j.current.height=$.size.height),q.putImageData($.iData,0,0)}},[$]);const Q=q=>{const me=q.target,ce=me.type==="number"?Number(me.value):me.value,[,fe,ae]=me.name.split(".");l(fe&&ae?ge=>({...ge,font:{...ge.font,[fe]:{...ge.font[fe],[ae]:ce}}}):fe?ge=>({...ge,font:{...ge.font,[fe]:ce}}):ge=>({...ge,[me.name]:ce}))},B=(q,me)=>{const[,ce,fe]=q.split(".");l(ce&&fe?ae=>({...ae,font:{...ae.font,[ce]:{...ae.font[ce],[fe]:me}}}):ce?ae=>({...ae,font:{...ae.font,[ce]:me}}):ae=>({...ae,[q]:me}))},O=b.useMemo(()=>({blocks:r.blocks.split(`
`).filter(q=>q.trim()!==""),font:{family:r.font.family,minSize:Number(r.font.minSize),maxSize:Number(r.font.maxSize),opacity:Number(r.font.opacity),bold:r.font.bold==="true"},iterations:r.iterations,generations:r.generations}),[r]),Z=()=>{if(M.current){const q=document.createElement("a");q.href=M.current.toDataURL("image/png"),q.download="bedri.png",document.body.appendChild(q),q.click(),document.body.removeChild(q)}},ne=()=>{if($){H.current.forEach(q=>{q&&q.terminate()}),H.current=[];for(let q=0;q<Rn;q++)try{const me=new Worker(new URL("/bedri/assets/arena-BnQIeC3Q.js",import.meta.url),{type:"module"});me.onmessage=ce=>{var ge;const{action:fe,workerId:ae}=ce.data;if(!("reason"in ce.data)&&ae!==void 0)switch(fe){case"ready":w(xe=>({...xe||{},[ae]:{total:0,processed:0}}));break;case"initialized":s||(ge=H.current[ae])==null||ge.postMessage({action:"battle",timestamp:Date.now(),workerId:ae});break;case"update":const be=ce.data;w(xe=>({...xe||{},[ae]:{total:be.total,processed:be.processed}}));break;case"done":const $e=ce.data;C(xe=>({...xe,[ae]:$e.victor.candidate}));break;case"error":break}},me.postMessage({action:"prepare",workerId:q,selectedImage:$,timestamp:Date.now()}),H.current[q]=me}catch{}}},G=()=>{if(!s){if(!$){alert("Please upload an image first.");return}if(!H.current||H.current.length===0){alert("Workers are not initialized yet.");return}if(O.blocks.length===0){alert("Please enter some text first.");return}if(O.font.minSize>=O.font.maxSize){alert("Minimum font size must be less than maximum font size.");return}u(!0),h(0),w({}),C({});for(let q=0;q<Rn;q++){const me=H.current[q];if(!me)continue;const ce=Math.floor(O.iterations/Rn)+(q<O.iterations%Rn?1:0);me.postMessage({action:"enter",workerId:q,timestamp:Date.now(),options:O,nofCandidates:ce})}}},X=()=>{u(!1),H.current.forEach(q=>{q.terminate()}),ne()},Ee=()=>{u(!1),h(0),w({}),C({}),S(null),H.current.forEach(q=>{q.terminate()}),ne()};return N.jsxs(by,{children:[N.jsxs(Xn,{children:[N.jsx(cn,{children:N.jsx("span",{children:"Bedri"})}),N.jsx(un,{children:N.jsxs(Iy,{children:[N.jsx(Dr,{children:"Bedri will generate a text-based representation of the image using the provided text by using genetic algorithms. The name is inspired by the famous painter Bedri Baykam."}),N.jsx(Dr,{children:"The app is tested with google chrome and might not work with other browsers. Also, mobile devices are not supported."}),N.jsxs(Dr,{children:["The app is open source and the code is available on ",N.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/miratcan/bedri",children:"GitHub"}),". If you have any feedback, please ",N.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/miratcan/bedri/issues",children:"open an issue"}),"."]}),N.jsx(Dr,{children:"This app will use all of your CPU cores to generate the image. It can drain your battery quickly if you are using a laptop."}),N.jsx(Dr,{children:'How to use: select an image and enter text lines. Then click on the "Start" button to begin the genetic algorithm. Tweak the options to get better results.'}),N.jsxs(Dr,{children:["You can find inspiration from twitter by searching for ",N.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:`https://x.com/search?q=${encodeURIComponent("#bedriapp")}`,children:"#bedriapp"}),". Also please post your results with the hashtag ",N.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:`https://x.com/search?q=${encodeURIComponent("#bedriapp")}`,children:"#bedriapp"}),"."]})]})})]}),N.jsxs(Ay,{children:[N.jsxs(Cy,{children:[N.jsxs(Xn,{children:[N.jsx(cn,{children:N.jsx("span",{children:"Image Selection"})}),N.jsx(un,{children:N.jsx(vy,{selectedCanvasRef:j,selectedImage:$,setSelectedImage:W,setCurrentImage:S})})]}),N.jsxs(Xn,{children:[N.jsx(cn,{children:N.jsx("span",{children:"Text Content"})}),N.jsx(un,{children:N.jsx(Ey,{inputValues:r,onTextInputChange:Q,onSelectChange:B})})]}),N.jsxs(Xn,{children:[N.jsx(cn,{children:N.jsx("span",{children:"Font Settings"})}),N.jsx(un,{children:N.jsx(fy,{inputValues:r,onTextInputChange:Q,onSelectChange:B})})]}),N.jsxs(Xn,{children:[N.jsx(cn,{children:N.jsx("span",{children:"Processing Settings"})}),N.jsx(un,{children:N.jsx(xy,{inputValues:r,onTextInputChange:Q})})]})]}),N.jsxs($y,{children:[N.jsxs(Xn,{children:[N.jsx(cn,{children:N.jsx("span",{children:"Preview"})}),N.jsx(un,{children:N.jsx(Ty,{ref:M,id:"currentCanvas"})})]}),N.jsxs(Xn,{children:[N.jsx(cn,{children:N.jsx("span",{children:"Controls"})}),N.jsx(un,{children:N.jsx(iy,{onStart:G,onStop:X,onReset:Ee,onDownload:Z,totalProcessed:p?Object.values(p).reduce((q,me)=>q+me.processed,0):0,linesCount:p?Object.values(p).reduce((q,me)=>q+me.total,0):0})})]})]})]})]})}var ms,hf;function Ry(){if(hf)return ms;hf=1;var r={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return ms=r,ms}var _y=Ry();const zy=mf(_y),Py="/bedri/assets/ms_sans_serif-Du8rjN1q.woff2",Ny="/bedri/assets/ms_sans_serif_bold-D5dpRRHG.woff2",Ly=document.getElementById("app"),jy=fm.createRoot(Ly),Oy=m0`
  ${pm}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Py}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Ny}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;jy.render(N.jsxs(f0,{theme:zy,children:[N.jsx(Oy,{}),N.jsx(Dy,{})]}));
