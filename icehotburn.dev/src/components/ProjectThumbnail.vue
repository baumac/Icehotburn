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
    class="mx-auto hover:cursor-pointer relative"
    :to="projectUrl"
  >
    <img
      class="w-full h-60 object-cover"
      :src="thumbnail"
      alt="Project thumbnail"
    />

    <div class="absolute left-0 top-0 h-16 w-16">
      <div
        class="absolute left-[-28px] top-[40px] w-32 transform -rotate-45 bg-indigo-500 text-center text-white font-semibold"
      >
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
