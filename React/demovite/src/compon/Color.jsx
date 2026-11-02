import React from 'react'

function Color() {
  return (
    <div>
        <h1 className='text-5xl bg-gray-500'>Hello data</h1>
        <h1 className='text-5xl bg-sky-300'>Hello data</h1>
        <h1 className='text-5xl bg-amber-400'>Hello data</h1>
        <h1 className='text-5xl bg-green-500'>Hello data</h1>
        <h1 className='text-5xl bg-green-600'>Hello data</h1>
        <h1 className='text-5xl bg-green-700'>Hello data</h1>
        <h1 className='text-5xl bg-linear-to-r from-red-400 to-red-600'>Hello data</h1>
         <h1 className='text-5xl bg-linear-to-l from-red-400 to-red-600'>Hello data</h1>
          <h1 className='text-5xl bg-linear-to-r from-red-400 to-green-600'>Hello data</h1>
           <h1 className='text-5xl bg-linear-to-t from-red-400 to-red-600'>Hello data</h1>
 <h1 className='text-5xl bg-linear-to-r from-red-400 via-gray-500    to-red-600'>Hello data</h1>
    </div>
  )
}

export default Color