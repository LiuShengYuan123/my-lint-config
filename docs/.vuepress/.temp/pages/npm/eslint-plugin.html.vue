<template><div><h1 id="encode-fe-eslint-plugin" tabindex="-1"><a class="header-anchor" href="#encode-fe-eslint-plugin"><span>encode-fe-eslint-plugin</span></a></h1>
<p>除了本包，你需要同时安装 <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESlint</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">npm</span> <span class="token function">install</span> encode-fe-eslint-plugin eslint --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<h3 id="引入插件" tabindex="-1"><a class="header-anchor" href="#引入插件"><span>引入插件</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// .eslintrc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'encode-fe-eslint-config'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'encode-fe-eslint-plugin/no-secret-info'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-presets" tabindex="-1"><a class="header-anchor" href="#使用-presets"><span>使用 presets</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// .eslintrc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">'plugin:encode-fe-eslint-plugin/recommended'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的规则" tabindex="-1"><a class="header-anchor" href="#支持的规则"><span>支持的规则</span></a></h2>
<h3 id="no-broad-semantic-versioning" tabindex="-1"><a class="header-anchor" href="#no-broad-semantic-versioning"><span><code v-pre>no-broad-semantic-versioning</code></span></a></h3>
<p>不要在 <code v-pre>package.json</code> 中使用太过宽泛的版本指定方式，包括 <code v-pre>*</code>、<code v-pre>x</code> 和 <code v-pre>&gt; x</code> 。</p>
<h4 id="规则内容" tabindex="-1"><a class="header-anchor" href="#规则内容"><span>规则内容</span></a></h4>
<p>参照 <a href="https://docs.npmjs.com/about-semantic-versioning" target="_blank" rel="noopener noreferrer">https://docs.npmjs.com/about-semantic-versioning</a>。</p>
<p>使用 <code v-pre>*</code>、 <code v-pre>x</code> 和 <code v-pre>&gt; x</code> 指定版本会被警告。</p>
<h3 id="no-http-url" tabindex="-1"><a class="header-anchor" href="#no-http-url"><span><code v-pre>no-http-url</code></span></a></h3>
<p>推荐将 HTTP 链接换为 HTTPS 链接。</p>
<h4 id="规则内容-1" tabindex="-1"><a class="header-anchor" href="#规则内容-1"><span>规则内容</span></a></h4>
<p><strong>错误代码</strong>示例:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token string">'http://chenghuai.com'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> jsx <span class="token operator">=</span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"http://chenghuai.com"</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="何时不适用" tabindex="-1"><a class="header-anchor" href="#何时不适用"><span>何时不适用</span></a></h4>
<p>如果你的网站只支持 HTTP 时。</p>
<h3 id="no-js-in-ts-project" tabindex="-1"><a class="header-anchor" href="#no-js-in-ts-project"><span><code v-pre>no-js-in-ts-project</code></span></a></h3>
<p>不推荐在项目中同时存在 <code v-pre>JS</code> 和 <code v-pre>TS</code> 文件。</p>
<h4 id="规则内容-2" tabindex="-1"><a class="header-anchor" href="#规则内容-2"><span>规则内容</span></a></h4>
<p><strong>错误示例</strong>，TS 项目中包含 JS 文件:</p>
<div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre v-pre><code><span class="line">.</span>
<span class="line">├── index.ts</span>
<span class="line">├── home.js</span>
<span class="line">└── tsconfig.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确示例</strong>:</p>
<div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre v-pre><code><span class="line">.</span>
<span class="line">├── index.ts</span>
<span class="line">├── home.ts</span>
<span class="line">└── tsconfig.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="规则选项" tabindex="-1"><a class="header-anchor" href="#规则选项"><span>规则选项</span></a></h4>
<p>默认当存在 <code v-pre>commitlint.config.js</code>, <code v-pre>eslintrc.js</code>, <code v-pre>prettierrc.js</code>, <code v-pre>stylelintrc.js</code> 文件时不会报错，支持自定义设置文件白名单。</p>
<h3 id="no-secret-info" tabindex="-1"><a class="header-anchor" href="#no-secret-info"><span><code v-pre>no-secret-info</code></span></a></h3>
<p>不在代码中直接通过纯文本值设置 <code v-pre>password</code> <code v-pre>token</code> 和 <code v-pre>secret</code> 信息。</p>
<h4 id="规则内容-3" tabindex="-1"><a class="header-anchor" href="#规则内容-3"><span>规则内容</span></a></h4>
<p>在包含 <code v-pre>password</code> <code v-pre>token</code> and <code v-pre>secret</code> 名称的 key 中禁止使用纯文本值。</p>
<p><strong>错误</strong>代码示例:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> accessKeySecret <span class="token operator">=</span> <span class="token string">'xxxx'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> client <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">accessKeyToken</span><span class="token operator">:</span> <span class="token string">'xxxx'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确</strong>代码示例:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> accessKeySecret <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> client <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">accessKeyToken</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ACCESS_KEY_SECRET</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


