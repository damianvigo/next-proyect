import Head from 'next/head';
import Navigation from './Navigation';

const Layout = (props) => (
  <div>
    <Head>
      <title>Next.js Proyect</title>
    </Head>
    <Navigation />
    <div>{props.children}</div>
  </div>
);

export default Layout;
