import { computed, ref } from "vue";

const categories = ref([
  {
    category_id: "cat1",
    category_name: "Backlog",
  },
  {
    category_id: "cat2",
    category_name: "Completed",
  },
  {
    category_id: "cat3",
    category_name: "On Going",
  },
]);
const rawTodos = ref([
  {
    uuid: crypto.randomUUID(),
    category_id: "cat1",
    todo: "Todo 1 Backlog",
  },
  { uuid: crypto.randomUUID(), category_id: "cat1", todo: "Todo 2  Backlog" },
  { uuid: crypto.randomUUID(), category_id: "cat1", todo: "Todo 3  Backlog" },
  { uuid: crypto.randomUUID(), category_id: "cat1", todo: "Todo 5  Backlog" },
  { uuid: crypto.randomUUID(), category_id: "cat1", todo: "Todo 4  Backlog" },
  { uuid: crypto.randomUUID(), category_id: "cat1", todo: "Todo 6  Backlog" },
  { uuid: crypto.randomUUID(), category_id: "cat1", todo: "Todo 7  Backlog" },
  { uuid: crypto.randomUUID(), category_id: "cat1", todo: "Todo 8  Backlog" },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 1 Completed",
  },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 2 Completed",
  },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 3 Completed",
  },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 4 Completed",
  },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 5 Completed",
  },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 6 Completed",
  },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 7 Completed",
  },
  {
    uuid: crypto.randomUUID(),
    category_id: "cat2",
    todo: "Todo 8 Completed",
  },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 1 On Going" },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 2 On Going" },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 3 On Going" },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 4 On Going" },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 5 On Going" },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 6 On Going" },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 7 On Going" },
  { uuid: crypto.randomUUID(), category_id: "cat3", todo: "Todo 8 On Going" },
]);

let todoToTransfer = {};
const dragData = () => {
  function hasData() {
    return Object.keys(todoToTransfer).length;
  }
  function getData() {
    // console.log(todoToTransfer);
    return todoToTransfer;
  }
  function setData(todo) {
    todoToTransfer = todo;
    // console.log(todoToTransfer);
  }

  return { hasData, getData, setData };
};

const useTodos = () => {
  const updateCategory = (id, cat_id) => {
    const index = rawTodos.value.findIndex((todo) => {
      // console.log(typeof todo.uuid);
      // console.log(typeof id);
      // console.log("Checking: " + todo.uuid + " == " + id);
      // console.log(todo.uuid == id);
      return todo.uuid == id;
    });
    if (index < 0) {
      console.log("Negative index: ", index);
    } else {
      // console.log("Positive index");
      rawTodos.value[index].category_id = cat_id;
    }
    // return true;
  };
  const todos = computed(() => {
    return rawTodos.value.map((todo) => {
      const category = categories.value.find(
        (category) => category.category_id == todo.category_id,
      ) || { category_name: "Not found" };
      return { ...todo, category_name: category.category_name };
    });
  });
  return { todos, categories, updateCategory, dragData };
};
export default useTodos;
