import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { navLinks } from '../../data/navLinks';

export const Footer = () => {
   return (
      <FooterWrap>
         <FooterInner className='container'>
            {/* FOOTER TOP START */}
            <div className='footer-top'>
               <Link href='/'>
                  <a>
                     <Image
                        src='/assets/shared/desktop/logo-light.png'
                        alt='designo'
                        width={404}
                        height={54}
                     />
                  </a>
               </Link>
               <FooterLinks>
                  {navLinks.map((link) => (
                     <li key={link.id}>
                        <Link href={link.address}>
                           <a>{link.title}</a>
                        </Link>
                     </li>
                  ))}
               </FooterLinks>
            </div>
            {/* FOOTER TOP END */}

            {/* FOOTER BOTTOM START */}
            {/* FOOTER BOTTOM END */}
         </FooterInner>
      </FooterWrap>
   );
};

const FooterWrap = styled.footer`
   background-color: ${(props) => props.theme.dark};
   color: ${(props) => props.theme.white};
   padding: 8rem 0 3rem;
   text-align: center;
`;

const FooterInner = styled.div``;

const FooterLinks = styled.ul`
   li {
      text-transform: uppercase;
      margin: 1.5rem 0;

      a {
         color: ${(props) => props.theme.white};
         letter-spacing: 2px;
      }
   }
`;
