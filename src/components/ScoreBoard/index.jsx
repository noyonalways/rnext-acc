import { useState } from "react";

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-md space-y-6 p-8">
        {/* option 1 to reset the state */}
        {/* {isPlayerA ? (
            <Counter key="Taylor" person="Taylor" />
          ) : (
            <Counter key="Sarah" person="Sarah" />
          )} */}

        {/* option  2 to rest the state */}
        {isPlayerA && <Counter person="Taylor" />}
        {!isPlayerA && <Counter person="Sarah" />}
        <button
          onClick={() => {
            setIsPlayerA(!isPlayerA);
          }}
          className="w-full transform rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
        >
          Next player!
        </button>
      </div>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`border-opacity-20 rounded-xl border-2 p-8 shadow-xl backdrop-blur-sm ${
        hover ? "bg-white" : "bg-white/60"
      } transform transition-all duration-300 ease-in-out hover:scale-105`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-center text-4xl font-bold text-transparent">
        {person}'s score: {score}
      </h1>
      <div className="flex justify-center">
        <button
          onClick={() => setScore(score + 1)}
          className="focus:ring-opacity-50 transform rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none active:scale-95"
        >
          Add one
        </button>
      </div>
    </div>
  );
}
