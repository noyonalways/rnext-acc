import { useTasks, useTasksDispatch } from "@/hooks/tasks";
import { getNextId } from "@/utils/getNextId";
import { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

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
          dispatch({
            type: "added",
            payload: {
              id: getNextId(tasks),
              text: text,
              done: false,
            },
          });
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
