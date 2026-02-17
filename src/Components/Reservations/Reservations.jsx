import { useEffect, useState } from 'react'
import { auth, db } from '../../utils/fireBaseConfig'
import useLoading from '../../hooks/useLoading'
import Login from './Login'
import Footer from '../Footer/Footer'
import RHeader from './RHeader'
import { onAuthStateChanged } from 'firebase/auth'
import Schedule from './Schedule'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import Appointments from './Appointments'

export const Reservations = () => {
    const [userLogged, setUserLogged] = useState(null)
    const [appointments, setAppointments] = useState([])
    const {isLoading, loading} = useLoading()
    
    const handleUserData = data => setUserLogged(data)
    const getAppointments = (userEmail) => {
        try {
            const q = query(collection(db, 'schedule'), where('email', '==', userEmail), where('booked', '==', true))
            return onSnapshot(q, (results) => {
                const docs = []
                results.forEach((result) => {
                    docs.push({id: result.id, ...result.data()})
                })
                setAppointments(docs)
            })
        } catch (error) {
            console.log(error)
            setAppointments([])
        }
    }

    useEffect(() => {
        loading.show()
        const logOut = onAuthStateChanged(auth, (alreadyLoggedIn) => {
            if(alreadyLoggedIn) {
                setUserLogged(alreadyLoggedIn)
            } else {
                setUserLogged(null)
            }
            loading.hide()
        })
        return logOut
    }, [])

    useEffect(() => {
        if(!userLogged?.email) {
            setAppointments([])
            return
        }
        const unsub = getAppointments(userLogged.email)
        return () => {
            if(unsub) unsub()
        }

    }, [userLogged?.email])

  return (
    <section className='flex flex-col h-screen w-full bg-white'>
        <RHeader userLogged={userLogged}/>
        {userLogged &&
            <section className="flex flex-row w-full justify-start items-center gap-2 py-2 px-4">
                <div className="w-fit rounded-full overflow-hidden">
                    <img src={userLogged.photoURL} alt="Profile Photo" className="w-10 h-10 object-cover" />
                </div>
                <div>
                    <p className="font-black text-neutral-500">{userLogged.displayName}</p>
                </div>
            </section>
        }
        <main className='flex-1 flex flex-col justify-center items-center'>
            { isLoading ? loading.screen : userLogged ? <Schedule userLogged={userLogged} /> : <Login handleUserData={ handleUserData }/> }
            <div className={`flex flex-col items-center w-full justify-center transition-all duration-1000 delay-1000 ${appointments.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            { appointments.length > 0 && <Appointments appointments={appointments} /> }
            </div>
        </main>
        <Footer />
    </section>
  )
}
