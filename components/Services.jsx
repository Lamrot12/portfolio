import React from 'react'
import { assets, services } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "framer-motion"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
     initial={{opacity:0}}
        whileInView={{opacity:1 }}
        transition={{duration:1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4  
       initial={{y: -20, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{duration:0.3, delay:0.5}}
      className='text-center mb-2 text-lg font-ovo'>What I Offer</motion.h4>
      <motion.h2   
       initial={{y: -20, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-ovo'>My Services</motion.h2>
      <motion.p
       initial={{opacity:0}}
        whileInView={{opacity:1 }}
        transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I am a web developer who creates modern, responsive digital solutions with a focus on clean design and efficient development. Here are the services I offer:
      </motion.p>

      <motion.div
      initial={{opacity:0}}
        whileInView={{opacity:1 }}
        transition={{duration:0.6, delay:0.9}}
       className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {services.map(({ icon, title, description, link }, index) => (
          <motion.div whileHover={{scale:1.05}}
            key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer ${
              isDarkMode
                ? 'hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#fff]'
                : 'hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'
            }`}
          >
            <Image src={icon} alt='' className='w-10' />
            <h3 className={`text-lg my-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              {title}
            </h3>
            <p className={`text-sm leading-5 ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more <Image src={assets.rightarrow} alt='' className='w-5' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
