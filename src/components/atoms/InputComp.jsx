import React from 'react'

const InputComp = ({placeholder, onChange, className, type}) => {
  return (
   <input type={type} className={`border  border-gray-400 rounded-sm focus:border-blue-500 focus:outline-none  px-3 py-1 ${className}`} placeholder={placeholder} onChange={onChange}/>
  )
}

export default InputComp