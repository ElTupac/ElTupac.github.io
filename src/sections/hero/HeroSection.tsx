import styled from "@emotion/styled";
import AccountPhrase from "../../components/AccountPhrase";
import Overlay from "../../components/Overlay";
import HeroDescription from "./HeroDescription";
import VideosGrid from "./VideosGrid";

const HeroWrapper = styled.div`
  position: relative;

  & .hero-inner {
    display: grid;
    position: relative;
    @media (min-width: 768px) {
      grid-template-columns: 200px auto;
    }
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <div className="hero-inner">
        <HeroDescription />
        <VideosGrid />
      </div>
      <Overlay>
        <AccountPhrase />
      </Overlay>
    </HeroWrapper>
  );
};

export default HeroSection;
