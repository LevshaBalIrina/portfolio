import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TitleHint } from '../../../components/TitileHint';
import { Button } from '../../../components/Button';

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <TitleHint>Send me</TitleHint>
      <StyledForm>
        <Field placeholder={'name'} />
        <Field placeholder={'subject'} />
        <Field as={'textarea'} placeholder={'message'} />
        <Button type={"submit"}>Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 100vh;
  background-color: #f9c3c3;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const Field = styled.input``;
