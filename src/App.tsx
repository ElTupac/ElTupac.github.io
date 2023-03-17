import Teapot from "./components/Teapot";
import useCssVariables from "./hooks/useCssVariables";
import HeroSection from "./sections/hero/HeroSection";

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
