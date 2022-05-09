import { ThemeProvider } from 'styled-components';

export const colors = {
   primaryOrange: '#FDF3F0',
   white: '#FFFFFF',
   dark: '#1D1D1F',
};

export const typography = {
   type: {
      primary: `'Jost', sans-serif`,
   },
   weight: {
      normal: '400',
      semibold: '600',
      bold: '700',
   },
};

export const breakpoints = {
   mobile: '375px',
   tablet: '768px',
   desktop: '1024px',
   hd: '1280px',
};

export const Theme = ({ children }) => (
   <ThemeProvider theme={colors}>{children}</ThemeProvider>
);
