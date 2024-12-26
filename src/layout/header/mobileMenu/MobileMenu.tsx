import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { SocialMedia } from '../../../components/socialMedia/SocialMedia';

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={false}>
        <MenuList>
          {props.menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href="">{item}</Link>
              </ListItem>
            );
          })}
        </MenuList>
        <SocialMedia />
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.secondaryBg};
  display: none;
  z-index: 9999;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 60px;
    `}
`;

const ListItem = styled.li``;

const Link = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
  //line-height: 1.3;
  text-align: center;
  color: ${theme.colors.secondaryFont};
  display: inline-block;

  &:hover {
    transform: scale(1.1);
    color: ${theme.colors.projectLink};
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.primaryFont};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;
