import React, { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className='w-full sticky left-0 top-0 right-0 flex flex-col flex-wrap border-b-[0.1px] border-b-slate-400/50
        md:flex-row md:justify-center md:content-center'>
        <div className='border-2 border-primary bg-primary w-[45px] h-[45px] gap-1 rounded-full  p-0.5 flex flex-col justify-center items-center fixed bottom-[3vh] left-[50vw] -translate-x-[50%] z-50
            md:hidden' onClick={toggleMenu}>
            <div className='border-2 border-white w-[80%]'></div>
            <div className='border-2 border-white w-[90%]'></div>
            <div className='border-2 border-white w-[80%]'></div>
        </div>
        <ul className={`flex flex-col gap-5 text-md ${isOpen ? 'hidden' : ''}
            md:flex-row md:flex md:text-sm`}>
            <li><a className='text- black font-jakarta transition-colors duration-300 ease-in-out font-semibold hover:text-primary
                md: text-xs' onClick={toggleMenu} href="#home">Inicio</a></li>
            <li><a className='text- black font-jakarta transition-colors duration-300 ease-in-out font-semibold hover:text-primary
                md: text-xs' onClick={toggleMenu} href="#about">Sobre mi</a></li>
            <li><a className='text- black font-jakarta transition-colors duration-300 ease-in-out font-semibold hover:text-primary
                md: text-xs' onClick={toggleMenu} href="#portfolio">Trabajos</a></li>
            <li><a className='text- black font-jakarta transition-colors duration-300 ease-in-out font-semibold hover:text-primary
                md: text-xs' onClick={toggleMenu} href="#contact">Contacto</a></li>
        </ul>
    </nav>
  )
}

export default NavBar