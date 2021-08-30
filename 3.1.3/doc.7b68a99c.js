import{e as s,o as a,G as n}from"./vendor.21cda21c.js";const t={class:"markdown-body"},l=[n('<h1>ActionSheet 动作面板</h1><h3>介绍</h3><p>从底部弹出的动作菜单面板。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(ActionSheet);\n</code></pre><h2>基本用法</h2><p>默认</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>基础用法<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;state.val&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span>\n  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.isVisible&quot;</span>\n  <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItems&quot;</span>\n  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;chooseItem&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>\n</code></pre><h2>展示取消按钮</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>展示取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;state.val&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span> \n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>\n  <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItems&quot;</span>\n  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;chooseItem&quot;</span>\n  <span class="hljs-attr">cancel-txt</span>=<span class="hljs-string">&quot;取消&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>\n</code></pre><h2>展示描述信息</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>展示取消按钮<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;state.val&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span> \n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>\n    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;state.desc&quot;</span>\n    <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItems&quot;</span>\n    @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;chooseItem&quot;</span>\n    <span class="hljs-attr">cancel-txt</span>=<span class="hljs-string">&quot;取消&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>\n</code></pre><h2>选项状态</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>性别<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;sex&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span>\n@<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>\n  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.isVisible4&quot;</span>\n  <span class="hljs-attr">cancel-txt</span>=<span class="hljs-string">&quot;取消&quot;</span>\n  <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItemsThree&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">isVisible</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;这是一段描述信息&#39;</span>\n    });\n    <span class="hljs-keyword">const</span> menuItems = [\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项一&#39;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项二&#39;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项三&#39;</span>,\n        <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>\n      }\n    ];\n     <span class="hljs-keyword">const</span> switchActionSheet = <span class="hljs-function">() =&gt;</span> {\n       state.isVisible = !state.isVisible\n    };\n    <span class="hljs-keyword">const</span> chooseItem = <span class="hljs-function">(<span class="hljs-params">item,index</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(item,index);\n    };\n\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>cancel-txt</td><td>取消文案</td><td>String</td><td>‘取消’</td></tr><tr><td>menu-items</td><td>列表项</td><td>Array</td><td>[ ]</td></tr><tr><td>option-tag</td><td>设置列表项展示使用参数</td><td>String</td><td>‘name’</td></tr><tr><td>v-model:visible</td><td>遮罩层可见</td><td>Boolean</td><td>false</td></tr><tr><td>option-sub-tag</td><td>设置列表项描述展示使用参数</td><td>String</td><td>‘subname’</td></tr><tr><td>choose-tag-value</td><td>设置选中项的值，和’option-tag’的值对应</td><td>String</td><td>‘’</td></tr><tr><td>title</td><td>设置列表项标题</td><td>String</td><td>‘’</td></tr><tr><td>description</td><td>设置列表项副标题/描述</td><td>String</td><td>‘’</td></tr><tr><td>color</td><td>高亮颜色</td><td>String</td><td>‘#ee0a24’</td></tr><tr><td>close-abled</td><td>遮罩层是否可关闭</td><td>Boolean</td><td>true</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>choose</td><td>选择之后触发</td><td>选中列表项item, 选中的索引值index</td></tr><tr><td>cancel</td><td>点击取消文案时触发</td><td>无</td></tr></tbody></table>',19)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};
