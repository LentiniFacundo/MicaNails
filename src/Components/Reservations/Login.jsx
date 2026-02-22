import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "../../utils/fireBaseConfig"
import { useEffect, useState } from "react"

const Login = ({handleUserData}) => {
    const [formData, setFormData] = useState({ email: "", password: ""})

    const provider = new GoogleAuthProvider()

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleLogInWithGoogle = async () => {
        let result = await signInWithPopup(auth, provider)
        handleUserData(result.user)
    }

    const handleLogInWithEmail = async (e) => {
        e.preventDefault()
        try {
            const credential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
            credential.user.displayName = 'ADMIN'
            handleUserData(credential.user)
        } catch (error) {
            console.log(error)
        }
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
                <button onClick={handleLogInWithGoogle}
                    className='flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300 w-full max-w-xs mx-auto cursor-pointer'>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className='w-5 h-5' />
                    <span>Continuar con Google</span>
                </button>
            </div>
            <div className='flex flex-col justify-center my-4 border border-gray-300 p-3 rounded-lg'>
                <form onSubmit={handleLogInWithEmail} className="flex flex-col">
                    <input id="email" name="email" onChange={handleOnChange}
                        className="border border-gray-300 p-2 rounded-lg" type="text" placeholder="admin@micanails.com"/>
                    <input id="password" name="password" onChange={handleOnChange}
                        className="border border-gray-300 p-2 rounded-lg" type="password" placeholder="admin123" />
                    <button type="submit"
                        className='flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300 w-full max-w-xs mx-auto cursor-pointer'>
                        <span className="material-symbols-outlined">stacked_email</span>
                        <span>Continuar con Email</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login