import { GitHub, Linkedin } from "react-feather";
import styled from "styled-components";

const socialMedias = [
  {
    component: <GitHub />,
    link: "https://github.com/macfrei",
    name: "My GitHub profile",
  },
  {
    component: <Linkedin />,
    link: "https://www.linkedin.com/in/marie-carleen-koizumi/",
    name: "My LinkedIn profile",
  },
];

export default function SocialMenu({ className, color }) {
  return (
    <IconList className={className}>
      {socialMedias.map(({ component, link, name }) => (
        <ListItem key={name} color={color}>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={name}
          >
            {component}
          </a>
        </ListItem>
      ))}
    </IconList>
  );
}

const IconList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 20;
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0;

  & a {
    color: ${({ color }) => (color ? color : "inherit")};
  }
`;
