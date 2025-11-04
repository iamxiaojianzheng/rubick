<div align= "center">
<img align="center" width=200 src="./public/logo.png" />
</div>

<div align="center">
    <h1>Ruck</h1>
    <img alt="累计下载数" src="https://img.shields.io/github/downloads/iamxiaojianzheng/ruck/total" />
    <a href="https://github.com/iamxiaojianzheng/ruck/releases"><img alt="最新发布版本" src="https://img.shields.io/github/package-json/v/iamxiaojianzheng/ruck" /></a>
    <a href="https://github.com/iamxiaojianzheng/ruck/actions"><img alt="github action 构建" src="https://img.shields.io/github/actions/workflow/status/iamxiaojianzheng/ruck/main.yml" /></a>
    <a href="https://github.com/iamxiaojianzheng/ruck/blob/master/LICENSE"><img alt="许可证" src="https://img.shields.io/github/license/iamxiaojianzheng/ruck" /></a>
    <a href="https://github.com/iamxiaojianzheng/ruck/stargazers"><img alt="github 收藏数" src="https://img.shields.io/github/stars/iamxiaojianzheng/ruck?style=social" /></a>
</div>
<div align= "center">
<img align="center" src="https://picx.zhimg.com/v2-6d618ffa999b1270d9b223704b9d0cc5.png" />
</div>


开源的插件化桌面端效率工具箱。插件是基于 npm 进行安装和卸载，非常轻便。插件数据支持 webdav 多端同步，非常安全。支持内网部署，可二次定制化开发，非常灵活。

## 获取 ruck

下载最新的安装包：

- [Ruck Mac OS](https://github.com/iamxiaojianzheng/ruck/releases)
- [Ruck Windows](https://github.com/iamxiaojianzheng/ruck/releases)
- [Ruck Linux](https://github.com/iamxiaojianzheng/ruck/releases)

## 如何使用 ruck

安装完成 ruck 后，可以通过快捷键 Alt/Option+R 可以快速呼起主程序。主程序输入框内输入关键词可以搜索出对应的 App、插件、文件... 选择即可使用。如果没有想要的功能，可以点击左侧的 logo 进入插件市场寻找自己想要的插件进行安装。

## 支持能力

- [x] 基于 npm 包模式的插件管理，安装插件和安装 npm 包一样简单
- [x] 支持 webdav 多端数据同步，真正的数据安全同步
- [x] 独一无二的系统插件模式，让插件成为 ruck 的一部分
- [x] 支持快速启动本地 app、文件、文件夹
- [x] 支持企业化内网部署
- [x] 支持多语言

## 核心功能展示

### 1. 搜索系统应用

支持拼音和缩写来搜索系统安装应用：

### 2. UI 类插件安装

点击搜索框右侧 `ruck` 图标，进入插件市场，选择所需插件，点击下载按钮即可下载，下载完成后在已安装 tab 下可以找到安装插件。
安装完成后，输入插件呼起命令即可使用对应插件：

### 3. 系统类插件安装

系统插件安装方式和 UI 类一样，在插件市场选择`系统分类`，寻找适合自己的系统插件安装即可。

```
系统插件安装成功后，需要重启 ruck 才能生效
```

### 4. 基于 webdav 的多端数据同步

在 `ruck` 内搜索`偏好设置` 进入 `账户和设置` -> `多端数据同步`；即可对 `ruck` 插件使用数据进行 `导出` 和 `导入`。

## 关联仓库

[Ruck 插件仓库](https://github.com/iamxiaojianzheng/ruck-plugins)

[Ruck 插件数据库](https://github.com/iamxiaojianzheng/ruck-plugin-registry)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iamxiaojianzheng/ruck/blob/master/LICENSE) file for details.
