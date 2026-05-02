<template>
  <section ref="sectionRef" class="bg-[#faf7f6] px-4 py-24 text-[#2a1434] max-md:py-16">
    <!-- 一條線 + 個人作品 -->
    <div class="flex items-center gap-4">
      <span
        ref="labelLineRef"
        class="block h-px w-10 origin-left scale-x-0 bg-[#bdb6ba]"
      ></span>

      <h2
        ref="labelTextRef"
        class="font-zh text-4xl font-bold text-[#2a1434] opacity-0 max-md:text-2xl"
      >
        個人作品
      </h2>
    </div>

    <!-- 作品圖片清單 -->
    <div ref="gridRef" class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="work in works"
        :key="work.id"
        class="portfolio-card group relative h-[430px] cursor-pointer overflow-hidden rounded-xl bg-[#eeeae7] opacity-0 shadow-[0_8px_24px_rgba(42,20,52,0.08)] max-lg:h-[380px] max-md:h-[320px]"
        role="button"
        tabindex="0"
        @click="goToWorkDetail(work)"
        @keydown.enter="goToWorkDetail(work)"
        @keydown.space.prevent="goToWorkDetail(work)"
      >
        <!-- 圖片 -->
        <img
          :src="work.image"
          :alt="work.title"
          class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          draggable="false"
        />

        <!-- 黑色半透明遮罩 -->
        <div
          class="absolute inset-x-0 bottom-0 h-[96px] overflow-hidden bg-black/70 text-white backdrop-blur-[1px] transition-all duration-500 ease-out group-hover:h-[50%] max-md:h-[84px] group-hover:max-md:h-[68%]"
        >
          <!-- 這層內容會跟著遮罩一起往上 -->
          <div
            class="flex h-full flex-col justify-end px-6 pb-7 pt-6 transition-transform duration-500 ease-out group-hover:-translate-y-2 max-md:px-5 max-md:pb-5"
          >
            <!-- 初始就顯示的資訊 -->
            <div class="flex items-end justify-between gap-4">
              <h3
                class="font-zh text-3xl font-medium leading-none text-white max-lg:text-2xl max-md:text-xl"
              >
                {{ work.title }}
              </h3>

              <p
                class="shrink-0 font-zh text-base font-medium text-white/80 max-md:text-sm"
              >
                {{ work.category }}
              </p>
            </div>

            <!-- hover 後顯示的描述 -->
            <div
              class="mt-6 max-h-0 translate-y-4 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-[220px] group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p
                class="font-zh text-base font-medium leading-8 text-white/85 max-md:text-sm max-md:leading-7"
              >
                {{ work.description }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="tag in work.tags"
                  :key="tag"
                  class="rounded-full bg-white/15 px-3 py-1 font-mono text-sm text-white/85 max-md:text-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWorksStore } from "../../stores/works";

const router = useRouter();
const worksStore = useWorksStore();
const { works } = storeToRefs(worksStore);

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const labelLineRef = ref(null);
const labelTextRef = ref(null);
const gridRef = ref(null);

let ctx;

function goToWorkDetail(work) {
  router.push({
    name: "workdetail",
    params: {
      id: work.id,
    },
  });
}

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

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.85,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.value,
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
