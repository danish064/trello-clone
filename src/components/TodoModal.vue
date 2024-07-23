<template>
  <div
    class="absolute left-0 top-0 flex h-full w-full items-center justify-center shadow-lg shadow-black backdrop-blur-sm"
  >
    <div class="w-full max-w-5xl rounded bg-gray-200 p-4">
      <div class="flex h-full w-full flex-col gap-4">
        <button @click="currentTodo = ''" class="self-end font-bold">X</button>
        <div>
          {{ todo.uuid }}
        </div>
        <div v-if="!edit" class="flex justify-around py-10">
          <div>todo.todo</div>
          <button
            @click="edit = true"
            class="rounded-lg border border-stone-700 bg-stone-300 px-3 py-0.5"
          >
            edit
          </button>
        </div>
        <div v-if="edit">
          edit

          <button
            @click="edit = false"
            class="rounded-lg border border-stone-700 bg-stone-300 px-3 py-0.5"
          >
            save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import useTodos from "../composables/useTodos";

const { currentTodo, getTodo } = useTodos();

const todo = ref({});
const edit = ref(false);

todo.value = getTodo(currentTodo.value);
</script>
<style lang="postcss" scoped></style>
