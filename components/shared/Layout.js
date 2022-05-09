import { Footer } from './Footer';
import { Header } from './Header';
import { GlobalStyle } from '../../styles/globalStyle';

export const Layout = ({ children }) => {
   return (
      <div>
         <GlobalStyle />
         <Header />
         <main>{children}</main>
         <Footer />
      </div>
   );
};
