import Head from 'next/head';
import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage';
import Header from '../components/Header';
import HamburguerButton from '../components/HamburguerButton';
import ScrollTop from '../components/ScrollTop';
import { SobreMi } from '../components/SobreMi';
import { ProyectsHome } from '../components/ProyectsHome';
import Footer from '../components/Footer';

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>Porfolio Damián Vigo</title>
      </Head>
      <HeroImage />
      <Header />
      <HamburguerButton />
      <ScrollTop />
      <SobreMi />
      <ProyectsHome />
      <Footer />
    </Layout>
  );
};

export default Index;
