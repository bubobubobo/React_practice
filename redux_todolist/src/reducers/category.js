const category = (category = "all", action) => {
  const { type, text } = action; // set-filter

  switch (type) {
    case "SET_CATEGORY":
      return text;
    default:
      return "all";
  }
};

export default category;
