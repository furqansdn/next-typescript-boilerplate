import Link from 'next/link';
import React from 'react';
Link;

export default function Navbar() {
  return (
    <div className='bg-blue-500'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <a className='font-semibold tracking-tighter text-white uppercase'>
                {process.env.appName}
              </a>
            </Link>
          </div>
          <div className='flex items-center justify-between'>
            <Link href='/about'>
              <a className='px-3 py-5 text-blue-200 hover:text-white'>About</a>
            </Link>

            <Link href='/login'>
              <a className='px-3 py-5 text-blue-200 hover:text-white'>Login</a>
            </Link>

            <Link href='/register'>
              <a className='px-3 py-5 text-blue-200 hover:text-white'>
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
