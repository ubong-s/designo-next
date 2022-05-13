import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '../../data/locations';
import { Button } from '../../components';
import { breakpoints } from '../../styles';

export const LocationsGrid = () => {
   return (
      <LocationsGridWrap>
         <LocationsGridInner className='container'>
            {locations.map((location) => (
               <LocationCard key={location.id}>
                  <div className='image'>
                     <Image
                        src={location.icon}
                        alt={location.name}
                        height={202}
                        width={202}
                     />
                  </div>

                  <h3>{location.name}</h3>
                  <Link href={location.link}>
                     <a>
                        <Button text='See Location' />
                     </a>
                  </Link>
               </LocationCard>
            ))}
         </LocationsGridInner>
      </LocationsGridWrap>
   );
};

const LocationsGridWrap = styled.section`
   padding: 6rem 0;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 3rem 0;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 10rem 0;
   }
`;

const LocationsGridInner = styled.div`
   display: grid;
   gap: 5rem;

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(3, 1fr);
   }
`;

const LocationCard = styled.div`
   text-align: center;

   .image {
      position: relative;
      margin-bottom: 3rem;

      &::after {
         position: absolute;
         top: 0;
         left: 0;
         height: 100%;
         width: 100%;
         content: '';
         background-image: url('/assets/shared/desktop/bg-pattern-small-circle.svg');
         background-repeat: no-repeat;
         background-position: 50%;
      }
   }

   &:nth-child(1) {
      .image {
         &::after {
            transform: rotate(90deg);
         }
      }
   }

   &:nth-child(3) {
      .image {
         &::after {
            transform: rotate(270deg);
         }
      }
   }

   h3 {
      text-transform: uppercase;
      letter-spacing: 5.5px;
      margin-bottom: 2rem;
   }
`;
