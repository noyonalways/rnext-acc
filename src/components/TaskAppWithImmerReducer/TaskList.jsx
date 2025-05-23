import Task from "@/components/TaskApp/Task";

const TaskList = ({ tasks, onDeleteTask, onChangeTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
