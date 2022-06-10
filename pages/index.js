import Head from 'next/head';
import { motion } from 'framer-motion';
import { CallToAction, CompanyValues, Hero, ServicesList } from '../components';
import { fadeIn } from '../utils/animation';

export default function Home() {
   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
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
      </motion.div>
   );
}
