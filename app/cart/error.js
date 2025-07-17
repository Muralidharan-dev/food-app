'use client'

import React from 'react';

export default function Error({ error, reset }) {
  return (
    <div className='h-[80vh] w-full justify-center items-center flex flex-col'>
      <div className='m-auto text-center'>
        <img src='/cartFailure.png' className='h-[200px] w-[200px]' alt='Cart error' />
        <h1 className='font-bold text-2xl m-5'>Error in loading cart</h1>
        <button
          onClick={() => reset()}
          className='bg-black text-white px-4 py-2 rounded'
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
