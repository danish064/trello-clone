<script setup>
import useTodos from "../composables/useTodos";
const { dragData } = useTodos();
const props = defineProps({
  todo: {
    type: Object,
    default: {},
  },
  index: {
    type: Number,
    default: Math.random() * 10,
  },
  isSkeleton: {
    type: Boolean,
    default: false,
  },
});
const handleOnDragStart = (e) => {
  dragData().setData(props.todo);
};
</script>
<template>
  <div
    v-if="isSkeleton"
    class="pointer-events-none w-full cursor-pointer rounded-md bg-stone-400 px-2 py-2"
  >
    Skeleton
  </div>
  <div
    v-else
    draggable="true"
    :uuid="todo.uuid"
    :ondragstart="handleOnDragStart"
    class="w-full cursor-pointer rounded-md bg-stone-300 px-2 py-2 shadow-md shadow-stone-700 hover:bg-stone-200"
  >
    {{ todo.todo }}
  </div>
</template>
