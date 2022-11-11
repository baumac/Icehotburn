<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";

const showMenu = ref(false);
</script>

<template>
  <div class="w-full border-b border-slate-900/10">
    <nav
      class="max-w-screen-2xl px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="flex">
          <img alt="Icehotburn Logo" src="/Icehotburn.png" width="150"
        /></RouterLink>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            aria-label="Expand menu"
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <Bars3Icon class="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li class="flex md:pl-6 md:border-l md:border-slate-200">
          <a href="https://github.com/Icehotburn">
            <img alt="Github Logo" src="/github.svg" width="25" height="25" />
          </a>
          <a
            class="pl-2 md:pl-6"
            href="https://www.linkedin.com/in/chrisbaumann349/"
          >
            <img
              alt="Linkedin Logo"
              src="/linkedin.svg"
              width="25"
              height="25"
            />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
