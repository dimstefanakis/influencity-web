// import App from 'next/app'
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import LogRocket from 'logrocket';
import Layout from '../src/flat/Layout';
import '../styles/global.css';
import 'antd/dist/antd.css';

LogRocket.init('troosh/troosh');

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Troosh</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
