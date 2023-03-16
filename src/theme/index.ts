import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const mode = 'light';
const palette = mode === 'light' ? light : dark;

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: palette,
      shadows: shadows(mode),
      typography: {
        h1: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 600,
          fontSize: '3.4rem',
          lineHeight: 1.3,
        },
        h2: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 600,
          fontSize: '2.6rem',
        },
        h3: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 600,
          fontSize: '1.8rem',
        },
        h4: {
          fontFamily: 'Noto Sans, serif',
          fontWeight: 500,
          fontSize: '1rem',
        },
        subtitle1: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 500,
          fontSize: '1.375rem',
        },
        subtitle2: {
          fontFamily: 'Noto Sans, serif',
          fontWeight: 500,
          textTransform: 'uppercase',
          fontSize: '0.8125rem',
        },
        body1: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 500,
          fontSize: '1.125rem',
        },
        body2: {
          fontFamily: 'Source Serif Pro, serif',
          fontWeight: 500,
          fontSize: '0.9333rem',
        },
        caption: {
          fontFamily: 'Noto Sans, serif',
          fontWeight: 400,
          fontSize: '1rem',
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
        MuiLink: {
          styleOverrides: {
            root: {
              fontFamily: 'Noto Sans, serif',
              fontWeight: 500,
              fontSize: '1rem',
            },
          } as ComponentsOverrides['MuiLink'],
        },
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
              fontFamily: 'Noto Sans, serif',
              fontWeight: 500,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              fontFamily: 'Noto Sans, serif',
              fontWeight: 400,
            },
          } as ComponentsOverrides['MuiInputLabel'],
        },
      },
    }),
  );

export default getTheme;
