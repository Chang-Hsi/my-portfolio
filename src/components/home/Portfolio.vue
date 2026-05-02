<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-[#faf7f6] px-10 py-[100px] text-[#2a1434] max-lg:px-6 max-lg:py-20 max-md:px-5 max-md:py-16"
  >
    <!-- 一條線 + 個人作品 -->
    <div
      class="flex items-center gap-4 text-[28px] font-bold text-[#2a1434] max-md:text-[24px]"
    >
      <span
        ref="labelLineRef"
        class="block h-px w-10 origin-left scale-x-0 bg-[#bdb6ba]"
      ></span>

      <span ref="labelTextRef" class="inline-block opacity-0"> 個人作品 </span>
    </div>

    <!-- 文字跑馬燈 -->
    <div class="mt-20 w-full overflow-hidden whitespace-nowrap max-lg:mt-14 max-md:mt-10">
      <div ref="marqueeTrackRef" class="flex w-max gap-16 will-change-transform">
        <span
          v-for="item in marqueeItems"
          :key="`a-${item}`"
          class="shrink-0 font-zh text-[clamp(42px,4vw,72px)] font-bold tracking-[0.04em] text-[#2a1434]/40 max-md:text-[36px]"
        >
          {{ item }}
        </span>

        <span
          v-for="item in marqueeItems"
          :key="`b-${item}`"
          class="shrink-0 font-zh text-[clamp(42px,4vw,72px)] font-bold tracking-[0.04em] text-[#2a1434]/40 max-md:text-[36px]"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <!-- 圖片牆 -->
    <div
      ref="gridRef"
      class="mx-auto mt-20 grid w-full grid-cols-12 gap-6 max-lg:mt-14 max-lg:gap-5 max-md:mt-10 max-md:gap-4"
    >
      <article
        v-for="item in portfolioItems"
        :key="item.title"
        class="portfolio-card group relative h-[720px] overflow-hidden rounded-xl bg-[#eeeae7] opacity-0 max-xl:h-[620px] max-lg:col-span-6 max-lg:h-[520px] max-md:col-span-12 max-md:h-[420px] max-sm:h-[320px]"
        :class="item.className"
        @click="goToWorkDetail(item)"
        @keydown.enter="goToWorkDetail(item)"
        @keydown.space.prevent="goToWorkDetail(item)"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div
          class="absolute inset-0 flex items-end bg-gradient-to-t from-black/45 via-black/10 to-transparent p-7 opacity-0 transition duration-500 group-hover:opacity-100 max-md:p-5 max-md:opacity-100"
        >
          <div class="translate-y-3 transition duration-500 group-hover:translate-y-0">
            <p class="font-zh text-[14px] font-medium tracking-[0.12em] text-white/75">
              {{ item.category }}
            </p>
            <h3 class="mt-2 font-zh text-[28px] font-bold text-white max-md:text-[24px]">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </article>
    </div>

    <!-- Title banner 空間 -->
    <div
      ref="titleBannerRef"
      class="mt-28 w-full overflow-hidden py-12 max-lg:mt-20 max-md:mt-14 max-md:py-8"
    >
      <div
        ref="titleTrackRef"
        class="flex w-max items-center gap-20 will-change-transform"
      >
        <img
          v-for="index in 6"
          :key="index"
          :src="titleImg"
          alt="TW. DOULI FullStack Developer"
          class="h-[110px] w-auto shrink-0 select-none max-lg:h-[86px] max-md:h-[58px]"
          draggable="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shopping from "../../assets/imgs/shopping.png";
import crm from "../../assets/imgs/crm.png";
import finance from "../../assets/imgs/finance.png";
import company from "../../assets/imgs/company.png";
import titleImg from "../../assets/imgs/title.png";
import { useRouter } from "vue-router";

const router = useRouter();

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const labelLineRef = ref(null);
const labelTextRef = ref(null);
const marqueeTrackRef = ref(null);
const gridRef = ref(null);
const titleBannerRef = ref(null);
const titleTrackRef = ref(null);

const marqueeItems = [
  "網站設計",
  "互動體驗",
  "前端開發",
  "UI/UX 設計",
  "品牌視覺",
  "系統開發",
  "作品展示",
];

const portfolioItems = [
  {
    id: "shopping-ecommerce",
    title: "購物商城",
    category: "網頁應用",
    image: shopping,
    className: "col-span-7",
    demoUrl: "https://e-shopping-liart.vercel.app/",
  },
  {
    id: "peripheral-payment-site",
    title: "企業形象網站",
    category: "網頁應用/手機應用",
    image: company,
    className: "col-span-5",
    demoUrl: "https://chang-hsi.github.io/idtech-clone/",
  },
  {
    id: "yippee-finance",
    title: "財經新聞網",
    category: "網頁應用",
    image: finance,
    className: "col-span-5",
    demoUrl: "https://finance-ashen-kappa.vercel.app/",
  },
  {
    id: "crm-control-system",
    title: "CRM 控制系統",
    category: "網頁應用",
    image: crm,
    className: "col-span-7",
    demoUrl: "https://crm-liard-gamma.vercel.app/",
  },
];

function goToWorkDetail(portfolioItems) {
  router.push({
    name: "workdetail",
    params: {
      id: portfolioItems.id,
    },
  });
}

let ctx;

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    const cards = gridRef.value.querySelectorAll(".portfolio-card");

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
      y: 48,
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
     * 跑馬燈
     */
    gsap.to(marqueeTrackRef.value, {
      xPercent: -50,
      duration: 24,
      ease: "none",
      repeat: -1,
    });

    /**
     * 圖片牆進場
     */
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.value,
        start: "top 75%",
        once: true,
      },
    });

    gsap.fromTo(
      titleTrackRef.value,
      {
        x: 0,
      },
      {
        x: -420,
        ease: "none",
        scrollTrigger: {
          trigger: titleBannerRef.value,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>
