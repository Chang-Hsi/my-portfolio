<p align="center">
  <img src="./public/logo.png" width="120" alt="TW Douli Logo" />
</p>

<h1 align="center">TW Douli Portfolio</h1>

<p align="center">
  <strong>以 Vue 3 打造的個人作品集網站，整合首頁動態視覺、關於我、作品列表、作品詳情與聯絡彈窗。</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3-42B883?style=flat-square&logo=vuedotjs" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Pinia-3-F7D336?style=flat-square" alt="Pinia" />
  <img src="https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square" alt="GSAP" />
</p>

## 📖 簡介

**TW Douli Portfolio** 是一個個人作品集網站，主要用來展示個人介紹、服務項目、技術堆疊、參與專案與作品詳情。網站以 Vue 3 + Vite 為核心，搭配 Tailwind CSS、GSAP、Pinia 與 Vue Router 建立完整的前端展示體驗。

這個專案主要解決作品集內容分散、互動感不足與作品資料難維護的問題。透過首頁動態 Hero、作品資料集中管理、作品詳情頁與全站聯絡彈窗，讓訪客可以更快速理解我的開發能力、設計風格與專案經驗。

### 為什麼做這個專案？

- 🔍 **集中展示作品**：將個人作品、NDA 專案與技術堆疊統一整理在同一個網站。
- 🎬 **強化互動體驗**：使用 GSAP 與 Lottie 建立進場動畫、捲動動畫與視覺節奏。
- 🧱 **資料集中管理**：作品資料集中在 Pinia store，清單與詳情頁都從同一份資料來源取得。
- 📱 **完整 RWD 支援**：首頁、作品列表、作品詳情與彈窗皆針對桌機、平板、手機調整。
- ✉️ **降低聯絡門檻**：全站共用 ContactModal，訪客可從 Header 或專案卡片快速開啟聯絡表單。

## ✨ 功能特色

### 🧭 頁面規劃

| 頁面 | 路由 | 說明 |
|---|---|---|
| 首頁 | `/` | 動態 Hero、關於我、個人作品、服務項目、NDA 專案、技術堆疊 |
| 關於 | `/about` | 個人介紹、經歷與背景內容 |
| 作品列表 | `/works` | 作品卡片列表、hover 描述、作品詳情入口 |
| 作品詳情 | `/works/:id` | 專案簡介、技術架構、負責角色、問題與成果 |

### 🎞️ 動態視覺

- **首頁 Hero**：文字 scramble 動畫、Header 進場、Lottie 視覺卡片。
- **區塊進場**：關於我、作品、服務、技術堆疊與專案列表使用 GSAP 建立捲動進場效果。
- **跑馬燈**：作品分類、Title Banner 與技術圖示支援無縫循環。

### 🗂️ 作品資料管理

- **Pinia 集中資料源**：作品清單與作品詳情都由 `src/stores/works.js` 管理。
- **動態詳情頁**：依照 `/works/:id` 從 store 取得對應作品內容。
- **子組件自取資料**：`WorkHero.vue` 與 `WorkContent.vue` 直接從 Pinia 讀取資料，不透過父層 props 拆傳。

### ✉️ 聯絡彈窗

- **全站共用狀態**：透過 `useContactModal.js` 控制 ContactModal 開關。
- **多入口開啟**：Header「聯絡我」與專案彈窗內的聯絡按鈕都能開啟同一個表單。
- **RWD 彈窗**：桌機顯示右下角彈窗，手機顯示底部面板。

## 🏗️ 技術架構

| 層級 | 技術 | 說明 |
|---|---|---|
| 前端框架 | Vue 3 | 使用 Composition API 與 SFC 建立頁面與元件 |
| 建置工具 | Vite | 提供快速開發環境與 production build |
| 路由 | Vue Router | 管理首頁、關於、作品列表與作品詳情路由 |
| 狀態管理 | Pinia | 管理作品資料與全站狀態 |
| 樣式 | Tailwind CSS v4 | 建立 RWD、版面、卡片與互動樣式 |
| 動畫 | GSAP | 處理進場動畫、捲動動畫與跑馬燈 |
| 動態素材 | vue3-lottie | 顯示 Lottie 動畫素材 |
| HTTP 工具 | Axios | 預留 API 串接能力 |
| 字體 | SweiShear / Fontsource | 設定中英文視覺字體 |

## 📚 使用指南

### 安裝專案

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 建置正式版本

```bash
npm run build
```

### 預覽正式版本

```bash
npm run preview
```

### 作品資料維護

1. 開啟 `src/stores/works.js`。
2. 在 `workDetailData` 新增或修改作品詳情資料。
3. 在 `workListMeta` 補上清單卡片需要的 `category`、`image`、`description`、`tags`。
4. 確認作品 `id` 與路由 `/works/:id` 對應。

## 🔌 系統流程

### 作品詳情資料流程

```txt
使用者點擊 WorkList 作品卡片
→ router.push('/works/:id')
→ WorkHero / WorkContent 讀取 route params
→ Pinia getWorkById(id)
→ 元件各自渲染需要的作品資料
```

### 聯絡彈窗流程

```txt
使用者點擊 Header 聯絡我
→ openContactModal()
→ AppDefault 內的 ContactModal 開啟
→ 顯示遮罩與聯絡表單
→ submit 後 emit payload
```

## ✅ 專案成果

### 技術亮點

- 使用 Vue Router + Pinia 建立作品列表與作品詳情資料流。
- 使用 GSAP 製作 Hero、區塊進場、跑馬燈與捲動互動。
- 將 ContactModal 抽到 layout 層，透過 composable 實作全站共用彈窗狀態。
- 作品詳情元件直接從 Pinia 讀取資料，符合元件自取資料的開發習慣。

### 產品特色

- 首頁具備完整個人品牌視覺與互動節奏。
- 作品列表支援卡片 hover 展開描述與技術標籤。
- 作品詳情頁完整展示專案背景、技術堆疊、負責內容、解決問題與成果。
- RWD 對手機、平板與桌機皆有對應排版。

### 開發成果

- 完成首頁、關於頁、作品列表、作品詳情與全站聯絡彈窗。
- 建立可持續擴充的作品資料 store。
- 完成基礎 build 流程與 Vite production 打包。

## 🧩 未來規劃

- [x] 完成 Vue 3 + Vite 專案架構
- [x] 完成首頁主要區塊與 RWD
- [x] 完成作品列表與作品詳情頁
- [x] 將作品資料集中到 Pinia 管理
- [x] 完成全站 ContactModal 共用狀態
- [ ] 串接正式聯絡表單寄送服務
- [ ] 替作品詳情補齊 Demo / Source 連結
- [ ] 增加作品圖片與案例截圖
- [ ] 優化 Lottie 與大型圖片造成的 bundle size
- [ ] 補上 SEO metadata 與 Open Graph 圖片

## 📄 授權

本專案為個人作品集網站，保留所有權利。
