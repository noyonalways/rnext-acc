import { createConnection, logVisit } from "@/utils/connection";
import { useEffect } from "react";

// const serverUrl = "wss://chat.example.com";

const ChatRoom = ({ roomId, serverUrl }) => {
  console.log("rendering...");
  useEffect(() => {
    // synchronize with external chat server
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    console.log(`Synchronizing with ${roomId}`);

    // cleanup
    return () => {
      console.log(`Stop Synchronizing with ${roomId}`);
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  useEffect(() => {
    logVisit(roomId);
  }, [roomId]);

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">
        Welcome to the <span className="text-blue-600">{roomId}</span> room!
      </h1>
      <p className="text-sm text-gray-600">Connected to: {serverUrl}</p>
    </div>
  );
};

export default ChatRoom;
