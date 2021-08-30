System.register(["./vendor-legacy.d2a5cd34.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Infiniteloading 滚动加载</h1><h3>介绍</h3><p>列表滚动到底部自动加载更多数据。</p><h3>安装</h3><pre><code class="language-javascript">  <span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n  <span class="hljs-keyword">import</span> { InfiniteLoading } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n  <span class="hljs-keyword">const</span> app = createApp();\n  app.use(InfiniteLoading);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteUl&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;scroll&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-infiniteloading</span>\n        <span class="hljs-attr">containerId</span> = <span class="hljs-string">&#39;scroll&#39;</span>\n        <span class="hljs-attr">:use-window</span>=<span class="hljs-string">&#39;false&#39;</span>\n        <span class="hljs-attr">:has-more</span>=<span class="hljs-string">&quot;hasMore&quot;</span>\n        @<span class="hljs-attr">load-more</span>=<span class="hljs-string">&quot;loadMore&quot;</span>\n    &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in defultList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-infiniteloading</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> hasMore = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> data = reactive({\n      <span class="hljs-attr">defultList</span>: []\n    });\n    <span class="hljs-keyword">const</span> loadMore = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {  \n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">const</span> curLen = data.defultList.length;\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {\n          data.defultList.push(<span class="hljs-string">`<span class="hljs-subst">${i}</span>`</span>);\n        }\n        <span class="hljs-keyword">if</span> (data.defultList.length &gt; <span class="hljs-number">30</span>) hasMore.value = <span class="hljs-literal">false</span>;\n        done()\n      }, <span class="hljs-number">500</span>);\n    };\n    <span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {\n        data.defultList.push(<span class="hljs-string">`<span class="hljs-subst">${i}</span>`</span>);\n      }\n    }\n    onMounted(<span class="hljs-function">() =&gt;</span> {\n      init()\n    });\n    <span class="hljs-keyword">return</span> { loadMore, hasMore, ...toRefs(data) };\n}\n</code></pre><h3>下拉刷新</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteUl&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;refreshScroll&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-infiniteloading</span>\n    <span class="hljs-attr">pull-icon</span>=<span class="hljs-string">&quot;JD&quot;</span>\n    <span class="hljs-attr">container-id</span>=<span class="hljs-string">&quot;refreshScroll&quot;</span>\n    <span class="hljs-attr">:use-window</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">:is-open-refresh</span>=<span class="hljs-string">&quot;true&quot;</span>\n    <span class="hljs-attr">:has-more</span>=<span class="hljs-string">&quot;refreshHasMore&quot;</span>\n    @<span class="hljs-attr">load-more</span>=<span class="hljs-string">&quot;refreshLoadMore&quot;</span>\n    @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in refreshList&quot;</span>\n      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>\n      &gt;</span>{{ item }}&lt;/li\n    &gt;\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-infiniteloading</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> refreshHasMore = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> data = reactive({\n      <span class="hljs-attr">refreshList</span>: []\n    });\n    <span class="hljs-keyword">const</span> refreshLoadMore = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">const</span> curLen = data.refreshList.length;\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {\n          data.refreshList.push(\n            <span class="hljs-string">`<span class="hljs-subst">${i}</span>`</span>\n          );\n        }\n        <span class="hljs-keyword">if</span> (data.refreshList.length &gt; <span class="hljs-number">30</span>) refreshHasMore.value = <span class="hljs-literal">false</span>;\n        done()\n      }, <span class="hljs-number">500</span>);\n    };\n\n    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function">(<span class="hljs-params">done</span>) =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">()=&gt;</span>{\n        Toast.success(<span class="hljs-string">&#39;刷新成功&#39;</span>);\n        done()\n      },<span class="hljs-number">1000</span>)\n    }\n    <span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {\n        data.refreshList.push(<span class="hljs-string">`<span class="hljs-subst">${i}</span>`</span>);\n      }\n    }\n    onMounted(<span class="hljs-function">() =&gt;</span> {\n      init()\n    });\n    <span class="hljs-keyword">return</span> { refreshLoadMore, refreshHasMore, refresh, ...toRefs(data) };\n}\n</code></pre><h3>自定义加载文案</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteUl&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;customScroll&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-infiniteloading</span>\n        <span class="hljs-attr">container-id</span> = <span class="hljs-string">&#39;customScroll&#39;</span>\n        <span class="hljs-attr">:use-window</span>=<span class="hljs-string">&#39;false&#39;</span>\n        <span class="hljs-attr">:has-more</span>=<span class="hljs-string">&quot;customHasMore&quot;</span>\n        @<span class="hljs-attr">load-more</span>=<span class="hljs-string">&quot;customLoadMore&quot;</span>\n    &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in customList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:loading</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>加载中...<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:unloadMore</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;unload-more&quot;</span>&gt;</span>没有数据啦 ~~<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-infiniteloading</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> customHasMore = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> data = reactive({\n      <span class="hljs-attr">customList</span>: [<span class="hljs-string">&#39;&#39;</span>]\n    });\n    <span class="hljs-keyword">const</span> customLoadMore = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">const</span> curLen = data.customList.length;\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {\n          data.customList.push(<span class="hljs-string">`<span class="hljs-subst">${i}</span>`</span>);\n        }\n        <span class="hljs-keyword">if</span> (data.customList.length &gt; <span class="hljs-number">30</span>) customHasMore.value = <span class="hljs-literal">false</span>;\n        done()\n      }, <span class="hljs-number">500</span>);\n    };\n    <span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {\n        data.customList.push(<span class="hljs-string">`<span class="hljs-subst">${i}</span>`</span>);\n      }\n    }\n    onMounted(<span class="hljs-function">() =&gt;</span> {\n      init()\n    });\n    <span class="hljs-keyword">return</span> { customHasMore, customLoadMore,...toRefs(data) };\n}\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>has-more</td><td>是否还有更多数据</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>threshold</td><td>距离底部多远加载</td><td>Number</td><td><code>200</code></td></tr><tr><td>use-window</td><td>将滚动侦听器添加到 window 否则侦听组件的父节点</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>use-capture</td><td>是否使用捕获模式 true 捕获 false 冒泡</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>container-id</td><td>在 useWindow 属性为 false 的时候，自定义设置节点ID</td><td>String</td><td><code>&#39;&#39;</code></td></tr><tr><td>load-more-txt</td><td>“没有更多数”据展示文案</td><td>String</td><td><code>&#39;哎呀，这里是底部了啦&#39;</code></td></tr><tr><td>is-open-refresh</td><td>是否开启下拉刷新</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>pull-icon</td><td>下拉刷新<a href="#/icon">图标名称</a></td><td>String</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40/"></td></tr><tr><td>pull-txt</td><td>下拉刷新提示文案</td><td>String</td><td><code>松手刷新</code></td></tr><tr><td>load-icon</td><td>上拉加载<a href="#/icon">图标名称</a></td><td>Boolean</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40"></td></tr><tr><td>load-txt</td><td>上拉加载提示文案</td><td>String</td><td><code>加载中...</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load-more</td><td>继续加载的回调函数</td><td>done 函数，用于关闭加载中状态</td></tr><tr><td>scroll-change</td><td>实时监听滚动高度</td><td>滚动高度</td></tr><tr><td>refresh</td><td>下拉刷新事件回调</td><td>done 函数，用于关闭加载中状态</td></tr></tbody></table>',20)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));
