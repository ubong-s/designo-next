import styled from 'styled-components';
import { breakpoints } from '../../styles';
import ContactForm from './ContactForm';

export const ContactIntro = () => {
   return (
      <ContactIntroWrap>
         <ContactIntroInner>
            <ContactContent>
               <h1>Contact Us</h1>
               <p>
                  Ready to take it to the next level? Let’s talk about your
                  project or idea and find out how we can help your business
                  grow. If you are looking for unique digital experiences that’s
                  relatable to your users, drop us a line.
               </p>
            </ContactContent>
            <ContactForm />
         </ContactIntroInner>
      </ContactIntroWrap>
   );
};

const ContactIntroWrap = styled.section`
   position: relative;
   background-color: ${(props) => props.theme.primaryPink};
   color: ${(props) => props.theme.white};
   background-image: url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg');
   background-repeat: no-repeat;
   background-position: top left 20%;
   background-size: 200%;

   @media screen and (min-width: ${breakpoints.tablet}) {
      background-color: unset;
      color: unset;
      background-image: unset;
      background-repeat: unset;
      background-position: unset;
      background-size: unset;
   }
`;

const ContactIntroInner = styled.div`
   display: grid;
   gap: 2rem;
   padding: 5rem 0;
   text-align: center;
   width: 90%;
   margin: auto;

   @media screen and (min-width: ${breakpoints.tablet}) {
      text-align: left;
      background-color: ${(props) => props.theme.primaryPink};
      color: ${(props) => props.theme.white};
      padding: 5rem 4rem;
      border-radius: 15px;
      overflow: hidden;
      background-image: url('/assets/contact/desktop/bg-pattern-hero-desktop.svg');
      background-repeat: no-repeat;
      background-position: top -20% left -20%;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      width: 80%;
      max-width: 1110px;
      padding: 3rem 5rem;
      gap: 3rem;
      grid-template-columns: 1fr 1fr;
      min-height: calc(100vh - 150px);
      background-image: url('/assets/contact/desktop/bg-pattern-hero-desktop.svg');
      background-repeat: no-repeat;
      background-position: bottom left;
      background-size: 50%;
   }
`;

const ContactContent = styled.div`
   h1 {
      font-size: 32px;
      color: ${(props) => props.theme.white};
      margin-bottom: 1.5rem;
   }

   p {
      font-size: 1.1rem;
      margin-bottom: 0;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      h1 {
         font-size: 40px;
         margin-bottom: 2rem;
      }

      p {
         margin-bottom: 0;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 3.5rem;
      background-position: right top -175px;
      background-size: 100%;

      p {
         font-size: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.large}) {
      padding: unset;
   }

   @media screen and (min-width: ${breakpoints.hd}) {
      padding: unset;
   }
`;
