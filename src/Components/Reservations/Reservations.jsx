import { useEffect, useState } from 'react'
import { auth, db } from '../../utils/fireBaseConfig'
import useLoading from '../../hooks/useLoading'
import Login from './Login'
import Footer from '../Footer/Footer'
import RHeader from './RHeader'
import { onAuthStateChanged } from 'firebase/auth'
import Schedule from './Schedule'
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore'
import Appointments from './Appointments'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import AdminDashBoard from '../AdminDashboard/AdminDashBoard'

export const Reservations = () => {
    const [userLogged, setUserLogged] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [appointments, setAppointments] = useState([])
    const {isLoading, loading} = useLoading()
    
    const handleUserData = data => setUserLogged(data)

    const userIsAdmin = async (user) => {
        if(!user) return
        try {
            const userRef = doc(db, 'users', user.uid)
            const adminDoc = await getDoc(userRef)
            if(adminDoc.exists() && adminDoc.data().role === 'admin') {
                setIsAdmin(true)
            }else {
                setIsAdmin(false)
            }
        } catch (error) {
            setIsAdmin(false)
        }
    }

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
            setAppointments([])
        }
    }

    useEffect(() => {
        loading.show()
        const logOut = onAuthStateChanged(auth, (alreadyLoggedIn) => {
            if(alreadyLoggedIn) {
                setUserLogged(alreadyLoggedIn)
                if(alreadyLoggedIn) userIsAdmin(alreadyLoggedIn)
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
        <section className='flex flex-col min-h-screen w-full bg-white'>
            <RHeader userLogged={userLogged} />
            {userLogged && (
                <section className="flex flex-row w-full justify-start items-center gap-4 py-2 px-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-400">
                        <img src={userLogged.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-slate-700 leading-none">{userLogged.displayName}</p>
                        {isAdmin && (
                            <Link to="admin" className="text-xs text-pink-600 font-bold hover:underline mt-1">
                                🛠️ MODO ADMINISTRADOR
                            </Link>
                        )}
                    </div>
                </section>
            )}
            <main className='flex-1 flex flex-col'>
                {isLoading ? (
                    loading.screen
                ) : !userLogged ? (
                    <div className="flex-1 flex items-center justify-center">
                        <Login handleUserData={handleUserData} />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={
                            <div className="flex flex-col items-center w-full py-8">
                                <Schedule userLogged={userLogged} />
                                <div className={`mt-8 w-full max-w-[1200px] transition-all duration-700 ${appointments.length > 0 ? 'opacity-100' : 'opacity-0'}`}>
                                    {appointments.length > 0 && <Appointments appointments={appointments} />}
                                </div>
                            </div>
                        } />
                        {isAdmin && (
                            <Route path="admin" element={
                                <AdminDashBoard userLogged={userLogged} isAdmin={isAdmin} />
                            } />
                        )}
                        <Route path="*" element={<Navigate to="/reservations" replace />} />
                    </Routes>
                )}
            </main>
            <Footer />
        </section>
    )
}