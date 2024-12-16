import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TitleHint } from '../../../components/TitileHint';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <TitleHint>Send me</TitleHint>
        <StyledForm>
          <Field placeholder={'name'} />
          <Field placeholder={'subject'} />
          <Field as={'textarea'} placeholder={'message'} />
          <Button type={'submit'}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  margin-bottom: 100px;
`;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.inputColor};
  padding: 7px 15px;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: ${theme.colors.primaryFont};
  border-radius: 10px;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;
