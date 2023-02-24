import styled from "@emotion/styled";

const Overlay = styled.div`
  width: var(--overlaysize);
  will-change: width;
  overflow: hidden;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #1a1a1a;
`;

export default Overlay;
