import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SkillsList } from './skill/SkillsList';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { TitleHint } from '../../../components/TitileHint';
import { Container } from '../../../components/Container';

const iconItems = [
  {
    iconId: 'git-icon',
    viewBox: '0 0 105 105',
  },
  {
    iconId: 'html',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'css',
    viewBox: '0 0 120 119',
  },
  {
    iconId: 'javaScript',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'react',
    viewBox: '0 0 113 101',
  },
  {
    iconId: 'bootstrap',
    viewBox: '0 0 88 87',
  },
  {
    iconId: 'vscode',
    viewBox: '0 0 112 112',
  },
  {
    iconId: 'githubfillSkill',
    viewBox: '0 0 88 88',
  },
  {
    iconId: 'redux',
    viewBox: '0 0 105 100',
  },
  {
    iconId: 'typeScript',
    viewBox: '0 0 128 128',
  },
];

// const iconItems = [
//   {
//     iconId: 'git-icon',
    
//   },
//   {
//     iconId: 'html',
    
//   },
//   {
//     iconId: 'css',
    
//   },
//   {
//     iconId: 'javaScript',
    
//   },
//   {
//     iconId: 'react',
    
//   },
//   {
//     iconId: 'bootstrap',
    
//   },
//   {
//     iconId: 'vscode',
    
//   },
//   {
//     iconId: 'githubfillSkill',
    
//   },
//   {
//     iconId: 'redux',
    
//   },
//   {
//     iconId: 'typeScript',
   
//   },
// ];

export const Skills = () => {
  return (
    <StyledSkillsSection>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <TitleHint> Technologies I’ve been working with recently</TitleHint>
        {/* <FlexWrapper direction={'column'} align={'center'} wrap={'wrap'}> */}

        <SkillsList iconItems={iconItems} />

        {/* </FlexWrapper> */}
      </Container>
    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.section``;
