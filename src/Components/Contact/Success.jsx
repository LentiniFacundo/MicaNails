const Success = () => {
  return (
    <div className='fixed top-14 right-4 z-50 flex flex-row w-fit justify-center items-center p-4 border rounded-lg border-slate-200 bg-white shadow shadow-2xl animate-isSent-grow'>
        <span class="material-symbols-outlined text-lime-500">verified</span>
        <p className='text-slate-500'>ENVIADO!</p>
    </div>
  )
}

export default Success