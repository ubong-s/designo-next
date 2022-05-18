import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { ProjectCard } from './ProjectCard';

export const ProjectsListing = ({ projects }) => {
   return (
      <ProjectsListingWrap>
         <ProjectsListingInner className='container'>
            {projects.map((project) => (
               <ProjectCard key={project.id} {...project} />
            ))}
         </ProjectsListingInner>
      </ProjectsListingWrap>
   );
};

const ProjectsListingWrap = styled.section`
   padding: 6rem 0;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 6rem 0;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 8rem 0;
   }
`;

const ProjectsListingInner = styled.div`
   display: grid;
   gap: 3rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
   }
`;
