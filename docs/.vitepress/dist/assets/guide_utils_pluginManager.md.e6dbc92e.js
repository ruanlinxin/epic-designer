import{_ as s,o as a,c as n,a as p}from"./app.b200646e.js";const h=JSON.parse('{"title":"pluginManager \u63D2\u4EF6\u7BA1\u7406\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CE8\u518C\u7EC4\u4EF6","slug":"\u6CE8\u518C\u7EC4\u4EF6","link":"#\u6CE8\u518C\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u5E93\u5206\u7EC4\u7BA1\u7406","slug":"\u7EC4\u4EF6\u5E93\u5206\u7EC4\u7BA1\u7406","link":"#\u7EC4\u4EF6\u5E93\u5206\u7EC4\u7BA1\u7406","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[]}],"relativePath":"guide/utils/pluginManager.md"}'),e={name:"guide/utils/pluginManager.md"},o=p(`<h1 id="pluginmanager-\u63D2\u4EF6\u7BA1\u7406\u5668" tabindex="-1">pluginManager \u63D2\u4EF6\u7BA1\u7406\u5668 <a class="header-anchor" href="#pluginmanager-\u63D2\u4EF6\u7BA1\u7406\u5668" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u63D2\u4EF6\u7BA1\u7406\u5668</p><p><code>pluginManager</code> \u662F\u7528\u4E8E\u7BA1\u7406\u6269\u5C55\u7EC4\u4EF6\uFF0C\u6A21\u5757\u529F\u80FD\u7684\u7BA1\u7406\u5668\u5BF9\u8C61</p></div><h2 id="\u6CE8\u518C\u7EC4\u4EF6" tabindex="-1">\u6CE8\u518C\u7EC4\u4EF6 <a class="header-anchor" href="#\u6CE8\u518C\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pluginManager</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">type</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ComponentConfigModel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">epic-designer</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./cmp.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">defaultSchema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6D4B\u8BD5\u6269\u5C55\u7EC4\u4EF6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">componentProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">attribute</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5C5E\u60271</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">field</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6CE8\u518C\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">pluginManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerComponent</span><span style="color:#A6ACCD;">(Test)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u6DFB\u52A0\u5230\u7EC4\u4EF6\u5E93\u5206\u7EC4 \u5DE6\u4FA7\u4E0D\u4F1A\u6709\u65B0\u589E\u7684\u7EC4\u4EF6\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">pluginManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponentGroup</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u81EA\u5B9A\u4E49</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u540C\u7EA7\u76EE\u5F55\u4E0B\u521B\u5EFAcmp.vue</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  	\u6211\u662F\u6269\u5C55\u7684\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7EC4\u4EF6\u5E93\u5206\u7EC4\u7BA1\u7406" tabindex="-1">\u7EC4\u4EF6\u5E93\u5206\u7EC4\u7BA1\u7406 <a class="header-anchor" href="#\u7EC4\u4EF6\u5E93\u5206\u7EC4\u7BA1\u7406" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pluginManager</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">epic-designer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8BBE\u7F6E\u9875\u9762\u5DE6\u4FA7\u7EC4\u4EF6\u5206\u7EC4\u5185\u5BB9 - \u7528\u4E8E\u8FC7\u6EE4\u4E0D\u9700\u8981\u7EC4\u4EF6\uFF0C\u53EA\u8BBE\u7F6E\u9700\u8981\u5C55\u793A\u7EC4\u4EF6\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">pluginManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setComponentGroup</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u81EA\u5B9A\u4E49</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h4 id="registercomponent" tabindex="-1">registerComponent <a class="header-anchor" href="#registercomponent" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(componentConfig: ComponentConfigModel) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6CE8\u518C\u7EC4\u4EF6\u5230\u63D2\u4EF6\u7BA1\u7406\u5668\u4E2D</p><h4 id="getcomponentconfings" tabindex="-1">getComponentConfings <a class="header-anchor" href="#getcomponentconfings" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>() =&gt; ComponentConfigModelRecords</code></p><p>\u8BF4\u660E\uFF1A\u83B7\u53D6\u6240\u6709\u63D2\u4EF6\u7BA1\u7406\u4E2D\u7684\u6240\u6709\u7EC4\u4EF6\u914D\u7F6E</p><h4 id="getcomponentconfingbytype" tabindex="-1">getComponentConfingByType <a class="header-anchor" href="#getcomponentconfingbytype" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(type: string) =&gt; ComponentConfigModel</code></p><p>\u8BF4\u660E\uFF1A\u901A\u8FC7type\u83B7\u53D6\u7EC4\u4EF6\u914D\u7F6E</p><h4 id="getcomponents" tabindex="-1">getComponents <a class="header-anchor" href="#getcomponents" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>() =&gt; Components</code></p><p>\u8BF4\u660E\uFF1A\u83B7\u53D6\u5DF2\u6CE8\u518C\u7684\u7EC4\u4EF6</p><h4 id="getcomponent" tabindex="-1">getComponent <a class="header-anchor" href="#getcomponent" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(type: string) =&gt; any</code></p><p>\u8BF4\u660E\uFF1A\u901A\u8FC7\u7C7B\u578B\u83B7\u53D6\u7684\u7EC4\u4EF6</p><h4 id="registeractivitybar" tabindex="-1">registerActivitybar <a class="header-anchor" href="#registeractivitybar" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(activitybar: ActivitybarModel) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6CE8\u518C\u6D3B\u52A8\u680F</p><h4 id="getactivitybars" tabindex="-1">getActivitybars <a class="header-anchor" href="#getactivitybars" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>() =&gt; ActivitybarModel[]</code></p><p>\u8BF4\u660E\uFF1A\u83B7\u53D6\u6240\u6709\u5DF2\u6CE8\u518C\u6D3B\u52A8\u680F\u914D\u7F6E</p><h4 id="registeractivitybar-1" tabindex="-1">registerActivitybar <a class="header-anchor" href="#registeractivitybar-1" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(rightSidebar: RightSidebarModel) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6CE8\u518C\u53F3\u4FA7\u680F</p><h4 id="getrightsidebars" tabindex="-1">getRightSidebars <a class="header-anchor" href="#getrightsidebars" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>() =&gt; RightSidebarModel[]</code></p><p>\u8BF4\u660E\uFF1A\u83B7\u53D6\u6240\u6709\u5DF2\u6CE8\u518C\u53F3\u4FA7\u680F\u914D\u7F6E</p><h4 id="setcomponentgroup-v0-9-1\u5DF2\u5220\u9664" tabindex="-1"><s>setComponentGroup</s>(v0.9.1\u5DF2\u5220\u9664) <a class="header-anchor" href="#setcomponentgroup-v0-9-1\u5DF2\u5220\u9664" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(componentGroup: ComponentGroupItem[]) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6E\u5206\u7EC4,\u8FD9\u4E2A\u64CD\u4F5C\u5C06\u4F1A\u8986\u76D6\u539F\u6765\u7684\u6570\u636E</p><h4 id="addcomponentgroup-v0-9-1\u5DF2\u5220\u9664" tabindex="-1"><s>addComponentGroup</s>(v0.9.1\u5DF2\u5220\u9664) <a class="header-anchor" href="#addcomponentgroup-v0-9-1\u5DF2\u5220\u9664" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(componentGroupItem: ComponentGroupItem) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6DFB\u52A0\u5206\u7EC4</p><h4 id="setcomponentgroupnamemap" tabindex="-1">setComponentGroupNameMap <a class="header-anchor" href="#setcomponentgroupnamemap" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(groupName: string, mapName: string) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6E\u7EC4\u4EF6\u5206\u7EC4\u540D\u79F0\u5230\u6620\u5C04\u540D\u79F0\u7684\u5173\u7CFB</p><h4 id="clearcomponentgroupnamemap" tabindex="-1">clearComponentGroupNameMap <a class="header-anchor" href="#clearcomponentgroupnamemap" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>() =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6E05\u7A7A\u7EC4\u4EF6\u5206\u7EC4\u540D\u79F0\u5230\u6620\u5C04\u540D\u79F0\u7684\u5173\u7CFB</p><h4 id="setsortedgroups" tabindex="-1">setSortedGroups <a class="header-anchor" href="#setsortedgroups" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(sortedGroups: string[]) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6E\u7EC4\u4EF6\u5206\u7EC4\u7684\u6392\u5E8F</p><h4 id="clearsortedgroups" tabindex="-1">clearSortedGroups <a class="header-anchor" href="#clearsortedgroups" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>() =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6E05\u7A7A\u7EC4\u4EF6\u5206\u7EC4\u7684\u6392\u5E8F</p><h4 id="hidecomponent" tabindex="-1">hideComponent <a class="header-anchor" href="#hidecomponent" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(type: string) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6DFB\u52A0\u9700\u8981\u9690\u85CF\u7684\u7EC4\u4EF6\u7C7B\u578B</p><h4 id="showcomponent" tabindex="-1">showComponent <a class="header-anchor" href="#showcomponent" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(type: string) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u79FB\u9664\u9700\u8981\u9690\u85CF\u7684\u7EC4\u4EF6\u7C7B\u578B</p><h4 id="sethidecomponents" tabindex="-1">setHideComponents <a class="header-anchor" href="#sethidecomponents" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(types: string[]) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u8BBE\u7F6E\u9700\u8981\u9690\u85CF\u7684\u7EC4\u4EF6\u7C7B\u578B\u6570\u7EC4</p><h4 id="addpublicmethod" tabindex="-1">addPublicMethod <a class="header-anchor" href="#addpublicmethod" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(method: MethodModel) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u6DFB\u52A0\u516C\u5171\u65B9\u6CD5</p><h4 id="removepublicmethod" tabindex="-1">removePublicMethod <a class="header-anchor" href="#removepublicmethod" aria-hidden="true">#</a></h4><p>\u7C7B\u578B\uFF1A<code>(methodName: string) =&gt; void</code></p><p>\u8BF4\u660E\uFF1A\u79FB\u9664\u516C\u5171\u65B9\u6CD5</p>`,69),l=[o];function t(r,c,i,d,D,y){return a(),n("div",null,l)}const C=s(e,[["render",t]]);export{h as __pageData,C as default};