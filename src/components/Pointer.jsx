import { useState } from "react";

const Pointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="relative h-screen w-screen overflow-hidden"
    >
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className="absolute size-10 rounded-full bg-red-500"
      />
    </div>
  );
};

export default Pointer;
