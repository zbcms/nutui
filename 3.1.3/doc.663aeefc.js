import{e as s,o as a,G as n}from"./vendor.21cda21c.js";const t={class:"markdown-body"},l=[n('<h1>Pullrefresh组件</h1><h3>介绍</h3><p>纵向可支持下拉刷新和上拉加载，横向可支持左滑更新、右滑加载更多</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(PullRefresh);\n</code></pre><h2>代码演示</h2><h3>纵向</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-pullrefresh</span>\n        @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>\n        @<span class="hljs-attr">down-refresh</span>=<span class="hljs-string">&quot;downRefresh&quot;</span>\n        <span class="hljs-attr">:useWindow</span>=<span class="hljs-string">&quot;false&quot;</span>\n        <span class="hljs-attr">containerId</span>=<span class="hljs-string">&quot;pull&quot;</span>\n    &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;pull&quot;</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;main&quot;</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n                    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>\n                    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in [1, 2, 3, 4, 5, 6, 7, 8, 9]&quot;</span>\n                    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n                    &gt;</span>我是测试数据 {{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-pullrefresh</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;上拉加载&#39;</span>)\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        done();\n      }, <span class="hljs-number">1000</span>);\n    };\n\n    <span class="hljs-keyword">const</span> downRefresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;下拉刷新&#39;</span>)\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        done();\n      }, <span class="hljs-number">1000</span>);\n    }\n    <span class="hljs-keyword">return</span> { refresh, downRefresh };\n}\n</code></pre><h3>横向</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-pullrefresh</span>\n        @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>\n        @<span class="hljs-attr">down-refresh</span>=<span class="hljs-string">&quot;downRefresh&quot;</span>\n        <span class="hljs-attr">:useWindow</span>=<span class="hljs-string">&quot;false&quot;</span>\n        <span class="hljs-attr">containerId</span>=<span class="hljs-string">&quot;pullH&quot;</span>\n        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>\n    &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;contentH&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;pullH&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mainH&quot;</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n            <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>\n            <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in [1, 2, 3, 4, 5, 6, 7, 8, 9]&quot;</span>\n            <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n            &gt;</span>我是测试数据 {{ item }}&lt;/div\n            &gt;\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-pullrefresh</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;上拉加载&#39;</span>)\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        done();\n      }, <span class="hljs-number">1000</span>);\n    };\n\n    <span class="hljs-keyword">const</span> downRefresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;下拉刷新&#39;</span>)\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        done();\n      }, <span class="hljs-number">1000</span>);\n    }\n    <span class="hljs-keyword">return</span> { refresh, downRefresh };\n}\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>useWindow</td><td>将滚动侦听器添加到 window 否则侦听组件的父节点</td><td>Boolean</td><td>true</td></tr><tr><td>containerId</td><td>在 useWindow 属性为 false 的时候，自定义设置节点ID</td><td>String</td><td>‘’</td></tr><tr><td>disabled</td><td>组件是否激活</td><td>Boolean</td><td>true</td></tr><tr><td>direction</td><td>滚动的方向，‘vertical’ 纵向、‘horizontal’ 横向</td><td>String</td><td>‘vertical’</td></tr><tr><td>pullingText</td><td>&#39;下拉’文案</td><td>Object</td><td>{top: ‘下拉刷新’, bottom: ‘上拉加载’,left: ‘左滑刷新’, right: ‘右滑加载’}</td></tr><tr><td>loosingText</td><td>&#39;释放’文案</td><td>Object</td><td>{top: ’松手释放刷新’, bottom: ‘松手释放刷新’,left: ‘释放刷新’, right: ‘加载更多’}</td></tr><tr><td>loadingText</td><td>&#39;加载中’文案</td><td>Object</td><td>{top: ‘加载中…’, bottom: ‘加载中…’,left: ‘加载中…’, right: ‘加载中…’}</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>refresh</td><td>纵向-上拉加载、横向-右滑加载更多时触发</td><td>done() 函数，在数据更新完成以后，需要调用 done() 函数将组件状态初始化</td></tr><tr><td>downRefresh</td><td>纵向-下拉刷新、横向-左滑刷新时触发</td><td>done() 函数，在数据更新完成以后，需要调用 done() 函数将组件状态初始化</td></tr></tbody></table>',17)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};
