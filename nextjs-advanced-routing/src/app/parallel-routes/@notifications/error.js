"use client";

const NotificationsError = ({ error }) => {
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
      <h1 className="text-red-500">
        Notifications Error: {error.message || "Unknown Error"}
      </h1>
    </div>
  );
};

export default NotificationsError;
