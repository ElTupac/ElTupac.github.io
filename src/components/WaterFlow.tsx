import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import polygonWaveGenerator from "../utils/polygonWaveGenerator";

const WaterElement = styled.div`
  --color: blue;
  --polygon: 0% 0%, 0% 0%, 100% 0%;
  background-color: var(--color);
  position: absolute;
  top: 330px;
  left: 46%;
  width: 100px;
  height: 350px;
  transform: rotate(-15deg);
  clip-path: polygon(var(--polygon));
`;

const WaterFlow = () => {
  const waterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const polygon = polygonWaveGenerator({
      waves: 4,
    });
    waterRef.current?.style.setProperty("--polygon", polygon);
  }, []);

  return <WaterElement ref={waterRef} />;
};

export default WaterFlow;
