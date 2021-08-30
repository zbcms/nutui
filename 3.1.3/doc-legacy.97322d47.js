System.register(["./vendor-legacy.d2a5cd34.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Notify 消息通知</h1><h3>介绍</h3><p>在页面顶部展示消息提示</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Notify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Notify);\n</code></pre><h2>基本用法</h2><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {\n      Notify.text(<span class="hljs-string">&#39;通知内容&#39;</span>, {\n        <span class="hljs-function"><span class="hljs-title">onClosed</span>(<span class="hljs-params"></span>)</span> {\n          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;close&#39;</span>);\n        },\n        <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;click&#39;</span>);\n        }\n      });\n  }\n}\n</code></pre><h2>通知类型</h2><h3>主要通知</h3><pre><code class="language-javascript">    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span>{\n      Notify.primary(<span class="hljs-string">&#39;通知内容&#39;</span>);\n    }\n</code></pre><h3>成功通知</h3><pre><code class="language-javascript">    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span>{\n      Notify.success(<span class="hljs-string">&#39;通知内容&#39;</span>);\n    }\n</code></pre><h3>危险通知</h3><pre><code class="language-javascript">    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span>{\n      Notify.danger(<span class="hljs-string">&#39;通知内容&#39;</span>);\n    }\n</code></pre><h3>警告通知</h3><pre><code class="language-javascript">    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span>{\n      Notify.warn(<span class="hljs-string">&#39;通知内容&#39;</span>);\n    }\n</code></pre><h2>自定义</h2><h3>自定义样式</h3><pre><code class="language-javascript">    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span>{\n      Notify.text(val, {\n        <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ad0000&#39;</span>,\n        <span class="hljs-attr">background</span>: <span class="hljs-string">&#39;#ffe1e1&#39;</span>\n      });\n    }\n</code></pre><h3>自定义时长</h3><pre><code class="language-javascript">    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span>{\n      Notify.text(val, {\n        <span class="hljs-attr">duration</span>: <span class="hljs-number">10000</span>\n      });\n    }\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>提示的信息类型（primary，success ，danger，warning）</td><td>String</td><td>‘danger’</td></tr><tr><td>message</td><td>展示文案，支持通过\\n换行</td><td>Boolean</td><td>false</td></tr><tr><td>duration</td><td>展示时长(ms)，值为 0 时，notify 不会消失</td><td>String</td><td>3000</td></tr><tr><td>color</td><td>字体颜色</td><td>String</td><td>空</td></tr><tr><td>background</td><td>背景颜色</td><td>String</td><td>空</td></tr><tr><td>class-name</td><td>自定义类名</td><td>String/Number</td><td>1</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件回调</td><td>无</td></tr><tr><td>closed</td><td>关闭事件回调</td><td>无</td></tr></tbody></table>',26)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));
