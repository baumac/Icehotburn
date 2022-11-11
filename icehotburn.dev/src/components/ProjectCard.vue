<script setup lang="ts">
import { ref, type PropType } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import ProjectThumbnail from "./ProjectThumbnail.vue";

defineProps({
  description: { type: String, required: true },
  enabled: { type: Boolean, required: true },
  gitUrl: { type: String, required: true },
  projectUrl: { type: String, required: true },
  tags: Array as PropType<Array<String>>,
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
});

const showMoreInfo = ref(false);
</script>

<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl flex flex-col"
    :class="{ grayscale: !enabled }"
  >
    <ProjectThumbnail
      :enabled="enabled"
      :project-url="projectUrl"
      :thumbnail="thumbnail"
    />
    <div class="flex flex-col flex-1">
      <div class="pt-4 mx-6 flex justify-between">
        <h1 class="font-bold text-xl mb-2">{{ title }}</h1>
        <!-- Mobile showMore button -->
        <div @click="showMoreInfo = !showMoreInfo" class="md:hidden">
          <button
            type="button"
            aria-label="Show more info"
            class="align-middle text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <ChevronUpIcon v-if="showMoreInfo" class="w-6 h-6 fill-current" />
            <ChevronDownIcon v-else class="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
      <div
        :class="showMoreInfo ? 'flex' : 'hidden'"
        class="pb-2 md:flex flex-col flex-1"
      >
        <p class="mx-6 text-gray-700 text-base md:flex pb-8">
          {{ description }}
        </p>
        <div class="ml-6 mr-6 flex flex-wrap align-items-end mt-auto">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >{{ tag }}</span
          >
          <a class="ml-auto" :href="gitUrl">
            <img alt="Github Logo" src="/github.svg" width="25" height="25" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Fix the postioning to match the line height of the tags-->
