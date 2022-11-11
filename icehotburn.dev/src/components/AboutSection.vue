<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  content: { type: String, required: true },
  title: { type: String, required: true },
  updatedDate: { type: String, required: true },
  isHeader: { type: Boolean, required: true },
});

const showMoreInfo = props.isHeader ? ref(true) : ref(false);
</script>
<template>
  <div class="flex flex-col flex-1">
    <div class="flex justify-between border-b-4">
      <h1 v-if="isHeader" class="text-5xl pb-6 font-bold">{{ title }}</h1>
      <h2 v-else class="text-4xl pt-4 mb-2 pb-2">{{ title }}</h2>
      <!-- Mobile showMore button -->
      <div @click="showMoreInfo = !showMoreInfo" class="md:hidden flex">
        <button
          aria-label="Show more info"
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
