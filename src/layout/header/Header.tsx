import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

export const menuItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <Logo iconId="logo-gradient" />
          <NavWrapper>
            <Menu menuItems={menuItems} />
            <SocialMedia />
          </NavWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 42px 0;
  /* position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 99999; */
`;

const NavWrapper = styled.div`
  display: flex;
  column-gap: 50px;
`;
