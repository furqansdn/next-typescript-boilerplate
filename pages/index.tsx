import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <div className='container'>
        <h1 className='text-5xl font-bold text-blue-600'>Welcome nextJs</h1>
      </div>
    </Layout>
  );
}

