(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var M_={exports:{}},vu={},E_={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),Px=Symbol.for("react.portal"),Lx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),Dx=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),Bx=Symbol.for("react.memo"),kx=Symbol.for("react.lazy"),Sm=Symbol.iterator;function zx(t){return t===null||typeof t!="object"?null:(t=Sm&&t[Sm]||t["@@iterator"],typeof t=="function"?t:null)}var w_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A_=Object.assign,T_={};function bo(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||w_}bo.prototype.isReactComponent={};bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C_(){}C_.prototype=bo.prototype;function ip(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||w_}var rp=ip.prototype=new C_;rp.constructor=ip;A_(rp,bo.prototype);rp.isPureReactComponent=!0;var Mm=Array.isArray,b_=Object.prototype.hasOwnProperty,sp={current:null},R_={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b_.call(e,i)&&!R_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ja,type:t,key:s,ref:o,props:r,_owner:sp.current}}function Hx(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function op(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function Vx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Em=/\/+/g;function $u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vx(""+t.key):e.toString(36)}function pc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case Px:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+$u(o,0):i,Mm(r)?(n="",t!=null&&(n=t.replace(Em,"$&/")+"/"),pc(r,e,n,"",function(c){return c})):r!=null&&(op(r)&&(r=Hx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Em,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+$u(s,a);o+=pc(s,e,n,l,r)}else if(l=zx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+$u(s,a++),o+=pc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var i=[],r=0;return pc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},mc={transition:null},Wx={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:mc,ReactCurrentOwner:sp};function L_(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=bo;ze.Fragment=Lx;ze.Profiler=Dx;ze.PureComponent=ip;ze.StrictMode=Ix;ze.Suspense=Ox;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;ze.act=L_;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=A_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)b_.call(e,l)&&!R_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ja,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:Nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ux,_context:t},t.Consumer=t};ze.createElement=P_;ze.createFactory=function(t){var e=P_.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Fx,render:t}};ze.isValidElement=op;ze.lazy=function(t){return{$$typeof:kx,_payload:{_status:-1,_result:t},_init:Gx}};ze.memo=function(t,e){return{$$typeof:Bx,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=mc.transition;mc.transition={};try{t()}finally{mc.transition=e}};ze.unstable_act=L_;ze.useCallback=function(t,e){return rn.current.useCallback(t,e)};ze.useContext=function(t){return rn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return rn.current.useEffect(t,e)};ze.useId=function(){return rn.current.useId()};ze.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return rn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};ze.useRef=function(t){return rn.current.useRef(t)};ze.useState=function(t){return rn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return rn.current.useTransition()};ze.version="18.3.1";E_.exports=ze;var yu=E_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=yu,$x=Symbol.for("react.element"),jx=Symbol.for("react.fragment"),Yx=Object.prototype.hasOwnProperty,qx=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kx={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Yx.call(e,i)&&!Kx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$x,type:t,key:s,ref:o,props:r,_owner:qx.current}}vu.Fragment=jx;vu.jsx=I_;vu.jsxs=I_;M_.exports=vu;var Bc=M_.exports,D_={exports:{}},Tn={},U_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,q){var Z=O.length;O.push(q);e:for(;0<Z;){var oe=Z-1>>>1,xe=O[oe];if(0<r(xe,q))O[oe]=q,O[Z]=xe,Z=oe;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var q=O[0],Z=O.pop();if(Z!==q){O[0]=Z;e:for(var oe=0,xe=O.length,He=xe>>>1;oe<He;){var K=2*(oe+1)-1,ie=O[K],ce=K+1,ue=O[ce];if(0>r(ie,Z))ce<xe&&0>r(ue,ie)?(O[oe]=ue,O[ce]=Z,oe=ce):(O[oe]=ie,O[K]=Z,oe=K);else if(ce<xe&&0>r(ue,Z))O[oe]=ue,O[ce]=Z,oe=ce;else break e}}return q}function r(O,q){var Z=O.sortIndex-q.sortIndex;return Z!==0?Z:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=O)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function x(O){if(y=!1,_(O),!v)if(n(l)!==null)v=!0,B(w);else{var q=n(c);q!==null&&$(x,q.startTime-O)}}function w(O,q){v=!1,y&&(y=!1,d(C),C=-1),p=!0;var Z=f;try{for(_(q),h=n(l);h!==null&&(!(h.expirationTime>q)||O&&!P());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var xe=oe(h.expirationTime<=q);q=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),_(q)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var K=n(c);K!==null&&$(x,K.startTime-q),He=!1}return He}finally{h=null,f=Z,p=!1}}var A=!1,M=null,C=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function U(){if(M!==null){var O=t.unstable_now();S=O;var q=!0;try{q=M(!0,O)}finally{q?L():(A=!1,M=null)}}else A=!1}var L;if(typeof g=="function")L=function(){g(U)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,z=F.port2;F.port1.onmessage=U,L=function(){z.postMessage(null)}}else L=function(){m(U,0)};function B(O){M=O,A||(A=!0,L())}function $(O,q){C=m(function(){O(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,B(w))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Z=f;f=q;try{return O()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=f;f=O;try{return q()}finally{f=Z}},t.unstable_scheduleCallback=function(O,q,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,O){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Z+xe,O={id:u++,callback:q,priorityLevel:O,startTime:Z,expirationTime:xe,sortIndex:-1},Z>oe?(O.sortIndex=Z,e(c,O),n(l)===null&&O===n(c)&&(y?(d(C),C=-1):y=!0,$(x,Z-oe))):(O.sortIndex=xe,e(l,O),v||p||(v=!0,B(w))),O},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(O){var q=f;return function(){var Z=f;f=q;try{return O.apply(this,arguments)}finally{f=Z}}}})(N_);U_.exports=N_;var Zx=U_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx=yu,An=Zx;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,Ta={};function us(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(Ta[t]=e,t=0;t<e.length;t++)F_.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Md=Object.prototype.hasOwnProperty,Qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wm={},Am={};function eS(t){return Md.call(Am,t)?!0:Md.call(wm,t)?!1:Qx.test(t)?Am[t]=!0:(wm[t]=!0,!1)}function tS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nS(t,e,n,i){if(e===null||typeof e>"u"||tS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ap=/[\-:]([a-z])/g;function lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ap,lp);Gt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ap,lp);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ap,lp);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function cp(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nS(e,n,r,i)&&(n=null),i||r===null?eS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=Jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),O_=Symbol.for("react.provider"),B_=Symbol.for("react.context"),fp=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Ad=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),Tm=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,ju;function ia(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+t}var Yu=!1;function qu(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function iS(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function Td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case Xs:return"Portal";case Ed:return"Profiler";case up:return"StrictMode";case wd:return"Suspense";case Ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B_:return(t.displayName||"Context")+".Consumer";case O_:return(t._context.displayName||"Context")+".Provider";case fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dp:return e=t.displayName||null,e!==null?e:Td(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Td(t(e))}catch{}}return null}function rS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Td(e);case 8:return e===up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sS(t){var e=z_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=sS(t))}function H_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=z_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V_(t,e){e=e.checked,e!=null&&cp(t,"checked",e,!1)}function bd(t,e){V_(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ra(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function G_(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,X_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oS=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){oS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function $_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function j_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var aS=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(t,e){if(e){if(aS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,ao=null,lo=null;function Lm(t){if(t=Ka(t)){if(typeof Nd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=wu(e),Nd(t.stateNode,t.type,e))}}function Y_(t){ao?lo?lo.push(t):lo=[t]:ao=t}function q_(){if(ao){var t=ao,e=lo;if(lo=ao=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function K_(t,e){return t(e)}function Z_(){}var Ku=!1;function J_(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return K_(t,e,n)}finally{Ku=!1,(ao!==null||lo!==null)&&(Z_(),q_())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var i=wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Fd=!1;if(Bi)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Fd=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Fd=!1}function lS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fa=!1,zc=null,Hc=!1,Od=null,cS={onError:function(t){fa=!0,zc=t}};function uS(t,e,n,i,r,s,o,a,l){fa=!1,zc=null,lS.apply(cS,arguments)}function fS(t,e,n,i,r,s,o,a,l){if(uS.apply(this,arguments),fa){if(fa){var c=zc;fa=!1,zc=null}else throw Error(ne(198));Hc||(Hc=!0,Od=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Q_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(fs(t)!==t)throw Error(ne(188))}function dS(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Im(r),t;if(s===i)return Im(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function ev(t){return t=dS(t),t!==null?tv(t):null}function tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tv(t);if(e!==null)return e;t=t.sibling}return null}var nv=An.unstable_scheduleCallback,Dm=An.unstable_cancelCallback,hS=An.unstable_shouldYield,pS=An.unstable_requestPaint,xt=An.unstable_now,mS=An.unstable_getCurrentPriorityLevel,pp=An.unstable_ImmediatePriority,iv=An.unstable_UserBlockingPriority,Vc=An.unstable_NormalPriority,gS=An.unstable_LowPriority,rv=An.unstable_IdlePriority,xu=null,gi=null;function _S(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:xS,vS=Math.log,yS=Math.LN2;function xS(t){return t>>>=0,t===0?32:31-(vS(t)/yS|0)|0}var al=64,ll=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=sa(a):(s&=o,s!==0&&(i=sa(s)))}else o=n&~r,o!==0?i=sa(o):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function SS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=SS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sv(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function ES(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function ov(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var av,gp,lv,cv,uv,kd=!1,cl=[],hr=null,pr=null,mr=null,Ra=new Map,Pa=new Map,sr=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function Bo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ka(e),e!==null&&gp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function AS(t,e,n,i,r){switch(e){case"focusin":return hr=Bo(hr,t,e,n,i,r),!0;case"dragenter":return pr=Bo(pr,t,e,n,i,r),!0;case"mouseover":return mr=Bo(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,Bo(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pa.set(s,Bo(Pa.get(s)||null,t,e,n,i,r)),!0}return!1}function fv(t){var e=Yr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=Q_(n),e!==null){t.blockedOn=e,uv(t.priority,function(){lv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ud=i,n.target.dispatchEvent(i),Ud=null}else return e=Ka(n),e!==null&&gp(e),t.blockedOn=n,!1;e.shift()}return!0}function Nm(t,e,n){gc(t)&&n.delete(e)}function TS(){kd=!1,hr!==null&&gc(hr)&&(hr=null),pr!==null&&gc(pr)&&(pr=null),mr!==null&&gc(mr)&&(mr=null),Ra.forEach(Nm),Pa.forEach(Nm)}function ko(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,TS)))}function La(t){function e(r){return ko(r,t)}if(0<cl.length){ko(cl[0],t);for(var n=1;n<cl.length;n++){var i=cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&ko(hr,t),pr!==null&&ko(pr,t),mr!==null&&ko(mr,t),Ra.forEach(e),Pa.forEach(e),n=0;n<sr.length;n++)i=sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)fv(n),n.blockedOn===null&&sr.shift()}var co=Wi.ReactCurrentBatchConfig,Wc=!0;function CS(t,e,n,i){var r=Je,s=co.transition;co.transition=null;try{Je=1,_p(t,e,n,i)}finally{Je=r,co.transition=s}}function bS(t,e,n,i){var r=Je,s=co.transition;co.transition=null;try{Je=4,_p(t,e,n,i)}finally{Je=r,co.transition=s}}function _p(t,e,n,i){if(Wc){var r=zd(t,e,n,i);if(r===null)lf(t,e,i,Xc,n),Um(t,i);else if(AS(r,t,e,n,i))i.stopPropagation();else if(Um(t,i),e&4&&-1<wS.indexOf(t)){for(;r!==null;){var s=Ka(r);if(s!==null&&av(s),s=zd(t,e,n,i),s===null&&lf(t,e,i,Xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lf(t,e,i,null,n)}}var Xc=null;function zd(t,e,n,i){if(Xc=null,t=hp(i),t=Yr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Q_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mS()){case pp:return 1;case iv:return 4;case Vc:case gS:return 16;case rv:return 536870912;default:return 16}default:return 16}}var cr=null,vp=null,_c=null;function hv(){if(_c)return _c;var t,e=vp,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _c=r.slice(t,1<i?1-i:void 0)}function vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Fm(){return!1}function Cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Fm,this.isPropagationStopped=Fm,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=Cn(Ro),qa=ft({},Ro,{view:0,detail:0}),RS=Cn(qa),Ju,Qu,zo,Su=ft({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Ju=t.screenX-zo.screenX,Qu=t.screenY-zo.screenY):Qu=Ju=0,zo=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Om=Cn(Su),PS=ft({},Su,{dataTransfer:0}),LS=Cn(PS),IS=ft({},qa,{relatedTarget:0}),ef=Cn(IS),DS=ft({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Cn(DS),NS=ft({},Ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FS=Cn(NS),OS=ft({},Ro,{data:0}),Bm=Cn(OS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zS[t])?!!e[t]:!1}function xp(){return HS}var VS=ft({},qa,{key:function(t){if(t.key){var e=BS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GS=Cn(VS),WS=ft({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=Cn(WS),XS=ft({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),$S=Cn(XS),jS=ft({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),YS=Cn(jS),qS=ft({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Cn(qS),ZS=[9,13,27,32],Sp=Bi&&"CompositionEvent"in window,da=null;Bi&&"documentMode"in document&&(da=document.documentMode);var JS=Bi&&"TextEvent"in window&&!da,pv=Bi&&(!Sp||da&&8<da&&11>=da),zm=" ",Hm=!1;function mv(t,e){switch(t){case"keyup":return ZS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function QS(t,e){switch(t){case"compositionend":return gv(e);case"keypress":return e.which!==32?null:(Hm=!0,zm);case"textInput":return t=e.data,t===zm&&Hm?null:t;default:return null}}function eM(t,e){if(js)return t==="compositionend"||!Sp&&mv(t,e)?(t=hv(),_c=vp=cr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pv&&e.locale!=="ko"?null:e.data;default:return null}}var tM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tM[t.type]:e==="textarea"}function _v(t,e,n,i){Y_(i),e=$c(e,"onChange"),0<e.length&&(n=new yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ia=null;function nM(t){bv(t,0)}function Mu(t){var e=Ks(t);if(H_(e))return t}function iM(t,e){if(t==="change")return e}var vv=!1;if(Bi){var tf;if(Bi){var nf="oninput"in document;if(!nf){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),nf=typeof Gm.oninput=="function"}tf=nf}else tf=!1;vv=tf&&(!document.documentMode||9<document.documentMode)}function Wm(){ha&&(ha.detachEvent("onpropertychange",yv),Ia=ha=null)}function yv(t){if(t.propertyName==="value"&&Mu(Ia)){var e=[];_v(e,Ia,t,hp(t)),J_(nM,e)}}function rM(t,e,n){t==="focusin"?(Wm(),ha=e,Ia=n,ha.attachEvent("onpropertychange",yv)):t==="focusout"&&Wm()}function sM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Ia)}function oM(t,e){if(t==="click")return Mu(e)}function aM(t,e){if(t==="input"||t==="change")return Mu(e)}function lM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:lM;function Da(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Md.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $m(t,e){var n=Xm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function xv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sv(){for(var t=window,e=kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kc(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cM(t){var e=Sv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xv(n.ownerDocument.documentElement,n)){if(i!==null&&Mp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$m(n,s);var o=$m(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uM=Bi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Hd=null,pa=null,Vd=!1;function jm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vd||Ys==null||Ys!==kc(i)||(i=Ys,"selectionStart"in i&&Mp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&Da(pa,i)||(pa=i,i=$c(Hd,"onSelect"),0<i.length&&(e=new yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},rf={},Mv={};Bi&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Eu(t){if(rf[t])return rf[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return rf[t]=e[n];return t}var Ev=Eu("animationend"),wv=Eu("animationiteration"),Av=Eu("animationstart"),Tv=Eu("transitionend"),Cv=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){Cv.set(t,e),us(e,[t])}for(var sf=0;sf<Ym.length;sf++){var of=Ym[sf],fM=of.toLowerCase(),dM=of[0].toUpperCase()+of.slice(1);Cr(fM,"on"+dM)}Cr(Ev,"onAnimationEnd");Cr(wv,"onAnimationIteration");Cr(Av,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(Tv,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hM=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function qm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fS(i,e,void 0,t),t.currentTarget=null}function bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qm(r,a,c),s=l}}}if(Hc)throw t=Od,Hc=!1,Od=null,t}function nt(t,e){var n=e[jd];n===void 0&&(n=e[jd]=new Set);var i=t+"__bubble";n.has(i)||(Rv(e,t,2,!1),n.add(i))}function af(t,e,n){var i=0;e&&(i|=4),Rv(n,t,i,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[dl]){t[dl]=!0,F_.forEach(function(n){n!=="selectionchange"&&(hM.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,af("selectionchange",!1,e))}}function Rv(t,e,n,i){switch(dv(e)){case 1:var r=CS;break;case 4:r=bS;break;default:r=_p}n=r.bind(null,e,n,t),r=void 0,!Fd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}J_(function(){var c=s,u=hp(n),h=[];e:{var f=Cv.get(t);if(f!==void 0){var p=yp,v=t;switch(t){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":p=GS;break;case"focusin":v="focus",p=ef;break;case"focusout":v="blur",p=ef;break;case"beforeblur":case"afterblur":p=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$S;break;case Ev:case wv:case Av:p=US;break;case Tv:p=YS;break;case"scroll":p=RS;break;case"wheel":p=KS;break;case"copy":case"cut":case"paste":p=FS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=km}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,d!==null&&(x=ba(g,d),x!=null&&y.push(Na(g,x,_)))),m)break;g=g.return}0<y.length&&(f=new p(f,v,null,n,u),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ud&&(v=n.relatedTarget||n.fromElement)&&(Yr(v)||v[ki]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Yr(v):null,v!==null&&(m=fs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Om,x="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=km,x="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?f:Ks(p),_=v==null?f:Ks(v),f=new y(x,g+"leave",p,n,u),f.target=m,f.relatedTarget=_,x=null,Yr(u)===c&&(y=new y(d,g+"enter",v,n,u),y.target=_,y.relatedTarget=m,x=y),m=x,p&&v)t:{for(y=p,d=v,g=0,_=y;_;_=ps(_))g++;for(_=0,x=d;x;x=ps(x))_++;for(;0<g-_;)y=ps(y),g--;for(;0<_-g;)d=ps(d),_--;for(;g--;){if(y===d||d!==null&&y===d.alternate)break t;y=ps(y),d=ps(d)}y=null}else y=null;p!==null&&Km(h,f,p,y,!1),v!==null&&m!==null&&Km(h,m,v,y,!0)}}e:{if(f=c?Ks(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=iM;else if(Vm(f))if(vv)w=aM;else{w=sM;var A=rM}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=oM);if(w&&(w=w(t,c))){_v(h,w,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Rd(f,"number",f.value)}switch(A=c?Ks(c):window,t){case"focusin":(Vm(A)||A.contentEditable==="true")&&(Ys=A,Hd=c,pa=null);break;case"focusout":pa=Hd=Ys=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,jm(h,n,u);break;case"selectionchange":if(uM)break;case"keydown":case"keyup":jm(h,n,u)}var M;if(Sp)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else js?mv(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(pv&&n.locale!=="ko"&&(js||C!=="onCompositionStart"?C==="onCompositionEnd"&&js&&(M=hv()):(cr=u,vp="value"in cr?cr.value:cr.textContent,js=!0)),A=$c(c,C),0<A.length&&(C=new Bm(C,t,null,n,u),h.push({event:C,listeners:A}),M?C.data=M:(M=gv(n),M!==null&&(C.data=M)))),(M=JS?QS(t,n):eM(t,n))&&(c=$c(c,"onBeforeInput"),0<c.length&&(u=new Bm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=M))}bv(h,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ba(t,n),s!=null&&i.unshift(Na(t,s,r)),s=ba(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Km(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ba(n,s),l!=null&&o.unshift(Na(n,l,a))):r||(l=ba(n,s),l!=null&&o.push(Na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pM=/\r\n?/g,mM=/\u0000|\uFFFD/g;function Zm(t){return(typeof t=="string"?t:""+t).replace(pM,`
`).replace(mM,"")}function hl(t,e,n){if(e=Zm(e),Zm(t)!==e&&n)throw Error(ne(425))}function jc(){}var Gd=null,Wd=null;function Xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,gM=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,_M=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(vM)}:$d;function vM(t){setTimeout(function(){throw t})}function cf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Po=Math.random().toString(36).slice(2),pi="__reactFiber$"+Po,Fa="__reactProps$"+Po,ki="__reactContainer$"+Po,jd="__reactEvents$"+Po,yM="__reactListeners$"+Po,xM="__reactHandles$"+Po;function Yr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qm(t);t!==null;){if(n=t[pi])return n;t=Qm(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[pi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function wu(t){return t[Fa]||null}var Yd=[],Zs=-1;function br(t){return{current:t}}function rt(t){0>Zs||(t.current=Yd[Zs],Yd[Zs]=null,Zs--)}function Qe(t,e){Zs++,Yd[Zs]=t.current,t.current=e}var wr={},Kt=br(wr),fn=br(!1),ns=wr;function _o(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function Yc(){rt(fn),rt(Kt)}function eg(t,e,n){if(Kt.current!==wr)throw Error(ne(168));Qe(Kt,e),Qe(fn,n)}function Pv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,rS(t)||"Unknown",r));return ft({},n,i)}function qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,ns=Kt.current,Qe(Kt,t),Qe(fn,fn.current),!0}function tg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Pv(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,rt(fn),rt(Kt),Qe(Kt,t)):rt(fn),Qe(fn,n)}var Ii=null,Au=!1,uf=!1;function Lv(t){Ii===null?Ii=[t]:Ii.push(t)}function SM(t){Au=!0,Lv(t)}function Rr(){if(!uf&&Ii!==null){uf=!0;var t=0,e=Je;try{var n=Ii;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Au=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),nv(pp,Rr),r}finally{Je=e,uf=!1}}return null}var Js=[],Qs=0,Kc=null,Zc=0,In=[],Dn=0,is=null,Di=1,Ui="";function Hr(t,e){Js[Qs++]=Zc,Js[Qs++]=Kc,Kc=t,Zc=e}function Iv(t,e,n){In[Dn++]=Di,In[Dn++]=Ui,In[Dn++]=is,is=t;var i=Di;t=Ui;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-li(e)+r|n<<r|i,Ui=s+t}else Di=1<<s|n<<r|i,Ui=t}function Ep(t){t.return!==null&&(Hr(t,1),Iv(t,1,0))}function wp(t){for(;t===Kc;)Kc=Js[--Qs],Js[Qs]=null,Zc=Js[--Qs],Js[Qs]=null;for(;t===is;)is=In[--Dn],In[Dn]=null,Ui=In[--Dn],In[Dn]=null,Di=In[--Dn],In[Dn]=null}var En=null,Sn=null,at=!1,ri=null;function Dv(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ng(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:Di,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(at){var e=Sn;if(e){var n=e;if(!ng(t,e)){if(qd(t))throw Error(ne(418));e=gr(n.nextSibling);var i=En;e&&ng(t,e)?Dv(i,n):(t.flags=t.flags&-4097|2,at=!1,En=t)}}else{if(qd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,at=!1,En=t}}}function ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function pl(t){if(t!==En)return!1;if(!at)return ig(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xd(t.type,t.memoizedProps)),e&&(e=Sn)){if(qd(t))throw Uv(),Error(ne(418));for(;e;)Dv(t,e),e=gr(e.nextSibling)}if(ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?gr(t.stateNode.nextSibling):null;return!0}function Uv(){for(var t=Sn;t;)t=gr(t.nextSibling)}function vo(){Sn=En=null,at=!1}function Ap(t){ri===null?ri=[t]:ri.push(t)}var MM=Wi.ReactCurrentBatchConfig;function Ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rg(t){var e=t._init;return e(t._payload)}function Nv(t){function e(d,g){if(t){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=xr(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,g,_,x){return g===null||g.tag!==6?(g=_f(_,d.mode,x),g.return=d,g):(g=r(g,_),g.return=d,g)}function l(d,g,_,x){var w=_.type;return w===$s?u(d,g,_.props.children,x,_.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===nr&&rg(w)===g.type)?(x=r(g,_.props),x.ref=Ho(d,g,_),x.return=d,x):(x=Ac(_.type,_.key,_.props,null,d.mode,x),x.ref=Ho(d,g,_),x.return=d,x)}function c(d,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=vf(_,d.mode,x),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function u(d,g,_,x,w){return g===null||g.tag!==7?(g=es(_,d.mode,x,w),g.return=d,g):(g=r(g,_),g.return=d,g)}function h(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_f(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:return _=Ac(g.type,g.key,g.props,null,d.mode,_),_.ref=Ho(d,null,g),_.return=d,_;case Xs:return g=vf(g,d.mode,_),g.return=d,g;case nr:var x=g._init;return h(d,x(g._payload),_)}if(ra(g)||Fo(g))return g=es(g,d.mode,_,null),g.return=d,g;ml(d,g)}return null}function f(d,g,_,x){var w=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(d,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:return _.key===w?l(d,g,_,x):null;case Xs:return _.key===w?c(d,g,_,x):null;case nr:return w=_._init,f(d,g,w(_._payload),x)}if(ra(_)||Fo(_))return w!==null?null:u(d,g,_,x,null);ml(d,_)}return null}function p(d,g,_,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(_)||null,a(g,d,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:return d=d.get(x.key===null?_:x.key)||null,l(g,d,x,w);case Xs:return d=d.get(x.key===null?_:x.key)||null,c(g,d,x,w);case nr:var A=x._init;return p(d,g,_,A(x._payload),w)}if(ra(x)||Fo(x))return d=d.get(_)||null,u(g,d,x,w,null);ml(g,x)}return null}function v(d,g,_,x){for(var w=null,A=null,M=g,C=g=0,E=null;M!==null&&C<_.length;C++){M.index>C?(E=M,M=null):E=M.sibling;var S=f(d,M,_[C],x);if(S===null){M===null&&(M=E);break}t&&M&&S.alternate===null&&e(d,M),g=s(S,g,C),A===null?w=S:A.sibling=S,A=S,M=E}if(C===_.length)return n(d,M),at&&Hr(d,C),w;if(M===null){for(;C<_.length;C++)M=h(d,_[C],x),M!==null&&(g=s(M,g,C),A===null?w=M:A.sibling=M,A=M);return at&&Hr(d,C),w}for(M=i(d,M);C<_.length;C++)E=p(M,d,C,_[C],x),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?C:E.key),g=s(E,g,C),A===null?w=E:A.sibling=E,A=E);return t&&M.forEach(function(P){return e(d,P)}),at&&Hr(d,C),w}function y(d,g,_,x){var w=Fo(_);if(typeof w!="function")throw Error(ne(150));if(_=w.call(_),_==null)throw Error(ne(151));for(var A=w=null,M=g,C=g=0,E=null,S=_.next();M!==null&&!S.done;C++,S=_.next()){M.index>C?(E=M,M=null):E=M.sibling;var P=f(d,M,S.value,x);if(P===null){M===null&&(M=E);break}t&&M&&P.alternate===null&&e(d,M),g=s(P,g,C),A===null?w=P:A.sibling=P,A=P,M=E}if(S.done)return n(d,M),at&&Hr(d,C),w;if(M===null){for(;!S.done;C++,S=_.next())S=h(d,S.value,x),S!==null&&(g=s(S,g,C),A===null?w=S:A.sibling=S,A=S);return at&&Hr(d,C),w}for(M=i(d,M);!S.done;C++,S=_.next())S=p(M,d,C,S.value,x),S!==null&&(t&&S.alternate!==null&&M.delete(S.key===null?C:S.key),g=s(S,g,C),A===null?w=S:A.sibling=S,A=S);return t&&M.forEach(function(U){return e(d,U)}),at&&Hr(d,C),w}function m(d,g,_,x){if(typeof _=="object"&&_!==null&&_.type===$s&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:e:{for(var w=_.key,A=g;A!==null;){if(A.key===w){if(w=_.type,w===$s){if(A.tag===7){n(d,A.sibling),g=r(A,_.props.children),g.return=d,d=g;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===nr&&rg(w)===A.type){n(d,A.sibling),g=r(A,_.props),g.ref=Ho(d,A,_),g.return=d,d=g;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===$s?(g=es(_.props.children,d.mode,x,_.key),g.return=d,d=g):(x=Ac(_.type,_.key,_.props,null,d.mode,x),x.ref=Ho(d,g,_),x.return=d,d=x)}return o(d);case Xs:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=vf(_,d.mode,x),g.return=d,d=g}return o(d);case nr:return A=_._init,m(d,g,A(_._payload),x)}if(ra(_))return v(d,g,_,x);if(Fo(_))return y(d,g,_,x);ml(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,_),g.return=d,d=g):(n(d,g),g=_f(_,d.mode,x),g.return=d,d=g),o(d)):n(d,g)}return m}var yo=Nv(!0),Fv=Nv(!1),Jc=br(null),Qc=null,eo=null,Tp=null;function Cp(){Tp=eo=Qc=null}function bp(t){var e=Jc.current;rt(Jc),t._currentValue=e}function Zd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){Qc=t,Tp=eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Tp!==t)if(t={context:t,memoizedValue:e,next:null},eo===null){if(Qc===null)throw Error(ne(308));eo=t,Qc.dependencies={lanes:0,firstContext:t}}else eo=eo.next=t;return e}var qr=null;function Rp(t){qr===null?qr=[t]:qr.push(t)}function Ov(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rp(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Rp(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function yc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mp(t,n)}}function sg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,i){var r=t.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=ft({},h,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=h}}function og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Za={},_i=br(Za),Oa=br(Za),Ba=br(Za);function Kr(t){if(t===Za)throw Error(ne(174));return t}function Lp(t,e){switch(Qe(Ba,e),Qe(Oa,t),Qe(_i,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ld(e,t)}rt(_i),Qe(_i,e)}function xo(){rt(_i),rt(Oa),rt(Ba)}function kv(t){Kr(Ba.current);var e=Kr(_i.current),n=Ld(e,t.type);e!==n&&(Qe(Oa,t),Qe(_i,n))}function Ip(t){Oa.current===t&&(rt(_i),rt(Oa))}var ct=br(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ff=[];function Dp(){for(var t=0;t<ff.length;t++)ff[t]._workInProgressVersionPrimary=null;ff.length=0}var xc=Wi.ReactCurrentDispatcher,df=Wi.ReactCurrentBatchConfig,rs=0,ut=null,Pt=null,Nt=null,nu=!1,ma=!1,ka=0,EM=0;function Wt(){throw Error(ne(321))}function Up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function Np(t,e,n,i,r,s){if(rs=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=t===null||t.memoizedState===null?CM:bM,t=n(i,r),ma){s=0;do{if(ma=!1,ka=0,25<=s)throw Error(ne(301));s+=1,Nt=Pt=null,e.updateQueue=null,xc.current=RM,t=n(i,r)}while(ma)}if(xc.current=iu,e=Pt!==null&&Pt.next!==null,rs=0,Nt=Pt=ut=null,nu=!1,e)throw Error(ne(300));return t}function Fp(){var t=ka!==0;return ka=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ut.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Wn(){if(Pt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Nt===null?ut.memoizedState:Nt.next;if(e!==null)Nt=e,Pt=t;else{if(t===null)throw Error(ne(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Nt===null?ut.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function za(t,e){return typeof e=="function"?e(t):e}function hf(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((rs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ut.lanes|=u,ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pf(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zv(){}function Hv(t,e){var n=ut,i=Wn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Op(Wv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,Gv.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ne(349));rs&30||Vv(n,e,r)}return r}function Vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gv(t,e,n,i){e.value=n,e.getSnapshot=i,Xv(e)&&$v(t)}function Wv(t,e,n){return n(function(){Xv(e)&&$v(t)})}function Xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function $v(t){var e=zi(t,1);e!==null&&ci(e,t,1,-1)}function ag(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=TM.bind(null,ut,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jv(){return Wn().memoizedState}function Sc(t,e,n,i){var r=di();ut.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function Tu(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Up(i,o.deps)){r.memoizedState=Ha(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function lg(t,e){return Sc(8390656,8,t,e)}function Op(t,e){return Tu(2048,8,t,e)}function Yv(t,e){return Tu(4,2,t,e)}function qv(t,e){return Tu(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4,4,Kv.bind(null,e,t),n)}function Bp(){}function Jv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Up(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Up(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ey(t,e,n){return rs&21?(ui(n,e)||(n=sv(),ut.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function wM(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=df.transition;df.transition={};try{t(!1),e()}finally{Je=n,df.transition=i}}function ty(){return Wn().memoizedState}function AM(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ny(t))iy(e,n);else if(n=Ov(t,e,n,i),n!==null){var r=tn();ci(n,t,i,r),ry(n,e,i)}}function TM(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ny(t))iy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,Rp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ov(t,e,r,i),n!==null&&(r=tn(),ci(n,t,i,r),ry(n,e,i))}}function ny(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function iy(t,e){ma=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ry(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mp(t,n)}}var iu={readContext:Gn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},CM={readContext:Gn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=AM.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:ag,useDebugValue:Bp,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=ag(!1),e=t[0];return t=wM.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=di();if(at){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ft===null)throw Error(ne(349));rs&30||Vv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lg(Wv.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,Gv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Ft.identifierPrefix;if(at){var n=Ui,i=Di;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bM={readContext:Gn,useCallback:Jv,useContext:Gn,useEffect:Op,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:qv,useMemo:Qv,useReducer:hf,useRef:jv,useState:function(){return hf(za)},useDebugValue:Bp,useDeferredValue:function(t){var e=Wn();return ey(e,Pt.memoizedState,t)},useTransition:function(){var t=hf(za)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:Hv,useId:ty,unstable_isNewReconciler:!1},RM={readContext:Gn,useCallback:Jv,useContext:Gn,useEffect:Op,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:qv,useMemo:Qv,useReducer:pf,useRef:jv,useState:function(){return pf(za)},useDebugValue:Bp,useDeferredValue:function(t){var e=Wn();return Pt===null?e.memoizedState=t:ey(e,Pt.memoizedState,t)},useTransition:function(){var t=pf(za)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:Hv,useId:ty,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cu={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=yr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ci(e,t,r,i),yc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=yr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ci(e,t,r,i),yc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=yr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(ci(e,t,i,n),yc(e,t,i))}};function cg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,i)||!Da(r,s):!0}function sy(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=dn(e)?ns:Kt.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ug(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cu.enqueueReplaceState(e,e.state,null)}function Qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=dn(e)?ns:Kt.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cu.enqueueReplaceState(r,r.state,null),eu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",i=e;do n+=iS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PM=typeof WeakMap=="function"?WeakMap:Map;function oy(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){su||(su=!0,uh=i),eh(t,e)},n}function ay(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){eh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){eh(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new PM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=WM.bind(null,t,e,n),e.then(t,t))}function dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var LM=Wi.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?Fv(e,null,n,i):yo(e,t.child,n,i)}function pg(t,e,n,i,r){n=n.render;var s=e.ref;return uo(e,r),i=Np(t,e,n,i,s,r),n=Fp(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(at&&n&&Ep(e),e.flags|=1,en(t,e,i,r),e.child)}function mg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ly(t,e,s,i,r)):(t=Ac(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=xr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ly(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Da(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return th(t,e,n,i,r)}function cy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(no,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(no,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Qe(no,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Qe(no,xn),xn|=i;return en(t,e,r,n),e.child}function uy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function th(t,e,n,i,r){var s=dn(n)?ns:Kt.current;return s=_o(e,s),uo(e,r),n=Np(t,e,n,i,s,r),i=Fp(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(at&&i&&Ep(e),e.flags|=1,en(t,e,n,r),e.child)}function gg(t,e,n,i,r){if(dn(n)){var s=!0;qc(e)}else s=!1;if(uo(e,r),e.stateNode===null)Mc(t,e),sy(e,n,i),Qd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=dn(n)?ns:Kt.current,c=_o(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ug(e,o,i,c),ir=!1;var f=e.memoizedState;o.state=f,eu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||fn.current||ir?(typeof u=="function"&&(Jd(e,n,u,i),l=e.memoizedState),(a=ir||cg(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Bv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=dn(n)?ns:Kt.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&ug(e,o,i,l),ir=!1,f=e.memoizedState,o.state=f,eu(e,i,o,r);var v=e.memoizedState;a!==h||f!==v||fn.current||ir?(typeof p=="function"&&(Jd(e,n,p,i),v=e.memoizedState),(c=ir||cg(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return nh(t,e,n,i,s,r)}function nh(t,e,n,i,r,s){uy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&tg(e,n,!1),Hi(t,e,s);i=e.stateNode,LM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&tg(e,n,!0),e.child}function fy(t){var e=t.stateNode;e.pendingContext?eg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eg(t,e.context,!1),Lp(t,e.containerInfo)}function _g(t,e,n,i,r){return vo(),Ap(r),e.flags|=256,en(t,e,n,i),e.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function dy(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(ct,r&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,i,0,null),t=es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rh(n),e.memoizedState=ih,t):kp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return IM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=es(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ih,i}return s=t.child,t=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kp(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,i){return i!==null&&Ap(i),yo(e,t.child,null,n),t=kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=mf(Error(ne(422))),gl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pu({mode:"visible",children:i.children},r,0,null),s=es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=rh(o),e.memoizedState=ih,s);if(!(e.mode&1))return gl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=mf(s,i,void 0),gl(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),ci(i,t,r,-1))}return Xp(),i=mf(Error(ne(421))),gl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=XM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=gr(r.nextSibling),En=e,at=!0,ri=null,t!==null&&(In[Dn++]=Di,In[Dn++]=Ui,In[Dn++]=is,Di=t.id,Ui=t.overflow,is=e),e=kp(e,i.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zd(t.return,e,n)}function gf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function hy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&tu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gf(e,!0,n,null,s);break;case"together":gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DM(t,e,n){switch(e.tag){case 3:fy(e),vo();break;case 5:kv(e);break;case 1:dn(e.type)&&qc(e);break;case 4:Lp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe(Jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?dy(t,e,n):(Qe(ct,ct.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);Qe(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,cy(t,e,n)}return Hi(t,e,n)}var py,sh,my,gy;py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sh=function(){};my=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(_i.current);var s=null;switch(n){case"input":r=Cd(t,r),i=Cd(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Pd(t,r),i=Pd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=jc)}Id(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vo(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function UM(t,e,n){var i=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return dn(e.type)&&Yc(),Xt(e),null;case 3:return i=e.stateNode,xo(),rt(fn),rt(Kt),Dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(hh(ri),ri=null))),sh(t,e),Xt(e),null;case 5:Ip(e);var r=Kr(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)my(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Xt(e),null}if(t=Kr(_i.current),pl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)nt(oa[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Cm(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Rm(i,s),nt("invalid",i)}Id(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":sl(i),bm(i,s,!0);break;case"textarea":sl(i),Pm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[Fa]=i,py(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dd(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)nt(oa[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Cm(t,i),r=Cd(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Rm(t,i),r=Pd(t,i),nt("invalid",t);break;default:r=i}Id(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&X_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ca(t,l):typeof l=="number"&&Ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&cp(t,s,l,o))}switch(n){case"input":sl(t),bm(t,i,!1);break;case"textarea":sl(t),Pm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?oo(t,!!i.multiple,s,!1):i.defaultValue!=null&&oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)gy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Kr(Ba.current),Kr(_i.current),pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Xt(e),null;case 13:if(rt(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&Sn!==null&&e.mode&1&&!(e.flags&128))Uv(),vo(),e.flags|=98560,s=!1;else if(s=pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[pi]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else ri!==null&&(hh(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Lt===0&&(Lt=3):Xp())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return xo(),sh(t,e),t===null&&Ua(e.stateNode.containerInfo),Xt(e),null;case 10:return bp(e.type._context),Xt(e),null;case 17:return dn(e.type)&&Yc(),Xt(e),null;case 19:if(rt(ct),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Vo(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,Vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Mo&&(e.flags|=128,i=!0,Vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=tu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Xt(e),null}else 2*xt()-s.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,i=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ct.current,Qe(ct,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Wp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function NM(t,e){switch(wp(e),e.tag){case 1:return dn(e.type)&&Yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),rt(fn),rt(Kt),Dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(rt(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ct),null;case 4:return xo(),null;case 10:return bp(e.type._context),null;case 22:case 23:return Wp(),null;case 24:return null;default:return null}}var _l=!1,Yt=!1,FM=typeof WeakSet=="function"?WeakSet:Set,pe=null;function to(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function oh(t,e,n){try{n()}catch(i){gt(t,e,i)}}var yg=!1;function OM(t,e){if(Gd=Wc,t=Sv(),Mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wd={focusedElem:t,selectionRange:n},Wc=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:ti(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(x){gt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=yg,yg=!1,v}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&oh(e,n,s)}r=r.next}while(r!==i)}}function bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _y(t){var e=t.alternate;e!==null&&(t.alternate=null,_y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[Fa],delete e[jd],delete e[yM],delete e[xM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vy(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jc));else if(i!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}function ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}var kt=null,ni=!1;function ji(t,e,n){for(n=n.child;n!==null;)yy(t,e,n),n=n.sibling}function yy(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:Yt||to(n,e);case 6:var i=kt,r=ni;kt=null,ji(t,e,n),kt=i,ni=r,kt!==null&&(ni?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(ni?(t=kt,n=n.stateNode,t.nodeType===8?cf(t.parentNode,n):t.nodeType===1&&cf(t,n),La(t)):cf(kt,n.stateNode));break;case 4:i=kt,r=ni,kt=n.stateNode.containerInfo,ni=!0,ji(t,e,n),kt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&oh(n,e,o),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!Yt&&(to(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,ji(t,e,n),Yt=i):ji(t,e,n);break;default:ji(t,e,n)}}function Sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FM),e.forEach(function(i){var r=$M.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,ni=!1;break e;case 3:kt=a.stateNode.containerInfo,ni=!0;break e;case 4:kt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(kt===null)throw Error(ne(160));yy(s,o,r),kt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xy(e,t),e=e.sibling}function xy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),fi(t),i&4){try{ga(3,t,t.return),bu(3,t)}catch(y){gt(t,t.return,y)}try{ga(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Yn(e,t),fi(t),i&512&&n!==null&&to(n,n.return);break;case 5:if(Yn(e,t),fi(t),i&512&&n!==null&&to(n,n.return),t.flags&32){var r=t.stateNode;try{Ca(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&V_(r,s),Dd(a,o);var c=Dd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?j_(r,h):u==="dangerouslySetInnerHTML"?X_(r,h):u==="children"?Ca(r,h):cp(r,u,h,c)}switch(a){case"input":bd(r,s);break;case"textarea":G_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?oo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Yn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Yn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Yn(e,t),fi(t);break;case 13:Yn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vp=xt())),i&4&&Sg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,Yn(e,t),Yt=c):Yn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(h=pe=u;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:to(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:to(f,f.return);break;case 22:if(f.memoizedState!==null){Eg(h);continue}}p!==null?(p.return=f,pe=p):Eg(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$_("display",o))}catch(y){gt(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){gt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yn(e,t),fi(t),i&4&&Sg(t);break;case 21:break;default:Yn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vy(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ca(r,""),i.flags&=-33);var s=xg(t);ch(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xg(t);lh(t,a,o);break;default:throw Error(ne(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BM(t,e,n){pe=t,Sy(t)}function Sy(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_l;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=_l;var c=Yt;if(_l=o,(Yt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?wg(r):l!==null?(l.return=o,pe=l):wg(r);for(;s!==null;)pe=s,Sy(s),s=s.sibling;pe=r,_l=a,Yt=c}Mg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Mg(t)}}function Mg(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||bu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&og(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}og(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&La(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Yt||e.flags&512&&ah(e)}catch(f){gt(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Eg(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function wg(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bu(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{ah(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{ah(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var kM=Math.ceil,ru=Wi.ReactCurrentDispatcher,zp=Wi.ReactCurrentOwner,Vn=Wi.ReactCurrentBatchConfig,We=0,Ft=null,At=null,Ht=0,xn=0,no=br(0),Lt=0,Va=null,ss=0,Ru=0,Hp=0,_a=null,ln=null,Vp=0,Mo=1/0,Li=null,su=!1,uh=null,vr=null,vl=!1,ur=null,ou=0,va=0,fh=null,Ec=-1,wc=0;function tn(){return We&6?xt():Ec!==-1?Ec:Ec=xt()}function yr(t){return t.mode&1?We&2&&Ht!==0?Ht&-Ht:MM.transition!==null?(wc===0&&(wc=sv()),wc):(t=Je,t!==0||(t=window.event,t=t===void 0?16:dv(t.type)),t):1}function ci(t,e,n,i){if(50<va)throw va=0,fh=null,Error(ne(185));Ya(t,n,i),(!(We&2)||t!==Ft)&&(t===Ft&&(!(We&2)&&(Ru|=n),Lt===4&&or(t,Ht)),hn(t,i),n===1&&We===0&&!(e.mode&1)&&(Mo=xt()+500,Au&&Rr()))}function hn(t,e){var n=t.callbackNode;MS(t,e);var i=Gc(t,t===Ft?Ht:0);if(i===0)n!==null&&Dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dm(n),e===1)t.tag===0?SM(Ag.bind(null,t)):Lv(Ag.bind(null,t)),_M(function(){!(We&6)&&Rr()}),n=null;else{switch(ov(i)){case 1:n=pp;break;case 4:n=iv;break;case 16:n=Vc;break;case 536870912:n=rv;break;default:n=Vc}n=Ry(n,My.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function My(t,e){if(Ec=-1,wc=0,We&6)throw Error(ne(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=Gc(t,t===Ft?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=au(t,i);else{e=i;var r=We;We|=2;var s=wy();(Ft!==t||Ht!==e)&&(Li=null,Mo=xt()+500,Qr(t,e));do try{VM();break}catch(a){Ey(t,a)}while(!0);Cp(),ru.current=s,We=r,At!==null?e=0:(Ft=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(r=Bd(t),r!==0&&(i=r,e=dh(t,r))),e===1)throw n=Va,Qr(t,0),or(t,i),hn(t,xt()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!zM(r)&&(e=au(t,i),e===2&&(s=Bd(t),s!==0&&(i=s,e=dh(t,s))),e===1))throw n=Va,Qr(t,0),or(t,i),hn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Vr(t,ln,Li);break;case 3:if(or(t,i),(i&130023424)===i&&(e=Vp+500-xt(),10<e)){if(Gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$d(Vr.bind(null,t,ln,Li),e);break}Vr(t,ln,Li);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kM(i/1960))-i,10<i){t.timeoutHandle=$d(Vr.bind(null,t,ln,Li),i);break}Vr(t,ln,Li);break;case 5:Vr(t,ln,Li);break;default:throw Error(ne(329))}}}return hn(t,xt()),t.callbackNode===n?My.bind(null,t):null}function dh(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=au(t,e),t!==2&&(e=ln,ln=n,e!==null&&hh(e)),t}function hh(t){ln===null?ln=t:ln.push.apply(ln,t)}function zM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Hp,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function Ag(t){if(We&6)throw Error(ne(327));fo();var e=Gc(t,0);if(!(e&1))return hn(t,xt()),null;var n=au(t,e);if(t.tag!==0&&n===2){var i=Bd(t);i!==0&&(e=i,n=dh(t,i))}if(n===1)throw n=Va,Qr(t,0),or(t,e),hn(t,xt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,ln,Li),hn(t,xt()),null}function Gp(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Mo=xt()+500,Au&&Rr())}}function os(t){ur!==null&&ur.tag===0&&!(We&6)&&fo();var e=We;We|=1;var n=Vn.transition,i=Je;try{if(Vn.transition=null,Je=1,t)return t()}finally{Je=i,Vn.transition=n,We=e,!(We&6)&&Rr()}}function Wp(){xn=no.current,rt(no)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gM(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(wp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yc();break;case 3:xo(),rt(fn),rt(Kt),Dp();break;case 5:Ip(i);break;case 4:xo();break;case 13:rt(ct);break;case 19:rt(ct);break;case 10:bp(i.type._context);break;case 22:case 23:Wp()}n=n.return}if(Ft=t,At=t=xr(t.current,null),Ht=xn=e,Lt=0,Va=null,Hp=Ru=ss=0,ln=_a=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qr=null}return t}function Ey(t,e){do{var n=At;try{if(Cp(),xc.current=iu,nu){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nu=!1}if(rs=0,Nt=Pt=ut=null,ma=!1,ka=0,zp.current=null,n===null||n.return===null){Lt=1,Va=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=dg(o);if(p!==null){p.flags&=-257,hg(p,o,a,s,e),p.mode&1&&fg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){fg(s,c,e),Xp();break e}l=Error(ne(426))}}else if(at&&a.mode&1){var m=dg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),hg(m,o,a,s,e),Ap(So(l,a));break e}}s=l=So(l,a),Lt!==4&&(Lt=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=oy(s,l,e);sg(s,d);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(vr===null||!vr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=ay(s,a,e);sg(s,x);break e}}s=s.return}while(s!==null)}Ty(n)}catch(w){e=w,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function wy(){var t=ru.current;return ru.current=iu,t===null?iu:t}function Xp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(ss&268435455)&&!(Ru&268435455)||or(Ft,Ht)}function au(t,e){var n=We;We|=2;var i=wy();(Ft!==t||Ht!==e)&&(Li=null,Qr(t,e));do try{HM();break}catch(r){Ey(t,r)}while(!0);if(Cp(),We=n,ru.current=i,At!==null)throw Error(ne(261));return Ft=null,Ht=0,Lt}function HM(){for(;At!==null;)Ay(At)}function VM(){for(;At!==null&&!hS();)Ay(At)}function Ay(t){var e=by(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Ty(t):At=e,zp.current=null}function Ty(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NM(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,At=null;return}}else if(n=UM(n,e,xn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Lt===0&&(Lt=5)}function Vr(t,e,n){var i=Je,r=Vn.transition;try{Vn.transition=null,Je=1,GM(t,e,n,i)}finally{Vn.transition=r,Je=i}return null}function GM(t,e,n,i){do fo();while(ur!==null);if(We&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ES(t,s),t===Ft&&(At=Ft=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,Ry(Vc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=Je;Je=1;var a=We;We|=4,zp.current=null,OM(t,n),xy(n,t),cM(Wd),Wc=!!Gd,Wd=Gd=null,t.current=n,BM(n),pS(),We=a,Je=o,Vn.transition=s}else t.current=n;if(vl&&(vl=!1,ur=t,ou=r),s=t.pendingLanes,s===0&&(vr=null),_S(n.stateNode),hn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(su)throw su=!1,t=uh,uh=null,t;return ou&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===fh?va++:(va=0,fh=t):va=0,Rr(),null}function fo(){if(ur!==null){var t=ov(ou),e=Vn.transition,n=Je;try{if(Vn.transition=null,Je=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,ou=0,We&6)throw Error(ne(331));var r=We;for(We|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:ga(8,u,s)}var h=u.child;if(h!==null)h.return=u,pe=h;else for(;pe!==null;){u=pe;var f=u.sibling,p=u.return;if(_y(u),u===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bu(9,a)}}catch(w){gt(a,a.return,w)}if(a===o){pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,pe=x;break e}pe=a.return}}if(We=r,Rr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(xu,t)}catch{}i=!0}return i}finally{Je=n,Vn.transition=e}}return!1}function Tg(t,e,n){e=So(n,e),e=oy(t,e,1),t=_r(t,e,1),e=tn(),t!==null&&(Ya(t,1,e),hn(t,e))}function gt(t,e,n){if(t.tag===3)Tg(t,t,n);else for(;e!==null;){if(e.tag===3){Tg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=So(n,t),t=ay(e,t,1),e=_r(e,t,1),t=tn(),e!==null&&(Ya(e,1,t),hn(e,t));break}}e=e.return}}function WM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>xt()-Vp?Qr(t,0):Hp|=n),hn(t,e)}function Cy(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=tn();t=zi(t,e),t!==null&&(Ya(t,e,n),hn(t,n))}function XM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cy(t,n)}function $M(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Cy(t,n)}var by;by=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,DM(t,e,n);un=!!(t.flags&131072)}else un=!1,at&&e.flags&1048576&&Iv(e,Zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Mc(t,e),t=e.pendingProps;var r=_o(e,Kt.current);uo(e,n),r=Np(null,e,i,t,r,n);var s=Fp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,qc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pp(e),r.updater=Cu,e.stateNode=r,r._reactInternals=e,Qd(e,i,t,n),e=nh(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Ep(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=YM(i),t=ti(i,t),r){case 0:e=th(null,e,i,t,n);break e;case 1:e=gg(null,e,i,t,n);break e;case 11:e=pg(null,e,i,t,n);break e;case 14:e=mg(null,e,i,ti(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),th(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),gg(t,e,i,r,n);case 3:e:{if(fy(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bv(t,e),eu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=So(Error(ne(423)),e),e=_g(t,e,i,n,r);break e}else if(i!==r){r=So(Error(ne(424)),e),e=_g(t,e,i,n,r);break e}else for(Sn=gr(e.stateNode.containerInfo.firstChild),En=e,at=!0,ri=null,n=Fv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=Hi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return kv(e),t===null&&Kd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xd(i,r)?o=null:s!==null&&Xd(i,s)&&(e.flags|=32),uy(t,e),en(t,e,o,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return dy(t,e,n);case 4:return Lp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),pg(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Qe(Jc,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!fn.current){e=Hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=Gn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),mg(t,e,i,r,n);case 15:return ly(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Mc(t,e),e.tag=1,dn(i)?(t=!0,qc(e)):t=!1,uo(e,n),sy(e,i,r),Qd(e,i,r,n),nh(null,e,i,!0,t,n);case 19:return hy(t,e,n);case 22:return cy(t,e,n)}throw Error(ne(156,e.tag))};function Ry(t,e){return nv(t,e)}function jM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new jM(t,e,n,i)}function $p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YM(t){if(typeof t=="function")return $p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fp)return 11;if(t===dp)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")$p(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $s:return es(n.children,r,s,e);case up:o=8,r|=8;break;case Ed:return t=Fn(12,n,e,r|2),t.elementType=Ed,t.lanes=s,t;case wd:return t=Fn(13,n,e,r),t.elementType=wd,t.lanes=s,t;case Ad:return t=Fn(19,n,e,r),t.elementType=Ad,t.lanes=s,t;case k_:return Pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O_:o=10;break e;case B_:o=9;break e;case fp:o=11;break e;case dp:o=14;break e;case nr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function es(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Pu(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function _f(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jp(t,e,n,i,r,s,o,a,l){return t=new qM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pp(s),t}function KM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Py(t){if(!t)return wr;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(dn(n))return Pv(t,n,e)}return e}function Ly(t,e,n,i,r,s,o,a,l){return t=jp(n,i,!0,t,r,s,o,a,l),t.context=Py(null),n=t.current,i=tn(),r=yr(n),s=Oi(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,Ya(t,r,i),hn(t,i),t}function Lu(t,e,n,i){var r=e.current,s=tn(),o=yr(r);return n=Py(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(ci(t,r,o,s),yc(t,r,o)),o}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yp(t,e){Cg(t,e),(t=t.alternate)&&Cg(t,e)}function ZM(){return null}var Iy=typeof reportError=="function"?reportError:function(t){console.error(t)};function qp(t){this._internalRoot=t}Iu.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Lu(t,e,null,null)};Iu.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Lu(null,t,null,null)}),e[ki]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=cv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&fv(t)}};function Kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bg(){}function JM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lu(o);s.call(c)}}var o=Ly(e,i,t,0,null,!1,!1,"",bg);return t._reactRootContainer=o,t[ki]=o.current,Ua(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lu(l);a.call(c)}}var l=jp(t,0,!1,null,null,!1,!1,"",bg);return t._reactRootContainer=l,t[ki]=l.current,Ua(t.nodeType===8?t.parentNode:t),os(function(){Lu(e,l,n,i)}),l}function Uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lu(o);a.call(l)}}Lu(e,o,t,r)}else o=JM(n,e,t,r,i);return lu(o)}av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(mp(e,n|1),hn(e,xt()),!(We&6)&&(Mo=xt()+500,Rr()))}break;case 13:os(function(){var i=zi(t,1);if(i!==null){var r=tn();ci(i,t,1,r)}}),Yp(t,1)}};gp=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=tn();ci(e,t,134217728,n)}Yp(t,134217728)}};lv=function(t){if(t.tag===13){var e=yr(t),n=zi(t,e);if(n!==null){var i=tn();ci(n,t,e,i)}Yp(t,e)}};cv=function(){return Je};uv=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Nd=function(t,e,n){switch(e){case"input":if(bd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wu(i);if(!r)throw Error(ne(90));H_(i),bd(i,r)}}}break;case"textarea":G_(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};K_=Gp;Z_=os;var QM={usingClientEntryPoint:!1,Events:[Ka,Ks,wu,Y_,q_,Gp]},Go={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eE={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ev(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||ZM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{xu=yl.inject(eE),gi=yl}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QM;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kp(e))throw Error(ne(200));return KM(t,e,null,n)};Tn.createRoot=function(t,e){if(!Kp(t))throw Error(ne(299));var n=!1,i="",r=Iy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jp(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Ua(t.nodeType===8?t.parentNode:t),new qp(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=ev(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return os(t)};Tn.hydrate=function(t,e,n){if(!Du(e))throw Error(ne(200));return Uu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Kp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Iy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ly(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Iu(e)};Tn.render=function(t,e,n){if(!Du(e))throw Error(ne(200));return Uu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Du(t))throw Error(ne(40));return t._reactRootContainer?(os(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Tn.unstable_batchedUpdates=Gp;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Du(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Uu(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Dy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy)}catch(t){console.error(t)}}Dy(),D_.exports=Tn;var tE=D_.exports,Uy,Rg=tE;Uy=Rg.createRoot,Rg.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zp="167",ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nE=0,Pg=1,iE=2,Ny=1,rE=2,Ri=3,yi=0,nn=1,qt=2,Sr=0,ho=1,Lg=2,Ig=3,Dg=4,sE=5,Wr=100,oE=101,aE=102,lE=103,cE=104,uE=200,fE=201,dE=202,hE=203,ph=204,mh=205,pE=206,mE=207,gE=208,_E=209,vE=210,yE=211,xE=212,SE=213,ME=214,EE=0,wE=1,AE=2,cu=3,TE=4,CE=5,bE=6,RE=7,Nu=0,PE=1,LE=2,Mr=0,IE=1,DE=2,UE=3,NE=4,FE=5,OE=6,BE=7,Fy=300,Eo=301,wo=302,gh=303,_h=304,Fu=306,vh=1e3,Zr=1001,yh=1002,On=1003,kE=1004,xl=1005,si=1006,yf=1007,Jr=1008,Vi=1009,Oy=1010,By=1011,Ga=1012,Jp=1013,as=1014,Ni=1015,Ja=1016,Qp=1017,em=1018,Ao=1020,ky=35902,zy=1021,Hy=1022,ai=1023,Vy=1024,Gy=1025,po=1026,To=1027,Wy=1028,tm=1029,Xy=1030,nm=1031,im=1033,Tc=33776,Cc=33777,bc=33778,Rc=33779,xh=35840,Sh=35841,Mh=35842,Eh=35843,wh=36196,Ah=37492,Th=37496,Ch=37808,bh=37809,Rh=37810,Ph=37811,Lh=37812,Ih=37813,Dh=37814,Uh=37815,Nh=37816,Fh=37817,Oh=37818,Bh=37819,kh=37820,zh=37821,Pc=36492,Hh=36494,Vh=36495,$y=36283,Gh=36284,Wh=36285,Xh=36286,zE=3200,HE=3201,Ou=0,VE=1,ar="",ii="srgb",Pr="srgb-linear",rm="display-p3",Bu="display-p3-linear",uu="linear",it="srgb",fu="rec709",du="p3",_s=7680,Ug=519,GE=512,WE=513,XE=514,jy=515,$E=516,jE=517,YE=518,qE=519,Ng=35044,Fg="300 es",Fi=2e3,hu=2001;class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Og=1234567;const ya=Math.PI/180,Wa=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function sm(t,e){return(t%e+e)%e}function KE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function ZE(t,e,n){return t!==e?(n-t)/(e-t):0}function xa(t,e,n){return(1-n)*t+n*e}function JE(t,e,n,i){return xa(t,e,1-Math.exp(-n*i))}function QE(t,e=1){return e-Math.abs(sm(t,e*2)-e)}function ew(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function tw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function nw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function iw(t,e){return t+Math.random()*(e-t)}function rw(t){return t*(.5-Math.random())}function sw(t){t!==void 0&&(Og=t);let e=Og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ow(t){return t*ya}function aw(t){return t*Wa}function lw(t){return(t&t-1)===0&&t!==0}function cw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function uw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const dw={DEG2RAD:ya,RAD2DEG:Wa,generateUUID:Lo,clamp:zt,euclideanModulo:sm,mapLinear:KE,inverseLerp:ZE,lerp:xa,damp:JE,pingpong:QE,smoothstep:ew,smootherstep:tw,randInt:nw,randFloat:iw,randFloatSpread:rw,seededRandom:sw,degToRad:ow,radToDeg:aw,isPowerOfTwo:lw,ceilPowerOfTwo:cw,floorPowerOfTwo:uw,setQuaternionFromProperEuler:fw,normalize:Jt,denormalize:Ws};class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],d=r[6],g=r[1],_=r[4],x=r[7],w=r[2],A=r[5],M=r[8];return s[0]=o*y+a*g+l*w,s[3]=o*m+a*_+l*A,s[6]=o*d+a*x+l*M,s[1]=c*y+u*g+h*w,s[4]=c*m+u*_+h*A,s[7]=c*d+u*x+h*M,s[2]=f*y+p*g+v*w,s[5]=f*m+p*_+v*A,s[8]=f*d+p*x+v*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xf.makeScale(e,n)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,n){return this.premultiply(xf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xf=new Fe;function Yy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hw(){const t=Xa("canvas");return t.style.display="block",t}const Bg={};function Sa(t){t in Bg||(Bg[t]=!0,console.warn(t))}function pw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const kg=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zg=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wo={[Pr]:{transfer:uu,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:it,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Bu]:{transfer:uu,primaries:du,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(zg),fromReference:t=>t.applyMatrix3(kg)},[rm]:{transfer:it,primaries:du,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(zg),fromReference:t=>t.applyMatrix3(kg).convertLinearToSRGB()}},mw=new Set([Pr,Bu]),Ze={enabled:!0,_workingColorSpace:Pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Wo[e].toReference,r=Wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Wo[t].primaries},getTransfer:function(t){return t===ar?uu:Wo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Wo[e].luminanceCoefficients)}};function mo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vs;class gw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Xa("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mo(n[i]/255)*255):n[i]=mo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _w=0;class qy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mf(r[o].image)):s.push(Mf(r[o]))}else s=Mf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vw=0;class pn extends ds{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Zr,r=Zr,s=si,o=Jr,a=ai,l=Vi,c=pn.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Lo(),this.name="",this.source=new qy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Fy;pn.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,n=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(p+1)/2,w=(d+1)/2,A=(u+f)/4,M=(h+y)/4,C=(v+m)/4;return _>x&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=M/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=C/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=C/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-y)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yw extends ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new et(0,0,e,n),this.scissorTest=!1,this.viewport=new et(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends yw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ky extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xw extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(h!==y||l!==f||c!==p||u!==v){let m=1-a;const d=l*f+c*p+u*v+h*y,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,d*g);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const x=a*g;if(l=l*m+f*x,c=c*m+p*x,u=u*m+v*x,h=h*m+y*x,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*h+l*p-c*f,e[n+1]=l*v+u*f+c*h-a*p,e[n+2]=c*v+u*p+a*f-l*h,e[n+3]=u*v-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ef=new I,Hg=new cs;class on{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sl.copy(i.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Ml.subVectors(this.max,Xo),ys.subVectors(e.a,Xo),xs.subVectors(e.b,Xo),Ss.subVectors(e.c,Xo),Yi.subVectors(xs,ys),qi.subVectors(Ss,xs),Dr.subVectors(ys,Ss);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Dr.z,Dr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Dr.z,0,-Dr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Dr.y,Dr.x,0];return!wf(n,ys,xs,Ss,Ml)||(n=[1,0,0,0,1,0,0,0,1],!wf(n,ys,xs,Ss,Ml))?!1:(El.crossVectors(Yi,qi),n=[El.x,El.y,El.z],wf(n,ys,xs,Ss,Ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,Sl=new on,ys=new I,xs=new I,Ss=new I,Yi=new I,qi=new I,Dr=new I,Xo=new I,Ml=new I,El=new I,Ur=new I;function wf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=n.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sw=new on,$o=new I,Af=new I;class Qa{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Af)),this.expandByPoint($o.copy(e.center).sub(Af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new I,Tf=new I,wl=new I,Ki=new I,Cf=new I,Al=new I,bf=new I;class el{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tf.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(Tf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wl),a=Ki.dot(this.direction),l=-Ki.dot(wl),c=Ki.lengthSq(),u=Math.abs(1-o*o);let h,f,p,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tf).addScaledVector(wl,f),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){Cf.subVectors(n,e),Al.subVectors(i,e),bf.crossVectors(Cf,Al);let o=this.direction.dot(bf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(Ki,Al));if(l<0)return null;const c=a*this.direction.dot(Cf.cross(Ki));if(c<0||l+c>o)return null;const u=-a*Ki.dot(bf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,v,y,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,v,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,v=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,y=c*h;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,v=a*u,y=a*h;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-f*h,n[8]=v*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+v,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+y,n[5]=o*u,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*u,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,Ew)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Zi.crossVectors(i,vn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Zi.crossVectors(i,vn)),Zi.normalize(),Tl.crossVectors(vn,Zi),r[0]=Zi.x,r[4]=Tl.x,r[8]=vn.x,r[1]=Zi.y,r[5]=Tl.y,r[9]=vn.y,r[2]=Zi.z,r[6]=Tl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],d=i[14],g=i[3],_=i[7],x=i[11],w=i[15],A=r[0],M=r[4],C=r[8],E=r[12],S=r[1],P=r[5],U=r[9],L=r[13],F=r[2],z=r[6],B=r[10],$=r[14],O=r[3],q=r[7],Z=r[11],oe=r[15];return s[0]=o*A+a*S+l*F+c*O,s[4]=o*M+a*P+l*z+c*q,s[8]=o*C+a*U+l*B+c*Z,s[12]=o*E+a*L+l*$+c*oe,s[1]=u*A+h*S+f*F+p*O,s[5]=u*M+h*P+f*z+p*q,s[9]=u*C+h*U+f*B+p*Z,s[13]=u*E+h*L+f*$+p*oe,s[2]=v*A+y*S+m*F+d*O,s[6]=v*M+y*P+m*z+d*q,s[10]=v*C+y*U+m*B+d*Z,s[14]=v*E+y*L+m*$+d*oe,s[3]=g*A+_*S+x*F+w*O,s[7]=g*M+_*P+x*z+w*q,s[11]=g*C+_*U+x*B+w*Z,s[15]=g*E+_*L+x*$+w*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],d=e[15],g=h*m*c-y*f*c+y*l*p-a*m*p-h*l*d+a*f*d,_=v*f*c-u*m*c-v*l*p+o*m*p+u*l*d-o*f*d,x=u*y*c-v*h*c+v*a*p-o*y*p-u*a*d+o*h*d,w=v*h*l-u*y*l-v*a*f+o*y*f+u*a*m-o*h*m,A=n*g+i*_+r*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=g*M,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*d-i*f*d)*M,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*d+i*l*d)*M,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*M,e[4]=_*M,e[5]=(u*m*s-v*f*s+v*r*p-n*m*p-u*r*d+n*f*d)*M,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*d-n*l*d)*M,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*M,e[8]=x*M,e[9]=(v*h*s-u*y*s-v*i*p+n*y*p+u*i*d-n*h*d)*M,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*d+n*a*d)*M,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*M,e[12]=w*M,e[13]=(u*y*r-v*h*r+v*i*f-n*y*f-u*i*m+n*h*m)*M,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*M,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,v=s*h,y=o*u,m=o*h,d=a*h,g=l*c,_=l*u,x=l*h,w=i.x,A=i.y,M=i.z;return r[0]=(1-(y+d))*w,r[1]=(p+x)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(f+d))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*M,r[9]=(m-g)*M,r[10]=(1-(f+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ms.set(r[0],r[1],r[2]).length();const o=Ms.set(r[4],r[5],r[6]).length(),a=Ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/s,u=1/o,h=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,n.setFromRotationMatrix(Kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Fi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===Fi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===hu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*u;let v,y;if(a===Fi)v=(o+s)*h,y=-2*h;else if(a===hu)v=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ms=new I,Kn=new $e,Mw=new I(0,0,0),Ew=new I(1,1,1),Zi=new I,Tl=new I,vn=new I,Vg=new $e,Gg=new cs;class Xn{constructor(e=0,n=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Zy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ww=0;const Wg=new I,Es=new cs,Ei=new $e,Cl=new I,jo=new I,Aw=new I,Tw=new cs,Xg=new I(1,0,0),$g=new I(0,1,0),jg=new I(0,0,1),Yg={type:"added"},Cw={type:"removed"},ws={type:"childadded",child:null},Rf={type:"childremoved",child:null};class Vt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new I,n=new Xn,i=new cs,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Fe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(jg,e)}translateOnAxis(e,n){return Wg.copy(e).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(jo,Cl,this.up):Ei.lookAt(Cl,jo,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Ei),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cw),Rf.child=e,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,Aw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Tw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new I,wi=new I,Pf=new I,Ai=new I,As=new I,Ts=new I,qg=new I,Lf=new I,If=new I,Df=new I;class lt{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),wi.subVectors(i,n),Pf.subVectors(e,n);const o=Zn.dot(Zn),a=Zn.dot(wi),l=Zn.dot(Pf),c=wi.dot(wi),u=wi.dot(Pf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),wi.subVectors(e,n),Zn.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Zn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return lt.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return lt.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),Ts.subVectors(s,i),Lf.subVectors(e,i);const l=As.dot(Lf),c=Ts.dot(Lf);if(l<=0&&c<=0)return n.copy(i);If.subVectors(e,r);const u=As.dot(If),h=Ts.dot(If);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(As,o);Df.subVectors(e,s);const p=As.dot(Df),v=Ts.dot(Df);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Ts,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return qg.subVectors(s,r),a=(h-u)/(h-u+(p-v)),n.copy(r).addScaledVector(qg,a);const d=1/(m+y+f);return o=y*d,a=f*d,n.copy(i).addScaledVector(As,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=sm(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uf(o,s,e+1/3),this.g=Uf(o,s,e),this.b=Uf(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=Jy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=Sf(e.r),this.g=Sf(e.g),this.b=Sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Ze.fromWorkingColorSpace(jt.copy(this),e),Math.round(zt(jt.r*255,0,255))*65536+Math.round(zt(jt.g*255,0,255))*256+Math.round(zt(jt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=ii){Ze.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL(bl);const i=xa(Ji.h,bl.h,n),r=xa(Ji.s,bl.s,n),s=xa(Ji.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new ke;ke.NAMES=Jy;let bw=0;class Lr extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=ho,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=cu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ph&&(i.blendSrc=this.blendSrc),this.blendDst!==mh&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Qy extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,Rl=new Me;class mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ng,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Sa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Rl.fromBufferAttribute(this,n),Rl.applyMatrix3(e),this.setXY(n,Rl.x,Rl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),e}}class ex extends mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tx extends mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ct extends mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Rw=0;const Pn=new $e,Nf=new Vt,Cs=new I,yn=new on,Yo=new on,Ut=new I;class bn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yy(e)?tx:ex)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(yn.min,Yo.min),yn.expandByPoint(Ut),Ut.addVectors(yn.max,Yo.max),yn.expandByPoint(Ut)):(yn.expandByPoint(Yo.min),yn.expandByPoint(Yo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),Ut.add(Cs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,f=new Me,p=new Me,v=new Me,y=new I,m=new I;function d(C,E,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),v.sub(f);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),a[C].add(y),a[E].add(y),a[S].add(y),l[C].add(m),l[E].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,E=g.length;C<E;++C){const S=g[C],P=S.start,U=S.count;for(let L=P,F=P+U;L<F;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new I,x=new I,w=new I,A=new I;function M(C){w.fromBufferAttribute(r,C),A.copy(w);const E=a[C];_.copy(E),_.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(A,E);const P=x.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,E=g.length;C<E;++C){const S=g[C],P=S.start,U=S.count;for(let L=P,F=P+U;L<F;L+=3)M(e.getX(L+0)),M(e.getX(L+1)),M(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new $e,Nr=new el,Pl=new Qa,Zg=new I,bs=new I,Rs=new I,Ps=new I,Ff=new I,Ll=new I,Il=new Me,Dl=new Me,Ul=new Me,Jg=new I,Qg=new I,e0=new I,Nl=new I,Fl=new I;class wt extends Vt{constructor(e=new bn,n=new Qy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ff.fromBufferAttribute(h,e),o?Ll.addScaledVector(Ff,u):Ll.addScaledVector(Ff.sub(n),u))}n.add(Ll)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Pl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Pl,Zg)===null||Nr.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(Kg.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Kg),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,w=_;x<w;x+=3){const A=a.getX(x),M=a.getX(x+1),C=a.getX(x+2);r=Ol(this,d,e,i,c,u,h,A,M,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,d=y;m<d;m+=3){const g=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=Ol(this,o,e,i,c,u,h,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,w=_;x<w;x+=3){const A=x,M=x+1,C=x+2;r=Ol(this,d,e,i,c,u,h,A,M,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,d=y;m<d;m+=3){const g=m,_=m+1,x=m+2;r=Ol(this,o,e,i,c,u,h,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Pw(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;Fl.copy(a),Fl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fl);return c<n.near||c>n.far?null:{distance:c,point:Fl.clone(),object:t}}function Ol(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,bs),t.getVertexPosition(l,Rs),t.getVertexPosition(c,Ps);const u=Pw(t,e,n,i,bs,Rs,Ps,Nl);if(u){r&&(Il.fromBufferAttribute(r,a),Dl.fromBufferAttribute(r,l),Ul.fromBufferAttribute(r,c),u.uv=lt.getInterpolation(Nl,bs,Rs,Ps,Il,Dl,Ul,new Me)),s&&(Il.fromBufferAttribute(s,a),Dl.fromBufferAttribute(s,l),Ul.fromBufferAttribute(s,c),u.uv1=lt.getInterpolation(Nl,bs,Rs,Ps,Il,Dl,Ul,new Me)),o&&(Jg.fromBufferAttribute(o,a),Qg.fromBufferAttribute(o,l),e0.fromBufferAttribute(o,c),u.normal=lt.getInterpolation(Nl,bs,Rs,Ps,Jg,Qg,e0,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};lt.getNormal(bs,Rs,Ps,h.normal),u.face=h}return u}class Io extends bn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function v(y,m,d,g,_,x,w,A,M,C,E){const S=x/M,P=w/C,U=x/2,L=w/2,F=A/2,z=M+1,B=C+1;let $=0,O=0;const q=new I;for(let Z=0;Z<B;Z++){const oe=Z*P-L;for(let xe=0;xe<z;xe++){const He=xe*S-U;q[y]=He*g,q[m]=oe*_,q[d]=F,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[d]=A>0?1:-1,u.push(q.x,q.y,q.z),h.push(xe/M),h.push(1-Z/C),$+=1}}for(let Z=0;Z<C;Z++)for(let oe=0;oe<M;oe++){const xe=f+oe+z*Z,He=f+oe+z*(Z+1),K=f+(oe+1)+z*(Z+1),ie=f+(oe+1)+z*Z;l.push(xe,He,ie),l.push(He,K,ie),O+=6}a.addGroup(p,O,E),p+=O,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Co(t[n]);for(const r in i)e[r]=i[r]}return e}function Lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Iw={clone:Co,merge:Qt};var Dw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dw,this.fragmentShader=Uw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ix extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new I,t0=new Me,n0=new Me;class Un extends ix{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,t0,n0),n.subVectors(n0,t0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Is=1;class Nw extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(Ls,Is,e,n);r.layers=this.layers,this.add(r);const s=new Un(Ls,Is,e,n);s.layers=this.layers,this.add(s);const o=new Un(Ls,Is,e,n);o.layers=this.layers,this.add(o);const a=new Un(Ls,Is,e,n);a.layers=this.layers,this.add(a);const l=new Un(Ls,Is,e,n);l.layers=this.layers,this.add(l);const c=new Un(Ls,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class om extends pn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Eo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fw extends ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new om(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Io(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Sr});s.uniforms.tEquirect.value=n;const o=new wt(r,s),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=si),new Nw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Of=new I,Ow=new I,Bw=new Fe;class Nn{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Of.subVectors(i,n).cross(Ow.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Of),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Bw.getNormalMatrix(e),r=this.coplanarPoint(Of).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Qa,Bl=new I;class am{constructor(e=new Nn,n=new Nn,i=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],y=r[10],m=r[11],d=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-d).normalize(),i[1].setComponents(l+s,f+c,m+p,x+d).normalize(),i[2].setComponents(l+o,f+u,m+v,x+g).normalize(),i[3].setComponents(l-o,f-u,m-v,x-g).normalize(),i[4].setComponents(l-a,f-h,m-y,x-_).normalize(),n===Fi)i[5].setComponents(l+a,f+h,m+y,x+_).normalize();else if(n===hu)i[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bl.x=r.normal.x>0?e.max.x:e.min.x,Bl.y=r.normal.y>0?e.max.y:e.min.y,Bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,v=f.length;p<v;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ku extends bn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let d=0;d<u;d++){const g=d*f-o;for(let _=0;_<c;_++){const x=_*h-s;v.push(x,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const _=g+c*d,x=g+c*(d+1),w=g+1+c*(d+1),A=g+1+c*d;p.push(_,x,A),p.push(x,w,A)}this.setIndex(p),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.width,e.height,e.widthSegments,e.heightSegments)}}var zw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ww=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$w=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:zw,alphahash_pars_fragment:Hw,alphamap_fragment:Vw,alphamap_pars_fragment:Gw,alphatest_fragment:Ww,alphatest_pars_fragment:Xw,aomap_fragment:$w,aomap_pars_fragment:jw,batching_pars_vertex:Yw,batching_vertex:qw,begin_vertex:Kw,beginnormal_vertex:Zw,bsdfs:Jw,iridescence_fragment:Qw,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:r1,color_fragment:s1,color_pars_fragment:o1,color_pars_vertex:a1,color_vertex:l1,common:c1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:f1,displacementmap_pars_vertex:d1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:_1,envmap_fragment:v1,envmap_common_pars_fragment:y1,envmap_pars_fragment:x1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:I1,envmap_vertex:M1,fog_vertex:E1,fog_pars_vertex:w1,fog_fragment:A1,fog_pars_fragment:T1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:b1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:P1,lights_pars_begin:L1,lights_toon_fragment:D1,lights_toon_pars_fragment:U1,lights_phong_fragment:N1,lights_phong_pars_fragment:F1,lights_physical_fragment:O1,lights_physical_pars_fragment:B1,lights_fragment_begin:k1,lights_fragment_maps:z1,lights_fragment_end:H1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:$1,map_pars_fragment:j1,map_particle_fragment:Y1,map_particle_pars_fragment:q1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:J1,morphcolor_vertex:Q1,morphnormal_vertex:eA,morphtarget_pars_vertex:tA,morphtarget_vertex:nA,normal_fragment_begin:iA,normal_fragment_maps:rA,normal_pars_fragment:sA,normal_pars_vertex:oA,normal_vertex:aA,normalmap_pars_fragment:lA,clearcoat_normal_fragment_begin:cA,clearcoat_normal_fragment_maps:uA,clearcoat_pars_fragment:fA,iridescence_pars_fragment:dA,opaque_fragment:hA,packing:pA,premultiplied_alpha_fragment:mA,project_vertex:gA,dithering_fragment:_A,dithering_pars_fragment:vA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:xA,shadowmap_pars_fragment:SA,shadowmap_pars_vertex:MA,shadowmap_vertex:EA,shadowmask_pars_fragment:wA,skinbase_vertex:AA,skinning_pars_vertex:TA,skinning_vertex:CA,skinnormal_vertex:bA,specularmap_fragment:RA,specularmap_pars_fragment:PA,tonemapping_fragment:LA,tonemapping_pars_fragment:IA,transmission_fragment:DA,transmission_pars_fragment:UA,uv_pars_fragment:NA,uv_pars_vertex:FA,uv_vertex:OA,worldpos_vertex:BA,background_vert:kA,background_frag:zA,backgroundCube_vert:HA,backgroundCube_frag:VA,cube_vert:GA,cube_frag:WA,depth_vert:XA,depth_frag:$A,distanceRGBA_vert:jA,distanceRGBA_frag:YA,equirect_vert:qA,equirect_frag:KA,linedashed_vert:ZA,linedashed_frag:JA,meshbasic_vert:QA,meshbasic_frag:eT,meshlambert_vert:tT,meshlambert_frag:nT,meshmatcap_vert:iT,meshmatcap_frag:rT,meshnormal_vert:sT,meshnormal_frag:oT,meshphong_vert:aT,meshphong_frag:lT,meshphysical_vert:cT,meshphysical_frag:uT,meshtoon_vert:fT,meshtoon_frag:dT,points_vert:hT,points_frag:pT,shadow_vert:mT,shadow_frag:gT,sprite_vert:_T,sprite_frag:vT},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},hi={basic:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Qt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Qt([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};hi.physical={uniforms:Qt([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const kl={r:0,b:0,g:0},Or=new Xn,yT=new $e;function xT(t,e,n,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function y(g){let _=!1;const x=v(g);x===null?d(a,l):x&&x.isColor&&(d(x,1),_=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const x=v(_);x&&(x.isCubeTexture||x.mapping===Fu)?(u===void 0&&(u=new wt(new Io(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:Co(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(_.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(Or)),u.material.toneMapped=Ze.getTransfer(x.colorSpace)!==it,(h!==x||f!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new wt(new ku(2,2),new Ar({name:"BackgroundMaterial",uniforms:Co(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function d(g,_){g.getRGB(kl,nx(t)),i.buffers.color.setClear(kl.r,kl.g,kl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:y,addToRenderList:m}}function ST(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,P,U,L,F){let z=!1;const B=h(L,U,P);s!==B&&(s=B,c(s.object)),z=p(S,L,U,F),z&&v(S,L,U,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(S,P,U,L),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,P,U){const L=U.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let z=F[P.id];z===void 0&&(z={},F[P.id]=z);let B=z[L];return B===void 0&&(B=f(l()),z[L]=B),B}function f(S){const P=[],U=[],L=[];for(let F=0;F<n;F++)P[F]=0,U[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,P,U,L){const F=s.attributes,z=P.attributes;let B=0;const $=U.getAttributes();for(const O in $)if($[O].location>=0){const Z=F[O];let oe=z[O];if(oe===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;B++}return s.attributesNum!==B||s.index!==L}function v(S,P,U,L){const F={},z=P.attributes;let B=0;const $=U.getAttributes();for(const O in $)if($[O].location>=0){let Z=z[O];Z===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),F[O]=oe,B++}s.attributes=F,s.attributesNum=B,s.index=L}function y(){const S=s.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){const U=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;U[S]=1,L[S]===0&&(t.enableVertexAttribArray(S),L[S]=1),F[S]!==P&&(t.vertexAttribDivisor(S,P),F[S]=P)}function g(){const S=s.newAttributes,P=s.enabledAttributes;for(let U=0,L=P.length;U<L;U++)P[U]!==S[U]&&(t.disableVertexAttribArray(U),P[U]=0)}function _(S,P,U,L,F,z,B){B===!0?t.vertexAttribIPointer(S,P,U,F,z):t.vertexAttribPointer(S,P,U,L,F,z)}function x(S,P,U,L){y();const F=L.attributes,z=U.getAttributes(),B=P.defaultAttributeValues;for(const $ in z){const O=z[$];if(O.location>=0){let q=F[$];if(q===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,oe=q.itemSize,xe=e.get(q);if(xe===void 0)continue;const He=xe.buffer,K=xe.type,ie=xe.bytesPerElement,ce=K===t.INT||K===t.UNSIGNED_INT||q.gpuType===Jp;if(q.isInterleavedBufferAttribute){const ue=q.data,De=ue.stride,Ne=q.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<O.locationSize;Be++)d(O.location+Be,ue.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<O.locationSize;Be++)m(O.location+Be);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Be=0;Be<O.locationSize;Be++)_(O.location+Be,oe/O.locationSize,K,Z,De*ie,(Ne+oe/O.locationSize*Be)*ie,ce)}else{if(q.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)d(O.location+ue,q.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ue=0;ue<O.locationSize;ue++)m(O.location+ue);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ue=0;ue<O.locationSize;ue++)_(O.location+ue,oe/O.locationSize,K,Z,oe*ie,oe/O.locationSize*ue*ie,ce)}}else if(B!==void 0){const Z=B[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(O.location,Z);break;case 3:t.vertexAttrib3fv(O.location,Z);break;case 4:t.vertexAttrib4fv(O.location,Z);break;default:t.vertexAttrib1fv(O.location,Z)}}}}g()}function w(){C();for(const S in i){const P=i[S];for(const U in P){const L=P[U];for(const F in L)u(L[F].object),delete L[F];delete P[U]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const U in P){const L=P[U];for(const F in L)u(L[F].object),delete L[F];delete P[U]}delete i[S.id]}function M(S){for(const P in i){const U=i[P];if(U[S.id]===void 0)continue;const L=U[S.id];for(const F in L)u(L[F].object),delete L[F];delete U[S.id]}}function C(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function MT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let v=0;for(let y=0;y<h;y++)v+=u[y];for(let y=0;y<f.length;y++)n.update(v,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ET(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const M=A===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Vi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ni&&!M)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:x,maxSamples:w}}function wT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Nn,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let x=d.clippingState||null;l.value=x,x=u(v,f,_,p);for(let w=0;w!==_;++w)x[w]=n[w];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,v){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const d=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function AT(t){let e=new WeakMap;function n(o,a){return a===gh?o.mapping=Eo:a===_h&&(o.mapping=wo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gh||a===_h)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sx extends ix{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const io=4,i0=[.125,.215,.35,.446,.526,.582],Xr=20,Bf=new sx,r0=new ke;let kf=null,zf=0,Hf=0,Vf=!1;const Gr=(1+Math.sqrt(5))/2,Ds=1/Gr,s0=[new I(-Gr,Ds,0),new I(Gr,Ds,0),new I(-Ds,0,Gr),new I(Ds,0,Gr),new I(0,Gr,-Ds),new I(0,Gr,Ds),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class o0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){kf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kf,zf,Hf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Eo||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:Ja,format:ai,colorSpace:Pr,depthBuffer:!1},r=a0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TT(s)),this._blurMaterial=CT(s,e,n)}return r}_compileMaterial(e){const n=new wt(this._lodPlanes[0],e);this._renderer.compile(n,Bf)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(r0),u.toneMapping=Mr,u.autoClear=!1;const p=new Qy({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new wt(new Io,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(r0),y=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;zl(r,g*_,d>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Eo||e.mapping===wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=c0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=s0[(r-s-1)%s0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Xr;m>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const d=[];let g=0;for(let M=0;M<Xr;++M){const C=M/y,E=Math.exp(-C*C/2);d.push(E),M===0?g+=E:M<m&&(g+=2*E)}for(let M=0;M<d.length;M++)d[M]=d[M]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const x=this._sizeLods[r],w=3*x*(r>_-io?r-_+io:0),A=4*(this._cubeSize-x);zl(n,w,A,3*x,2*x),l.setRenderTarget(n),l.render(h,Bf)}}function TT(t){const e=[],n=[],i=[];let r=t;const s=t-io+1+i0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-io?l=i0[o-t+io-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,y=3,m=2,d=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),x=new Float32Array(d*v*p);for(let A=0;A<p;A++){const M=A%3*2/3-1,C=A>2?0:-1,E=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];g.set(E,y*v*A),_.set(f,m*v*A);const S=[A,A,A,A,A,A];x.set(S,d*v*A)}const w=new bn;w.setAttribute("position",new mn(g,y)),w.setAttribute("uv",new mn(_,m)),w.setAttribute("faceIndex",new mn(x,d)),e.push(w),r>io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function a0(t,e,n){const i=new ls(t,e,n);return i.texture.mapping=Fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CT(t,e,n){const i=new Float32Array(Xr),r=new I(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function l0(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function c0(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function lm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gh||l===_h,u=l===Eo||l===wo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new o0(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new o0(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function RT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Sa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PT(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const y=p[v];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,x=g.length;_<x;_+=3){const w=g[_+0],A=g[_+1],M=g[_+2];f.push(w,A,A,M,M,w)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const w=_+0,A=_+1,M=_+2;f.push(w,A,A,M,M,w)}}else return;const m=new(Yy(f)?tx:ex)(f,1);m.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function LT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];n.update(m,i,1)}function h(f,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,v);let d=0;for(let g=0;g<v;g++)d+=p[g];for(let g=0;g<y.length;g++)n.update(d,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function IT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DT(t,e,n){const i=new WeakMap,r=new et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const M=new Float32Array(w*A*4*h),C=new Ky(M,w,A,h);C.type=Ni,C.needsUpdate=!0;const E=x*4;for(let P=0;P<h;P++){const U=d[P],L=g[P],F=_[P],z=w*A*4*P;for(let B=0;B<U.count;B++){const $=B*E;v===!0&&(r.fromBufferAttribute(U,B),M[z+$+0]=r.x,M[z+$+1]=r.y,M[z+$+2]=r.z,M[z+$+3]=0),y===!0&&(r.fromBufferAttribute(L,B),M[z+$+4]=r.x,M[z+$+5]=r.y,M[z+$+6]=r.z,M[z+$+7]=0),m===!0&&(r.fromBufferAttribute(F,B),M[z+$+8]=r.x,M[z+$+9]=r.y,M[z+$+10]=r.z,M[z+$+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Me(w,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function UT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ox extends pn{constructor(e,n,i,r,s,o,a,l,c,u=po){if(u!==po&&u!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===po&&(i=as),i===void 0&&u===To&&(i=Ao),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ax=new pn,u0=new ox(1,1),lx=new Ky,cx=new xw,ux=new om,f0=[],d0=[],h0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function Do(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=f0[r];if(s===void 0&&(s=new Float32Array(r),f0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zu(t,e){let n=d0[e];n===void 0&&(n=new Int32Array(e),d0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;m0.set(i),t.uniformMatrix2fv(this.addr,!1,m0),Dt(n,i)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;p0.set(i),t.uniformMatrix3fv(this.addr,!1,p0),Dt(n,i)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;h0.set(i),t.uniformMatrix4fv(this.addr,!1,h0),Dt(n,i)}}function VT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(u0.compareFunction=jy,s=u0):s=ax,n.setTexture2D(e||s,r)}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cx,r)}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ux,r)}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||lx,r)}function eC(t){switch(t){case 5126:return NT;case 35664:return FT;case 35665:return OT;case 35666:return BT;case 35674:return kT;case 35675:return zT;case 35676:return HT;case 5124:case 35670:return VT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return $T;case 36294:return jT;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}function tC(t,e){t.uniform1fv(this.addr,e)}function nC(t,e){const n=Do(e,this.size,2);t.uniform2fv(this.addr,n)}function iC(t,e){const n=Do(e,this.size,3);t.uniform3fv(this.addr,n)}function rC(t,e){const n=Do(e,this.size,4);t.uniform4fv(this.addr,n)}function sC(t,e){const n=Do(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oC(t,e){const n=Do(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aC(t,e){const n=Do(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lC(t,e){t.uniform1iv(this.addr,e)}function cC(t,e){t.uniform2iv(this.addr,e)}function uC(t,e){t.uniform3iv(this.addr,e)}function fC(t,e){t.uniform4iv(this.addr,e)}function dC(t,e){t.uniform1uiv(this.addr,e)}function hC(t,e){t.uniform2uiv(this.addr,e)}function pC(t,e){t.uniform3uiv(this.addr,e)}function mC(t,e){t.uniform4uiv(this.addr,e)}function gC(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ax,s[o])}function _C(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cx,s[o])}function vC(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ux,s[o])}function yC(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||lx,s[o])}function xC(t){switch(t){case 5126:return tC;case 35664:return nC;case 35665:return iC;case 35666:return rC;case 35674:return sC;case 35675:return oC;case 35676:return aC;case 5124:case 35670:return lC;case 35667:case 35671:return cC;case 35668:case 35672:return uC;case 35669:case 35673:return fC;case 5125:return dC;case 36294:return hC;case 36295:return pC;case 36296:return mC;case 35678:case 36198:case 36298:case 36306:case 35682:return gC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return yC}}class SC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eC(n.type)}}class MC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xC(n.type)}}class EC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function g0(t,e){t.seq.push(e),t.map[e.id]=e}function wC(t,e,n){const i=t.name,r=i.length;for(Gf.lastIndex=0;;){const s=Gf.exec(i),o=Gf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){g0(n,c===void 0?new SC(a,t,e):new MC(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new EC(a),g0(n,h)),n=h}}}class Lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);wC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function _0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AC=37297;let TC=0;function CC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bC(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===du&&n===fu?i="LinearDisplayP3ToLinearSRGB":e===fu&&n===du&&(i="LinearSRGBToLinearDisplayP3"),t){case Pr:case Bu:return[i,"LinearTransferOETF"];case ii:case rm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function v0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CC(t.getShaderSource(e),o)}else return r}function RC(t,e){const n=bC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function PC(t,e){let n;switch(e){case IE:n="Linear";break;case DE:n="Reinhard";break;case UE:n="OptimizedCineon";break;case NE:n="ACESFilmic";break;case OE:n="AgX";break;case BE:n="Neutral";break;case FE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hl=new I;function LC(){Ze.getLuminanceCoefficients(Hl);const t=Hl.x.toFixed(4),e=Hl.y.toFixed(4),n=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function DC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function UC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function aa(t){return t!==""}function y0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NC=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(t){return t.replace(NC,OC)}const FC=new Map;function OC(t,e){let n=Oe[e];if(n===void 0){const i=FC.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $h(n)}const BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S0(t){return t.replace(BC,kC)}function kC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function M0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===rE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function HC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Eo:case wo:e="ENVMAP_TYPE_CUBE";break;case Fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function GC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Nu:e="ENVMAP_BLENDING_MULTIPLY";break;case PE:e="ENVMAP_BLENDING_MIX";break;case LE:e="ENVMAP_BLENDING_ADD";break}return e}function WC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=zC(n),c=HC(n),u=VC(n),h=GC(n),f=WC(n),p=IC(n),v=DC(s),y=r.createProgram();let m,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(aa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(aa).join(`
`),d.length>0&&(d+=`
`)):(m=[M0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),d=[M0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Mr?PC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,RC("linearToOutputTexel",n.outputColorSpace),LC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(aa).join(`
`)),o=$h(o),o=y0(o,n),o=x0(o,n),a=$h(a),a=y0(a,n),a=x0(a,n),o=S0(o),a=S0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=g+m+o,x=g+d+a,w=_0(r,r.VERTEX_SHADER,_),A=_0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,w),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function M(P){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(y).trim(),L=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(A).trim();let z=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,A);else{const $=v0(r,w,"vertex"),O=v0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+$+`
`+O)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||F==="")&&(B=!1);B&&(P.diagnostics={runnable:z,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(w),r.deleteShader(A),C=new Lc(r,y),E=UC(r,y)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,AC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TC++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}let $C=0;class jC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new YC(e),n.set(e,i)),i}}class YC{constructor(e){this.id=$C++,this.code=e,this.usedTimes=0}}function qC(t,e,n,i,r,s,o){const a=new Zy,l=new jC,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,P,U,L){const F=U.fog,z=L.geometry,B=E.isMeshStandardMaterial?U.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||B),O=$&&$.mapping===Fu?$.image.height:null,q=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=Z!==void 0?Z.length:0;let xe=0;z.morphAttributes.position!==void 0&&(xe=1),z.morphAttributes.normal!==void 0&&(xe=2),z.morphAttributes.color!==void 0&&(xe=3);let He,K,ie,ce;if(q){const Ge=hi[q];He=Ge.vertexShader,K=Ge.fragmentShader}else He=E.vertexShader,K=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const ue=t.getRenderTarget(),De=L.isInstancedMesh===!0,Ne=L.isBatchedMesh===!0,Be=!!E.map,tt=!!E.matcap,N=!!$,dt=!!E.aoMap,Xe=!!E.lightMap,je=!!E.bumpMap,ve=!!E.normalMap,ht=!!E.displacementMap,Pe=!!E.emissiveMap,Ie=!!E.metalnessMap,D=!!E.roughnessMap,b=E.anisotropy>0,j=E.clearcoat>0,Q=E.dispersion>0,te=E.iridescence>0,J=E.sheen>0,Ee=E.transmission>0,ae=b&&!!E.anisotropyMap,de=j&&!!E.clearcoatMap,Ue=j&&!!E.clearcoatNormalMap,re=j&&!!E.clearcoatRoughnessMap,he=te&&!!E.iridescenceMap,Ve=te&&!!E.iridescenceThicknessMap,Ae=J&&!!E.sheenColorMap,me=J&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Le=!!E.specularColorMap,ot=!!E.specularIntensityMap,T=Ee&&!!E.transmissionMap,V=Ee&&!!E.thicknessMap,G=!!E.gradientMap,Y=!!E.alphaMap,ee=E.alphaTest>0,ye=!!E.alphaHash,be=!!E.extensions;let vt=Mr;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(vt=t.toneMapping);const bt={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:He,fragmentShader:K,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Pr,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:tt,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:O,aoMap:dt,lightMap:Xe,bumpMap:je,normalMap:ve,displacementMap:f&&ht,emissiveMap:Pe,normalMapObjectSpace:ve&&E.normalMapType===VE,normalMapTangentSpace:ve&&E.normalMapType===Ou,metalnessMap:Ie,roughnessMap:D,anisotropy:b,anisotropyMap:ae,clearcoat:j,clearcoatMap:de,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:Q,iridescence:te,iridescenceMap:he,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:me,specularMap:Ce,specularColorMap:Le,specularIntensityMap:ot,transmission:Ee,transmissionMap:T,thicknessMap:V,gradientMap:G,opaque:E.transparent===!1&&E.blending===ho&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:ee,alphaHash:ye,combine:E.combine,mapUv:Be&&y(E.map.channel),aoMapUv:dt&&y(E.aoMap.channel),lightMapUv:Xe&&y(E.lightMap.channel),bumpMapUv:je&&y(E.bumpMap.channel),normalMapUv:ve&&y(E.normalMap.channel),displacementMapUv:ht&&y(E.displacementMap.channel),emissiveMapUv:Pe&&y(E.emissiveMap.channel),metalnessMapUv:Ie&&y(E.metalnessMap.channel),roughnessMapUv:D&&y(E.roughnessMap.channel),anisotropyMapUv:ae&&y(E.anisotropyMap.channel),clearcoatMapUv:de&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&y(E.sheenRoughnessMap.channel),specularMapUv:Ce&&y(E.specularMap.channel),specularColorMapUv:Le&&y(E.specularColorMap.channel),specularIntensityMapUv:ot&&y(E.specularIntensityMap.channel),transmissionMapUv:T&&y(E.transmissionMap.channel),thicknessMapUv:V&&y(E.thicknessMap.channel),alphaMapUv:Y&&y(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Be||Y),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qt,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&E.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(g(S,E),_(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function g(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function x(E){const S=v[E.type];let P;if(S){const U=hi[S];P=Iw.clone(U.uniforms)}else P=E.uniforms;return P}function w(E,S){let P;for(let U=0,L=u.length;U<L;U++){const F=u[U];if(F.cacheKey===S){P=F,++P.usedTimes;break}}return P===void 0&&(P=new XC(t,S,E,s),u.push(P)),P}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:C}}function KC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ZC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function E0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function w0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,v,y,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:y,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function a(h,f,p,v,y,m){const d=o(h,f,p,v,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,v,y,m){const d=o(h,f,p,v,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||ZC),i.length>1&&i.sort(f||E0),r.length>1&&r.sort(f||E0)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function JC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new w0,t.set(i,[o])):r>=s.length?(o=new w0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function QC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new ke};break;case"SpotLight":n={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function eb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tb=0;function nb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ib(t){const e=new QC,n=eb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,y=0,m=0,d=0,g=0,_=0,x=0,w=0,A=0,M=0;c.sort(nb);for(let E=0,S=c.length;E<S;E++){const P=c[E],U=P.color,L=P.intensity,F=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*L,h+=U.g*L,f+=U.b*L;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],L);M++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,O=n.get(P);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(U).multiplyScalar(L),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[y]=B;const $=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,$.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=$.matrix,P.castShadow){const O=n.get(P);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=z,x++}y++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(U).multiplyScalar(L),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const $=P.shadow,O=n.get(P);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,i.pointShadow[v]=O,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=B,v++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(L),B.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[d]=B,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==g||C.numPointShadows!==_||C.numSpotShadows!==x||C.numSpotMaps!==w||C.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=M,C.directionalLength=p,C.pointLength=v,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=g,C.numPointShadows=_,C.numSpotShadows=x,C.numSpotMaps=w,C.numLightProbes=M,i.version=tb++)}function l(c,u){let h=0,f=0,p=0,v=0,y=0;const m=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function A0(t){const e=new ib(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new A0(t),e.set(r,[a])):s>=o.length?(a=new A0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class sb extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ob extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cb(t,e,n){let i=new am;const r=new Me,s=new Me,o=new et,a=new sb({depthPacking:HE}),l=new ob,c={},u=n.maxTextureSize,h={[yi]:nn,[nn]:yi,[qt]:qt},f=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:ab,fragmentShader:lb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new bn;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new wt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ny;let d=this.type;this.render=function(A,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Sr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=d!==Ri&&this.type===Ri,F=d===Ri&&this.type!==Ri;for(let z=0,B=A.length;z<B;z++){const $=A[z],O=$.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const q=O.getFrameExtents();if(r.multiply(q),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,O.mapSize.y=s.y)),O.map===null||L===!0||F===!0){const oe=this.type!==Ri?{minFilter:On,magFilter:On}:{};O.map!==null&&O.map.dispose(),O.map=new ls(r.x,r.y,oe),O.map.texture.name=$.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const Z=O.getViewportCount();for(let oe=0;oe<Z;oe++){const xe=O.getViewport(oe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(o),O.updateMatrices($,oe),i=O.getFrustum(),x(M,C,O.camera,$,this.type)}O.isPointLightShadow!==!0&&this.type===Ri&&g(O,C),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,P)};function g(A,M){const C=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ls(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(M,null,C,f,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(M,null,C,p,y,null)}function _(A,M,C,E){let S=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=S.uuid,L=M.uuid;let F=c[U];F===void 0&&(F={},c[U]=F);let z=F[L];z===void 0&&(z=S.clone(),F[L]=z,M.addEventListener("dispose",w)),S=z}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Ri?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=C}return S}function x(A,M,C,E,S){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const L=e.update(A),F=A.material;if(Array.isArray(F)){const z=L.groups;for(let B=0,$=z.length;B<$;B++){const O=z[B],q=F[O.materialIndex];if(q&&q.visible){const Z=_(A,q,E,S);A.onBeforeShadow(t,A,M,C,L,Z,O),t.renderBufferDirect(C,null,L,Z,A,O),A.onAfterShadow(t,A,M,C,L,Z,O)}}}else if(F.visible){const z=_(A,F,E,S);A.onBeforeShadow(t,A,M,C,L,z,null),t.renderBufferDirect(C,null,L,z,A,null),A.onAfterShadow(t,A,M,C,L,z,null)}}const U=A.children;for(let L=0,F=U.length;L<F;L++)x(U[L],M,C,E,S)}function w(A){A.target.removeEventListener("dispose",w);for(const C in c){const E=c[C],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function ub(t){function e(){let T=!1;const V=new et;let G=null;const Y=new et(0,0,0,0);return{setMask:function(ee){G!==ee&&!T&&(t.colorMask(ee,ee,ee,ee),G=ee)},setLocked:function(ee){T=ee},setClear:function(ee,ye,be,vt,bt){bt===!0&&(ee*=vt,ye*=vt,be*=vt),V.set(ee,ye,be,vt),Y.equals(V)===!1&&(t.clearColor(ee,ye,be,vt),Y.copy(V))},reset:function(){T=!1,G=null,Y.set(-1,0,0,0)}}}function n(){let T=!1,V=null,G=null,Y=null;return{setTest:function(ee){ee?ce(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ee){V!==ee&&!T&&(t.depthMask(ee),V=ee)},setFunc:function(ee){if(G!==ee){switch(ee){case EE:t.depthFunc(t.NEVER);break;case wE:t.depthFunc(t.ALWAYS);break;case AE:t.depthFunc(t.LESS);break;case cu:t.depthFunc(t.LEQUAL);break;case TE:t.depthFunc(t.EQUAL);break;case CE:t.depthFunc(t.GEQUAL);break;case bE:t.depthFunc(t.GREATER);break;case RE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}G=ee}},setLocked:function(ee){T=ee},setClear:function(ee){Y!==ee&&(t.clearDepth(ee),Y=ee)},reset:function(){T=!1,V=null,G=null,Y=null}}}function i(){let T=!1,V=null,G=null,Y=null,ee=null,ye=null,be=null,vt=null,bt=null;return{setTest:function(Ge){T||(Ge?ce(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Ge){V!==Ge&&!T&&(t.stencilMask(Ge),V=Ge)},setFunc:function(Ge,Rt,St){(G!==Ge||Y!==Rt||ee!==St)&&(t.stencilFunc(Ge,Rt,St),G=Ge,Y=Rt,ee=St)},setOp:function(Ge,Rt,St){(ye!==Ge||be!==Rt||vt!==St)&&(t.stencilOp(Ge,Rt,St),ye=Ge,be=Rt,vt=St)},setLocked:function(Ge){T=Ge},setClear:function(Ge){bt!==Ge&&(t.clearStencil(Ge),bt=Ge)},reset:function(){T=!1,V=null,G=null,Y=null,ee=null,ye=null,be=null,vt=null,bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,v=!1,y=null,m=null,d=null,g=null,_=null,x=null,w=null,A=new ke(0,0,0),M=0,C=!1,E=null,S=null,P=null,U=null,L=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),z=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=B>=2);let O=null,q={};const Z=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),xe=new et().fromArray(Z),He=new et().fromArray(oe);function K(T,V,G,Y){const ee=new Uint8Array(4),ye=t.createTexture();t.bindTexture(T,ye),t.texParameteri(T,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(T,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<G;be++)T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY?t.texImage3D(V,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ee):t.texImage2D(V+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ee);return ye}const ie={};ie[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(cu),je(!1),ve(Pg),ce(t.CULL_FACE),dt(Sr);function ce(T){c[T]!==!0&&(t.enable(T),c[T]=!0)}function ue(T){c[T]!==!1&&(t.disable(T),c[T]=!1)}function De(T,V){return u[T]!==V?(t.bindFramebuffer(T,V),u[T]=V,T===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=V),T===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=V),!0):!1}function Ne(T,V){let G=f,Y=!1;if(T){G=h.get(V),G===void 0&&(G=[],h.set(V,G));const ee=T.textures;if(G.length!==ee.length||G[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,be=ee.length;ye<be;ye++)G[ye]=t.COLOR_ATTACHMENT0+ye;G.length=ee.length,Y=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Y=!0);Y&&t.drawBuffers(G)}function Be(T){return p!==T?(t.useProgram(T),p=T,!0):!1}const tt={[Wr]:t.FUNC_ADD,[oE]:t.FUNC_SUBTRACT,[aE]:t.FUNC_REVERSE_SUBTRACT};tt[lE]=t.MIN,tt[cE]=t.MAX;const N={[uE]:t.ZERO,[fE]:t.ONE,[dE]:t.SRC_COLOR,[ph]:t.SRC_ALPHA,[vE]:t.SRC_ALPHA_SATURATE,[gE]:t.DST_COLOR,[pE]:t.DST_ALPHA,[hE]:t.ONE_MINUS_SRC_COLOR,[mh]:t.ONE_MINUS_SRC_ALPHA,[_E]:t.ONE_MINUS_DST_COLOR,[mE]:t.ONE_MINUS_DST_ALPHA,[yE]:t.CONSTANT_COLOR,[xE]:t.ONE_MINUS_CONSTANT_COLOR,[SE]:t.CONSTANT_ALPHA,[ME]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(T,V,G,Y,ee,ye,be,vt,bt,Ge){if(T===Sr){v===!0&&(ue(t.BLEND),v=!1);return}if(v===!1&&(ce(t.BLEND),v=!0),T!==sE){if(T!==y||Ge!==C){if((m!==Wr||_!==Wr)&&(t.blendEquation(t.FUNC_ADD),m=Wr,_=Wr),Ge)switch(T){case ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.ONE,t.ONE);break;case Ig:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ig:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}d=null,g=null,x=null,w=null,A.set(0,0,0),M=0,y=T,C=Ge}return}ee=ee||V,ye=ye||G,be=be||Y,(V!==m||ee!==_)&&(t.blendEquationSeparate(tt[V],tt[ee]),m=V,_=ee),(G!==d||Y!==g||ye!==x||be!==w)&&(t.blendFuncSeparate(N[G],N[Y],N[ye],N[be]),d=G,g=Y,x=ye,w=be),(vt.equals(A)===!1||bt!==M)&&(t.blendColor(vt.r,vt.g,vt.b,bt),A.copy(vt),M=bt),y=T,C=!1}function Xe(T,V){T.side===qt?ue(t.CULL_FACE):ce(t.CULL_FACE);let G=T.side===nn;V&&(G=!G),je(G),T.blending===ho&&T.transparent===!1?dt(Sr):dt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const Y=T.stencilWrite;o.setTest(Y),Y&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Pe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(T){E!==T&&(T?t.frontFace(t.CW):t.frontFace(t.CCW),E=T)}function ve(T){T!==nE?(ce(t.CULL_FACE),T!==S&&(T===Pg?t.cullFace(t.BACK):T===iE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),S=T}function ht(T){T!==P&&(z&&t.lineWidth(T),P=T)}function Pe(T,V,G){T?(ce(t.POLYGON_OFFSET_FILL),(U!==V||L!==G)&&(t.polygonOffset(V,G),U=V,L=G)):ue(t.POLYGON_OFFSET_FILL)}function Ie(T){T?ce(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function D(T){T===void 0&&(T=t.TEXTURE0+F-1),O!==T&&(t.activeTexture(T),O=T)}function b(T,V,G){G===void 0&&(O===null?G=t.TEXTURE0+F-1:G=O);let Y=q[G];Y===void 0&&(Y={type:void 0,texture:void 0},q[G]=Y),(Y.type!==T||Y.texture!==V)&&(O!==G&&(t.activeTexture(G),O=G),t.bindTexture(T,V||ie[T]),Y.type=T,Y.texture=V)}function j(){const T=q[O];T!==void 0&&T.type!==void 0&&(t.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ae(T){xe.equals(T)===!1&&(t.scissor(T.x,T.y,T.z,T.w),xe.copy(T))}function me(T){He.equals(T)===!1&&(t.viewport(T.x,T.y,T.z,T.w),He.copy(T))}function Ce(T,V){let G=l.get(V);G===void 0&&(G=new WeakMap,l.set(V,G));let Y=G.get(T);Y===void 0&&(Y=t.getUniformBlockIndex(V,T.name),G.set(T,Y))}function Le(T,V){const Y=l.get(V).get(T);a.get(V)!==Y&&(t.uniformBlockBinding(V,Y,T.__bindingPointIndex),a.set(V,Y))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},O=null,q={},u={},h=new WeakMap,f=[],p=null,v=!1,y=null,m=null,d=null,g=null,_=null,x=null,w=null,A=new ke(0,0,0),M=0,C=!1,E=null,S=null,P=null,U=null,L=null,xe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ue,bindFramebuffer:De,drawBuffers:Ne,useProgram:Be,setBlending:dt,setMaterial:Xe,setFlipSided:je,setCullFace:ve,setLineWidth:ht,setPolygonOffset:Pe,setScissorTest:Ie,activeTexture:D,bindTexture:b,unbindTexture:j,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:he,texImage3D:Ve,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:re,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Ae,viewport:me,reset:ot}}function T0(t,e,n,i){const r=fb(i);switch(n){case zy:return t*e;case Vy:return t*e;case Gy:return t*e*2;case Wy:return t*e/r.components*r.byteLength;case tm:return t*e/r.components*r.byteLength;case Xy:return t*e*2/r.components*r.byteLength;case nm:return t*e*2/r.components*r.byteLength;case Hy:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case im:return t*e*4/r.components*r.byteLength;case Tc:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Eh:return Math.max(t,16)*Math.max(e,8)/4;case xh:case Mh:return Math.max(t,8)*Math.max(e,8)/2;case wh:case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Hh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $y:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wh:case Xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fb(t){switch(t){case Vi:case Oy:return{byteLength:1,components:1};case Ga:case By:case Ja:return{byteLength:2,components:1};case Qp:case em:return{byteLength:2,components:4};case as:case Jp:case Ni:return{byteLength:4,components:1};case ky:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function db(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,b){return p?new OffscreenCanvas(D,b):Xa("canvas")}function y(D,b,j){let Q=1;const te=Ie(D);if((te.width>j||te.height>j)&&(Q=j/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(Q*te.width),Ee=Math.floor(Q*te.height);h===void 0&&(h=v(J,Ee));const ae=b?v(J,Ee):h;return ae.width=J,ae.height=Ee,ae.getContext("2d").drawImage(D,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ee+")."),ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==On&&D.minFilter!==si}function d(D){t.generateMipmap(D)}function g(D,b,j,Q,te=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=b;if(b===t.RED&&(j===t.FLOAT&&(J=t.R32F),j===t.HALF_FLOAT&&(J=t.R16F),j===t.UNSIGNED_BYTE&&(J=t.R8)),b===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.R8UI),j===t.UNSIGNED_SHORT&&(J=t.R16UI),j===t.UNSIGNED_INT&&(J=t.R32UI),j===t.BYTE&&(J=t.R8I),j===t.SHORT&&(J=t.R16I),j===t.INT&&(J=t.R32I)),b===t.RG&&(j===t.FLOAT&&(J=t.RG32F),j===t.HALF_FLOAT&&(J=t.RG16F),j===t.UNSIGNED_BYTE&&(J=t.RG8)),b===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RG8UI),j===t.UNSIGNED_SHORT&&(J=t.RG16UI),j===t.UNSIGNED_INT&&(J=t.RG32UI),j===t.BYTE&&(J=t.RG8I),j===t.SHORT&&(J=t.RG16I),j===t.INT&&(J=t.RG32I)),b===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),b===t.RGBA){const Ee=te?uu:Ze.getTransfer(Q);j===t.FLOAT&&(J=t.RGBA32F),j===t.HALF_FLOAT&&(J=t.RGBA16F),j===t.UNSIGNED_BYTE&&(J=Ee===it?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(D,b){let j;return D?b===null||b===as||b===Ao?j=t.DEPTH24_STENCIL8:b===Ni?j=t.DEPTH32F_STENCIL8:b===Ga&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===as||b===Ao?j=t.DEPTH_COMPONENT24:b===Ni?j=t.DEPTH_COMPONENT32F:b===Ga&&(j=t.DEPTH_COMPONENT16),j}function x(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==On&&D.minFilter!==si?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function w(D){const b=D.target;b.removeEventListener("dispose",w),M(b),b.isVideoTexture&&u.delete(b)}function A(D){const b=D.target;b.removeEventListener("dispose",A),E(b)}function M(D){const b=i.get(D);if(b.__webglInit===void 0)return;const j=D.source,Q=f.get(j);if(Q){const te=Q[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(D),Object.keys(Q).length===0&&f.delete(j)}i.remove(D)}function C(D){const b=i.get(D);t.deleteTexture(b.__webglTexture);const j=D.source,Q=f.get(j);delete Q[b.__cacheKey],o.memory.textures--}function E(D){const b=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let te=0;te<b.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(b.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)t.deleteFramebuffer(b.__webglFramebuffer[Q]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=D.textures;for(let Q=0,te=j.length;Q<te;Q++){const J=i.get(j[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(j[Q])}i.remove(D)}let S=0;function P(){S=0}function U(){const D=S;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),S+=1,D}function L(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function F(D,b){const j=i.get(D);if(D.isVideoTexture&&ht(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(j,D,b);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+b)}function z(D,b){const j=i.get(D);if(D.version>0&&j.__version!==D.version){He(j,D,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+b)}function B(D,b){const j=i.get(D);if(D.version>0&&j.__version!==D.version){He(j,D,b);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+b)}function $(D,b){const j=i.get(D);if(D.version>0&&j.__version!==D.version){K(j,D,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+b)}const O={[vh]:t.REPEAT,[Zr]:t.CLAMP_TO_EDGE,[yh]:t.MIRRORED_REPEAT},q={[On]:t.NEAREST,[kE]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[si]:t.LINEAR,[yf]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},Z={[GE]:t.NEVER,[qE]:t.ALWAYS,[WE]:t.LESS,[jy]:t.LEQUAL,[XE]:t.EQUAL,[YE]:t.GEQUAL,[$E]:t.GREATER,[jE]:t.NOTEQUAL};function oe(D,b){if(b.type===Ni&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===si||b.magFilter===yf||b.magFilter===xl||b.magFilter===Jr||b.minFilter===si||b.minFilter===yf||b.minFilter===xl||b.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,O[b.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,O[b.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,O[b.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,q[b.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,q[b.minFilter]),b.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===On||b.minFilter!==xl&&b.minFilter!==Jr||b.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function xe(D,b){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",w));const Q=b.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const J=L(b);if(J!==D.__cacheKey){te[J]===void 0&&(te[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),te[J].usedTimes++;const Ee=te[D.__cacheKey];Ee!==void 0&&(te[D.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(b)),D.__cacheKey=J,D.__webglTexture=te[J].texture}return j}function He(D,b,j){let Q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=t.TEXTURE_3D);const te=xe(D,b),J=b.source;n.bindTexture(Q,D.__webglTexture,t.TEXTURE0+j);const Ee=i.get(J);if(J.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+j);const ae=Ze.getPrimaries(Ze.workingColorSpace),de=b.colorSpace===ar?null:Ze.getPrimaries(b.colorSpace),Ue=b.colorSpace===ar||ae===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=y(b.image,!1,r.maxTextureSize);re=Pe(b,re);const he=s.convert(b.format,b.colorSpace),Ve=s.convert(b.type);let Ae=g(b.internalFormat,he,Ve,b.colorSpace,b.isVideoTexture);oe(Q,b);let me;const Ce=b.mipmaps,Le=b.isVideoTexture!==!0,ot=Ee.__version===void 0||te===!0,T=J.dataReady,V=x(b,re);if(b.isDepthTexture)Ae=_(b.format===To,b.type),ot&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Ae,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,he,Ve,null));else if(b.isDataTexture)if(Ce.length>0){Le&&ot&&n.texStorage2D(t.TEXTURE_2D,V,Ae,Ce[0].width,Ce[0].height);for(let G=0,Y=Ce.length;G<Y;G++)me=Ce[G],Le?T&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,me.width,me.height,he,Ve,me.data):n.texImage2D(t.TEXTURE_2D,G,Ae,me.width,me.height,0,he,Ve,me.data);b.generateMipmaps=!1}else Le?(ot&&n.texStorage2D(t.TEXTURE_2D,V,Ae,re.width,re.height),T&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,he,Ve,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,he,Ve,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Le&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Ae,Ce[0].width,Ce[0].height,re.depth);for(let G=0,Y=Ce.length;G<Y;G++)if(me=Ce[G],b.format!==ai)if(he!==null)if(Le){if(T)if(b.layerUpdates.size>0){const ee=T0(me.width,me.height,b.format,b.type);for(const ye of b.layerUpdates){const be=me.data.subarray(ye*ee/me.data.BYTES_PER_ELEMENT,(ye+1)*ee/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,ye,me.width,me.height,1,he,be,0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,re.depth,he,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Ae,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?T&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,re.depth,he,Ve,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Ae,me.width,me.height,re.depth,0,he,Ve,me.data)}else{Le&&ot&&n.texStorage2D(t.TEXTURE_2D,V,Ae,Ce[0].width,Ce[0].height);for(let G=0,Y=Ce.length;G<Y;G++)me=Ce[G],b.format!==ai?he!==null?Le?T&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,me.width,me.height,he,me.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?T&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,me.width,me.height,he,Ve,me.data):n.texImage2D(t.TEXTURE_2D,G,Ae,me.width,me.height,0,he,Ve,me.data)}else if(b.isDataArrayTexture)if(Le){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Ae,re.width,re.height,re.depth),T)if(b.layerUpdates.size>0){const G=T0(re.width,re.height,b.format,b.type);for(const Y of b.layerUpdates){const ee=re.data.subarray(Y*G/re.data.BYTES_PER_ELEMENT,(Y+1)*G/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,re.width,re.height,1,he,Ve,ee)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Ve,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,he,Ve,re.data);else if(b.isData3DTexture)Le?(ot&&n.texStorage3D(t.TEXTURE_3D,V,Ae,re.width,re.height,re.depth),T&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Ve,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,he,Ve,re.data);else if(b.isFramebufferTexture){if(ot)if(Le)n.texStorage2D(t.TEXTURE_2D,V,Ae,re.width,re.height);else{let G=re.width,Y=re.height;for(let ee=0;ee<V;ee++)n.texImage2D(t.TEXTURE_2D,ee,Ae,G,Y,0,he,Ve,null),G>>=1,Y>>=1}}else if(Ce.length>0){if(Le&&ot){const G=Ie(Ce[0]);n.texStorage2D(t.TEXTURE_2D,V,Ae,G.width,G.height)}for(let G=0,Y=Ce.length;G<Y;G++)me=Ce[G],Le?T&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,he,Ve,me):n.texImage2D(t.TEXTURE_2D,G,Ae,he,Ve,me);b.generateMipmaps=!1}else if(Le){if(ot){const G=Ie(re);n.texStorage2D(t.TEXTURE_2D,V,Ae,G.width,G.height)}T&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Ve,re)}else n.texImage2D(t.TEXTURE_2D,0,Ae,he,Ve,re);m(b)&&d(Q),Ee.__version=J.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function K(D,b,j){if(b.image.length!==6)return;const Q=xe(D,b),te=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+j);const J=i.get(te);if(te.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+j);const Ee=Ze.getPrimaries(Ze.workingColorSpace),ae=b.colorSpace===ar?null:Ze.getPrimaries(b.colorSpace),de=b.colorSpace===ar||Ee===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!Ue&&!re?he[Y]=y(b.image[Y],!0,r.maxCubemapSize):he[Y]=re?b.image[Y].image:b.image[Y],he[Y]=Pe(b,he[Y]);const Ve=he[0],Ae=s.convert(b.format,b.colorSpace),me=s.convert(b.type),Ce=g(b.internalFormat,Ae,me,b.colorSpace),Le=b.isVideoTexture!==!0,ot=J.__version===void 0||Q===!0,T=te.dataReady;let V=x(b,Ve);oe(t.TEXTURE_CUBE_MAP,b);let G;if(Ue){Le&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Ce,Ve.width,Ve.height);for(let Y=0;Y<6;Y++){G=he[Y].mipmaps;for(let ee=0;ee<G.length;ee++){const ye=G[ee];b.format!==ai?Ae!==null?Le?T&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee,0,0,ye.width,ye.height,Ae,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee,0,0,ye.width,ye.height,Ae,me,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee,Ce,ye.width,ye.height,0,Ae,me,ye.data)}}}else{if(G=b.mipmaps,Le&&ot){G.length>0&&V++;const Y=Ie(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Ce,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(re){Le?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Ae,me,he[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ce,he[Y].width,he[Y].height,0,Ae,me,he[Y].data);for(let ee=0;ee<G.length;ee++){const be=G[ee].image[Y].image;Le?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee+1,0,0,be.width,be.height,Ae,me,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee+1,Ce,be.width,be.height,0,Ae,me,be.data)}}else{Le?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ae,me,he[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ce,Ae,me,he[Y]);for(let ee=0;ee<G.length;ee++){const ye=G[ee];Le?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee+1,0,0,Ae,me,ye.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee+1,Ce,Ae,me,ye.image[Y])}}}m(b)&&d(t.TEXTURE_CUBE_MAP),J.__version=te.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ie(D,b,j,Q,te,J){const Ee=s.convert(j.format,j.colorSpace),ae=s.convert(j.type),de=g(j.internalFormat,Ee,ae,j.colorSpace);if(!i.get(b).__hasExternalTextures){const re=Math.max(1,b.width>>J),he=Math.max(1,b.height>>J);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,J,de,re,he,b.depth,0,Ee,ae,null):n.texImage2D(te,J,de,re,he,0,Ee,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,i.get(j).__webglTexture,0,je(b)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,i.get(j).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(D,b,j){if(t.bindRenderbuffer(t.RENDERBUFFER,D),b.depthBuffer){const Q=b.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=_(b.stencilBuffer,te),Ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=je(b);ve(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,J,b.width,b.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,J,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,J,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,D)}else{const Q=b.textures;for(let te=0;te<Q.length;te++){const J=Q[te],Ee=s.convert(J.format,J.colorSpace),ae=s.convert(J.type),de=g(J.internalFormat,Ee,ae,J.colorSpace),Ue=je(b);j&&ve(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,de,b.width,b.height):ve(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const Q=i.get(b.depthTexture).__webglTexture,te=je(b);if(b.depthTexture.format===po)ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(b.depthTexture.format===To)ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function De(D){const b=i.get(D),j=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,D)}else if(j){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=t.createRenderbuffer(),ce(b.__webglDepthbuffer[Q],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),ce(b.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(D,b,j){const Q=i.get(D);b!==void 0&&ie(Q.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&De(D)}function Be(D){const b=D.texture,j=i.get(D),Q=i.get(b);D.addEventListener("dispose",A);const te=D.textures,J=D.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=b.version,o.memory.textures++),J){j.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[ae]=[];for(let de=0;de<b.mipmaps.length;de++)j.__webglFramebuffer[ae][de]=t.createFramebuffer()}else j.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)j.__webglFramebuffer[ae]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ae=0,de=te.length;ae<de;ae++){const Ue=i.get(te[ae]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&ve(D)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ae=0;ae<te.length;ae++){const de=te[ae];j.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[ae]);const Ue=s.convert(de.format,de.colorSpace),re=s.convert(de.type),he=g(de.internalFormat,Ue,re,de.colorSpace,D.isXRRenderTarget===!0),Ve=je(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,he,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,j.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(j.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,b);for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ie(j.__webglFramebuffer[ae][de],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else ie(j.__webglFramebuffer[ae],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ae=0,de=te.length;ae<de;ae++){const Ue=te[ae],re=i.get(Ue);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,Ue),ie(j.__webglFramebuffer,D,Ue,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ue)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,Q.__webglTexture),oe(ae,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ie(j.__webglFramebuffer[de],D,b,t.COLOR_ATTACHMENT0,ae,de);else ie(j.__webglFramebuffer,D,b,t.COLOR_ATTACHMENT0,ae,0);m(b)&&d(ae),n.unbindTexture()}D.depthBuffer&&De(D)}function tt(D){const b=D.textures;for(let j=0,Q=b.length;j<Q;j++){const te=b[j];if(m(te)){const J=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(te).__webglTexture;n.bindTexture(J,Ee),d(J),n.unbindTexture()}}}const N=[],dt=[];function Xe(D){if(D.samples>0){if(ve(D)===!1){const b=D.textures,j=D.width,Q=D.height;let te=t.COLOR_BUFFER_BIT;const J=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(D),ae=b.length>1;if(ae)for(let de=0;de<b.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let de=0;de<b.length;de++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[de]);const Ue=i.get(b[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,j,Q,0,0,j,Q,te,t.NEAREST),l===!0&&(N.length=0,dt.length=0,N.push(t.COLOR_ATTACHMENT0+de),D.depthBuffer&&D.resolveDepthBuffer===!1&&(N.push(J),dt.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<b.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[de]);const Ue=i.get(b[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function je(D){return Math.min(r.maxSamples,D.samples)}function ve(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function Pe(D,b){const j=D.colorSpace,Q=D.format,te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Pr&&j!==ar&&(Ze.getTransfer(j)===it?(Q!==ai||te!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function Ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=Ne,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ve}function hb(t,e){function n(i,r=ar){let s;const o=Ze.getTransfer(r);if(i===Vi)return t.UNSIGNED_BYTE;if(i===Qp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===em)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ky)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Oy)return t.BYTE;if(i===By)return t.SHORT;if(i===Ga)return t.UNSIGNED_SHORT;if(i===Jp)return t.INT;if(i===as)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===Ja)return t.HALF_FLOAT;if(i===zy)return t.ALPHA;if(i===Hy)return t.RGB;if(i===ai)return t.RGBA;if(i===Vy)return t.LUMINANCE;if(i===Gy)return t.LUMINANCE_ALPHA;if(i===po)return t.DEPTH_COMPONENT;if(i===To)return t.DEPTH_STENCIL;if(i===Wy)return t.RED;if(i===tm)return t.RED_INTEGER;if(i===Xy)return t.RG;if(i===nm)return t.RG_INTEGER;if(i===im)return t.RGBA_INTEGER;if(i===Tc||i===Cc||i===bc||i===Rc)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===Sh||i===Mh||i===Eh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===Ah||i===Th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wh||i===Ah)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Th)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ch||i===bh||i===Rh||i===Ph||i===Lh||i===Ih||i===Dh||i===Uh||i===Nh||i===Fh||i===Oh||i===Bh||i===kh||i===zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ch)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ph)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ih)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===Hh||i===Vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pc)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$y||i===Gh||i===Wh||i===Xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class pb extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class la extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class Wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new la;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new pn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ar({vertexShader:gb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wt(new ku(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yb extends ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const y=new vb,m=n.getContextAttributes();let d=null,g=null;const _=[],x=[],w=new Me;let A=null;const M=new Un;M.layers.enable(1),M.viewport=new et;const C=new Un;C.layers.enable(2),C.viewport=new et;const E=[M,C],S=new pb;S.layers.enable(1),S.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=_[K];return ie===void 0&&(ie=new Wf,_[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=_[K];return ie===void 0&&(ie=new Wf,_[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=_[K];return ie===void 0&&(ie=new Wf,_[K]=ie),ie.getHandSpace()};function L(K){const ie=x.indexOf(K.inputSource);if(ie===-1)return;const ce=_[ie];ce!==void 0&&(ce.update(K.inputSource,K.frame,c||o),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",z);for(let K=0;K<_.length;K++){const ie=x[K];ie!==null&&(x[K]=null,_[K].disconnect(ie))}P=null,U=null,y.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",F),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ls(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ce=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?To:po,ce=m.stencil?Ao:as);const De={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new ls(f.textureWidth,f.textureHeight,{format:ai,type:Vi,depthTexture:new ox(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(K){for(let ie=0;ie<K.removed.length;ie++){const ce=K.removed[ie],ue=x.indexOf(ce);ue>=0&&(x[ue]=null,_[ue].disconnect(ce))}for(let ie=0;ie<K.added.length;ie++){const ce=K.added[ie];let ue=x.indexOf(ce);if(ue===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=x.length){x.push(ce),ue=Ne;break}else if(x[Ne]===null){x[Ne]=ce,ue=Ne;break}if(ue===-1)break}const De=_[ue];De&&De.connect(ce)}}const B=new I,$=new I;function O(K,ie,ce){B.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const ue=B.distanceTo($),De=ie.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,Be=De[14]/(De[10]-1),tt=De[14]/(De[10]+1),N=(De[9]+1)/De[5],dt=(De[9]-1)/De[5],Xe=(De[8]-1)/De[0],je=(Ne[8]+1)/Ne[0],ve=Be*Xe,ht=Be*je,Pe=ue/(-Xe+je),Ie=Pe*-Xe;ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ie),K.translateZ(Pe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const D=Be+Pe,b=tt+Pe,j=ve-Ie,Q=ht+(ue-Ie),te=N*tt/b*D,J=dt*tt/b*D;K.projectionMatrix.makePerspective(j,Q,te,J,D,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function q(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;y.texture!==null&&(K.near=y.depthNear,K.far=y.depthFar),S.near=C.near=M.near=K.near,S.far=C.far=M.far=K.far,(P!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,U=S.far,M.near=P,M.far=U,C.near=P,C.far=U,M.updateProjectionMatrix(),C.updateProjectionMatrix(),K.updateProjectionMatrix());const ie=K.parent,ce=S.cameras;q(S,ie);for(let ue=0;ue<ce.length;ue++)q(ce[ue],ie);ce.length===2?O(S,M,C):S.projectionMatrix.copy(M.projectionMatrix),Z(K,S,ie)};function Z(K,ie,ce){ce===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Wa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function xe(K,ie){if(u=ie.getViewerPose(c||o),v=ie,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ue=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ne=0;Ne<ce.length;Ne++){const Be=ce[Ne];let tt=null;if(p!==null)tt=p.getViewport(Be);else{const dt=h.getViewSubImage(f,Be);tt=dt.viewport,Ne===0&&(e.setRenderTargetTextures(g,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(g))}let N=E[Ne];N===void 0&&(N=new Un,N.layers.enable(Ne),N.viewport=new et,E[Ne]=N),N.matrix.fromArray(Be.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Be.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(tt.x,tt.y,tt.width,tt.height),Ne===0&&(S.matrix.copy(N.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(N)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ne=h.getDepthInformation(ce[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let ce=0;ce<_.length;ce++){const ue=x[ce],De=_[ce];ue!==null&&De!==void 0&&De.update(ue,ie,c||o)}oe&&oe(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const He=new rx;He.setAnimationLoop(xe),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}const Br=new Xn,xb=new $e;function Sb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,nx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,_,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),_=g.envMap,x=g.envMapRotation;_&&(m.envMap.value=_,Br.copy(x),Br.x*=-1,Br.y*=-1,Br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Br)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Mb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function c(g,_){let x=r[g.id];x===void 0&&(v(g),x=u(g),r[g.id]=x,g.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(g,w);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function u(g){const _=h();g.__bindingPointIndex=_;const x=t.createBuffer(),w=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,w,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],x=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,M=x.length;A<M;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=C.length;E<S;E++){const P=C[E];if(p(P,A,E,w)===!0){const U=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let z=0;z<L.length;z++){const B=L[z],$=y(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,U+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,x,w){const A=g.value,M=_+"_"+x;if(w[M]===void 0)return typeof A=="number"||typeof A=="boolean"?w[M]=A:w[M]=A.clone(),!0;{const C=w[M];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return w[M]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function v(g){const _=g.uniforms;let x=0;const w=16;for(let M=0,C=_.length;M<C;M++){const E=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,P=E.length;S<P;S++){const U=E[S],L=Array.isArray(U.value)?U.value:[U.value];for(let F=0,z=L.length;F<z;F++){const B=L[F],$=y(B),O=x%w,q=O%$.boundary,Z=O+q;x+=q,Z!==0&&w-Z<$.storage&&(x+=w-Z),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=$.storage}}}const A=x%w;return A>0&&(x+=w-A),g.__size=x,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Eb{constructor(e={}){const{canvas:n=hw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Mr,this.toneMappingExposure=1;const _=this;let x=!1,w=0,A=0,M=null,C=-1,E=null;const S=new et,P=new et;let U=null;const L=new ke(0);let F=0,z=n.width,B=n.height,$=1,O=null,q=null;const Z=new et(0,0,z,B),oe=new et(0,0,z,B);let xe=!1;const He=new am;let K=!1,ie=!1;const ce=new $e,ue=new I,De=new et,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function tt(){return M===null?$:1}let N=i;function dt(R,k){return n.getContext(R,k)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zp}`),n.addEventListener("webglcontextlost",G,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",ee,!1),N===null){const k="webgl2";if(N=dt(k,R),N===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,je,ve,ht,Pe,Ie,D,b,j,Q,te,J,Ee,ae,de,Ue,re,he,Ve,Ae,me,Ce,Le,ot;function T(){Xe=new RT(N),Xe.init(),Ce=new hb(N,Xe),je=new ET(N,Xe,e,Ce),ve=new ub(N),ht=new IT(N),Pe=new KC,Ie=new db(N,Xe,ve,Pe,je,Ce,ht),D=new AT(_),b=new bT(_),j=new kw(N),Le=new ST(N,j),Q=new PT(N,j,ht,Le),te=new UT(N,Q,j,ht),Ve=new DT(N,je,Ie),Ue=new wT(Pe),J=new qC(_,D,b,Xe,je,Le,Ue),Ee=new Sb(_,Pe),ae=new JC,de=new rb(Xe),he=new xT(_,D,b,ve,te,f,l),re=new cb(_,te,je),ot=new Mb(N,ht,je,ve),Ae=new MT(N,Xe,ht),me=new LT(N,Xe,ht),ht.programs=J.programs,_.capabilities=je,_.extensions=Xe,_.properties=Pe,_.renderLists=ae,_.shadowMap=re,_.state=ve,_.info=ht}T();const V=new yb(_,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(z,B,!1))},this.getSize=function(R){return R.set(z,B)},this.setSize=function(R,k,W=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,B=k,n.width=Math.floor(R*$),n.height=Math.floor(k*$),W===!0&&(n.style.width=R+"px",n.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(z*$,B*$).floor()},this.setDrawingBufferSize=function(R,k,W){z=R,B=k,$=W,n.width=Math.floor(R*W),n.height=Math.floor(k*W),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,k,W,X){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,k,W,X),ve.viewport(S.copy(Z).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,k,W,X){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,k,W,X),ve.scissor(P.copy(oe).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){ve.setScissorTest(xe=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(R=!0,k=!0,W=!0){let X=0;if(R){let H=!1;if(M!==null){const se=M.texture.format;H=se===im||se===nm||se===tm}if(H){const se=M.texture.type,fe=se===Vi||se===as||se===Ga||se===Ao||se===Qp||se===em,ge=he.getClearColor(),_e=he.getClearAlpha(),Te=ge.r,Re=ge.g,we=ge.b;fe?(p[0]=Te,p[1]=Re,p[2]=we,p[3]=_e,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=Te,v[1]=Re,v[2]=we,v[3]=_e,N.clearBufferiv(N.COLOR,0,v))}else X|=N.COLOR_BUFFER_BIT}k&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",G,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),ae.dispose(),de.dispose(),Pe.dispose(),D.dispose(),b.dispose(),te.dispose(),Le.dispose(),ot.dispose(),J.dispose(),V.dispose(),V.removeEventListener("sessionstart",St),V.removeEventListener("sessionend",Xi),Ot.stop()};function G(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=ht.autoReset,k=re.enabled,W=re.autoUpdate,X=re.needsUpdate,H=re.type;T(),ht.autoReset=R,re.enabled=k,re.autoUpdate=W,re.needsUpdate=X,re.type=H}function ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){const k=R.target;k.removeEventListener("dispose",ye),be(k)}function be(R){vt(R),Pe.remove(R)}function vt(R){const k=Pe.get(R).programs;k!==void 0&&(k.forEach(function(W){J.releaseProgram(W)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,W,X,H,se){k===null&&(k=Ne);const fe=H.isMesh&&H.matrixWorld.determinant()<0,ge=Tx(R,k,W,X,H);ve.setMaterial(X,fe);let _e=W.index,Te=1;if(X.wireframe===!0){if(_e=Q.getWireframeAttribute(W),_e===void 0)return;Te=2}const Re=W.drawRange,we=W.attributes.position;let Ye=Re.start*Te,pt=(Re.start+Re.count)*Te;se!==null&&(Ye=Math.max(Ye,se.start*Te),pt=Math.min(pt,(se.start+se.count)*Te)),_e!==null?(Ye=Math.max(Ye,0),pt=Math.min(pt,_e.count)):we!=null&&(Ye=Math.max(Ye,0),pt=Math.min(pt,we.count));const mt=pt-Ye;if(mt<0||mt===1/0)return;Le.setup(H,X,ge,W,_e);let gn,qe=Ae;if(_e!==null&&(gn=j.get(_e),qe=me,qe.setIndex(gn)),H.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*tt()),qe.setMode(N.LINES)):qe.setMode(N.TRIANGLES);else if(H.isLine){let Se=X.linewidth;Se===void 0&&(Se=1),ve.setLineWidth(Se*tt()),H.isLineSegments?qe.setMode(N.LINES):H.isLineLoop?qe.setMode(N.LINE_LOOP):qe.setMode(N.LINE_STRIP)}else H.isPoints?qe.setMode(N.POINTS):H.isSprite&&qe.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)qe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))qe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Se=H._multiDrawStarts,Bt=H._multiDrawCounts,Ke=H._multiDrawCount,jn=_e?j.get(_e).bytesPerElement:1,hs=Pe.get(X).currentProgram.getUniforms();for(let _n=0;_n<Ke;_n++)hs.setValue(N,"_gl_DrawID",_n),qe.render(Se[_n]/jn,Bt[_n])}else if(H.isInstancedMesh)qe.renderInstances(Ye,mt,H.count);else if(W.isInstancedBufferGeometry){const Se=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Bt=Math.min(W.instanceCount,Se);qe.renderInstances(Ye,mt,Bt)}else qe.render(Ye,mt)};function bt(R,k,W){R.transparent===!0&&R.side===qt&&R.forceSinglePass===!1?(R.side=nn,R.needsUpdate=!0,nl(R,k,W),R.side=yi,R.needsUpdate=!0,nl(R,k,W),R.side=qt):nl(R,k,W)}this.compile=function(R,k,W=null){W===null&&(W=R),m=de.get(W),m.init(k),g.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==W&&R.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const X=new Set;return R.traverse(function(H){const se=H.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const ge=se[fe];bt(ge,W,H),X.add(ge)}else bt(se,W,H),X.add(se)}),g.pop(),m=null,X},this.compileAsync=function(R,k,W=null){const X=this.compile(R,k,W);return new Promise(H=>{function se(){if(X.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){H(R);return}setTimeout(se,10)}Xe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ge=null;function Rt(R){Ge&&Ge(R)}function St(){Ot.stop()}function Xi(){Ot.start()}const Ot=new rx;Ot.setAnimationLoop(Rt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(R){Ge=R,V.setAnimationLoop(R),R===null?Ot.stop():Ot.start()},V.addEventListener("sessionstart",St),V.addEventListener("sessionend",Xi),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(k),k=V.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,k,M),m=de.get(R,g.length),m.init(k),g.push(m),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),He.setFromProjectionMatrix(ce),ie=this.localClippingEnabled,K=Ue.init(this.clippingPlanes,ie),y=ae.get(R,d.length),y.init(),d.push(y),V.enabled===!0&&V.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&xi(se,k,-1/0,_.sortObjects)}xi(R,k,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(O,q),Be=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Be&&he.addToRenderList(y,R),this.info.render.frame++,K===!0&&Ue.beginShadows();const W=m.state.shadowsArray;re.render(W,R,k),K===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=y.opaque,H=y.transmissive;if(m.setupLights(),k.isArrayCamera){const se=k.cameras;if(H.length>0)for(let fe=0,ge=se.length;fe<ge;fe++){const _e=se[fe];No(X,H,R,_e)}Be&&he.render(R);for(let fe=0,ge=se.length;fe<ge;fe++){const _e=se[fe];Ir(y,R,_e,_e.viewport)}}else H.length>0&&No(X,H,R,k),Be&&he.render(R),Ir(y,R,k);M!==null&&(Ie.updateMultisampleRenderTarget(M),Ie.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(_,R,k),Le.resetDefaultState(),C=-1,E=null,g.pop(),g.length>0?(m=g[g.length-1],K===!0&&Ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function xi(R,k,W,X){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||He.intersectsSprite(R)){X&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ce);const fe=te.update(R),ge=R.material;ge.visible&&y.push(R,fe,ge,W,De.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||He.intersectsObject(R))){const fe=te.update(R),ge=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),De.copy(fe.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(ce)),Array.isArray(ge)){const _e=fe.groups;for(let Te=0,Re=_e.length;Te<Re;Te++){const we=_e[Te],Ye=ge[we.materialIndex];Ye&&Ye.visible&&y.push(R,fe,Ye,W,De.z,we)}}else ge.visible&&y.push(R,fe,ge,W,De.z,null)}}const se=R.children;for(let fe=0,ge=se.length;fe<ge;fe++)xi(se[fe],k,W,X)}function Ir(R,k,W,X){const H=R.opaque,se=R.transmissive,fe=R.transparent;m.setupLightsView(W),K===!0&&Ue.setGlobalState(_.clippingPlanes,W),X&&ve.viewport(S.copy(X)),H.length>0&&tl(H,k,W),se.length>0&&tl(se,k,W),fe.length>0&&tl(fe,k,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function No(R,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new ls(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Ja:Vi,minFilter:Jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=m.state.transmissionRenderTarget[X.id],fe=X.viewport||S;se.setSize(fe.z,fe.w);const ge=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(L),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),Be&&he.render(W);const _e=_.toneMapping;_.toneMapping=Mr;const Te=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),K===!0&&Ue.setGlobalState(_.clippingPlanes,X),tl(R,W,X),Ie.updateMultisampleRenderTarget(se),Ie.updateRenderTargetMipmap(se),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let we=0,Ye=k.length;we<Ye;we++){const pt=k[we],mt=pt.object,gn=pt.geometry,qe=pt.material,Se=pt.group;if(qe.side===qt&&mt.layers.test(X.layers)){const Bt=qe.side;qe.side=nn,qe.needsUpdate=!0,_m(mt,W,X,gn,qe,Se),qe.side=Bt,qe.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(se),Ie.updateRenderTargetMipmap(se))}_.setRenderTarget(ge),_.setClearColor(L,F),Te!==void 0&&(X.viewport=Te),_.toneMapping=_e}function tl(R,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,se=R.length;H<se;H++){const fe=R[H],ge=fe.object,_e=fe.geometry,Te=X===null?fe.material:X,Re=fe.group;ge.layers.test(W.layers)&&_m(ge,k,W,_e,Te,Re)}}function _m(R,k,W,X,H,se){R.onBeforeRender(_,k,W,X,H,se),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.transparent===!0&&H.side===qt&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,_.renderBufferDirect(W,k,X,H,R,se),H.side=yi,H.needsUpdate=!0,_.renderBufferDirect(W,k,X,H,R,se),H.side=qt):_.renderBufferDirect(W,k,X,H,R,se),R.onAfterRender(_,k,W,X,H,se)}function nl(R,k,W){k.isScene!==!0&&(k=Ne);const X=Pe.get(R),H=m.state.lights,se=m.state.shadowsArray,fe=H.state.version,ge=J.getParameters(R,H.state,se,k,W),_e=J.getProgramCacheKey(ge);let Te=X.programs;X.environment=R.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(R.isMeshStandardMaterial?b:D).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Te===void 0&&(R.addEventListener("dispose",ye),Te=new Map,X.programs=Te);let Re=Te.get(_e);if(Re!==void 0){if(X.currentProgram===Re&&X.lightsStateVersion===fe)return ym(R,ge),Re}else ge.uniforms=J.getUniforms(R),R.onBeforeCompile(ge,_),Re=J.acquireProgram(ge,_e),Te.set(_e,Re),X.uniforms=ge.uniforms;const we=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(we.clippingPlanes=Ue.uniform),ym(R,ge),X.needsLights=bx(R),X.lightsStateVersion=fe,X.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.directionalShadowMap.value=H.state.directionalShadowMap,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotShadowMap.value=H.state.spotShadowMap,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMap.value=H.state.pointShadowMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Re,X.uniformsList=null,Re}function vm(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Lc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function ym(R,k){const W=Pe.get(R);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Tx(R,k,W,X,H){k.isScene!==!0&&(k=Ne),Ie.resetTextureUnits();const se=k.fog,fe=X.isMeshStandardMaterial?k.environment:null,ge=M===null?_.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Pr,_e=(X.isMeshStandardMaterial?b:D).get(X.envMap||fe),Te=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),we=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color;let mt=Mr;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(mt=_.toneMapping);const gn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,qe=gn!==void 0?gn.length:0,Se=Pe.get(X),Bt=m.state.lights;if(K===!0&&(ie===!0||R!==E)){const Rn=R===E&&X.id===C;Ue.setState(X,R,Rn)}let Ke=!1;X.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Bt.state.version||Se.outputColorSpace!==ge||H.isBatchedMesh&&Se.batching===!1||!H.isBatchedMesh&&Se.batching===!0||H.isBatchedMesh&&Se.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Se.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Se.instancing===!1||!H.isInstancedMesh&&Se.instancing===!0||H.isSkinnedMesh&&Se.skinning===!1||!H.isSkinnedMesh&&Se.skinning===!0||H.isInstancedMesh&&Se.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Se.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Se.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Se.instancingMorph===!1&&H.morphTexture!==null||Se.envMap!==_e||X.fog===!0&&Se.fog!==se||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ue.numPlanes||Se.numIntersection!==Ue.numIntersection)||Se.vertexAlphas!==Te||Se.vertexTangents!==Re||Se.morphTargets!==we||Se.morphNormals!==Ye||Se.morphColors!==pt||Se.toneMapping!==mt||Se.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Se.__version=X.version);let jn=Se.currentProgram;Ke===!0&&(jn=nl(X,k,H));let hs=!1,_n=!1,Gu=!1;const Mt=jn.getUniforms(),$i=Se.uniforms;if(ve.useProgram(jn.program)&&(hs=!0,_n=!0,Gu=!0),X.id!==C&&(C=X.id,_n=!0),hs||E!==R){Mt.setValue(N,"projectionMatrix",R.projectionMatrix),Mt.setValue(N,"viewMatrix",R.matrixWorldInverse);const Rn=Mt.map.cameraPosition;Rn!==void 0&&Rn.setValue(N,ue.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&Mt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,_n=!0,Gu=!0)}if(H.isSkinnedMesh){Mt.setOptional(N,H,"bindMatrix"),Mt.setOptional(N,H,"bindMatrixInverse");const Rn=H.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Mt.setValue(N,"boneTexture",Rn.boneTexture,Ie))}H.isBatchedMesh&&(Mt.setOptional(N,H,"batchingTexture"),Mt.setValue(N,"batchingTexture",H._matricesTexture,Ie),Mt.setOptional(N,H,"batchingIdTexture"),Mt.setValue(N,"batchingIdTexture",H._indirectTexture,Ie),Mt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(N,"batchingColorTexture",H._colorsTexture,Ie));const Wu=W.morphAttributes;if((Wu.position!==void 0||Wu.normal!==void 0||Wu.color!==void 0)&&Ve.update(H,W,jn),(_n||Se.receiveShadow!==H.receiveShadow)&&(Se.receiveShadow=H.receiveShadow,Mt.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($i.envMap.value=_e,$i.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&($i.envMapIntensity.value=k.environmentIntensity),_n&&(Mt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Se.needsLights&&Cx($i,Gu),se&&X.fog===!0&&Ee.refreshFogUniforms($i,se),Ee.refreshMaterialUniforms($i,X,$,B,m.state.transmissionRenderTarget[R.id]),Lc.upload(N,vm(Se),$i,Ie)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Lc.upload(N,vm(Se),$i,Ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mt.setValue(N,"center",H.center),Mt.setValue(N,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(N,"normalMatrix",H.normalMatrix),Mt.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Rn=X.uniformsGroups;for(let Xu=0,Rx=Rn.length;Xu<Rx;Xu++){const xm=Rn[Xu];ot.update(xm,jn),ot.bind(xm,jn)}}return jn}function Cx(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function bx(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,k,W){Pe.get(R.texture).__webglTexture=k,Pe.get(R.depthTexture).__webglTexture=W;const X=Pe.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const W=Pe.get(R);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,W=0){M=R,w=k,A=W;let X=!0,H=null,se=!1,fe=!1;if(R){const _e=Pe.get(R);_e.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(N.FRAMEBUFFER,null),X=!1):_e.__webglFramebuffer===void 0?Ie.setupRenderTarget(R):_e.__hasExternalTextures&&Ie.rebindTextures(R,Pe.get(R.texture).__webglTexture,Pe.get(R.depthTexture).__webglTexture);const Te=R.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const Re=Pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Re[k])?H=Re[k][W]:H=Re[k],se=!0):R.samples>0&&Ie.useMultisampledRTT(R)===!1?H=Pe.get(R).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[W]:H=Re,S.copy(R.viewport),P.copy(R.scissor),U=R.scissorTest}else S.copy(Z).multiplyScalar($).floor(),P.copy(oe).multiplyScalar($).floor(),U=xe;if(ve.bindFramebuffer(N.FRAMEBUFFER,H)&&X&&ve.drawBuffers(R,H),ve.viewport(S),ve.scissor(P),ve.setScissorTest(U),se){const _e=Pe.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,W)}else if(fe){const _e=Pe.get(R.texture),Te=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.__webglTexture,W||0,Te)}C=-1},this.readRenderTargetPixels=function(R,k,W,X,H,se,fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ve.bindFramebuffer(N.FRAMEBUFFER,ge);try{const _e=R.texture,Te=_e.format,Re=_e.type;if(!je.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-X&&W>=0&&W<=R.height-H&&N.readPixels(k,W,X,H,Ce.convert(Te),Ce.convert(Re),se)}finally{const _e=M!==null?Pe.get(M).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(R,k,W,X,H,se,fe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ve.bindFramebuffer(N.FRAMEBUFFER,ge);try{const _e=R.texture,Te=_e.format,Re=_e.type;if(!je.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-X&&W>=0&&W<=R.height-H){const we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(k,W,X,H,Ce.convert(Te),Ce.convert(Re),0),N.flush();const Ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await pw(N,Ye,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se)}finally{N.deleteBuffer(we),N.deleteSync(Ye)}return se}}finally{const _e=M!==null?Pe.get(M).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(R,k=null,W=0){R.isTexture!==!0&&(Sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const X=Math.pow(2,-W),H=Math.floor(R.image.width*X),se=Math.floor(R.image.height*X),fe=k!==null?k.x:0,ge=k!==null?k.y:0;Ie.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,fe,ge,H,se),ve.unbindTexture()},this.copyTextureToTexture=function(R,k,W=null,X=null,H=0){R.isTexture!==!0&&(Sa("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],k=arguments[2],H=arguments[3]||0,W=null);let se,fe,ge,_e,Te,Re;W!==null?(se=W.max.x-W.min.x,fe=W.max.y-W.min.y,ge=W.min.x,_e=W.min.y):(se=R.image.width,fe=R.image.height,ge=0,_e=0),X!==null?(Te=X.x,Re=X.y):(Te=0,Re=0);const we=Ce.convert(k.format),Ye=Ce.convert(k.type);Ie.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const pt=N.getParameter(N.UNPACK_ROW_LENGTH),mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),qe=N.getParameter(N.UNPACK_SKIP_ROWS),Se=N.getParameter(N.UNPACK_SKIP_IMAGES),Bt=R.isCompressedTexture?R.mipmaps[H]:R.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,_e),R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,Te,Re,se,fe,we,Ye,Bt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,Te,Re,Bt.width,Bt.height,we,Bt.data):N.texSubImage2D(N.TEXTURE_2D,H,Te,Re,se,fe,we,Ye,Bt),N.pixelStorei(N.UNPACK_ROW_LENGTH,pt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Se),H===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(R,k,W=null,X=null,H=0){R.isTexture!==!0&&(Sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,R=arguments[2],k=arguments[3],H=arguments[4]||0);let se,fe,ge,_e,Te,Re,we,Ye,pt;const mt=R.isCompressedTexture?R.mipmaps[H]:R.image;W!==null?(se=W.max.x-W.min.x,fe=W.max.y-W.min.y,ge=W.max.z-W.min.z,_e=W.min.x,Te=W.min.y,Re=W.min.z):(se=mt.width,fe=mt.height,ge=mt.depth,_e=0,Te=0,Re=0),X!==null?(we=X.x,Ye=X.y,pt=X.z):(we=0,Ye=0,pt=0);const gn=Ce.convert(k.format),qe=Ce.convert(k.type);let Se;if(k.isData3DTexture)Ie.setTexture3D(k,0),Se=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ie.setTexture2DArray(k,0),Se=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Bt=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),jn=N.getParameter(N.UNPACK_SKIP_PIXELS),hs=N.getParameter(N.UNPACK_SKIP_ROWS),_n=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re),R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Se,H,we,Ye,pt,se,fe,ge,gn,qe,mt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Se,H,we,Ye,pt,se,fe,ge,gn,mt.data):N.texSubImage3D(Se,H,we,Ye,pt,se,fe,ge,gn,qe,mt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,hs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_n),H===0&&k.generateMipmaps&&N.generateMipmap(Se),ve.unbindTexture()},this.initRenderTarget=function(R){Pe.get(R).__webglFramebuffer===void 0&&Ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ie.setTextureCube(R,0):R.isData3DTexture?Ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ie.setTexture2DArray(R,0):Ie.setTexture2D(R,0),ve.unbindTexture()},this.resetState=function(){w=0,A=0,M=null,ve.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rm?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Bu?"display-p3":"srgb"}}class wb extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class fx extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new I,mu=new I,C0=new $e,qo=new el,Vl=new Qa,Xf=new I,b0=new I;class Ab extends Vt{constructor(e=new bn,n=new fx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)pu.fromBufferAttribute(n,r-1),mu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(r),Vl.radius+=s,e.ray.intersectsSphere(Vl)===!1)return;C0.copy(r).invert(),qo.copy(e.ray).applyMatrix4(C0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const d=u.getX(y),g=u.getX(y+1),_=Gl(this,e,qo,l,d,g);_&&n.push(_)}if(this.isLineLoop){const y=u.getX(v-1),m=u.getX(p),d=Gl(this,e,qo,l,y,m);d&&n.push(d)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const d=Gl(this,e,qo,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=Gl(this,e,qo,l,v-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(pu.fromBufferAttribute(o,r),mu.fromBufferAttribute(o,s),n.distanceSqToSegment(pu,mu,Xf,b0)>i)return;Xf.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Xf);if(!(l<e.near||l>e.far))return{distance:l,point:b0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const R0=new I,P0=new I;class Tb extends Ab{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)R0.fromBufferAttribute(n,r),P0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+R0.distanceTo(P0);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qn extends bn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let v=0;const y=[],m=i/2;let d=0;g(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(p,2));function g(){const x=new I,w=new I;let A=0;const M=(n-e)/i;for(let C=0;C<=s;C++){const E=[],S=C/s,P=S*(n-e)+e;for(let U=0;U<=r;U++){const L=U/r,F=L*l+a,z=Math.sin(F),B=Math.cos(F);w.x=P*z,w.y=-S*i+m,w.z=P*B,h.push(w.x,w.y,w.z),x.set(z,M,B).normalize(),f.push(x.x,x.y,x.z),p.push(L,1-S),E.push(v++)}y.push(E)}for(let C=0;C<r;C++)for(let E=0;E<s;E++){const S=y[E][C],P=y[E+1][C],U=y[E+1][C+1],L=y[E][C+1];u.push(S,P,L),u.push(P,U,L),A+=6}c.addGroup(d,A,0),d+=A}function _(x){const w=v,A=new Me,M=new I;let C=0;const E=x===!0?e:n,S=x===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),v++;const P=v;for(let U=0;U<=r;U++){const F=U/r*l+a,z=Math.cos(F),B=Math.sin(F);M.x=E*B,M.y=m*S,M.z=E*z,h.push(M.x,M.y,M.z),f.push(0,S,0),A.x=z*.5+.5,A.y=B*.5*S+.5,p.push(A.x,A.y),v++}for(let U=0;U<r;U++){const L=w+U,F=P+U;x===!0?u.push(F,F+1,L):u.push(F+1,F,L),C+=3}c.addGroup(d,C,x===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cm extends bn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],v=[],y=[],m=[];for(let d=0;d<=i;d++){const g=[],_=d/i;let x=0;d===0&&o===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let w=0;w<=n;w++){const A=w/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(A+x,1-_),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const _=u[d][g+1],x=u[d][g],w=u[d+1][g],A=u[d+1][g+1];(d!==0||o>0)&&p.push(_,x,A),(d!==i-1||l<Math.PI)&&p.push(x,w,A)}this.setIndex(p),this.setAttribute("position",new Ct(v,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cb extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class L0 extends Lr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wl extends Lr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const I0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class bb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Rb=new bb;class um{constructor(e){this.manager=e!==void 0?e:Rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}um.DEFAULT_MATERIAL_NAME="__DEFAULT";class Pb extends um{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=I0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Xa("img");function l(){u(),I0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Lb extends um{constructor(e){super(e)}load(e,n,i,r){const s=new om;s.colorSpace=ii;const o=new Pb(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,n&&n(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class dx extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const $f=new $e,D0=new I,U0=new I;class Ib{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new am,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;D0.setFromMatrixPosition(e.matrixWorld),n.position.copy(D0),U0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(U0),n.updateMatrixWorld(),$f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Db extends Ib{constructor(){super(new sx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jf extends dx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ub extends dx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=N0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=N0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function N0(){return(typeof performance>"u"?Date:performance).now()}class F0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const O0=new I,Xl=new I;class wn{constructor(e=new I,n=new I){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){O0.subVectors(e,this.start),Xl.subVectors(this.end,this.start);const i=Xl.dot(Xl);let s=Xl.dot(O0)/i;return n&&(s=zt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Fb extends Tb{constructor(e=10,n=10,i=4473924,r=8947848){i=new ke(i),r=new ke(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,p=0,v=-a;f<=n;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const y=f===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new bn;u.setAttribute("position",new Ct(l,3)),u.setAttribute("color",new Ct(c,3));const h=new fx({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);const B0={type:"change"},Yf={type:"start"},k0={type:"end"},$l=new el,z0=new Nn,Ob=Math.cos(70*dw.DEG2RAD);class Bb extends ds{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",de),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(B0),i.update(),s=r.NONE},this.update=function(){const T=new I,V=new cs().setFromUnitVectors(e.up,new I(0,1,0)),G=V.clone().invert(),Y=new I,ee=new cs,ye=new I,be=2*Math.PI;return function(bt=null){const Ge=i.object.position;T.copy(Ge).sub(i.target),T.applyQuaternion(V),a.setFromVector3(T),i.autoRotate&&s===r.NONE&&U(S(bt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Rt=i.minAzimuthAngle,St=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(St)&&(Rt<-Math.PI?Rt+=be:Rt>Math.PI&&(Rt-=be),St<-Math.PI?St+=be:St>Math.PI&&(St-=be),Rt<=St?a.theta=Math.max(Rt,Math.min(St,a.theta)):a.theta=a.theta>(Rt+St)/2?Math.max(Rt,a.theta):Math.min(St,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Xi=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Z(a.radius);else{const Ot=a.radius;a.radius=Z(a.radius*c),Xi=Ot!=a.radius}if(T.setFromSpherical(a),T.applyQuaternion(G),Ge.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let Ot=null;if(i.object.isPerspectiveCamera){const xi=T.length();Ot=Z(xi*c);const Ir=xi-Ot;i.object.position.addScaledVector(x,Ir),i.object.updateMatrixWorld(),Xi=!!Ir}else if(i.object.isOrthographicCamera){const xi=new I(w.x,w.y,0);xi.unproject(i.object);const Ir=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xi=Ir!==i.object.zoom;const No=new I(w.x,w.y,0);No.unproject(i.object),i.object.position.sub(No).add(xi),i.object.updateMatrixWorld(),Ot=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ot!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ot).add(i.object.position):($l.origin.copy(i.object.position),$l.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot($l.direction))<Ob?e.lookAt(i.target):(z0.setFromNormalAndCoplanarPoint(i.object.up,i.target),$l.intersectPlane(z0,i.target))))}else if(i.object.isOrthographicCamera){const Ot=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Ot!==i.object.zoom&&(i.object.updateProjectionMatrix(),Xi=!0)}return c=1,A=!1,Xi||Y.distanceToSquared(i.object.position)>o||8*(1-ee.dot(i.object.quaternion))>o||ye.distanceToSquared(i.target)>o?(i.dispatchEvent(B0),Y.copy(i.object.position),ee.copy(i.object.quaternion),ye.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",he),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",b),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",D),i.domElement.removeEventListener("pointerup",b),i.domElement.getRootNode().removeEventListener("keydown",Ee,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",de),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new F0,l=new F0;let c=1;const u=new I,h=new Me,f=new Me,p=new Me,v=new Me,y=new Me,m=new Me,d=new Me,g=new Me,_=new Me,x=new I,w=new Me;let A=!1;const M=[],C={};let E=!1;function S(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function P(T){const V=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*V)}function U(T){l.theta-=T}function L(T){l.phi-=T}const F=function(){const T=new I;return function(G,Y){T.setFromMatrixColumn(Y,0),T.multiplyScalar(-G),u.add(T)}}(),z=function(){const T=new I;return function(G,Y){i.screenSpacePanning===!0?T.setFromMatrixColumn(Y,1):(T.setFromMatrixColumn(Y,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(G),u.add(T)}}(),B=function(){const T=new I;return function(G,Y){const ee=i.domElement;if(i.object.isPerspectiveCamera){const ye=i.object.position;T.copy(ye).sub(i.target);let be=T.length();be*=Math.tan(i.object.fov/2*Math.PI/180),F(2*G*be/ee.clientHeight,i.object.matrix),z(2*Y*be/ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(G*(i.object.right-i.object.left)/i.object.zoom/ee.clientWidth,i.object.matrix),z(Y*(i.object.top-i.object.bottom)/i.object.zoom/ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(T,V){if(!i.zoomToCursor)return;A=!0;const G=i.domElement.getBoundingClientRect(),Y=T-G.left,ee=V-G.top,ye=G.width,be=G.height;w.x=Y/ye*2-1,w.y=-(ee/be)*2+1,x.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function oe(T){h.set(T.clientX,T.clientY)}function xe(T){q(T.clientX,T.clientX),d.set(T.clientX,T.clientY)}function He(T){v.set(T.clientX,T.clientY)}function K(T){f.set(T.clientX,T.clientY),p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const V=i.domElement;U(2*Math.PI*p.x/V.clientHeight),L(2*Math.PI*p.y/V.clientHeight),h.copy(f),i.update()}function ie(T){g.set(T.clientX,T.clientY),_.subVectors(g,d),_.y>0?$(P(_.y)):_.y<0&&O(P(_.y)),d.copy(g),i.update()}function ce(T){y.set(T.clientX,T.clientY),m.subVectors(y,v).multiplyScalar(i.panSpeed),B(m.x,m.y),v.copy(y),i.update()}function ue(T){q(T.clientX,T.clientY),T.deltaY<0?O(P(T.deltaY)):T.deltaY>0&&$(P(T.deltaY)),i.update()}function De(T){let V=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),V=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),V=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),V=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),V=!0;break}V&&(T.preventDefault(),i.update())}function Ne(T){if(M.length===1)h.set(T.pageX,T.pageY);else{const V=Le(T),G=.5*(T.pageX+V.x),Y=.5*(T.pageY+V.y);h.set(G,Y)}}function Be(T){if(M.length===1)v.set(T.pageX,T.pageY);else{const V=Le(T),G=.5*(T.pageX+V.x),Y=.5*(T.pageY+V.y);v.set(G,Y)}}function tt(T){const V=Le(T),G=T.pageX-V.x,Y=T.pageY-V.y,ee=Math.sqrt(G*G+Y*Y);d.set(0,ee)}function N(T){i.enableZoom&&tt(T),i.enablePan&&Be(T)}function dt(T){i.enableZoom&&tt(T),i.enableRotate&&Ne(T)}function Xe(T){if(M.length==1)f.set(T.pageX,T.pageY);else{const G=Le(T),Y=.5*(T.pageX+G.x),ee=.5*(T.pageY+G.y);f.set(Y,ee)}p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const V=i.domElement;U(2*Math.PI*p.x/V.clientHeight),L(2*Math.PI*p.y/V.clientHeight),h.copy(f)}function je(T){if(M.length===1)y.set(T.pageX,T.pageY);else{const V=Le(T),G=.5*(T.pageX+V.x),Y=.5*(T.pageY+V.y);y.set(G,Y)}m.subVectors(y,v).multiplyScalar(i.panSpeed),B(m.x,m.y),v.copy(y)}function ve(T){const V=Le(T),G=T.pageX-V.x,Y=T.pageY-V.y,ee=Math.sqrt(G*G+Y*Y);g.set(0,ee),_.set(0,Math.pow(g.y/d.y,i.zoomSpeed)),$(_.y),d.copy(g);const ye=(T.pageX+V.x)*.5,be=(T.pageY+V.y)*.5;q(ye,be)}function ht(T){i.enableZoom&&ve(T),i.enablePan&&je(T)}function Pe(T){i.enableZoom&&ve(T),i.enableRotate&&Xe(T)}function Ie(T){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",D),i.domElement.addEventListener("pointerup",b)),!me(T)&&(Ve(T),T.pointerType==="touch"?Ue(T):j(T)))}function D(T){i.enabled!==!1&&(T.pointerType==="touch"?re(T):Q(T))}function b(T){switch(Ae(T),M.length){case 0:i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",D),i.domElement.removeEventListener("pointerup",b),i.dispatchEvent(k0),s=r.NONE;break;case 1:const V=M[0],G=C[V];Ue({pointerId:V,pageX:G.x,pageY:G.y});break}}function j(T){let V;switch(T.button){case 0:V=i.mouseButtons.LEFT;break;case 1:V=i.mouseButtons.MIDDLE;break;case 2:V=i.mouseButtons.RIGHT;break;default:V=-1}switch(V){case ms.DOLLY:if(i.enableZoom===!1)return;xe(T),s=r.DOLLY;break;case ms.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;He(T),s=r.PAN}else{if(i.enableRotate===!1)return;oe(T),s=r.ROTATE}break;case ms.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;oe(T),s=r.ROTATE}else{if(i.enablePan===!1)return;He(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Yf)}function Q(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(T);break;case r.DOLLY:if(i.enableZoom===!1)return;ie(T);break;case r.PAN:if(i.enablePan===!1)return;ce(T);break}}function te(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(Yf),ue(J(T)),i.dispatchEvent(k0))}function J(T){const V=T.deltaMode,G={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(V){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return T.ctrlKey&&!E&&(G.deltaY*=10),G}function Ee(T){T.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",ae,{passive:!0,capture:!0}))}function ae(T){T.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",ae,{passive:!0,capture:!0}))}function de(T){i.enabled===!1||i.enablePan===!1||De(T)}function Ue(T){switch(Ce(T),M.length){case 1:switch(i.touches.ONE){case gs.ROTATE:if(i.enableRotate===!1)return;Ne(T),s=r.TOUCH_ROTATE;break;case gs.PAN:if(i.enablePan===!1)return;Be(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case gs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;N(T),s=r.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;dt(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Yf)}function re(T){switch(Ce(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Xe(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;je(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ht(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Pe(T),i.update();break;default:s=r.NONE}}function he(T){i.enabled!==!1&&T.preventDefault()}function Ve(T){M.push(T.pointerId)}function Ae(T){delete C[T.pointerId];for(let V=0;V<M.length;V++)if(M[V]==T.pointerId){M.splice(V,1);return}}function me(T){for(let V=0;V<M.length;V++)if(M[V]==T.pointerId)return!0;return!1}function Ce(T){let V=C[T.pointerId];V===void 0&&(V=new Me,C[T.pointerId]=V),V.set(T.pageX,T.pageY)}function Le(T){const V=T.pointerId===M[0]?M[1]:M[0];return C[V]}i.domElement.addEventListener("contextmenu",he),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",b),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}var Ma=function(){var t=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++t%e.children.length)},!1);function n(u){return e.appendChild(u.dom),u}function i(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";t=u}var r=(performance||Date).now(),s=r,o=0,a=n(new Ma.Panel("FPS","#0ff","#002")),l=n(new Ma.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=n(new Ma.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:n,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};Ma.Panel=function(t,e,n){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,h=3*o,f=15*o,p=74*o,v=30*o,y=document.createElement("canvas");y.width=a,y.height=l,y.style.cssText="width:80px;height:48px";var m=y.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=n,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(t,c,u),m.fillRect(h,f,p,v),m.fillStyle=n,m.globalAlpha=.9,m.fillRect(h,f,p,v),{dom:y,update:function(d,g){i=Math.min(i,d),r=Math.max(r,d),m.fillStyle=n,m.globalAlpha=1,m.fillRect(0,0,a,f),m.fillStyle=e,m.fillText(s(d)+" "+t+" ("+s(i)+"-"+s(r)+")",c,u),m.drawImage(y,h+o,f,p-o,v,h,f,p-o,v),m.fillRect(h+p-o,f,o,v),m.fillStyle=n,m.globalAlpha=.9,m.fillRect(h+p-o,f,o,s((1-d/g)*v))}}};class kb{constructor(e){this.scene=new wb,this.camera=void 0,this.renderer=void 0,this.fov=45,this.nearPlane=1,this.farPlane=200,this.canvasId=e,this.clock=void 0,this.stats=void 0,this.controls=void 0,this.ambientLight=void 0,this.directionalLight=void 0,this.grid=void 0}getScene(){return this.scene}getGrid(){return this.grid}initialize(){this.camera=new Un(this.fov,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=48;const e=document.getElementById(this.canvasId);this.renderer=new Eb({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.clock=new Nb,this.controls=new Bb(this.camera,this.renderer.domElement),this.stats=Ma(),document.body.appendChild(this.stats.dom),this.ambientLight=new Ub(16777215,1),this.ambientLight.castShadow=!0,this.scene.add(this.ambientLight),this.directionalLight=new jf(16777215,1),this.directionalLight.position.set(10,32,64),window.addEventListener("resize",()=>this.onWindowResize(),!1),this.scene.background=new Lb().setPath("./sky/").load(["skybox_px.jpg","skybox_nx.jpg","skybox_py.jpg","skybox_ny.jpg","skybox_pz.jpg","skybox_nz.jpg"]);const n=new jf(16777215,3);n.position.set(1,1,1).normalize(),this.scene.add(n);const i=new jf(16777215,3);i.position.set(-1,-1,-1).normalize(),this.scene.add(i),this.grid=new Fb(100,100,16777215,8092539),this.scene.add(this.grid),console.log(this.grid.position)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.stats.update(),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class vi{constructor(e,n,i,r,s="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),vi.nextNameID=vi.nextNameID||0,this.$name.id="lil-gui-name-"+ ++vi.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class zb extends vi{constructor(e,n,i){super(e,n,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function jh(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!n&&"#"+n}const Hb={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:jh,toHexString:jh},$a={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},Vb={isPrimitive:!1,match:Array.isArray,fromHexString(t,e,n=1){const i=$a.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(255&i)/255*n},toHexString:([t,e,n],i=1)=>$a.toHexString(t*(i=255/i)<<16^e*i<<8^n*i<<0)},Gb={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){const i=$a.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(255&i)/255*n},toHexString:({r:t,g:e,b:n},i=1)=>$a.toHexString(t*(i=255/i)<<16^e*i<<8^n*i<<0)},Wb=[Hb,$a,Vb,Gb];class Xb extends vi{constructor(e,n,i,r){var s;super(e,n,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,Wb.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=jh(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class qf extends vi{constructor(e,n,i){super(e,n,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $b extends vi{constructor(e,n,i,r,s,o){super(e,n,i,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=100*n+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let n,i,r,s,o,a=!1;const l=u=>{if(a){const h=u.clientX-n,f=u.clientY-i;Math.abs(f)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!a){const h=u.clientY-r;o-=h*this._step*this._arrowKeyMultiplier(u),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{n=u.clientX,i=r=u.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=f=>{const p=this.$slider.getBoundingClientRect();let v=(y=f,m=p.left,d=p.right,g=this._min,_=this._max,(y-m)/(d-m)*(_-g)+g);var y,m,d,g,_;this._snapClampSetValue(v)},n=f=>{e(f.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i)};let r,s,o=!1;const a=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),o=!1},l=f=>{if(o){const p=f.touches[0].clientX-r,v=f.touches[0].clientY-s;Math.abs(p)>Math.abs(v)?a(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else f.preventDefault(),e(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(r=f.touches[0].clientX,s=f.touches[0].clientY,o=!0):a(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const p=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+n,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){const n=Math.round(e/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class jb extends vi{constructor(e,n,i,r){super(e,n,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?e:this._names[n],this}}class Yb extends vi{constructor(e,n,i){super(e,n,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let H0=!1;class fm{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!H0&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),H0=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,n,i,r,s){if(Object(i)===i)return new jb(this,e,n,i);const o=e[n];switch(typeof o){case"number":return new $b(this,e,n,i,r,s);case"boolean":return new zb(this,e,n);case"string":return new Yb(this,e,n);case"function":return new qf(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new Xb(this,e,n,i)}addFolder(e){return new fm({parent:this,title:e})}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof qf||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof qf)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}}class qb{constructor(e){this.scene=void 0,this.gui=new fm,this.c_mk=e}update(){this.c_mk.update()}updateFlatern(){this.c_mk.updateFlatern()}initialize(e){let n=this.gui;var i=this.c_mk.dataOBJ;n.add(i,"diameter",300,2e3).name("Cylinder Diameter"),n.add(i,"height",300,3e3).name("Cylinder Height"),n.add(i,"insulation",[50,75,100,150,200]).name("Insulation Thickness"),n.add(this.c_mk,"update"),n.add(this.c_mk,"updateFlatern");let r=["FemaleBoss 30mm","FemaleBoss 40mm","FemaleBoss 50mm"],s=n.addFolder("Connecton 1");s.add(i,"con1").name("Enable Connection 1"),s.add(i,"con1opt",r).name("Connections type"),s.add(i,"con1height").name("Connection Height"),s.add(i,"con1ang",0,Math.PI*2).name("Connection Angle");let o=n.addFolder("Connecton 2");o.add(i,"con2").name("Enable Connection 2"),o.add(i,"con2opt",r).name("Connections type"),o.add(i,"con2height").name("Connection Height"),o.add(i,"con2ang",0,Math.PI*2).name("Connection Angle");let a=n.addFolder("Connecton 3");a.add(i,"con3").name("Enable Connection 3"),a.add(i,"con3opt",r).name("Connections type"),a.add(i,"con3height").name("Connection Height"),a.add(i,"con3ang",0,Math.PI*2).name("Connection Angle");let l=n.addFolder("Connecton 4");l.add(i,"con4").name("Enable Connection 4"),l.add(i,"con4opt",r).name("Connections type"),l.add(i,"con4height").name("Connection Height"),l.add(i,"con4ang",0,Math.PI*2).name("Connection Angle");let c=n.addFolder("Connecton 5");c.add(i,"con5").name("Enable Connection 5"),c.add(i,"con5opt",r).name("Connections type"),c.add(i,"con5height").name("Connection Height"),c.add(i,"con5ang",0,Math.PI*2).name("Connection Angle");let u=n.addFolder("Connecton 6");u.add(i,"con6").name("Enable Connection 6"),u.add(i,"con6opt",r).name("Connections type"),u.add(i,"con6height").name("Connection Height"),u.add(i,"con6ang",0,Math.PI*2).name("Connection Angle");let h=n.addFolder("Connecton 7");h.add(i,"con7").name("Enable Connection 7"),h.add(i,"con7opt",r).name("Connections type"),h.add(i,"con7height").name("Connection Height"),h.add(i,"con7ang",0,Math.PI*2).name("Connection Angle");let f=n.addFolder("Connecton 8");f.add(i,"con8").name("Enable Connection 8"),f.add(i,"con8opt",r).name("Connections type"),f.add(i,"con8height").name("Connection Height"),f.add(i,"con8ang",0,Math.PI*2).name("Connection Angle");let p=n.addFolder("Connecton 9");p.add(i,"con9").name("Enable Connection 9"),p.add(i,"con9opt",r).name("Connections type"),p.add(i,"con9height").name("Connection Height"),p.add(i,"con9ang",0,Math.PI*2).name("Connection Angle")}}const Ic=0,Kb=1,Zb=new I,V0=new wn,Kf=new Nn,G0=new I,jl=new lt;class Jb{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new W0,this.unassigned=new W0,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.vertices.push(new Qb(e[n]));this.compute()}return this}setFromObject(e){const n=[];return e.updateMatrixWorld(!0),e.traverse(function(i){const r=i.geometry;if(r!==void 0){const s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){const l=new I;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),n.push(l)}}}),this.setFromPoints(n)}containsPoint(e){const n=this.faces;for(let i=0,r=n.length;i<r;i++)if(n[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,n){const i=this.faces;let r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){const l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;const h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?s=Math.min(h,s):r=Math.max(h,r),r>s))return null}return r!==-1/0?e.at(r,n):e.at(s,n),n}intersectsRay(e){return this.intersectRay(e,Zb)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,n){return e.face=n,n.outside===null?this.assigned.append(e):this.assigned.insertBefore(n.outside,e),n.outside=e,this}removeVertexFromFace(e,n){return e===n.outside&&(e.next!==null&&e.next.face===n?n.outside=e.next:n.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const n=e.outside;let i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(n,i),n.prev=i.next=null,e.outside=null,n}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i!==void 0)if(n===void 0)this.unassigned.appendChain(i);else{let r=i;do{const s=r.next;n.distanceToPoint(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unassigned.append(r),r=s}while(r!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let n=this.unassigned.first();do{const i=n.next;let r=this.tolerance,s=null;for(let o=0;o<e.length;o++){const a=e[o];if(a.mark===Ic){const l=a.distanceToPoint(n.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this.addVertexToFace(n,s),n=i}while(n!==null)}return this}computeExtremes(){const e=new I,n=new I,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),n.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){const a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>n.getComponent(c)&&(n.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(n.x))+Math.max(Math.abs(e.y),Math.abs(n.y))+Math.max(Math.abs(e.z),Math.abs(n.z))),{min:i,max:r}}computeInitialHull(){const e=this.vertices,n=this.computeExtremes(),i=n.min,r=n.max;let s=0,o=0;for(let f=0;f<3;f++){const p=r[f].point.getComponent(f)-i[f].point.getComponent(f);p>s&&(s=p,o=f)}const a=i[o],l=r[o];let c,u;s=0,V0.set(a.point,l.point);for(let f=0,p=this.vertices.length;f<p;f++){const v=e[f];if(v!==a&&v!==l){V0.closestPointToPoint(v.point,!0,G0);const y=G0.distanceToSquared(v.point);y>s&&(s=y,c=v)}}s=-1,Kf.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,p=this.vertices.length;f<p;f++){const v=e[f];if(v!==a&&v!==l&&v!==c){const y=Math.abs(Kf.distanceToPoint(v.point));y>s&&(s=y,u=v)}}const h=[];if(Kf.distanceToPoint(u.point)<0){h.push(ei.create(a,l,c),ei.create(u,l,a),ei.create(u,c,l),ei.create(u,a,c));for(let f=0;f<3;f++){const p=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge(p)),h[f+1].getEdge(1).setTwin(h[p+1].getEdge(0))}}else{h.push(ei.create(a,c,l),ei.create(u,a,l),ei.create(u,l,c),ei.create(u,c,a));for(let f=0;f<3;f++){const p=(f+1)%3;h[f+1].getEdge(2).setTwin(h[0].getEdge((3-f)%3)),h[f+1].getEdge(0).setTwin(h[p+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(h[f]);for(let f=0,p=e.length;f<p;f++){const v=e[f];if(v!==a&&v!==l&&v!==c&&v!==u){s=this.tolerance;let y=null;for(let m=0;m<4;m++){const d=this.faces[m].distanceToPoint(v.point);d>s&&(s=d,y=this.faces[m])}y!==null&&this.addVertexToFace(v,y)}}return this}reindexFaces(){const e=[];for(let n=0;n<this.faces.length;n++){const i=this.faces[n];i.mark===Ic&&e.push(i)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,n=0;const i=this.assigned.first().face;let r=i.outside;do{const s=i.distanceToPoint(r.point);s>n&&(n=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}computeHorizon(e,n,i,r){this.deleteFaceVertices(i),i.mark=Kb;let s;n===null?s=n=i.getEdge(0):s=n.next;do{const o=s.twin,a=o.face;a.mark===Ic&&(a.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==n);return this}addAdjoiningFace(e,n){const i=ei.create(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setTwin(n.twin),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i=null,r=null;for(let s=0;s<n.length;s++){const o=n[s],a=this.addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}addVertexToHull(e){const n=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class ei{constructor(){this.normal=new I,this.midpoint=new I,this.area=0,this.constant=0,this.outside=null,this.mark=Ic,this.edge=null}static create(e,n,i){const r=new ei,s=new Zf(e,r),o=new Zf(n,r),a=new Zf(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let n=this.edge;for(;e>0;)n=n.next,e--;for(;e<0;)n=n.prev,e++;return n}compute(){const e=this.edge.tail(),n=this.edge.head(),i=this.edge.next.head();return jl.set(e.point,n.point,i.point),jl.getNormal(this.normal),jl.getMidpoint(this.midpoint),this.area=jl.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class Zf{constructor(e,n){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=n}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),n=this.tail();return n!==null?n.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),n=this.tail();return n!==null?n.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class Qb{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class W0{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,n){return n.prev=e.prev,n.next=e,n.prev===null?this.head=n:n.prev.next=n,e.prev=n,this}insertAfter(e,n){return n.prev=e,n.next=e.next,n.next===null?this.tail=n:n.next.prev=n,e.next=n,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,n){return e.prev===null?this.head=n.next:e.prev.next=n.next,n.next===null?this.tail=e.prev:n.next.prev=e.prev,this}isEmpty(){return this.head===null}}class eR extends bn{constructor(e=[]){super();const n=[],i=[],s=new Jb().setFromPoints(e).faces;for(let o=0;o<s.length;o++){const a=s[o];let l=a.edge;do{const c=l.head().point;n.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ct(n,3)),this.setAttribute("normal",new Ct(i,3))}}function tR(t,e=1e-4){e=Math.max(e,Number.EPSILON);const n={},i=t.getIndex(),r=t.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(t.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let g=0,_=a.length;g<_;g++){const x=a[g],w=t.attributes[x];l[x]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const A=t.morphAttributes[x];A&&(c[x]||(c[x]=[]),A.forEach((M,C)=>{const E=new M.array.constructor(M.count*M.itemSize);c[x][C]=new M.constructor(E,M.itemSize,M.normalized)}))}const p=e*.5,v=Math.log10(1/e),y=Math.pow(10,v),m=p*y;for(let g=0;g<s;g++){const _=i?i.getX(g):g;let x="";for(let w=0,A=a.length;w<A;w++){const M=a[w],C=t.getAttribute(M),E=C.itemSize;for(let S=0;S<E;S++)x+=`${~~(C[h[S]](_)*y+m)},`}if(x in n)u.push(n[x]);else{for(let w=0,A=a.length;w<A;w++){const M=a[w],C=t.getAttribute(M),E=t.morphAttributes[M],S=C.itemSize,P=l[M],U=c[M];for(let L=0;L<S;L++){const F=h[L],z=f[L];if(P[z](o,C[F](_)),E)for(let B=0,$=E.length;B<$;B++)U[B][z](o,E[B][F](_))}}n[x]=o,u.push(o),o++}}const d=t.clone();for(const g in t.attributes){const _=l[g];if(d.setAttribute(g,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),g in c)for(let x=0;x<c[g].length;x++){const w=c[g][x];d.morphAttributes[g][x]=new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return d.setIndex(u),d}const hx=0,nR=1,iR=2,X0=2,Jf=1.25,$0=1,Ea=6*4+4+4,Hu=65535,rR=Math.pow(2,-24),Qf=Symbol("SKIP_GENERATION");function sR(t){return t.index?t.index.count:t.attributes.position.count}function Uo(t){return sR(t)/3}function oR(t,e=ArrayBuffer){return t>65535?new Uint32Array(new e(4*t)):new Uint16Array(new e(2*t))}function aR(t,e){if(!t.index){const n=t.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=oR(n,i);t.setIndex(new mn(r,1));for(let s=0;s<n;s++)r[s]=s}}function px(t,e){const n=Uo(t),i=e||t.drawRange,r=i.start/3,s=(i.start+i.count)/3,o=Math.max(0,r),a=Math.min(n,s)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function mx(t,e){if(!t.groups||!t.groups.length)return px(t,e);const n=[],i=new Set,r=e||t.drawRange,s=r.start/3,o=(r.start+r.count)/3;for(const l of t.groups){const c=l.start/3,u=(l.start+l.count)/3;i.add(Math.max(s,c)),i.add(Math.min(o,u))}const a=Array.from(i.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],u=a[l+1];n.push({offset:Math.floor(c),count:Math.floor(u-c)})}return n}function lR(t,e){const n=Uo(t),i=mx(t,e).sort((o,a)=>o.offset-a.offset),r=i[i.length-1];r.count=Math.min(n-r.offset,r.count);let s=0;return i.forEach(({count:o})=>s+=o),n!==s}function ed(t,e,n,i,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,f=1/0,p=1/0,v=-1/0,y=-1/0,m=-1/0;for(let d=e*6,g=(e+n)*6;d<g;d+=6){const _=t[d+0],x=t[d+1],w=_-x,A=_+x;w<s&&(s=w),A>l&&(l=A),_<h&&(h=_),_>v&&(v=_);const M=t[d+2],C=t[d+3],E=M-C,S=M+C;E<o&&(o=E),S>c&&(c=S),M<f&&(f=M),M>y&&(y=M);const P=t[d+4],U=t[d+5],L=P-U,F=P+U;L<a&&(a=L),F>u&&(u=F),P<p&&(p=P),P>m&&(m=P)}i[0]=s,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=u,r[0]=h,r[1]=f,r[2]=p,r[3]=v,r[4]=y,r[5]=m}function cR(t,e=null,n=null,i=null){const r=t.attributes.position,s=t.index?t.index.array:null,o=Uo(t),a=r.normalized;let l;e===null?(l=new Float32Array(o*6*4),n=0,i=o):(l=e,n=n||0,i=i||o);const c=r.array,u=r.offset||0;let h=3;r.isInterleavedBufferAttribute&&(h=r.data.stride);const f=["getX","getY","getZ"];for(let p=n;p<n+i;p++){const v=p*3,y=p*6;let m=v+0,d=v+1,g=v+2;s&&(m=s[m],d=s[d],g=s[g]),a||(m=m*h+u,d=d*h+u,g=g*h+u);for(let _=0;_<3;_++){let x,w,A;a?(x=r[f[_]](m),w=r[f[_]](d),A=r[f[_]](g)):(x=c[m+_],w=c[d+_],A=c[g+_]);let M=x;w<M&&(M=w),A<M&&(M=A);let C=x;w>C&&(C=w),A>C&&(C=A);const E=(C-M)/2,S=_*2;l[y+S+0]=M+E,l[y+S+1]=E+(Math.abs(M)+E)*rR}}return l}function _t(t,e,n){return n.min.x=e[t],n.min.y=e[t+1],n.min.z=e[t+2],n.max.x=e[t+3],n.max.y=e[t+4],n.max.z=e[t+5],n}function j0(t){let e=-1,n=-1/0;for(let i=0;i<3;i++){const r=t[i+3]-t[i];r>n&&(n=r,e=i)}return e}function Y0(t,e){e.set(t)}function q0(t,e,n){let i,r;for(let s=0;s<3;s++){const o=s+3;i=t[s],r=e[s],n[s]=i<r?i:r,i=t[o],r=e[o],n[o]=i>r?i:r}}function Yl(t,e,n){for(let i=0;i<3;i++){const r=e[t+2*i],s=e[t+2*i+1],o=r-s,a=r+s;o<n[i]&&(n[i]=o),a>n[i+3]&&(n[i+3]=a)}}function Ko(t){const e=t[3]-t[0],n=t[4]-t[1],i=t[5]-t[2];return 2*(e*n+n*i+i*e)}const Pi=32,uR=(t,e)=>t.candidate-e.candidate,er=new Array(Pi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ql=new Float32Array(6);function fR(t,e,n,i,r,s){let o=-1,a=0;if(s===hx)o=j0(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===nR)o=j0(t),o!==-1&&(a=dR(n,i,r,o));else if(s===iR){const l=Ko(t);let c=Jf*r;const u=i*6,h=(i+r)*6;for(let f=0;f<3;f++){const p=e[f],m=(e[f+3]-p)/Pi;if(r<Pi/4){const d=[...er];d.length=r;let g=0;for(let x=u;x<h;x+=6,g++){const w=d[g];w.candidate=n[x+2*f],w.count=0;const{bounds:A,leftCacheBounds:M,rightCacheBounds:C}=w;for(let E=0;E<3;E++)C[E]=1/0,C[E+3]=-1/0,M[E]=1/0,M[E+3]=-1/0,A[E]=1/0,A[E+3]=-1/0;Yl(x,n,A)}d.sort(uR);let _=r;for(let x=0;x<_;x++){const w=d[x];for(;x+1<_&&d[x+1].candidate===w.candidate;)d.splice(x+1,1),_--}for(let x=u;x<h;x+=6){const w=n[x+2*f];for(let A=0;A<_;A++){const M=d[A];w>=M.candidate?Yl(x,n,M.rightCacheBounds):(Yl(x,n,M.leftCacheBounds),M.count++)}}for(let x=0;x<_;x++){const w=d[x],A=w.count,M=r-w.count,C=w.leftCacheBounds,E=w.rightCacheBounds;let S=0;A!==0&&(S=Ko(C)/l);let P=0;M!==0&&(P=Ko(E)/l);const U=$0+Jf*(S*A+P*M);U<c&&(o=f,c=U,a=w.candidate)}}else{for(let _=0;_<Pi;_++){const x=er[_];x.count=0,x.candidate=p+m+_*m;const w=x.bounds;for(let A=0;A<3;A++)w[A]=1/0,w[A+3]=-1/0}for(let _=u;_<h;_+=6){let A=~~((n[_+2*f]-p)/m);A>=Pi&&(A=Pi-1);const M=er[A];M.count++,Yl(_,n,M.bounds)}const d=er[Pi-1];Y0(d.bounds,d.rightCacheBounds);for(let _=Pi-2;_>=0;_--){const x=er[_],w=er[_+1];q0(x.bounds,w.rightCacheBounds,x.rightCacheBounds)}let g=0;for(let _=0;_<Pi-1;_++){const x=er[_],w=x.count,A=x.bounds,C=er[_+1].rightCacheBounds;w!==0&&(g===0?Y0(A,ql):q0(A,ql,ql)),g+=w;let E=0,S=0;g!==0&&(E=Ko(ql)/l);const P=r-g;P!==0&&(S=Ko(C)/l);const U=$0+Jf*(E*g+S*P);U<c&&(o=f,c=U,a=x.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function dR(t,e,n,i){let r=0;for(let s=e,o=e+n;s<o;s++)r+=t[s*6+i*2];return r/n}class td{constructor(){this.boundingData=new Float32Array(6)}}function hR(t,e,n,i,r,s){let o=i,a=i+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&n[o*6+c]<l;)o++;for(;o<=a&&n[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let h=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=h}for(let u=0;u<6;u++){let h=n[o*6+u];n[o*6+u]=n[a*6+u],n[a*6+u]=h}o++,a--}else return o}}function pR(t,e,n,i,r,s){let o=i,a=i+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&n[o*6+c]<l;)o++;for(;o<=a&&n[a*6+c]>=l;)a--;if(o<a){let u=t[o];t[o]=t[a],t[a]=u;for(let h=0;h<6;h++){let f=n[o*6+h];n[o*6+h]=n[a*6+h],n[a*6+h]=f}o++,a--}else return o}}function cn(t,e){return e[t+15]===65535}function Mn(t,e){return e[t+6]}function Bn(t,e){return e[t+14]}function kn(t){return t+8}function zn(t,e){return e[t+6]}function gx(t,e){return e[t+7]}let _x,ca,Dc,vx;const mR=Math.pow(2,32);function Yh(t){return"count"in t?1:1+Yh(t.left)+Yh(t.right)}function gR(t,e,n){return _x=new Float32Array(n),ca=new Uint32Array(n),Dc=new Uint16Array(n),vx=new Uint8Array(n),qh(t,e)}function qh(t,e){const n=t/4,i=t/2,r="count"in e,s=e.boundingData;for(let o=0;o<6;o++)_x[n+o]=s[o];if(r)if(e.buffer){const o=e.buffer;vx.set(new Uint8Array(o),t);for(let a=t,l=t+o.byteLength;a<l;a+=Ea){const c=a/2;cn(c,Dc)||(ca[a/4+6]+=n)}return t+o.byteLength}else{const o=e.offset,a=e.count;return ca[n+6]=o,Dc[i+14]=a,Dc[i+15]=Hu,t+Ea}else{const o=e.left,a=e.right,l=e.splitAxis;let c;if(c=qh(t+Ea,o),c/4>mR)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ca[n+6]=c/4,c=qh(c,a),ca[n+7]=l,c}}function _R(t,e){const n=(t.index?t.index.count:t.attributes.position.count)/3,i=n>2**16,r=i?4:2,s=e?new SharedArrayBuffer(n*r):new ArrayBuffer(n*r),o=i?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function vR(t,e,n,i,r){const{maxDepth:s,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=r,h=t._indirectBuffer,f=t.geometry,p=f.index?f.index.array:null,v=u?pR:hR,y=Uo(f),m=new Float32Array(6);let d=!1;const g=new td;return ed(e,n,i,g.boundingData,m),x(g,n,i,m),g;function _(w){c&&c(w/y)}function x(w,A,M,C=null,E=0){if(!d&&E>=s&&(d=!0,o&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),M<=a||E>=s)return _(A+M),w.offset=A,w.count=M,w;const S=fR(w.boundingData,C,e,A,M,l);if(S.axis===-1)return _(A+M),w.offset=A,w.count=M,w;const P=v(h,p,e,A,M,S);if(P===A||P===A+M)_(A+M),w.offset=A,w.count=M;else{w.splitAxis=S.axis;const U=new td,L=A,F=P-A;w.left=U,ed(e,L,F,U.boundingData,m),x(U,L,F,m,E+1);const z=new td,B=P,$=M-F;w.right=z,ed(e,B,$,z.boundingData,m),x(z,B,$,m,E+1)}return w}}function yR(t,e){const n=t.geometry;e.indirect&&(t._indirectBuffer=_R(n,e.useSharedArrayBuffer),lR(n,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),t._indirectBuffer||aR(n,e);const i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=cR(n),s=e.indirect?px(n,e.range):mx(n,e.range);t._roots=s.map(o=>{const a=vR(t,r,o.offset,o.count,e),l=Yh(a),c=new i(Ea*l);return gR(0,a,c),c})}class Gi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,n){let i=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][n];i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}setFromPoints(e,n){let i=1/0,r=-1/0;for(let s=0,o=n.length;s<o;s++){const a=n[s],l=e.dot(a);i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}}Gi.prototype.setFromBox=function(){const t=new I;return function(n,i){const r=i.min,s=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){t.x=r.x*l+s.x*(1-l),t.y=r.y*c+s.y*(1-c),t.z=r.z*u+s.z*(1-u);const h=n.dot(t);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();const xR=function(){const t=new I,e=new I,n=new I;return function(r,s,o){const a=r.start,l=t,c=s.start,u=e;n.subVectors(a,c),t.subVectors(r.end,r.start),e.subVectors(s.end,s.start);const h=n.dot(u),f=u.dot(l),p=u.dot(u),v=n.dot(l),m=l.dot(l)*p-f*f;let d,g;m!==0?d=(h*f-v*p)/m:d=0,g=(h+d*f)/p,o.x=d,o.y=g}}(),dm=function(){const t=new Me,e=new I,n=new I;return function(r,s,o,a){xR(r,s,t);let l=t.x,c=t.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=r.start:u=r.end;let h;c<0?h=s.start:h=s.end;const f=e,p=n;if(r.closestPointToPoint(h,!0,e),s.closestPointToPoint(u,!0,n),f.distanceToSquared(h)<=p.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(p);return}}}}(),SR=function(){const t=new I,e=new I,n=new Nn,i=new wn;return function(s,o){const{radius:a,center:l}=s,{a:c,b:u,c:h}=o;if(i.start=c,i.end=u,i.closestPointToPoint(l,!0,t).distanceTo(l)<=a||(i.start=c,i.end=h,i.closestPointToPoint(l,!0,t).distanceTo(l)<=a)||(i.start=u,i.end=h,i.closestPointToPoint(l,!0,t).distanceTo(l)<=a))return!0;const y=o.getPlane(n);if(Math.abs(y.distanceToPoint(l))<=a){const d=y.projectPoint(l,e);if(o.containsPoint(d))return!0}return!1}}(),MR=1e-15;function nd(t){return Math.abs(t)<MR}class $n extends lt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Gi),this.points=[this.a,this.b,this.c],this.sphere=new Qa,this.plane=new Nn,this.needsUpdate=!0}intersectsSphere(e){return SR(e,this)}update(){const e=this.a,n=this.b,i=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const c=s[1],u=o[1];c.subVectors(e,n),u.setFromPoints(c,r);const h=s[2],f=o[2];h.subVectors(n,i),f.setFromPoints(h,r);const p=s[3],v=o[3];p.subVectors(i,e),v.setFromPoints(p,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}$n.prototype.closestPointToSegment=function(){const t=new I,e=new I,n=new wn;return function(r,s=null,o=null){const{start:a,end:l}=r,c=this.points;let u,h=1/0;for(let f=0;f<3;f++){const p=(f+1)%3;n.start.copy(c[f]),n.end.copy(c[p]),dm(n,r,t,e),u=t.distanceToSquared(e),u<h&&(h=u,s&&s.copy(t),o&&o.copy(e))}return this.closestPointToPoint(a,t),u=a.distanceToSquared(t),u<h&&(h=u,s&&s.copy(t),o&&o.copy(a)),this.closestPointToPoint(l,t),u=l.distanceToSquared(t),u<h&&(h=u,s&&s.copy(t),o&&o.copy(l)),Math.sqrt(h)}}();$n.prototype.intersectsTriangle=function(){const t=new $n,e=new Array(3),n=new Array(3),i=new Gi,r=new Gi,s=new I,o=new I,a=new I,l=new I,c=new I,u=new wn,h=new wn,f=new wn,p=new I;function v(y,m,d){const g=y.points;let _=0,x=-1;for(let w=0;w<3;w++){const{start:A,end:M}=u;A.copy(g[w]),M.copy(g[(w+1)%3]),u.delta(o);const C=nd(m.distanceToPoint(A));if(nd(m.normal.dot(o))&&C){d.copy(u),_=2;break}const E=m.intersectLine(u,p);if(!E&&C&&p.copy(A),(E||C)&&!nd(p.distanceTo(M))){if(_<=1)(_===1?d.start:d.end).copy(p),C&&(x=_);else if(_>=2){(x===1?d.start:d.end).copy(p),_=2;break}if(_++,_===2&&x===-1)break}}return _}return function(m,d=null,g=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(t.copy(m),t.update(),m=t);const _=this.plane,x=m.plane;if(Math.abs(_.normal.dot(x.normal))>1-1e-10){const w=this.satBounds,A=this.satAxes;n[0]=m.a,n[1]=m.b,n[2]=m.c;for(let E=0;E<4;E++){const S=w[E],P=A[E];if(i.setFromPoints(P,n),S.isSeparated(i))return!1}const M=m.satBounds,C=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let E=0;E<4;E++){const S=M[E],P=C[E];if(i.setFromPoints(P,e),S.isSeparated(i))return!1}for(let E=0;E<4;E++){const S=A[E];for(let P=0;P<4;P++){const U=C[P];if(s.crossVectors(S,U),i.setFromPoints(s,e),r.setFromPoints(s,n),i.isSeparated(r))return!1}}return d&&(g||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const w=v(this,x,h);if(w===1&&m.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(w!==2)return!1;const A=v(m,_,f);if(A===1&&this.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(A!==2)return!1;if(h.delta(a),f.delta(l),a.dot(l)<0){let L=f.start;f.start=f.end,f.end=L}const M=h.start.dot(a),C=h.end.dot(a),E=f.start.dot(a),S=f.end.dot(a),P=C<E,U=M<S;return M!==S&&E!==C&&P===U?!1:(d&&(c.subVectors(h.start,f.start),c.dot(a)>0?d.start.copy(h.start):d.start.copy(f.start),c.subVectors(h.end,f.end),c.dot(a)<0?d.end.copy(h.end):d.end.copy(f.end)),!0)}}}();$n.prototype.distanceToPoint=function(){const t=new I;return function(n){return this.closestPointToPoint(n,t),n.distanceTo(t)}}();$n.prototype.distanceToTriangle=function(){const t=new I,e=new I,n=["a","b","c"],i=new wn,r=new wn;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let f;const p=n[h],v=o[p];this.closestPointToPoint(v,t),f=v.distanceToSquared(t),f<u&&(u=f,a&&a.copy(t),l&&l.copy(v));const y=this[p];o.closestPointToPoint(y,t),f=y.distanceToSquared(t),f<u&&(u=f,a&&a.copy(y),l&&l.copy(t))}for(let h=0;h<3;h++){const f=n[h],p=n[(h+1)%3];i.set(this[f],this[p]);for(let v=0;v<3;v++){const y=n[v],m=n[(v+1)%3];r.set(o[y],o[m]),dm(i,r,t,e);const d=t.distanceToSquared(e);d<u&&(u=d,a&&a.copy(t),l&&l.copy(e))}}return Math.sqrt(u)}}();class an{constructor(e,n,i){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new $e,this.invMatrix=new $e,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Gi),this.alignedSatBounds=new Array(3).fill().map(()=>new Gi),this.needsUpdate=!1,e&&this.min.copy(e),n&&this.max.copy(n),i&&this.matrix.copy(i)}set(e,n,i){this.min.copy(e),this.max.copy(n),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}an.prototype.update=function(){return function(){const e=this.matrix,n=this.min,i=this.max,r=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*c|2*u|4*h,p=r[f];p.x=c?i.x:n.x,p.y=u?i.y:n.y,p.z=h?i.z:n.z,p.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let c=0;c<3;c++){const u=o[c],h=s[c],f=1<<c,p=r[f];u.subVectors(a,p),h.setFromPoints(u,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();an.prototype.intersectsBox=function(){const t=new Gi;return function(n){this.needsUpdate&&this.update();const i=n.min,r=n.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(t.min=i.x,t.max=r.x,a[0].isSeparated(t)||(t.min=i.y,t.max=r.y,a[1].isSeparated(t))||(t.min=i.z,t.max=r.z,a[2].isSeparated(t)))return!1;for(let l=0;l<3;l++){const c=o[l],u=s[l];if(t.setFromBox(c,n),u.isSeparated(t))return!1}return!0}}();an.prototype.intersectsTriangle=function(){const t=new $n,e=new Array(3),n=new Gi,i=new Gi,r=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(t.copy(o),t.update(),o=t);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let f=0;f<3;f++){const p=a[f],v=l[f];if(n.setFromPoints(v,e),p.isSeparated(n))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const p=c[f],v=u[f];if(n.setFromPoints(v,h),p.isSeparated(n))return!1}for(let f=0;f<3;f++){const p=l[f];for(let v=0;v<4;v++){const y=u[v];if(r.crossVectors(p,y),n.setFromPoints(r,e),i.setFromPoints(r,h),n.isSeparated(i))return!1}}return!0}}();an.prototype.closestPointToPoint=function(){return function(e,n){return this.needsUpdate&&this.update(),n.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),n}}();an.prototype.distanceToPoint=function(){const t=new I;return function(n){return this.closestPointToPoint(n,t),n.distanceTo(t)}}();an.prototype.distanceToBox=function(){const t=["x","y","z"],e=new Array(12).fill().map(()=>new wn),n=new Array(12).fill().map(()=>new wn),i=new I,r=new I;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(r),this.closestPointToPoint(r,i),o.closestPointToPoint(i,r),l&&l.copy(i),c&&c.copy(r)),0;const u=a*a,h=o.min,f=o.max,p=this.points;let v=1/0;for(let m=0;m<8;m++){const d=p[m];r.copy(d).clamp(h,f);const g=d.distanceToSquared(r);if(g<v&&(v=g,l&&l.copy(d),c&&c.copy(r),g<u))return Math.sqrt(g)}let y=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let g=0;g<=1;g++){const _=(m+1)%3,x=(m+2)%3,w=d<<_|g<<x,A=1<<m|d<<_|g<<x,M=p[w],C=p[A];e[y].set(M,C);const S=t[m],P=t[_],U=t[x],L=n[y],F=L.start,z=L.end;F[S]=h[S],F[P]=d?h[P]:f[P],F[U]=g?h[U]:f[P],z[S]=f[S],z[P]=d?h[P]:f[P],z[U]=g?h[U]:f[P],y++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let g=0;g<=1;g++){r.x=m?f.x:h.x,r.y=d?f.y:h.y,r.z=g?f.z:h.z,this.closestPointToPoint(r,i);const _=r.distanceToSquared(i);if(_<v&&(v=_,l&&l.copy(i),c&&c.copy(r),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const d=e[m];for(let g=0;g<12;g++){const _=n[g];dm(d,_,i,r);const x=i.distanceToSquared(r);if(x<v&&(v=x,l&&l.copy(i),c&&c.copy(r),x<u))return Math.sqrt(x)}}return Math.sqrt(v)}}();class hm{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class ER extends hm{constructor(){super(()=>new $n)}}const Hn=new ER;class wR{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let n=null;this.setBuffer=i=>{n&&e.push(n),n=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{n=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const st=new wR;let fr,ro;const Us=[],Kl=new hm(()=>new on);function AR(t,e,n,i,r,s){fr=Kl.getPrimitive(),ro=Kl.getPrimitive(),Us.push(fr,ro),st.setBuffer(t._roots[e]);const o=Kh(0,t.geometry,n,i,r,s);st.clearBuffer(),Kl.releasePrimitive(fr),Kl.releasePrimitive(ro),Us.pop(),Us.pop();const a=Us.length;return a>0&&(ro=Us[a-1],fr=Us[a-2]),o}function Kh(t,e,n,i,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=st;let u=t*2;if(cn(u,l)){const v=Mn(t,c),y=Bn(u,l);return _t(t,a,fr),i(v,y,!1,o,s+t,fr)}else{let U=function(F){const{uint16Array:z,uint32Array:B}=st;let $=F*2;for(;!cn($,z);)F=kn(F),$=F*2;return Mn(F,B)},L=function(F){const{uint16Array:z,uint32Array:B}=st;let $=F*2;for(;!cn($,z);)F=zn(F,B),$=F*2;return Mn(F,B)+Bn($,z)};var f=U,p=L;const v=kn(t),y=zn(t,c);let m=v,d=y,g,_,x,w;if(r&&(x=fr,w=ro,_t(m,a,x),_t(d,a,w),g=r(x),_=r(w),_<g)){m=y,d=v;const F=g;g=_,_=F,x=w}x||(x=fr,_t(m,a,x));const A=cn(m*2,l),M=n(x,A,g,o+1,s+m);let C;if(M===X0){const F=U(m),B=L(m)-F;C=i(F,B,!0,o+1,s+m,x)}else C=M&&Kh(m,e,n,i,r,s,o+1);if(C)return!0;w=ro,_t(d,a,w);const E=cn(d*2,l),S=n(w,E,_,o+1,s+d);let P;if(S===X0){const F=U(d),B=L(d)-F;P=i(F,B,!0,o+1,s+d,w)}else P=S&&Kh(d,e,n,i,r,s,o+1);return!!P}}const Zo=new I,id=new I;function TR(t,e,n={},i=0,r=1/0){const s=i*i,o=r*r;let a=1/0,l=null;if(t.shapecast({boundsTraverseOrder:u=>(Zo.copy(e).clamp(u.min,u.max),Zo.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,Zo);const f=e.distanceToSquared(Zo);return f<a&&(id.copy(Zo),a=f,l=h),f<s}}),a===1/0)return null;const c=Math.sqrt(a);return n.point?n.point.copy(id):n.point=id.clone(),n.distance=c,n.faceIndex=l,n}const Ns=new I,Fs=new I,Os=new I,Zl=new Me,Jl=new Me,Ql=new Me,K0=new I,Z0=new I,J0=new I,ec=new I;function CR(t,e,n,i,r,s,o,a){let l;if(s===nn?l=t.intersectTriangle(i,n,e,!0,r):l=t.intersectTriangle(e,n,i,s!==qt,r),l===null)return null;const c=t.origin.distanceTo(r);return c<o||c>a?null:{distance:c,point:r.clone()}}function bR(t,e,n,i,r,s,o,a,l,c,u){Ns.fromBufferAttribute(e,s),Fs.fromBufferAttribute(e,o),Os.fromBufferAttribute(e,a);const h=CR(t,Ns,Fs,Os,ec,l,c,u);if(h){i&&(Zl.fromBufferAttribute(i,s),Jl.fromBufferAttribute(i,o),Ql.fromBufferAttribute(i,a),h.uv=lt.getInterpolation(ec,Ns,Fs,Os,Zl,Jl,Ql,new Me)),r&&(Zl.fromBufferAttribute(r,s),Jl.fromBufferAttribute(r,o),Ql.fromBufferAttribute(r,a),h.uv1=lt.getInterpolation(ec,Ns,Fs,Os,Zl,Jl,Ql,new Me)),n&&(K0.fromBufferAttribute(n,s),Z0.fromBufferAttribute(n,o),J0.fromBufferAttribute(n,a),h.normal=lt.getInterpolation(ec,Ns,Fs,Os,K0,Z0,J0,new I),h.normal.dot(t.direction)>0&&h.normal.multiplyScalar(-1));const f={a:s,b:o,c:a,normal:new I,materialIndex:0};lt.getNormal(Ns,Fs,Os,f.normal),h.face=f,h.faceIndex=s}return h}function Vu(t,e,n,i,r,s,o){const a=i*3;let l=a+0,c=a+1,u=a+2;const h=t.index;t.index&&(l=h.getX(l),c=h.getX(c),u=h.getX(u));const{position:f,normal:p,uv:v,uv1:y}=t.attributes,m=bR(n,f,p,v,y,l,c,u,e,s,o);return m?(m.faceIndex=i,r&&r.push(m),m):null}function Tt(t,e,n,i){const r=t.a,s=t.b,o=t.c;let a=e,l=e+1,c=e+2;n&&(a=n.getX(a),l=n.getX(l),c=n.getX(c)),r.x=i.getX(a),r.y=i.getY(a),r.z=i.getZ(a),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function RR(t,e,n,i,r,s,o,a){const{geometry:l,_indirectBuffer:c}=t;for(let u=i,h=i+r;u<h;u++)Vu(l,e,n,u,s,o,a)}function PR(t,e,n,i,r,s,o){const{geometry:a,_indirectBuffer:l}=t;let c=1/0,u=null;for(let h=i,f=i+r;h<f;h++){let p;p=Vu(a,e,n,h,null,s,o),p&&p.distance<c&&(u=p,c=p.distance)}return u}function LR(t,e,n,i,r,s,o){const{geometry:a}=n,{index:l}=a,c=a.attributes.position;for(let u=t,h=e+t;u<h;u++){let f;if(f=u,Tt(o,f*3,l,c),o.needsUpdate=!0,i(o,f,r,s))return!0}return!1}function IR(t,e=null){e&&Array.isArray(e)&&(e=new Set(e));const n=t.geometry,i=n.index?n.index.array:null,r=n.attributes.position;let s,o,a,l,c=0;const u=t._roots;for(let f=0,p=u.length;f<p;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(f,p,v=!1){const y=f*2;if(a[y+15]===Hu){const d=o[f+6],g=a[y+14];let _=1/0,x=1/0,w=1/0,A=-1/0,M=-1/0,C=-1/0;for(let E=3*d,S=3*(d+g);E<S;E++){let P=i[E];const U=r.getX(P),L=r.getY(P),F=r.getZ(P);U<_&&(_=U),U>A&&(A=U),L<x&&(x=L),L>M&&(M=L),F<w&&(w=F),F>C&&(C=F)}return l[f+0]!==_||l[f+1]!==x||l[f+2]!==w||l[f+3]!==A||l[f+4]!==M||l[f+5]!==C?(l[f+0]=_,l[f+1]=x,l[f+2]=w,l[f+3]=A,l[f+4]=M,l[f+5]=C,!0):!1}else{const d=f+8,g=o[f+6],_=d+p,x=g+p;let w=v,A=!1,M=!1;e?w||(A=e.has(_),M=e.has(x),w=!A&&!M):(A=!0,M=!0);const C=w||A,E=w||M;let S=!1;C&&(S=h(d,p,w));let P=!1;E&&(P=h(g,p,w));const U=S||P;if(U)for(let L=0;L<3;L++){const F=d+L,z=g+L,B=l[F],$=l[F+3],O=l[z],q=l[z+3];l[f+L]=B<O?B:O,l[f+L+3]=$>q?$:q}return U}}}function Tr(t,e,n,i,r){let s,o,a,l,c,u;const h=1/n.direction.x,f=1/n.direction.y,p=1/n.direction.z,v=n.origin.x,y=n.origin.y,m=n.origin.z;let d=e[t],g=e[t+3],_=e[t+1],x=e[t+3+1],w=e[t+2],A=e[t+3+2];return h>=0?(s=(d-v)*h,o=(g-v)*h):(s=(g-v)*h,o=(d-v)*h),f>=0?(a=(_-y)*f,l=(x-y)*f):(a=(x-y)*f,l=(_-y)*f),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),p>=0?(c=(w-m)*p,u=(A-m)*p):(c=(A-m)*p,u=(w-m)*p),s>u||c>o)?!1:((c>s||s!==s)&&(s=c),(u<o||o!==o)&&(o=u),s<=r&&o>=i)}function DR(t,e,n,i,r,s,o,a){const{geometry:l,_indirectBuffer:c}=t;for(let u=i,h=i+r;u<h;u++){let f=c?c[u]:u;Vu(l,e,n,f,s,o,a)}}function UR(t,e,n,i,r,s,o){const{geometry:a,_indirectBuffer:l}=t;let c=1/0,u=null;for(let h=i,f=i+r;h<f;h++){let p;p=Vu(a,e,n,l?l[h]:h,null,s,o),p&&p.distance<c&&(u=p,c=p.distance)}return u}function NR(t,e,n,i,r,s,o){const{geometry:a}=n,{index:l}=a,c=a.attributes.position;for(let u=t,h=e+t;u<h;u++){let f;if(f=n.resolveTriangleIndex(u),Tt(o,f*3,l,c),o.needsUpdate=!0,i(o,f,r,s))return!0}return!1}function FR(t,e,n,i,r,s,o){st.setBuffer(t._roots[e]),Zh(0,t,n,i,r,s,o),st.clearBuffer()}function Zh(t,e,n,i,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=st,u=t*2;if(cn(u,l)){const f=Mn(t,c),p=Bn(u,l);RR(e,n,i,f,p,r,s,o)}else{const f=kn(t);Tr(f,a,i,s,o)&&Zh(f,e,n,i,r,s,o);const p=zn(t,c);Tr(p,a,i,s,o)&&Zh(p,e,n,i,r,s,o)}}const OR=["x","y","z"];function BR(t,e,n,i,r,s){st.setBuffer(t._roots[e]);const o=Jh(0,t,n,i,r,s);return st.clearBuffer(),o}function Jh(t,e,n,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=st;let c=t*2;if(cn(c,a)){const h=Mn(t,l),f=Bn(c,a);return PR(e,n,i,h,f,r,s)}else{const h=gx(t,l),f=OR[h],v=i.direction[f]>=0;let y,m;v?(y=kn(t),m=zn(t,l)):(y=zn(t,l),m=kn(t));const g=Tr(y,o,i,r,s)?Jh(y,e,n,i,r,s):null;if(g){const w=g.point[f];if(v?w<=o[m+h]:w>=o[m+h+3])return g}const x=Tr(m,o,i,r,s)?Jh(m,e,n,i,r,s):null;return g&&x?g.distance<=x.distance?g:x:g||x||null}}const tc=new on,Bs=new $n,ks=new $n,Jo=new $e,Q0=new an,nc=new an;function kR(t,e,n,i){st.setBuffer(t._roots[e]);const r=Qh(0,t,n,i);return st.clearBuffer(),r}function Qh(t,e,n,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=st;let l=t*2;if(r===null&&(n.boundingBox||n.computeBoundingBox(),Q0.set(n.boundingBox.min,n.boundingBox.max,i),r=Q0),cn(l,o)){const u=e.geometry,h=u.index,f=u.attributes.position,p=n.index,v=n.attributes.position,y=Mn(t,a),m=Bn(l,o);if(Jo.copy(i).invert(),n.boundsTree)return _t(t,s,nc),nc.matrix.copy(Jo),nc.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:g=>nc.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(i),g.b.applyMatrix4(i),g.c.applyMatrix4(i),g.needsUpdate=!0;for(let _=y*3,x=(m+y)*3;_<x;_+=3)if(Tt(ks,_,h,f),ks.needsUpdate=!0,g.intersectsTriangle(ks))return!0;return!1}});for(let d=y*3,g=(m+y)*3;d<g;d+=3){Tt(Bs,d,h,f),Bs.a.applyMatrix4(Jo),Bs.b.applyMatrix4(Jo),Bs.c.applyMatrix4(Jo),Bs.needsUpdate=!0;for(let _=0,x=p.count;_<x;_+=3)if(Tt(ks,_,p,v),ks.needsUpdate=!0,Bs.intersectsTriangle(ks))return!0}}else{const u=t+8,h=a[t+6];return _t(u,s,tc),!!(r.intersectsBox(tc)&&Qh(u,e,n,i,r)||(_t(h,s,tc),r.intersectsBox(tc)&&Qh(h,e,n,i,r)))}}const ic=new $e,rd=new an,Qo=new an,zR=new I,HR=new I,VR=new I,GR=new I;function WR(t,e,n,i={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),rd.set(e.boundingBox.min,e.boundingBox.max,n),rd.needsUpdate=!0;const a=t.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,f=Hn.getPrimitive(),p=Hn.getPrimitive();let v=zR,y=HR,m=null,d=null;r&&(m=VR,d=GR);let g=1/0,_=null,x=null;return ic.copy(n).invert(),Qo.matrix.copy(ic),t.shapecast({boundsTraverseOrder:w=>rd.distanceToBox(w),intersectsBounds:(w,A,M)=>M<g&&M<o?(A&&(Qo.min.copy(w.min),Qo.max.copy(w.max),Qo.needsUpdate=!0),!0):!1,intersectsRange:(w,A)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:C=>Qo.distanceToBox(C),intersectsBounds:(C,E,S)=>S<g&&S<o,intersectsRange:(C,E)=>{for(let S=C,P=C+E;S<P;S++){Tt(p,3*S,h,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let U=w,L=w+A;U<L;U++){Tt(f,3*U,c,l),f.needsUpdate=!0;const F=f.distanceToTriangle(p,v,m);if(F<g&&(y.copy(v),d&&d.copy(m),g=F,_=U,x=S),F<s)return!0}}}});{const M=Uo(e);for(let C=0,E=M;C<E;C++){Tt(p,3*C,h,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let S=w,P=w+A;S<P;S++){Tt(f,3*S,c,l),f.needsUpdate=!0;const U=f.distanceToTriangle(p,v,m);if(U<g&&(y.copy(v),d&&d.copy(m),g=U,_=S,x=C),U<s)return!0}}}}}),Hn.releasePrimitive(f),Hn.releasePrimitive(p),g===1/0?null:(i.point?i.point.copy(y):i.point=y.clone(),i.distance=g,i.faceIndex=_,r&&(r.point?r.point.copy(d):r.point=d.clone(),r.point.applyMatrix4(ic),y.applyMatrix4(ic),r.distance=y.sub(r.point).length(),r.faceIndex=x),i)}function XR(t,e=null){e&&Array.isArray(e)&&(e=new Set(e));const n=t.geometry,i=n.index?n.index.array:null,r=n.attributes.position;let s,o,a,l,c=0;const u=t._roots;for(let f=0,p=u.length;f<p;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(f,p,v=!1){const y=f*2;if(a[y+15]===Hu){const d=o[f+6],g=a[y+14];let _=1/0,x=1/0,w=1/0,A=-1/0,M=-1/0,C=-1/0;for(let E=d,S=d+g;E<S;E++){const P=3*t.resolveTriangleIndex(E);for(let U=0;U<3;U++){let L=P+U;L=i?i[L]:L;const F=r.getX(L),z=r.getY(L),B=r.getZ(L);F<_&&(_=F),F>A&&(A=F),z<x&&(x=z),z>M&&(M=z),B<w&&(w=B),B>C&&(C=B)}}return l[f+0]!==_||l[f+1]!==x||l[f+2]!==w||l[f+3]!==A||l[f+4]!==M||l[f+5]!==C?(l[f+0]=_,l[f+1]=x,l[f+2]=w,l[f+3]=A,l[f+4]=M,l[f+5]=C,!0):!1}else{const d=f+8,g=o[f+6],_=d+p,x=g+p;let w=v,A=!1,M=!1;e?w||(A=e.has(_),M=e.has(x),w=!A&&!M):(A=!0,M=!0);const C=w||A,E=w||M;let S=!1;C&&(S=h(d,p,w));let P=!1;E&&(P=h(g,p,w));const U=S||P;if(U)for(let L=0;L<3;L++){const F=d+L,z=g+L,B=l[F],$=l[F+3],O=l[z],q=l[z+3];l[f+L]=B<O?B:O,l[f+L+3]=$>q?$:q}return U}}}function $R(t,e,n,i,r,s,o){st.setBuffer(t._roots[e]),ep(0,t,n,i,r,s,o),st.clearBuffer()}function ep(t,e,n,i,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=st,u=t*2;if(cn(u,l)){const f=Mn(t,c),p=Bn(u,l);DR(e,n,i,f,p,r,s,o)}else{const f=kn(t);Tr(f,a,i,s,o)&&ep(f,e,n,i,r,s,o);const p=zn(t,c);Tr(p,a,i,s,o)&&ep(p,e,n,i,r,s,o)}}const jR=["x","y","z"];function YR(t,e,n,i,r,s){st.setBuffer(t._roots[e]);const o=tp(0,t,n,i,r,s);return st.clearBuffer(),o}function tp(t,e,n,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=st;let c=t*2;if(cn(c,a)){const h=Mn(t,l),f=Bn(c,a);return UR(e,n,i,h,f,r,s)}else{const h=gx(t,l),f=jR[h],v=i.direction[f]>=0;let y,m;v?(y=kn(t),m=zn(t,l)):(y=zn(t,l),m=kn(t));const g=Tr(y,o,i,r,s)?tp(y,e,n,i,r,s):null;if(g){const w=g.point[f];if(v?w<=o[m+h]:w>=o[m+h+3])return g}const x=Tr(m,o,i,r,s)?tp(m,e,n,i,r,s):null;return g&&x?g.distance<=x.distance?g:x:g||x||null}}const rc=new on,zs=new $n,Hs=new $n,ea=new $e,e_=new an,sc=new an;function qR(t,e,n,i){st.setBuffer(t._roots[e]);const r=np(0,t,n,i);return st.clearBuffer(),r}function np(t,e,n,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=st;let l=t*2;if(r===null&&(n.boundingBox||n.computeBoundingBox(),e_.set(n.boundingBox.min,n.boundingBox.max,i),r=e_),cn(l,o)){const u=e.geometry,h=u.index,f=u.attributes.position,p=n.index,v=n.attributes.position,y=Mn(t,a),m=Bn(l,o);if(ea.copy(i).invert(),n.boundsTree)return _t(t,s,sc),sc.matrix.copy(ea),sc.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:g=>sc.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(i),g.b.applyMatrix4(i),g.c.applyMatrix4(i),g.needsUpdate=!0;for(let _=y,x=m+y;_<x;_++)if(Tt(Hs,3*e.resolveTriangleIndex(_),h,f),Hs.needsUpdate=!0,g.intersectsTriangle(Hs))return!0;return!1}});for(let d=y,g=m+y;d<g;d++){const _=e.resolveTriangleIndex(d);Tt(zs,3*_,h,f),zs.a.applyMatrix4(ea),zs.b.applyMatrix4(ea),zs.c.applyMatrix4(ea),zs.needsUpdate=!0;for(let x=0,w=p.count;x<w;x+=3)if(Tt(Hs,x,p,v),Hs.needsUpdate=!0,zs.intersectsTriangle(Hs))return!0}}else{const u=t+8,h=a[t+6];return _t(u,s,rc),!!(r.intersectsBox(rc)&&np(u,e,n,i,r)||(_t(h,s,rc),r.intersectsBox(rc)&&np(h,e,n,i,r)))}}const oc=new $e,sd=new an,ta=new an,KR=new I,ZR=new I,JR=new I,QR=new I;function eP(t,e,n,i={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),sd.set(e.boundingBox.min,e.boundingBox.max,n),sd.needsUpdate=!0;const a=t.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,f=Hn.getPrimitive(),p=Hn.getPrimitive();let v=KR,y=ZR,m=null,d=null;r&&(m=JR,d=QR);let g=1/0,_=null,x=null;return oc.copy(n).invert(),ta.matrix.copy(oc),t.shapecast({boundsTraverseOrder:w=>sd.distanceToBox(w),intersectsBounds:(w,A,M)=>M<g&&M<o?(A&&(ta.min.copy(w.min),ta.max.copy(w.max),ta.needsUpdate=!0),!0):!1,intersectsRange:(w,A)=>{if(e.boundsTree){const M=e.boundsTree;return M.shapecast({boundsTraverseOrder:C=>ta.distanceToBox(C),intersectsBounds:(C,E,S)=>S<g&&S<o,intersectsRange:(C,E)=>{for(let S=C,P=C+E;S<P;S++){const U=M.resolveTriangleIndex(S);Tt(p,3*U,h,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let L=w,F=w+A;L<F;L++){const z=t.resolveTriangleIndex(L);Tt(f,3*z,c,l),f.needsUpdate=!0;const B=f.distanceToTriangle(p,v,m);if(B<g&&(y.copy(v),d&&d.copy(m),g=B,_=L,x=S),B<s)return!0}}}})}else{const M=Uo(e);for(let C=0,E=M;C<E;C++){Tt(p,3*C,h,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let S=w,P=w+A;S<P;S++){const U=t.resolveTriangleIndex(S);Tt(f,3*U,c,l),f.needsUpdate=!0;const L=f.distanceToTriangle(p,v,m);if(L<g&&(y.copy(v),d&&d.copy(m),g=L,_=S,x=C),L<s)return!0}}}}}),Hn.releasePrimitive(f),Hn.releasePrimitive(p),g===1/0?null:(i.point?i.point.copy(y):i.point=y.clone(),i.distance=g,i.faceIndex=_,r&&(r.point?r.point.copy(d):r.point=d.clone(),r.point.applyMatrix4(oc),y.applyMatrix4(oc),r.distance=y.sub(r.point).length(),r.faceIndex=x),i)}function tP(){return typeof SharedArrayBuffer<"u"}const wa=new st.constructor,gu=new st.constructor,rr=new hm(()=>new on),Vs=new on,Gs=new on,od=new on,ad=new on;let ld=!1;function nP(t,e,n,i){if(ld)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ld=!0;const r=t._roots,s=e._roots;let o,a=0,l=0;const c=new $e().copy(n).invert();for(let u=0,h=r.length;u<h;u++){wa.setBuffer(r[u]),l=0;const f=rr.getPrimitive();_t(0,wa.float32Array,f),f.applyMatrix4(c);for(let p=0,v=s.length;p<v&&(gu.setBuffer(s[p]),o=Jn(0,0,n,c,i,a,l,0,0,f),gu.clearBuffer(),l+=s[p].length,!o);p++);if(rr.releasePrimitive(f),wa.clearBuffer(),a+=r[u].length,o)break}return ld=!1,o}function Jn(t,e,n,i,r,s=0,o=0,a=0,l=0,c=null,u=!1){let h,f;u?(h=gu,f=wa):(h=wa,f=gu);const p=h.float32Array,v=h.uint32Array,y=h.uint16Array,m=f.float32Array,d=f.uint32Array,g=f.uint16Array,_=t*2,x=e*2,w=cn(_,y),A=cn(x,g);let M=!1;if(A&&w)u?M=r(Mn(e,d),Bn(e*2,g),Mn(t,v),Bn(t*2,y),l,o+e,a,s+t):M=r(Mn(t,v),Bn(t*2,y),Mn(e,d),Bn(e*2,g),a,s+t,l,o+e);else if(A){const C=rr.getPrimitive();_t(e,m,C),C.applyMatrix4(n);const E=kn(t),S=zn(t,v);_t(E,p,Vs),_t(S,p,Gs);const P=C.intersectsBox(Vs),U=C.intersectsBox(Gs);M=P&&Jn(e,E,i,n,r,o,s,l,a+1,C,!u)||U&&Jn(e,S,i,n,r,o,s,l,a+1,C,!u),rr.releasePrimitive(C)}else{const C=kn(e),E=zn(e,d);_t(C,m,od),_t(E,m,ad);const S=c.intersectsBox(od),P=c.intersectsBox(ad);if(S&&P)M=Jn(t,C,n,i,r,s,o,a,l+1,c,u)||Jn(t,E,n,i,r,s,o,a,l+1,c,u);else if(S)if(w)M=Jn(t,C,n,i,r,s,o,a,l+1,c,u);else{const U=rr.getPrimitive();U.copy(od).applyMatrix4(n);const L=kn(t),F=zn(t,v);_t(L,p,Vs),_t(F,p,Gs);const z=U.intersectsBox(Vs),B=U.intersectsBox(Gs);M=z&&Jn(C,L,i,n,r,o,s,l,a+1,U,!u)||B&&Jn(C,F,i,n,r,o,s,l,a+1,U,!u),rr.releasePrimitive(U)}else if(P)if(w)M=Jn(t,E,n,i,r,s,o,a,l+1,c,u);else{const U=rr.getPrimitive();U.copy(ad).applyMatrix4(n);const L=kn(t),F=zn(t,v);_t(L,p,Vs),_t(F,p,Gs);const z=U.intersectsBox(Vs),B=U.intersectsBox(Gs);M=z&&Jn(E,L,i,n,r,o,s,l,a+1,U,!u)||B&&Jn(E,F,i,n,r,o,s,l,a+1,U,!u),rr.releasePrimitive(U)}}return M}const ac=new an,t_=new on,iP={strategy:hx,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class pm{static serialize(e,n={}){n={cloneBuffers:!0,...n};const i=e.geometry,r=e._roots,s=e._indirectBuffer,o=i.getIndex();let a;return n.cloneBuffers?a={roots:r.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:s?s.slice():null}:a={roots:r,index:o?o.array:null,indirectBuffer:s},a}static deserialize(e,n,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:r,roots:s,indirectBuffer:o}=e,a=new pm(n,{...i,[Qf]:!0});if(a._roots=s,a._indirectBuffer=o||null,i.setIndex){const l=n.getIndex();if(l===null){const c=new mn(e.index,1,!1);n.setIndex(c)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,n={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(n=Object.assign({...iP,[Qf]:!1},n),n.useSharedArrayBuffer&&!tP())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,n[Qf]||(yR(this,n),!e.boundingBox&&n.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new on))),this.resolveTriangleIndex=n.indirect?i=>this._indirectBuffer[i]:i=>i}refit(e=null){return(this.indirect?XR:IR)(this,e)}traverse(e,n=0){const i=this._roots[n],r=new Uint32Array(i),s=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,u=s[c+15]===Hu;if(u){const h=r[a+6],f=s[c+14];e(l,u,new Float32Array(i,a*4,6),h,f)}else{const h=a+Ea/4,f=r[a+6],p=r[a+7];e(l,u,new Float32Array(i,a*4,6),p)||(o(h,l+1),o(f,l+1))}}}raycast(e,n=yi,i=0,r=1/0){const s=this._roots,o=this.geometry,a=[],l=n.isMaterial,c=Array.isArray(n),u=o.groups,h=l?n.side:n,f=this.indirect?$R:FR;for(let p=0,v=s.length;p<v;p++){const y=c?n[u[p].materialIndex].side:h,m=a.length;if(f(this,p,y,e,a,i,r),c){const d=u[p].materialIndex;for(let g=m,_=a.length;g<_;g++)a[g].face.materialIndex=d}}return a}raycastFirst(e,n=yi,i=0,r=1/0){const s=this._roots,o=this.geometry,a=n.isMaterial,l=Array.isArray(n);let c=null;const u=o.groups,h=a?n.side:n,f=this.indirect?YR:BR;for(let p=0,v=s.length;p<v;p++){const y=l?n[u[p].materialIndex].side:h,m=f(this,p,y,e,i,r);m!=null&&(c==null||m.distance<c.distance)&&(c=m,l&&(m.face.materialIndex=u[p].materialIndex))}return c}intersectsGeometry(e,n){let i=!1;const r=this._roots,s=this.indirect?qR:kR;for(let o=0,a=r.length;o<a&&(i=s(this,o,e,n),!i);o++);return i}shapecast(e){const n=Hn.getPrimitive(),i=this.indirect?NR:LR;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const h=o;o=(f,p,v,y,m)=>h(f,p,v,y,m)?!0:i(f,p,this,a,v,y,n)}else o||(a?o=(h,f,p,v)=>i(h,f,this,a,p,v,n):o=(h,f,p)=>p);let l=!1,c=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const p=u[h];if(l=AR(this,h,s,o,r,c),l)break;c+=p.byteLength}return Hn.releasePrimitive(n),l}bvhcast(e,n,i){let{intersectsRanges:r,intersectsTriangles:s}=i;const o=Hn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?v=>{const y=this.resolveTriangleIndex(v);Tt(o,y*3,a,l)}:v=>{Tt(o,v*3,a,l)},u=Hn.getPrimitive(),h=e.geometry.index,f=e.geometry.attributes.position,p=e.indirect?v=>{const y=e.resolveTriangleIndex(v);Tt(u,y*3,h,f)}:v=>{Tt(u,v*3,h,f)};if(s){const v=(y,m,d,g,_,x,w,A)=>{for(let M=d,C=d+g;M<C;M++){p(M),u.a.applyMatrix4(n),u.b.applyMatrix4(n),u.c.applyMatrix4(n),u.needsUpdate=!0;for(let E=y,S=y+m;E<S;E++)if(c(E),o.needsUpdate=!0,s(o,u,E,M,_,x,w,A))return!0}return!1};if(r){const y=r;r=function(m,d,g,_,x,w,A,M){return y(m,d,g,_,x,w,A,M)?!0:v(m,d,g,_,x,w,A,M)}}else r=v}return nP(this,e,n,r)}intersectsBox(e,n){return ac.set(e.min,e.max,n),ac.needsUpdate=!0,this.shapecast({intersectsBounds:i=>ac.intersectsBox(i),intersectsTriangle:i=>ac.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:n=>e.intersectsBox(n),intersectsTriangle:n=>n.intersectsSphere(e)})}closestPointToGeometry(e,n,i={},r={},s=0,o=1/0){return(this.indirect?eP:WR)(this,e,n,i,r,s,o)}closestPointToPoint(e,n={},i=0,r=1/0){return TR(this,e,n,i,r)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{_t(0,new Float32Array(i),t_),e.union(t_)}),e}}const yx=1e-6,rP=yx*.5,xx=Math.pow(10,-Math.log10(yx)),sP=rP*xx;function mi(t){return~~(t*xx+sP)}function oP(t){return`${mi(t.x)},${mi(t.y)}`}function n_(t){return`${mi(t.x)},${mi(t.y)},${mi(t.z)}`}function aP(t){return`${mi(t.x)},${mi(t.y)},${mi(t.z)},${mi(t.w)}`}function lP(t,e,n){n.direction.subVectors(e,t).normalize();const i=t.dot(n.direction);return n.origin.copy(t).addScaledVector(n.direction,-i),n}function Sx(){return typeof SharedArrayBuffer<"u"}function cP(t){if(t.buffer instanceof SharedArrayBuffer)return t;const e=t.constructor,n=t.buffer,i=new SharedArrayBuffer(n.byteLength),r=new Uint8Array(n);return new Uint8Array(i).set(r,0),new e(i)}function uP(t,e=ArrayBuffer){return t>65535?new Uint32Array(new e(4*t)):new Uint16Array(new e(2*t))}function fP(t,e){if(!t.index){const n=t.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=uP(n,i);t.setIndex(new mn(r,1));for(let s=0;s<n;s++)r[s]=s}}function dP(t){return t.index?t.index.count:t.attributes.position.count}function mm(t){return dP(t)/3}const hP=1e-8,pP=new I;function mP(t){return~~(t/3)}function gP(t){return t%3}function i_(t,e){return t.start-e.start}function r_(t,e){return pP.subVectors(e,t.origin).dot(t.direction)}function _P(t,e,n,i=hP){t.sort(i_),e.sort(i_);for(let a=0;a<t.length;a++){const l=t[a];for(let c=0;c<e.length;c++){const u=e[c];if(!(u.start>l.end)){if(l.end<u.start||u.end<l.start)continue;if(l.start<=u.start&&l.end>=u.end)s(u.end,l.end)||t.splice(a+1,0,{start:u.end,end:l.end,index:l.index}),l.end=u.start,u.start=0,u.end=0;else if(l.start>=u.start&&l.end<=u.end)s(l.end,u.end)||e.splice(c+1,0,{start:l.end,end:u.end,index:u.index}),u.end=l.start,l.start=0,l.end=0;else if(l.start<=u.start&&l.end<=u.end){const h=l.end;l.end=u.start,u.start=h}else if(l.start>=u.start&&l.end>=u.end){const h=u.end;u.end=l.start,l.start=h}else throw new Error}if(n.has(l.index)||n.set(l.index,[]),n.has(u.index)||n.set(u.index,[]),n.get(l.index).push(u.index),n.get(u.index).push(l.index),o(u)&&(e.splice(c,1),c--),o(l)){t.splice(a,1),a--;break}}}r(t),r(e);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const s_=1e-5,o_=1e-4;class vP{constructor(){this._rays=[]}addRay(e){this._rays.push(e)}findClosestRay(e){const n=this._rays,i=e.clone();i.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,c=n.length;l<c;l++){const u=n[l];if(o(u,e)&&o(u,i))continue;const h=a(u,e),f=a(u,i),p=Math.min(h,f);p<r&&(r=p,s=u)}return s;function o(l,c){const u=l.origin.distanceTo(c.origin)>s_;return l.direction.angleTo(c.direction)>o_||u}function a(l,c){const u=l.origin.distanceTo(c.origin),h=l.direction.angleTo(c.direction);return u/s_+h/o_}}}const cd=new I,ud=new I,lc=new el;function yP(t,e,n){const i=t.attributes,r=t.index,s=i.position,o=new Map,a=new Map,l=Array.from(e),c=new vP;for(let u=0,h=l.length;u<h;u++){const f=l[u],p=mP(f),v=gP(f);let y=3*p+v,m=3*p+(v+1)%3;r&&(y=r.getX(y),m=r.getX(m)),cd.fromBufferAttribute(s,y),ud.fromBufferAttribute(s,m),lP(cd,ud,lc);let d,g=c.findClosestRay(lc);g===null&&(g=lc.clone(),c.addRay(g)),a.has(g)||a.set(g,{forward:[],reverse:[],ray:g}),d=a.get(g);let _=r_(g,cd),x=r_(g,ud);_>x&&([_,x]=[x,_]),lc.direction.dot(g.direction)<0?d.reverse.push({start:_,end:x,index:f}):d.forward.push({start:_,end:x,index:f})}return a.forEach(({forward:u,reverse:h},f)=>{_P(u,h,o,n),u.length===0&&h.length===0&&a.delete(f)}),{disjointConnectivityMap:o,fragmentMap:a}}const xP=new Me,fd=new I,SP=new et,dd=["","",""];class MP{constructor(e=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,e&&this.updateFrom(e)}getSiblingTriangleIndex(e,n){const i=this.data[e*3+n];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(e,n){const i=this.data[e*3+n];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(e,n){const i=e*3+n,r=this.disjointConnections.get(i);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(e,n){const i=e*3+n,r=this.disjointConnections.get(i);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(e){const{useAllAttributes:n,useDrawRange:i,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=n?_:g,a=new Map,{attributes:l}=e,c=n?Object.keys(l):null,u=e.index,h=l.position;let f=mm(e);const p=f;let v=0;i&&(v=e.drawRange.start,e.drawRange.count!==1/0&&(f=~~(e.drawRange.count/3)));let y=this.data;(!y||y.length<3*p)&&(y=new Int32Array(3*p)),y.fill(-1);let m=0,d=new Set;for(let x=v,w=f*3+v;x<w;x+=3){const A=x;for(let M=0;M<3;M++){let C=A+M;u&&(C=u.getX(C)),dd[M]=o(C)}for(let M=0;M<3;M++){const C=(M+1)%3,E=dd[M],S=dd[C],P=`${S}_${E}`;if(a.has(P)){const U=A+M,L=a.get(P);y[U]=L,y[L]=U,a.delete(P),m+=2,d.delete(L)}else{const U=`${E}_${S}`,L=A+M;a.set(U,L),d.add(L)}}}if(r){const{fragmentMap:x,disjointConnectivityMap:w}=yP(e,d,s);d.clear(),x.forEach(({forward:A,reverse:M})=>{A.forEach(({index:C})=>d.add(C)),M.forEach(({index:C})=>d.add(C))}),this.unmatchedDisjointEdges=x,this.disjointConnections=w,m=f*3-d.size}this.matchedEdges=m,this.unmatchedEdges=d.size,this.data=y;function g(x){return fd.fromBufferAttribute(h,x),n_(fd)}function _(x){let w="";for(let A=0,M=c.length;A<M;A++){const C=l[c[A]];let E;switch(C.itemSize){case 1:E=mi(C.getX(x));break;case 2:E=oP(xP.fromBufferAttribute(C,x));break;case 3:E=n_(fd.fromBufferAttribute(C,x));break;case 4:E=aP(SP.fromBufferAttribute(C,x));break}w!==""&&(w+="|"),w+=E}return w}}}class so extends wt{constructor(...e){super(...e),this.isBrush=!0,this._previousMatrix=new $e,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:e,_previousMatrix:n}=this,i=e.elements,r=n.elements;for(let s=0;s<16;s++)if(i[s]!==r[s])return!0;return!1}prepareGeometry(){const e=this.geometry,n=e.attributes,i=Sx();if(i)for(const r in n){const s=n[r];if(s.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");s.array=cP(s.array)}if(e.boundsTree||(fP(e,{useSharedArrayBuffer:i}),e.boundsTree=new pm(e,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:i})),e.halfEdges||(e.halfEdges=new MP(e)),!e.groupIndices){const r=mm(e),s=new Uint16Array(r),o=e.groups;for(let a=0,l=o.length;a<l;a++){const{start:c,count:u}=o[a];for(let h=c/3,f=(c+u)/3;h<f;h++)s[h]=a}e.groupIndices=s}}disposeCacheData(){const{geometry:e}=this;e.halfEdges=null,e.boundsTree=null,e.groupIndices=null}}const EP=1e-14,hd=new I,a_=new I,l_=new I;function lr(t,e=EP){hd.subVectors(t.b,t.a),a_.subVectors(t.c,t.a),l_.subVectors(t.b,t.c);const n=hd.angleTo(a_),i=hd.angleTo(l_),r=Math.PI-n-i;return Math.abs(n)<e||Math.abs(i)<e||Math.abs(r)<e||t.a.distanceToSquared(t.b)<e||t.a.distanceToSquared(t.c)<e||t.b.distanceToSquared(t.c)<e}const pd=1e-10,na=1e-10,wP=1e-10,Ti=new wn,yt=new wn,Ci=new I,md=new I,c_=new I,cc=new Nn,gd=new $n;class AP{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new lt),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class TP{constructor(){this.trianglePool=new AP,this.triangles=[],this.normal=new I,this.coplanarTriangleUsed=!1}initialize(e){this.reset();const{triangles:n,trianglePool:i,normal:r}=this;if(Array.isArray(e))for(let s=0,o=e.length;s<o;s++){const a=e[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Ci).dot(r))>pd)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=i.getTriangle();l.copy(a),n.push(l)}else{e.getNormal(r);const s=i.getTriangle();s.copy(e),n.push(s)}}splitByTriangle(e){const{normal:n,triangles:i}=this;if(e.getNormal(md).normalize(),Math.abs(1-Math.abs(md.dot(n)))<wP){this.coplanarTriangleUsed=!0;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.coplanarCount=0}const r=[e.a,e.b,e.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],l=r[o];Ci.subVectors(l,a).normalize(),c_.crossVectors(md,Ci),cc.setFromNormalAndCoplanarPoint(c_,a),this.splitByPlane(cc,e)}}else e.getPlane(cc),this.splitByPlane(cc,e)}splitByPlane(e,n){const{triangles:i,trianglePool:r}=this;gd.copy(n),gd.needsUpdate=!0;for(let s=0,o=i.length;s<o;s++){const a=i[s];if(!gd.intersectsTriangle(a,Ti,!0))continue;const{a:l,b:c,c:u}=a;let h=0,f=-1,p=!1,v=[],y=[];const m=[l,c,u];for(let d=0;d<3;d++){const g=(d+1)%3;Ti.start.copy(m[d]),Ti.end.copy(m[g]);const _=e.distanceToPoint(Ti.start),x=e.distanceToPoint(Ti.end);if(Math.abs(_)<na&&Math.abs(x)<na){p=!0;break}if(_>0?v.push(d):y.push(d),Math.abs(_)<na)continue;let w=!!e.intersectLine(Ti,Ci);!w&&Math.abs(x)<na&&(Ci.copy(Ti.end),w=!0),w&&!(Ci.distanceTo(Ti.start)<pd)&&(Ci.distanceTo(Ti.end)<pd&&(f=d),h===0?yt.start.copy(Ci):yt.end.copy(Ci),h++)}if(!p&&h===2&&yt.distance()>na)if(f!==-1){f=(f+1)%3;let d=0;d===f&&(d=(d+1)%3);let g=d+1;g===f&&(g=(g+1)%3);const _=r.getTriangle();_.a.copy(m[g]),_.b.copy(yt.end),_.c.copy(yt.start),lr(_)||i.push(_),a.a.copy(m[d]),a.b.copy(yt.start),a.c.copy(yt.end),lr(a)&&(i.splice(s,1),s--,o--)}else{const d=v.length>=2?y[0]:v[0];if(d===0){let A=yt.start;yt.start=yt.end,yt.end=A}const g=(d+1)%3,_=(d+2)%3,x=r.getTriangle(),w=r.getTriangle();m[g].distanceToSquared(yt.start)<m[_].distanceToSquared(yt.end)?(x.a.copy(m[g]),x.b.copy(yt.start),x.c.copy(yt.end),w.a.copy(m[g]),w.b.copy(m[_]),w.c.copy(yt.start)):(x.a.copy(m[_]),x.b.copy(yt.start),x.c.copy(yt.end),w.a.copy(m[g]),w.b.copy(m[_]),w.c.copy(yt.end)),a.a.copy(m[d]),a.b.copy(yt.end),a.c.copy(yt.start),lr(x)||i.push(x),lr(w)||i.push(w),lr(a)&&(i.splice(s,1),s--,o--)}else h===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function CP(t){return t=~~t,t+4-t%4}class u_{constructor(e,n=500){this.expansionFactor=1.5,this.type=e,this.length=0,this.array=null,this.setSize(n)}setType(e){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const n=this.array.buffer;this.array=new e(n),this.type=e}setSize(e){if(this.array&&e===this.array.length)return;const n=this.type,i=Sx()?SharedArrayBuffer:ArrayBuffer,r=new n(new i(CP(e*n.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:e,expansionFactor:n}=this;this.setSize(e.length*n)}push(...e){let{array:n,length:i}=this;i+e.length>n.length&&(this.expand(),n=this.array);for(let r=0,s=e.length;r<s;r++)n[i+r]=e[r];this.length+=e.length}clear(){this.length=0}}class bP{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(e){return this.groupAttributes[0][e].type}getItemSize(e){return this.groupAttributes[0][e].itemSize}getNormalized(e){return this.groupAttributes[0][e].normalized}getCount(e){if(this.groupCount<=e)return 0;const n=this.getGroupAttrArray("position",e);return n.length/n.itemSize}getTotalLength(e){const{groupCount:n,groupAttributes:i}=this;let r=0;for(let s=0;s<n;s++){const o=i[s];r+=o[e].length}return r}getGroupAttrSet(e=0){const{groupAttributes:n}=this;if(n[e])return this.groupCount=Math.max(this.groupCount,e+1),n[e];const i=n[0];for(this.groupCount=Math.max(this.groupCount,e+1);e>=n.length;){const r={};n.push(r);for(const s in i){const o=i[s],a=new u_(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,r[s]=a}}return n[e]}getGroupAttrArray(e,n=0){const{groupAttributes:i}=this;if(!i[0][e])throw new Error(`TypedAttributeData: Attribute with "${e}" has not been initialized`);return this.getGroupAttrSet(n)[e]}initializeArray(e,n,i,r){const{groupAttributes:s}=this,a=s[0][e];if(a){if(a.type!==n)for(let l=0,c=s.length;l<c;l++){const u=s[l][e];u.setType(n),u.itemSize=i,u.normalized=r}}else for(let l=0,c=s.length;l<c;l++){const u=new u_(n);u.itemSize=i,u.normalized=r,s[l][e]=u}}clear(){this.groupCount=0;const{groupAttributes:e}=this;e.forEach(n=>{for(const i in n)n[i].clear()})}delete(e){this.groupAttributes.forEach(n=>{delete n[e]})}reset(){this.groupAttributes=[],this.groupCount=0}}class f_{constructor(){this.intersectionSet={},this.ids=[]}add(e,n){const{intersectionSet:i,ids:r}=this;i[e]||(i[e]=[],r.push(e)),i[e].push(n)}}const RP=0,Uc=1,PP=2,LP=3,IP=4,Mx=5,Ex=6,Ln=new el,d_=new $e,Zt=new lt,bi=new I,h_=new et,p_=new et,m_=new et,_d=new et,uc=new et,fc=new et,g_=new wn,vd=new I,yd=1e-8,DP=1e-15,$r=-1,jr=1,Nc=-2,Fc=2,Aa=0,kr=1,gm=2,UP=1e-14;let Oc=null;function __(t){Oc=t}function wx(t,e){t.getMidpoint(Ln.origin),t.getNormal(Ln.direction);const n=e.raycastFirst(Ln,qt);return!!(n&&Ln.direction.dot(n.face.normal)>0)?$r:jr}function NP(t,e){function n(){return Math.random()-.5}t.getNormal(vd),Ln.direction.copy(vd),t.getMidpoint(Ln.origin);const i=3;let r=0,s=1/0;for(let o=0;o<i;o++){Ln.direction.x+=n()*yd,Ln.direction.y+=n()*yd,Ln.direction.z+=n()*yd,Ln.direction.multiplyScalar(-1);const a=e.raycastFirst(Ln,qt);if(!!(a&&Ln.direction.dot(a.face.normal)>0)&&r++,a!==null&&(s=Math.min(s,a.distance)),s<=DP)return a.face.normal.dot(vd)>0?Fc:Nc;if(r/i>.5||(o-r+1)/i>.5)break}return r/i>.5?$r:jr}function FP(t,e){const n=new f_,i=new f_;return d_.copy(t.matrixWorld).invert().multiply(e.matrixWorld),t.geometry.boundsTree.bvhcast(e.geometry.boundsTree,d_,{intersectsTriangles(r,s,o,a){if(!lr(r)&&!lr(s)){let l=r.intersectsTriangle(s,g_,!0);if(!l){const c=r.plane,u=s.plane,h=c.normal,f=u.normal;h.dot(f)===1&&Math.abs(c.constant-u.constant)<UP&&(l=!0)}if(l){let c=t.geometry.boundsTree.resolveTriangleIndex(o),u=e.geometry.boundsTree.resolveTriangleIndex(a);n.add(c,u),i.add(u,c),Oc&&(Oc.addEdge(g_),Oc.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:n,bIntersections:i}}function OP(t,e,n,i,r,s,o=!1){const a=n.attributes,l=n.index,c=t*3,u=l.getX(c+0),h=l.getX(c+1),f=l.getX(c+2);for(const p in s){const v=a[p],y=s[p];if(!(p in a))throw new Error(`CSG Operations: Attribute ${p} not available on geometry.`);const m=v.itemSize;p==="position"?(Zt.a.fromBufferAttribute(v,u).applyMatrix4(i),Zt.b.fromBufferAttribute(v,h).applyMatrix4(i),Zt.c.fromBufferAttribute(v,f).applyMatrix4(i),xd(Zt.a,Zt.b,Zt.c,e,3,y,o)):p==="normal"?(Zt.a.fromBufferAttribute(v,u).applyNormalMatrix(r),Zt.b.fromBufferAttribute(v,h).applyNormalMatrix(r),Zt.c.fromBufferAttribute(v,f).applyNormalMatrix(r),o&&(Zt.a.multiplyScalar(-1),Zt.b.multiplyScalar(-1),Zt.c.multiplyScalar(-1)),xd(Zt.a,Zt.b,Zt.c,e,3,y,o,!0)):(h_.fromBufferAttribute(v,u),p_.fromBufferAttribute(v,h),m_.fromBufferAttribute(v,f),xd(h_,p_,m_,e,m,y,o))}}function BP(t,e,n,i,r,s,o,a=!1){Sd(t,i,r,s,o,a),Sd(a?n:e,i,r,s,o,a),Sd(a?e:n,i,r,s,o,a)}function Ax(t,e,n=!1){switch(t){case RP:if(e===jr||e===Fc&&!n)return kr;break;case Uc:if(n){if(e===$r)return Aa}else if(e===jr||e===Nc)return kr;break;case PP:if(n){if(e===jr||e===Nc)return kr}else if(e===$r)return Aa;break;case IP:if(e===$r)return Aa;if(e===jr)return kr;break;case LP:if(e===$r||e===Fc&&!n)return kr;break;case Mx:if(!n&&(e===jr||e===Nc))return kr;break;case Ex:if(!n&&(e===$r||e===Fc))return kr;break;default:throw new Error(`Unrecognized CSG operation enum "${t}".`)}return gm}function xd(t,e,n,i,r,s,o=!1,a=!1){const l=c=>{s.push(c.x),r>1&&s.push(c.y),r>2&&s.push(c.z),r>3&&s.push(c.w)};_d.set(0,0,0,0).addScaledVector(t,i.a.x).addScaledVector(e,i.a.y).addScaledVector(n,i.a.z),uc.set(0,0,0,0).addScaledVector(t,i.b.x).addScaledVector(e,i.b.y).addScaledVector(n,i.b.z),fc.set(0,0,0,0).addScaledVector(t,i.c.x).addScaledVector(e,i.c.y).addScaledVector(n,i.c.z),a&&(_d.normalize(),uc.normalize(),fc.normalize()),l(_d),o?(l(fc),l(uc)):(l(uc),l(fc))}function Sd(t,e,n,i,r,s=!1){for(const o in r){const a=e[o],l=r[o];if(!(o in e))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const c=a.itemSize;o==="position"?(bi.fromBufferAttribute(a,t).applyMatrix4(n),l.push(bi.x,bi.y,bi.z)):o==="normal"?(bi.fromBufferAttribute(a,t).applyNormalMatrix(i),s&&bi.multiplyScalar(-1),l.push(bi.x,bi.y,bi.z)):(l.push(a.getX(t)),c>1&&l.push(a.getY(t)),c>2&&l.push(a.getZ(t)),c>3&&l.push(a.getW(t)))}}class kP{constructor(e){this.triangle=new lt().copy(e),this.intersects={}}addTriangle(e,n){this.intersects[e]=new lt().copy(n)}getIntersectArray(){const e=[],{intersects:n}=this;for(const i in n)e.push(n[i]);return e}}class v_{constructor(){this.data={}}addTriangleIntersection(e,n,i,r){const{data:s}=this;s[e]||(s[e]=new kP(n)),s[e].addTriangle(i,r)}getTrianglesAsArray(e=null){const{data:n}=this,i=[];if(e!==null)e in n&&i.push(n[e].triangle);else for(const r in n)i.push(n[r].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(e=>parseInt(e))}getIntersectionIndices(e){const{data:n}=this;return n[e]?Object.keys(n[e].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(e=null,n=null){const{data:i}=this,r=new Set,s=[],o=a=>{if(i[a])if(n!==null)i[a].intersects[n]&&s.push(i[a].intersects[n]);else{const l=i[a].intersects;for(const c in l)r.has(c)||(r.add(c),s.push(l[c]))}};if(e!==null)o(e);else for(const a in i)o(a);return s}reset(){this.data={}}}class zP{constructor(){this.enabled=!1,this.triangleIntersectsA=new v_,this.triangleIntersectsB=new v_,this.intersectionEdges=[]}addIntersectingTriangles(e,n,i,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(e,n,i,r),o.addTriangleIntersection(i,r,e,n)}addEdge(e){this.intersectionEdges.push(e.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),__(this))}complete(){this.enabled&&__(null)}}const dr=new $e,_u=new Fe,zr=new lt,dc=new lt,tr=new lt,hc=new lt,oi=[],ts=[];function HP(t){for(const e of t)return e}function VP(t,e,n,i,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=FP(t,e),c=[];let u=null,h;return h=o?0:-1,y_(t,e,a,n,!1,i,r,h),x_(t,e,a,n,!1,r,h),n.findIndex(p=>p!==Ex&&p!==Mx)!==-1&&(h=o?t.geometry.groups.length||1:-1,y_(e,t,l,n,!0,i,r,h),x_(e,t,l,n,!0,r,h)),oi.length=0,ts.length=0,{groups:c,materials:u}}function y_(t,e,n,i,r,s,o,a=0){const l=t.matrixWorld.determinant()<0;dr.copy(e.matrixWorld).invert().multiply(t.matrixWorld),_u.getNormalMatrix(t.matrixWorld).multiplyScalar(l?-1:1);const c=t.geometry.groupIndices,u=t.geometry.index,h=t.geometry.attributes.position,f=e.geometry.boundsTree,p=e.geometry.index,v=e.geometry.attributes.position,y=n.ids,m=n.intersectionSet;for(let d=0,g=y.length;d<g;d++){const _=y[d],x=a===-1?0:c[_]+a,w=3*_,A=u.getX(w+0),M=u.getX(w+1),C=u.getX(w+2);zr.a.fromBufferAttribute(h,A).applyMatrix4(dr),zr.b.fromBufferAttribute(h,M).applyMatrix4(dr),zr.c.fromBufferAttribute(h,C).applyMatrix4(dr),s.reset(),s.initialize(zr);const E=m[_];for(let P=0,U=E.length;P<U;P++){const L=3*E[P],F=p.getX(L+0),z=p.getX(L+1),B=p.getX(L+2);dc.a.fromBufferAttribute(v,F),dc.b.fromBufferAttribute(v,z),dc.c.fromBufferAttribute(v,B),s.splitByTriangle(dc)}const S=s.triangles;for(let P=0,U=S.length;P<U;P++){const L=S[P],F=s.coplanarTriangleUsed?NP(L,f):wx(L,f);oi.length=0,ts.length=0;for(let z=0,B=i.length;z<B;z++){const $=Ax(i[z],F,r);$!==gm&&(ts.push($),oi.push(o[z].getGroupAttrSet(x)))}if(oi.length!==0){zr.getBarycoord(L.a,hc.a),zr.getBarycoord(L.b,hc.b),zr.getBarycoord(L.c,hc.c);for(let z=0,B=oi.length;z<B;z++){const $=oi[z],q=ts[z]===Aa;OP(_,hc,t.geometry,t.matrixWorld,_u,$,l!==q)}}}}return y.length}function x_(t,e,n,i,r,s,o=0){const a=t.matrixWorld.determinant()<0;dr.copy(e.matrixWorld).invert().multiply(t.matrixWorld),_u.getNormalMatrix(t.matrixWorld).multiplyScalar(a?-1:1);const l=e.geometry.boundsTree,c=t.geometry.groupIndices,u=t.geometry.index,h=t.geometry.attributes,f=h.position,p=[],v=t.geometry.halfEdges,y=new Set,m=mm(t.geometry);for(let d=0,g=m;d<g;d++)d in n.intersectionSet||y.add(d);for(;y.size>0;){const d=HP(y);y.delete(d),p.push(d);const g=3*d,_=u.getX(g+0),x=u.getX(g+1),w=u.getX(g+2);tr.a.fromBufferAttribute(f,_).applyMatrix4(dr),tr.b.fromBufferAttribute(f,x).applyMatrix4(dr),tr.c.fromBufferAttribute(f,w).applyMatrix4(dr);const A=wx(tr,l);ts.length=0,oi.length=0;for(let M=0,C=i.length;M<C;M++){const E=Ax(i[M],A,r);E!==gm&&(ts.push(E),oi.push(s[M]))}for(;p.length>0;){const M=p.pop();for(let C=0;C<3;C++){const E=v.getSiblingTriangleIndex(M,C);E!==-1&&y.has(E)&&(p.push(E),y.delete(E))}if(oi.length!==0){const C=3*M,E=u.getX(C+0),S=u.getX(C+1),P=u.getX(C+2),U=o===-1?0:c[M]+o;if(tr.a.fromBufferAttribute(f,E),tr.b.fromBufferAttribute(f,S),tr.c.fromBufferAttribute(f,P),!lr(tr))for(let L=0,F=oi.length;L<F;L++){const z=ts[L],B=oi[L].getGroupAttrSet(U),$=z===Aa;BP(E,S,P,h,t.matrixWorld,_u,B,$!==a)}}}}}function GP(t){for(let e=0;e<t.length-1;e++){const n=t[e],i=t[e+1];if(n.materialIndex===i.materialIndex){const r=n.start,s=i.start+i.count;i.start=r,i.count=s-r,t.splice(e,1),e--}}}function WP(t,e,n,i){n.clear();const r=t.attributes;for(let s=0,o=i.length;s<o;s++){const a=i[s],l=r[a];n.initializeArray(a,l.array.constructor,l.itemSize,l.normalized)}for(const s in n.attributes)i.includes(s)||n.delete(s);for(const s in e.attributes)i.includes(s)||(e.deleteAttribute(s),e.dispose())}function XP(t,e,n){let i=!1,r=-1;const s=t.attributes,o=e.groupAttributes[0];for(const l in o){const c=e.getTotalLength(l),u=e.getType(l),h=e.getItemSize(l),f=e.getNormalized(l);let p=s[l];(!p||p.array.length<c)&&(p=new mn(new u(c),h,f),t.setAttribute(l,p),i=!0);let v=0;for(let y=0,m=Math.min(n.length,e.groupCount);y<m;y++){const d=n[y].index,{array:g,type:_,length:x}=e.groupAttributes[d][l],w=new _(g.buffer,0,x);p.array.set(w,v),v+=w.length}p.needsUpdate=!0,r=c/p.itemSize}if(t.index){const l=t.index.array;if(l.length<r)t.index=null,i=!0;else for(let c=0,u=l.length;c<u;c++)l[c]=c}let a=0;t.clearGroups();for(let l=0,c=Math.min(n.length,e.groupCount);l<c;l++){const{index:u,materialIndex:h}=n[l],f=e.getCount(u);f!==0&&(t.addGroup(a,f,h),a+=f)}t.setDrawRange(0,r),t.boundsTree=null,i&&t.dispose()}function S_(t,e){let n=e;return Array.isArray(e)||(n=[],t.forEach(i=>{n[i.materialIndex]=e})),n}class $P{constructor(){this.triangleSplitter=new TP,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new zP}getGroupRanges(e){return!this.useGroups||e.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:e.groups.map(n=>({...n}))}evaluate(e,n,i,r=new so){let s=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(r)||(r=[r],s=!1),r.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");e.prepareGeometry(),n.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:l,useGroups:c,consolidateGroups:u,debug:h}=this;for(;a.length<r.length;)a.push(new bP);r.forEach((d,g)=>{WP(e.geometry,d.geometry,a[g],l)}),h.init(),VP(e,n,i,o,a,{useGroups:c}),h.complete();const f=this.getGroupRanges(e.geometry),p=S_(f,e.material),v=this.getGroupRanges(n.geometry),y=S_(v,n.material);v.forEach(d=>d.materialIndex+=p.length);let m=[...f,...v].map((d,g)=>({...d,index:g}));if(c){const d=[...p,...y];u&&(m=m.map(_=>{const x=d[_.materialIndex];return _.materialIndex=d.indexOf(x),_}).sort((_,x)=>_.materialIndex-x.materialIndex));const g=[];for(let _=0,x=d.length;_<x;_++){let w=!1;for(let A=0,M=m.length;A<M;A++){const C=m[A];C.materialIndex===_&&(w=!0,C.materialIndex=g.length)}w&&g.push(d[_])}r.forEach(_=>{_.material=g})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach(d=>{d.material=p[0]});return r.forEach((d,g)=>{const _=d.geometry;XP(_,a[g],m),u&&GP(_.groups)}),s?r:r[0]}evaluateHierarchy(e,n=new so){e.updateMatrixWorld(!0);const i=(s,o)=>{const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];u.isOperationGroup?i(u,o):o(u)}},r=s=>{const o=s.children;let a=!1;for(let c=0,u=o.length;c<u;c++){const h=o[c];a=r(h)||a}const l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let c;return i(s,u=>{c?c=this.evaluate(c,u,u.operation):c=this.evaluate(s,u,u.operation)}),s._cachedGeometry=c.geometry,s._cachedMaterials=c.material,!0}else return a||l};return r(e),n.geometry=e._cachedGeometry,n.material=e._cachedMaterials,n}reset(){this.triangleSplitter.reset()}}class jP{constructor(e,n,i){this.scene=n,this.cylinder=void 0,this.FlatSheet=void 0,this.dataOBJ=e,this.grid=i}updateDATA(e){this.dataOBJ=e}updateFlatern(){console.log(this.dataOBJ),this.removeCylinder(),this.removeFlatSheet(),this.makeFlatePatern()}update(){console.log(this.dataOBJ),this.removeCylinder(),this.removeFlatSheet(),this.makeCylinder()}makeFlatePatern(){new L0({color:10066329});const e=new so(new Qn(1,1,10));e.position.x=5,e.position.z=2,e.updateMatrixWorld();const n=new so(new Qn(2,2,10));n.position.x=-15,n.position.z=-5,n.updateMatrixWorld();const i=new so(new Qn(.5,.5,5));i.position.x=7,i.position.z=-10,i.updateMatrixWorld();const r=new so(new Io(50,.1,30));r.updateMatrixWorld();const s=new $P;let o=s.evaluate(r,e,Uc);o=s.evaluate(o,n,Uc),o=s.evaluate(o,i,Uc),this.FlatSheet=o,this.scene.add(o),console.log("Flat patern")}makeCylinder(){let e=this.dataOBJ.diameter/100,n=this.dataOBJ.height/100,i=this.dataOBJ.insulation/100,r=e/2,s=r+i,o=n-r/2,a=n+i*2+r/2,l=r/2,c=r*1.3;console.log(c);const u=new Wl({color:65535,opacity:1,side:qt,transparent:!1,flatShading:!0}),h=new Wl({color:16777215,opacity:.4,side:qt,transparent:!0,flatShading:!0}),f=new Qn(r,r,o),p=new wt(f,u),v=new Qn(s,s,a),y=new wt(v,h);let m=a/2;p.position.y=m,y.position.y=m;const d=new la;d.add(p),d.add(y);let g=r/2+1;const _=new Qn(g,g,l),x=new wt(_,u);x.position.y=-(n/2+i)+m,d.add(x);var w=this.createDomeWithPoints(c,l,32);let A=w.geometry;A.deleteAttribute("normal"),A.deleteAttribute("uv"),A=tR(A);const M=[],C=A.getAttribute("position");for(let F=0;F<C.count;F++){const z=new I;z.fromBufferAttribute(C,F),M.push(z)}const E=new Wl({color:65535,opacity:1,side:qt,transparent:!1,flatShading:!0}),S=new eR(M),P=new wt(S,E),U=new wt(S,E);d.add(P),d.add(U),P.position.y=-c+l+o/2-.1+m,U.rotation.z=Math.PI,U.position.y=+c-l-o/2+.1+m;let L=s;if(this.dataOBJ.con1){let F=.1,z=100/100,B=this.dataOBJ.con1ang,$=this.dataOBJ.con1height/100;const O=new Qn(F,F,z),q=new wt(O,u);q.position.set(Math.cos(B)*L,$,Math.sin(B)*L),q.rotation.set(Math.PI/2,0,B+Math.PI/2),d.add(q)}if(this.dataOBJ.con2){let F=.1,z=100/100,B=this.dataOBJ.con2ang,$=this.dataOBJ.con2height/100;const O=new Qn(F,F,z),q=new wt(O,u);q.position.set(Math.cos(B)*L,$,Math.sin(B)*L),q.rotation.set(Math.PI/2,0,B+Math.PI/2),d.add(q)}if(this.dataOBJ.con3){let F=.1,z=100/100,B=this.dataOBJ.con3ang,$=this.dataOBJ.con3height/100;const O=new Qn(F,F,z),q=new wt(O,u);q.position.set(Math.cos(B)*L,$,Math.sin(B)*L),q.rotation.set(Math.PI/2,0,B+Math.PI/2),d.add(q)}this.cylinder=d,this.scene.add(d),console.log("Cylinder ")}getFlatPatern(){var e=new(void 0)(15,5,.1),n=new(void 0)(5,5,5),i=new ThreeBSP(n),r=new ThreeBSP(e),s=r.subtract(i),o=s.toMesh();o.material=new L0({color:10066329}),this.scene.add(o)}removeCylinder(){console.log(this.cylinder),this.scene.remove(this.cylinder)}removeFlatSheet(){console.log(this.FlatSheet),this.scene.remove(this.FlatSheet)}createDome(e,n){n>e&&(console.warn("Height cannot exceed the radius. Adjusting height to equal radius."),n=e);const i=new cm(e,32,32),r=i.attributes.position.array;for(let a=0;a<r.length;a+=3){r[a];const l=r[a+1];r[a+2],l<n-e&&(r[a]=0,r[a+1]=0,r[a+2]=0)}i.attributes.position.needsUpdate=!0,i.computeVertexNormals();const s=new Cb({color:30719});return new wt(i,s)}createDomeWithPoints(e,n,i){n>e&&(console.warn("Height cannot exceed the radius. Adjusting height to equal radius."),n=e);const r=[],s=[];for(let c=0;c<=i;c++){const u=Math.PI/2*(c/i);for(let h=0;h<=i;h++){const f=2*Math.PI*h/i,p=e*Math.sin(u)*Math.cos(f),v=e*Math.cos(u),y=e*Math.sin(u)*Math.sin(f);v>=e-n&&r.push(p,v,y)}}for(let c=0;c<i;c++)for(let u=0;u<i;u++){const h=c*(i+1)+u,f=h+i+1,p=h+1,v=f+1;s.push(h,f,p),s.push(p,f,v)}const o=new bn;o.setAttribute("position",new Ct(r,3)),o.setIndex(s),o.computeVertexNormals();const a=new Wl({color:16777215,opacity:1,side:qt,transparent:!1,flatShading:!0});return new wt(o,a)}}class YP{constructor(){}get(){return{diameter:900,height:1e3,insulation:50,lilHeight:100,con1:!1,con1opt:"FemaleBoss 30mm",con1height:400,con1ang:0,con2:!1,con2opt:"FemaleBoss 30mm",con2height:500,con2ang:0,con3:!1,con3opt:"FemaleBoss 30mm",con3height:600,con3ang:0,con4:!1,con4opt:"FemaleBoss 30mm",con4height:400,con4ang:0,con5:!1,con5opt:"FemaleBoss 30mm",con5height:400,con5ang:0,con6:!1,con6opt:"FemaleBoss 30mm",con6height:400,con6ang:0,con7:!1,con7opt:"FemaleBoss 30mm",con7height:400,con7ang:0,con8:!1,con8opt:"FemaleBoss 30mm",con8height:400,con8ang:0,con9:!1,con9opt:"FemaleBoss 30mm",con9height:400,con9ang:0}}}function qP(){return yu.useEffect(()=>{const t=new kb("myThreeJsCanvas");t.initialize(),t.animate();let e=t.getScene(),n=t.getGrid(),r=new YP().get();console.log(r);const s=new jP(r,e,n),o=new qb(s);return o.initialize(),()=>{o.gui.destroy()}},[]),Bc.jsx("div",{children:Bc.jsx("canvas",{id:"myThreeJsCanvas"})})}Uy(document.getElementById("root")).render(Bc.jsx(yu.StrictMode,{children:Bc.jsx(qP,{})}));
