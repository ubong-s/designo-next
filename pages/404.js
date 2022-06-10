import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../components';
import Link from 'next/link';
import { slideIn } from '../utils/animation';

const NotFoundPage = () => {
   return (
      <motion.div
         variants={slideIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <NotFoundWrap>
            <div className='container'>
               <h1>Page Not Found</h1>
               <Link href='/'>
                  <a>
                     <Button text='Back to home' />
                  </a>
               </Link>
            </div>
         </NotFoundWrap>
      </motion.div>
   );
};

export default NotFoundPage;

const NotFoundWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   height: 50vh;
`;
