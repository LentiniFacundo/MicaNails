import React from 'react'

const Item = ({sample}) => {
  return (
    <article className='flex flex-col justify-center items-start rounded-lg overflow-hidden shadow-2xs shadow-slate-500 border border-slate-100 w-full relative'>
        <header className='w-full h-[250px] overflow-hidden hover:scale-110 duration-700'>
            <img src={sample.url} alt={sample.title} className='w-full h-full object-cover'/>
        </header>
        <div className='absolute bottom-2 flex flex-col justify-center items-center px-2'>
        <div className=''>
            <h3>{sample.title}</h3>
            <p>{sample.title}</p>
        </div>
        </div>
    </article>
  )
}

export default Item