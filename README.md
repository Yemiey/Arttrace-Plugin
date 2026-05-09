# Arttrace Photoshop Plugin

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
