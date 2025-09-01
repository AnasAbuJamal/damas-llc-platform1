import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#fdf9f2ff', 
    },
    text: {
      primary: '#2e2e2e', 
    },
    secondary: {
      main: '#c8a98b', 
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
    }
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
    },
  },
});