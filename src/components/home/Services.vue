<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-[#faf7f6] px-10 text-[#2a1434] max-lg:px-6 max-lg:pb-0 max-md:px-5 max-md:pb-0"
  >
    <!-- 一條線 + 我能幫你做什麼 -->
    <div
      class="flex items-center gap-4 text-4xl font-bold text-[#2a1434] max-md:text-[28px]"
    >
      <span
        ref="labelLineRef"
        class="block h-px w-10 origin-left scale-x-0 bg-[#bdb6ba]"
      ></span>

      <span ref="labelTextRef" class="inline-block opacity-0"> 我能幫你做什麼 </span>
    </div>

    <!-- 三張服務卡片 -->
    <div
      ref="cardsRef"
      class="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 max-lg:mt-14 max-md:mt-10 max-md:gap-6"
    >
      <article
        v-for="service in services"
        :key="service.title"
        class="service-card group rounded-2xl p-4 opacity-0 transition-colors duration-500 max-md:p-3"
        :class="service.hoverBgClass"
      >
        <!-- Lottie 圖像區 -->
        <div
          class="flex h-[520px] items-center justify-center overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[0.94] max-lg:h-[420px] max-md:h-[340px] max-sm:h-[280px]"
          :class="service.bgClass"
        >
          <Vue3Lottie
            :animationData="service.animation"
            :loop="true"
            :autoplay="true"
            class="h-[82%] w-[82%] transition-transform duration-500 ease-out group-hover:scale-[0.92]"
          />
        </div>

        <!-- 文字區 -->
        <div class="mt-5 px-2 pb-3 max-md:mt-4">
          <h3
            class="font-zh text-[38px] font-extrabold leading-none text-[#2a1434] max-md:text-[30px]"
          >
            {{ service.title }}
          </h3>

          <div
            class="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 max-md:gap-x-6 max-sm:grid-cols-1 max-sm:gap-y-2"
          >
            <p
              v-for="item in service.items"
              :key="item"
              class="font-zh text-[22px] font-medium leading-relaxed text-[#2a1434] max-md:text-[18px]"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Vue3Lottie } from "vue3-lottie";

import ask from "../../assets/lottie/ask.json";
import design from "../../assets/lottie/design.json";
import web from "../../assets/lottie/web.json";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const labelLineRef = ref(null);
const labelTextRef = ref(null);
const cardsRef = ref(null);

const services = [
  {
    title: "開發",
    animation: web,
    bgClass: "bg-[#9ee9dc]",
    hoverBgClass: "hover:bg-[#c9f4ec]",
    items: ["網頁開發", "App 開發", "桌面應用開發", "網站部署", "雲端部署", "SEO 優化"],
  },
  {
    title: "設計",
    animation: design,
    bgClass: "bg-[#f5dfec]",
    hoverBgClass: "hover:bg-[#faeaf3]",
    items: ["創意發想", "品牌定位", "UI/UX 設計", "動態效果設計", "系統設計"],
  },
  {
    title: "顧問與維運",
    animation: ask,
    bgClass: "bg-[#f8e4c7]",
    hoverBgClass: "hover:bg-[#fdeed8]",
    items: ["專案管理", "系統整合", "網站維運", "成效追蹤", "數位轉型", "AI 串接"],
  },
];

let ctx;

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    const cards = cardsRef.value.querySelectorAll(".service-card");

    gsap.set(labelLineRef.value, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(labelTextRef.value, {
      opacity: 0,
      x: -18,
    });

    gsap.set(cards, {
      opacity: 0,
      y: 56,
      scale: 0.98,
    });

    /**
     * 標題線條與文字滑出
     */
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

    /**
     * 三張卡片 stagger 進場
     */
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      stagger: 0.16,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.value,
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
