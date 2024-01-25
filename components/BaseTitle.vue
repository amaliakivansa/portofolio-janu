<template>
  <div class="md:flex items-center justify-between">
    <p class="font-display font-regular text-3xl text-black">{{ title }}</p>
    <div class="flex gap-4 items-center justify-between">
      <p class="font-body font-light text-xl text-gray-3 md:mt-0 mt-3">
        {{ subtitle }}
      </p>
      <img src="/images/eye-icon.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
});
</script>
