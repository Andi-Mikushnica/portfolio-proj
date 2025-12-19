'use client'

import React, { useEffect, useState } from 'react'

function PrivacyMenu({ num, title, text }: {
  num: number,
  title: string,
  text: string,
}) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='w-full'>
      <div className='bg-blue-800 text-gray-200 p-3 rounded-md'>
        <div className="flex justify-between items-center">
          <h2 className='text-xl sm:text-2xl font-medium'>{num}. {title}</h2>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className='text-3xl sm:text-4xl cursor-pointer hover:text-gray-300 p-1'
          >
            {open ? '−' : '+'}
          </button>
        </div>

        {/* Inline collapsible for medium+ screens */}
        <div className={`hidden md:block mt-4 border-t pt-3 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className='text-lg'>{text}</p>
        </div>
      </div>

      {/* Fixed overlay for small screens */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex items-start justify-center p-4 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div onClick={() => setOpen(false)} className='absolute inset-0 bg-black bg-opacity-40' />
        <div className={`relative mt-20 w-full max-w-xl rounded-md bg-blue-800 text-gray-200 p-4 transform transition-transform duration-300 ${open ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}`}>
          <div className='flex justify-between items-start'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <button onClick={() => setOpen(false)} className='text-2xl p-1 hover:text-gray-300'>×</button>
          </div>
          <div className='mt-3'>
            <p className='text-base leading-relaxed'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyMenu
