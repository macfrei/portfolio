import React from 'react';
import styled from 'styled-components';
import { Zap } from 'react-feather';
import LinkButton from './LinkButton';

const workExperience = [
  {
    name: 'Frontend Developer & Web Development Coach',
    company: 'neuefische GmbH',
    period: 'June 2020 - September 2022',
    responsibilities: [
      'Developing on internal projects like the company homepage and talent app as Frontend Developer with React, NextJs and TypeScript Basics.',
      'Teaching modern technologies from HTML and CSS to React and NodeJS to bootcamp students.',
      'Actively improving and developing the course curriculum, exercises and weekend projects for students.',
      'Mentoring students throughout the bootcamp; performing weekly 1on1s with students, code reviews on GitHub and reviewing assignments.',
      'Onboarding and mentoring Junior Coaches through 1on1s, session reviews and feedback.',
    ],
  },
  {
    name: 'Working Student Web Development Coach',
    company: 'neuefische GmbH',
    period: 'October 2019 - June 2020',
    responsibilities: [
      'Assisting in the organisation around web development bootcamps.',
      'Preparing and holding a workshop about CSS Layout with Flexbox and Grid for the 2019 Social Developers Club conference in Hamburg.',
    ],
  },
];

export default function Experience() {
  return (
    <ExperienceStyled id="experience">
      <Headline>Work Experience</Headline>
      <List role="list">
        {workExperience.map(({ name, company, period, responsibilities }) => (
          <ListItem key={name}>
            <SubHeadline>
              <Zap width="24" height="24" color="var(--primary-blue)" />
              {name}
            </SubHeadline>
            <ExperienceDetails>
              <span>{company}</span>
              <span>{period}</span>
              <Responsibilities>
                {responsibilities.map(responsibility => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </Responsibilities>
            </ExperienceDetails>
          </ListItem>
        ))}
      </List>
      <LinkButton
        href="/marie-carleen_koizumi_CV.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get the full CV
      </LinkButton>
    </ExperienceStyled>
  );
}

const ExperienceStyled = styled.section`
  display: grid;
  align-content: center;
  gap: 16px;
  padding: 12px;
  min-height: 100vh;
  scroll-margin-top: 100px;

  @media (max-width: 769px) {
    place-content: start;
    margin-bottom: 80px;
  }
`;
const ExperienceDetails = styled.div`
  display: grid;
  gap: 12px;
  border-left: 1px solid var(--primary-blue);
  padding-left: 16px;
`;

const Headline = styled.h2`
  color: var(--primary-blue);
  font-family: var(--font-primary);
`;

const SubHeadline = styled.h3`
  color: var(--secondary-silver);
  position: relative;
  padding-left: 16px;

  & svg {
    fill: white;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

const List = styled.ol`
  padding: 0;
  display: grid;
  gap: 24px;
`;

const Responsibilities = styled.ul`
  display: grid;
  gap: 12px;
`;
const ListItem = styled.li`
  display: grid;
  gap: 12px;
  list-style: none;
`;
