import Head from 'next/head';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { CallToAction } from '../components';
import { locationsData } from '../data/locationsData';
import { fadeIn } from '../utils/animation';

const Locations = () => {
   const MapInfoWithNoSSR = dynamic(
      () => import('../components/locations-page/MapInfo'),
      {
         ssr: false,
      }
   );
   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
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
      </motion.div>
   );
};

export default Locations;
