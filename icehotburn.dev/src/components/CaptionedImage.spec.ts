import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import CaptionedImage from "@/components/CaptionedImage.vue";

let wrapper: VueWrapper<any>;

beforeEach(() => {
  wrapper = mount(CaptionedImage, {
    props: {
      image: "/Family.jpg",
      caption: "My family",
    },
  });
});

describe("CaptionedImage", () => {
  it("renders properly", () => {
    expect(wrapper.exists());
  });

  it.todo("renders the image");

  it.todo("renders the caption");
});
