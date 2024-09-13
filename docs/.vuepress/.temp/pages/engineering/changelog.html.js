import comp from "E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/engineering/changelog.html.vue"
const data = JSON.parse("{\"path\":\"/engineering/changelog.html\",\"title\":\"CHANGELOG 规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CHANGELOG 规范\",\"categories\":[\"工程规范\"],\"tags\":[\"工程规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"1. 文件\",\"slug\":\"_1-文件\",\"link\":\"#_1-文件\",\"children\":[]},{\"level\":2,\"title\":\"2. 格式\",\"slug\":\"_2-格式\",\"link\":\"#_2-格式\",\"children\":[]},{\"level\":2,\"title\":\"样本示例\",\"slug\":\"样本示例\",\"link\":\"#样本示例\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"engineering/changelog.md\",\"excerpt\":\"\\n<h2>前言</h2>\\n<p>作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 <code>Changelog</code>）吗？</p>\\n<ol>\\n<li>如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 <code>Changelog</code> <code>是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog</code> 可以帮助他们了解新版本有哪些变化。</li>\\n<li>如果你在开发一个业务应用，那么 <code>Changelog</code> 不是必需的。然而提供一个 <code>Changelog</code> 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。</li>\\n</ol>\"}")
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
