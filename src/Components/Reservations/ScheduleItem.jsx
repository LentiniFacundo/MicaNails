import { useState } from "react"

const ScheduleItem = ({reservation, isSelected, onSelect}) => {
  const handleSelected = () => {
    onSelect()
  }

  return (
    <button onClick={handleSelected}
      className={!isSelected 
        ? 'flex items-center gap-3 cursor-pointer font-black text-sm bg-primary border-transparent text-white hover:bg-primary/90 rounded-lg p-2'
        : 'flex items-center gap-3 cursor-pointer font-black text-sm bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 border-white text-white rounded-lg p-2'
      }>
      <span>{reservation.date}</span>||
      <span>{reservation.time}</span>
    </button>
  )
}

export default ScheduleItem