<template>
  <button :class="classes">
    <p class="font-body font-medium">{{ buttonText }}</p>
    <img :src="imgSrc" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonText: String,
  imgSrc: String,
  type: {
    type: String,
    default: "primary",
    validator(value: string) {
      return ["primary", "secondary"].indexOf(value) !== -1;
    },
  },
});

const classes = computed(() => ({
  [`btn bg-teal text-[#fff] border-none`]: props.type === "primary",
  [`flex gap-2 items-center text-teal`]: props.type === "secondary",
}));
</script>
