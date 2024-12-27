import { Logo } from '../../components/logo/Logo';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import React from 'react';
import { S } from './Header_Styles';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';

export const menuItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 881;

  React.useEffect(() => {
    const handleWindowResixe = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResixe);
    return () => window.removeEventListener('resize', handleWindowResixe);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <Logo iconId="logo-gradient" />
          <S.NavWrapper>
            {width < breakpoint ? (
              <MobileMenu menuItems={menuItems} />
            ) : (
              <>
                <DesktopMenu menuItems={menuItems} />
                <SocialMedia />
              </>
            )}
          </S.NavWrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
