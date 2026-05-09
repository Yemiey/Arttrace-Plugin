// ============================================
// Arttrace v0.90
// Product: Painting timelapse recorder for Photoshop
// UI: Settings overlay + i18n (en/zh) + Video Export + GIF Export + Canvas Replay
// Core: UXP Imaging API, ~15ms modal freeze, JPEG output
// Video: FFmpeg concat + render script generation + Pure JS GIF encoding
// Architecture v0.79: Detect loop + Export loop separated; Snapshot density sampling
// UXP Plugin for Photoshop 2025+
// ============================================
// METADATA PROTOCOL FROZEN v0.88
// metadata.json / metadata_draft.json / autosave_meta.json / project_state.json
// schema will NOT change without explicit version bump. Render App relies on this.

// ---- i18n ----
var i18n = {
    en: {
        appTitle: "Arttrace",
        record: "Record", pause: "Pause", resume: "Resume", finish: "Finish",
        statusReady: "Ready", statusRecording: "Recording...", statusPaused: "Paused",
        infoReady: "Click Record, then choose a folder",
        infoRecording: "Creation #{n} | {f} steps",
        settings: "Settings", presetTitle: "Preset Modes",
        presetDraft: "Draft", presetSmooth: "Smooth", presetBalanced: "Balanced", presetQuality: "Quality",
        presetDescDraft: "512p / High", presetDescSmooth: "1080p / High",
        presetDescBalanced: "1440p (2K) / Medium", presetDescQuality: "2160p (4K) / Low",
        advancedSettings: "Advanced", resolution: "Resolution", originalSize: "Original", detectLabel: "Detect", densityLabel: "Snapshot", interval: "Interval",
        saveCustom: "Save Custom", resetDefault: "Reset Default",
        langLabel: "Language", langSwitch: "中文",
        currentSession: "Creation History", savedSessions: "Saved Records",
        strokes: "Strokes", steps: "Steps", workTime: "Work Time",
        brush: "Brush", eraser: "Eraser",
        done: "Done: {e}/{f} in {name}", exportError: "Export error", noFrames: "No frames",
        needDoc: "Open a document!", noImaging: "imaging API not available (need PS 2023+)",
        noFolder: "No folder selected", cancelled: "Cancelled",
        creatingFolder: "Creating folder...", sessionSaved: "Saved! Record next",
        sessionCount: "{n} session(s) saved", sessionArchived: "{n} session(s) archived",
        progressExporting: "Exporting step {i}/{f}",
        diagnosticsLabel: "Diagnostics",
        switching: "Switching...",
        autoResumed: "[{doc}] Recording resumed automatically",
        switchedTo: "Switched to {doc}. Click Record to start.",
        archiving: "Archiving...",
        lockResolution: "Cannot change resolution while recording",
        lockOutputFolder: "Cannot change output folder while recording",
        lockDetectInterval: "Cannot change detect interval while recording",
        lockSnapshotDensity: "Cannot change snapshot density while recording",
        exportFail3: "Export failed 3 times — check disk space",
        generatePreviewFirst: "Please generate preview first",
        tooltipRecord: "Click to Record",
        tooltipResume: "Click to Resume",
        versionTooltip: "Version v{v}",
        tooltipPreview: "Open Preview Panel",
        autoOpenPreviewLabel: "Auto-open Preview after finish",
        // v0.84 i18n complete
        heroTitle: "Capture Every Stroke",
        heroDesc: "Record your creative process and turn it into a timelapse.",
        notSet: "Not set",
        restLabel: "(Resting)",
        resumeHint: "Click Resume to continue.",
        pleaseWait: "Please wait a moment",
        openDocFirst: "Open a document first",
        folderSelectFailed: "Folder selection failed",
        snapshotFailed: "Snapshot failed",
        snapshotError: "Snapshot error",
        snapshotTooltipPrefix: "Snapshot: ",
        recoverPrompt: "Unfinished recording detected: {project} / {session} ({steps} steps). Click Record to resume, or Finish to archive.",
        autoDowngradeMsg: "Auto-switched to 512px to reduce I/O",
        pausedResumeHint: "Paused. Click Resume to continue.",
        cannotRecoverFolder: "Cannot recover session folder",
        sessionSavedInfo: "{name} saved",
        frames: "frames",
        previewTitle: "Preview",
        previewPlaceholder: "Double-click to render",
        zoomHint: "Double-click or press ESC to close",
        generating: "Generating...",
        cancelBtn: "Cancel",
        generateBtn: "Render",
        exportGIFBtn: "Export GIF",
        videoExportTitle: "Export",
        videoExportHint: "💡 Drag this folder into Arttrace Render for MP4 video.",
        confirmFinishTitle: "Finish Recording?",
        confirmCancelBtn: "Cancel",
        confirmFinishBtn: "Finish",
        generalTab: "General",
        captureTab: "Capture",
        diagnosticsTab: "Diagnostics",
        sessionOutputFolder: "Session Output Folder",
        gifExportFolder: "GIF Export Folder",
        snapshotFolderLabel: "Snapshot Folder",
        changeBtn: "Change",
        maxSnapshotSizeDesc: "Short edge limit (e.g. 1080p = 1920×1080)",
        snapshotFormatLabel: "Snapshot Format", snapshotFormatDesc: "Format for manual snapshots",
        formatJPEG: "JPEG", formatPNG: "PNG",
        detectIntervalDesc: "How often to check for new strokes",
        snapshotDensityDesc: "Proportion of step snapshots to keep",
        logsPlaceholder: "Logs will appear here...",
        exportLogBtn: "📝 Export Log",
        clearLogBtn: "Clear",
        readingFrames: "Reading frames...",
        buildingPalette: "Building palette...",
        encodingGIF: "Encoding GIF...",
        doneStatus: "Done!",
        cancelledStatus: "Cancelled",
        cancellingStatus: "Cancelling...",
        errorPrefix: "Error: ",
        previewBtn: "Preview",
        closeBtn: "Close",
        logExported: "Log exported: {name}",
        apiNotAvailable: "API not available",
        psBusy: "Photoshop is busy — try again",
        gifExported: "GIF exported: {name}",
        settingsSaved: "✅ Saved",
        confirmFinishBody: "{steps} steps · Work time {time}\nAre you sure you want to finish?",
    },
    zh: {
        appTitle: "Arttrace",
        record: "录制", pause: "暂停", resume: "继续", finish: "完成",
        statusReady: "就绪", statusRecording: "录制中...", statusPaused: "已暂停",
        infoReady: "点击录制，然后选择文件夹",
        infoRecording: "创作 #{n} | {f} 步",
        settings: "设置", presetTitle: "预设模式",
        presetDraft: "速写", presetSmooth: "流畅", presetBalanced: "均衡", presetQuality: "画质",
        presetDescDraft: "512p / 高密", presetDescSmooth: "1080p / 高密",
        presetDescBalanced: "1440p (2K) / 中密", presetDescQuality: "2160p (4K) / 低密",
        advancedSettings: "高级", resolution: "分辨率", originalSize: "原画", detectLabel: "检测", densityLabel: "截图密度", interval: "间隔",
        saveCustom: "保存自定义", resetDefault: "恢复默认",
        langLabel: "语言", langSwitch: "English",
        currentSession: "创作记录", savedSessions: "已保存记录",
        strokes: "笔画", steps: "步数", workTime: "工作时间",
        brush: "画笔", eraser: "橡皮",
        done: "完成: {e}/{f} 在 {name}", exportError: "导出错误", noFrames: "无帧",
        needDoc: "请先打开文档！", noImaging: "imaging API 不可用（需要 PS 2023+）",
        noFolder: "未选择文件夹", cancelled: "已取消",
        creatingFolder: "创建文件夹中...", sessionSaved: "已保存！录制下一个",
        sessionCount: "已保存 {n} 个会话", sessionArchived: "已归档 {n} 个会话",
        progressExporting: "导出步 {i}/{f}",
        diagnosticsLabel: "诊断日志",
        switching: "正在切换...",
        autoResumed: "[{doc}] 已自动恢复录制",
        switchedTo: "已切换到 {doc}. 点击 Record 开始录制",
        archiving: "正在归档...",
        lockResolution: "录制中不能修改分辨率",
        lockOutputFolder: "录制中不能修改输出文件夹",
        lockDetectInterval: "录制中不能修改检测间隔",
        lockSnapshotDensity: "录制中不能修改截图密度",
        exportFail3: "导出失败3次，请检查磁盘空间",
        generatePreviewFirst: "请先生成预览",
        tooltipRecord: "点击开始录制",
        tooltipResume: "点击继续",
        versionTooltip: "当前版本为 v{v}",
        tooltipPreview: "打开预览面板",
        autoOpenPreviewLabel: "完成录制后自动打开预览",
        // v0.84 i18n complete
        heroTitle: "记录每一笔创作",
        heroDesc: "录制你的创作过程，生成延时视频。",
        notSet: "未设置",
        restLabel: "（休息中）",
        resumeHint: "点击 Resume 继续。",
        pleaseWait: "请稍后再试",
        openDocFirst: "请先打开文档",
        folderSelectFailed: "选择文件夹失败",
        snapshotFailed: "快照失败",
        snapshotError: "快照出错",
        snapshotTooltipPrefix: "截图：",
        recoverPrompt: "检测到未完成的录制：{project} / {session}（{steps} 步）。点击 Record 恢复，或 Finish 归档。",
        autoDowngradeMsg: "自动切换到 512px 以降低 I/O",
        pausedResumeHint: "已暂停。点击 Resume 继续。",
        cannotRecoverFolder: "无法恢复会话文件夹",
        sessionSavedInfo: "{name} 已保存",
        frames: "帧",
        previewTitle: "预览",
        previewPlaceholder: "双击此处进行渲染",
        zoomHint: "双击或按 ESC 关闭",
        generating: "生成中...",
        cancelBtn: "取消",
        generateBtn: "渲染",
        exportGIFBtn: "导出 GIF",
        videoExportTitle: "导出",
        videoExportHint: "💡 将此文件夹拖入 Arttrace Render 生成 MP4 视频。",
        confirmFinishTitle: "完成录制?",
        confirmCancelBtn: "取消",
        confirmFinishBtn: "完成",
        generalTab: "常规",
        captureTab: "录制",
        diagnosticsTab: "诊断",
        sessionOutputFolder: "输出文件夹",
        gifExportFolder: "GIF 导出文件夹",
        snapshotFolderLabel: "截图文件夹",
        changeBtn: "更改",
        maxSnapshotSizeDesc: "短边限制（如 1080p = 1920×1080）",
        snapshotFormatLabel: "截图格式", snapshotFormatDesc: "手动截图的导出格式",
        formatJPEG: "JPEG", formatPNG: "PNG",
        detectIntervalDesc: "检测新笔画的频率",
        snapshotDensityDesc: "保留步骤截图的比例",
        logsPlaceholder: "日志将显示在这里...",
        exportLogBtn: "📝 导出日志",
        clearLogBtn: "清除",
        readingFrames: "读取帧...",
        buildingPalette: "生成调色板...",
        encodingGIF: "编码 GIF...",
        doneStatus: "完成!",
        cancelledStatus: "已取消",
        cancellingStatus: "正在取消...",
        errorPrefix: "错误：",
        previewBtn: "预览",
        closeBtn: "关闭",
        logExported: "日志已导出：{name}",
        apiNotAvailable: "API 不可用",
        psBusy: "Photoshop 正忙，请重试",
        gifExported: "GIF 已导出：{name}",
        settingsSaved: "✅ 已保存",
        confirmFinishBody: "已录制 {steps} 笔 · 工作时长 {time}\n确定要完成吗?",
    }
};

var currentLang = "en";

function t(key, vars) {
    var str = (i18n[currentLang] && i18n[currentLang][key]) || i18n["en"][key] || key;
    if (vars) {
        for (var k in vars) str = str.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
    }
    return str;
}

function setLanguage(lang) {
    currentLang = lang === "zh" ? "zh" : "en";
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    refreshUI();
    saveSettings();
}

function refreshUI() {
    var el;
    el = document.getElementById("appTitle"); if (el) el.textContent = t("appTitle");
    updatePrimaryActionButton();
    el = document.getElementById("btnPause"); if (el) el.textContent = t("pause");
    el = document.getElementById("btnFinish"); if (el) el.textContent = t("finish");
    el = document.getElementById("langLabel"); if (el) el.textContent = t("langLabel");
    el = document.getElementById("overlayTitle"); if (el) el.textContent = t("settings");

    // v0.84: hero empty state i18n
    el = document.getElementById("heroTitle"); if (el) el.textContent = t("heroTitle");
    el = document.getElementById("heroDesc"); if (el) el.textContent = t("heroDesc");

    // v0.84: update auto-open preview label
    if (lblAutoOpenPreview) lblAutoOpenPreview.textContent = t("autoOpenPreviewLabel");

    // v0.84: refresh status text on language switch
    if (statusText) {
        if (recordingState === "ready") statusText.textContent = t("statusReady");
        else if (recordingState === "recording") statusText.textContent = t("statusRecording");
        else if (recordingState === "paused") statusText.textContent = t("statusPaused");
    }
    // v0.84: refresh infoText on language switch
    if (infoText) {
        if (recordingState === "ready") infoText.textContent = t("infoReady");
        else if (recordingState === "recording" && currentSessionFolder) {
            infoText.textContent = t("infoRecording", { n: currentSessionFolder.name, f: globalStepOffset + currentSteps.length });
        }
    }
    // Refresh primary button tooltip on language switch
    updatePrimaryActionButton();

    var labels = ["presetDraft", "presetSmooth", "presetBalanced", "presetQuality"];
    var descs = ["presetDescDraft", "presetDescSmooth", "presetDescBalanced", "presetDescQuality"];
    document.querySelectorAll(".preset-label").forEach(function(el, i) {
        if (labels[i] && el) el.textContent = t(labels[i]);
    });
    document.querySelectorAll(".preset-desc").forEach(function(el, i) {
        if (descs[i] && el) el.textContent = t(descs[i]);
    });

    el = document.getElementById("resLabel"); if (el) el.textContent = t("resolution");
    el = document.getElementById("resOriginal"); if (el) el.textContent = t("originalSize");
    el = document.getElementById("detectLabel"); if (el) el.textContent = t("detectLabel");
    el = document.getElementById("densityLabel"); if (el) el.textContent = t("densityLabel");
    el = document.getElementById("btnSaveCustom"); if (el) el.textContent = t("saveCustom");
    el = document.getElementById("btnResetDefault"); if (el) el.textContent = t("resetDefault");

    el = document.getElementById("currentSectionTitle");
    if (el) el.childNodes[0].textContent = t("currentSession") + " ";
    el = document.getElementById("sessionsSectionTitle");
    if (el) el.childNodes[0].textContent = t("savedSessions") + " ";
    el = document.getElementById("statLabelSteps"); if (el) el.textContent = t("steps");
    el = document.getElementById("statLabelWorkTime"); if (el) el.textContent = t("workTime");
    el = document.getElementById("diagnosticsLabel"); if (el) el.textContent = t("diagnosticsLabel");

    // v0.84: complete i18n coverage
    el = document.getElementById("heroTitle"); if (el) el.textContent = t("heroTitle");
    el = document.getElementById("heroDesc"); if (el) el.textContent = t("heroDesc");
    el = document.getElementById("sessionOutputFolderLabel"); if (el) el.textContent = t("sessionOutputFolder");
    el = document.getElementById("gifExportFolderLabel"); if (el) el.textContent = t("gifExportFolder");
    el = document.getElementById("snapshotFolderLabel2"); if (el) el.textContent = t("snapshotFolderLabel");
    el = document.getElementById("maxSnapshotSizeDesc"); if (el) el.textContent = t("maxSnapshotSizeDesc");
    el = document.getElementById("snapshotFormatLabel"); if (el) el.textContent = t("snapshotFormatLabel");
    el = document.getElementById("snapshotFormatDesc"); if (el) el.textContent = t("snapshotFormatDesc");
    el = document.getElementById("formatJPEG"); if (el) el.textContent = t("formatJPEG");
    el = document.getElementById("formatPNG"); if (el) el.textContent = t("formatPNG");
    el = document.getElementById("detectIntervalDesc"); if (el) el.textContent = t("detectIntervalDesc");
    el = document.getElementById("snapshotDensityDesc"); if (el) el.textContent = t("snapshotDensityDesc");
    el = document.getElementById("replayTitle"); if (el) el.textContent = t("previewTitle");
    el = document.getElementById("zoomHint"); if (el) el.textContent = t("zoomHint");
    el = document.getElementById("videoExportTitle"); if (el) el.textContent = t("videoExportTitle");
    el = document.getElementById("videoExportHint"); if (el) el.textContent = t("videoExportHint");
    el = document.getElementById("btnConfirmCancel"); if (el) el.textContent = t("confirmCancelBtn");
    el = document.getElementById("btnConfirmOk"); if (el) el.textContent = t("confirmFinishBtn");
    el = document.getElementById("btnTogglePreview"); if (el) el.textContent = t("previewBtn");
    el = document.getElementById("btnGeneratePreview"); if (el) el.textContent = t("generateBtn");
    el = document.getElementById("btnSavePreviewGIF"); if (el) el.textContent = t("exportGIFBtn");
    el = document.getElementById("btnCancelPreview"); if (el) el.textContent = t("cancelBtn");
    el = document.getElementById("btnExportDiagnostics"); if (el) el.textContent = t("exportLogBtn");
    el = document.getElementById("btnClearDiagnostics"); if (el) el.textContent = t("clearLogBtn");
    el = document.getElementById("diagnosticsLogText"); if (el) el.placeholder = t("logsPlaceholder");
    el = document.getElementById("previewPlaceholderText"); if (el) el.textContent = t("previewPlaceholder");
    // Settings tabs
    document.querySelectorAll(".settings-tab").forEach(function(tab) {
        var tabName = tab.dataset.tab;
        if (tabName === "general") tab.textContent = t("generalTab");
        else if (tabName === "capture") tab.textContent = t("captureTab");
        else if (tabName === "diagnostics") tab.textContent = t("diagnosticsTab");
    });
    // Change buttons
    document.querySelectorAll(".folder-btn").forEach(function(btn) {
        btn.textContent = t("changeBtn");
    });
    // Refresh tool badge text on language switch
    updateToolBadge();
    // Refresh preview placeholder on language switch
    if (replayPreviewPlaceholder && replayPreviewPlaceholder.style.display !== "none") {
        replayPreviewPlaceholder.textContent = t("previewPlaceholder");
    }
}

function updatePrimaryActionButton() {
    if (!btnRecord) return;
    btnRecord.disabled = false;
    btnRecord.classList.remove("ready");
    btnRecord.classList.remove("recording");
    btnRecord.classList.remove("paused");
    if (recordingState === "recording") {
        btnRecord.classList.add("recording");
        if (hubTooltip) hubTooltip.classList.remove("active");
    } else if (recordingState === "paused") {
        btnRecord.classList.add("paused");
        if (hubTooltip) hubTooltip.classList.remove("active");
    } else {
        btnRecord.classList.add("ready");
        if (hubTooltip) { hubTooltip.textContent = t("tooltipRecord"); hubTooltip.classList.add("active"); }
    }
    // Side buttons visibility + icons
    if (btnSideLeft) {
        if (recordingState === "recording" || recordingState === "paused") {
            btnSideLeft.style.display = "flex";
            btnSideLeft.classList.remove("show-pause");
            btnSideLeft.classList.remove("show-resume");
            btnSideLeft.classList.add(recordingState === "recording" ? "show-pause" : "show-resume");
        } else {
            btnSideLeft.style.display = "none";
        }
    }
    if (btnSideRight) {
        if (recordingState === "recording" || recordingState === "paused") {
            btnSideRight.style.display = "flex";
        } else {
            btnSideRight.style.display = "none";
        }
    }
}

// ---- DOM refs ----
var btnRecord = document.getElementById("btnRecord");
var btnSideLeft = document.getElementById("btnSideLeft");
var btnSideRight = document.getElementById("btnSideRight");
var btnPause = document.getElementById("btnPause");
var btnFinish = document.getElementById("btnFinish");
var btnSettings = document.getElementById("btnSettings");
var btnCloseSettings = document.getElementById("btnCloseSettings");
var settingsOverlay = document.getElementById("settingsOverlay");
var langSwitch = document.getElementById("langSwitch");
var statusText = document.getElementById("statusText");
var infoText = document.getElementById("infoText");
var folderPath = document.getElementById("folderPath");
var progressRow = document.getElementById("progressRow");
var progressLabel = document.getElementById("progressLabel");
var progressPct = document.getElementById("progressPct");
var progressFill = document.getElementById("progressFill");

var statsRow = document.getElementById("statsRow");
var statSteps = document.getElementById("statSteps");
var statTime = document.getElementById("statTime");
var statRest = document.getElementById("statRest");
var statBrush = document.getElementById("statBrush");
var statEraser = document.getElementById("statEraser");
var currentSection = document.getElementById("currentSection");
var timeline = document.getElementById("timeline");
var stepCount = document.getElementById("stepCount");
var sessionsSection = document.getElementById("sessionsSection");
var sessionsBox = document.getElementById("sessions");
var sessionCount = document.getElementById("sessionCount");
var toolBadge = document.getElementById("toolBadge");
var toolBadgeText = document.getElementById("toolBadgeText");
var recordingPulse = document.getElementById("recordingPulse");
var sessionInfo = document.getElementById("sessionInfo");
var pathBar = document.getElementById("pathBar");
var toast = document.getElementById("toast");
var arttraceTooltip = document.getElementById("arttraceTooltip");
var outputPathDisplay = document.getElementById("outputPathDisplay");
var btnChangeFolder = document.getElementById("btnChangeFolder");
var gifPathDisplay = document.getElementById("gifPathDisplay");
var btnChangeGIFFolder = document.getElementById("btnChangeGIFFolder");
var snapshotPathDisplay = document.getElementById("snapshotPathDisplay");
var btnChangeSnapshotFolder = document.getElementById("btnChangeSnapshotFolder");


