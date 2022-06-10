import Head from 'next/head';
import {
   CallToAction,
   ServicesHeader,
   ProjectsListing,
   OtherServicesGrid,
} from '../../components';
import { appDesignData } from '../../data/appDesignData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';

const AppDesign = () => {
   const { name, excerpt, projects } = appDesignData[0];

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Head>
            <title>App Design | Designo</title>
            <meta name='description' content={excerpt} />
         </Head>
         <ServicesHeader title={name} desc={excerpt} />
         <ProjectsListing projects={projects} />
         <OtherServicesGrid />
         <CallToAction />
      </motion.div>
   );
};

export default AppDesign;
