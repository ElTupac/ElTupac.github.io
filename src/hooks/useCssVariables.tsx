import { useEffect } from "react";
import clamp from "../utils/clampNumber";

const useCssVariables = () => {
  useEffect(() => {
    const debounce = (fn: (...a: unknown[]) => void) => {
      let frame: number;
      return (...params: unknown[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };
    const storeScroll = () => {
      let perc = (window.scrollY / window.innerHeight) * 110;
      const cssValues = {
        "--scrollpos": perc,
        "--columns-translate": `${clamp(50 - perc, 0, 100).toFixed(1)}%`,
        "--rotatedeg": `${clamp(0.9 * (50 - perc), 0, 90).toFixed(0)}deg`,
        "--overlaysize": `${clamp(100 - perc * 3, 0, 100).toFixed(0)}%`,
        "--words-translate": `${clamp(50 - perc, 0, 50)}%`,
      };
      document.documentElement.setAttribute(
        "style",
        Object.entries(cssValues)
          .map(([variable, value]) => `${variable}: ${value};`)
          .join("")
      );
    };
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });
    storeScroll();
  }, []);
};

export default useCssVariables;
