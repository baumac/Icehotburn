import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import router from "@/router";

let wrapper: VueWrapper<any>;

beforeEach(() => {
  wrapper = mount(NavBar, {
    global: {
      plugins: [router],
    },
  });
});

describe("NavBar", () => {
  it("renders properly", () => {
    expect(wrapper.exists());
  });

  // click img (logo) and validate it navigates to /
  it.todo("renders the logo");

  // click home and validate it navigates to /home
  it.todo("renders the home link");

  // click about and validate it navigates to /about
  it.todo("renders the about link");

  // click projects and validate it navigates to /projects
  it.todo("renders the projects link");

  // click github icon and validate it navigates to the github repo
  it.todo("renders the github icon");

  // click linkedin icon and validate it navigates to the linkedin page
  it.todo("renders the linkedin icon");
});
