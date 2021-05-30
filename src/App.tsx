import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { LightTheme } from "./Theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={LightTheme}>
      <div className="App">
        <header className="App-header">
          <p>
            <StyledButton onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </StyledButton>
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

const StyledButton = styled.button`
  font-size: calc(10px + 2vmin);
  background: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border-style: none;
  padding: 10px 20px;
  transition: 0.1s;
  &:hover {
    background: ${({ theme }) => theme.ButtonNormalHover};
  }
  &:active {
    transform: scale(0.97);
    background-color: ${({ theme }) => theme.ButtonNormalActive};
  }
`;

export default App;
