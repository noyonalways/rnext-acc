import { useEffect, useState } from "react";

export default function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div>
      <div className="w-96 rounded-lg bg-white p-8 shadow-md">
        <label className="mb-4 block font-medium text-gray-700">
          What to log:{" "}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <h1 className="text-3xl font-bold text-indigo-600">{text}</h1>
      </div>
    </div>
  );
}
