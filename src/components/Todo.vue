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
  // let shadowImage = e.target.cloneNode(true);
  // shadowImage.classList.add("bg-stone-600");
  // shadowImage.classList.add("text-white");
  // shadowImage.classList.add("w-[316px]");
  // shadowImage.classList.add("absolute");
  // shadowImage.classList.add("top-0");
  // shadowImage.classList.add("left-0");
  // shadowImage.classList.add("-translate-x-[100%]");
  // document.body.appendChild(shadowImage);
  // e.dataTransfer.setDragImage(shadowImage, 120, 30);

  dragData().setData(props.todo);
};
const handleOnDragEnd = (e) => {
  // console.log(e.target);
  e.target.classList.remove("bg-stone-800");
};
</script>
<template>
  <div
    v-if="isSkeleton"
    class="pointer-events-none w-full cursor-pointer rounded-md bg-stone-200 px-2 py-5"
  ></div>
  <div
    v-else
    draggable="true"
    :uuid="todo.uuid"
    :ondragstart="handleOnDragStart"
    :ondragend="handleOnDragEnd"
    class="w-full cursor-pointer rounded-md bg-stone-300 px-2 py-2 shadow-md shadow-stone-700 hover:bg-stone-200"
  >
    {{ todo.todo }}
  </div>
</template>
