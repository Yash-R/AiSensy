import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [loding, setLoding] = useState("Loding ...");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        setLoding("");
        setList(res.data);
      })
      .catch((error) => {
        setLoding("Failed");
      });
  }, []);
  console.log("intents", list);

  return (
    <div>
      <div className="heading">
        <h1 className="title">
          <img className="logo" src="/assets/logo.svg" />
          <span>DialogFlow intents</span>
        </h1>
      </div>

      <table>
        <thead>
          <tr className="table100-head">
            <th>Intents</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((intent, index) => (
              <tr>
                <td key={index}>{intent.displayName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>{loding}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
