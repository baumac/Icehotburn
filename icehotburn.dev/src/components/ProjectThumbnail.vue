<script setup lang="ts">
defineProps({
  enabled: { type: Boolean, required: true },
  thumbnail: { type: String, required: true },
  projectUrl: { type: String, required: true },
});
</script>

<template>
  <RouterLink
    v-if="enabled"
    class="hover:cursor-pointer relative"
    :to="projectUrl"
  >
    <img
      class="w-full h-60 object-cover"
      :src="thumbnail"
      alt="Project thumbnail"
    />

    <div class="absolute left-0 top-0 h-16 w-16">
      <div
        class="absolute left-[-40px] top-[25px] w-40 transform -rotate-45 bg-indigo-500 text-center text-white font-semibold"
      >
        <!-- <div
        class="absolute transform -rotate-45 bg-indigo-500 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]"
      > -->
        Try me!
      </div>
    </div>
  </RouterLink>
  <img
    v-else
    class="w-full h-60 object-cover"
    :src="thumbnail"
    alt="Project thumbnail"
  />
</template>
