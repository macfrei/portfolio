import styled from "styled-components";
import LinkButton from "./LinkButton";

export default function Hero() {
  return (
    <HeroStyled>
      <p>Hello, my name is</p>
      <Headline>Marie-Carleen Koizumi.</Headline>
      <SubHeadline>I am a passionate web developer.</SubHeadline>
      <p>
        I love learning and using new technologies to create something new on
        the web. Currently, I focus to learn all about web accessibility and
        frontend testing.
      </p>
      <LinkButton
        aria-label="Send me an email"
        href="mailto:mariecarleen.koizumi@gmail.com"
      >
        Send me an email!
      </LinkButton>
    </HeroStyled>
  );
}

const HeroStyled = styled.section`
  display: grid;
  place-content: center;
  gap: 16px;
  padding: 12px;

  min-height: 100vh;
  height: 100vh;

  & a {
    justify-self: start;
  }
`;

const Headline = styled.h1`
  font-family: var(--font-primary);
  font-size: 1.7em;
  font-weight: normal;
  color: var(--primary-blue);
`;

const SubHeadline = styled.h2`
  font-weight: 300;
  color: var(--secondary-silver);
`;
