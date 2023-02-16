import styled from "@emotion/styled";
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
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
  }
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

const VideosGrid = () => {
  return (
    <GridWrapper>
      <Grid>
        {videos.map((video) => (
          <VideoElement key={video.link} video={video} />
        ))}
      </Grid>
    </GridWrapper>
  );
};

export default VideosGrid;
