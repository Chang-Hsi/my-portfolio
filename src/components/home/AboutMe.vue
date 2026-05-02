<template>
  <section
    ref="sectionRef"
    class="relative min-h-[70vh] overflow-hidden bg-[#faf7f6] px-10 pt-[90px] text-[#2a1434] max-lg:min-h-[auto] max-lg:px-6 max-lg:pt-16 max-md:px-5 max-md:pt-14"
  >
    <!-- 一條線 + 關於 -->
    <div
      class="flex items-center gap-4 text-4xl font-bold text-[#2a1434] max-md:text-[28px]"
    >
      <span
        ref="labelLineRef"
        class="block h-px w-10 origin-left scale-x-0 bg-[#bdb6ba]"
      ></span>

      <span ref="labelTextRef" class="inline-block opacity-0"> 關於 </span>
    </div>

    <!-- 文章 + 按鈕 -->
    <div
      class="ml-auto mt-[88px] w-full text-right max-lg:mt-16 max-md:mt-12 max-md:text-left"
    >
      <p
        ref="paragraphRef"
        class="about-copy m-0 text-right font-zh text-[clamp(32px,3.2vw,48px)] font-bold leading-[1.85] tracking-[0.02em] max-lg:text-[30px] max-md:text-right max-md:text-[clamp(16px,4.4vw,24px)] max-md:leading-[1.85]"
      >
        <span
          v-for="(line, lineIndex) in introLines"
          :key="lineIndex"
          class="about-line"
        >
          <span
            v-for="(clause, clauseIndex) in line"
            :key="`${lineIndex}-${clauseIndex}`"
            class="about-clause"
          >
            <span
              v-for="(char, charIndex) in Array.from(clause)"
              :key="`${lineIndex}-${clauseIndex}-${charIndex}`"
              class="about-char inline text-[#d5cfd2]"
            >
              {{ char === " " ? "\u00A0" : char }}
            </span>
          </span>
        </span>
      </p>

      <RouterLink
        ref="buttonRef"
        to="/about"
        class="mt-14 inline-flex translate-y-6 items-center justify-center rounded-full bg-[#252329] px-7 py-3 text-[18px] font-bold text-white opacity-0 shadow-[0_4px_10px_rgba(0,0,0,0.22)] no-underline max-md:mt-10 max-md:px-6 max-md:text-[16px]"
      >
        了解更多
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const labelLineRef = ref(null);
const labelTextRef = ref(null);
const paragraphRef = ref(null);
const buttonRef = ref(null);

const introLines = [
  ["嗨，我是Douli，", "一名熱愛把設計變成真實體驗的軟體工程師。"],
  [
    "開發過網頁、行動App和桌面應用程式，",
    "喜歡在每個新專案裡探索技術的可能性。",
  ],
  ["多年開發經驗，", "專注打造高效能、", "易於使用、", "且讓人眼睛一亮的應用程式。"],
];

let ctx;

function getButtonElement() {
  return buttonRef.value?.$el ?? buttonRef.value;
}

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    const charEls = paragraphRef.value.querySelectorAll(".about-char");
    const buttonEl = getButtonElement();

    /**
     * 初始狀態
     */
    gsap.set(labelLineRef.value, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(labelTextRef.value, {
      opacity: 0,
      x: -18,
    });

    gsap.set(charEls, {
      color: "#d5cfd2",
    });

    gsap.set(buttonEl, {
      opacity: 0,
      y: 24,
    });

    /**
     * 1. 「關於」滑出
     * 線條先由左到右長出來，
     * 接著「關於」從左側淡入滑出。
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
     * 2. 文章逐字變色
     *
     * 這裡不用單純 stagger，
     * 而是讓每一個字在 timeline 上有自己的起點。
     *
     * 好處：
     * - 更像影片中的閱讀進度
     * - 每個字都有灰色到深色的過渡
     * - 不容易變成整行一起變色
     */
    const charStep = 0.016;
    const charDuration = 0.06;

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 75%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    charEls.forEach((char, index) => {
      textTl.to(
        char,
        {
          color: "#2a1434",
          duration: charDuration,
          ease: "none",
        },
        index * charStep
      );
    });

    /**
     * 3. 了解更多按鈕
     *
     * 接在文字變色 timeline 後面。
     * 所以滑到 section 底部時，
     * 文字完成後按鈕才會由下往上出現。
     */
    textTl.to(
      buttonEl,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      charEls.length * charStep + charDuration + 0.08
    );
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<style scoped>
.about-line {
  display: block;
}

.about-clause {
  display: inline-block;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .about-line {
    display: contents;
  }

  .about-clause {
    display: block;
  }
}
</style>
