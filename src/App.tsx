import useCssVariables from "./hooks/useCssVariables";
import HeroSection from "./sections/hero/HeroSection";

const App = () => {
  useCssVariables();

  return <HeroSection />;
};

export default App;
