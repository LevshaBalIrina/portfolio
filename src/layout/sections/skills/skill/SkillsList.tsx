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
              width={iconItem.width}
              height={iconItem.height}
              viewBox={iconItem.viewBox}
            />
          </li>
        );
      })}
    </StyleList>
  );
};

const StyleList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  li {
    flex-basis: 20%;
    width: 120px;
    height: 120px;
  }
  flex-wrap: wrap;
`;
