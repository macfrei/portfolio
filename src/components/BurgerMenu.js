import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FocusLock from "react-focus-lock";

export default function BurgerMenu({ links }) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen ? (
        <BurgerMenuButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          Menu
        </BurgerMenuButton>
      ) : (
        <FocusLock>
          <Section ref={ref}>
            <BurgerMenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Close menu"
            >
              Close
            </BurgerMenuButton>
            <BurgerMenuStyled isOpen={isOpen}>
              {links.map(({ name, id }) => (
                <Link key={id} href={id} onClick={() => setIsOpen(!isOpen)}>
                  {name}
                </Link>
              ))}
            </BurgerMenuStyled>
          </Section>
        </FocusLock>
      )}
    </>
  );
}

const Section = styled.section`
  @media (min-width: 767px) {
    display: none;
  }
`;

const BurgerMenuStyled = styled.nav`
  display: grid;
  place-content: center;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  padding: 50px 10px;
  width: min(75vw, 300px);
  height: 100vh;

  background-color: var(--primary-blue);
  box-shadow: var(--primary-blue-shadow);

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0vw)" : "translateX(100vw)"};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  transition: var(--transition);
`;

const BurgerMenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ isOpen }) => (isOpen ? "white" : "var(--primary-blue)")};
  font-family: var(--font-primary);
  text-decoration: underline;

  padding: 15px;
  position: relative;
  z-index: 20;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  padding: 12px;

  &:hover {
    color: var(--secondary-silver);
  }
`;
