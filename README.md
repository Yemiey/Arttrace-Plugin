# Arttrace Photoshop 插件

当前版本：**v0.90 macOS 公开测试版**

Arttrace 是一个用于 Adobe Photoshop 的 UXP 面板插件，可以记录绘画过程中的步骤截图，并生成可供后续渲染使用的工程文件夹。它主要面向希望记录绘画过程、制作延时视频或 GIF 预览的创作者。

这个仓库包含 **Arttrace Photoshop 插件源码**。配套桌面端软件 **Arttrace Render** 会以安装包形式发布在 GitHub Releases 中，但它的源码不包含在本仓库里。

## 功能简介

- 将 Photoshop 绘画过程记录为 JPEG 步骤截图。
- 统计每个作品的录制步骤和绘画时长。
- 支持长时间绘画时自动拆分为多个 part。
- 生成 Arttrace Render 可以读取的元数据。
- 在 Photoshop 插件内提供快速 GIF 预览。
- 支持中文和英文界面。

## 下载与安装

普通用户建议直接下载 GitHub Releases 中的 macOS 安装包：

[下载 Arttrace macOS v0.90](https://github.com/Yemiey/Arttrace-Plugin/releases/download/v0.90/Arttrace-macOS-v0.90.zip)

如果你不熟悉 GitHub，请下载 Release 页面中的 `Arttrace-macOS-v0.90.zip`。不要点击绿色的 **Code** 按钮，那里下载的是源码。

安装包会同时安装：

- Photoshop 插件 Arttrace
- 桌面端导出工具 Arttrace Render
- 图形化卸载器 Arttrace Uninstaller

安装完成后，请完全退出并重新打开 Photoshop，然后在顶部菜单中打开：**增效工具 / Plugins -> Arttrace**。

## 在哪里打开插件

安装完成并重新打开 Photoshop 后，请在 Photoshop 顶部菜单中点击 **增效工具**，然后选择 **Arttrace**。

如果你使用的是英文版 Photoshop，请点击顶部菜单中的 **Plugins -> Arttrace**。

## 使用要求

- Adobe Photoshop 2024 或更新版本
- 支持 UXP 插件的 macOS 或 Windows 版 Photoshop
- 本地开发测试时需要 Adobe UXP Developer Tool

当前 `manifest.json` 设置的 Photoshop 最低版本为 `25.0.0`。

## 本地测试安装

1. 下载或克隆本仓库。
2. 打开 Adobe UXP Developer Tool。
3. 点击 **Add Plugin**。
4. 选择本文件夹里的 `manifest.json`。
5. 点击 **Load**。
6. 打开 Photoshop，在“增效工具”菜单中启动 Arttrace 面板。

## 文件说明

```text
manifest.json       UXP 插件配置文件
index.html          插件面板界面
main.js             插件核心逻辑与 Photoshop 交互
libs.js             GIF 与图像辅助库
jpeg-encoder.js     JPEG 备用编码器
arttrace-icon.png   插件面板左上角图标
icons/              插件入口图标
```

## 基本流程

1. 打开或新建一个 Photoshop 文档。
2. 在 Arttrace 面板中点击开始录制。
3. 正常绘画。
4. 结束录制后，插件会写入 `metadata.json`。
5. 将生成的工程文件夹拖入 Arttrace Render，即可导出视频或 GIF。

## 开源与隐私

- Arttrace Photoshop 插件使用 MIT License 开源。
- Arttrace Render 是配套闭源免费应用。
- Arttrace 的核心功能不会自动联网，也不会上传你的作品、截图、录制工程或导出文件。
- 你的绘画记录保存在你自己选择的本地输出文件夹中，请自行备份重要作品。

## 说明

Arttrace 目前仍处于早期公开测试阶段。元数据格式会尽量保持稳定，但界面、打包方式和使用体验还会继续改进。

## 开源协议

本插件源码使用 MIT License 开源，具体内容见 `LICENSE` 文件。

---

# Arttrace Photoshop Plugin

Current version: **v0.90 macOS public beta**

Arttrace is a Photoshop UXP panel for recording the drawing process as a sequence of snapshots. It is designed for artists who want to turn their creative process into timelapse videos or GIF previews.

This repository contains the open-source Photoshop plugin. The companion desktop app, **Arttrace Render**, is distributed separately as an installer in GitHub Releases, but its source code is not included in this repository.

## What It Does

- Records Photoshop drawing history as JPEG snapshots.
- Tracks step count and working time for each artwork.
- Supports multi-part project folders for long sessions.
- Generates metadata for Arttrace Render.
- Provides quick GIF preview inside the Photoshop panel.
- Supports Chinese and English UI.

## Download and Install

For regular users, the recommended way is to download the macOS installer from GitHub Releases:

[Download Arttrace macOS v0.90](https://github.com/Yemiey/Arttrace-Plugin/releases/download/v0.90/Arttrace-macOS-v0.90.zip)

If you are not familiar with GitHub, download `Arttrace-macOS-v0.90.zip` from the Release page. Do not use the green **Code** button unless you want the source code.

The installer includes:

- The Arttrace Photoshop plugin
- The Arttrace Render desktop export app
- The Arttrace Uninstaller GUI app

After installation, fully quit and reopen Photoshop, then open **Plugins -> Arttrace** from the top menu.

## Where to Find the Plugin

After installation and restarting Photoshop, open the top menu: **Plugins -> Arttrace**.

In Chinese Photoshop, this menu is translated as **增效工具**.

## Requirements

- Adobe Photoshop 2024 or later
- macOS or Windows Photoshop with UXP support
- Adobe UXP Developer Tool for local development and testing

The plugin manifest currently targets Photoshop `25.0.0` and above.

## Install for Testing

1. Download or clone this repository.
2. Open Adobe UXP Developer Tool.
3. Click **Add Plugin**.
4. Select `manifest.json` from this folder.
5. Click **Load**.
6. Open Photoshop and launch the Arttrace panel from the Plugins menu.

## Files

```text
manifest.json       UXP plugin manifest
index.html          Panel UI
main.js             Plugin logic and Photoshop integration
libs.js             GIF and image helper library
jpeg-encoder.js     JPEG fallback encoder
arttrace-icon.png   Plugin icon used in the panel header
icons/              Plugin entrypoint icons
```

## Workflow

1. Open or create a Photoshop document.
2. Start recording in the Arttrace panel.
3. Draw normally.
4. Finish recording to write `metadata.json`.
5. Drag the generated project folder into Arttrace Render to export video or GIF.

## Open Source and Privacy

- The Arttrace Photoshop plugin is open source under the MIT License.
- Arttrace Render is a closed-source companion app, but it is free to use.
- Arttrace's core features do not automatically connect to the internet, and do not upload your artwork, screenshots, recorded projects, or exported files.
- Your recorded projects are stored in the local output folder you choose. Please back up important work yourself.

## Notes

Arttrace is still in early public testing. The metadata format is designed to stay stable, but the UI and packaging may continue to improve.

## License

This plugin source code is released under the MIT License. See `LICENSE` for details.
