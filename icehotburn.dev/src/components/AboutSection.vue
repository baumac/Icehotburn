<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";

defineProps({
  content: { type: String, required: true },
  title: { type: String, required: true },
  updatedDate: { type: String, required: false },
});

const showMoreInfo = ref(false);
</script>
<template>
  <div class="flex flex-col flex-1">
    <div class="pt-4 flex justify-between border-b-4">
      <h2 class="text-4xl mb-2 pb-2">{{ title }}</h2>
      <!-- Mobile showMore button -->
      <div @click="showMoreInfo = !showMoreInfo" class="md:hidden flex">
        <button
          type="button"
          class="align-middle text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <ChevronUpIcon v-if="showMoreInfo" class="w-6 h-6 fill-current" />
          <ChevronDownIcon v-else class="w-6 h-6 fill-current" />
        </button>
      </div>
    </div>
    <div
      :class="showMoreInfo ? 'flex' : 'hidden'"
      class="md:flex flex-col flex-1"
    >
      <h4 class="pt-2 pb-7 text-lg italic">{{ updatedDate }}</h4>
      <span class="text-lg pb-4" v-html="content"></span>
    </div>
  </div>
</template>
