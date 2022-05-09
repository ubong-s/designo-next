import { Layout } from '../components';
import { Theme } from '../styles';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
   const router = useRouter();

   console.log(router);
   return (
      <Theme>
         <Layout>
            <AnimatePresence exitBeforeEnter>
               <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
         </Layout>
      </Theme>
   );
}

export default MyApp;
