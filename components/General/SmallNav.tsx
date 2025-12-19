'use client'

import Link from 'next/link'
import { navList } from '@/lib/GeneralUtils/nav'

export default function SmallNav({
    hidden,
    onCloseAction,
}: {
    hidden: boolean;
    onCloseAction: () => void;
}) {
    return (
        <div className={`${hidden ? "hidden" : "fixed"} md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col`}>
            {/* Close Button */}
            <div className='flex justify-end p-6'>
                <button onClick={onCloseAction} className='text-4xl text-purple-500 hover:text-gray-300'>
                    <i className='bx bx-x'></i>
                </button>
            </div>

            {/* Navigation Menu */}
            <div className='flex flex-col items-center justify-center flex-1'>
                <ul className='flex flex-col text-2xl text-center w-full group'>
                    {navList.map(({slug, label}) => {
                        return (
                            <li key={label} className='w-full hover:bg-gray-600 py-5'>
                                <Link 
                                    href={`/${slug}`}
                                    className='text-gray-50 hover:text-gray-200 transition-colors
                                     w-screen group-hover:opacity-20 hover:opacity-100'
                                    onClick={onCloseAction}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
