import Image from 'next/image';
import styled from 'styled-components';
import { values } from '../../data/companyValues';
import { breakpoints, typography } from '../../styles';

export const CompanyValues = () => {
   return (
      <CompanyValuesWrap>
         <div className='desktop-bg'>
            <Image
               src='/assets/shared/desktop/bg-pattern-leaf.svg'
               alt=''
               height={594}
               width={1006}
            />
         </div>
         <CompanyValuesInner className='container'>
            {values.map((value) => (
               <ValueCard key={value.id}>
                  <div className='image'>
                     <Image
                        src={value.image}
                        alt={value.title}
                        height={202}
                        width={202}
                     />
                     <div className='circle'>
                        <Image
                           src='/assets/shared/desktop/bg-pattern-small-circle.svg'
                           alt=''
                           height={202}
                           width={202}
                        />
                     </div>
                  </div>
                  <div className='info'>
                     <h3>{value.title}</h3>
                     <p>{value.description}</p>
                  </div>
               </ValueCard>
            ))}
         </CompanyValuesInner>
      </CompanyValuesWrap>
   );
};

const CompanyValuesWrap = styled.section`
   position: relative;
   padding: 4rem 0 0;
   margin-bottom: -5rem;

   .desktop-bg {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      margin-bottom: -2rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      margin-bottom: unset;
      padding-bottom: 4rem;

      .desktop-bg {
         display: initial;
         position: absolute;
         top: 35%;
         right: 0;
         z-index: -2;
         transform: rotate(180deg);
      }
   }
`;

const CompanyValuesInner = styled.div`
   display: grid;
   gap: 4rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      gap: 1.5rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
   }
`;

const ValueCard = styled.div`
   display: grid;
   justify-items: center;
   align-items: center;
   text-align: center;
   gap: 2.5rem;

   .image {
      position: relative;

      .circle {
         position: absolute;
         top: 50%;
         left: 50%;
         height: 100%;
         width: 100%;
         transform: translate(-50%, -50%);
         z-index: -1;
      }
   }

   &:nth-child(2) {
      .image {
         .circle {
            transform: translate(-50%, -50%) rotate(0.6turn);
         }
      }
   }

   &:nth-child(3) {
      .image {
         /* background-color: blue; */
         .circle {
            transform: translate(-50%, -50%) rotate(0.2turn);
         }
      }
   }

   .info {
      h3 {
         text-transform: uppercase;
         letter-spacing: 5.5px;
         font-weight: ${typography.weight.medium};
         margin-bottom: 2rem;
      }

      p {
         font-size: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: auto 1fr;
      gap: 3rem;
      align-items: center;
      text-align: left;

      .info {
         h3 {
            margin-bottom: 1.5rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      align-items: unset;
      text-align: center;

      .info {
         h3 {
            margin-bottom: 2.5rem;
         }
      }
   }
`;
