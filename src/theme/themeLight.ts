// import { createMuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

// Create a theme instance.
const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FED10B',
    },
    secondary: {
      main: '#007b5f',
      contrastText: '#ddd',
    },
    tertiary: {
      main: 'hsl(198, 84%, 46%)',
      contrastText: '#ddd',
    },
    error: {
      main: red.A100,
    },
    warning: {
      main: '#FECC17',
    },
    backgroundDrawer: {
      main: grey[100],
    },
    gradient: {
      primary: {
        main: '#FFFBEB',
        opposite: '#514200',
        '050': '#FFFBEB',
        100: '#FFF4C2',
        200: '#FEEC9A',
        300: '#FEE471',
        400: '#FED934',
        500: '#FED10B',
        600: '#CBA601',
        700: '#8E7401',
        800: '#514200',
        900: '#292100',
      },
      neutrals: {
        '000': '#FFFFFF',
        '050': '#F5F7FA',
        100: '#E4E7EB',
        200: '#CBD2D9',
        300: '#9AA5B1',
        400: '#52667A',
        500: '#313D49',
        600: '#29333D',
        700: '#212931',
        800: '#181F25',
        900: '#101418',
        999: '#080A0C',
      },
    },
    simpsons: {
      yellow: '#FED10B',
      blue: '#139BD7',
      red: '#EF5A30',
      green: '#D4E39E',
    },
  },
});

export default themeLight;

export type ThemeProps = typeof themeLight;
