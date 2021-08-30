import{e as s,o as a,G as n}from"./vendor.21cda21c.js";const l={class:"markdown-body"},t=[n('<h1>Layout 布局</h1><h3>介绍</h3><p>用于快速进行布局</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Layout } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Layout } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Layout);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;24&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:24<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:12<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:12<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n</code></pre><h3>设置元素间距</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>   \n</code></pre><h3>Flex布局</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">wrap</span>=<span class="hljs-string">&quot;nowrap&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-between&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-around&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>\n</code></pre><h2>Prop</h2><h3>row</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>布局方式，可选值为flex</td><td>String</td><td>-</td></tr><tr><td>gutter</td><td>列元素之间的间距（单位为px）</td><td>String、Number</td><td>-</td></tr><tr><td>justify</td><td>Flex 主轴对齐方式，可选值为 start end center space-around space-between</td><td>String</td><td>start</td></tr><tr><td>align</td><td>Flex 交叉轴对齐方式，可选值为 flex-start center flex-end</td><td>String</td><td>flex-start</td></tr><tr><td>flex-wrap</td><td>Flex是否换行，可选值为 nowrap wrap reverse</td><td>String</td><td>nowrap</td></tr></tbody></table><h3>col</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>列元素宽度（共分为24份，例如设置一行3个，那么span值为8）</td><td>String、Number</td><td>24</td></tr><tr><td>offset</td><td>列元素偏移距离</td><td>String、Number</td><td>0</td></tr></tbody></table>',17)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",l,t)))};export{p as default};
