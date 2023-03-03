import styled from 'styled-components';
import { GitHub, Linkedin } from 'react-feather';
import ProfileImage from './ProfileImage';

export default function Hero() {
  return (
    <HeroStyled id="hero">
      <TextGroup>
        <p>Hello, my name is</p>
        <Headline>Marie-Carleen Koizumi.</Headline>
        <SubHeadline>I am a passionate web developer.</SubHeadline>
        <p>
          I love learning and using new technologies to create something new on
          the web. Currently, I focus to learn all about web accessibility and
          frontend testing.
        </p>
        <p>
          You can find me on{' '}
          <Link
            href="https://github.com/macfrei"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHub size="16" /> GitHub
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.linkedin.com/in/marie-carleen-koizumi/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin size="16" /> LinkedIn
          </Link>
          !
        </p>
      </TextGroup>
      <ProfileImageStyled />
    </HeroStyled>
  );
}

const HeroStyled = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  align-content: center;
  gap: 16px;
  padding: 12px;

  min-height: 100vh;
  height: 100vh;

  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImageStyled = styled(ProfileImage)`
  align-self: center;
  border-radius: 8px;
`;

const TextGroup = styled.div`
  display: grid;
  align-content: center;
  gap: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--secondary-silver);
  border-bottom: 1px solid;

  &:hover {
    color: var(--primary-blue);
  }
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
