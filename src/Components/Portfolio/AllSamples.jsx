import { useEffect } from "react"
import Item from "./Item"

const AllSamples = ({samples, hideSamples, showSamples}) => {

    useEffect(() => {
    if (showSamples) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
}, [showSamples])

    return (
    <section className={`flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-bgc/90 z-20 p-10 transition-all duration-500 ease-in-out
        ${showSamples ? 'opacity-100 visible': 'opacity-0 invisible pointer-events-none'}`}>
        <div className={`flex flex-col w-full max-w-[1200px] justify-center items-end transition-all duration-700 delay-100
            ${showSamples ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg text-base font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer my-4 w-fit" onClick={hideSamples}>Cerrar</button>
        </div>
        <div className={`flex-1 w-full overflow-y-auto gap-4 justify-center items-center max-w-[1200px] transition-all duration-700 delay-200
            ${showSamples ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            sm:flex sm:flex-row sm:flex-wrap`}>
        { samples.map( sample => <Item key={sample.id} sample={sample} /> ) }
        </div>
    </section>
  )
}

export default AllSamples