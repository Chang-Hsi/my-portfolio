<template>
  <section class="bg-[#faf7f6] px-4 py-24 text-[#2a1434]">
    <div class="mx-auto grid w-full max-w-[1720px] grid-cols-1 gap-4 lg:grid-cols-2">
      <!-- 左區塊：工作經歷 -->
      <div class="px-4">
        <!-- 標題 -->
        <div class="flex items-center gap-4">
          <span class="h-px w-10 bg-[#bdb6ba]"></span>
          <h2 class="font-zh text-2xl font-bold text-[#2a1434]">工作經歷</h2>
        </div>

        <!-- 時間軸 -->
        <div class="relative mt-12 pl-12">
          <!-- 垂直線 -->
          <div class="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-[#e2dcdf]"></div>

          <div
            v-for="item in workExperiences"
            :key="item.title"
            class="relative pb-16 last:pb-0"
          >
            <!-- 半圓點 -->
            <span
              class="absolute -left-12 top-2 h-4 w-2 rounded-r-full bg-[#e2dcdf]"
            ></span>

            <p class="font-mono text-sm tracking-wider text-[#9a939f]">
              {{ item.period }}
            </p>

            <h3 class="mt-3 font-zh text-2xl font-bold text-[#2a1434]">
              {{ item.title }}
            </h3>

            <p class="mt-3 font-zh text-lg font-bold text-[#8a8190]">
              {{ item.company }}
            </p>

            <p
              class="mt-4 max-w-[760px] font-zh text-base font-medium leading-8 text-[#6f6573]"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- 右區塊：開發經驗 -->
      <div ref="skillsSectionRef" class="px-4">
        <!-- 標題 -->
        <div class="flex items-center gap-4">
          <span class="h-px w-10 bg-[#bdb6ba]"></span>
          <h2 class="font-zh text-2xl font-bold text-[#2a1434]">開發經驗</h2>
        </div>

        <!-- 四區塊 -->
        <div class="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          <div v-for="group in skillGroups" :key="group.title" class="skill-group">
            <div class="border-b border-[#d8d1d4] pb-4">
              <h3 class="font-zh text-base font-bold text-[#5b5060]">
                {{ group.title }}
              </h3>
            </div>

            <div class="mt-6 space-y-6">
              <div v-for="skill in group.skills" :key="skill.name" class="skill-item">
                <div class="flex items-center justify-between gap-4">
                  <p class="font-zh text-base font-bold text-[#2a1434]">
                    {{ skill.name }}
                  </p>

                  <p class="shrink-0 font-mono text-sm text-[#6f6573]">
                    {{ skill.count }}
                    <span class="ml-1 font-zh">專案</span>
                  </p>
                </div>

                <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e3dee1]">
                  <div
                    class="skill-bar h-full w-0 rounded-full bg-[#2a1434]"
                    :data-percent="skill.percent"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /右區塊 -->
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsSectionRef = ref(null);

const workExperiences = [
  {
    period: "2023 – 2025",
    title: "全端工程師",
    company: "mosji Software Technology Co., Ltd.",
    description:
      "主導 10+ 個產品網站與 App 的重構與功能開發，涵蓋電商、媒體、企業官網等類型。導入 Tailwind CSS、Git Flow、CI/CD 等現代開發流程，縮短交付週期並提升程式碼品質，同時針對核心頁面做效能調校，顯著改善載入速度與使用者體驗。",
  },
  {
    period: "2021 – 2023",
    title: "接案工程師",
    company: "Freelance",
    description:
      "獨立承接餐飲、零售、服務業等多元產業的網站開發專案，全程負責需求訪談、技術提案到部署上線。自行處理金流串接、第三方服務整合與硬體設備串接，累積豐富的跨領域全端實戰經驗。",
  },
  {
    period: "2020 – 2021",
    title: "國文補教老師",
    company: "Estin Education Co., Ltd.",
    description:
      "負責國小及國中學員之國文、歷史教學，針對不同學制設計系統化教案。透過生動具邏輯的授課方式，幫助學生建立史地脈絡與文學底蘊，並在任職期間有效提升學員在校成績與升學考試表現。",
  },
];

const skillGroups = [
  {
    title: "前端開發",
    skills: [
      {
        name: "Vue.js",
        count: 12,
        percent: 60,
      },
      {
        name: "Nuxt.js",
        count: 8,
        percent: 40,
      },
      {
        name: "React",
        count: 5,
        percent: 25,
      },
      {
        name: "TypeScript",
        count: 10,
        percent: 50,
      },
      {
        name: "Vite",
        count: 20,
        percent: 100,
      },
    ],
  },
  {
    title: "UI / 動畫",
    skills: [
      {
        name: "Tailwind CSS",
        count: 15,
        percent: 75,
      },
      {
        name: "Figma",
        count: 10,
        percent: 50,
      },
      {
        name: "GSAP",
        count: 6,
        percent: 30,
      },
      {
        name: "Three.js",
        count: 2,
        percent: 10,
      },
    ],
  },
  {
    title: "後端開發",
    skills: [
      {
        name: "Fastify",
        count: 3,
        percent: 15,
      },
      {
        name: "Supabase",
        count: 4,
        percent: 20,
      },
      {
        name: "PostgreSQL",
        count: 4,
        percent: 20,
      },
      {
        name: "RESTful API",
        count: 8,
        percent: 40,
      },
      {
        name: "Netlify",
        count: 7,
        percent: 35,
      },
      {
        name: "Cloudflare",
        count: 3,
        percent: 15,
      },
    ],
  },
  {
    title: "其他",
    skills: [
      {
        name: "SEO",
        count: 5,
        percent: 25,
      },
      {
        name: "Google Analytics",
        count: 5,
        percent: 25,
      },
      {
        name: "Git",
        count: 20,
        percent: 100,
      },
      {
        name: "Electron",
        count: 1,
        percent: 5,
      },
    ],
  },
];

let ctx;

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    const bars = gsap.utils.toArray(".skill-bar");

    /**
     * 初始狀態：所有進度條歸 0
     */
    gsap.set(bars, {
      width: "0%",
    });

    /**
     * 每條進度條各自建立 ScrollTrigger。
     * 進入視圖時長出來；離開視圖時歸 0。
     */
    bars.forEach((bar, index) => {
      const targetPercent = Number(bar.dataset.percent || 0);

      ScrollTrigger.create({
        trigger: bar,
        start: "top 85%",
        end: "bottom 15%",

        /**
         * 往下滑進入視圖
         */
        onEnter: () => {
          gsap.to(bar, {
            width: `${targetPercent}%`,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.025,
            overwrite: true,
          });
        },

        /**
         * 往上滑重新進入視圖
         */
        onEnterBack: () => {
          gsap.to(bar, {
            width: `${targetPercent}%`,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.025,
            overwrite: true,
          });
        },

        /**
         * 往上滑離開視圖
         */
        onLeaveBack: () => {
          gsap.to(bar, {
            width: "0%",
            duration: 0.35,
            ease: "power2.in",
            overwrite: true,
          });
        },
      });
    });
  }, skillsSectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>
