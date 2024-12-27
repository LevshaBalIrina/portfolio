import { SectionTitle } from '../../../components/SectionTitle';
import { TitleHint } from '../../../components/TitileHint';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import React from 'react';
import { S } from './Contacts_Styles';

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <TitleHint>Send me</TitleHint>
        <S.Form>
          <S.Field placeholder={'name'} />
          <S.Field placeholder={'subject'} />
          <S.Field as={'textarea'} placeholder={'message'} />
          <Button type={'submit'}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
