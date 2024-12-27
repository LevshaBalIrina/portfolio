import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Work = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 375px;

  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background-color: ${theme.colors.secondaryBg};
  //max-width: 375px;
  width: 100%;
  //min-height: 567px;
  height: 100%;
  ////margin-bottom: 65px;
  flex-grow: 1;

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
  gap: 10px;

  text-decoration: none;
  text-decoration-skip-ink: none;
  color: ${theme.colors.projectLink};

  &:hover {
    text-decoration: underline;
  }
`;


export const S = {
 Work,
 Image,
 TextWrapper,
 Title,
 Text,
 Stack,
 Link
}