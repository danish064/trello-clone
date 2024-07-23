<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex h-screen w-screen flex-col text-[#9fadbc]">
    <Header />
    <div class="h-full overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
