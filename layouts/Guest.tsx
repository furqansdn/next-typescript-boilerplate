import React from 'react';

export default function App({ children }: any) {
  return (
    <div className='flex items-center justify-center min-h-screen bg-pink-500'>
      <div className='w-1/3'>
        <div className='p-6 bg-white shadow rounded-xl'>{children}</div>
      </div>
    </div>
  );
}
