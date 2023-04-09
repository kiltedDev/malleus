import { createTheme } from '@mui/material/styles';
import { Caveat, IM_Fell_English_SC } from 'next/font/google';

const fellSC = IM_Fell_English_SC({
  weight: '400',
  subsets: ['latin'],
});

export const caveat = Caveat({ subsets: ['latin'] });

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  typography: {
    body1: {
      color: '#fff',
    },
    body2: {
      fontFamily: fellSC.style.fontFamily,
      color: '#fff',
    },
    title: {
      fontSize: 20,
      fontFamily: fellSC.style.fontFamily,
    },
    subtitle1: {
      fontSize: 14,
      fontFamily: fellSC.style.fontFamily,
      fontStyle: 'italic',
    },
    subtitle2: {
      fontSize: 13,
      fontFamily: fellSC.style.fontFamily,
    },
    flavor: {
      fontFamily: caveat.style.fontFamily,
      fontSize: 16,
    },
  },
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    flavor: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    flavor?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    flavor: true;
  }
}
