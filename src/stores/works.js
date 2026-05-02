import { defineStore } from "pinia";
import { ref } from "vue";

import workMall from "../assets/imgs/blog.png";
import workMocky from "../assets/imgs/crm.png";
import workStock from "../assets/imgs/finance.png";
import workMac from "../assets/imgs/shopping.png";
import workCyberpunk from "../assets/imgs/company.png";
import workSheetChat from "../assets/imgs/idclone-b.png";

export const workDetailData = [
  {
    id: "doulis-blog",
    title: "Douli's Blog",
    period: "2026/3~仍在進行",
    heroDescription:
      "Douli's Blog 是個人獨立 Side Project，使用 Next.js 開發，目標是建立一套高效的靜態內容管理流程。只需要輸入文章內容，即可將文章與目錄自動推入正確位置，形成適合長期維護的技術部落格系統。專案以 content/posts 為核心，結合 Markdown / MDX 解析、Frontmatter 管理、文章排序、Draft 過濾與 SSG 預渲染，讓技術文章能以穩定、快速且可擴充的方式發佈。",
    techStack: [
      {
        label: "前端框架",
        value: "Next.js 16 (App Router) + TypeScript",
      },
      {
        label: "樣式系統",
        value: "Tailwind CSS",
      },
      {
        label: "內容格式",
        value: "Markdown / MDX",
      },
      {
        label: "內容管理",
        value: "content/posts + Frontmatter",
      },
      {
        label: "路由與預渲染",
        value: "多層級路由 + generateStaticParams + SSG",
      },
      {
        label: "程式碼高亮",
        value: "rehype-pretty-code + showLineNumbers",
      },
      {
        label: "部署",
        value: "GitHub + Vercel",
      },
      {
        label: "開發方式",
        value: "個人獨立開發，建立技術內容發佈流程",
      },
    ],
    roleDescription:
      "此專案由我獨立完成部落格架構規劃、內容讀取流程、路由設計、MDX 解析、程式碼高亮與部署流程，目標是打造可長期維護的技術寫作平台。",
    responsibilities: [
      "部落格資訊架構與內容管理流程設計",
      "Markdown / MDX 讀取函式與 Frontmatter 解析",
      "文章排序、Draft 過濾與內容狀態管理",
      "多層級路由設計，包含首頁、文章列表與文章詳情頁",
      "使用 generateStaticParams 完成文章頁 SSG 預渲染",
      "整合 rehype-pretty-code 與行號顯示，優化技術文章閱讀體驗",
      "串接 GitHub 與 Vercel，建立 Preview / Production 部署流程",
    ],
    demoUrl: "https://douli-blog.vercel.app/",
    sourceUrl: "https://github.com/Chang-Hsi/my-blog",
    problemIntro:
      "一般個人技術部落格若缺乏良好的內容管理流程，文章與目錄容易隨著時間變得混亂，也不利於持續發佈與維護。Douli's Blog 目標是讓技術內容能以更穩定、更自動化的方式被整理、讀取與發佈。",
    problems: [
      {
        title: "降低文章管理成本",
        description:
          "以 content/posts 作為內容核心，讓文章資料集中管理，減少手動維護目錄與路由的成本。",
      },
      {
        title: "建立可擴充的文章資料格式",
        description:
          "透過 Frontmatter 管理文章標題、日期、草稿狀態等欄位，讓文章資料具備結構化與可擴充性。",
      },
      {
        title: "自動化靜態頁面產生",
        description:
          "使用 generateStaticParams 產生文章靜態頁，提升載入速度與部署穩定性。",
      },
      {
        title: "優化技術文章閱讀體驗",
        description:
          "整合程式碼語法高亮與行號顯示，讓程式碼片段更易讀、更適合技術文章呈現。",
      },
      {
        title: "區分正式文章與草稿",
        description:
          "建立 Draft 過濾機制，避免尚未完成的文章被正式發佈。",
      },
      {
        title: "建立穩定部署流程",
        description:
          "串接 GitHub 與 Vercel，支援預覽環境與正式環境部署，讓內容更新流程更順暢。",
      },
    ],
    technicalHighlights: [
      "以 content/posts 為核心，自研 Markdown / MDX 讀取函式",
      "解析 Frontmatter 欄位並實作文章排序與 Draft 過濾機制",
      "採用 App Router 多層級路由架構，支援首頁、文章列表與文章詳情頁",
      "透過 generateStaticParams 完成文章頁 SSG 預渲染",
      "整合 rehype-pretty-code 程式碼語法高亮與 showLineNumbers 行號顯示",
    ],
    productFeatures: [
      "只需新增文章檔案，即可自動進入正確內容流程",
      "支援草稿文章過濾，避免未完成內容曝光",
      "文章列表與文章詳情頁自動產生",
      "適合長期維護技術筆記與開發紀錄",
      "透過 Vercel 建立線上展示與部署環境",
    ],
    developmentResults: [
      "完成個人技術部落格的核心內容管理架構",
      "建立 Markdown / MDX 到靜態頁面的完整轉換流程",
      "完成程式碼閱讀體驗優化與部署流程整合",
    ],
  },

  {
    id: "crm-control-system",
    title: "CRM 控制系統",
    period: "2026/4~仍在進行",
    heroDescription:
      "CRM 控制系統是 B2B CRM 前端企劃與產品原型，主旨是整合客戶、商機、報價、客訴與互動紀錄等流程，建立可操作且可持續擴充的業務管理系統。整體以前端架構為核心，先透過靜態資料完成產品流程與操作驗證，確立各功能頁面、互動邏輯與資訊呈現方式，後續再逐步銜接後端服務與資料庫，發展為完整系統。",
    techStack: [
      {
        label: "前端框架",
        value: "Vue 3 + Vite",
      },
      {
        label: "UI 框架",
        value: "Element Plus + Tailwind CSS",
      },
      {
        label: "狀態管理",
        value: "Pinia",
      },
      {
        label: "路由系統",
        value: "Vue Router",
      },
      {
        label: "資料視覺化",
        value: "ECharts / vue-echarts",
      },
      {
        label: "文字編輯器",
        value: "Tiptap",
      },
      {
        label: "部署",
        value: "GitHub Actions + Vercel",
      },
      {
        label: "開發方式",
        value: "以前端原型驗證產品流程，後續銜接後端服務",
      },
    ],
    roleDescription:
      "此專案由我負責前端產品企劃、介面設計、模組架構、狀態管理與資料視覺化設計，先以靜態資料完成 CRM 系統流程驗證，再為後續後端整合預留擴充空間。",
    responsibilities: [
      "CRM 產品流程規劃與前端原型設計",
      "Dashboard、客戶、商機、報價、客訴等多頁流程規劃",
      "使用 Vue Router 建立模組化導覽結構",
      "使用 Pinia 管理列表、詳情、篩選與操作狀態",
      "導入 ECharts / vue-echarts 製作分析圖表",
      "整合 Tiptap 支援備註、紀錄與富文字輸入需求",
      "建立 GitHub Actions + Vercel CI/CD 與部署流程",
    ],
    demoUrl: "https://crm-liard-gamma.vercel.app/",
    sourceUrl: "https://github.com/Chang-Hsi/crm",
    problemIntro:
      "B2B 業務流程常分散在客戶資料、商機進度、報價紀錄與客訴追蹤之間，若缺乏統一系統，容易造成資料斷裂、追蹤困難與協作效率下降。CRM 控制系統目標是先建立一套可操作的前端產品模型，驗證資訊架構與互動流程。",
    problems: [
      {
        title: "整合客戶資料",
        description:
          "將客戶資料、互動紀錄與狀態集中管理，減少業務資訊分散的問題。",
      },
      {
        title: "追蹤商機流程",
        description:
          "建立商機列表、詳情與篩選狀態，讓業務進度能被清楚追蹤。",
      },
      {
        title: "管理報價流程",
        description:
          "規劃報價相關資料與操作流程，讓報價紀錄更容易被保存與查詢。",
      },
      {
        title: "處理客訴紀錄",
        description:
          "透過客訴模組紀錄問題與處理狀態，提高後續追蹤與服務品質。",
      },
      {
        title: "建立資料視覺化儀表板",
        description:
          "使用圖表呈現績效、商機與營運資料，提升管理者掌握狀況的效率。",
      },
      {
        title: "保留後端擴充彈性",
        description:
          "先以靜態資料驗證前端流程，後續可逐步銜接 API 與資料庫。",
      },
    ],
    technicalHighlights: [
      "Vue 3 + Vite 建立模組化、高效率的前端開發流程",
      "Element Plus + Tailwind CSS 兼顧元件開發效率與客製化彈性",
      "Pinia 集中管理 CRM 各模組列表、詳情、篩選與操作狀態",
      "Vue Router 支援 Dashboard、客戶、商機、客訴等多頁流程切換",
      "ECharts / vue-echarts 強化績效、商機與營運數據視覺化",
      "Tiptap 支援備註、紀錄與內容輸入等富文字需求",
    ],
    productFeatures: [
      "整合客戶、商機、報價、客訴與互動紀錄流程",
      "以前端原型驗證完整產品操作方式",
      "支援儀表板與分析頁資料視覺化",
      "具備後續銜接後端與資料庫的擴充基礎",
      "已建立前端 CI/CD 與部署流程，可持續展示與驗證版本",
    ],
    developmentResults: [
      "完成 CRM 前端企劃與產品原型架構",
      "建立多模組 CRM 操作流程與資訊呈現方式",
      "完成前端 CI/CD 與靜態部署流程，支援持續版本驗證",
    ],
  },

  {
    id: "shopping-ecommerce",
    title: "享拼購物",
    period: "2026/2~仍在進行",
    heroDescription:
      "享拼購物是個人電商實作 Side Project，使用 Vue 3 技術棧開發。專案模擬主流電商平台的核心購物流程，涵蓋商品瀏覽、購物車與結帳等功能，並著重於跨組件狀態管理與高圖片負載場景下的前端性能優化。",
    techStack: [
      {
        label: "前端框架",
        value: "Vue 3 + TypeScript",
      },
      {
        label: "狀態管理",
        value: "Pinia",
      },
      {
        label: "UI 框架",
        value: "Element Plus + Tailwind CSS",
      },
      {
        label: "核心流程",
        value: "商品列表、動態導航、購物車、結帳流程",
      },
      {
        label: "效能優化",
        value: "大量商品圖片與 LCP 載入優化",
      },
      {
        label: "部署",
        value: "Vercel",
      },
      {
        label: "開發方式",
        value: "個人電商流程實作與前端性能練習",
      },
      {
        label: "產品類型",
        value: "電商網站 Side Project",
      },
    ],
    roleDescription:
      "此專案由我獨立完成商品瀏覽、動態導覽、購物車、結帳流程、跨頁狀態管理與效能優化，目標是模擬真實電商平台的核心購物體驗。",
    responsibilities: [
      "商品列表與動態導航系統開發",
      "模擬真實電商平台的商品瀏覽與分類流程",
      "使用 Pinia 管理全站購物車與商品狀態",
      "處理跨頁面、跨組件的狀態同步",
      "建立多層級購物車與結帳流程",
      "實作商品數量管理、價格計算與訂單流程",
      "針對大量商品圖片進行效能優化，改善 LCP 載入表現",
    ],
    demoUrl: "https://e-shopping-liart.vercel.app/",
    sourceUrl: "https://github.com/Chang-Hsi/e-shopping",
    problemIntro:
      "電商網站的核心體驗包含商品瀏覽、分類導覽、購物車狀態同步與結帳流程。若缺乏良好的狀態管理與效能設計，使用者容易在跨頁操作時遇到資料不同步、流程中斷或圖片載入過慢等問題。",
    problems: [
      {
        title: "商品瀏覽流程",
        description:
          "建立商品列表與動態導航，模擬主流電商平台的分類瀏覽體驗。",
      },
      {
        title: "全站購物車狀態",
        description:
          "使用 Pinia 管理購物車資料，確保跨頁面與跨組件狀態同步。",
      },
      {
        title: "數量與價格計算",
        description:
          "建立商品數量管理、價格計算與訂單流程，完成基礎購買體驗。",
      },
      {
        title: "多層級結帳流程",
        description:
          "拆分購物車與結帳操作步驟，讓流程更接近真實電商情境。",
      },
      {
        title: "圖片載入效能",
        description:
          "針對大量商品圖片進行載入優化，改善 LCP 與整體瀏覽體驗。",
      },
      {
        title: "線上展示環境",
        description:
          "透過 Vercel 部署，建立完整的線上展示版本供測試與展示。",
      },
    ],
    technicalHighlights: [
      "Vue 3 + TypeScript 建立電商前端架構",
      "Pinia 管理購物車與商品狀態，支援跨頁同步",
      "Element Plus + Tailwind CSS 建立 UI 元件與版面樣式",
      "建立商品列表、動態導航、購物車與結帳流程",
      "針對大量商品圖片場景進行效能優化，改善 LCP 表現",
    ],
    productFeatures: [
      "商品瀏覽與分類流程",
      "購物車狀態同步",
      "商品數量管理與價格計算",
      "多層級購物車與結帳流程",
      "部署於 Vercel，具備完整線上展示環境",
    ],
    developmentResults: [
      "完成電商網站核心購物流程實作",
      "完成跨組件狀態管理與購物車同步",
      "完成高圖片負載場景下的前端效能優化練習",
    ],
  },

  {
    id: "peripheral-payment-site",
    title: "周邊支付",
    period: "2025/11~2026/2",
    heroDescription:
      "周邊支付是企業形象網站與履歷投遞系統的全端 Side Project，使用 React 19 與 Node.js 開發。專案模擬 B2B 企業官網的商務場景，重點在於建立可靠的資料處理流程、表單安全驗證，以及完整的自動化測試與 DevOps 流程。",
    techStack: [
      {
        label: "前端框架",
        value: "React 19",
      },
      {
        label: "後端技術",
        value: "Node.js",
      },
      {
        label: "資料庫",
        value: "PostgreSQL + Prisma + Supabase",
      },
      {
        label: "狀態管理",
        value: "Redux Toolkit",
      },
      {
        label: "安全驗證",
        value: "Google reCAPTCHA",
      },
      {
        label: "檔案管理",
        value: "Cloudinary",
      },
      {
        label: "測試",
        value: "Vitest + Playwright",
      },
      {
        label: "CI/CD",
        value: "GitHub Actions + Lighthouse",
      },
    ],
    roleDescription:
      "此專案由我負責企業形象網站、履歷投遞表單、後端 API、表單安全驗證、檔案上傳、測試與 CI/CD 流程設計，目標是模擬完整企業網站從開發到維運的實務流程。",
    responsibilities: [
      "企業形象網站與履歷投遞系統開發",
      "完整表單資料處理與後端 API 架構設計",
      "整合 Google reCAPTCHA 防止機器人濫用",
      "在 API 層實作 Idempotency 防重送機制",
      "整合 Cloudinary 實作履歷檔案上傳與媒體管理",
      "使用 Vitest 與 Playwright 建立單元測試與 E2E 測試",
      "透過 GitHub Actions 建立 CI/CD pipeline",
      "整合 Lighthouse 進行效能與 SEO 自動化監控",
    ],
    demoUrl: "https://chang-hsi.github.io/idtech-clone/",
    sourceUrl: "https://github.com/Chang-Hsi/idtech-clone",
    problemIntro:
      "企業形象網站若包含履歷投遞或表單功能，需要同時考量資料安全、重複提交、防機器人濫用、檔案管理與部署維運流程。周邊支付專案目標是模擬 B2B 企業官網常見需求，建立一套從前端到後端都可靠的網站系統。",
    problems: [
      {
        title: "企業形象展示",
        description:
          "建立符合 B2B 商務情境的企業網站，呈現品牌、服務與核心資訊。",
      },
      {
        title: "履歷投遞流程",
        description:
          "實作完整表單資料處理流程，支援使用者提交履歷與相關資料。",
      },
      {
        title: "表單安全驗證",
        description:
          "整合 Google reCAPTCHA，降低機器人濫用表單與惡意請求風險。",
      },
      {
        title: "避免重複提交",
        description:
          "在 API 層實作 Idempotency 防重送機制，避免重複提交造成資料錯誤。",
      },
      {
        title: "履歷檔案管理",
        description:
          "整合 Cloudinary，處理履歷檔案上傳與媒體管理流程。",
      },
      {
        title: "自動化品質控管",
        description:
          "使用測試工具與 CI/CD pipeline，提升系統可靠度與維運效率。",
      },
    ],
    technicalHighlights: [
      "React 19 + Node.js 建立全端企業網站架構",
      "PostgreSQL + Prisma + Supabase 建立資料儲存與後端資料流程",
      "Google reCAPTCHA 防止機器人濫用表單",
      "API 層實作 Idempotency 防重送機制",
      "Cloudinary 管理履歷檔案與媒體資源",
      "Vitest + Playwright 建立單元測試與 E2E 測試",
      "GitHub Actions + Lighthouse 建立效能與 SEO 自動化監控",
    ],
    productFeatures: [
      "企業形象網站展示",
      "履歷投遞表單",
      "表單安全驗證",
      "履歷檔案上傳",
      "完整開發到維運流程",
    ],
    developmentResults: [
      "完成企業形象網站與履歷投遞系統的全端流程",
      "建立表單安全、檔案上傳、資料處理與防重送機制",
      "完成測試、CI/CD 與 Lighthouse 自動化監控流程",
    ],
  },

  {
    id: "peripheral-payment-cms",
    title: "周邊支付後台",
    period: "2025/12~仍在進行",
    heroDescription:
      "周邊支付後台是企業內容管理系統（CMS）Side Project，作為「周邊支付企業網站」的後台管理平台。專案以類 Strapi 架構設計，提供完整的內容治理、權限控管與系統監控能力，重點在於打造高可維護性的 B2B 管理系統架構與即時觀測能力。",
    techStack: [
      {
        label: "前端框架",
        value: "React 19",
      },
      {
        label: "後端技術",
        value: "Node.js",
      },
      {
        label: "資料庫",
        value: "PostgreSQL + Prisma",
      },
      {
        label: "狀態管理",
        value: "Redux Toolkit",
      },
      {
        label: "權限系統",
        value: "RBAC 多層級權限",
      },
      {
        label: "即時監控",
        value: "SSE + Lighthouse 狀態監控",
      },
      {
        label: "系統稽核",
        value: "Audit Log",
      },
      {
        label: "資料視覺化",
        value: "Chart 視覺化監控指標",
      },
    ],
    roleDescription:
      "此專案由我負責 CMS 後台架構設計、三區塊式管理工作區、RBAC 權限系統、SSE 監控儀表板、Audit Log 與視覺化系統數據呈現，目標是打造可維護、可觀測的 B2B 後台管理平台。",
    responsibilities: [
      "企業 CMS 後台產品架構與操作流程設計",
      "建立三區塊式管理工作區，提升 UI/UX 與後台操作效率",
      "設計 RBAC 多層級權限系統",
      "整合 SSE 建立觸發式監控儀表板",
      "動態呈現 Lighthouse 效能與狀態",
      "建立資安審計日誌 Audit Log，追蹤管理員操作與系統事件",
      "使用 Chart 視覺化系統數據與監控指標",
    ],
    demoUrl: "https://chang-hsi.github.io/idtech-clone-backstage/",
    sourceUrl: "https://github.com/Chang-Hsi/idtech-clone-backstage",
    problemIntro:
      "企業網站若需要長期維護內容、權限與系統狀態，就需要一套穩定的後台管理平台。周邊支付後台以 CMS 架構為核心，解決內容治理、權限控管、操作紀錄與即時監控等 B2B 管理系統常見需求。",
    problems: [
      {
        title: "內容治理",
        description:
          "建立後台管理平台，讓企業網站內容能被集中管理與維護。",
      },
      {
        title: "提升後台操作效率",
        description:
          "使用三區塊式管理工作區，讓列表、內容與設定操作更清楚。",
      },
      {
        title: "多角色權限控管",
        description:
          "透過 RBAC 權限系統支援不同角色的內容管理與操作權限。",
      },
      {
        title: "即時系統監控",
        description:
          "整合 SSE 建立即時監控儀表板，動態呈現 Lighthouse 效能與系統狀態。",
      },
      {
        title: "操作紀錄追蹤",
        description:
          "建立 Audit Log 系統，追蹤管理員操作紀錄與系統事件。",
      },
      {
        title: "強化可觀測性",
        description:
          "使用 Chart 視覺化系統數據與監控指標，提高系統觀測能力。",
      },
    ],
    technicalHighlights: [
      "React 19 + Node.js + PostgreSQL + Prisma 建立 CMS 後台架構",
      "Redux Toolkit 管理後台狀態與資料流程",
      "三區塊式管理工作區提升後台 UI/UX 與操作效率",
      "RBAC 多層級權限系統支援不同角色管理需求",
      "SSE 建立觸發式監控儀表板並動態呈現 Lighthouse 狀態",
      "Audit Log 追蹤管理員操作紀錄與系統事件",
      "Chart 視覺化監控指標，提升 Observability",
    ],
    productFeatures: [
      "企業內容管理系統",
      "多角色權限控管",
      "即時監控儀表板",
      "資安審計日誌",
      "系統數據視覺化",
    ],
    developmentResults: [
      "完成企業 CMS 後台管理平台核心架構",
      "建立權限、監控、稽核與視覺化等管理能力",
      "打造高可維護性的 B2B 後台系統基礎",
    ],
  },

  {
    id: "yippee-finance",
    title: "Yippee Finance",
    period: "2026/3~仍在進行",
    heroDescription:
      "Yippee Finance 是一個以財經資訊為核心的前端平台，主旨是把市場資料轉成可閱讀、可比較、可探索的視覺化介面。整體以 Nuxt 4 + Vue 3 建構，並搭配 Vuetify、Tailwind、Pinia，先用靜態資料完成可操作的產品形態，後續可平滑切換到真實資料來源。",
    techStack: [
      {
        label: "前端框架",
        value: "Nuxt 4 + Vue 3",
      },
      {
        label: "UI 框架",
        value: "Vuetify 4 + Tailwind CSS",
      },
      {
        label: "狀態管理",
        value: "Pinia",
      },
      {
        label: "金融圖表",
        value: "lightweight-charts",
      },
      {
        label: "資料視覺化",
        value: "vue-echarts + ECharts",
      },
      {
        label: "小型趨勢圖",
        value: "SVG Sparkline（自製）",
      },
      {
        label: "資料策略",
        value: "先以靜態資料完成產品形態，後續切換真實資料來源",
      },
      {
        label: "產品類型",
        value: "金融資訊與市場資料視覺化平台",
      },
    ],
    roleDescription:
      "此專案由我負責財經資訊平台的產品介面設計、資料呈現方式、金融圖表整合、視覺化分析與高密度資訊版面規劃，目標是讓市場資料更容易閱讀、比較與探索。",
    responsibilities: [
      "金融資訊平台產品架構與前端介面規劃",
      "使用 Nuxt 4 + Vue 3 建立前端架構",
      "整合 Vuetify、Tailwind 與 Pinia 建立可操作產品形態",
      "使用 lightweight-charts 建立高互動金融時間序列圖",
      "使用 ECharts 實作 Treemap 熱圖與比較折線圖",
      "自製 SVG Sparkline，用於高密度列表中的小型趨勢圖",
      "規劃靜態資料到真實資料來源的後續切換路徑",
    ],
    demoUrl: "https://finance-ashen-kappa.vercel.app/",
    sourceUrl: "https://github.com/Chang-Hsi/finance",
    problemIntro:
      "財經資料若只以表格或靜態文字呈現，使用者很難快速理解市場趨勢、產業結構與不同資產之間的比較關係。Yippee Finance 目標是把高密度市場資料轉換成可閱讀、可比較、可探索的視覺化介面。",
    problems: [
      {
        title: "市場資料閱讀困難",
        description:
          "透過圖表與資訊版面設計，將複雜市場資料轉成更容易閱讀的視覺介面。",
      },
      {
        title: "金融時間序列呈現",
        description:
          "使用 lightweight-charts 呈現股票、期貨與研究頁的高互動時間序列圖。",
      },
      {
        title: "產業結構分析",
        description:
          "透過 Treemap 熱圖與比較折線圖呈現 Sector、Industry、Company 權重與漲跌。",
      },
      {
        title: "高密度列表趨勢判讀",
        description:
          "自製 SVG Sparkline，在 World Indices / Assets 列表中呈現小型即時趨勢。",
      },
      {
        title: "可操作產品原型",
        description:
          "先以靜態資料建立完整產品形態，確保互動與資訊架構可被驗證。",
      },
      {
        title: "未來資料擴充",
        description:
          "保留後續切換真實資料來源的架構彈性，讓產品能逐步擴充。",
      },
    ],
    technicalHighlights: [
      "Nuxt 4 + Vue 3 建立金融資訊前端平台",
      "Vuetify 4 + Tailwind CSS 結合元件效率與版面客製化",
      "Pinia 管理前端狀態與資料流程",
      "lightweight-charts 支援 K 線、區間切換、成交量、crosshair、全螢幕與技術指標疊加",
      "vue-echarts + ECharts 實作 Treemap 熱圖與比較折線圖",
      "自製 SVG Sparkline，在高密度表格中兼顧效能與可讀性",
    ],
    productFeatures: [
      "市場資料視覺化",
      "股票、期貨與研究頁金融圖表",
      "市場板塊與產業結構分析",
      "高密度列表小型趨勢圖",
      "可從靜態資料平滑切換到真實資料來源",
    ],
    developmentResults: [
      "完成金融資訊平台的前端產品形態",
      "完成多種金融圖表與資料視覺化技術整合",
      "建立可閱讀、可比較、可探索的市場資料介面基礎",
    ],
  },
];

