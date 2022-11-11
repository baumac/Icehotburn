<script setup lang="ts">
import ProjectCatalog from "../components/ProjectCatalog.vue";
import CaptionedImage from "@/components/CaptionedImage.vue";
</script>

<template>
  <div class="flex pb-8 md:pb-14 border-b-4">
    <div class="md:w-8/12 flex flex-col">
      <h1 class="text-5xl font-bold">Hi, I'm Chris!</h1>
      <p class="mt-6 text-xl">
        <span class="md:hidden">Aka Icehotburn 🎮💻</span>
        <span class="hidden md:inline"
          >Aka Icehotburn to my internet friends 🎮💻</span
        >

        <br />
        <br />
        I'm a software engineer with a passion for building scalable,
        maintainable, and easy to use tools that make life easier. I like
        sports, the outdoors, video games, and food.
        <br />
        <br />
        Check out
        <RouterLink class="text-blue-600 hover:underline" to="/projects"
          >my projects</RouterLink
        >, learn more
        <RouterLink class="text-blue-600 hover:underline" to="/about"
          >about me</RouterLink
        >, or connect on
        <a
          class="text-blue-600 hover:underline"
          href="https://www.linkedin.com/in/chrisbaumann349/"
        >
          LinkedIn</a
        >!
      </p>
    </div>

    <div class="p-4 md:p-0 hidden md:w-4/12 md:flex flex-col">
      <CaptionedImage :image="'/Family.jpg'" :caption="'Carla and I'" />
    </div>
  </div>
  <div class="pb-8">
    <h1 class="text-4xl font-bold py-8 md:px-0">Featured Projects</h1>
    <ProjectCatalog :showLimit="3" />
  </div>
</template>

<!-- https://www.taniarascia.com/
      https://www.bingingwithbabish.com/#top -->
