import AddTask from "@/components/TaskApp/AddTask";
import TaskList from "@/components/TaskApp/TaskList";
import { initialTasks } from "@/data/tasks";
import taskReducer from "@/reducers/taskReducer";
import { getNextId } from "@/utils/getNextId";
import { useReducer } from "react";

export default function TaskAppWithReducer() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      payload: {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "deleted", payload: id });
  };

  const handleChangeTask = (id) => {
    dispatch({ type: "changed", payload: id });
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Task App With Reducer
      </h1>
      <div className="space-y-4">
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          onDeleteTask={handleDeleteTask}
          onChangeTask={handleChangeTask}
          tasks={tasks}
        />
      </div>
    </div>
  );
}
