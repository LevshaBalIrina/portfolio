import mainPhoto from '../../../assets/image/main-photo.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import React from 'react';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper
          align={'center'}
          justify={'space-between'}
          wrap={'wrap-reverse'}
          gap={"20px"}
        >
          <S.TextWrapper>
            <span>Hi 👋, </span>
            <span>My name is</span>
            <S.Name>Pavan MG</S.Name>
            <S.MainTitle> I build things for web</S.MainTitle>
          </S.TextWrapper>
          <S.PhotoWrapper>
            <S.ImageBorder />
            <S.Photo src={mainPhoto} alt="main-photo" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
