import Head from 'next/head';
import { CallToAction, CompanyValues, Hero, ServicesList } from '../components';

export default function Home() {
   return (
      <>
         <Head>
            <title>Designo</title>
            <meta
               name='description'
               content='Award-winning custom designs and digital branding solutions'
            />
         </Head>
         <Hero />
         <ServicesList />
         <CompanyValues />
         <CallToAction />
      </>
   );
}
