import SEO from '../src/components/foundation/SEO';
import GlobalStyle from '../src/theme/GlobalStyle';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    {/* <ThemeProvider theme={theme}> */}
    <SEO />
    <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </>
);
export default App;
