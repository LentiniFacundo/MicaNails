import Item from "./Item"

const AllSamples = ({samples, hideSamples}) => {

    return (
    <section className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-bgc/90 z-20 p-10">
        <div className="flex flex-col w-full max-w-[1200px] justify-center items-end">
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg text-base font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer my-4 w-fit" onClick={hideSamples}>Cerrar</button>
        </div>
        <div className="overflow-y-auto gap-4 justify-center items-center max-w-[1200px]
            sm:flex sm:flex-row sm:flex-wrap">
        { samples.map( sample => <Item key={sample.id} sample={sample} /> ) }
        </div>
    </section>
  )
}

export default AllSamples