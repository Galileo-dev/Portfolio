import React, { Suspense, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { DarkTheme, LightTheme } from "./styles/theme";
import { Button, VARIANT } from "./Components/Button";
import { Section } from "./Components/Section";
import {
  Float,
  MainContainer,
  POSITION,
  SecondaryContainer,
} from "./styles/helpers";
import { Introduction } from "./Components/Blocks/Introduction";
import { GithubRepos } from "./Components/Blocks/GithubRepos";

function App(props: any) {
  const [theme, setTheme] = React.useState(DarkTheme);
  const updateTheme = () => {
    setTheme(theme == DarkTheme ? LightTheme : DarkTheme);
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
          <Section>
            <Introduction />
          </Section>
          <Section>
            <GithubRepos />
          </Section>
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
