import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 42px 0;

  
  // padding: 20px;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 999999; */
`;

const NavWrapper = styled.div`
  display: flex;
  column-gap: 50px;

  // для меню выравнивание.
  /* gap: 50px;
  flex-direction: column;
  align-items: center; */
`;

export const S = {
  Header,
  NavWrapper,
};
