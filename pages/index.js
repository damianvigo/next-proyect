import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';
import Users from '../components/Users';

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>Next.js Proyect - HOME</title>
      </Head>
      <h1>Next</h1>
      <Users users={props.users} />
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users');
  const resJSON = await res.json();
  return { users: resJSON.data };
};
export default Index;
