import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  techStack: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <a href="#">
        <Image src={props.src} alt="" />
      </a>
      <TextWrapper>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Stack>
          Tech stack : <span>{props.techStack}</span>
        </Stack>

        <LinkWrapper>
          <Link href="#">
            <Icon
              iconId="link-chain"
              height="20"
              width="20"
              viewBox="0 0 20 20"
            />
            <span> Live Preview </span>
          </Link>
          <Link href="#">
            <Icon
              iconId="github-link"
              height="20"
              width="20"
              viewBox="0 0 20 20"
            />
            <span> View Code </span>
          </Link>
        </LinkWrapper>
      </TextWrapper>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background-color: ${theme.colors.secondaryBg};
  max-width: 375px;
  width: 100%;
  height: 567px;
  margin-bottom: 65px;

  &:hover {
    transform: scale(1.05);
  }
`;


const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const TextWrapper = styled.div`
  padding: 27px 30px 25px 30px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 0.92857;
  color: ${theme.colors.primaryFont};
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.44444;
  color: ${theme.colors.primaryFont};
  margin: 17px 0 12px;
`;

const Stack = styled.span`
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 20px;
  span {
    font-weight: 300;
    font-size: 14px;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;

  text-decoration: none;
  text-decoration-skip-ink: none;
  color: ${theme.colors.projectLink};

  span {
    display: block;
    margin-left: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 50px;
`;
