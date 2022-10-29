import { ThemeProvider } from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./shared/styles/GlobalStyle";
import { lightTheme } from "./shared/styles/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
