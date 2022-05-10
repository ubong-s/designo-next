import Link from 'next/link';
import styled from 'styled-components';
import { navLinks } from '../../../data/navLinks';
import { breakpoints } from '../../../styles';
import { Logo } from '../Logo';

export const FooterTop = () => {
   return (
      <FooterTopWrap>
         <Logo link='/assets/shared/desktop/logo-light.png' />
         <FooterLinks>
            {navLinks.map((link) => (
               <li key={link.id}>
                  <Link href={link.address}>
                     <a>{link.title}</a>
                  </Link>
               </li>
            ))}
         </FooterLinks>
      </FooterTopWrap>
   );
};

const FooterTopWrap = styled.div`
   @media screen and (min-width: ${breakpoints.tablet}) {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      grid-template-columns: 1fr 2fr;
      border-bottom: 0.1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 2.5rem;

      .logo {
         margin: unset;
      }
   }
`;

const FooterLinks = styled.ul`
   margin-top: 1.4rem;
   padding-top: 1.6rem;
   border-top: 0.1px solid rgba(255, 255, 255, 0.1);

   li {
      text-transform: uppercase;
      margin-bottom: 1.3rem;
      font-size: 0.9rem;

      a {
         color: ${(props) => props.theme.gray};
         letter-spacing: 2px;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: flex;
      gap: 2.3rem;
      align-items: flex-end;
      padding-top: unset;
      border-top: none;
      margin-top: none;

      li {
         margin-bottom: unset;
      }
   }
`;
