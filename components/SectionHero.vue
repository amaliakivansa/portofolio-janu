<template>
  <!-- text hero -->
  <div class="hero h-[400px] bg-[#f9f9f9]">
    <div class="px-4">
      <!-- avatar -->
      <div class="flex items-center gap-4 font-display">
        <div class="avatar">
          <div class="w-12 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <p><span class="text-gray-3">Hi, I'm</span> Janu</p>
      </div>
      <h1 class="[ md:text-5xl text-3xl font-display text-black ] my-6">
        I'm a UI/UX Designer with a strong focus on design principles and
        problem solving.
      </h1>
      <div class="flex gap-4 items-center">
        <Button
          buttonText="Hire me"
          imgSrc="/images/hire-icon.svg"
          type="primary"
        />
        <Button
          buttonText="Download my resume"
          imgSrc="/images/resume-icon.svg"
          type="secondary"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./BaseButton.vue";
</script>
