import{e as f,j as p,f as v,o as s,c as n,M as h,Y as b,F as P,b as a,D as w,E as g,P as k,d as z,u as r}from"../app.27d58f12.js";import{I,P as S,c as E,z as V}from"./index-980e4b1c.94133bb0.js";const N={class:"epic-attribute-view"},B={key:0},C={class:"attr-item"},D=["title"],F={class:"attr-input"},_=f({__name:"styleView",setup(U){const i=p("designer"),c=p("pageSchema"),d=[{label:"\u5BBD\u5EA6",type:"EInputSize",field:"componentProps.style.width"},{label:"\u9AD8\u5EA6",type:"EInputSize",field:"componentProps.style.height"},{label:"\u5185\u8FB9\u8DDD",type:"EInputSize",field:"componentProps.style.padding"},{label:"\u5916\u8FB9\u8DDD",type:"EInputSize",field:"componentProps.style.margin"},{label:"\u80CC\u666F\u8272",type:"color-picker",field:"componentProps.style.backgroundColor",componentProps:{type:"color",style:{}}},{label:"\u5B57\u4F53\u989C\u8272",type:"color-picker",field:"componentProps.style.color",componentProps:{type:"color",style:{}}}],l=v(()=>i.state.checkedNode);function m(t){var e;var o;return typeof t.show=="boolean"?t.show:(e=(o=t.show)==null?void 0:o.call(t,{values:l.value}))!=null?e:!0}function u(t,o){E(t,o,l.value),V.push(c.schemas,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(t,o)=>(s(),n("aside",N,[l.value?(s(),n("div",B,[(s(),n(h,null,b(d,e=>a("div",{key:e.field+l.value.id},[w(a("div",C,[a("div",{class:"attr-label",title:e.label},k(e.label),9,D),a("div",F,[z(r(S),{record:{...e,componentProps:{...e.componentProps},show:!0,noFormItem:!0},"model-value":r(I)(e.field,l.value),"onUpdate:modelValue":y=>u(y,e.field)},null,8,["record","model-value","onUpdate:modelValue"])])],512),[[g,m(e)]])])),64))])):P("",!0)]))}});export{_ as default};
