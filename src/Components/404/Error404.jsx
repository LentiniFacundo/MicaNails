import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <section className="flex flex-col h-screen justify-center items-center font-jakarta gap-7 bg-bgc">
        <h3 className="text-primary text-center text-5xl font-black">Error 404!</h3>
        <p className="font-semibold">El sitio que buscas no fué encontrado!</p>
        <Link to={'/'}>
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg text-base font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer uppercase">inicio</button>
        </Link>
    </section>
  )
}

export default Error404