// v0.84: preview toggle
var btnTogglePreview = document.getElementById("btnTogglePreview");
var btnClosePreview = document.getElementById("btnClosePreview");
var hubTooltip = document.getElementById("hubTooltip");
var confirmOverlay = document.getElementById("confirmOverlay");
var confirmTitle = document.getElementById("confirmTitle");
var confirmBody = document.getElementById("confirmBody");
var btnConfirmCancel = document.getElementById("btnConfirmCancel");
var btnConfirmOk = document.getElementById("btnConfirmOk");

// v0.7: replay DOM refs
var replaySection = document.getElementById("replaySection");
var replayPreviewArea = document.getElementById("replayPreviewArea");
var replayPreviewGIF = document.getElementById("replayPreviewGIF");
var replayPreviewPlaceholder = document.getElementById("replayPreviewPlaceholder");
var replayPreviewProgress = document.getElementById("replayPreviewProgress");
var replayPreviewProgressLabel = document.getElementById("replayPreviewProgressLabel");
var replayPreviewProgressFill = document.getElementById("replayPreviewProgressFill");
var btnGeneratePreview = document.getElementById("btnGeneratePreview");
var btnSavePreviewGIF = document.getElementById("btnSavePreviewGIF");
var replaySize = document.getElementById("replaySize");
var previewColors = document.getElementById("previewColors");
var previewFPS = document.getElementById("previewFPS");
var replayMeta = document.getElementById("replayMeta");
var chkAutoOpenPreview = document.getElementById("chkAutoOpenPreview");
var lblAutoOpenPreview = document.getElementById("lblAutoOpenPreview");
var replayZoomOverlay = document.getElementById("replayZoomOverlay");
var replayZoomImg = document.getElementById("replayZoomImg");

var currentPreviewGIFBytes = null;
var isGeneratingPreview = false;
var isPreviewCancelled = false;
var btnCancelPreview = document.getElementById("btnCancelPreview");

// ============================================
// Logger System (v0.79)
// Memory ring + async file flush + global error capture
// ============================================
var LOG_RING_MAX = 500;
var LOG_FILE_MAX_BYTES = 512 * 1024;
var LOG_FLUSH_INTERVAL_MS = 10000;
var LOG_FLUSH_COUNT = 30;
var logRing = [];
var logPendingCount = 0;
var logFlushTimer = null;
var logFileName = "arttrace.log";

function _logNow(level, msg) {
    var d = new Date();
    var pad = function(n) { return n < 10 ? "0" + n : n; };
    var entry = {
        time: d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()),
        level: level,
        msg: msg
    };
    logRing.push(entry);
    if (logRing.length > LOG_RING_MAX) logRing.shift();
    logPendingCount++;
    // Auto-flush when batch is full
    if (logPendingCount >= LOG_FLUSH_COUNT) {
        _flushLogsAsync();
    }
    // Also update diagnostics textarea if visible
    _updateDiagnosticsUI();
}

function log(level, msg) {
    if (typeof msg !== "string") msg = String(msg);
    _logNow(level, msg);
    // Also keep console for dev convenience
    console.log("[" + level + "] [Arttrace] " + msg);
}

function logError(msg, err) {
    var full = msg;
    if (err) {
        full += " | " + (err.message || err);
        if (err.stack) full += "\n  Stack: " + err.stack;
    }
    log("ERROR", full);
}

function getLogText() {
    return logRing.map(function(e) {
        return "[" + e.time + "] [" + e.level + "] " + e.msg;
    }).join("\n");
}

function clearLogs() {
    logRing = [];
    logPendingCount = 0;
    _updateDiagnosticsUI();
    // Also clear file
    _flushLogsAsync(true);
}

function _flushLogsAsync(clearFile) {
    if (logPendingCount === 0 && !clearFile) return;
    logPendingCount = 0;
    fs.getDataFolder().then(function(dataFolder) {
        var text = clearFile ? "" : getLogText();
        if (!clearFile && text.length > LOG_FILE_MAX_BYTES) {
            text = text.substring(text.length - Math.floor(LOG_FILE_MAX_BYTES * 0.8));
        }
        return dataFolder.createFile(logFileName, { overwrite: true }).then(function(file) {
            return file.write(text, { format: formats.utf8 });
        });
    }).catch(function(e) {
        console.log("[Logger] flush failed:", e.message);
    });
}

async function _loadExistingLogs() {
    if (!fs) return;
    try {
        var dataFolder = await fs.getDataFolder();
        var file = await dataFolder.getEntry(logFileName);
        if (!file || file.isFolder) return;
        var text = await file.read({ format: formats.utf8 });
        if (!text) return;
        var lines = text.split("\n");
        var parsed = 0;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (!line) continue;
            // Parse format: [2025-04-27 10:30:00] [INFO] message
            var m = line.match(/^\[(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})\]\s+\[(\w+)\]\s+(.*)$/);
            if (m) {
                logRing.push({ time: m[1], level: m[2], msg: m[3] });
                parsed++;
            }
        }
        if (parsed > 0) {
            // Trim to max size
            while (logRing.length > LOG_RING_MAX) logRing.shift();
            console.log("[Logger] loaded " + parsed + " entries from " + logFileName);
        }
    } catch (e) {
        console.log("[Logger] load existing logs failed:", e.message);
    }
}

function _startLogFlushTimer() {
    if (logFlushTimer) return;
    logFlushTimer = setInterval(function() {
        if (logPendingCount > 0) _flushLogsAsync();
    }, LOG_FLUSH_INTERVAL_MS);
}

function _stopLogFlushTimer() {
    if (logFlushTimer) { clearInterval(logFlushTimer); logFlushTimer = null; }
}

// Global error capture (UXP-safe: only use window.onerror if available)
if (typeof window !== "undefined" && window.onerror !== undefined) {
    window.onerror = function(msg, url, line, col, err) {
        logError("UNCAUGHT: " + msg + " at " + (url || "?") + ":" + line, err);
    };
}

// Diagnostics UI update
function _updateDiagnosticsUI() {
    var ta = document.getElementById("diagnosticsLogText");
    if (!ta) return;
    ta.value = getLogText();
    ta.scrollTop = ta.scrollHeight;
}

function exportDiagnosticsLog() {
    fs.getFolder().then(function(folder) {
        if (!folder || !folder.isFolder) return;
        var text = getLogText();
        var d = new Date();
        var pad = function(n) { return n < 10 ? "0" + n : n; };
        var ts = d.getFullYear() + "" + pad(d.getMonth()+1) + pad(d.getDate()) + "_" + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
        var name = "arttrace_log_" + ts + ".txt";
        return folder.createFile(name, { overwrite: true }).then(function(file) {
            return file.write(text, { format: formats.utf8 }).then(function() {
                setStatus(t("logExported", { name: name }), "ready");
                log("INFO", "Diagnostics log exported to " + folder.nativePath + "/" + name);
            });
        });
    }).catch(function(e) {
        logError("Export diagnostics log failed", e);
    });
}

// Start periodic flush (after loading existing logs)
_loadExistingLogs().then(function() {
    _startLogFlushTimer();
});

// ============================================
// v0.84: Per-Document Recording State
// Each document maintains independent recording lifecycle.
// Global variables below represent the ACTIVE document's state.
// ============================================

function createDocState() {
    return {
        recordingState: "ready",
        currentSteps: [],
        sessions: [],
        sessionCounter: 1,
        lastHistoryCount: 0,
        lastFingerprint: "",
        detectedLimit: 0,
        atLimit: false,
        snapCounter: 0,
        globalStepOffset: 0,
        totalStrokes: 0,
        brushCount: 0,
        eraserCount: 0,
        currentWorkTime: 0,
        lastActiveTime: 0,
        timerCheckpoint: 0,
        lastSnapshotTime: 0,
        lastSnapshotStepIndex: -1,
        hasUnexportedChange: false,
        hasAutoDowngraded: false,
        currentSessionFolder: null,
        currentParentFolder: null,
        currentParentFolderPath: "",
        outputFolderEntry: null,
        currentProjectMappingKey: "",
        currentProjectDocId: 0,
        __autoPaused: false,
        __docFilePath: "",
        __docTitle: "",
        lastFilePath: "",
        lastDocTitle: ""
    };
}

var docStates = {};      // key: doc.id, value: DocState object
var activeDocId = 0;     // current active document id

// v0.85c: persistent project mapping (docKey -> {folderName, baseName, filePath, lastSession})
// Survives PS restarts for saved files; unsaved docs get new mapping each PS session
var projectMappings = {};

// ---- Active Document State (mirrors DocState fields) ----
var recordingState = "ready";
var currentSteps = [];
var sessions = [];
var sessionCounter = 1;
var lastHistoryCount = 0;
var lastFingerprint = "";
var detectedLimit = 0;
var atLimit = false;
var snapCounter = 0;
var globalStepOffset = 0;
var totalStrokes = 0;
var brushCount = 0;
var eraserCount = 0;
var currentWorkTime = 0;
var sessionStartWorkTime = 0;  // v0.87: workTime at session start, for calculating partWorkTime
var lastActiveTime = 0;
var timerCheckpoint = 0;
var lastSnapshotTime = 0;
var lastSnapshotStepIndex = -1;
var hasUnexportedChange = false;
var hasAutoDowngraded = false;
var currentSessionFolder = null;
var currentParentFolder = null;
var currentParentFolderPath = "";  // v0.84: string anchor for re-acquiring stale Entry
var outputFolderEntry = null;      // v0.84: parent folder Entry (authorized via fs.getFolder)
var currentProjectMappingKey = ""; // v0.88: stable key for the current Arttrace project folder
var currentProjectDocId = 0;       // v0.88: original doc id, survives Save As doc-id churn
var snapshotFolderPath = "";       // v0.84: quick snapshot export folder path
var snapshotFolderEntry = null;    // v0.84: quick snapshot export folder Entry
var __autoPaused = false;
var lastFilePath = "";      // v0.84: track filePath to detect Save-As
var lastDocTitle = "";      // v0.84: track doc title to detect Save-As

// ---- Runtime (not per-document, tied to active doc lifecycle) ----
var detectInterval = null;
var exportInterval = null;
var captureLock = false;
var exportLock = false;
var exportFailCount = 0; // v0.84: consecutive export failure counter
var workTimeTimer = null;
var lastUndoDelta = 0;   // v0.84: tracks how many steps were undone last, to detect redo
var finishInProgress = false; // v0.88: prevent duplicate finalize calls during document close

// ============================================
// v0.84: Per-Document State Management
// ============================================

async function syncActiveDocument() {
    if (!ps || !ps.app.activeDocument) return;
    var docId = ps.app.activeDocument.id;
    if (activeDocId !== docId) {
        await onDocumentSwitch(docId);
    }
}

function packState() {
    return {
        recordingState: recordingState,
        currentSteps: currentSteps,
        sessions: sessions,
        sessionCounter: sessionCounter,
        lastHistoryCount: lastHistoryCount,
        lastFingerprint: lastFingerprint,
        detectedLimit: detectedLimit,
        atLimit: atLimit,
        snapCounter: snapCounter,
        globalStepOffset: globalStepOffset,
        totalStrokes: totalStrokes,
        brushCount: brushCount,
        eraserCount: eraserCount,
        currentWorkTime: currentWorkTime,
        sessionStartWorkTime: sessionStartWorkTime,
        lastActiveTime: lastActiveTime,
        timerCheckpoint: timerCheckpoint,
        lastSnapshotTime: lastSnapshotTime,
        lastSnapshotStepIndex: lastSnapshotStepIndex,
        hasUnexportedChange: hasUnexportedChange,
        hasAutoDowngraded: hasAutoDowngraded,
        currentSessionFolder: currentSessionFolder,
        currentParentFolder: currentParentFolder,
        currentParentFolderPath: currentParentFolderPath,
        outputFolderEntry: outputFolderEntry,
        currentProjectMappingKey: currentProjectMappingKey,
        currentProjectDocId: currentProjectDocId,
        lastUndoDelta: lastUndoDelta,
        __autoPaused: __autoPaused,
        __docFilePath: (ps.app.activeDocument ? (ps.app.activeDocument.filePath || "") : ""),
        __docTitle: (ps.app.activeDocument ? (ps.app.activeDocument.title || "") : ""),
        lastFilePath: lastFilePath,
        lastDocTitle: lastDocTitle
    };
}

function unpackState(state) {
    recordingState = state.recordingState;
    currentSteps = state.currentSteps;
    sessions = state.sessions;
    sessionCounter = state.sessionCounter;
    lastHistoryCount = state.lastHistoryCount;
    lastFingerprint = state.lastFingerprint;
    detectedLimit = state.detectedLimit;
    atLimit = state.atLimit;
    snapCounter = state.snapCounter;
    globalStepOffset = state.globalStepOffset || 0;
    totalStrokes = state.totalStrokes;
    brushCount = state.brushCount;
    eraserCount = state.eraserCount;
    currentWorkTime = state.currentWorkTime;
    sessionStartWorkTime = state.sessionStartWorkTime || 0;
    lastActiveTime = state.lastActiveTime;
    timerCheckpoint = state.timerCheckpoint;
    lastSnapshotTime = state.lastSnapshotTime;
    lastSnapshotStepIndex = state.lastSnapshotStepIndex;
    hasUnexportedChange = state.hasUnexportedChange;
    hasAutoDowngraded = state.hasAutoDowngraded;
    currentSessionFolder = state.currentSessionFolder;
    currentParentFolder = state.currentParentFolder;
    currentParentFolderPath = state.currentParentFolderPath || "";
    outputFolderEntry = state.outputFolderEntry || null;
    currentProjectMappingKey = state.currentProjectMappingKey || "";
    currentProjectDocId = state.currentProjectDocId || 0;
    lastUndoDelta = state.lastUndoDelta || 0;
    lastFilePath = state.lastFilePath || "";
    lastDocTitle = state.lastDocTitle || "";
    __autoPaused = state.__autoPaused || false;
}

function refreshTimeline() {
    if (!timeline) return;
    timeline.innerHTML = "";
    for (var i = 0; i < currentSteps.length; i++) {
        var step = currentSteps[i];
        var elapsed = i > 0 ? step.time - currentSteps[0].time : 0;
        addTimelineItem(i + 1, step.time, step.tool, step.needsSnapshot, true);
    }
    timeline.scrollTop = 0;
    if (stepCount) stepCount.textContent = globalStepOffset + currentSteps.length;
}

function refreshSessions() {
    if (!sessionsBox) return;
    sessionsBox.innerHTML = "";
    for (var i = 0; i < sessions.length; i++) {
        var session = sessions[i];
        var item = document.createElement("div");
        item.className = "session-item";
        var bCount = 0, eCount = 0;
        for (var j = 0; j < session.steps.length; j++) {
            if (session.steps[j].tool === "brush") bCount++;
            else if (session.steps[j].tool === "eraser") eCount++;
        }
        // Build display name: ProjectName / Session_001
        var displayName = session.name;
        if (session.parentFolder && session.parentFolder.name && session.parentFolder.name !== session.name) {
            displayName = session.parentFolder.name + " / " + session.name;
        }
        item.innerHTML = '<span class="session-name">' + displayName + '</span>' +
            '<span class="session-meta">' + session.steps.length + ' ' + t("steps") + '</span>';
        var openPath = session.parentFolderPath || (session.parentFolder && session.parentFolder.nativePath ? session.parentFolder.nativePath : "");
        log("INFO", "[refreshSessions] session=" + session.name + " openPath=" + (openPath || "(empty)") + " parentFolderPath=" + (session.parentFolderPath || "?") + " nativePath=" + (session.parentFolder && session.parentFolder.nativePath ? session.parentFolder.nativePath : "?"));
        if (openPath) {
            item.style.cursor = "pointer";
            if (arttraceTooltip) {
                var sessionTooltipTimer = null;
                item.addEventListener("mouseenter", function(e) {
                    sessionTooltipTimer = setTimeout(function() {
                        arttraceTooltip.textContent = openPath;
                        arttraceTooltip.style.display = "block";
                        var rect = item.getBoundingClientRect();
                        arttraceTooltip.style.left = rect.left + "px";
                        arttraceTooltip.style.top = (rect.top - 40) + "px";
                    }, 500);
                });
                item.addEventListener("mouseleave", function() {
                    if (sessionTooltipTimer) { clearTimeout(sessionTooltipTimer); sessionTooltipTimer = null; }
                    arttraceTooltip.style.display = "none";
                });
            }
            (function(path) {
                item.addEventListener("click", function() {
                    log("INFO", "[openSession] CLICKED path=" + path + " shell=" + (typeof shell) + " openPath=" + (shell && typeof shell.openPath));
                    if (!shell || typeof shell.openPath !== "function") {
                        log("WARN", "[openSession] shell.openPath not available");
                        return;
                    }
                    var tryPaths = [path];
                    if (!path.startsWith("file://")) {
                        tryPaths.push("file://" + encodeURI(path));
                    }
                    var tryIndex = 0;
                    function tryNext() {
                        if (tryIndex >= tryPaths.length) {
                            log("WARN", "[openSession] all openPath attempts failed for: " + path);
                            return;
                        }
                        var p = tryPaths[tryIndex++];
                        log("INFO", "[openSession] trying openPath with: " + p);
                        shell.openPath(p).then(function(result) {
                            if (result && result !== "") {
                                log("WARN", "[openSession] openPath returned: " + result + ", trying next format");
                                tryNext();
                            } else {
                                log("INFO", "[openSession] openPath succeeded for: " + p);
                            }
                        }).catch(function(e) {
                            log("WARN", "[openSession] openPath failed for '" + p + "': " + (e.message || e));
                            tryNext();
                        });
                    }
                    tryNext();
                });
            })(openPath);
        } else {
            log("WARN", "[openSession] no openPath for session: " + session.name);
        }
        sessionsBox.appendChild(item);
    }
    if (sessionCount) sessionCount.textContent = sessions.length;
    if (sessionsSection) sessionsSection.classList.toggle("visible", sessions.length > 0);
}

async function onDocumentSwitch(newDocId) {
    if (activeDocId === newDocId) return;
    var doc = ps && ps.app ? ps.app.activeDocument : null;
    var docTitle = doc ? (doc.title || "") : "";

    // Remember old state before saving
    var oldRecordingState = recordingState;

    // v0.84: switching transition
    if (document.body) document.body.classList.add("switching");
    var switchMsg = t("switching");
    if (statusText) {
        statusText.textContent = switchMsg;
        statusText.className = "status-text status-ready";
    }

    log("INFO", "[docSwitch] " + (activeDocId || "none") + " -> " + newDocId + " (" + docTitle + ")");

    // Save old document state
    if (activeDocId) {
        if (recordingState === "recording") {
            pauseRecording();
            __autoPaused = true;
            log("INFO", "[docSwitch] auto-paused doc " + activeDocId);
        }
        docStates[activeDocId] = packState();
    }

    // Load new document state (with filePath fallback for Save-As scenarios)
    var state = docStates[newDocId];
    if (!state && doc && doc.filePath) {
        for (var id in docStates) {
            if (docStates[id].__docFilePath === doc.filePath) {
                state = docStates[id];
                docStates[newDocId] = state;
                delete docStates[id];
                log("INFO", "[docSwitch] migrated state by filePath: " + doc.filePath);
                break;
            }
        }
    }
    if (!state) {
        state = createDocState();
        docStates[newDocId] = state;
    }
    unpackState(state);
    activeDocId = newDocId;

    // Refresh UI for new document
    refreshUI();
    refreshTimeline();
    refreshSessions();
    if (currentSteps.length > 0) {
        if (currentSection) currentSection.classList.add("visible");
        if (statsRow) statsRow.classList.add("visible");
        if (pathBar && currentSessionFolder) pathBar.style.display = "block";
    } else {
        if (currentSection) currentSection.classList.remove("visible");
        if (statsRow) statsRow.classList.remove("visible");
        if (pathBar) pathBar.style.display = "none";
    }

    // Update button states based on new document's recordingState
    updatePrimaryActionButton();
    if (btnPause) btnPause.disabled = recordingState !== "recording";
    if (btnFinish) btnFinish.disabled = recordingState === "ready" || currentSteps.length === 0;
    // btnSettings no longer disabled during recording — safe options remain editable
    // gifRow removed — Preview panel is now the unified GIF export entry

    // v0.84: collect final status but don't set it yet — delay for switching animation
    var finalStatus = null;
    if (recordingState === "paused" && __autoPaused) {
        resumeRecording();
        __autoPaused = false;
        finalStatus = {
            text: t("autoResumed", { doc: docTitle }),
            type: "recording"
        };
        log("INFO", "[docSwitch] auto-resumed doc " + newDocId + " (was auto-paused)");
    } else if (oldRecordingState === "recording" && recordingState === "paused") {
        finalStatus = {
            text: t("statusPaused") + ". " + t("resumeHint"),
            type: "paused"
        };
    } else if (recordingState === "paused") {
        finalStatus = {
            text: t("statusPaused") + ". " + t("resumeHint"),
            type: "paused"
        };
    } else if (recordingState === "ready") {
        if (oldRecordingState === "recording") {
            finalStatus = {
                text: t("switchedTo", { doc: docTitle }),
                type: "ready"
            };
        } else {
            finalStatus = { text: t("statusReady"), type: "ready" };
        }
        if (infoText) infoText.textContent = t("infoReady");
    }

    // v0.84: remove switching transition and apply final status after 500ms
    // 250ms fade out + 250ms hidden + 250ms fade in = smooth transition
    setTimeout(function() {
        if (document.body) document.body.classList.remove("switching");
        if (finalStatus) setStatus(finalStatus.text, finalStatus.type);
    }, 500);
}

// v0.7: replay state
var replayFrames = [];

