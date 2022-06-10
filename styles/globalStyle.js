import { createGlobalStyle, css } from 'styled-components';
import { breakpoints, typography } from '.';

const bodyStyles = css`
   font-family: ${typography.type.primary};
   background: ${(props) => props.theme.white};
   color: ${(props) => props.theme.dark};
   line-height: 1.6;
   max-width: 1600px;
   font-weight: 400;
   margin: auto;

   *,
   ::after,
   ::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${typography.type.primary};
   }

   main {
      min-height: 80vh;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: ${typography.weight.medium};
      letter-spacing: 0.5px;
      line-height: 1;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.dark};
   }

   p {
      font-size: 0.9rem;
      margin-bottom: 1rem;

      @media screen and (min-width: ${breakpoints.tablet}) {
         font-size: 1rem;
      }
   }

   img {
      max-width: 100%;
   }

   ul {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      letter-spacing: 0.5px;
   }

   .container {
      width: 90%;
      margin: auto;

      @media screen and (min-width: ${breakpoints.desktop}) {
         width: 80%;
         max-width: 1110px;
      }
   }

   .leaflet-div-icon {
      background-color: transparent;
      border: transparent;

      width: 48px !important;
      height: 48px !important;
   }
`;

export const GlobalStyle = createGlobalStyle`
   html {
      scroll-behavior: smooth;
   }

   body {
      ${bodyStyles}
   }
`;
