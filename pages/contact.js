import Head from 'next/head';
import { ContactIntro, LocationsGrid } from '../components';

const Contact = () => {
   return (
      <div>
         <Head>
            <title>Contact Us | Designo</title>
            <meta
               name='description'
               content='Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.'
            />
         </Head>
         <ContactIntro />
         <LocationsGrid />
      </div>
   );
};

export default Contact;
