import styled from "styled-components";
import Logo from "../assets/logo.png";
import BurgerMenu from "./BurgerMenu";

const links = [
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Experience",
    id: "#experience",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Contact",
    id: "#contact",
  },
];

export default function Header() {
  return (
    <HeaderStyled>
      <LogoStyled href="#hero">
        <img src={Logo} alt="MCK" />
      </LogoStyled>
      <BurgerMenu links={links} />
      <Nav>
        {links.map(({ name, id }) => (
          <Link key={id} href={id}>
            {name}
          </Link>
        ))}
      </Nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  position: fixed;
  top: 0;

  width: 100%;
  height: 80px;
  padding: 12px 25px;
`;

const LogoStyled = styled.a`
  width: 40px;
  height: 40px;

  & img {
    height: 100%;
  }
`;

const Nav = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--primary-blue);
  padding: 12px;

  &:hover {
    color: var(--secondary-silver);
  }
`;
