import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [loding, setLoding] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        console.log("res", res);
        setLoding(res.data);
      })
      .catch((error) => {
        console.log("error", error);
        setLoding("Failed");
      });
  });

  return <div>{loding}</div>;
};

export default App;
