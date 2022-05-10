import Image from 'next/image';
import styled from 'styled-components';
import { socials } from '../../../data/socialLinks';
import { breakpoints } from '../../../styles';

export const FooterBottom = () => {
   return (
      <FooterBottomWrap>
         <ContactBox>
            <h4>Designo Central Office</h4>
            <p>
               3886 Wellington Street <br />
               Toronto, Ontario M9C 3J5
            </p>
         </ContactBox>

         <ContactBox>
            <h4>Contact Us (Central Office)</h4>
            <p>
               <span>P : +1 253-863-8967</span> <br />{' '}
               <span>M : contact@designo.co</span>
            </p>
         </ContactBox>

         <SocialLinks>
            {socials.map((social) => (
               <li key={social.id}>
                  <a href={social.link} target='_blank' rel='noreferrer'>
                     <Image
                        src={social.icon}
                        alt={social.label}
                        height={24}
                        width={24}
                     />
                  </a>
               </li>
            ))}
         </SocialLinks>
      </FooterBottomWrap>
   );
};

const FooterBottomWrap = styled.div`
   @media screen and (min-width: ${breakpoints.tablet}) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 2.5rem;

      li {
         margin-bottom: unset;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-top: 2.5rem;

      li {
         margin-bottom: unset;
      }
   }
`;

const ContactBox = styled.div`
   padding: 1.15rem 0;

   h4,
   p {
      color: ${(props) => props.theme.gray};
      margin-bottom: 0.4rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 0;

      p {
         margin-bottom: 0;
      }
   }
`;

const SocialLinks = styled.ul`
   display: flex;
   justify-content: center;
   gap: 1rem;
   padding-top: 1.25rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding-top: 0;
      gap: 1.25rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      gap: 1rem;
      justify-self: flex-end;
   }
`;
