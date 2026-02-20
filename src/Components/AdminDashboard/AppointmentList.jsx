import AppointmentItem from "./AppointmentItem"

const AppointmentList = ({list, title}) => {

  return (
    <section className="w-full max-w-[1200px] flex flex-col my-4">
        <div className="border rounded-t-xl shadow-sm px-6 py-5 border-b-0 border-[#e6dbe0] flex items-center justify-between">
            <h3 className="font-jakarta capitalize font-black">{title}</h3>
        </div>
        <table className="font-jakarta text-left border border-[#e6dbe0]">
            <thead className="font-black uppercase bg-[#fcfafb] text-[#896175]">
                <tr>
                    <th className="p-2">cliente</th>
                    <th className="p-2">fecha</th>
                    <th className="p-2">hora</th>
                    <th className="p-2">email</th>
                    <th className="p-2 text-right">acciones</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-[#e6dbe0]">
                { list.filter(appointment => (appointment.booked)).map(appointment => (<AppointmentItem key={appointment.id} appointment={appointment}/>)) }
            </tbody>
        </table>
    </section>
)
}

export default AppointmentList