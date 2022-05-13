import Head from 'next/head';
import { CallToAction, MapInfo } from '../components';

const Locations = () => {
   return (
      <div>
         <Head>
            <title>Contact Us | Designo</title>
            <meta
               name='description'
               content='Ready to take it to the next level? Visit any of out locations'
            />
         </Head>
         <MapInfo />
         <MapInfo />
         <MapInfo />
         <CallToAction />
      </div>
   );
};

export default Locations;
