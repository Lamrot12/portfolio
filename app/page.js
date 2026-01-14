'use client'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(()=>{
    if(
      localStorage.theme === 'force-dark' ||
      (!('force-dark' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true)
    } else{
      setIsDarkMode(false)
    }
  },[])

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('force-dark');
    localStorage.theme = 'force-dark';
  } else {
    document.documentElement.classList.remove('force-dark');
    localStorage.theme = '';
  }
}, [isDarkMode]);

  return (
   <div>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode} />
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
   </div>
  );
}

