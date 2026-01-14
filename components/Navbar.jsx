import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  const navBaseClasses = `w-full fixed top-0 left-0 z-50 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between`

  
  const navOriginalPadding = 'py-4'

  
  const navScrolledPadding = 'pt-4 pb-8'

  
  const desktopMenuBase = 'hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50'

  const desktopMenuDark = 'bg-[#5b5163ff] border border-white/50 bg-transparent'
  const desktopMenuLight = 'bg-white shadow-sm bg-opacity-50 dark border border-white/50 bg-transparent'

  
  const desktopMenuClass = isDarkMode ? desktopMenuDark : desktopMenuLight

  const navScrolledBg = isDarkMode && scrolled ? 'bg-[#11001f] border-b border-[#11001f] shadow-md' : ''

  const navPaddingClass = isDarkMode && scrolled ? navScrolledPadding : navOriginalPadding

  return (
    <nav
      className={`${navBaseClasses} ${navPaddingClass} ${navScrolledBg}`}
    >
      
      <a href="#top">
        <Image src={isDarkMode?assets.Dlogo:assets.logo} className="w-28 cursor-pointer mr-14" alt={isDarkMode ? 'Dark logo' : 'Logo'} />
      </a>


      <ul className={`${desktopMenuBase} ${desktopMenuClass}`}>
        <li><a href="#top" className="font-Ovo">Home</a></li>
        <li><a href="#about" className="font-Ovo">About me</a></li>
        <li><a href="#services" className="font-Ovo">Services</a></li>
        <li><a href="#work" className="font-Ovo">My Work</a></li>
        <li><a href="#contact" className="font-Ovo">Contact me</a></li>
      </ul>

      
      <div className="flex items-center gap-4">
        <button onClick={() => setIsDarkMode(prev => !prev)}>
          <Image src={isDarkMode ? assets.lightmode : assets.moon} className="w-6" alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} />
        </button>

        <a
          href="#contact"
          className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo ${isDarkMode ? 'border-white/50' : ''}`}
        >
          Contact
          <Image src={assets.uparrow} className="w-3" alt="Up arrow" />
        </a>

        
        <button className="block md:hidden ml-3" onClick={() => setIsMenuOpen(true)}>
          <Image src={assets.menu} className="w-6" alt="Open menu" />
        </button>
      </div>

      
      <ul
        className={`
          flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen
          transition-transform duration-500
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          ${isDarkMode ? 'bg-[#11001f]' : 'bg-rose-50'}
        `}
      >
      
        <div className="absolute right-6 top-6">
          <button onClick={() => setIsMenuOpen(false)}>
            <Image src={assets.x} className="w-5 cursor-pointer" alt="Close menu" />
          </button>
        </div>

        
        <li><a href="#top" className="font-Ovo" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" className="font-Ovo" onClick={() => setIsMenuOpen(false)}>About me</a></li>
        <li><a href="#services" className="font-Ovo" onClick={() => setIsMenuOpen(false)}>Services</a></li>
        <li><a href="#work" className="font-Ovo" onClick={() => setIsMenuOpen(false)}>My Work</a></li>
        <li><a href="#contact" className="font-Ovo" onClick={() => setIsMenuOpen(false)}>Contact me</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

