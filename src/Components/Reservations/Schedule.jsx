import { useEffect, useState } from "react"
import useLoading from "../../hooks/useLoading"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../../utils/fireBaseConfig"
import ScheduleList from "./ScheduleList"

const Schedule = ({userLogged}) => {
    const [reservations, setReservations] = useState([])
    const {isLoading, loading} = useLoading()

    const getReservationRealTime = () => {
        const q = query(collection(db, 'schedule'), where('booked', '==', false))
        const unsub = onSnapshot(q, (querySS) => {
            const docs = []
            querySS.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() })
            })
            setReservations(docs)
        })
        return () => unsub()
    }

    useEffect(() => {
        getReservationRealTime()
    }, [])

  return (
    <section className="flex flex-col justify-center w-full max-w-[1200px] items-center font-jakarta">
        {reservations.length > 0 ? <ScheduleList reservationList={reservations} userLogged={userLogged}/> : <h3>No hay turnos disponibles</h3>}
    </section>
  )
}

export default Schedule