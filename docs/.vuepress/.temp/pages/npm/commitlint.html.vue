<template><div><h1 id="encode-fe-commitlint-config" tabindex="-1"><a class="header-anchor" href="#encode-fe-commitlint-config"><span>encode-fe-commitlint-config</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>印客学院 Git 规范</p>
</div>
<p>支持配套的 <a href="https://commitlint.js.org/#/concepts-shareable-config" target="_blank" rel="noopener noreferrer">commitlint 配置</a>，用于对 <code v-pre>git commit message</code> 进行校验。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<p>使用时，需要安装 <a href="https://www.npmjs.com/package/@commitlint/cli" target="_blank" rel="noopener noreferrer">@commitlint/cli</a>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> encode-fe-commitlint-config @commitlint/cli --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>在 <code v-pre>commitlint.config.js</code> 中集成本包:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'encode-fe-commitlint-config'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置-git-hook" tabindex="-1"><a class="header-anchor" href="#设置-git-hook"><span>设置 git hook</span></a></h2>
<p>可通过 <a href="https://www.npmjs.com/package/husky" target="_blank" rel="noopener noreferrer">husky</a> 设置在 <code v-pre>git commit</code> 时触发 <code v-pre>commitlint</code>。</p>
<p>首先安装 husky：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> husky --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后执行添加<code v-pre>commit-msg</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">'npx commitlint --edit $1'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>更多信息可参考 <a href="https://commitlint.js.org/#/guides-local-setup?id=install-husky" target="_blank" rel="noopener noreferrer">commitlint 文档</a>。</p>
</div></template>


