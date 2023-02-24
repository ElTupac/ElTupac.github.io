import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

const upAndDown = keyframes`
    0% {
        transform: translate(-50%, 50%);
    }
    30% {
        transform: translate(-50%, -50%);
    }
    100% {
        transform: translate(-50%, 50%);
    }
`;

const ScrollDownContainer = styled.div`
  opacity: 0;
  transition: opacity 0.5s linear;
  transition-delay: 2s;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${upAndDown} 2s infinite;
  & svg {
    width: 3rem;
    height: 3rem;
    color: #aaa;
  }

  &.show {
    opacity: 1;
  }
`;

const ScrollDownSignal: React.FC = () => {
  return (
    <ScrollDownContainer className="show">
      <ChevronDoubleUpIcon />
    </ScrollDownContainer>
  );
};

export default ScrollDownSignal;
