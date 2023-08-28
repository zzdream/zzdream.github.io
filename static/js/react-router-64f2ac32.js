import{l as t,g as n,r as e}from"./@babel-9fa0b289.js";import{a as o}from"./react-78128977.js";import{P as r}from"./prop-types-5e56cc5e.js";import{c as i,a,l as s,b as u}from"./history-d5b8f739.js";import{i as c}from"./tiny-invariant-e5df5709.js";import{p}from"./path-to-regexp-34c84acc.js";import"./react-is-80a4043c.js";import{h as l}from"./hoist-non-react-statics-21ba72c1.js";var h=1073741823,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var m=o.createContext||function(n,e){var i,a,s,u="__create-react-context-"+((f[s="__global_unique_id__"]=(f[s]||0)+1)+"__"),c=function(n){function o(){for(var t,e,o,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=n.call.apply(n,[this].concat(i))||this).emitter=(e=t.props.value,o=[],{on:function(t){o.push(t)},off:function(t){o=o.filter((function(n){return n!==t}))},get:function(){return e},set:function(t,n){e=t,o.forEach((function(t){return t(e,n)}))}}),t}t(o,n);var r=o.prototype;return r.getChildContext=function(){var t;return(t={})[u]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,o=this.props.value,r=t.value;((i=o)===(a=r)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(o,r):h,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},o}(o.Component);c.childContextTypes=((i={})[u]=r.object.isRequired,i);var p=function(e){function o(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).observedBits=void 0,t.state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}t(o,e);var r=o.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?h:n},r.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?h:t},r.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},r.getValue=function(){return this.context[u]?this.context[u].get():n},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},o}(o.Component);return p.contextTypes=((a={})[u]=r.object,a),{Provider:c,Consumer:p}},d=function(t){var n=m();return n.displayName=t,n},v=d("Router-History"),y=d("Router"),g=function(n){function e(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(t){e._pendingLocation=t}))),e}t(e,n),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var r=e.prototype;return r.componentDidMount=function(){var t=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(n){t._isMounted&&t.setState({location:n})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},r.render=function(){return o.createElement(y.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(v.Provider,{children:this.props.children||null,value:this.props.history}))},e}(o.Component),C=function(n){function e(){for(var t,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))||this).history=i(t.props),t}return t(e,n),e.prototype.render=function(){return o.createElement(g,{history:this.history,children:this.props.children})},e}(o.Component),x=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var o=e.prototype;return o.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},o.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},o.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},o.render=function(){return null},e}(o.Component);function b(t){var n=t.message,e=t.when,r=void 0===e||e;return o.createElement(y.Consumer,null,(function(t){if(t||c(!1),!r||t.staticContext)return null;var e=t.history.block;return o.createElement(x,{onMount:function(t){t.release=e(n)},onUpdate:function(t,o){o.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var E={},_=1e4,M=0;function U(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(E[t])return E[t];var n=p.compile(t);return M<_&&(E[t]=n,M++),n}(t)(n,{pretty:!0})}function w(t){var e=t.computedMatch,r=t.to,i=t.push,u=void 0!==i&&i;return o.createElement(y.Consumer,null,(function(t){t||c(!1);var i=t.history,p=t.staticContext,l=u?i.push:i.replace,h=a(e?"string"==typeof r?U(r,e.params):n({},r,{pathname:U(r.pathname,e.params)}):r);return p?(l(h),null):o.createElement(x,{onMount:function(){l(h)},onUpdate:function(t,e){var o=a(e.to);s(o,n({},h,{key:o.key}))||l(h)},to:r})}))}var P={},R=1e4,A=0;function j(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,o=e.path,r=e.exact,i=void 0!==r&&r,a=e.strict,s=void 0!==a&&a,u=e.sensitive,c=void 0!==u&&u;return[].concat(o).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var o=function(t,n){var e=""+n.end+n.strict+n.sensitive,o=P[e]||(P[e]={});if(o[t])return o[t];var r=[],i={regexp:p(t,r,n),keys:r};return A<R&&(o[t]=i,A++),i}(e,{end:i,strict:s,sensitive:c}),r=o.regexp,a=o.keys,u=r.exec(t);if(!u)return null;var l=u[0],h=u.slice(1),f=t===l;return i&&!f?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:f,params:a.reduce((function(t,n,e){return t[n.name]=h[e],t}),{})}}),null)}var k=function(e){function r(){return e.apply(this,arguments)||this}return t(r,e),r.prototype.render=function(){var t=this;return o.createElement(y.Consumer,null,(function(e){e||c(!1);var r=t.props.location||e.location,i=t.props.computedMatch?t.props.computedMatch:t.props.path?j(r.pathname,t.props):e.match,a=n({},e,{location:r,match:i}),s=t.props,u=s.children,p=s.component,l=s.render;return Array.isArray(u)&&function(t){return 0===o.Children.count(t)}(u)&&(u=null),o.createElement(y.Provider,{value:a},a.match?u?"function"==typeof u?u(a):u:p?o.createElement(p,a):l?l(a):null:"function"==typeof u?u(a):null)}))},r}(o.Component);function B(t){return"/"===t.charAt(0)?t:"/"+t}function L(t,e){if(!t)return e;var o=B(t);return 0!==e.pathname.indexOf(o)?e:n({},e,{pathname:e.pathname.substr(o.length)})}function T(t){return"string"==typeof t?t:u(t)}function W(t){return function(){c(!1)}}function S(){}var D=function(r){function i(){for(var t,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(t=r.call.apply(r,[this].concat(e))||this).handlePush=function(n){return t.navigateTo(n,"PUSH")},t.handleReplace=function(n){return t.navigateTo(n,"REPLACE")},t.handleListen=function(){return S},t.handleBlock=function(){return S},t}t(i,r);var s=i.prototype;return s.navigateTo=function(t,e){var o=this.props,r=o.basename,i=void 0===r?"":r,s=o.context,u=void 0===s?{}:s;u.action=e,u.location=function(t,e){return t?n({},e,{pathname:B(t)+e.pathname}):e}(i,a(t)),u.url=T(u.location)},s.render=function(){var t=this.props,r=t.basename,i=void 0===r?"":r,s=t.context,u=void 0===s?{}:s,c=t.location,p=void 0===c?"/":c,l=e(t,["basename","context","location"]),h={createHref:function(t){return B(i+T(t))},action:"POP",location:L(i,a(p)),push:this.handlePush,replace:this.handleReplace,go:W(),goBack:W(),goForward:W(),listen:this.handleListen,block:this.handleBlock};return o.createElement(g,n({},l,{history:h,staticContext:u}))},i}(o.Component),V=function(e){function r(){return e.apply(this,arguments)||this}return t(r,e),r.prototype.render=function(){var t=this;return o.createElement(y.Consumer,null,(function(e){e||c(!1);var r,i,a=t.props.location||e.location;return o.Children.forEach(t.props.children,(function(t){if(null==i&&o.isValidElement(t)){r=t;var s=t.props.path||t.props.from;i=s?j(a.pathname,n({},t.props,{path:s})):e.match}})),i?o.cloneElement(r,{location:a,computedMatch:i}):null}))},r}(o.Component);function H(t){var r="withRouter("+(t.displayName||t.name)+")",i=function(r){var i=r.wrappedComponentRef,a=e(r,["wrappedComponentRef"]);return o.createElement(y.Consumer,null,(function(e){return e||c(!1),o.createElement(t,n({},a,e,{ref:i}))}))};return i.displayName=r,i.WrappedComponent=t,l(i,t)}var N=o.useContext;function q(){return N(v)}function O(){return N(y).location}function F(){var t=N(y).match;return t?t.params:{}}function z(t){var n=O(),e=N(y).match;return t?j(n.pathname,t):e}export{C as M,b as P,g as R,D as S,w as a,k as b,y as c,V as d,O as e,F as f,U as g,z as h,j as m,q as u,H as w};