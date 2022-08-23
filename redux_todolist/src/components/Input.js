import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/index";

const Input = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={input} />
    </form>
  );
};

export default Input;
