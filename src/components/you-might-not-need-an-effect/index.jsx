// import { useState } from "react";
// import Example1 from "./example-1";
// import Example2 from "./example-2";

import { items1, items2 } from "@/data/items-data";
import { useState } from "react";
import Example3 from "./example-3";

const YouMightNotNeedAnEffect = () => {
  // const [userId, setUserId] = useState(1);
  const [items, setItems] = useState(items1);

  return (
    <div>
      {/* Example 1: Updating state based on props or state */}
      {/* <Example1 /> */}

      {/* Example 2: Updating state based on props or state */}
      {/* <div className="mt-4 mb-4 flex justify-center">
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
          onClick={() => setUserId(userId === 1 ? 2 : 1)}
        >
          Switch to Profile {userId === 1 ? 2 : 1}
        </button>
      </div>
      <Example2 key={userId} userId={userId} /> */}

      {/* Example 3: Updating state based on props or state */}
      <div className="m-4 flex space-x-1">
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
          onClick={() => setItems(items2)}
        >
          Switch to Items2
        </button>{" "}
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
          onClick={() => setItems(items1)}
        >
          Switch to Items1
        </button>
      </div>
      <Example3 items={items} />
    </div>
  );
};

export default YouMightNotNeedAnEffect;
