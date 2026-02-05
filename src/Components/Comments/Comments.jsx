import React from 'react'

const Comments = () => {
  return (
    <section className='flex flex-col justify-center items-center w-full max-w-[1200px] mb-15'>
        <div>
            <h3 className='font-black font-jakarta text-center text-2xl w-fit'>Lo que dicen nuestras clientas</h3>
        </div>
        <div>
            <span className='material-symbols-outlined text-ac-gold font-extrabold'>star</span>
            <span className='material-symbols-outlined text-ac-gold font-extrabold'>star</span>
            <span className='material-symbols-outlined text-ac-gold font-extrabold'>star</span>
            <span className='material-symbols-outlined text-ac-gold font-extrabold'>star</span>
        </div>
        <div className='flex flex-col gap-8 sm:flex-row w-full justify-center items-center my-15 hyphens-auto'>
            <div className='text-lg flex flex-wrap bg-white border border-slate-300 rounded-lg p-4 font-jakarta italic w-full max-w-[300px] md:text-md'>
                <p className='max-w-prose leading-relaxed'>"La mejor manicura que me han hecho. La atención al detalle y la limpieza son excepcionales."</p>
            </div>
            <div className='text-lg flex flex-wrap bg-white border border-slate-300 rounded-lg p-4 font-jakarta italic w-full max-w-[300px] md:text-md'>
                <p className='max-w-prose leading-relaxed'>"Diseños increíbles que duran semanas intactos. El ambiente del estudio es súper relajante."</p>
            </div>
            <div className='text-lg flex flex-wrap bg-white border border-slate-300 rounded-lg p-4 font-jakarta italic w-full max-w-[300px] md:text-md'>
                <p className='max-w-prose leading-relaxed'>"Excelente servicio al cliente. Siempre salgo feliz con mis uñas. Muy profesional."</p>
            </div>
        </div>
    </section>
  )
}

export default Comments