// v0.5: dynamic config
var TARGET_SIZE = 1080;
var VIDEO_FPS = 30; // used for canvas replay + metadata
var VIDEO_FORMAT = "mp4"; // for metadata.json (read by companion app)
var VIDEO_QUALITY = 18; // CRF value for metadata
var FFMPEG_PATH = ""; // legacy, kept for settings compatibility
var ffmpegReady = false; // legacy
var DETECT_MS = 300;       // v0.79: detect interval (history state polling)
var SNAPSHOT_DENSITY = "high"; // v0.79: high/medium/low sampling
var SNAPSHOT_FORMAT = "png"; // v0.85: jpeg or png for manual snapshots
var lastSnapshotTime = 0;      // v0.79: timestamp of last taken snapshot
var lastSnapshotStepIndex = -1; // v0.79: step index of last snapshot
var autoOpenPreview = true; // v0.84: auto-open preview after finish
var outputFolderPath = ""; // saved output folder nativePath
var gifOutputFolderPath = ""; // saved GIF export folder nativePath
var lastRootFolder = null; // Entry object for root folder, valid within same plugin session
var lastGIFEntry = null; // Entry object for GIF output folder



// ---- Presets ----
// v0.79: presets set resolution + snapshot density (detect interval is user-configurable)
var presets = {
    draft: { size: 512, detect: 300, density: "high", label: "presetDraft", desc: "presetDescDraft" },
    smooth: { size: 1080, detect: 300, density: "high", label: "presetSmooth", desc: "presetDescSmooth" },
    balanced: { size: 1440, detect: 300, density: "medium", label: "presetBalanced", desc: "presetDescBalanced" },
    quality: { size: 2160, detect: 300, density: "low", label: "presetQuality", desc: "presetDescQuality" }
};

// ---- PS / UXP APIs ----
var ps = null;
var core = null;
var batchPlay = null;
var imaging = null;
var jpegEncoder = null;
var fs = null;
var formats = null;
var shell = null;

try {
    ps = require("photoshop");
    core = ps.core;
    batchPlay = ps.action.batchPlay;
    imaging = ps.imaging;
    try {
        jpegEncoder = require("./jpeg-encoder.js");
        if (typeof jpegEncoder !== 'function' && typeof window !== 'undefined' && window.jpegEncoder) {
            jpegEncoder = window.jpegEncoder;
        }
    } catch (je) { log("WARN", "jpeg-encoder not available: " + je.message); }
    var uxp = require("uxp");
    fs = uxp.storage.localFileSystem;
    formats = uxp.storage.formats;
    shell = uxp.shell;
    log("INFO", "Arttrace API OK, imaging=" + !!imaging);
} catch (e) {
    logError("API initialization failed", e);
}

// ============================================
// Settings Persistence
// ============================================

var settingsLoaded = false;

async function initSettings() {
    if (!fs) return;
    try {
        var dataFolder = await fs.getDataFolder();
        var entries = await dataFolder.getEntries();
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].name === "arttrace_settings.json" && !entries[i].isFolder) {
                var text = await entries[i].read({ format: formats.utf8 });
                var data = JSON.parse(text);
                if (data.lang) currentLang = data.lang;
                if (typeof data.targetSize === "number") TARGET_SIZE = data.targetSize;
                // v0.79: migrate old pollMs to detectMs
                if (data.detectMs) DETECT_MS = data.detectMs;
                else if (data.pollMs) DETECT_MS = Math.min(500, Math.max(100, data.pollMs));
                if (data.snapshotDensity) SNAPSHOT_DENSITY = data.snapshotDensity;
                if (data.snapshotFormat) SNAPSHOT_FORMAT = data.snapshotFormat;
                if (data.previewColors) previewColors.value = data.previewColors;
                if (data.previewFPS) previewFPS.value = data.previewFPS;
                if (data.replaySize) replaySize.value = data.replaySize;
                if (data.autoOpenPreview !== undefined) autoOpenPreview = data.autoOpenPreview;
                // v0.85f: load all mappings, but discard unsaved_ keys (docId resets on PS restart)
                if (data.projects) {
                    projectMappings = {};
                    for (var key in data.projects) {
                        if (key.startsWith("unsaved_")) continue;
                        projectMappings[key] = data.projects[key];
                    }
                }
                if (data.outputFolderPath) outputFolderPath = data.outputFolderPath;
                if (data.gifOutputFolderPath) gifOutputFolderPath = data.gifOutputFolderPath;
                if (data.snapshotFolderPath) {
                    snapshotFolderPath = data.snapshotFolderPath;
                    try {
                        snapshotFolderEntry = await fs.getEntryWithUrl("file://" + encodeURI(snapshotFolderPath));
                    } catch (e) { snapshotFolderEntry = null; }
                }
                settingsLoaded = true;
                log("INFO", "Loaded settings: " + JSON.stringify(data).substring(0, 200));
                break;
            }
        }
    } catch (e) {
        logError("Settings load failed", e);
    }
}

async function saveSettings() {
    if (!fs) return;
    try {
        var dataFolder = await fs.getDataFolder();
        var file = await dataFolder.createFile("arttrace_settings.json", { overwrite: true });
        await file.write(JSON.stringify({
            lang: currentLang, targetSize: TARGET_SIZE,
            detectMs: DETECT_MS, snapshotDensity: SNAPSHOT_DENSITY,
            snapshotFormat: SNAPSHOT_FORMAT,
            previewColors: previewColors ? previewColors.value : "256",
            previewFPS: previewFPS ? previewFPS.value : "10",
            replaySize: replaySize ? replaySize.value : "512",
            autoOpenPreview: autoOpenPreview,
            // v0.87: persist mappings but filter out unsaved_ keys (they are session-only)
            projects: (function() {
                var filtered = {};
                for (var k in projectMappings) {
                    if (k.startsWith("unsaved_")) continue;
                    filtered[k] = projectMappings[k];
                }
                return filtered;
            })(),
            outputFolderPath: outputFolderPath,
            gifOutputFolderPath: gifOutputFolderPath,
            snapshotFolderPath: snapshotFolderPath,
            version: "v0.90"
        }), { format: formats.utf8 });
        log("INFO", "Settings saved");
    } catch (e) {
        logError("Settings save failed", e);
    }
}

// ============================================
// Preset & Settings Overlay
// ============================================

function applyPreset(name) {
    var p = presets[name];
    if (!p) return;
    TARGET_SIZE = p.size;
    DETECT_MS = p.detect;
    SNAPSHOT_DENSITY = p.density;
    highlightResButton(TARGET_SIZE);
    highlightDetectButton(DETECT_MS);
    highlightDensityButton(SNAPSHOT_DENSITY);
    updateToolBadge();
    highlightPreset(name);
    log("INFO", "Preset=" + name + " size=" + TARGET_SIZE + " detect=" + DETECT_MS + "ms density=" + SNAPSHOT_DENSITY);
    saveSettings();
}

function highlightPreset(name) {
    document.querySelectorAll(".preset-btn").forEach(function(btn) {
        btn.classList.toggle("active", btn.dataset.preset === name);
    });
}

function highlightResButton(size) {
    document.querySelectorAll(".pill[data-size]").forEach(function(btn) {
        btn.classList.toggle("active", parseInt(btn.dataset.size) === size);
    });
}

function highlightDetectButton(ms) {
    document.querySelectorAll(".pill.detect-btn").forEach(function(btn) {
        btn.classList.toggle("active", parseInt(btn.dataset.detect) === ms);
    });
}

function highlightDensityButton(density) {
    document.querySelectorAll(".pill.density-btn").forEach(function(btn) {
        btn.classList.toggle("active", btn.dataset.density === density);
    });
}

function highlightSnapshotFormatButton(format) {
    document.querySelectorAll(".pill.format-btn").forEach(function(btn) {
        btn.classList.toggle("active", btn.dataset.format === format);
    });
}

function openSettings() {
    if (settingsOverlay) settingsOverlay.classList.add("open");
    if (document.body) document.body.classList.add("settings-open");
    if (document.body) document.body.style.overflow = "hidden";
    if (outputPathDisplay) outputPathDisplay.textContent = outputFolderPath || t("notSet");
    if (gifPathDisplay) gifPathDisplay.textContent = gifOutputFolderPath || t("notSet");
    if (snapshotPathDisplay) snapshotPathDisplay.textContent = snapshotFolderPath || t("notSet");

    // v0.85c: lock risky options during recording or paused (resolution & output path)
    var isLocked = recordingState === "recording" || recordingState === "paused";
    document.querySelectorAll(".pill[data-size]").forEach(function(btn) {
        btn.disabled = isLocked;
        btn.title = isLocked ? t("lockResolution") : "";
    });
    if (btnChangeFolder) {
        btnChangeFolder.disabled = isLocked;
        btnChangeFolder.title = isLocked ? t("lockOutputFolder") : "";
    }
    // v0.85c: also lock detect interval and snapshot density during recording or paused
    document.querySelectorAll(".pill.detect-btn").forEach(function(btn) {
        btn.disabled = isLocked;
        btn.title = isLocked ? t("lockDetectInterval") : "";
    });
    document.querySelectorAll(".pill.density-btn").forEach(function(btn) {
        btn.disabled = isLocked;
        btn.title = isLocked ? t("lockSnapshotDensity") : "";
    });
    // v0.85: snapshot format can be changed during recording (low-risk switch)
}

function closeSettings() {
    if (settingsOverlay) settingsOverlay.classList.remove("open");
    if (document.body) document.body.classList.remove("settings-open");
    if (document.body) document.body.style.overflow = "";
    // v0.84: re-enable all locked buttons when closing
    document.querySelectorAll(".pill[data-size]").forEach(function(btn) {
        btn.disabled = false;
        btn.title = "";
    });
    document.querySelectorAll(".pill.detect-btn").forEach(function(btn) {
        btn.disabled = false;
        btn.title = "";
    });
    document.querySelectorAll(".pill.density-btn").forEach(function(btn) {
        btn.disabled = false;
        btn.title = "";
    });
    if (btnChangeFolder) {
        btnChangeFolder.disabled = false;
        btnChangeFolder.title = "";
    }
}

// v0.84: Settings Tab switching
function switchSettingsTab(tabName) {
    document.querySelectorAll(".settings-tab").forEach(function(btn) {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
    document.querySelectorAll(".settings-section").forEach(function(sec) {
        sec.classList.toggle("active", sec.id === "tab-" + tabName);
    });
}

// v0.84: Toast notification
function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(function() {
        toast.classList.remove("show");
    }, 1500);
}

// Resolution button listeners
document.querySelectorAll(".pill[data-size]").forEach(function(btn) {
    btn.addEventListener("click", function() {
        TARGET_SIZE = parseInt(this.dataset.size);
        highlightResButton(TARGET_SIZE);
        updateToolBadge();
        document.querySelectorAll(".preset-btn").forEach(function(b) { b.classList.remove("active"); });
        saveSettings();
    });
});

// Detect interval button listeners
document.querySelectorAll(".pill.detect-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        DETECT_MS = parseInt(this.dataset.detect);
        highlightDetectButton(DETECT_MS);
        document.querySelectorAll(".preset-btn").forEach(function(b) { b.classList.remove("active"); });
        saveSettings();
    });
});

// Snapshot density button listeners
document.querySelectorAll(".pill.density-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        SNAPSHOT_DENSITY = this.dataset.density;
        highlightDensityButton(SNAPSHOT_DENSITY);
        document.querySelectorAll(".preset-btn").forEach(function(b) { b.classList.remove("active"); });
        saveSettings();
    });
});

// Snapshot format button listeners
document.querySelectorAll(".pill.format-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        SNAPSHOT_FORMAT = this.dataset.format;
        highlightSnapshotFormatButton(SNAPSHOT_FORMAT);
        document.querySelectorAll(".preset-btn").forEach(function(b) { b.classList.remove("active"); });
        saveSettings();
    });
});

// ============================================
// Tool Detection
// ============================================

function getCurrentTool() {
    try {
        var toolObj = ps.app.currentTool;
        var tool = (toolObj && toolObj.id) ? toolObj.id : toolObj;
        if (tool === "brushTool" || tool === "paintbrushTool") return "brush";
        if (tool === "eraserTool") return "eraser";
        if (tool && typeof tool === 'string' && (tool.indexOf("brush") !== -1 || tool.indexOf("pencil") !== -1 || tool.indexOf("mixerBrush") !== -1)) return "brush";
        if (tool && typeof tool === 'string' && tool.indexOf("eraser") !== -1) return "eraser";
        console.log("[getCurrentTool] raw=" + JSON.stringify(toolObj) + " extracted=" + tool);
        return "unknown";
    } catch (e) { return "unknown"; }
}

// v0.85: fallback tool detection via history state name (batchPlay)
// because ps.app.currentTool is unreliable in UXP
function detectToolFromHistoryName(name) {
    if (!name) return "unknown";
    var lower = name.toLowerCase();
    if (lower.indexOf("eraser") !== -1) return "eraser";
    if (lower.indexOf("brush") !== -1 || lower.indexOf("pencil") !== -1 || lower.indexOf("pen") !== -1) return "brush";
    return "unknown";
}

function getToolPrefix(tool) {
    if (tool === "brush") return "b";
    if (tool === "eraser") return "e";
    return "u";
}

function getToolLabel(tool) {
    if (tool === "brush") return "Brush";
    if (tool === "eraser") return "Eraser";
    return "";
}

function getResLabel(size) {
    if (size === 0) return "Original";
    if (size === 1440) return "2K";
    if (size === 2160) return "4K";
    return size + "px";
}

function updateToolBadge() {
    if (!toolBadge) return;
    if (recordingState !== "recording") {
        toolBadge.style.display = "none";
        return;
    }
    toolBadge.className = "tool-badge brush";
    if (toolBadgeText) toolBadgeText.textContent = getResLabel(TARGET_SIZE);
    var dot = toolBadge.querySelector(".tool-dot");
    if (dot) dot.className = "tool-dot brush";
    toolBadge.style.display = "flex";
}

// ============================================
// Folder path resolution (macOS NFD/NFC safe)
// ============================================

async function resolveFolderFromPath(path) {
    if (!path) return null;
    // Try 1: direct file:// with original path (macOS Chinese paths work better without encodeURI)
    try { return await fs.getEntryWithUrl("file://" + path); } catch (e) {}
    // Try 2: with encodeURI fallback
    try { return await fs.getEntryWithUrl("file://" + encodeURI(path)); } catch (e) {}
    // Try 3: NFD normalized for macOS APFS
    if (path.normalize) {
        try { return await fs.getEntryWithUrl("file://" + path.normalize('NFD')); } catch (e) {}
    }
    return null;
}

// ============================================
// Project folders
// ============================================

function getProjectName() {
    try {
        var doc = ps.app.activeDocument;
        var baseName, docId, filePath, isSavedLikeTitle;
        if (doc.filePath) {
            // Saved file: use the actual filename from path
            var parts = doc.filePath.split("/");
            var fileName = parts[parts.length - 1].replace(/\.(psd|psb|psdt)$/i, "");
            baseName = fileName.replace(/[\/\\:*?"<>|]/g, "_").substring(0, 30);
            filePath = doc.filePath;
            isSavedLikeTitle = true;
        } else if (doc.title && /\.(psd|psb|psdt)$/i.test(doc.title)) {
            // v0.84 fallback: filePath is unreliable in UXP, use title if it looks like a saved file
            baseName = doc.title.replace(/\.(psd|psb|psdt)$/i, "").replace(/[\/\\:*?"<>|]/g, "_").substring(0, 30);
            filePath = "";
            isSavedLikeTitle = true;
        } else {
            // v0.87: unsaved docs use doc.id for unique identity so new untitled docs don't collide
            baseName = "Untitled_" + doc.id;
            filePath = "";
            isSavedLikeTitle = false;
        }
        return {
            baseName: baseName || "Arttrace",
            docId: doc.id,
            filePath: filePath,
            isSavedLikeTitle: isSavedLikeTitle
        };
    } catch (e) { return { baseName: "Arttrace", docId: 0, filePath: "", isSavedLikeTitle: false }; }
}

function getDocKey(projectInfo) {
    if (projectInfo.filePath) {
        return "saved_" + projectInfo.filePath;
    }
    // v0.85f: UXP filePath is unreliable; use baseName as stable key
    return "title_" + projectInfo.baseName;
}

// v0.85c: find next available folder name with auto-deduplication suffix
// e.g. Untitled_Project -> Untitled_Project (1) -> Untitled_Project (2)
async function findUniqueFolderName(parentFolder, baseName) {
    try {
        var entries = await parentFolder.getEntries();
        var names = {};
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isFolder) names[entries[i].name] = true;
        }
        if (!names[baseName]) return baseName;
        for (var n = 1; n < 1000; n++) {
            var candidate = baseName + " (" + n + ")";
            if (!names[candidate]) return candidate;
        }
    } catch (e) {}
    return baseName + "_" + Date.now();
}

function safeProjectName(name) {
    return name.replace(/[\/\\:*?"<>|]/g, "_").substring(0, 30);
}

function stripPhotoshopExtension(name) {
    return (name || "").replace(/\.(psd|psb|psdt)$/i, "");
}

function projectNameFromSaveTarget(filePath, docTitle) {
    var rawName = "";
    if (filePath) {
        var parts = filePath.split("/");
        rawName = parts[parts.length - 1] || "";
    } else {
        rawName = docTitle || "";
    }
    return safeProjectName(stripPhotoshopExtension(rawName));
}

function looksLikeUntitledProjectName(name) {
    return /^Untitled(?:[_\-\s]?\d+)?$/i.test(name || "");
}

async function scanForExistingProject(parentFolder, projectInfo) {
    // v0.85c: use persistent projectMappings instead of folder-name scanning
    var docKey = getDocKey(projectInfo);
    var mapping = projectMappings[docKey];

    // For saved files: if not found by docKey, try matching by filePath across all mappings
    if (!mapping && projectInfo.filePath) {
        for (var key in projectMappings) {
            if (projectMappings[key].filePath === projectInfo.filePath) {
                mapping = projectMappings[key];
                projectMappings[docKey] = mapping;
                log("INFO", "[scanForExistingProject] migrated mapping from " + key + " to " + docKey);
                break;
            }
        }
    }

    if (!mapping || !mapping.folderName) return null;

    // Verify folder still exists
    try {
        var projectFolder = await parentFolder.getEntry(mapping.folderName);
        if (!projectFolder || !projectFolder.isFolder) {
            // Folder was deleted/moved — clean up stale mapping
            delete projectMappings[docKey];
            saveSettings();
            return null;
        }
        return {
            projectFolder: projectFolder,
            lastSession: mapping.lastSession || 0
        };
    } catch (e) {
        return null;
    }
}

async function ensureProjectFolder(parentFolder, projectName) {
    try {
        var entry = await parentFolder.getEntry(projectName);
        if (entry && entry.isFolder) return entry;
    } catch (e) {}
    return await parentFolder.createFolder(projectName);
}

function formatTimestamp() {
    var d = new Date();
    var pad = function(n) { return n < 10 ? '0' + n : '' + n; };
    return d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate()) + '_' +
           pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
}

function isSessionFolderName(name) {
    // 旧格式: Session_001, Session_001_continued, Session_001_continued_2
    if (/^Session_\d{3}(_continued(_\d+)?)?$/.test(name)) return true;
    // 新格式: Arttrace_YYYY-MM-DD_HHMMSS, Arttrace_YYYY-MM-DD_HHMMSS_PartNN, Arttrace_YYYY-MM-DD_HHMMSS_N
    if (/^Arttrace_\d{4}-\d{2}-\d{2}_\d{6}(_Part\d+)?(_\d+)?$/.test(name)) return true;
    return false;
}

async function findNextSessionName(projectFolder) {
    var baseName = "Arttrace_" + formatTimestamp();
    var exists = false;
    try {
        var entries = await projectFolder.getEntries();
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].name === baseName) { exists = true; break; }
        }
    } catch (e) {}
    if (!exists) return baseName;
    
    for (var n = 2; n < 100; n++) {
        var name = baseName + "_" + n;
        exists = false;
        try {
            var entries = await projectFolder.getEntries();
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].name === name) { exists = true; break; }
            }
        } catch (e) {}
        if (!exists) return name;
    }
    return baseName + "_" + Date.now();
}

async function findNextContinuationName(projectFolder, baseName) {
    // autoSplit naming: Arttrace_2026-04-30_143022 → Arttrace_2026-04-30_143022_Part02, Arttrace_2026-04-30_143022_Part03
    for (var n = 2; n < 100; n++) {
        var suffix = "_Part" + (n < 10 ? "0" : "") + n;
        var name = baseName + suffix;
        var exists = false;
        try {
            var entries = await projectFolder.getEntries();
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].name === name) { exists = true; break; }
            }
        } catch (e) {}
        if (!exists) return name;
    }
    return baseName + "_Part" + Date.now();
}

// ============================================
// Fingerprint
// ============================================

function getStateFingerprint(state) {
    if (!state) return "";
    var parts = [];
    try {
        for (var key in state) {
            var v = state[key];
            var t = typeof v;
            if (t === "string" || t === "number" || t === "boolean") parts.push(key + "=" + v);
        }
    } catch (e) {}
    return parts.join("|");
}

function getHistoryStateInfo() {
    try {
        var doc = ps.app.activeDocument;
        if (!doc || !doc.historyStates) return { count: 0, fingerprint: "", rawType: "none", lastId: 0 };
        var count = doc.historyStates.length;
        var fingerprint = "";
        var lastId = 0;
        var rawType = "none";
        try {
            var lastState = doc.historyStates[count - 1];
            rawType = typeof lastState;
            fingerprint = getStateFingerprint(lastState);
            if (rawType === "object" && lastState !== null && lastState._id) lastId = lastState._id;
        } catch (e) { rawType = "error:" + e.message; }
        return { count: count, fingerprint: fingerprint, rawType: rawType, lastId: lastId };
    } catch (e) {
        return { count: 0, fingerprint: "", rawType: "outer-error", lastId: 0 };
    }
}

// ============================================
// Project State (v0.85f) — project-level cumulative state
// Single source of truth for totalStepsSoFar, totalWorkTime, lastSession
// ============================================

