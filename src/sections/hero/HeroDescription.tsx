import styled from "@emotion/styled";
import Word from "../../components/Word";
import words from "../../utils/constant/words";

const DescriptionWrapper = styled.section`
  background-color: #14213d;
  position: relative;

  @media (max-width: 768px) {
    position: fixed;
    max-height: 30vh;
    overflow: hidden;
    top: 0;
    z-index: 1;
  }

  & .description-inner {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
    width: 100%;
  }
`;

const WordsBackground = styled.div`
  width: 150%;
  height: 100vh;
  transition: transform 0.2s linear;
  transform: translate(-4%, calc(var(--words-translate) * -1));
`;

const HeroDescription: React.FC = () => (
  <DescriptionWrapper>
    <div className="description-inner">
      <WordsBackground>
        {words.map((setOfWords) =>
          setOfWords.map((word) => <Word key={word}>{word}</Word>)
        )}
      </WordsBackground>
    </div>
  </DescriptionWrapper>
);

export default HeroDescription;
