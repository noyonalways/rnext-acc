import { useState } from "react";
import ChatRoom from "./chat-room";

export default function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  const [showChat, setShowChat] = useState(true);
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  const handleRoomChange = (e) => {
    setRoomId(e.target.value);
  };

  return (
    <div className="mx-auto mt-6 max-w-2xl rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
          className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <button
          onClick={() => setShowChat((s) => !s)}
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          {showChat ? "Hide Chat Room" : "Show Chat Room"}
        </button>
      </div>
      {showChat && (
        <>
          <hr className="my-6 border-gray-200" />
          <div className="mb-6">
            <label className="mr-3 font-medium">Select Chat Room:</label>
            <select
              onChange={handleRoomChange}
              className="rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="general">General</option>
              <option value="travel">Travel</option>
              <option value="music">Music</option>
            </select>
          </div>

          <ChatRoom roomId={roomId} serverUrl={serverUrl} />
        </>
      )}
    </div>
  );
}
