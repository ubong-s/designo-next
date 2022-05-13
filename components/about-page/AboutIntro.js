import styled from 'styled-components';
import Image from 'next/image';
import { breakpoints } from '../../styles';

export const AboutIntro = () => {
   return (
      <AboutIntroWrap>
         <div className='desktop-bg'>
            <Image
               src='/assets/about/desktop/bg-pattern-hero-about-desktop.svg'
               alt=''
               height={640}
               width={640}
            />
         </div>
         <AboutIntroInner>
            <AboutImage>
               <div className='mobile'>
                  <Image
                     src='/assets/about/mobile/image-about-hero.jpg'
                     alt='about-hero'
                     height={320}
                     width={375}
                  />
               </div>
               <div className='tablet'>
                  <Image
                     src='/assets/about/tablet/image-about-hero.jpg'
                     alt='about-hero'
                     height={320}
                     width={689}
                  />
               </div>
               <div className='desktop'>
                  <Image
                     src='/assets/about/desktop/image-about-hero.jpg'
                     alt='about-hero'
                     height={480}
                     width={476}
                  />
               </div>
            </AboutImage>

            <AboutContent>
               <h1>About Us</h1>
               <p>
                  {`Founded in 2010, we are a creative agency that produces
                  lasting results for our clients. We’ve partnered with many
                  startups, corporations, and nonprofits alike to craft designs
                  that make real impact. We’re always looking forward to
                  creating brands, products, and digital experiences that
                  connect with our clients' audiences.`}
               </p>
            </AboutContent>
         </AboutIntroInner>
      </AboutIntroWrap>
   );
};

const AboutIntroWrap = styled.section`
   position: relative;

   .desktop-bg {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      .desktop-bg {
         display: initial;
         position: absolute;
         top: 50%;
         left: 0;
         z-index: -1;
         width: 70%;

         span {
            width: 100% !important;
         }
      }
   }
`;

const AboutIntroInner = styled.div`
   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 90%;
      margin: auto;
      border-radius: 15px;
      overflow: hidden;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      width: 80%;
      margin: auto;
      max-width: 1110px;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      grid-template-areas: 'content image';
   }
`;

const AboutImage = styled.div`
   line-height: 0;
   object-fit: cover;

   span {
      width: 100% !important;
   }

   .tablet {
      display: none;
   }

   .desktop {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .mobile {
         display: none;
      }

      .tablet {
         display: block;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-area: image;

      .tablet {
         display: none;
      }

      .desktop {
         display: block;
      }
   }
`;

const AboutContent = styled.div`
   background-color: ${(props) => props.theme.primaryPink};
   color: ${(props) => props.theme.white};
   text-align: center;
   padding: 5rem 2rem;
   background-image: url('/assets/about/desktop/bg-pattern-hero-about-desktop.svg');
   background-repeat: no-repeat;
   background-position: right top -225%;
   background-size: 80%;

   h1 {
      font-size: 32px;
      color: ${(props) => props.theme.white};
   }

   p {
      margin-bottom: 0;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 4rem 3rem;
      background-position: unset;
      background-position: left -70% top 125%;

      h1 {
         font-size: 40px;
         margin-bottom: 2rem;
      }

      p {
         margin-bottom: 0;
         font-size: 1.05rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-area: content;
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
      padding: 0 4rem;
   }

   @media screen and (min-width: ${breakpoints.hd}) {
      padding: 0 6rem;
   }
`;
