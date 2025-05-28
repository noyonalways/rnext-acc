import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function TodoListWithFlushSync() {
  const listRef = useRef(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    setText("");

    // issue lies here
    // in react state updates are queued. Useally, this is what you want. However, here it causes a problem because setTodos does not immediately update the DOM. So, the time you scroll the list to its las element, the todo has not yet been added. This is why scrolling always 'lags behind' by one item.

    //  to fix this isue, you can force React to update ("flush") the DOM synchronously. To do this import flushSync from react-dom and wrap the state update into a flushSync call:
    flushSync(() => {
      setTodos([...todos, newTodo]);
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          placeholder="Add new todo..."
        />
        <button
          onClick={handleAdd}
          className="rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul ref={listRef} className="max-h-[400px] space-y-2 overflow-y-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100"
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "Todo #" + (i + 1),
  });
}
