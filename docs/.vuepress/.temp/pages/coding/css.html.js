import comp from "E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/coding/css.html.vue"
const data = JSON.parse("{\"path\":\"/coding/css.html\",\"title\":\"CSS 编码规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CSS 编码规范\",\"categories\":[\"编码规范\"],\"tags\":[\"编码规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"1. CSS\",\"slug\":\"_1-css\",\"link\":\"#_1-css\",\"children\":[{\"level\":3,\"title\":\"1.1. 编码风格\",\"slug\":\"_1-1-编码风格\",\"link\":\"#_1-1-编码风格\",\"children\":[]},{\"level\":3,\"title\":\"1.2. 选择器\",\"slug\":\"_1-2-选择器\",\"link\":\"#_1-2-选择器\",\"children\":[]},{\"level\":3,\"title\":\"1.3. 属性和属性值\",\"slug\":\"_1-3-属性和属性值\",\"link\":\"#_1-3-属性和属性值\",\"children\":[]},{\"level\":3,\"title\":\"1.4. 其他\",\"slug\":\"_1-4-其他\",\"link\":\"#_1-4-其他\",\"children\":[]}]},{\"level\":2,\"title\":\"2. Sass 和 Less\",\"slug\":\"_2-sass-和-less\",\"link\":\"#_2-sass-和-less\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"coding/css.md\",\"excerpt\":\"\\n<p>本规约涉及 <code>CSS</code> 及其预编译语言（<code>Sass</code>、<code>Less</code>）的编码风格和最佳实践，部分规则可通过 <a href=\\\"https://stylelint.io/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">stylelint</a> 工具落地。</p>\\n<h2>1. CSS</h2>\\n<h3>1.1. 编码风格</h3>\\n<p></p>\\n<p>详细规则如下：</p>\\n<ul>\\n<li>\\n<p>1.1.1.【强制】所有声明都应该以分号结尾，不能省略。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">declaration-block-trailing-semicolon</a></p>\\n<p>虽然 <code>CSS</code> 语法中最后一条声明的分号是可选的，但是使用分号可以增加代码的一致性和易用性。</p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">margin-top</span><span class=\\\"token punctuation\\\">:</span> 10px</span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px</span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">margin-top</span><span class=\\\"token punctuation\\\">:</span> 10px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.2.【推荐】使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/indentation\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">indentation</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.3.【推荐】选择器和 <code>{</code> 之间保留一个空格。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/block-opening-brace-space-before\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">block-opening-brace-space-before</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.4.【推荐】属性名和 <code>:</code> 之前无空格，<code>:</code> 和属性值之间保留一个空格。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/declaration-colon-space-after\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">declaration-colon-space-after</a> <a href=\\\"https://stylelint.io/user-guide/rules/declaration-colon-space-before\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">declaration-colon-space-before</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">margin-top</span> <span class=\\\"token punctuation\\\">:</span> 10px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span>15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">margin-top</span><span class=\\\"token punctuation\\\">:</span> 10px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.5.【推荐】<code>&gt;</code>、<code>+</code>、<code>~</code> 、<code>||</code> 等组合器前后各保留一个空格。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/selector-combinator-space-before\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">selector-combinator-space-before</a> <a href=\\\"https://stylelint.io/user-guide/rules/selector-combinator-space-after\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">selector-combinator-space-after</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector&gt;.children</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector+.brother</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector &gt; .children</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector + .brother</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.6.【推荐】在使用 <code>,</code> 分隔的属性值中，<code>,</code> 之后保留一个空格。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/value-list-comma-space-after\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">value-list-comma-space-after</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">background-color</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token function\\\">rgba</span><span class=\\\"token punctuation\\\">(</span>0<span class=\\\"token punctuation\\\">,</span>0<span class=\\\"token punctuation\\\">,</span>0<span class=\\\"token punctuation\\\">,</span>0.5<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">box-shadow</span><span class=\\\"token punctuation\\\">:</span> 0px 1px 2px <span class=\\\"token function\\\">rgba</span><span class=\\\"token punctuation\\\">(</span>0<span class=\\\"token punctuation\\\">,</span>0<span class=\\\"token punctuation\\\">,</span>0<span class=\\\"token punctuation\\\">,</span>0.5<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span>inset 0 1px 0 <span class=\\\"token function\\\">rgba</span><span class=\\\"token punctuation\\\">(</span>255<span class=\\\"token punctuation\\\">,</span>255<span class=\\\"token punctuation\\\">,</span>255<span class=\\\"token punctuation\\\">,</span>0.5<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">background-color</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token function\\\">rgba</span><span class=\\\"token punctuation\\\">(</span>0<span class=\\\"token punctuation\\\">,</span> 0<span class=\\\"token punctuation\\\">,</span> 0<span class=\\\"token punctuation\\\">,</span> 0.5<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">box-shadow</span><span class=\\\"token punctuation\\\">:</span> 0px 1px 2px <span class=\\\"token function\\\">rgba</span><span class=\\\"token punctuation\\\">(</span>0<span class=\\\"token punctuation\\\">,</span> 0<span class=\\\"token punctuation\\\">,</span> 0<span class=\\\"token punctuation\\\">,</span> 0.5<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span> inset 0 1px 0 <span class=\\\"token function\\\">rgba</span><span class=\\\"token punctuation\\\">(</span>255<span class=\\\"token punctuation\\\">,</span> 255<span class=\\\"token punctuation\\\">,</span> 255<span class=\\\"token punctuation\\\">,</span> 0.5<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.7.【推荐】注释内容和注释符之间留有一个空格。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/comment-whitespace-inside\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">comment-whitespace-inside</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/*comment*/</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/*  comment  */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/**</span>\\n<span class=\\\"line\\\">   *comment</span>\\n<span class=\\\"line\\\">   */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/* comment */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/**</span>\\n<span class=\\\"line\\\">   * comment</span>\\n<span class=\\\"line\\\">   */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.8.【推荐】声明块的右大括号 <code>}</code> 应单独成行。</p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.9.【推荐】属性声明应单独成行。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">declaration-block-single-line-max-declarations</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token property\\\">margin-left</span><span class=\\\"token punctuation\\\">:</span> 10px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">margin-left</span><span class=\\\"token punctuation\\\">:</span> 10px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.10.【推荐】单行代码最多不要超过 100 个字符。 <code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/max-line-length\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">max-line-length</a> 除了以下两种情况：</p>\\n<ul>\\n<li>使用 <a href=\\\"https://developer.mozilla.org/en-US/docs/Web/CSS/url\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><code>url()</code></a> 函数时</li>\\n<li>CSS 属性值本身无法换行时，即属性值内无空格或逗号时</li>\\n</ul>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token property\\\">background-image</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token function\\\">-webkit-gradient</span><span class=\\\"token punctuation\\\">(</span>linear<span class=\\\"token punctuation\\\">,</span> left bottom<span class=\\\"token punctuation\\\">,</span> left top<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token function\\\">color-stop</span><span class=\\\"token punctuation\\\">(</span>0.04<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token function\\\">rgb</span><span class=\\\"token punctuation\\\">(</span>88<span class=\\\"token punctuation\\\">,</span> 94<span class=\\\"token punctuation\\\">,</span> 124<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token function\\\">color-stop</span><span class=\\\"token punctuation\\\">(</span>0.52<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token function\\\">rgb</span><span class=\\\"token punctuation\\\">(</span>115<span class=\\\"token punctuation\\\">,</span> 123<span class=\\\"token punctuation\\\">,</span> 162<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token property\\\">background-image</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token function\\\">-webkit-gradient</span><span class=\\\"token punctuation\\\">(</span></span>\\n<span class=\\\"line\\\">  linear<span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">  left bottom<span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">  left top<span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token function\\\">color-stop</span><span class=\\\"token punctuation\\\">(</span>0.04<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token function\\\">rgb</span><span class=\\\"token punctuation\\\">(</span>88<span class=\\\"token punctuation\\\">,</span> 94<span class=\\\"token punctuation\\\">,</span> 124<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token function\\\">color-stop</span><span class=\\\"token punctuation\\\">(</span>0.52<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token function\\\">rgb</span><span class=\\\"token punctuation\\\">(</span>115<span class=\\\"token punctuation\\\">,</span> 123<span class=\\\"token punctuation\\\">,</span> 162<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.11.【参考】使用多个选择器时，每个选择器应该单独成行。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/selector-list-comma-newline-after\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">selector-list-comma-newline-after</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector, .selector-secondary, .selector-third</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">margin-bottom</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector,</span>\\n<span class=\\\"line\\\">.selector-secondary,</span>\\n<span class=\\\"line\\\">.selector-third</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">margin-bottom</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.12.【参考】声明块内只有一条语句时，也应该写成多行。</p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span> <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>1.1.13.【参考】注释行上方需留有一行空行，除非上一行是注释或块的顶部。<code>stylelint</code>: <a href=\\\"https://stylelint.io/user-guide/rules/comment-empty-line-before\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">comment-empty-line-before</a></p>\\n<div class=\\\"language-css line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/* bad */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/* comment */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/* comment */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-right</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">/* good */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token selector\\\">.selector</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/* comment */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-left</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/* comment */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">padding-right</span><span class=\\\"token punctuation\\\">:</span> 15px<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
