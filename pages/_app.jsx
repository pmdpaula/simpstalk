import GlobalStyle from '../src/theme/GlobalStyle';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    {/* <ThemeProvider theme={theme}> */}
    <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </>
);
export default App;
