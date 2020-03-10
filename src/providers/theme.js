import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    useNextVariants: true,
    fontFamily: 'IRANYekanFaNum',
    fontSize: 14,
    headline: {
      fontFamily: 'IRANYekanFaNum'
    },
    display2: {
      fontFamily: 'IRANYekanFaNum'
    },
    display3: {
      fontFamily: 'IRANYekanFaNum'
    },
    display4: {
      fontFamily: 'IRANYekanFaNum'
    },
    display1: {
      fontFamily: 'IRANYekanFaNum'
    },
    button: {
      fontFamily: 'IRANYekanFaNum'
    },
    body2: {
      fontFamily: 'IRANYekanFaNum'
    },
    caption: {
      fontFamily: 'IRANYekanFaNum'
    },
    title: {
      fontFamily: 'IRANYekanFaNum'
    },
    subheading: {
      fontFamily: 'IRANYekanFaNum'
    },
    body1: {
      fontFamily: 'IRANYekanFaNum'
    }
  },
  shadows: 'none|'.repeat(24).split('|'),
  shape: { borderRadius: 4 },
  palette: {
    tonalOffset: 0.2,
    background: { paper: '#fff', default: '#F5F6F8' },
    contrastThreshold: 3,
    grey: {
      '50': '#F9F9FC',
      '100': '#F2F2F5',
      '200': '#EAEAED',
      '300': '#DADADD',
      '400': '#B7B7B9',
      '500': '#97979A',
      '600': '#6F6F71',
      '700': '#5B5B5D',
      '800': '#3C3C3F',
      '900': '#1C1C1E',
      A700: '',
      A100: '',
      A400: '',
      A200: ''
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    secondary: {
      main: '#05BEDA',
      light: '#E0F7FB',
      dark: '#03AEC7',
      contrastText: '#fff'
    },
    common: { black: '#000', white: '#fff' },
    error: {
      light: '#FFEAEE',
      main: '#EC1533',
      dark: '#CD0025',
      contrastText: '#fff'
    },
    type: 'light',
    action: {
      hoverOpacity: 0.08,
      hover: 'rgba(0, 0, 0, 0.08)',
      selected: 'rgba(0, 0, 0, 0.14)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      active: 'rgba(0, 0, 0, 0.54)'
    },
    primary: {
      main: '#2F4AA1',
      light: '#EDF0FA',
      dark: '#1D3789',
      contrastText: '#fff'
    }
  }
});

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;