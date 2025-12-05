import MyInputWithForwaredRef from "@/components/forward-ref-18/my-input";
import { useRef } from "react";

const ForwaredRefUnderstandOld = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded border p-4">
      <MyInputWithForwaredRef ref={inputRef} />
      <button className="bg-gray-200 px-2" onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
};

export default ForwaredRefUnderstandOld;
