import styled from 'styled-components';
import { GitHub, Home } from 'react-feather';

const projects = [
  {
    name: 'Sorting Hat',
    description:
      'This project is my adaption of the sorting hat from Harry Potter. The main feature is a multi step form which takes the user through a series of question. I tried to focus on accessibility and keyboard usability.',
    url: 'https://sorting-hat-lene.vercel.app/',
    githubUrl: 'https://github.com/macfrei/sorting-hat',
    status: 'finished',
  },
  {
    name: 'Japanese Learning App',
    description:
      'Learning Japanese can be quite daunting. With this project I want to create a simple vocabulary app to practise Hiragana, Katakana and Kanji. The main technical focus of this project is to learn TypeScript.',
    url: 'https://japanese-learning-app.vercel.app/',
    githubUrl: 'https://github.com/macfrei/japanese-learning-app',
    status: 'unfinished',
  },
];

export default function Projects() {
  return (
    <ProjectsStyled id="projects">
      <Headline>Projects</Headline>
      <IFrameBox>
        {projects.map(project => (
          <ProjectGroup key={project.name}>
            <SubHeadline>{project.name}</SubHeadline>
            <Status isFinished={project.status === 'finished'}>
              {project.status === 'finished'
                ? `(more or less) ${project.status}`
                : `${project.status} - working on it!`}
            </Status>
            <IFrame title={project.name} src={project.url} height="667" />
            <p>{project.description}</p>
            <LinkGroup>
              <p>For more info, checkout the following links:</p>
              <Link href={project.url}>
                <Home size={16} /> Project URL
              </Link>
              <Link href={project.githubUrl}>
                <GitHub size={16} /> GitHub URL
              </Link>
            </LinkGroup>
          </ProjectGroup>
        ))}
      </IFrameBox>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.section`
  display: grid;
  gap: 16px;
  align-content: center;
  padding: 12px;
  min-height: 100vh;
  scroll-margin-top: 100px;

  @media (max-width: 767px) {
    place-content: start;
    margin-bottom: 80px;
  }
`;

const IFrameBox = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 36px;
`;

const Headline = styled.h2`
  color: var(--primary-blue);
  font-family: var(--font-primary);
`;

const SubHeadline = styled.h3`
  color: var(--secondary-silver);
`;

const ProjectGroup = styled.div`
  display: grid;
  gap: 12px;
  align-content: start;
  max-width: 300px;
`;

const IFrame = styled.iframe`
  border: 2px solid black;
  border-radius: 8px;
  padding: 8px;
`;

const LinkGroup = styled.div`
  display: grid;
  gap: 12px;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--primary-blue);
`;

const Status = styled.small`
  font-size: 90%;
  font-style: italic;
  color: ${props => (props.isFinished ? 'green' : 'red')};

  &::first-letter {
    text-transform: capitalize;
  }
`;
