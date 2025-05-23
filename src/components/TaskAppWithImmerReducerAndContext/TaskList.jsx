import Task from "@/components/TaskAppWithImmerReducerAndContext/Task";
import { TasksContext } from "@/contexts/TasksContext";
import { useContext } from "react";

const TaskList = () => {
  const tasks = useContext(TasksContext);

  return (
    <ul className="space-y-2">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default TaskList;
