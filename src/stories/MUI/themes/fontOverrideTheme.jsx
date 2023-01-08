import { createTheme, } from '@mui/material/styles';

import Consolas from '../../../assets/font/Consolas.woff';

export const consolasFontTheme = createTheme({
  typography: {
    fontFamily: 'Consolas',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Consolas';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Consolas'), local('Consolas-Regular'), url(${Consolas}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});