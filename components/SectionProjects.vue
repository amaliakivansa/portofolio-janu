<template>
  <div class="bg-[#F6F6F6]">
    <div class="px-4 py-10">
      <BaseTitle title="Projects." subtitle="Enjoy browsing our project" />
    </div>
  </div>
</template>

<script setup lang="ts">
const projectContents = ref([
  {
    imgSrc: "/images/project-1.png",
    title: "Covid-19 App - Beraco (Berantas Covid-19)",
    badge: ["Design", "Health", "Mobile App"],
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Metamata : E-Collaboration Platform",
    badge: ["Design", "Event Ecosystem", "Website"],
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Indonesia Go : Indonesian Culture Game",
    badge: ["Design", "Cultural Games", "Mobile App"],
  },
  {
    imgSrc: "/images/project-4.png",
    title: "Uangku : Mobile App Personal Finance",
    badge: ["Design", "Personal Finance", "Mobile App"],
  },
]);
</script>
