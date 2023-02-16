import styled from "@emotion/styled";

const PhraseWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100%;
  overflow: hidden;

  & h1 {
    color: #d4d4cf;
    white-space: nowrap;
    font-family: Consolas, "Courier New", monospace;

    & .new {
      color: #519cd6;
    }
    & .promise {
      color: #42bbac;
    }
    & .parenthesis {
      color: #f1ff0d;
    }
  }
`;

const AccountPhrase: React.FC = () => (
  <PhraseWrapper>
    <h1>
      <span className="new">new</span> <span className="promise">Promise</span>
      <span className="parenthesis">()</span>;
    </h1>
  </PhraseWrapper>
);

export default AccountPhrase;
