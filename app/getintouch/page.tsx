import React from 'react'
import { Metadata } from 'next'
import Form from '@/components/GetInTouch/Form'
Form

export const metadata: Metadata = {
    title: "Andin | Get In Touch",
    description: "Get in touch with me."
}

function GetInTouchPage(){
  return ( 
    <div className='w-full h-full flex flex-col md:flex-row space-y-4
     shadow-2xl px-5 py-6 space-x-5 justify-center items-center'>
      <div className='hidden h-full text-center bg-linear-to-r from-blue-500 shadow-2xl to-purple-600 items-center text-nowrap rounded-2xl  md:flex flex-col justify-center'>
          <h1 className='text-3xl font-bold p-7  text-gray-300 '>Let's connect!</h1>
      </div>
      <div className='w-full h-full'>
        <Form />
      </div>
    </div>
  )
}

export default GetInTouchPage