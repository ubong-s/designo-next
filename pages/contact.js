import Head from 'next/head';
import { motion } from 'framer-motion';
import { ContactIntro, LocationsGrid } from '../components';
import { fadeIn } from '../utils/animation';

const Contact = () => {
   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Head>
            <title>Contact Us | Designo</title>
            <meta
               name='description'
               content='Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.'
            />
         </Head>
         <ContactIntro />
         <LocationsGrid />
      </motion.div>
   );
};

export default Contact;
