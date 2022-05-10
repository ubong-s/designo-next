import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '../../data/navLinks';
import { breakpoints } from '../../styles';
import { Logo } from './Logo';
import { useState } from 'react';

export const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <HeaderWrap>
         <HeaderNav className='container'>
            <Logo link='/assets/shared/desktop/logo-dark.png' />
            <MenuLinks className={menuOpen && 'active'}>
               {navLinks.map((link) => (
                  <li key={link.id}>
                     <Link href={link.address}>
                        <a>{link.title}</a>
                     </Link>
                  </li>
               ))}
            </MenuLinks>

            <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
               <Image
                  src={`/assets/shared/mobile/icon-${
                     menuOpen ? 'close' : 'hamburger'
                  }.svg`}
                  alt=''
                  height={20}
                  width={24}
               />
            </MenuToggle>
         </HeaderNav>
      </HeaderWrap>
   );
};

const HeaderWrap = styled.header`
   height: 100px;
   position: relative;
   display: flex;
   align-items: center;

   @media screen and (min-width: ${breakpoints.tablet}) {
      height: 150px;
   }
`;

const HeaderNav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;

   .logo {
      margin: unset;
      margin-bottom: -0.5rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .logo {
         margin: unset;
      }

      align-items: flex-end;
   }
`;

const MenuLinks = styled.ul`
   position: absolute;
   top: 100px;
   left: 0;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   background: ${(props) => props.theme.dark};
   padding: 2rem;
   transform: translateX(-100%);
   transition: all 0.3s ease-in-out;
   opacity: 0;

   &.active {
      transform: translateX(0);
      opacity: 1;
   }

   li {
      text-transform: uppercase;

      a {
         color: ${(props) => props.theme.white};
         font-size: 24px;
         letter-spacing: 2px;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      position: relative;
      top: unset;
      left: unset;
      width: unset;
      flex-direction: row;
      align-items: flex-end;
      gap: 2.65rem;
      background: transparent;
      padding: 0;
      transform: unset;
      transition: all 0.3s ease-in-out;
      opacity: 1;

      li {
         a {
            color: ${(props) => props.theme.dark};
            font-size: 14px;
            line-height: 1;
         }
      }
   }
`;

const MenuToggle = styled.button`
   background: none;
   outline: none;
   border: none;
   cursor: pointer;

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: none;
   }
`;
