import{t as M,n as W,c as R,w as K}from"./with-install-278c4a2b.js";import{b as re,w as ve,r as fe,R as he,n as de,c as Q,O as q,Q as $,l as ge,H as B,u as me}from"./use-translate-a757506f.js";import{u as we}from"./use-touch-8f92051d.js";import{u as U}from"./use-expose-2590a160.js";import{o as pe}from"./on-popup-reopen-e5b691e6.js";import{A as j,u as J,H as F,D as v,x as C,M as G,J as Se,L as ye,I as be,e as I,q as Z}from"./vue-libs-b2a2f6f9.js";const[ee,z]=Q("swipe"),Te={loop:M,width:W,height:W,vertical:Boolean,autoplay:R(0),duration:R(500),touchable:M,lazyRender:Boolean,initialSwipe:R(0),indicatorColor:String,showIndicators:M,stopPropagation:M},te=Symbol(ee),xe=j({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:w,slots:h}){const l=J(),f=J(),t=F({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let y=!1;const u=we(),{children:g,linkChildren:c}=re(te),i=v(()=>g.length),s=v(()=>t[a.vertical?"height":"width"]),r=v(()=>a.vertical?u.deltaY.value:u.deltaX.value),p=v(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-s.value*i.value:0),O=v(()=>s.value?Math.ceil(Math.abs(p.value)/s.value):i.value),k=v(()=>i.value*s.value),A=v(()=>(t.active+i.value)%i.value),H=v(()=>{const e=a.vertical?"vertical":"horizontal";return u.direction.value===e}),ae=v(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${t.offset}px)`};if(s.value){const o=a.vertical?"height":"width",n=a.vertical?"width":"height";e[o]=`${k.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:o}=t;return e?a.loop?B(o+e,-1,i.value):B(o+e,0,O.value):o},V=(e,o=0)=>{let n=e*s.value;a.loop||(n=Math.min(n,-p.value));let d=o-n;return a.loop||(d=B(d,p.value,0)),d},m=({pace:e=0,offset:o=0,emitChange:n})=>{if(i.value<=1)return;const{active:d}=t,S=ie(e),P=V(S,o);if(a.loop){if(g[0]&&P!==p.value){const D=P<p.value;g[0].setOffset(D?k.value:0)}if(g[i.value-1]&&P!==0){const D=P>0;g[i.value-1].setOffset(D?-k.value:0)}}t.active=S,t.offset=P,n&&S!==d&&w("change",A.value)},E=()=>{t.swiping=!0,t.active<=-1?m({pace:i.value}):t.active>=i.value&&m({pace:-i.value})},ne=()=>{E(),u.reset(),$(()=>{t.swiping=!1,m({pace:-1,emitChange:!0})})},Y=()=>{E(),u.reset(),$(()=>{t.swiping=!1,m({pace:1,emitChange:!0})})};let X;const T=()=>clearTimeout(X),x=()=>{T(),a.autoplay>0&&i.value>1&&(X=setTimeout(()=>{Y(),x()},+a.autoplay))},b=(e=+a.initialSwipe)=>{if(!l.value)return;const o=()=>{if(!q(l)){const n={width:l.value.offsetWidth,height:l.value.offsetHeight};t.rect=n,t.width=+(a.width??n.width),t.height=+(a.height??n.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=V(e),g.forEach(n=>{n.setOffset(0)}),x()};q(l)?Z().then(o):o()},_=()=>b(t.active);let L;const oe=e=>{!a.touchable||e.touches.length>1||(u.start(e),y=!1,L=Date.now(),T(),E())},se=e=>{a.touchable&&t.swiping&&(u.move(e),H.value&&(!a.loop&&(t.active===0&&r.value>0||t.active===i.value-1&&r.value<0)||(ge(e,a.stopPropagation),m({offset:r.value}),y||(w("dragStart"),y=!0))))},N=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-L,o=r.value/e;if((Math.abs(o)>.25||Math.abs(r.value)>s.value/2)&&H.value){const d=a.vertical?u.offsetY.value:u.offsetX.value;let S=0;a.loop?S=d>0?r.value>0?-1:1:0:S=-Math[r.value>0?"ceil":"floor"](r.value/s.value),m({pace:S,emitChange:!0})}else r.value&&m({pace:0});y=!1,t.swiping=!1,w("dragEnd"),x()},ce=(e,o={})=>{E(),u.reset(),$(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,o.immediate?$(()=>{t.swiping=!1}):t.swiping=!1,m({pace:n-t.active,emitChange:!0})})},le=(e,o)=>{const n=o===A.value,d=n?{backgroundColor:a.indicatorColor}:void 0;return I("i",{style:d,class:z("indicator",{active:n})},null)},ue=()=>{if(h.indicator)return h.indicator({active:A.value,total:i.value});if(a.showIndicators&&i.value>1)return I("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(le)])};return U({prev:ne,next:Y,state:t,resize:_,swipeTo:ce}),c({size:s,props:a,count:i,activeIndicator:A}),C(()=>a.initialSwipe,e=>b(+e)),C(i,()=>b(t.active)),C(()=>a.autoplay,x),C([ve,fe],_),C(he(),e=>{e==="visible"?x():T()}),G(b),Se(()=>b(t.active)),pe(()=>b(t.active)),ye(T),be(T),de("touchmove",se,{target:f}),()=>{var e;return I("div",{ref:l,class:z()},[I("div",{ref:f,style:ae.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:oe,onTouchend:N,onTouchcancel:N},[(e=h.default)==null?void 0:e.call(h)]),ue()])}}}),Pe=K(xe),Re=Pe,[Ce,Ie]=Q("swipe-item"),Ae=j({name:Ce,setup(a,{slots:w}){let h;const l=F({offset:0,inited:!1,mounted:!1}),{parent:f,index:t}=me(te);if(!f)return;const y=v(()=>{const c={},{vertical:i}=f.props;return f.size.value&&(c[i?"height":"width"]=`${f.size.value}px`),l.offset&&(c.transform=`translate${i?"Y":"X"}(${l.offset}px)`),c}),u=v(()=>{const{loop:c,lazyRender:i}=f.props;if(!i||h)return!0;if(!l.mounted)return!1;const s=f.activeIndicator.value,r=f.count.value-1,p=s===0&&c?r:s-1,O=s===r&&c?0:s+1;return h=t.value===s||t.value===p||t.value===O,h}),g=c=>{l.offset=c};return G(()=>{Z(()=>{l.mounted=!0})}),U({setOffset:g}),()=>{var c;return I("div",{class:Ie(),style:y.value},[u.value?(c=w.default)==null?void 0:c.call(w):null])}}}),Ee=K(Ae),Be=Ee;export{Pe as S,Re as V,Ee as a,Be as b};
