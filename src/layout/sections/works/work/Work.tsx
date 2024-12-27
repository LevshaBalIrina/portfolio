import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import React from 'react';
import { S } from './../Works_Styles';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  techStack: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.Image src={props.src} alt="" />
      <S.TextWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <S.Stack>
          Tech stack : <span>{props.techStack}</span>
        </S.Stack>

        <FlexWrapper gap={'50px'}>
          <S.Link href="#">
            <Icon
              iconId="link-chain"
              height="20"
              width="20"
              viewBox="0 0 20 20"
            />
            Live Preview
          </S.Link>
          <S.Link href="#">
            <Icon
              iconId="github-link"
              height="20"
              width="20"
              viewBox="0 0 20 20"
            />
            View Code
          </S.Link>
        </FlexWrapper>
      </S.TextWrapper>
    </S.Work>
  );
};
