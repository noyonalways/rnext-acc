import VideoPlayer from "@/components/understand-useeffect/video-player";
import { useState } from "react";

const UnderstandUseEffect = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="mx-auto w-full max-w-2xl space-y-2">
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <input
        className="border p-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="border border-gray-100 bg-gray-100 px-2 py-1"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default UnderstandUseEffect;
