<template>
  <footer
    class="relative overflow-hidden border-t border-[#ded8dc] bg-[#faf7f6] px-10 py-10 text-[#2a1434]"
  >
    <!-- 上方資訊列 -->
    <div class="flex items-start justify-between">
      <!-- 左邊 Logo -->
      <RouterLink to="/" class="inline-flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          class="h-8 w-auto select-none"
          draggable="false"
        />
      </RouterLink>

      <!-- 右邊 社群 / 聯絡 -->
      <div class="grid grid-cols-2 gap-24 pr-20 font-zh">
        <div>
          <h3 class="text-[18px] font-bold leading-none text-[#2a1434]">社群</h3>

          <div class="mt-4 flex flex-col gap-2">
            <a
              href="https://github.com/Chang-Hsi"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[16px] font-medium text-[#2a1434] no-underline transition hover:opacity-60"
            >
              GitHub
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-[18px] font-bold leading-none text-[#2a1434]">聯絡</h3>

          <div class="mt-4">
            <a
              href="mailto:tj.wang1995@gmail.com"
              class="text-[16px] font-medium text-[#2a1434] no-underline transition hover:opacity-60"
            >
              watasiwa8531@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Title 圖片 -->
    <div class="mx-auto mt-24 flex w-full justify-center">
      <img
        :src="Title"
        alt="TJ. WANG"
        class="w-[min(68vw,1000px)] select-none"
        draggable="false"
      />
    </div>

    <!-- Copyright -->
    <p class="mt-28 text-center text-[14px] font-medium text-[#2a1434]">
      © 2026 TW Douli. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
import Title from "../assets/imgs/title.png";
</script>
