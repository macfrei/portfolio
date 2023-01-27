import styled from "styled-components";
import LinkButton from "./LinkButton";

export default function About() {
  return (
    <AboutStyled id="about">
      <h2>About me</h2>
      <p>
        Hi! Welcome to my portfolio / website. I created this space to introduce
        myself and summarize some of the projects I have worked on. My web
        development journey started four years ago when I signed up for an
        intensive “R” course at university. It lasted only a week, but I felt
        excited and wanted to know more about programming. I started to play
        around with HTML and CSS on my own. Seemingly creating something new out
        of nowhere captured my curiosity and I decided to attend a Web
        Development Bootcamp in Germany. For three months I was learning and
        writing code every day and immersed myself in this unfamiliar and
        exciting new world.
      </p>
      <p>
        After the bootcamp finished, I started as a Junior Coach and Web
        Developer at the same bootcamp. First as a working student and after I
        decided to pursue a career in coding, as a full-time employee. For the
        last two years I have worked with and taught modern web technologies
        such as CSS, HTML, JavaScript (ES6), React and NodeJS to over 100
        students. Through both working as a developer and a coach I have a good
        understanding of best practices, clean code and modern JavaScript in
        general.
      </p>
      <p>
        A personal choice to move across the globe to Japan required me to leave
        my job and since then I have shifted my focus to learning Japanese and
        building up my portfolio. Currently, I am looking for a new challenge as
        a Frontend Developer.
      </p>
      <p>Please reach out - I would love to connect with you!</p>
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
