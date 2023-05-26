import { createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#15DB95',
    },
    secondary: {
      main: '#02254D',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#FFFFFF',
        },
        containedSecondary: {
          color: '#000000',
        },
        outlinedPrimary: {
          color: '#15DB95',
          borderColor: '#15DB95',
        },
        outlinedSecondary: {
          color: '#02254D',
          borderColor: '#02254D',
        },
      },
    },
  }
});

export default theme;