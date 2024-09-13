# `commitlint-config-lsy`

> 重生之我想当前端大糕手-GitCommit规范篇

支持配套的 [commitlint 配置](https://commitlint.js.org/#/concepts-shareable-config)，用于对 `git commit message` 进行校验。

## 安装

使用时，需要安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm i @commitlint/cli --save-dev
npm i commitlint-config-lsy --save-dev
```

## 使用

创建并在 `commitlint.config.js` 中集成本包:

```javascript
module.exports = {
  extends: ['commitlint-config-lsy'],
};
```

## 设置 git hook

可通过 [husky](https://www.npmjs.com/package/husky) 设置在 `git commit` 时触发 `commitlint`。

首先安装 husky：

```bash
npm install husky --save-dev
```

然后执行添加`/husky/pre-commit`文件:

```bash
npx husky add .husky/commit-msg
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。
