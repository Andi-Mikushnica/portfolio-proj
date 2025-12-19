import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='bg-linear-to-l text-gray-300 from-purple-700 to-purple-800 p-3 rounded-md text-center flex flex-col gap-y-10 py-10 px-6'>
      <h1 className='text-3xl font-bold'>404 - Page Not Found</h1>
      <h2 className='text-gray-200'>Sorry, the page you are looking for does not exist.</h2>
      <Link href="/">
        <button className='text-purple-700 hover:underline cursor-pointer bg-purple-200 font-bold px-4 py-2 rounded-md'>
          Go back to Home
        </button>
      </Link>
    </div>
  )
}

