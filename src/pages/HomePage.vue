<script setup>
import { ref } from "vue";
import useTodos from "../composables/useTodos";
import TodoCard from "../components/TodoCard.vue";
import TodoModal from "../components/TodoModal.vue";

const { todos, categories, currentTodo } = useTodos();
</script>
<template>
  <TodoModal v-if="currentTodo.length > 0" />
  <div class="h-full bg-stone-500 p-10">
    <div class="flex max-h-full max-w-full gap-10 overflow-y-auto">
      <TodoCard
        v-for="category in categories"
        :category
        :todos="
          todos.filter((todo) => todo.category_id == category.category_id)
        "
      />
    </div>
  </div>
</template>
