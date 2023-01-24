import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  place-content: center;

  @media (min-width: 1080px) {
    padding: 0 150px;
  }

  @media (max-width: 1079px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;
