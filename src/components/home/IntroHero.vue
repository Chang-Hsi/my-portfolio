<script setup>
import "@fontsource/libre-bodoni/400.css";
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { Vue3Lottie } from "vue3-lottie";
import catAnimation from "../../assets/lottie/cat.json";
import AppHeader from "../../layouts/AppHeader.vue";

const targetText = "TW. DOULI";
const displayText = ref("");

const heroRef = ref(null);
const titleRef = ref(null);
const headerRef = ref(null);
const catCardRef = ref(null);
const lottieRef = ref(null);

const isLottieVisible = ref(false);

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getHeroMotionSettings() {
  const width = window.innerWidth;

  if (width <= 480) {
    return {
      initialScale: 0.58,
      finalY: "-10vh",
      finalScale: 0.68,
    };
  }

  if (width <= 768) {
    return {
      initialScale: 0.62,
      finalY: "-30vh",
      finalScale: 0.72,
    };
  }

  return {
    initialScale: 0.68,
    finalY: "-28vh",
    finalScale: 0.82,
  };
}

function progressiveScrambleText({
  target,
  cyclesPerChar = 5,
  cycleDuration = 38,
  settleDelay = 28,
}) {
  return new Promise((resolve) => {
    let currentIndex = 0;
    let currentCycle = 0;
    let lockedText = "";

    function getRandomChar() {
      const randomIndex = Math.floor(Math.random() * chars.length);
      return chars[randomIndex];
    }

    function revealNextChar() {
      const targetChar = target[currentIndex];

      /**
       * 如果是空白，直接加入，不做亂碼。
       * 這樣 "TW. DOULI" 中間的空白不會變成奇怪字母。
       */
      if (targetChar === " ") {
        lockedText += " ";
        currentIndex += 1;
        currentCycle = 0;
        displayText.value = lockedText;
        setTimeout(revealNextChar, settleDelay);
        return;
      }

      /**
       * 如果是標點，也可以直接加入。
       * 這樣 "." 會像結構的一部分，不會亂跳。
       * 如果你希望 "." 也亂跳，可以刪掉這段。
       */
      if (!/[A-Z]/i.test(targetChar)) {
        lockedText += targetChar;
        currentIndex += 1;
        currentCycle = 0;
        displayText.value = lockedText;
        setTimeout(revealNextChar, settleDelay);
        return;
      }

      /**
       * 目前這個字還在亂跳。
       * 畫面會是：
       * lockedText + randomChar
       *
       * 例如：
       * T
       * TW
       * TW. D
       */
      if (currentCycle < cyclesPerChar) {
        displayText.value = lockedText + getRandomChar();
        currentCycle += 1;
        setTimeout(revealNextChar, cycleDuration);
        return;
      }

      /**
       * 亂跳結束，鎖定成正確字元。
       */
      lockedText += targetChar;
      displayText.value = lockedText;

      currentIndex += 1;
      currentCycle = 0;

      /**
       * 如果全部完成，結束 Promise。
       */
      if (currentIndex >= target.length) {
        displayText.value = target;
        resolve();
        return;
      }

      /**
       * 鎖定後稍微停一下，再進下一個字。
       */
      setTimeout(revealNextChar, settleDelay);
    }

    revealNextChar();
  });
}

