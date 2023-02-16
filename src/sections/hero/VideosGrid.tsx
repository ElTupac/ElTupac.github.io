import styled from "@emotion/styled";
import { useEffect } from "react";
import AccountPhrase from "../../components/AccountPhrase";
import clamp from "../../utils/clampNumber";
import videos from "../../utils/constant/videos";
import VideoElement from "./VideoElement";

const GridWrapper = styled.section`
  overflow: hidden;
  position: relative;
  background-color: #1a1a1a;
`;

const Grid = styled.div`
  padding: 0 5%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 0.5rem;
  transition: transform 0.4s linear;
  transform: rotate3d(4, 10, 7, var(--rotatedeg));

  & > * {
    transition: transform 0.4s linear;
    transform: translate(0, calc(var(--columns-translate) * -1));
    &:nth-of-type(3n + 2) {
      transform: translate(0, var(--columns-translate));
    }
  }
`;

const Overlay = styled.div`
  width: var(--overlaysize);
  will-change: width;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-color: #1a1a1a;
`;

const VideosGrid = () => {
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
        "--overlaysize": `${clamp(100 - perc * 5, 0, 100).toFixed(0)}%`,
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

  return (
    <GridWrapper>
      <Overlay>
        <AccountPhrase />
      </Overlay>
      <Grid>
        {videos.map((video) => (
          <VideoElement key={video.link} video={video} />
        ))}
      </Grid>
    </GridWrapper>
  );
};

export default VideosGrid;
