import styled from 'styled-components';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { breakpoints } from '../../styles';

const customIcon = new Leaflet.Icon({
   iconUrl: '/icon-location.png',
   iconRetinaUrl: '/icon-location.png',
   iconAnchor: null,
   popupAnchor: [1, -34],
   shadowUrl: null,
   shadowSize: null,
   shadowAnchor: null,
   iconSize: new Leaflet.Point(60, 75),
   className: 'leaflet-div-icon',
});

const Map = ({ position = [51.505, -0.09], address }) => {
   return (
      <MapWrap>
         <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
            <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} icon={customIcon}>
               <Popup>
                  <p dangerouslySetInnerHTML={{ __html: address }} />
               </Popup>
            </Marker>
         </MapContainer>
      </MapWrap>
   );
};

export default Map;

const MapWrap = styled.div`
   .leaflet-container {
      height: 400px;
      width: 100%;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .leaflet-container {
         border-radius: 15px;
         overflow: hidden;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-area: map;

      .leaflet-container {
         height: 100%;
      }
   }
`;
