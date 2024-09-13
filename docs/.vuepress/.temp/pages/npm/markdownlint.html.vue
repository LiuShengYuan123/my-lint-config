<template><div><h1 id="encode-fe-markdownlint-config" tabindex="-1"><a class="header-anchor" href="#encode-fe-markdownlint-config"><span>encode-fe-markdownlint-config</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>印客学院 文档 规范</p>
</div>
<p>支持配套的 <a href="https://www.npmjs.com/package/markdownlint#optionsconfig" target="_blank" rel="noopener noreferrer">markdownlint 可共享配置</a>。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<p>需要先行安装 <a href="https://www.npmjs.com/package/markdownlint" target="_blank" rel="noopener noreferrer">markdownlint</a>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> encode-fe-markdownlint-config markdownlint --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>在 <code v-pre>.markdownlint.json</code> 中继承本包:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"encode-fe-markdownlint-config"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


