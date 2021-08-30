System.register(["./vendor-legacy.d2a5cd34.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>countdown组件</h1><h3>介绍</h3><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { CountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(CountDown);\n</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,\n    });\n  <span class="hljs-keyword">return</span> {\n    ...toRefs(state)\n  };\n}\n</code></pre><h3>显示天</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span> <span class="hljs-attr">show-days</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>\n</code></pre><h3>以服务端的时间为准</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span>  <span class="hljs-attr">:start-time</span>=<span class="hljs-string">&quot;serverTime&quot;</span> <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span> <span class="hljs-attr">show-days</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">serverTime</span>: <span class="hljs-built_in">Date</span>.now() - <span class="hljs-number">30</span> * <span class="hljs-number">1000</span>,\n      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,\n    });\n  <span class="hljs-keyword">return</span> {\n    ...toRefs(state)\n  };\n}\n</code></pre><h3>显示为 天时分秒</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">show-days</span> <span class="hljs-attr">show-plain-text</span>  <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,\n    });\n  <span class="hljs-keyword">return</span> {\n    ...toRefs(state)\n  };\n}\n</code></pre><h3>异步更新结束时间</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span>  <span class="hljs-attr">show-days</span> <span class="hljs-attr">show-plain-text</span>  <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;asyncEnd&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">asyncEnd</span>: <span class="hljs-number">0</span>,\n    });\n  <span class="hljs-keyword">return</span> {\n    ...toRefs(state)\n  };\n}\n</code></pre><h3>控制开始和暂停的倒计时</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span>  <span class="hljs-attr">:endTime</span>=<span class="hljs-string">&quot;end&quot;</span> <span class="hljs-attr">:paused</span>=<span class="hljs-string">&quot;paused&quot;</span> @<span class="hljs-attr">on-paused</span>=<span class="hljs-string">&quot;onpaused&quot;</span> @<span class="hljs-attr">on-restart</span>=<span class="hljs-string">&quot;onrestart&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;position:absolute;right:10px;top:9px&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&#39;small&#39;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle&quot;</span>&gt;</span>{{ paused ? &#39;start&#39; : &#39;stop&#39; }}<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">paused</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,\n    });\n\n    <span class="hljs-keyword">const</span> toggle = <span class="hljs-function">()=&gt;</span> {\n      state.paused = !state.paused;\n    }\n    <span class="hljs-keyword">const</span> onpaused = <span class="hljs-function">(<span class="hljs-params">v</span>)=&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;paused: &#39;</span>, v);\n    }\n    <span class="hljs-keyword">const</span> onrestart = <span class="hljs-function">(<span class="hljs-params">v</span>)=&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;restart: &#39;</span>, v);\n    }\n  <span class="hljs-keyword">return</span> {\n      toggle,\n      onpaused,\n      onrestart,\n    ...toRefs(state)\n  };\n}\n</code></pre><h3>自定义展示</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;resetTime&quot;</span> <span class="hljs-attr">:endTime</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;countdown-part-box&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item-symbol&quot;</span>&gt;</span> resetTime.d 天<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item h&quot;</span>&gt;</span> resetTime.h <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item-symbol&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item m&quot;</span>&gt;</span> resetTime.m <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item-symbol&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item s&quot;</span>&gt;</span> resetTime.s <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> state = reactive({\n      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,\n      <span class="hljs-attr">resetTime</span>: {\n        <span class="hljs-attr">d</span>: <span class="hljs-string">&#39;1&#39;</span>,\n        <span class="hljs-attr">h</span>: <span class="hljs-string">&#39;00&#39;</span>,\n        <span class="hljs-attr">m</span>: <span class="hljs-string">&#39;00&#39;</span>,\n        <span class="hljs-attr">s</span>: <span class="hljs-string">&#39;00&#39;</span>\n      }\n    });\n  <span class="hljs-keyword">return</span> {\n    ...toRefs(state)\n  };\n}\n</code></pre><h3>API</h3><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前时间，自定义展示内容时生效</td><td>Object</td><td>{}</td></tr><tr><td>start-time</td><td>开始时间</td><td>String, Number</td><td>Date.now()</td></tr><tr><td>end-time</td><td>结束时间</td><td>String, Number</td><td>Date.now()</td></tr><tr><td>show-days</td><td>是否显示天</td><td>Boolean</td><td>false</td></tr><tr><td>show-plain-text</td><td>显示为纯文本</td><td>Boolean</td><td>false</td></tr><tr><td>paused</td><td>是否暂停</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-end</td><td>倒计时结束时</td><td>剩余时间戳</td></tr><tr><td>on-paused</td><td>暂停时</td><td>剩余时间戳</td></tr><tr><td>on-restart</td><td>暂停时</td><td>剩余时间戳</td></tr></tbody></table>',29)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));
