import { DefaultTheme } from 'styled-components';

const baseSpace = 8;

export const theme: DefaultTheme = {
  color: {
    blue: '#61dafb',
    lightGrey: '#f7f7f7',
    white: '#fff',
    dark: '#20232a'
  },
  fontColor: {
    primary: '#1a1a1a',
    secondary: '#424242',
    tertiary: '#61dafb'
  },
  fontSize: {
    default: '1rem',
    xs: '.75rem',
    sm: '.9rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.4rem',
    xxl: '1.8rem'
  },
  fontWeight: {
    default: 400,
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700
  },
  space: {
    default: `${baseSpace}px`,
    xxs: `${baseSpace / 2}px`,
    xs: `${baseSpace}px`,
    sm: `${baseSpace * 1.5}px`,
    md: `${baseSpace * 2}px`,
    lg: `${baseSpace * 3}px`,
    xl: `${baseSpace * 4}px`,
    xxl: `${baseSpace * 5}px`
  }
};

type Space = typeof theme.space;
const themeSpaces: Space = theme.space;

export { themeSpaces };
export default theme;
