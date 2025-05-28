import { useRef, useState } from "react";

const ToogleWithStateVsUseRef = () => {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-4 shadow-md">
      <div className="mb-6 space-x-4">
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle with setState
        </button>
        <button
          className="rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
          onClick={() => {
            ref.current.remove();
          }}
        >
          Remove from the DOM
        </button>
      </div>
      {show && (
        <p
          ref={ref}
          className="rounded-md border border-gray-200 bg-white p-4 text-gray-800 shadow-sm"
        >
          Hello world
        </p>
      )}
    </div>
  );
};

export default ToogleWithStateVsUseRef;
