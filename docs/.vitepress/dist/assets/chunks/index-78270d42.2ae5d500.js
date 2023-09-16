import{e as y,o as S,c as B,b as g,D as C,al as I,u as e,a4 as G,n as b,g as V,O as N,P as j,A as U,f,s as O,r as R,k as P,p as Q,h as Z,t as J,w as W,j as X,N as M}from"../app.27d58f12.js";import{i as h,f as T,N as w,S as E,a0 as $,y as z,x as Y,n as x,aQ as ee,g as ae,Z as le,b5 as A,T as oe,U as ne,p as _}from"./index-980e4b1c.94133bb0.js";import{U as se,j as re}from"./use-form-item-395c70ca.27999960.js";const D=h({size:T,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),te=h({...D,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),F={[w]:n=>E(n)||$(n)||z(n),[Y]:n=>E(n)||$(n)||z(n)},K=Symbol("radioGroupKey"),q=(n,c)=>{const s=R(),l=X(K,void 0),i=f(()=>!!l),m=f({get(){return i.value?l.modelValue:n.modelValue},set(d){i.value?l.changeEvent(d):c&&c(w,d),s.value.checked=n.modelValue===n.label}}),t=oe(f(()=>l==null?void 0:l.size)),u=ne(f(()=>l==null?void 0:l.disabled)),o=R(!1),p=f(()=>u.value||i.value&&m.value!==n.label?-1:0);return{radioRef:s,isGroup:i,radioGroup:l,focus:o,size:t,disabled:u,tabIndex:p,modelValue:m}},de=["value","name","disabled"],ie=y({name:"ElRadio"}),ue=y({...ie,props:te,emits:F,setup(n,{emit:c}){const s=n,l=x("radio"),{radioRef:i,radioGroup:m,focus:t,size:u,disabled:o,modelValue:p}=q(s,c);function d(){M(()=>c("change",p.value))}return(a,r)=>{var v;return S(),B("label",{class:b([e(l).b(),e(l).is("disabled",e(o)),e(l).is("focus",e(t)),e(l).is("bordered",a.border),e(l).is("checked",e(p)===a.label),e(l).m(e(u))])},[g("span",{class:b([e(l).e("input"),e(l).is("disabled",e(o)),e(l).is("checked",e(p)===a.label)])},[C(g("input",{ref_key:"radioRef",ref:i,"onUpdate:modelValue":r[0]||(r[0]=k=>G(p)?p.value=k:null),class:b(e(l).e("original")),value:a.label,name:a.name||((v=e(m))==null?void 0:v.name),disabled:e(o),type:"radio",onFocus:r[1]||(r[1]=k=>t.value=!0),onBlur:r[2]||(r[2]=k=>t.value=!1),onChange:d},null,42,de),[[I,e(p)]]),g("span",{class:b(e(l).e("inner"))},null,2)],2),g("span",{class:b(e(l).e("label")),onKeydown:r[3]||(r[3]=U(()=>{},["stop"]))},[V(a.$slots,"default",{},()=>[N(j(a.label),1)])],34)],2)}}});var pe=_(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ce=h({...D,name:{type:String,default:""}}),me=["value","name","disabled"],be=y({name:"ElRadioButton"}),ve=y({...be,props:ce,setup(n){const c=n,s=x("radio"),{radioRef:l,focus:i,size:m,disabled:t,modelValue:u,radioGroup:o}=q(c),p=f(()=>({backgroundColor:(o==null?void 0:o.fill)||"",borderColor:(o==null?void 0:o.fill)||"",boxShadow:o!=null&&o.fill?`-1px 0 0 0 ${o.fill}`:"",color:(o==null?void 0:o.textColor)||""}));return(d,a)=>{var r;return S(),B("label",{class:b([e(s).b("button"),e(s).is("active",e(u)===d.label),e(s).is("disabled",e(t)),e(s).is("focus",e(i)),e(s).bm("button",e(m))])},[C(g("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":a[0]||(a[0]=v=>G(u)?u.value=v:null),class:b(e(s).be("button","original-radio")),value:d.label,type:"radio",name:d.name||((r=e(o))==null?void 0:r.name),disabled:e(t),onFocus:a[1]||(a[1]=v=>i.value=!0),onBlur:a[2]||(a[2]=v=>i.value=!1)},null,42,me),[[I,e(u)]]),g("span",{class:b(e(s).be("button","inner")),style:O(e(u)===d.label?e(p):{}),onKeydown:a[3]||(a[3]=U(()=>{},["stop"]))},[V(d.$slots,"default",{},()=>[N(j(d.label),1)])],38)],2)}}});var L=_(ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const fe=h({id:{type:String,default:void 0},size:T,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ge=F,ye=["id","aria-label","aria-labelledby"],he=y({name:"ElRadioGroup"}),ke=y({...he,props:fe,emits:ge,setup(n,{emit:c}){const s=n,l=x("radio"),i=ee(),m=R(),{formItem:t}=se(),{inputId:u,isLabeledByFormItem:o}=re(s,{formItemContext:t}),p=a=>{c(w,a),M(()=>c("change",a))};P(()=>{const a=m.value.querySelectorAll("[type=radio]"),r=a[0];!Array.from(a).some(v=>v.checked)&&r&&(r.tabIndex=0)});const d=f(()=>s.name||i.value);return Q(K,Z({...J(s),changeEvent:p,name:d})),W(()=>s.modelValue,()=>{s.validateEvent&&(t==null||t.validate("change").catch(a=>ae()))}),(a,r)=>(S(),B("div",{id:e(u),ref_key:"radioGroupRef",ref:m,class:b(e(l).b("group")),role:"radiogroup","aria-label":e(o)?void 0:a.label||"radio-group","aria-labelledby":e(o)?e(t).labelId:void 0},[V(a.$slots,"default")],10,ye))}});var H=_(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Ve=le(pe,{RadioButton:L,RadioGroup:H}),we=A(H),xe=A(L);export{Ve as I,F as L,D as M,K as U,we as V,xe as _,ge as g,ce as m,te as r,fe as v};
