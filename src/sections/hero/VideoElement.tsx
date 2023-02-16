import styled from "@emotion/styled";
import { VideosType } from "../../utils/constant/videos";

const VideoWrapper = styled.a`
  text-decoration: none;

  & article {
    border-radius: 8px;
    background-color: #343434;
    overflow: hidden;

    & .information {
      padding: 0 0.25rem 0.25rem;
      display: flex;
      flex-direction: column;

      & h3 {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
        font-size: 0.7rem;
      }
      & small {
        font-size: 0.6rem;
        color: #aaa;
      }
    }

    & img {
      width: 100%;
    }
  }
`;

const VideoElement: React.FC<{ video: VideosType }> = ({
  video: { image, title, author, link },
}) => (
  <VideoWrapper href={link} target="_blank" rel="noreferrer">
    <article>
      <img src={image} />
      <div className="information">
        <h3>{title}</h3>
        <small>{author}</small>
      </div>
    </article>
  </VideoWrapper>
);

export default VideoElement;
