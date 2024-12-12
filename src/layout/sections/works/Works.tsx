import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import project_1 from "../../../assets/image/project-1.webp"
import project_2 from "../../../assets/image/project-2.webp"
import { TitleHint } from '../../../components/TitileHint';

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>Projects</SectionTitle>
      <TitleHint>Things I’ve built so far</TitleHint>
      <FlexWrapper justify={"space-around"}>
         <Work src={project_1} techStack={"Tech stack : HTML , JavaScript, SASS, React"} title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} />
         <Work src={project_2} techStack={"Tech stack : HTML , JavaScript, SASS, React"} title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} />
        
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #f993d2;
`;
