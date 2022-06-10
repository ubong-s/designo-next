import Head from 'next/head';
import {
   CallToAction,
   ServicesHeader,
   ProjectsListing,
   OtherServicesGrid,
} from '../../components';
import { graphicDesignData } from '../../data/graphicDesignData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';

const GraphicDesign = () => {
   const { name, excerpt, projects } = graphicDesignData[0];

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Head>
            <title>Graphic Design | Designo</title>
            <meta name='description' content={excerpt} />
         </Head>
         <ServicesHeader title={name} desc={excerpt} />
         <ProjectsListing projects={projects} />
         <OtherServicesGrid />
         <CallToAction />
      </motion.div>
   );
};

export default GraphicDesign;
