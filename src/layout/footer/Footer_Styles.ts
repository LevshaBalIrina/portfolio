import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";
import { font } from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding-bottom: 60px;

  @media ${theme.media.tablet} {
    ${FlexWrapper}:first-child {
      justify-content: center;
    }
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper}:last-child {
    }
  }
`;
const Link = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.44444;
  color: ${theme.colors.secondaryFont};
  white-space: nowrap;
  // text-align: center;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.projectLink};
  }
`;

const Copyright = styled.small`
  ${font({
    family: "'Poppins', sans-serif",
    color: 'theme.colors.secondaryFont',
    weight: 400,
    Fmax: 18,
    Fmin: 12,
  })}

  line-height: 1.44444;
  text-align: center;
`;

const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;

  @media ${theme.media.tablet} {
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #42446e;
    margin: 42px 0 45px;
  }
`;

export const S = {
    Footer,
    Link,
    Copyright,
    Contacts,
    Line
}