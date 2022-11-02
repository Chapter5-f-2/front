import { ThemeProvider } from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./shared/styles/GlobalStyle";
import { lightTheme } from "./shared/styles/theme";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Router />
        <GlobalStyle />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
