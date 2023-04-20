var app=function(t){"use strict";function e(){}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function $(t){m=t}const b=[],x=[],v=[],y=[],k=Promise.resolve();let _=!1;function w(t){v.push(t)}let E=!1;const C=new Set;function j(){if(!E){E=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),A(e.$$)}for(b.length=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];C.has(e)||(C.add(e),e())}v.length=0}while(b.length);for(;y.length;)y.pop()();_=!1,E=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const L=new Set;function M(t,e){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,k.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,i,l,s,u,d,f=[-1]){const h=m;$(t);const p=i.props||{},g=t.$$={fragment:null,ctx:null,props:d,update:e,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:r(),dirty:f,skip_bound:!1};let b=!1;if(g.ctx=l?l(t,p,(e,n,...r)=>{const o=r.length?r[0]:n;return g.ctx&&u(g.ctx[e],g.ctx[e]=o)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](o),b&&M(t,e)),n}):[],g.update(),b=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();i.intro&&((x=t.$$.fragment)&&x.i&&(L.delete(x),x.i(v))),function(t,e,r){const{fragment:i,on_mount:l,on_destroy:s,after_update:c}=t.$$;i&&i.m(e,r),w(()=>{const e=l.map(n).filter(a);s?s.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(w)}(t,i.target,i.anchor),j()}var x,v;$(h)}let T;function P(t,e,n){const r=t.slice();return r[12]=e[n],r}function G(t){let e,n;return{c(){e=u("div"),p(e,"class","cell"),p(e,"data-status",n=t[12].alive?"alive":"dead")},m(t,n){s(t,e,n)},p(t,r){4&r&&n!==(n=t[12].alive?"alive":"dead")&&p(e,"data-status",n)},d(t){t&&c(e)}}}function H(t){let n,r,a,i,m,$,b,x,v,y,k,_,w,E,C,j,A=t[1]?"Pause":"Start",L=t[2],M=[];for(let e=0;e<L.length;e+=1)M[e]=G(P(t,L,e));return{c(){n=u("main"),r=u("header"),a=u("h1"),a.textContent="Game of Life",i=f(),m=u("button"),$=d(A),b=f(),x=u("button"),x.textContent="Reset",v=f(),y=u("div");for(let t=0;t<M.length;t+=1)M[t].c();var o,l,s;k=f(),_=u("label"),w=d("Generations: "),E=d(t[0]),this.c=e,p(y,"class","game-grid"),o="grid-template-columns",l="repeat("+N+", 10px)",y.style.setProperty(o,l,s?"important":""),p(_,"for","game-grid")},m(e,o){s(e,n,o),l(n,r),l(r,a),l(r,i),l(r,m),l(m,$),l(r,b),l(r,x),l(n,v),l(n,y);for(let t=0;t<M.length;t+=1)M[t].m(y,null);l(n,k),l(n,_),l(_,w),l(_,E),C||(j=[h(m,"click",t[4]),h(x,"click",t[3])],C=!0)},p(t,[e]){if(2&e&&A!==(A=t[1]?"Pause":"Start")&&g($,A),4&e){let n;for(L=t[2],n=0;n<L.length;n+=1){const r=P(t,L,n);M[n]?M[n].p(r,e):(M[n]=G(r),M[n].c(),M[n].m(y,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=L.length}1&e&&g(E,t[0])},i:e,o:e,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(M,t),C=!1,o(j)}}}"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const N=50;function O(t,e,n){const r=Math.pow(N,2);let o=0,a=!1,i=Array(r).fill({alive:!1});const l=t=>[i[t-1],i[t+1],i[t+N-1],i[t+N],i[t+N+1],i[t-N-1],i[t-N],i[t-N+1]].filter(t=>t&&t.alive);let s=null;const c=()=>{n(1,a=!1),s&&(clearInterval(s),s=null)},u=()=>{n(1,a=!0),s=setInterval(()=>{n(2,i=i.map((t,e)=>3===l(e).length||t.alive&&2===l(e).length?{alive:!0}:{alive:!1})),n(0,o++,o),i.some(t=>t.alive)||c()},500)};return[o,a,i,()=>{n(2,i=Array(r).fill({alive:!1})),c()},()=>{i.some(t=>t.alive)||n(2,i=(()=>{const t=[];for(let e=0;e<r;e++)t.push({alive:Math.random()>.5});return t})()),a?c():u()}]}class R extends T{constructor(t){super(),this.shadowRoot.innerHTML='<style>main{--gamesome-pink:#dd2d5a;--border-color:#d9d9d9;display:flex;flex-direction:column;align-items:center;justify-content:center}header{display:grid;grid-gap:16px;grid-template-columns:10fr 1fr 1fr;align-items:center;width:100%;max-width:1350px;padding:8px 16px}h1{color:var(--gamesome-pink);font-weight:100;margin:0}button{outline:none;cursor:pointer;line-height:1em;border:none;max-height:32px;padding:8px 16px;color:#fff;background:var(--gamesome-pink);display:flex;align-items:center;justify-content:center;border-radius:20px;transition:filter 0.3s ease}button:hover{filter:brightness(1.1)}button:active{filter:brightness(0.9)}.game-grid{margin-top:20px;display:grid;justify-items:center}.cell{height:10px;width:10px;border:1px solid var(--border-color)}.cell[data-status="alive"]{background:var(--gamesome-pink)}.cell[data-status="dead"]{background:transparent}</style>',S(this,{target:this.shadowRoot},O,H,i,{}),t&&t.target&&s(t.target,this,t.anchor)}}return customElements.define("game-of-life",R),t.Game=R,t}({});
//# sourceMappingURL=game.js.map