// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface IThemeContext {
  themes: ITheme;
  handleThemes: () => void;
}
export interface ITheme {
  title: string;

  fontFamily: {
    fontDefault: string;
  };
  color_background: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  boxShadow: {
    primary: string;
  };
}

export interface IThemeProvider {
  children: ReactNode | JSX.Element;
}
