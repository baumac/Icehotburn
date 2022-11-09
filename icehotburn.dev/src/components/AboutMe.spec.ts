import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import AboutMe from "@/components/AboutMe.vue";
import router from "@/router";

let wrapper: VueWrapper<any>;

beforeEach(() => {
  wrapper = mount(AboutMe, {
    props: {},
    global: {
      plugins: [router],
    },
  });
});

describe("AboutMe", () => {
  it("renders properly", () => {
    expect(wrapper.exists());
  });

  it.todo("renders the title");

  it.todo("renders the content");
});
