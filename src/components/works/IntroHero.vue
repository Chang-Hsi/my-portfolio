<template>
  <section
    ref="sectionRef"
    class="relative min-h-[80svh] overflow-hidden bg-[#faf7f6] px-10 py-20 text-[#2a1434] max-lg:px-8 max-md:min-h-[40svh] max-md:px-5 max-md:py-14"
  >
    <!-- Selected / Works. -->
    <h1
      class="select-text font-sans text-[clamp(96px,10vw,220px)] font-semibold uppercase leading-[0.92] tracking-[-0.055em] text-[#2a1434] max-lg:text-[clamp(82px,16vw,160px)] max-md:text-[clamp(72px,14vw,120px)] pt-10"
    >
      <span ref="aboutWordRef" class="block"> Selected </span>

      <span
        ref="meWordRef"
        class="about-outline-word block transition-colors duration-300"
      >
        Works.
      </span>
    </h1>

    <!-- intro：上半文字 -->
    <p
      ref="introRef"
      class="mt-16 max-w-[720px] font-zh text-[clamp(22px,2vw,32px)] font-medium leading-[1.75] tracking-[0.02em] text-zinc-600 max-md:mt-12 max-md:text-[19px]"
    >
      不管是解決需求，還是單純想玩點新技術——<br class="hidden max-md:block" />
      每個專案，都讓我變得更厲害一點。
    </p>
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
