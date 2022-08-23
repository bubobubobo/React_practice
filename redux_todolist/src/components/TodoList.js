import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../actions";

const TodoList = () => {
  const todos = useSelector(({ todos, category }) =>
    todos.filter((todo) =>
      category === "all"
        ? true
        : category === "active"
        ? !todo.completed
        : todo.completed
    )
  );

  const dispatch = useDispatch();

  const toggleCompleted = (e) => {
    dispatch(toggleTodo(e.target.id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          id={todo.id}
          onClick={toggleCompleted}
          style={{
            textDecorationLine: todo.completed ? "line-through" : "",
          }}
        >
          {todo.content}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
