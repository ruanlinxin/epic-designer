import{d as y,i as c,x as k,p as C,g as V,f as A,w as N,o as r,c as d,F as P,r as D,z as S,A as x,a as u,t as B,h as F,k as p,J as L,L as _}from"../app.eaa969de.js";import{A as z,v as I,R as K,p as v,r as R}from"../guide_components_k-designer.md.c908a8ef.js";const T={class:"epic-attribute-view"},U=["title"],j={class:"attr-input"},$=y({__name:"KAttributeView",setup(E){const l=c("designer"),m=c("pageSchema"),f=k({});C("formData",f);const h=z.getComponentConfings(),o=V(()=>l.state.checkedNode);function g(a){var t;return typeof a.show=="boolean"?a.show:typeof a.show=="function"?(t=a.show)==null?void 0:t.call(a,{values:o.value}):!0}const i=A([]);N(()=>{var a;return(a=l.state.checkedNode)==null?void 0:a.type},()=>{var n;var a,t;const e=(a=l.state.checkedNode)==null?void 0:a.type;if(!e)return[];const s=(n=(t=h[e])==null?void 0:t.config.attribute)!=null?n:[];i.value=[{label:"\u7EC4\u4EF6ID",type:"input",field:"id",componentProps:{disabled:!0}},...s]},{immediate:!0});function w(a,t,e){typeof e.onChange=="function"&&e.onChange({value:a,values:o.value,componentAttributes:i}),e.changeSync?v(a,t,o.value):_(()=>{v(a,t,o.value)}),R.push(m.schemas,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(a,t)=>(r(),d("aside",T,[(r(!0),d(P,null,D(i.value,e=>{var s,n;return r(),d("div",{key:e.field+((s=o.value)==null?void 0:s.id)},[S(u("div",{class:L(["attr-item",e.layout])},[u("div",{class:"attr-label",title:e.label},B(e.label),9,U),u("div",j,[F(p(K),{record:{...e,componentProps:{...e.componentProps,...e.field==="componentProps.defaultValue"?(n=o.value)==null?void 0:n.componentProps:{},hidden:!1},show:!0,noFormItem:!0},"model-value":p(I)(e.field,o.value),"onUpdate:modelValue":b=>w(b,e.field,e)},null,8,["record","model-value","onUpdate:modelValue"])])],2),[[x,g(e)]])])}),128))]))}});export{$ as default};
