import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const ServicesHeader = ({ title, desc }) => {
   return (
      <ServicesHeaderWrap>
         <ServicesHeaderInner className='container'>
            <div className='content'>
               <h1>{title}</h1>
               <p>{desc}</p>
            </div>
         </ServicesHeaderInner>
      </ServicesHeaderWrap>
   );
};

const ServicesHeaderWrap = styled.section`
   height: 300px;
   background-color: ${(props) => props.theme.primaryPink};
   background-image: url('/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg');
   background-repeat: no-repeat;
   background-position: right center;

   @media screen and (min-width: ${breakpoints.tablet}) {
      height: 250px;
      background-color: transparent;
      background-image: unset;
      background-repeat: unset;
      background-position: unset;
   }
`;
const ServicesHeaderInner = styled.div`
   height: 100%;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   h1 {
      color: ${(props) => props.theme.white};
      font-size: 2rem;
   }

   p {
      color: ${(props) => props.theme.white};
      margin-bottom: 0;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      background-color: ${(props) => props.theme.primaryPink};
      border-radius: 15px;
      background-image: url('/assets/shared/desktop/bg-pattern-call-to-action.svg');
      background-repeat: no-repeat;
      background-position: right center;

      .content {
         width: 50%;
         margin: auto;
      }

      h1 {
         font-size: 3rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .content {
         width: 38%;
         margin: auto;
      }

      h1 {
         font-size: 3rem;
      }
   }
`;
