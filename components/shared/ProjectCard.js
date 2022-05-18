import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const ProjectCard = ({ title, description, screenshot }) => {
   return (
      <ProjectCardWrap>
         {screenshot && (
            <Image src={screenshot} alt='title' height={700} width={640} />
         )}
         <div className='info'>
            <h3>{title}</h3>
            <p>{description}</p>
         </div>
      </ProjectCardWrap>
   );
};

const ProjectCardWrap = styled.article`
   border-radius: 15px;
   overflow: hidden;
   text-align: center;
   background-color: ${(props) => props.theme.lightPink};
   transition: background-color 0.3s ease-in-out;
   max-width: 325px;
   margin: auto;
   cursor: pointer;

   .info {
      padding: 2rem 1.8rem;
      h3 {
         text-transform: uppercase;
         letter-spacing: 5px;
         color: ${(props) => props.theme.primaryPink};
      }

      p {
         margin-bottom: 0;
         color: ${(props) => props.theme.dark};
      }
   }

   &:hover {
      background-color: ${(props) => props.theme.primaryPink};

      .info {
         h3 {
            color: ${(props) => props.theme.white};
         }

         p {
            color: ${(props) => props.theme.white};
         }
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: unset;
      height: 350px;

      .info {
         display: flex;
         flex-direction: column;
         justify-content: center;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      grid-template-columns: 1fr;
      height: unset;
   }
`;
