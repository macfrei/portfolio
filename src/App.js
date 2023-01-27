import styled from "styled-components";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialMenu from "./components/SocialMenu";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
      </Main>
      <SocialMenuStyled color="var(--primary-blue)" />
    </>
  );
}

export default App;

const SocialMenuStyled = styled(SocialMenu)`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 767px) {
    display: grid;
    place-content: end;
    gap: 12px;

    padding: 12px 37px;

    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

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

  @media (max-width: 390px) {
    padding: 0 25px;
  }
`;
