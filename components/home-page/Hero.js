import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { Button } from '../shared/Button';

export const Hero = () => {
   return (
      <HeroWrap>
         <div className='desktop-bg'>
            <Image
               src='/assets/shared/desktop/bg-pattern-leaf.svg'
               alt=''
               height={594}
               width={1006}
            />
         </div>
         <HeroInner className='container'>
            <HeroContent>
               <h1>
                  Award-winning custom designs and digital branding solutions
               </h1>{' '}
               <p>
                  With over 10 years in the industry, we are experienced in
                  creating fully responsive websites, app design, and engaging
                  brand experiences. Find out more about our services.
               </p>
               <Link href='/about'>
                  <a>
                     <Button text='Learn More' />
                  </a>
               </Link>
            </HeroContent>
            <HeroImage>
               <Image
                  src='/assets/home/desktop/image-hero-phone-alt.png'
                  alt='Hero-image'
                  width={400}
                  height={801}
               />
            </HeroImage>
         </HeroInner>
      </HeroWrap>
   );
};

const HeroWrap = styled.section`
   background-color: ${(props) => props.theme.primaryPink};
   background-image: url('/assets/home/desktop/bg-pattern-hero-home.svg');
   background-repeat: no-repeat;
   background-position: left;
   position: relative;

   .desktop-bg {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      background-color: unset;
      background-image: unset;
      background-repeat: unset;
      background-position: unset;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      .desktop-bg {
         display: initial;
         position: absolute;
         top: 50%;
         left: 0;
         z-index: -2;
         /* transform: rotate(180deg); */
      }
   }
`;

const HeroInner = styled.div`
   padding-top: 5rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      background-color: ${(props) => props.theme.primaryPink};
      padding-top: 4rem;
      width: 90%;
      margin: auto;
      max-width: 1110px;
      border-radius: 15px;
      background-image: url('/assets/home/desktop/bg-pattern-hero-home.svg');
      background-repeat: no-repeat;
      background-position: 350%;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 0 6rem;
      width: 80%;
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr 0.75fr;
      line-height: 0;
      overflow: hidden;
      background-position: right;
      margin: unset;
   }

   @media screen and (min-width: ${breakpoints.large}) {
      grid-template-columns: 1fr 0.65fr;
   }
`;

const HeroContent = styled.div`
   width: 95%;
   margin: auto;
   text-align: center;
   color: ${(props) => props.theme.white};
   margin-bottom: 5rem;

   h1 {
      color: ${(props) => props.theme.white};
      font-size: 1.9rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
   }

   p {
      line-height: 1.7;
      font-size: 0.95rem;
      margin-bottom: 1.25rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 75%;
      margin-bottom: 4rem;

      h1 {
         color: ${(props) => props.theme.white};
         font-size: 2.9rem;
         line-height: 1;
         margin-bottom: 1.75rem;
      }

      p {
         font-size: 1rem;
         padding: 0 3rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      text-align: left;
      width: 100%;
      margin: unset;
      align-self: center;

      h1 {
         margin-bottom: 1.5rem;
         line-height: 1;
      }

      p {
         padding: unset;
         font-size: 1rem;
         margin-bottom: 3rem;
         margin-right: 5rem;
      }
   }
`;

const HeroImage = styled.div`
   position: relative;
   text-align: center;
   height: 375px;
   overflow: hidden;
   line-height: 0;
   object-position: top;
   max-width: 290px;
   margin: auto;

   img {
      object-position: top;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      height: 395px;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      align-self: flex-end;
      justify-self: flex-end;
      margin: unset;
      height: 500px;
      /* max-width: 250px; */
   }

   @media screen and (min-width: ${breakpoints.large}) {
      /* height: 490px; */
   }

   @media screen and (min-width: ${breakpoints.hd}) {
   }
`;
