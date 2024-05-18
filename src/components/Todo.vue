<script setup>
const props = defineProps({
  todo: {
    type: Object,
    default: {},
  },
  index: {
    type: Number,
    default: Math.random() * 10,
  },
});
const handleTodoDrag = (e) => {
  // console.log("dragged");
  // console.log(props.todo.uuid);
  e.dataTransfer.setData("todo_id", JSON.stringify(props.todo.uuid));

  // console.log(e.dataTransfer.getData("todo_id"));

  // dataTransfer
};
</script>
<template>
  <div
    draggable="true"
    :uuid="todo.uuid"
    :ondragstart="handleTodoDrag"
    class="w-full cursor-pointer rounded-md bg-stone-300 px-2 py-2 shadow-md shadow-stone-700 hover:bg-stone-200"
  >
    {{ todo.todo }}
  </div>
</template>
