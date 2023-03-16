const waveGen: (a: {
  left: number;
  right: number;
  top: number;
  bottom: number;
  inclination?: number;
  steps?: number;
}) => string[] = ({
  left,
  right,
  top,
  bottom,
  steps = 20,
  inclination = 0,
}) => {
  const wave: string[] = [];

  for (let step_number = 0; step_number < steps; step_number++) {
    const yPoint = (() => {
      const y = +(-top + ((top - bottom) / steps) * step_number).toFixed(4);
      return y < 0 ? y * -1 : y;
    })();
    const xPoint = (yPoint: number) =>
      +(
        inclination * yPoint +
        left +
        (right - left) / 2 +
        (right - left) * 0.5 * Math.sin((yPoint * 2 * Math.PI) / steps)
      ).toFixed(4);
    wave.push(`${xPoint(yPoint)}% ${yPoint}%`);
  }

  return wave;
};

const polygonWaveGenerator: (a: { waves: number }) => string = ({ waves }) => {
  const polygon: string[] = [];
  for (let i = 0; i < waves; i++)
    polygon.push(
      ...waveGen({
        left: 15,
        right: 65,
        top: (i * 100) / waves,
        bottom: ((i + 1) * 100) / waves,
        steps: 25,
        inclination: -0.2,
      })
    );
  for (let i = -waves; i < 0; i++)
    polygon.push(
      ...waveGen({
        left: 35,
        right: 75,
        top: (i * 100) / waves,
        bottom: ((i + 1) * 100) / waves,
        steps: 25,
        inclination: 0.35,
      })
    );

  return polygon.join(",");
};

export default polygonWaveGenerator;
