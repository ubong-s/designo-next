import { Header } from './Header';
import { GlobalStyle } from '../../styles/globalStyle';
import { Footer } from './Footer';
Footer;

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
