import styled from 'styled-components';
import mainPhoto from '../../../assets/image/main-photo.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import abstract from '../../../assets/image/Abstract.svg';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
          <TextWrapper>
            <span>Hi 👋, </span>
            <span>My name is</span>
            <Name>Pavan MG</Name>
            <MainTitle> I build things for web</MainTitle>
          </TextWrapper>
          <PhotoWrapper>
            <ImageBorder />
            <Photo src={mainPhoto} alt="main-photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  margin: 200px 0 300px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;
    color: #d9d9d9;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 630px;
    height: 630px;
    background-image: url(${abstract});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    transform: translateX(20px);
    z-index: -2;
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  z-index: -1;
`;

const Photo = styled.img`
  width: 349px;
  height: 349px;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 58px;
  letter-spacing: -0.02em;
  color: #d9d9d9;
`;

const Name = styled.h2`
  font-weight: 700;
  font-size: 58px;
  letter-spacing: -0.02em;
  color: #d9d9d9;
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
