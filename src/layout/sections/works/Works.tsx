import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import project_1 from '../../../assets/image/project-1.webp';
import project_2 from '../../../assets/image/project-2.webp';
import project_3 from '../../../assets/image/project-3.webp';
import project_4 from '../../../assets/image/project-4.webp';
import project_5 from '../../../assets/image/project-5.webp';
import project_6 from '../../../assets/image/project-6.webp';
import { TitleHint } from '../../../components/TitileHint';
import { Container } from '../../../components/Container';

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <TitleHint>Things I’ve built so far</TitleHint>
        <FlexWrapper justify={'space-between'} wrap='wrap'>
          <Work
            src={project_1}
            techStack={'HTML , JavaScript, SASS, React'}
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
          />
          <Work
            src={project_2}
            techStack={'HTML , JavaScript, SASS, React'}
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
          />
          <Work
            src={project_3}
            techStack={'HTML , JavaScript, SASS, React'}
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
          />
          <Work
            src={project_4}
            techStack={'HTML , JavaScript, SASS, React'}
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
          />
          <Work
            src={project_5}
            techStack={'HTML , JavaScript, SASS, React'}
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
          />
          <Work
            src={project_6}
            techStack={'HTML , JavaScript, SASS, React'}
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
