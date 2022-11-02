<script setup lang="ts">
import ProjectCatalog from "../components/ProjectCatalog.vue";
</script>

<template>
  <div class="flex md:pt-14 pb-14 border-b-4">
    <div class="w-8/12 flex flex-col">
      <h1 class="text-6xl">Hi, I'm Chris!</h1>
      <p class="mt-6 text-xl">
        Aka Icehotburn to my online friends 🎮
        <br />
        <br />
        I'm a software engineer who creates projects with the goal of making
        life easier. I like sports, the outdoors, video games, and food.
        <br />
        <br />
        Check out
        <RouterLink class="text-sky-500" to="/projects">my projects</RouterLink
        >, read about
        <RouterLink class="text-sky-500" to="/blog">my experiences</RouterLink>,
        or learn more
        <RouterLink class="text-sky-500" to="/about">about me</RouterLink>!
      </p>
    </div>

    <div class="w-4/12 flex flex-col">
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
    <h1 class="pt-12 text-4xl pb-8">Featured Projects</h1>
    <ProjectCatalog :showLimit="3" />
  </div>
</template>

<!-- https://www.taniarascia.com/
      https://www.bingingwithbabish.com/#top -->
