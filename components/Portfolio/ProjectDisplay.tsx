'use client';
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { arrImgs, TypeImgs } from '@/lib/PortfolioUtils/constants';

type Direction = "left" | "right";

    export default function ProjectDisplay({open, setOpenAction, activeIndex, setActiveIndexAction}: {
        open: boolean;
        setOpenAction: Dispatch<SetStateAction<boolean>>;
        activeIndex: number;
        setActiveIndexAction: Dispatch<SetStateAction<number>>;
    }) {

    const activeImg: TypeImgs = useMemo( () => arrImgs[activeIndex], [activeIndex])

    const toggleState = (d: Direction) => {
        setActiveIndexAction( (prev) => {
            if (d === "right"){
                return prev < arrImgs.length - 1 ? prev + 1 : prev;
            }
            if (d === "left"){
                return prev > 0 ? prev - 1 : prev;
            }
            return prev;
        })
    }

    return (
            <div className='flex flex-col md:flex-row items-center'>
            <div className='cursor-pointer'>
                <button className='bxr  bxs-arrow-right-square bx-flip-horizontal text-6xl text-orange-100
                hover:text-orange-200 cursor-pointer' onClick={() => toggleState("left")} ></button>
            </div>
            <div className='px-3'>
                <div className='relative group'>
                    {/* Image */}
                    <motion.div variants={{
                        hidden: {opacity: 0, y: 100},
                        visible: { opacity: 1, y: 0},
                    }} initial="hidden" animate="visible" transition={{duration: 0.5
                    }} className=' p-1 rounded-xl shadow-2xl transition-transform duration-3000s'>
                        <button onClick={() => setOpenAction(true)} className='bg-purple-500
                         text-gray-100 rounded-md p-2 font-bold absolute right-0 bottom-20 translate-x-[-50%] border-4 border-orange-50 shadow-md cursor-pointer
                         hover:scale-110 transition-all duration-300
                         '>Learn More</button>
                        <Image src={activeImg.src} width={600} height={400} alt={activeImg.name} className='rounded-2xl' />
                    </motion.div>
                    {/* Button + Animation*/}

                    <div className='group absolute bottom-5 left-0 lg:group-hover:left-20 :group-hover:left-5
                    opacity-0 group-hover:opacity-100  transition-all 1000s ease-in-out flex items-start justify-center hover:cursor-auto'>
                        <h1 className='opacity-0 group-hover:opacity-100
                        transition 3000s text-gray-200 font-bold bg-purple-500 py-2 px-5 rounded-xl hover:bg-purple-800
                        shadow-xl hover:cursor-pointer border-2 border-gray-100'>
                            <a href={activeImg.liveDemoLink ? activeImg.liveDemoLink : activeImg.linkedInPost} target="_blank" rel="noopener noreferrer">
                            <span className='font-light'>
                                INTERESTED?
                            </span>  CLICK ME FOR {activeImg.liveDemoLink ? "THE LIVE DEMO" : "MY LINKEDIN POST"}.</a>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='cursor-pointer'>
                <button className='bxr  bxs-arrow-left-square bx-flip-horizontal text-6xl text-orange-100
                hover:text-orange-200 cursor-pointer' onClick={() => toggleState("right")}></button> 
            </div>
            </div> 
    )
    }