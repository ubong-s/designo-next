import Head from 'next/head';
import { CallToAction } from '../components';
import dynamic from 'next/dynamic';
import { locationsData } from '../data/locationsData';

const Locations = () => {
   const MapInfoWithNoSSR = dynamic(
      () => import('../components/locations-page/MapInfo'),
      {
         ssr: false,
      }
   );
   return (
      <>
         <Head>
            <title>Locations | Designo</title>
            <meta
               name='description'
               content='Ready to take it to the next level? Visit any of out locations'
            />
         </Head>

         {locationsData.map((location) => (
            <MapInfoWithNoSSR key={location.id} {...location} />
         ))}

         <CallToAction />
      </>
   );
};

export default Locations;
