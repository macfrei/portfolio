import styled from 'styled-components';
import profileImg from '../assets/me.jpeg';

export default function ProfileImage({ ...rest }) {
  return <ImageStyled src={profileImg} alt="" {...rest} />;
}

const ImageStyled = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  border: 1px solid var(--primary-blue);
  border-radius: 8px;
`;
