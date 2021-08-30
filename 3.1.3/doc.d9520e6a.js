import{e as s,o as a,G as t}from"./vendor.21cda21c.js";const n={class:"markdown-body"},l=[t('<h1>Rate 评分</h1><h3>介绍</h3><p>用于快速的评级操作，或对评价进行展示。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { Rate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { Rate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Rate);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">3</span>);\n    <span class="hljs-keyword">return</span> { value }\n}\n</code></pre><h3>自定义icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">checked-icon</span>=<span class="hljs-string">&quot;heart-fill1&quot;</span> <span class="hljs-attr">unchecked-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><h3>自定义数量</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><h3>自定义颜色</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#FFC800&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><h3>禁用状态</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><h3>只读</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readOnly</span> /&gt;</span>\n</code></pre><h3>绑定事件</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">3</span>);\n    <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">val</span>)=&gt;</span>{\n        Toast.text(val);\n    }\n    <span class="hljs-keyword">return</span> { value }\n}\n</code></pre><h3>自定义尺寸</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;35&quot;</span> /&gt;</span>\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前 star 数，可使用 v-model 双向绑定数据</td><td>Number</td><td>-</td></tr><tr><td>count</td><td>star 总数</td><td>Number</td><td>5</td></tr><tr><td>icon-size</td><td>star 大小</td><td>Number</td><td>18</td></tr><tr><td>active-color</td><td>图标选中颜色</td><td>String</td><td>#fa200c</td></tr><tr><td>void-color</td><td>图标未选中颜色</td><td>String</td><td>#ccc</td></tr><tr><td>unchecked-icon</td><td>使用图标(未选中)</td><td>String</td><td>star-n</td></tr><tr><td>checked-icon</td><td>使用图标(选中)</td><td>String</td><td>star-fill-n</td></tr><tr><td>allow-half</td><td>是否半星</td><td>Boolean</td><td>false</td></tr><tr><td>readonly</td><td>是否只读</td><td>Boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>false</td></tr><tr><td>spacing</td><td>间距</td><td>Number</td><td>20</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前分值修改时时触发的事件</td><td>当前值</td></tr></tbody></table>',28)],p={setup:(t,{expose:p})=>(p({frontmatter:{}}),(t,p)=>(a(),s("div",n,l)))};export{p as default};
