import AddTask from "@/components/TaskAppWithImmerReducerAndContext/AddTask";
import TaskList from "@/components/TaskAppWithImmerReducerAndContext/TaskList";
import TasksProvider from "@/contexts/TasksContext";

export default function TaskAppWithImmerReducerAndContext() {
  return (
    <TasksProvider>
      <div className="mx-auto mt-10 w-full max-w-2xl">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Task App With Immer Reducer And Context
        </h1>
        <div className="space-y-4">
          <AddTask />
          <TaskList />
        </div>
      </div>
    </TasksProvider>
  );
}
