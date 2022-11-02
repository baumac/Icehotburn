import { describe, it, vi, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import ProjectCatalog from "@/components/ProjectCatalog.vue";
import router from "@/router";

let wrapper: VueWrapper<any>;

beforeEach(() => {
  wrapper = mount(ProjectCatalog, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });
});

describe("ProjectCatalog", () => {
  it("renders properly", () => {
    expect(wrapper.exists());
  });

  it.todo("renders the title");

  it.todo("renders a single card");

  it.todo("renders multiple cards in the correct order");

  it.todo("renders the specified amount of cards");
});
