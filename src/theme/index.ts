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
        fontFamily: 'Noto Serif, serif',
        h1: {
          fontSize: '3.6rem',
          fontWeight: 600,
        },
        h2: {
          fontSize: '2.6rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.25rem',
          fontWeight: 600,
        },
        h4: {
          fontSize: '1rem',
          fontFamily: 'Noto Sans, sans-serif',
        },
        subtitle1: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        button: {
          textTransform: 'none',
          fontFamily: 'Noto Sans, sans-serif',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
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
