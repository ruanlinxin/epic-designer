import{F as b,L as h}from"./index-980e4b1c.94133bb0.js";import{p as k}from"./icon.vue_vue_type_script_setup_true_lang-cc078b52.f6aad2d9.js";import{e as C,f as y,o,c as n,M as g,Y as B,b as u,d as s,u as m,F as E}from"../app.27d58f12.js";const F={key:0,class:"del-btn"},U=["onClick"],x=C({__name:"index",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(i,{emit:r}){const p=i,c=b.getComponent("input"),l=y({get(){return p.modelValue},set(e){r("update:modelValue",e)}});function v(){const e={label:"\u6807\u7B7E\u9875",type:"tab-pane",children:[],id:h()};l.value.push(e)}function f(e){l.value=l.value.filter((V,a)=>e!==a)}return(e,V)=>(o(),n("div",null,[(o(!0),n(g,null,B(l.value,(a,d)=>(o(),n("div",{key:d,class:"EColEditor-item"},[s(m(c),{value:a.label,"onUpdate:value":t=>a.label=t,modelValue:a.label,"onUpdate:modelValue":t=>a.label=t,style:{width:"100%"}},null,8,["value","onUpdate:value","modelValue","onUpdate:modelValue"]),l.value.length>1?(o(),n("div",F,[u("span",{onClick:t=>f(d)},[s(m(k),{name:"icon-shanchu"})],8,U)])):E("",!0)]))),128)),u("div",{class:"add-btn",onClick:v}," \u6DFB\u52A0 ")]))}});export{x as default};
