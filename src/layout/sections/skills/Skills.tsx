import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SkillsList } from './skill/SkillsList';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { TitleHint } from '../../../components/TitileHint';

const iconItems = [
  {
    iconId: 'git-icon',
    width: '105',
    height: '105',
    viewBox: '0 0 105 105',
  },
  {
    iconId: 'html',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'css',
    width: '120',
    height: '119',
    viewBox: '0 0 120 119',
  },
  {
    iconId: 'javaScript',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'react',
    width: '113',
    height: '101',
    viewBox: '0 0 113 101',
  },
  {
    iconId: 'bootstrap',
    width: '88',
    height: '87',
    viewBox: '0 0 88 87',
  },
  {
    iconId: 'vscode',
    width: '112',
    height: '112',
    viewBox: '0 0 112 112',
  },
  {
    iconId: 'githubfill',
    width: '88',
    heigh: '88',
    viewBox: '0 0 88 88',
  },
  {
    iconId: 'redux',
    width: '105',
    height: '100',
    viewBox: '0 0 105 100',
  },
  {
    iconId: 'typeScript',
    width: '128',
    height: '128',
    viewBox: '0 0 128 128',
  },
];

export const Skills = () => {
  return (
    <StyledSkillsSection>
      <FlexWrapper direction={'column'} align={'center'} wrap={'wrap'}>
        <SectionTitle>Skills</SectionTitle>
        <TitleHint> Technologies I’ve been working with recently</TitleHint>
        <SkillsList iconItems={iconItems} />
      </FlexWrapper>
    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.section`
  min-height: 100vh;
  background-color: bisque;
`;
