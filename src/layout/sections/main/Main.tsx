import styled from 'styled-components';
import mainPhoto from '../../../assets/image/main-photo.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>
          <span>Hi 👋, My name is</span>
          <Name>Pavan MG</Name>
          <MainTitle> I build things for web</MainTitle>
        </div>
        <Photo src={mainPhoto} alt="main-photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #c285fb;
`;

const Photo = styled.img`
  width: 349px;
  height: 349px;
  object-fit: cover;
`;

const MainTitle = styled.h1``;
const Name = styled.h2``;
