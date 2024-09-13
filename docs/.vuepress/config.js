import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // logo: '/public/logo.png',
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "编码规范",
        children: [
          { text: "HTML 编码规范", link: "/coding/html.md" },
          { text: "CSS 编码规范", link: "/coding/css.md" },
          { text: "JavaScript 编码规范", link: "/coding/javascript.md" },
          { text: "Typescript 编码规范", link: "/coding/typescript.md" },
          { text: "Node 编码规范", link: "/coding/node.md" },
        ],
      },
    ],
    sidebar: [
      {
        text: "编码规范",
        children: [
          { text: "HTML 编码规范", link: "/coding/html.md" },
          { text: "CSS 编码规范", link: "/coding/css.md" },
          { text: "JavaScript 编码规范", link: "/coding/javascript.md" },
          { text: "Typescript 编码规范", link: "/coding/typescript.md" },
          { text: "Node 编码规范", link: "/coding/node.md" },
        ],
        collapsible:true
      },
      {
        text: '工程规范',
        children: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
        collapsible:true
      },
      {
        text: 'NPM包',
        children: [
          { text: 'encode-fe-eslint-config', link: '/npm/eslint.md' },
          { text: 'encode-fe-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'encode-fe-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'encode-fe-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'encode-fe-eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
        collapsible:true
      },
      {
        text: '脚手架',
        children: [
          { text: 'encode-fe-lint', link: '/cli/encode-fe-lint.md' }
        ],
        collapsible:true
      },
      
    ],
  }),
  plugins: [
    searchProPlugin({
      indexContent: true,
      hotUpdate: true,
      autoSuggestions: true,
    }),
  ],
  lang: "zh-CN",
  title: "重生之我要当前端大糕手！---工程化篇",
  description: "这是我的第一个 VuePress 站点",
});
