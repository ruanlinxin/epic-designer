import{F as v}from"./index-980e4b1c.94133bb0.js";import{p as f}from"./icon.vue_vue_type_script_setup_true_lang-cc078b52.f6aad2d9.js";import{e as k,r as b,H as x,o as t,c as o,b as a,M as u,Y as B,n as m,d as C,u as d,P as y,v as g,Q as h}from"../app.27d58f12.js";const A={class:"epic-action-bar"},D={class:"actions-container"},E=["title","onClick"],F={class:"text-14px"},N={class:"sidebar-container"},I=k({name:"EActionBar",__name:"index",setup(V){const c=v.getActivitybars(),e=b(0),n=x(null);n.value=c[0].component;function p(r,s){if(e.value===s)return e.value=null,!1;n.value=r.component,e.value=s}return(r,s)=>(t(),o(u,null,[a("div",A,[a("ul",D,[(t(!0),o(u,null,B(d(c),(l,i)=>(t(),o("li",{key:i,class:m(["action-item",{checked:e.value===i}]),title:l.title,onClick:_=>p(l,i)},[C(d(f),{class:"iconfont relative",name:l.icon},null,8,["name"]),a("div",F,y(l.title),1)],10,E))),128))])]),a("aside",{class:m(["epic-left-sidebar",{hide:e.value===null}])},[a("div",N,[(t(),g(h(n.value)))])],2)],64))}});export{I as default};
