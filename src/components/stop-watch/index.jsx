import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded border p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Time passed: {secondsPassed.toFixed(3)}
      </h1>
      <div className="flex items-center justify-center space-x-2">
        <button
          className="cursor-pointer rounded bg-gray-200 px-4 py-1.5"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="cursor-pointer rounded bg-gray-200 px-4 py-1.5"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
