'use client';
import { motion } from 'framer-motion';

function InfoCard({header, description, color}: {
    header: string,
    description: string,
    color: string,
}) {
  return (
    <motion.div variants={{
      hidden: { opacity: 0},
      visible: {opacity: 1}
    }} initial="hidden" whileInView="visible" transition={{duration: 1.5
    }} className={`bg-linear-to-b from-${color}-500 to-${color}-700  hover:scale-120 transition-all 3000s 
    text-gray-100 max-w-[600px] flex flex-col md:flex-row space-x-5 space-y-2 justify-center items-center rounded-2xl p-4 shadow-md border-5 border-gray-200`}>
      <h1 style={{fontWeight: "bolder",
        fontSize: "30px",
         borderBottom: "3px white solid"
         }}>
        {header}
      </h1>
      <p style={{padding: "2px"}}>
        {description}
      </p>
    </motion.div>
  )
}

export default InfoCard
