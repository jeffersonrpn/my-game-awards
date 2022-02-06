import { createTheme } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: lightGreen
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
    h1: {
      fontFamily: "'Rowdies', sans-serif"
    }
  }
});

export default theme;