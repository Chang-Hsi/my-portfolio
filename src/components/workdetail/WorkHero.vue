<template>
  <section class="bg-[#faf7f6] px-4 pb-20 pt-28 text-[#2a1434] max-md:pt-24">
    <div class="mx-auto w-full max-w-[1280px]">
      <!-- 返回按鈕 -->
      <button
        type="button"
        class="group inline-flex items-center gap-2 font-zh text-base font-medium text-[#8c8390] transition hover:text-[#2a1434]"
        @click="goBack"
      >
        <span class="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        返回
      </button>

      <!-- 專案簡述區 -->
      <div class="mt-8">
        <!-- 專案名稱 -->
        <h1
          class="mt-14 font-zh text-7xl font-black leading-tight tracking-[-0.04em] text-[#2a1434] max-lg:text-6xl max-md:mt-10 max-md:text-5xl"
        >
          {{ work.title }}
        </h1>

        <!-- 專案說明 -->
        <p
          class="mt-8 max-w-[760px] font-zh text-2xl font-bold leading-[1.8] tracking-[0.02em] text-[#6a6070] max-lg:text-xl max-md:text-lg"
        >
          {{ work.heroDescription }}
        </p>

        <!-- 專案圖片 -->
        <div
          class="mt-20 overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(42,20,52,0.08)] max-md:mt-12 max-md:rounded-xl"
        >
          <img
            :src="work.image"
            :alt="work.title"
            class="w-full select-none object-cover"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useWorksStore } from "../../stores/works";

const route = useRoute();
const router = useRouter();
const worksStore = useWorksStore();

const work = computed(() => worksStore.getWorkById(route.params.id) ?? worksStore.works[0]);

function goBack() {
  router.back();
}
</script>
