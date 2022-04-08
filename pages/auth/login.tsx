import React from 'react';
import Layout from '../../components/Layout';

export default function Login() {
  return (
    <Layout title={process.env.appName}>
      <div className='container'>Login</div>
    </Layout>
  );
}
