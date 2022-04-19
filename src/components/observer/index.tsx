import { useEffect, useState } from "react";

export const InternetAvailabilityObserver = () => {
  const [isOnline, setOnline] = useState<any>(navigator.onLine);

  useEffect(() => {
    // subscribe to two events -> online and offline
    // when online -> set online to true
    // when offline -> set online to false
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
    return () => {
      // when component gets unmounted, remove the event listeners to prevent memory leaks
      window.removeEventListener("online", () => setOnline(true));
      window.removeEventListener("offline", () => setOnline(false));
    };
  }, []);

  return (
    <>
      <h1>Internet Availability Observer</h1>
      <p>
        {isOnline ? (
          <>
            <span>
              You are <b>online</b>
            </span>
          </>
        ) : (
          <>
            <span>
              You are <b>offline</b>
            </span>
          </>
        )}
      </p>
    </>
  );
};
