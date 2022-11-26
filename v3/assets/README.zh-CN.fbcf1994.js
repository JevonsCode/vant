import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},c=t(`<h1>Icon \u56FE\u6807</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u57FA\u4E8E\u5B57\u4F53\u7684\u56FE\u6807\u96C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 Icon \u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D\u901A\u8FC7 <code>icon</code> \u5C5E\u6027\u5F15\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Icon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Icon</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code>name</code> \u5C5E\u6027\u6765\u6307\u5B9A\u9700\u8981\u4F7F\u7528\u7684\u56FE\u6807\uFF0CVant \u5185\u7F6E\u4E86\u4E00\u5957\u56FE\u6807\u5E93\uFF08\u89C1\u53F3\u4FA7\u793A\u4F8B\uFF09\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F20\u5165\u5BF9\u5E94\u7684\u540D\u79F0\u6765\u4F7F\u7528\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-tu-pian-url" tabindex="-1">\u4F7F\u7528\u56FE\u7247 URL</h3><p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728 <code>name</code> \u5C5E\u6027\u4E2D\u4F20\u5165\u4E00\u4E2A\u56FE\u7247 URL \u6765\u4F5C\u4E3A\u56FE\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">\u5FBD\u6807\u63D0\u793A</h3><p>\u8BBE\u7F6E <code>dot</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9\uFF1B\u8BBE\u7F6E <code>badge</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u76F8\u5E94\u7684\u5FBD\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tu-biao-yan-se" tabindex="-1">\u56FE\u6807\u989C\u8272</h3><p>\u901A\u8FC7 <code>color</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u56FE\u6807\u7684\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fire-o&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tu-biao-da-xiao" tabindex="-1">\u56FE\u6807\u5927\u5C0F</h3><p>\u901A\u8FC7 <code>size</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u56FE\u6807\u7684\u5C3A\u5BF8\u5927\u5C0F\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4EFB\u610F CSS \u5355\u4F4D\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u4E0D\u6307\u5B9A\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4F7F\u7528 px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;40&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- \u6307\u5B9A\u4F7F\u7528 rem \u5355\u4F4D --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;3rem&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3><p>\u5982\u679C\u9700\u8981\u5728\u73B0\u6709 Icon \u7684\u57FA\u7840\u4E0A\u4F7F\u7528\u66F4\u591A\u56FE\u6807\uFF0C\u53EF\u4EE5\u5F15\u5165\u7B2C\u4E09\u65B9 iconfont \u5BF9\u5E94\u7684\u5B57\u4F53\u6587\u4EF6\u548C CSS \u6587\u4EF6\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u5728 Icon \u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\u3002</p><pre><code class="language-css"><span class="hljs-comment">/* \u5F15\u5165\u7B2C\u4E09\u65B9\u6216\u81EA\u5B9A\u4E49\u7684\u5B57\u4F53\u56FE\u6807\u6837\u5F0F */</span>
<span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&#39;./my-icon.ttf&#39;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&#39;truetype&#39;</span>);
}

<span class="hljs-selector-class">.my-icon</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
}

<span class="hljs-selector-class">.my-icon-extra</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#39;\\e626&#39;</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u901A\u8FC7 class-prefix \u6307\u5B9A\u7C7B\u540D\u4E3A my-icon --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">class-prefix</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;extra&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5</td><td><em>string</em></td><td>-</td></tr><tr><td>dot</td><td>\u662F\u5426\u663E\u793A\u56FE\u6807\u53F3\u4E0A\u89D2\u5C0F\u7EA2\u70B9</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props <code>v3.2.8</code></td><td>\u81EA\u5B9A\u4E49\u5FBD\u6807\u7684\u5C5E\u6027\uFF0C\u4F20\u5165\u7684\u5BF9\u8C61\u4F1A\u88AB\u900F\u4F20\u7ED9 <a href="#/zh-CN/badge#props" target="_blank">Badge \u7EC4\u4EF6\u7684 props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>color</td><td>\u56FE\u6807\u989C\u8272</td><td><em>string</em></td><td><code>inherit</code></td></tr><tr><td>size</td><td>\u56FE\u6807\u5927\u5C0F\uFF0C\u5982 <code>20px</code> <code>2em</code>\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>inherit</code></td></tr><tr><td>class-prefix</td><td>\u7C7B\u540D\u524D\u7F00\uFF0C\u7528\u4E8E\u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>tag</td><td>\u6839\u8282\u70B9\u5BF9\u5E94\u7684 HTML \u6807\u7B7E\u540D</td><td><em>string</em></td><td><code>i</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u56FE\u6807\u65F6\u89E6\u53D1</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">IconProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,14),p=[c],i={__name:"README.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),n("div",l,p))}};export{i as default};
