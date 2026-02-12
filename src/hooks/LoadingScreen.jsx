const LoadingScreen = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
        <div className="w-32 h-32 border-8 border-primary/50 border-t-primary rounded-full p-1 animate-loading">
            <div className="w-full h-full border-8 border-slate-500/50 border-b-slate-500 rounded-full animate-loading-2"></div>
        </div>
    </div>
  )
}

export default LoadingScreen