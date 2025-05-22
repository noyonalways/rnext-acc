import AddTask from "@/components/TaskApp/AddTask";
import TaskList from "@/components/TaskApp/TaskList";
import { initialTasks } from "@/data/tasks";
import taskImmerReducer from "@/reducers/taskImmerReducer";
import { getNextId } from "@/utils/getNextId";
import { useImmerReducer } from "use-immer";

export default function TaskAppWithImmerReducer() {
  const [tasks, dispatch] = useImmerReducer(taskImmerReducer, initialTasks);

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
