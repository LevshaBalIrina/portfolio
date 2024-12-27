import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const StyleList = styled.ul`
  display: grid;
  grid-auto-rows: minmax(200px, auto);
  grid-template-columns: repeat(5, auto);
  gap: 10px;
  li {
    max-width: 120px;
    justify-self: center;
    align-self: center;
    //border: 1px solid red;
  }

  @media ${theme.media.tablet} {
    gap: 10px;
    grid-auto-rows: minmax(50px, auto);
    grid-template-columns: repeat(4, auto);
  }
`;

export const S = {
  StyleList,
};
