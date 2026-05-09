# Arttrace Photoshop Plugin

Current plugin version: **v0.90**

Arttrace is a Photoshop UXP panel for recording the drawing process as a sequence of snapshots. It is designed for artists who want to turn their creative process into timelapse videos or GIF previews.

This repository contains the open-source Photoshop plugin. The companion desktop app, **Arttrace Render**, is distributed separately as an installer in GitHub Releases.

## What It Does

- Records Photoshop drawing history as JPEG snapshots.
- Tracks step count and working time for each artwork.
- Supports multi-part project folders for long sessions.
- Generates metadata for Arttrace Render.
- Provides quick GIF preview inside the Photoshop panel.
- Supports Chinese and English UI.

## Requirements

- Adobe Photoshop 2024 or later
- UXP Developer Tool for local installation during testing
- macOS or Windows Photoshop with UXP support

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
```

## Workflow

1. Open or create a Photoshop document.
2. Start recording in the Arttrace panel.
3. Draw normally.
4. Finish recording to write `metadata.json`.
5. Drag the generated project folder into Arttrace Render to export video or GIF.

## Notes

Arttrace is still in early public testing. The metadata format is designed to stay stable, but the UI and packaging may continue to improve.

## License

This plugin source code is released under the MIT License. See `LICENSE` for details.

Arttrace Render is distributed separately. Its installer may be available in Releases, but its source code is not included in this repository.

---

# Arttrace Photoshop 插件

当前插件版本：**v0.90**

Arttrace 是一个用于 Adobe Photoshop 的 UXP 面板插件，可以记录绘画过程中的步骤截图，并生成可供后续渲染使用的工程文件夹。它主要面向希望记录绘画过程、制作延时视频或 GIF 预览的创作者。

这个仓库只包含 **Arttrace Photoshop 插件源码**。配套的桌面端软件 **Arttrace Render** 会以安装包形式单独发布在 GitHub Releases 中，但它的源码不包含在本仓库里。

## 功能简介

- 将 Photoshop 绘画过程记录为 JPEG 步骤截图。
- 统计每个作品的录制步骤和绘画时长。
- 支持长时间绘画时自动拆分为多个 part。
- 生成 Arttrace Render 可以读取的元数据。
- 在 Photoshop 插件内提供快速 GIF 预览。
- 支持中文和英文界面。

## 使用要求

- Adobe Photoshop 2024 或更新版本
- 本地测试时需要 Adobe UXP Developer Tool
- 支持 UXP 插件的 macOS 或 Windows 版 Photoshop

当前 `manifest.json` 设置的 Photoshop 最低版本为 `25.0.0`。

## 本地测试安装

1. 下载或克隆本仓库。
2. 打开 Adobe UXP Developer Tool。
3. 点击 **Add Plugin**。
4. 选择本文件夹里的 `manifest.json`。
5. 点击 **Load**。
6. 打开 Photoshop，在插件菜单中启动 Arttrace 面板。

## 文件说明

```text
manifest.json       UXP 插件配置文件
index.html          插件面板界面
main.js             插件核心逻辑与 Photoshop 交互
libs.js             GIF 与图像辅助库
jpeg-encoder.js     JPEG 备用编码器
arttrace-icon.png   插件面板左上角图标
```

## 基本流程

1. 打开或新建一个 Photoshop 文档。
2. 在 Arttrace 面板中点击开始录制。
3. 正常绘画。
4. 结束录制后，插件会写入 `metadata.json`。
5. 将生成的工程文件夹拖入 Arttrace Render，即可导出视频或 GIF。

## 说明

Arttrace 目前仍处于早期公开测试阶段。元数据格式会尽量保持稳定，但界面、打包方式和使用体验还会继续改进。

## 开源协议

本插件源码使用 MIT License 开源，具体内容见 `LICENSE` 文件。

Arttrace Render 会单独发布安装包供用户使用，但它的源码不包含在本仓库中。
