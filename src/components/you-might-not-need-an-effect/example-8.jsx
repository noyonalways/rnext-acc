import { useState } from "react";

const Example8 = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-4">
      <h1 className="mb-8 text-center text-2xl font-bold">
        Notifying parent components about state changes
      </h1>
      <div className="mx-auto max-w-md rounded-lg bg-gray-100 p-6 shadow-md">
        <div className="mb-4 text-xl font-medium">
          Status:{" "}
          <span className={`${isOn ? "text-green-600" : "text-red-600"}`}>
            {isOn ? "On" : "Off"}
          </span>
        </div>
        <Toggle onChange={setIsOn} />
      </div>
    </div>
  );
};

export default Example8;

const Toggle = ({ onChange }) => {
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
  // useEffect(() => {
  //   onChange(isOn);
  // }, [isOn, onChange]);

  // ✅ Good: Perform all updates during the event that caused them
  const handleToggle = (nextIsOn) => {
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  };

  function handleClick() {
    handleToggle(!isOn);
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className={`cursor-pointer rounded-lg px-6 py-2 font-medium transition-all duration-200 ${
          isOn
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-red-500 text-white hover:bg-red-600"
        } `}
      >
        Toggle
      </button>
    </div>
  );
};
