import { useState } from "react";

export default function Example3({ items }) {
  // const [selection, setSelection] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  // useEffect(() => {
  //   setSelection(null);
  // }, [items]);

  // Better: Adjust the state while rendering
  // const [prevItems, setPrevItems] = useState(items);
  // if (items !== prevItems) {
  //   setPrevItems(items);
  //   setSelection(null);
  // }

  // ✅ Best: Calculate everything during rendering
  const selection = items.find((item) => item.id === selectedId) ?? null;

  return (
    <div className="p-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <label
            htmlFor={item.id}
            key={item.id}
            className="flex cursor-pointer items-center space-x-2"
          >
            <input
              id={item.id}
              type="checkbox"
              checked={item.id === selectedId}
              onChange={() => setSelectedId(item.id)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-700">{item.title}</span>
          </label>
        ))}
      </ul>
      {selection?.id && (
        <div className="mt-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Selected Item
          </h2>
          <div className="rounded-lg bg-cyan-50 p-4 shadow-sm">
            <p className="text-gray-800">{selection?.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
