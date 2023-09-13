import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      light2: 'rgba(255, 255, 255, 0.02)',
      light4: 'rgba(255, 255, 255, 0.04)',
      light8: 'rgba(255, 255, 255, 0.08)',
      dark4: 'rgba(0, 0, 0, 0.18)',
      dark12: 'rgba(0, 0, 0, 0.28)',
      dark28: 'rgba(0, 0, 0, 0.48)',
      primary20: 'rgba(60, 142, 169, 0.2)',
      paper: '#1A1C1E',
      default: 'linear-gradient(179.77deg, #070C0C 0.2%, #1A1C1E 99.8%);',
    },
    primary: {
      light: '#E65F0E',
      main: '#E65F0E',
      dark: 'rgba(0, 0, 0, 0.28)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#6FCF97',
      contrastText: '#fff',
    },
    divider: '#070C0C',
    common: {
      white: '#2c3036',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255, 0.54)',
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'sans-serif'",
    fontWeightBold: 600,
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          height: 60,
          borderRadius: 1,
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface TypeBackground {
    light2: string;
    light4: string;
    light8: string;
    dark4: string;
    dark12: string;
    primary20: string;
  }
}

export default theme;
