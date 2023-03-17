import React, { Suspense, useEffect, useRef, useState } from "react";
import isInViewport from "../../utils/isInViewport";

const Teapot = React.lazy(() => import("./Teapot"));

const TeapotSection: React.FC = () => {
  const [isInScreen, setIsInScreen] = useState<boolean>(false);
  const flagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (flagRef.current) {
        if (isInViewport(flagRef.current, 50) && !isInScreen)
          setIsInScreen(true);
        else if (!isInViewport(flagRef.current, 50) && isInScreen)
          setIsInScreen(false);
      }
    });
  }, []);

  return (
    <>
      <span ref={flagRef} style={{ visibility: "hidden" }}>
        &nbsp;
      </span>
      <Suspense>{isInScreen && <Teapot />}</Suspense>
    </>
  );
};

export default TeapotSection;