async function loadProjectState(projectFolder) {
    try {
        var entry = await projectFolder.getEntry("project_state.json");
        if (!entry) return null;
        var text = await entry.read({ format: formats.utf8 });
        var state = JSON.parse(text);
        log("INFO", "[projectState] loaded: steps=" + (state.totalStepsSoFar || 0) + " workTime=" + fmtWorkTime(state.totalWorkTime || 0));
        return state;
    } catch (e) { return null; }
}

async function saveProjectState(projectFolder, state) {
    try {
        var file = await projectFolder.createFile("project_state.json", { overwrite: true });
        state.updatedAt = new Date().toISOString();
        state.version = "0.87";
        await file.write(JSON.stringify(state, null, 2), { format: formats.utf8 });
    } catch (e) { logError("[projectState] save failed", e); }
}

// ============================================
// Export — imaging API
// ============================================

async function createFileInSession(name) {
    if (!currentSessionFolder) throw new Error("no session folder");
    try {
        return await currentSessionFolder.createFile(name, { overwrite: true });
    } catch (e) {
        if (e.message && e.message.indexOf("no such file") !== -1 && currentSessionFolder && currentSessionFolder.nativePath) {
            log("WARN", "[createFileInSession] stale entry, re-acquiring: " + currentSessionFolder.nativePath);
            var url = "file://" + encodeURI(currentSessionFolder.nativePath);
            currentSessionFolder = await fs.getEntryWithUrl(url);
            return await currentSessionFolder.createFile(name, { overwrite: true });
        }
        throw e;
    }
}

async function writeDraftMetadata(source) {
    if (!currentSessionFolder) {
        log("WARN", "[draft] skip write: no currentSessionFolder (" + source + ")");
        return false;
    }

    var sessionName = currentSessionFolder.name || "Session";
    var steps = currentSteps || [];
    var exported = 0;
    for (var i = 0; i < steps.length; i++) {
        if (steps[i] && steps[i].snapshot) exported++;
    }

    var draftMeta = {
        version: "0.87",
        plugin: "Arttrace UXP v0.90",
        session: sessionName,
        created: new Date().toISOString(),
        stepCount: steps.length,
        exportedSteps: exported,
        totalStepsSoFar: globalStepOffset + steps.length,
        targetSize: TARGET_SIZE,
        format: "JPEG",
        videoConfig: { fps: VIDEO_FPS, format: VIDEO_FORMAT, quality: VIDEO_QUALITY },
        statistics: {
            steps: steps.length,
            totalDuration: 0,
            averageInterval: 0,
            totalWorkTime: currentWorkTime,
            partWorkTime: Math.max(0, currentWorkTime - sessionStartWorkTime)
        },
        complete: false,
        note: "Recording in progress. This is a draft metadata.",
        steps: steps.map(function(s, idx) {
            s = s || {};
            return {
                index: idx + globalStepOffset,
                time: typeof s.time === "number" ? s.time : Date.now(),
                snapshot: s.snapshot || "",
                name: s.name || ("Step " + (idx + 1)),
                tool: s.tool || "unknown"
            };
        })
    };

    try {
        var text = JSON.stringify(draftMeta, null, 2);
        log("INFO", "[draft] writing metadata_draft.json from " + source + " for " + sessionName + " bytes=" + text.length);
        var draftFile = await createFileInSession("metadata_draft.json");
        await draftFile.write(text, { format: formats.utf8 });

        try {
            var check = await currentSessionFolder.getEntry("metadata_draft.json");
            if (check && !check.isFolder) {
                log("INFO", "[draft] verified metadata_draft.json for " + sessionName);
            } else {
                log("WARN", "[draft] write resolved but verify returned no file for " + sessionName);
            }
        } catch (verifyErr) {
            log("WARN", "[draft] write resolved but verify failed for " + sessionName + ": " + (verifyErr.message || verifyErr));
        }
        return true;
    } catch (e) {
        logError("[draft] metadata_draft.json write failed from " + source, e);
        return false;
    }
}

async function getFileInSession(name) {
    if (!currentSessionFolder) throw new Error("no session folder");
    try {
        return await currentSessionFolder.getEntry(name);
    } catch (e) {
        if (e.message && e.message.indexOf("no such file") !== -1 && currentSessionFolder && currentSessionFolder.nativePath) {
            log("WARN", "[getFileInSession] stale entry, re-acquiring: " + currentSessionFolder.nativePath);
            var url = "file://" + encodeURI(currentSessionFolder.nativePath);
            currentSessionFolder = await fs.getEntryWithUrl(url);
            return await currentSessionFolder.getEntry(name);
        }
        throw e;
    }
}

async function exportSnapshot(tool, snapIndex, targetFolder, customFilename) {
    var folder = targetFolder || currentSessionFolder;
    if (!folder || !imaging || !core) return null;
    var filename = customFilename || ("snap_" + getToolPrefix(tool) + "_" + padNum(snapIndex) + ".jpg");
    var doc = ps.app.activeDocument;
    var tw, th, imgData;
    
    try {
        // v0.85d: preserve original aspect ratio, limit short edge to TARGET_SIZE
        // Industry standard: 1080p means short edge = 1080 (e.g. 1920x1080)
        var origW = doc.width, origH = doc.height;
        var getPixelsOpts = { documentID: doc.id };
        if (TARGET_SIZE > 0) {
            var scale = TARGET_SIZE / Math.min(origW, origH);
            tw = Math.max(1, Math.round(origW * scale));
            th = Math.max(1, Math.round(origH * scale));
            getPixelsOpts.targetSize = { width: tw, height: th };
        }
        var outW = tw || origW;
        var outH = th || origH;
        
        // 1. 极简 Modal：只做获取像素
        var modalT0 = Date.now();
        await core.executeAsModal(async function() {
            var pix = await imaging.getPixels(getPixelsOpts);
            imgData = pix.imageData;
        }, { commandName: "Capture " + filename, interactive: true });
        var modalTime = Date.now() - modalT0;
        
        // 2. 呼吸帧：让出主线程，让 setInterval/setTimeout 趁机刷新
        await new Promise(function(resolve) { setTimeout(resolve, 15); });
        
        // 3. 优先原生编码 (modal 外，不阻塞 PS UI)
        var jpegBytes = null;
        var encodeT0 = Date.now();
        try {
            jpegBytes = await imaging.encodeImageData({ imageData: imgData, base64: false });
        } catch (encodeErr) {
            // 4. 原生失败（含透明通道），fallback 到 jpeg-js
            log("WARN", "[exportSnapshot] native encode failed, fallback to jpeg-js: " + (encodeErr.message || encodeErr));
            var rawData = imgData.getData ? await imgData.getData() : null;
            var pixelCount = (imgData.width || 0) * (imgData.height || 0);
            var components = imgData.components || 0;
            
            var rgbaData = (rawData instanceof Uint8Array) ? rawData : new Uint8Array(rawData);
            
            // v0.84: handle RGBA (4-ch) vs RGB (3-ch) data from getPixels
            if (components === 4 && rgbaData) {
                var bgR = 255, bgG = 255, bgB = 255;
                for (var i = 0; i < pixelCount; i++) {
                    var si = i * 4;
                    var a = rgbaData[si + 3] / 255;
                    rgbaData[si]     = Math.round(rgbaData[si]     * a + bgR * (1 - a));
                    rgbaData[si + 1] = Math.round(rgbaData[si + 1] * a + bgG * (1 - a));
                    rgbaData[si + 2] = Math.round(rgbaData[si + 2] * a + bgB * (1 - a));
                    rgbaData[si + 3] = 255;
                }
            } else if (components === 3 && rgbaData) {
                var rgbData = rgbaData;
                rgbaData = new Uint8Array(pixelCount * 4);
                for (var i = 0; i < pixelCount; i++) {
                    rgbaData[i * 4]     = rgbData[i * 3];
                    rgbaData[i * 4 + 1] = rgbData[i * 3 + 1];
                    rgbaData[i * 4 + 2] = rgbData[i * 3 + 2];
                    rgbaData[i * 4 + 3] = 255;
                }
            }
            
            if (jpegEncoder) {
                var encFn = (typeof jpegEncoder === 'function') ? jpegEncoder : jpegEncoder.encode;
                var encoded = encFn({ data: rgbaData, width: imgData.width || outW, height: imgData.height || outH }, 75);
                jpegBytes = encoded.data;
            } else {
                throw new Error("jpeg-js encoder not available");
            }
        }
        
        var encodeTime = Date.now() - encodeT0;
        if (!jpegBytes || (!jpegBytes.length && !jpegBytes.byteLength)) return null;
        var file = await folder.createFile(filename, { overwrite: true });
        await file.write(jpegBytes, { format: formats.binary });
        // Phase 1.8: record exported size for replay aspect ratio (only for session steps)
        if (!targetFolder) {
            var stepIdx = snapIndex - 1;
            if (currentSteps[stepIdx]) currentSteps[stepIdx].size = { w: imgData.width || outW, h: imgData.height || outH };
        }
        log("INFO", "EXPORT OK " + filename + " " + (imgData.width || outW) + "x" + (imgData.height || outH) + " modal=" + modalTime + "ms encode=" + encodeTime + "ms size=" + jpegBytes.length + "b");
        return filename;
    } catch (e) {
        var errMsg = e.message || "";
        // v0.84: detect modal state (e.g. editing Smart Object) — temporary, retry later
        if (errMsg.indexOf("modal state") !== -1 || errMsg.indexOf("Modal") !== -1) {
            log("WARN", "EXPORT MODAL " + filename + " — host is in a modal state, will retry");
            return "MODAL";
        }
        logError("EXPORT FAIL " + filename + " folder=" + (folder ? folder.nativePath : "null"), e);
        return null;
    }
}

var snapshotLastClick = 0;

async function exportSnapshotQuick() {
    console.log("[exportSnapshotQuick] called");
    var now = Date.now();
    if (now - snapshotLastClick < 1000) {
        showToast(t("pleaseWait"));
        return;
    }
    snapshotLastClick = now;
    if (!imaging || !core) {
        showToast(t("apiNotAvailable"));
        return;
    }
    var doc = ps.app.activeDocument;
    if (!doc) {
        showToast(t("openDocFirst"));
        return;
    }
    // Ensure snapshot folder is set
    if (!snapshotFolderEntry) {
        try {
            var folder = await fs.getFolder();
            if (!folder) {
                showToast(t("noFolder"));
                return;
            }
            snapshotFolderEntry = folder;
            snapshotFolderPath = folder.nativePath.replace(/\\/g, "/");
            saveSettings();
            if (snapshotPathDisplay) snapshotPathDisplay.textContent = snapshotFolderPath;
        } catch (e) {
            showToast(t("folderSelectFailed"));
            return;
        }
    }
    var tool = getCurrentTool();
    var d = new Date();
    var pad = function(n) { return n < 10 ? "0" + n : n; };
    var ts = d.getFullYear() + "" + pad(d.getMonth()+1) + pad(d.getDate()) + "_" + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
    var safeTitle = (doc.title || "Untitled").replace(/\.psd$/i, "").replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, "_");
    var ext = SNAPSHOT_FORMAT === "png" ? "png" : "jpg";
    var customFilename = safeTitle + "_snapshot_" + ts + "." + ext;
    console.log("[exportSnapshotQuick] tool=" + tool + " format=" + SNAPSHOT_FORMAT + " filename=" + customFilename);
    try {
        if (SNAPSHOT_FORMAT === "png") {
            // v0.85: use batchPlay native PNG export (v0.2 proven approach)
            try {
                var pngFile = await snapshotFolderEntry.createFile(customFilename, { overwrite: true });
                var token = fs.createSessionToken(pngFile);
                await core.executeAsModal(async function() {
                    await batchPlay([{
                        _obj: "save",
                        as: { _obj: "PNGFormat", interlaced: false },
                        in: { _path: token },
                        copy: true,
                        _options: { dialogOptions: "dontDisplay" }
                    }], {});
                }, { commandName: "Save " + customFilename, interactive: true });
                showToast("Snapshot saved: " + customFilename);
                log("INFO", "[exportSnapshotQuick] PNG saved " + customFilename + " to " + snapshotFolderPath);
            } catch (e) {
                logError("[exportSnapshotQuick] PNG export failed", e);
                showToast(t("snapshotError"));
            }
        } else {
            var filename = await exportSnapshot(tool, 0, snapshotFolderEntry, customFilename);
            console.log("[exportSnapshotQuick] exportSnapshot returned: " + filename);
            if (filename && filename !== "MODAL") {
                showToast("Snapshot saved: " + filename);
                log("INFO", "[exportSnapshotQuick] saved " + filename + " to " + snapshotFolderPath);
            } else if (filename === "MODAL") {
                showToast(t("psBusy"));
            } else {
                showToast(t("snapshotFailed"));
            }
        }
    } catch (e) {
        showToast(t("snapshotError"));
        logError("[exportSnapshotQuick] failed", e);
    }
}

// ============================================
// UI Helpers
// ============================================

function setStatus(text, type) {
    if (!statusText) return;
    statusText.textContent = text;
    statusText.className = "status-text " + type;
    if (type === "recording") {
        if (recordingPulse) { recordingPulse.style.display = "block"; recordingPulse.className = "status-dot recording"; }
        if (toolBadge) toolBadge.style.display = "flex";
        document.body.classList.add("recording-mode");
        document.body.classList.remove("paused-mode");
    } else if (type === "paused") {
        if (recordingPulse) { recordingPulse.style.display = "none"; recordingPulse.className = "status-dot"; }
        if (toolBadge) toolBadge.style.display = "flex";
        document.body.classList.add("paused-mode");
        document.body.classList.remove("recording-mode");
    } else {
        if (recordingPulse) { recordingPulse.style.display = "none"; recordingPulse.className = "status-dot"; }
        if (toolBadge) toolBadge.style.display = "none";
        document.body.classList.remove("recording-mode");
        document.body.classList.remove("paused-mode");
    }
}

function fmt(ms) {
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    s = s % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}

function addTimelineItem(stepNum, timestamp, tool, hasSnapshot, skipScroll) {
    var item = document.createElement("div");
    item.className = "timeline-item";
    var ic = tool === "brush" ? "brush" : tool === "eraser" ? "eraser" : "unknown";
    var d = new Date(timestamp);
    var mo = d.getMonth() + 1;
    var da = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    var dateStr = mo + "/" + da;
    var timeStr = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
    var snapMark = hasSnapshot ? '<span class="timeline-snap">📷</span>' : '';
    item.innerHTML = '<div class="timeline-rhythm ' + ic + '"></div>' +
        '<div class="timeline-info">' +
        '<span class="timeline-step">#' + stepNum + '</span>' +
        '<span class="timeline-time">' + timeStr + '</span>' +
        '<span class="timeline-date">' + dateStr + '</span>' +
        snapMark + '</div>';

    if (hasSnapshot && currentSessionFolder && arttraceTooltip) {
        var snapFilename = "snap_" + getToolPrefix(tool) + "_" + padNum(stepNum) + ".jpg";
        var tipText = t("snapshotTooltipPrefix") + snapFilename + "\n" + currentSessionFolder.nativePath;
        var tooltipTimer = null;
        item.addEventListener("mouseenter", function(e) {
            tooltipTimer = setTimeout(function() {
                arttraceTooltip.textContent = tipText;
                arttraceTooltip.style.display = "block";
                var rect = item.getBoundingClientRect();
                arttraceTooltip.style.left = rect.left + "px";
                arttraceTooltip.style.top = (rect.bottom + 4) + "px";
            }, 500);
        });
        item.addEventListener("mouseleave", function() {
            if (tooltipTimer) { clearTimeout(tooltipTimer); tooltipTimer = null; }
            arttraceTooltip.style.display = "none";
        });
    }
    timeline.insertBefore(item, timeline.firstChild);
    if (!skipScroll) timeline.scrollTop = 0;
}

var WORK_THRESHOLD = 30000; // 30 seconds: steps within this interval count as continuous work

function updateWorkTime() {
    // Called on every new stroke: reset activity timestamp
    var now = Date.now();
    var prevIdle = lastActiveTime > 0 ? now - lastActiveTime : Infinity;
    if (prevIdle >= WORK_THRESHOLD) {
        // First stroke after start/resume, or came back from rest:
        // reset checkpoint so idle time is NOT counted
        timerCheckpoint = now;
    }
    lastActiveTime = now;
    updateStats();
}

function startWorkTimeTimer() {
    if (workTimeTimer) clearTimeout(workTimeTimer);
    timerCheckpoint = Date.now();
    var lastTick = Date.now();
    
    function tick() {
        if (recordingState !== "recording") return;
        var now = Date.now();
        var actualInterval = now - lastTick;
        lastTick = now;
        if (actualInterval > 1500) {
            console.log("[workTime] tick delayed by " + actualInterval + "ms");
        }
        if (lastActiveTime > 0) {
            var idle = now - lastActiveTime;
            if (idle < WORK_THRESHOLD) {
                var delta = now - timerCheckpoint;
                if (delta > 1500) {
                    console.log("[workTime] capping delta: " + delta + "ms -> 1500ms");
                    delta = 1500;
                }
                currentWorkTime += delta;
            }
            timerCheckpoint = now;
        }
        updateStats();
        workTimeTimer = setTimeout(tick, 1000);
    }
    
    workTimeTimer = setTimeout(tick, 1000);
}

function stopWorkTimeTimer() {
    if (workTimeTimer) {
        clearTimeout(workTimeTimer);
        workTimeTimer = null;
    }
}

function fmtWorkTime(ms) {
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    s = s % 60;
    m = m % 60;
    return h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}

function updateStats() {
    var totalSteps = globalStepOffset + currentSteps.length;
    var stepsStr = String(totalSteps);
    if (statSteps && statSteps.textContent !== stepsStr) statSteps.textContent = stepsStr;
    var statTimeEl = document.getElementById("statTime");
    var statRestEl = document.getElementById("statRest");
    if (statTimeEl) {
        var now = Date.now();
        var idle = lastActiveTime > 0 ? now - lastActiveTime : Infinity;
        var displayTime = currentWorkTime;
        if (idle < WORK_THRESHOLD && lastActiveTime > 0) {
            displayTime += now - timerCheckpoint;
        }
        var timeStr, restStr;
        if (idle >= WORK_THRESHOLD && currentWorkTime > 0) {
            timeStr = fmtWorkTime(currentWorkTime);
            restStr = " " + t("restLabel");
        } else {
            timeStr = fmtWorkTime(displayTime);
            restStr = "";
        }
        if (statTimeEl.textContent !== timeStr) statTimeEl.textContent = timeStr;
        if (statRestEl && statRestEl.textContent !== restStr) statRestEl.textContent = restStr;
    }
}

function showProgress(label, pct, type) {
    if (!progressRow) return;
    progressRow.classList.add("visible");
    if (progressLabel) progressLabel.textContent = label;
    if (progressPct) progressPct.textContent = pct + "%";
    if (progressFill) { progressFill.style.width = pct + "%"; progressFill.className = "progress-fill " + (type || ""); }
}

function hideProgress() {
    if (progressRow) progressRow.classList.remove("visible");
}

function padNum(n) {
    return (n < 100 ? "0" : "") + (n < 10 ? "0" : "") + n;
}

function sleep(ms) {
    return new Promise(function(r) { setTimeout(r, ms); });
}

function initTimeline() {
    // v0.79: timeline is built dynamically during capture
}

// ============================================
// Capture
// ============================================

var hasUnexportedChange = false;
var hasAutoDowngraded = false;

// v0.79: snapshot sampling decision
function shouldTakeSnapshot(stepIndex, now) {
    var rules = {
        high:   { timeMin: 0,    stepMin: 1 },
        medium: { timeMin: 2000, stepMin: 3 },
        low:    { timeMin: 5000, stepMin: 5 }
    };
    var r = rules[SNAPSHOT_DENSITY] || rules.high;
    var timeSince = now - lastSnapshotTime;
    var stepsSince = stepIndex - lastSnapshotStepIndex;
    // First snapshot always
    if (lastSnapshotStepIndex < 0) return true;
    // High density: every step
    if (r.stepMin <= 1) return true;
    // Time threshold met AND at least 1 step since last
    if (timeSince >= r.timeMin && stepsSince >= 1) return true;
    // Step threshold met
    if (stepsSince >= r.stepMin) return true;
    return false;
}

