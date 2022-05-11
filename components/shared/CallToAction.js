import styled from 'styled-components';
import Link from 'next/link';
import { Button } from './Button';
import { breakpoints } from '../../styles';

export const CallToAction = () => {
   return (
      <CallToActionWrap>
         <CallToActionInner className='container'>
            <div>
               <h2>
                  Let’s talk about
                  <br />
                  your project
               </h2>
               <p>
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow.
               </p>
            </div>
            <Link href='/contact'>
               <a>
                  <Button text='Get in touch' />
               </a>
            </Link>
         </CallToActionInner>
      </CallToActionWrap>
   );
};

const CallToActionWrap = styled.section`
   text-align: center;
   transform: translateY(50%);

   @media screen and (min-width: ${breakpoints.tablet}) {
      transform: translateY(25%);
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      text-align: left;
   }
`;

const CallToActionInner = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: ${(props) => props.theme.primaryPink};
   padding: 0 1.5rem;
   height: 380px;
   border-radius: 15px;
   background-image: url('/assets/shared/desktop/bg-pattern-call-to-action.svg');
   background-repeat: no-repeat;
   background-position: right center;

   /* background-size: cover; */

   & > div {
      margin-bottom: 1.25rem;

      p {
         color: ${(props) => props.theme.white};
         font-size: 0.9rem;
      }

      h2 {
         color: ${(props) => props.theme.white};
         font-size: 1.9rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 0 8rem;
      height: 350px;
      background-position: center center;

      & > div {
         margin-bottom: 0.5rem;

         h2 {
            font-size: 2.3rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      padding: 0;
      height: 290px;
      padding: 0 6rem;
      margin: auto;
      background-position: center right;

      a {
         justify-self: flex-end;
      }

      & > div {
         margin-bottom: 0;

         h2 {
            font-size: 2.3rem;
         }
      }
   }
`;
