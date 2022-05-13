import { ThemeProvider } from 'styled-components';

export const colors = {
   primaryPink: '#e7816b',
   lightPink: '#FDF3F0',
   white: '#FFFFFF',
   dark: '#1D1D1F',
   gray: '#8e8e8f',
};

export const typography = {
   type: {
      primary: `'Jost', sans-serif`,
   },
   weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
   },
};

export const breakpoints = {
   mobile: '375px',
   tablet: '768px',
   desktop: '1024px',
   large: '1100px',
   hd: '1440px',
};

export const Theme = ({ children }) => (
   <ThemeProvider theme={colors}>{children}</ThemeProvider>
);
