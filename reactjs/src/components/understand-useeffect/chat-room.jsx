import { createConnection } from "@/components/understand-useeffect/chat";
import { useEffect } from "react";

const ChatRoom = () => {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    // cleanup
    return () => {
      connection.disconnect();
    };
  }, []);

  return (
    <h1 className="text-center text-2xl font-bold">Welcome to the chat!</h1>
  );
};

export default ChatRoom;
