// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

import { useEffect, useState } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isDesktop ? <Desktop /> : <Mobile />}</>;
}
