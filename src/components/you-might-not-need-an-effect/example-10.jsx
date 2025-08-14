import useOnlineStatus from "@/hooks/useOnlineStatus";

const Example10 = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h1>Subscribing to an external store using useEffect</h1>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default Example10;
