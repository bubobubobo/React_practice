import { useState, useEffect } from "react";

const Fetch = () => {
  const [html, setHtml] = useState("");
  const url = "https://github.com/bubobubobo?tab=repositories";

  useEffect(() => {
    // const getHtml = async () => {
    //   const doc = await fetch(url, { mode: "no-cors" });
    //   const promise = doc.json();
    // };
    // getHtml();
    const promise = fetch(url);
    promise
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Fetch</div>;
};

export default Fetch;
