import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  techStack: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Stack>{props.techStack}</Stack>
      <div>
        <Link href="#">
          <Icon
            iconId="link-chain"
            height="20"
            width="20"
            viewBox="0 0 20 20"
          />
          Live Preview
        </Link>
        <Link href="#">
          <Icon
            iconId="github-link"
            height="20"
            width="20"
            viewBox="0 0 20 20"
          />
          View Code
        </Link>
      </div>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #53f697;
  max-width: 375px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Link = styled.a``;

const Title = styled.h3``;

const Text = styled.p``;

const Stack = styled.span``;
