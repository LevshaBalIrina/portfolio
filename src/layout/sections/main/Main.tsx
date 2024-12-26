import styled from 'styled-components';
import mainPhoto from '../../../assets/image/main-photo.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import abstract from '../../../assets/image/Abstract.svg';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          align={'center'}
          justify={'space-between'}
          wrap={'wrap-reverse'}
        >
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
  padding: 200px 0 300px;

  @media ${theme.media.desktop_861} {
    padding: 50px 0 100px;

    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
      row-gap: 100px;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  span {
    ${font({ color: 'theme.colors.mainText', weight: 700, Fmax: 58, Fmin: 30 })}

    letter-spacing: -0.02em;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 630px;
  width: 50%;
  

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

    @media ${theme.media.tablet} {
      width: 580px;
      height: 580px;
      transform: translateX(-1px);
    }

    @media ${theme.media.mobile} {
      width: 380px;
      height: 380px;
      transform: translateX(-2px);
    }
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  z-index: -1;

  @media ${theme.media.mobile} {
    width: 259px;
    height: 259px;
  }
`;

const Photo = styled.img`
  width: 349px;
  height: 349px;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;

  @media ${theme.media.mobile} {
    width: 244px;
    height: 244px;
  }
`;

const MainTitle = styled.h1`
  ${font({ color: 'theme.colors.mainText', weight: 700, Fmax: 58, Fmin: 30 })}
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

const Name = styled.h2`
  ${font({
    color: 'theme.colors.mainText',
    weight: 700,
    Fmax: 58,
    Fmin: 30,
  })}

  letter-spacing: -0.02em;
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
