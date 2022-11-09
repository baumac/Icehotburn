import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import AboutSection from "@/components/AboutSection.vue";

let wrapper: VueWrapper<any>;

beforeEach(() => {
  wrapper = mount(AboutSection, {
    props: {
      title: "title",
      updatedDate: "Updated November 9th, 2022",
      content: "foo",
    },
  });
});

describe("AboutSection", () => {
  it("renders properly", () => {
    expect(wrapper.exists());
  });

  it.todo("renders the title");

  it.todo("renders the updatedDate");

  it.todo("renders the content as raw html");
});
