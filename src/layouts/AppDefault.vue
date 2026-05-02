<template>
  <AppHeader v-if="!route.meta.hideDefaultHeader" />
  <RouterView />
  <AppFooter />
  <ContactModal v-model="isContactModalOpen" @submit="handleContactSubmit" />
</template>

<script setup>
import { useRoute } from "vue-router";
import ContactModal from "../components/ContactModal.vue";
import { isContactModalOpen } from "../composables/useContactModal";
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";

const route = useRoute();

function handleContactSubmit(payload) {
  console.log("contact submit:", payload);

  // 之後你可以在這裡串 EmailJS、Formspree、自己的 API 等。
}
</script>
