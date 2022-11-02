<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <NavBar />
  <div class="min-h-screen max-w-screen-lg mx-auto">
    <RouterView />
  </div>
  <AppFooter />
</template>
