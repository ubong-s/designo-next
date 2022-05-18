import Head from 'next/head';
import {
   AboutIntro,
   CallToAction,
   ImageText,
   LocationsGrid,
} from '../components';
import { TheRealDealData, WorldClassTalentData } from '../data/aboutPageData';

const About = () => {
   return (
      <>
         <Head>
            <title>About Us | Designo</title>
            <meta
               name='description'
               content='Founded in 2010, we are a creative agency that produces lasting results for our clients.'
            />
         </Head>
         <AboutIntro />
         <ImageText {...WorldClassTalentData} />
         <LocationsGrid />
         <ImageText {...TheRealDealData} altDir='true' />
         <CallToAction />
      </>
   );
};

export default About;
