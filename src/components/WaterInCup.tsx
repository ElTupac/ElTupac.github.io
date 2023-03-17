import styled from "@emotion/styled";
import { movingTextKeyframe } from "./WaterFlow";

const WaterInBack = styled.div`
  position: absolute;
  top: 515px;
  width: 121px;
  right: 1%;
  height: 55px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  transform-origin: bottom;
  transform: rotate3d(1, 0, -0.25, 60deg);
  z-index: 0;
  background-color: #020204;
  color: #78c475;
  overflow: hidden;

  & > p {
    margin: 0;
    height: 300vh;
    font-size: 0.9rem;
    line-height: 1rem;
    transform: translate(0, -100%);
    animation: ${movingTextKeyframe} 50s infinite linear;
  }
`;

const WaterInFront = styled.div`
  position: absolute;
  top: 535px;
  width: 120px;
  right: -1%;
  height: 60px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  transform-origin: top;
  transform: rotate3d(-1.75, 0, -0.4, 60deg) translate(-17%, 80%);
  z-index: 2;
  background-color: #020204;
  color: #78c475;
  overflow: hidden;

  & > p {
    margin: 0;
    height: 300vh;
    font-size: 0.9rem;
    line-height: 1rem;
    transform: translate(0, -100%);
    animation: ${movingTextKeyframe} 50s infinite reverse linear;
  }
`;

const WaterInCup: React.FC<{ children?: string }> = ({ children }) => {
  return (
    <>
      <WaterInBack>
        <p>{children}</p>
      </WaterInBack>
      <WaterInFront>
        <p>{children}</p>
      </WaterInFront>
    </>
  );
};

export default WaterInCup;
