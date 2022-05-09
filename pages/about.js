import Head from 'next/head';
import {
   AboutIntro,
   CallToAction,
   ImageText,
   LocationsGrid,
} from '../components';

export const About = () => {
   return (
      <div>
         <Head>
            <title>About Us | Designo</title>
            <meta
               name='description'
               content='Founded in 2010, we are a creative agency that produces lasting results for our clients.'
            />
         </Head>
         <AboutIntro />
         <ImageText />
         <LocationsGrid />
         <ImageText />
         <CallToAction />
      </div>
   );
};
