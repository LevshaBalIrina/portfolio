import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

export const TitleHint = styled.span`

${font({ weight: 400, Fmax: 32, Fmin: 22 })}
  display: block;
  text-align: center;
  //line-height: 0.8125;
  text-align: center;
  color: ${theme.colors.secondaryFont};
  margin-bottom: 100px;

  @media ${theme.media.tablet} {
    margin-bottom: 50px;
  }
`;
