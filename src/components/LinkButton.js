import styled from "styled-components";

export default function LinkButton({ href, children, ...rest }) {
  return (
    <Link {...rest} href={href}>
      {children}
    </Link>
  );
}

const Link = styled.a`
  padding: 12px;
  font-size: inherit;
  background-color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  border-radius: 8px;
  text-decoration: none;
  color: white;
`;
