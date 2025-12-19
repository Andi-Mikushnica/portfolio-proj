'use client'
import { useState } from 'react'
import Modal from './Modal'
import ProjectDisplay from './ProjectDisplay'
import Image from 'next/image'
import { modals } from '@/lib/AboutUtils/constants'
import {motion} from 'framer-motion'


function PortfolioUI({image, text}: {
  image: string,
  text: string,
}) {
    const [open, setOpen] = useState<boolean>(false)
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const currentModal = modals[activeIndex]

  return (
    <div>
        <ProjectDisplay open={open} setOpen={setOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      <Modal open={open} setOpen={setOpen} color={"blue"}>
        <motion.div variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1},
        }} initial="hidden" animate="visible" transition={{duration: 1.5}} className='p-4 text-center shadow-xl bg-linear-to-r from-purple-700
         to-blue-800 w-[60vw] h-[80vh] 
         rounded-2xl border-5 flex flex-col xl:flex-row justify-center space-y-4 items-center text-gray-200 lg:space-x-4'>
              <Image className='rounded-xl' src={currentModal.imgPath} width={400} height={200} alt={currentModal.title}/>
              <p className='text-md lg:text-lg text-wrap' >
                <span className='font-bold text-3xl'>{currentModal.title}</span> {currentModal.text}
              </p>
        </motion.div>
      </Modal>
    </div>
  )
}

export default PortfolioUI
