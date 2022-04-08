import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout(props: any) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel='icon'
          href='https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png'
        />
      </Head>
      <Navbar />
      <div className='mt-8'>{props.children}</div>
    </div>
  );
}
