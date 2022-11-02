import { defineStore } from "pinia";
import type { Project } from "@/models/Project";
import projects from "../assets/projects.json";

export const useProjectStore = defineStore({
  id: "projectStore",
  state: () => ({
    loading: false,
    projects: [] as Project[],
  }),
  getters: {
    allProjects(state): Project[] {
      return state.projects;
    },
  },
  actions: {
    async fetchProjects(): Promise<void> {
      try {
        this.loading = true;
        this.projects = projects;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
