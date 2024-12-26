import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { theme } from '../../../../styles/Theme';

type IconItemsPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const SkillsList = (props: { iconItems: Array<IconItemsPropsType> }) => {
  return (
    <StyleList>
      {props.iconItems.map((iconItem, index) => {
        return (
          <li key={index}>
            <Icon iconId={iconItem.iconId} viewBox={iconItem.viewBox} />
          </li>
        );
      })}
    </StyleList>
  );
};

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
