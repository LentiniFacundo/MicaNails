import React from 'react'

const Home = ({title, description}) => {
  return (
    <section id='home' className='flex flex-col justify-center items-center bgmh bg-no-repeat bg-cover bg-center m-4 w-full max-w-[1200px] h-[560px] bg-[#1b0d14] rounded-xl mb-15 shadow-2xl shadow-slate-500 scroll-mt-24'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='border-2 border-primary/30 rounded-full text-primary bg-primary/20 text-xs font-bold uppercase px-4 py-1 max-w-[130px]'>
                <p>premium care</p>
            </div>
            <h2 className='text-4xl font-black text-white font-jakarta text-center
                md:text-6xl'>{title}</h2>
            <p className='text-lg font-light text-white/90 text-center
                md:text-xl'>{description}</p>
            <button className='bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg text-base font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer'>Reservar turno</button>
        </div>
    </section>
  )
}

export default Home