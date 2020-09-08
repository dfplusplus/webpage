var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){e=""+e,t.data!==e&&(t.data=e)}let g;function m(t){g=t}const h=[],$=[],b=[],y=[],v=Promise.resolve();let x=!1;function w(t){b.push(t)}let k=!1;const C=new Set;function j(){if(!k){k=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];m(e),_(e.$$)}for(h.length=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while(h.length);for(;y.length;)y.pop()();x=!1,k=!1,C.clear()}}function _(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const A=new Set;function S(t,e){t&&t.i&&(A.delete(t),t.i(e))}function E(t,e,n,s){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push(()=>{A.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function D(t){t&&t.c()}function F(t,n,o){const{fragment:r,on_mount:l,on_destroy:c,after_update:u}=t.$$;r&&r.m(n,o),w(()=>{const n=l.map(e).filter(a);c?c.push(...n):s(n),t.$$.on_mount=[]}),u.forEach(w)}function T(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,v.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,a,o,r,l,u,i=[-1]){const f=g;m(e);const p=a.props||{},d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:i};let h=!1;if(d.ctx=o?o(e,p,(t,n,...s)=>{const a=s.length?s[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=a)&&(d.bound[t]&&d.bound[t](a),h&&M(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();a.intro&&S(e.$$.fragment),F(e,a.target,a.anchor),j()}m(f)}class H{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function B(e){let n;return{c(){n=u("div"),n.innerHTML='<div class="background left border svelte-12mvwgc"></div> \n  <div class="background middle svelte-12mvwgc"></div> \n  <div class="background right border svelte-12mvwgc"></div>',p(n,"class","main svelte-12mvwgc")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class K extends H{constructor(t){super(),N(this,t,null,B,o,{})}}function L(e){let n,s,a,o;return{c(){n=u("link"),s=f(),a=u("p"),o=i(e[0]),p(n,"rel","stylesheet"),p(n,"href","https://fonts.googleapis.com/css2?family=Viga"),p(a,"class","svelte-1kdl86r")},m(t,e){l(t,n,e),l(t,s,e),l(t,a,e),r(a,o)},p(t,[e]){1&e&&d(o,t[0])},i:t,o:t,d(t){t&&c(n),t&&c(s),t&&c(a)}}}function O(t,e,n){let{text:s}=e;return t.$set=t=>{"text"in t&&n(0,s=t.text)},[s]}class P extends H{constructor(t){super(),N(this,t,O,L,o,{text:0})}}function V(e){let n,s,a,o,f;return{c(){n=u("h1"),s=u("mark"),a=i(q),o=i(e[0]),f=i(q),p(s,"class","svelte-gl4yof"),p(n,"class","svelte-gl4yof")},m(t,e){l(t,n,e),r(n,s),r(s,a),r(s,o),r(s,f)},p(t,[e]){1&e&&d(o,t[0])},i:t,o:t,d(t){t&&c(n)}}}let q=" ";function z(t,e,n){let{text:s}=e;return t.$set=t=>{"text"in t&&n(0,s=t.text)},[s]}class I extends H{constructor(t){super(),N(this,t,z,V,o,{text:0})}}function Y(e){let n;return{c(){n=u("nav"),n.innerHTML='<ul class="svelte-1eyjk6s"><li class="svelte-1eyjk6s"><a href="https://dfplusplus.github.io/webpage" class="svelte-1eyjk6s">Home</a></li> \n    <li class="svelte-1eyjk6s"><a href="https://dfplusplus.github.io/webpage/downloads/" class="svelte-1eyjk6s">\n        All Downloads\n      </a></li> \n    <li class="svelte-1eyjk6s"><a href="https://dfplusplus.github.io/webpage/features/" class="svelte-1eyjk6s">Features</a></li> \n    <li class="svelte-1eyjk6s"><a href="https://dfplusplus.github.io/webpage/credits/" class="svelte-1eyjk6s">Credits</a></li> \n    <li class="svelte-1eyjk6s"><a href="https://github.com/dfplusplus/mod" target="_blank" class="svelte-1eyjk6s">Source</a></li></ul>',p(n,"class","svelte-1eyjk6s")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class G extends H{constructor(t){super(),N(this,t,null,Y,o,{})}}function J(e){let n,s,a,o,i,d,g,m,h,$,b,y,v,x,w,k,C,j,_,A,M,N,H,B,L,O,V,q,z,Y,J,Q,R,U,W,X,Z,tt,et,nt,st,at,ot,rt,lt,ct,ut,it,ft,pt,dt,gt,mt,ht,$t,bt,yt,vt,xt,wt,kt,Ct,jt,_t,At,St,Et,Dt,Ft,Tt,Mt;return a=new K({}),i=new G({}),m=new P({props:{text:"Features"}}),$=new I({props:{text:"Chat Splitting"}}),U=new I({props:{text:"Staff Chat Shortcuts"}}),ut=new I({props:{text:"Complete Compatibility"}}),mt=new I({props:{text:"Command Keybinds"}}),{c(){n=u("link"),s=f(),D(a.$$.fragment),o=f(),D(i.$$.fragment),d=f(),g=u("main"),D(m.$$.fragment),h=f(),D($.$$.fragment),b=f(),y=u("p"),y.textContent="Ever found your main chat getting cluttered? Keeps things organised by\n    shifting the stuff you want to see to a secondary chats. That's right!\n    There's now two chats.",v=f(),x=u("br"),w=f(),k=u("img"),j=f(),_=u("br"),A=f(),M=u("p"),M.textContent="Contains built in support for /msg messages, and all staff chats. If that's\n    not enough you can also define a custom filter for the stuff you want.",N=f(),H=u("br"),B=f(),L=u("p"),L.textContent="You can also apply a sound effect to each chat, to get a little 'ding' each\n    time somebody says your name.",O=f(),V=u("p"),V.textContent="Fine-tine the sizing of this second chat with an ingame screen.",q=f(),z=u("img"),J=f(),Q=u("br"),R=f(),D(U.$$.fragment),W=f(),X=u("p"),X.textContent="Send messages to staff chats instantly with a keybind!",Z=f(),tt=u("img"),nt=f(),st=u("p"),st.textContent="Acts like normal chat, but will be sent to support chat. Bind it to any key you want.",at=f(),ot=u("p"),ot.textContent="Available for all staff chat rooms.",rt=f(),lt=u("br"),ct=f(),D(ut.$$.fragment),it=f(),ft=u("p"),ft.textContent="All updates available for both Fabric and Forge loaders. No need to pick and choose!",pt=f(),dt=u("br"),gt=f(),D(mt.$$.fragment),ht=f(),$t=u("p"),$t.textContent="Perform other common commands with just a keybind!",bt=f(),yt=u("img"),xt=f(),wt=u("p"),wt.textContent="More coming soon...",kt=f(),Ct=u("br"),jt=f(),_t=u("br"),At=f(),St=u("br"),Et=f(),Dt=u("br"),Ft=f(),Tt=u("br"),p(n,"rel","stylesheet"),p(n,"href","https://fonts.googleapis.com/css2?family=Viga"),p(y,"class","svelte-1aae4pu"),k.src!==(C="features1.png")&&p(k,"src","features1.png"),p(k,"alt","Demo of chat sides"),p(k,"class","svelte-1aae4pu"),p(M,"class","svelte-1aae4pu"),p(L,"class","svelte-1aae4pu"),p(V,"class","svelte-1aae4pu"),z.src!==(Y="features5.png")&&p(z,"src","features5.png"),p(z,"alt","Demo of chat settings"),p(z,"class","svelte-1aae4pu"),p(X,"class","svelte-1aae4pu"),tt.src!==(et="features2.png")&&p(tt,"src","features2.png"),p(tt,"alt","Demo of chat rooms"),p(tt,"class","svelte-1aae4pu"),p(st,"class","svelte-1aae4pu"),p(ot,"class","svelte-1aae4pu"),p(ft,"class","svelte-1aae4pu"),p($t,"class","svelte-1aae4pu"),yt.src!==(vt="features3.png")&&p(yt,"src","features3.png"),p(yt,"alt","Demo of command keybinds"),p(yt,"class","svelte-1aae4pu"),p(wt,"class","svelte-1aae4pu"),p(g,"class","svelte-1aae4pu")},m(t,e){l(t,n,e),l(t,s,e),F(a,t,e),l(t,o,e),F(i,t,e),l(t,d,e),l(t,g,e),F(m,g,null),r(g,h),F($,g,null),r(g,b),r(g,y),r(g,v),r(g,x),r(g,w),r(g,k),r(g,j),r(g,_),r(g,A),r(g,M),r(g,N),r(g,H),r(g,B),r(g,L),r(g,O),r(g,V),r(g,q),r(g,z),r(g,J),r(g,Q),r(g,R),F(U,g,null),r(g,W),r(g,X),r(g,Z),r(g,tt),r(g,nt),r(g,st),r(g,at),r(g,ot),r(g,rt),r(g,lt),r(g,ct),F(ut,g,null),r(g,it),r(g,ft),r(g,pt),r(g,dt),r(g,gt),F(mt,g,null),r(g,ht),r(g,$t),r(g,bt),r(g,yt),r(g,xt),r(g,wt),r(g,kt),r(g,Ct),r(g,jt),r(g,_t),r(g,At),r(g,St),r(g,Et),r(g,Dt),r(g,Ft),r(g,Tt),Mt=!0},p:t,i(t){Mt||(S(a.$$.fragment,t),S(i.$$.fragment,t),S(m.$$.fragment,t),S($.$$.fragment,t),S(U.$$.fragment,t),S(ut.$$.fragment,t),S(mt.$$.fragment,t),Mt=!0)},o(t){E(a.$$.fragment,t),E(i.$$.fragment,t),E(m.$$.fragment,t),E($.$$.fragment,t),E(U.$$.fragment,t),E(ut.$$.fragment,t),E(mt.$$.fragment,t),Mt=!1},d(t){t&&c(n),t&&c(s),T(a,t),t&&c(o),T(i,t),t&&c(d),t&&c(g),T(m),T($),T(U),T(ut),T(mt)}}}return new class extends H{constructor(t){super(),N(this,t,null,J,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
