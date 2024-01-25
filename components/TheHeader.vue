<template>
  <div class="[ flex justify-center items-center ]">
    <NuxtImg :src="`/images/logo.png`" class="[ w-32 ] md:hidden" />
  </div>
  <div class="navbar bg-[#fff]">
    <div class="md:navbar-start md:block hidden">
      <a class="btn btn-ghost text-xl">
        <NuxtImg :src="`/images/logo.png`" class="md:w-32 w-24" />
      </a>
    </div>
    <div class="navbar-start [ md:flex md:justify-center md:items-center ]">
      <a class="btn btn-ghost btn-circle" v-for="icon in icons" :key="icon.id">
        <NuxtImg :src="`/images/${icon.src}`" class="w-6 h-6" />
      </a>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <!-- <ul
          tabIndex="{0}"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const icons = ref([
  { id: 1, src: "behance-icon.svg" },
  { id: 2, src: "dribbble-icon.svg" },
  { id: 3, src: "linkedin-icon.svg" },
]);
</script>
