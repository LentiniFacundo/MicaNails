
const Appointments = ({appointments}) => {
  return (
    <section className="my-4 flex flex-col justify-center items-center font-jakarta w-full max-w-300">
        <div className="flex flex-col justify-center">
            <h3 className="text-neutral-800 font-black">Reservadas</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-4
            sm:flex-row">
            {appointments.map(appointment => (
                <article key={appointment.id} className="border border-neutral-50 bg-white rounded-lg shadow-sm p-4 my-2 text-slate-600 font-black hover:bg-slate-100 hover:shadow-2xl hover:scale-110 transition-all">
                    <div className="font-jakarta flex flex-row gap-2 text-black">
                        <span className="material-symbols-outlined text-primary" style={{fontVariationSettings:"'FILL' 1" }}>check_circle</span>
                        <p>Confirmado</p>
                    </div>
                    <p>Día: {appointment.date}</p>
                    <p>Hora: {appointment.time}</p>
                </article>
            ))}
        </div>
    </section>
  )
}

export default Appointments