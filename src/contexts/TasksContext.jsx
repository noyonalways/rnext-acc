import { initialTasks } from "@/data/tasks";
import taskImmerReducer from "@/reducers/taskImmerReducer";
import { createContext } from "react";
import { useImmerReducer } from "use-immer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskImmerReducer, initialTasks);
  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}