async function handleDocumentSaveAs(newFilePath, newDocTitle) {
    if (!currentParentFolder) {
        log("WARN", "[saveAs] currentParentFolder is null, cannot rename");
        return;
    }
    if (!outputFolderEntry && outputFolderPath) {
        try {
            outputFolderEntry = await resolveFolderFromPath(outputFolderPath);
            if (outputFolderEntry) {
                log("INFO", "[saveAs] recovered outputFolderEntry from outputFolderPath");
            }
        } catch (oe) {
            log("WARN", "[saveAs] recover outputFolderEntry failed: " + (oe.message || oe));
        }
    }
    // v0.84: diagnose type — Entry objects survive in memory but may become stale across reloads
    var isEntry = !!(currentParentFolder && typeof currentParentFolder.rename === "function");
    log("INFO", "[saveAs] currentParentFolder type: " + (typeof currentParentFolder) + " isEntry=" + isEntry + " name=" + (currentParentFolder.name || "?"));

    var newName = projectNameFromSaveTarget(newFilePath, newDocTitle);
    if (!newName || newName === currentParentFolder.name) {
        log("INFO", "[saveAs] name unchanged or empty, skip rename");
        return;
    }

    log("INFO", "[saveAs] renaming folder '" + currentParentFolder.name + "' -> '" + newName + "'");

    // v0.84: try re-acquiring via authorized parent folder Entry first (same auth chain)
    if (!isEntry && outputFolderEntry && currentParentFolder && currentParentFolder.name) {
        log("INFO", "[saveAs] Entry stale, trying parentFolder.getEntry('" + currentParentFolder.name + "')");
        try {
            var recovered = await outputFolderEntry.getEntry(currentParentFolder.name);
            if (recovered && recovered.isFolder) {
                currentParentFolder = recovered;
                isEntry = true;
                log("INFO", "[saveAs] recovered Entry via parentFolder.getEntry");
            }
        } catch (e) {
            log("WARN", "[saveAs] parentFolder.getEntry failed: " + e.message);
        }
    }
    // Fallback: string path anchor
    if (!isEntry && currentParentFolderPath) {
        log("INFO", "[saveAs] Entry stale, re-acquiring via saved path: " + currentParentFolderPath);
        try {
            var recovered2 = await fs.getEntryWithUrl("file://" + encodeURI(currentParentFolderPath));
            if (recovered2 && recovered2.isFolder) {
                currentParentFolder = recovered2;
                isEntry = true;
                log("INFO", "[saveAs] recovered Entry from currentParentFolderPath");
            }
        } catch (e) {
            log("WARN", "[saveAs] recovery via currentParentFolderPath failed: " + e.message);
        }
    }

    // v0.84: THREE AI CONSENSUS — rename() is a "ghost method" on UXP macOS.
    // Real methods are: parentFolder.renameEntry(entry, newName) OR entry.moveTo(parent, { newName })
    var renameSuccess = false;

    // Strategy 1: parentFolder.renameEntry(entry, newName) — Gemini's standard UXP method
    if (!renameSuccess && outputFolderEntry && currentParentFolder) {
        log("INFO", "[saveAs] trying outputFolderEntry.renameEntry(...)");
        try {
            if (typeof outputFolderEntry.renameEntry === "function") {
                await outputFolderEntry.renameEntry(currentParentFolder, newName);
                renameSuccess = true;
                log("INFO", "[saveAs] renameEntry() succeeded");
            } else {
                log("INFO", "[saveAs] renameEntry is not a function on outputFolderEntry");
            }
        } catch (e) {
            log("WARN", "[saveAs] renameEntry failed: " + (e.message || e));
        }
    }

    // Strategy 2: entry.moveTo(parent, { newName }) — DeepSeek's workaround
    if (!renameSuccess && currentParentFolder && outputFolderEntry) {
        log("INFO", "[saveAs] trying currentParentFolder.moveTo(outputFolderEntry, { newName })");
        try {
            if (typeof currentParentFolder.moveTo === "function") {
                await currentParentFolder.moveTo(outputFolderEntry, { newName: newName, overwrite: false });
                renameSuccess = true;
                log("INFO", "[saveAs] moveTo() succeeded");
            } else {
                log("INFO", "[saveAs] moveTo is not a function on currentParentFolder");
            }
        } catch (e) {
            log("WARN", "[saveAs] moveTo failed: " + (e.message || e));
        }
    }

    // Strategy 3: Legacy rename() (ghost method, unlikely to work)
    if (!renameSuccess && isEntry) {
        log("INFO", "[saveAs] trying legacy rename()");
        try {
            if (typeof currentParentFolder.rename === "function") {
                await currentParentFolder.rename(newName);
                renameSuccess = true;
                log("INFO", "[saveAs] legacy rename() succeeded");
            }
        } catch (e) {
            log("WARN", "[saveAs] legacy rename failed: " + (e.message || e));
        }
    }

    if (renameSuccess) {
        // Re-acquire the renamed entry so nativePath is fresh
        try {
            var renamedEntry = await outputFolderEntry.getEntry(newName);
            if (renamedEntry) {
                currentParentFolder = renamedEntry;
                currentParentFolderPath = renamedEntry.nativePath;
                log("INFO", "[saveAs] re-acquired renamed folder: " + renamedEntry.nativePath);
                // v0.84: parent folder renamed, session subfolder path changed — must re-acquire
                var sessName = currentSessionFolder ? currentSessionFolder.name : "Arttrace_0000-00-00_000000";
                try {
                    var renamedSess = await renamedEntry.getEntry(sessName);
                    if (renamedSess) {
                        currentSessionFolder = renamedSess;
                        log("INFO", "[saveAs] re-acquired session folder: " + renamedSess.nativePath);
                    }
                } catch (se) {
                    log("WARN", "[saveAs] could not re-acquire session folder after rename: " + se.message);
                }
                // Update UI path display
                if (folderPath) folderPath.textContent = newName + " / " + (currentSessionFolder ? currentSessionFolder.name : sessName);
                
                // v0.85: update projectMappings
                try {
                    var oldDocKey = lastFilePath ? "saved_" + lastFilePath : "";
                    var unsavedKey = activeDocId ? "unsaved_" + activeDocId : (currentProjectDocId ? "unsaved_" + currentProjectDocId : "");
                    // v0.85f: when filePath is empty (UXP unreliable), use title_baseName as key
                    var newDocKey = newFilePath ? "saved_" + newFilePath : ("title_" + newName);
                    var mapping = null;
                    if (currentProjectMappingKey && projectMappings[currentProjectMappingKey]) {
                        mapping = projectMappings[currentProjectMappingKey];
                    } else if (oldDocKey && projectMappings[oldDocKey]) {
                        mapping = projectMappings[oldDocKey];
                    } else if (unsavedKey && projectMappings[unsavedKey]) {
                        mapping = projectMappings[unsavedKey];
                    } else {
                        // fallback: find by filePath or baseName
                        for (var key in projectMappings) {
                            if (projectMappings[key].filePath === newFilePath ||
                                projectMappings[key].filePath === lastFilePath ||
                                projectMappings[key].baseName === newName) {
                                mapping = projectMappings[key];
                                break;
                            }
                        }
                    }
                    if (mapping) {
                        mapping.folderName = newName;
                        mapping.baseName = newName;
                        if (newFilePath) mapping.filePath = newFilePath;
                        // Always migrate to new key
                        var oldKey = oldDocKey || unsavedKey || (function() {
                            for (var k in projectMappings) {
                                if (projectMappings[k] === mapping) return k;
                            }
                            return "";
                        })();
                        if (oldKey && oldKey !== newDocKey) {
                            delete projectMappings[oldKey];
                        }
                        projectMappings[newDocKey] = mapping;
                        currentProjectMappingKey = newDocKey;
                        try {
                            currentProjectDocId = ps && ps.app && ps.app.activeDocument ? ps.app.activeDocument.id : currentProjectDocId;
                        } catch (docErr) {}
                        log("INFO", "[saveAs] migrated mapping to " + newDocKey);
                        saveSettings();
                        log("INFO", "[saveAs] updated projectMappings folderName=" + newName + " baseName=" + newName);
                    }
                } catch (me) {
                    log("WARN", "[saveAs] update projectMappings failed: " + me.message);
                }

                // v0.85f: update project_state.json after Save As rename
                try {
                    var state = await loadProjectState(currentParentFolder);
                    if (!state) state = {};
                    state.projectName = newName;
                    state.baseName = newName;
                    if (newFilePath) state.filePath = newFilePath;
                    state.updatedAt = new Date().toISOString();
                    await saveProjectState(currentParentFolder, state);
                    log("INFO", "[saveAs] updated project_state.json projectName=" + newName);
                } catch (e) {
                    log("WARN", "[saveAs] update project_state.json failed: " + e.message);
                }
            }
        } catch (e) {
            log("WARN", "[saveAs] could not re-acquire renamed folder: " + e.message);
        }
    } else {
        // Final fallback: create new project folder + migrate
        log("WARN", "[saveAs] all rename strategies failed, creating new folder: " + newName);
        try {
            var newFolder = await outputFolderEntry.createFolder(newName);
            if (newFolder) {
                var oldParentName = currentParentFolder ? currentParentFolder.name : "";
                var oldSessName = currentSessionFolder ? currentSessionFolder.name : "Session_001";
                currentParentFolder = newFolder;
                currentParentFolderPath = newFolder.nativePath;
                log("INFO", "[saveAs] created new project folder: " + newFolder.nativePath);
                try {
                    var newSessFolder = await newFolder.createFolder(oldSessName);
                    currentSessionFolder = newSessFolder;
                    log("INFO", "[saveAs] created session folder in new project: " + newSessFolder.nativePath);
                } catch (se) {
                    log("WARN", "[saveAs] could not create session folder: " + se.message);
                }
                // Update UI path display for fallback too
                if (folderPath) folderPath.textContent = newName + " / " + (currentSessionFolder ? currentSessionFolder.name : oldSessName);
            }
        } catch (e2) {
            log("WARN", "[saveAs] create new folder failed: " + e2.message);
        }
    }
}

async function handleDocumentClose() {
    var closingDocId = activeDocId;
    if (recordingState === "recording" || recordingState === "paused") {
        log("INFO", "[docClose] auto-finishing session for doc " + closingDocId);
        if (closingDocId) {
            docStates[closingDocId] = packState();
        }
        await finishRecording();
    }
    // v0.87: clean up unsaved mapping when document is closed
    var unsavedKey = "unsaved_" + closingDocId;
    if (projectMappings[unsavedKey]) {
        delete projectMappings[unsavedKey];
        log("INFO", "[docClose] cleaned up unsaved mapping " + unsavedKey);
    }
}

async function capture() {
    var captureT0 = Date.now();
    if (!ps || !ps.app.activeDocument) {
        await handleDocumentClose();
        return;
    }
    var doc = ps.app.activeDocument;
    var docId = doc ? doc.id : 0;

    // v0.84: detect Save-As by comparing filePath / title
    // v0.88: this must run even after Finish. Users often record an untitled
    // document, finish the recording, then Save As; the project folder still
    // needs to be renamed from Untitled_* to the saved document name.
    var currentFilePath = doc.filePath || "";
    var currentDocTitle = doc.title || "";
    // DIAGNOSE: log filePath comparison every tick for visibility
    if (lastFilePath !== currentFilePath || lastDocTitle !== currentDocTitle) {
        log("INFO", "[capture] filePath change detected: lastFp='" + lastFilePath + "' -> currFp='" + currentFilePath + "' lastTitle='" + lastDocTitle + "' -> currTitle='" + currentDocTitle + "'");
    }
    // v0.84: Primary detection via filePath change; fallback via title change with .psd extension
    // because doc.filePath can remain empty even after Save As on some PS builds
    var isSaveAs = false;
    if (lastFilePath === "" && currentFilePath !== "") {
        isSaveAs = true; // Untitled -> Saved
    } else if (lastFilePath !== "" && currentFilePath !== lastFilePath) {
        isSaveAs = true; // Saved -> Saved As
    } else if (lastFilePath === "" && currentFilePath === "" && lastDocTitle !== currentDocTitle && /\.(psd|psb|psdt)$/i.test(currentDocTitle)) {
        isSaveAs = true; // Untitled/saved -> Save As (filePath not available, title changed to Photoshop file)
    } else if (lastFilePath === "" && currentFilePath === "" && lastDocTitle !== currentDocTitle && currentParentFolder) {
        // Some PS/UXP builds expose a Save As only as a title change, and the
        // title may not include ".psd". Treat project folder name -> real title
        // changes as Save As, including Untitled_* and saved-project renames.
        var titleName = projectNameFromSaveTarget("", currentDocTitle);
        if (titleName && titleName !== currentParentFolder.name &&
            !looksLikeUntitledProjectName(titleName)) {
            isSaveAs = true;
        }
    }
    if (isSaveAs) {
        if (currentParentFolder) {
            log("INFO", "[capture] SAVE-AS TRIGGERED (filePath=" + (currentFilePath || "(empty)") + "), calling handleDocumentSaveAs");
            await handleDocumentSaveAs(currentFilePath, currentDocTitle);
        } else {
            log("INFO", "[capture] title/path changed but no active project folder; treating as document open baseline");
        }
    }
    lastFilePath = currentFilePath;
    lastDocTitle = currentDocTitle;

    // v0.84: document switch detection. Save As can churn doc.id on some PS
    // builds, so Save-As handling must happen before this branch.
    if (activeDocId !== docId) {
        await onDocumentSwitch(docId);
        return;
    }

    if (recordingState !== "recording") return;
    var info = getHistoryStateInfo();
    var count = info.count;
    var fingerprint = info.fingerprint;
    if (count === 0) return;

    var captureElapsed = Date.now() - captureT0;
    if (captureElapsed > 100) {
        console.log("[capture] SLOW getHistoryStateInfo: " + captureElapsed + "ms count=" + count);
    }
    console.log("HIST type=" + info.rawType + " count=" + count + " fp=" + fingerprint.substring(0,60) + " lastHist=" + lastHistoryCount + " lastFp=" + lastFingerprint.substring(0,60));

    var detectedTool = getCurrentTool();
    var newFrames = 0;
    if (count > lastHistoryCount) newFrames = count - lastHistoryCount;
    // v0.85: if currentTool API returns unknown, fallback to history name detection
    if (detectedTool === "unknown" && newFrames > 0) {
        try {
            var histName = await getLastHistoryNameBP();
            detectedTool = detectToolFromHistoryName(histName);
            if (detectedTool !== "unknown") {
                log("INFO", "[capture] tool detected from history name: '" + histName + "' -> " + detectedTool);
            }
        } catch (e) {}
    }
    else if (count === lastHistoryCount && count > 0) {
        if (fingerprint && fingerprint !== lastFingerprint) {
            // v0.84: if we recently undid, a fingerprint-only change is likely a pseudo-redo or history stabilization
            if (lastUndoDelta > 0) {
                lastFingerprint = fingerprint;
                log("INFO", "[capture] fingerprint changed after undo, treating as no-op (undoDelta=" + lastUndoDelta + ")");
                return;
            }
            newFrames = 1;
            if (!atLimit && detectedLimit === 0) {
                detectedLimit = count; atLimit = true;
                log("INFO", "LEARNED LIMIT: " + detectedLimit);
            }
        }
    } else if (count < lastHistoryCount) {
        handleUndo(count, fingerprint);
        return;
    }

    if (newFrames > 0) {
        // v0.84: detect redo (history count rising after a recent undo)
        var isRedo = lastUndoDelta > 0 && newFrames <= lastUndoDelta;
        if (isRedo) {
            lastUndoDelta -= newFrames;
            log("INFO", "[capture] REDO detected: " + newFrames + " frames, remaining undoDelta=" + lastUndoDelta);
            lastHistoryCount = count;
            if (fingerprint) lastFingerprint = fingerprint;
            return; // redo is just history restoration, do NOT push new steps
        }
        lastUndoDelta = 0;
        var now = Date.now();
        totalStrokes += newFrames;
        var anySnapshotNeeded = false;
        log("INFO", "[capture] detected " + newFrames + " new frames, history=" + lastHistoryCount + "->" + count + " tool=" + detectedTool);
        for (var i = 0; i < newFrames; i++) {
            snapCounter++;
            if (detectedTool === "brush") brushCount++;
            else if (detectedTool === "eraser") eraserCount++;

            var stepIndex = currentSteps.length;
            var needsSnapshot = shouldTakeSnapshot(stepIndex, now);
            if (needsSnapshot) {
                lastSnapshotTime = now;
                lastSnapshotStepIndex = stepIndex;
                anySnapshotNeeded = true;
            }

            currentSteps.push({
                time: now,
                historyCount: lastHistoryCount + i + 1,
                name: "Step " + snapCounter,
                tool: detectedTool,
                snapshot: null,
                needsSnapshot: needsSnapshot
            });

            // v0.79: add timeline item for EACH stroke
            var elapsed = currentSteps.length > 1 ? now - currentSteps[0].time : 0;
            addTimelineItem(currentSteps.length, now, detectedTool, needsSnapshot);
        }
        lastHistoryCount = count;
        if (fingerprint) lastFingerprint = fingerprint;
        if (anySnapshotNeeded) hasUnexportedChange = true;

        var totalSteps = globalStepOffset + currentSteps.length;
        console.log("[STEP_DISPLAY] globalStepOffset=" + globalStepOffset + " currentSteps=" + currentSteps.length + " totalSteps=" + totalSteps);
        if (stepCount) stepCount.textContent = totalSteps;
        if (currentSection) currentSection.classList.add("visible");
        if (statsRow) statsRow.classList.add("visible");
        updateToolBadge();
        if (infoText) infoText.textContent = t("infoRecording", { n: currentSessionFolder ? currentSessionFolder.name : "Session", f: totalSteps });
        updateWorkTime();
    } else {
        if (fingerprint && fingerprint !== lastFingerprint) lastFingerprint = fingerprint;
    }
}

// ============================================
// Auto-save meta (crash recovery)
// ============================================

async function autoSaveMeta() {
    if (!currentSessionFolder || currentSteps.length === 0) return;
    try {
        // v0.84: use activeDocId instead of ps.app.activeDocument to avoid writing wrong docId
        // during document switch (exportTick may still be running while activeDoc has changed)
        var docState = docStates[activeDocId];
        var meta = {
            version: "0.80",
            recordingState: recordingState,
            sessionName: currentSessionFolder.name,
            folderPath: currentSessionFolder.nativePath,
            stepsSoFar: currentSteps.length,
            lastFingerprint: lastFingerprint,
            lastHistoryCount: lastHistoryCount,
            targetSize: TARGET_SIZE,
            detectMs: DETECT_MS,
            snapshotDensity: SNAPSHOT_DENSITY,
            __autoPaused: __autoPaused,
            timestamp: Date.now(),
            docId: activeDocId,
            filePath: docState ? docState.__docFilePath : ""
        };
        var file = await createFileInSession("autosave_meta.json");
        await file.write(JSON.stringify(meta), { format: formats.utf8 });
    } catch (e) { logError("autoSaveMeta failed", e); }
}

async function tryRecoverSession() {
    if (!outputFolderPath) return;
    try {
        var rootFolder = await resolveFolderFromPath(outputFolderPath);
        if (!rootFolder || !rootFolder.isFolder) return;
        var candidates = [];
        // v0.85c: prefer scanning project folders from projectMappings
        var currentDocInfo = null;
        try { currentDocInfo = getProjectName(); } catch (e) {}
        if (currentDocInfo) {
            var docKey = getDocKey(currentDocInfo);
            var mapping = projectMappings[docKey];
            // For saved files: also check filePath match across all mappings
            if (!mapping && currentDocInfo.filePath) {
                for (var key in projectMappings) {
                    if (projectMappings[key].filePath === currentDocInfo.filePath) {
                        mapping = projectMappings[key];
                        break;
                    }
                }
            }
            if (mapping && mapping.folderName) {
                try {
                    var projectFolder = await rootFolder.getEntry(mapping.folderName);
                    if (projectFolder && projectFolder.isFolder) {
                        var subEntries = await projectFolder.getEntries();
                        for (var j = 0; j < subEntries.length; j++) {
                            var sub = subEntries[j];
                            if (!sub.isFolder || !isSessionFolderName(sub.name)) continue;
                            try {
                                var mf = await sub.getEntry("autosave_meta.json");
                                if (!mf) continue;
                                var text = await mf.read({ format: formats.utf8 });
                                var meta = JSON.parse(text);
                                if (meta.recordingState === "recording" || meta.recordingState === "paused") {
                                    candidates.push({ meta: meta, folder: sub, project: projectFolder.name, projectFolder: projectFolder });
                                }
                            } catch (e) {}
                        }
                    }
                } catch (e) {}
            }
        }
        // Fallback: scan all project folders if no candidates found by name
        if (candidates.length === 0) {
            var entries = await rootFolder.getEntries();
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                if (!entry.isFolder) continue;
                var subEntries = await entry.getEntries();
                for (var j = 0; j < subEntries.length; j++) {
                    var sub = subEntries[j];
                    if (!sub.isFolder || !isSessionFolderName(sub.name)) continue;
                    try {
                        var mf = await sub.getEntry("autosave_meta.json");
                        if (!mf) continue;
                        var text = await mf.read({ format: formats.utf8 });
                        var meta = JSON.parse(text);
                        if (meta.recordingState === "recording" || meta.recordingState === "paused") {
                            candidates.push({ meta: meta, folder: sub, project: entry.name, projectFolder: entry });
                        }
                    } catch (e) {}
                }
                if (isSessionFolderName(entry.name)) {
                    try {
                        var mf2 = await entry.getEntry("autosave_meta.json");
                        if (!mf2) continue;
                        var text2 = await mf2.read({ format: formats.utf8 });
                        var meta2 = JSON.parse(text2);
                        if (meta2.recordingState === "recording" || meta2.recordingState === "paused") {
                            candidates.push({ meta: meta2, folder: entry, project: "", projectFolder: rootFolder });
                        }
                    } catch (e) {}
                }
            }
        }
        if (candidates.length === 0) return;
        // v0.84: prefer candidate matching current document (if any)
        var currentDoc = ps && ps.app ? ps.app.activeDocument : null;
        var currentFilePath = currentDoc && currentDoc.filePath ? currentDoc.filePath : "";
        var currentDocId = currentDoc ? currentDoc.id : 0;
        var best = null;
        for (var i = 0; i < candidates.length; i++) {
            var c = candidates[i];
            if (currentFilePath && c.meta.filePath === currentFilePath) {
                best = c;
                break;
            }
            if (currentDocId && c.meta.docId === currentDocId) {
                best = c;
                break;
            }
        }
        if (!best) {
            // Fallback: pick the most recent by timestamp
            candidates.sort(function(a, b) { return (b.meta.timestamp || 0) - (a.meta.timestamp || 0); });
            best = candidates[0];
        }
        var meta = best.meta;
        var msg = t("recoverPrompt", { project: best.project ? best.project + " / " : "", session: meta.sessionName, steps: meta.stepsSoFar });
        log("INFO", "[tryRecover] found " + (best.project ? best.project + "/" : "") + meta.sessionName + " steps=" + meta.stepsSoFar + " state=" + meta.recordingState);
        pendingRecovery = meta;
        pendingRecovery.__folder = best.folder;
        pendingRecovery.__project = best.project;
        pendingRecovery.__projectFolder = best.projectFolder;
        setStatus(msg, "paused");
    } catch (e) { log("INFO", "[tryRecover] no recovery needed: " + e.message); }
}

var pendingRecovery = null;

// ============================================
// Export tick — leisurely, no queue
// ============================================

