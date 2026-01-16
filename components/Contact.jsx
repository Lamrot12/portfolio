import React, { useState } from 'react'
import { motion } from "framer-motion"

const contact = ({isDarkMode}) => {
   const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "16dd7f2a-7d97-4bd3-a8d0-995b62e36c22");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div  id='contact' className="w-full px-[12%] py-10 scroll-mt-20 "
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{duration:0.6}}
    >
        <motion.h4 className="text-center mb-2 text-lg font-ovo"
          initial={{y:10, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.4, delay:0.1}}
          viewport={{ once: true }}
        >Connect With Me</motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo"
          initial={{y:10, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.5, delay:0.2}}
          viewport={{ once: true }}
      >Get in touch</motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
          initial={{y:10, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.5, delay:0.3}}
          viewport={{ once: true }}
      >
        I build modern, responsive web apps with clean design and strong performance.
      </motion.p>
      <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.4}}
        viewport={{ once: true }}
      >
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
        <motion.input type='text' placeholder='Enter your name ' required className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  ${isDarkMode?'bg-[#2a004a]/30 border-white/90 ':'bg-white'}  `}   name='name'
          initial={{y:10, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.4, delay:0.5}}
          viewport={{ once: true }}
        />
        <motion.input type='email' placeholder='Enter your email' className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md ${isDarkMode?'bg-[#2a004a]/30 border-white/90 ':' bg-white'}  `} required name='email'
          initial={{y:10, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.4, delay:0.6}}
          viewport={{ once: true }}
        />
        </div>
        <motion.textarea rows='6' placeholder='Enter your message' required className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 ${isDarkMode?'bg-[#2a004a]/30 border-white/90 ':'bg-white '}  `} name='message'
          initial={{y:10, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.4, delay:0.7}}
          viewport={{ once: true }}
        ></motion.textarea>
        <motion.button type='submit' className={`py-3 px-8 w-max flex items-center justify-between gap-2  text-white rounded-full mx-auto duration-500 ${isDarkMode?'bg-transparent border-[0.5px] hover:bg-[#2a004a]':'bg-black/80 hover:bg-black '}`}
          initial={{scale:0.95, opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:0.4, delay:0.8}}
          whileHover={{scale:1.02}}
          viewport={{ once: true }}
        > Submit now</motion.button>
        <motion.p className='mt-4'
          initial={{opacity:0}}
          animate={{opacity: result ? 1 : 0.7}}
        > {result}</motion.p>

      </motion.form>

    </motion.div>
  )
}

export default contact