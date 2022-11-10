<script setup lang="ts">
defineProps({
  image: { type: String, required: true },
  caption: { type: String, required: true },
});
</script>

<template>
  <div class="mx-4 py-4 text-center bg-gray-200 rounded-lg">
    <img
      class="m-auto h-60 object-contain"
      :src="image"
      alt="Photo of my family"
    />
    <h1 class="m-auto pt-3">{{ caption }}</h1>
  </div>
</template>
