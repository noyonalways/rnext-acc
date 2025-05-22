import AddTask from "@/components/TaskApp/AddTask";
import TaskList from "@/components/TaskApp/TaskList";
import { initialTasks } from "@/data/tasks";
import { useState } from "react";

export default function TaskApp() {
  const [tasks, setTasks] = useState([...initialTasks]);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (acc, curr) => (acc && acc.id > curr.id ? acc.id : curr.id),
      0,
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleDeleteTask = (id) => {
    const nextTasks = tasks.filter((task) => task.id !== id);
    setTasks(nextTasks);
  };

  const handleChangeTask = (task) => {
    const nextTaks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    setTasks(nextTaks);
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl">
      <h1 className="mb-4 text-center text-2xl font-bold">Task App</h1>
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
