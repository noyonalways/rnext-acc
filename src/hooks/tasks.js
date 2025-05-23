import { TasksContext, TasksDispatchContext } from "@/contexts/TasksContext";
import { useContext } from "react";

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksContextProvider");
  }
  return context;
};

export const useTasksDispatch = () => {
  const context = useContext(TasksDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useTasksDispatch must be used within a TasksContextProvider",
    );
  }
  return context;
};
