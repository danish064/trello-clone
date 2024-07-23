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

const hover = ref(false);

const handleOnDrop = (e) => {
  hover.value = false;
  const newTodo = dragData().getData();
  updateCategory(newTodo.uuid, category_id);
  showSkeletonForNewTodo.value = false;
};
const handleOnDragOver = (e) => {
  e.preventDefault();
};
const handleOnDragEnter = (e) => {
  hover.value = true;
  const newTodo = dragData().getData();
  if (newTodo.category_id == props.category.category_id) {
  } else {
    showSkeletonForNewTodo.value = true;
  }
};
const handleOnDragLeave = (e) => {
  hover.value = false;
  const newTodo = dragData().getData();
  if (newTodo.category_id == props.category.category_id) {
  } else {
    showSkeletonForNewTodo.value = false;
  }
};
</script>
<template>
  <div class="h-full w-[260px] min-w-[260px] rounded-xl">
    <div
      :ondragenter="handleOnDragEnter"
      :ondragover="handleOnDragOver"
      :ondragleave="handleOnDragLeave"
      :ondrop="handleOnDrop"
      class="flex h-fit max-h-full w-full flex-col rounded-xl bg-[#101204] px-2 py-4"
      :class="hover ? 'outline outline-2 outline-cyan-500' : 'outline-none'"
    >
      <div class="pointer-events-none px-4 py-4 text-sm font-medium">
        {{ category_name }}
      </div>
      <ol
        class="pointer-events-none flex h-full max-h-full flex-col gap-3 overflow-y-auto px-1 py-2"
      >
        <template v-if="todos.length">
          <li v-if="showSkeletonForNewTodo">
            <Todo :isSkeleton="true" />
          </li>
          <li v-for="(todo, index) in todos">
            <Todo
              :index="index + 1"
              :todo
              :class="
                showSkeletonForNewTodo
                  ? 'pointer-events-none'
                  : 'pointer-events-auto'
              "
            />
          </li>
        </template>

        <template v-else>
          <div class="rounded bg-stone-300 p-2 text-center">
            No todos in this category
          </div>
        </template>
      </ol>
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
  @apply rounded-full bg-stone-800 py-2;
}

::-webkit-scrollbar-thumb {
  /* background-color: darkgrey;
  outline: 1px solid slategrey; */
  @apply cursor-pointer rounded-full bg-stone-300  hover:bg-stone-200;
}
</style>
