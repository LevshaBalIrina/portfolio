import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { DesktopMenu } from './desktopMenu/DesktopMenu';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';
import { MobileMenu } from './mobileMenu/MobileMenu';

export const menuItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <Logo iconId="logo-gradient" />
          <NavWrapper>
            {/* <DesktopMenu menuItems={menuItems} /> */}
            {/* <MobileMenu menuItems={menuItems} /> */}
          </NavWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 42px 0;
`;

const NavWrapper = styled.div`
  //display: flex;
  //column-gap: 50px;

  // для меню выравнивание.
  /* gap: 50px;
  flex-direction: column;
  align-items: center; */
`;
