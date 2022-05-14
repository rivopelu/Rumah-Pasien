import React from 'react'

const BtnComp = ({ className, title, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-700 duration-200 ${className}`}>{title}</button>
  )
}

export default BtnComp