async function exportTick() {
    if (!hasUnexportedChange) return;
    if (!currentSessionFolder) return;
    hasUnexportedChange = false;

    // v0.79: only export steps marked with needsSnapshot
    var exportedAny = false;
    var snapshotCount = 0;
    for (var i = 0; i < currentSteps.length; i++) {
        if (currentSteps[i].needsSnapshot && !currentSteps[i].snapshot) {
            var filename = await exportSnapshot(currentSteps[i].tool, i + 1);
            if (filename && filename !== "MODAL") {
                currentSteps[i].snapshot = filename;
                exportedAny = true;
                snapshotCount++;
                exportFailCount = 0; // reset on success
                log("INFO", "[exportTick] exported snapshot " + (i + 1) + " -> " + filename);
            } else {
                // v0.84: MODAL state — temporary, keep unexported flag for retry, do NOT count as failure
                hasUnexportedChange = true;
                if (filename !== "MODAL") {
                    exportFailCount++;
                    if (exportFailCount >= 3) {
                        logError("[exportTick] 3 consecutive export failures — pausing recording");
                        pauseRecording();
                        setStatus(t("exportFail3"), "paused");
                        return;
                    }
                }
            }
        }
    }
    if (!exportedAny && !hasUnexportedChange) return;

    // Count total snapshots once
    var totalSnapshots = 0;
    for (var j = 0; j < currentSteps.length; j++) {
        if (currentSteps[j].snapshot) totalSnapshots++;
    }

    // v0.84: auto-save meta after every export tick for crash recovery
    if (snapshotCount > 0) autoSaveMeta();

    // Phase 4.3: auto split session every 500 steps or 2 hours
    if (currentSteps.length >= 500 || (currentSteps.length > 0 && Date.now() - currentSteps[0].time > 7200000)) {
        await autoSplitSession();
        return;
    }
}

// ============================================
// Undo
// ============================================

function handleUndo(newCount, newFingerprint) {
    var originalLength = currentSteps.length;
    log("INFO", "UNDO: " + lastHistoryCount + " -> " + newCount + " (steps=" + originalLength + ")");
    var baseHistory = lastHistoryCount - currentSteps.length;
    var expectedFrames = Math.max(0, newCount - baseHistory);
    while (currentSteps.length > expectedFrames) {
        var removed = currentSteps.pop();
        snapCounter--;
        if (removed.tool === "brush") brushCount--;
        else if (removed.tool === "eraser") eraserCount--;
    }
    lastUndoDelta = originalLength - currentSteps.length;
    // v0.84: work time is NOT recalculated on undo — undo/redo are part of the work process
    // v0.79: recalculate snapshot tracking from remaining steps
    lastSnapshotStepIndex = -1;
    lastSnapshotTime = 0;
    for (var k = 0; k < currentSteps.length; k++) {
        if (currentSteps[k].needsSnapshot) {
            lastSnapshotStepIndex = k;
            lastSnapshotTime = currentSteps[k].time;
        }
    }
    // v0.84: reset timer baseline so undo doesn't make timer appear stopped
    lastActiveTime = Date.now();
    timerCheckpoint = Date.now();
    lastHistoryCount = newCount;
    if (newFingerprint) lastFingerprint = newFingerprint;

    // Update lightweight UI first (before expensive rebuildTimeline)
    var totalSteps = globalStepOffset + currentSteps.length;
    if (stepCount) stepCount.textContent = totalSteps;
    if (currentSection) currentSection.classList.toggle("visible", currentSteps.length > 0);
    if (statsRow) statsRow.classList.toggle("visible", currentSteps.length > 0);
    updateStats();
    if (infoText) infoText.textContent = t("infoRecording", { n: currentSessionFolder ? currentSessionFolder.name : "Session", f: totalSteps });
    if (currentSteps.length > 0) {
        updateToolBadge();
    }

    // Heavy DOM rebuild deferred slightly so the text updates paint first
    setTimeout(function() {
        rebuildTimeline();
    }, 0);

    setStatus(t("statusPaused") + " \u2014 " + currentSteps.length + " steps", "paused");
    setTimeout(function() {
        if (recordingState === "recording") {
            setStatus(t("statusRecording"), "recording");
            lastUndoDelta = 0; // clear undo delta once we're back to recording
        }
    }, 1500);
}

function rebuildTimeline() {
    timeline.innerHTML = "";
    if (currentSteps.length === 0) return;
    var baseTime = currentSteps[0].time;
    for (var i = 0; i < currentSteps.length; i++) {
        addTimelineItem(i + 1, currentSteps[i].time, currentSteps[i].tool, currentSteps[i].needsSnapshot, true);
    }
    timeline.scrollTop = 0;
}

// ============================================
// Recording Controls
// ============================================

async function startRecording() {
    clearPreviewGIF();
    if (detectInterval) { clearInterval(detectInterval); detectInterval = null; }
    if (exportInterval) { clearInterval(exportInterval); exportInterval = null; }
    // v0.7: resume from pending recovery
    if (pendingRecovery) {
        try {
            log("INFO", "[startRecording] resuming from recovery: " + pendingRecovery.sessionName);
            // Phase 1.6: use the directly recovered folder if available
            if (pendingRecovery.__folder) {
                try {
                    currentSessionFolder = pendingRecovery.__folder;
                    // Validate it's still alive
                    await currentSessionFolder.getEntries();
                    log("INFO", "[startRecording] recovered folder from scan: " + currentSessionFolder.nativePath);
                } catch (scanErr) {
                    log("WARN", "[startRecording] scanned folder stale, fallback to path: " + scanErr.message);
                    currentSessionFolder = null;
                }
            }
            // Fallback to original path
            if (!currentSessionFolder && pendingRecovery.folderPath) {
                try {
                    var url = "file://" + encodeURI(pendingRecovery.folderPath);
                    currentSessionFolder = await fs.getEntryWithUrl(url);
                    log("INFO", "[startRecording] recovered folder from path: " + pendingRecovery.folderPath);
                } catch (pathErr) {
                    log("WARN", "[startRecording] path recovery failed: " + pathErr.message);
                }
            }
            if (!currentSessionFolder) {
                var dataFolder = await fs.getDataFolder();
                currentSessionFolder = await dataFolder.getEntry(pendingRecovery.sessionName);
            }
            // Derive parent folder (project folder) from session folder path (needed for autoSplit)
            if (currentSessionFolder && currentSessionFolder.nativePath) {
                var parts = currentSessionFolder.nativePath.split("/");
                parts.pop(); // session name
                var parentPath = parts.join("/");
                try {
                    currentParentFolder = await fs.getEntryWithUrl("file://" + encodeURI(parentPath));
                } catch (pe) {
                    logError("[startRecording] could not recover parent folder", pe);
                    currentParentFolder = null;
                }
            }
            // v0.85f: restore globalStepOffset / currentWorkTime from project_state.json
            if (currentParentFolder) {
                try {
                    var recoveredState = await loadProjectState(currentParentFolder);
                    if (recoveredState) {
                        globalStepOffset = recoveredState.totalStepsSoFar || 0;
                        currentWorkTime = recoveredState.totalWorkTime || 0;
                        log("INFO", "[recovery] restored from project_state: steps=" + globalStepOffset + " workTime=" + fmtWorkTime(currentWorkTime));
                    } else {
                        globalStepOffset = 0;
                        currentWorkTime = 0;
                    }
                } catch (e) {
                    globalStepOffset = 0;
                    currentWorkTime = 0;
                }
            }

            // Rebuild currentSteps from disk scan
            var entries = await currentSessionFolder.getEntries();
            var snapEntries = entries.filter(function(e) { return e.name.startsWith("snap_") && e.name.endsWith(".jpg"); });
            snapEntries.sort(function(a, b) { return a.name.localeCompare(b.name); });
            currentSteps = snapEntries.map(function(e) {
                var parts = e.name.replace(".jpg", "").split("_");
                return {
                    time: Date.now(),
                    snapshot: e.name,
                    name: e.name,
                    tool: parts[1] || "unknown",
                    needsSnapshot: true
                };
            });
            lastSnapshotStepIndex = currentSteps.length - 1;
            lastSnapshotTime = Date.now();
            lastFingerprint = pendingRecovery.lastFingerprint || "";
            lastHistoryCount = pendingRecovery.lastHistoryCount || 0;
            // Phase 1.8: sync outputFolderPath from recovered session's root
            if (currentParentFolder && currentParentFolder.nativePath) {
                var pathParts = currentParentFolder.nativePath.split("/");
                pathParts.pop(); // remove project name, get root
                outputFolderPath = pathParts.join("/");
                saveSettings();
                log("INFO", "[recovery] synced outputFolderPath: " + outputFolderPath);
            }
            var recoveredName = pendingRecovery.sessionName;
            if (recoveredName.startsWith("Session_")) {
                sessionCounter = parseInt(recoveredName.replace("Session_", ""), 10) || 1;
            } else {
                sessionCounter = 1;
            }
            pendingRecovery = null;
            recordingState = "recording";
            // UI
            updatePrimaryActionButton();
            if (btnPause) btnPause.disabled = false;
            if (btnFinish) btnFinish.disabled = false;

            setStatus(t("statusRecording"), "recording");
            // v0.84: set active document
            var doc = ps.app.activeDocument;
            activeDocId = doc ? doc.id : 0;
            currentProjectDocId = activeDocId;
            lastFilePath = doc ? (doc.filePath || "") : "";
            lastDocTitle = doc ? (doc.title || "") : "";
            // Start polling
            var info = getHistoryStateInfo();
            lastHistoryCount = info.count;
            lastFingerprint = info.fingerprint || "";
            hasUnexportedChange = false;
            snapCounter = globalStepOffset;  // v0.85f: ensure snapCounter continues from restored offset
            await writeDraftMetadata("recovery");
            // v0.79: start separated detect + export loops
            detectInterval = setInterval(async function() {
                if (captureLock) return;
                captureLock = true;
                try { if (recordingState === "recording") await capture(); } finally { captureLock = false; }
            }, DETECT_MS);
            exportInterval = setInterval(async function() {
                if (exportLock) return;
                if (!hasUnexportedChange) return;
                exportLock = true;
                try { await exportTick(); } catch (e) { logError("[exportLoop] error after resume", e); }
                exportLock = false;
            }, Math.max(300, DETECT_MS));
            log("INFO", "=== RESUME FROM RECOVERY === frames=" + currentSteps.length);
            return;
        } catch (e) {
            logError("[startRecording] recovery failed", e);
            pendingRecovery = null;
        }
    }

    if (!ps || !ps.app.activeDocument) { setStatus(t("needDoc"), "paused"); return; }
    if (!imaging) { setStatus(t("noImaging"), "paused"); return; }

    // v0.84: save old document state before starting new recording
    var doc = ps.app.activeDocument;
    var newDocId = doc ? doc.id : 0;
    if (activeDocId && activeDocId !== newDocId) {
        if (recordingState === "recording") pauseRecording();
        docStates[activeDocId] = packState();
    }

    // Close settings overlay if open
    closeSettings();

    // Phase 1.8: folder memory. Same session: reuse Entry object directly.
    // Cross-session: Entry token expires; fall back to path-based recovery (best-effort).
    var parentFolder = lastRootFolder;
    if (!parentFolder && outputFolderPath) {
        try {
            parentFolder = await resolveFolderFromPath(outputFolderPath);
            if (!parentFolder || !parentFolder.isFolder) parentFolder = null;
            else lastRootFolder = parentFolder; // cache for remainder of session
        } catch (e) {
            logError("[startRecording] path recovery failed", e);
            parentFolder = null;
        }
    }
    if (!parentFolder) {
        try { parentFolder = await fs.getFolder(); } catch (e) { setStatus(t("cancelled"), "paused"); return; }
        if (!parentFolder) { setStatus(t("noFolder"), "paused"); return; }
        lastRootFolder = parentFolder;
        outputFolderPath = parentFolder.nativePath.replace(/\\/g, "/");
        outputFolderEntry = parentFolder;  // v0.84: save authorized parent folder Entry
        saveSettings();
    }

    var projectInfo = getProjectName();
    var docKey = getDocKey(projectInfo);
    // v0.87: truly unsaved docs use doc.id so new untitled docs don't collide.
    // v0.88: if UXP gives only a Photoshop title like "3332.psd", treat it as
    // saved-like and use title_3332 so reopening can find the same project folder.
    if (!projectInfo.filePath && !projectInfo.isSavedLikeTitle) {
        docKey = "unsaved_" + projectInfo.docId;
    }

    // v0.85c: find or create project mapping
    var mapping = projectMappings[docKey];
    if (!mapping && projectInfo.filePath) {
        for (var key in projectMappings) {
            if (projectMappings[key].filePath === projectInfo.filePath) {
                mapping = projectMappings[key];
                projectMappings[docKey] = mapping;
                log("INFO", "[startRecording] migrated mapping from " + key + " to " + docKey);
                break;
            }
        }
    }

    var projectFolder;
    if (mapping && mapping.folderName) {
        try {
            projectFolder = await parentFolder.getEntry(mapping.folderName);
            if (!projectFolder || !projectFolder.isFolder) mapping = null;
        } catch (e) { mapping = null; }
    }

    // v0.85f: if no mapping, try reusing existing folder with same baseName.
    // v0.87: truly unsaved docs always get a fresh folder.
    // v0.88: title-only saved docs (filePath empty, title ends with .psd/.psb/.psdt)
    // are allowed to reuse, because UXP often hides filePath after reopen.
    if (!mapping && (projectInfo.filePath || projectInfo.isSavedLikeTitle)) {
        try {
            var entries = await parentFolder.getEntries();
            for (var i = 0; i < entries.length; i++) {
                if (!entries[i].isFolder || entries[i].name !== projectInfo.baseName) continue;
                // Found existing folder with same name — verify by reading latest session metadata
                var subEntries = await entries[i].getEntries();
                for (var j = 0; j < subEntries.length; j++) {
                    if (!subEntries[j].isFolder || !isSessionFolderName(subEntries[j].name)) continue;
                    try {
                        var mf = await subEntries[j].getEntry("metadata.json");
                        if (!mf) continue;
                        var text = await mf.read({ format: formats.utf8 });
                        var meta = JSON.parse(text);
                        // Reuse this folder and create mapping
                        mapping = {
                            folderName: entries[i].name,
                            baseName: projectInfo.baseName,
                            filePath: projectInfo.filePath,
                            lastSession: meta.session || 0,
                            totalStepsSoFar: meta.totalStepsSoFar || 0,
                            totalWorkTime: meta.statistics ? (meta.statistics.totalDuration || 0) : 0
                        };
                        projectMappings[docKey] = mapping;
                        saveSettings();
                        log("INFO", "[startRecording] reused existing project folder: " + entries[i].name);
                        break;
                    } catch (e) {}
                }
                if (mapping) break;
            }
        } catch (e) {}
    }

    if (!mapping) {
        var folderName = await findUniqueFolderName(parentFolder, projectInfo.baseName);
        try { projectFolder = await ensureProjectFolder(parentFolder, folderName); }
        catch (e) { logError("Create project folder failed", e); setStatus(t("creatingFolder"), "paused"); return; }
        projectMappings[docKey] = {
            folderName: folderName,
            baseName: projectInfo.baseName,
            filePath: projectInfo.filePath,
            lastSession: 0
        };
        mapping = projectMappings[docKey];
        saveSettings();
    } else {
        projectFolder = await parentFolder.getEntry(mapping.folderName);
    }

    currentParentFolder = projectFolder;
    currentParentFolderPath = projectFolder && projectFolder.nativePath ? projectFolder.nativePath : "";
    currentProjectMappingKey = docKey;
    currentProjectDocId = newDocId;
    var projectName = mapping ? mapping.folderName : projectInfo.baseName;

    // v0.85f: load project-level cumulative state from project_state.json
    var projectState = await loadProjectState(projectFolder);
    if (projectState) {
        globalStepOffset = projectState.totalStepsSoFar || 0;
        currentWorkTime = projectState.totalWorkTime || 0;
        log("INFO", "[startRecording] restored from project_state: globalStepOffset=" + globalStepOffset + " workTime=" + fmtWorkTime(currentWorkTime));
    } else if (mapping) {
        // No project_state.json yet (legacy project or newly reused) — initialize from mapping
        globalStepOffset = mapping.totalStepsSoFar || 0;
        currentWorkTime = mapping.totalWorkTime || 0;
        await saveProjectState(projectFolder, {
            projectName: mapping.folderName,
            baseName: mapping.baseName,
            filePath: mapping.filePath || "",
            totalStepsSoFar: globalStepOffset,
            totalWorkTime: currentWorkTime,
            lastSession: mapping.lastSession || "",
            updatedAt: new Date().toISOString()
        });
        log("INFO", "[startRecording] initialized project_state.json from mapping: steps=" + globalStepOffset + " workTime=" + fmtWorkTime(currentWorkTime));
    } else {
        globalStepOffset = 0;
        currentWorkTime = 0;
    }

    // v0.85f: scan existing sessions to find latest, then continue with continuation naming
    var sessionName;
    try {
        var existingSessions = [];
        var projEntries = await projectFolder.getEntries();
        for (var i = 0; i < projEntries.length; i++) {
            if (projEntries[i].isFolder && isSessionFolderName(projEntries[i].name)) {
                existingSessions.push(projEntries[i].name);
            }
        }
        if (existingSessions.length > 0) {
            existingSessions.sort();
            var latestName = existingSessions[existingSessions.length - 1];
            var sessionBase = latestName.replace(/_Part\d+$/, "");
            sessionName = await findNextContinuationName(projectFolder, sessionBase);
            log("INFO", "[startRecording] continuing from latest session " + latestName + " -> " + sessionName);
        } else {
            sessionName = await findNextSessionName(projectFolder);
        }
    } catch (e) {
        sessionName = await findNextSessionName(projectFolder);
    }

    try { currentSessionFolder = await projectFolder.createFolder(sessionName); }
    catch (e) { logError("Create session folder failed", e); setStatus(t("creatingFolder"), "paused"); return; }

    // v0.85f: snapCounter continues from globalStepOffset for continuous naming
    snapCounter = globalStepOffset;
    totalStrokes = 0; brushCount = 0; eraserCount = 0;
    currentSteps = []; detectedLimit = 0; atLimit = false;
    hasUnexportedChange = false;
    hasAutoDowngraded = false;
    // currentWorkTime is NOT reset — it was restored from project_state
    // v0.87: record session start workTime so partWorkTime can be calculated at finalize
    sessionStartWorkTime = currentWorkTime;
    await writeDraftMetadata("startRecording");
    lastActiveTime = 0;
    lastSnapshotTime = 0; lastSnapshotStepIndex = -1;

    var info = getHistoryStateInfo();
    lastHistoryCount = info.count;
    lastFingerprint = info.fingerprint || "";

    timeline.innerHTML = "";
    if (currentSection) currentSection.classList.remove("visible");
    if (statsRow) statsRow.classList.remove("visible");
    if (sessionsSection) sessionsSection.classList.toggle("visible", sessions.length > 0);
    hideProgress();

    if (folderPath) folderPath.textContent = projectName + " / " + sessionName;
    if (pathBar) pathBar.style.display = "block";
    if (infoText) infoText.textContent = t("infoRecording", { n: sessionName, f: globalStepOffset });

    activeDocId = newDocId;
    lastFilePath = doc.filePath || "";
    lastDocTitle = doc.title || "";
    recordingState = "recording";
    updatePrimaryActionButton();
    if (btnPause) btnPause.disabled = false;
    if (btnFinish) btnFinish.disabled = false;

    setStatus(t("statusRecording"), "recording");
    log("INFO", "=== REC START v0.90 === doc=" + activeDocId + " size=" + TARGET_SIZE + " detect=" + DETECT_MS + "ms density=" + SNAPSHOT_DENSITY);

    // v0.79: detect loop — always runs for doc-switch detection, capture() handles recordingState internally
    if (detectInterval) { clearInterval(detectInterval); detectInterval = null; }
    detectInterval = setInterval(async function() {
        if (captureLock) return;
        captureLock = true;
        try { await capture(); } finally { captureLock = false; }
    }, DETECT_MS);

    // v0.79: export loop — independent, throttled, handles async I/O
    exportInterval = setInterval(async function() {
        if (exportLock) return;
        if (!hasUnexportedChange) return;
        exportLock = true;
        try {
            await exportTick();
        } catch (e) {
            logError("[exportLoop] error during tick", e);
        }
        exportLock = false;
    }, Math.max(300, DETECT_MS));

    startWorkTimeTimer();
}

function pauseRecording() {
    if (recordingState === "paused") return;
    recordingState = "paused";
    __autoPaused = false; // user manually paused, clear auto-pause flag
    // v0.84: keep detectInterval running for document switch detection
    if (exportInterval) { clearInterval(exportInterval); exportInterval = null; }
    stopWorkTimeTimer();
    if (btnPause) btnPause.disabled = true;
    updatePrimaryActionButton();
    setStatus(t("pausedResumeHint"), "paused");
    log("INFO", "[pauseRecording] session paused, frames=" + currentSteps.length);
}

