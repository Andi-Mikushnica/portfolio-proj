import { Metadata } from 'next'
import PrivacyMenu from '@/components/PrivacyPolicy/PrivacyMenu'
import { tabs } from '@/lib/PrivacyUtils/constants'

export const metadata: Metadata = {
    title: "Andin | Privacy Policy",
    description: "Privacy Policy Page"
}


// obj of all tabs in menu
function Privacy() {

  return (
    <div className='flex flex-col justify-center h-full w-full items-center text-gray-900'>
        {
          tabs.map( ({num, title, text}) => {
            return (
              <div key={num} className='w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] p-2'>
                <PrivacyMenu num={num} title={title} text={text}/>
              </div>
            )
          })
        }
    </div>
  )
}

export default Privacy
