import Head from 'next/head';
import {
   CallToAction,
   ProjectsListing,
   ServicesHeader,
   OtherServicesGrid,
} from '../../components';
import { webDesignData } from '../../data/webDesignData';

const WebDesign = () => {
   const { name, excerpt, projects } = webDesignData[0];
   return (
      <>
         <Head>
            <title>Web Design | Designo</title>
            <meta name='description' content={excerpt} />
         </Head>
         <ServicesHeader title={name} desc={excerpt} />
         <ProjectsListing projects={projects} />
         <OtherServicesGrid />
         <CallToAction />
      </>
   );
};

export default WebDesign;
