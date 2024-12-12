import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Menu } from '../../components/menu/Menu';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper align={'center'} wrap={'wrap'}>
        <Logo />
        <StyledContacts>
          <Link href="#">+91 12345 09876</Link>
          <Link href="#">info@example.com</Link>
          <SocialMedia />
        </StyledContacts>
        <Menu />
        <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #d29cff;
  min-height: 20vh;
`;
const Link = styled.a``;
const Copyright = styled.small``;
const StyledContacts = styled.div`
  display: flex;
`;
