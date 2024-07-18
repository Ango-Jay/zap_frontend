import { useState, useEffect } from "react";

export const useIsOnline= () => {
  const [online, setIsOnline] = useState(navigator.onLine);

  const toggleOnline = () => {
    setIsOnline(true);
  };
  const toggleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("online", toggleOnline);
      window.addEventListener("offline", toggleOffline);
    }

    return () => {
      window.removeEventListener("online", toggleOnline);
      window.removeEventListener("offline", toggleOffline);
    };
  }, []);
  return online;
};