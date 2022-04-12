import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'></div>
    </Layout>
  );
}
