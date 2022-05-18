import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { services } from '../../data/services';
import { ServiceCard } from './ServiceCard';
import { breakpoints } from '../../styles';

export const OtherServicesGrid = () => {
   const router = useRouter();
   console.log(router);

   const relatedServices = services.filter(
      (service) => service.link !== router.pathname
   );

   console.log(relatedServices);
   return (
      <OtherServicesGridWrap>
         <OtherServicesGridInner className='container'>
            {relatedServices.map((service) => (
               <Link href={service.link} key={service.id}>
                  <a>
                     <ServiceCard service={service} />
                  </a>
               </Link>
            ))}
         </OtherServicesGridInner>
      </OtherServicesGridWrap>
   );
};

const OtherServicesGridWrap = styled.section`
   margin-bottom: 4rem;
`;

const OtherServicesGridInner = styled.div`
   display: grid;
   gap: 1.5rem;
   grid-template-rows: repeat(2, 250px);

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-rows: repeat(2, 200px);
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 300px;
   }
`;
