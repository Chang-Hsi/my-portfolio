<template>
  <header ref="headerRef" class="site-header">
    <nav class="flex justify-between w-full px-8">
      <a href="/"><img src="/public/logo.png" alt="logo" class="h-12" /></a>
      <div class="site-nav">
        <a href="/about">關於</a>
        <a href="/works">作品</a>
        <button type="button" @click="openContactModal">聯絡我</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { openContactModal } from "../composables/useContactModal";
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 12px;
  background: #faf7f6;
}
.site-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.site-nav a,
.site-nav button {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  color: #1d1530;
  cursor: pointer;
  font: inherit;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.04em;
}
</style>
