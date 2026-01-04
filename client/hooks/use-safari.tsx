import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      userAgent.includes("safari") && !userAgent.includes("chrome") && !userAgent.includes("chromium");
    setIsSafari(isSafariBrowser);
  }, []);

  return isSafari;
}

