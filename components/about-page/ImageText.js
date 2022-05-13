import styled from 'styled-components';
import { breakpoints } from '../../styles';
import Image from 'next/image';

export const ImageText = ({ title, description, images, altDir }) => {
   return (
      <ImageTextWrap>
         <ImageTextInner className={altDir && 'alt-dir'}>
            <ImageWrap>
               {images && (
                  <>
                     <div className='mobile'>
                        <Image
                           src={images.mobile}
                           alt={title}
                           height={320}
                           width={375}
                        />
                     </div>
                     <div className='tablet'>
                        <Image
                           src={images.tablet}
                           alt={title}
                           height={320}
                           width={689}
                        />
                     </div>
                     <div className='desktop'>
                        <Image
                           src={images.desktop}
                           alt={title}
                           height={640}
                           width={476}
                        />
                     </div>
                  </>
               )}
            </ImageWrap>
            <TextContent>
               <h2>{title}</h2>

               <div dangerouslySetInnerHTML={{ __html: description }} />
            </TextContent>
         </ImageTextInner>
      </ImageTextWrap>
   );
};

const ImageTextWrap = styled.section`
   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 90%;
      margin: auto;
      padding: 5rem 0;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      width: 80%;
      margin: auto;
      max-width: 1110px;
      padding: 8rem 0;
   }
`;

const ImageTextInner = styled.div`
   @media screen and (min-width: ${breakpoints.tablet}) {
      border-radius: 15px;
      overflow: hidden;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      grid-template-areas: 'image content';
      height: 100vh;

      &.alt-dir {
         grid-template-columns: 1.5fr 1fr;
         grid-template-areas: 'content image';
      }
   }
`;

const ImageWrap = styled.div`
   object-fit: cover;
   line-height: 0;

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
      height: 100%;

      .tablet {
         display: none;
      }

      .desktop {
         display: block;
         height: 100%;

         span {
            height: 100% !important;

            img {
               object-fit: cover !important;
            }
         }
      }
   }
`;
const TextContent = styled.section`
   grid-area: content;
   text-align: center;
   background-color: ${(props) => props.theme.lightPink};
   text-align: center;
   padding: 5rem 2rem;

   h2 {
      color: ${(props) => props.theme.primaryPink};
      font-size: 32px;
      margin-bottom: 2rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      h2 {
         font-size: 48px;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding: 0 5rem;
   }

   @media screen and (min-width: ${breakpoints.hd}) {
      padding: 0 6rem;
   }
`;
