'use client'
import { Dispatch, SetStateAction } from 'react'
import { FormStateType } from '@/lib/formUtils/formConstants'
import {motion} from 'framer-motion'

function SuccessUI({formState, setFormState}: {
  formState: FormStateType;
  setFormState: Dispatch<SetStateAction<FormStateType>>
}) {
  return (
    <motion.div variants={{
      hidden: {opacity: 0, x: 100},
      visible: {opacity: 1, x: 0},
    }} initial="hidden" animate="visible" transition={{duration: 1.5}} className='font-bold w-full h-full text-4xl flex items-center justify-center gap-y-5 flex-col text-gray-200 text-center' >
      <div>
        Your message has been sent successfully, thank you for participating!
      </div>
        <br />
        <div >
          <button className='px-4 py-2 font-bold text-grey-200 bg-purple-700 rounded-md cursor-pointer
           hover:bg-purple-900 hover:scale-105' onClick={() => setFormState('incomplete')}>
            Back to Home
          </button>
        </div>
    </motion.div>
  )
}

export default SuccessUI
