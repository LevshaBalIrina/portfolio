import { Logo } from '../../components/logo/Logo';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import React from 'react';
import { S } from './Footer_Styles';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper
          justify={'space-between'}
          align={'center'}
          wrap={'wrap'}
          gap={'30px'}
        >
          <Logo iconId="logo" />
          <S.Contacts>
            <S.Link href="tel:+91 12345 09876">+91 12345 09876</S.Link>
            <S.Link href="mailto:info@example.com">info@example.com</S.Link>
            <SocialMedia />
          </S.Contacts>
        </FlexWrapper>
        <S.Line></S.Line>
        <FlexWrapper align={'center'} wrap={'wrap'} justify={'center'}>
          <S.Copyright>
            Designed and built by <span>Pavan MG</span> with <span>Love</span> &{' '}
            <span>Coffee</span>
          </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
