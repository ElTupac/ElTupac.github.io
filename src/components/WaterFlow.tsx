import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import polygonWaveGenerator from "../utils/polygonWaveGenerator";

const movingTextKeyframe = keyframes`
  from {
    transform: translate(0, -100%);
  }
  to{
    transform: translate(0, 0);
  }
`;

const WaterElement = styled.div`
  --color: #020204;
  --polygon: 0% 0%, 0% 0%, 100% 0%;
  background-color: var(--color);
  position: absolute;
  top: 330px;
  left: 46%;
  width: 100px;
  height: 350px;
  transform: rotate(-15deg);
  clip-path: polygon(var(--polygon));
  overflow: hidden;

  & .text-container {
    color: #78c475;
    height: 300vh;
    font-size: 0.9rem;
    line-height: 1rem;
    transform: translate(0, -100%);
    animation: ${movingTextKeyframe} 25s infinite linear;
  }
`;

const WaterFlow: React.FC<{ children: string }> = ({ children }) => {
  const waterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const polygon = polygonWaveGenerator({
      waves: 4,
    });
    waterRef.current?.style.setProperty("--polygon", polygon);
  }, []);

  return (
    <WaterElement ref={waterRef}>
      <div className="text-container">{children}</div>
    </WaterElement>
  );
};

export default WaterFlow;
