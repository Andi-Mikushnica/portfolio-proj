'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { navList } from '@/lib/GeneralUtils/nav'
import SmallNav from './SmallNav'

export default function Navbar({
    smallNavState,
    pageName,
}: {
    smallNavState: boolean;
    pageName: string;
}) {

    const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <div className='flex justify-between items-center text-gray-50 w-full'>
        {/*----- LOGO -----*/}
        <div className='bg-purple-600'>
            <Image src="/logo2.png" width={80} height={80} alt="Andin logo"/>
        </div>
        {/*----- TABS -----*/}
        <div className='hidden md:flex'>
            <ul className='flex justify-between items-center gap-x-10 text-lg group'>
                {navList.map( ({slug, label}) => {
                    return (
                        <li key={slug} className={`${pageName == label ? "opacity-100  font-bold": "opacity-30"} group-hover:opacity-20 hover:opacity-100`}>
                            <Link href={`/${slug}`}>
                                {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        {/*------ small screen size ? menu icon : get in touch button */}
        <div>
            <Link href="/getintouch">
                <button className='bg-blue-800 text-white hover:bg-blue-900
                cursor-pointer hover:font-bold px-5 py-2 shadow-md hidden md:flex'>
                    Hire Me
                </button>
            </Link>
            <div className='flex md:hidden'>
                <button className='bx bx-menu text-5xl cursor-pointer text-purple-500 hover:text-purple-700 overflow-hidden' onClick={() => setIsHidden(!isHidden)}></button>
                <SmallNav hidden={isHidden} onCloseAction={() => setIsHidden(true)}/>
            </div>
        </div>
    </div>
  )
}