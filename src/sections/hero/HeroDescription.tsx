import styled from "@emotion/styled";
import ChangingWord from "../../components/ChangingWord";
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

    & article {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);

      & h2 {
        color: #fff;
        font-size: 2.5rem;
        line-height: 1.1;
        margin: 0;
        width: min-content;
      }
      & p {
        color: #aaa;
        font-size: 1.1rem;
        margin: 0;
      }
    }
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
      <article>
        <h2>( ͡❛ ͜ʖ͡❛ ) ElTupac</h2>
        <ChangingWord
          words={["Developer", "Desarrollador", "Desenvolvedor", "开发人"]}
          duration={150}
          delay={1500}
        />
      </article>
    </div>
  </DescriptionWrapper>
);

export default HeroDescription;
