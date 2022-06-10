import Head from 'next/head';
import {
   CallToAction,
   ProjectsListing,
   ServicesHeader,
   OtherServicesGrid,
} from '../../components';
import { webDesignData } from '../../data/webDesignData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';

const WebDesign = () => {
   const { name, excerpt, projects } = webDesignData[0];
   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Head>
            <title>Web Design | Designo</title>
            <meta name='description' content={excerpt} />
         </Head>
         <ServicesHeader title={name} desc={excerpt} />
         <ProjectsListing projects={projects} />
         <OtherServicesGrid />
         <CallToAction />
      </motion.div>
   );
};

export default WebDesign;
