import styled from 'styled-components';

export default function Hero() {
  return (
    <HeroStyled id="hero">
      <p>Hello, my name is</p>
      <Headline>Marie-Carleen Koizumi.</Headline>
      <SubHeadline>I am a passionate web developer.</SubHeadline>
      <p>
        I love learning and using new technologies to create something new on
        the web. Currently, I focus to learn all about web accessibility and
        frontend testing.
      </p>
    </HeroStyled>
  );
}

const HeroStyled = styled.section`
  display: grid;
  align-content: center;
  gap: 16px;
  padding: 12px;

  min-height: 100vh;
  height: 100vh;
`;

const Headline = styled.h1`
  font-family: var(--font-primary);
  font-size: 1.7em;
  font-weight: normal;
  color: var(--primary-blue);
`;

const SubHeadline = styled.h2`
  color: var(--secondary-silver);
`;
