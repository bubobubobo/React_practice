const generateNewId = (todos) => Math.max(...todos.map((todo) => todo.id)) + 1;

const todos = (state = [], action) => {
  const { type, text } = action;

  switch (type) {
    // text : content
    case "ADD_TODO":
      return [
        ...state,
        {
          id: !state.length ? 0 : generateNewId(state),
          content: text,
          completed: false,
        },
      ];

    // text : id
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === +text ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todos;
