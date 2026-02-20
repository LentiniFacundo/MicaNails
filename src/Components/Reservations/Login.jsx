import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../utils/fireBaseConfig"

const Login = ({handleUserData}) => {
    const provider = new GoogleAuthProvider()

    const handleLogIn = async () => {
        let result = await signInWithPopup(auth, provider)
        handleUserData(result.user)
    }

  return (
    <section className='flex flex-col justify-center items-center w-full flex-1'>
        <div className="size-16 bg-primary rounded-3xl flex justify-center items-center mb-6 shadow-lg shadow-primary">
            <span className="material-symbols-outlined text-white !text-4xl" style={{fontVariationSettings:"'FILL' 1"}} >back_hand</span>
        </div>
        <div className="border rounded-3xl p-7 bg-white border-primary/10">
            <div className="flex flex-col justify-center items-center">
                <h3 className='font-black font-jakarta text-2xl my-4'>Iniciar sesión</h3>
                <p className="text-neutral-500/70 text-lg leading-relaxed font-jakarta">Accede a tu cuenta para agendar una cita</p>
            </div>
            <div className='flex flex-row justify-center my-4'>
                <button onClick={handleLogIn}
                    className='flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300 w-full max-w-xs mx-auto cursor-pointer'>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className='w-5 h-5' />
                    <span>Continuar con Google</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Login