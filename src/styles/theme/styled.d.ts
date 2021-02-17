import 'styled-components';

type FontWeight = 300 | 400 | 500 | 600 | 700;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      blue: string;
      lightGrey: string;
      white: string;
      dark: string;
    };

    fontColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    fontSize: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    fontWeight: {
      default: FontWeight;
      light: FontWeight;
      regular: FontWeight;
      semiBold: FontWeight;
      bold: FontWeight;
    };

    space: {
      default: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
