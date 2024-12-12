import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <li>
        <a href="">
          <Icon iconId="github" width="30" height="30" viewBox="0 0 30 30" />
        </a>
      </li>
      <li>
        <a href="">
          <Icon iconId="twitter" width="32" height="32" viewBox="0 0 32 32" />
        </a>
      </li>
      <li>
        <a href="">
          <Icon iconId="linkedin" width="30" height="30" viewBox="0 0 30 30" />
        </a>
      </li>
    </StyledSocialMedia>
  );
};

const StyledSocialMedia = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
`;
