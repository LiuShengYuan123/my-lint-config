import comp from "E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/engineering/git.html.vue"
const data = JSON.parse("{\"path\":\"/engineering/git.html\",\"title\":\"Git 规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Git 规范\",\"categories\":[\"工程规范\"],\"tags\":[\"工程规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"1. Git 提交日志格式规约\",\"slug\":\"_1-git-提交日志格式规约\",\"link\":\"#_1-git-提交日志格式规约\",\"children\":[{\"level\":3,\"title\":\"1.1. 前言\",\"slug\":\"_1-1-前言\",\"link\":\"#_1-1-前言\",\"children\":[]},{\"level\":3,\"title\":\"1.2. 基本的 message 格式\",\"slug\":\"_1-2-基本的-message-格式\",\"link\":\"#_1-2-基本的-message-格式\",\"children\":[]},{\"level\":3,\"title\":\"1.3. message header\",\"slug\":\"_1-3-message-header\",\"link\":\"#_1-3-message-header\",\"children\":[]}]},{\"level\":2,\"title\":\"2. Git 分支命名规约\",\"slug\":\"_2-git-分支命名规约\",\"link\":\"#_2-git-分支命名规约\",\"children\":[{\"level\":3,\"title\":\"2.1. 分支模型选择的说明\",\"slug\":\"_2-1-分支模型选择的说明\",\"link\":\"#_2-1-分支模型选择的说明\",\"children\":[]},{\"level\":3,\"title\":\"2.2. 分支命名\",\"slug\":\"_2-2-分支命名\",\"link\":\"#_2-2-分支命名\",\"children\":[]},{\"level\":3,\"title\":\"2.3. 多版本分支命名\",\"slug\":\"_2-3-多版本分支命名\",\"link\":\"#_2-3-多版本分支命名\",\"children\":[]}]},{\"level\":2,\"title\":\"3. Git tag 命名规约\",\"slug\":\"_3-git-tag-命名规约\",\"link\":\"#_3-git-tag-命名规约\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"engineering/git.md\",\"excerpt\":\"\\n<h2>1. Git 提交日志格式规约</h2>\\n<h3>1.1. 前言</h3>\\n<p>为什么要对 <code>Git</code> 提交日志（<code>message</code>）的格式进行规约约束？</p>\\n<ol>\\n<li>更方便、快捷地浏览和了解项目的历史信息。</li>\\n<li>有利于保证提交内容的独立性，避免把所有改动都放在一个提交里面。</li>\\n<li>便于通过脚本自动化生成 <code>CHANGELOG</code>。</li>\\n</ol>\\n<h3>1.2. 基本的 <code>message</code> 格式</h3>\\n<div class=\\\"language-text line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre><code><span class=\\\"line\\\">&lt;type&gt;[optional scope]: &lt;subject&gt;</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">[optional body]</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">[optional footer(s)]</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
