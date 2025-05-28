import { useRef, useState } from "react";

export default function InputFocus() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleClick() {
    inputRef.current.focus();
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClear() {
    setInputValue("");
    inputRef.current.focus();
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded border p-4">
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Interactive Input Example
        </label>
        <div className="relative">
          <input
            className={`w-full rounded border p-2 transition-all ${
              isFocused
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-300"
            }`}
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type something here..."
          />
          {inputValue && (
            <button
              onClick={handleClear}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded border bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
          onClick={handleClick}
        >
          Focus Input
        </button>
        <div className="flex items-center text-sm text-gray-500">
          {isFocused
            ? "Input is focused!"
            : "Click the button to focus the input"}
        </div>
      </div>

      {inputValue && (
        <div className="mt-4 rounded bg-gray-50 p-2">
          <p className="text-sm text-gray-600">You typed: {inputValue}</p>
        </div>
      )}
    </div>
  );
}
