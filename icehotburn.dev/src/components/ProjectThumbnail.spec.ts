import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import ProjectThumbnail from "@/components/ProjectThumbnail.vue";
import router from "@/router";

let wrapper: VueWrapper<any>;

beforeEach(() => {
  wrapper = mount(ProjectThumbnail, {
    props: {
      enabled: false,
      projectUrl: "/about",
      thumbnail: "/Sunset.jpg",
    },
    global: {
      plugins: [router],
    },
  });
});

describe("ProjectCatalog", () => {
  it("renders properly", () => {
    expect(wrapper.exists());
  });

  it.todo("renders an enabled thumbnail");

  it.todo("renders a disabled thumbnail");
});
