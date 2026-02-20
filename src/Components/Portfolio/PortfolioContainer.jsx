import { useEffect, useState } from 'react'
import Item from './Item'
import getSamples from '../../utils/fetchAPI'
import useLoading from '../../hooks/useLoading'
import AllSamples from './AllSamples'

const PortfolioContainer = ({title}) => {
    const [samples, setSamples] = useState([])
    const [showSamples, setShowSamples] = useState(false)
    const {isLoading, loading} = useLoading()

    useEffect(() => {
        getSamples()
            .then(data => {
                loading.show()
                setSamples(data)
            })
            .finally(() => loading.hide())
    }, [])

    const showAllSamples = () => setShowSamples(true)
    const hideAllSamples = () => setShowSamples(false)

  return (
    <section id='portfolio' className='flex flex-col bg-bgc w-full max-w-[1200px] mt-4'>
        <div className='flex flex-row justify-between content-center font-black font-extrabold text-2xl p-4'>
            <h3 className='border-b-2 border-b-ac-gold'>{title}</h3>
            <div className='flex flex-row justify-end'>
                <button className='text-primary underline text-sm cursor-pointer' onClick={showAllSamples}>Ver todos</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-7 mt-4
            sm:grid sm:grid-cols-2 sm:grid-flow-row sm:justify-items-center sm:justify-around
            md:flex md:flex-row'>
            { samples.length > 0 ? samples.slice(0, 4).map(sample => <Item key={sample.id} sample={sample} />) : loading.screen }
            <AllSamples samples={samples} hideSamples={hideAllSamples} showSamples={showSamples} />
        </div>
    </section>
  )
}

export default PortfolioContainer