<template>
  <div ref="lineRef" class="relative h-px w-full overflow-hidden bg-[#ded8dc]">
    <span
      ref="activeLineRef"
      class="absolute left-0 top-0 h-px w-[18%] bg-[#8c8390]"
    ></span>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";

const lineRef = ref(null);
const activeLineRef = ref(null);

let tween;

onMounted(async () => {
  await nextTick();

  tween = gsap.fromTo(
    activeLineRef.value,
    {
      xPercent: -120,
    },
    {
      xPercent: 620,
      duration: 1.6,
      ease: "none",
      repeat: -1,
    }
  );
});

onBeforeUnmount(() => {
  tween?.kill();
});
</script>
