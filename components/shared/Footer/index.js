import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { navLinks } from '../../../data/navLinks';
import { breakpoints } from '../../../styles';
import { FooterBottom } from './FooterBottom';
import { FooterTop } from './FooterTop';

export const Footer = () => {
   return (
      <FooterWrap>
         <FooterInner className='container'>
            <FooterTop />
            <FooterBottom />
         </FooterInner>
      </FooterWrap>
   );
};

const FooterWrap = styled.footer`
   background-color: ${(props) => props.theme.dark};
   color: ${(props) => props.theme.gray};
   padding: 16rem 0 3.5rem;
   text-align: center;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 9rem 0 5rem;
      text-align: left;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 9rem 0 4rem;
   }
`;

const FooterInner = styled.div``;
