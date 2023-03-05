import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const mode = 'light';

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        h1: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 600,
          fontSize: '3.3rem',
          lineHeight: 1.3,
        },
        h2: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 600,
          fontSize: '2.8rem',
        },
        h3: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 600,
          fontSize: '1.25rem',
        },
        h4: {
          fontFamily: 'Noto Sans, serif',
          fontWeight: 500,
          fontSize: '1rem',
        },
        subtitle1: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 400,
          lineHeight: 1.4,
          fontSize: '1.8rem',
        },
        body1: {
          fontFamily: 'Source Serif Pro',
          fontWeight: 400,
          fontSize: '1.4rem',
        },
        body2: {
          fontFamily: 'Noto Serif, serif',
          fontWeight: 500,
          fontSize: '0.875rem',
        },

        button: {
          textTransform: 'none',
          fontFamily: 'Noto Sans, serif',
          fontWeight: 500,
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 500,
              borderRadius: 23,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 50,
              paddingRight: 50,
            },
          } as ComponentsOverrides['MuiButton'],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
              background: 'white',
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
    }),
  );

export default getTheme;
