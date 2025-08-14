// Initializing the application

import { useEffect } from "react";

// dummy function to demonstrate loading data from local storage
const loadDataFromLocalStorage = () => {
  const data = localStorage.getItem("data");
};

// dummy function to demonstrate checking auth token
const checkAuthToken = () => {
  const token = localStorage.getItem("authToken");
};

let didInit = false;

// ✅ Better
if (typeof window !== "undefined") {
  // Check if we're running in the browser.
  // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

const Example7 = () => {
  // 🔴 Avoid: Effects with logic that should only ever run once
  useEffect(() => {
    loadDataFromLocalStorage();
    checkAuthToken();
  }, []);

  // ✅ Good
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);

  return (
    <div>
      <h1>Initializing the application</h1>
    </div>
  );
};

export default Example7;
