import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const ServiceCard = ({ service }) => {
   return (
      <ServiceCardWrap images={service.images}>
         <h3>{service.title}</h3>
         <button className='project-btn'>
            View Projects{' '}
            <span>
               <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
                  <path
                     d='M1 1l4 4-4 4'
                     stroke='#E7816B'
                     strokeWidth='2'
                     fill='none'
                     fillRule='evenodd'
                  />
               </svg>
            </span>
         </button>
      </ServiceCardWrap>
   );
};

const ServiceCardWrap = styled.article`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-image: ${(props) => `url(${props.images.mobile})`};
   background-repeat: no-repeat;
   background-size: cover;
   height: 100%;
   border-radius: 15px;
   overflow: hidden;

   &::before {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease-in-out;
   }

   &:hover {
      &::before {
         background-color: ${(props) => props.theme.primaryPink};
         opacity: 0.5;
      }
   }

   h3 {
      position: relative;
      text-transform: uppercase;
      color: ${(props) => props.theme.white};
      font-weight: 500;
      font-size: 1.7rem;
      letter-spacing: 2px;
      z-index: 2;
   }

   .project-btn {
      position: relative;
      background: none;
      color: ${(props) => props.theme.white};
      border: none;
      outline: none;
      text-transform: uppercase;
      letter-spacing: 6.5px;
      z-index: 2;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      background-image: ${(props) => `url(${props.images.tablet})`};

      h3 {
         font-size: 2.5rem;
         margin-bottom: 1.5rem;
      }

      .project-btn {
         background: none;
         color: ${(props) => props.theme.white};
         border: none;
         outline: none;
         text-transform: uppercase;
         letter-spacing: 6.5px;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      background-image: ${(props) => `url(${props.images.desktop})`};
   }
`;
