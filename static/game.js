var app=function(t){"use strict";function e(){}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function h(t){g=t}const x=[],b=[],$=[],v=[],y=Promise.resolve();let k=!1;function _(t){$.push(t)}let w=!1;const E=new Set;function C(){if(!w){w=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];h(e),A(e.$$)}for(x.length=0;b.length;)b.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];E.has(e)||(E.add(e),e())}$.length=0}while(x.length);for(;v.length;)v.pop()();k=!1,w=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const L=new Set;function T(t,e){-1===t.$$.dirty[0]&&(x.push(t),k||(k=!0,y.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(t,i,l,c,u,d,f=[-1]){const p=g;h(t);const m=i.props||{},x=t.$$={fragment:null,ctx:null,props:d,update:e,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:r(),dirty:f};let b=!1;if(x.ctx=l?l(t,m,(e,n,...r)=>{const o=r.length?r[0]:n;return x.ctx&&u(x.ctx[e],x.ctx[e]=o)&&(x.bound[e]&&x.bound[e](o),b&&T(t,e)),n}):[],x.update(),b=!0,o(x.before_update),x.fragment=!!c&&c(x.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);x.fragment&&x.fragment.l(t),t.forEach(s)}else x.fragment&&x.fragment.c();i.intro&&(($=t.$$.fragment)&&$.i&&(L.delete($),$.i(v))),function(t,e,r){const{fragment:i,on_mount:l,on_destroy:c,after_update:s}=t.$$;i&&i.m(e,r),_(()=>{const e=l.map(n).filter(a);c?c.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(_)}(t,i.target,i.anchor),C()}var $,v;h(p)}let M;function S(t,e,n){const r=t.slice();return r[10]=e[n],r}function P(t){let e,n;return{c(){e=u("div"),m(e,"class","cell"),m(e,"data-status",n=t[10].alive?"alive":"dead")},m(t,n){c(t,e,n)},p(t,r){2&r&&n!==(n=t[10].alive?"alive":"dead")&&m(e,"data-status",n)},d(t){t&&s(e)}}}function H(t){let n,r,a,i,g,h,x,b,$,v,y,k=t[0]?"Pause":"Start",_=t[1],w=[];for(let e=0;e<_.length;e+=1)w[e]=P(S(t,_,e));return{c(){n=u("main"),r=u("header"),a=u("h1"),a.textContent="Game of Life",i=f(),g=u("button"),h=d(k),x=f(),b=u("button"),b.textContent="Reset",$=f(),v=u("div");for(let t=0;t<w.length;t+=1)w[t].c();var t,o,l;this.c=e,m(v,"class","game-grid"),t="grid-template-columns",o="repeat("+N+", minmax(20px, 1fr))",v.style.setProperty(t,o,l?"important":"")},m(e,s,u){c(e,n,s),l(n,r),l(r,a),l(r,i),l(r,g),l(g,h),l(r,x),l(r,b),l(n,$),l(n,v);for(let t=0;t<w.length;t+=1)w[t].m(v,null);u&&o(y),y=[p(g,"click",t[3]),p(b,"click",t[2])]},p(t,[e]){if(1&e&&k!==(k=t[0]?"Pause":"Start")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(h,k),2&e){let n;for(_=t[1],n=0;n<_.length;n+=1){const r=S(t,_,n);w[n]?w[n].p(r,e):(w[n]=P(r),w[n].c(),w[n].m(v,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=_.length}},i:e,o:e,d(t){t&&s(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(w,t),o(y)}}}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});const N=60;function R(t,e,n){let r=null,o=!1,a=Array(30*N).fill({alive:!1});const i=t=>[a[t-1],a[t+1],a[t+N-1],a[t+N],a[t+N+1],a[t-N-1],a[t-N],a[t-N+1]].filter(t=>t&&t.alive),l=()=>{n(0,o=!1),r&&(clearTimeout(r),r=null)},c=()=>{n(0,o=!0),r=setTimeout(()=>{n(1,a=a.map((t,e)=>3===i(e).length||t.alive&&2===i(e).length?{alive:!0}:{alive:!1})),a.some(t=>t.alive)?c():l()},700)};return[o,a,()=>{n(1,a=Array(30*N).fill({alive:!1})),l()},()=>{a.some(t=>t.alive)||n(1,a=(()=>{const t=[],e=30*N;for(let n=0;n<e;n++)t.push({alive:Math.random()>.5});return t})()),o?l():c()}]}class G extends M{constructor(t){super(),this.shadowRoot.innerHTML='<style>main{--gamesome-pink:#dd2d5a;--border-color:#d9d9d9;display:flex;flex-direction:column;align-items:center;justify-content:center}header{display:grid;grid-gap:16px;grid-template-columns:10fr 1fr 1fr;align-items:center;width:100%;max-width:1350px;padding:8px 16px}h1{color:var(--gamesome-pink);font-weight:100;margin:0}button{outline:none;cursor:pointer;line-height:1em;border:none;max-height:32px;padding:8px 16px;color:#fff;background:var(--gamesome-pink);display:flex;align-items:center;justify-content:center;border-radius:20px;transition:filter 0.3s ease}button:hover{filter:brightness(1.1)}button:active{filter:brightness(0.9)}.game-grid{margin-top:20px;display:grid;justify-items:center;grid-gap:0.5px}.cell{height:20px;width:20px;border:1px solid var(--border-color)}.cell[data-status="alive"]{background:var(--gamesome-pink)}.cell[data-status="dead"]{background:transparent}</style>',j(this,{target:this.shadowRoot},R,H,i,{}),t&&t.target&&c(t.target,this,t.anchor)}}return customElements.define("game-of-life",G),t.Game=G,t}({});