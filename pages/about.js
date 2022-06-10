import Head from 'next/head';
import { motion } from 'framer-motion';
import {
   AboutIntro,
   CallToAction,
   ImageText,
   LocationsGrid,
} from '../components';
import { TheRealDealData, WorldClassTalentData } from '../data/aboutPageData';
import { fadeIn } from '../utils/animation';

const About = () => {
   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
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
      </motion.div>
   );
};

export default About;
