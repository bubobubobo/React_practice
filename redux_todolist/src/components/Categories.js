import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions";

const Categories = ({ categories }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            dispatch(setCategory(category.toLowerCase()));
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
