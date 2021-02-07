import Router from 'next/router';
import NProgress from 'nprogress';
import Page from '../components/Page';
// custom styles for progress bar
import '../components/styles/nprogress.css';
// import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}