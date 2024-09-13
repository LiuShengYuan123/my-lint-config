<template><div><h1 id="encode-fe-stylelint-config" tabindex="-1"><a class="header-anchor" href="#encode-fe-stylelint-config"><span>encode-fe-stylelint-config</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>印客学院 CSS 规范</p>
</div>
<p>支持配套的 <a href="https://stylelint.io/user-guide/configure" target="_blank" rel="noopener noreferrer">stylelint 可共享配置</a>。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<p>需要先行安装 <a href="https://www.npmjs.com/package/stylelint" target="_blank" rel="noopener noreferrer">stylelint</a> 和 <a href="https://www.npmjs.com/package/stylelint-scss" target="_blank" rel="noopener noreferrer">stylelint-scss</a>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> encode-fe-stylelint-config stylelint stylelint-scss --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>在 <code v-pre>.stylelintrc</code> 中继承本包:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"encode-fe-stylelint-config"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


