import "./App.css";
import { RightPart } from "./components/RightPart";
import { LeftPart } from "./components/LeftPart";
import React, { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const addHandler = (event) => {
    const item = {
      name: input,
      id: Math.floor(Math.random() * 1000),
    };
    setTodo([...todo, item]);
    setInput("");
  };

  const deleteMe = (id) => {
    const hhh = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(hhh);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-sm-12 coverLeft">
          <LeftPart inputHandler={inputHandler} addHandler={addHandler} todo={todo} input={input} />
        </div>
        <div className="col-lg-6 col-sm-12 coverRight">
          <RightPart todo={todo} setTodo={setTodo} deleteMe={deleteMe} />
        </div>
      </div>
    </div>
  );
}

export default App;
