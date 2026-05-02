<template>
  <section class="bg-[#faf7f6] px-4 pb-28 pt-16 text-[#2a1434]">
    <div
      class="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20"
    >
      <!-- 左區塊 -->
      <aside class="space-y-28 max-lg:space-y-16">
        <!-- 使用技術 -->
        <section>
          <div class="flex items-center gap-4">
            <span class="h-px w-10 bg-[#bdb6ba]"></span>
            <h2 class="font-zh text-2xl font-bold text-[#2a1434]">使用技術</h2>
          </div>

          <div class="mt-8 space-y-6">
            <div v-for="item in techStack" :key="item.label">
              <h3 class="font-zh text-base font-bold text-[#2a1434]">
                {{ item.label }}
              </h3>

              <p
                class="mt-2 font-zh text-base font-medium leading-relaxed text-[#8a8190]"
              >
                {{ item.value }}
              </p>
            </div>
          </div>
        </section>

        <!-- 負責角色 -->
        <section>
          <div class="flex items-center gap-4">
            <span class="h-px w-10 bg-[#bdb6ba]"></span>
            <h2 class="font-zh text-2xl font-bold text-[#2a1434]">負責角色</h2>
          </div>

          <p class="mt-8 font-zh text-base font-bold leading-8 text-[#2a1434]">
            {{ work.roleDescription }}
          </p>

          <ul class="mt-7 space-y-4">
            <li
              v-for="item in responsibilities"
              :key="item"
              class="flex gap-3 font-zh text-base font-medium leading-8 text-[#7b7180]"
            >
              <span class="mt-3 h-2 w-2 shrink-0 rotate-45 bg-[#b9b2b8]"></span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="mt-16 flex flex-wrap gap-4">
            <a
              :href="work.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-12 items-center justify-center rounded-full bg-[#1f1f23] px-7 font-zh text-base font-bold text-white no-underline shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition hover:bg-[#2a1434]"
            >
              查看 Demo
              <span class="ml-2 text-sm">↗</span>
            </a>

            <a
              :href="work.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-12 items-center justify-center rounded-full border border-[#cfc8cc] bg-[#faf7f6] px-7 font-zh text-base font-bold text-[#2a1434] no-underline transition hover:bg-[#eeeae7]"
            >
              <span class="mr-2">◖</span>
              查看原始碼
            </a>
          </div>
        </section>
      </aside>

      <!-- 右區塊 -->
      <div>
        <!-- 解決的問題 -->
        <section>
          <div class="flex items-center gap-4">
            <span class="h-px w-10 bg-[#bdb6ba]"></span>
            <h2 class="font-zh text-2xl font-bold text-[#2a1434]">解決的問題</h2>
          </div>

          <p class="mt-8 font-zh text-lg font-bold leading-9 text-[#5f5367]">
            {{ work.problemIntro }}
          </p>

          <!-- 時間軸 -->
          <div class="relative mt-10 pl-10">
            <div
              class="absolute left-[5px] top-3 h-[calc(100%-1.5rem)] w-px bg-[#d8d1d4]"
            ></div>

            <div
              v-for="item in problems"
              :key="item.title"
              class="relative pb-10 last:pb-0"
            >
              <span
                class="absolute -left-10 top-2 h-3 w-3 rounded-full bg-[#2a1434]"
              ></span>

              <h3 class="font-zh text-xl font-bold text-[#2a1434]">
                {{ item.title }}
              </h3>

              <p class="mt-3 font-zh text-base font-medium leading-8 text-[#7b7180]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </section>

        <!-- 分隔線 -->
        <div class="my-20 h-px w-full bg-[#d8d1d4]"></div>

        <!-- 專案成果 -->
        <section>
          <div class="flex items-center gap-4">
            <span class="h-px w-10 bg-[#bdb6ba]"></span>
            <h2 class="px-1 font-zh text-2xl font-bold text-[#2a1434]">專案成果</h2>
          </div>

          <div class="mt-10 space-y-14">
            <!-- 技術亮點 -->
            <section>
              <h3 class="font-zh text-xl font-bold text-[#2a1434]">技術亮點：</h3>

              <ul class="mt-5 space-y-4">
                <li
                  v-for="item in technicalHighlights"
                  :key="item"
                  class="flex gap-4 font-zh text-base font-medium leading-8 text-[#7b7180]"
                >
                  <span
                    class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#bdb6ba] text-xs text-[#8c8390]"
                  >
                    ✓
                  </span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </section>

            <!-- 產品特色 -->
            <section>
              <h3 class="font-zh text-xl font-bold text-[#2a1434]">產品特色：</h3>

              <ul class="mt-5 space-y-4">
                <li
                  v-for="item in productFeatures"
                  :key="item"
                  class="flex gap-4 font-zh text-base font-medium leading-8 text-[#7b7180]"
                >
                  <span
                    class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#bdb6ba] text-xs text-[#8c8390]"
                  >
                    ✓
                  </span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </section>

            <!-- 開發成果 -->
            <section>
              <h3 class="font-zh text-xl font-bold text-[#2a1434]">開發成果：</h3>

              <ul class="mt-5 space-y-4">
                <li
                  v-for="item in developmentResults"
                  :key="item"
                  class="flex gap-4 font-zh text-base font-medium leading-8 text-[#7b7180]"
                >
                  <span
                    class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#bdb6ba] text-xs text-[#8c8390]"
                  >
                    ✓
                  </span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </section>
          </div>
        </section>

        <!-- 回到作品列表 -->
        <div class="mt-28 flex justify-center">
          <RouterLink
            to="/works"
            class="group inline-flex items-center gap-4 font-zh text-lg font-bold text-[#5f5367] no-underline transition hover:text-[#2a1434]"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[#ece7e6] text-2xl transition group-hover:-translate-x-1"
            >
              ←
            </span>

            回到作品列表
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useWorksStore } from "../../stores/works";

const route = useRoute();
const worksStore = useWorksStore();

const work = computed(
  () => worksStore.getWorkById(route.params.id) ?? worksStore.works[0]
);

const techStack = computed(() => work.value.techStack);
const responsibilities = computed(() => work.value.responsibilities);
const problems = computed(() => work.value.problems);
const technicalHighlights = computed(() => work.value.technicalHighlights);
const productFeatures = computed(() => work.value.productFeatures);
const developmentResults = computed(() => work.value.developmentResults);
</script>
