import { useRef } from "react";

const Counter = () => {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl">
      <button
        className="cursor-pointer rounded bg-gray-200 px-4 py-1.5 hover:bg-gray-300"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
