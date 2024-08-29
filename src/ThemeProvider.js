import React from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor || "#EBEBE3"};
  }
`;

const ThemeProvider = ({ theme, children }) => (
  <StyledThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </StyledThemeProvider>
);

export default ThemeProvider;
