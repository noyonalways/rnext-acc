import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function updateState() {
      setIsOnline(navigator.onLine);
    }

    updateState();

    // subscribe
    window.addEventListener("online", updateState);
    window.addEventListener("offline", updateState);

    // cleanup
    return () => {
      window.removeEventListener("online", updateState);
      window.removeEventListener("offline", updateState);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
