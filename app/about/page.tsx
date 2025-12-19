import { Metadata } from 'next'
import {cards} from '../../lib/AboutUtils/constants'
import InfoCard from '@/components/About/InfoCard'

export const metadata: Metadata = {
    title: "Andin | About",
    description: "Learn about me"
}

export default function About() {
  return (
    <div className='w-full flex flex-col justify-between items-center text-gray-100 text-center bg-gray-900 p-5 space-y-10'>
      {
        cards.map( (card, index) => {
          return (
            <div key={index}>
              <InfoCard header={card.header} description={card.description} color={index % 2 == 0 ? "blue" : "purple"} />
            </div>
          )
        })
      }
    </div>
  )
}