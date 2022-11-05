import {
  ThemeProvider,
  defaultTheme,
  Preflight,
  createGlobalStyle,
  css
} from "@xstyled/styled-components";

const GlobalStyle = createGlobalStyle(css`
  html,
  body {
    min-height: 100%;
    height: 100%;
    background-color: #151515;
    color: white;
  }

  #root {
    height: 100%;
  }

  *,
  *:focus,
  *:active {
    outline: none !important;
  }
`);

const theme = {
  ...defaultTheme,
  colors: {
    background: "#F2F2F2",
    inputBackground: "#F2F2F2",
    menuItemHover: "#F3F7FF",
    primary: "#1E6BF5",
    primaryHover: "#2655BD",
    secondaryText: "#798282"
  }
};

export function Themed({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