async function finishRecording() {
    if (recordingState === "ready") return;
    if (finishInProgress) {
        log("INFO", "[finishRecording] finish already in progress, skip duplicate call");
        return;
    }
    finishInProgress = true;
    try {
    clearPreviewGIF();
    log("INFO", "[finishRecording] finalizing session with " + currentSteps.length + " steps");
    // v0.84: keep detectInterval running for document switch detection
    if (exportInterval) { clearInterval(exportInterval); exportInterval = null; }
    stopWorkTimeTimer();
    if (btnPause) btnPause.disabled = true;
    if (btnFinish) btnFinish.disabled = true;

    // Guard: empty session — clean up without archiving
    if (currentSteps.length === 0) {
        log("INFO", "[finishRecording] empty session, quick cleanup");
        recordingState = "ready";
        __autoPaused = false;
        if (activeDocId) { docStates[activeDocId] = packState(); }
        activeDocId = 0;
        updatePrimaryActionButton();
        if (btnPause) btnPause.disabled = true;
        if (btnFinish) btnFinish.disabled = true;
        setStatus(t("statusReady"), "ready");
        if (infoText) infoText.textContent = t("infoReady");
        // Remove empty session folder to keep disk clean
        if (currentSessionFolder) {
            try { await currentSessionFolder.delete(); } catch (e) { logError("[finish] delete empty folder failed", e); }
        }
        currentSessionFolder = null; currentParentFolder = null; currentParentFolderPath = ""; outputFolderEntry = null;
        currentProjectMappingKey = ""; currentProjectDocId = 0;
        if (folderPath) folderPath.textContent = "";
        if (pathBar) pathBar.style.display = "none";
        return;
    }

    setStatus(t("archiving"), "paused");

    try {
        await exportTick();
    } catch (e) {
        logError("Final export failed", e);
    }
    await finalizeSession();
    recordingState = "ready";
    __autoPaused = false;
    // v0.85: mark autosave_meta as finished to prevent false recovery on next launch
    if (currentSessionFolder) {
        try {
            var amf = await currentSessionFolder.getEntry("autosave_meta.json");
            if (amf) {
                var text = await amf.read({ format: formats.utf8 });
                var m = JSON.parse(text);
                m.recordingState = "finished";
                await amf.write(JSON.stringify(m), { format: formats.utf8, overwrite: true });
            }
        } catch (e) { /* ignore cleanup errors */ }
    }

    // v0.85c: update project mapping lastSession + totalStepsSoFar
    try {
        var finProjectInfo = getProjectName();
        var finDocKey = getDocKey(finProjectInfo);
        if (projectMappings[finDocKey] && currentSessionFolder) {
            var sessionNum = 0;
            var name = currentSessionFolder.name;
            var oldMatch = name.match(/Session_(\d+)/);
            if (oldMatch) {
                sessionNum = parseInt(oldMatch[1]);
            } else {
                sessionNum = name;
            }
            projectMappings[finDocKey].lastSession = sessionNum;
            projectMappings[finDocKey].totalStepsSoFar = globalStepOffset + currentSteps.length;
            projectMappings[finDocKey].totalWorkTime = currentWorkTime;
            saveSettings();
        }
    } catch (e) { logError("[finishRecording] update mapping failed", e); }

    // v0.85f: save project-level state to project_state.json
    if (currentParentFolder) {
        try {
            await saveProjectState(currentParentFolder, {
                projectName: currentParentFolder.name,
                baseName: finProjectInfo.baseName || currentParentFolder.name,
                filePath: finProjectInfo.filePath || "",
                totalStepsSoFar: globalStepOffset + currentSteps.length,
                totalWorkTime: currentWorkTime,
                lastSession: currentSessionFolder ? currentSessionFolder.name : "",
                updatedAt: new Date().toISOString()
            });
        } catch (e) { logError("[finishRecording] save project_state failed", e); }
    }

    // v0.84: save finished state AFTER setting ready, so docSwitch doesn't reload recording state
    if (activeDocId) { docStates[activeDocId] = packState(); }
    activeDocId = 0;
    updatePrimaryActionButton();

    // v0.84: push finished session to in-panel sessions list
    if (currentSessionFolder) {
        var sess = {
            name: currentSessionFolder.name,
            steps: currentSteps.slice(),
            folder: currentSessionFolder,
            parentFolder: currentParentFolder,
            parentFolderPath: currentParentFolder && currentParentFolder.nativePath ? currentParentFolder.nativePath : "",
            workTime: currentWorkTime,
            finishedAt: Date.now()
        };
        sessions.push(sess);
        refreshSessions();
    }

    if (pathBar) pathBar.style.display = "none";

    // Hide current section and clear timeline after finish
    if (currentSection) currentSection.classList.remove("visible");
    if (timeline) timeline.innerHTML = "";

    // v0.84: auto-open preview panel and generate GIF if setting is enabled
    if (autoOpenPreview && replaySection && btnTogglePreview) {
        replaySection.classList.add("visible");
        btnTogglePreview.textContent = t("closeBtn");
        initReplay();
        setTimeout(function() { generatePreviewGIF(); }, 400);
    }
    } finally {
        finishInProgress = false;
    }
}

async function resumeRecording() {
    if (recordingState !== "paused") return;
    clearPreviewGIF();
    if (!currentSessionFolder) return;
    // Validate folder entry is still alive
    try {
        await currentSessionFolder.getEntries();
    } catch (e) {
        log("WARN", "[resumeRecording] folder entry stale, re-acquiring: " + currentSessionFolder.nativePath);
        try {
            var url = "file://" + encodeURI(currentSessionFolder.nativePath);
            currentSessionFolder = await fs.getEntryWithUrl(url);
        } catch (e2) {
            logError("[resumeRecording] re-acquire failed", e2);
            setStatus(t("cannotRecoverFolder"), "paused");
            return;
        }
    }
    log("INFO", "[resumeRecording] resuming session " + currentSessionFolder.name);

    // v0.84: ensure activeDocId matches current document
    var doc = ps.app.activeDocument;
    activeDocId = doc ? doc.id : 0;

    recordingState = "recording";
    __autoPaused = false;
    updatePrimaryActionButton();
    if (btnPause) btnPause.disabled = false;
    if (btnFinish) btnFinish.disabled = false;
    if (pathBar) pathBar.style.display = "block";
    setStatus(t("statusRecording"), "recording");

    // Re-capture history baseline to avoid false triggers
    var doc = ps.app.activeDocument;
    activeDocId = doc ? doc.id : 0;
    var info = getHistoryStateInfo();
    lastHistoryCount = info.count;
    lastFingerprint = info.fingerprint || "";
    hasUnexportedChange = false;
    lastActiveTime = Date.now();

    // v0.79: separated loops — always runs for doc-switch detection
    if (detectInterval) { clearInterval(detectInterval); detectInterval = null; }
    detectInterval = setInterval(async function() {
        if (captureLock) return;
        captureLock = true;
        try { await capture(); } finally { captureLock = false; }
    }, DETECT_MS);
    exportInterval = setInterval(async function() {
        if (exportLock) return;
        if (!hasUnexportedChange) return;
        exportLock = true;
        try { await exportTick(); } catch (e) { logError("[exportLoop] error in resume", e); }
        exportLock = false;
    }, Math.max(300, DETECT_MS));
    startWorkTimeTimer();
}

// ============================================
// Finalize
// ============================================

async function finalizeSession() {
    if (!currentSessionFolder || currentSteps.length === 0) {
        setStatus(t("done", { e: 0, f: 0, name: "" }), "ready");
        return;
    }

    // Sync currentSteps with actual files on disk to handle missed exports
    try {
        var entries = await currentSessionFolder.getEntries();
        var snapEntries = entries.filter(function(e) { return e.name.startsWith("snap_") && e.name.endsWith(".jpg"); });
        snapEntries.sort(function(a, b) { return a.name.localeCompare(b.name); });
        if (snapEntries.length > 0) {
            // Rebuild currentSteps from disk, preserving what we can
            var diskSteps = snapEntries.map(function(e) {
                var parts = e.name.replace(".jpg", "").split("_");
                return {
                    time: Date.now(),
                    snapshot: e.name,
                    name: e.name,
                    tool: parts[1] || "unknown"
                };
            });
            // Only use disk scan if it found more files than we tracked (or we tracked none)
            if (diskSteps.length >= currentSteps.filter(function(s) { return s.snapshot; }).length) {
                // v0.85b: preserve original timestamps from memory when syncing with disk
                var timeMap = {};
                for (var i = 0; i < currentSteps.length; i++) {
                    if (currentSteps[i].snapshot) {
                        timeMap[currentSteps[i].snapshot] = currentSteps[i].time;
                    }
                }
                for (var i = 0; i < diskSteps.length; i++) {
                    if (timeMap[diskSteps[i].snapshot]) {
                        diskSteps[i].time = timeMap[diskSteps[i].snapshot];
                    }
                }
                currentSteps = diskSteps;
                log("INFO", "[finalizeSession] synced with disk: " + diskSteps.length + " frames");
            }
        }
    } catch (e) {
        logError("[finalizeSession] disk scan failed", e);
    }

    var exported = 0;
    for (var i = 0; i < currentSteps.length; i++) if (currentSteps[i].snapshot) exported++;

    var totalDuration = currentSteps.length > 1 ? currentSteps[currentSteps.length - 1].time - currentSteps[0].time : 0;
    var folderName = currentSessionFolder.name || "Session";

    var metaData = {
        version: "0.87",
        plugin: "Arttrace v0.90",
        session: folderName,
        created: new Date().toISOString(),
        stepCount: currentSteps.length,
        exportedSteps: exported,
        totalStepsSoFar: globalStepOffset + currentSteps.length,
        detectedHistoryLimit: detectedLimit,
        targetSize: TARGET_SIZE,
        format: "JPEG",
        videoConfig: { fps: VIDEO_FPS, format: VIDEO_FORMAT, quality: VIDEO_QUALITY },
        statistics: {
            steps: currentSteps.length,
            totalDuration: totalDuration,
            averageInterval: Math.round(totalDuration / Math.max(1, currentSteps.length - 1)),
            totalWorkTime: currentWorkTime,
            partWorkTime: currentWorkTime - sessionStartWorkTime
        },
        note: "JPEG sequence. Generated via UXP Imaging API for zero-lag capture.",
        steps: currentSteps.map(function(s, idx) {
            return { index: idx + globalStepOffset, time: s.time, snapshot: s.snapshot, name: s.name, tool: s.tool || "unknown" };
        })
    };

    try { var mf = await createFileInSession("metadata.json"); await mf.write(JSON.stringify(metaData, null, 2), { format: formats.utf8 }); }
    catch (e) { logError("Meta write failed", e); }

    // v0.87: remove draft metadata now that the session is finalized
    try {
        var draftEntry = await currentSessionFolder.getEntry("metadata_draft.json");
        if (draftEntry) await draftEntry.delete();
    } catch (e) { /* draft may not exist, ignore */ }

    // v0.7: frames.txt and render scripts generated by companion app

    // v0.87: write README.txt to project folder (one per project) instead of each session folder
    if (currentParentFolder) {
        try {
            var readmeFile = await currentParentFolder.createFile("README.txt", { overwrite: true });
            await readmeFile.write(
                "Arttrace - Painting Timelapse Recording\n==========================================\n" +
                "Project: " + (currentParentFolder.name || "Untitled") + "\n\n" +
                "USE ARTRACE RENDER APP:\n" +
                "  Drag individual session folders into Arttrace Render to generate MP4/GIF video.\n\n" +
                "MANUAL RENDER (per session):\n" +
                "  macOS: cd [session_folder] && bash render.sh\n" +
                "  Windows: cd /d [session_folder] && render.bat\n\n" +
                "EDITING:\n" +
                "  Import JPEG files from each session folder into Premiere Pro / DaVinci Resolve / Final Cut Pro.\n", { format: formats.utf8 });
        } catch (e) { logError("README write failed", e); }
    }

    setStatus(t("done", { e: exported, f: currentSteps.length, name: folderName }), "ready");
    if (infoText) infoText.textContent = t("sessionSavedInfo", { name: folderName });
    if (btnFinish) btnFinish.disabled = true;
    // v0.7: init canvas replay
    initReplay();
}

// Phase 4.3: auto split session
async function autoSplitSession() {
    if (!currentParentFolder || !currentSessionFolder) return;
    log("INFO", "[autoSplit] splitting session at " + currentSteps.length + " frames");

    // Archive current session
    await finalizeSession();

    // Immediately resume with a new session in the same project
    recordingState = "recording";
    updatePrimaryActionButton();
    if (btnPause) btnPause.disabled = false;
    if (btnFinish) btnFinish.disabled = false;
    setStatus(t("statusRecording"), "recording");

    // Phase 2.0: autoSplit uses continued naming to distinguish from new recordings
    var baseName = currentSessionFolder ? currentSessionFolder.name : "Session_001";
    // Strip any existing _Part suffix to get the original base name for continued naming
    baseName = baseName.replace(/_Part\d+$/, "");
    var nextSessionName = await findNextContinuationName(currentParentFolder, baseName);
    try {
        currentSessionFolder = await currentParentFolder.createFolder(nextSessionName);
    } catch (e) {
        logError("[autoSplit] create folder failed", e);
        return;
    }

    globalStepOffset += currentSteps.length;
    currentSteps = []; detectedLimit = 0; atLimit = false;
    hasUnexportedChange = false;
    hasAutoDowngraded = false;
    // v0.87: reset session start workTime for the new part
    sessionStartWorkTime = currentWorkTime;
    await writeDraftMetadata("autoSplit");
    timeline.innerHTML = "";
    if (currentSection) currentSection.classList.remove("visible");
    if (statsRow) statsRow.classList.remove("visible");
    if (replaySection) replaySection.classList.remove("visible");

    // v0.85f: update project_state.json after autoSplit
    if (currentParentFolder) {
        try {
            var splitProjectInfo = getProjectName();
            await saveProjectState(currentParentFolder, {
                projectName: currentParentFolder.name,
                baseName: splitProjectInfo.baseName || currentParentFolder.name,
                filePath: splitProjectInfo.filePath || "",
                totalStepsSoFar: globalStepOffset,
                totalWorkTime: currentWorkTime,
                lastSession: currentSessionFolder ? currentSessionFolder.name : "",
                updatedAt: new Date().toISOString()
            });
        } catch (e) { logError("[autoSplit] save project_state failed", e); }
    }

    // Reset history baseline for the new sub-session
    var info = getHistoryStateInfo();
    lastHistoryCount = info.count;
    lastFingerprint = info.fingerprint || "";

    if (folderPath) folderPath.textContent = currentParentFolder.name + " / " + nextSessionName;
    if (pathBar) pathBar.style.display = "block";
    if (infoText) infoText.textContent = t("infoRecording", { n: nextSessionName, f: globalStepOffset });

    log("INFO", "[autoSplit] continued in: " + nextSessionName);
}

// ============================================
// Video Export — frames.txt + render scripts
// ============================================

// [REMOVED] getFrameDuration — video export moved to Arttrace Render companion app

// [REMOVED] writeFramesTxt — video export moved to Arttrace Render companion app

// [REMOVED] buildFFmpegCmd — video export moved to Arttrace Render companion app

// [REMOVED] generateRenderScripts — video export moved to Arttrace Render companion app

// [REMOVED] checkEnvironment — video export moved to Arttrace Render companion app

// [REMOVED] copyInstallCommand — video export moved to Arttrace Render companion app

// [REMOVED] markEnvReady — video export moved to Arttrace Render companion app

// [REMOVED] refreshVideoUI — video export moved to Arttrace Render companion app

async function initReplay() {
    // Phase 2.0: scan all sessions under current project and merge steps
    var allSteps = [];
    var sessionFolders = [];

    if (currentSessionFolder && currentParentFolder) {
        try {
            var entries = await currentParentFolder.getEntries();
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                if (!entry.isFolder || !isSessionFolderName(entry.name)) continue;
                sessionFolders.push(entry);
            }
        } catch (e) { logError("[initReplay] scan failed", e); }
    } else if (sessions.length > 0) {
        for (var i = 0; i < sessions.length; i++) {
            if (sessions[i].folder) sessionFolders.push(sessions[i].folder);
        }
    }

    if (sessionFolders.length === 0 && currentSessionFolder) {
        sessionFolders.push(currentSessionFolder);
    }

    // Read metadata.json from each session and merge steps sorted by time
    for (var i = 0; i < sessionFolders.length; i++) {
        var sf = sessionFolders[i];
        try {
            var mf = await sf.getEntry("metadata.json");
            if (!mf) continue;
            var text = await mf.read({ format: formats.utf8 });
            var meta = JSON.parse(text);
            if (meta.steps && meta.steps.length > 0) {
                for (var j = 0; j < meta.steps.length; j++) {
                    var step = meta.steps[j];
                    step.__sessionFolder = sf;
                    allSteps.push(step);
                }
            }
        } catch (e) {
            try {
                var files = await sf.getEntries();
                for (var j = 0; j < files.length; j++) {
                    var f = files[j];
                    if (f.name.endsWith(".jpg") || f.name.endsWith(".jpeg")) {
                        allSteps.push({ snapshot: f.name, time: 0, __sessionFolder: sf });
                    }
                }
            } catch (e2) {}
        }
    }

    allSteps.sort(function(a, b) { return (a.time || 0) - (b.time || 0); });

    if (allSteps.length === 0) {
        log("WARN", "[initReplay] no frames found");
        return;
    }

    // Dynamic frame skipping for large sessions
    var totalSteps = allSteps.length;
    var stride = 1;
    if (totalSteps > 1000) stride = Math.ceil(totalSteps / 800);
    else if (totalSteps > 500) stride = 2;

    var displaySteps = [];
    for (var i = 0; i < allSteps.length; i += stride) {
        displaySteps.push(allSteps[i]);
    }

    log("INFO", "[initReplay] total=" + totalSteps + " display=" + displaySteps.length + " stride=" + stride + " sessions=" + sessionFolders.length);

    if (displaySteps.length === 0) return;

    if (replayMeta) replayMeta.textContent = displaySteps.length + " " + t("frames");
    // Reset preview area
    if (replayPreviewGIF) {
        replayPreviewGIF.src = "";
        replayPreviewGIF.style.display = "none";
    }
    if (replayPreviewPlaceholder) {
        replayPreviewPlaceholder.style.display = "block";
        replayPreviewPlaceholder.textContent = t("previewPlaceholder");
    }
    if (btnSavePreviewGIF) btnSavePreviewGIF.style.display = "none";
    if (replayPreviewProgress) replayPreviewProgress.style.display = "none";
}

function arrayBufferToBase64(buffer) {
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    var chunks = [];
    var chunkSize = 0x8000;
    for (var i = 0; i < len; i += chunkSize) {
        chunks.push(String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize)));
    }
    return btoa(chunks.join(""));
}

function clearPreviewGIF() {
    currentPreviewGIFBytes = null;
    if (replayPreviewGIF) {
        replayPreviewGIF.src = "";
        replayPreviewGIF.style.display = "none";
    }
    if (replayPreviewPlaceholder) {
        replayPreviewPlaceholder.style.display = "block";
        replayPreviewPlaceholder.textContent = t("previewPlaceholder");
    }
    if (btnSavePreviewGIF) btnSavePreviewGIF.style.display = "none";
}

function getBaseSessionName(name) {
    // v0.87: support both old _continued and new _PartNN suffixes
    return name.replace(/_(continued(_\d+)?|Part\d+)$/, "");
}

