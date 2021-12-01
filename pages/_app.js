import { ThemeProvider } from 'next-themes';

import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider storageKey="theme" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
