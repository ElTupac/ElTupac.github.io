import useCssVariables from "./hooks/useCssVariables";
import HeroSection from "./sections/hero/HeroSection";
import Teapot from "./sections/teapot/TeapotSection";

const App = () => {
  useCssVariables();

  return (
    <>
      <HeroSection />
      <Teapot />
    </>
  );
};

export default App;
