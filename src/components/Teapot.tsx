import styled from "@emotion/styled";
import useScriptFileAsString from "../hooks/useScriptFileAsString";
import TeacupSvg from "./svg/TeacupSvg";
import TeapotSvg from "./svg/TeapotSvg";
import WaterFlow from "./WaterFlow";
import WaterInCup from "./WaterInCup";

const TeapotContainer = styled.section`
  overflow-x: hidden;
  max-width: 100vw;
  height: 1000px;
  position: relative;

  & .inner-container {
    width: 100%;
    width: 450px;
    height: 800px;
    position: absolute;
    top: 50%;
    right: 65%;
    transform: translate(50%, -50%);
    color: #fff;

    @media (min-width: 769px) {
      right: 50%;
    }

    & .floating-teapot {
      position: absolute;
      top: 200px;
      right: 30%;
      width: 300px;
      transform: rotate(30deg) scale(-1, 1) translate(75%, -40%);
    }

    & .floating-teacup {
      position: absolute;
      width: 300px;
      height: 400px;
      top: 480px;
      right: 0;
      transform: translate(32%, 0);
    }
  }
`;

const Teapot: React.FC = () => {
  const scriptText = useScriptFileAsString();

  return (
    <TeapotContainer>
      <div className="inner-container">
        <TeapotSvg className="floating-teapot" />
        <TeacupSvg className="floating-teacup" />
        <WaterFlow>{scriptText || ""}</WaterFlow>
        <WaterInCup>{scriptText || ""}</WaterInCup>
      </div>
    </TeapotContainer>
  );
};

export default Teapot;
