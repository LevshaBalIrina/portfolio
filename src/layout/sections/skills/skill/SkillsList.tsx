import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skills_Styles';

type IconItemsPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const SkillsList: React.FC<{
  iconItems: Array<IconItemsPropsType>;
}> = (props: { iconItems: Array<IconItemsPropsType> }) => {
  return (
    <S.StyleList>
      {props.iconItems.map((iconItem, index) => {
        return (
          <li key={index}>
            <Icon iconId={iconItem.iconId} viewBox={iconItem.viewBox} />
          </li>
        );
      })}
    </S.StyleList>
  );
};
