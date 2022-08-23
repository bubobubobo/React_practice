import React from "react";
import { createStore } from "redux";
import reducer from "./reducers/combineReducers";
import { Provider } from "react-redux";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Categories from "./components/Categories";

function App() {
  const categories = ["All", "Active", "Completed"];

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Input />
      <TodoList />
      <Categories categories={categories} />
    </Provider>
  );
}

export default App;
