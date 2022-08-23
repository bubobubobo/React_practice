const addTodo = (content) => {
  return {
    type: "ADD_TODO",
    text: content,
  };
};

const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    text: id,
  };
};

const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    text: category,
  };
};

export { addTodo, toggleTodo, setCategory };
