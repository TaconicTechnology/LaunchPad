import { useRouter } from "next/navigation";
import * as React from "react";

export const useListener = () => {
  const router = useRouter();

  React.useEffect(() => {
    console.log("EventHandler");

    const evtSource = new EventSource("/api/events");

    evtSource.onmessage = function (event) {
      console.log("Received backend event", event);

      router.refresh();
    };

    return () => {
      evtSource.close();
    };
  }, []);
};
