var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function g(t){d=t}const m=[],p=[],$=[],h=[],v=Promise.resolve();let y=!1;function b(t){$.push(t)}let x=!1;const _=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];g(e),k(e.$$)}for(m.length=0;p.length;)p.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];_.has(e)||(_.add(e),e())}$.length=0}while(m.length);for(;h.length;)h.pop()();y=!1,x=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const E=new Set;function A(t,e){t&&t.i&&(E.delete(t),t.i(e))}function C(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push(()=>{E.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function N(t){t&&t.c()}function j(t,n,c){const{fragment:s,on_mount:l,on_destroy:u,after_update:i}=t.$$;s&&s.m(n,c),b(()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(b)}function D(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(m.push(t),y||(y=!0,v.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,r,c,s,l,i,a=[-1]){const f=d;g(e);const m=r.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a};let $=!1;if(p.ctx=c?c(e,m,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),$&&L(e,t)),n}):[],p.update(),$=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&A(e.$$.fragment),j(e,r.target,r.anchor),w()}g(f)}class O{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function S(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="background left border svelte-12mvwgc"></div> \n  <div class="background middle svelte-12mvwgc"></div> \n  <div class="background right border svelte-12mvwgc"></div>',f(n,"class","main svelte-12mvwgc")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class T extends O{constructor(t){super(),M(this,t,null,S,c,{})}}function q(e){let n,o,r,c,d,g,m,p,$,h,v,y;return r=new T({}),v=new T({props:{text:"Downloads"}}),{c(){n=i("link"),o=a(),N(r.$$.fragment),c=a(),d=i("main"),g=i("img"),p=a(),$=i("p"),$.textContent="Level up your DiamondFire experience",h=a(),N(v.$$.fragment),f(n,"rel","stylesheet"),f(n,"href","https://fonts.googleapis.com/css2?family=Viga"),g.src!==(m="../logo.png")&&f(g,"src","../logo.png"),f(g,"alt","logo"),f(g,"class","svelte-11cm94y"),f($,"class","subtitle svelte-11cm94y"),f(d,"class","svelte-11cm94y")},m(t,e){l(t,n,e),l(t,o,e),j(r,t,e),l(t,c,e),l(t,d,e),s(d,g),s(d,p),s(d,$),s(d,h),j(v,d,null),y=!0},p:t,i(t){y||(A(r.$$.fragment,t),A(v.$$.fragment,t),y=!0)},o(t){C(r.$$.fragment,t),C(v.$$.fragment,t),y=!1},d(t){t&&u(n),t&&u(o),D(r,t),t&&u(c),t&&u(d),D(v)}}}return new class extends O{constructor(t){super(),M(this,t,null,q,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
