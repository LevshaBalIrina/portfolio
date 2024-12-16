import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2069;
  letter-spacing: -0.02em;
  color: ${theme.colors.primaryFont};
  text-shadow: 1px 1px 2px #0f0101e5;
  height: 25px;
  width: 170px;
  border-radius: 5px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.3);
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);

  &:hover {
    transform: scale(1.1);
    color: ${theme.colors.projectLink};
    border: 2px solid ${theme.colors.borderColor};
  }
`;