async function generatePreviewGIF() {
    if (isGeneratingPreview) return;

    // v0.85c: resolve correct project folder by projectMappings
    var projectInfo = getProjectName();
    var docKey = getDocKey(projectInfo);
    var mapping = projectMappings[docKey];
    var projectName = mapping ? mapping.folderName : projectInfo.baseName;
    var projectFolder = currentParentFolder;

    // Validate currentParentFolder matches current document; if stale, re-resolve
    if (!projectFolder || projectFolder.name !== projectName) {
        if (outputFolderPath) {
            try {
                var root = await resolveFolderFromPath(outputFolderPath);
                if (!root) throw new Error("root folder not resolved");
                var entries = await root.getEntries();
                for (var i = 0; i < entries.length; i++) {
                    if (entries[i].isFolder && entries[i].name === projectName) {
                        projectFolder = entries[i];
                        break;
                    }
                }
            } catch (e) { log("INFO", "[previewGIF] project resolve skipped: " + e.message); }
        }
    }

    // Determine current base session name from project folder
    var currentName = "";
    if (projectFolder) {
        try {
            var entries = await projectFolder.getEntries();
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isFolder && isSessionFolderName(entries[i].name)) {
                    currentName = entries[i].name;
                    break;
                }
            }
        } catch (e) {}
    }
    // Fallback to archived sessions
    if (!currentName && sessions.length > 0) {
        currentName = sessions[sessions.length - 1].name;
    }
    if (!currentName) {
        // No sessions for this document
        log("INFO", "[previewGIF] no sessions found for " + projectName);
        return;
    }
    var baseName = getBaseSessionName(currentName);

    // Scan all related sessions (base + continued) under current project
    var allSteps = [];
    if (projectFolder) {
        try {
            var entries = await projectFolder.getEntries();
            var relatedFolders = [];
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                if (!entry.isFolder) continue;
                // v0.87: match base session, old _continued suffix, and new _PartNN suffix
                if (entry.name === baseName ||
                    entry.name.startsWith(baseName + "_continued") ||
                    entry.name.startsWith(baseName + "_Part")) {
                    relatedFolders.push(entry);
                }
            }
            // Sort by name to maintain chronological order
            relatedFolders.sort(function(a, b) { return a.name.localeCompare(b.name); });
            for (var i = 0; i < relatedFolders.length; i++) {
                var sf = relatedFolders[i];
                try {
                    var mf = await sf.getEntry("metadata.json");
                    if (mf) {
                        var text = await mf.read({ format: formats.utf8 });
                        var meta = JSON.parse(text);
                        if (meta.steps && meta.steps.length > 0) {
                            for (var j = 0; j < meta.steps.length; j++) {
                                var step = meta.steps[j];
                                step.__sessionFolder = sf;
                                allSteps.push(step);
                            }
                        }
                    }
                } catch (e) {
                    // Fallback: scan jpg files
                    try {
                        var files = await sf.getEntries();
                        for (var j = 0; j < files.length; j++) {
                            var f = files[j];
                            if (f.name.endsWith(".jpg") || f.name.endsWith(".jpeg")) {
                                allSteps.push({ snapshot: f.name, time: 0, __sessionFolder: sf });
                            }
                        }
                    } catch (e2) {}
                }
            }
        } catch (e) {
            logError("[previewGIF] scan failed", e);
        }
    }

    // Also include current in-memory steps if recording/paused
    if (currentSteps.length > 0) {
        for (var i = 0; i < currentSteps.length; i++) {
            var step = currentSteps[i];
            step.__sessionFolder = currentSessionFolder;
            allSteps.push(step);
        }
    }

    allSteps.sort(function(a, b) { return (a.time || 0) - (b.time || 0); });

    var snapshotSteps = allSteps.filter(function(s) { return s.snapshot; });
    if (snapshotSteps.length === 0) return;

    isGeneratingPreview = true;
    isPreviewCancelled = false;
    if (btnGeneratePreview) btnGeneratePreview.disabled = true;

    if (replayPreviewProgress) replayPreviewProgress.style.display = "block";
    if (replayPreviewPlaceholder) replayPreviewPlaceholder.style.display = "none";
    if (replayPreviewGIF) replayPreviewGIF.style.display = "none";
    if (btnSavePreviewGIF) btnSavePreviewGIF.style.display = "none";
    updatePreviewProgress(5);

    var framesOk = 0;
    var framesFailed = 0;

    try {
        var MAX_PREVIEW_FRAMES = 300;
        var frameIndices = [];
        if (snapshotSteps.length > MAX_PREVIEW_FRAMES) {
            var stride = Math.ceil(snapshotSteps.length / MAX_PREVIEW_FRAMES);
            for (var i = 0; i < snapshotSteps.length; i += stride) frameIndices.push(i);
        } else {
            for (var i = 0; i < snapshotSteps.length; i++) frameIndices.push(i);
        }

        var sizeVal = replaySize ? replaySize.value : "256";
        var outMax = parseInt(sizeVal) || 256;
        var doc = ps.app.activeDocument;
        var origW = doc.width, origH = doc.height;
        var scale = outMax / Math.min(origW, origH);
        var outW = Math.max(1, Math.round(origW * scale));
        var outH = Math.max(1, Math.round(origH * scale));
        outW = outW % 2 === 0 ? outW : outW + 1;
        outH = outH % 2 === 0 ? outH : outH + 1;

        var colorCount = previewColors ? parseInt(previewColors.value) : 256;

        if (replayPreviewProgressLabel) replayPreviewProgressLabel.textContent = t("readingFrames");
        var sampleCount = Math.min(frameIndices.length, 50);
        var sampleStep = Math.max(1, Math.floor(frameIndices.length / sampleCount));
        var sampleRGBA = [];
        for (var i = 0; i < frameIndices.length && sampleRGBA.length < sampleCount; i += sampleStep) {
            if (isPreviewCancelled) throw new Error("Cancelled");
            var step = snapshotSteps[frameIndices[i]];
            if (!step || !step.snapshot) continue;
            try {
                var sf = step.__sessionFolder || currentSessionFolder;
                if (!sf) continue;
                var file = await sf.getEntry(step.snapshot);
                if (!file) continue;
                var bytes = await file.read({ format: formats.binary });
                var decoded = jpegDecode(bytes);
                var rgba = resizeRGBA(decoded.data, decoded.width, decoded.height, outW, outH);
                sampleRGBA.push(rgba);
            } catch (e) { framesFailed++; }
            if (i % 5 === 0) await sleep(1);
        }
        if (sampleRGBA.length === 0) throw new Error("No frames");
        updatePreviewProgress(25);

        if (replayPreviewProgressLabel) replayPreviewProgressLabel.textContent = t("buildingPalette");
        var palette = popularityQuantize(sampleRGBA, colorCount);
        var paletteMap = buildPaletteMap(palette);
        updatePreviewProgress(35);

        if (replayPreviewProgressLabel) replayPreviewProgressLabel.textContent = t("encodingGIF");
        var fpsVal = previewFPS ? parseInt(previewFPS.value) : 10;
        var delay = Math.max(1, Math.round(100 / fpsVal));
        var gifBuf = new Uint8Array(32 * 1024 * 1024);
        var gw = new GifWriter(gifBuf, outW, outH, { loop: 0, palette: palette });

        for (var i = 0; i < frameIndices.length; i++) {
            if (isPreviewCancelled) throw new Error("Cancelled");
            var step = snapshotSteps[frameIndices[i]];
            if (!step || !step.snapshot) continue;
            try {
                var currentPos = gw.getOutputBufferPosition();
                var buf = gw.getOutputBuffer();
                var estimatedFrameSize = outW * outH * 2;
                if (currentPos + estimatedFrameSize >= buf.length) {
                    var newBuf = new Uint8Array(buf.length * 2);
                    newBuf.set(buf);
                    gw.setOutputBuffer(newBuf);
                    gw.setOutputBufferPosition(currentPos);
                }
                var sf = step.__sessionFolder || currentSessionFolder;
                if (!sf) continue;
                var file = await sf.getEntry(step.snapshot);
                var jpegBytes = await file.read({ format: formats.binary });
                var decoded = jpegDecode(jpegBytes);
                var rgba = resizeRGBA(decoded.data, decoded.width, decoded.height, outW, outH);
                var indexed = mapToPaletteFast(rgba, paletteMap);
                gw.addFrame(0, 0, outW, outH, indexed, { delay: delay });
                framesOk++;
            } catch (e) { framesFailed++; }
            if (i % 5 === 0) {
                var pct = Math.round(35 + (i / frameIndices.length) * 60);
                updatePreviewProgress(pct);
                await sleep(1);
            }
        }

        gw.end();
        var outputLen = gw.getOutputBufferPosition();
        currentPreviewGIFBytes = gw.getOutputBuffer().subarray(0, outputLen);

        var binary = "";
        for (var i = 0; i < currentPreviewGIFBytes.length; i++) {
            binary += String.fromCharCode(currentPreviewGIFBytes[i]);
        }
        var dataUrl = "data:image/gif;base64," + btoa(binary);

        if (replayPreviewGIF) {
            replayPreviewGIF.src = dataUrl;
            replayPreviewGIF.style.display = "block";
        }
        if (replayPreviewPlaceholder) replayPreviewPlaceholder.style.display = "none";
        if (btnSavePreviewGIF) btnSavePreviewGIF.style.display = "inline-block";
        updatePreviewProgress(100);
        if (replayPreviewProgressLabel) replayPreviewProgressLabel.textContent = t("doneStatus");

    } catch (e) {
        if (e.message === "Cancelled") {
            log("INFO", "[previewGIF] cancelled by user");
            if (replayPreviewProgressLabel) replayPreviewProgressLabel.textContent = t("cancelledStatus");
            clearPreviewGIF();
        } else {
            logError("[previewGIF] error: " + e.message, e);
            var failRate = frameIndices && frameIndices.length > 0 ? Math.round((framesFailed / frameIndices.length) * 100) : 0;
            var msg = e.message;
            if (framesFailed > 0) {
                msg += " (" + framesFailed + "/" + (framesOk + framesFailed) + " frames failed)";
            }
            if (replayPreviewProgressLabel) replayPreviewProgressLabel.textContent = t("errorPrefix") + msg;
        }
    } finally {
        isGeneratingPreview = false;
        isPreviewCancelled = false;
        if (btnGeneratePreview) btnGeneratePreview.disabled = false;
        setTimeout(function() {
            if (replayPreviewProgress && !isGeneratingPreview) replayPreviewProgress.style.display = "none";
        }, 1500);
    }
}

function updatePreviewProgress(pct) {
    if (replayPreviewProgressFill) replayPreviewProgressFill.style.width = pct + "%";
}

async function savePreviewGIF() {
    if (!currentPreviewGIFBytes) {
        setStatus(t("generatePreviewFirst"), "paused");
        setTimeout(function() { setStatus(t("statusReady"), "ready"); }, 2000);
        return;
    }
    var folder = lastGIFEntry;
    if (!folder || !folder.isFolder) {
        if (gifOutputFolderPath) {
            try { folder = await resolveFolderFromPath(gifOutputFolderPath); } catch (e) {}
        }
    }
    if (!folder || !folder.isFolder) {
        try {
            folder = await fs.getFolder();
            if (folder) {
                lastGIFEntry = folder;
                gifOutputFolderPath = folder.nativePath.replace(/\\/g, "/");
                saveSettings();
                if (gifPathDisplay) gifPathDisplay.textContent = gifOutputFolderPath;
            }
        } catch (e) { return; }
    }
    if (!folder || !folder.isFolder) return;

    var doc = ps.app.activeDocument;
    var projectName = safeProjectName((doc.title || "Arttrace").replace(/\.psd$/i, ""));
    var sessionName = currentSessionFolder ? currentSessionFolder.name : "Session";
    var d = new Date();
    var pad = function(n) { return n < 10 ? "0" + n : n; };
    var ts = d.getFullYear() + "" + pad(d.getMonth()+1) + pad(d.getDate()) + "_" + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
    var gifName = projectName + "_" + sessionName + "_" + ts + ".gif";

    try {
        var gifFile = await folder.createFile(gifName, { overwrite: true });
        await gifFile.write(currentPreviewGIFBytes, { format: formats.binary });
        setStatus(t("gifExported", { name: gifName }), "ready");
    } catch (e) {
        logError("[savePreviewGIF] failed", e);
    }
}

// [REMOVED] renderVideo — video export moved to Arttrace Render companion app

// ============================================
// GIF Export — unified into Preview panel (savePreviewGIF)
// ============================================
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function(e) {
            logError("clipboard API failed", e);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
        var ok = document.execCommand("copy");
        log("INFO", "fallback copy: " + (ok ? "ok" : "failed"));
    } catch (e) {
        logError("fallback copy failed", e);
    }
    document.body.removeChild(ta);
}

// ============================================
// Output Folder
// ============================================

async function changeOutputFolder() {
    try {
        var folder = await fs.getFolder();
        if (!folder) return;
        lastRootFolder = folder;
        outputFolderPath = folder.nativePath.replace(/\\/g, "/");
        saveSettings();
        if (outputPathDisplay) outputPathDisplay.textContent = outputFolderPath;
        log("INFO", "[changeOutputFolder] set to: " + outputFolderPath);
    } catch (e) {
        log("INFO", "[changeOutputFolder] cancelled: " + e.message);
    }
}

async function changeGIFOutputFolder() {
    try {
        var folder = await fs.getFolder();
        if (!folder) return;
        lastGIFEntry = folder;
        gifOutputFolderPath = folder.nativePath.replace(/\\/g, "/");
        saveSettings();
        if (gifPathDisplay) gifPathDisplay.textContent = gifOutputFolderPath;
        log("INFO", "[changeGIFOutputFolder] set to: " + gifOutputFolderPath);
    } catch (e) {
        log("INFO", "[changeGIFOutputFolder] cancelled: " + e.message);
    }
}

async function changeSnapshotFolder() {
    try {
        var folder = await fs.getFolder();
        if (!folder) return;
        snapshotFolderEntry = folder;
        snapshotFolderPath = folder.nativePath.replace(/\\/g, "/");
        saveSettings();
        if (snapshotPathDisplay) snapshotPathDisplay.textContent = snapshotFolderPath;
        log("INFO", "[changeSnapshotFolder] set to: " + snapshotFolderPath);
    } catch (e) {
        log("INFO", "[changeSnapshotFolder] cancelled: " + e.message);
    }
}

// ============================================
// Save Session
// ============================================

async function saveSession() {
    if (currentSteps.length === 0) return;
    clearPreviewGIF();
    // v0.84: save current document state before saving
    if (activeDocId) {
        docStates[activeDocId] = packState();
    }
    var sid = currentSessionFolder ? currentSessionFolder.name : "Session";
    var session = { id: sid, name: sid, steps: currentSteps.slice(), folder: currentSessionFolder, created: new Date().toISOString(), parentFolder: currentParentFolder, parentFolderPath: currentParentFolder && currentParentFolder.nativePath ? currentParentFolder.nativePath : "" };
    sessions.push(session);

    refreshSessions();

    currentSteps = []; timeline.innerHTML = "";
    if (stepCount) stepCount.textContent = globalStepOffset + "";
    if (currentSection) currentSection.classList.remove("visible");
    if (statsRow) statsRow.classList.remove("visible");
    snapCounter = 0; globalStepOffset = 0; totalStrokes = 0; brushCount = 0; eraserCount = 0;
    currentSessionFolder = null; currentParentFolder = null; currentParentFolderPath = ""; outputFolderEntry = null;
    if (folderPath) folderPath.textContent = "";
    if (pathBar) pathBar.style.display = "none";
    if (btnFinish) btnFinish.disabled = true;
    setStatus(t("sessionSaved"), "ready");
    if (infoText) infoText.textContent = t("sessionArchived", { n: sessions.length });
}

// ============================================
// Open Folder
// ============================================
// Bindings
// ============================================

function showFinishConfirm() {
    if (!confirmOverlay) return;
    confirmTitle.textContent = t("confirmFinishTitle");
    var steps = currentSteps.length;
    var timeStr = fmtWorkTime(currentWorkTime);
    confirmBody.textContent = t("confirmFinishBody", { steps: steps, time: timeStr });
    confirmOverlay.classList.add("open");
}

function hideFinishConfirm() {
    if (confirmOverlay) confirmOverlay.classList.remove("open");
}

if (btnConfirmCancel) btnConfirmCancel.addEventListener("click", hideFinishConfirm);
if (btnConfirmOk) btnConfirmOk.addEventListener("click", async function() {
    hideFinishConfirm();
    await finishRecording();
});

btnRecord.addEventListener("click", async function() {
    if (btnRecord.disabled) return;
    await syncActiveDocument();
    if (recordingState === "recording" || recordingState === "paused") {
        showFinishConfirm();
    } else if (recordingState === "ready") {
        await startRecording();
        setTimeout(function() {
            if (recordingState === "recording") setStatus(t("statusRecording"), "recording");
        }, 1500);
    }
});
btnPause.addEventListener("click", async function() {
    await syncActiveDocument();
    pauseRecording();
});
btnFinish.addEventListener("click", async function() {
    await syncActiveDocument();
    await finishRecording();
});
if (btnSideLeft) {
    btnSideLeft.addEventListener("click", async function() {
        await syncActiveDocument();
        if (recordingState === "recording") {
            pauseRecording();
        } else if (recordingState === "paused") {
            await resumeRecording();
        }
    });
}
if (btnSideRight) {
    btnSideRight.addEventListener("click", async function() {
        console.log("[btnSideRight] click fired");
        await syncActiveDocument();
        await exportSnapshotQuick();
    });
}
btnSettings.addEventListener("click", openSettings);
btnCloseSettings.addEventListener("click", closeSettings);
if (btnChangeFolder) btnChangeFolder.addEventListener("click", changeOutputFolder);
if (btnChangeGIFFolder) btnChangeGIFFolder.addEventListener("click", changeGIFOutputFolder);
if (btnChangeSnapshotFolder) btnChangeSnapshotFolder.addEventListener("click", changeSnapshotFolder);
// v0.84: preview toggle
if (btnTogglePreview) {
    btnTogglePreview.addEventListener("click", function() {
        if (replaySection) {
            var isVisible = replaySection.classList.contains("visible");
            replaySection.classList.toggle("visible", !isVisible);
            btnTogglePreview.textContent = isVisible ? t("previewBtn") : t("closeBtn");
            if (!isVisible) initReplay();
        }
    });
    // Tooltip for preview button
    if (arttraceTooltip) {
        var previewTooltipTimer = null;
        btnTogglePreview.addEventListener("mouseenter", function() {
            previewTooltipTimer = setTimeout(function() {
                arttraceTooltip.textContent = t("tooltipPreview");
                arttraceTooltip.style.display = "block";
                var rect = btnTogglePreview.getBoundingClientRect();
                var tw = arttraceTooltip.offsetWidth;
                arttraceTooltip.style.left = (rect.left + rect.width / 2 - tw / 2) + "px";
                arttraceTooltip.style.top = (rect.bottom + 4) + "px";
            }, 500);
        });
        btnTogglePreview.addEventListener("mouseleave", function() {
            if (previewTooltipTimer) { clearTimeout(previewTooltipTimer); previewTooltipTimer = null; }
            arttraceTooltip.style.display = "none";
        });
    }
}
// Tooltip for brand logo
var brandEl = document.getElementById("brand");
if (brandEl && arttraceTooltip) {
    var brandTooltipTimer = null;
    brandEl.addEventListener("mouseenter", function() {
        brandTooltipTimer = setTimeout(function() {
            arttraceTooltip.textContent = t("versionTooltip", { v: "0.90" });
            arttraceTooltip.style.display = "block";
            var rect = brandEl.getBoundingClientRect();
            var tw = arttraceTooltip.offsetWidth;
            arttraceTooltip.style.left = (rect.left + rect.width / 2 - tw / 2) + "px";
            arttraceTooltip.style.top = (rect.bottom + 4) + "px";
        }, 500);
    });
    brandEl.addEventListener("mouseleave", function() {
        if (brandTooltipTimer) { clearTimeout(brandTooltipTimer); brandTooltipTimer = null; }
        arttraceTooltip.style.display = "none";
    });
}
if (btnClosePreview) {
    btnClosePreview.addEventListener("click", function() {
        if (replaySection) replaySection.classList.remove("visible");
        if (btnTogglePreview) btnTogglePreview.textContent = t("previewBtn");
    });
}
document.querySelectorAll(".pill[data-lang]").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var lang = this.dataset.lang;
        setLanguage(lang);
        document.querySelectorAll(".pill[data-lang]").forEach(function(b) { b.classList.toggle("active", b.dataset.lang === lang); });
    });
});

// Preset buttons removed in v0.84 UI redesign — presets accessible via Capture settings tab

document.getElementById("btnSaveCustom").addEventListener("click", function() {
    saveSettings();
    showToast(t("settingsSaved"));
});

document.getElementById("btnResetDefault").addEventListener("click", function() {
    applyPreset("smooth"); saveSettings();
});

// v0.84: Settings Tab switching
document.querySelectorAll(".settings-tab").forEach(function(btn) {
    btn.addEventListener("click", function() {
        switchSettingsTab(this.dataset.tab);
    });
});

// v0.84: GIF export unified into Preview panel

// v0.7: replay controls binding
if (btnGeneratePreview) {
    btnGeneratePreview.addEventListener("click", function() { generatePreviewGIF(); });
}
if (btnSavePreviewGIF) {
    btnSavePreviewGIF.addEventListener("click", function() { savePreviewGIF(); });
}
if (btnCancelPreview) {
    btnCancelPreview.addEventListener("click", function() {
        if (isGeneratingPreview) {
            isPreviewCancelled = true;
            if (replayPreviewProgressLabel) replayPreviewProgressLabel.textContent = t("cancellingStatus");
        }
    });
}

// v0.84: auto-open preview toggle
if (chkAutoOpenPreview) {
    chkAutoOpenPreview.addEventListener("change", function() {
        autoOpenPreview = chkAutoOpenPreview.checked;
        saveSettings();
    });
}

// Double-click to zoom GIF preview (or trigger render if none)
if (replayPreviewArea && replayZoomOverlay && replayZoomImg) {
    replayPreviewArea.addEventListener("dblclick", function() {
        if (replayPreviewGIF && replayPreviewGIF.src && replayPreviewGIF.style.display !== "none") {
            replayZoomImg.src = replayPreviewGIF.src;
            replayZoomOverlay.classList.add("visible");
        } else {
            generatePreviewGIF();
        }
    });
    replayZoomOverlay.addEventListener("dblclick", function() {
        replayZoomOverlay.classList.remove("visible");
        replayZoomImg.src = "";
    });
}
// ESC to close zoom overlay
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && replayZoomOverlay && replayZoomOverlay.classList.contains("visible")) {
        replayZoomOverlay.classList.remove("visible");
        if (replayZoomImg) replayZoomImg.src = "";
    }
});

// Diagnostics bindings
var btnExportDiagnostics = document.getElementById("btnExportDiagnostics");
var btnClearDiagnostics = document.getElementById("btnClearDiagnostics");
if (btnExportDiagnostics) {
    btnExportDiagnostics.addEventListener("click", function() { exportDiagnosticsLog(); });
}
if (btnClearDiagnostics) {
    btnClearDiagnostics.addEventListener("click", function() { clearLogs(); });
}
if (replaySize) {
    replaySize.addEventListener("change", function() {
        saveSettings();
        // Changing size resets preview so user can regenerate
        if (replayPreviewGIF) replayPreviewGIF.style.display = "none";
        if (replayPreviewPlaceholder) {
            replayPreviewPlaceholder.style.display = "block";
            replayPreviewPlaceholder.textContent = t("previewPlaceholder");
        }
        if (btnSavePreviewGIF) btnSavePreviewGIF.style.display = "none";
    });
}
if (previewFPS) {
    previewFPS.addEventListener("change", function() {
        saveSettings();
        // Changing FPS resets preview so user can regenerate
        if (replayPreviewGIF) replayPreviewGIF.style.display = "none";
        if (replayPreviewPlaceholder) {
            replayPreviewPlaceholder.style.display = "block";
            replayPreviewPlaceholder.textContent = t("previewPlaceholder");
        }
        if (btnSavePreviewGIF) btnSavePreviewGIF.style.display = "none";
    });
}

// v0.84: wheel scrolling for settings overlay (UXP scroll workaround)
if (settingsOverlay) {
    settingsOverlay.addEventListener("wheel", function(e) {
        e.stopPropagation();
        settingsOverlay.scrollTop += e.deltaY;
    });
}

// Init
try {
    initSettings().then(async function() {
        if (!settingsLoaded) {
            applyPreset("smooth");
        } else {
            // Apply saved settings to UI
            highlightResButton(TARGET_SIZE);
            highlightDetectButton(DETECT_MS);
            highlightDensityButton(SNAPSHOT_DENSITY);
            highlightSnapshotFormatButton(SNAPSHOT_FORMAT);
        }
        refreshUI();
        updateStats();
        initTimeline();
        if (outputPathDisplay) outputPathDisplay.textContent = outputFolderPath || t("notSet");
        if (gifPathDisplay) gifPathDisplay.textContent = gifOutputFolderPath || t("notSet");
        tryRecoverSession();
        log("INFO", "Arttrace v0.90 loaded — project_state.json + continuous step/workTime + no auto-downgrade");
    }).catch(function(err) {
        if (window.__arttraceReportError) {
            window.__arttraceReportError('InitPromiseError: ' + (err.message || err), 'main.js', 0, 0, err);
        } else {
            console.error('InitPromiseError:', err);
        }
    });
} catch (e) {
    if (window.__arttraceReportError) {
        window.__arttraceReportError('InitException: ' + (e.message || e), 'main.js', 0, 0, e);
    } else {
        console.error('InitException:', e);
    }
}
