import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
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
