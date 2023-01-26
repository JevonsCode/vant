import{X as F,K as b,q as N,c as U,f as E,a as A}from"./use-translate-a757506f.js";import{A as T,D as S,x as B,e as o,u as x,r as L,o as V,a as G,w as P,C as e,d as I,F as O}from"./vue-libs-b2a2f6f9.js";import{n as D,m as $,c as _,t as j,a as q,w as H}from"./with-install-278c4a2b.js";import{V as M}from"./index-018e8a5c.js";import"./use-route-efd4b866.js";import"./index-bd55b31d.js";import"./index-8c81c046.js";import"./index-61c1f2e0.js";import"./constant-a81ffd37.js";const[K,y]=U("circle");let X=0;const z=r=>Math.min(Math.max(+r,0),100);function J(r,n){const s=r?1:0;return`M ${n/2} ${n/2} m 0, -500 a 500, 500 0 1, ${s} 0, 1000 a 500, 500 0 1, ${s} 0, -1000`}const Q={text:String,size:D,fill:$("none"),rate:_(100),speed:_(0),color:[String,Object],clockwise:j,layerColor:String,currentRate:q(0),strokeWidth:_(40),strokeLinecap:String,startPosition:$("top")},Y=T({name:K,props:Q,emits:["update:currentRate"],setup(r,{emit:n,slots:s}){const m=`van-circle-${X++}`,f=S(()=>+r.strokeWidth+1e3),d=S(()=>J(r.clockwise,f.value)),p=S(()=>{const t={top:0,right:90,bottom:180,left:270}[r.startPosition];if(t)return{transform:`rotate(${t}deg)`}});B(()=>r.rate,l=>{let t;const c=Date.now(),a=r.currentRate,i=z(l),g=Math.abs((a-i)*1e3/+r.speed),k=()=>{const W=Date.now(),w=Math.min((W-c)/g,1)*(i-a)+a;n("update:currentRate",z(parseFloat(w.toFixed(1)))),(i>a?w<i:w>i)&&(t=b(k))};r.speed?(t&&F(t),t=b(k)):n("update:currentRate",i)},{immediate:!0});const C=()=>{const{strokeWidth:t,currentRate:c,strokeLinecap:a}=r,i=3140*c/100,g=E(r.color)?`url(#${m})`:r.color,k={stroke:g,strokeWidth:`${+t+1}px`,strokeLinecap:a,strokeDasharray:`${i}px ${3140}px`};return o("path",{d:d.value,style:k,class:y("hover"),stroke:g},null)},v=()=>{const l={fill:r.fill,stroke:r.layerColor,strokeWidth:`${r.strokeWidth}px`};return o("path",{class:y("layer"),style:l,d:d.value},null)},h=()=>{const{color:l}=r;if(!E(l))return;const t=Object.keys(l).sort((c,a)=>parseFloat(c)-parseFloat(a)).map((c,a)=>o("stop",{key:a,offset:c,"stop-color":l[c]},null));return o("defs",null,[o("linearGradient",{id:m,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[t])])},R=()=>{if(s.default)return s.default();if(r.text)return o("div",{class:y("text")},[r.text])};return()=>o("div",{class:y(),style:N(r.size)},[o("svg",{viewBox:`0 0 ${f.value} ${f.value}`,style:p.value},[h(),v(),C()]),R()])}}),Z=H(Y),u=Z,tt={style:{"margin-top":"15px"}},dt=T({__name:"index",setup(r){const n=A({"zh-CN":{left:"左侧",right:"右侧",bottom:"底部",gradient:"渐变色",customSize:"大小定制",customStyle:"样式定制",customColor:"颜色定制",customWidth:"宽度定制",startPosition:"起始位置",counterClockwise:"逆时针"},"en-US":{left:"Left",right:"Right",bottom:"Bottom",gradient:"Gradient",customSize:"Custom Size",customStyle:"Custom Style",customColor:"Custom Color",customWidth:"Custom Width",startPosition:"Start Position",counterClockwise:"Counter Clockwise"}}),s=x(70),m=x(70),f=x(70),d=x(70),p=x(70),C={"0%":"#3fecff","100%":"#6149f6"},v=l=>Math.min(Math.max(l,0),100),h=()=>{s.value=v(s.value+20)},R=()=>{s.value=v(s.value-20)};return(l,t)=>{const c=L("demo-block");return V(),G(O,null,[o(c,{title:e(n)("basicUsage")},{default:P(()=>[o(e(u),{"current-rate":m.value,"onUpdate:current-rate":t[0]||(t[0]=a=>m.value=a),rate:s.value,speed:100,text:m.value.toFixed(0)+"%"},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),o(c,{title:e(n)("customStyle")},{default:P(()=>[o(e(u),{"current-rate":d.value,"onUpdate:current-rate":t[1]||(t[1]=a=>d.value=a),rate:s.value,speed:100,"stroke-width":60,text:e(n)("customWidth")},null,8,["current-rate","rate","text"]),o(e(u),{"current-rate":d.value,"onUpdate:current-rate":t[2]||(t[2]=a=>d.value=a),color:"#ee0a24",rate:s.value,"layer-color":"#ebedf0",speed:100,text:e(n)("customColor")},null,8,["current-rate","rate","text"]),o(e(u),{"current-rate":f.value,"onUpdate:current-rate":t[3]||(t[3]=a=>f.value=a),rate:s.value,speed:100,color:C,text:e(n)("gradient")},null,8,["current-rate","rate","text"]),o(e(u),{"current-rate":p.value,"onUpdate:current-rate":t[4]||(t[4]=a=>p.value=a),color:"#07c160",rate:s.value,speed:100,clockwise:!1,text:e(n)("counterClockwise"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"]),o(e(u),{"current-rate":p.value,"onUpdate:current-rate":t[5]||(t[5]=a=>p.value=a),color:"#7232dd",rate:s.value,speed:100,size:"120px",clockwise:!1,text:e(n)("customSize"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),I("div",tt,[o(e(M),{text:e(n)("add"),type:"primary",size:"small",onClick:h},null,8,["text"]),o(e(M),{text:e(n)("decrease"),type:"danger",size:"small",onClick:R},null,8,["text"])]),o(c,{title:e(n)("startPosition")},{default:P(()=>[o(e(u),{"current-rate":75,rate:s.value,text:e(n)("left"),"start-position":"left"},null,8,["rate","text"]),o(e(u),{"current-rate":75,rate:s.value,text:e(n)("right"),"start-position":"right"},null,8,["rate","text"]),o(e(u),{"current-rate":75,rate:s.value,text:e(n)("bottom"),"start-position":"bottom"},null,8,["rate","text"])]),_:1},8,["title"])],64)}}});export{dt as default};
