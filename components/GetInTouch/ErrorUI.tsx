'use client';
import { FormStateType } from '@/lib/formUtils/formConstants';
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

function ErrorUI({formState, setFormState}: {
  formState: FormStateType;
  setFormState: Dispatch<SetStateAction<FormStateType>>
}) {

  return (
      <div className='flex justify-center flex-col items-center h-full'>
        <p className="text-gray-300 text-3xl flex justify-center 
         text-center  py-5 rounded-3xl font-bold">
          Oops! There was an error loading the page. Please try again later.
        </p>
        <div className="
         flex justify-center items-center mt-4">
          <button onClick={() => setFormState('incomplete')} className="bg-purple-900 shadow-md text-gray-300 px-6 py-2 rounded-2xl hover:bg-purple-950 cursor-pointer">Go back</button>
        </div>
      </div>
  )
}

export default ErrorUI
