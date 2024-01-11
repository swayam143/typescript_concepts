import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SyntheticEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <>
      <div style={{ gap: "20px" }} className="d-flex align-items-center">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className="form-control "
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button
          type="button"
          className="btn btn-danger flex-grow-1"
          onClick={handleAdd}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default InputField;
