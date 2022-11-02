import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import ProjectCard from "@/components/ProjectCard.vue";
import router from "@/router";

let wrapper: VueWrapper<any>;

beforeEach(() => {
  wrapper = mount(ProjectCard, {
    props: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      enabled: false,
      gitUrl: "https://github.com/Icehotburn/Icehotburn",
      projectUrl: "/about",
      id: "b1b1d457-81ee-47c5-b35d-e729b122f55d",
      tags: ["#python", "#vue3", "#webRtc"],
      thumbnail: "/Sunset.jpg",
      title: "Puppy Monitor",
    },
    global: {
      plugins: [router],
    },
  });
});

describe("ProjectCard", () => {
  it("renders properly", () => {
    expect(wrapper.exists());
  });

  it.todo("renders the thumbnail");

  it.todo("renders the title");

  it.todo("renders the description");

  it.todo("renders the tags");

  // click github icon and validate it navigates to the project github repo
  it.todo("renders the github icon");

  it.todo("renders the tags");
});
