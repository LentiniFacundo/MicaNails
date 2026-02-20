import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../utils/fireBaseConfig.js"

const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, 'schedule', id))
  } catch (error) {
    console.log(error)
  }
}

const AppointmentItem = ({appointment}) => {
  return (
    <tr>
        {appointment?.booked && <td className='p-2'>{appointment.name}</td>}
        <td className='p-2'>{appointment.date}</td>
        <td className='p-2'>{appointment.time}</td>
        {appointment?.booked && <td className='p-2'>{appointment.email}</td>}
        <td className='p-2 flex justify-end'>
            <button onClick={() => handleDelete(appointment.id)}
            className='flex flex-row cursor-pointer'><span className='material-symbols-outlined text-primary' style={{fontVariationSettings:"'FILL' 1"}}>delete</span>Eliminar</button>
        </td>
    </tr>
  )
}

export default AppointmentItem