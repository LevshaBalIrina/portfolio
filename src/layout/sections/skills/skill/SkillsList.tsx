import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';

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
            <Icon
              iconId={iconItem.iconId}
              viewBox={iconItem.viewBox}
            />
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
  li {
    width: 120px;
    min-height: 120px;
    justify-self: center;
    align-self: center;
  }
`;
