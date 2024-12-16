import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Menu } from '../../components/menu/Menu';
import { FlexWrapper } from '../../components/FlexWrapper';
import { menuItems } from '../header/Header';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <Logo iconId="logo" />
          <StyledContacts>
            <Link href="tel:+91 12345 09876">+91 12345 09876</Link>
            <Link href="mailto:info@example.com">info@example.com</Link>
            <SocialMedia />
          </StyledContacts>
        </FlexWrapper>
        <Line></Line>
        <FlexWrapper align={'center'} wrap={'wrap'} justify={'space-between'}>
          <Menu menuItems={menuItems} />
          <Copyright>
            Designed and built by <span>Pavan MG</span> with <span>Love</span> &{' '}
            <span>Coffee</span>
          </Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding-bottom: 60px;
`;
const Link = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.44444;
  color: ${theme.colors.secondaryFont};

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.projectLink};
  }
`;

const Copyright = styled.small`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.44444;
  text-align: center;
  color: ${theme.colors.secondaryFont};
  span {
    &:nth-child(1) {
      background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:nth-child(2) {
      background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:nth-child(3) {
      background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const StyledContacts = styled.div`
  display: flex;
  a + a {
    margin-left: 33px;
  }
  gap: 48px;
`;

const Line = styled.div`
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #42446e;
    margin: 42px 0 45px;
  }
`;