async function runIntroAnimation() {
  await nextTick();
  const motion = getHeroMotionSettings();

  /**
   * 初始狀態
   * Header、貓咪先完全隱藏。
   * title 在畫面中央，先小一點。
   */
  gsap.set(headerRef.value, {
    opacity: 0,
    y: -16,
  });

  gsap.set(catCardRef.value, {
    xPercent: -50,
    opacity: 0,
    y: 40,
    scale: 0.96,
  });

  gsap.set(titleRef.value, {
    xPercent: -50,
    yPercent: -50,
    x: 0,
    y: 0,
    scale: motion.initialScale,
    letterSpacing: "0em",
    opacity: 1,
  });

  /**
   * 階段 1 + 2：
   * 先開始文字 scramble。
   * 這段不是 GSAP 做的，因為它需要不斷改 displayText。
   */
  await progressiveScrambleText({
    target: targetText,
    cyclesPerChar: 5,
    cycleDuration: 38,
    settleDelay: 28,
  });

  /**
   * 階段 3～6：
   * scramble 完成後，交給 GSAP timeline 控制。
   */
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl
    /**
     * 階段 3：文字增長、定型
     * 讓文字有「終於完成」的感覺。
     */
    .to(titleRef.value, {
      scale: 1,
      letterSpacing: "0.005em",
      duration: 0.55,
      ease: "power3.out",
    })

    /**
     * 可選：定型後停一下。
     * 這個停頓很重要，會讓使用者感覺文字真的完成了。
     */
    .to(
      {},
      {
        duration: 0.18,
      }
    )

    /**
     * 階段 4：文字上移
     * 這裡不要改 top / left，改 transform 才會順。
     */
    .to(titleRef.value, {
      y: motion.finalY,
      scale: motion.finalScale,
      duration: 0.85,
      ease: "power4.inOut",
    })

    /**
     * 階段 5：Header 出現
     * 在文字上移還沒完全結束時就開始出現。
     */
    .to(
      headerRef.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
      },
      "-=0.45"
    )

    /**
     * 階段 6：貓咪出現
     * 先讓 Vue 掛出 Lottie，再讓容器進場。
     */
    .call(
      () => {
        isLottieVisible.value = true;
      },
      null,
      "-=0.25"
    )

    .to(
      catCardRef.value,
      {
        xPercent: -50,
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.2"
    );
}

onMounted(() => {
  runIntroAnimation();
});
</script>

<template>
  <main ref="heroRef" class="intro-hero">
    <div ref="headerRef" class="header-animation-wrapper">
      <AppHeader />
    </div>

    <h1 ref="titleRef" class="main-title">
      {{ displayText }}
    </h1>

    <section ref="catCardRef" class="cat-card">
      <div class="cat-lottie-box">
        <Vue3Lottie
          v-if="isLottieVisible"
          ref="lottieRef"
          :animationData="catAnimation"
          :loop="true"
          :autoplay="true"
          class="cat-lottie"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.header-animation-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;

  opacity: 0;
  transform: translateY(-16px);
  will-change: transform, opacity;
}

.intro-hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #faf7f6;
  color: #1d1530;
}

.site-header {
  position: fixed;
  width: 100%;
  padding: 12px;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.site-nav a {
  color: #1d1530;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.04em;
}

.main-title {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  margin: 0;

  font-family: "Libre Bodoni", "Times New Roman", serif;
  font-size: clamp(76px, 14vw, 232px);
  font-weight: 400;
  line-height: 0.86;
  white-space: nowrap;
  letter-spacing: 0em;

  color: #20172f;

  transform-origin: center center;
  will-change: transform, letter-spacing, opacity;
}

.cat-card {
  position: absolute;
  left: 50%;
  bottom: 0vh;
  z-index: 5;

  width: calc(100vw - 48px);
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #eeeae7;
  border-radius: 22px;
  overflow: hidden;

  box-sizing: border-box;
  will-change: transform, opacity;
}

.cat-lottie-box {
  width: min(820px, 90vw);
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.cat-lottie {
  width: 100%;
  height: 100%;
}

.cat-lottie {
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .main-title {
    font-size: clamp(64px, 14vw, 120px);
  }

  .cat-card {
    width: calc(100vw - 32px);
    height: 460px;
    border-radius: 20px;
  }

  .cat-lottie-box {
    width: min(760px, 96vw);
  }
}

@media (max-width: 768px) {
  .intro-hero {
    min-height: 100svh;
  }

  .main-title {
    font-size: clamp(52px, 16vw, 78px);
  }

  .cat-card {
    width: calc(100vw - 24px);
    height: 390px;
    bottom: 16px;
    border-radius: 18px;
  }

  .cat-lottie-box {
    width: 112vw;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: clamp(44px, 15vw, 58px);
  }

  .cat-card {
    width: calc(100vw - 20px);
    height: 330px;
    bottom: 14px;
    border-radius: 16px;
  }

  .cat-lottie-box {
    width: 126vw;
  }
}
</style>
