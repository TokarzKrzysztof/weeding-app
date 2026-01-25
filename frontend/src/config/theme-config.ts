import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    text: {
      primary: '#353535'
    },
    primary: {
      main: '#f01f6f',
      light: '#f5ebef',
      dark: '#7a0934',
      contrastText: 'white',
    },
    secondary: {
      main: '#f0f8ff',
      contrastText: 'black',
    },
  },
  zIndex: {
    modalHover: 1250,
    drawer: 1251,
  },
  typography: {
    fontSize: 14,
  },
});

declare module '@mui/material/styles' {
  interface ZIndex {
    modalHover: number;
  }
}
