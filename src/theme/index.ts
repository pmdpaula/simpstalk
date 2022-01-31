import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface Palette {
    tertiary: {
      main: string;
      contrastText: string;
    };
    backgroundDrawer: {
      main: string;
    };
    gradient: {
      primary: {
        main: string;
        opposite: string;
        '050': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
      };
      neutrals: {
        '050': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
        '999': string;
      };
    };
    simpsons: {
      yellow: string;
      blue: string;
      red: string;
      green: string;
    };
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions {
    tertiary?: {
      main?: string;
      contrastText?: string;
    };
    backgroundDrawer?: {
      main: string;
    };
    gradient: {
      primary: {
        main: string;
        opposite: string;
        '050': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
      };
      neutrals: {
        '000': string;
        '050': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
        '999': string;
      };
    };
    simpsons: {
      yellow: string;
      blue: string;
      red: string;
      green: string;
    };
  }
}

// interface SimplePaletteColorOptions {
//   backgroundDrawer?: {
//     main: string;
//   };
// }

export const overridesTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          // WebkitFontSmoothing: 'auto',
          height: '100%',
          fontFamily: "'Roboto', sans-serif",
        },
        body: {
          overflowY: 'scroll',
        },
      },
    },
  },
});

// Create a theme instance.
// const theme = createTheme({
//   ...overridesTheme,
//   palette: {
//     primary: {
//       main: '#55dd11',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

// export default theme;