const workListMeta = {
  "doulis-blog": {
    category: "技術部落格",
    image: workMall,
    description:
      "以 Next.js 建立個人技術部落格與靜態內容管理流程，支援 Markdown / MDX、Frontmatter 與 SSG 預渲染。",
    tags: ["Next.js", "TypeScript", "MDX"],
  },
  "crm-control-system": {
    category: "B2B CRM / 後台系統",
    image: workMocky,
    description:
      "整合客戶、商機、報價、客訴與互動紀錄的 CRM 前端產品原型，先以靜態資料驗證完整操作流程。",
    tags: ["Vue", "Element Plus", "Pinia"],
  },
  "shopping-ecommerce": {
    category: "電商網站",
    image: workMac,
    description:
      "以 Vue 3 技術棧模擬主流電商平台，實作商品瀏覽、購物車、結帳流程與跨頁狀態管理。",
    tags: ["Vue", "TypeScript", "Pinia"],
  },
  "peripheral-payment-site": {
    category: "企業形象網站 / 全端系統",
    image: workCyberpunk,
    description:
      "使用 React 19 與 Node.js 模擬 B2B 企業官網與履歷投遞系統，整合表單安全、檔案上傳與 CI/CD。",
    tags: ["React", "Node.js", "Prisma"],
  },
  "peripheral-payment-cms": {
    category: "CMS / 後台管理",
    image: workSheetChat,
    description:
      "企業內容管理系統後台，提供內容治理、RBAC 權限控管、Audit Log 與即時系統監控能力。",
    tags: ["React", "Node.js", "RBAC"],
  },
  "yippee-finance": {
    category: "金融資訊平台",
    image: workStock,
    description:
      "以 Nuxt 4 建立財經資訊與市場資料視覺化平台，整合金融圖表、Treemap 熱圖與高密度資料介面。",
    tags: ["Nuxt", "ECharts", "Pinia"],
  },
};

function createWorkFromDetail(detail) {
  return {
    ...detail,
    ...workListMeta[detail.id],
  };
}

export const useWorksStore = defineStore("works", () => {
  const workDetails = ref(workDetailData.map(createWorkFromDetail));
  const works = ref(workDetails.value);

  function getWorkById(id) {
    const normalizedId = decodeURIComponent(String(id ?? ""));

    return (
      workDetails.value.find(
        (work) => work.id === normalizedId || work.title === normalizedId
      ) ??
      null
    );
  }

  return {
    workDetails,
    works,
    getWorkById,
  };
});
