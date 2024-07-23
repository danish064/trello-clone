<script setup>
import { ref } from "vue";
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
const { updateCategory, dragData, currentTodo } = useTodos();

const showSkeletonForNewTodo = ref(false);

const handleOnDrop = (e) => {
  const newTodo = dragData().getData();
  updateCategory(newTodo.uuid, category_id);
  showSkeletonForNewTodo.value = false;
};
const handleOnDragOver = (e) => {
  e.preventDefault();
};
const handleOnDragEnter = (e) => {
  const newTodo = dragData().getData();
  if (newTodo.category_id == props.category.category_id) {
  } else {
    showSkeletonForNewTodo.value = true;
  }
};
const handleOnDragLeave = (e) => {
  const newTodo = dragData().getData();
  if (newTodo.category_id == props.category.category_id) {
  } else {
    showSkeletonForNewTodo.value = false;
  }
};
</script>
<template>
  <div class="flex w-[360px] min-w-[360px]">
    <div
      :ondragenter="handleOnDragEnter"
      :ondragover="handleOnDragOver"
      :ondragleave="handleOnDragLeave"
      :ondrop="handleOnDrop"
      class="flex h-fit max-h-full w-full flex-col gap-6 rounded-lg bg-stone-400 px-4 py-4"
    >
      <div class="pointer-events-none text-xl font-medium">
        {{ category_name }}
      </div>
      <div
        class="pointer-events-none flex flex-col gap-3 overflow-auto pb-4 pr-2"
      >
        <template v-if="todos.length">
          <Todo v-if="showSkeletonForNewTodo" :isSkeleton="true" />
          <Todo
            v-for="(todo, index) in todos"
            :index="index + 1"
            :todo
            :class="
              showSkeletonForNewTodo
                ? 'pointer-events-none'
                : 'pointer-events-auto'
            "
          />
        </template>

        <template v-else>
          <div class="rounded bg-stone-300 p-2 text-center">
            No todos in this category
          </div>
        </template>
      </div>
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
