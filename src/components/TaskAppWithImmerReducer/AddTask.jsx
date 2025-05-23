import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex w-full justify-between gap-4">
      <input
        className="flex-1 rounded border p-2"
        type="text"
        placeholder="Add task"
        value={text}
        onChange={handChange}
      />
      <button
        onClick={() => {
          if (text === "") {
            return;
          }
          onAddTask(text);
          setText("");
        }}
        className="min-w-24 cursor-pointer rounded border border-gray-200 bg-gray-200 px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
