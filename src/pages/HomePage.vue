<script setup>
import { ref } from "vue";
import useTodos from "../composables/useTodos";
import TodoCard from "../components/TodoCard.vue";
import TodoModal from "../components/TodoModal.vue";

const { todos, categories, currentTodo } = useTodos();
</script>
<template>
  <TodoModal v-if="currentTodo.length > 0" />
  <div class="h-full bg-[#8F3F65] p-10">
    <ol class="flex h-full max-h-full w-full max-w-full">
      <li v-for="category in categories" class="h-full px-2">
        <TodoCard
          :category
          :todos="
            todos.filter((todo) => todo.category_id == category.category_id)
          "
        />
      </li>
    </ol>
  </div>
</template>
