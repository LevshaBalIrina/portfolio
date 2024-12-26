import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

export const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <li>
        <SocialLink href="">
          <Icon iconId="github" width="30" height="30" viewBox="0 0 30 30" />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="">
          <Icon iconId="twitter" width="30" height="30" viewBox="0 0 32 32" />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="">
          <Icon iconId="linkedin" width="30" height="30" viewBox="0 0 30 30" />
        </SocialLink>
      </li>
    </StyledSocialMedia>
  );
};

const StyledSocialMedia = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${theme.colors.secondaryFont};
  &:hover {
    color: ${theme.colors.projectLink};
    transform: scale(1.2);
  }
`;
