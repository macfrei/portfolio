import styled from "styled-components";
import { Zap } from "react-feather";

const techStack = [
  "JavaScript (ES6+)",
  "React",
  "CSS",
  "HTML",
  "Git",
  "GitHub",
  "VSCode",
  "NodeJS",
  "Jest",
];

export default function TechStackList() {
  return (
    <Section>
      <SubHeadline>Technologies I love to use</SubHeadline>
      <TechStack role="list">
        {techStack.map((technology) => (
          <ListItem key={technology}>
            <Zap width="20" height="20" color="var(--primary-blue)" />
            {technology}
          </ListItem>
        ))}
      </TechStack>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  gap: 16px;
  padding: 24px 0;
`;

const SubHeadline = styled.h3`
  font-weight: 300;
  color: var(--secondary-silver);
`;

const TechStack = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 12px;

  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 6px;
  }
`;
