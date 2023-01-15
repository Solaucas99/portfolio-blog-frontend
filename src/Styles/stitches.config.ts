import { createStitches } from '@stitches/react';

export const { createTheme, globalCss, styled } = createStitches({
  media: {
    sm: '(min-width: 340px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },

  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',

      background: '#EFDCF9',
      backgroundSecondary: '#FFEEF2',
      textPrimary: '#323E42',
      textSecondary: '#B191FF',
      box: '#C55FFC',
      boxShadow: 'rgba(0,0,0,0.35)',
      backgroundGradient: 'linear-gradient(45deg, #552586, #B589D6)',
      postBackground: '#DDDDDD',
      navbarBackground: '#ECECEC',
      navbarMenuText: '#FFF',
    },
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    hiContrast: 'hsl(206,2%,93%)',
    loContrast: 'hsl(206,8%,8%)',

    gray100: 'hsl(206,8%,12%)',
    gray200: 'hsl(206,7%,14%)',
    gray300: 'hsl(206,7%,15%)',
    gray400: 'hsl(206,7%,24%)',
    gray500: 'hsl(206,7%,30%)',
    gray600: 'hsl(206,5%,53%)',

    background: '#343434',
    backgroundSecondary: '#595758',
    textPrimary: '#EEEEEE',
    textSecondary: '#7954A1',
    box: '#C55FFC',
    boxShadow: 'rgba(255,255,255,0.35)',
    backgroundGradient: 'linear-gradient(45deg, #923CB5, #000000)',
    postBackground: '#232323',
    navbarBackground: '#353535',
    navbarMenuText: '#CACACA',
  },
});

const globalStyles = globalCss({
  '*': {
    margin: '0 auto',
    padding: '0',
    boxSizing: 'border-box',
    fontFamily: '"Montserrat", sans-serif;"',
  },
  body: {
    display: 'flex',
    flex: '1',
    width: '100%',
    height: '100vh',
    background: '$background',
  },
  'div#root': {
    width: '100%',
    height: '100%',
  },
});

globalStyles();
