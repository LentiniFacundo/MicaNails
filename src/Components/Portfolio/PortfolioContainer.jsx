import React, { useEffect, useState } from 'react'
import Item from './Item'
import getSamples from '../../utils/fetchAPI'

const PortfolioContainer = ({title}) => {
    const [samples, setSamples] = useState([])

    useEffect(() => {
        getSamples()
            .then(data => setSamples(data))
    }, [])

  return (
    <section id='portfolio' className='flex flex-col bg-bgc w-full max-w-[1200px] mt-4'>
        <div className='flex flex-row justify-between content-center font-black font-extrabold text-2xl p-4'>
            <h3 className='border-b-2 border-b-ac-gold'>{title}</h3>
            <div className='flex flex-row justify-end'>
                <a className='text-primary underline text-sm' href="#">Ver todos</a>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-7 mt-4
            sm:grid sm:grid-cols-2 sm:grid-flow-row sm:justify-items-center sm:justify-around
            md:flex md:flex-row'>
            {
                samples.length > 0 ? samples.slice(0, 4).map(sample => <Item key={sample.id} sample={sample} />) : <p>...cargando</p>
            }
        </div>
    </section>
  )
}

export default PortfolioContainer