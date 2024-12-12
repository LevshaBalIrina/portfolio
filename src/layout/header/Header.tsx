import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <SocialMedia/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #199f9f;
  display: flex;
  justify-content: space-between;
`;
