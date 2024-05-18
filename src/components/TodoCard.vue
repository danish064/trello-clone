<script setup>
import useTodos from "../composables/useTodos";
import Todo from "./Todo.vue";
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
  todos: {
    type: Array,
    default: [],
  },
});
const { category_id, category_name } = props.category;
const { updateCategory } = useTodos();
const handleTodoDrop = (e) => {
  // if (e) console.log(e);
  // console.log("Dragover");
  const incommingTodoId = JSON.parse(e.dataTransfer.getData("todo_id"));
  console.log(incommingTodoId);
  updateCategory(incommingTodoId, category_id);
};
</script>
<template>
  <div
    :ondragover="
      (e) => {
        e.preventDefault();
      }
    "
    :ondrop="handleTodoDrop"
    class="flex w-[360px] min-w-[360px] flex-col gap-6 rounded-lg bg-stone-400 px-4 py-4"
  >
    <div class="text-xl font-medium">
      {{ category_name }}
    </div>
    <div class="flex flex-col gap-3 overflow-auto pr-2">
      <template v-if="todos.length">
        <Todo v-for="(todo, index) in todos" :index :todo />
      </template>

      <template v-else>
        <div class="rounded bg-stone-300 p-2 text-center">
          No todos in this category
        </div>
      </template>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
::-webkit-scrollbar {
  /* width: 1em; */
  @apply w-1;
}

::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  @apply rounded-full bg-stone-800;
}

::-webkit-scrollbar-thumb {
  /* background-color: darkgrey;
  outline: 1px solid slategrey; */
  @apply cursor-pointer rounded-full bg-stone-300 hover:bg-stone-200;
}
</style>
