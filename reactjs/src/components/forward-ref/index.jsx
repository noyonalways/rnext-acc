import MyInput from "@/components/forward-ref/my-input";
import { useRef } from "react";

const ForwaredRefUnderstand = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded border p-4">
      <MyInput ref={inputRef} />
      <button className="bg-gray-200 px-2" onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
};

export default ForwaredRefUnderstand;
