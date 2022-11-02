import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useProjectStore } from "@/stores/ProjectStore";

let projectStore: any;

beforeEach(() => {
  setActivePinia(createPinia());
  projectStore = useProjectStore();
});

describe("Project Store", () => {
  it("can be instantiated", () => {
    expect(projectStore).toBeDefined();
  });

  it.todo("gets all projects");

  it.todo("fetches projects");
});
