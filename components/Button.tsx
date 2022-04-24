import React from 'react';

export default function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      className='px-6 py-2.5 font-semibold text-white  rounded-lg shadow-md  focus:outline-none focus:ring-2  focus:ring-opacity-75 bg-blue-500 hover:bg-blue-700 focus:ring-blue-400'
    >
      {children}
    </button>
  );
}
