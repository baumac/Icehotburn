<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import { useProjectStore } from "@/stores/ProjectStore";

const props = defineProps({
  showLimit: Number,
});

const projectStore = useProjectStore();
projectStore.fetchProjects();
</script>
<template>
  <div
    v-if="showLimit"
    class="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
  >
    <ProjectCard
      v-for="project in projectStore.allProjects.slice(0, showLimit)"
      :key="project.id"
      :description="project.description"
      :enabled="project.enabled"
      :gitUrl="project.gitUrl"
      :projectUrl="project.projectUrl"
      :tags="project.tags"
      :thumbnail="project.thumbnail"
      :title="project.title"
    />
  </div>
  <div
    v-else
    class="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
  >
    <ProjectCard
      v-for="project in projectStore.allProjects"
      :key="project.id"
      :description="project.description"
      :enabled="project.enabled"
      :gitUrl="project.gitUrl"
      :projectUrl="project.projectUrl"
      :tags="project.tags"
      :thumbnail="project.thumbnail"
      :title="project.title"
    />
  </div>
</template>
