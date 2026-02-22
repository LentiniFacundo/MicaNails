import { useState } from "react"
import ScheduleItem from "./ScheduleItem"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../utils/fireBaseConfig"
import useLoading from "../../hooks/useLoading"


const ScheduleList = ({ reservationList, userLogged}) => {
    const [selected, setSelected] = useState(null)
    const [isReserved, setIsReserved] = useState(false)
    const {isLoading, loading} = useLoading()

    const handleReserve = async () => {
        if(!selected) return
        try {
            loading.show()
            const reservationRef = doc(db, 'schedule', selected.id)
            await updateDoc(reservationRef, {
                booked: true,
                name: userLogged.displayName,
                email: userLogged.email
            })
            loading.hide()
            setIsReserved(true)
            setSelected(null)
            setTimeout(() => {
                setIsReserved(false)
            }, 3000)
        } catch (error) {
            console.log(error)
            loading.hide()
        }
    }

  return (
    <section className="w-full p-2 my-4 border border-neutral-50 bg-bgc shadow-sm">
        <header className="my-4 flex justify-center">
            <h3 className="text-neutral-800 font-black">Turnos disponibles</h3>
        </header>
        <main className="flex flex-col my-4 w-full gap-3 justify-center items-center">
            <div className="flex flex-col flex-wrap gap-3 justify-center items-center
                sm:flex-row">
            {  reservationList.filter(reservation => !reservation.booked).sort((a, b) => a.date.localeCompare(b.date)).map(reservation => (
                    <ScheduleItem key={reservation.id} reservation={reservation} isSelected={selected?.id === reservation.id} onSelect={() => setSelected(reservation)} />
            )) }
            </div>
            <div className={`flex my-2 justify-center transition-all duration-500 ${selected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <button onClick={handleReserve}
                    className={`bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-lg text-base font-bold transition-transform
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 shadow-xl cursor-pointer'}`}>
                    {isLoading ? 'Procesando...' : 'Reservar'}
                </button> 
            </div>
            <div className={`flex my-2 justify-center transition-all duration-500 ${isReserved ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-green-600 font-bold">Reserva exitosa! <span className="material-symbols-outlined text-green-600" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span></p>
            </div>
        </main>
    </section>
  )
}

export default ScheduleList