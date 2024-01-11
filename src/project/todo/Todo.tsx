import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todos } from "./components/Model";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Todo = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const handleAdd = (e: React.SyntheticEvent) => {
    if (todo !== "") {
      setTodos([...todos, { id: todos.length, todo: todo, isDone: false }]);
      setTodo(""); // Clear the input field after adding a todo
    } else {
      console.log(false);
    }
  };

  const handelDelete = (data: Todos) => {
    setTodos(todos.filter((item) => item.id !== data.id));
  };

  const handleComplete = (data: Todos) => {
    const newTodods = [...todos];
    const findIndex = newTodods.findIndex((item) => item.id === data.id);
    newTodods[findIndex] = {
      ...newTodods[findIndex],
      isDone: todos[findIndex].isDone === false ? true : false,
    };
    setTodos(newTodods);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 d-block mx-auto mt-5">
            <h2 className="text-center mb-4">Todo App</h2>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

            {todos.map((data, i) => (
              <React.Fragment key={i}>
                <div
                  style={{ gap: "10px" }}
                  className="d-flex align-items-center mt-2"
                >
                  <h5
                    style={{ color: data.isDone === true ? "green" : "" }}
                    className="flex-grow-1"
                  >
                    {data.todo}
                  </h5>
                  {data.isDone === false && (
                    <button
                      onClick={() => handleComplete(data)}
                      type="button"
                      className="btn btn-success"
                    >
                      <TiTick />
                    </button>
                  )}

                  <button
                    onClick={() => handelDelete(data)}
                    type="button"
                    className="btn btn-danger text-nowrap "
                  >
                    <ImCross />
                  </button>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
