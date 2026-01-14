import React from 'react';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div id="work"
     initial={{opacity:0}}
        whileInView={{opacity:1 }}
        transition={{duration:1}}
     className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
       initial={{y: -20, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{ delay:0.5,duration:0.5}}
      className="text-center mb-2 text-lg font-ovo">My portfolio</motion.h4>
      <motion.h2 
       initial={{y: -20, opacity:0}}
        whileInView={{y:0 ,opacity:1 }}
        transition={{ delay:0.3,duration:0.5}}
      className="text-center text-5xl font-ovo">My latest work</motion.h2>
      <motion.p
       initial={{opacity:0}}
        whileInView={{opacity:1 }}
        transition={{delay:0.7, duration:0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I build modern, responsive web apps with clean design and strong performance.
      </motion.p>
      <div className={`grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-20  my-10 ${isDarkMode?'text-black':''}`}>
  {workData.map((project, index) => (
<motion.div
  key={index}
  style={{ backgroundImage: `url(${project.bgImage})` }} 
  className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '
>
  <div className='bg-white w-10/12 rounded-md absolute  bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
    <div>
        <h2>{project.title}</h2>
      </div>
      <div className='border rounded-full border-black w-9  aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
      <Image src={assets.send} alt='send icon' className='w-5' />
      </div>

  </div>   
    </motion.div>
  ))}
</div>
<a href="" className={`w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto duration-500  ${isDarkMode?'text-white border-white hover:bg-[#2a004a]':'hover:bg-[#fcf4ff] '}`}>
    Show More <Image src={assets.rightarrow} alt='' className='w-5'/>
  </a> 
</motion.div>
  );
};

export default Work;

