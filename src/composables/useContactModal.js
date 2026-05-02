import { ref } from "vue";

export const isContactModalOpen = ref(false);

export function openContactModal() {
  isContactModalOpen.value = true;
}

export function closeContactModal() {
  isContactModalOpen.value = false;
}
