<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="modelValue"
      class="fixed inset-0 z-[60] bg-[#2a1434]/12 backdrop-blur-[1px]"
      @click="close"
    ></div>
  </Transition>

  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-8 opacity-0 scale-95"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100 scale-100"
    leave-to-class="translate-y-8 opacity-0 scale-95"
  >
    <aside
      v-if="modelValue"
      class="fixed bottom-10 right-10 z-[70] w-[min(520px,calc(100vw-48px))] rounded-2xl bg-white p-8 shadow-[0_22px_60px_rgba(0,0,0,0.18)] max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:w-full max-md:rounded-b-none max-md:rounded-t-2xl max-md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        class="absolute right-7 top-7 text-3xl font-light leading-none text-[#8c8390] transition hover:text-[#2a1434] max-md:right-5 max-md:top-5"
        aria-label="關閉聯絡表單"
        @click="close"
      >
        ×
      </button>

      <div>
        <h3
          id="contact-modal-title"
          class="font-sans text-[42px] font-black leading-none text-[#202024] max-md:text-[36px]"
        >
          CONTACT.
        </h3>

        <p
          class="mt-2 max-w-[390px] font-zh text-[16px] font-medium leading-[1.7] text-[#8c8390] max-md:text-[15px]"
        >
          有任何想法或合作邀請，都歡迎填寫表單，或直接寄信到
          <a
            href="mailto:tj.wang1995@gmail.com"
            class="text-[#8c8390] underline-offset-4 hover:underline"
          >
            tj.wang1995@gmail.com
          </a>
        </p>
      </div>

      <form class="mt-10" @submit.prevent="submitForm">
        <label class="block">
          <span class="sr-only">您的名稱</span>
          <input
            v-model="form.name"
            type="text"
            placeholder="請輸入您的名稱"
            class="w-full border-0 border-b border-[#d8d1d4] bg-transparent px-1 pb-4 font-zh text-[18px] font-medium text-[#2a1434] outline-none placeholder:text-[#b9b3b7] focus:border-[#2a1434] max-md:text-[16px]"
          />
        </label>

        <label class="mt-9 block">
          <span class="sr-only">您的 Email</span>
          <input
            v-model="form.email"
            type="email"
            placeholder="請輸入您的 Email"
            class="w-full border-0 border-b border-[#d8d1d4] bg-transparent px-1 pb-4 font-zh text-[18px] font-medium text-[#2a1434] outline-none placeholder:text-[#b9b3b7] focus:border-[#2a1434] max-md:text-[16px]"
          />
        </label>

        <label class="mt-9 block">
          <span class="sr-only">需求或想法</span>
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="告訴我您的需求或想法..."
            class="w-full resize-none border-0 border-b border-[#d8d1d4] bg-transparent px-1 pb-4 font-zh text-[18px] font-medium leading-[1.7] text-[#2a1434] outline-none placeholder:text-[#b9b3b7] focus:border-[#2a1434] max-md:text-[16px]"
          ></textarea>
        </label>

        <button
          type="submit"
          class="mt-11 flex h-16 w-full items-center justify-center rounded-lg bg-[#1f1f23] font-zh text-[18px] font-bold text-white transition hover:bg-[#2a1434] max-md:h-14 max-md:text-[16px]"
        >
          送出訊息
        </button>
      </form>
    </aside>
  </Transition>
</template>

<script setup>
import { reactive } from "vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "submit"]);

const form = reactive({
  name: "",
  email: "",
  message: "",
});

function close() {
  emit("update:modelValue", false);
}

function submitForm() {
  emit("submit", {
    name: form.name,
    email: form.email,
    message: form.message,
  });

  close();
}
</script>
