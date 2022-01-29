import SEO from '../src/components/foundation/SEO';
import GlobalStyle from '../src/theme/GlobalStyle';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <SEO />
    <Component {...pageProps} />
  </>
);
export default App;
