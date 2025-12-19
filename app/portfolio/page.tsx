import { Metadata } from 'next'
import PortfolioUI from '@/components/Portfolio/PortfolioUI'

export const metadata: Metadata = {
    title: "Andin | Portfolio",
    description: "The work I have done."
}

export default function PortfolioPage() {
  return (
      <div className='w-full h-full shadow-xl flex flex-col justify-center items-center md:space-y-10 bg-linear-to-r
       from-blue-800 to-purple-700'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-200'>PROJECTS</h1>
        </div>
        <PortfolioUI />
        <p className='bg-purple-200 text-purple-800 px-10 py-2 border-purple-950 font-extrabold rounded-xl'>
          (Many more to be added soon!)
        </p>
      </div>
  )
}