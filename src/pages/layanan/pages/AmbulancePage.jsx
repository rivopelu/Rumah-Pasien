import { faCheck, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AmbulanceImg from '../img/AmbulanceImg.png'
import { dataAmbulance } from '../../../utils/dataAmbulance'
const AmbulancePage = () => {
    return (
        <div className=''>
            <div className='lg:my-10'>

                <h1 className='text-center  lg:text-3xl font-bold'>Ambulance</h1>
                <h1 className='text-center '>Daftar ketersediaan Ambulance</h1>
            </div>
            <div className='lg:flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-3'>


                {
                    dataAmbulance.map((item) => (
                        <div key={item.id} className="card border border-gray-300 bg-white rounded-lg lg:w-[40%]  px-3 py-2 shadow-md mt-3 lg:mt-0 flex">
                            <img className='w-16' src={AmbulanceImg} alt="" />
                            <div className="kanan ml-4 flex flex-col justify-center">
                                <h1 className=' font-bold'>{item.name}</h1>
                                <div className='flex  gap-1 items-center'>
                                    <p className='text-sm'>Ketersedian</p>
                                    {(() => {
                                        if (item.ketersediaan === true) {
                                            return (
                                                <FontAwesomeIcon icon={faCheckCircle} className='text-sm text-green-500' />
                                            )
                                        } else {
                                            return (
                                                <FontAwesomeIcon icon={faTimesCircle} className='text-sm text-red-500' />
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AmbulancePage