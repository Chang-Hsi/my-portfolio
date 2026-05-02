<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-[#faf7f6] px-8 py-[100px] text-[#2a1434] md:px-10 max-lg:py-20 max-md:px-4 max-md:py-16"
  >
    <!-- 一條線 + 標題 -->
    <div
      class="flex items-center gap-4 text-4xl font-bold text-[#2a1434] max-md:text-[24px]"
    >
      <span
        ref="labelLineRef"
        class="block h-px w-10 origin-left scale-x-0 bg-[#bdb6ba] max-md:w-9"
      ></span>

      <span ref="labelTextRef" class="inline-block opacity-0">
        {{ title }}
      </span>
    </div>

    <!-- 專案表格 -->
    <div ref="tableRef" class="mt-12 border-t border-[#d8d1d4] max-md:mt-10">
      <button
        v-for="(project, index) in projects"
        :key="project.name"
        type="button"
        class="project-row grid w-full grid-cols-12 items-start gap-4 border-b border-[#d8d1d4] px-0 py-8 text-left transition-colors duration-300 hover:bg-[#eeeae7]/60 max-lg:grid-cols-8 max-lg:gap-x-5 max-lg:gap-y-4 max-md:grid-cols-[1.35fr_0.75fr_0.75fr] max-md:gap-x-4 max-md:gap-y-0 max-md:py-6 max-md:hover:bg-transparent"
        :class="index % 2 === 1 ? 'bg-[#f4f0ef]/30' : 'bg-transparent'"
        @click="openModal(project)"
      >
        <!-- 編號：桌機顯示，手機隱藏 -->
        <div
          class="col-span-1 font-mono text-[24px] text-[#8c8390] max-lg:col-span-1 max-md:hidden"
        >
          {{ String(index + 1).padStart(2, "0") }}
        </div>

        <!-- 專案名稱 -->
        <div class="col-span-3 max-lg:col-span-7 max-md:col-span-1">
          <h3
            class="font-zh text-[26px] font-bold leading-tight text-[#2a1434] max-md:text-[17px] max-md:leading-[1.6]"
          >
            {{ project.name }}
          </h3>
        </div>

        <!-- 服務內容 -->
        <div
          class="col-span-3 space-y-2 max-lg:col-span-3 max-lg:col-start-2 max-md:col-span-1 max-md:col-start-auto max-md:space-y-1"
        >
          <p
            v-for="item in project.services"
            :key="item"
            class="font-zh text-[18px] font-medium leading-relaxed text-[#6f6573] max-md:text-[14px] max-md:leading-[1.7]"
          >
            {{ item }}
          </p>
        </div>

        <!-- 角色 -->
        <div
          class="col-span-3 space-y-2 max-lg:col-span-3 max-md:col-span-1 max-md:space-y-1"
        >
          <p
            v-for="role in project.roles"
            :key="role"
            class="font-zh text-[18px] font-medium leading-relaxed text-[#6f6573] max-md:text-[14px] max-md:leading-[1.7]"
          >
            {{ role }}
          </p>
        </div>

        <!-- 技術標籤：桌機顯示，手機隱藏 -->
        <div
          class="col-span-2 flex flex-col flex-wrap justify-end gap-2 max-lg:col-span-2 max-md:hidden"
        >
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="ml-auto w-fit rounded-full bg-[#ece7e6] px-3 py-1 font-mono text-[14px] text-[#4a3c4f]"
          >
            {{ tag }}
          </span>
        </div>
      </button>
    </div>

    <!-- 遮罩 -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-40 bg-[#2a1434]/12 backdrop-blur-[1px]"
        @click="closeModal"
      ></div>
    </Transition>

    <!-- NDA 彈窗 -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="translate-y-8 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="translate-y-8 opacity-0 scale-95"
    >
      <aside
        v-if="isModalOpen"
        class="fixed bottom-10 right-10 z-50 w-[min(420px,calc(100vw-48px))] rounded-2xl bg-white p-8 shadow-[0_22px_60px_rgba(0,0,0,0.18)] max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:w-full max-md:rounded-b-none max-md:rounded-t-2xl max-md:p-6"
      >
        <button
          type="button"
          class="absolute right-6 top-6 text-2xl leading-none text-[#8c8390] transition hover:text-[#2a1434] max-md:right-5 max-md:top-5"
          @click="closeModal"
          aria-label="關閉"
        >
          ×
        </button>

        <div>
          <h3
            class="font-sans text-[36px] font-black leading-none text-[#202024] max-md:text-[32px]"
          >
            NDA.
          </h3>

          <p class="mt-1 font-zh text-[14px] font-medium text-[#9a9398]">保密協議專案</p>
        </div>

        <p
          class="mt-6 font-zh text-[17px] font-medium leading-[1.8] text-[#4f4653] max-md:text-[16px]"
        >
          這個專案簽有保密協議（NDA），為了遵守合約，具體的設計細節與系統架構無法在此公開。
        </p>

        <div class="mt-5 rounded-lg bg-[#f3f1f0] p-4">
          <p class="font-zh text-[14px] leading-[1.7] text-[#8c8390]">
            如果您對這段開發經驗或技術類型有興趣，非常歡迎聯絡我，我很樂意在不違反協議的範圍內與您分享。
          </p>
        </div>

        <button
          type="button"
          class="mt-7 flex h-14 w-full items-center justify-center rounded-lg bg-[#1f1f23] font-zh text-[18px] font-bold text-white no-underline transition hover:bg-[#2a1434] max-md:h-12 max-md:text-[16px]"
          @click="openContactModal"
        >
          聯絡我
        </button>
      </aside>
    </Transition>
  </section>

</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { openContactModal as showContactModal } from "../../composables/useContactModal";

gsap.registerPlugin(ScrollTrigger);

defineProps({
  title: {
    type: String,
    default: "參與開發的專案",
  },
});

const sectionRef = ref(null);
const labelLineRef = ref(null);
const labelTextRef = ref(null);
const tableRef = ref(null);

const isModalOpen = ref(false);
const selectedProject = ref(null);

const projects = [
  {
    name: "Payeasy企業交流專區",
    services: ["網頁維運", "需求開發"],
    roles: ["前端開發", "UI/UX 設計"],
    tags: ["Vue", "Bootstrap"],
  },
  {
    name: "PopDaily",
    services: ["網頁重構"],
    roles: ["前端開發"],
    tags: ["Vue", "Element+"],
  },
  {
    name: "豪聲音樂",
    services: ["APP開發", "網頁開發"],
    roles: ["前端開發"],
    tags: ["Vue", "Swift"],
  },
  {
    name: "兆基屋管",
    services: ["APP開發"],
    roles: ["前端開發"],
    tags: ["Vue", "Tailwind", "Swift UI"],
  },
  {
    name: "運動場館管理系統",
    services: ["網頁開發"],
    roles: ["前端開發", "金流串接"],
    tags: ["Vue", "Tailwind", "綠界金流"],
  },
  {
    name: "Mosji夢市集官網",
    services: ["網頁開發"],
    roles: ["網頁開發", "品牌重塑", "UI/UX設計"],
    tags: ["Vue", "Tailwind", "Nuxt"],
  },
  {
    name: "RIV精緻洗衣",
    services: ["網頁開發", "POS系統", "Line LIFF"],
    roles: ["前端開發", "金流串接", "硬體串接"],
    tags: ["Vue", "Liff", "Line Pay"],
  },
];

let ctx;

function openModal(project) {
  selectedProject.value = project;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedProject.value = null;
}

function openContactModal() {
  closeModal();
  showContactModal();
}

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    const rows = tableRef.value.querySelectorAll(".project-row");

    gsap.set(labelLineRef.value, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(labelTextRef.value, {
      opacity: 0,
      x: -18,
    });

    gsap.set(rows, {
      opacity: 0,
      y: 28,
    });

    const labelTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 75%",
        once: true,
      },
    });

    labelTl
      .to(labelLineRef.value, {
        scaleX: 1,
        duration: 0.65,
        ease: "power3.out",
      })
      .to(
        labelTextRef.value,
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.35"
      );

    gsap.to(rows, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: tableRef.value,
        start: "top 78%",
        once: true,
      },
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>
