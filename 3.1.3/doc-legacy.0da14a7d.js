System.register(["./vendor-legacy.d2a5cd34.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Button 按钮</h1><h3>介绍</h3><p>按钮用于触发一个操作，如提交表单。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Button,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Button,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Button).use(Icon);\n</code></pre><h2>代码演示</h2><h3>按钮类型</h3><p>按钮支持 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>danger</code>、<code>success</code> 六种类型，默认为 <code>default</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h3>朴素按钮</h3><p>通过 <code>plain</code> 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h3>禁用状态</h3><p>通过 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h3>按钮形状</h3><p>通过 <code>shape</code> 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>方形按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>圆形按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h3>加载状态</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>加载中...<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;isLoading&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;changeLoading&quot;</span>&gt;</span>Click me!<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><pre><code class="language-javascript">  <span class="hljs-comment">// ...</span>\n  <span class="hljs-keyword">let</span> isLoading = ref(<span class="hljs-literal">false</span>);\n  <span class="hljs-keyword">const</span> changeLoading = <span class="hljs-function">() =&gt;</span> {\n    isLoading.value = <span class="hljs-literal">true</span>;\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      isLoading.value = <span class="hljs-literal">false</span>;\n    }, <span class="hljs-number">3000</span>);\n  };\n\n  <span class="hljs-keyword">return</span> {\n    isLoading,\n    changeLoading\n  };\n  <span class="hljs-comment">// ...</span>\n</code></pre><h3>图标按钮</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;star-fill&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;star&quot;</span>&gt;</span>收藏<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h3>按钮尺寸</h3><p>支持 <code>large</code>、<code>normal</code>、<code>small</code> 三种尺寸，默认为 <code>normal</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>大号按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>普通按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h3>块级元素</h3><p>按钮在默认情况下为行内块级元素，通过 <code>block</code> 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>块级元素<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h3>自定义颜色</h3><p>通过 color 属性可以自定义按钮的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>单色按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>单色按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;</span>&gt;</span>\n  渐变色按钮\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值为 <code>primary</code> <code>info</code> <code>warning</code> <code>danger</code> <code>success</code></td><td>String</td><td><code>default</code></td></tr><tr><td>size</td><td>尺寸，可选值为 <code>large</code> <code>small</code></td><td>String</td><td><code>normal</code></td></tr><tr><td>shape</td><td>形状，可选值为 <code>square</code></td><td>String</td><td><code>round</code></td></tr><tr><td>color</td><td>按钮颜色，支持传入 linear-gradient 渐变色</td><td>String</td><td>-</td></tr><tr><td>plain</td><td>是否为朴素按钮</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>block</td><td>是否为块级元素</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>icon</td><td>按钮图标，同Icon组件name属性</td><td>String</td><td>-</td></tr><tr><td>loading</td><td>按钮loading状态</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td>event: MouseEvent</td></tr></tbody></table>',37)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));
