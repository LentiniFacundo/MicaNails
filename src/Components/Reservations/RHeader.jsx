import { signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "../../utils/fireBaseConfig"

const RHeader = ({userLogged}) => {
    const handleSignOut = () => signOut(auth)

  return (
    <header className="p-5 flex flex-row justify-between">
        <div className="flex flex-row">
            <Link to={'/reservations'} className="flex flex-row" >
                <h2 className="text-primary font-black font-jakarta text-3xl
                    md:text-5xl">Turnos</h2><span className="material-symbols-outlined text-primary">qr_code_2</span>
            </Link>
        </div>
        <div className="flex flex-row gap-3">
            <Link to={'/'} >
                <button className="bg-primary flex hover:bg-primary/90 text-xs text-white w-fit p-3 rounded-lg font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer"><span className="material-symbols-outlined">home</span></button>
            </Link>
            { userLogged && <button onClick={handleSignOut} className="bg-primary flex hover:bg-primary/90 text-xs text-white w-fit p-3 rounded-lg font-bold transition-transform hover:scale-105 shadow-xl cursor-pointer"><span className="material-symbols-outlined">logout</span></button> }
        </div>
    </header>
  )
}

export default RHeader