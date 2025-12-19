'use client';

import Image from "next/image";
import Link from "next/link";
import { smList } from "@/lib/HomeUtils/constants";
import {motion} from "framer-motion";

export default function HomeMain() {
  return (
    <>
 {/* ---------- .PNG PHOTO OF ME ---------*/}
        <motion.div variants={{
            slideRightB: {opacity: 0, x: -200},
            slideRightA: { opacity: 1, x: 0},
        }} initial="slideRightB" animate="slideRightA" transition={{duration: 0.5}} className="hidden md:flex bg-linear-to-l from-gray-900
         to-purple-950 border-y-5 border-l-5 border-purple-700 pt-3">
          <Image src="/picture1.png" width={475} height={100} alt="picture" loading="eager" className="hover:scale-110 transition-transform duration-1000"/>
        </motion.div>
        {/* ---------- RIGHT-SIDE CONTAINER ---------*/}
        <motion.div variants={{
            slideLeftB: { x: 200},
            slideLeftA: { x: 0}
        }} initial="slideLeftB" animate="slideLeftA" transition={{duration: 0.5}} className="flex flex-col justify-center space-y-6 h-full
            border-blue-700 md:ml-3 md:border-y-5  md:border-blue-700
              md:border-r-5 p-4">
            {/* ---------- INTRO TEXT CONTAINER ---------*/}
          <div
          className="bg-gray-900 w-full py-5 border-b-2 border-gray-700">
            <h1 className="text-gray-100 text-5xl mb-2 text-shadow-md text-shadow-black">
                Hi, I'm <span className="text-blue-600 font-medium text-shadow-md text-shadow-black">Andin</span> Mikushnica.
            </h1>
            <p className="text-gray-100 text-2xl text-shadow-md text-shadow-black">
                  A Freelance Web Developer.
            </p>
          </div>
            {/* ---------- BUTTON AND SOCIAL MEDIA ICON DIV CONTAINER ---------*/}
            <div className="flex flex-row justify-between space-x-4 bg-gray-900  shadow-md p-2">
              {/* ---------- DOWNLOAD CV BUTTON ---------*/}
              <a className=" bg-blue-700 text-white px-4 text-lg 
              cursor-pointer hover:bg-blue-950 border-transparent rounded-lg flex items-center"
               href="./AndinMIK-CV.pdf" download>
                Download CV
              </a>
              {/* -------- SOCIAL MEDIA ICONS ---------- */}
              <div className="flex justify-between items-center ">
                <ul>
                  {smList.map(({socialMediaLink, path, alt}, index) => {
                    return(
                      <li key={index}>
                        <Link href={socialMediaLink}>
                          <Image src={path} className="border-transparent border-l
                        hover:border-gray-500" width={45} height={50} alt={alt} />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                </div>
            </div>
        </motion.div>
        </>
  )
}