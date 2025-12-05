import { useState } from "react";

const Example2 = ({ userId }) => {
  const [comment, setComment] = useState("");

  // 🔴 Avoid: Resetting state on prop change in an Effect
  // useEffect(() => {
  //   setComment("");
  // }, [userId]);

  return (
    <div className="mx-auto mt-8 max-w-md rounded-xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-lg">
      <h1 className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-3xl font-bold text-gray-800">
        Profile ID: {userId}
      </h1>
      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded-lg border-2 border-cyan-200 bg-white/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            placeholder="Share your thoughts..."
          />
        </div>
        {comment && (
          <div className="relative">
            <p className="min-h-[60px] rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 p-6 text-gray-700 shadow-inner transition-all duration-300 hover:shadow-md">
              {comment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Example2;
