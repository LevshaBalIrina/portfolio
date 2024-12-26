import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { SocialMedia } from '../../../components/socialMedia/SocialMedia';

export const DesktopMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledDesktopMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
      {/* <SocialMedia /> */}
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
  display: flex;
  column-gap: 50px;
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
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
