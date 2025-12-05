import useOnlineStatusWithSyncExternalStore from "@/hooks/useOnlineStatusWithSyncExternalStore";

const OnlineIndicator = () => {
  const isOnline = useOnlineStatusWithSyncExternalStore();

  return (
    <div className="mx-auto min-h-[200px] max-w-md rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Connection Status Monitor
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full ${
            isOnline ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <span className="text-3xl">{isOnline ? "🌐" : "📡"}</span>
        </div>
        <p
          className={`rounded-full px-6 py-2 text-lg font-medium transition-colors duration-300 ${
            isOnline
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : "bg-red-100 text-red-800 hover:bg-red-200"
          }`}
        >
          {isOnline ? "Connected" : "Disconnected"}
        </p>
        <p className="mt-4 text-center text-sm text-gray-500">
          Using useSyncExternalStore for real-time status updates
        </p>
      </div>
    </div>
  );
};

export default OnlineIndicator;
