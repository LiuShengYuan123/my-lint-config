export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"编码规范\",\"children\":[{\"text\":\"HTML 编码规范\",\"link\":\"/coding/html.md\"},{\"text\":\"CSS 编码规范\",\"link\":\"/coding/css.md\"},{\"text\":\"JavaScript 编码规范\",\"link\":\"/coding/javascript.md\"},{\"text\":\"Typescript 编码规范\",\"link\":\"/coding/typescript.md\"},{\"text\":\"Node 编码规范\",\"link\":\"/coding/node.md\"}]}],\"sidebar\":[{\"text\":\"编码规范\",\"children\":[{\"text\":\"HTML 编码规范\",\"link\":\"/coding/html.md\"},{\"text\":\"CSS 编码规范\",\"link\":\"/coding/css.md\"},{\"text\":\"JavaScript 编码规范\",\"link\":\"/coding/javascript.md\"},{\"text\":\"Typescript 编码规范\",\"link\":\"/coding/typescript.md\"},{\"text\":\"Node 编码规范\",\"link\":\"/coding/node.md\"}],\"collapsible\":true},{\"text\":\"工程规范\",\"children\":[{\"text\":\"Git 规范\",\"link\":\"/engineering/git.md\"},{\"text\":\"文档规范\",\"link\":\"/engineering/doc.md\"},{\"text\":\"CHANGELOG 规范\",\"link\":\"/engineering/changelog.md\"}],\"collapsible\":true},{\"text\":\"NPM包\",\"children\":[{\"text\":\"encode-fe-eslint-config\",\"link\":\"/npm/eslint.md\"},{\"text\":\"encode-fe-stylelint-config\",\"link\":\"/npm/stylelint.md\"},{\"text\":\"encode-fe-commitlint-config\",\"link\":\"/npm/commitlint.md\"},{\"text\":\"encode-fe-markdownlint-config\",\"link\":\"/npm/markdownlint.md\"},{\"text\":\"encode-fe-eslint-plugin\",\"link\":\"/npm/eslint-plugin.md\"}],\"collapsible\":true},{\"text\":\"脚手架\",\"children\":[{\"text\":\"encode-fe-lint\",\"link\":\"/cli/encode-fe-lint.md\"}],\"collapsible\":true}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
