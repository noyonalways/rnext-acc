import { useState } from "react";
import Playground from "./playground";

export default function PuttingItAllTogether() {
  const [show, setShow] = useState(false);
  return (
    <div className="p-4">
      <button
        onClick={() => setShow(!show)}
        className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-sm transition-colors duration-200 hover:bg-blue-600"
      >
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr className="my-4 border-gray-300" />}
      {show && (
        <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
          <Playground />
        </div>
      )}
    </div>
  );
}
