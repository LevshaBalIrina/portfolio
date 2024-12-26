import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { DesktopMenu } from '../header/desktopMenu/DesktopMenu';
import { FlexWrapper } from '../../components/FlexWrapper';
import { menuItems } from '../header/Header';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { font } from '../../styles/Common';
import { MobileMenu } from '../header/mobileMenu/MobileMenu';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper
          justify={'space-between'}
          align={'center'}
          wrap={'wrap'}
          gap={'30px'}
        >
          <Logo iconId="logo" />
          <StyledContacts>
            <Link href="tel:+91 12345 09876">+91 12345 09876</Link>
            <Link href="mailto:info@example.com">info@example.com</Link>
            <SocialMedia />
          </StyledContacts>
        </FlexWrapper>
        <Line></Line>
        <FlexWrapper align={'center'} wrap={'wrap'} justify={'center'}>
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

  @media ${theme.media.tablet} {
    ${FlexWrapper}:first-child {
      justify-content: center;
    }
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper}:last-child {
    }
  }
`;
const Link = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.44444;
  color: ${theme.colors.secondaryFont};
  white-space: nowrap;
  // text-align: center;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.projectLink};
  }
`;

const Copyright = styled.small`
  ${font({
    family: "'Poppins', sans-serif",
    color: 'theme.colors.secondaryFont',
    weight: 400,
    Fmax: 18,
    Fmin: 12,
  })}

  line-height: 1.44444;
  text-align: center;
`;

const StyledContacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;

  @media ${theme.media.tablet} {
    justify-content: center;
    align-items: center;
  }
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
