import styled from "styled-components";

function App() {
  return (
    <>
      <Headline>Marie-Carleen Koizumi</Headline>
      <SubHeadline>Portfolio & Personal Website</SubHeadline>
      <p>A work in progress...</p>
    </>
  );
}

export default App;

const Headline = styled.h1`
  font-family: var(--font-primary);
  font-weight: normal;
`;

const SubHeadline = styled.h2`
  font-weight: 300;
`;
