import MyInputWithImperative from "@/components/forward-ref-imperative/my-input";
import { useRef } from "react";

const ForwaredRefImperative = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus(); // now only focus method allow to parent compoent
  }
  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded border p-4">
      <MyInputWithImperative ref={inputRef} />
      <button className="bg-gray-200 px-2" onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
};

export default ForwaredRefImperative;
