import{e as s,o as a,G as t}from"./vendor.21cda21c.js";const n={class:"markdown-body"},l=[t('<h1>Drag 拖拽</h1><h3>介绍</h3><p>实现可拖拽的任意元素</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Drag } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Drag);\n</code></pre><h2>基本用法</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>可点击，可拖拽<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>\n</code></pre><h2>限制拖拽方向</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>只能在X轴拖动<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>\n</code></pre><h2>限制拖拽方向</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;y&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>只能在Y轴拖动<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>\n</code></pre><h2>Prop</h2><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;">拖拽元素的拖拽方向限制，<strong>x</strong>/<strong>y</strong>/<strong>all</strong>三选一</td><td style="text-align:left;">String</td><td style="text-align:left;">‘all’</td></tr></tbody></table>',13)],p={setup:(t,{expose:p})=>(p({frontmatter:{}}),(t,p)=>(a(),s("div",n,l)))};export{p as default};
