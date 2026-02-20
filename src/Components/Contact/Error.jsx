const Error = () => {
  return (
    <div className='fixed top-14 right-4 z-50 flex flex-row w-fit justify-center items-center p-4 border rounded-lg border-slate-200 bg-white shadow shadow-2xl animate-isSent-grow'>
        <span class="material-symbols-outlined text-red-600">error</span>
        <p className='text-slate-500'>ERROR!!</p>
    </div>
  )
}

export default Error