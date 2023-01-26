import styled from "styled-components";
import LinkButton from "./LinkButton";

export default function About() {
  return (
    <AboutStyled id="about">
      <h2>About me</h2>
      <p>
        Hi! Welcome to my portfolio / website. I created this space to introduce
        myself and summarize some previous projects I have worked on. My web
        development journey started four years ago when I signed up for an
        intensive “R” course at university. It lasted only a week, but I felt
        excited and wanted to know more about programming. I started to play
        around using HTML and CSS on my own. Seemingly creating something new
        out of nowhere captured my curiosity and I decided to visit a Web
        Development Bootcamp in Germany. For three months I would learn and
        write code every day and immerse myself in this unfamiliar and exciting
        new world.
      </p>
      <p>
        After the bootcamp finished, I started as a junior coach and web
        developer at the same bootcamp. First as a working student and after I
        decided to ditch my studies, as a full-time employee. For a bit over two
        years I have worked with and taught modern web technologies such as CSS,
        HTML, JavaScript (ES6), React and NodeJS to over 100 students. Through
        both working as a developer and a coach I have a good understanding of
        best practices, clean code and modern JavaScript in general.
      </p>
      <p>
        A personal choice to move across the globe to Japan made me leave my
        job. Since then I have shifted my focus to learning Japanese and working
        on some side projects. Currently, I am looking for a new challenge as a
        frontend developer.
      </p>
      <p>I would love to connect with you!</p>
      <LinkButton href="mailto:mariecarleen.koizumi@gmail.com">
        Send me an email!
      </LinkButton>
    </AboutStyled>
  );
}

const AboutStyled = styled.section`
  display: grid;
  place-content: center;
  gap: 16px;
  padding: 12px;

  height: 100vh;

  @media (max-width: 767px) {
    scroll-margin-top: 100px;
    place-content: start;
  }
`;
