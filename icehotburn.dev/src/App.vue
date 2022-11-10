<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <NavBar />
  <div class="min-h-screen max-w-screen-lg mx-auto p-4 md:p-0 md:pt-14">
    <RouterView />
  </div>
  <AppFooter />
</template>
