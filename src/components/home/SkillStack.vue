<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-[#faf7f6] px-10 text-[#2a1434] max-lg:px-6 max-lg:pb-20 max-md:px-5 max-md:pb-16"
  >
    <!-- 一條線 + 技術堆疊 -->
    <div
      class="flex items-center gap-4 text-4xl font-bold text-[#2a1434] max-md:text-[28px]"
    >
      <span
        ref="labelLineRef"
        class="block h-px w-10 origin-left scale-x-0 bg-[#bdb6ba]"
      ></span>

      <span ref="labelTextRef" class="inline-block opacity-0"> 技術堆疊 </span>
    </div>

    <!-- 圖片跑馬燈 -->
    <div class="mt-16 w-full overflow-hidden max-lg:mt-12 max-md:mt-10">
      <div
        ref="marqueeTrackRef"
        class="flex w-max items-center gap-14 will-change-transform max-md:gap-10"
      >
        <div
          v-for="(tech, index) in repeatedTechItems"
          :key="`${tech.name}-${index}`"
          class="group relative flex h-[140px] shrink-0 flex-col items-center justify-end pb-3 max-md:h-[112px]"
          @mouseenter="pauseMarquee"
          @mouseleave="playMarquee"
        >
          <!-- tooltip -->
          <div
            class="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full bg-[#252329] px-3 py-1.5 font-mono text-[13px] text-white opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {{ tech.name }}

            <span
              class="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-[#252329]"
            ></span>
          </div>

          <img
            :src="tech.image"
            :alt="tech.name"
            class="h-[72px] max-w-[260px] object-contain transition duration-300 group-hover:scale-105 max-md:h-[56px] max-md:max-w-[180px]"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import vueLogo from "../../assets/tech/vue.svg";
import vuetifyLogo from "../../assets/tech/vuetifyjs.svg";
import reactLogo from "../../assets/tech/react.svg";
import reduxLogo from "../../assets/tech/redux.svg";
import nodeLogo from "../../assets/tech/nodejs.svg";
import pythonLogo from "../../assets/tech/python.svg";
import flaskLogo from "../../assets/tech/flask.svg";
import djangoLogo from "../../assets/tech/django.svg";
import expressLogo from "../../assets/tech/express.svg";
import firebaseLogo from "../../assets/tech/firebase.svg";
import vercelLogo from "../../assets/tech/vercel.svg";
import jiraLogo from "../../assets/tech/jira.svg";
import geminiLogo from "../../assets/tech/google-gemini.svg";
import recaptchaLogo from "../../assets/tech/recaptcha.svg";
import supabaseLogo from "../../assets/tech/supabase.svg";
import mysqlLogo from "../../assets/tech/mysql.svg";
import sqliteLogo from "../../assets/tech/sqlite.svg";
import typescriptLogo from "../../assets/tech/typescript.svg";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const labelLineRef = ref(null);
const labelTextRef = ref(null);
const marqueeTrackRef = ref(null);

const techItems = [
  {
    name: "Vue",
    image: vueLogo,
  },
  {
    name: "Vuetify",
    image: vuetifyLogo,
  },
  {
    name: "React",
    image: reactLogo,
  },
  {
    name: "Redux",
    image: reduxLogo,
  },
  {
    name: "Node.js",
    image: nodeLogo,
  },
  {
    name: "Python",
    image: pythonLogo,
  },
  {
    name: "Flask",
    image: flaskLogo,
  },
  {
    name: "Django",
    image: djangoLogo,
  },
  {
    name: "Express",
    image: expressLogo,
  },
  {
    name: "Firebase",
    image: firebaseLogo,
  },
  {
    name: "Vercel",
    image: vercelLogo,
  },
  {
    name: "Jira",
    image: jiraLogo,
  },
  {
    name: "Google Gemini",
    image: geminiLogo,
  },
  {
    name: "reCAPTCHA",
    image: recaptchaLogo,
  },
  {
    name: "Supabase",
    image: supabaseLogo,
  },
  {
    name: "MySQL",
    image: mysqlLogo,
  },
  {
    name: "SQLite",
    image: sqliteLogo,
  },
  {
    name: "TypeScript",
    image: typescriptLogo,
  },
];

/**
 * 重複兩次，讓跑馬燈可以無縫循環。
 */
const repeatedTechItems = computed(() => [...techItems, ...techItems]);

let ctx;
let marqueeTween;

function pauseMarquee() {
  marqueeTween?.pause();
}

function playMarquee() {
  marqueeTween?.play();
}

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    gsap.set(labelLineRef.value, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(labelTextRef.value, {
      opacity: 0,
      x: -18,
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
     * 圖片跑馬燈
     *
     * xPercent: -50 的意思是：
     * 因為內容重複了兩份，所以移動半個 track 寬度後，
     * 視覺上會回到同樣排列，形成無縫循環。
     */
    marqueeTween = gsap.to(marqueeTrackRef.value, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  marqueeTween?.kill();
  ctx?.revert();
});
</script>
