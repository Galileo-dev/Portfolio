// theme.ts
import { DefaultTheme } from "styled-components";

export const secondaryTheme: DefaultTheme = {
  borderRadius: "7px",
  background:
    "url(https://unsplash.com/photos/hGV2TfOh0ns/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ5ODAyNjM4)",
  palette: {
    common: {
      black: "#222222",
      white: "#ffffff",
    },
    primary: {
      main: "#d4d4d4",
      contrastText: "#1f1f1f",
    },
    secondary: {
      main: "#cacaca",
      contrastText: "#363636",
    },
    surface: {
      main: "#1d1d1d",
      contrastText: "#d4d4d4",
    },
    card: {
      main: "#1d1d1d",
      contrastText: "#d4d4d4",
    },
    card_surface: {
      main: "#636363",
      contrastText: "#C1C1C1",
    },
  },
};

export const defaultTheme: DefaultTheme = {
  borderRadius: "7px",
  background: "#2D2D2D",
  palette: {
    common: {
      black: "#181818",
      white: "#ffffff",
    },
    primary: {
      main: "#222222",
      contrastText: "#93C5FD",
    },
    secondary: {
      main: "#3C3C3C",
      contrastText: "#FFFFFF",
    },
    surface: {
      main: "#2D2D2D",
      contrastText: "#C1C1C1",
    },
    card: {
      main: "#313131",
      contrastText: "#FFFFFF",
    },
    card_surface: {
      main: "#636363",
      contrastText: "#FFFFFF",
    },
  },
};
