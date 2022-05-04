import React, { Suspense, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { defaultTheme, secondaryTheme } from "./styles/theme";
import { Button, VARIANT } from "./Components/Button";
import { Section } from "./Components/Section";
import {
  Float,
  MainContainer,
  POSITION,
  SecondaryContainer,
} from "./styles/helpers";
import { Introduction } from "./Components/Blocks/Introduction";

function App(props: any) {
  const [theme, setTheme] = React.useState(defaultTheme);
  const updateTheme = () => {
    setTheme(theme == defaultTheme ? secondaryTheme : defaultTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Float position={POSITION.TOPLEFT}>
        <Button variant={VARIANT.PRIMARY} onClick={updateTheme}>
          Theme
        </Button>
      </Float>
      <MainContainer>
        <SecondaryContainer>
          <Introduction />
          <Section></Section>
          <Section></Section>
        </SecondaryContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
`;

export default App;
