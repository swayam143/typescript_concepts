import React from "react";
import SimpleDemo from "./project/simpleDemo/SimpleDemo";
import { Routes, Route } from "react-router-dom";
import Todo from "./project/todo/Todo";

const App = () => {
  return (
    <Routes>
      <Route path="simpleDemo" element={<SimpleDemo />} />
      <Route path="todo" element={<Todo />} />
    </Routes>
  );
};

export default App;
