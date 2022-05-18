import Head from 'next/head';
import {
   CallToAction,
   ServicesHeader,
   ProjectsListing,
   OtherServicesGrid,
} from '../../components';
import { graphicDesignData } from '../../data/graphicDesignData';

const GraphicDesign = () => {
   const { name, excerpt, projects } = graphicDesignData[0];

   return (
      <>
         <Head>
            <title>Graphic Design | Designo</title>
            <meta name='description' content={excerpt} />
         </Head>
         <ServicesHeader title={name} desc={excerpt} />
         <ProjectsListing projects={projects} />
         <OtherServicesGrid />
         <CallToAction />
      </>
   );
};

export default GraphicDesign;
