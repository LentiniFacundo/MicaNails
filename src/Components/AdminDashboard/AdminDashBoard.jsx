import { Navigate } from "react-router-dom"
import AppointmentList from "./AppointmentList"
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../../utils/fireBaseConfig"
import { useEffect, useState } from "react"
import FreeAppointmentList from "./FreeAppointmentList"

const AdminDashBoard = ({userLogged, isAdmin}) => {
    if(!userLogged || !isAdmin) {
        return <Navigate to={'/'} replace />
    }

    const [appointmentList, setAppointmentList] = useState([])

    const getAllAppointments = () => {
        try {
            const q = query(collection(db, 'schedule'))
            return onSnapshot(q, (results) => {
                const docs = results.docs.map(result => ({
                    id: result.id, ...result.data()
                })).sort((a, b) => a.date.localeCompare(b.date))
                setAppointmentList(docs)
            })
        } catch (error) {
            setAppointmentList([])
            console.log(error)
        }
    }

    useEffect(() => {
        if(!userLogged || !isAdmin) {
            setAppointmentList([])
            return
        }
        const unsub = getAllAppointments()

        return () => {
            if(unsub) unsub()
        }
    }, [userLogged, isAdmin])

  return (
    <section className="flex flex-col w-full items-center min-h-screen my-4 ">
        <AppointmentList list={appointmentList} title={'Citas reservadas'} />
        <FreeAppointmentList list={appointmentList} title={'Citas libres'} />
    </section>
  )
}

export default AdminDashBoard