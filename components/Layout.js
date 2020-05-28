import Head from 'next/head';
import Navigation from './Navigation';

const Layout = (props) => (
  <div>
    <Head>
      <title>Next.js Proyect</title>
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css' />
    </Head>
    <Navigation />
    <div className='container p-4'>{props.children}</div>
  </div>
);

export default Layout;
