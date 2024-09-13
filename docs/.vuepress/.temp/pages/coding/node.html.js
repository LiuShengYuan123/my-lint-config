import comp from "E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/coding/node.html.vue"
const data = JSON.parse("{\"path\":\"/coding/node.html\",\"title\":\"Node 编码规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Node 编码规范\",\"categories\":[\"编码规范\"],\"tags\":[\"编码规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"1. 编码风格\",\"slug\":\"_1-编码风格\",\"link\":\"#_1-编码风格\",\"children\":[]},{\"level\":2,\"title\":\"2. 安全规约\",\"slug\":\"_2-安全规约\",\"link\":\"#_2-安全规约\",\"children\":[]},{\"level\":2,\"title\":\"3. 最佳实践\",\"slug\":\"_3-最佳实践\",\"link\":\"#_3-最佳实践\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"coding/node.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p><code>Node.js</code> 规约主要包含编码风格、安全规约、最佳实践等几个部分，目的是给业务同学提供研发过程中的实质性规范和指导。其中编码风格 follow <a href=\\\"https://github.com/eggjs/eslint-config-egg\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">eslint-config-egg</a>。</p>\\n</div>\\n<h2>1. 编码风格</h2>\"}")
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
