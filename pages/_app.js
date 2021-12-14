import { ThemeProvider } from 'next-themes';
import LayoutHeader from '../common/layout';
import AppWidth from '../common/layout/AppWitdh';
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider storageKey="theme" enableSystem={true}>
      <LayoutHeader />
      <AppWidth>
        <Component {...pageProps} />
      </AppWidth>
    </ThemeProvider>
  );
};

export default MyApp;
