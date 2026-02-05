import React from 'react'
import abtImg from '../../assets/img/About.png'

const AboutMe = () => {
  return (
    <div className='w-full bg-primary/5 flex justify-center my-15'>
        <section id='about' className='flex flex-col justify-center items-center my-20 w-full max-w-[1200px] text-[#1b0d14]/60 gap-7
            md:grid md:grid-cols-2 md:grid-rows-2'>
            <div className='flex flex-col gap-4 px-4
                md:row-start-1 md:col-start-1 md:self-end md:mb-4'>
                <h3 className='border-b-2 border-b-ac-gold text-left text-black font-black font-jakarta text-2xl w-fit'>Sobre mi</h3>
                <p>Hola soy Mica Lentini, pero en mi familia me conocen como "Mi negra trola". Entre mis habilidades mas increibles se encuentra la de poder trapear, trabajar desde mi ordenador y mantener una converzacion telefonica todo al mismo tiempo.... 
                    ahh!!! y tambien se hacer uñas!! xD
                </p>
            </div>
            <div className='flex flex-col gap-10 px-4
                sm:flex-row
                md:row-start-2 md:col-start-1 md:self-start md:mt-4'>
                <article>
                    <span className='material-symbols-outlined text-primary text-4xl'>verified_user</span>
                    <h3 className='font-black text-black'>Calidad premium</h3>
                    <p>Productos de marcas nacionales lideres</p>
                </article>
                <article>
                    <span className='material-symbols-outlined text-primary'>brush</span>
                    <h3 className='font-black text-black'>Expertos creativos</h3>
                    <p>Artistas especializados en tendencias globales.</p>
                </article>
                <article>
                    <span className='material-symbols-outlined text-primary'>clean_hands</span>
                    <h3 className='font-black text-black'>Higiene total</h3>
                    <p>Protocolos médicos de esterilización.</p>
                </article>
            </div>
            <div className='flex flex-col justify-center items-center w-full max-w-[450px] h-[350px] rounded-lg overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/60 mt-7
                md:row-start-1 md:row-end-3 md:col-start-2 md:justify-self-center md:self-center'>
                <img src={abtImg} alt="About Me" className='w-full h-[350px] object-cover' />
            </div>
        </section>
    </div>
  )
}

export default AboutMe