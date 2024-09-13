export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/cli/encode-fe-lint.html", { loader: () => import(/* webpackChunkName: "cli_encode-fe-lint.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/cli/encode-fe-lint.html.js"), meta: {"title":"encode-fe-lint"} }],
  ["/coding/css.html", { loader: () => import(/* webpackChunkName: "coding_css.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/coding/css.html.js"), meta: {"title":"CSS 编码规范"} }],
  ["/coding/html.html", { loader: () => import(/* webpackChunkName: "coding_html.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/coding/html.html.js"), meta: {"title":"HTML 编码规范"} }],
  ["/coding/javascript.html", { loader: () => import(/* webpackChunkName: "coding_javascript.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/coding/javascript.html.js"), meta: {"title":"JavaScript 编码规范"} }],
  ["/coding/node.html", { loader: () => import(/* webpackChunkName: "coding_node.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/coding/node.html.js"), meta: {"title":"Node 编码规范"} }],
  ["/coding/typescript.html", { loader: () => import(/* webpackChunkName: "coding_typescript.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/coding/typescript.html.js"), meta: {"title":"TypeScript 编码规范"} }],
  ["/engineering/changelog.html", { loader: () => import(/* webpackChunkName: "engineering_changelog.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/engineering/changelog.html.js"), meta: {"title":"CHANGELOG 规范"} }],
  ["/engineering/doc.html", { loader: () => import(/* webpackChunkName: "engineering_doc.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/engineering/doc.html.js"), meta: {"title":"文档规范"} }],
  ["/engineering/git.html", { loader: () => import(/* webpackChunkName: "engineering_git.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/engineering/git.html.js"), meta: {"title":"Git 规范"} }],
  ["/npm/commitlint.html", { loader: () => import(/* webpackChunkName: "npm_commitlint.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/npm/commitlint.html.js"), meta: {"title":"encode-fe-commitlint-config"} }],
  ["/npm/eslint-plugin.html", { loader: () => import(/* webpackChunkName: "npm_eslint-plugin.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/npm/eslint-plugin.html.js"), meta: {"title":"encode-fe-eslint-plugin"} }],
  ["/npm/eslint.html", { loader: () => import(/* webpackChunkName: "npm_eslint.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/npm/eslint.html.js"), meta: {"title":"encode-fe-eslint-config"} }],
  ["/npm/markdownlint.html", { loader: () => import(/* webpackChunkName: "npm_markdownlint.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/npm/markdownlint.html.js"), meta: {"title":"encode-fe-markdownlint-config"} }],
  ["/npm/stylelint.html", { loader: () => import(/* webpackChunkName: "npm_stylelint.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/npm/stylelint.html.js"), meta: {"title":"encode-fe-stylelint-config"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/BBBBBB印客学堂/前端工程化lint规范/lint-demo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
