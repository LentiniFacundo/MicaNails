import React from 'react'

const MainContainer = ({children}) => {
  return (
    <main className='flex flex-col justify-center items-center w-full bg-bgc px-2'>
        {children}
    </main>
  )
}

export default MainContainer