<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex h-screen w-screen flex-col gap-2 bg-stone-400">
    <Header />
    <div class="h-full overflow-hidden bg-stone-200">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
