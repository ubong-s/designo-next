import styled from 'styled-components';
import { breakpoints } from '../../styles';

const Info = ({
   location = 'Canada',
   locationSubtitle = 'Designo Central Office',
   address = `3886 Wellington Street <br /> Toronto, Ontario M9C 3J5`,
   phone = '+1 253-863-8967',
   email = 'contact@designo.co',
}) => {
   return (
      <InfoWrap>
         <h2>{location}</h2>
         <div className='info-grid'>
            <div className='address'>
               <h4>{locationSubtitle}</h4>
               <p dangerouslySetInnerHTML={{ __html: address }} />
            </div>
            <div>
               <h4>Contact</h4>
               <p>P : {phone}</p>
               <p>M : {email}</p>
            </div>
         </div>
      </InfoWrap>
   );
};

export default Info;

const InfoWrap = styled.div`
   background-color: ${(props) => props.theme.lightPink};
   text-align: center;
   padding: 5rem 2rem;

   background-image: url('/assets/shared/desktop/bg-pattern-small-circle.svg');
   background-repeat: no-repeat;
   background-position: top left;
   background-size: 70%;

   .address {
      margin-bottom: 2.5em;
      line-height: 2;
   }

   h2 {
      color: ${(props) => props.theme.primaryPink};
      font-size: 40px;
      margin-bottom: 2.5rem;
      text-transform: capitalize;
   }

   p {
      margin-bottom: 0.5rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      border-radius: 15px;
      text-align: left;
      padding: 6rem 5rem 5rem;

      background-image: url('/assets/shared/desktop/bg-pattern-two-circles.svg');
      background-size: 90%;
      background-position: bottom left;

      .info-grid {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 4rem;
      }

      .address {
         margin-bottom: 0;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-area: info;
      padding: 6rem 6rem 5rem;
   }
`;
