简体中文 | [English](./README.en.md)

<div align= "center">
<img align="center" width=200 src="./public/logo.png" />
</div>

<div align="center">
    <h1>Rubick</h1>
    <img alt="累计下载数" src="https://img.shields.io/github/downloads/rubickCenter/rubick/total" />
    <a href="https://github.com/rubickCenter/rubick/releases"><img alt="最新发布版本" src="https://img.shields.io/github/package-json/v/rubickCenter/rubick" /></a>
    <a href="https://github.com/rubickCenter/rubick/actions"><img alt="github action 构建" src="https://img.shields.io/github/actions/workflow/status/rubickCenter/rubick/main.yml" /></a>
    <a href="https://github.com/rubickCenter/rubick/blob/master/LICENSE"><img alt="许可证" src="https://img.shields.io/github/license/rubickCenter/rubick" /></a>
    <a href="https://github.com/rubickCenter/rubick/stargazers"><img alt="github 收藏数" src="https://img.shields.io/github/stars/rubickCenter/rubick?style=social" /></a>
    <a href="https://gitee.com/monkeyWang/rubick"><img alt="gitee 镜像源" src="https://img.shields.io/badge/Gitee--yellow.svg?style=social&logo=data:image/svg+xml;base64,PHN2ZyB0PSIxNTc0ODM3MTM4ODM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3NzAiICAgICB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPiAgICA8cGF0aCBkPSJNODkxIDQyOC44SDQ2NS44Yy0yMC40IDAtMzcgMTYuNS0zNyAzN3Y5Mi40YzAgMjAuNCAxNi41IDM3IDM3IDM3aDI1OC45YzIwLjQgMCAzNyAxNi42IDM3IDM3djE4LjRjMCA2MS4zLTQ5LjcgMTEwLjktMTEwLjkgMTEwLjlIMjk5LjRjLTIwLjQgMC0zNy0xNi42LTM3LTM3VjM3My4yYzAtNjEuMyA0OS43LTExMC45IDExMC45LTExMC45aDUxNy42YzIwLjQgMCAzNy0xNi41IDM3LTM3bDAuMS05Mi4zYzAtMjAuNC0xNi41LTM3LTM3LTM3SDM3My4zQzIyMC4yIDk2IDk2IDIyMC4yIDk2IDM3My4zVjg5MWMwIDIwLjQgMTYuNiAzNyAzNyAzN2g1NDUuNEM4MTYuMiA5MjggOTI4IDgxNi4zIDkyOCA2NzguNFY0NjUuOGMwLTIwLjQtMTYuNi0zNy0zNy0zN3oiICAgICAgICAgIGZpbGw9IiNkODFlMDYiIHAtaWQ9IjE3NzEiPjwvcGF0aD48L3N2Zz4=" /></a>
</div>

<div align= "center">
<img align="center" src="https://picx.zhimg.com/80/v2-f8fe09ef125dac5fdcbef3fe00f92b21_720w.png" />
</div>

开源的插件化桌面端效率工具箱。插件是基于 npm 进行安装和卸载，非常轻便。插件数据支持 webdav 多端同步，非常安全。支持内网部署，可二次定制化开发，非常灵活。

## 获取 rubick

下载最新的安装包：

- [Rubick Mac OS](https://github.com/iamxiaojianzheng/rubick/releases)
- [Rubick Windows](https://github.com/iamxiaojianzheng/rubick/releases)
- [Rubick Linux](https://github.com/iamxiaojianzheng/rubick/releases)

## 使用文档

<!-- [Rubick 官网](https://rubick.vip) -->

[Rubick Docs](https://rubickCenter.github.io/rubick/)

## 如何使用 rubick

安装完成 rubick 后，可以通过快捷键 Alt/Option+R 可以快速呼起主程序。主程序输入框内输入关键词可以搜索出对应的 App、插件、文件... 选择即可使用。如果没有想要的功能，可以点击左侧的 logo 进入插件市场寻找自己想要的插件进行安装。

## 支持能力

- [x] 基于 npm 包模式的插件管理，安装插件和安装 npm 包一样简单
- [x] 支持 webdav 多端数据同步，真正的数据安全同步
- [x] 独一无二的系统插件模式，让插件成为 rubick 的一部分
- [x] 支持快速启动本地 app、文件、文件夹
- [x] 支持企业化内网部署
- [x] 支持多语言

## 核心功能展示

### 1. 搜索系统应用

支持拼音和缩写来搜索系统安装应用：

![](https://pic1.zhimg.com/80/v2-70c105ff7fb1e955fc67ffa5a5564092_720w.gif)

### 2. UI 类插件安装

点击搜索框右侧 `rubick` 图标，进入插件市场，选择所需插件，点击下载按钮即可下载，下载完成后在已安装 tab 下可以找到安装插件。
安装完成后，输入插件呼起命令即可使用对应插件：

![](https://pic1.zhimg.com/80/v2-5906bba20fe0a67f9e7a5a8c11341305_720w.gif)

### 3. 系统类插件安装

系统插件安装方式和 UI 类一样，在插件市场选择`系统分类`，寻找适合自己的系统插件安装即可。

```
系统插件安装成功后，需要重启 rubick 才能生效
```

### 4. 基于 webdav 的多端数据同步

在 `rubick` 内搜索`偏好设置` 进入 `账户和设置` -> `多端数据同步`；即可对 `rubick` 插件使用数据进行 `导出` 和 `导入`。

![](https://pic1.zhimg.com/80/v2-ff85793741e4dff82a729d3eb3d41551_720w.png)

## 关联仓库

[Rubick 插件仓库](https://github.com/iamxiaojianzheng/rubick-plugins)

[Rubick 插件数据库](https://github.com/iamxiaojianzheng/rubick-plugin-registry)

[Rubick Plugin CLI](https://github.com/rubickCenter/rubick-plugin-cli)

## 贡献

This project exists thanks to all the people who contribute. [[Contribute](https://github.com/rubickCenter/rubick/graphs/contributors)]. <a href="https://github.com/rubickCenter/rubick/graphs/contributors"><img src="https://opencollective.com/rubick/contributors.svg?width=890&button=false" /></a>

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/rubickCenter/rubick/blob/master/LICENSE) file for details.
