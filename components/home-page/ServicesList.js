import Link from 'next/link';
import styled from 'styled-components';
import { services } from '../../data/services';
import { breakpoints } from '../../styles';
import { ServiceCard } from '../shared/ServiceCard';

export const ServicesList = () => {
   return (
      <ServicesListWrap>
         <ServicesListInner className='container'>
            {services.map((service) => (
               <Link href={service.link} key={service.id}>
                  <a>
                     <ServiceCard service={service} />
                  </a>
               </Link>
            ))}
         </ServicesListInner>
      </ServicesListWrap>
   );
};

const ServicesListWrap = styled.section`
   padding: 7.5rem 0 4.5rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 7.75rem 0 4.5rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 10rem 0 6rem;
   }
`;

const ServicesListInner = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 1.5rem;
   grid-template-rows: repeat(3, 250px);

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-rows: repeat(3, 200px);
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 308px);

      a {
         &:nth-of-type(1) {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
         }
      }
   }
`;
