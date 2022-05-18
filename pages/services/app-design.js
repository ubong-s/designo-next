import Head from 'next/head';
import {
   CallToAction,
   ServicesHeader,
   ProjectsListing,
   OtherServicesGrid,
} from '../../components';
import { appDesignData } from '../../data/appDesignData';

const AppDesign = () => {
   const { name, excerpt, projects } = appDesignData[0];

   return (
      <>
         <Head>
            <title>App Design | Designo</title>
            <meta name='description' content={excerpt} />
         </Head>
         <ServicesHeader title={name} desc={excerpt} />
         <ProjectsListing projects={projects} />
         <OtherServicesGrid />
         <CallToAction />
      </>
   );
};

export default AppDesign;
