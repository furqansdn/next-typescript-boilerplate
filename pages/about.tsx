import { useEffect } from 'react';

import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title='About Page'>
      <div className='container'>
        <h1 className='text-5xl font-bold text-blue-600'>About</h1>
      </div>
    </Layout>
  );
}
