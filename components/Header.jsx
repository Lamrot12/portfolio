import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const Header = ({isDarkMode}) => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Web developer based in Ethiopia"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i += 1
      if (i >= fullText.length) {
        clearInterval(timer)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type:'spring', stiffness:100}}>
        <Image src={assets.photo} alt="Profile photo of Lamrot Tariku" className='w-32 rounded-full' priority sizes="(max-width: 640px) 8rem, 8rem"/> 
        </motion.div>
      <motion.h3 
       initial={{y: -20, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{duration:0.6, delay:0.3}}
      className='flex items-end  gap-2 text-xl md:text-2xl mb-3 font-ovo'> Hi! I'm Lamrot Tariku <Image src={assets.hand} alt="waving hand" className='w-6'/></motion.h3>
      <motion.h1
      initial={{y: -30, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{duration:0.8, delay:0.5}}   
       className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        {typedText}
       </motion.h1>
    <motion.p  initial={{y: -30, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{duration:0.6, delay:0.7}}   className='max-w-2xl mx-auto font-ovo'>
    I’m  4th year  Information Systems student passionate about web development. 
    I enjoy building real-world projects and continuously improving my skills.
    </motion.p>
    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
        initial={{y: 30, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{duration:0.6, delay:1}} 
        href="#contact" className={`px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 
          ${isDarkMode?'bg-transparent':''}   `}>Contact me   <Image src={assets.rightarrow} alt="right arrow" className="w-4 "/></motion.a>
        <motion.a  
         initial={{y: 30, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
         transition={{duration:0.6, delay:1.2}} 
        href="../assets/Lamrot-Tariku-Shire-FlowCV-Resume-20251009.pdf" download className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2   ${isDarkMode?'text-black bg-white':''}`}> my resume <Image src={assets.download} alt="download icon" className="w-4"/></motion.a>
    </div>
</div>
  )
}

export default Header

