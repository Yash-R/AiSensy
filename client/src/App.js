import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [loding, setLoding] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        setLoding("success");
        setList(res.data);
      })
      .catch((error) => {
        setLoding("Failed");
      });
  }, []);
  console.log("intents", list);

  return (
    <div>
      <div>{loding}</div>
      {list &&
        list.map((intent, index) => (
          <div key={index}>{intent.displayName}</div>
        ))}
    </div>
  );
};

export default App;
