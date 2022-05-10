import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Logo = ({ link }) => {
   return (
      <LogoWrap className='logo'>
         <Link href='/'>
            <a>
               <Image src={link} alt='designo' width={404} height={54} />
            </a>
         </Link>
      </LogoWrap>
   );
};

const LogoWrap = styled.div`
   max-width: 205px;
   margin: auto;

   @media screen and (min-width: ${breakpoints.tablet}) {
      line-height: 0;

      a {
         line-height: 0;

         img {
            transform: scale(1);
         }
      }
   }
`;
