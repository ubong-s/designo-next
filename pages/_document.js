import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               // eslint-disable-next-line react/display-name
               enhanceApp: (App) => (props) =>
                  sheet.collectStyles(<App {...props} />),
            });

         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }
   render() {
      return (
         <Html>
            <Head>
               <link rel='preconnect' href='https://fonts.googleapis.com' />
               <link
                  rel='preconnect'
                  href='https://fonts.gstatic.com'
                  crossOrigin
               />
               <link
                  href={
                     'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Nunito+Sans:wght@300;600;800&display=swap'
                  }
                  rel='stylesheet'
               />
               <link
                  rel='stylesheet'
                  href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
                  integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
                  crossOrigin
               />
               <link rel='icon' href='/favicon-32x32.png' />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
