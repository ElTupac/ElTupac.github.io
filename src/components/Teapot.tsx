import styled from "@emotion/styled";
import useScriptFileAsString from "../hooks/useScriptFileAsString";
import TeapotSvg from "./svg/TeapotSvg";
import WaterFlow from "./WaterFlow";

const TeapotContainer = styled.section`
  overflow-x: hidden;
  max-width: 100vw;
  height: 100vh;

  & .inner-container {
    max-width: 768px;
    margin: 0 auto;
    color: #fff;
    position: relative;

    & .floating-teapot {
      position: absolute;
      top: 5%;
      left: 5%;
      width: 350px;
      height: 500px;
      transform: rotate(30deg) scale(-1, 1);
    }
  }
`;

const Teapot: React.FC = () => {
  const scriptText = useScriptFileAsString();

  return (
    <TeapotContainer>
      <div className="inner-container">
        <TeapotSvg className="floating-teapot" />
        <WaterFlow>{scriptText || ""}</WaterFlow>
      </div>
    </TeapotContainer>
  );
};

export default Teapot;
