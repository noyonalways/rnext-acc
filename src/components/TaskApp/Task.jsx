import { useState } from "react";

const Task = ({ task, onDeleteTask, onChangeTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          type="text"
          value={task.text}
          onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
        />
        <button
          onClick={() => setIsEditing(false)}
          className="rounded-md bg-blue-500 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-600"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span
          className={`w-full p-2 text-gray-700 ${task.done ? "line-through" : ""}`}
        >
          {task.text}
        </span>
        <button
          onClick={() => setIsEditing(true)}
          className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-200"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <li className="group rounded-lg border border-gray-100 px-2 py-4 shadow hover:bg-gray-50">
      <label className="flex items-center gap-3">
        <input
          className="h-5 w-5 rounded-md border-gray-300 text-blue-500 focus:ring-blue-500"
          type="checkbox"
          checked={task.done}
          onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
        />
        {taskContent}
        <button
          onClick={() => onDeleteTask(task.id)}
          className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-200"
        >
          Delete
        </button>
      </label>
    </li>
  );
};

export default Task;
