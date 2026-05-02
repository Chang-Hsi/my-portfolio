<template>
  <section
    ref="sectionRef"
    class="relative min-h-screen overflow-hidden bg-[#faf7f6] px-10 py-20 text-[#2a1434] max-lg:px-8 max-md:min-h-[100svh] max-md:px-5 max-md:py-14"
  >
    <!-- ABOUT / ME. -->
    <h1
      class="select-text font-sans text-[clamp(96px,10vw,220px)] font-semibold uppercase leading-[0.92] tracking-[-0.055em] text-[#2a1434] max-lg:text-[clamp(82px,16vw,160px)] max-md:text-[clamp(72px,14vw,120px)] pt-10"
    >
      <span ref="aboutWordRef" class="block"> ABOUT </span>

      <span
        ref="meWordRef"
        class="about-outline-word block transition-colors duration-300"
      >
        ME.
      </span>
    </h1>

    <!-- intro：上半文字 -->
    <p
      ref="introRef"
      class="mt-16 max-w-[720px] font-zh text-[clamp(22px,2vw,32px)] font-medium leading-[1.75] tracking-[0.02em] text-zinc-600 max-md:mt-12 max-md:text-[19px]"
    >
      嗨，我是 Douli。<br class="hidden max-md:block" />
      喜歡把複雜的需求，變成真實可用的數位產品。
    </p>

    <!-- 下半內容：左 claim + 右段落 -->
    <div
      class="mt-28 grid grid-cols-12 items-start gap-x-16 gap-y-12 max-xl:gap-x-12 max-lg:mt-20 max-md:mt-16 max-md:block"
    >
      <!-- 左側 claim -->
      <div class="col-span-6">
        <p
          ref="claimRef"
          class="font-zh text-[clamp(30px,2.8vw,68px)] font-black leading-[1.28] tracking-[-0.02em] text-[#2a1434] max-md:text-[clamp(30px,9vw,26px)]"
        >
          不只是寫程式， 我更在乎
          <span class="italic text-[#5f5367]"> 使用者體驗 </span>
          與 <span class="italic text-[#5f5367]">細部微互動</span> 。
        </p>
      </div>

      <!-- 右側說明文字 -->
      <div
        ref="bodyRef"
        class="col-span-6 col-start-8 flex-1 pt-2 max-xl:col-span-6 max-xl:col-start-7 max-md:mt-12 max-md:max-w-none"
      >
        <div
          class="space-y-7 font-zh text-[20px] font-medium leading-[1.9] tracking-[0.02em] text-[#6a6070] max-md:text-[16px]"
        >
          <p class="body-copy">
            從接觸 前端
            設計的那一刻起，我就愛上了網頁開發的魅力。對我來說，程式碼就像畫筆，能讓設計稿在瀏覽器裡真實呼吸。
          </p>

          <p class="body-copy">
            好的產品，技術和美感缺一不可。每次開發，我不只追求架構穩固、效能優異，也很堅持那些「不起眼」的小細節——轉場動畫、響應式佈局、hover
            的手感——往往正是這些，讓使用者記住一個產品。
          </p>

          <p class="body-copy">
            持續學習新技術、不斷挑戰自己的邊界，是我每天最享受的事。
          </p>
        </div>
      </div>
    </div>
  </section>
  <ActiveLine />
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import ActiveLine from "../common/ActiveLine.vue";

const sectionRef = ref(null);
const aboutWordRef = ref(null);
const meWordRef = ref(null);
const introRef = ref(null);
const claimRef = ref(null);
const bodyRef = ref(null);

let ctx;

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    const bodyCopies = bodyRef.value?.querySelectorAll(".body-copy") ?? [];

    gsap.set([aboutWordRef.value, meWordRef.value, introRef.value, claimRef.value], {
      opacity: 0,
      y: 32,
    });

    gsap.set(bodyCopies, {
      opacity: 0,
      y: 24,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl
      /**
       * ABOUT / ME.
       */
      .to(aboutWordRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.75,
      })
      .to(
        meWordRef.value,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
        },
        "-=0.35"
      )

      /**
       * intro
       */
      .to(
        introRef.value,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        "-=0.25"
      )

      /**
       * claim
       */
      .to(
        claimRef.value,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.15"
      )

      /**
       * right body
       */
      .to(
        bodyCopies,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
        },
        "-=0.42"
      );
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<style scoped>
.about-outline-word {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  letter-spacing: -0.075em;
  color: transparent;
  -webkit-text-stroke: 1.4px #2a1434;
}

.about-outline-word:hover {
  color: rgb(42 20 52 / 0.5);
}

@media (max-width: 768px) {
  .about-outline-word {
    -webkit-text-stroke-width: 1px;
  }
}
</style>
