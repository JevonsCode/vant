import{c as p,a as f}from"./use-translate.813c82b8.js";import{m as _,t as k,w as F}from"./with-install.ed706383.js";import{C as b}from"./index.73a4398f.js";import{z as C,e as a,C as B,r as E,o as v,a as y,w as r,B as t,F as h}from"./vue-libs.e99ed056.js";import{T as u}from"./function-call.01d00fe5.js";import"./use-route.ffc287bb.js";import"./index.b854190e.js";import"./mount-component.852f8ebd.js";import"./use-expose.f2ccb00a.js";import"./index.e5a2fcc0.js";import"./constant.80c6de18.js";import"./interceptor.ffa245cd.js";import"./use-touch.1aeb3848.js";import"./use-lazy-render.925a18cc.js";import"./on-popup-reopen.8597ae62.js";import"./index.9efe88fe.js";import"./index.04ba88cf.js";const[x,s,c]=p("contact-card"),A={tel:String,name:String,type:_("add"),addText:String,editable:k};var S=C({name:x,props:A,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||c("addContact"):[a("div",null,[`${c("name")}\uFF1A${e.name}`]),a("div",null,[`${c("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:s([e.type]),border:!1,isLink:e.editable,valueClass:s("value"),onClick:o},{value:d})}});const m=F(S),O=C({name:"index",setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>u(n("add")),i=()=>u(n("edit"));return(g,w)=>{const l=E("demo-block");return v(),y(h,null,[a(l,{title:t(n)("addContact")},{default:r(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(l,{title:t(n)("editContact")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(l,{title:t(n)("uneditable")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{O as default};