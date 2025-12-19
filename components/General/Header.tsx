'use client';

import { useState } from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation';

function Header() {
    const [hidden, setHidden] = useState<boolean>(false)
    const pathname = usePathname();
    const rawSlug = pathname.split("/")[1];

    type PageSlug = "home" | "about" | "portfolio" | "getintouch" | "privacypolicy";

    const pageTitles: Record<PageSlug, string> = {
      home: "Home",
      about: "About Me",
      portfolio: "Portfolio",
      getintouch: "Get In Touch",
      privacypolicy: "Privacy Policy",
    };

    const slug = (rawSlug in pageTitles ? rawSlug : "home") as PageSlug;
    const pageName = pageTitles[slug];

  return (
        <header className='mb-2'>
          <nav className="flex justify-center items-center bg-gray-900 px-2 py-2 border-gray-600">
            <Navbar smallNavState={hidden} pageName={pageName}/>
          </nav>
          <div className='mt-2 text-white shadow-2xl'>
              <h1 className='flex bg-linear-to-t from-gray-900 to-gray-950 h-20 justify-center text-xl font-bold items-center'>{pageName}</h1>
          </div>
        </header>
  )
}

export default Header
