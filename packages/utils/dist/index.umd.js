(function(i,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],u):(i=typeof globalThis<"u"?globalThis:i||self,u(i.index={},i.Vue))})(this,function(i,u){"use strict";var ie=Object.defineProperty;var ue=(i,u,m)=>u in i?ie(i,u,{enumerable:!0,configurable:!0,writable:!0,value:m}):i[u]=m;var v=(i,u,m)=>(ue(i,typeof u!="symbol"?u+"":u,m),m);function m(t=10){return(+`${Math.random().toString().substring(3,t)}${Date.now()}`).toString(36)}function K(t){return t.charAt(0).toUpperCase()+t.slice(1)}function S(t,e=new WeakMap){if(typeof t!="object"||t===null)return t;if(e.has(t))return e.get(t);if(Array.isArray(t)){const r=t.map(o=>S(o,e));return e.set(t,r),r}const n={};return e.set(t,n),Object.keys(t).forEach(r=>{n[r]=S(t[r],e)}),n}function P(t,e){for(const[n,r]of Object.entries(e)){const o=t==null?void 0:t[n];o&&r&&typeof o=="object"&&typeof r=="object"?P(o,r):t[n]=r}Object.keys(t).reverse().forEach(n=>{e.hasOwnProperty(n)||(Array.isArray(e)?t.splice(n,1):delete t[n])})}function U(t,e,n=new WeakMap){const r=o=>{if(Array.isArray(o))return o.map(r);if(typeof o=="object"&&o!==null){if(n.has(o))return"[Circular]";n.set(o,!0);const s=Object.keys(o).sort(),f={};return s.forEach(a=>{f[a]=r(o[a])}),n.delete(o),f}else return o};return JSON.stringify(r(t))===JSON.stringify(r(e))}const g=(t,e)=>u.defineAsyncComponent({loader:t,loadingComponent:e,delay:80});function V(t,e){const n=[{type:"root",children:t}];for(;n.length>0;){const r=n.pop(),o=r==null?void 0:r.children;if(o!=null)for(let s=0;s<o.length;s++){if(o[s].id===e)return{list:(r==null?void 0:r.children)??[],schema:o[s],index:s};n.push(...o)}}throw new Error(`没有查询到id为${e}的节点`)}function B(t,e){const n=[];let r=!1;function o(s){if(n.push(s),s.id===e&&(r=!0),!r&&s.children!=null&&s.children.length>0)for(let f=0;f<s.children.length&&(o(s.children[f]),!r);f++);r||n.pop()}return t.forEach(o),r||console.error(`没有查询到id为${e}的节点`),n}function J(t,e){const n=t.split(".");let r=e;for(let o=0;o<n.length;o++)if(r=r[n[o]],r==null&&r!==!1&&r!==0)return;return r}function z(t,e,n){const r=e.split(".");let o=n;r.forEach((s,f)=>{if(f===r.length-1){o[s]=t;return}o=o[s]??(o[s]={})})}class M{constructor(){v(this,"components",{});v(this,"componentConfigs",{});v(this,"schemaGroup",[]);v(this,"schemaGroupList",u.ref([]));v(this,"viewsContainers",{activitybars:[],rightSidebars:[]});v(this,"publicMethods",{test:{describe:"测试函数",methodName:"test",method:()=>{alert("测试函数弹出")}}})}component(e,n){typeof n=="function"&&(n=g(n)),this.components[e]=n}registerComponent(e){this.component(e.defaultSchema.type,e.component),this.componentConfigs[e.defaultSchema.type]=e}getComponents(){return this.components}getComponent(e){return this.components[e]}registerActivitybar(e){typeof e.component=="function"&&(e.component=g(e.component));const n=this.viewsContainers.activitybars.findIndex(r=>r.id===e.id);n!==-1?this.viewsContainers.activitybars[n]=e:this.viewsContainers.activitybars.push(e)}getActivitybars(){return this.viewsContainers.activitybars}registerRightSidebar(e){typeof e.component=="function"&&(e.component=g(e.component));const n=this.viewsContainers.rightSidebars.findIndex(r=>r.id===e.id);n!==-1?this.viewsContainers.rightSidebars[n]=e:this.viewsContainers.rightSidebars.push(e)}getRightSidebars(){return this.viewsContainers.rightSidebars}getComponentConfings(){return this.componentConfigs}getComponentConfingByType(e){return this.componentConfigs[e]}setSchemaGroup(e){this.schemaGroup=e,this.computedSchemaGroupList()}addSchemaGroup(e){this.schemaGroup.push(e),this.computedSchemaGroupList()}computedSchemaGroupList(){const e=this.schemaGroup.map(n=>{const r=n.list.map(o=>{var f;const s=(f=this.componentConfigs[o])==null?void 0:f.defaultSchema;return s==null?(console.warn(`${o} 组件未注册到pluginManager中`),!1):{...s,id:m()}}).filter(o=>o);return{...n,list:r}});this.schemaGroupList.value=e}getSchemaByGroup(){return this.schemaGroupList}addPublicMethod(e){this.publicMethods[e.methodName]=e}}const w=new M;function Q(){const t=u.ref({}),e=u.ref({});function n(l){return t.value[l]}function r(l,p){t.value[l]=p}function o(l){delete t.value[l]}function s(l){const p=Object.entries(w.publicMethods).reduce((c,[d,h])=>(c[d]=h.method,c),{});new Function(`${l}`).bind({getComponent:n,defineExpose:f,...p})()}function f(l){l!=null&&(e.value=l)}function a(l,...p){l==null||l.forEach(c=>{var d,h,y;if(c.type==="public"&&((d=w.publicMethods[c.methodName])==null||d.method(c.args)),c.type==="custom"&&((y=(h=e.value)[c.methodName])==null||y.call(h,...p)),c.type==="component"){(c.componentId!=null&&n(c.componentId))[c.methodName](...p);return}})}return{componentInstances:t,funcs:e,getComponentInstance:n,addComponentInstance:r,removeComponentInstance:o,setMethods:s,doActions:a}}function R(){const t=u.ref([]),e=u.ref([]),n=u.ref(null);let r=0;function o(a,l="插入组件"){const p=Date.now();r+150>p||(r=p,n.value!=null&&(t.value.push(n.value),e.value.splice(0,e.value.length)),n.value={type:l,record:JSON.stringify(a)},t.value.length>20&&t.value.unshift())}function s(){if(t.value.length===0)return!1;const a=t.value.pop();return n.value!=null&&e.value.push(n.value),n.value=a,JSON.parse(a.record)}function f(){if(e.value.length===0)return!1;const a=e.value.pop();return n.value!=null&&t.value.push(n.value),n.value=a,JSON.parse(a.record)}return{recordList:t,undoList:e,currentRecord:n,push:o,undo:s,redo:f}}const W=R();function D(t){return u.getCurrentScope()?(u.onScopeDispose(t),!0):!1}function I(t){let e=0,n,r;const o=()=>{e-=1,r&&e<=0&&(r.stop(),n=void 0,r=void 0)};return(...s)=>(e+=1,n||(r=u.effectScope(!0),n=r.run(()=>t(...s))),D(o),n)}function C(t){return typeof t=="function"?t():u.unref(t)}const q=typeof window<"u",X=()=>{};function Y(t){var e;const n=C(t);return(e=n==null?void 0:n.$el)!=null?e:n}const _=q?window:void 0;function Z(...t){let e,n,r,o;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,o]=t,e=_):[e,n,r,o]=t,!e)return X;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],f=()=>{s.forEach(c=>c()),s.length=0},a=(c,d,h,y)=>(c.addEventListener(d,h,y),()=>c.removeEventListener(d,h,y)),l=u.watch(()=>[Y(e),C(o)],([c,d])=>{f(),c&&s.push(...n.flatMap(h=>r.map(y=>a(c,h,y,d))))},{immediate:!0,flush:"post"}),p=()=>{l(),f()};return D(p),p}var H=Object.defineProperty,F=Object.defineProperties,x=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,L=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$=(t,e)=>{for(var n in e||(e={}))j.call(e,n)&&L(t,n,e[n]);if(N)for(var n of N(e))ee.call(e,n)&&L(t,n,e[n]);return t},T=(t,e)=>F(t,x(e));function te(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function G(...t){let e,n,r={};t.length===3?(e=t[0],n=t[1],r=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],r=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:o=_,eventName:s="keydown",passive:f=!1,dedupe:a=!1}=r,l=te(e);return Z(o,s,c=>{c.repeat&&C(a)||l(c)&&n(c)},f)}function A(t,e,n={}){return G(t,e,T($({},n),{eventName:"keydown"}))}function E(t,e,n={}){return G(t,e,T($({},n),{eventName:"keyup"}))}function ne(){const t=u.ref(!1),e=u.ref(!1),n=u.ref(!1);return A(" ",r=>{var o=r.target;["INPUT","TEXTAREA"].includes(o.tagName)||r.preventDefault(),t.value=!0}),E(" ",()=>{t.value=!1}),A("Shift",r=>{r.preventDefault(),e.value=!0}),E("Shift",()=>{e.value=!1}),A("Control",r=>{r.preventDefault(),n.value=!0}),E("Control",()=>{n.value=!1}),{pressSpace:t,pressShift:e,pressCtrl:n}}function b(){return{canvasScale:u.ref(1)}}const k=I(b),O=I(ne);function re(t){const{pressSpace:e}=O();let n=0,r=0;function o(a){var l;n=a.x,r=a.y,(l=a.dataTransfer)==null||l.setDragImage(document.createElement("div"),0,0)}function s(a){if(a.preventDefault(),!a.x||!a.y||!e.value)return;const l=a.x-n,p=a.y-r;n=a.x,r=a.y,t.value&&(t.value.scrollTop-=p,t.value.scrollLeft-=l)}function f(){e.value=!1}return{handleElementDragStart:o,handleElementDrag:s,handleElementDragEnd:f}}function oe(t){const{pressCtrl:e}=O(),{canvasScale:n}=k();function r(o){if(!e.value)return;o.preventDefault();let s=0;o.deltaY<0?s=n.value+.05:s=n.value-.05,!(s>2||s<.2)&&(n.value=s)}return u.watch(()=>n.value,o=>{t.value&&(t.value.style.transform=`scale(${o})`)}),{handleZoom:r,canvasScale:n}}function se(t,e=16.66){let n;function r(){o(),n=window.setInterval(t,e)}function o(){window.clearInterval(n)}return{startTimedQuery:r,stopTimedQuery:o}}i.PluginManager=M,i.capitalizeFirstLetter=K,i.deepClone=S,i.deepCompareAndModify=P,i.deepEqual=U,i.findSchemaById=V,i.getAttributeValue=J,i.getMatchedById=B,i.getUUID=m,i.loadAsyncComponent=g,i.pluginManager=w,i.revoke=W,i.setAttributeValue=z,i.useElementDrag=re,i.useElementZoom=oe,i.usePageManager=Q,i.useShareKeyPress=O,i.useShareStore=k,i.useStore=b,i.useTimedQuery=se,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
