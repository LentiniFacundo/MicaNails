import { useEffect, useState } from "react"
import AppointmentItem from "./AppointmentItem"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../utils/fireBaseConfig"


const FreeAppointmentList = ({list, title}) => {

    const [dataForm, setDataForm] = useState({
        booked: false,
        date: "",
        time: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setDataForm({...dataForm, [name]: value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!dataForm.date || !dataForm.time) return
        try {
            await addDoc(collection(db, 'schedule'), dataForm)
            setDataForm({booked: false, date: "", time: ""})
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className="w-full max-w-[1200px] flex flex-col my-4">
        <div className="border rounded-t-xl shadow-sm px-6 py-5 border-b-0 border-[#e6dbe0] flex items-center justify-between">
            <h3 className="font-jakarta capitalize font-black">{title}</h3>
        </div>
        <table className="font-jakarta text-left border border-[#e6dbe0]">
            <thead className="font-black uppercase bg-[#fcfafb] text-[#896175]">
                <tr>
                    <th className="p-2">fecha</th>
                    <th className="p-2">hora</th>
                    <th className="p-2 text-right">acciones</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-[#e6dbe0]">
                { list.filter(appointment => (!appointment.booked)).map(appointment => (<AppointmentItem key={appointment.id} appointment={appointment}/>)) }
            </tbody>
        </table>
        <div className="w-full my-4 border border-[#e6dbe0] bg-[#fcfafb] text-[#896175] rounded-t-xl p-2">
            <h3 className="font-jakarta text-center text-black capitalize font-black">nueva cita</h3>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col justify-center items-center w-full gap-10
                    sm:flex-row">
                        <label htmlFor="date">Fecha</label>
                        <input id="date" type="date" name="date" required className="w-32" onChange={handleChange} />
                        <label htmlFor="time">Hora</label>
                        <input id="time" type="time" name="time" required className="w-32" onChange={handleChange} />
                        <button type="submit" className="flex justify-center gap-1 cursor-pointer rounded-lg w-fit p-2 border hover:bg-slate-300"><span className="material-symbols-outlined text-primary" style={{fontVariationSettings:"'FILL' 1"}}>add_ad</span>Agregar</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default FreeAppointmentList