import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const characterAnimation = keyframes`
    0% {
        content: "█";
    }
    50% {
        content: " ";
    }
    100% {
        content: "█";
    }
`;

const characterIdle = keyframes`
    0% {
        content: "▄";
    }
    50% {
        content: " ";
    }
    100% {
        content: "▄";
    }
`;

const WordContainer = styled.p`
  &::after {
    content: " ";
    animation: ${characterAnimation} infinite 0.5s;
  }

  &.idle-characters::after {
    animation: ${characterIdle} infinite 0.5s;
  }
`;

const ChangingWord: React.FC<{
  words: string[];
  delay?: number;
  duration?: number;
}> = ({ words, delay = 2000, duration = 500 }) => {
  const [actualWord, setActualWord] = useState<number>(0);
  const [wordToRender, setWordToRender] = useState<string | undefined>();

  const nextWord = () => {
    setActualWord((actual) => (actual + 1 >= words.length ? 0 : actual + 1));
  };

  const writeCharacter: (word: string, a?: number) => void = (
    word,
    position = 0
  ) => {
    const charactersToShow = word.substring(0, position);
    setWordToRender(charactersToShow);
    if (position < word.length)
      setTimeout(() => {
        writeCharacter(word, position + 1);
      }, duration);
    else nextWord();
  };

  useEffect(() => {
    if (!wordToRender && actualWord === 0) writeCharacter(words[actualWord]);
    else
      setTimeout(() => {
        writeCharacter(words[actualWord]);
      }, delay);
  }, [actualWord]);

  return (
    <WordContainer
      className={
        words[actualWord >= 1 ? actualWord - 1 : words.length - 1].length ===
        (wordToRender || "").length
          ? "idle-characters"
          : ""
      }
    >
      {wordToRender || <>&nbsp;</>}
    </WordContainer>
  );
};

export default ChangingWord;
