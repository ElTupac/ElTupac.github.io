import { useEffect } from "react";
import clamp from "../utils/clampNumber";

const useCssVariables = () => {
  useEffect(() => {
    const debounce = (fn: (a: boolean) => void, trigger: () => boolean) => {
      let frame: number;
      return (...params: unknown[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(!trigger());
        });
      };
    };
    const storeScroll = (noAnimations: boolean) => {
      let perc = (window.scrollY / window.innerHeight) * 110;
      if (noAnimations) {
        document.documentElement.style.setProperty(
          "--overlaysize",
          `${clamp(100 - perc * 3, 0, 100).toFixed(0)}%`
        );
      } else {
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
      }
    };
    const animationHasEnd: () => () => boolean = () => {
      let animationEnded: boolean = true;
      document.addEventListener("transitionend", () => {
        animationEnded = true;
      });
      document.addEventListener("transitionstart", () => {
        animationEnded = false;
      });

      return () => animationEnded;
    };

    document.addEventListener(
      "scroll",
      debounce(storeScroll, animationHasEnd()),
      {
        passive: true,
      }
    );
    storeScroll(false);
  }, []);
};

export default useCssVariables;
