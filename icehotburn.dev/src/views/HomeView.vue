<script setup lang="ts">
import ProjectCatalog from "../components/ProjectCatalog.vue";
</script>

<template>
  <div class="p-4 flex md:pt-14 md:pb-14 md:border-b-4">
    <div class="md:w-8/12 flex flex-col">
      <h1 class="text-6xl">Hi, I'm Chris!</h1>
      <p class="mt-6 text-xl">
        Aka Icehotburn to my internet friends 🎮
        <br />
        <br />
        I'm a software engineer with a passion for building scalable,
        maintainable, and easy to use tools to make life easier. I like sports,
        the outdoors, video games, and food.
        <br />
        <br />
        Check out
        <RouterLink class="text-sky-500" to="/projects">my projects</RouterLink>
        or learn more
        <RouterLink class="text-sky-500" to="/about">about me</RouterLink>!
      </p>
    </div>

    <div class="p-4 md:p-0 hidden md:w-4/12 md:flex flex-col">
      <div class="mx-4 py-4 text-center bg-gray-200 rounded-lg">
        <img
          class="m-auto h-60 object-contain"
          src="/Family.jpg"
          alt="Photo of my family"
        />
        <h1 class="m-auto pt-3">Carla and I</h1>
      </div>
    </div>
  </div>
  <div>
    <h1 class="p-4 md:pt-12 text-4xl pb-8">Featured Projects</h1>
    <ProjectCatalog :showLimit="3" />
  </div>
</template>

<!-- https://www.taniarascia.com/
      https://www.bingingwithbabish.com/#top -->
