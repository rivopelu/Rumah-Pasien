import React from 'react'
import { dataRs } from '../../../utils/dataRs'
import rsImg from '../img/Rs.png'
const RuangRawat = () => {
    return (
        <div className=''>
            <div className='lg:my-10'>

                <h1 className='text-center  lg:text-3xl font-bold'>Layanan Ruang Inap</h1>
                <h1 className='text-center '>Daftar ketersediaan ruang rawat inap</h1>
            </div>
            <div className='lg:flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-3'>


                {
                    dataRs.map((item) => (
                        <div key={item.id} className="card border border-gray-300 bg-white rounded-lg lg:w-[40%]  px-3 py-2 shadow-md mt-3 lg:mt-0 flex">
                            <img className='w-16' src={rsImg} alt="" />
                            <div className="kanan ml-4 flex flex-col justify-center">
                                <h1 className=' font-bold'>{item.name}</h1>
                                <div className='flex  gap-1  flex-col'>
                                    <p className='text-sm'>Ketersedian Ranjang</p>
                                    <p>{item.ranjangTersedia}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RuangRawat