import styled from 'styled-components';
import { breakpoints } from '../../styles';
import Info from './Info';
import Map from './Map';

const MapInfo = ({
   location,
   locationSubtitle,
   address,
   phone,
   email,
   position,
}) => {
   return (
      <>
         <MapInfoWrap>
            <Map position={position} address={address} />
            <Info
               location={location}
               locationSubtitle={locationSubtitle}
               address={address}
               phone={phone}
               email={email}
            />
         </MapInfoWrap>
      </>
   );
};

export default MapInfo;

const MapInfoWrap = styled.section`
   margin-bottom: 3rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 90%;
      margin: auto;
      display: grid;
      gap: 2rem;
      margin-bottom: 4rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      width: 80%;
      max-width: 1110px;
      grid-template-columns: 1fr 2fr;
      grid-template-areas: 'map info';
      margin-bottom: 2rem;

      &:nth-of-type(even) {
         grid-template-columns: 2fr 1fr;
         grid-template-areas: 'info map';
      }

      /* &:nth-last-of-type() {
         margin-bottom: 8rem;
         background-color: red;
      } */
   }
`;
